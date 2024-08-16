"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createNestableContext", {
    enumerable: true,
    get: function() {
        return N;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _helpers = require("./utils/helpers.js");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const C = (r)=>{
    const n = _react.useRef();
    return (0, _helpers.isEqual)(r, n.current) || (n.current = r), n.current;
}, y = (r, n)=>_react.useEffect(r, C(n)), E = (r)=>r !== null && typeof r == "object" && !Array.isArray(r), N = (r, n)=>{
    const p = /*#__PURE__*/ _react.createContext(()=>{}), a = /*#__PURE__*/ _react.createContext(r);
    let o = 0;
    const f = (e, t)=>{
        switch(t.type){
            case "add":
                return [
                    ...e,
                    t.value
                ];
            case "remove":
                {
                    const c = e.indexOf(t.value);
                    return [
                        ...e.slice(0, c),
                        ...e.slice(c + 1, e.length)
                    ];
                }
            default:
                throw new Error(`Unhandled action type ${t.type}`);
        }
    }, m = (param)=>{
        let { children: e } = param;
        _react.useEffect(()=>(o++, o > 1 && process.env.NODE_ENV !== "production" && console.warn(`Multiple NestableContext instances: ${o}`), ()=>{
                o--;
            }), []);
        const [t, c] = _react.useReducer(f, []);
        let i = r;
        return t.length && (E(t[0]) ? n ? i = n(t) : i = Object.assign({}, r, ...t) : i = t[t.length - 1]), /* @__PURE__ */ (0, _jsxruntime.jsx)(p.Provider, {
            value: c,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(a.Provider, {
                value: i,
                children: e
            })
        });
    }, l = (e)=>{
        const t = _react.useContext(p);
        y(()=>(t({
                type: "add",
                value: e
            }), ()=>{
                t({
                    type: "remove",
                    value: e
                });
            }), [
            e,
            t
        ]);
    }, d = ()=>_react.useContext(a);
    return {
        Setter: (param)=>{
            let { value: e } = param;
            return l(e), null;
        },
        Provider: m,
        Getter: (param)=>{
            let { children: e } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: e(d())
            });
        },
        useSetValue: l,
        useValue: d
    };
};
