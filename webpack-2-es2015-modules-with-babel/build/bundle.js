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
    }, n.p = "", n(n.s = 2)
}([function(t, n, r) {
    "use strict";
    var e = r(1);
    r.d(n, "a", function() {
        return o
    });
    var u = "Alpha!",
        o = function() {
            return u
        };
    e.a
}, function(t, n, r) {
    "use strict";
    var e = "Beta";
    n.a = function() {
        return e
    }
}, function(t, n, r) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = r(0);
    console.log(r.i(e.a)())
}]);