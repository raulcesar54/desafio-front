"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Placeholder", {
    enumerable: true,
    get: function() {
        return n;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _color = require("./utils/color.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const n = (param)=>{
    let { width: t = "auto", height: i = 120 } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            height: i,
            width: t,
            boxSizing: "border-box",
            background: (0, _color.applyAlpha)(_skincontractcssmistica.vars.rawColors.neutralHigh, 0.08),
            border: `2px solid ${(0, _color.applyAlpha)(_skincontractcssmistica.vars.rawColors.neutralHigh, 0.3)}`,
            position: "relative"
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", {
            width: "100%",
            height: "100%",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("line", {
                    style: {
                        strokeWidth: 2,
                        stroke: (0, _color.applyAlpha)(_skincontractcssmistica.vars.rawColors.neutralHigh, 0.1)
                    },
                    x1: 0,
                    y1: 0,
                    x2: "100%",
                    y2: "100%"
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("line", {
                    style: {
                        strokeWidth: 2,
                        stroke: (0, _color.applyAlpha)(_skincontractcssmistica.vars.rawColors.neutralHigh, 0.1)
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
