import { jsx as r, jsxs as c, Fragment as a } from "react/jsx-runtime";
import * as i from "react";
import n from "./box.js";
import { variants as m } from "./double-field.css-mistica.js";
const u = (param)=>{
    let { children: o, fullWidth: s, layout: l } = param;
    let e, t;
    l === "40/60" ? (t = "40%", e = "60%") : l === "60/40" ? (t = "60%", e = "40%") : (t = "50%", e = "50%");
    const h = ()=>{
        const [f, d] = i.Children.toArray(o);
        return /* @__PURE__ */ c(a, {
            children: [
                /* @__PURE__ */ r(n, {
                    paddingRight: 8,
                    width: t,
                    children: /*#__PURE__*/ i.cloneElement(f, {
                        fullWidth: !0
                    })
                }),
                /* @__PURE__ */ r(n, {
                    paddingLeft: 8,
                    width: e,
                    children: d && /*#__PURE__*/ i.cloneElement(d, {
                        fullWidth: !0
                    })
                })
            ]
        });
    };
    return /* @__PURE__ */ r("div", {
        className: m[s ? "fullWidth" : "default"],
        children: h()
    });
}, x = u;
export { x as default };
