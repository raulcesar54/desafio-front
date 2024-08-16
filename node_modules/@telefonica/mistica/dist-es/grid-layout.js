function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { jsx as i, jsxs as v } from "react/jsx-runtime";
import { getPrefixedDataAttributes as y } from "./utils/dom.js";
import { grid as x, collapsedInTablet as C, span as b, desktopLargeColumn as S, desktopMediumColumn as k, desktopSmallColumn as L, vars as t } from "./grid-layout.css-mistica.js";
import m from "classnames";
import r from "./desktop-container-type-context.js";
import { applyCssVars as h } from "./utils/css.js";
const D = (param)=>{
    let { dataAttributes: p, template: n, left: a, right: s, verticalSpace: u, collapseBreakpoint: f = "tablet", children: o } = param;
    const e = y(p, "GridLayout"), d = (c)=>({
            className: m(b, {
                [S]: c >= 10,
                [k]: c > 5 && c < 10,
                [L]: c <= 5
            }),
            style: h({
                [t.colSpan]: String(c)
            })
        }), l = {
        className: m(x, {
            [C]: f === "tablet"
        }),
        style: u ? h({
            [t.verticalSpace]: `${u}px`
        }) : void 0
    };
    return n === "6+6" ? /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, l, e), {
        children: /* @__PURE__ */ v(r, {
            value: "medium",
            children: [
                /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: a
                })),
                /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: s
                }))
            ]
        })
    })) : n === "8+4" ? /* @__PURE__ */ v("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ i(r, {
                value: "medium",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(8)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ i(r, {
                value: "small",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: s
                }))
            })
        ]
    })) : n === "4+6" ? /* @__PURE__ */ v("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ i(r, {
                value: "small",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ i("div", _object_spread({}, d(1))),
            /* @__PURE__ */ i(r, {
                value: "medium",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: s
                }))
            }),
            /* @__PURE__ */ i("div", _object_spread({}, d(1)))
        ]
    })) : n === "5+4" ? /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, l, e), {
        children: /* @__PURE__ */ v(r, {
            value: "small",
            children: [
                /* @__PURE__ */ i("div", _object_spread({}, d(1))),
                /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(5)), {
                    children: a
                })),
                /* @__PURE__ */ i("div", _object_spread({}, d(1))),
                /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: s
                })),
                /* @__PURE__ */ i("div", _object_spread({}, d(1)))
            ]
        })
    })) : n === "3+9" ? /* @__PURE__ */ v("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ i(r, {
                value: "small",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(3)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ i(r, {
                value: "medium",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(9)), {
                    children: s
                }))
            })
        ]
    })) : n === "10" ? /* @__PURE__ */ v("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ i("div", _object_spread({}, d(1))),
            /* @__PURE__ */ i(r, {
                value: "large",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(10)), {
                    children: o
                }))
            }),
            /* @__PURE__ */ i("div", _object_spread({}, d(1)))
        ]
    })) : n === "8" ? /* @__PURE__ */ v("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ i("div", _object_spread({}, d(2))),
            /* @__PURE__ */ i(r, {
                value: "medium",
                children: /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, d(8)), {
                    children: o
                }))
            }),
            /* @__PURE__ */ i("div", _object_spread({}, d(2)))
        ]
    })) : /* @__PURE__ */ i("div", _object_spread_props(_object_spread({}, l, e), {
        children: o
    }));
}, T = D;
export { T as default };
