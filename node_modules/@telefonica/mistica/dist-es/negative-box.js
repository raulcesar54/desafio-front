import { jsx as n } from "react/jsx-runtime";
const a = (param)=>{
    let { left: o, right: t, children: i } = param;
    return /* @__PURE__ */ n("div", {
        style: {
            marginLeft: o || !o && !t ? -16 : void 0,
            marginRight: t || !o && !t ? -16 : void 0
        },
        children: i
    });
}, g = a;
export { g as default };
