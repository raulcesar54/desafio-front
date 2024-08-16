"use client";
import { jsx as t } from "react/jsx-runtime";
import s from "./grid-layout.js";
import { useScreenSize as l } from "./hooks.js";
import o from "./responsive-layout.js";
const m = (param)=>{
    let { isOpen: i, master: r, detail: e } = param;
    const { isTabletOrSmaller: a } = l();
    return a ? /* @__PURE__ */ t(o, {
        children: i ? e : r
    }) : /* @__PURE__ */ t(o, {
        children: /* @__PURE__ */ t(s, {
            template: "4+6",
            left: r,
            right: e
        })
    });
}, c = m;
export { c as default };
