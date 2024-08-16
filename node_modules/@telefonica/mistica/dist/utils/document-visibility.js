"use client";
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
    DocumentVisibilityProvider: function() {
        return E;
    },
    useDocumentVisibility: function() {
        return C;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("../hooks.js");
const _platform = require("./platform.js");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const i = ()=>typeof document < "u" && document.visibilityState === "visible", u = /*#__PURE__*/ _react.createContext(!0), E = (param)=>{
    let { hidden: m, children: l } = param;
    const { platformOverrides: d } = (0, _hooks.useTheme)(), [o, e] = _react.useState(!m);
    _react.useEffect(()=>{
        const s = ()=>{
            e(i());
        }, r = ()=>{
            e(!0);
        }, c = ()=>{
            e(!1);
        };
        return e(i()), document.addEventListener("visibilitychange", s), document.addEventListener("focus", r), document.addEventListener("blur", c), ()=>{
            document.removeEventListener("visibilitychange", s), document.removeEventListener("focus", r), document.removeEventListener("blur", c);
        };
    }, []);
    const n = i();
    return (0, _platform.isAndroid)(d) && n !== o && e(n), /* @__PURE__ */ (0, _jsxruntime.jsx)(u.Provider, {
        value: o,
        children: l
    });
}, C = ()=>_react.useContext(u);
