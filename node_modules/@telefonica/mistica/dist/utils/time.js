"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getLocalDateString: function() {
        return o;
    },
    getLocalDateTimeString: function() {
        return a;
    },
    getLocalYearMonthString: function() {
        return e;
    }
});
const o = (t)=>{
    const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), g = String(t.getDate()).padStart(2, "0");
    return `${n}-${r}-${g}`;
}, e = (t)=>{
    const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0");
    return `${n}-${r}`;
}, a = (t)=>{
    const n = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
    return `${o(t)}T${n}:${r}`;
};
