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
import { jsx as s } from "react/jsx-runtime";
import { isAndroid as r, isChrome as i } from "./utils/platform.js";
import { useDisableBodyScroll as d, useTheme as m } from "./hooks.js";
import { getPrefixedDataAttributes as y } from "./utils/dom.js";
const g = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    outline: "none",
    WebkitTapHighlightColor: "transparent"
}, b = (param)=>{
    let { onPress: o, children: e, className: l, style: n, disableScroll: f = !1, dataAttributes: p } = param;
    d(f);
    const { platformOverrides: a } = m(), u = (t)=>{
        t.button === 2 && o && o(t);
    };
    return /* @__PURE__ */ s("div", _object_spread_props(_object_spread({
        "data-overlay": "true"
    }, y(p, "Overlay")), {
        style: _object_spread({}, g, n),
        className: l,
        onPointerDown: (t)=>{
            t.target.dataset.overlay && o && (e && r(a) && i(a) ? t.stopPropagation() : o(t));
        },
        onClick: (t)=>{
            t.stopPropagation(), t.target.dataset.overlay && o && e && r(a) && i(a) && o(t);
        },
        "touch-action": "auto",
        onContextMenu: u,
        role: "button",
        tabIndex: 0,
        children: e
    }));
}, C = b;
export { C as default };
