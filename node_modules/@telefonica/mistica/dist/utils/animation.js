"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAnimateCircleScaleInProps: function() {
        return d;
    },
    getAnimateDrawLineProps: function() {
        return f;
    },
    getAnimateFadeInProps: function() {
        return u;
    },
    getAnimateHopInProps: function() {
        return y;
    },
    getAnimateSweepInProps: function() {
        return k;
    },
    mergeProperties: function() {
        return h;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _platform = require("./platform.js");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const a = (e)=>!(0, _platform.isRunningAcceptanceTest)(e), d = (e, t)=>a(t) ? {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "0.9s",
            from: "0",
            to: e,
            keyTimes: "0;1",
            calcMode: "spline",
            keySplines: "0.65 0 0.25 1"
        })
    } : null, f = (e, t, i, s)=>a(i) ? {
        strokeDasharray: e.replace("-", ""),
        strokeDashoffset: e,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", {
            attributeName: "stroke-dashoffset",
            from: e,
            to: "0",
            dur: "0.7",
            repeatCount: "1",
            begin: t,
            fill: "freeze",
            keyTimes: "0;1",
            calcMode: "spline",
            keySplines: s !== null && s !== void 0 ? s : "0.65 0 0.25 1"
        })
    } : null, u = (e, t)=>a(t) ? {
        opacity: 0,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", {
            attributeName: "opacity",
            from: "0",
            to: "1",
            dur: "0.4",
            repeatCount: "1",
            begin: e,
            fill: "freeze",
            keyTimes: "0;1",
            calcMode: "spline",
            keySplines: "0.65 0 0.25 1"
        })
    } : null, y = (e, t)=>a(t) ? {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", {
                    from: "2.5",
                    to: "2",
                    dur: "0.7s",
                    begin: e,
                    keyTimes: "0;1",
                    calcMode: "spline",
                    fill: "freeze",
                    keySplines: "0.65 0 0.25 1"
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "translate",
                    from: "-0.5 1",
                    to: "0 0",
                    dur: "0.7s",
                    begin: e,
                    keyTimes: "0;1",
                    calcMode: "spline",
                    fill: "freeze",
                    keySplines: "0.65 0 0.25 1"
                })
            ]
        })
    } : null, k = (e, t)=>a(t) ? {
        opacity: 0,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", {
                    attributeName: "opacity",
                    from: "0",
                    to: "1",
                    dur: "0.1",
                    begin: e,
                    fill: "freeze",
                    keyTimes: "0;1",
                    calcMode: "spline",
                    keySplines: "0.65 0 0.25 1"
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    from: "0 0",
                    to: "1.15 1.15",
                    dur: "0.8s",
                    begin: e,
                    keyTimes: "0;1",
                    additive: "sum",
                    calcMode: "spline",
                    fill: "freeze",
                    keySplines: "0.8 0 0 1"
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    from: "50 21 10",
                    to: "0 21 10",
                    dur: "0.8s",
                    begin: e,
                    keyTimes: "0;1",
                    additive: "sum",
                    calcMode: "spline",
                    fill: "freeze",
                    keySplines: "0.8 0 0 1"
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    from: "1.1 1.1",
                    to: "1 1",
                    dur: "0.2s",
                    begin: `${parseFloat(e) + 0.8}s`,
                    keyTimes: "0;1",
                    calcMode: "spline",
                    fill: "freeze",
                    keySplines: "0.65 0 0.25 1"
                })
            ]
        })
    } : null, m = (param, t)=>{
    let { children: e } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            e,
            t
        ]
    });
}, h = function() {
    for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
        e[_key] = arguments[_key];
    }
    return e.reduce((t, i)=>_object_spread_props(_object_spread({}, t, i || {}), {
            children: m(t, i ? i.children : null)
        }), {
        children: null
    });
};
