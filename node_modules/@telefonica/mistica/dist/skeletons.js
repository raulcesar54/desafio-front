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
    SkeletonAnimation: function() {
        return o;
    },
    SkeletonCircle: function() {
        return x;
    },
    SkeletonLine: function() {
        return g;
    },
    SkeletonRectangle: function() {
        return R;
    },
    SkeletonRow: function() {
        return N;
    },
    SkeletonText: function() {
        return A;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _skeletonbase = /*#__PURE__*/ _interop_require_default(require("./skeleton-base.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _dom = require("./utils/dom.js");
const _skeletonscssmistica = require("./skeletons.css-mistica.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const o = (param)=>{
    let { children: n, ariaLabel: t, dataAttributes: i, width: a, height: l } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: _skeletonscssmistica.animation,
        role: "status",
        "aria-busy": !0,
        "aria-hidden": t === void 0,
        "aria-label": t,
        style: {
            width: a,
            height: l
        }
    }, (0, _dom.getPrefixedDataAttributes)(i)), {
        children: n
    }));
}, g = (param)=>{
    let { width: n = "100%", ariaLabel: t, dataAttributes: i } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
        width: n,
        ariaLabel: t,
        dataAttributes: _object_spread({
            "component-name": "SkeletonLine"
        }, i),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
            width: "100%"
        })
    });
}, A = (param)=>{
    let { ariaLabel: n, dataAttributes: t } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
        width: "100%",
        ariaLabel: n,
        dataAttributes: _object_spread({
            "component-name": "SkeletonText"
        }, t),
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
            space: 16,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {}),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {}),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
                    width: "75%"
                })
            ]
        })
    });
}, x = (param)=>{
    let { ariaLabel: n, size: t = 40, dataAttributes: i } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
        width: t,
        height: t,
        ariaLabel: n,
        dataAttributes: _object_spread({
            "component-name": "SkeletonCircle"
        }, i),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
            height: "100%",
            width: "100%",
            radius: "50%"
        })
    });
}, N = (param)=>{
    let { width: n = "100%", ariaLabel: t, dataAttributes: i } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
        width: n,
        ariaLabel: t,
        dataAttributes: _object_spread({
            "component-name": "SkeletonRow"
        }, i),
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: _skeletonscssmistica.row,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
                    height: 40,
                    width: 40,
                    radius: "50%",
                    className: _skeletonscssmistica.circle
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
                    width: "100%",
                    className: _skeletonscssmistica.line
                })
            ]
        })
    });
}, R = (param)=>{
    let { width: n = "100%", height: t = "100%", ariaLabel: i, dataAttributes: a, noBorderRadius: l = !1 } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
        height: t,
        width: n,
        ariaLabel: i,
        dataAttributes: _object_spread({
            "component-name": "SkeletonRectangle"
        }, a),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_skeletonbase.default, {
            height: "100%",
            width: "100%",
            noBorderRadius: l
        })
    });
};
