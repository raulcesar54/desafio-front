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
export { o as getLocalDateString, a as getLocalDateTimeString, e as getLocalYearMonthString };
