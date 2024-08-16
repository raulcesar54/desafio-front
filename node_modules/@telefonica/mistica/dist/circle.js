"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return h;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _circlecssmistica = require("./circle.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
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
const $ = (param)=>{
    let { children: i, background: o, backgroundColor: c, backgroundImage: t, size: e, border: r, dataAttributes: s } = param;
    const l = r === !0 ? _skincontractcssmistica.vars.colors.border : r, m = r ? `1px solid ${l}` : void 0, p = t ? `url(${t})` : "";
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: _circlecssmistica.circle,
        style: {
            width: e,
            height: e,
            background: o || `center / cover no-repeat ${p} ${c || ""}`,
            border: m
        }
    }, (0, _dom.getPrefixedDataAttributes)(s, "Circle")), {
        children: i
    }));
}, h = $;
