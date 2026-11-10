// In ra JSON danh sách mọi câu tiếng Anh trong app (kể cả bản "dad" của bộ kids).
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["phrases.js", "work1.js", "work2.js", "work3.js", "work4.js", "dialogues.js"])
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
const out = new Set();
const kids = s => { out.add(s); if (/\bmom\b/.test(s)) out.add(s.replace(/\bmom\b/g, "dad")); };
for (const t of vm.runInContext("TOPICS", ctx)) for (const p of t.phrases) kids(p[0]);
for (const d of ctx.DIALOGS.kids) for (const l of d.lines) kids(l[1]);
for (const d of ctx.DIALOGS.work) for (const l of d.lines) out.add(l[1]);
for (const g of ctx.WORK_RAW) for (const line of g.lines.split("\n")) { const en = line.split(" | ")[0]; if (en) out.add(en); }
console.log(JSON.stringify([...out]));
