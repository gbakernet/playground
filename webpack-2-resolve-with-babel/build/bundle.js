! function(r) {
    function t(e) {
        if (n[e]) return n[e].exports;
        var u = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return r[e].call(u.exports, u, u.exports, t), u.l = !0, u.exports
    }
    var n = {};
    return t.m = r, t.c = n, t.i = function(r) {
        return r
    }, t.d = function(r, n, e) {
        t.o(r, n) || Object.defineProperty(r, n, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, t.n = function(r) {
        var n = r && r.__esModule ? function() {
            return r.default
        } : function() {
            return r
        };
        return t.d(n, "a", n), n
    }, t.o = function(r, t) {
        return Object.prototype.hasOwnProperty.call(r, t)
    }, t.p = "", t(t.s = 3)
}([function(r, t, n) {
    "use strict";
    var e = n(2);
    n.d(t, "a", function() {
        return o
    });
    var u = "Alpha!",
        o = function() {
            return u
        };
    e.a
}, function(r, t, n) {
    "use strict";

    function e(r, t, n) {
        if (r += "", t -= r.length, t <= 0) return r;
        if (n || 0 === n || (n = " "), n += "", " " === n && t < 10) return u[t] + r;
        for (var e = "";;) {
            if (1 & t && (e += n), t >>= 1, !t) break;
            n += n
        }
        return e + r
    }
    r.exports = e;
    var u = ["", " ", "  ", "   ", "    ", "     ", "      ", "       ", "        ", "         "]
}, function(r, t, n) {
    "use strict";
    var e = "Beta";
    t.a = function() {
        return e
    }
}, function(r, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = n(0),
        u = n(1),
        o = n.n(u);
    console.log(o()(n.i(e.a)(), 10))
}]);