"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return m;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _reactfocuslock = /*#__PURE__*/ _interop_require_default(require("react-focus-lock"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const a = (param)=>{
    let { children: o, disabled: r, className: s, group: c } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_reactfocuslock.default, {
        noFocusGuards: !0,
        disabled: r,
        className: s,
        group: c,
        children: o
    });
}, m = a;
