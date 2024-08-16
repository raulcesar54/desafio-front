"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return j;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _screensizecontext = /*#__PURE__*/ _interop_require_default(require("./screen-size-context.js"));
const _hooks = require("./hooks.js");
const _mediaqueriescssmistica = require("./media-queries.css-mistica.js");
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
const B = (param)=>{
    let { children: g } = param;
    const [e, p] = _react.useState(!0);
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        p(!1);
    }, []);
    const [i, b] = _react.useState(()=>!e && window.matchMedia(_mediaqueriescssmistica.mobile).matches), [n, f] = _react.useState(()=>!e && window.matchMedia(_mediaqueriescssmistica.tablet).matches), [c, M] = _react.useState(()=>!e && window.matchMedia(_mediaqueriescssmistica.tabletOrBigger).matches), [s, v] = _react.useState(()=>!e && window.matchMedia(_mediaqueriescssmistica.tabletOrSmaller).matches), [m, I] = _react.useState(()=>!e && window.matchMedia(_mediaqueriescssmistica.largeDesktop).matches);
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        if (!window.matchMedia) return;
        const T = [
            [
                _mediaqueriescssmistica.mobile,
                b
            ],
            [
                _mediaqueriescssmistica.tablet,
                f
            ],
            [
                _mediaqueriescssmistica.tabletOrBigger,
                M
            ],
            [
                _mediaqueriescssmistica.tabletOrSmaller,
                v
            ],
            [
                _mediaqueriescssmistica.largeDesktop,
                I
            ]
        ].map((param)=>{
            let [r, x] = param;
            const a = window.matchMedia(r), o = ()=>{
                x(a.matches);
            };
            return a.addEventListener("change", o), o(), ()=>{
                a.removeEventListener("change", o);
            };
        });
        return ()=>T.forEach((r)=>r());
    }, []);
    const O = _react.useMemo(()=>({
            isMobile: i,
            isTablet: n,
            isTabletOrBigger: c,
            isTabletOrSmaller: s,
            isDesktopOrBigger: e ? !1 : !s,
            isLargeDesktop: m
        }), [
        i,
        n,
        c,
        s,
        m,
        e
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_screensizecontext.default.Provider, {
        value: O,
        children: g
    });
}, j = B;
