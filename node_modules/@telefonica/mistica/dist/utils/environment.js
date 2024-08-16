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
    isClientSide: function() {
        return i;
    },
    isServerSide: function() {
        return e;
    },
    isTouchableDevice: function() {
        return o;
    }
});
const e = ()=>typeof window > "u", i = ()=>!e(), o = ()=>i() ? window.matchMedia("(pointer: coarse)").matches : !1;
