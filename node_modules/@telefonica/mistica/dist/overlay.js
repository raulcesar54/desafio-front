"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return C;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _platform = require("./utils/platform.js");
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
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
    (0, _hooks.useDisableBodyScroll)(f);
    const { platformOverrides: a } = (0, _hooks.useTheme)(), u = (t)=>{
        t.button === 2 && o && o(t);
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        "data-overlay": "true"
    }, (0, _dom.getPrefixedDataAttributes)(p, "Overlay")), {
        style: _object_spread({}, g, n),
        className: l,
        onPointerDown: (t)=>{
            t.target.dataset.overlay && o && (e && (0, _platform.isAndroid)(a) && (0, _platform.isChrome)(a) ? t.stopPropagation() : o(t));
        },
        onClick: (t)=>{
            t.stopPropagation(), t.target.dataset.overlay && o && e && (0, _platform.isAndroid)(a) && (0, _platform.isChrome)(a) && o(t);
        },
        "touch-action": "auto",
        onContextMenu: u,
        role: "button",
        tabIndex: 0,
        children: e
    }));
}, C = b;
