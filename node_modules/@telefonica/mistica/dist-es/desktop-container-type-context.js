"use client";
import { jsx as r } from "react/jsx-runtime";
import * as t from "react";
const e = /*#__PURE__*/ t.createContext(null), p = ()=>t.useContext(e), a = (param)=>{
    let { children: o, value: n } = param;
    return /* @__PURE__ */ r(e.Provider, {
        value: n,
        children: o
    });
};
export { a as default, p as useDesktopContainerType };
