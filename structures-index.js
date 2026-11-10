// Nối dữ liệu cấu trúc theo số thứ tự (struct-*.js) vào STRUCTS[câu tiếng Anh].
// Phải nạp sau các file struct-*.js, phrases.js và work*.js, trước app.js.
(function () {
  window.STRUCTS = window.STRUCTS || {};
  var sentences = {};
  (window.WORK_RAW || []).forEach(function (t) {
    sentences[t.id] = t.lines.trim().split("\n").map(function (l) { return l.split(" | ")[0]; });
  });
  (typeof TOPICS !== "undefined" ? TOPICS : []).forEach(function (t) { // TOPICS khai báo bằng const nên không nằm trên window
    sentences[t.id] = t.phrases.map(function (p) { return Array.isArray(p) ? p[0] : p.en; });
  });
  (window.STRUCT_RAW || []).forEach(function (blk) {
    var list = sentences[blk.topic] || [];
    blk.lines.trim().split("\n").forEach(function (line) {
      var i = line.indexOf(" | ");
      if (i < 0) return;
      var en = list[parseInt(line.slice(0, i), 10)];
      if (!en) return;
      STRUCTS[en] = line.slice(i + 3).split(" ; ").map(function (x) {
        var j = x.indexOf(" = ");
        return j < 0 ? { s: x, m: "" } : { s: x.slice(0, j), m: x.slice(j + 3) };
      });
    });
  });
})();
