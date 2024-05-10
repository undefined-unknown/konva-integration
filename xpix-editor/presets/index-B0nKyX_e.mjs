function u(n) {
  return new Promise((e, t) => {
    n.oncomplete = n.onsuccess = () => e(n.result), n.onabort = n.onerror = () => t(n.error);
  });
}
function f(n, e) {
  const t = indexedDB.open(n);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const r = u(t);
  return (a, c) => r.then((l) => c(l.transaction(e, a).objectStore(e)));
}
let o;
function i() {
  return o || (o = f("keyval-store", "keyval")), o;
}
function d(n, e = i()) {
  return e("readonly", (t) => u(t.get(n)));
}
function y(n, e, t = i()) {
  return t("readwrite", (r) => (r.put(e, n), u(r.transaction)));
}
function h(n, e = i()) {
  return e("readwrite", (t) => (n.forEach((r) => t.put(r[1], r[0])), u(t.transaction)));
}
function p(n, e = i()) {
  return e("readonly", (t) => Promise.all(n.map((r) => u(t.get(r)))));
}
function g(n, e, t = i()) {
  return t("readwrite", (r) => (
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((a, c) => {
      r.get(n).onsuccess = function() {
        try {
          r.put(e(this.result), n), a(u(r.transaction));
        } catch (l) {
          c(l);
        }
      };
    })
  ));
}
function m(n, e = i()) {
  return e("readwrite", (t) => (t.delete(n), u(t.transaction)));
}
function w(n, e = i()) {
  return e("readwrite", (t) => (n.forEach((r) => t.delete(r)), u(t.transaction)));
}
function A(n = i()) {
  return n("readwrite", (e) => (e.clear(), u(e.transaction)));
}
function s(n, e) {
  return n.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, u(n.transaction);
}
function v(n = i()) {
  return n("readonly", (e) => {
    if (e.getAllKeys)
      return u(e.getAllKeys());
    const t = [];
    return s(e, (r) => t.push(r.key)).then(() => t);
  });
}
function b(n = i()) {
  return n("readonly", (e) => {
    if (e.getAll)
      return u(e.getAll());
    const t = [];
    return s(e, (r) => t.push(r.value)).then(() => t);
  });
}
function k(n = i()) {
  return n("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        u(e.getAllKeys()),
        u(e.getAll())
      ]).then(([r, a]) => r.map((c, l) => [c, a[l]]));
    const t = [];
    return n("readonly", (r) => s(r, (a) => t.push([a.key, a.value])).then(() => t));
  });
}
export {
  A as clear,
  f as createStore,
  m as del,
  w as delMany,
  k as entries,
  d as get,
  p as getMany,
  v as keys,
  u as promisifyRequest,
  y as set,
  h as setMany,
  g as update,
  b as values
};
