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
import { jsx as e, jsxs as s } from "react/jsx-runtime";
import r from "./skeleton-base.js";
import c from "./stack.js";
import { getPrefixedDataAttributes as d } from "./utils/dom.js";
import { row as m, circle as h, line as u, animation as k } from "./skeletons.css-mistica.js";
const o = (param)=>{
    let { children: n, ariaLabel: t, dataAttributes: i, width: a, height: l } = param;
    return /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
        className: k,
        role: "status",
        "aria-busy": !0,
        "aria-hidden": t === void 0,
        "aria-label": t,
        style: {
            width: a,
            height: l
        }
    }, d(i)), {
        children: n
    }));
}, g = (param)=>{
    let { width: n = "100%", ariaLabel: t, dataAttributes: i } = param;
    return /* @__PURE__ */ e(o, {
        width: n,
        ariaLabel: t,
        dataAttributes: _object_spread({
            "component-name": "SkeletonLine"
        }, i),
        children: /* @__PURE__ */ e(r, {
            width: "100%"
        })
    });
}, A = (param)=>{
    let { ariaLabel: n, dataAttributes: t } = param;
    return /* @__PURE__ */ e(o, {
        width: "100%",
        ariaLabel: n,
        dataAttributes: _object_spread({
            "component-name": "SkeletonText"
        }, t),
        children: /* @__PURE__ */ s(c, {
            space: 16,
            children: [
                /* @__PURE__ */ e(r, {}),
                /* @__PURE__ */ e(r, {}),
                /* @__PURE__ */ e(r, {
                    width: "75%"
                })
            ]
        })
    });
}, x = (param)=>{
    let { ariaLabel: n, size: t = 40, dataAttributes: i } = param;
    return /* @__PURE__ */ e(o, {
        width: t,
        height: t,
        ariaLabel: n,
        dataAttributes: _object_spread({
            "component-name": "SkeletonCircle"
        }, i),
        children: /* @__PURE__ */ e(r, {
            height: "100%",
            width: "100%",
            radius: "50%"
        })
    });
}, N = (param)=>{
    let { width: n = "100%", ariaLabel: t, dataAttributes: i } = param;
    return /* @__PURE__ */ e(o, {
        width: n,
        ariaLabel: t,
        dataAttributes: _object_spread({
            "component-name": "SkeletonRow"
        }, i),
        children: /* @__PURE__ */ s("div", {
            className: m,
            children: [
                /* @__PURE__ */ e(r, {
                    height: 40,
                    width: 40,
                    radius: "50%",
                    className: h
                }),
                /* @__PURE__ */ e(r, {
                    width: "100%",
                    className: u
                })
            ]
        })
    });
}, R = (param)=>{
    let { width: n = "100%", height: t = "100%", ariaLabel: i, dataAttributes: a, noBorderRadius: l = !1 } = param;
    return /* @__PURE__ */ e(o, {
        height: t,
        width: n,
        ariaLabel: i,
        dataAttributes: _object_spread({
            "component-name": "SkeletonRectangle"
        }, a),
        children: /* @__PURE__ */ e(r, {
            height: "100%",
            width: "100%",
            noBorderRadius: l
        })
    });
};
export { o as SkeletonAnimation, x as SkeletonCircle, g as SkeletonLine, R as SkeletonRectangle, N as SkeletonRow, A as SkeletonText };
