// Đọc GLOSS_RAW và cung cấp window.glossFor(câu tiếng Anh) -> [{ w: từ trong câu, m: nghĩa }]
(function () {
  var WORDS = {}, PHRASES = [];
  (window.GLOSS_RAW || "").trim().split("\n").forEach(function (line) {
    var i = line.indexOf(" = ");
    if (i < 0) return;
    var key = line.slice(0, i).trim().toLowerCase(), m = line.slice(i + 3).trim();
    if (/[ \-]/.test(key)) PHRASES.push({ key: key, m: m }); else WORDS[key] = m;
  });
  PHRASES.sort(function (a, b) { return b.key.length - a.key.length; }); // cụm dài khớp trước

  function candidates(t) { // các dạng gốc có thể có của một từ đã chia
    var c = [t];
    if (/'s$/.test(t)) c.push(t.slice(0, -2));
    function add(b) { c.push(b, b + "e"); if (b.length > 3 && b[b.length - 1] === b[b.length - 2]) c.push(b.slice(0, -1)); }
    if (/ies$/.test(t)) c.push(t.slice(0, -3) + "y");
    if (/ied$/.test(t)) c.push(t.slice(0, -3) + "y");
    if (/es$/.test(t)) add(t.slice(0, -2));
    if (/s$/.test(t)) c.push(t.slice(0, -1));
    if (/ed$/.test(t)) add(t.slice(0, -2));
    if (/ing$/.test(t)) add(t.slice(0, -3));
    if (/ly$/.test(t)) c.push(t.slice(0, -2));
    return c;
  }

  window.glossFor = function (en) {
    var lower = en.toLowerCase().replace(/’/g, "'"), found = [], covered = [], seen = {};
    PHRASES.forEach(function (ph) {
      var re = new RegExp("\\b" + ph.key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b", "g"), m;
      while ((m = re.exec(lower))) {
        covered.push([m.index, m.index + m[0].length]);
        if (!seen[ph.key]) { seen[ph.key] = 1; found.push({ pos: m.index, w: m[0], m: ph.m }); }
      }
    });
    var re = /[a-z]+(?:'[a-z]+)?/g, m;
    while ((m = re.exec(lower))) {
      var at = m.index;
      if (covered.some(function (r) { return at >= r[0] && at < r[1]; })) continue;
      var cs = candidates(m[0]);
      for (var k = 0; k < cs.length; k++) {
        if (WORDS.hasOwnProperty(cs[k])) {
          if (!seen[cs[k]]) { seen[cs[k]] = 1; found.push({ pos: at, w: m[0], m: WORDS[cs[k]] }); }
          break;
        }
      }
    }
    return found.sort(function (a, b) { return a.pos - b.pos; });
  };
})();
