const i = function(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    o ? window.open(e, "_blank") : n ? window.open(e, "_top") : window.location.assign(e);
};
export { i as redirect };
