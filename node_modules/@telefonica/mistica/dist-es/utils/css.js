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
import { assignInlineVars as t } from "@vanilla-extract/dynamic";
import { isRunningAcceptanceTest as e } from "./platform.js";
const s = 16, o = (a)=>`${(parseFloat(a) / s).toFixed(3)}rem`, i = (a)=>_object_spread({}, t(a));
e();
e();
const c = e() ? "max(env(safe-area-inset-bottom), var(--acceptance-test-override-safe-area-inset-bottom, 0px))" : "env(safe-area-inset-bottom)";
e();
export { i as applyCssVars, o as pxToRem, c as safeAreaInsetBottom };
