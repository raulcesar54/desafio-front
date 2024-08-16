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
import { jsx as a } from "react/jsx-runtime";
import { circle as d } from "./circle.css-mistica.js";
import { vars as n } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as f } from "./utils/dom.js";
const $ = (param)=>{
    let { children: i, background: o, backgroundColor: c, backgroundImage: t, size: e, border: r, dataAttributes: s } = param;
    const l = r === !0 ? n.colors.border : r, m = r ? `1px solid ${l}` : void 0, p = t ? `url(${t})` : "";
    return /* @__PURE__ */ a("div", _object_spread_props(_object_spread({
        className: d,
        style: {
            width: e,
            height: e,
            background: o || `center / cover no-repeat ${p} ${c || ""}`,
            border: m
        }
    }, f(s, "Circle")), {
        children: i
    }));
}, h = $;
export { h as default };
