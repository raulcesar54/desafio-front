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
    applyCssVars: function() {
        return i;
    },
    pxToRem: function() {
        return o;
    },
    safeAreaInsetBottom: function() {
        return c;
    }
});
const _dynamic = require("@vanilla-extract/dynamic");
const _platform = require("./platform.js");
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
const s = 16, o = (a)=>`${(parseFloat(a) / s).toFixed(3)}rem`, i = (a)=>_object_spread({}, (0, _dynamic.assignInlineVars)(a));
(0, _platform.isRunningAcceptanceTest)();
(0, _platform.isRunningAcceptanceTest)();
const c = (0, _platform.isRunningAcceptanceTest)() ? "max(env(safe-area-inset-bottom), var(--acceptance-test-override-safe-area-inset-bottom, 0px))" : "env(safe-area-inset-bottom)";
(0, _platform.isRunningAcceptanceTest)();
