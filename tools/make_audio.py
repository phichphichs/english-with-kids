#!/usr/bin/env python3
"""Sinh file mp3 giọng nữ Mỹ (neural) cho mọi câu tiếng Anh trong app.

Chạy:  .venv/bin/python tools/make_audio.py
Cần internet khi chạy (chỉ lần tạo file). Câu đã có mp3 sẽ được bỏ qua, nên thêm câu mới rồi chạy lại là đủ.
Kết quả: thư mục audio/*.mp3 và file audio-index.js (bảng câu -> file).
"""
import asyncio, hashlib, json, os, subprocess, sys
import edge_tts

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(HERE, "audio")
VOICE = "en-US-AvaNeural"   # giọng nữ Mỹ, ấm và rõ. Đổi thử: en-US-JennyNeural, en-US-AriaNeural
RATE = "-12%"               # đọc chậm hơn chút cho bé dễ nghe
PARALLEL = 6


def fname(text):
    return hashlib.sha1((VOICE + RATE + text).encode("utf-8")).hexdigest()[:12] + ".mp3"


async def one(sem, text, path, fails):
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, VOICE, rate=RATE).save(path + ".tmp")
                os.replace(path + ".tmp", path)
                return
            except Exception as e:  # mạng chập chờn: thử lại
                last = e
                await asyncio.sleep(1.5 * (attempt + 1))
        fails.append((text, str(last)))


async def main():
    texts = json.loads(subprocess.check_output(["node", os.path.join(HERE, "tools", "extract-texts.js")]))
    os.makedirs(AUDIO, exist_ok=True)
    todo = [(t, os.path.join(AUDIO, fname(t))) for t in texts if not os.path.exists(os.path.join(AUDIO, fname(t)))]
    print("Tổng %d câu, cần tạo %d." % (len(texts), len(todo)))
    sem, fails = asyncio.Semaphore(PARALLEL), []
    tasks = [asyncio.ensure_future(one(sem, t, p, fails)) for t, p in todo]
    for i, f in enumerate(asyncio.as_completed(tasks), 1):
        await f
        if i % 100 == 0 or i == len(tasks):
            print("  %d/%d" % (i, len(tasks)))
    index = {t: fname(t) for t in texts if os.path.exists(os.path.join(AUDIO, fname(t)))}
    with open(os.path.join(HERE, "audio-index.js"), "w", encoding="utf-8") as f:
        f.write("// Tự sinh bởi tools/make_audio.py - đừng sửa tay.\nwindow.AUDIO_MAP = " + json.dumps(index, ensure_ascii=False) + ";\n")
    print("Xong: %d file trong bảng, %d lỗi." % (len(index), len(fails)))
    for t, e in fails[:5]:
        print("  lỗi:", t, e)
    return 1 if fails else 0

sys.exit(asyncio.run(main()))
