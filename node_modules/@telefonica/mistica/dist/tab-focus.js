"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return p;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _keys = require("./utils/keys.js");
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
const e = "mistica-tab-navigation", m = `
    body:not(.${e}) *:focus,
    body:not(.${e}) *:active {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
`;
let o = !1;
const f = (param)=>{
    let { children: r, disabled: t } = param;
    return _react.useEffect(()=>{
        if (t) return;
        if (o) {
            process.env.NODE_ENV !== "production" && console.warn("Multiple TabFocus instances");
            return;
        }
        o = !0;
        const n = (i)=>{
            i.key === _keys.TAB ? document.body.classList.add(e) : document.body.classList.remove(e);
        }, s = ()=>{
            document.body.classList.remove(e);
        };
        return window.addEventListener("keydown", n), window.addEventListener("mouseup", s), ()=>{
            o = !1, window.removeEventListener("keydown", n), window.removeEventListener("mouseup", s);
        };
    }, [
        t
    ]), /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            !t && /* @__PURE__ */ (0, _jsxruntime.jsx)("style", {
                children: m
            }),
            r
        ]
    });
}, p = f;
