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
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { getAnimateDrawLineProps as n, getAnimateFadeInProps as s } from "../utils/animation.js";
import { useTheme as l } from "../hooks.js";
import { O2_NEW_SKIN as d, O2_SKIN as h } from "../skins/constants.js";
import { vars as t } from "../skins/skin-contract.css-mistica.js";
import { outerAnimation as c, innerAnimation as a } from "./icon-error.css-mistica.js";
const m = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = l();
    return /* @__PURE__ */ r("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ i("g", {
            stroke: t.colors.error,
            fill: t.colors.error,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /* @__PURE__ */ i("g", {
                    className: c,
                    children: [
                        /* @__PURE__ */ r("path", _object_spread({
                            strokeWidth: "2",
                            fill: "none",
                            d: "M48.24,57.99c-4.71,2.95-10.27,4.65-16.24,4.65C15.08,62.64,1.36,48.92,1.36,32S15.08,1.36,32,1.36 S62.64,15.08,62.64,32c0,6.11-1.79,11.8-4.87,16.58"
                        }, n("202", "0.3s", e))),
                        /* @__PURE__ */ r("circle", _object_spread({
                            cx: "53.64",
                            cy: "53.54",
                            r: "1.06"
                        }, s("0.2s", e)))
                    ]
                }),
                /* @__PURE__ */ i("g", {
                    className: a,
                    children: [
                        /* @__PURE__ */ r("line", _object_spread({
                            strokeWidth: "2",
                            fill: "none",
                            x1: "32",
                            y1: "14.86",
                            x2: "32",
                            y2: "39.08"
                        }, n("110", "0.6s", e))),
                        /* @__PURE__ */ r("circle", _object_spread({
                            strokeWidth: "0",
                            cx: "32",
                            cy: "46.25",
                            r: "1.72"
                        }, s("0.8s", e)))
                    ]
                })
            ]
        })
    });
}, f = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = l();
    return /* @__PURE__ */ r("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ i("g", {
            stroke: t.colors.error,
            fill: t.colors.error,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /* @__PURE__ */ r("g", {
                    className: c,
                    children: /* @__PURE__ */ r("circle", _object_spread({
                        strokeWidth: "4",
                        fill: "none",
                        cx: "32",
                        cy: "32",
                        r: "30"
                    }, n("202", "0.3s", e)))
                }),
                /* @__PURE__ */ i("g", {
                    className: a,
                    children: [
                        /* @__PURE__ */ r("line", _object_spread({
                            strokeWidth: "4",
                            fill: "none",
                            x1: "32",
                            y1: "16.5",
                            x2: "32",
                            y2: "39.08"
                        }, n("110", "0.6s", e))),
                        /* @__PURE__ */ r("circle", _object_spread({
                            strokeWidth: "0",
                            cx: "32",
                            cy: "47.5",
                            r: "3"
                        }, s("0.8s", e)))
                    ]
                })
            ]
        })
    });
}, k = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = l();
    return /* @__PURE__ */ r("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ i("g", {
            stroke: t.colors.error,
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            children: [
                /* @__PURE__ */ r("g", {
                    className: c,
                    children: /* @__PURE__ */ r("path", _object_spread({
                        fill: "none",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        d: "M 31.9 0.9 C 52.5 0.9 62.9 11.4 62.9 31.9 C 62.9 52.5 52.5 62.9 31.9 62.9 C 11.3 62.9 0.9 52.5 0.9 31.9 C 0.9 11.3 11.3 0.9 31.9 0.9 Z",
                        transform: "rotate(90 32 32)"
                    }, n("202", "0.3s", e)))
                }),
                /* @__PURE__ */ i("g", {
                    className: a,
                    children: [
                        /* @__PURE__ */ r("line", _object_spread({
                            x1: "31.9",
                            y1: "20.9",
                            x2: "31.9",
                            y2: "36.9"
                        }, n("17", "0.7s", e))),
                        /* @__PURE__ */ r("circle", _object_spread({
                            stroke: t.colors.error,
                            fill: t.colors.error,
                            strokeWidth: "1",
                            cx: "31.9",
                            cy: "43.9",
                            r: "1.5"
                        }, s("1s", e)))
                    ]
                })
            ]
        })
    });
}, g = (o)=>{
    const { skinName: e } = l();
    switch(e){
        case h:
            return /* @__PURE__ */ r(m, _object_spread({}, o));
        case d:
            return /* @__PURE__ */ r(f, _object_spread({}, o));
        default:
            return /* @__PURE__ */ r(k, _object_spread({}, o));
    }
}, N = g;
export { N as default };
