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
    TrackingConfig: function() {
        return p;
    },
    eventActions: function() {
        return c;
    },
    eventCategories: function() {
        return a;
    },
    eventNames: function() {
        return u;
    },
    useTrackingConfig: function() {
        return g;
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
const a = {
    userInteraction: "user_interaction"
}, c = {
    linkTapped: "link_tapped"
}, u = {
    userInteraction: "user_interaction"
}, n = /*#__PURE__*/ _react.createContext({
    eventFormat: "universal-analytics"
}), p = (param)=>{
    let { children: o, eventFormat: t } = param;
    const r = _react.useMemo(()=>({
            eventFormat: t
        }), [
        t
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(n.Provider, {
        value: r,
        children: o
    });
}, g = ()=>_react.useContext(n);
