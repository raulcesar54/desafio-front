"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return F;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _lottiereact = /*#__PURE__*/ _interop_require_default(require("lottie-react"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _inlottiejson = /*#__PURE__*/ _interop_require_default(require("./in-lottie.json.js"));
const _pulselottiejson = /*#__PURE__*/ _interop_require_default(require("./pulse-lottie.json.js"));
const _wavelottiejson = /*#__PURE__*/ _interop_require_default(require("./wave-lottie.json.js"));
const _outlottiejson = /*#__PURE__*/ _interop_require_default(require("./out-lottie.json.js"));
const _vivinholoadinganimationcssmistica = require("./vivinho-loading-animation.css-mistica.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const F = (param)=>{
    let { isLoading: p, onCloseStart: e, onCloseEnd: a } = param;
    const [m, n] = _react.useState("in"), [f, r] = _react.useState([]), s = ()=>{
        r((t)=>{
            if (!t.length) return [
                0
            ];
            const c = t[t.length - 1];
            return [
                ...t,
                c + 1
            ];
        });
    }, u = ()=>{
        r((t)=>t.slice(1));
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _vivinholoadinganimationcssmistica.container,
        children: [
            f.map((t)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: m === "out" ? _vivinholoadinganimationcssmistica.waveFadeOut : void 0,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_lottiereact.default, {
                        animationData: _wavelottiejson.default,
                        loop: !1,
                        onComplete: ()=>{
                            u();
                        }
                    })
                }, t)),
            m === "in" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_lottiereact.default, {
                animationData: _inlottiejson.default,
                loop: !1,
                onComplete: ()=>{
                    p ? (setTimeout(()=>{
                        s();
                    }, 800), n("loop")) : (e == null || e(), n("out"));
                }
            }) : m === "loop" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_lottiereact.default, {
                animationData: _pulselottiejson.default,
                onLoopComplete: ()=>{
                    p ? setTimeout(()=>{
                        s();
                    }, 800) : (e == null || e(), n("out"));
                }
            }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_lottiereact.default, {
                animationData: _outlottiejson.default,
                loop: !1,
                onComplete: ()=>{
                    a == null || a();
                }
            })
        ]
    });
};
