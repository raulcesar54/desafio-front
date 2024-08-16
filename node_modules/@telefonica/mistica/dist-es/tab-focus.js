"use client";
import { jsxs as c, Fragment as a, jsx as d } from "react/jsx-runtime";
import * as u from "react";
import { TAB as l } from "./utils/keys.js";
const e = "mistica-tab-navigation", m = `
    body:not(.${e}) *:focus,
    body:not(.${e}) *:active {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
`;
let o = !1;
const f = (param)=>{
    let { children: r, disabled: t } = param;
    return u.useEffect(()=>{
        if (t) return;
        if (o) {
            process.env.NODE_ENV !== "production" && console.warn("Multiple TabFocus instances");
            return;
        }
        o = !0;
        const n = (i)=>{
            i.key === l ? document.body.classList.add(e) : document.body.classList.remove(e);
        }, s = ()=>{
            document.body.classList.remove(e);
        };
        return window.addEventListener("keydown", n), window.addEventListener("mouseup", s), ()=>{
            o = !1, window.removeEventListener("keydown", n), window.removeEventListener("mouseup", s);
        };
    }, [
        t
    ]), /* @__PURE__ */ c(a, {
        children: [
            !t && /* @__PURE__ */ d("style", {
                children: m
            }),
            r
        ]
    });
}, p = f;
export { p as default };
