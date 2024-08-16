const e = ()=>typeof window > "u", i = ()=>!e(), o = ()=>i() ? window.matchMedia("(pointer: coarse)").matches : !1;
export { i as isClientSide, e as isServerSide, o as isTouchableDevice };
