"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return c;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _gridlayout = /*#__PURE__*/ _interop_require_default(require("./grid-layout.js"));
const _hooks = require("./hooks.js");
const _responsivelayout = /*#__PURE__*/ _interop_require_default(require("./responsive-layout.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const m = (param)=>{
    let { isOpen: i, master: r, detail: e } = param;
    const { isTabletOrSmaller: a } = (0, _hooks.useScreenSize)();
    return a ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
        children: i ? e : r
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
            template: "4+6",
            left: r,
            right: e
        })
    });
}, c = m;
