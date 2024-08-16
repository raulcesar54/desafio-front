import * as e from "react";
const i = function() {
    for(var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++){
        o[_key] = arguments[_key];
    }
    return (n)=>{
        o.forEach((t)=>{
            t && (typeof t == "function" ? t(n) : "current" in t && (t.current = n));
        });
    };
}, r = (o)=>{
    let n = "";
    return e.Children.forEach(o, (t)=>{
        typeof t == "string" && (n += t);
    }), n;
};
export { i as combineRefs, r as getTextFromChildren };
