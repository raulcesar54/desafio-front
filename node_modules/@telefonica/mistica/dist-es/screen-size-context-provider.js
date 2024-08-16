"use client";
import { jsx as L } from "react/jsx-runtime";
import * as t from "react";
import k from "./screen-size-context.js";
import { useIsomorphicLayoutEffect as l } from "./hooks.js";
import { mobile as d, tablet as S, tabletOrBigger as u, tabletOrSmaller as h, largeDesktop as w } from "./media-queries.css-mistica.js";
const B = (param)=>{
    let { children: g } = param;
    const [e, p] = t.useState(!0);
    l(()=>{
        p(!1);
    }, []);
    const [i, b] = t.useState(()=>!e && window.matchMedia(d).matches), [n, f] = t.useState(()=>!e && window.matchMedia(S).matches), [c, M] = t.useState(()=>!e && window.matchMedia(u).matches), [s, v] = t.useState(()=>!e && window.matchMedia(h).matches), [m, I] = t.useState(()=>!e && window.matchMedia(w).matches);
    l(()=>{
        if (!window.matchMedia) return;
        const T = [
            [
                d,
                b
            ],
            [
                S,
                f
            ],
            [
                u,
                M
            ],
            [
                h,
                v
            ],
            [
                w,
                I
            ]
        ].map((param)=>{
            let [r, x] = param;
            const a = window.matchMedia(r), o = ()=>{
                x(a.matches);
            };
            return a.addEventListener("change", o), o(), ()=>{
                a.removeEventListener("change", o);
            };
        });
        return ()=>T.forEach((r)=>r());
    }, []);
    const O = t.useMemo(()=>({
            isMobile: i,
            isTablet: n,
            isTabletOrBigger: c,
            isTabletOrSmaller: s,
            isDesktopOrBigger: e ? !1 : !s,
            isLargeDesktop: m
        }), [
        i,
        n,
        c,
        s,
        m,
        e
    ]);
    return /* @__PURE__ */ L(k.Provider, {
        value: O,
        children: g
    });
}, j = B;
export { j as default };
