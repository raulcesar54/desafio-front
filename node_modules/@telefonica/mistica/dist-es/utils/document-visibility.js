"use client";
import { jsx as a } from "react/jsx-runtime";
import * as t from "react";
import { useTheme as v } from "../hooks.js";
import { isAndroid as b } from "./platform.js";
const i = ()=>typeof document < "u" && document.visibilityState === "visible", u = /*#__PURE__*/ t.createContext(!0), E = (param)=>{
    let { hidden: m, children: l } = param;
    const { platformOverrides: d } = v(), [o, e] = t.useState(!m);
    t.useEffect(()=>{
        const s = ()=>{
            e(i());
        }, r = ()=>{
            e(!0);
        }, c = ()=>{
            e(!1);
        };
        return e(i()), document.addEventListener("visibilitychange", s), document.addEventListener("focus", r), document.addEventListener("blur", c), ()=>{
            document.removeEventListener("visibilitychange", s), document.removeEventListener("focus", r), document.removeEventListener("blur", c);
        };
    }, []);
    const n = i();
    return b(d) && n !== o && e(n), /* @__PURE__ */ a(u.Provider, {
        value: o,
        children: l
    });
}, C = ()=>t.useContext(u);
export { E as DocumentVisibilityProvider, C as useDocumentVisibility };
