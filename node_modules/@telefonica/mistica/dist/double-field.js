"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return x;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _doublefieldcssmistica = require("./double-field.css-mistica.js");
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
const u = (param)=>{
    let { children: o, fullWidth: s, layout: l } = param;
    let e, t;
    l === "40/60" ? (t = "40%", e = "60%") : l === "60/40" ? (t = "60%", e = "40%") : (t = "50%", e = "50%");
    const h = ()=>{
        const [f, d] = _react.Children.toArray(o);
        return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingRight: 8,
                    width: t,
                    children: /*#__PURE__*/ _react.cloneElement(f, {
                        fullWidth: !0
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingLeft: 8,
                    width: e,
                    children: d && /*#__PURE__*/ _react.cloneElement(d, {
                        fullWidth: !0
                    })
                })
            ]
        });
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _doublefieldcssmistica.variants[s ? "fullWidth" : "default"],
        children: h()
    });
}, x = u;
