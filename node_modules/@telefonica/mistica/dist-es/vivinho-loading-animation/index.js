"use client";
import { jsxs as l, jsx as i } from "react/jsx-runtime";
import o from "lottie-react";
import * as v from "react";
import h from "./in-lottie.json.js";
import d from "./pulse-lottie.json.js";
import L from "./wave-lottie.json.js";
import x from "./out-lottie.json.js";
import { container as D, waveFadeOut as W } from "./vivinho-loading-animation.css-mistica.js";
const F = (param)=>{
    let { isLoading: p, onCloseStart: e, onCloseEnd: a } = param;
    const [m, n] = v.useState("in"), [f, r] = v.useState([]), s = ()=>{
        r((t)=>{
            if (!t.length) return [
                0
            ];
            const c = t[t.length - 1];
            return [
                ...t,
                c + 1
            ];
        });
    }, u = ()=>{
        r((t)=>t.slice(1));
    };
    return /* @__PURE__ */ l("div", {
        className: D,
        children: [
            f.map((t)=>/* @__PURE__ */ i("div", {
                    className: m === "out" ? W : void 0,
                    children: /* @__PURE__ */ i(o, {
                        animationData: L,
                        loop: !1,
                        onComplete: ()=>{
                            u();
                        }
                    })
                }, t)),
            m === "in" ? /* @__PURE__ */ i(o, {
                animationData: h,
                loop: !1,
                onComplete: ()=>{
                    p ? (setTimeout(()=>{
                        s();
                    }, 800), n("loop")) : (e == null || e(), n("out"));
                }
            }) : m === "loop" ? /* @__PURE__ */ i(o, {
                animationData: d,
                onLoopComplete: ()=>{
                    p ? setTimeout(()=>{
                        s();
                    }, 800) : (e == null || e(), n("out"));
                }
            }) : /* @__PURE__ */ i(o, {
                animationData: x,
                loop: !1,
                onComplete: ()=>{
                    a == null || a();
                }
            })
        ]
    });
};
export { F as default };
