"use client";
import { jsx as s } from "react/jsx-runtime";
import * as o from "react";
const t = /*#__PURE__*/ o.createContext(0), c = (param)=>{
    let { children: n, height: r } = param;
    const e = o.useContext(t);
    return /* @__PURE__ */ s(t.Provider, {
        value: e + r,
        children: n(e)
    });
}, x = ()=>o.useContext(t), p = c;
export { t as TopDistanceContext, p as default, x as useFixedToTopHeight };
