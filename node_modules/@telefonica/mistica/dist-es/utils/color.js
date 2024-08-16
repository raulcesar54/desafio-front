const s = (t)=>{
    if (t.length === 4) return [
        parseInt(t.substr(-3, 1).repeat(2), 16),
        parseInt(t.substr(-2, 1).repeat(2), 16),
        parseInt(t.substr(-1, 1).repeat(2), 16)
    ];
    if (t.length === 7) return [
        parseInt(t.substr(-6, 2), 16),
        parseInt(t.substr(-4, 2), 16),
        parseInt(t.substr(-2, 2), 16)
    ];
    throw Error("Bad color");
}, n = (t, r)=>{
    try {
        return t.startsWith("var(") ? `rgba(${t}, ${r})` : `rgba(${s(t).join(",")}, ${r})`;
    } catch (e) {
        return t;
    }
};
export { n as applyAlpha, s as fromHexToRgb };
