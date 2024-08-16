"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return N;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _animation = require("../utils/animation.js");
const _hooks = require("../hooks.js");
const _constants = require("../skins/constants.js");
const _skincontractcssmistica = require("../skins/skin-contract.css-mistica.js");
const _iconerrorcssmistica = require("./icon-error.css-mistica.js");
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
const m = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
            stroke: _skincontractcssmistica.vars.colors.error,
            fill: _skincontractcssmistica.vars.colors.error,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
                    className: _iconerrorcssmistica.outerAnimation,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("path", _object_spread({
                            strokeWidth: "2",
                            fill: "none",
                            d: "M48.24,57.99c-4.71,2.95-10.27,4.65-16.24,4.65C15.08,62.64,1.36,48.92,1.36,32S15.08,1.36,32,1.36 S62.64,15.08,62.64,32c0,6.11-1.79,11.8-4.87,16.58"
                        }, (0, _animation.getAnimateDrawLineProps)("202", "0.3s", e))),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                            cx: "53.64",
                            cy: "53.54",
                            r: "1.06"
                        }, (0, _animation.getAnimateFadeInProps)("0.2s", e)))
                    ]
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
                    className: _iconerrorcssmistica.innerAnimation,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("line", _object_spread({
                            strokeWidth: "2",
                            fill: "none",
                            x1: "32",
                            y1: "14.86",
                            x2: "32",
                            y2: "39.08"
                        }, (0, _animation.getAnimateDrawLineProps)("110", "0.6s", e))),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                            strokeWidth: "0",
                            cx: "32",
                            cy: "46.25",
                            r: "1.72"
                        }, (0, _animation.getAnimateFadeInProps)("0.8s", e)))
                    ]
                })
            ]
        })
    });
}, f = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
            stroke: _skincontractcssmistica.vars.colors.error,
            fill: _skincontractcssmistica.vars.colors.error,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("g", {
                    className: _iconerrorcssmistica.outerAnimation,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                        strokeWidth: "4",
                        fill: "none",
                        cx: "32",
                        cy: "32",
                        r: "30"
                    }, (0, _animation.getAnimateDrawLineProps)("202", "0.3s", e)))
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
                    className: _iconerrorcssmistica.innerAnimation,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("line", _object_spread({
                            strokeWidth: "4",
                            fill: "none",
                            x1: "32",
                            y1: "16.5",
                            x2: "32",
                            y2: "39.08"
                        }, (0, _animation.getAnimateDrawLineProps)("110", "0.6s", e))),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                            strokeWidth: "0",
                            cx: "32",
                            cy: "47.5",
                            r: "3"
                        }, (0, _animation.getAnimateFadeInProps)("0.8s", e)))
                    ]
                })
            ]
        })
    });
}, k = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        overflow: "visible",
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
            stroke: _skincontractcssmistica.vars.colors.error,
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("g", {
                    className: _iconerrorcssmistica.outerAnimation,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", _object_spread({
                        fill: "none",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                        d: "M 31.9 0.9 C 52.5 0.9 62.9 11.4 62.9 31.9 C 62.9 52.5 52.5 62.9 31.9 62.9 C 11.3 62.9 0.9 52.5 0.9 31.9 C 0.9 11.3 11.3 0.9 31.9 0.9 Z",
                        transform: "rotate(90 32 32)"
                    }, (0, _animation.getAnimateDrawLineProps)("202", "0.3s", e)))
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("g", {
                    className: _iconerrorcssmistica.innerAnimation,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("line", _object_spread({
                            x1: "31.9",
                            y1: "20.9",
                            x2: "31.9",
                            y2: "36.9"
                        }, (0, _animation.getAnimateDrawLineProps)("17", "0.7s", e))),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                            stroke: _skincontractcssmistica.vars.colors.error,
                            fill: _skincontractcssmistica.vars.colors.error,
                            strokeWidth: "1",
                            cx: "31.9",
                            cy: "43.9",
                            r: "1.5"
                        }, (0, _animation.getAnimateFadeInProps)("1s", e)))
                    ]
                })
            ]
        })
    });
}, g = (o)=>{
    const { skinName: e } = (0, _hooks.useTheme)();
    switch(e){
        case _constants.O2_SKIN:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread({}, o));
        case _constants.O2_NEW_SKIN:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(f, _object_spread({}, o));
        default:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(k, _object_spread({}, o));
    }
}, N = g;
