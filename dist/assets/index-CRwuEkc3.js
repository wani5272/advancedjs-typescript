(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) c(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && c(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function c(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = d(r);
    fetch(r.href, o);
  }
})();
const n = [];
for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).slice(1));
function y(e, t = 0) {
  return (
    n[e[t + 0]] +
    n[e[t + 1]] +
    n[e[t + 2]] +
    n[e[t + 3]] +
    "-" +
    n[e[t + 4]] +
    n[e[t + 5]] +
    "-" +
    n[e[t + 6]] +
    n[e[t + 7]] +
    "-" +
    n[e[t + 8]] +
    n[e[t + 9]] +
    "-" +
    n[e[t + 10]] +
    n[e[t + 11]] +
    n[e[t + 12]] +
    n[e[t + 13]] +
    n[e[t + 14]] +
    n[e[t + 15]]
  ).toLowerCase();
}
let l;
const p = new Uint8Array(16);
function m() {
  if (!l) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    l = crypto.getRandomValues.bind(crypto);
  }
  return l(p);
}
const g =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  s = { randomUUID: g };
function h(e, t, d) {
  var r;
  if (s.randomUUID && !e) return s.randomUUID();
  e = e || {};
  const c = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? m();
  if (c.length < 16) throw new Error("Random bytes length must be >= 16");
  return (c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), y(c);
}
h();
let a;
a = ["hello", 10];
a.push(23);
let f = 1;
console.log(f);
console.log("Green");
let i;
Array.isArray(i) && i.push("a");
Array.isArray(i) && console.log(i.length);
create({ prop: 0 });
create({});
create({ anotherPropr: "yes" });
