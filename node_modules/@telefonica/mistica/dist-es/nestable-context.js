"use client";
import { jsx as u, Fragment as x } from "react/jsx-runtime";
import * as s from "react";
import { isEqual as h } from "./utils/helpers.js";
const C = (r)=>{
    const n = s.useRef();
    return h(r, n.current) || (n.current = r), n.current;
}, y = (r, n)=>// eslint-disable-next-line react-hooks/exhaustive-deps
    s.useEffect(r, C(n)), E = (r)=>r !== null && typeof r == "object" && !Array.isArray(r), N = (r, n)=>{
    const p = /*#__PURE__*/ s.createContext(()=>{}), a = /*#__PURE__*/ s.createContext(r);
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
        s.useEffect(()=>(o++, o > 1 && process.env.NODE_ENV !== "production" && console.warn(`Multiple NestableContext instances: ${o}`), ()=>{
                o--;
            }), []);
        const [t, c] = s.useReducer(f, []);
        let i = r;
        return t.length && (E(t[0]) ? n ? i = n(t) : i = Object.assign({}, r, ...t) : i = t[t.length - 1]), /* @__PURE__ */ u(p.Provider, {
            value: c,
            children: /* @__PURE__ */ u(a.Provider, {
                value: i,
                children: e
            })
        });
    }, l = (e)=>{
        const t = s.useContext(p);
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
    }, d = ()=>s.useContext(a);
    return {
        Setter: (param)=>{
            let { value: e } = param;
            return l(e), null;
        },
        Provider: m,
        Getter: (param)=>{
            let { children: e } = param;
            return /* @__PURE__ */ u(x, {
                children: e(d())
            });
        },
        useSetValue: l,
        useValue: d
    };
};
export { N as createNestableContext };
