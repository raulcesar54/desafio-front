"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return d;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _fadeincssmistica = require("./fade-in.css-mistica.js");
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
const s = "0.3s", f = (param)=>{
    let { children: i, className: e = "", duration: t = s, delay: a = "0", dataAttributes: n } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(n, "FadeIn")), {
        className: `${_fadeincssmistica.wrapper} ${e}`,
        style: {
            animationDelay: a,
            WebkitAnimationDelay: a,
            animationDuration: t,
            WebkitAnimationDuration: t
        },
        children: i
    }));
}, d = f;
