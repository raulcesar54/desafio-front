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
    DOWN: function() {
        return r;
    },
    ENTER: function() {
        return c;
    },
    ESC: function() {
        return s;
    },
    LEFT: function() {
        return o;
    },
    RIGHT: function() {
        return n;
    },
    SPACE: function() {
        return E;
    },
    TAB: function() {
        return A;
    },
    UP: function() {
        return t;
    }
});
const o = "ArrowLeft", t = "ArrowUp", n = "ArrowRight", r = "ArrowDown", c = "Enter", s = "Escape", E = " ", A = "Tab";
