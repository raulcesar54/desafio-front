"use client";
import { jsx as l } from "react/jsx-runtime";
import * as t from "react";
const r = /*#__PURE__*/ t.createContext({
    openTooltipId: null
}), s = /*#__PURE__*/ t.createContext({
    openTooltip: ()=>{},
    closeTooltip: ()=>{}
}), a = (param)=>{
    let { children: c } = param;
    const [p, n] = t.useState(null), e = t.useRef(null), i = t.useCallback((o)=>{
        e.current = o, n(o);
    }, []), u = t.useCallback((o)=>{
        e.current === o && (e.current = null, n(null));
    }, []);
    return /* @__PURE__ */ l(r.Provider, {
        value: {
            openTooltipId: p
        },
        children: /* @__PURE__ */ l(s.Provider, {
            value: {
                openTooltip: i,
                closeTooltip: u
            },
            children: c
        })
    });
}, x = ()=>t.useContext(r), C = ()=>t.useContext(s), d = a;
export { d as default, C as useSetTooltipState, x as useTooltipState };
