// Luyện phát âm: ghi âm + nhận dạng giọng nói của trình duyệt (Web Speech API) + chấm điểm.
// Điểm = tỉ lệ từ bạn nói khớp với câu mẫu (so khớp từng từ), nhân với độ tin cậy của bộ nhận dạng.
// Đây là ước tính dựa trên việc máy "nghe hiểu" được bạn, không phải chấm từng âm vị.
(function () {
  const WORD = /[A-Za-z0-9]+(?:['’][A-Za-z]+)?/g;
  const words = s => (s.match(WORD) || []);
  const lower = w => w.toLowerCase().replace(/’/g, "'");

  // Căn chỉnh theo khoảng cách chỉnh sửa trên mảng từ. Trả về từng từ mẫu: đúng/sai, nghe thành gì.
  function align(target, spoken) {
    const t = target.map(lower), s = spoken.map(lower), n = t.length, m = s.length;
    // Thay một từ bằng từ khác tốn 0.4-1.0 tùy độ giống nhau về chữ, nên "moaning" được ghép với "morning"
    const charDist = (a, b) => {
      const p = Array.from({ length: a.length + 1 }, (_, i) => [i]);
      for (let j = 1; j <= b.length; j++) p[0][j] = j;
      for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
        p[i][j] = Math.min(p[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1), p[i - 1][j] + 1, p[i][j - 1] + 1);
      return p[a.length][b.length];
    };
    const sub = (a, b) => a === b ? 0 : 0.4 + 0.6 * charDist(a, b) / Math.max(a.length, b.length);
    const d = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) d[i][0] = i;
    for (let j = 0; j <= m; j++) d[0][j] = j;
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
      d[i][j] = Math.min(d[i - 1][j - 1] + sub(t[i - 1], s[j - 1]), d[i - 1][j] + 1, d[i][j - 1] + 1);
    }
    const res = []; let i = n, j = m, extras = 0;
    const near = (x, y) => Math.abs(x - y) < 1e-9;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && near(d[i][j], d[i - 1][j - 1] + sub(t[i - 1], s[j - 1]))) {
        const ok = t[i - 1] === s[j - 1];
        res.push({ word: target[i - 1], ok, heard: ok ? null : spoken[j - 1] }); i--; j--;
      } else if (i > 0 && near(d[i][j], d[i - 1][j] + 1)) {
        res.push({ word: target[i - 1], ok: false, heard: null }); i--;
      } else { extras++; j--; }
    }
    return { items: res.reverse(), extras };
  }

  function score(targetText, spokenText, confidence) {
    const target = words(targetText), spoken = words(spokenText);
    if (!target.length) return { score: 0, items: [], extras: 0 };
    const a = align(target, spoken);
    const correct = a.items.filter(x => x.ok).length;
    const wordScore = correct / (target.length + 0.5 * a.extras);
    const conf = confidence > 0 ? Math.min(1, confidence) : 1; // một số trình duyệt không trả độ tin cậy (0)
    return { score: Math.round(100 * wordScore * (0.85 + 0.15 * conf)), items: a.items, extras: a.extras, correct };
  }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const label = sc => sc >= 90 ? ["Xuất sắc", "ok"] : sc >= 75 ? ["Tốt", "ok"] : sc >= 50 ? ["Khá, luyện thêm nhé", "warn"] : ["Cần luyện thêm", "bad"];

  // Nhận xét bằng quy tắc: so chữ của từ mẫu với chữ máy nghe được để đoán lỗi thường gặp của người Việt.
  // Không phân tích âm thanh thật nên chỉ là gợi ý.
  function tips(items, extras, sc) {
    const bad = items.filter(x => !x.ok), out = [];
    out.push(sc >= 90 ? "Rất tốt! Máy nghe đúng gần hết các từ. Thử nói nhanh và tự nhiên hơn."
      : sc >= 75 ? "Khá tốt, chỉ còn vài từ cần chỉnh."
      : sc >= 50 ? "Bạn đã nói đúng khoảng một nửa câu. Nghe mẫu rồi đọc chậm từng cụm."
      : "Hãy nghe mẫu vài lần, rồi đọc chậm từng cụm từ trước khi đọc cả câu.");
    bad.slice(0, 5).forEach(x => {
      const w = x.word.toLowerCase().replace(/’/g, "'"), h = (x.heard || "").toLowerCase().replace(/’/g, "'");
      let t;
      if (!x.heard) t = "máy không nghe thấy từ này. Có thể bạn nói quá nhỏ, quá nhanh hoặc bỏ sót từ.";
      else if (/s$/.test(w) && h === w.replace(/(e)?s$/, "")) t = `thiếu âm cuối /s/ hoặc /z/. Người Việt hay bỏ âm cuối, hãy bật hơi “s” ở cuối từ.`;
      else if (/ed$/.test(w) && (h === w.slice(0, -2) || h === w.slice(0, -1))) t = "thiếu âm cuối -ed (đọc là /t/, /d/ hoặc /ɪd/ tùy từ).";
      else if (/th/.test(w) && !/th/.test(h)) t = `âm “th”: đặt đầu lưỡi giữa hai hàm răng rồi thổi nhẹ, đừng đọc thành t/d/s. Máy nghe thành “${x.heard}”.`;
      else if (h.length < w.length && w.startsWith(h) && !/[aeiou]$/.test(w)) t = `thiếu phụ âm cuối (máy nghe “${x.heard}”). Hãy đọc rõ âm cuối từ.`;
      else if ((/r/.test(w) && /l/.test(h) && !/r/.test(h)) || (/l/.test(w) && /r/.test(h) && !/l/.test(h))) t = `dễ lẫn /r/ và /l/. /r/ cong lưỡi, không chạm vòm miệng; /l/ chạm đầu lưỡi sau răng cửa. Máy nghe thành “${x.heard}”.`;
      else if (/v/.test(w) && !/v/.test(h)) t = `âm /v/: răng trên chạm nhẹ môi dưới và có rung. Máy nghe thành “${x.heard}”.`;
      else t = `máy nghe thành “${x.heard}”. Nghe mẫu và đọc chậm từng âm tiết, chú ý nguyên âm và âm cuối.`;
      out.push(`“${x.word}”: ${t}`);
    });
    if (bad.length > 5) out.push(`Còn ${bad.length - 5} từ khác chưa khớp, xem phần tô đỏ ở trên.`);
    if (extras) out.push("Bạn nói thừa hoặc bị nhận nhầm một số từ. Hãy đọc đúng theo câu mẫu.");
    return out;
  }

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
    try {
      const t = document.createElement("textarea"); t.value = text; t.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(t); t.select(); const ok = document.execCommand("copy"); t.remove(); return ok;
    } catch (e) { return false; }
  }

  let active = null; // phiên đang ghi âm
  function stop() {
    if (!active) return;
    const a = active; active = null; a.cancelled = true;
    try { a.recognition && a.recognition.abort(); } catch (e) {}
    try { a.rec && a.rec.state !== "inactive" && a.rec.stop(); } catch (e) {}
    a.stream && a.stream.getTracks().forEach(t => t.stop());
  }

  function render(box, target, opts) {
    stop();
    opts = opts || {};
    let best = opts.best || 0, audioUrl = null, audio = null;
    box.innerHTML = `<div class="row between"><b>🎤 Luyện phát âm</b><small class="muted" id="pbest"></small></div>
      <p class="muted" style="font-size:.88rem;margin:4px 0 8px">Bấm Ghi âm, đọc to câu tiếng Anh, rồi bấm Dừng (hoặc đợi tự dừng khi bạn ngưng nói).</p>
      <div class="row"><button class="btn primary" id="prec">🎙 Ghi âm</button>
        <button class="btn" id="pmodel">🔊 Nghe mẫu</button>
        <button class="btn" id="pplay" disabled>▶ Nghe giọng tôi</button></div>
      <div id="pstate" class="pstate" role="status" aria-live="polite"></div>
      <div id="pres"></div>`;
    const $ = id => box.querySelector("#" + id);
    const state = (cls, msg) => { $("pstate").className = "pstate " + cls; $("pstate").textContent = msg; };
    const showBest = () => { $("pbest").textContent = best ? "Điểm cao nhất: " + best : ""; };
    showBest();
    $("pmodel").onclick = () => opts.speak && opts.speak(target);
    $("pplay").onclick = () => { if (audioUrl) { audio = new Audio(audioUrl); audio.play(); } };

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR || !navigator.mediaDevices) { $("prec").disabled = true; state("bad", "Trình duyệt này chưa hỗ trợ ghi âm/nhận dạng giọng nói. Hãy dùng Chrome hoặc Safari mới."); return; }
    if (!window.isSecureContext) { $("prec").disabled = true; state("bad", "Ghi âm chỉ hoạt động ở địa chỉ https:// hoặc http://localhost. Hãy mở web bằng http://localhost:8000 trên máy tính."); return; }

    $("prec").onclick = async () => {
      if (active) { try { active.recognition.stop(); } catch (e) {} return; } // bấm lần nữa = dừng
      if (audioUrl) { URL.revokeObjectURL(audioUrl); audioUrl = null; $("pplay").disabled = true; }
      $("pres").innerHTML = "";
      const a = active = { cancelled: false, alts: [], interim: "", error: null };
      try { a.stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { active = null; state("bad", "Không có quyền dùng micro. Hãy cho phép micro cho trang này trong cài đặt trình duyệt."); return; }
      if (active !== a) { a.stream.getTracks().forEach(t => t.stop()); return; }
      try { // ghi lại giọng để nghe lại (không bắt buộc)
        const chunks = []; a.rec = new MediaRecorder(a.stream);
        a.rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
        a.rec.onstop = () => { if (chunks.length && !a.cancelled) { audioUrl = URL.createObjectURL(new Blob(chunks, { type: a.rec.mimeType })); $("pplay").disabled = false; } };
        a.rec.start();
      } catch (e) { a.rec = null; }
      const r = a.recognition = new SR();
      r.lang = "en-US"; r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
      r.onresult = ev => {
        let interim = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const res = ev.results[i];
          if (res.isFinal) { a.alts = Array.from(res, x => ({ t: x.transcript, c: x.confidence })); }
          else interim += res[0].transcript;
        }
        a.interim = interim || a.interim;
        if (interim) state("rec", "● Đang nghe: " + interim);
      };
      r.onerror = ev => { a.error = ev.error; };
      r.onend = () => {
        if (active === a) active = null;
        a.rec && a.rec.state !== "inactive" && a.rec.stop();
        a.stream.getTracks().forEach(t => t.stop());
        $("prec").textContent = "🎙 Ghi âm lại";
        if (a.cancelled) return;
        finish(a);
      };
      $("prec").textContent = "⏹ Dừng";
      state("rec", "● Đang ghi âm… hãy đọc câu tiếng Anh");
      try { r.start(); } catch (e) { active = null; a.stream.getTracks().forEach(t => t.stop()); $("prec").textContent = "🎙 Ghi âm"; state("bad", "Không bắt đầu được ghi âm. Thử lại nhé."); }
    };

    function finish(a) {
      const errs = { "not-allowed": "Không có quyền dùng micro hoặc nhận dạng giọng nói.", "service-not-allowed": "Trình duyệt không cho dùng nhận dạng giọng nói.",
        "audio-capture": "Không tìm thấy micro.", "network": "Nhận dạng giọng nói cần kết nối mạng. Kiểm tra mạng rồi thử lại.", "language-not-supported": "Trình duyệt không hỗ trợ nhận dạng tiếng Anh." };
      const alts = a.alts.length ? a.alts : (a.interim ? [{ t: a.interim, c: 0 }] : []);
      if (!alts.length) {
        state("bad", errs[a.error] || (a.error === "no-speech" || !a.error ? "Không nghe thấy giọng nói. Hãy nói gần micro hơn rồi thử lại." : "Lỗi nhận dạng: " + a.error));
        return;
      }
      let top = null;
      alts.forEach(x => { const r = score(target, x.t, x.c); if (!top || r.score > top.r.score) top = { r, x }; });
      const r = top.r, [text, cls] = label(r.score);
      $("pstate").className = "pstate"; $("pstate").textContent = "";
      const bad = r.items.filter(x => !x.ok);
      $("pres").innerHTML = `<div class="pscore ${cls}"><span class="pnum">${r.score}</span><span>/100 · ${text}</span></div>
        <div class="pwords">${r.items.map(x => x.ok ? `<span class="pw ok">${esc(x.word)}</span>`
          : `<span class="pw bad" title="${x.heard ? "Máy nghe thành: " + esc(x.heard) : "Máy không nghe thấy từ này"}">${esc(x.word)}</span>`).join(" ")}</div>
        <div class="muted" style="font-size:.88rem;margin-top:6px">Máy nghe được: “${esc(top.x.t.trim())}”</div>
        ${bad.length ? `<div style="font-size:.9rem;margin-top:4px">Từ cần luyện: ${bad.map(x => `<b>${esc(x.word)}</b>${x.heard ? " (nghe thành “" + esc(x.heard) + "”)" : " (không nghe thấy)"}`).join(", ")}</div>` : ""}
        <div class="ptips"><b>📝 Nhận xét</b><ul>${tips(r.items, r.extras, r.score).map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
        <button class="btn" id="pcopy">📋 Sao chép để Claude nhận xét</button>
        <div class="cnote">Nhận xét dựa trên chữ mà trình duyệt nghe được, không phân tích âm thanh thật, chỉ mang tính tham khảo.</div>`;
      $("pcopy").onclick = async () => {
        const text = `Tôi là người Việt đang luyện phát âm tiếng Anh. Hãy nhận xét giúp phát âm của tôi.\n\n` +
          `Câu mẫu: ${target}\nMáy nhận dạng giọng nói nghe được: “${top.x.t.trim()}”\nĐiểm ước tính: ${r.score}/100\n` +
          `Các từ bị sai: ${bad.length ? bad.map(x => x.word + (x.heard ? ` (nghe thành: ${x.heard})` : " (không nghe thấy)")).join(", ") : "không có"}\n\n` +
          `Yêu cầu: trả lời bằng tiếng Việt. Nêu lỗi phát âm thường gặp của người Việt với những từ này (âm cuối, âm “th”, r/l, trọng âm…), ` +
          `cách luyện từng âm, và mẹo đọc cả câu tự nhiên (trọng âm, nối âm). Lưu ý bạn không nghe được giọng tôi, chỉ dựa vào kết quả nhận dạng ở trên.`;
        const ok = await copyText(text);
        state(ok ? "ok" : "bad", ok ? "✓ Đã sao chép. Hãy dán vào cuộc trò chuyện với Claude để được nhận xét." : "✗ Không sao chép được. Hãy chọn và sao chép tay.");
      };
      if (r.score > best) { best = r.score; showBest(); opts.onBest && opts.onBest(best); }
    }
  }

  window.PronBox = { render, stop, score };
})();
