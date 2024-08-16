"use client";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { jsx as a } from "react/jsx-runtime";
import * as t from "react";
const o = /*#__PURE__*/ t.createContext({
    isModalOpen: !1
}), s = /*#__PURE__*/ t.createContext(()=>{}), S = (param)=>{
    let { children: e } = param;
    const [l, n] = t.useState({
        isModalOpen: !1
    }), d = t.useCallback((r)=>{
        n((c)=>_object_spread({}, c, r));
    }, []);
    return /* @__PURE__ */ a(o.Provider, {
        value: l,
        children: /* @__PURE__ */ a(s.Provider, {
            value: d,
            children: e
        })
    });
}, u = ()=>t.useContext(s), f = ()=>{
    const e = u();
    t.useEffect(()=>(e({
            isModalOpen: !0
        }), ()=>{
            e({
                isModalOpen: !1
            });
        }), [
        e
    ]);
}, i = ()=>t.useContext(o);
export { S as default, i as useModalState, u as useSetModalState, f as useSetModalStateEffect };
