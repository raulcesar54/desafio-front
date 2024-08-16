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
    default: function() {
        return d;
    },
    useSetTooltipState: function() {
        return C;
    },
    useTooltipState: function() {
        return x;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const r = /*#__PURE__*/ _react.createContext({
    openTooltipId: null
}), s = /*#__PURE__*/ _react.createContext({
    openTooltip: ()=>{},
    closeTooltip: ()=>{}
}), a = (param)=>{
    let { children: c } = param;
    const [p, n] = _react.useState(null), e = _react.useRef(null), i = _react.useCallback((o)=>{
        e.current = o, n(o);
    }, []), u = _react.useCallback((o)=>{
        e.current === o && (e.current = null, n(null));
    }, []);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(r.Provider, {
        value: {
            openTooltipId: p
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(s.Provider, {
            value: {
                openTooltip: i,
                closeTooltip: u
            },
            children: c
        })
    });
}, x = ()=>_react.useContext(r), C = ()=>_react.useContext(s), d = a;
