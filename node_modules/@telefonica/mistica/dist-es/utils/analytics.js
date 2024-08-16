"use client";
import { jsx as s } from "react/jsx-runtime";
import * as e from "react";
const a = {
    userInteraction: "user_interaction"
}, c = {
    linkTapped: "link_tapped"
}, u = {
    userInteraction: "user_interaction"
}, n = /*#__PURE__*/ e.createContext({
    eventFormat: "universal-analytics"
}), p = (param)=>{
    let { children: o, eventFormat: t } = param;
    const r = e.useMemo(()=>({
            eventFormat: t
        }), [
        t
    ]);
    return /* @__PURE__ */ s(n.Provider, {
        value: r,
        children: o
    });
}, g = ()=>e.useContext(n);
export { p as TrackingConfig, c as eventActions, a as eventCategories, u as eventNames, g as useTrackingConfig };
