import { jsx as l, jsxs as i } from "react/jsx-runtime";
const r = (param)=>{
    let { role: c = "presentation", size: e = 24 } = param;
    return /* @__PURE__ */ l("svg", {
        role: c,
        width: e,
        height: e,
        viewBox: "0 0 32 32",
        children: /* @__PURE__ */ i("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
                /* @__PURE__ */ l("rect", {
                    width: "32",
                    height: "32",
                    fill: "#FFF",
                    fillRule: "nonzero",
                    rx: "4"
                }),
                /* @__PURE__ */ l("circle", {
                    cx: "12.076",
                    cy: "16.076",
                    r: "6.076",
                    fill: "#EA021B"
                }),
                /* @__PURE__ */ l("circle", {
                    cx: "19.924",
                    cy: "16.076",
                    r: "6.076",
                    fill: "#F79F19"
                }),
                /* @__PURE__ */ l("path", {
                    fill: "#FF5F00",
                    d: "M15.95 11.393c1.391 1.114 2.278 2.798 2.278 4.683 0 1.885-.887 3.57-2.278 4.683-1.392-1.114-2.28-2.798-2.28-4.683 0-1.863.867-3.53 2.232-4.645z"
                })
            ]
        })
    });
}, n = r;
export { n as default };
