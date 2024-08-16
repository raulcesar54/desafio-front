import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { applyAlpha as r } from "./utils/color.js";
import { vars as o } from "./skins/skin-contract.css-mistica.js";
const n = (param)=>{
    let { width: t = "auto", height: i = 120 } = param;
    return /* @__PURE__ */ e("div", {
        style: {
            height: i,
            width: t,
            boxSizing: "border-box",
            background: r(o.rawColors.neutralHigh, 0.08),
            border: `2px solid ${r(o.rawColors.neutralHigh, 0.3)}`,
            position: "relative"
        },
        children: /* @__PURE__ */ l("svg", {
            width: "100%",
            height: "100%",
            children: [
                /* @__PURE__ */ e("line", {
                    style: {
                        strokeWidth: 2,
                        stroke: r(o.rawColors.neutralHigh, 0.1)
                    },
                    x1: 0,
                    y1: 0,
                    x2: "100%",
                    y2: "100%"
                }),
                /* @__PURE__ */ e("line", {
                    style: {
                        strokeWidth: 2,
                        stroke: r(o.rawColors.neutralHigh, 0.1)
                    },
                    x1: "100%",
                    y1: 0,
                    x2: 0,
                    y2: "100%"
                })
            ]
        })
    });
};
export { n as Placeholder };
