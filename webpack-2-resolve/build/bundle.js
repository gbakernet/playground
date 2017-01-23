! function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var u = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(u.exports, u, u.exports, n), u.l = !0, u.exports
    }
    var r = {};
    return n.m = t, n.c = r, n.i = function(t) {
        return t
    }, n.d = function(t, r, e) {
        n.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, n.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(r, "a", r), r
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "", n(n.s = 3)
}([function(t, n, r) {
    "use strict";
    var e = r(2);
    const u = "Alpha!",
        o = function() {
            return u
        };
    n.a = o;
    e.a
}, function(t, n, r) {
    "use strict";

    function e(t, n, r) {
        if (t += "", n -= t.length, n <= 0) return t;
        if (r || 0 === r || (r = " "), r += "", " " === r && n < 10) return u[n] + t;
        for (var e = "";;) {
            if (1 & n && (e += r), n >>= 1, !n) break;
            r += r
        }
        return e + t
    }
    t.exports = e;
    var u = ["", " ", "  ", "   ", "    ", "     ", "      ", "       ", "        ", "         "]
}, function(t, n, r) {
    "use strict";
    const e = "Beta";
    n.a = function() {
        return e
    }
}, function(t, n, r) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = r(0),
        u = r(1),
        o = r.n(u);
    console.log(o()(r.i(e.a)(), 10))
}]);