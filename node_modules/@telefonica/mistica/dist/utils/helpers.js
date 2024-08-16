"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    debounce: function() {
        return W;
    },
    isEqual: function() {
        return p;
    }
});
const W = function(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _i_leading, _i_trailing;
    const a = t, c = (_i_leading = i.leading) !== null && _i_leading !== void 0 ? _i_leading : !1, y = (_i_trailing = i.trailing) !== null && _i_trailing !== void 0 ? _i_trailing : !0, l = i.maxWait !== void 0 ? Math.max(i.maxWait, a) : void 0;
    let o, d = 0, s = -1, f, r;
    const g = (n)=>(d = n, o && (f = e(...o)), o = void 0, f), T = (n)=>{
        const u = n - s, m = n - d;
        return s < 0 || u >= t || u < 0 || l !== void 0 && m >= l;
    }, x = (n)=>{
        const u = n - s, m = n - d, h = t - u;
        return l !== void 0 ? Math.min(h, l - m) : h;
    }, k = (n)=>(r = void 0, y && o ? g(n) : (o = void 0, f)), v = ()=>{
        const n = Date.now();
        if (T(n)) return k(n);
        r = setTimeout(v, x(n));
    }, I = (n)=>(d = n, r = setTimeout(v, a), c ? g(n) : f), A = function() {
        for(var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++){
            n[_key] = arguments[_key];
        }
        const u = Date.now(), m = T(u);
        if (o = n, s = u, m) {
            if (r === void 0) return I(s);
            if (l !== void 0) return r = setTimeout(v, a), g(s);
        }
        return r === void 0 && (r = setTimeout(v, a)), f;
    };
    return A.cancel = ()=>{
        r !== void 0 && (clearTimeout(r), r = void 0), d = 0, s = -1, o = void 0;
    }, A.flush = ()=>r === void 0 ? f : k(Date.now()), A;
}, D = (e)=>e === null ? !0 : !(typeof e == "object" || typeof e == "function"), p = (e, t)=>{
    if (e === t || typeof e == "number" && typeof t == "number" && isNaN(e) && isNaN(t)) return !0;
    if (D(e) || D(t) || typeof e != typeof t || typeof e == "function") return !1;
    if (Array.isArray(e) || Array.isArray(t)) return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((c, y)=>p(c, t[y])) : !1;
    if (e instanceof Date || t instanceof Date) return e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !1;
    const i = Object.keys(e), a = Object.keys(t);
    return i.length === a.length ? i.every((c)=>p(e[c], t[c])) : !1;
};
