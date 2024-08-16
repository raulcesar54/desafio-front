import { jsx as t } from "react/jsx-runtime";
import u from "react-focus-lock";
const a = (param)=>{
    let { children: o, disabled: r, className: s, group: c } = param;
    return /* @__PURE__ */ t(u, {
        noFocusGuards: !0,
        disabled: r,
        className: s,
        group: c,
        children: o
    });
}, m = a;
export { m as default };
