"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return T;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _dom = require("./utils/dom.js");
const _gridlayoutcssmistica = require("./grid-layout.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _desktopcontainertypecontext = /*#__PURE__*/ _interop_require_default(require("./desktop-container-type-context.js"));
const _css = require("./utils/css.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const D = (param)=>{
    let { dataAttributes: p, template: n, left: a, right: s, verticalSpace: u, collapseBreakpoint: f = "tablet", children: o } = param;
    const e = (0, _dom.getPrefixedDataAttributes)(p, "GridLayout"), d = (c)=>({
            className: (0, _classnames.default)(_gridlayoutcssmistica.span, {
                [_gridlayoutcssmistica.desktopLargeColumn]: c >= 10,
                [_gridlayoutcssmistica.desktopMediumColumn]: c > 5 && c < 10,
                [_gridlayoutcssmistica.desktopSmallColumn]: c <= 5
            }),
            style: (0, _css.applyCssVars)({
                [_gridlayoutcssmistica.vars.colSpan]: String(c)
            })
        }), l = {
        className: (0, _classnames.default)(_gridlayoutcssmistica.grid, {
            [_gridlayoutcssmistica.collapsedInTablet]: f === "tablet"
        }),
        style: u ? (0, _css.applyCssVars)({
            [_gridlayoutcssmistica.vars.verticalSpace]: `${u}px`
        }) : void 0
    };
    return n === "6+6" ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, l, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_desktopcontainertypecontext.default, {
            value: "medium",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: a
                })),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: s
                }))
            ]
        })
    })) : n === "8+4" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "medium",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(8)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "small",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: s
                }))
            })
        ]
    })) : n === "4+6" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "small",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1))),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "medium",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(6)), {
                    children: s
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1)))
        ]
    })) : n === "5+4" ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, l, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_desktopcontainertypecontext.default, {
            value: "small",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1))),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(5)), {
                    children: a
                })),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1))),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(4)), {
                    children: s
                })),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1)))
            ]
        })
    })) : n === "3+9" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "small",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(3)), {
                    children: a
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "medium",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(9)), {
                    children: s
                }))
            })
        ]
    })) : n === "10" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1))),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "large",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(10)), {
                    children: o
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(1)))
        ]
    })) : n === "8" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, l, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(2))),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_desktopcontainertypecontext.default, {
                value: "medium",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, d(8)), {
                    children: o
                }))
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread({}, d(2)))
        ]
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, l, e), {
        children: o
    }));
}, T = D;
