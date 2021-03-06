! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 66)
}([function(e, t, n) {
    (function(e) {
        ! function(n) {
            "use strict";
            var a = {};
            a.exports = t,
                function(t) {
                    var n = "undefined" == typeof window ? e : window,
                        a = n.GLMAT_EPSILON;
                    null == a && (a = 1e-6);
                    var i = n.GLMAT_ARRAY_TYPE || Array,
                        r = n.GLMAT_RANDOM;
                    r || (r = Math.random);
                    var o = {};
                    o.setMatrixArrayType = function(e) {
                        i = e
                    }, void 0 !== t && (t.glMatrix = o);
                    var s = Math.PI / 180;
                    o.toRadian = function(e) {
                        return e * s
                    };
                    var c = {};
                    c.create = function() {
                        var e = new i(2);
                        return e[0] = 0, e[1] = 0, e
                    }, c.clone = function(e) {
                        var t = new i(2);
                        return t[0] = e[0], t[1] = e[1], t
                    }, c.fromValues = function(e, t) {
                        var n = new i(2);
                        return n[0] = e, n[1] = t, n
                    }, c.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e
                    }, c.set = function(e, t, n) {
                        return e[0] = t, e[1] = n, e
                    }, c.add = function(e, t, n) {
                        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
                    }, c.subtract = function(e, t, n) {
                        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
                    }, c.sub = c.subtract, c.multiply = function(e, t, n) {
                        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
                    }, c.mul = c.multiply, c.divide = function(e, t, n) {
                        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e
                    }, c.div = c.divide, c.min = function(e, t, n) {
                        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e
                    }, c.max = function(e, t, n) {
                        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e
                    }, c.scale = function(e, t, n) {
                        return e[0] = t[0] * n, e[1] = t[1] * n, e
                    }, c.scaleAndAdd = function(e, t, n, a) {
                        return e[0] = t[0] + n[0] * a, e[1] = t[1] + n[1] * a, e
                    }, c.distance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1];
                        return Math.sqrt(n * n + a * a)
                    }, c.dist = c.distance, c.squaredDistance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1];
                        return n * n + a * a
                    }, c.sqrDist = c.squaredDistance, c.length = function(e) {
                        var t = e[0],
                            n = e[1];
                        return Math.sqrt(t * t + n * n)
                    }, c.len = c.length, c.squaredLength = function(e) {
                        var t = e[0],
                            n = e[1];
                        return t * t + n * n
                    }, c.sqrLen = c.squaredLength, c.negate = function(e, t) {
                        return e[0] = -t[0], e[1] = -t[1], e
                    }, c.inverse = function(e, t) {
                        return e[0] = 1 / t[0], e[1] = 1 / t[1], e
                    }, c.normalize = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = n * n + a * a;
                        return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
                    }, c.dot = function(e, t) {
                        return e[0] * t[0] + e[1] * t[1]
                    }, c.cross = function(e, t, n) {
                        var a = t[0] * n[1] - t[1] * n[0];
                        return e[0] = e[1] = 0, e[2] = a, e
                    }, c.lerp = function(e, t, n, a) {
                        var i = t[0],
                            r = t[1];
                        return e[0] = i + a * (n[0] - i), e[1] = r + a * (n[1] - r), e
                    }, c.random = function(e, t) {
                        t = t || 1;
                        var n = 2 * r() * Math.PI;
                        return e[0] = Math.cos(n) * t, e[1] = Math.sin(n) * t, e
                    }, c.transformMat2 = function(e, t, n) {
                        var a = t[0],
                            i = t[1];
                        return e[0] = n[0] * a + n[2] * i, e[1] = n[1] * a + n[3] * i, e
                    }, c.transformMat2d = function(e, t, n) {
                        var a = t[0],
                            i = t[1];
                        return e[0] = n[0] * a + n[2] * i + n[4], e[1] = n[1] * a + n[3] * i + n[5], e
                    }, c.transformMat3 = function(e, t, n) {
                        var a = t[0],
                            i = t[1];
                        return e[0] = n[0] * a + n[3] * i + n[6], e[1] = n[1] * a + n[4] * i + n[7], e
                    }, c.transformMat4 = function(e, t, n) {
                        var a = t[0],
                            i = t[1];
                        return e[0] = n[0] * a + n[4] * i + n[12], e[1] = n[1] * a + n[5] * i + n[13], e
                    }, c.forEach = function() {
                        var e = c.create();
                        return function(t, n, a, i, r, o) {
                            var s, c;
                            for (n || (n = 2), a || (a = 0), c = i ? Math.min(i * n + a, t.length) : t.length, s = a; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], r(e, e, o), t[s] = e[0], t[s + 1] = e[1];
                            return t
                        }
                    }(), c.str = function(e) {
                        return "vec2(" + e[0] + ", " + e[1] + ")"
                    }, void 0 !== t && (t.vec2 = c);
                    var l = {};
                    l.create = function() {
                        var e = new i(3);
                        return e[0] = 0, e[1] = 0, e[2] = 0, e
                    }, l.clone = function(e) {
                        var t = new i(3);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
                    }, l.fromValues = function(e, t, n) {
                        var a = new i(3);
                        return a[0] = e, a[1] = t, a[2] = n, a
                    }, l.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
                    }, l.set = function(e, t, n, a) {
                        return e[0] = t, e[1] = n, e[2] = a, e
                    }, l.add = function(e, t, n) {
                        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
                    }, l.subtract = function(e, t, n) {
                        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
                    }, l.sub = l.subtract, l.multiply = function(e, t, n) {
                        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
                    }, l.mul = l.multiply, l.divide = function(e, t, n) {
                        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e
                    }, l.div = l.divide, l.min = function(e, t, n) {
                        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e
                    }, l.max = function(e, t, n) {
                        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e
                    }, l.scale = function(e, t, n) {
                        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
                    }, l.scaleAndAdd = function(e, t, n, a) {
                        return e[0] = t[0] + n[0] * a, e[1] = t[1] + n[1] * a, e[2] = t[2] + n[2] * a, e
                    }, l.distance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1],
                            i = t[2] - e[2];
                        return Math.sqrt(n * n + a * a + i * i)
                    }, l.dist = l.distance, l.squaredDistance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1],
                            i = t[2] - e[2];
                        return n * n + a * a + i * i
                    }, l.sqrDist = l.squaredDistance, l.length = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2];
                        return Math.sqrt(t * t + n * n + a * a)
                    }, l.len = l.length, l.squaredLength = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2];
                        return t * t + n * n + a * a
                    }, l.sqrLen = l.squaredLength, l.negate = function(e, t) {
                        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
                    }, l.inverse = function(e, t) {
                        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
                    }, l.normalize = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = n * n + a * a + i * i;
                        return r > 0 && (r = 1 / Math.sqrt(r), e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r), e
                    }, l.dot = function(e, t) {
                        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
                    }, l.cross = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = n[0],
                            s = n[1],
                            c = n[2];
                        return e[0] = i * c - r * s, e[1] = r * o - a * c, e[2] = a * s - i * o, e
                    }, l.lerp = function(e, t, n, a) {
                        var i = t[0],
                            r = t[1],
                            o = t[2];
                        return e[0] = i + a * (n[0] - i), e[1] = r + a * (n[1] - r), e[2] = o + a * (n[2] - o), e
                    }, l.random = function(e, t) {
                        t = t || 1;
                        var n = 2 * r() * Math.PI,
                            a = 2 * r() - 1,
                            i = Math.sqrt(1 - a * a) * t;
                        return e[0] = Math.cos(n) * i, e[1] = Math.sin(n) * i, e[2] = a * t, e
                    }, l.transformMat4 = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = n[3] * a + n[7] * i + n[11] * r + n[15];
                        return o = o || 1, e[0] = (n[0] * a + n[4] * i + n[8] * r + n[12]) / o, e[1] = (n[1] * a + n[5] * i + n[9] * r + n[13]) / o, e[2] = (n[2] * a + n[6] * i + n[10] * r + n[14]) / o, e
                    }, l.transformMat3 = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2];
                        return e[0] = a * n[0] + i * n[3] + r * n[6], e[1] = a * n[1] + i * n[4] + r * n[7], e[2] = a * n[2] + i * n[5] + r * n[8], e
                    }, l.transformQuat = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = n[0],
                            s = n[1],
                            c = n[2],
                            l = n[3],
                            u = l * a + s * r - c * i,
                            p = l * i + c * a - o * r,
                            d = l * r + o * i - s * a,
                            f = -o * a - s * i - c * r;
                        return e[0] = u * l + f * -o + p * -c - d * -s, e[1] = p * l + f * -s + d * -o - u * -c, e[2] = d * l + f * -c + u * -s - p * -o, e
                    }, l.rotateX = function(e, t, n, a) {
                        var i = [],
                            r = [];
                        return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], r[0] = i[0], r[1] = i[1] * Math.cos(a) - i[2] * Math.sin(a), r[2] = i[1] * Math.sin(a) + i[2] * Math.cos(a), e[0] = r[0] + n[0], e[1] = r[1] + n[1], e[2] = r[2] + n[2], e
                    }, l.rotateY = function(e, t, n, a) {
                        var i = [],
                            r = [];
                        return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], r[0] = i[2] * Math.sin(a) + i[0] * Math.cos(a), r[1] = i[1], r[2] = i[2] * Math.cos(a) - i[0] * Math.sin(a), e[0] = r[0] + n[0], e[1] = r[1] + n[1], e[2] = r[2] + n[2], e
                    }, l.rotateZ = function(e, t, n, a) {
                        var i = [],
                            r = [];
                        return i[0] = t[0] - n[0], i[1] = t[1] - n[1], i[2] = t[2] - n[2], r[0] = i[0] * Math.cos(a) - i[1] * Math.sin(a), r[1] = i[0] * Math.sin(a) + i[1] * Math.cos(a), r[2] = i[2], e[0] = r[0] + n[0], e[1] = r[1] + n[1], e[2] = r[2] + n[2], e
                    }, l.forEach = function() {
                        var e = l.create();
                        return function(t, n, a, i, r, o) {
                            var s, c;
                            for (n || (n = 3), a || (a = 0), c = i ? Math.min(i * n + a, t.length) : t.length, s = a; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], r(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
                            return t
                        }
                    }(), l.angle = function(e, t) {
                        var n = l.fromValues(e[0], e[1], e[2]),
                            a = l.fromValues(t[0], t[1], t[2]);
                        l.normalize(n, n), l.normalize(a, a);
                        var i = l.dot(n, a);
                        return i > 1 ? 0 : Math.acos(i)
                    }, l.str = function(e) {
                        return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                    }, void 0 !== t && (t.vec3 = l);
                    var u = {};
                    u.create = function() {
                        var e = new i(4);
                        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
                    }, u.clone = function(e) {
                        var t = new i(4);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                    }, u.fromValues = function(e, t, n, a) {
                        var r = new i(4);
                        return r[0] = e, r[1] = t, r[2] = n, r[3] = a, r
                    }, u.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                    }, u.set = function(e, t, n, a, i) {
                        return e[0] = t, e[1] = n, e[2] = a, e[3] = i, e
                    }, u.add = function(e, t, n) {
                        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
                    }, u.subtract = function(e, t, n) {
                        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
                    }, u.sub = u.subtract, u.multiply = function(e, t, n) {
                        return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e
                    }, u.mul = u.multiply, u.divide = function(e, t, n) {
                        return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e
                    }, u.div = u.divide, u.min = function(e, t, n) {
                        return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e
                    }, u.max = function(e, t, n) {
                        return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e
                    }, u.scale = function(e, t, n) {
                        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
                    }, u.scaleAndAdd = function(e, t, n, a) {
                        return e[0] = t[0] + n[0] * a, e[1] = t[1] + n[1] * a, e[2] = t[2] + n[2] * a, e[3] = t[3] + n[3] * a, e
                    }, u.distance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1],
                            i = t[2] - e[2],
                            r = t[3] - e[3];
                        return Math.sqrt(n * n + a * a + i * i + r * r)
                    }, u.dist = u.distance, u.squaredDistance = function(e, t) {
                        var n = t[0] - e[0],
                            a = t[1] - e[1],
                            i = t[2] - e[2],
                            r = t[3] - e[3];
                        return n * n + a * a + i * i + r * r
                    }, u.sqrDist = u.squaredDistance, u.length = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[3];
                        return Math.sqrt(t * t + n * n + a * a + i * i)
                    }, u.len = u.length, u.squaredLength = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[3];
                        return t * t + n * n + a * a + i * i
                    }, u.sqrLen = u.squaredLength, u.negate = function(e, t) {
                        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
                    }, u.inverse = function(e, t) {
                        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
                    }, u.normalize = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = n * n + a * a + i * i + r * r;
                        return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o, e[3] = t[3] * o), e
                    }, u.dot = function(e, t) {
                        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
                    }, u.lerp = function(e, t, n, a) {
                        var i = t[0],
                            r = t[1],
                            o = t[2],
                            s = t[3];
                        return e[0] = i + a * (n[0] - i), e[1] = r + a * (n[1] - r), e[2] = o + a * (n[2] - o), e[3] = s + a * (n[3] - s), e
                    }, u.random = function(e, t) {
                        return t = t || 1, e[0] = r(), e[1] = r(), e[2] = r(), e[3] = r(), u.normalize(e, e), u.scale(e, e, t), e
                    }, u.transformMat4 = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3];
                        return e[0] = n[0] * a + n[4] * i + n[8] * r + n[12] * o, e[1] = n[1] * a + n[5] * i + n[9] * r + n[13] * o, e[2] = n[2] * a + n[6] * i + n[10] * r + n[14] * o, e[3] = n[3] * a + n[7] * i + n[11] * r + n[15] * o, e
                    }, u.transformQuat = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = n[0],
                            s = n[1],
                            c = n[2],
                            l = n[3],
                            u = l * a + s * r - c * i,
                            p = l * i + c * a - o * r,
                            d = l * r + o * i - s * a,
                            f = -o * a - s * i - c * r;
                        return e[0] = u * l + f * -o + p * -c - d * -s, e[1] = p * l + f * -s + d * -o - u * -c, e[2] = d * l + f * -c + u * -s - p * -o, e
                    }, u.forEach = function() {
                        var e = u.create();
                        return function(t, n, a, i, r, o) {
                            var s, c;
                            for (n || (n = 4), a || (a = 0), c = i ? Math.min(i * n + a, t.length) : t.length, s = a; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], r(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3];
                            return t
                        }
                    }(), u.str = function(e) {
                        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                    }, void 0 !== t && (t.vec4 = u);
                    var p = {};
                    p.create = function() {
                        var e = new i(4);
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
                    }, p.clone = function(e) {
                        var t = new i(4);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                    }, p.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                    }, p.identity = function(e) {
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
                    }, p.transpose = function(e, t) {
                        if (e === t) {
                            var n = t[1];
                            e[1] = t[2], e[2] = n
                        } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
                        return e
                    }, p.invert = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = n * r - i * a;
                        return o ? (o = 1 / o, e[0] = r * o, e[1] = -a * o, e[2] = -i * o, e[3] = n * o, e) : null
                    }, p.adjoint = function(e, t) {
                        var n = t[0];
                        return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = n, e
                    }, p.determinant = function(e) {
                        return e[0] * e[3] - e[2] * e[1]
                    }, p.multiply = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = n[0],
                            c = n[1],
                            l = n[2],
                            u = n[3];
                        return e[0] = a * s + r * c, e[1] = i * s + o * c, e[2] = a * l + r * u, e[3] = i * l + o * u, e
                    }, p.mul = p.multiply, p.rotate = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = Math.sin(n),
                            c = Math.cos(n);
                        return e[0] = a * c + r * s, e[1] = i * c + o * s, e[2] = a * -s + r * c, e[3] = i * -s + o * c, e
                    }, p.scale = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = n[0],
                            c = n[1];
                        return e[0] = a * s, e[1] = i * s, e[2] = r * c, e[3] = o * c, e
                    }, p.str = function(e) {
                        return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                    }, p.frob = function(e) {
                        return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2))
                    }, p.LDU = function(e, t, n, a) {
                        return e[2] = a[2] / a[0], n[0] = a[0], n[1] = a[1], n[3] = a[3] - e[2] * n[1], [e, t, n]
                    }, void 0 !== t && (t.mat2 = p);
                    var d = {};
                    d.create = function() {
                        var e = new i(6);
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
                    }, d.clone = function(e) {
                        var t = new i(6);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                    }, d.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
                    }, d.identity = function(e) {
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
                    }, d.invert = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = n * r - a * i;
                        return c ? (c = 1 / c, e[0] = r * c, e[1] = -a * c, e[2] = -i * c, e[3] = n * c, e[4] = (i * s - r * o) * c, e[5] = (a * o - n * s) * c, e) : null
                    }, d.determinant = function(e) {
                        return e[0] * e[3] - e[1] * e[2]
                    }, d.multiply = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = n[0],
                            u = n[1],
                            p = n[2],
                            d = n[3],
                            f = n[4],
                            h = n[5];
                        return e[0] = a * l + r * u, e[1] = i * l + o * u, e[2] = a * p + r * d, e[3] = i * p + o * d, e[4] = a * f + r * h + s, e[5] = i * f + o * h + c, e
                    }, d.mul = d.multiply, d.rotate = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = Math.sin(n),
                            u = Math.cos(n);
                        return e[0] = a * u + r * l, e[1] = i * u + o * l, e[2] = a * -l + r * u, e[3] = i * -l + o * u, e[4] = s, e[5] = c, e
                    }, d.scale = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = n[0],
                            u = n[1];
                        return e[0] = a * l, e[1] = i * l, e[2] = r * u, e[3] = o * u, e[4] = s, e[5] = c, e
                    }, d.translate = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = n[0],
                            u = n[1];
                        return e[0] = a, e[1] = i, e[2] = r, e[3] = o, e[4] = a * l + r * u + s, e[5] = i * l + o * u + c, e
                    }, d.str = function(e) {
                        return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")"
                    }, d.frob = function(e) {
                        return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + 1)
                    }, void 0 !== t && (t.mat2d = d);
                    var f = {};
                    f.create = function() {
                        var e = new i(9);
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
                    }, f.fromMat4 = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
                    }, f.clone = function(e) {
                        var t = new i(9);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
                    }, f.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
                    }, f.identity = function(e) {
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
                    }, f.transpose = function(e, t) {
                        if (e === t) {
                            var n = t[1],
                                a = t[2],
                                i = t[5];
                            e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = a, e[7] = i
                        } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
                        return e
                    }, f.invert = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[7],
                            u = t[8],
                            p = u * o - s * l,
                            d = -u * r + s * c,
                            f = l * r - o * c,
                            h = n * p + a * d + i * f;
                        return h ? (h = 1 / h, e[0] = p * h, e[1] = (-u * a + i * l) * h, e[2] = (s * a - i * o) * h, e[3] = d * h, e[4] = (u * n - i * c) * h, e[5] = (-s * n + i * r) * h, e[6] = f * h, e[7] = (-l * n + a * c) * h, e[8] = (o * n - a * r) * h, e) : null
                    }, f.adjoint = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[7],
                            u = t[8];
                        return e[0] = o * u - s * l, e[1] = i * l - a * u, e[2] = a * s - i * o, e[3] = s * c - r * u, e[4] = n * u - i * c, e[5] = i * r - n * s, e[6] = r * l - o * c, e[7] = a * c - n * l, e[8] = n * o - a * r, e
                    }, f.determinant = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[3],
                            r = e[4],
                            o = e[5],
                            s = e[6],
                            c = e[7],
                            l = e[8];
                        return t * (l * r - o * c) + n * (-l * i + o * s) + a * (c * i - r * s)
                    }, f.multiply = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = t[6],
                            u = t[7],
                            p = t[8],
                            d = n[0],
                            f = n[1],
                            h = n[2],
                            m = n[3],
                            v = n[4],
                            g = n[5],
                            x = n[6],
                            _ = n[7],
                            y = n[8];
                        return e[0] = d * a + f * o + h * l, e[1] = d * i + f * s + h * u, e[2] = d * r + f * c + h * p, e[3] = m * a + v * o + g * l, e[4] = m * i + v * s + g * u, e[5] = m * r + v * c + g * p, e[6] = x * a + _ * o + y * l, e[7] = x * i + _ * s + y * u, e[8] = x * r + _ * c + y * p, e
                    }, f.mul = f.multiply, f.translate = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = t[6],
                            u = t[7],
                            p = t[8],
                            d = n[0],
                            f = n[1];
                        return e[0] = a, e[1] = i, e[2] = r, e[3] = o, e[4] = s, e[5] = c, e[6] = d * a + f * o + l, e[7] = d * i + f * s + u, e[8] = d * r + f * c + p, e
                    }, f.rotate = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = t[6],
                            u = t[7],
                            p = t[8],
                            d = Math.sin(n),
                            f = Math.cos(n);
                        return e[0] = f * a + d * o, e[1] = f * i + d * s, e[2] = f * r + d * c, e[3] = f * o - d * a, e[4] = f * s - d * i, e[5] = f * c - d * r, e[6] = l, e[7] = u, e[8] = p, e
                    }, f.scale = function(e, t, n) {
                        var a = n[0],
                            i = n[1];
                        return e[0] = a * t[0], e[1] = a * t[1], e[2] = a * t[2], e[3] = i * t[3], e[4] = i * t[4], e[5] = i * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
                    }, f.fromMat2d = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e
                    }, f.fromQuat = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = n + n,
                            s = a + a,
                            c = i + i,
                            l = n * o,
                            u = a * o,
                            p = a * s,
                            d = i * o,
                            f = i * s,
                            h = i * c,
                            m = r * o,
                            v = r * s,
                            g = r * c;
                        return e[0] = 1 - p - h, e[3] = u - g, e[6] = d + v, e[1] = u + g, e[4] = 1 - l - h, e[7] = f - m, e[2] = d - v, e[5] = f + m, e[8] = 1 - l - p, e
                    }, f.normalFromMat4 = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[7],
                            u = t[8],
                            p = t[9],
                            d = t[10],
                            f = t[11],
                            h = t[12],
                            m = t[13],
                            v = t[14],
                            g = t[15],
                            x = n * s - a * o,
                            _ = n * c - i * o,
                            y = n * l - r * o,
                            b = a * c - i * s,
                            T = a * l - r * s,
                            E = i * l - r * c,
                            w = u * m - p * h,
                            A = u * v - d * h,
                            S = u * g - f * h,
                            C = p * v - d * m,
                            R = p * g - f * m,
                            M = d * g - f * v,
                            N = x * M - _ * R + y * C + b * S - T * A + E * w;
                        return N ? (N = 1 / N, e[0] = (s * M - c * R + l * C) * N, e[1] = (c * S - o * M - l * A) * N, e[2] = (o * R - s * S + l * w) * N, e[3] = (i * R - a * M - r * C) * N, e[4] = (n * M - i * S + r * A) * N, e[5] = (a * S - n * R - r * w) * N, e[6] = (m * E - v * T + g * b) * N, e[7] = (v * y - h * E - g * _) * N, e[8] = (h * T - m * y + g * x) * N, e) : null
                    }, f.str = function(e) {
                        return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")"
                    }, f.frob = function(e) {
                        return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2))
                    }, void 0 !== t && (t.mat3 = f);
                    var h = {};
                    h.create = function() {
                        var e = new i(16);
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, h.clone = function(e) {
                        var t = new i(16);
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                    }, h.copy = function(e, t) {
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                    }, h.identity = function(e) {
                        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, h.transpose = function(e, t) {
                        if (e === t) {
                            var n = t[1],
                                a = t[2],
                                i = t[3],
                                r = t[6],
                                o = t[7],
                                s = t[11];
                            e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = a, e[9] = r, e[11] = t[14], e[12] = i, e[13] = o, e[14] = s
                        } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
                        return e
                    }, h.invert = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[7],
                            u = t[8],
                            p = t[9],
                            d = t[10],
                            f = t[11],
                            h = t[12],
                            m = t[13],
                            v = t[14],
                            g = t[15],
                            x = n * s - a * o,
                            _ = n * c - i * o,
                            y = n * l - r * o,
                            b = a * c - i * s,
                            T = a * l - r * s,
                            E = i * l - r * c,
                            w = u * m - p * h,
                            A = u * v - d * h,
                            S = u * g - f * h,
                            C = p * v - d * m,
                            R = p * g - f * m,
                            M = d * g - f * v,
                            N = x * M - _ * R + y * C + b * S - T * A + E * w;
                        return N ? (N = 1 / N, e[0] = (s * M - c * R + l * C) * N, e[1] = (i * R - a * M - r * C) * N, e[2] = (m * E - v * T + g * b) * N, e[3] = (d * T - p * E - f * b) * N, e[4] = (c * S - o * M - l * A) * N, e[5] = (n * M - i * S + r * A) * N, e[6] = (v * y - h * E - g * _) * N, e[7] = (u * E - d * y + f * _) * N, e[8] = (o * R - s * S + l * w) * N, e[9] = (a * S - n * R - r * w) * N, e[10] = (h * T - m * y + g * x) * N, e[11] = (p * y - u * T - f * x) * N, e[12] = (s * A - o * C - c * w) * N, e[13] = (n * C - a * A + i * w) * N, e[14] = (m * _ - h * b - v * x) * N, e[15] = (u * b - p * _ + d * x) * N, e) : null
                    }, h.adjoint = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[7],
                            u = t[8],
                            p = t[9],
                            d = t[10],
                            f = t[11],
                            h = t[12],
                            m = t[13],
                            v = t[14],
                            g = t[15];
                        return e[0] = s * (d * g - f * v) - p * (c * g - l * v) + m * (c * f - l * d), e[1] = -(a * (d * g - f * v) - p * (i * g - r * v) + m * (i * f - r * d)), e[2] = a * (c * g - l * v) - s * (i * g - r * v) + m * (i * l - r * c), e[3] = -(a * (c * f - l * d) - s * (i * f - r * d) + p * (i * l - r * c)), e[4] = -(o * (d * g - f * v) - u * (c * g - l * v) + h * (c * f - l * d)), e[5] = n * (d * g - f * v) - u * (i * g - r * v) + h * (i * f - r * d), e[6] = -(n * (c * g - l * v) - o * (i * g - r * v) + h * (i * l - r * c)), e[7] = n * (c * f - l * d) - o * (i * f - r * d) + u * (i * l - r * c), e[8] = o * (p * g - f * m) - u * (s * g - l * m) + h * (s * f - l * p), e[9] = -(n * (p * g - f * m) - u * (a * g - r * m) + h * (a * f - r * p)), e[10] = n * (s * g - l * m) - o * (a * g - r * m) + h * (a * l - r * s), e[11] = -(n * (s * f - l * p) - o * (a * f - r * p) + u * (a * l - r * s)), e[12] = -(o * (p * v - d * m) - u * (s * v - c * m) + h * (s * d - c * p)), e[13] = n * (p * v - d * m) - u * (a * v - i * m) + h * (a * d - i * p), e[14] = -(n * (s * v - c * m) - o * (a * v - i * m) + h * (a * c - i * s)), e[15] = n * (s * d - c * p) - o * (a * d - i * p) + u * (a * c - i * s), e
                    }, h.determinant = function(e) {
                        var t = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[3],
                            r = e[4],
                            o = e[5],
                            s = e[6],
                            c = e[7],
                            l = e[8],
                            u = e[9],
                            p = e[10],
                            d = e[11],
                            f = e[12],
                            h = e[13],
                            m = e[14],
                            v = e[15];
                        return (t * o - n * r) * (p * v - d * m) - (t * s - a * r) * (u * v - d * h) + (t * c - i * r) * (u * m - p * h) + (n * s - a * o) * (l * v - d * f) - (n * c - i * o) * (l * m - p * f) + (a * c - i * s) * (l * h - u * f)
                    }, h.multiply = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = t[4],
                            c = t[5],
                            l = t[6],
                            u = t[7],
                            p = t[8],
                            d = t[9],
                            f = t[10],
                            h = t[11],
                            m = t[12],
                            v = t[13],
                            g = t[14],
                            x = t[15],
                            _ = n[0],
                            y = n[1],
                            b = n[2],
                            T = n[3];
                        return e[0] = _ * a + y * s + b * p + T * m, e[1] = _ * i + y * c + b * d + T * v, e[2] = _ * r + y * l + b * f + T * g, e[3] = _ * o + y * u + b * h + T * x, _ = n[4], y = n[5], b = n[6], T = n[7], e[4] = _ * a + y * s + b * p + T * m, e[5] = _ * i + y * c + b * d + T * v, e[6] = _ * r + y * l + b * f + T * g, e[7] = _ * o + y * u + b * h + T * x, _ = n[8], y = n[9], b = n[10], T = n[11], e[8] = _ * a + y * s + b * p + T * m, e[9] = _ * i + y * c + b * d + T * v, e[10] = _ * r + y * l + b * f + T * g, e[11] = _ * o + y * u + b * h + T * x, _ = n[12], y = n[13], b = n[14], T = n[15], e[12] = _ * a + y * s + b * p + T * m, e[13] = _ * i + y * c + b * d + T * v, e[14] = _ * r + y * l + b * f + T * g, e[15] = _ * o + y * u + b * h + T * x, e
                    }, h.multiplyAffine = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[4],
                            s = t[5],
                            c = t[6],
                            l = t[8],
                            u = t[9],
                            p = t[10],
                            d = t[12],
                            f = t[13],
                            h = t[14],
                            m = n[0],
                            v = n[1],
                            g = n[2];
                        return e[0] = m * a + v * o + g * l, e[1] = m * i + v * s + g * u, e[2] = m * r + v * c + g * p, m = n[4], v = n[5], g = n[6], e[4] = m * a + v * o + g * l, e[5] = m * i + v * s + g * u, e[6] = m * r + v * c + g * p, m = n[8], v = n[9], g = n[10], e[8] = m * a + v * o + g * l, e[9] = m * i + v * s + g * u, e[10] = m * r + v * c + g * p, m = n[12], v = n[13], g = n[14], e[12] = m * a + v * o + g * l + d, e[13] = m * i + v * s + g * u + f, e[14] = m * r + v * c + g * p + h, e
                    }, h.mul = h.multiply, h.mulAffine = h.multiplyAffine, h.translate = function(e, t, n) {
                        var a, i, r, o, s, c, l, u, p, d, f, h, m = n[0],
                            v = n[1],
                            g = n[2];
                        return t === e ? (e[12] = t[0] * m + t[4] * v + t[8] * g + t[12], e[13] = t[1] * m + t[5] * v + t[9] * g + t[13], e[14] = t[2] * m + t[6] * v + t[10] * g + t[14], e[15] = t[3] * m + t[7] * v + t[11] * g + t[15]) : (a = t[0], i = t[1], r = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], p = t[8], d = t[9], f = t[10], h = t[11], e[0] = a, e[1] = i, e[2] = r, e[3] = o, e[4] = s, e[5] = c, e[6] = l, e[7] = u, e[8] = p, e[9] = d, e[10] = f, e[11] = h, e[12] = a * m + s * v + p * g + t[12], e[13] = i * m + c * v + d * g + t[13], e[14] = r * m + l * v + f * g + t[14], e[15] = o * m + u * v + h * g + t[15]), e
                    }, h.scale = function(e, t, n) {
                        var a = n[0],
                            i = n[1],
                            r = n[2];
                        return e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e[3] = t[3] * a, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * r, e[9] = t[9] * r, e[10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                    }, h.rotate = function(e, t, n, i) {
                        var r, o, s, c, l, u, p, d, f, h, m, v, g, x, _, y, b, T, E, w, A, S, C, R, M = i[0],
                            N = i[1],
                            L = i[2],
                            O = Math.sqrt(M * M + N * N + L * L);
                        return Math.abs(O) < a ? null : (O = 1 / O, M *= O, N *= O, L *= O, r = Math.sin(n), o = Math.cos(n), s = 1 - o, c = t[0], l = t[1], u = t[2], p = t[3], d = t[4], f = t[5], h = t[6], m = t[7], v = t[8], g = t[9], x = t[10], _ = t[11], y = M * M * s + o, b = N * M * s + L * r, T = L * M * s - N * r, E = M * N * s - L * r, w = N * N * s + o, A = L * N * s + M * r, S = M * L * s + N * r, C = N * L * s - M * r, R = L * L * s + o, e[0] = c * y + d * b + v * T, e[1] = l * y + f * b + g * T, e[2] = u * y + h * b + x * T, e[3] = p * y + m * b + _ * T, e[4] = c * E + d * w + v * A, e[5] = l * E + f * w + g * A, e[6] = u * E + h * w + x * A, e[7] = p * E + m * w + _ * A, e[8] = c * S + d * C + v * R, e[9] = l * S + f * C + g * R, e[10] = u * S + h * C + x * R, e[11] = p * S + m * C + _ * R, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e)
                    }, h.rotateX = function(e, t, n) {
                        var a = Math.sin(n),
                            i = Math.cos(n),
                            r = t[4],
                            o = t[5],
                            s = t[6],
                            c = t[7],
                            l = t[8],
                            u = t[9],
                            p = t[10],
                            d = t[11];
                        return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = r * i + l * a, e[5] = o * i + u * a, e[6] = s * i + p * a, e[7] = c * i + d * a, e[8] = l * i - r * a, e[9] = u * i - o * a, e[10] = p * i - s * a, e[11] = d * i - c * a, e
                    }, h.rotateY = function(e, t, n) {
                        var a = Math.sin(n),
                            i = Math.cos(n),
                            r = t[0],
                            o = t[1],
                            s = t[2],
                            c = t[3],
                            l = t[8],
                            u = t[9],
                            p = t[10],
                            d = t[11];
                        return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = r * i - l * a, e[1] = o * i - u * a, e[2] = s * i - p * a, e[3] = c * i - d * a, e[8] = r * a + l * i, e[9] = o * a + u * i, e[10] = s * a + p * i, e[11] = c * a + d * i, e
                    }, h.rotateZ = function(e, t, n) {
                        var a = Math.sin(n),
                            i = Math.cos(n),
                            r = t[0],
                            o = t[1],
                            s = t[2],
                            c = t[3],
                            l = t[4],
                            u = t[5],
                            p = t[6],
                            d = t[7];
                        return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = r * i + l * a, e[1] = o * i + u * a, e[2] = s * i + p * a, e[3] = c * i + d * a, e[4] = l * i - r * a, e[5] = u * i - o * a, e[6] = p * i - s * a, e[7] = d * i - c * a, e
                    }, h.fromRotationTranslation = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = a + a,
                            c = i + i,
                            l = r + r,
                            u = a * s,
                            p = a * c,
                            d = a * l,
                            f = i * c,
                            h = i * l,
                            m = r * l,
                            v = o * s,
                            g = o * c,
                            x = o * l;
                        return e[0] = 1 - (f + m), e[1] = p + x, e[2] = d - g, e[3] = 0, e[4] = p - x, e[5] = 1 - (u + m), e[6] = h + v, e[7] = 0, e[8] = d + g, e[9] = h - v, e[10] = 1 - (u + f), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
                    }, h.fromQuat = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = n + n,
                            s = a + a,
                            c = i + i,
                            l = n * o,
                            u = a * o,
                            p = a * s,
                            d = i * o,
                            f = i * s,
                            h = i * c,
                            m = r * o,
                            v = r * s,
                            g = r * c;
                        return e[0] = 1 - p - h, e[1] = u + g, e[2] = d - v, e[3] = 0, e[4] = u - g, e[5] = 1 - l - h, e[6] = f + m, e[7] = 0, e[8] = d + v, e[9] = f - m, e[10] = 1 - l - p, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }, h.frustum = function(e, t, n, a, i, r, o) {
                        var s = 1 / (n - t),
                            c = 1 / (i - a),
                            l = 1 / (r - o);
                        return e[0] = 2 * r * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * r * c, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (i + a) * c, e[10] = (o + r) * l, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * r * 2 * l, e[15] = 0, e
                    }, h.perspective = function(e, t, n, a, i) {
                        var r = 1 / Math.tan(t / 2),
                            o = 1 / (a - i);
                        return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + a) * o, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * i * a * o, e[15] = 0, e
                    }, h.ortho = function(e, t, n, a, i, r, o) {
                        var s = 1 / (t - n),
                            c = 1 / (a - i),
                            l = 1 / (r - o);
                        return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + a) * c, e[14] = (o + r) * l, e[15] = 1, e
                    }, h.lookAt = function(e, t, n, i) {
                        var r, o, s, c, l, u, p, d, f, m, v = t[0],
                            g = t[1],
                            x = t[2],
                            _ = i[0],
                            y = i[1],
                            b = i[2],
                            T = n[0],
                            E = n[1],
                            w = n[2];
                        return Math.abs(v - T) < a && Math.abs(g - E) < a && Math.abs(x - w) < a ? h.identity(e) : (p = v - T, d = g - E, f = x - w, m = 1 / Math.sqrt(p * p + d * d + f * f), p *= m, d *= m, f *= m, r = y * f - b * d, o = b * p - _ * f, s = _ * d - y * p, m = Math.sqrt(r * r + o * o + s * s), m ? (m = 1 / m, r *= m, o *= m, s *= m) : (r = 0, o = 0, s = 0), c = d * s - f * o, l = f * r - p * s, u = p * o - d * r, m = Math.sqrt(c * c + l * l + u * u), m ? (m = 1 / m, c *= m, l *= m, u *= m) : (c = 0, l = 0, u = 0), e[0] = r, e[1] = c, e[2] = p, e[3] = 0, e[4] = o, e[5] = l, e[6] = d, e[7] = 0, e[8] = s, e[9] = u, e[10] = f, e[11] = 0, e[12] = -(r * v + o * g + s * x), e[13] = -(c * v + l * g + u * x), e[14] = -(p * v + d * g + f * x), e[15] = 1, e)
                    }, h.str = function(e) {
                        return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")"
                    }, h.frob = function(e) {
                        return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2))
                    }, void 0 !== t && (t.mat4 = h);
                    var m = {};
                    m.create = function() {
                        var e = new i(4);
                        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
                    }, m.rotationTo = function() {
                        var e = l.create(),
                            t = l.fromValues(1, 0, 0),
                            n = l.fromValues(0, 1, 0);
                        return function(a, i, r) {
                            var o = l.dot(i, r);
                            return o < -.999999 ? (l.cross(e, t, i), l.length(e) < 1e-6 && l.cross(e, n, i), l.normalize(e, e), m.setAxisAngle(a, e, Math.PI), a) : o > .999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (l.cross(e, i, r), a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = 1 + o, m.normalize(a, a))
                        }
                    }(), m.setAxes = function() {
                        var e = f.create();
                        return function(t, n, a, i) {
                            return e[0] = a[0], e[3] = a[1], e[6] = a[2], e[1] = i[0], e[4] = i[1], e[7] = i[2], e[2] = -n[0], e[5] = -n[1], e[8] = -n[2], m.normalize(t, m.fromMat3(t, e))
                        }
                    }(), m.clone = u.clone, m.fromValues = u.fromValues, m.copy = u.copy, m.set = u.set, m.identity = function(e) {
                        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
                    }, m.setAxisAngle = function(e, t, n) {
                        n *= .5;
                        var a = Math.sin(n);
                        return e[0] = a * t[0], e[1] = a * t[1], e[2] = a * t[2], e[3] = Math.cos(n), e
                    }, m.add = u.add, m.multiply = function(e, t, n) {
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = n[0],
                            c = n[1],
                            l = n[2],
                            u = n[3];
                        return e[0] = a * u + o * s + i * l - r * c, e[1] = i * u + o * c + r * s - a * l, e[2] = r * u + o * l + a * c - i * s, e[3] = o * u - a * s - i * c - r * l, e
                    }, m.mul = m.multiply, m.scale = u.scale, m.rotateX = function(e, t, n) {
                        n *= .5;
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = Math.sin(n),
                            c = Math.cos(n);
                        return e[0] = a * c + o * s, e[1] = i * c + r * s, e[2] = r * c - i * s, e[3] = o * c - a * s, e
                    }, m.rotateY = function(e, t, n) {
                        n *= .5;
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = Math.sin(n),
                            c = Math.cos(n);
                        return e[0] = a * c - r * s, e[1] = i * c + o * s, e[2] = r * c + a * s, e[3] = o * c - i * s, e
                    }, m.rotateZ = function(e, t, n) {
                        n *= .5;
                        var a = t[0],
                            i = t[1],
                            r = t[2],
                            o = t[3],
                            s = Math.sin(n),
                            c = Math.cos(n);
                        return e[0] = a * c + i * s, e[1] = i * c - a * s, e[2] = r * c + o * s, e[3] = o * c - r * s, e
                    }, m.calculateW = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2];
                        return e[0] = n, e[1] = a, e[2] = i, e[3] = Math.sqrt(Math.abs(1 - n * n - a * a - i * i)), e
                    }, m.dot = u.dot, m.lerp = u.lerp, m.slerp = function(e, t, n, a) {
                        var i, r, o, s, c, l = t[0],
                            u = t[1],
                            p = t[2],
                            d = t[3],
                            f = n[0],
                            h = n[1],
                            m = n[2],
                            v = n[3];
                        return r = l * f + u * h + p * m + d * v, r < 0 && (r = -r, f = -f, h = -h, m = -m, v = -v), 1 - r > 1e-6 ? (i = Math.acos(r), o = Math.sin(i), s = Math.sin((1 - a) * i) / o, c = Math.sin(a * i) / o) : (s = 1 - a, c = a), e[0] = s * l + c * f, e[1] = s * u + c * h, e[2] = s * p + c * m, e[3] = s * d + c * v, e
                    }, m.invert = function(e, t) {
                        var n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3],
                            o = n * n + a * a + i * i + r * r,
                            s = o ? 1 / o : 0;
                        return e[0] = -n * s, e[1] = -a * s, e[2] = -i * s, e[3] = r * s, e
                    }, m.conjugate = function(e, t) {
                        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
                    }, m.length = u.length, m.len = m.length, m.squaredLength = u.squaredLength, m.sqrLen = m.squaredLength, m.normalize = u.normalize, m.fromMat3 = function(e, t) {
                        var n, a = t[0] + t[4] + t[8];
                        if (a > 0) n = Math.sqrt(a + 1), e[3] = .5 * n, n = .5 / n, e[0] = (t[5] - t[7]) * n, e[1] = (t[6] - t[2]) * n, e[2] = (t[1] - t[3]) * n;
                        else {
                            var i = 0;
                            t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
                            var r = (i + 1) % 3,
                                o = (i + 2) % 3;
                            n = Math.sqrt(t[3 * i + i] - t[3 * r + r] - t[3 * o + o] + 1), e[i] = .5 * n, n = .5 / n, e[3] = (t[3 * r + o] - t[3 * o + r]) * n, e[r] = (t[3 * r + i] + t[3 * i + r]) * n, e[o] = (t[3 * o + i] + t[3 * i + o]) * n
                        }
                        return e
                    }, m.str = function(e) {
                        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                    }, void 0 !== t && (t.quat = m)
                }(a.exports)
        }()
    }).call(t, n(37))
}, function(e, t, n) {
    "use strict";
    var a = n(69),
        i = n(20),
        r = n(7),
        o = function() {
            this.__uid__ = r.a.genGUID()
        };
    o.__initializers__ = [function(e) {
        r.a.extend(this, e)
    }], r.a.extend(o, a.a), r.a.extend(o.prototype, i.a), t.a = o
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = "vertex:" + e + "fragment:" + t;
        if (w[n]) return w[n];
        var a = c.a.genGUID();
        return w[n] = a, A[a] = {
            vertex: e,
            fragment: t
        }, a
    }

    function i(e) {
        return e.replace(/[ \t]*\/\/.*\n/g, "").replace(/[ \t]*\/\*[\s\S]*?\*\//g, "")
    }

    function r() {
        console.error("Wrong uniform/attributes syntax")
    }

    function o(e, t) {
        function n(e) {
            e || r();
            var t = e.match(/\[(.*?)\]/);
            c = e.replace(/\[(.*?)\]/, ""), p[c] = {}, t && (p[c].isArray = !0, p[c].arraySize = t[1])
        }
        for (var a = /[,=\(\):]/, i = t.replace(/:\s*\[\s*(.*)\s*\]/g, "=" + e + "($1)").replace(/\s+/g, "").split(/(?=[,=\(\):])/g), o = [], s = 0; s < i.length; s++) i[s].match(a) ? o.push(i[s].charAt(0), i[s].slice(1)) : o.push(i[s]);
        i = o;
        var c, u = 0,
            p = {},
            d = null;
        n(i[0]);
        for (var s = 1; s < i.length; s++) {
            var f = i[s];
            if (f)
                if ("=" !== f)
                    if (":" !== f)
                        if ("," !== f)
                            if (")" !== f)
                                if ("(" !== f)
                                    if (f.indexOf("vec") >= 0) {
                                        if (1 !== u && 4 !== u) {
                                            r();
                                            break
                                        }
                                        u = 2, d = []
                                    } else if (1 !== u)
                if (4 !== u) n(f), u = 0;
                else {
                    var h = f;
                    y.indexOf(h) >= 0 || b.indexOf(h) >= 0 || T.indexOf(h) >= 0 ? p[c].semantic = h : "ignore" === h || "unconfigurable" === h ? p[c].ignore = !0 : p[c].value = "bool" === e ? "true" === h : parseFloat(h)
                }
            else p[c].value = "bool" === e ? "true" === f : parseFloat(f), d = null;
            else {
                if (2 !== u) {
                    r();
                    break
                }
                if (!(d instanceof Array)) {
                    r();
                    break
                }
                d.push(+i[++s])
            } else p[c].value = new l.a.Float32Array(d), d = null, u = 5;
            else if (2 === u) {
                if (!(d instanceof Array)) {
                    r();
                    break
                }
                d.push(+i[++s])
            } else u = 5;
            else u = 4;
            else {
                if (0 !== u && 3 !== u) {
                    r();
                    break
                }
                u = 1
            }
        }
        return p
    }

    function s(e, t) {
        "object" == typeof e && (t = e.fragment, e = e.vertex), e = i(e), t = i(t), this._shaderID = a(e, t), this._vertexCode = s.parseImport(e), this._fragmentCode = s.parseImport(t), this.attributeSemantics = {}, this.matrixSemantics = {}, this.uniformSemantics = {}, this.matrixSemanticKeys = [], this.uniformTemplates = {}, this.attributes = {}, this.textures = {}, this.vertexDefines = {}, this.fragmentDefines = {}, this._parseAttributes(), this._parseUniforms(), this._parseDefines()
    }
    var c = n(7),
        l = n(12),
        u = n(0),
        p = n.n(u),
        d = p.a.mat2,
        f = p.a.mat3,
        h = p.a.mat4,
        m = /uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,
        v = /attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,
        g = /#define\s+(\w+)?(\s+[\w-.]+)?\s*;?\s*\n/g,
        x = {
            bool: "1i",
            int: "1i",
            sampler2D: "t",
            samplerCube: "t",
            float: "1f",
            vec2: "2f",
            vec3: "3f",
            vec4: "4f",
            ivec2: "2i",
            ivec3: "3i",
            ivec4: "4i",
            mat2: "m2",
            mat3: "m3",
            mat4: "m4"
        },
        _ = {
            bool: function() {
                return !0
            },
            int: function() {
                return 0
            },
            float: function() {
                return 0
            },
            sampler2D: function() {
                return null
            },
            samplerCube: function() {
                return null
            },
            vec2: function() {
                return [0, 0]
            },
            vec3: function() {
                return [0, 0, 0]
            },
            vec4: function() {
                return [0, 0, 0, 0]
            },
            ivec2: function() {
                return [0, 0]
            },
            ivec3: function() {
                return [0, 0, 0]
            },
            ivec4: function() {
                return [0, 0, 0, 0]
            },
            mat2: function() {
                return d.create()
            },
            mat3: function() {
                return f.create()
            },
            mat4: function() {
                return h.create()
            },
            array: function() {
                return []
            }
        },
        y = ["POSITION", "NORMAL", "BINORMAL", "TANGENT", "TEXCOORD", "TEXCOORD_0", "TEXCOORD_1", "COLOR", "JOINT", "WEIGHT"],
        b = ["SKIN_MATRIX", "VIEWPORT_SIZE", "VIEWPORT", "DEVICEPIXELRATIO", "WINDOW_SIZE", "NEAR", "FAR", "TIME"],
        T = ["WORLD", "VIEW", "PROJECTION", "WORLDVIEW", "VIEWPROJECTION", "WORLDVIEWPROJECTION", "WORLDINVERSE", "VIEWINVERSE", "PROJECTIONINVERSE", "WORLDVIEWINVERSE", "VIEWPROJECTIONINVERSE", "WORLDVIEWPROJECTIONINVERSE", "WORLDTRANSPOSE", "VIEWTRANSPOSE", "PROJECTIONTRANSPOSE", "WORLDVIEWTRANSPOSE", "VIEWPROJECTIONTRANSPOSE", "WORLDVIEWPROJECTIONTRANSPOSE", "WORLDINVERSETRANSPOSE", "VIEWINVERSETRANSPOSE", "PROJECTIONINVERSETRANSPOSE", "WORLDVIEWINVERSETRANSPOSE", "VIEWPROJECTIONINVERSETRANSPOSE", "WORLDVIEWPROJECTIONINVERSETRANSPOSE"],
        E = {
            vec4: 4,
            vec3: 3,
            vec2: 2,
            float: 1
        },
        w = {},
        A = {};
    s.prototype = {
        constructor: s,
        createUniforms: function() {
            var e = {};
            for (var t in this.uniformTemplates) {
                var n = this.uniformTemplates[t];
                e[t] = {
                    type: n.type,
                    value: n.value()
                }
            }
            return e
        },
        _parseImport: function() {
            this._vertexCode = s.parseImport(this.vertex), this._fragmentCode = s.parseImport(this.fragment)
        },
        _addSemanticUniform: function(e, t, n) {
            if (y.indexOf(n) >= 0) this.attributeSemantics[n] = {
                symbol: e,
                type: t
            };
            else if (T.indexOf(n) >= 0) {
                var a = !1,
                    i = n;
                n.match(/TRANSPOSE$/) && (a = !0, i = n.slice(0, -9)), this.matrixSemantics[n] = {
                    symbol: e,
                    type: t,
                    isTranspose: a,
                    semanticNoTranspose: i
                }
            } else b.indexOf(n) >= 0 && (this.uniformSemantics[n] = {
                symbol: e,
                type: t
            })
        },
        _addMaterialUniform: function(e, t, n, a, i, r) {
            r[e] = {
                type: n,
                value: i ? _.array : a || _[t],
                semantic: null
            }
        },
        _parseUniforms: function() {
            function e(e) {
                return null != e ? function() {
                    return e
                } : null
            }

            function t(t, r, s) {
                var c = o(r, s),
                    l = [];
                for (var u in c) {
                    var p = c[u],
                        d = p.semantic,
                        f = u,
                        h = x[r],
                        m = e(c[u].value);
                    c[u].isArray && (f += "[" + c[u].arraySize + "]", h += "v"), l.push(f), a._uniformList.push(u), p.ignore || ("sampler2D" !== r && "samplerCube" !== r || (a.textures[u] = {
                        shaderType: i,
                        type: r
                    }), d ? a._addSemanticUniform(u, h, d) : a._addMaterialUniform(u, r, h, m, c[u].isArray, n))
                }
                return l.length > 0 ? "uniform " + r + " " + l.join(",") + ";\n" : ""
            }
            var n = {},
                a = this,
                i = "vertex";
            this._uniformList = [], this._vertexCode = this._vertexCode.replace(m, t), i = "fragment", this._fragmentCode = this._fragmentCode.replace(m, t), a.matrixSemanticKeys = Object.keys(this.matrixSemantics), this.uniformTemplates = n
        },
        _parseAttributes: function() {
            function e(e, a, i) {
                var r = o(a, i),
                    s = E[a] || 1,
                    c = [];
                for (var l in r) {
                    var u = r[l].semantic;
                    if (t[l] = {
                            type: "float",
                            size: s,
                            semantic: u || null
                        }, u) {
                        if (y.indexOf(u) < 0) throw new Error('Unkown semantic "' + u + '"');
                        n.attributeSemantics[u] = {
                            symbol: l,
                            type: a
                        }
                    }
                    c.push(l)
                }
                return "attribute " + a + " " + c.join(",") + ";\n"
            }
            var t = {},
                n = this;
            this._vertexCode = this._vertexCode.replace(v, e), this.attributes = t
        },
        _parseDefines: function() {
            function e(e, a, i) {
                var r = "vertex" === n ? t.vertexDefines : t.fragmentDefines;
                return r[a] || (r[a] = "false" !== i && ("true" === i || (i ? isNaN(parseFloat(i)) ? i.trim() : parseFloat(i) : null))), ""
            }
            var t = this,
                n = "vertex";
            this._vertexCode = this._vertexCode.replace(g, e), n = "fragment", this._fragmentCode = this._fragmentCode.replace(g, e)
        },
        clone: function() {
            var e = A[this._shaderID];
            return new s(e.vertex, e.fragment)
        }
    }, Object.defineProperty && (Object.defineProperty(s.prototype, "shaderID", {
        get: function() {
            return this._shaderID
        }
    }), Object.defineProperty(s.prototype, "vertex", {
        get: function() {
            return this._vertexCode
        }
    }), Object.defineProperty(s.prototype, "fragment", {
        get: function() {
            return this._fragmentCode
        }
    }), Object.defineProperty(s.prototype, "uniforms", {
        get: function() {
            return this._uniformList
        }
    }));
    var S = /(@import)\s*([0-9a-zA-Z_\-\.]*)/g;
    s.parseImport = function(e) {
        return e = e.replace(S, function(e, t, n) {
            var e = s.source(n);
            return e ? s.parseImport(e) : (console.error('Shader chunk "' + n + '" not existed in library'), "")
        })
    };
    var C = /(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;
    s.import = function(e) {
        e.replace(C, function(e, t, n, a) {
            var a = a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g, "");
            if (a) {
                for (var i, r = n.split("."), o = s.codes, c = 0; c < r.length - 1;) i = r[c++], o[i] || (o[i] = {}), o = o[i];
                i = r[c], o[i] = a
            }
            return a
        })
    }, s.codes = {}, s.source = function(e) {
        for (var t = e.split("."), n = s.codes, a = 0; n && a < t.length;) {
            n = n[t[a++]]
        }
        return "string" != typeof n ? (console.error('Shader "' + e + '" not existed in library'), "") : n
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(6),
        r = n(28),
        o = a.a.extend({
            width: 512,
            height: 512,
            type: i.a.UNSIGNED_BYTE,
            format: i.a.RGBA,
            wrapS: i.a.REPEAT,
            wrapT: i.a.REPEAT,
            minFilter: i.a.LINEAR_MIPMAP_LINEAR,
            magFilter: i.a.LINEAR,
            useMipmap: !0,
            anisotropic: 1,
            flipY: !0,
            sRGB: !0,
            unpackAlignment: 4,
            premultiplyAlpha: !1,
            dynamic: !1,
            NPOT: !1,
            __used: 0
        }, function() {
            this._cache = new r.a
        }, {
            getWebGLTexture: function(e) {
                var t = e.gl,
                    n = this._cache;
                return n.use(e.__uid__), n.miss("webgl_texture") && n.put("webgl_texture", t.createTexture()), this.dynamic ? this.update(e) : n.isDirty() && (this.update(e), n.fresh()), n.get("webgl_texture")
            },
            bind: function() {},
            unbind: function() {},
            dirty: function() {
                this._cache && this._cache.dirtyAll()
            },
            update: function(e) {},
            updateCommon: function(e) {
                var t = e.gl;
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, this.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, this.unpackAlignment), this.format === i.a.DEPTH_COMPONENT && (this.useMipmap = !1);
                var n = e.getGLExtension("EXT_sRGB");
                this.format !== o.SRGB || n || (this.format = o.RGB), this.format !== o.SRGB_ALPHA || n || (this.format = o.RGBA), this.NPOT = !this.isPowerOfTwo()
            },
            getAvailableWrapS: function() {
                return this.NPOT ? i.a.CLAMP_TO_EDGE : this.wrapS
            },
            getAvailableWrapT: function() {
                return this.NPOT ? i.a.CLAMP_TO_EDGE : this.wrapT
            },
            getAvailableMinFilter: function() {
                var e = this.minFilter;
                return this.NPOT || !this.useMipmap ? e === i.a.NEAREST_MIPMAP_NEAREST || e === i.a.NEAREST_MIPMAP_LINEAR ? i.a.NEAREST : e === i.a.LINEAR_MIPMAP_LINEAR || e === i.a.LINEAR_MIPMAP_NEAREST ? i.a.LINEAR : e : e
            },
            getAvailableMagFilter: function() {
                return this.magFilter
            },
            nextHighestPowerOfTwo: function(e) {
                --e;
                for (var t = 1; t < 32; t <<= 1) e |= e >> t;
                return e + 1
            },
            dispose: function(e) {
                var t = this._cache;
                t.use(e.__uid__);
                var n = t.get("webgl_texture");
                n && e.gl.deleteTexture(n), t.deleteContext(e.__uid__)
            },
            isRenderable: function() {},
            isPowerOfTwo: function() {}
        });
    Object.defineProperty(o.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(e) {
            this._width = e
        }
    }), Object.defineProperty(o.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(e) {
            this._height = e
        }
    }), o.BYTE = i.a.BYTE, o.UNSIGNED_BYTE = i.a.UNSIGNED_BYTE, o.SHORT = i.a.SHORT, o.UNSIGNED_SHORT = i.a.UNSIGNED_SHORT, o.INT = i.a.INT, o.UNSIGNED_INT = i.a.UNSIGNED_INT, o.FLOAT = i.a.FLOAT, o.HALF_FLOAT = 36193, o.UNSIGNED_INT_24_8_WEBGL = 34042, o.DEPTH_COMPONENT = i.a.DEPTH_COMPONENT, o.DEPTH_STENCIL = i.a.DEPTH_STENCIL, o.ALPHA = i.a.ALPHA, o.RGB = i.a.RGB, o.RGBA = i.a.RGBA, o.LUMINANCE = i.a.LUMINANCE, o.LUMINANCE_ALPHA = i.a.LUMINANCE_ALPHA, o.SRGB = 35904, o.SRGB_ALPHA = 35906, o.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776, o.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777, o.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778, o.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779, o.NEAREST = i.a.NEAREST, o.LINEAR = i.a.LINEAR, o.NEAREST_MIPMAP_NEAREST = i.a.NEAREST_MIPMAP_NEAREST, o.LINEAR_MIPMAP_NEAREST = i.a.LINEAR_MIPMAP_NEAREST, o.NEAREST_MIPMAP_LINEAR = i.a.NEAREST_MIPMAP_LINEAR, o.LINEAR_MIPMAP_LINEAR = i.a.LINEAR_MIPMAP_LINEAR, o.REPEAT = i.a.REPEAT, o.CLAMP_TO_EDGE = i.a.CLAMP_TO_EDGE, o.MIRRORED_REPEAT = i.a.MIRRORED_REPEAT, t.a = o
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        return e < t ? t : e > n ? n : e
    }
    var i = n(0),
        r = n.n(i),
        o = r.a.vec3,
        s = function(e, t, n) {
            e = e || 0, t = t || 0, n = n || 0, this.array = o.fromValues(e, t, n), this._dirty = !0
        };
    s.prototype = {
        constructor: s,
        add: function(e) {
            return o.add(this.array, this.array, e.array), this._dirty = !0, this
        },
        set: function(e, t, n) {
            return this.array[0] = e, this.array[1] = t, this.array[2] = n, this._dirty = !0, this
        },
        setArray: function(e) {
            return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this._dirty = !0, this
        },
        clone: function() {
            return new s(this.x, this.y, this.z)
        },
        copy: function(e) {
            return o.copy(this.array, e.array), this._dirty = !0, this
        },
        cross: function(e, t) {
            return o.cross(this.array, e.array, t.array), this._dirty = !0, this
        },
        dist: function(e) {
            return o.dist(this.array, e.array)
        },
        distance: function(e) {
            return o.distance(this.array, e.array)
        },
        div: function(e) {
            return o.div(this.array, this.array, e.array), this._dirty = !0, this
        },
        divide: function(e) {
            return o.divide(this.array, this.array, e.array), this._dirty = !0, this
        },
        dot: function(e) {
            return o.dot(this.array, e.array)
        },
        len: function() {
            return o.len(this.array)
        },
        length: function() {
            return o.length(this.array)
        },
        lerp: function(e, t, n) {
            return o.lerp(this.array, e.array, t.array, n), this._dirty = !0, this
        },
        min: function(e) {
            return o.min(this.array, this.array, e.array), this._dirty = !0, this
        },
        max: function(e) {
            return o.max(this.array, this.array, e.array), this._dirty = !0, this
        },
        mul: function(e) {
            return o.mul(this.array, this.array, e.array), this._dirty = !0, this
        },
        multiply: function(e) {
            return o.multiply(this.array, this.array, e.array), this._dirty = !0, this
        },
        negate: function() {
            return o.negate(this.array, this.array), this._dirty = !0, this
        },
        normalize: function() {
            return o.normalize(this.array, this.array), this._dirty = !0, this
        },
        random: function(e) {
            return o.random(this.array, e), this._dirty = !0, this
        },
        scale: function(e) {
            return o.scale(this.array, this.array, e), this._dirty = !0, this
        },
        scaleAndAdd: function(e, t) {
            return o.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
        },
        sqrDist: function(e) {
            return o.sqrDist(this.array, e.array)
        },
        squaredDistance: function(e) {
            return o.squaredDistance(this.array, e.array)
        },
        sqrLen: function() {
            return o.sqrLen(this.array)
        },
        squaredLength: function() {
            return o.squaredLength(this.array)
        },
        sub: function(e) {
            return o.sub(this.array, this.array, e.array), this._dirty = !0, this
        },
        subtract: function(e) {
            return o.subtract(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat3: function(e) {
            return o.transformMat3(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat4: function(e) {
            return o.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformQuat: function(e) {
            return o.transformQuat(this.array, this.array, e.array), this._dirty = !0, this
        },
        applyProjection: function(e) {
            var t = this.array;
            if (e = e.array, 0 === e[15]) {
                var n = -1 / t[2];
                t[0] = e[0] * t[0] * n, t[1] = e[5] * t[1] * n, t[2] = (e[10] * t[2] + e[14]) * n
            } else t[0] = e[0] * t[0] + e[12], t[1] = e[5] * t[1] + e[13], t[2] = e[10] * t[2] + e[14];
            return this._dirty = !0, this
        },
        eulerFromQuat: function(e, t) {
            s.eulerFromQuat(this, e, t)
        },
        eulerFromMat3: function(e, t) {
            s.eulerFromMat3(this, e, t)
        },
        toString: function() {
            return "[" + Array.prototype.join.call(this.array, ",") + "]"
        },
        toArray: function() {
            return Array.prototype.slice.call(this.array)
        }
    };
    var c = Object.defineProperty;
    if (c) {
        var l = s.prototype;
        c(l, "x", {
            get: function() {
                return this.array[0]
            },
            set: function(e) {
                this.array[0] = e, this._dirty = !0
            }
        }), c(l, "y", {
            get: function() {
                return this.array[1]
            },
            set: function(e) {
                this.array[1] = e, this._dirty = !0
            }
        }), c(l, "z", {
            get: function() {
                return this.array[2]
            },
            set: function(e) {
                this.array[2] = e, this._dirty = !0
            }
        })
    }
    s.add = function(e, t, n) {
        return o.add(e.array, t.array, n.array), e._dirty = !0, e
    }, s.set = function(e, t, n, a) {
        o.set(e.array, t, n, a), e._dirty = !0
    }, s.copy = function(e, t) {
        return o.copy(e.array, t.array), e._dirty = !0, e
    }, s.cross = function(e, t, n) {
        return o.cross(e.array, t.array, n.array), e._dirty = !0, e
    }, s.dist = function(e, t) {
        return o.distance(e.array, t.array)
    }, s.distance = s.dist, s.div = function(e, t, n) {
        return o.divide(e.array, t.array, n.array), e._dirty = !0, e
    }, s.divide = s.div, s.dot = function(e, t) {
        return o.dot(e.array, t.array)
    }, s.len = function(e) {
        return o.length(e.array)
    }, s.lerp = function(e, t, n, a) {
        return o.lerp(e.array, t.array, n.array, a), e._dirty = !0, e
    }, s.min = function(e, t, n) {
        return o.min(e.array, t.array, n.array), e._dirty = !0, e
    }, s.max = function(e, t, n) {
        return o.max(e.array, t.array, n.array), e._dirty = !0, e
    }, s.mul = function(e, t, n) {
        return o.multiply(e.array, t.array, n.array), e._dirty = !0, e
    }, s.multiply = s.mul, s.negate = function(e, t) {
        return o.negate(e.array, t.array), e._dirty = !0, e
    }, s.normalize = function(e, t) {
        return o.normalize(e.array, t.array), e._dirty = !0, e
    }, s.random = function(e, t) {
        return o.random(e.array, t), e._dirty = !0, e
    }, s.scale = function(e, t, n) {
        return o.scale(e.array, t.array, n), e._dirty = !0, e
    }, s.scaleAndAdd = function(e, t, n, a) {
        return o.scaleAndAdd(e.array, t.array, n.array, a), e._dirty = !0, e
    }, s.sqrDist = function(e, t) {
        return o.sqrDist(e.array, t.array)
    }, s.squaredDistance = s.sqrDist, s.sqrLen = function(e) {
        return o.sqrLen(e.array)
    }, s.squaredLength = s.sqrLen, s.sub = function(e, t, n) {
        return o.subtract(e.array, t.array, n.array), e._dirty = !0, e
    }, s.subtract = s.sub, s.transformMat3 = function(e, t, n) {
        return o.transformMat3(e.array, t.array, n.array), e._dirty = !0, e
    }, s.transformMat4 = function(e, t, n) {
        return o.transformMat4(e.array, t.array, n.array), e._dirty = !0, e
    }, s.transformQuat = function(e, t, n) {
        return o.transformQuat(e.array, t.array, n.array), e._dirty = !0, e
    };
    var u = Math.atan2,
        p = Math.asin,
        d = Math.abs;
    s.eulerFromQuat = function(e, t, n) {
        e._dirty = !0, t = t.array;
        var i = e.array,
            r = t[0],
            o = t[1],
            s = t[2],
            c = t[3],
            l = r * r,
            d = o * o,
            f = s * s,
            h = c * c,
            n = (n || "XYZ").toUpperCase();
        switch (n) {
            case "XYZ":
                i[0] = u(2 * (r * c - o * s), h - l - d + f), i[1] = p(a(2 * (r * s + o * c), -1, 1)), i[2] = u(2 * (s * c - r * o), h + l - d - f);
                break;
            case "YXZ":
                i[0] = p(a(2 * (r * c - o * s), -1, 1)), i[1] = u(2 * (r * s + o * c), h - l - d + f), i[2] = u(2 * (r * o + s * c), h - l + d - f);
                break;
            case "ZXY":
                i[0] = p(a(2 * (r * c + o * s), -1, 1)), i[1] = u(2 * (o * c - s * r), h - l - d + f), i[2] = u(2 * (s * c - r * o), h - l + d - f);
                break;
            case "ZYX":
                i[0] = u(2 * (r * c + s * o), h - l - d + f), i[1] = p(a(2 * (o * c - r * s), -1, 1)), i[2] = u(2 * (r * o + s * c), h + l - d - f);
                break;
            case "YZX":
                i[0] = u(2 * (r * c - s * o), h - l + d - f), i[1] = u(2 * (o * c - r * s), h + l - d - f), i[2] = p(a(2 * (r * o + s * c), -1, 1));
                break;
            case "XZY":
                i[0] = u(2 * (r * c + o * s), h - l + d - f), i[1] = u(2 * (r * s + o * c), h + l - d - f), i[2] = p(a(2 * (s * c - r * o), -1, 1));
                break;
            default:
                console.warn("Unkown order: " + n)
        }
        return e
    }, s.eulerFromMat3 = function(e, t, n) {
        var i = t.array,
            r = i[0],
            o = i[3],
            s = i[6],
            c = i[1],
            l = i[4],
            f = i[7],
            h = i[2],
            m = i[5],
            v = i[8],
            g = e.array,
            n = (n || "XYZ").toUpperCase();
        switch (n) {
            case "XYZ":
                g[1] = p(a(s, -1, 1)), d(s) < .99999 ? (g[0] = u(-f, v), g[2] = u(-o, r)) : (g[0] = u(m, l), g[2] = 0);
                break;
            case "YXZ":
                g[0] = p(-a(f, -1, 1)), d(f) < .99999 ? (g[1] = u(s, v), g[2] = u(c, l)) : (g[1] = u(-h, r), g[2] = 0);
                break;
            case "ZXY":
                g[0] = p(a(m, -1, 1)), d(m) < .99999 ? (g[1] = u(-h, v), g[2] = u(-o, l)) : (g[1] = 0, g[2] = u(c, r));
                break;
            case "ZYX":
                g[1] = p(-a(h, -1, 1)), d(h) < .99999 ? (g[0] = u(m, v), g[2] = u(c, r)) : (g[0] = 0, g[2] = u(-o, l));
                break;
            case "YZX":
                g[2] = p(a(c, -1, 1)), d(c) < .99999 ? (g[0] = u(-f, l), g[1] = u(-h, r)) : (g[0] = 0, g[1] = u(s, v));
                break;
            case "XZY":
                g[2] = p(-a(o, -1, 1)), d(o) < .99999 ? (g[0] = u(m, l), g[1] = u(s, r)) : (g[0] = u(-f, v), g[1] = 0);
                break;
            default:
                console.warn("Unkown order: " + n)
        }
        return e._dirty = !0, e
    }, s.POSITIVE_X = new s(1, 0, 0), s.NEGATIVE_X = new s(-1, 0, 0), s.POSITIVE_Y = new s(0, 1, 0), s.NEGATIVE_Y = new s(0, -1, 0), s.POSITIVE_Z = new s(0, 0, 1), s.NEGATIVE_Z = new s(0, 0, -1), s.UP = new s(0, 1, 0), s.ZERO = new s(0, 0, 0), t.a = s
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }

    function i(e, t) {
        var n = a(e.width),
            i = a(e.height);
        return t = t || document.createElement("canvas"), t.width = n, t.height = i, t.getContext("2d").drawImage(e.image, 0, 0, n, i), t
    }
    var r = n(3),
        o = n(6),
        s = n(47),
        c = s.a.isPowerOfTwo,
        l = r.a.extend(function() {
            return {
                image: null,
                pixels: null,
                mipmaps: [],
                convertToPOT: !1
            }
        }, {
            textureType: "texture2D",
            update: function(e) {
                var t = e.gl;
                t.bindTexture(t.TEXTURE_2D, this._cache.get("webgl_texture")), this.updateCommon(e);
                var n = this.format,
                    a = this.type,
                    i = !(!this.convertToPOT || this.mipmaps.length || !this.image || this.wrapS !== r.a.REPEAT && this.wrapT !== r.a.REPEAT || !this.NPOT);
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, i ? this.wrapS : this.getAvailableWrapS()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, i ? this.wrapT : this.getAvailableWrapT()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, i ? this.magFilter : this.getAvailableMagFilter()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i ? this.minFilter : this.getAvailableMinFilter());
                var s = e.getGLExtension("EXT_texture_filter_anisotropic");
                if (s && this.anisotropic > 1 && t.texParameterf(t.TEXTURE_2D, s.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic), 36193 === a) {
                    e.getGLExtension("OES_texture_half_float") || (a = o.a.FLOAT)
                }
                if (this.mipmaps.length)
                    for (var c = this.width, l = this.height, u = 0; u < this.mipmaps.length; u++) {
                        var p = this.mipmaps[u];
                        this._updateTextureData(t, p, u, c, l, n, a, !1), c /= 2, l /= 2
                    } else this._updateTextureData(t, this, 0, this.width, this.height, n, a, i), !this.useMipmap || this.NPOT && !i || t.generateMipmap(t.TEXTURE_2D);
                t.bindTexture(t.TEXTURE_2D, null)
            },
            _updateTextureData: function(e, t, n, a, o, s, c, l) {
                if (t.image) {
                    var u = t.image;
                    l && (this._potCanvas = i(this, this._potCanvas), u = this._potCanvas), e.texImage2D(e.TEXTURE_2D, n, s, s, c, u)
                } else s <= r.a.COMPRESSED_RGBA_S3TC_DXT5_EXT && s >= r.a.COMPRESSED_RGB_S3TC_DXT1_EXT ? e.compressedTexImage2D(e.TEXTURE_2D, n, s, a, o, 0, t.pixels) : e.texImage2D(e.TEXTURE_2D, n, s, a, o, 0, s, c, t.pixels)
            },
            generateMipmap: function(e) {
                var t = e.gl;
                this.useMipmap && !this.NPOT && (t.bindTexture(t.TEXTURE_2D, this._cache.get("webgl_texture")), t.generateMipmap(t.TEXTURE_2D))
            },
            isPowerOfTwo: function() {
                return c(this.width) && c(this.height)
            },
            isRenderable: function() {
                return this.image ? "CANVAS" === this.image.nodeName || "VIDEO" === this.image.nodeName || this.image.complete : !(!this.width || !this.height)
            },
            bind: function(e) {
                e.gl.bindTexture(e.gl.TEXTURE_2D, this.getWebGLTexture(e))
            },
            unbind: function(e) {
                e.gl.bindTexture(e.gl.TEXTURE_2D, null)
            },
            load: function(e, t) {
                var n = new Image;
                t && (n.crossOrigin = t);
                var a = this;
                return n.onload = function() {
                    a.dirty(), a.trigger("success", a), n.onload = null
                }, n.onerror = function() {
                    a.trigger("error", a), n.onerror = null
                }, n.src = e, this.image = n, this
            }
        });
    Object.defineProperty(l.prototype, "width", {
        get: function() {
            return this.image ? this.image.width : this._width
        },
        set: function(e) {
            this.image ? console.warn("Texture from image can't set width") : (this._width !== e && this.dirty(), this._width = e)
        }
    }), Object.defineProperty(l.prototype, "height", {
        get: function() {
            return this.image ? this.image.height : this._height
        },
        set: function(e) {
            this.image ? console.warn("Texture from image can't set height") : (this._height !== e && this.dirty(), this._height = e)
        }
    }), t.a = l
}, function(e, t, n) {
    "use strict";
    t.a = {
        DEPTH_BUFFER_BIT: 256,
        STENCIL_BUFFER_BIT: 1024,
        COLOR_BUFFER_BIT: 16384,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        ZERO: 0,
        ONE: 1,
        SRC_COLOR: 768,
        ONE_MINUS_SRC_COLOR: 769,
        SRC_ALPHA: 770,
        ONE_MINUS_SRC_ALPHA: 771,
        DST_ALPHA: 772,
        ONE_MINUS_DST_ALPHA: 773,
        DST_COLOR: 774,
        ONE_MINUS_DST_COLOR: 775,
        SRC_ALPHA_SATURATE: 776,
        FUNC_ADD: 32774,
        BLEND_EQUATION: 32777,
        BLEND_EQUATION_RGB: 32777,
        BLEND_EQUATION_ALPHA: 34877,
        FUNC_SUBTRACT: 32778,
        FUNC_REVERSE_SUBTRACT: 32779,
        BLEND_DST_RGB: 32968,
        BLEND_SRC_RGB: 32969,
        BLEND_DST_ALPHA: 32970,
        BLEND_SRC_ALPHA: 32971,
        CONSTANT_COLOR: 32769,
        ONE_MINUS_CONSTANT_COLOR: 32770,
        CONSTANT_ALPHA: 32771,
        ONE_MINUS_CONSTANT_ALPHA: 32772,
        BLEND_COLOR: 32773,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        STREAM_DRAW: 35040,
        STATIC_DRAW: 35044,
        DYNAMIC_DRAW: 35048,
        BUFFER_SIZE: 34660,
        BUFFER_USAGE: 34661,
        CURRENT_VERTEX_ATTRIB: 34342,
        FRONT: 1028,
        BACK: 1029,
        FRONT_AND_BACK: 1032,
        CULL_FACE: 2884,
        BLEND: 3042,
        DITHER: 3024,
        STENCIL_TEST: 2960,
        DEPTH_TEST: 2929,
        SCISSOR_TEST: 3089,
        POLYGON_OFFSET_FILL: 32823,
        SAMPLE_ALPHA_TO_COVERAGE: 32926,
        SAMPLE_COVERAGE: 32928,
        NO_ERROR: 0,
        INVALID_ENUM: 1280,
        INVALID_VALUE: 1281,
        INVALID_OPERATION: 1282,
        OUT_OF_MEMORY: 1285,
        CW: 2304,
        CCW: 2305,
        LINE_WIDTH: 2849,
        ALIASED_POINT_SIZE_RANGE: 33901,
        ALIASED_LINE_WIDTH_RANGE: 33902,
        CULL_FACE_MODE: 2885,
        FRONT_FACE: 2886,
        DEPTH_RANGE: 2928,
        DEPTH_WRITEMASK: 2930,
        DEPTH_CLEAR_VALUE: 2931,
        DEPTH_FUNC: 2932,
        STENCIL_CLEAR_VALUE: 2961,
        STENCIL_FUNC: 2962,
        STENCIL_FAIL: 2964,
        STENCIL_PASS_DEPTH_FAIL: 2965,
        STENCIL_PASS_DEPTH_PASS: 2966,
        STENCIL_REF: 2967,
        STENCIL_VALUE_MASK: 2963,
        STENCIL_WRITEMASK: 2968,
        STENCIL_BACK_FUNC: 34816,
        STENCIL_BACK_FAIL: 34817,
        STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
        STENCIL_BACK_PASS_DEPTH_PASS: 34819,
        STENCIL_BACK_REF: 36003,
        STENCIL_BACK_VALUE_MASK: 36004,
        STENCIL_BACK_WRITEMASK: 36005,
        VIEWPORT: 2978,
        SCISSOR_BOX: 3088,
        COLOR_CLEAR_VALUE: 3106,
        COLOR_WRITEMASK: 3107,
        UNPACK_ALIGNMENT: 3317,
        PACK_ALIGNMENT: 3333,
        MAX_TEXTURE_SIZE: 3379,
        MAX_VIEWPORT_DIMS: 3386,
        SUBPIXEL_BITS: 3408,
        RED_BITS: 3410,
        GREEN_BITS: 3411,
        BLUE_BITS: 3412,
        ALPHA_BITS: 3413,
        DEPTH_BITS: 3414,
        STENCIL_BITS: 3415,
        POLYGON_OFFSET_UNITS: 10752,
        POLYGON_OFFSET_FACTOR: 32824,
        TEXTURE_BINDING_2D: 32873,
        SAMPLE_BUFFERS: 32936,
        SAMPLES: 32937,
        SAMPLE_COVERAGE_VALUE: 32938,
        SAMPLE_COVERAGE_INVERT: 32939,
        COMPRESSED_TEXTURE_FORMATS: 34467,
        DONT_CARE: 4352,
        FASTEST: 4353,
        NICEST: 4354,
        GENERATE_MIPMAP_HINT: 33170,
        BYTE: 5120,
        UNSIGNED_BYTE: 5121,
        SHORT: 5122,
        UNSIGNED_SHORT: 5123,
        INT: 5124,
        UNSIGNED_INT: 5125,
        FLOAT: 5126,
        DEPTH_COMPONENT: 6402,
        ALPHA: 6406,
        RGB: 6407,
        RGBA: 6408,
        LUMINANCE: 6409,
        LUMINANCE_ALPHA: 6410,
        UNSIGNED_SHORT_4_4_4_4: 32819,
        UNSIGNED_SHORT_5_5_5_1: 32820,
        UNSIGNED_SHORT_5_6_5: 33635,
        FRAGMENT_SHADER: 35632,
        VERTEX_SHADER: 35633,
        MAX_VERTEX_ATTRIBS: 34921,
        MAX_VERTEX_UNIFORM_VECTORS: 36347,
        MAX_VARYING_VECTORS: 36348,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
        MAX_TEXTURE_IMAGE_UNITS: 34930,
        MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
        SHADER_TYPE: 35663,
        DELETE_STATUS: 35712,
        LINK_STATUS: 35714,
        VALIDATE_STATUS: 35715,
        ATTACHED_SHADERS: 35717,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_ATTRIBUTES: 35721,
        SHADING_LANGUAGE_VERSION: 35724,
        CURRENT_PROGRAM: 35725,
        NEVER: 512,
        LESS: 513,
        EQUAL: 514,
        LEQUAL: 515,
        GREATER: 516,
        NOTEQUAL: 517,
        GEQUAL: 518,
        ALWAYS: 519,
        KEEP: 7680,
        REPLACE: 7681,
        INCR: 7682,
        DECR: 7683,
        INVERT: 5386,
        INCR_WRAP: 34055,
        DECR_WRAP: 34056,
        VENDOR: 7936,
        RENDERER: 7937,
        VERSION: 7938,
        NEAREST: 9728,
        LINEAR: 9729,
        NEAREST_MIPMAP_NEAREST: 9984,
        LINEAR_MIPMAP_NEAREST: 9985,
        NEAREST_MIPMAP_LINEAR: 9986,
        LINEAR_MIPMAP_LINEAR: 9987,
        TEXTURE_MAG_FILTER: 10240,
        TEXTURE_MIN_FILTER: 10241,
        TEXTURE_WRAP_S: 10242,
        TEXTURE_WRAP_T: 10243,
        TEXTURE_2D: 3553,
        TEXTURE: 5890,
        TEXTURE_CUBE_MAP: 34067,
        TEXTURE_BINDING_CUBE_MAP: 34068,
        TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
        TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
        TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
        TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
        TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
        TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
        MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
        TEXTURE0: 33984,
        TEXTURE1: 33985,
        TEXTURE2: 33986,
        TEXTURE3: 33987,
        TEXTURE4: 33988,
        TEXTURE5: 33989,
        TEXTURE6: 33990,
        TEXTURE7: 33991,
        TEXTURE8: 33992,
        TEXTURE9: 33993,
        TEXTURE10: 33994,
        TEXTURE11: 33995,
        TEXTURE12: 33996,
        TEXTURE13: 33997,
        TEXTURE14: 33998,
        TEXTURE15: 33999,
        TEXTURE16: 34e3,
        TEXTURE17: 34001,
        TEXTURE18: 34002,
        TEXTURE19: 34003,
        TEXTURE20: 34004,
        TEXTURE21: 34005,
        TEXTURE22: 34006,
        TEXTURE23: 34007,
        TEXTURE24: 34008,
        TEXTURE25: 34009,
        TEXTURE26: 34010,
        TEXTURE27: 34011,
        TEXTURE28: 34012,
        TEXTURE29: 34013,
        TEXTURE30: 34014,
        TEXTURE31: 34015,
        ACTIVE_TEXTURE: 34016,
        REPEAT: 10497,
        CLAMP_TO_EDGE: 33071,
        MIRRORED_REPEAT: 33648,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        BOOL: 35670,
        BOOL_VEC2: 35671,
        BOOL_VEC3: 35672,
        BOOL_VEC4: 35673,
        FLOAT_MAT2: 35674,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        SAMPLER_2D: 35678,
        SAMPLER_CUBE: 35680,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        COMPILE_STATUS: 35713,
        LOW_FLOAT: 36336,
        MEDIUM_FLOAT: 36337,
        HIGH_FLOAT: 36338,
        LOW_INT: 36339,
        MEDIUM_INT: 36340,
        HIGH_INT: 36341,
        FRAMEBUFFER: 36160,
        RENDERBUFFER: 36161,
        RGBA4: 32854,
        RGB5_A1: 32855,
        RGB565: 36194,
        DEPTH_COMPONENT16: 33189,
        STENCIL_INDEX: 6401,
        STENCIL_INDEX8: 36168,
        DEPTH_STENCIL: 34041,
        RENDERBUFFER_WIDTH: 36162,
        RENDERBUFFER_HEIGHT: 36163,
        RENDERBUFFER_INTERNAL_FORMAT: 36164,
        RENDERBUFFER_RED_SIZE: 36176,
        RENDERBUFFER_GREEN_SIZE: 36177,
        RENDERBUFFER_BLUE_SIZE: 36178,
        RENDERBUFFER_ALPHA_SIZE: 36179,
        RENDERBUFFER_DEPTH_SIZE: 36180,
        RENDERBUFFER_STENCIL_SIZE: 36181,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
        COLOR_ATTACHMENT0: 36064,
        DEPTH_ATTACHMENT: 36096,
        STENCIL_ATTACHMENT: 36128,
        DEPTH_STENCIL_ATTACHMENT: 33306,
        NONE: 0,
        FRAMEBUFFER_COMPLETE: 36053,
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
        FRAMEBUFFER_UNSUPPORTED: 36061,
        FRAMEBUFFER_BINDING: 36006,
        RENDERBUFFER_BINDING: 36007,
        MAX_RENDERBUFFER_SIZE: 34024,
        INVALID_FRAMEBUFFER_OPERATION: 1286,
        UNPACK_FLIP_Y_WEBGL: 37440,
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
        CONTEXT_LOST_WEBGL: 37442,
        UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
        BROWSER_DEFAULT_WEBGL: 37444
    }
}, function(e, t, n) {
    "use strict";
    var a = 0,
        i = Array.prototype,
        r = i.forEach,
        o = {
            genGUID: function() {
                return ++a
            },
            relative2absolute: function(e, t) {
                if (!t || e.match(/^\//)) return e;
                for (var n = e.split("/"), a = t.split("/"), i = n[0];
                    "." === i || ".." === i;) ".." === i && a.pop(), n.shift(), i = n[0];
                return a.join("/") + "/" + n.join("/")
            },
            extend: function(e, t) {
                if (t)
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            defaults: function(e, t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                return e
            },
            extendWithPropList: function(e, t, n) {
                if (t)
                    for (var a = 0; a < n.length; a++) {
                        var i = n[a];
                        e[i] = t[i]
                    }
                return e
            },
            defaultsWithPropList: function(e, t, n) {
                if (t)
                    for (var a = 0; a < n.length; a++) {
                        var i = n[a];
                        null == e[i] && (e[i] = t[i])
                    }
                return e
            },
            each: function(e, t, n) {
                if (e && t)
                    if (e.forEach && e.forEach === r) e.forEach(t, n);
                    else if (e.length === +e.length)
                    for (var a = 0, i = e.length; a < i; a++) t.call(n, e[a], a, e);
                else
                    for (var o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
            },
            isObject: function(e) {
                return e === Object(e)
            },
            isArray: function(e) {
                return Array.isArray(e)
            },
            isArrayLike: function(e) {
                return !!e && e.length === +e.length
            },
            clone: function(e) {
                if (o.isObject(e)) {
                    if (o.isArray(e)) return e.slice();
                    if (o.isArrayLike(e)) {
                        for (var t = new e.constructor(e.length), n = 0; n < e.length; n++) t[n] = e[n];
                        return t
                    }
                    return o.extend({}, e)
                }
                return e
            }
        };
    t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        i = n(0),
        r = n.n(i),
        o = r.a.vec3,
        s = o.copy,
        c = o.set,
        l = function(e, t) {
            this.min = e || new a.a(1 / 0, 1 / 0, 1 / 0), this.max = t || new a.a(-1 / 0, -1 / 0, -1 / 0), this.vertices = null
        };
    l.prototype = {
        constructor: l,
        updateFromVertices: function(e) {
            if (e.length > 0) {
                var t = this.min,
                    n = this.max,
                    a = t.array,
                    i = n.array;
                s(a, e[0]), s(i, e[0]);
                for (var r = 1; r < e.length; r++) {
                    var o = e[r];
                    o[0] < a[0] && (a[0] = o[0]), o[1] < a[1] && (a[1] = o[1]), o[2] < a[2] && (a[2] = o[2]), o[0] > i[0] && (i[0] = o[0]), o[1] > i[1] && (i[1] = o[1]), o[2] > i[2] && (i[2] = o[2])
                }
                t._dirty = !0, n._dirty = !0
            }
        },
        union: function(e) {
            var t = this.min,
                n = this.max;
            return o.min(t.array, t.array, e.min.array), o.max(n.array, n.array, e.max.array), t._dirty = !0, n._dirty = !0, this
        },
        intersection: function(e) {
            var t = this.min,
                n = this.max;
            return o.max(t.array, t.array, e.min.array), o.min(n.array, n.array, e.max.array), t._dirty = !0, n._dirty = !0, this
        },
        intersectBoundingBox: function(e) {
            var t = this.min.array,
                n = this.max.array,
                a = e.min.array,
                i = e.max.array;
            return !(t[0] > i[0] || t[1] > i[1] || t[2] > i[2] || n[0] < a[0] || n[1] < a[1] || n[2] < a[2])
        },
        containBoundingBox: function(e) {
            var t = this.min.array,
                n = this.max.array,
                a = e.min.array,
                i = e.max.array;
            return t[0] <= a[0] && t[1] <= a[1] && t[2] <= a[2] && n[0] >= i[0] && n[1] >= i[1] && n[2] >= i[2]
        },
        containPoint: function(e) {
            var t = this.min.array,
                n = this.max.array,
                a = e.array;
            return t[0] <= a[0] && t[1] <= a[1] && t[2] <= a[2] && n[0] >= a[0] && n[1] >= a[1] && n[2] >= a[2]
        },
        isFinite: function() {
            var e = this.min.array,
                t = this.max.array;
            return isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(t[0]) && isFinite(t[1]) && isFinite(t[2])
        },
        applyTransform: function(e) {
            this.transformFrom(this, e)
        },
        transformFrom: function() {
            var e = o.create(),
                t = o.create(),
                n = o.create(),
                a = o.create(),
                i = o.create(),
                r = o.create();
            return function(o, s) {
                var c = o.min.array,
                    l = o.max.array,
                    u = s.array;
                return e[0] = u[0] * c[0], e[1] = u[1] * c[0], e[2] = u[2] * c[0], t[0] = u[0] * l[0], t[1] = u[1] * l[0], t[2] = u[2] * l[0], n[0] = u[4] * c[1], n[1] = u[5] * c[1], n[2] = u[6] * c[1], a[0] = u[4] * l[1], a[1] = u[5] * l[1], a[2] = u[6] * l[1], i[0] = u[8] * c[2], i[1] = u[9] * c[2], i[2] = u[10] * c[2], r[0] = u[8] * l[2], r[1] = u[9] * l[2], r[2] = u[10] * l[2], c = this.min.array, l = this.max.array, c[0] = Math.min(e[0], t[0]) + Math.min(n[0], a[0]) + Math.min(i[0], r[0]) + u[12], c[1] = Math.min(e[1], t[1]) + Math.min(n[1], a[1]) + Math.min(i[1], r[1]) + u[13], c[2] = Math.min(e[2], t[2]) + Math.min(n[2], a[2]) + Math.min(i[2], r[2]) + u[14], l[0] = Math.max(e[0], t[0]) + Math.max(n[0], a[0]) + Math.max(i[0], r[0]) + u[12], l[1] = Math.max(e[1], t[1]) + Math.max(n[1], a[1]) + Math.max(i[1], r[1]) + u[13], l[2] = Math.max(e[2], t[2]) + Math.max(n[2], a[2]) + Math.max(i[2], r[2]) + u[14], this.min._dirty = !0, this.max._dirty = !0, this
            }
        }(),
        applyProjection: function(e) {
            var t = this.min.array,
                n = this.max.array,
                a = e.array,
                i = t[0],
                r = t[1],
                o = t[2],
                s = n[0],
                c = n[1],
                l = t[2],
                u = n[0],
                p = n[1],
                d = n[2];
            if (1 === a[15]) t[0] = a[0] * i + a[12], t[1] = a[5] * r + a[13], n[2] = a[10] * o + a[14], n[0] = a[0] * u + a[12], n[1] = a[5] * p + a[13], t[2] = a[10] * d + a[14];
            else {
                var f = -1 / o;
                t[0] = a[0] * i * f, t[1] = a[5] * r * f, n[2] = (a[10] * o + a[14]) * f, f = -1 / l, n[0] = a[0] * s * f, n[1] = a[5] * c * f, f = -1 / d, t[2] = (a[10] * d + a[14]) * f
            }
            return this.min._dirty = !0, this.max._dirty = !0, this
        },
        updateVertices: function() {
            var e = this.vertices;
            if (!e) {
                e = [];
                for (var t = 0; t < 8; t++) e[t] = o.fromValues(0, 0, 0);
                this.vertices = e
            }
            var n = this.min.array,
                a = this.max.array;
            return c(e[0], n[0], n[1], n[2]), c(e[1], n[0], a[1], n[2]), c(e[2], a[0], n[1], n[2]), c(e[3], a[0], a[1], n[2]), c(e[4], n[0], n[1], a[2]), c(e[5], n[0], a[1], a[2]), c(e[6], a[0], n[1], a[2]), c(e[7], a[0], a[1], a[2]), this
        },
        copy: function(e) {
            var t = this.min,
                n = this.max;
            return s(t.array, e.min.array), s(n.array, e.max.array), t._dirty = !0, n._dirty = !0, this
        },
        clone: function() {
            var e = new l;
            return e.copy(this), e
        }
    }, t.a = l
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = n.n(a),
        r = n(4),
        o = i.a.mat4,
        s = i.a.vec3,
        c = i.a.mat3,
        l = i.a.quat,
        u = function() {
            this._axisX = new r.a, this._axisY = new r.a, this._axisZ = new r.a, this.array = o.create(), this._dirty = !0
        };
    u.prototype = {
        constructor: u,
        setArray: function(e) {
            for (var t = 0; t < this.array.length; t++) this.array[t] = e[t];
            return this._dirty = !0, this
        },
        adjoint: function() {
            return o.adjoint(this.array, this.array), this._dirty = !0, this
        },
        clone: function() {
            return (new u).copy(this)
        },
        copy: function(e) {
            return o.copy(this.array, e.array), this._dirty = !0, this
        },
        determinant: function() {
            return o.determinant(this.array)
        },
        fromQuat: function(e) {
            return o.fromQuat(this.array, e.array), this._dirty = !0, this
        },
        fromRotationTranslation: function(e, t) {
            return o.fromRotationTranslation(this.array, e.array, t.array), this._dirty = !0, this
        },
        fromMat2d: function(e) {
            return u.fromMat2d(this, e), this
        },
        frustum: function(e, t, n, a, i, r) {
            return o.frustum(this.array, e, t, n, a, i, r), this._dirty = !0, this
        },
        identity: function() {
            return o.identity(this.array), this._dirty = !0, this
        },
        invert: function() {
            return o.invert(this.array, this.array), this._dirty = !0, this
        },
        lookAt: function(e, t, n) {
            return o.lookAt(this.array, e.array, t.array, n.array), this._dirty = !0, this
        },
        mul: function(e) {
            return o.mul(this.array, this.array, e.array), this._dirty = !0, this
        },
        mulLeft: function(e) {
            return o.mul(this.array, e.array, this.array), this._dirty = !0, this
        },
        multiply: function(e) {
            return o.multiply(this.array, this.array, e.array), this._dirty = !0, this
        },
        multiplyLeft: function(e) {
            return o.multiply(this.array, e.array, this.array), this._dirty = !0, this
        },
        ortho: function(e, t, n, a, i, r) {
            return o.ortho(this.array, e, t, n, a, i, r), this._dirty = !0, this
        },
        perspective: function(e, t, n, a) {
            return o.perspective(this.array, e, t, n, a), this._dirty = !0, this
        },
        rotate: function(e, t) {
            return o.rotate(this.array, this.array, e, t.array), this._dirty = !0, this
        },
        rotateX: function(e) {
            return o.rotateX(this.array, this.array, e), this._dirty = !0, this
        },
        rotateY: function(e) {
            return o.rotateY(this.array, this.array, e), this._dirty = !0, this
        },
        rotateZ: function(e) {
            return o.rotateZ(this.array, this.array, e), this._dirty = !0, this
        },
        scale: function(e) {
            return o.scale(this.array, this.array, e.array), this._dirty = !0, this
        },
        translate: function(e) {
            return o.translate(this.array, this.array, e.array), this._dirty = !0, this
        },
        transpose: function() {
            return o.transpose(this.array, this.array), this._dirty = !0, this
        },
        decomposeMatrix: function() {
            var e = s.create(),
                t = s.create(),
                n = s.create(),
                a = c.create();
            return function(i, r, o) {
                var u = this.array;
                s.set(e, u[0], u[1], u[2]), s.set(t, u[4], u[5], u[6]), s.set(n, u[8], u[9], u[10]);
                var p = s.length(e),
                    d = s.length(t),
                    f = s.length(n);
                this.determinant() < 0 && (p = -p), i && i.set(p, d, f), o.set(u[12], u[13], u[14]), c.fromMat4(a, u), a[0] /= p, a[1] /= p, a[2] /= p, a[3] /= d, a[4] /= d, a[5] /= d, a[6] /= f, a[7] /= f, a[8] /= f, l.fromMat3(r.array, a), l.normalize(r.array, r.array), r._dirty = !0, o._dirty = !0
            }
        }(),
        toString: function() {
            return "[" + Array.prototype.join.call(this.array, ",") + "]"
        },
        toArray: function() {
            return Array.prototype.slice.call(this.array)
        }
    };
    var p = Object.defineProperty;
    if (p) {
        var d = u.prototype;
        p(d, "z", {
            get: function() {
                var e = this.array;
                return this._axisZ.set(e[8], e[9], e[10]), this._axisZ
            },
            set: function(e) {
                var t = this.array;
                e = e.array, t[8] = e[0], t[9] = e[1], t[10] = e[2], this._dirty = !0
            }
        }), p(d, "y", {
            get: function() {
                var e = this.array;
                return this._axisY.set(e[4], e[5], e[6]), this._axisY
            },
            set: function(e) {
                var t = this.array;
                e = e.array, t[4] = e[0], t[5] = e[1], t[6] = e[2], this._dirty = !0
            }
        }), p(d, "x", {
            get: function() {
                var e = this.array;
                return this._axisX.set(e[0], e[1], e[2]), this._axisX
            },
            set: function(e) {
                var t = this.array;
                e = e.array, t[0] = e[0], t[1] = e[1], t[2] = e[2], this._dirty = !0
            }
        })
    }
    u.adjoint = function(e, t) {
        return o.adjoint(e.array, t.array), e._dirty = !0, e
    }, u.copy = function(e, t) {
        return o.copy(e.array, t.array), e._dirty = !0, e
    }, u.determinant = function(e) {
        return o.determinant(e.array)
    }, u.identity = function(e) {
        return o.identity(e.array), e._dirty = !0, e
    }, u.ortho = function(e, t, n, a, i, r, s) {
        return o.ortho(e.array, t, n, a, i, r, s), e._dirty = !0, e
    }, u.perspective = function(e, t, n, a, i) {
        return o.perspective(e.array, t, n, a, i), e._dirty = !0, e
    }, u.lookAt = function(e, t, n, a) {
        return o.lookAt(e.array, t.array, n.array, a.array), e._dirty = !0, e
    }, u.invert = function(e, t) {
        return o.invert(e.array, t.array), e._dirty = !0, e
    }, u.mul = function(e, t, n) {
        return o.mul(e.array, t.array, n.array), e._dirty = !0, e
    }, u.multiply = u.mul, u.fromQuat = function(e, t) {
        return o.fromQuat(e.array, t.array), e._dirty = !0, e
    }, u.fromRotationTranslation = function(e, t, n) {
        return o.fromRotationTranslation(e.array, t.array, n.array), e._dirty = !0, e
    }, u.fromMat2d = function(e, t) {
        e._dirty = !0;
        var t = t.array,
            e = e.array;
        return e[0] = t[0], e[4] = t[2], e[12] = t[4], e[1] = t[1], e[5] = t[3], e[13] = t[5], e
    }, u.rotate = function(e, t, n, a) {
        return o.rotate(e.array, t.array, n, a.array), e._dirty = !0, e
    }, u.rotateX = function(e, t, n) {
        return o.rotateX(e.array, t.array, n), e._dirty = !0, e
    }, u.rotateY = function(e, t, n) {
        return o.rotateY(e.array, t.array, n), e._dirty = !0, e
    }, u.rotateZ = function(e, t, n) {
        return o.rotateZ(e.array, t.array, n), e._dirty = !0, e
    }, u.scale = function(e, t, n) {
        return o.scale(e.array, t.array, n.array), e._dirty = !0, e
    }, u.transpose = function(e, t) {
        return o.transpose(e.array, t.array), e._dirty = !0, e
    }, u.translate = function(e, t, n) {
        return o.translate(e.array, t.array, n.array), e._dirty = !0, e
    }, t.a = u
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = Object.keys(e);
        t.sort();
        for (var n = [], a = 0; a < t.length; a++) {
            var i = t[a],
                r = e[i];
            null === r ? n.push(i) : n.push(i + " " + r.toString())
        }
        return n.join("\n")
    }

    function i(e, t, n) {
        n.sort();
        for (var i = [], r = 0; r < n.length; r++) {
            var s = n[r];
            i.push(s)
        }
        var c = a(e) + "\n" + a(t) + "\n" + i.join("\n");
        if (l[c]) return l[c];
        var u = o.a.genGUID();
        return l[c] = u, u
    }
    var r = n(1),
        o = (n(3), n(7)),
        s = n(71),
        c = s.a.parseToFloat,
        l = {},
        u = r.a.extend(function() {
            return {
                name: "",
                depthTest: !0,
                depthMask: !0,
                transparent: !1,
                blend: null,
                autoUpdateTextureStatus: !0,
                uniforms: {},
                vertexDefines: {},
                fragmentDefines: {},
                _textureStatus: {},
                _enabledUniforms: null
            }
        }, function() {
            this.name || (this.name = "MATERIAL_" + this.__uid__), this.shader && this.attachShader(this.shader, !0)
        }, {
            precision: "highp",
            setUniform: function(e, t) {
                void 0 === t && console.warn('Uniform value "' + e + '" is undefined');
                var n = this.uniforms[e];
                n && ("string" == typeof t && (t = c(t) || t), n.value = t, this.autoUpdateTextureStatus && "t" === n.type && (t ? this.enableTexture(e) : this.disableTexture(e)))
            },
            setUniforms: function(e) {
                for (var t in e) {
                    var n = e[t];
                    this.setUniform(t, n)
                }
            },
            isUniformEnabled: function(e) {
                return this._enabledUniforms.indexOf(e) >= 0
            },
            getEnabledUniforms: function() {
                return this._enabledUniforms
            },
            getTextureUniforms: function() {
                return this._textureUniforms
            },
            set: function(e, t) {
                if ("object" == typeof e)
                    for (var n in e) {
                        var a = e[n];
                        this.setUniform(n, a)
                    } else this.setUniform(e, t)
            },
            get: function(e) {
                var t = this.uniforms[e];
                if (t) return t.value
            },
            attachShader: function(e, t) {
                var n = this.uniforms;
                this.uniforms = e.createUniforms(), this.shader = e;
                var a = this.uniforms;
                this._enabledUniforms = Object.keys(a), this._enabledUniforms.sort(), this._textureUniforms = this._enabledUniforms.filter(function(e) {
                    var t = this.uniforms[e].type;
                    return "t" === t || "tv" === t
                }, this);
                var i = this.vertexDefines,
                    r = this.fragmentDefines;
                if (this.vertexDefines = o.a.clone(e.vertexDefines), this.fragmentDefines = o.a.clone(e.fragmentDefines), t) {
                    for (var s in n) a[s] && (a[s].value = n[s].value);
                    o.a.defaults(this.vertexDefines, i), o.a.defaults(this.fragmentDefines, r)
                }
                var c = {};
                for (var l in e.textures) c[l] = {
                    shaderType: e.textures[l].shaderType,
                    type: e.textures[l].type,
                    enabled: !(!t || !this._textureStatus[l]) && this._textureStatus[l].enabled
                };
                this._textureStatus = c, this._programKey = ""
            },
            clone: function() {
                var e = new this.constructor({
                    name: this.name,
                    shader: this.shader
                });
                for (var t in this.uniforms) e.uniforms[t].value = this.uniforms[t].value;
                return e.depthTest = this.depthTest, e.depthMask = this.depthMask, e.transparent = this.transparent, e.blend = this.blend, e.vertexDefines = o.a.clone(this.vertexDefines), e.fragmentDefines = o.a.clone(this.fragmentDefines), e.enableTexture(this.getEnabledTextures()), e.precision = this.precision, e
            },
            define: function(e, t, n) {
                var a = this.vertexDefines,
                    i = this.fragmentDefines;
                "vertex" !== e && "fragment" !== e && "both" !== e && arguments.length < 3 && (n = t, t = e, e = "both"), n = null != n ? n : null, "vertex" !== e && "both" !== e || a[t] !== n && (a[t] = n, this._programKey = ""), "fragment" !== e && "both" !== e || i[t] !== n && (i[t] = n, "both" !== e && (this._programKey = ""))
            },
            undefine: function(e, t) {
                "vertex" !== e && "fragment" !== e && "both" !== e && arguments.length < 2 && (t = e, e = "both"), "vertex" !== e && "both" !== e || this.isDefined("vertex", t) && (delete this.vertexDefines[t], this._programKey = ""), "fragment" !== e && "both" !== e || this.isDefined("fragment", t) && (delete this.fragmentDefines[t], "both" !== e && (this._programKey = ""))
            },
            isDefined: function(e, t) {
                switch (e) {
                    case "vertex":
                        return void 0 !== this.vertexDefines[t];
                    case "fragment":
                        return void 0 !== this.fragmentDefines[t]
                }
            },
            getDefine: function(e, t) {
                switch (e) {
                    case "vertex":
                        return this.vertexDefines[t];
                    case "fragment":
                        return this.fragmentDefines[t]
                }
            },
            enableTexture: function(e) {
                if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++) this.enableTexture(e[t]);
                else {
                    var n = this._textureStatus[e];
                    if (n) {
                        n.enabled || (n.enabled = !0, this._programKey = "")
                    }
                }
            },
            enableTexturesAll: function() {
                var e = this._textureStatus;
                for (var t in e) e[t].enabled = !0;
                this._programKey = ""
            },
            disableTexture: function(e) {
                if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++) this.disableTexture(e[t]);
                else {
                    var n = this._textureStatus[e];
                    if (n) {
                        !n.enabled || (n.enabled = !1, this._programKey = "")
                    }
                }
            },
            disableTexturesAll: function() {
                var e = this._textureStatus;
                for (var t in e) e[t].enabled = !1;
                this._programKey = ""
            },
            isTextureEnabled: function(e) {
                var t = this._textureStatus;
                return !!t[e] && t[e].enabled
            },
            getEnabledTextures: function() {
                var e = [],
                    t = this._textureStatus;
                for (var n in t) t[n].enabled && e.push(n);
                return e
            },
            dirtyDefines: function() {
                this._programKey = ""
            },
            getProgramKey: function() {
                return this._programKey || (this._programKey = i(this.vertexDefines, this.fragmentDefines, this.getEnabledTextures())), this._programKey
            }
        });
    t.a = u
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(3),
        r = (n(15), n(6)),
        o = n(28),
        s = r.a.FRAMEBUFFER,
        c = r.a.RENDERBUFFER,
        l = r.a.DEPTH_ATTACHMENT,
        u = r.a.COLOR_ATTACHMENT0,
        p = a.a.extend({
            depthBuffer: !0,
            viewport: null,
            _width: 0,
            _height: 0,
            _textures: null,
            _boundRenderer: null
        }, function() {
            this._cache = new o.a, this._textures = {}
        }, {
            getTextureWidth: function() {
                return this._width
            },
            getTextureHeight: function() {
                return this._height
            },
            bind: function(e) {
                if (e.__currentFrameBuffer) {
                    if (e.__currentFrameBuffer === this) return;
                    console.warn("Renderer already bound with another framebuffer. Unbind it first")
                }
                e.__currentFrameBuffer = this;
                var t = e.gl;
                t.bindFramebuffer(s, this._getFrameBufferGL(e)), this._boundRenderer = e;
                var n = this._cache;
                n.put("viewport", e.viewport);
                var a, i, r = !1;
                for (var o in this._textures) {
                    r = !0;
                    var u = this._textures[o];
                    u && (a = u.texture.width, i = u.texture.height, this._doAttach(e, u.texture, o, u.target))
                }
                this._width = a, this._height = i, !r && this.depthBuffer && console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."), this.viewport ? e.setViewport(this.viewport) : e.setViewport(0, 0, a, i, 1);
                var p = n.get("attached_textures");
                if (p)
                    for (var o in p)
                        if (!this._textures[o]) {
                            var d = p[o];
                            this._doDetach(t, o, d)
                        } if (!n.get("depthtexture_attached") && this.depthBuffer) {
                    n.miss("renderbuffer") && n.put("renderbuffer", t.createRenderbuffer());
                    var f = n.get("renderbuffer");
                    a === n.get("renderbuffer_width") && i === n.get("renderbuffer_height") || (t.bindRenderbuffer(c, f), t.renderbufferStorage(c, t.DEPTH_COMPONENT16, a, i), n.put("renderbuffer_width", a), n.put("renderbuffer_height", i), t.bindRenderbuffer(c, null)), n.get("renderbuffer_attached") || (t.framebufferRenderbuffer(s, l, c, f), n.put("renderbuffer_attached", !0))
                }
            },
            unbind: function(e) {
                e.__currentFrameBuffer = null, e.gl.bindFramebuffer(s, null), this._boundRenderer = null, this._cache.use(e.__uid__);
                var t = this._cache.get("viewport");
                t && e.setViewport(t), this.updateMipmap(e)
            },
            updateMipmap: function(e) {
                var t = e.gl;
                for (var n in this._textures) {
                    var a = this._textures[n];
                    if (a) {
                        var o = a.texture;
                        if (!o.NPOT && o.useMipmap && o.minFilter === i.a.LINEAR_MIPMAP_LINEAR) {
                            var s = "textureCube" === o.textureType ? r.a.TEXTURE_CUBE_MAP : r.a.TEXTURE_2D;
                            t.bindTexture(s, o.getWebGLTexture(e)), t.generateMipmap(s), t.bindTexture(s, null)
                        }
                    }
                }
            },
            checkStatus: function(e) {
                return e.checkFramebufferStatus(s)
            },
            _getFrameBufferGL: function(e) {
                var t = this._cache;
                return t.use(e.__uid__), t.miss("framebuffer") && t.put("framebuffer", e.gl.createFramebuffer()), t.get("framebuffer")
            },
            attach: function(e, t, n) {
                if (!e.width) throw new Error("The texture attached to color buffer is not a valid.");
                t = t || u, n = n || r.a.TEXTURE_2D;
                var a, i = this._boundRenderer,
                    o = i && i.gl;
                if (o) {
                    var s = this._cache;
                    s.use(i.__uid__), a = s.get("attached_textures")
                }
                var c = this._textures[t];
                if (!c || c.target !== n || c.texture !== e || !a || null == a[t]) {
                    var l = !0;
                    i && (l = this._doAttach(i, e, t, n), this.viewport || i.setViewport(0, 0, e.width, e.height, 1)), l && (this._textures[t] = this._textures[t] || {}, this._textures[t].texture = e, this._textures[t].target = n)
                }
            },
            _doAttach: function(e, t, n, a) {
                var i = e.gl,
                    o = t.getWebGLTexture(e),
                    u = this._cache.get("attached_textures");
                if (u && u[n]) {
                    var p = u[n];
                    if (p.texture === t && p.target === a) return
                }
                n = +n;
                var d = !0;
                if (n === l || n === r.a.DEPTH_STENCIL_ATTACHMENT) {
                    if (e.getGLExtension("WEBGL_depth_texture") || (console.error("Depth texture is not supported by the browser"), d = !1), t.format !== r.a.DEPTH_COMPONENT && t.format !== r.a.DEPTH_STENCIL && (console.error("The texture attached to depth buffer is not a valid."), d = !1), d) {
                        var f = this._cache.get("renderbuffer");
                        f && (i.framebufferRenderbuffer(s, l, c, null), i.deleteRenderbuffer(f), this._cache.put("renderbuffer", !1)), this._cache.put("renderbuffer_attached", !1), this._cache.put("depthtexture_attached", !0)
                    }
                }
                return i.framebufferTexture2D(s, n, a, o, 0), u || (u = {}, this._cache.put("attached_textures", u)), u[n] = u[n] || {}, u[n].texture = t, u[n].target = a, d
            },
            _doDetach: function(e, t, n) {
                e.framebufferTexture2D(s, t, n, null, 0);
                var a = this._cache.get("attached_textures");
                a && a[t] && (a[t] = null), t !== l && t !== r.a.DEPTH_STENCIL_ATTACHMENT || this._cache.put("depthtexture_attached", !1)
            },
            detach: function(e, t) {
                if (this._textures[e] = null, this._boundRenderer) {
                    this._cache.use(this._boundRenderer.__uid__), this._doDetach(this._boundRenderer.gl, e, t)
                }
            },
            dispose: function(e) {
                var t = e.gl,
                    n = this._cache;
                n.use(e.__uid__);
                var a = n.get("renderbuffer");
                a && t.deleteRenderbuffer(a);
                var i = n.get("framebuffer");
                i && t.deleteFramebuffer(i), n.deleteContext(e.__uid__), this._textures = {}
            }
        });
    p.DEPTH_ATTACHMENT = l, p.COLOR_ATTACHMENT0 = u, p.STENCIL_ATTACHMENT = r.a.STENCIL_ATTACHMENT, p.DEPTH_STENCIL_ATTACHMENT = r.a.DEPTH_STENCIL_ATTACHMENT, t.a = p
}, function(e, t, n) {
    "use strict";
    var a = !0;
    try {
        var i = document.createElement("canvas");
        if (!(i.getContext("webgl") || i.getContext("experimental-webgl"))) throw new Error
    } catch (e) {
        a = !1
    }
    var r = {};
    r.supportWebGL = function() {
        return a
    }, r.Int8Array = "undefined" == typeof Int8Array ? Array : Int8Array, r.Uint8Array = "undefined" == typeof Uint8Array ? Array : Uint8Array, r.Uint16Array = "undefined" == typeof Uint16Array ? Array : Uint16Array, r.Uint32Array = "undefined" == typeof Uint32Array ? Array : Uint32Array, r.Int16Array = "undefined" == typeof Int16Array ? Array : Int16Array, r.Float32Array = "undefined" == typeof Float32Array ? Array : Float32Array, r.Float64Array = "undefined" == typeof Float64Array ? Array : Float64Array, t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(23),
        r = n(31),
        o = n(2),
        s = n(10),
        c = n(16),
        l = n(6),
        u = n(98);
    o.a.import(u.a);
    var p = new r.a,
        d = new c.a({
            geometry: p,
            frustumCulling: !1
        }),
        f = new i.a,
        h = a.a.extend(function() {
            return {
                fragment: "",
                outputs: null,
                material: null,
                blendWithPrevious: !1,
                clearColor: !1,
                clearDepth: !0
            }
        }, function() {
            var e = new o.a(o.a.source("clay.compositor.vertex"), this.fragment),
                t = new s.a({
                    shader: e
                });
            t.enableTexturesAll(), this.material = t
        }, {
            setUniform: function(e, t) {
                this.material.setUniform(e, t)
            },
            getUniform: function(e) {
                var t = this.material.uniforms[e];
                if (t) return t.value
            },
            attachOutput: function(e, t) {
                this.outputs || (this.outputs = {}), t = t || l.a.COLOR_ATTACHMENT0, this.outputs[t] = e
            },
            detachOutput: function(e) {
                for (var t in this.outputs) this.outputs[t] === e && (this.outputs[t] = null)
            },
            bind: function(e, t) {
                if (this.outputs)
                    for (var n in this.outputs) {
                        var a = this.outputs[n];
                        a && t.attach(a, n)
                    }
                t && t.bind(e)
            },
            unbind: function(e, t) {
                t.unbind(e)
            },
            render: function(e, t) {
                var n = e.gl;
                if (t) {
                    this.bind(e, t);
                    var a = e.getGLExtension("EXT_draw_buffers");
                    if (a && this.outputs) {
                        var i = [];
                        for (var r in this.outputs)(r = +r) >= n.COLOR_ATTACHMENT0 && r <= n.COLOR_ATTACHMENT0 + 8 && i.push(r);
                        a.drawBuffersEXT(i)
                    }
                }
                this.trigger("beforerender", this, e);
                var o = this.clearDepth ? n.DEPTH_BUFFER_BIT : 0;
                if (n.depthMask(!0), this.clearColor) {
                    o |= n.COLOR_BUFFER_BIT, n.colorMask(!0, !0, !0, !0);
                    var s = this.clearColor;
                    Array.isArray(s) && n.clearColor(s[0], s[1], s[2], s[3])
                }
                n.clear(o), this.blendWithPrevious ? (n.enable(n.BLEND), this.material.transparent = !0) : (n.disable(n.BLEND), this.material.transparent = !1), this.renderQuad(e), this.trigger("afterrender", this, e), t && this.unbind(e, t)
            },
            renderQuad: function(e) {
                d.material = this.material, e.renderPass([d], f)
            },
            dispose: function(e) {}
        });
    t.a = h
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(4),
        r = n(76),
        o = n(9),
        s = n(0),
        c = n.n(s),
        l = n(8),
        u = c.a.mat4,
        p = 0,
        d = a.a.extend({
            name: "",
            position: null,
            rotation: null,
            scale: null,
            worldTransform: null,
            localTransform: null,
            autoUpdateLocalTransform: !0,
            _parent: null,
            _scene: null,
            _needsUpdateWorldTransform: !0,
            _inIterating: !1,
            __depth: 0
        }, function() {
            this.name || (this.name = (this.type || "NODE") + "_" + p++), this.position || (this.position = new i.a), this.rotation || (this.rotation = new r.a), this.scale || (this.scale = new i.a(1, 1, 1)), this.worldTransform = new o.a, this.localTransform = new o.a, this._children = []
        }, {
            target: null,
            invisible: !1,
            isSkinnedMesh: function() {
                return !1
            },
            isRenderable: function() {
                return !1
            },
            setName: function(e) {
                var t = this._scene;
                if (t) {
                    var n = t._nodeRepository;
                    delete n[this.name], n[e] = this
                }
                this.name = e
            },
            add: function(e) {
                var t = e._parent;
                if (t !== this) {
                    t && t.remove(e), e._parent = this, this._children.push(e);
                    var n = this._scene;
                    n && n !== e.scene && e.traverse(this._addSelfToScene, this), e._needsUpdateWorldTransform = !0
                }
            },
            remove: function(e) {
                var t = this._children,
                    n = t.indexOf(e);
                n < 0 || (t.splice(n, 1), e._parent = null, this._scene && e.traverse(this._removeSelfFromScene, this))
            },
            removeAll: function() {
                for (var e = this._children, t = 0; t < e.length; t++) e[t]._parent = null, this._scene && e[t].traverse(this._removeSelfFromScene, this);
                this._children = []
            },
            getScene: function() {
                return this._scene
            },
            getParent: function() {
                return this._parent
            },
            _removeSelfFromScene: function(e) {
                e._scene.removeFromScene(e), e._scene = null
            },
            _addSelfToScene: function(e) {
                this._scene.addToScene(e), e._scene = this._scene
            },
            isAncestor: function(e) {
                for (var t = e._parent; t;) {
                    if (t === this) return !0;
                    t = t._parent
                }
                return !1
            },
            children: function() {
                return this._children.slice()
            },
            childAt: function(e) {
                return this._children[e]
            },
            getChildByName: function(e) {
                for (var t = this._children, n = 0; n < t.length; n++)
                    if (t[n].name === e) return t[n]
            },
            getDescendantByName: function(e) {
                for (var t = this._children, n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (a.name === e) return a;
                    var i = a.getDescendantByName(e);
                    if (i) return i
                }
            },
            queryNode: function(e) {
                if (e) {
                    for (var t = e.split("/"), n = this, a = 0; a < t.length; a++) {
                        var i = t[a];
                        if (i) {
                            for (var r = !1, o = n._children, s = 0; s < o.length; s++) {
                                var c = o[s];
                                if (c.name === i) {
                                    n = c, r = !0;
                                    break
                                }
                            }
                            if (!r) return
                        }
                    }
                    return n
                }
            },
            getPath: function(e) {
                if (!this._parent) return "/";
                for (var t = this._parent, n = this.name; t._parent && (n = t.name + "/" + n, t._parent != e);) t = t._parent;
                return !t._parent && e ? null : n
            },
            traverse: function(e, t) {
                e.call(t, this);
                for (var n = this._children, a = 0, i = n.length; a < i; a++) n[a].traverse(e, t)
            },
            eachChild: function(e, t) {
                for (var n = this._children, a = 0, i = n.length; a < i; a++) {
                    var r = n[a];
                    e.call(t, r, a)
                }
            },
            setLocalTransform: function(e) {
                u.copy(this.localTransform.array, e.array), this.decomposeLocalTransform()
            },
            decomposeLocalTransform: function(e) {
                var t = e ? null : this.scale;
                this.localTransform.decomposeMatrix(t, this.rotation, this.position)
            },
            setWorldTransform: function(e) {
                u.copy(this.worldTransform.array, e.array), this.decomposeWorldTransform()
            },
            decomposeWorldTransform: function() {
                var e = u.create();
                return function(t) {
                    var n = this.localTransform,
                        a = this.worldTransform;
                    this._parent ? (u.invert(e, this._parent.worldTransform.array), u.multiply(n.array, e, a.array)) : u.copy(n.array, a.array);
                    var i = t ? null : this.scale;
                    n.decomposeMatrix(i, this.rotation, this.position)
                }
            }(),
            transformNeedsUpdate: function() {
                return this.position._dirty || this.rotation._dirty || this.scale._dirty
            },
            updateLocalTransform: function() {
                var e = this.position,
                    t = this.rotation,
                    n = this.scale;
                if (this.transformNeedsUpdate()) {
                    var a = this.localTransform.array;
                    u.fromRotationTranslation(a, t.array, e.array), u.scale(a, a, n.array), t._dirty = !1, n._dirty = !1, e._dirty = !1, this._needsUpdateWorldTransform = !0
                }
            },
            _updateWorldTransformTopDown: function() {
                var e = this.localTransform.array,
                    t = this.worldTransform.array;
                this._parent ? u.multiplyAffine(t, this._parent.worldTransform.array, e) : u.copy(t, e)
            },
            updateWorldTransform: function() {
                for (var e = this; e && e.getParent() && e.getParent().transformNeedsUpdate();) e = e.getParent();
                e.update()
            },
            update: function(e) {
                this.autoUpdateLocalTransform ? this.updateLocalTransform() : e = !0, (e || this._needsUpdateWorldTransform) && (this._updateWorldTransformTopDown(), e = !0, this._needsUpdateWorldTransform = !1);
                for (var t = this._children, n = 0, a = t.length; n < a; n++) t[n].update(e)
            },
            getBoundingBox: function() {
                function e(e) {
                    return !e.invisible && e.geometry
                }
                var t = new l.a,
                    n = new o.a,
                    a = new o.a;
                return function(i, r) {
                    return r = r || new l.a, i = i || e, this._parent ? o.a.invert(a, this._parent.worldTransform) : o.a.identity(a), this.traverse(function(e) {
                        e.geometry && e.geometry.boundingBox && (t.copy(e.geometry.boundingBox), o.a.multiply(n, a, e.worldTransform), t.applyTransform(n), r.union(t))
                    }, this, e), r
                }
            }(),
            getWorldPosition: function(e) {
                this.transformNeedsUpdate() && this.updateWorldTransform();
                var t = this.worldTransform.array;
                if (e) {
                    var n = e.array;
                    return n[0] = t[12], n[1] = t[13], n[2] = t[14], e
                }
                return new i.a(t[12], t[13], t[14])
            },
            clone: function() {
                var e = new this.constructor,
                    t = this._children;
                e.setName(this.name), e.position.copy(this.position), e.rotation.copy(this.rotation), e.scale.copy(this.scale);
                for (var n = 0; n < t.length; n++) e.add(t[n].clone());
                return e
            },
            rotateAround: function() {
                var e = new i.a,
                    t = new o.a;
                return function(n, a, i) {
                    e.copy(this.position).subtract(n);
                    var r = this.localTransform;
                    r.identity(), r.translate(n), r.rotate(i, a), t.fromRotationTranslation(this.rotation, e), r.multiply(t), r.scale(this.scale), this.decomposeLocalTransform(), this._needsUpdateWorldTransform = !0
                }
            }(),
            lookAt: function() {
                var e = new o.a;
                return function(t, n) {
                    e.lookAt(this.position, t, n || this.localTransform.y).invert(), this.setLocalTransform(e), this.target = t
                }
            }()
        });
    t.a = d
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return "CANVAS" === e.nodeName || "VIDEO" === e.nodeName || e.complete
    }
    var i = n(3),
        r = n(6),
        o = n(7),
        s = n(47),
        c = s.a.isPowerOfTwo,
        l = ["px", "nx", "py", "ny", "pz", "nz"],
        u = i.a.extend(function() {
            return {
                image: {
                    px: null,
                    nx: null,
                    py: null,
                    ny: null,
                    pz: null,
                    nz: null
                },
                pixels: {
                    px: null,
                    nx: null,
                    py: null,
                    ny: null,
                    pz: null,
                    nz: null
                },
                mipmaps: []
            }
        }, {
            textureType: "textureCube",
            update: function(e) {
                var t = e.gl;
                t.bindTexture(t.TEXTURE_CUBE_MAP, this._cache.get("webgl_texture")), this.updateCommon(e);
                var n = this.format,
                    a = this.type;
                t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_S, this.getAvailableWrapS()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_T, this.getAvailableWrapT()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, this.getAvailableMagFilter()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, this.getAvailableMinFilter());
                var i = e.getGLExtension("EXT_texture_filter_anisotropic");
                if (i && this.anisotropic > 1 && t.texParameterf(t.TEXTURE_CUBE_MAP, i.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic), 36193 === a) {
                    e.getGLExtension("OES_texture_half_float") || (a = r.a.FLOAT)
                }
                if (this.mipmaps.length)
                    for (var o = this.width, s = this.height, c = 0; c < this.mipmaps.length; c++) {
                        var l = this.mipmaps[c];
                        this._updateTextureData(t, l, c, o, s, n, a), o /= 2, s /= 2
                    } else this._updateTextureData(t, this, 0, this.width, this.height, n, a), !this.NPOT && this.useMipmap && t.generateMipmap(t.TEXTURE_CUBE_MAP);
                t.bindTexture(t.TEXTURE_CUBE_MAP, null)
            },
            _updateTextureData: function(e, t, n, a, i, r, o) {
                for (var s = 0; s < 6; s++) {
                    var c = l[s],
                        u = t.image && t.image[c];
                    u ? e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + s, n, r, r, o, u) : e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + s, n, r, a, i, 0, r, o, t.pixels && t.pixels[c])
                }
            },
            generateMipmap: function(e) {
                var t = e.gl;
                this.useMipmap && !this.NPOT && (t.bindTexture(t.TEXTURE_CUBE_MAP, this._cache.get("webgl_texture")), t.generateMipmap(t.TEXTURE_CUBE_MAP))
            },
            bind: function(e) {
                e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP, this.getWebGLTexture(e))
            },
            unbind: function(e) {
                e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP, null)
            },
            isPowerOfTwo: function() {
                return this.image.px ? c(this.image.px.width) && c(this.image.px.height) : c(this.width) && c(this.height)
            },
            isRenderable: function() {
                return this.image.px ? a(this.image.px) && a(this.image.nx) && a(this.image.py) && a(this.image.ny) && a(this.image.pz) && a(this.image.nz) : !(!this.width || !this.height)
            },
            load: function(e, t) {
                var n = 0,
                    a = this;
                return o.a.each(e, function(e, i) {
                    var r = new Image;
                    t && (r.crossOrigin = t), r.onload = function() {
                        n--, 0 === n && (a.dirty(), a.trigger("success", a)), r.onload = null
                    }, r.onerror = function() {
                        n--, r.onerror = null
                    }, n++, r.src = e, a.image[i] = r
                }), this
            }
        });
    Object.defineProperty(u.prototype, "width", {
        get: function() {
            return this.image && this.image.px ? this.image.px.width : this._width
        },
        set: function(e) {
            this.image && this.image.px ? console.warn("Texture from image can't set width") : (this._width !== e && this.dirty(), this._width = e)
        }
    }), Object.defineProperty(u.prototype, "height", {
        get: function() {
            return this.image && this.image.px ? this.image.px.height : this._height
        },
        set: function(e) {
            this.image && this.image.px ? console.warn("Texture from image can't set height") : (this._height !== e && this.dirty(), this._height = e)
        }
    }), t.a = u
}, function(e, t, n) {
    "use strict";
    var a = n(46),
        i = n(6),
        r = n(5),
        o = a.a.extend({
            skeleton: null,
            joints: null,
            useSkinMatricesTexture: !1
        }, function() {
            this.joints || (this.joints = [])
        }, {
            isSkinnedMesh: function() {
                return !!(this.skeleton && this.joints && this.joints.length > 0)
            },
            getSkinMatricesTexture: function() {
                return this._skinMatricesTexture = this._skinMatricesTexture || new r.a({
                    type: i.a.FLOAT,
                    minFilter: i.a.NEAREST,
                    magFilter: i.a.NEAREST,
                    useMipmap: !1,
                    flipY: !1
                }), this._skinMatricesTexture
            },
            clone: function() {
                var e = a.a.prototype.clone.call(this);
                return e.skeleton = this.skeleton, this.joints && (e.joints = this.joints.slice()), e
            }
        });
    o.POINTS = i.a.POINTS, o.LINES = i.a.LINES, o.LINE_LOOP = i.a.LINE_LOOP, o.LINE_STRIP = i.a.LINE_STRIP, o.TRIANGLES = i.a.TRIANGLES, o.TRIANGLE_STRIP = i.a.TRIANGLE_STRIP, o.TRIANGLE_FAN = i.a.TRIANGLE_FAN, o.BACK = i.a.BACK, o.FRONT = i.a.FRONT, o.FRONT_AND_BACK = i.a.FRONT_AND_BACK, o.CW = i.a.CW, o.CCW = i.a.CCW, t.a = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = [],
            n = Object.keys(e);
        n.sort();
        for (var a = 0; a < n.length; a++) {
            var i = n[a];
            t.push(i + " " + e[i])
        }
        var r = t.join("\n");
        if (x[r]) return x[r];
        var o = u.a.genGUID();
        return x[r] = o, o
    }

    function i() {
        this.opaque = [], this.transparent = [], this._opaqueCount = 0, this._transparentCount = 0
    }

    function r(e, t) {
        if (t.castShadow && !e.castShadow) return !0
    }
    var o = n(14),
        s = n(18),
        c = n(30),
        l = n(8),
        u = n(7),
        p = n(0),
        d = n.n(p),
        f = n(38),
        h = n(9),
        m = d.a.mat4,
        v = m.create(),
        g = m.create(),
        x = {};
    i.prototype.startCount = function() {
        this._opaqueCount = 0, this._transparentCount = 0
    }, i.prototype.add = function(e, t) {
        t ? this.transparent[this._transparentCount++] = e : this.opaque[this._opaqueCount++] = e
    }, i.prototype.endCount = function() {
        this.transparent.length = this._transparentCount, this.opaque.length = this._opaqueCount
    };
    var _ = o.a.extend(function() {
        return {
            material: null,
            lights: [],
            viewBoundingBoxLastFrame: new l.a,
            shadowUniforms: {},
            _cameraList: [],
            _lightUniforms: {},
            _previousLightNumber: {},
            _lightNumber: {},
            _lightProgramKeys: {},
            _nodeRepository: {},
            _renderLists: new f.a(20)
        }
    }, function() {
        this._scene = this
    }, {
        addToScene: function(e) {
            e instanceof c.a ? (this._cameraList.length > 0 && console.warn("Found multiple camera in one scene. Use the fist one."), this._cameraList.push(e)) : e instanceof s.a && this.lights.push(e), e.name && (this._nodeRepository[e.name] = e)
        },
        removeFromScene: function(e) {
            var t;
            e instanceof c.a ? (t = this._cameraList.indexOf(e)) >= 0 && this._cameraList.splice(t, 1) : e instanceof s.a && (t = this.lights.indexOf(e)) >= 0 && this.lights.splice(t, 1), e.name && delete this._nodeRepository[e.name]
        },
        getNode: function(e) {
            return this._nodeRepository[e]
        },
        setMainCamera: function(e) {
            var t = this._cameraList.indexOf(e);
            t >= 0 && this._cameraList.splice(t, 1), this._cameraList.unshift(e)
        },
        getMainCamera: function() {
            return this._cameraList[0]
        },
        getLights: function() {
            return this.lights
        },
        updateLights: function() {
            var e = this.lights;
            this._previousLightNumber = this._lightNumber;
            for (var t = {}, n = 0; n < e.length; n++) {
                var i = e[n];
                if (!i.invisible) {
                    var r = i.group;
                    t[r] || (t[r] = {}), t[r][i.type] = t[r][i.type] || 0, t[r][i.type]++
                }
            }
            this._lightNumber = t;
            for (var o in t) this._lightProgramKeys[o] = a(t[o]);
            this._updateLightUniforms()
        },
        cloneNode: function(e) {
            function t(e, n) {
                a[e.__uid__] = n;
                for (var i = 0; i < e._children.length; i++) {
                    t(e._children[i], n._children[i])
                }
            }
            var n = e.clone(),
                a = {};
            return t(e, n), n.traverse(function(e) {
                e.skeleton && (e.skeleton = e.skeleton.clone(a)), e.material && (e.material = e.material.clone())
            }), n
        },
        updateRenderList: function(e, t) {
            var n = e.__uid__,
                a = this._renderLists.get(n);
            a || (a = new i, this._renderLists.put(n, a)), a.startCount(), t && (this.viewBoundingBoxLastFrame.min.set(1 / 0, 1 / 0, 1 / 0), this.viewBoundingBoxLastFrame.max.set(-1 / 0, -1 / 0, -1 / 0));
            var r = this.material && this.material.transparent || !1;
            return this._doUpdateRenderList(this, e, r, a, t), a.endCount(), a
        },
        getRenderList: function(e) {
            return this._renderLists.get(e.__uid__)
        },
        _doUpdateRenderList: function(e, t, n, a, i) {
            if (!e.invisible)
                for (var r = 0; r < e._children.length; r++) {
                    var o = e._children[r];
                    if (o.isRenderable()) {
                        var s = o.isSkinnedMesh() ? v : o.worldTransform.array,
                            c = o.geometry;
                        m.multiplyAffine(g, t.viewMatrix.array, s), (i && !c.boundingBox || !this.isFrustumCulled(o, t, g)) && a.add(o, o.material.transparent || n)
                    }
                    o._children.length > 0 && this._doUpdateRenderList(o, t, n, a, i)
                }
        },
        isFrustumCulled: function() {
            var e = new l.a,
                t = new h.a;
            return function(n, a, i) {
                var r = n.boundingBox || n.geometry.boundingBox;
                if (t.array = i, e.transformFrom(r, t), n.castShadow && this.viewBoundingBoxLastFrame.union(e), n.frustumCulling && !n.isSkinnedMesh()) {
                    if (!e.intersectBoundingBox(a.frustum.boundingBox)) return !0;
                    t.array = a.projectionMatrix.array, e.max.array[2] > 0 && e.min.array[2] < 0 && (e.max.array[2] = -1e-20), e.applyProjection(t);
                    var o = e.min.array,
                        s = e.max.array;
                    if (s[0] < -1 || o[0] > 1 || s[1] < -1 || o[1] > 1 || s[2] < -1 || o[2] > 1) return !0
                }
                return !1
            }
        }(),
        _updateLightUniforms: function() {
            var e = this.lights;
            e.sort(r);
            var t = this._lightUniforms;
            for (var n in t)
                for (var a in t[n]) t[n][a].value.length = 0;
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                if (!o.invisible) {
                    var n = o.group;
                    for (var a in o.uniformTemplates) {
                        var s = o.uniformTemplates[a],
                            c = s.value(o);
                        if (null != c) {
                            t[n] || (t[n] = {}), t[n][a] || (t[n][a] = {
                                type: "",
                                value: []
                            });
                            var l = t[n][a];
                            switch (l.type = s.type + "v", s.type) {
                                case "1i":
                                case "1f":
                                case "t":
                                    l.value.push(c);
                                    break;
                                case "2f":
                                case "3f":
                                case "4f":
                                    for (var u = 0; u < c.length; u++) l.value.push(c[u]);
                                    break;
                                default:
                                    console.error("Unkown light uniform type " + s.type)
                            }
                        }
                    }
                }
            }
        },
        getLightGroups: function() {
            var e = [];
            for (var t in this._lightNumber) e.push(t);
            return e
        },
        getNumberChangedLightGroups: function() {
            var e = [];
            for (var t in this._lightNumber) this.isLightNumberChanged(t) && e.push(t);
            return e
        },
        isLightNumberChanged: function(e) {
            var t = this._previousLightNumber,
                n = this._lightNumber;
            for (var a in n[e]) {
                if (!t[e]) return !0;
                if (n[e][a] !== t[e][a]) return !0
            }
            for (var a in t[e]) {
                if (!n[e]) return !0;
                if (n[e][a] !== t[e][a]) return !0
            }
            return !1
        },
        getLightsNumbers: function(e) {
            return this._lightNumber[e]
        },
        getProgramKey: function(e) {
            return this._lightProgramKeys[e]
        },
        setLightUniforms: function() {
            function e(e, t, n) {
                for (var a in e) {
                    var i = e[a];
                    if ("tv" === i.type) {
                        if (!t.hasUniform(a)) continue;
                        for (var r = [], o = 0; o < i.value.length; o++) {
                            var s = i.value[o],
                                c = t.takeCurrentTextureSlot(n, s);
                            r.push(c)
                        }
                        t.setUniform(n.gl, "1iv", a, r)
                    } else t.setUniform(n.gl, i.type, a, i.value)
                }
            }
            return function(t, n, a) {
                e(this._lightUniforms[n], t, a), e(this.shadowUniforms, t, a)
            }
        }(),
        dispose: function() {
            this.material = null, this._opaqueList = [], this._transparentList = [], this.lights = [], this._lightUniforms = {}, this._lightNumber = {}, this._nodeRepository = {}
        }
    });
    t.a = _
}, function(e, t, n) {
    "use strict";
    var a = n(14),
        i = a.a.extend(function() {
            return {
                color: [1, 1, 1],
                intensity: 1,
                castShadow: !0,
                shadowResolution: 512,
                group: 0
            }
        }, {
            type: "",
            clone: function() {
                var e = a.a.prototype.clone.call(this);
                return e.color = Array.prototype.slice.call(this.color), e.intensity = this.intensity, e.castShadow = this.castShadow, e.shadowResolution = this.shadowResolution, e
            }
        });
    t.a = i
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return {
            byte: p.a.Int8Array,
            ubyte: p.a.Uint8Array,
            short: p.a.Int16Array,
            ushort: p.a.Uint16Array
        } [e] || p.a.Float32Array
    }

    function i(e) {
        return "attr_" + e
    }

    function r(e, t, n, a) {
        switch (this.name = e, this.type = t, this.size = n, this.semantic = a || "", this.value = null, n) {
            case 1:
                this.get = function(e) {
                    return this.value[e]
                }, this.set = function(e, t) {
                    this.value[e] = t
                }, this.copy = function(e, t) {
                    this.value[e] = this.value[e]
                };
                break;
            case 2:
                this.get = function(e, t) {
                    var n = this.value;
                    return t[0] = n[2 * e], t[1] = n[2 * e + 1], t
                }, this.set = function(e, t) {
                    var n = this.value;
                    n[2 * e] = t[0], n[2 * e + 1] = t[1]
                }, this.copy = function(e, t) {
                    var n = this.value;
                    t *= 2, e *= 2, n[e] = n[t], n[e + 1] = n[t + 1]
                };
                break;
            case 3:
                this.get = function(e, t) {
                    var n = 3 * e,
                        a = this.value;
                    return t[0] = a[n], t[1] = a[n + 1], t[2] = a[n + 2], t
                }, this.set = function(e, t) {
                    var n = 3 * e,
                        a = this.value;
                    a[n] = t[0], a[n + 1] = t[1], a[n + 2] = t[2]
                }, this.copy = function(e, t) {
                    var n = this.value;
                    t *= 3, e *= 3, n[e] = n[t], n[e + 1] = n[t + 1], n[e + 2] = n[t + 2]
                };
                break;
            case 4:
                this.get = function(e, t) {
                    var n = this.value,
                        a = 4 * e;
                    return t[0] = n[a], t[1] = n[a + 1], t[2] = n[a + 2], t[3] = n[a + 3], t
                }, this.set = function(e, t) {
                    var n = this.value,
                        a = 4 * e;
                    n[a] = t[0], n[a + 1] = t[1], n[a + 2] = t[2], n[a + 3] = t[3]
                }, this.copy = function(e, t) {
                    var n = this.value;
                    t *= 4, e *= 4, n[e] = n[t], n[e + 1] = n[t + 1], n[e + 2] = n[t + 2], n[e + 3] = n[t + 3]
                }
        }
    }

    function o(e, t, n, a, i) {
        this.name = e, this.type = t, this.buffer = n, this.size = a, this.semantic = i, this.symbol = "", this.needsRemove = !1
    }

    function s(e) {
        this.buffer = e, this.count = 0
    }
    var c = n(1),
        l = n(6),
        u = n(28),
        p = n(12),
        d = n(0),
        f = n.n(d),
        h = n(8),
        m = f.a.vec3,
        v = f.a.mat4,
        g = m.create,
        x = m.add,
        _ = m.set;
    r.prototype.init = function(e) {
        if (!this.value || this.value.length != e * this.size) {
            var t = a(this.type);
            this.value = new t(e * this.size)
        }
    }, r.prototype.fromArray = function(e) {
        var t, n = a(this.type);
        if (e[0] && e[0].length) {
            var i = 0,
                r = this.size;
            t = new n(e.length * r);
            for (var o = 0; o < e.length; o++)
                for (var s = 0; s < r; s++) t[i++] = e[o][s]
        } else t = new n(e);
        this.value = t
    }, r.prototype.clone = function(e) {
        var t = new r(this.name, this.type, this.size, this.semantic);
        return e && console.warn("todo"), t
    };
    var y = c.a.extend(function() {
        return {
            attributes: {
                position: new r("position", "float", 3, "POSITION"),
                texcoord0: new r("texcoord0", "float", 2, "TEXCOORD_0"),
                texcoord1: new r("texcoord1", "float", 2, "TEXCOORD_1"),
                normal: new r("normal", "float", 3, "NORMAL"),
                tangent: new r("tangent", "float", 4, "TANGENT"),
                color: new r("color", "float", 4, "COLOR"),
                weight: new r("weight", "float", 3, "WEIGHT"),
                joint: new r("joint", "float", 4, "JOINT"),
                barycentric: new r("barycentric", "float", 3, null)
            },
            boundingBox: null,
            indices: null,
            dynamic: !0,
            _enabledAttributes: null,
            __used: 0
        }
    }, function() {
        this._cache = new u.a, this._attributeList = Object.keys(this.attributes), this.__vaoCache = {}
    }, {
        mainAttribute: "position",
        pick: null,
        pickByRay: null,
        updateBoundingBox: function() {
            var e = this.boundingBox;
            e || (e = this.boundingBox = new h.a);
            var t = this.attributes.position.value;
            if (t && t.length) {
                var n = e.min,
                    a = e.max,
                    i = n.array,
                    r = a.array;
                m.set(i, t[0], t[1], t[2]), m.set(r, t[0], t[1], t[2]);
                for (var o = 3; o < t.length;) {
                    var s = t[o++],
                        c = t[o++],
                        l = t[o++];
                    s < i[0] && (i[0] = s), c < i[1] && (i[1] = c), l < i[2] && (i[2] = l), s > r[0] && (r[0] = s), c > r[1] && (r[1] = c), l > r[2] && (r[2] = l)
                }
                n._dirty = !0, a._dirty = !0
            }
        },
        dirty: function() {
            for (var e = this.getEnabledAttributes(), t = 0; t < e.length; t++) this.dirtyAttribute(e[t]);
            this.dirtyIndices(), this._enabledAttributes = null, this._cache.dirty("any")
        },
        dirtyIndices: function() {
            this._cache.dirtyAll("indices")
        },
        dirtyAttribute: function(e) {
            this._cache.dirtyAll(i(e)), this._cache.dirtyAll("attributes")
        },
        getTriangleIndices: function(e, t) {
            if (e < this.triangleCount && e >= 0) {
                t || (t = g());
                var n = this.indices;
                return t[0] = n[3 * e], t[1] = n[3 * e + 1], t[2] = n[3 * e + 2], t
            }
        },
        setTriangleIndices: function(e, t) {
            var n = this.indices;
            n[3 * e] = t[0], n[3 * e + 1] = t[1], n[3 * e + 2] = t[2]
        },
        isUseIndices: function() {
            return !!this.indices
        },
        initIndicesFromArray: function(e) {
            var t, n = this.vertexCount > 65535 ? p.a.Uint32Array : p.a.Uint16Array;
            if (e[0] && e[0].length) {
                var a = 0;
                t = new n(3 * e.length);
                for (var i = 0; i < e.length; i++)
                    for (var r = 0; r < 3; r++) t[a++] = e[i][r]
            } else t = new n(e);
            this.indices = t
        },
        createAttribute: function(e, t, n, a) {
            var i = new r(e, t, n, a);
            return this.attributes[e] && this.removeAttribute(e), this.attributes[e] = i, this._attributeList.push(e), i
        },
        removeAttribute: function(e) {
            var t = this._attributeList,
                n = t.indexOf(e);
            return n >= 0 && (t.splice(n, 1), delete this.attributes[e], !0)
        },
        getAttribute: function(e) {
            return this.attributes[e]
        },
        getEnabledAttributes: function() {
            var e = this._enabledAttributes,
                t = this._attributeList;
            if (e) return e;
            for (var n = [], a = this.vertexCount, i = 0; i < t.length; i++) {
                var r = t[i],
                    o = this.attributes[r];
                o.value && o.value.length === a * o.size && n.push(r)
            }
            return this._enabledAttributes = n, n
        },
        getBufferChunks: function(e) {
            var t = this._cache;
            t.use(e.__uid__);
            var n = t.isDirty("attributes"),
                a = t.isDirty("indices");
            if (n || a) {
                this._updateBuffer(e.gl, n, a);
                for (var r = this.getEnabledAttributes(), o = 0; o < r.length; o++) t.fresh(i(r[o]));
                t.fresh("attributes"), t.fresh("indices")
            }
            return t.fresh("any"), t.get("chunks")
        },
        _updateBuffer: function(e, t, n) {
            var a = this._cache,
                r = a.get("chunks"),
                c = !1;
            r || (r = [], r[0] = {
                attributeBuffers: [],
                indicesBuffer: null
            }, a.put("chunks", r), c = !0);
            var u = r[0],
                p = u.attributeBuffers,
                d = u.indicesBuffer;
            if (t || c) {
                var f = this.getEnabledAttributes(),
                    h = {};
                if (!c)
                    for (var m = 0; m < p.length; m++) h[p[m].name] = p[m];
                for (var v = 0; v < f.length; v++) {
                    var g, x = f[v],
                        _ = this.attributes[x];
                    c || (g = h[x]);
                    var y;
                    y = g ? g.buffer : e.createBuffer(), a.isDirty(i(x)) && (e.bindBuffer(e.ARRAY_BUFFER, y), e.bufferData(e.ARRAY_BUFFER, _.value, this.dynamic ? l.a.DYNAMIC_DRAW : l.a.STATIC_DRAW)), p[v] = new o(x, _.type, y, _.size, _.semantic)
                }
                for (var m = v; m < p.length; m++) e.deleteBuffer(p[m].buffer);
                p.length = v
            }
            this.isUseIndices() && (n || c) && (d || (d = new s(e.createBuffer()), u.indicesBuffer = d), d.count = this.indices.length, e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, d.buffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, this.dynamic ? l.a.DYNAMIC_DRAW : l.a.STATIC_DRAW))
        },
        generateVertexNormals: function() {
            if (this.vertexCount) {
                var e = this.indices,
                    t = this.attributes,
                    n = t.position.value,
                    a = t.normal.value;
                if (a && a.length === n.length)
                    for (var i = 0; i < a.length; i++) a[i] = 0;
                else a = t.normal.value = new p.a.Float32Array(n.length);
                for (var r, o, s, c = g(), l = g(), u = g(), d = g(), f = g(), h = g(), v = e ? e.length : this.vertexCount, x = 0; x < v;) {
                    e ? (r = e[x++], o = e[x++], s = e[x++]) : (r = x++, o = x++, s = x++), _(c, n[3 * r], n[3 * r + 1], n[3 * r + 2]), _(l, n[3 * o], n[3 * o + 1], n[3 * o + 2]), _(u, n[3 * s], n[3 * s + 1], n[3 * s + 2]), m.sub(d, c, l), m.sub(f, l, u), m.cross(h, d, f);
                    for (var i = 0; i < 3; i++) a[3 * r + i] = a[3 * r + i] + h[i], a[3 * o + i] = a[3 * o + i] + h[i], a[3 * s + i] = a[3 * s + i] + h[i]
                }
                for (var i = 0; i < a.length;) _(h, a[i], a[i + 1], a[i + 2]), m.normalize(h, h), a[i++] = h[0], a[i++] = h[1], a[i++] = h[2];
                this.dirty()
            }
        },
        generateFaceNormals: function() {
            if (this.vertexCount) {
                this.isUniqueVertex() || this.generateUniqueVertex();
                var e = this.indices,
                    t = this.attributes,
                    n = t.position.value,
                    a = t.normal.value,
                    i = g(),
                    r = g(),
                    o = g(),
                    s = g(),
                    c = g(),
                    l = g();
                a || (a = t.normal.value = new Float32Array(n.length));
                for (var u, p, d, f = e ? e.length : this.vertexCount, h = 0; h < f;) {
                    e ? (u = e[h++], p = e[h++], d = e[h++]) : (u = h++, p = h++, d = h++), _(i, n[3 * u], n[3 * u + 1], n[3 * u + 2]), _(r, n[3 * p], n[3 * p + 1], n[3 * p + 2]), _(o, n[3 * d], n[3 * d + 1], n[3 * d + 2]), m.sub(s, i, r), m.sub(c, r, o), m.cross(l, s, c), m.normalize(l, l);
                    for (var v = 0; v < 3; v++) a[3 * u + v] = l[v], a[3 * p + v] = l[v], a[3 * d + v] = l[v]
                }
                this.dirty()
            }
        },
        generateTangents: function() {
            if (this.vertexCount) {
                var e = this.vertexCount,
                    t = this.attributes;
                t.tangent.value || (t.tangent.value = new Float32Array(4 * e));
                var n = t.texcoord0.value,
                    a = t.position.value,
                    i = t.tangent.value,
                    r = t.normal.value;
                if (!n) return void console.warn("Geometry without texcoords can't generate tangents.");
                for (var o = [], s = [], c = 0; c < e; c++) o[c] = [0, 0, 0], s[c] = [0, 0, 0];
                for (var l, u, p, d = [0, 0, 0], f = [0, 0, 0], h = this.indices, v = h ? h.length : this.vertexCount, c = 0; c < v;) {
                    h ? (l = h[c++], u = h[c++], p = h[c++]) : (l = c++, u = c++, p = c++);
                    var _ = n[2 * l],
                        y = n[2 * u],
                        b = n[2 * p],
                        T = n[2 * l + 1],
                        E = n[2 * u + 1],
                        w = n[2 * p + 1],
                        A = a[3 * l],
                        S = a[3 * u],
                        C = a[3 * p],
                        R = a[3 * l + 1],
                        M = a[3 * u + 1],
                        N = a[3 * p + 1],
                        L = a[3 * l + 2],
                        O = a[3 * u + 2],
                        P = a[3 * p + 2],
                        D = S - A,
                        I = C - A,
                        F = M - R,
                        k = N - R,
                        B = O - L,
                        U = P - L,
                        H = y - _,
                        z = b - _,
                        j = E - T,
                        G = w - T,
                        V = 1 / (H * G - j * z);
                    d[0] = (G * D - j * I) * V, d[1] = (G * F - j * k) * V, d[2] = (G * B - j * U) * V, f[0] = (H * I - z * D) * V, f[1] = (H * k - z * F) * V, f[2] = (H * U - z * B) * V, x(o[l], o[l], d), x(o[u], o[u], d), x(o[p], o[p], d), x(s[l], s[l], f), x(s[u], s[u], f), x(s[p], s[p], f)
                }
                for (var W = g(), X = g(), q = g(), c = 0; c < e; c++) {
                    q[0] = r[3 * c], q[1] = r[3 * c + 1], q[2] = r[3 * c + 2];
                    var Y = o[c];
                    m.scale(W, q, m.dot(q, Y)), m.sub(W, Y, W), m.normalize(W, W), m.cross(X, q, Y), i[4 * c] = W[0], i[4 * c + 1] = W[1], i[4 * c + 2] = W[2], i[4 * c + 3] = m.dot(X, s[c]) < 0 ? -1 : 1
                }
                this.dirty()
            }
        },
        isUniqueVertex: function() {
            return !this.isUseIndices() || this.vertexCount === this.indices.length
        },
        generateUniqueVertex: function() {
            if (this.vertexCount && this.indices) {
                this.indices.length > 65535 && (this.indices = new p.a.Uint32Array(this.indices));
                for (var e = this.attributes, t = this.indices, n = this.getEnabledAttributes(), a = {}, i = 0; i < n.length; i++) {
                    var r = n[i];
                    a[r] = e[r].value, e[r].init(this.indices.length)
                }
                for (var o = 0, s = 0; s < t.length; s++) {
                    for (var c = t[s], i = 0; i < n.length; i++)
                        for (var r = n[i], l = e[r].value, u = e[r].size, d = 0; d < u; d++) l[o * u + d] = a[r][c * u + d];
                    t[s] = o, o++
                }
                this.dirty()
            }
        },
        generateBarycentric: function() {
            if (this.vertexCount) {
                this.isUniqueVertex() || this.generateUniqueVertex();
                var e = this.attributes,
                    t = e.barycentric.value,
                    n = this.indices;
                if (!t || t.length !== 3 * n.length) {
                    t = e.barycentric.value = new Float32Array(3 * n.length);
                    for (var a = 0; a < (n ? n.length : this.vertexCount / 3);)
                        for (var i = 0; i < 3; i++) {
                            var r = n ? n[a++] : 3 * a + i;
                            t[3 * r + i] = 1
                        }
                    this.dirty()
                }
            }
        },
        applyTransform: function(e) {
            var t = this.attributes,
                n = t.position.value,
                a = t.normal.value,
                i = t.tangent.value;
            e = e.array;
            var r = v.create();
            v.invert(r, e), v.transpose(r, r);
            var o = m.transformMat4,
                s = m.forEach;
            s(n, 3, 0, null, o, e), a && s(a, 3, 0, null, o, r), i && s(i, 4, 0, null, o, r), this.boundingBox && this.updateBoundingBox()
        },
        dispose: function(e) {
            var t = this._cache;
            t.use(e.__uid__);
            var n = t.get("chunks");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    for (var i = n[a], r = 0; r < i.attributeBuffers.length; r++) {
                        var o = i.attributeBuffers[r];
                        e.gl.deleteBuffer(o.buffer)
                    }
                    i.indicesBuffer && e.gl.deleteBuffer(i.indicesBuffer.buffer)
                }
            if (this.__vaoCache) {
                var s = e.getGLExtension("OES_vertex_array_object");
                for (var c in this.__vaoCache) {
                    var l = this.__vaoCache[c].vao;
                    l && s.deleteVertexArrayOES(l)
                }
            }
            this.__vaoCache = {}, t.deleteContext(e.__uid__)
        }
    });
    Object.defineProperty && (Object.defineProperty(y.prototype, "vertexCount", {
        enumerable: !1,
        get: function() {
            var e = this.attributes[this.mainAttribute];
            return e && e.value ? e.value.length / e.size : 0
        }
    }), Object.defineProperty(y.prototype, "triangleCount", {
        enumerable: !1,
        get: function() {
            var e = this.indices;
            return e ? e.length / 3 : 0
        }
    })), y.STATIC_DRAW = l.a.STATIC_DRAW, y.DYNAMIC_DRAW = l.a.DYNAMIC_DRAW, y.STREAM_DRAW = l.a.STREAM_DRAW, y.AttributeBuffer = o, y.IndicesBuffer = s, y.Attribute = r, t.a = y
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        this.action = e, this.context = t
    }
    var i = {
        trigger: function(e) {
            if (this.hasOwnProperty("__handlers__") && this.__handlers__.hasOwnProperty(e)) {
                var t = this.__handlers__[e],
                    n = t.length,
                    a = -1,
                    i = arguments;
                switch (i.length) {
                    case 1:
                        for (; ++a < n;) t[a].action.call(t[a].context);
                        return;
                    case 2:
                        for (; ++a < n;) t[a].action.call(t[a].context, i[1]);
                        return;
                    case 3:
                        for (; ++a < n;) t[a].action.call(t[a].context, i[1], i[2]);
                        return;
                    case 4:
                        for (; ++a < n;) t[a].action.call(t[a].context, i[1], i[2], i[3]);
                        return;
                    case 5:
                        for (; ++a < n;) t[a].action.call(t[a].context, i[1], i[2], i[3], i[4]);
                        return;
                    default:
                        for (; ++a < n;) t[a].action.apply(t[a].context, Array.prototype.slice.call(i, 1));
                        return
                }
            }
        },
        on: function(e, t, n) {
            if (e && t) {
                var i = this.__handlers__ || (this.__handlers__ = {});
                if (i[e]) {
                    if (this.has(e, t)) return
                } else i[e] = [];
                var r = new a(t, n || this);
                return i[e].push(r), this
            }
        },
        once: function(e, t, n) {
            function a() {
                i.off(e, a), t.apply(this, arguments)
            }
            if (e && t) {
                var i = this;
                return this.on(e, a, n)
            }
        },
        before: function(e, t, n) {
            if (e && t) return e = "before" + e, this.on(e, t, n)
        },
        after: function(e, t, n) {
            if (e && t) return e = "after" + e, this.on(e, t, n)
        },
        success: function(e, t) {
            return this.once("success", e, t)
        },
        error: function(e, t) {
            return this.once("error", e, t)
        },
        off: function(e, t) {
            var n = this.__handlers__ || (this.__handlers__ = {});
            if (!t) return void(n[e] = []);
            if (n[e]) {
                for (var a = n[e], i = [], r = 0; r < a.length; r++) t && a[r].action !== t && i.push(a[r]);
                n[e] = i
            }
            return this
        },
        has: function(e, t) {
            var n = this.__handlers__;
            if (!n || !n[e]) return !1;
            for (var a = n[e], i = 0; i < a.length; i++)
                if (a[i].action === t) return !0
        }
    };
    t.a = i
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = n.n(a),
        r = i.a.vec2,
        o = function(e, t) {
            e = e || 0, t = t || 0, this.array = r.fromValues(e, t), this._dirty = !0
        };
    if (o.prototype = {
            constructor: o,
            add: function(e) {
                return r.add(this.array, this.array, e.array), this._dirty = !0, this
            },
            set: function(e, t) {
                return this.array[0] = e, this.array[1] = t, this._dirty = !0, this
            },
            setArray: function(e) {
                return this.array[0] = e[0], this.array[1] = e[1], this._dirty = !0, this
            },
            clone: function() {
                return new o(this.x, this.y)
            },
            copy: function(e) {
                return r.copy(this.array, e.array), this._dirty = !0, this
            },
            cross: function(e, t) {
                return r.cross(e.array, this.array, t.array), e._dirty = !0, this
            },
            dist: function(e) {
                return r.dist(this.array, e.array)
            },
            distance: function(e) {
                return r.distance(this.array, e.array)
            },
            div: function(e) {
                return r.div(this.array, this.array, e.array), this._dirty = !0, this
            },
            divide: function(e) {
                return r.divide(this.array, this.array, e.array), this._dirty = !0, this
            },
            dot: function(e) {
                return r.dot(this.array, e.array)
            },
            len: function() {
                return r.len(this.array)
            },
            length: function() {
                return r.length(this.array)
            },
            lerp: function(e, t, n) {
                return r.lerp(this.array, e.array, t.array, n), this._dirty = !0, this
            },
            min: function(e) {
                return r.min(this.array, this.array, e.array), this._dirty = !0, this
            },
            max: function(e) {
                return r.max(this.array, this.array, e.array), this._dirty = !0, this
            },
            mul: function(e) {
                return r.mul(this.array, this.array, e.array), this._dirty = !0, this
            },
            multiply: function(e) {
                return r.multiply(this.array, this.array, e.array), this._dirty = !0, this
            },
            negate: function() {
                return r.negate(this.array, this.array), this._dirty = !0, this
            },
            normalize: function() {
                return r.normalize(this.array, this.array), this._dirty = !0, this
            },
            random: function(e) {
                return r.random(this.array, e), this._dirty = !0, this
            },
            scale: function(e) {
                return r.scale(this.array, this.array, e), this._dirty = !0, this
            },
            scaleAndAdd: function(e, t) {
                return r.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
            },
            sqrDist: function(e) {
                return r.sqrDist(this.array, e.array)
            },
            squaredDistance: function(e) {
                return r.squaredDistance(this.array, e.array)
            },
            sqrLen: function() {
                return r.sqrLen(this.array)
            },
            squaredLength: function() {
                return r.squaredLength(this.array)
            },
            sub: function(e) {
                return r.sub(this.array, this.array, e.array), this._dirty = !0, this
            },
            subtract: function(e) {
                return r.subtract(this.array, this.array, e.array), this._dirty = !0, this
            },
            transformMat2: function(e) {
                return r.transformMat2(this.array, this.array, e.array), this._dirty = !0, this
            },
            transformMat2d: function(e) {
                return r.transformMat2d(this.array, this.array, e.array), this._dirty = !0, this
            },
            transformMat3: function(e) {
                return r.transformMat3(this.array, this.array, e.array), this._dirty = !0, this
            },
            transformMat4: function(e) {
                return r.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
            },
            toString: function() {
                return "[" + Array.prototype.join.call(this.array, ",") + "]"
            },
            toArray: function() {
                return Array.prototype.slice.call(this.array)
            }
        }, Object.defineProperty) {
        var s = o.prototype;
        Object.defineProperty(s, "x", {
            get: function() {
                return this.array[0]
            },
            set: function(e) {
                this.array[0] = e, this._dirty = !0
            }
        }), Object.defineProperty(s, "y", {
            get: function() {
                return this.array[1]
            },
            set: function(e) {
                this.array[1] = e, this._dirty = !0
            }
        })
    }
    o.add = function(e, t, n) {
        return r.add(e.array, t.array, n.array), e._dirty = !0, e
    }, o.set = function(e, t, n) {
        return r.set(e.array, t, n), e._dirty = !0, e
    }, o.copy = function(e, t) {
        return r.copy(e.array, t.array), e._dirty = !0, e
    }, o.cross = function(e, t, n) {
        return r.cross(e.array, t.array, n.array), e._dirty = !0, e
    }, o.dist = function(e, t) {
        return r.distance(e.array, t.array)
    }, o.distance = o.dist, o.div = function(e, t, n) {
        return r.divide(e.array, t.array, n.array), e._dirty = !0, e
    }, o.divide = o.div, o.dot = function(e, t) {
        return r.dot(e.array, t.array)
    }, o.len = function(e) {
        return r.length(e.array)
    }, o.lerp = function(e, t, n, a) {
        return r.lerp(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.min = function(e, t, n) {
        return r.min(e.array, t.array, n.array), e._dirty = !0, e
    }, o.max = function(e, t, n) {
        return r.max(e.array, t.array, n.array), e._dirty = !0, e
    }, o.mul = function(e, t, n) {
        return r.multiply(e.array, t.array, n.array), e._dirty = !0, e
    }, o.multiply = o.mul, o.negate = function(e, t) {
        return r.negate(e.array, t.array), e._dirty = !0, e
    }, o.normalize = function(e, t) {
        return r.normalize(e.array, t.array), e._dirty = !0, e
    }, o.random = function(e, t) {
        return r.random(e.array, t), e._dirty = !0, e
    }, o.scale = function(e, t, n) {
        return r.scale(e.array, t.array, n), e._dirty = !0, e
    }, o.scaleAndAdd = function(e, t, n, a) {
        return r.scaleAndAdd(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.sqrDist = function(e, t) {
        return r.sqrDist(e.array, t.array)
    }, o.squaredDistance = o.sqrDist, o.sqrLen = function(e) {
        return r.sqrLen(e.array)
    }, o.squaredLength = o.sqrLen, o.sub = function(e, t, n) {
        return r.subtract(e.array, t.array, n.array), e._dirty = !0, e
    }, o.subtract = o.sub, o.transformMat2 = function(e, t, n) {
        return r.transformMat2(e.array, t.array, n.array), e._dirty = !0, e
    }, o.transformMat2d = function(e, t, n) {
        return r.transformMat2d(e.array, t.array, n.array), e._dirty = !0, e
    }, o.transformMat3 = function(e, t, n) {
        return r.transformMat3(e.array, t.array, n.array), e._dirty = !0, e
    }, o.transformMat4 = function(e, t, n) {
        return r.transformMat4(e.array, t.array, n.array), e._dirty = !0, e
    }, t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(30),
        i = a.a.extend({
            fov: 50,
            aspect: 1,
            near: .1,
            far: 2e3
        }, {
            updateProjectionMatrix: function() {
                var e = this.fov / 180 * Math.PI;
                this.projectionMatrix.perspective(e, this.aspect, this.near, this.far)
            },
            decomposeProjectionMatrix: function() {
                var e = this.projectionMatrix.array,
                    t = 2 * Math.atan(1 / e[5]);
                this.fov = t / Math.PI * 180, this.aspect = e[5] / e[0], this.near = e[14] / (e[10] - 1), this.far = e[14] / (e[10] + 1)
            },
            clone: function() {
                var e = a.a.prototype.clone.call(this);
                return e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e
            }
        });
    t.a = i
}, function(e, t, n) {
    "use strict";
    var a = n(30),
        i = a.a.extend({
            left: -1,
            right: 1,
            near: -1,
            far: 1,
            top: 1,
            bottom: -1
        }, {
            updateProjectionMatrix: function() {
                this.projectionMatrix.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far)
            },
            decomposeProjectionMatrix: function() {
                var e = this.projectionMatrix.array;
                this.left = (-1 - e[12]) / e[0], this.right = (1 - e[12]) / e[0], this.top = (1 - e[13]) / e[5], this.bottom = (-1 - e[13]) / e[5], this.near = -(-1 - e[14]) / e[10], this.far = -(1 - e[14]) / e[10]
            },
            clone: function() {
                var e = a.a.prototype.clone.call(this);
                return e.left = this.left, e.right = this.right, e.near = this.near, e.far = this.far, e.top = this.top, e.bottom = this.bottom, e
            }
        });
    t.a = i
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = a.a.extend(function() {
            return {
                name: "",
                inputLinks: {},
                outputLinks: {},
                _prevOutputTextures: {},
                _outputTextures: {},
                _outputReferences: {},
                _rendering: !1,
                _rendered: !1,
                _compositor: null
            }
        }, {
            updateParameter: function(e, t) {
                var n = this.outputs[e],
                    a = n.parameters,
                    i = n._parametersCopy;
                if (i || (i = n._parametersCopy = {}), a)
                    for (var r in a) "width" !== r && "height" !== r && (i[r] = a[r]);
                var o, s;
                return o = a.width instanceof Function ? a.width.call(this, t) : a.width, s = a.height instanceof Function ? a.height.call(this, t) : a.height, i.width === o && i.height === s || this._outputTextures[e] && this._outputTextures[e].dispose(t.gl), i.width = o, i.height = s, i
            },
            setParameter: function(e, t) {},
            getParameter: function(e) {},
            setParameters: function(e) {
                for (var t in e) this.setParameter(t, e[t])
            },
            render: function() {},
            getOutput: function(e, t) {
                if (null == t) return t = e, this._outputTextures[t];
                var n = this.outputs[t];
                if (n) return this._rendered ? n.outputLastFrame ? this._prevOutputTextures[t] : this._outputTextures[t] : this._rendering ? (this._prevOutputTextures[t] || (this._prevOutputTextures[t] = this._compositor.allocateTexture(n.parameters || {})), this._prevOutputTextures[t]) : (this.render(e), this._outputTextures[t])
            },
            removeReference: function(e) {
                if (0 === --this._outputReferences[e]) {
                    this.outputs[e].keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
                }
            },
            link: function(e, t, n) {
                this.inputLinks[e] = {
                    node: t,
                    pin: n
                }, t.outputLinks[n] || (t.outputLinks[n] = []), t.outputLinks[n].push({
                    node: this,
                    pin: e
                }), this.pass.material.enableTexture(e)
            },
            clear: function() {
                this.inputLinks = {}, this.outputLinks = {}
            },
            updateReference: function(e) {
                if (!this._rendering) {
                    this._rendering = !0;
                    for (var t in this.inputLinks) {
                        var n = this.inputLinks[t];
                        n.node.updateReference(n.pin)
                    }
                    this._rendering = !1
                }
                e && this._outputReferences[e]++
            },
            beforeFrame: function() {
                this._rendered = !1;
                for (var e in this.outputLinks) this._outputReferences[e] = 0
            },
            afterFrame: function() {
                for (var e in this.outputLinks)
                    if (this._outputReferences[e] > 0) {
                        var t = this.outputs[e];
                        t.keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
                    }
            }
        });
    t.a = i
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        for (var n = 0, a = 1 / t, i = e; i > 0;) n += a * (i % t), i = Math.floor(i / t), a /= t;
        return n
    }
    t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return !e || "none" === e
    }

    function i(e) {
        return e instanceof HTMLCanvasElement || e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof Image
    }
    var r = (n(3), n(10)),
        o = n(65),
        s = n(32),
        c = n(125),
        l = n(126),
        u = n(127),
        p = n(129),
        d = n(5);
    r.a.prototype.setTextureImage = function(e, t, n, i) {
        if (this.shader) {
            var r, o = this;
            return o.disableTexture(e), a(t) || (r = f.loadTexture(t, n, i, function(t) {
                o.enableTexture(e), n.refresh()
            }), o.set(e, r)), r
        }
    };
    var f = {},
        h = s.a.createBlank("rgba(255,255,255,0)").image;
    f.firstNotNull = function() {
        for (var e = 0, t = arguments.length; e < t; e++)
            if (null != arguments[e]) return arguments[e]
    }, f.loadTexture = function(e, t, n, a) {
        "function" == typeof n && (a = n, n = {}), n = n || {};
        for (var r = Object.keys(n).sort(), c = "", l = 0; l < r.length; l++) c += r[l] + "_" + n[r[l]] + "_";
        var u = t.__textureCache = t.__textureCache || new o.a(20);
        if (i(e)) {
            var p = e.__textureid__,
                f = u.get(c + p);
            if (!f) {
                f = {
                    texture: new d.a({
                        image: e,
                        convertToPOT: !0,
                        dynamic: e instanceof HTMLVideoElement
                    })
                };
                for (var l = 0; l < r.length; l++) f.texture[r[l]] = n[r[l]];
                p = e.__textureid__ || "__ecgl_image__" + f.texture.__GUID__, e.__textureid__ = p, u.put(c + p, f), a && a(f.texture)
            }
            return f.texture
        }
        var f = u.get(c + e);
        if (f) f.callbacks ? f.callbacks.push(a) : a && a(f.texture);
        else if (e.match(/.hdr$|^data:application\/octet-stream/)) {
            f = {
                callbacks: [a]
            };
            var m = s.a.loadTexture(e, {
                exposure: n.exposure,
                fileType: "hdr"
            }, function() {
                m.dirty(), f.callbacks.forEach(function(e) {
                    e && e(m)
                }), f.callbacks = null
            });
            f.texture = m, u.put(c + e, f)
        } else {
            for (var v = e.split(".").pop(), g = "mp4" === v || "webm" === v || "ogg" === v, m = new d.a({
                    convertToPOT: !0,
                    image: g ? document.createElement("video") : new Image,
                    dynamic: g
                }), l = 0; l < r.length; l++) m[r[l]] = n[r[l]];
            f = {
                texture: m,
                callbacks: [a]
            };
            var x = m.image,
                _ = function() {
                    m.image = x, m.dirty(), f.callbacks.forEach(function(e) {
                        e && e(m)
                    }), f.callbacks = null
                };
            g ? x.oncanplay = function() {
                x.width = x.videoWidth, x.height = x.videoHeight, x.oncanplay = null, x.loop = !0, x.play(), _()
            } : x.onload = _, x.src = e, m.image = h, u.put(c + e, f)
        }
        return f.texture
    }, f.createAmbientCubemap = function(e, t, n) {
        e = e || {};
        var a, i, r = t.getRenderer(),
            o = e.texture,
            s = f.firstNotNull(e.exposure, 1);
        return 0 !== e.diffuseIntensity && (i = new l.a({
            coefficients: [.844, .712, .691, -.037, .083, .167, .343, .288, .299, -.041, -.021, -.009, -.003, -.041, -.064, -.011, -.007, -.004, -.031, .034, .081, -.06, -.049, -.06, .046, .056, .05]
        })), 0 !== e.specularIntensity ? (a = new c.a, a.cubemap = f.loadTexture(o, t, {
            exposure: s
        }, function(e) {
            a.cubemap = e, e.flipY = !1, a.prefilter(r, 64), i.coefficients = u.a.projectEnvironmentMap(r, a.cubemap, {
                lod: 1
            }), setTimeout(function() {
                n && n()
            })
        })) : setTimeout(function() {
            n && n()
        }), {
            specular: a,
            diffuse: i
        }
    }, f.createBlankTexture = s.a.createBlank, f.isImage = i, f.additiveBlend = function(e) {
        e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)
    }, f.parseColor = function(e, t) {
        return e instanceof Array ? (t || (t = []), t[0] = e[0], t[1] = e[1], t[2] = e[2], e.length > 3 ? t[3] = e[3] : t[3] = 1, t) : (t = p.a(e || "#000", t) || [0, 0, 0, 0], t[0] /= 255, t[1] /= 255, t[2] /= 255, t)
    }, f.stringifyColor = function(e, t) {
        return e = e.slice(), e[0] = Math.round(255 * e[0]), e[1] = Math.round(255 * e[1]), e[2] = Math.round(255 * e[2]), "hex" === t ? "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1) : p.b(e, t)
    }, f.directionFromAlphaBeta = function(e, t) {
        var n = e / 180 * Math.PI + Math.PI / 2,
            a = -t / 180 * Math.PI + Math.PI / 2,
            i = [],
            r = Math.sin(n);
        return i[0] = r * Math.cos(a), i[1] = -Math.cos(n), i[2] = r * Math.sin(a), i
    }, t.a = f
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e.material
    }

    function i() {}

    function r(e, t, n) {
        this.availableAttributes = e, this.availableAttributeSymbols = t, this.indicesBuffer = n, this.vao = null
    }
    var o = n(1),
        s = n(70),
        c = n(6),
        l = (n(12), n(8), n(9), n(10)),
        u = n(21),
        p = n(73),
        d = n(2),
        f = n(39),
        h = n(40),
        m = n(0),
        v = n.n(m);
    d.a.import(f.a), d.a.import(h.a);
    var g = v.a.mat4,
        x = v.a.vec3,
        _ = g.create,
        y = {},
        b = {
            float: c.a.FLOAT,
            byte: c.a.BYTE,
            ubyte: c.a.UNSIGNED_BYTE,
            short: c.a.SHORT,
            ushort: c.a.UNSIGNED_SHORT
        },
        T = o.a.extend(function() {
            return {
                canvas: null,
                _width: 100,
                _height: 100,
                devicePixelRatio: window && window.devicePixelRatio || 1,
                clearColor: [0, 0, 0, 0],
                clearBit: 17664,
                alpha: !0,
                depth: !0,
                stencil: !1,
                antialias: !0,
                premultipliedAlpha: !0,
                preserveDrawingBuffer: !1,
                throwError: !0,
                gl: null,
                viewport: {},
                __currentFrameBuffer: null,
                _viewportStack: [],
                _clearStack: [],
                _sceneRendering: null
            }
        }, function() {
            this.canvas || (this.canvas = document.createElement("canvas"));
            var e = this.canvas;
            try {
                var t = {
                    alpha: this.alpha,
                    depth: this.depth,
                    stencil: this.stencil,
                    antialias: this.antialias,
                    premultipliedAlpha: this.premultipliedAlpha,
                    preserveDrawingBuffer: this.preserveDrawingBuffer
                };
                if (this.gl = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), !this.gl) throw new Error;
                this._glinfo = new s.a(this.gl), this.gl.targetRenderer && console.error("Already created a renderer"), this.gl.targetRenderer = this, this.resize()
            } catch (e) {
                throw "Error creating WebGL Context " + e
            }
            this._programMgr = new p.a(this)
        }, {
            resize: function(e, t) {
                var n = this.canvas,
                    a = this.devicePixelRatio;
                null != e ? (n.style.width = e + "px", n.style.height = t + "px", n.width = e * a, n.height = t * a, this._width = e, this._height = t) : (this._width = n.width / a, this._height = n.height / a), this.setViewport(0, 0, this._width, this._height)
            },
            getWidth: function() {
                return this._width
            },
            getHeight: function() {
                return this._height
            },
            getViewportAspect: function() {
                var e = this.viewport;
                return e.width / e.height
            },
            setDevicePixelRatio: function(e) {
                this.devicePixelRatio = e, this.resize(this._width, this._height)
            },
            getDevicePixelRatio: function() {
                return this.devicePixelRatio
            },
            getGLExtension: function(e) {
                return this._glinfo.getExtension(e)
            },
            getGLParameter: function(e) {
                return this._glinfo.getParameter(e)
            },
            setViewport: function(e, t, n, a, i) {
                if ("object" == typeof e) {
                    var r = e;
                    e = r.x, t = r.y, n = r.width, a = r.height, i = r.devicePixelRatio
                }
                i = i || this.devicePixelRatio, this.gl.viewport(e * i, t * i, n * i, a * i), this.viewport = {
                    x: e,
                    y: t,
                    width: n,
                    height: a,
                    devicePixelRatio: i
                }
            },
            saveViewport: function() {
                this._viewportStack.push(this.viewport)
            },
            restoreViewport: function() {
                this._viewportStack.length > 0 && this.setViewport(this._viewportStack.pop())
            },
            saveClear: function() {
                this._clearStack.push({
                    clearBit: this.clearBit,
                    clearColor: this.clearColor
                })
            },
            restoreClear: function() {
                if (this._clearStack.length > 0) {
                    var e = this._clearStack.pop();
                    this.clearColor = e.clearColor, this.clearBit = e.clearBit
                }
            },
            bindSceneRendering: function(e) {
                this._sceneRendering = e
            },
            render: function(e, t, n, a) {
                var i = this.gl,
                    r = this.clearColor;
                if (this.clearBit) {
                    i.colorMask(!0, !0, !0, !0), i.depthMask(!0);
                    var o = this.viewport,
                        s = !1,
                        c = o.devicePixelRatio;
                    (o.width !== this._width || o.height !== this._height || c && c !== this.devicePixelRatio || o.x || o.y) && (s = !0, i.enable(i.SCISSOR_TEST), i.scissor(o.x * c, o.y * c, o.width * c, o.height * c)), i.clearColor(r[0], r[1], r[2], r[3]), i.clear(this.clearBit), s && i.disable(i.SCISSOR_TEST)
                }
                if (n || e.update(!1), e.updateLights(), !(t = t || e.getMainCamera())) return void console.error("Can't find camera in the scene.");
                t.update();
                var l = e.updateRenderList(t, !0);
                this._sceneRendering = e;
                var u = l.opaque,
                    p = l.transparent,
                    d = e.material;
                e.trigger("beforerender", this, e, t, l), a ? (this.renderPreZ(u, e, t), i.depthFunc(i.LEQUAL)) : i.depthFunc(i.LESS);
                for (var f = _(), h = x.create(), m = 0; m < p.length; m++) {
                    var v = p[m];
                    g.multiplyAffine(f, t.viewMatrix.array, v.worldTransform.array), x.transformMat4(h, v.position.array, f), v.__depth = h[2]
                }
                this.renderPass(u, t, {
                    getMaterial: function(e) {
                        return d || e.material
                    },
                    sortCompare: this.opaqueSortCompare
                }), this.renderPass(p, t, {
                    getMaterial: function(e) {
                        return d || e.material
                    },
                    sortCompare: this.transparentSortCompare
                }), e.trigger("afterrender", this, e, t, l), this._sceneRendering = null
            },
            getProgram: function(e, t, n) {
                return t = t || e.material, this._programMgr.getProgram(e, t, n)
            },
            validateProgram: function(e) {
                if (e.__error) {
                    var t = e.__error;
                    if (y[e.__uid__]) return;
                    if (y[e.__uid__] = !0, this.throwError) throw new Error(t);
                    this.trigger("error", t)
                }
            },
            updatePrograms: function(e, t, n) {
                var i = n && n.getMaterial || a;
                t = t || null;
                for (var r = 0; r < e.length; r++) {
                    var o = e[r],
                        s = i.call(this, o);
                    if (r > 0) {
                        var c = e[r - 1],
                            l = c.joints ? c.joints.length : 0;
                        if ((o.joints ? o.joints.length : 0) === l && o.material === c.material && o.lightGroup === c.lightGroup) {
                            o.__program = c.__program;
                            continue
                        }
                    }
                    var u = this._programMgr.getProgram(o, s, t);
                    this.validateProgram(u), o.__program = u
                }
            },
            renderPass: function(e, t, n) {
                this.trigger("beforerenderpass", this, e, t, n), n = n || {}, n.getMaterial = n.getMaterial || a, n.beforeRender = n.beforeRender || i, n.afterRender = n.afterRender || i, this.updatePrograms(e, this._sceneRendering, n), n.sortCompare && e.sort(n.sortCompare);
                var r = this.viewport,
                    o = r.devicePixelRatio,
                    s = [r.x * o, r.y * o, r.width * o, r.height * o],
                    c = this.devicePixelRatio,
                    l = this.__currentFrameBuffer ? [this.__currentFrameBuffer.getTextureWidth(), this.__currentFrameBuffer.getTextureHeight()] : [this._width * c, this._height * c],
                    u = [s[2], s[3]],
                    p = Date.now();
                g.copy(E.VIEW, t.viewMatrix.array), g.copy(E.PROJECTION, t.projectionMatrix.array), g.multiply(E.VIEWPROJECTION, t.projectionMatrix.array, E.VIEW), g.copy(E.VIEWINVERSE, t.worldTransform.array), g.invert(E.PROJECTIONINVERSE, E.PROJECTION), g.invert(E.VIEWPROJECTIONINVERSE, E.VIEWPROJECTION);
                for (var d, f, h, m, v, x, _, y, b, T, w = this.gl, A = this._sceneRendering, S = this.getGLExtension("OES_vertex_array_object"), C = 0; C < e.length; C++) {
                    var R = e[C];
                    if (!n.ifRender || n.ifRender(R)) {
                        var M = R.isSkinnedMesh() ? E.IDENTITY : R.worldTransform.array,
                            N = R.geometry,
                            L = n.getMaterial.call(this, R),
                            O = R.__program,
                            P = L.shader,
                            D = N.__uid__ + "-" + O.__uid__,
                            I = D !== b;
                        b = D, I && S && S.bindVertexArrayOES(null), g.copy(E.WORLD, M), g.multiply(E.WORLDVIEWPROJECTION, E.VIEWPROJECTION, M), g.multiplyAffine(E.WORLDVIEW, t.viewMatrix.array, M), (P.matrixSemantics.WORLDINVERSE || P.matrixSemantics.WORLDINVERSETRANSPOSE) && g.invert(E.WORLDINVERSE, M), (P.matrixSemantics.WORLDVIEWINVERSE || P.matrixSemantics.WORLDVIEWINVERSETRANSPOSE) && g.invert(E.WORLDVIEWINVERSE, E.WORLDVIEW), (P.matrixSemantics.WORLDVIEWPROJECTIONINVERSE || P.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE) && g.invert(E.WORLDVIEWPROJECTIONINVERSE, E.WORLDVIEWPROJECTION), R.beforeRender(this), n.beforeRender.call(this, R, L, d);
                        var F = O !== f;
                        F ? (O.bind(this), O.setUniformOfSemantic(w, "VIEWPORT", s), O.setUniformOfSemantic(w, "WINDOW_SIZE", l), O.setUniformOfSemantic(w, "NEAR", t.near), O.setUniformOfSemantic(w, "FAR", t.far), O.setUniformOfSemantic(w, "DEVICEPIXELRATIO", o), O.setUniformOfSemantic(w, "TIME", p), O.setUniformOfSemantic(w, "VIEWPORT_SIZE", u), A && A.setLightUniforms(O, R.lightGroup, this)) : O = f, (d !== L || F) && (L.depthTest !== h && (L.depthTest ? w.enable(w.DEPTH_TEST) : w.disable(w.DEPTH_TEST), h = L.depthTest), L.depthMask !== m && (w.depthMask(L.depthMask), m = L.depthMask), L.transparent !== y && (L.transparent ? w.enable(w.BLEND) : w.disable(w.BLEND), y = L.transparent), L.transparent && (L.blend ? L.blend(w) : (w.blendEquationSeparate(w.FUNC_ADD, w.FUNC_ADD), w.blendFuncSeparate(w.SRC_ALPHA, w.ONE_MINUS_SRC_ALPHA, w.ONE, w.ONE_MINUS_SRC_ALPHA))), this._bindMaterial(L, O, d || null, f || null), d = L);
                        for (var k = P.matrixSemanticKeys, B = 0; B < k.length; B++) {
                            var U = k[B],
                                H = P.matrixSemantics[U],
                                z = E[U];
                            if (H.isTranspose) {
                                var j = E[H.semanticNoTranspose];
                                g.transpose(z, j)
                            }
                            O.setUniform(w, H.type, H.symbol, z)
                        }
                        R.cullFace !== x && (x = R.cullFace, w.cullFace(x)), R.frontFace !== _ && (_ = R.frontFace, w.frontFace(_)), R.culling !== v && (v = R.culling, v ? w.enable(w.CULL_FACE) : w.disable(w.CULL_FACE)), this._updateSkeleton(R, O), I && (T = this._bindVAO(S, P, N, O)), this._renderObject(R, T), n.afterRender.call(this, R), R.afterRender(this), f = O
                    }
                }
                S && S.bindVertexArrayOES(null), this.trigger("afterrenderpass", this, e, t, n)
            },
            _updateSkeleton: function(e, t) {
                var n = this.gl;
                if (e.skeleton) {
                    e.skeleton.update();
                    var a = e.skeleton.getSubSkinMatrices(e.__uid__, e.joints);
                    t.setUniformOfSemantic(n, "SKIN_MATRIX", a)
                }
            },
            _renderObject: function(e, t) {
                var n = this.gl,
                    a = e.geometry,
                    i = e.mode;
                if (t.indicesBuffer) {
                    var r = this.getGLExtension("OES_element_index_uint"),
                        o = r && a.indices instanceof Uint32Array,
                        s = o ? n.UNSIGNED_INT : n.UNSIGNED_SHORT;
                    n.drawElements(i, t.indicesBuffer.count, s, 0)
                } else n.drawArrays(i, 0, a.vertexCount)
            },
            _bindMaterial: function(e, t, n, a) {
                for (var i = this.gl, r = a === t, o = t.currentTextureSlot(), s = e.getEnabledUniforms(), c = e.getTextureUniforms(), l = 0; l < c.length; l++) {
                    var u = c[l],
                        p = e.uniforms[u].value,
                        d = e.uniforms[u].type;
                    if ("t" === d && p) p.__slot = -1;
                    else if ("tv" === d)
                        for (var f = 0; f < p.length; f++) p[f] instanceof Texture && (p[f].__slot = -1)
                }
                for (var l = 0; l < s.length; l++) {
                    var u = s[l],
                        h = e.uniforms[u],
                        p = h.value;
                    if (!n || !r || n.uniforms[u].value !== p) {
                        var d = h.type;
                        if (null != p)
                            if ("t" === d)
                                if (p.__slot < 0) {
                                    var m = t.currentTextureSlot(),
                                        v = t.setUniform(i, "1i", u, m);
                                    if (!v) continue;
                                    t.takeCurrentTextureSlot(this, p), p.__slot = m
                                } else t.setUniform(i, "1i", u, p.__slot);
                        else if (Array.isArray(p)) {
                            if (0 === p.length) continue;
                            if ("tv" === d) {
                                if (!t.hasUniform(u)) continue;
                                for (var g = [], f = 0; f < p.length; f++) {
                                    var x = p[f];
                                    if (x.__slot < 0) {
                                        var m = t.currentTextureSlot();
                                        g.push(m), t.takeCurrentTextureSlot(this, x), x.__slot = m
                                    } else g.push(x.__slot)
                                }
                                t.setUniform(i, "1iv", u, g)
                            } else t.setUniform(i, h.type, u, p)
                        } else t.setUniform(i, h.type, u, p);
                        else if ("t" === h.type) {
                            var m = t.currentTextureSlot(),
                                v = t.setUniform(i, "1i", u, m);
                            v && t.takeCurrentTextureSlot(this, null)
                        }
                    }
                }
                t.resetTextureSlot(o)
            },
            _bindVAO: function(e, t, n, a) {
                var i = !n.dynamic,
                    o = this.gl,
                    s = this.__uid__ + "-" + a.__uid__,
                    c = n.__vaoCache[s];
                if (!c) {
                    var l = n.getBufferChunks(this);
                    if (!l || !l.length) return;
                    for (var u = l[0], p = u.attributeBuffers, d = u.indicesBuffer, f = [], h = [], m = 0; m < p.length; m++) {
                        var v, g = p[m],
                            x = g.name,
                            _ = g.semantic;
                        if (_) {
                            var y = t.attributeSemantics[_];
                            v = y && y.symbol
                        } else v = x;
                        v && a.attributes[v] && (f.push(g), h.push(v))
                    }
                    c = new r(f, h, d), i && (n.__vaoCache[s] = c)
                }
                var T = !0;
                e && i && (null == c.vao ? c.vao = e.createVertexArrayOES() : T = !1, e.bindVertexArrayOES(c.vao));
                var f = c.availableAttributes,
                    d = c.indicesBuffer;
                if (T) {
                    for (var E = a.enableAttributes(this, c.availableAttributeSymbols, e && i && c), m = 0; m < f.length; m++) {
                        var w = E[m];
                        if (-1 !== w) {
                            var g = f[m],
                                A = g.buffer,
                                S = g.size,
                                C = b[g.type] || o.FLOAT;
                            o.bindBuffer(o.ARRAY_BUFFER, A), o.vertexAttribPointer(w, S, C, !1, 0, 0)
                        }
                    }
                    n.isUseIndices() && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, d.buffer)
                }
                return c
            },
            renderPreZ: function(e, t, n) {
                var a = this.gl,
                    i = this._prezMaterial || new l.a({
                        shader: new d.a(d.a.source("clay.prez.vertex"), d.a.source("clay.prez.fragment"))
                    });
                this._prezMaterial = i, a.colorMask(!1, !1, !1, !1), a.depthMask(!0), this.renderPass(e, n, {
                    ifRender: function(e) {
                        return !e.ignorePreZ
                    },
                    getMaterial: function() {
                        return i
                    },
                    sort: this.opaqueSortCompare
                }), a.colorMask(!0, !0, !0, !0), a.depthMask(!0)
            },
            disposeScene: function(e) {
                this.disposeNode(e, !0, !0), e.dispose()
            },
            disposeNode: function(e, t, n) {
                e.getParent() && e.getParent().remove(e);
                var a = {};
                e.traverse(function(e) {
                    var i = e.material;
                    if (e.geometry && t && e.geometry.dispose(this), n && i && !a[i.__uid__]) {
                        for (var r = i.getTextureUniforms(), o = 0; o < r.length; o++) {
                            var s = r[o],
                                c = i.uniforms[s].value,
                                l = i.uniforms[s].type;
                            if (c)
                                if ("t" === l) c.dispose && c.dispose(this);
                                else if ("tv" === l)
                                for (var u = 0; u < c.length; u++) c[u] && c[u].dispose && c[u].dispose(this)
                        }
                        a[i.__uid__] = !0
                    }
                    e.dispose && e.dispose(this)
                }, this)
            },
            disposeGeometry: function(e) {
                e.dispose(this)
            },
            disposeTexture: function(e) {
                e.dispose(this)
            },
            disposeFrameBuffer: function(e) {
                e.dispose(this)
            },
            dispose: function() {},
            screenToNDC: function(e, t, n) {
                n || (n = new u.a), t = this._height - t;
                var a = this.viewport,
                    i = n.array;
                return i[0] = (e - a.x) / a.width, i[0] = 2 * i[0] - 1, i[1] = (t - a.y) / a.height, i[1] = 2 * i[1] - 1, n
            }
        });
    T.opaqueSortCompare = T.prototype.opaqueSortCompare = function(e, t) {
        return e.renderOrder === t.renderOrder ? e.__program === t.__program ? e.material === t.material ? e.geometry.__uid__ - t.geometry.__uid__ : e.material.__uid__ - t.material.__uid__ : e.__program && t.__program ? e.__program.__uid__ - t.__program.__uid__ : 0 : e.renderOrder - t.renderOrder
    }, T.transparentSortCompare = T.prototype.transparentSortCompare = function(e, t) {
        return e.renderOrder === t.renderOrder ? e.__depth === t.__depth ? e.__program === t.__program ? e.material === t.material ? e.geometry.__uid__ - t.geometry.__uid__ : e.material.__uid__ - t.material.__uid__ : e.__program && t.__program ? e.__program.__uid__ - t.__program.__uid__ : 0 : e.__depth - t.__depth : e.renderOrder - t.renderOrder
    };
    var E = {
        IDENTITY: _(),
        WORLD: _(),
        VIEW: _(),
        PROJECTION: _(),
        WORLDVIEW: _(),
        VIEWPROJECTION: _(),
        WORLDVIEWPROJECTION: _(),
        WORLDINVERSE: _(),
        VIEWINVERSE: _(),
        PROJECTIONINVERSE: _(),
        WORLDVIEWINVERSE: _(),
        VIEWPROJECTIONINVERSE: _(),
        WORLDVIEWPROJECTIONINVERSE: _(),
        WORLDTRANSPOSE: _(),
        VIEWTRANSPOSE: _(),
        PROJECTIONTRANSPOSE: _(),
        WORLDVIEWTRANSPOSE: _(),
        VIEWPROJECTIONTRANSPOSE: _(),
        WORLDVIEWPROJECTIONTRANSPOSE: _(),
        WORLDINVERSETRANSPOSE: _(),
        VIEWINVERSETRANSPOSE: _(),
        PROJECTIONINVERSETRANSPOSE: _(),
        WORLDVIEWINVERSETRANSPOSE: _(),
        VIEWPROJECTIONINVERSETRANSPOSE: _(),
        WORLDVIEWPROJECTIONINVERSETRANSPOSE: _()
    };
    T.COLOR_BUFFER_BIT = c.a.COLOR_BUFFER_BIT, T.DEPTH_BUFFER_BIT = c.a.DEPTH_BUFFER_BIT, T.STENCIL_BUFFER_BIT = c.a.STENCIL_BUFFER_BIT, t.a = T
}, function(e, t, n) {
    "use strict";
    var a = function() {
        this._contextId = 0, this._caches = [], this._context = {}
    };
    a.prototype = {
        use: function(e, t) {
            var n = this._caches;
            n[e] || (n[e] = {}, t && (n[e] = t())), this._contextId = e, this._context = n[e]
        },
        put: function(e, t) {
            this._context[e] = t
        },
        get: function(e) {
            return this._context[e]
        },
        dirty: function(e) {
            e = e || "";
            var t = "__dt__" + e;
            this.put(t, !0)
        },
        dirtyAll: function(e) {
            e = e || "";
            for (var t = "__dt__" + e, n = this._caches, a = 0; a < n.length; a++) n[a] && (n[a][t] = !0)
        },
        fresh: function(e) {
            e = e || "";
            var t = "__dt__" + e;
            this.put(t, !1)
        },
        freshAll: function(e) {
            e = e || "";
            for (var t = "__dt__" + e, n = this._caches, a = 0; a < n.length; a++) n[a] && (n[a][t] = !1)
        },
        isDirty: function(e) {
            e = e || "";
            var t = "__dt__" + e,
                n = this._context;
            return !n.hasOwnProperty(t) || !0 === n[t]
        },
        deleteContext: function(e) {
            delete this._caches[e], this._context = {}
        },
        delete: function(e) {
            delete this._context[e]
        },
        clearAll: function() {
            this._caches = {}
        },
        getContext: function() {
            return this._context
        },
        eachContext: function(e, t) {
            Object.keys(this._caches).forEach(function(n) {
                e && e.call(t, n)
            })
        },
        miss: function(e) {
            return !this._context.hasOwnProperty(e)
        }
    }, a.prototype.constructor = a, t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = new XMLHttpRequest;
        t.open("get", e.url), t.responseType = e.responseType || "text", e.onprogress && (t.onprogress = function(t) {
            if (t.lengthComputable) {
                var n = t.loaded / t.total;
                e.onprogress(n, t.loaded, t.total)
            } else e.onprogress(null)
        }), t.onload = function(n) {
            t.status >= 400 ? e.onerror && e.onerror() : e.onload && e.onload(t.response)
        }, e.onerror && (t.onerror = e.onerror), t.send(null)
    }
    t.a = {
        get: a
    }
}, function(e, t, n) {
    "use strict";
    var a = n(14),
        i = n(9),
        r = n(42),
        o = n(43),
        s = n(0),
        c = n.n(s),
        l = c.a.vec3,
        u = c.a.vec4,
        p = a.a.extend(function() {
            return {
                projectionMatrix: new i.a,
                invProjectionMatrix: new i.a,
                viewMatrix: new i.a,
                frustum: new r.a
            }
        }, function() {
            this.update(!0)
        }, {
            update: function(e) {
                a.a.prototype.update.call(this, e), i.a.invert(this.viewMatrix, this.worldTransform), this.updateProjectionMatrix(), i.a.invert(this.invProjectionMatrix, this.projectionMatrix), this.frustum.setFromProjection(this.projectionMatrix)
            },
            setViewMatrix: function(e) {
                i.a.copy(this.viewMatrix, e), i.a.invert(this.worldTransform, e), this.decomposeWorldTransform()
            },
            decomposeProjectionMatrix: function() {},
            setProjectionMatrix: function(e) {
                i.a.copy(this.projectionMatrix, e), i.a.invert(this.invProjectionMatrix, e), this.decomposeProjectionMatrix()
            },
            updateProjectionMatrix: function() {},
            castRay: function() {
                var e = u.create();
                return function(t, n) {
                    var a = void 0 !== n ? n : new o.a,
                        i = t.array[0],
                        r = t.array[1];
                    return u.set(e, i, r, -1, 1), u.transformMat4(e, e, this.invProjectionMatrix.array), u.transformMat4(e, e, this.worldTransform.array), l.scale(a.origin.array, e, 1 / e[3]), u.set(e, i, r, 1, 1), u.transformMat4(e, e, this.invProjectionMatrix.array), u.transformMat4(e, e, this.worldTransform.array), l.scale(e, e, 1 / e[3]), l.sub(a.direction.array, e, a.origin.array), l.normalize(a.direction.array, a.direction.array), a.direction._dirty = !0, a.origin._dirty = !0, a
                }
            }()
        });
    t.a = p
}, function(e, t, n) {
    "use strict";
    var a = n(19),
        i = n(8),
        r = a.a.extend({
            dynamic: !1,
            widthSegments: 1,
            heightSegments: 1
        }, function() {
            this.build()
        }, {
            build: function() {
                for (var e = this.heightSegments, t = this.widthSegments, n = this.attributes, a = [], r = [], o = [], s = [], c = 0; c <= e; c++)
                    for (var l = c / e, u = 0; u <= t; u++) {
                        var p = u / t;
                        if (a.push([2 * p - 1, 2 * l - 1, 0]), r && r.push([p, l]), o && o.push([0, 0, 1]), u < t && c < e) {
                            var d = u + c * (t + 1);
                            s.push([d, d + 1, d + t + 1]), s.push([d + t + 1, d + 1, d + t + 2])
                        }
                    }
                n.position.fromArray(a), n.texcoord0.fromArray(r), n.normal.fromArray(o), this.initIndicesFromArray(s), this.boundingBox = new i.a, this.boundingBox.min.set(-1, -1, 0), this.boundingBox.max.set(1, 1, 0)
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        i = n(15),
        r = n(29),
        o = n(33),
        s = n(34),
        c = n(17),
        l = n(94),
        u = n(95),
        p = {
            loadTexture: function(e, t, n, r) {
                var o;
                if ("function" == typeof t ? (n = t, r = n, t = {}) : t = t || {}, "string" == typeof e) {
                    if (e.match(/.hdr$/) || "hdr" === t.fileType) return o = new a.a({
                        width: 0,
                        height: 0,
                        sRGB: !1
                    }), p._fetchTexture(e, function(e) {
                        u.a.parseRGBE(e, o, t.exposure), o.dirty(), n && n(o)
                    }, r), o;
                    e.match(/.dds$/) || "dds" === t.fileType ? (o = new a.a({
                        width: 0,
                        height: 0
                    }), p._fetchTexture(e, function(e) {
                        l.a.parse(e, o), o.dirty(), n && n(o)
                    }, r)) : (o = new a.a, o.load(e), o.success(n), o.error(r))
                } else "object" == typeof e && void 0 !== e.px && (o = new i.a, o.load(e), o.success(n), o.error(r));
                return o
            },
            loadPanorama: function(e, t, n, a, i, r) {
                var o = this;
                "function" == typeof a ? (i = a, r = i, a = {}) : a = a || {}, p.loadTexture(t, a, function(t) {
                    t.flipY = a.flipY || !1, o.panoramaToCubeMap(e, t, n, a), t.dispose(e), i && i(n)
                }, r)
            },
            panoramaToCubeMap: function(e, t, n, a) {
                var i = new o.a,
                    r = new s.a({
                        scene: new c.a
                    });
                return r.setEnvironmentMap(t), a = a || {}, a.encodeRGBM && r.material.define("fragment", "RGBM_ENCODE"), n.sRGB = t.sRGB, i.texture = n, i.render(e, r.scene), i.texture = null, i.dispose(e), n
            },
            heightToNormal: function(e, t) {
                var n = document.createElement("canvas"),
                    a = n.width = e.width,
                    i = n.height = e.height,
                    r = n.getContext("2d");
                r.drawImage(e, 0, 0, a, i), t = t || !1;
                for (var o = r.getImageData(0, 0, a, i), s = r.createImageData(a, i), c = 0; c < o.data.length; c += 4) {
                    if (t) {
                        var l = o.data[c],
                            u = o.data[c + 1],
                            p = o.data[c + 2];
                        if (Math.abs(l - u) + Math.abs(u - p) > 20) return console.warn("Given image is not a height map"), e
                    }
                    var d, f, h, m;
                    c % (4 * a) == 0 ? (d = o.data[c], h = o.data[c + 4]) : c % (4 * a) == 4 * (a - 1) ? (d = o.data[c - 4], h = o.data[c]) : (d = o.data[c - 4], h = o.data[c + 4]), c < 4 * a ? (f = o.data[c], m = o.data[c + 4 * a]) : c > a * (i - 1) * 4 ? (f = o.data[c - 4 * a], m = o.data[c]) : (f = o.data[c - 4 * a], m = o.data[c + 4 * a]), s.data[c] = d - h + 127, s.data[c + 1] = f - m + 127, s.data[c + 2] = 255, s.data[c + 3] = 255
                }
                return r.putImageData(s, 0, 0), n
            },
            isHeightImage: function(e, t, n) {
                if (!e || !e.width || !e.height) return !1;
                var a = document.createElement("canvas"),
                    i = a.getContext("2d"),
                    r = t || 32;
                n = n || 20, a.width = a.height = r, i.drawImage(e, 0, 0, r, r);
                for (var o = i.getImageData(0, 0, r, r), s = 0; s < o.data.length; s += 4) {
                    var c = o.data[s],
                        l = o.data[s + 1],
                        u = o.data[s + 2];
                    if (Math.abs(c - l) + Math.abs(l - u) > n) return !1
                }
                return !0
            },
            _fetchTexture: function(e, t, n) {
                r.a.get({
                    url: e,
                    responseType: "arraybuffer",
                    onload: t,
                    onerror: n
                })
            },
            createChessboard: function(e, t, n, i) {
                e = e || 512, t = t || 64, n = n || "black", i = i || "white";
                var r = Math.ceil(e / t),
                    o = document.createElement("canvas");
                o.width = e, o.height = e;
                var s = o.getContext("2d");
                s.fillStyle = i, s.fillRect(0, 0, e, e), s.fillStyle = n;
                for (var c = 0; c < r; c++)
                    for (var l = 0; l < r; l++) {
                        var u = l % 2 ? c % 2 : c % 2 - 1;
                        u && s.fillRect(c * t, l * t, t, t)
                    }
                return new a.a({
                    image: o,
                    anisotropic: 8
                })
            },
            createBlank: function(e) {
                var t = document.createElement("canvas");
                t.width = 1, t.height = 1;
                var n = t.getContext("2d");
                return n.fillStyle = e, n.fillRect(0, 0, 1, 1), new a.a({
                    image: t
                })
            }
        };
    t.a = p
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(4),
        r = n(22),
        o = n(11),
        s = ["px", "nx", "py", "ny", "pz", "nz"],
        c = a.a.extend(function() {
            var e = {
                    position: new i.a,
                    far: 1e3,
                    near: .1,
                    texture: null,
                    shadowMapPass: null
                },
                t = e._cameras = {
                    px: new r.a({
                        fov: 90
                    }),
                    nx: new r.a({
                        fov: 90
                    }),
                    py: new r.a({
                        fov: 90
                    }),
                    ny: new r.a({
                        fov: 90
                    }),
                    pz: new r.a({
                        fov: 90
                    }),
                    nz: new r.a({
                        fov: 90
                    })
                };
            return t.px.lookAt(i.a.POSITIVE_X, i.a.NEGATIVE_Y), t.nx.lookAt(i.a.NEGATIVE_X, i.a.NEGATIVE_Y), t.py.lookAt(i.a.POSITIVE_Y, i.a.POSITIVE_Z), t.ny.lookAt(i.a.NEGATIVE_Y, i.a.NEGATIVE_Z), t.pz.lookAt(i.a.POSITIVE_Z, i.a.NEGATIVE_Y), t.nz.lookAt(i.a.NEGATIVE_Z, i.a.NEGATIVE_Y), e._frameBuffer = new o.a, e
        }, {
            getCamera: function(e) {
                return this._cameras[e]
            },
            render: function(e, t, n) {
                var a = e.gl;
                n || t.update();
                for (var r = this.texture.width, o = 2 * Math.atan(r / (r - .5)) / Math.PI * 180, c = 0; c < 6; c++) {
                    var l = s[c],
                        u = this._cameras[l];
                    if (i.a.copy(u.position, this.position), u.far = this.far, u.near = this.near, u.fov = o, this.shadowMapPass) {
                        u.update();
                        var p = t.getBoundingBox();
                        p.applyTransform(u.viewMatrix), t.viewBoundingBoxLastFrame.copy(p), this.shadowMapPass.render(e, t, u, !0)
                    }
                    this._frameBuffer.attach(this.texture, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + c), this._frameBuffer.bind(e), e.render(t, u, !0), this._frameBuffer.unbind(e)
                }
            },
            dispose: function(e) {
                this._frameBuffer.dispose(e)
            }
        });
    t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        i = n(92),
        r = n(2),
        o = n(10),
        s = n(93);
    r.a.import(s.a);
    var c = a.a.extend(function() {
        var e = new r.a(r.a.source("clay.skydome.vertex"), r.a.source("clay.skydome.fragment")),
            t = new o.a({
                shader: e,
                depthMask: !1
            });
        return {
            scene: null,
            geometry: new i.a({
                widthSegments: 30,
                heightSegments: 30
            }),
            material: t,
            environmentMap: null,
            culling: !1
        }
    }, function() {
        var e = this.scene;
        e && this.attachScene(e), this.environmentMap && this.setEnvironmentMap(this.environmentMap)
    }, {
        attachScene: function(e) {
            this.scene && this.detachScene(), e.skydome = this, this.scene = e, e.on("beforerender", this._beforeRenderScene, this)
        },
        detachScene: function() {
            this.scene && (this.scene.off("beforerender", this._beforeRenderScene), this.scene.skydome = null), this.scene = null
        },
        _beforeRenderScene: function(e, t, n) {
            this.position.copy(n.getWorldPosition()), this.update(), e.renderPass([this], n)
        },
        setEnvironmentMap: function(e) {
            this.material.set("environmentMap", e)
        },
        getEnvironmentMap: function() {
            return this.material.get("environmentMap")
        },
        dispose: function(e) {
            this.detachScene(), this.geometry.dispose(e)
        }
    });
    t.a = c
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        i = n(118),
        r = n(2),
        o = n(10),
        s = n(52);
    r.a.import(s.a);
    var c = a.a.extend(function() {
        var e = new r.a({
                vertex: r.a.source("clay.skybox.vertex"),
                fragment: r.a.source("clay.skybox.fragment")
            }),
            t = new o.a({
                shader: e,
                depthMask: !1
            });
        return {
            scene: null,
            geometry: new i.a,
            material: t,
            environmentMap: null,
            culling: !1
        }
    }, function() {
        var e = this.scene;
        e && this.attachScene(e), this.environmentMap && this.setEnvironmentMap(this.environmentMap)
    }, {
        attachScene: function(e) {
            this.scene && this.detachScene(), e.skybox = this, this.scene = e, e.on("beforerender", this._beforeRenderScene, this)
        },
        detachScene: function() {
            this.scene && (this.scene.off("beforerender", this._beforeRenderScene), this.scene.skybox = null), this.scene = null
        },
        dispose: function(e) {
            this.detachScene(), this.geometry.dispose(e)
        },
        setEnvironmentMap: function(e) {
            this.material.set("environmentMap", e)
        },
        getEnvironmentMap: function() {
            return this.material.get("environmentMap")
        },
        _beforeRenderScene: function(e, t, n) {
            this.renderSkybox(e, n)
        },
        renderSkybox: function(e, t) {
            this.position.copy(t.getWorldPosition()), this.update(), e.gl.disable(e.gl.BLEND), this.material.get("lod") > 0 ? this.material.define("fragment", "LOD") : this.material.undefine("fragment", "LOD"), e.renderPass([this], t)
        }
    });
    t.a = c
}, function(e, t, n) {
    "use strict";
    t.a = {
        ENV_TEXTURE_ROOT: "./asset/texture/",
        SUPPORTED_MODEL_FILES: ["fbx", "obj", "mtl", "dae", "dxf"],
        AUTO_SAVE: 0
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var a = n(72),
        i = function(e) {
            this._list = new a.a, this._map = {}, this._maxSize = e || 10
        };
    i.prototype.setMaxSize = function(e) {
        this._maxSize = e
    }, i.prototype.put = function(e, t) {
        if (void 0 === this._map[e]) {
            var n = this._list.length();
            if (n >= this._maxSize && n > 0) {
                var a = this._list.head;
                this._list.remove(a), delete this._map[a.key]
            }
            var i = this._list.insert(t);
            i.key = e, this._map[e] = i
        }
    }, i.prototype.get = function(e) {
        var t = this._map[e];
        if (void 0 !== t) return t !== this._list.tail && (this._list.remove(t), this._list.insertEntry(t)), t.value
    }, i.prototype.remove = function(e) {
        var t = this._map[e];
        void 0 !== t && (delete this._map[e], this._list.remove(t))
    }, i.prototype.clear = function() {
        this._list.clear(), this._map = {}
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var a = n(75),
        i = ":unconfigurable;";
    t.a = ["@export clay.header.directional_light", "uniform vec3 directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]" + i, "uniform vec3 directionalLightColor[DIRECTIONAL_LIGHT_COUNT]" + i, "@end", "@export clay.header.ambient_light", "uniform vec3 ambientLightColor[AMBIENT_LIGHT_COUNT]" + i, "@end", "@export clay.header.ambient_sh_light", "uniform vec3 ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]" + i, "uniform vec3 ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]" + i, a.a, "@end", "@export clay.header.ambient_cubemap_light", "uniform vec3 ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "@end", "@export clay.header.point_light", "uniform vec3 pointLightPosition[POINT_LIGHT_COUNT]" + i, "uniform float pointLightRange[POINT_LIGHT_COUNT]" + i, "uniform vec3 pointLightColor[POINT_LIGHT_COUNT]" + i, "@end", "@export clay.header.spot_light", "uniform vec3 spotLightPosition[SPOT_LIGHT_COUNT]" + i, "uniform vec3 spotLightDirection[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightRange[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightFalloffFactor[SPOT_LIGHT_COUNT]" + i, "uniform vec3 spotLightColor[SPOT_LIGHT_COUNT]" + i, "@end"].join("\n")
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.prez.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\n@import clay.chunk.skinning_header\nvoid main()\n{\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0);\n}\n@end\n@export clay.prez.fragment\nvoid main()\n{\n gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n@end"
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        var i = e.accessors[n],
            r = t.bufferViews[i.bufferView],
            o = i.byteOffset || 0,
            c = C[i.componentType] || s.a.Float32Array,
            l = R[i.type];
        null == l && a && (l = 1);
        var u = new c(r, o, l * i.count),
            p = i.extensions && i.extensions.WEB3D_quantized_attributes;
        if (p) {
            for (var d, f, h = new s.a.Float32Array(l * i.count), m = p.decodeMatrix, d = new Array(l), f = new Array(l), v = 0; v < l; v++) d[v] = m[l * (l + 1) + v], f[v] = m[v * (l + 1) + v];
            for (var g = 0; g < i.count; g++)
                for (var v = 0; v < l; v++) h[g * l + v] = u[g * l + v] * f[v] + d[v];
            u = h
        }
        return u
    }
    var i = n(1),
        r = n(29),
        o = n(7),
        s = n(12),
        c = n(17),
        l = n(10),
        u = n(44),
        p = n(16),
        d = n(14),
        f = n(3),
        h = n(5),
        m = n(48),
        v = n(78),
        g = n(49),
        x = n(22),
        _ = n(23),
        y = n(6),
        b = n(8),
        T = n(79),
        E = n(80),
        w = n(19),
        A = (n(81), n(2)),
        S = {
            NORMAL: "normal",
            POSITION: "position",
            TEXCOORD_0: "texcoord0",
            TEXCOORD_1: "texcoord1",
            WEIGHTS_0: "weight",
            JOINTS_0: "joint",
            COLOR_0: "color"
        },
        C = {
            5120: s.a.Int8Array,
            5121: s.a.Uint8Array,
            5122: s.a.Int16Array,
            5123: s.a.Uint16Array,
            5125: s.a.Uint32Array,
            5126: s.a.Float32Array
        },
        R = {
            SCALAR: 1,
            VEC2: 2,
            VEC3: 3,
            VEC4: 4,
            MAT2: 4,
            MAT3: 9,
            MAT4: 16
        },
        M = i.a.extend({
            rootNode: null,
            rootPath: null,
            textureRootPath: null,
            bufferRootPath: null,
            shader: "clay.standard",
            useStandardMaterial: !1,
            includeCamera: !0,
            includeAnimation: !0,
            includeMesh: !0,
            includeTexture: !0,
            crossOrigin: "",
            textureFlipY: !1,
            textureConvertToPOT: !1,
            shaderLibrary: null
        }, function() {
            this.shaderLibrary || (this.shaderLibrary = m.a.createLibrary())
        }, {
            load: function(e) {
                var t = this,
                    n = e.endsWith(".glb");
                null == this.rootPath && (this.rootPath = e.slice(0, e.lastIndexOf("/"))), r.a.get({
                    url: e,
                    onprogress: function(e, n, a) {
                        t.trigger("progress", e, n, a)
                    },
                    onerror: function(e) {
                        t.trigger("error", e)
                    },
                    responseType: n ? "arraybuffer" : "text",
                    onload: function(e) {
                        n ? t.parseBinary(e) : t.parse(JSON.parse(e))
                    }
                })
            },
            parseBinary: function(e) {
                var t = new Uint32Array(e, 0, 4);
                if (1179937895 !== t[0]) return void this.trigger("error", "Invalid glTF binary format: Invalid header");
                if (t[0] < 2) return void this.trigger("error", "Only glTF2.0 is supported.");
                for (var n, a = new DataView(e, 12), i = [], r = 0; r < a.byteLength;) {
                    var o = a.getUint32(r, !0);
                    r += 4;
                    var s = a.getUint32(r, !0);
                    if (r += 4, 1313821514 === s) {
                        var c = new Uint8Array(e, r + 12, o),
                            l = new TextDecoder,
                            u = l.decode(c);
                        try {
                            n = JSON.parse(u)
                        } catch (e) {
                            return void this.trigger("error", "JSON Parse error:" + e.toString())
                        }
                    } else 5130562 === s && i.push(e.slice(r + 12, r + 12 + o));
                    r += o
                }
                return n ? this.parse(n, i) : void this.trigger("error", "Invalid glTF binary format: Can't find JSON.")
            },
            parse: function(e, t) {
                function n() {
                    0 === --u && i()
                }

                function a() {
                    return {
                        json: e,
                        scene: r.rootNode ? null : l,
                        rootNode: r.rootNode ? l : null,
                        cameras: s.cameras,
                        textures: s.textures,
                        materials: s.materials,
                        skeletons: s.skeletons,
                        meshes: s.instancedMeshes,
                        clips: s.clips,
                        nodes: s.nodes
                    }
                }

                function i(t) {
                    if (s.buffers.length !== e.buffers.length) return void setTimeout(function() {
                        r.trigger("error", "Buffer not load complete.")
                    });
                    if (e.bufferViews.forEach(function(e, t) {
                            s.bufferViews[t] = s.buffers[e.buffer].slice(e.byteOffset || 0, (e.byteOffset || 0) + (e.byteLength || 0))
                        }), s.buffers = null, r.includeMesh && (r.includeTexture && r._parseTextures(e, s), r._parseMaterials(e, s), r._parseMeshes(e, s)), r._parseNodes(e, s), e.scenes) {
                        var n = e.scenes[e.scene || 0];
                        if (n)
                            for (var i = 0; i < n.nodes.length; i++) {
                                var o = s.nodes[n.nodes[i]];
                                o.update(), l.add(o)
                            }
                    }
                    r.includeMesh && r._parseSkins(e, s), r.includeAnimation && r._parseAnimations(e, s), t ? setTimeout(function() {
                        r.trigger("success", a())
                    }) : r.trigger("success", a())
                }
                var r = this,
                    s = {
                        json: e,
                        buffers: [],
                        bufferViews: [],
                        materials: [],
                        textures: [],
                        meshes: [],
                        joints: [],
                        skeletons: [],
                        cameras: [],
                        nodes: [],
                        clips: []
                    },
                    l = this.rootNode || new c.a,
                    u = 0;
                return t ? (s.buffers = t.slice(), i(!0)) : o.a.each(e.buffers, function(e, t) {
                    u++;
                    var a = e.uri;
                    r._loadBuffer(a, function(e) {
                        s.buffers[t] = e, n()
                    }, n)
                }), a()
            },
            resolveBinaryPath: function(e) {
                if (e && e.match(/^data:(.*?)base64,/)) return e;
                var t = this.bufferRootPath;
                return null == t && (t = this.rootPath), o.a.relative2absolute(e, t)
            },
            resolveTexturePath: function(e) {
                if (e && e.match(/^data:(.*?)base64,/)) return e;
                var t = this.textureRootPath;
                return null == t && (t = this.rootPath), o.a.relative2absolute(e, t)
            },
            _getShader: function() {
                return "string" == typeof this.shader ? this.shaderLibrary.get(this.shader) : this.shader instanceof A.a ? this.shader : void 0
            },
            _loadBuffer: function(e, t, n) {
                r.a.get({
                    url: this.resolveBinaryPath(e),
                    responseType: "arraybuffer",
                    onload: function(e) {
                        t && t(e)
                    },
                    onerror: function(e) {
                        n && n(e)
                    }
                })
            },
            _parseSkins: function(e, t) {
                function n(e, t, n) {
                    e.skeleton = t, e.joints = n
                }

                function a(e) {
                    return e.index
                }
                var i = !1;
                o.a.each(e.skins, function(n, a) {
                    for (var r = new v.a({
                            name: n.name
                        }), o = 0; o < n.joints.length; o++) {
                        var c = n.joints[o],
                            l = t.nodes[c],
                            u = new g.a({
                                name: l.name,
                                node: l,
                                index: r.joints.length
                            });
                        r.joints.push(u)
                    }
                    if (r.relativeRootNode = t.nodes[n.skeleton] || this.rootNode, n.inverseBindMatrices) {
                        i = !0;
                        var p = e.accessors[n.inverseBindMatrices],
                            d = t.bufferViews[p.bufferView],
                            f = p.byteOffset || 0,
                            h = 16 * p.count,
                            m = new s.a.Float32Array(d, f, h);
                        r.setJointMatricesArray(m)
                    } else r.updateJointMatrices();
                    t.skeletons[a] = r
                }, this), o.a.each(e.nodes, function(e, i) {
                    if (null != e.skin) {
                        var r = e.skin,
                            o = t.skeletons[r],
                            s = t.nodes[i],
                            c = o.joints.map(a);
                        if (s instanceof p.a) n(s, o, c);
                        else
                            for (var l = s.children(), u = 0; u < l.length; u++) n(l[u], o, c)
                    }
                }, this)
            },
            _parseTextures: function(e, t) {
                o.a.each(e.textures, function(n, a) {
                    var i = e.samplers && e.samplers[n.sampler] || {},
                        r = {};
                    ["wrapS", "wrapT", "magFilter", "minFilter"].forEach(function(e) {
                        var t = i[e];
                        null != t && (r[e] = t)
                    }), o.a.defaults(r, {
                        wrapS: f.a.REPEAT,
                        wrapT: f.a.REPEAT,
                        flipY: this.textureFlipY,
                        convertToPOT: this.textureConvertToPOT
                    });
                    var s = n.target || y.a.TEXTURE_2D,
                        c = n.format;
                    if (null != c && (r.format = c), s === y.a.TEXTURE_2D) {
                        var l, u = new h.a(r),
                            p = e.images[n.source];
                        p.uri ? l = this.resolveTexturePath(p.uri) : null != p.bufferView && (l = URL.createObjectURL(new Blob([t.bufferViews[p.bufferView]], {
                            type: p.mimeType
                        }))), l && (u.load(l, this.crossOrigin), t.textures[a] = u)
                    }
                }, this)
            },
            _KHRCommonMaterialToStandard: function(e, t) {
                var n = {};
                n = e.extensions.KHR_materials_common.values || {}, "number" == typeof n.diffuse && (n.diffuse = t.textures[n.diffuse] || null), "number" == typeof n.emission && (n.emission = t.textures[n.emission] || null);
                var a = [];
                n.diffuse instanceof h.a && a.push("diffuseMap"), e.normalTexture && a.push("normalMap"), n.emission instanceof h.a && a.push("emissiveMap");
                var i, r = this.useStandardMaterial;
                r ? i = new u.a({
                    name: e.name,
                    doubleSided: e.doubleSided
                }) : (i = new l.a({
                    name: e.name,
                    shader: this._getShader()
                }), i.define("fragment", "USE_ROUGHNESS"), i.define("fragment", "USE_METALNESS"), e.doubleSided && i.define("fragment", "DOUBLE_SIDED")), n.transparent && (i.depthMask = !1, i.depthTest = !0, i.transparent = !0);
                var o = n.diffuse;
                o && (Array.isArray(o) ? (o = o.slice(0, 3), r ? i.color = o : i.set("color", o)) : r ? i.diffuseMap = o : i.set("diffuseMap", o));
                var s = n.emission;
                if (null != s && (Array.isArray(s) ? (s = s.slice(0, 3), r ? i.emission = s : i.set("emission", s)) : r ? i.emissiveMap = s : i.set("emissiveMap", s)), null != e.normalTexture) {
                    var c = e.normalTexture.index;
                    r ? i.normalMap = t.textures[c] || null : i.set("normalMap", t.textures[c] || null)
                }
                if (null != n.shininess) {
                    var p = Math.log(n.shininess) / Math.log(8192);
                    i.set("glossiness", p), i.set("roughness", 1 - p)
                } else i.set("glossiness", .3), i.set("roughness", .3);
                return null != n.specular && i.set("specularColor", n.specular.slice(0, 3)), null != n.transparency && i.set("alpha", n.transparency), i
            },
            _pbrMetallicRoughnessToStandard: function(e, t, n) {
                var a, i, r, s, c, p, d = "MASK" === e.alphaMode,
                    f = this.useStandardMaterial,
                    h = [];
                t.baseColorTexture && (i = n.textures[t.baseColorTexture.index] || null) && h.push("diffuseMap"), t.metallicRoughnessTexture && (r = s = n.textures[t.metallicRoughnessTexture.index] || null) && h.push("metalnessMap", "roughnessMap"), e.normalTexture && (c = n.textures[e.normalTexture.index] || null) && h.push("normalMap"), e.emissiveTexture && (p = n.textures[e.emissiveTexture.index] || null) && h.push("emissiveMap");
                var m = t.baseColorFactor || [1, 1, 1, 1],
                    v = {
                        diffuseMap: i || null,
                        roughnessMap: r || null,
                        metalnessMap: s || null,
                        normalMap: c || null,
                        emissiveMap: p || null,
                        color: m.slice(0, 3),
                        alpha: m[3],
                        metalness: t.metallicFactor || 0,
                        roughness: t.roughnessFactor || 0,
                        emission: e.emissiveFactor || [0, 0, 0],
                        emissionIntensity: 1,
                        alphaCutoff: e.alphaCutoff || 0
                    };
                return v.roughnessMap && (v.metalness = .5, v.roughness = .5), f ? a = new u.a(o.a.extend({
                    name: e.name,
                    alphaTest: d,
                    doubleSided: e.doubleSided,
                    roughnessChannel: 1,
                    metalnessChannel: 2
                }, v)) : (a = new l.a({
                    name: e.name,
                    shader: this._getShader()
                }), a.define("fragment", "USE_ROUGHNESS"), a.define("fragment", "USE_METALNESS"), a.define("fragment", "ROUGHNESS_CHANNEL", 1), a.define("fragment", "METALNESS_CHANNEL", 2), a.define("fragment", "DIFFUSEMAP_ALPHA_ALPHA"), d && a.define("fragment", "ALPHA_TEST"), e.doubleSided && a.define("fragment", "DOUBLE_SIDED"), a.set(v)), "BLEND" === e.alphaMode && (a.depthMask = !1, a.depthTest = !0, a.transparent = !0), a
            },
            _pbrSpecularGlossinessToStandard: function(e, t, n) {
                var a = "MASK" === e.alphaMode;
                this.useStandardMaterial && console.error("StandardMaterial doesn't support specular glossiness workflow yet");
                var i, r, o, s, c, u, p = [];
                t.diffuseTexture && (r = n.textures[t.diffuseTexture.index] || null) && p.push("diffuseMap"), t.specularGlossinessTexture && (o = s = n.textures[t.specularGlossinessTexture.index] || null) && p.push("specularMap", "glossinessMap"), e.normalTexture && (c = n.textures[e.normalTexture.index] || null) && p.push("normalMap"), e.emissiveTexture && (u = n.textures[e.emissiveTexture.index] || null) && p.push("emissiveMap");
                var d = t.diffuseFactor || [1, 1, 1, 1],
                    f = {
                        diffuseMap: r || null,
                        glossinessMap: o || null,
                        specularMap: s || null,
                        normalMap: c || null,
                        emissiveMap: u || null,
                        color: d.slice(0, 3),
                        alpha: d[3],
                        specularColor: t.specularFactor || [1, 1, 1],
                        glossiness: t.glossinessFactor || 0,
                        emission: e.emissiveFactor || [0, 0, 0],
                        emissionIntensity: 1,
                        alphaCutoff: null == e.alphaCutoff ? .9 : e.alphaCutoff
                    };
                return f.glossinessMap && (f.glossiness = .5), f.specularMap && (f.specularColor = [1, 1, 1]), i = new l.a({
                    name: e.name,
                    shader: this._getShader()
                }), i.define("fragment", "GLOSSINESS_CHANNEL", 3), i.define("fragment", "DIFFUSEMAP_ALPHA_ALPHA"), a && i.define("fragment", "ALPHA_TEST"), e.doubleSided && i.define("fragment", "DOUBLE_SIDED"), i.set(f), "BLEND" === e.alphaMode && (i.depthMask = !1, i.depthTest = !0, i.transparent = !0), i
            },
            _parseMaterials: function(e, t) {
                o.a.each(e.materials, function(e, n) {
                    e.extensions && e.extensions.KHR_materials_common ? t.materials[n] = this._KHRCommonMaterialToStandard(e, t) : e.extensions && e.extensions.KHR_materials_pbrSpecularGlossiness ? t.materials[n] = this._pbrSpecularGlossinessToStandard(e, e.extensions.KHR_materials_pbrSpecularGlossiness, t) : t.materials[n] = this._pbrMetallicRoughnessToStandard(e, e.pbrMetallicRoughness || {}, t)
                }, this)
            },
            _parseMeshes: function(e, t) {
                var n = this;
                o.a.each(e.meshes, function(i, r) {
                    t.meshes[r] = [];
                    for (var o = 0; o < i.primitives.length; o++) {
                        for (var c = i.primitives[o], d = new w.a({
                                dynamic: !1,
                                name: i.name,
                                boundingBox: new b.a
                            }), f = Object.keys(c.attributes), h = 0; h < f.length; h++) {
                            var m = f[h],
                                v = c.attributes[m],
                                g = e.accessors[v],
                                x = S[m];
                            if (x) {
                                var _ = R[g.type],
                                    y = a(e, t, v);
                                if (y instanceof s.a.Uint32Array && (y = new Float32Array(y)), "WEIGHTS_0" === m && 4 === _) {
                                    for (var T = new y.constructor(3 * g.count), E = 0; E < g.count; E++) {
                                        var A = 4 * E,
                                            C = 3 * E,
                                            N = y[A],
                                            L = y[A + 1],
                                            O = y[A + 2],
                                            P = y[A + 3],
                                            D = N + L + O + P;
                                        T[C] = N / D, T[C + 1] = L / D, T[C + 2] = O / D
                                    }
                                    d.attributes[x].value = T
                                } else if ("COLOR_0" === m && 3 === _) {
                                    for (var I = new y.constructor(4 * g.count), E = 0; E < g.count; E++) {
                                        var A = 4 * E,
                                            C = 3 * E;
                                        I[A] = y[C], I[A + 1] = y[C + 1], I[A + 2] = y[C + 2], I[A + 3] = 1
                                    }
                                    d.attributes[x].value = I
                                } else d.attributes[x].value = y;
                                var F = "float";
                                if (y instanceof s.a.Uint16Array ? F = "ushort" : y instanceof s.a.Int16Array ? F = "short" : y instanceof s.a.Uint8Array ? F = "ubyte" : y instanceof s.a.Int8Array && (F = "byte"), d.attributes[x].type = F, "POSITION" === m) {
                                    var k = g.min,
                                        B = g.max;
                                    k && d.boundingBox.min.set(k[0], k[1], k[2]), B && d.boundingBox.max.set(B[0], B[1], B[2])
                                }
                            }
                        }
                        null != c.indices && (d.indices = a(e, t, c.indices, !0), d.vertexCount <= 65535 && d.indices instanceof s.a.Uint32Array && (d.indices = new s.a.Uint16Array(d.indices)), d.indices instanceof s.a.Uint8Array && (d.indices = new s.a.Uint16Array(d.indices)));
                        var U = t.materials[c.material],
                            H = (e.materials || [])[c.material];
                        U || (U = new l.a({
                            shader: n._getShader()
                        }));
                        var z = new p.a({
                            geometry: d,
                            material: U,
                            mode: [p.a.POINTS, p.a.LINES, p.a.LINE_LOOP, p.a.LINE_STRIP, p.a.TRIANGLES, p.a.TRIANGLE_STRIP, p.a.TRIANGLE_FAN][c.mode] || p.a.TRIANGLES,
                            ignoreGBuffer: U.transparent
                        });
                        null != H && (z.culling = !H.doubleSided), z.geometry.attributes.normal.value || z.geometry.generateVertexNormals(), (U instanceof u.a && U.normalMap || U.isTextureEnabled("normalMap")) && (z.geometry.attributes.tangent.value || z.geometry.generateTangents()), z.geometry.attributes.color.value && z.material.define("VERTEX_COLOR"), z.name = M.generateMeshName(e.meshes, r, o), t.meshes[r].push(z)
                    }
                }, this)
            },
            _instanceCamera: function(e, t) {
                var n = e.cameras[t.camera];
                if ("perspective" === n.type) {
                    var a = n.perspective || {};
                    return new x.a({
                        name: t.name,
                        aspect: a.aspectRatio,
                        fov: a.yfov / Math.PI * 180,
                        far: a.zfar,
                        near: a.znear
                    })
                }
                var i = n.orthographic || {};
                return new _.a({
                    name: t.name,
                    top: i.ymag,
                    right: i.xmag,
                    left: -i.xmag,
                    bottom: -i.ymag,
                    near: i.znear,
                    far: i.zfar
                })
            },
            _parseNodes: function(e, t) {
                function n(e) {
                    return new p.a({
                        name: e.name,
                        geometry: e.geometry,
                        material: e.material,
                        culling: e.culling,
                        mode: e.mode
                    })
                }
                t.instancedMeshes = [], o.a.each(e.nodes, function(a, i) {
                    var r;
                    if (null != a.camera && this.includeCamera) r = this._instanceCamera(e, a), t.cameras.push(r);
                    else if (null != a.mesh && this.includeMesh) {
                        var o = t.meshes[a.mesh];
                        if (o)
                            if (1 === o.length) r = n(o[0]), r.setName(a.name), t.instancedMeshes.push(r);
                            else {
                                r = new d.a, r.setName(a.name);
                                for (var s = 0; s < o.length; s++) {
                                    var c = n(o[s]);
                                    r.add(c), t.instancedMeshes.push(c)
                                }
                            }
                    } else r = new d.a, r.setName(a.name);
                    a.matrix ? (r.localTransform.setArray(a.matrix), r.decomposeLocalTransform()) : (a.translation && r.position.setArray(a.translation), a.rotation && r.rotation.setArray(a.rotation), a.scale && r.scale.setArray(a.scale)), t.nodes[i] = r
                }, this), o.a.each(e.nodes, function(e, n) {
                    var a = t.nodes[n];
                    if (e.children)
                        for (var i = 0; i < e.children.length; i++) {
                            var r = e.children[i],
                                o = t.nodes[r];
                            a.add(o)
                        }
                })
            },
            _parseAnimations: function(e, t) {
                function n(e) {
                    return "weights" !== e.path || (console.warn("GLTFLoader not support morph targets yet."), !1)
                }

                function i(e, t) {
                    return e.target.node + "_" + t.samplers[e.sampler].input
                }
                var r = {};
                o.a.each(e.animations, function(o, s) {
                    var c = o.channels.filter(n);
                    if (c.length) {
                        for (var l = {}, u = 0; u < c.length; u++) {
                            var p = c[u],
                                d = i(p, o),
                                f = t.nodes[p.target.node],
                                h = l[d],
                                m = o.samplers[p.sampler];
                            if (!h) {
                                h = l[d] = new E.a({
                                    name: f ? f.name : "",
                                    target: f
                                }), h.targetNodeIndex = p.target.node, h.channels.time = a(e, t, m.input);
                                var v = h.channels.time.length;
                                if (!r[m.input]) {
                                    for (var g = 0; g < v; g++) h.channels.time[g] *= 1e3;
                                    r[m.input] = !0
                                }
                            }
                            "LINEAR" !== (m.interpolation || "LINEAR") && console.warn("GLTFLoader only support LINEAR interpolation.");
                            var x = p.target.path;
                            "translation" === x && (x = "position"), h.channels[x] = a(e, t, m.output)
                        }
                        var _ = [];
                        for (var y in l) _.push(l[y]);
                        var b = new T.a({
                            name: o.name,
                            loop: !0,
                            tracks: _
                        });
                        t.clips.push(b)
                    }
                }, this);
                var s = t.clips.reduce(function(e, t) {
                    return Math.max(e, t.life)
                }, 0);
                return t.clips.forEach(function(e) {
                    e.life = s
                }), t.clips
            }
        });
    M.generateMeshName = function(e, t, n) {
        var a = e[t],
            i = a.name || "mesh_" + t;
        return 0 === n ? i : i + "$" + n
    }, t.a = M
}, function(e, t, n) {
    "use strict";
    var a = (n(4), n(8)),
        i = n(77),
        r = n(0),
        o = n.n(r),
        s = o.a.vec3,
        c = s.set,
        l = s.copy,
        u = s.transformMat4,
        p = Math.min,
        d = Math.max,
        f = function() {
            this.planes = [];
            for (var e = 0; e < 6; e++) this.planes.push(new i.a);
            this.boundingBox = new a.a, this.vertices = [];
            for (var e = 0; e < 8; e++) this.vertices[e] = s.fromValues(0, 0, 0)
        };
    f.prototype = {
        setFromProjection: function(e) {
            var t = this.planes,
                n = e.array,
                a = n[0],
                i = n[1],
                r = n[2],
                o = n[3],
                s = n[4],
                l = n[5],
                u = n[6],
                p = n[7],
                d = n[8],
                f = n[9],
                h = n[10],
                m = n[11],
                v = n[12],
                g = n[13],
                x = n[14],
                _ = n[15];
            c(t[0].normal.array, o - a, p - s, m - d), t[0].distance = -(_ - v), t[0].normalize(), c(t[1].normal.array, o + a, p + s, m + d), t[1].distance = -(_ + v), t[1].normalize(), c(t[2].normal.array, o + i, p + l, m + f), t[2].distance = -(_ + g), t[2].normalize(), c(t[3].normal.array, o - i, p - l, m - f), t[3].distance = -(_ - g), t[3].normalize(), c(t[4].normal.array, o - r, p - u, m - h), t[4].distance = -(_ - x), t[4].normalize(), c(t[5].normal.array, o + r, p + u, m + h), t[5].distance = -(_ + x), t[5].normalize();
            var y = this.boundingBox,
                b = this.vertices;
            if (0 === _) {
                var T = l / a,
                    E = -x / (h - 1),
                    w = -x / (h + 1),
                    A = -w / l,
                    S = -E / l;
                y.min.set(-A * T, -A, w), y.max.set(A * T, A, E), c(b[0], -A * T, -A, w), c(b[1], -A * T, A, w), c(b[2], A * T, -A, w), c(b[3], A * T, A, w), c(b[4], -S * T, -S, E), c(b[5], -S * T, S, E), c(b[6], S * T, -S, E), c(b[7], S * T, S, E)
            } else {
                var C = (-1 - v) / a,
                    R = (1 - v) / a,
                    M = (1 - g) / l,
                    N = (-1 - g) / l,
                    L = (-1 - x) / h,
                    O = (1 - x) / h;
                y.min.set(Math.min(C, R), Math.min(N, M), Math.min(O, L)), y.max.set(Math.max(R, C), Math.max(M, N), Math.max(L, O));
                var P = y.min.array,
                    D = y.max.array;
                c(b[0], P[0], P[1], P[2]), c(b[1], P[0], D[1], P[2]), c(b[2], D[0], P[1], P[2]), c(b[3], D[0], D[1], P[2]), c(b[4], P[0], P[1], D[2]), c(b[5], P[0], D[1], D[2]), c(b[6], D[0], P[1], D[2]), c(b[7], D[0], D[1], D[2])
            }
        },
        getTransformedBoundingBox: function() {
            var e = s.create();
            return function(t, n) {
                var a = this.vertices,
                    i = n.array,
                    r = t.min,
                    o = t.max,
                    s = r.array,
                    c = o.array,
                    f = a[0];
                u(e, f, i), l(s, e), l(c, e);
                for (var h = 1; h < 8; h++) f = a[h], u(e, f, i), s[0] = p(e[0], s[0]), s[1] = p(e[1], s[1]), s[2] = p(e[2], s[2]), c[0] = d(e[0], c[0]), c[1] = d(e[1], c[1]), c[2] = d(e[2], c[2]);
                return r._dirty = !0, o._dirty = !0, t
            }
        }()
    }, t.a = f
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        i = n(0),
        r = n.n(i),
        o = r.a.vec3,
        s = function(e, t) {
            this.origin = e || new a.a, this.direction = t || new a.a
        };
    s.prototype = {
        constructor: s,
        intersectPlane: function(e, t) {
            var n = e.normal.array,
                i = e.distance,
                r = this.origin.array,
                s = this.direction.array,
                c = o.dot(n, s);
            if (0 === c) return null;
            t || (t = new a.a);
            var l = (o.dot(n, r) - i) / c;
            return o.scaleAndAdd(t.array, r, s, -l), t._dirty = !0, t
        },
        mirrorAgainstPlane: function(e) {
            var t = o.dot(e.normal.array, this.direction.array);
            o.scaleAndAdd(this.direction.array, this.direction.array, e.normal.array, 2 * -t), this.direction._dirty = !0
        },
        distanceToPoint: function() {
            var e = o.create();
            return function(t) {
                o.sub(e, t, this.origin.array);
                var n = o.dot(e, this.direction.array);
                if (n < 0) return o.distance(this.origin.array, t);
                var a = o.lenSquared(e);
                return Math.sqrt(a - n * n)
            }
        }(),
        intersectSphere: function() {
            var e = o.create();
            return function(t, n, i) {
                var r = this.origin.array,
                    s = this.direction.array;
                t = t.array, o.sub(e, t, r);
                var c = o.dot(e, s),
                    l = o.squaredLength(e),
                    u = l - c * c,
                    p = n * n;
                if (!(u > p)) {
                    var d = Math.sqrt(p - u),
                        f = c - d,
                        h = c + d;
                    return i || (i = new a.a), f < 0 ? h < 0 ? null : (o.scaleAndAdd(i.array, r, s, h), i) : (o.scaleAndAdd(i.array, r, s, f), i)
                }
            }
        }(),
        intersectBoundingBox: function(e, t) {
            var n, i, r, s, c, l, u = this.direction.array,
                p = this.origin.array,
                d = e.min.array,
                f = e.max.array,
                h = 1 / u[0],
                m = 1 / u[1],
                v = 1 / u[2];
            if (h >= 0 ? (n = (d[0] - p[0]) * h, i = (f[0] - p[0]) * h) : (i = (d[0] - p[0]) * h, n = (f[0] - p[0]) * h), m >= 0 ? (r = (d[1] - p[1]) * m, s = (f[1] - p[1]) * m) : (s = (d[1] - p[1]) * m, r = (f[1] - p[1]) * m), n > s || r > i) return null;
            if ((r > n || n !== n) && (n = r), (s < i || i !== i) && (i = s), v >= 0 ? (c = (d[2] - p[2]) * v, l = (f[2] - p[2]) * v) : (l = (d[2] - p[2]) * v, c = (f[2] - p[2]) * v), n > l || c > i) return null;
            if ((c > n || n !== n) && (n = c), (l < i || i !== i) && (i = l), i < 0) return null;
            var g = n >= 0 ? n : i;
            return t || (t = new a.a), o.scaleAndAdd(t.array, p, u, g), t
        },
        intersectTriangle: function() {
            var e = o.create(),
                t = o.create(),
                n = o.create(),
                i = o.create();
            return function(r, s, c, l, u, p) {
                var d = this.direction.array,
                    f = this.origin.array;
                r = r.array, s = s.array, c = c.array, o.sub(e, s, r), o.sub(t, c, r), o.cross(i, t, d);
                var h = o.dot(e, i);
                if (l) {
                    if (h > -1e-5) return null
                } else if (h > -1e-5 && h < 1e-5) return null;
                o.sub(n, f, r);
                var m = o.dot(i, n) / h;
                if (m < 0 || m > 1) return null;
                o.cross(i, e, n);
                var v = o.dot(d, i) / h;
                if (v < 0 || v > 1 || m + v > 1) return null;
                o.cross(i, e, t);
                var g = -o.dot(n, i) / h;
                return g < 0 ? null : (u || (u = new a.a), p && a.a.set(p, 1 - m - v, m, v), o.scaleAndAdd(u.array, f, d, g), u)
            }
        }(),
        applyTransform: function(e) {
            a.a.add(this.direction, this.direction, this.origin), a.a.transformMat4(this.origin, this.origin, e), a.a.transformMat4(this.direction, this.direction, e), a.a.sub(this.direction, this.direction, this.origin), a.a.normalize(this.direction, this.direction)
        },
        copy: function(e) {
            a.a.copy(this.origin, e.origin), a.a.copy(this.direction, e.direction)
        },
        clone: function() {
            var e = new s;
            return e.copy(this), e
        }
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    var a = n(10),
        i = n(2),
        r = n(45),
        o = n(7);
    i.a.import(r.a);
    var s, c = ["diffuseMap", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "environmentMap", "brdfLookup", "ssaoMap", "aoMap"],
        l = ["color", "emission", "emissionIntensity", "alpha", "roughness", "metalness", "uvRepeat", "uvOffset", "aoIntensity", "alphaCutoff"],
        u = ["linear", "encodeRGBM", "decodeRGBM", "doubleSided", "alphaTest", "roughnessChannel", "metalnessChannel", "environmentMapPrefiltered"],
        p = {
            roughnessChannel: "ROUGHNESS_CHANNEL",
            metalnessChannel: "METALNESS_CHANNEL"
        },
        d = {
            linear: "SRGB_DECODE",
            encodeRGBM: "RGBM_ENCODE",
            decodeRGBM: "RGBM_DECODE",
            doubleSided: "DOUBLE_SIDED",
            alphaTest: "ALPHA_TEST",
            environmentMapPrefiltered: "ENVIRONMENTMAP_PREFILTER"
        },
        f = a.a.extend(function() {
            return s || (s = new i.a(i.a.source("clay.standard.vertex"), i.a.source("clay.standard.fragment"))), {
                shader: s
            }
        }, function(e) {
            o.a.extend(this, e), o.a.defaults(this, {
                color: [1, 1, 1],
                emission: [0, 0, 0],
                emissionIntensity: 0,
                roughness: .5,
                metalness: 0,
                alpha: 1,
                alphaTest: !1,
                alphaCutoff: .9,
                doubleSided: !1,
                uvRepeat: [1, 1],
                uvOffset: [0, 0],
                aoIntensity: 1,
                environmentMapPrefiltered: !1,
                linear: !1,
                encodeRGBM: !1,
                decodeRGBM: !1,
                roughnessChannel: 0,
                metalnessChannel: 1
            }), this.define("fragment", "USE_METALNESS"), this.define("fragment", "USE_ROUGHNESS")
        }, {
            clone: function() {
                var e = new f({
                    name: this.name
                });
                return c.forEach(function(t) {
                    this[t] && (e[t] = this[t])
                }, this), l.concat(u).forEach(function(t) {
                    e[t] = this[t]
                }, this), e
            }
        });
    l.forEach(function(e) {
        Object.defineProperty(f.prototype, e, {
            get: function() {
                return this.get(e)
            },
            set: function(t) {
                this.setUniform(e, t)
            }
        })
    }), c.forEach(function(e) {
        Object.defineProperty(f.prototype, e, {
            get: function() {
                return this.get(e)
            },
            set: function(t) {
                this.setUniform(e, t)
            }
        })
    }), u.forEach(function(e) {
        var t = "_" + e;
        Object.defineProperty(f.prototype, e, {
            get: function() {
                return this[t]
            },
            set: function(n) {
                if (this[t] = n, e in p) {
                    var a = p[e];
                    this.define("fragment", a, n)
                } else {
                    var a = d[e];
                    n ? this.define("fragment", a) : this.undefine("fragment", a)
                }
            }
        })
    }), Object.defineProperty(f.prototype, "environmentBox", {
        get: function() {
            var e = this._environmentBox;
            return e && (e.min.setArray(this.get("environmentBoxMin")), e.max.setArray(this.get("environmentBoxMax"))), e
        },
        set: function(e) {
            this._environmentBox = e;
            var t = this.uniforms = this.uniforms || {};
            t.environmentBoxMin = t.environmentBoxMin || {
                value: null
            }, t.environmentBoxMax = t.environmentBoxMax || {
                value: null
            }, e && (this.setUniform("environmentBoxMin", e.min.array), this.setUniform("environmentBoxMax", e.max.array)), e ? this.define("fragment", "PARALLAX_CORRECTED") : this.undefine("fragment", "PARALLAX_CORRECTED")
        }
    }), t.a = f
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.standard.chunk.varying\nvarying vec2 v_Texcoord;\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\nvarying vec3 v_Barycentric;\n#if defined(PARALLAXOCCLUSIONMAP_ENABLED) || defined(NORMALMAP_ENABLED)\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\n#endif\n#if defined(AOMAP_ENABLED)\nvarying vec2 v_Texcoord2;\n#endif\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n@end\n@export clay.standard.chunk.light_header\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT\n@import clay.header.ambient_cubemap_light\n#endif\n#ifdef POINT_LIGHT_COUNT\n@import clay.header.point_light\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n#ifdef SPOT_LIGHT_COUNT\n@import clay.header.spot_light\n#endif\n@end\n@export clay.standard.vertex\n#define SHADER_NAME standard\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;\nuniform mat4 world : WORLD;\nuniform vec2 uvRepeat : [1.0, 1.0];\nuniform vec2 uvOffset : [0.0, 0.0];\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\n#if defined(AOMAP_ENABLED)\nattribute vec2 texcoord2 : TEXCOORD_1;\n#endif\nattribute vec3 normal : NORMAL;\nattribute vec4 tangent : TANGENT;\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\n#endif\nattribute vec3 barycentric;\n@import clay.standard.chunk.varying\n@import clay.chunk.skinning_header\nvoid main()\n{\n vec3 skinnedPosition = position;\n vec3 skinnedNormal = normal;\n vec3 skinnedTangent = tangent.xyz;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n skinnedNormal = (skinMatrixWS * vec4(normal, 0.0)).xyz;\n skinnedTangent = (skinMatrixWS * vec4(tangent.xyz, 0.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0);\n v_Texcoord = texcoord * uvRepeat + uvOffset;\n v_WorldPosition = (world * vec4(skinnedPosition, 1.0)).xyz;\n v_Barycentric = barycentric;\n v_Normal = normalize((worldInverseTranspose * vec4(skinnedNormal, 0.0)).xyz);\n#if defined(PARALLAXOCCLUSIONMAP_ENABLED) || defined(NORMALMAP_ENABLED)\n v_Tangent = normalize((worldInverseTranspose * vec4(skinnedTangent, 0.0)).xyz);\n v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);\n#endif\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n#if defined(AOMAP_ENABLED)\n v_Texcoord2 = texcoord2;\n#endif\n}\n@end\n@export clay.standard.fragment\n#define PI 3.14159265358979\n#define GLOSSINESS_CHANNEL 0\n#define ROUGHNESS_CHANNEL 0\n#define METALNESS_CHANNEL 1\n@import clay.standard.chunk.varying\nuniform mat4 viewInverse : VIEWINVERSE;\n#ifdef NORMALMAP_ENABLED\nuniform sampler2D normalMap;\n#endif\n#ifdef DIFFUSEMAP_ENABLED\nuniform sampler2D diffuseMap;\n#endif\n#ifdef SPECULARMAP_ENABLED\nuniform sampler2D specularMap;\n#endif\n#ifdef USE_ROUGHNESS\nuniform float roughness : 0.5;\n #ifdef ROUGHNESSMAP_ENABLED\nuniform sampler2D roughnessMap;\n #endif\n#else\nuniform float glossiness: 0.5;\n #ifdef GLOSSINESSMAP_ENABLED\nuniform sampler2D glossinessMap;\n #endif\n#endif\n#ifdef METALNESSMAP_ENABLED\nuniform sampler2D metalnessMap;\n#endif\n#ifdef ENVIRONMENTMAP_ENABLED\nuniform samplerCube environmentMap;\n #ifdef PARALLAX_CORRECTED\nuniform vec3 environmentBoxMin;\nuniform vec3 environmentBoxMax;\n #endif\n#endif\n#ifdef BRDFLOOKUP_ENABLED\nuniform sampler2D brdfLookup;\n#endif\n#ifdef EMISSIVEMAP_ENABLED\nuniform sampler2D emissiveMap;\n#endif\n#ifdef SSAOMAP_ENABLED\nuniform sampler2D ssaoMap;\nuniform vec4 viewport : VIEWPORT;\n#endif\n#ifdef AOMAP_ENABLED\nuniform sampler2D aoMap;\nuniform float aoIntensity;\n#endif\nuniform vec3 color : [1.0, 1.0, 1.0];\nuniform float alpha : 1.0;\n#ifdef ALPHA_TEST\nuniform float alphaCutoff: 0.9;\n#endif\n#ifdef USE_METALNESS\nuniform float metalness : 0.0;\n#else\nuniform vec3 specularColor : [0.1, 0.1, 0.1];\n#endif\nuniform vec3 emission : [0.0, 0.0, 0.0];\nuniform float emissionIntensity: 1;\nuniform float lineWidth : 0.0;\nuniform vec4 lineColor : [0.0, 0.0, 0.0, 0.6];\n#ifdef ENVIRONMENTMAP_PREFILTER\nuniform float maxMipmapLevel: 5;\n#endif\n@import clay.standard.chunk.light_header\n@import clay.util.calculate_attenuation\n@import clay.util.edge_factor\n@import clay.util.rgbm\n@import clay.util.srgb\n@import clay.plugin.compute_shadow_map\n@import clay.util.parallax_correct\n@import clay.util.ACES\nfloat G_Smith(float g, float ndv, float ndl)\n{\n float roughness = 1.0 - g;\n float k = roughness * roughness / 2.0;\n float G1V = ndv / (ndv * (1.0 - k) + k);\n float G1L = ndl / (ndl * (1.0 - k) + k);\n return G1L * G1V;\n}\nvec3 F_Schlick(float ndv, vec3 spec) {\n return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);\n}\nfloat D_Phong(float g, float ndh) {\n float a = pow(8192.0, g);\n return (a + 2.0) / 8.0 * pow(ndh, a);\n}\nfloat D_GGX(float g, float ndh) {\n float r = 1.0 - g;\n float a = r * r;\n float tmp = ndh * ndh * (a - 1.0) + 1.0;\n return a / (PI * tmp * tmp);\n}\n#ifdef PARALLAXOCCLUSIONMAP_ENABLED\nuniform float parallaxOcclusionScale : 0.02;\nuniform float parallaxMaxLayers : 20;\nuniform float parallaxMinLayers : 5;\nuniform sampler2D parallaxOcclusionMap;\nmat3 transpose(in mat3 inMat)\n{\n vec3 i0 = inMat[0];\n vec3 i1 = inMat[1];\n vec3 i2 = inMat[2];\n return mat3(\n vec3(i0.x, i1.x, i2.x),\n vec3(i0.y, i1.y, i2.y),\n vec3(i0.z, i1.z, i2.z)\n );\n}\nvec2 parallaxUv(vec2 uv, vec3 viewDir)\n{\n float numLayers = mix(parallaxMaxLayers, parallaxMinLayers, abs(dot(vec3(0.0, 0.0, 1.0), viewDir)));\n float layerHeight = 1.0 / numLayers;\n float curLayerHeight = 0.0;\n vec2 deltaUv = viewDir.xy * parallaxOcclusionScale / (viewDir.z * numLayers);\n vec2 curUv = uv;\n float height = 1.0 - texture2D(parallaxOcclusionMap, curUv).r;\n for (int i = 0; i < 30; i++) {\n curLayerHeight += layerHeight;\n curUv -= deltaUv;\n height = 1.0 - texture2D(parallaxOcclusionMap, curUv).r;\n if (height < curLayerHeight) {\n break;\n }\n }\n vec2 prevUv = curUv + deltaUv;\n float next = height - curLayerHeight;\n float prev = 1.0 - texture2D(parallaxOcclusionMap, prevUv).r - curLayerHeight + layerHeight;\n return mix(curUv, prevUv, next / (next - prev));\n}\n#endif\nvoid main() {\n vec4 albedoColor = vec4(color, alpha);\n#ifdef VERTEX_COLOR\n albedoColor *= v_Color;\n#endif\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(eyePos - v_WorldPosition);\n vec2 uv = v_Texcoord;\n#if defined(PARALLAXOCCLUSIONMAP_ENABLED) || defined(NORMALMAP_ENABLED)\n mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);\n#endif\n#ifdef PARALLAXOCCLUSIONMAP_ENABLED\n uv = parallaxUv(v_Texcoord, normalize(transpose(tbn) * -V));\n#endif\n#ifdef DIFFUSEMAP_ENABLED\n vec4 texel = texture2D(diffuseMap, uv);\n #ifdef SRGB_DECODE\n texel = sRGBToLinear(texel);\n #endif\n albedoColor.rgb *= texel.rgb;\n #ifdef DIFFUSEMAP_ALPHA_ALPHA\n albedoColor.a *= texel.a;\n #endif\n#endif\n#ifdef USE_METALNESS\n float m = metalness;\n #ifdef METALNESSMAP_ENABLED\n float m2 = texture2D(metalnessMap, uv)[METALNESS_CHANNEL];\n m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);\n #endif\n vec3 baseColor = albedoColor.rgb;\n albedoColor.rgb = baseColor * (1.0 - m);\n vec3 spec = mix(vec3(0.04), baseColor, m);\n#else\n vec3 spec = specularColor;\n#endif\n#ifdef USE_ROUGHNESS\n float g = 1.0 - roughness;\n #ifdef ROUGHNESSMAP_ENABLED\n float g2 = 1.0 - texture2D(roughnessMap, uv)[ROUGHNESS_CHANNEL];\n g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);\n #endif\n#else\n float g = glossiness;\n #ifdef GLOSSINESSMAP_ENABLED\n float g2 = texture2D(glossinessMap, uv)[GLOSSINESS_CHANNEL];\n g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);\n #endif\n#endif\n#ifdef SPECULARMAP_ENABLED\n spec *= sRGBToLinear(texture2D(specularMap, uv)).rgb;\n#endif\n vec3 N = v_Normal;\n#ifdef DOUBLE_SIDED\n if (dot(N, V) < 0.0) {\n N = -N;\n }\n#endif\n#ifdef NORMALMAP_ENABLED\n if (dot(v_Tangent, v_Tangent) > 0.0) {\n vec3 normalTexel = texture2D(normalMap, uv).xyz;\n if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;\n tbn[1] = -tbn[1];\n N = normalize(tbn * N);\n }\n }\n#endif\n vec3 diffuseTerm = vec3(0.0, 0.0, 0.0);\n vec3 specularTerm = vec3(0.0, 0.0, 0.0);\n float ndv = clamp(dot(N, V), 0.0, 1.0);\n vec3 fresnelTerm = F_Schlick(ndv, spec);\n#ifdef AMBIENT_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)\n {{\n diffuseTerm += ambientLightColor[_idx_];\n }}\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n diffuseTerm += calcAmbientSHLight(_idx_, N) * ambientSHLightColor[_idx_];\n }}\n#endif\n#ifdef POINT_LIGHT_COUNT\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsPoint[POINT_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfPointLights(v_WorldPosition, shadowContribsPoint);\n }\n#endif\n for(int _idx_ = 0; _idx_ < POINT_LIGHT_COUNT; _idx_++)\n {{\n vec3 lightPosition = pointLightPosition[_idx_];\n vec3 lc = pointLightColor[_idx_];\n float range = pointLightRange[_idx_];\n vec3 L = lightPosition - v_WorldPosition;\n float dist = length(L);\n float attenuation = lightAttenuation(dist, range);\n L /= dist;\n vec3 H = normalize(L + V);\n float ndl = clamp(dot(N, L), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n float shadowContrib = 1.0;\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\n if(shadowEnabled)\n {\n shadowContrib = shadowContribsPoint[_idx_];\n }\n#endif\n vec3 li = lc * ndl * attenuation * shadowContrib;\n diffuseTerm += li;\n specularTerm += li * fresnelTerm * D_Phong(g, ndh);\n }}\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)\n {{\n vec3 L = -normalize(directionalLightDirection[_idx_]);\n vec3 lc = directionalLightColor[_idx_];\n vec3 H = normalize(L + V);\n float ndl = clamp(dot(N, L), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if(shadowEnabled)\n {\n shadowContrib = shadowContribsDir[_idx_];\n }\n#endif\n vec3 li = lc * ndl * shadowContrib;\n diffuseTerm += li;\n specularTerm += li * fresnelTerm * D_Phong(g, ndh);\n }}\n#endif\n#ifdef SPOT_LIGHT_COUNT\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsSpot[SPOT_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfSpotLights(v_WorldPosition, shadowContribsSpot);\n }\n#endif\n for(int i = 0; i < SPOT_LIGHT_COUNT; i++)\n {\n vec3 lightPosition = spotLightPosition[i];\n vec3 spotLightDirection = -normalize(spotLightDirection[i]);\n vec3 lc = spotLightColor[i];\n float range = spotLightRange[i];\n float a = spotLightUmbraAngleCosine[i];\n float b = spotLightPenumbraAngleCosine[i];\n float falloffFactor = spotLightFalloffFactor[i];\n vec3 L = lightPosition - v_WorldPosition;\n float dist = length(L);\n float attenuation = lightAttenuation(dist, range);\n L /= dist;\n float c = dot(spotLightDirection, L);\n float falloff;\n falloff = clamp((c - a) /(b - a), 0.0, 1.0);\n falloff = pow(falloff, falloffFactor);\n vec3 H = normalize(L + V);\n float ndl = clamp(dot(N, L), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n float shadowContrib = 1.0;\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\n if (shadowEnabled)\n {\n shadowContrib = shadowContribsSpot[i];\n }\n#endif\n vec3 li = lc * attenuation * (1.0 - falloff) * shadowContrib * ndl;\n diffuseTerm += li;\n specularTerm += li * fresnelTerm * D_Phong(g, ndh);\n }\n#endif\n vec4 outColor = albedoColor;\n outColor.rgb *= max(diffuseTerm, vec3(0.0));\n outColor.rgb += max(specularTerm, vec3(0.0));\n#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT\n vec3 L = reflect(-V, N);\n float rough2 = clamp(1.0 - g, 0.0, 1.0);\n float bias2 = rough2 * 5.0;\n vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;\n vec3 envWeight2 = spec * brdfParam2.x + brdfParam2.y;\n vec3 envTexel2;\n for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)\n {{\n envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);\n outColor.rgb += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2;\n }}\n#endif\n#ifdef ENVIRONMENTMAP_ENABLED\n vec3 envWeight = g * fresnelTerm;\n vec3 L = reflect(-V, N);\n #ifdef PARALLAX_CORRECTED\n L = parallaxCorrect(L, v_WorldPosition, environmentBoxMin, environmentBoxMax);\n#endif\n #ifdef ENVIRONMENTMAP_PREFILTER\n float rough = clamp(1.0 - g, 0.0, 1.0);\n float bias = rough * maxMipmapLevel;\n vec3 envTexel = decodeHDR(textureCubeLodEXT(environmentMap, L, bias)).rgb;\n #ifdef BRDFLOOKUP_ENABLED\n vec2 brdfParam = texture2D(brdfLookup, vec2(rough, ndv)).xy;\n envWeight = spec * brdfParam.x + brdfParam.y;\n #endif\n #else\n vec3 envTexel = textureCube(environmentMap, L).xyz;\n #endif\n outColor.rgb += envTexel * envWeight;\n#endif\n float aoFactor = 1.0;\n#ifdef SSAOMAP_ENABLED\n aoFactor = min(texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r, aoFactor);\n#endif\n#ifdef AOMAP_ENABLED\n aoFactor = min(1.0 - clamp((1.0 - texture2D(aoMap, v_Texcoord2).r) * aoIntensity, 0.0, 1.0), aoFactor);\n#endif\n outColor.rgb *= aoFactor;\n vec3 lEmission = emission;\n#ifdef EMISSIVEMAP_ENABLED\n lEmission *= texture2D(emissiveMap, uv).rgb;\n#endif\n outColor.rgb += lEmission * emissionIntensity;\n if(lineWidth > 0.)\n {\n outColor.rgb = mix(outColor.rgb, lineColor.rgb, (1.0 - edgeFactor(lineWidth)) * lineColor.a);\n }\n#ifdef ALPHA_TEST\n if (outColor.a < alphaCutoff) {\n discard;\n }\n#endif\n#ifdef TONEMAPPING\n outColor.rgb = ACESToneMapping(outColor.rgb);\n#endif\n#ifdef SRGB_ENCODE\n outColor = linearTosRGB(outColor);\n#endif\n gl_FragColor = encodeHDR(outColor);\n}\n@end\n@export clay.standardMR.vertex\n@import clay.standard.vertex\n@end\n@export clay.standardMR.fragment\n#define USE_METALNESS\n#define USE_ROUGHNESS\n@import clay.standard.fragment\n@end"
}, function(e, t, n) {
    "use strict";
    var a = n(14),
        i = n(6),
        r = a.a.extend({
            material: null,
            geometry: null,
            mode: i.a.TRIANGLES,
            _renderInfo: null
        }, {
            __program: null,
            lightGroup: 0,
            renderOrder: 0,
            culling: !0,
            cullFace: i.a.BACK,
            frontFace: i.a.CCW,
            frustumCulling: !0,
            receiveShadow: !0,
            castShadow: !0,
            ignorePicking: !1,
            ignorePreZ: !1,
            ignoreGBuffer: !1,
            isRenderable: function() {
                return this.geometry && this.material && this.material.shader && !this.invisible && this.geometry.vertexCount > 0
            },
            beforeRender: function(e) {},
            afterRender: function(e, t) {},
            getBoundingBox: function(e, t) {
                return t = a.a.prototype.getBoundingBox.call(this, e, t), this.geometry && this.geometry.boundingBox && t.union(this.geometry.boundingBox), t
            },
            clone: function() {
                var e = ["castShadow", "receiveShadow", "mode", "culling", "cullFace", "frontFace", "frustumCulling", "renderOrder", "lineWidth", "ignorePicking", "ignorePreZ", "ignoreGBuffer"];
                return function() {
                    var t = a.a.prototype.clone.call(this);
                    t.geometry = this.geometry, t.material = this.material;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        t[i] !== this[i] && (t[i] = this[i])
                    }
                    return t
                }
            }()
        });
    r.POINTS = i.a.POINTS, r.LINES = i.a.LINES, r.LINE_LOOP = i.a.LINE_LOOP, r.LINE_STRIP = i.a.LINE_STRIP, r.TRIANGLES = i.a.TRIANGLES, r.TRIANGLE_STRIP = i.a.TRIANGLE_STRIP, r.TRIANGLE_FAN = i.a.TRIANGLE_FAN, r.BACK = i.a.BACK, r.FRONT = i.a.FRONT, r.FRONT_AND_BACK = i.a.FRONT_AND_BACK, r.CW = i.a.CW, r.CCW = i.a.CCW, t.a = r
}, function(e, t, n) {
    "use strict";
    var a = {};
    a.isPowerOfTwo = function(e) {
        return 0 == (e & e - 1)
    }, a.nextPowerOfTwo = function(e) {
        return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e
    }, a.nearestPowerOfTwo = function(e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }, t.a = a
}, function(e, t, n) {
    "use strict";

    function a() {
        this._pool = {}
    }

    function i(e, t, n) {
        o[e] = {
            vertex: t,
            fragment: n
        }
    }
    var r = n(2),
        o = {};
    a.prototype.get = function(e) {
        var t = e;
        if (this._pool[t]) return this._pool[t];
        var n = o[e];
        if (!n) return void console.error('Shader "' + e + '" is not in the library');
        var a = new r.a(n.vertex, n.fragment);
        return this._pool[t] = a, a
    }, a.prototype.clear = function() {
        this._pool = {}
    };
    var s = new a;
    t.a = {
        createLibrary: function() {
            return new a
        },
        get: function() {
            return s.get.apply(s, arguments)
        },
        template: i,
        clear: function() {
            return s.clear()
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = a.a.extend({
            name: "",
            index: -1,
            node: null
        });
    t.a = i
}, function(e, t, n) {
    "use strict";

    function a() {}
    var i = n(51),
        r = function(e) {
            e = e || {}, this.name = e.name || "", this.target = e.target, this.life = e.life || 1e3, this.delay = e.delay || 0, this.gap = e.gap || 0, this.playbackRate = e.playbackRate || 1, this._initialized = !1, this._elapsedTime = 0, this._loop = null != e.loop && e.loop, this.setLoop(this._loop), null != e.easing && this.setEasing(e.easing), this.onframe = e.onframe || a, this.onfinish = e.onfinish || a, this.onrestart = e.onrestart || a, this._paused = !1
        };
    r.prototype = {
        gap: 0,
        life: 0,
        delay: 0,
        setLoop: function(e) {
            this._loop = e, e && (this._loopRemained = "number" == typeof e ? e : 1 / 0)
        },
        setEasing: function(e) {
            "string" == typeof e && (e = i.a[e]), this.easing = e
        },
        step: function(e, t, n) {
            if (this._initialized || (this._startTime = e + this.delay, this._initialized = !0), null != this._currentTime && (t = e - this._currentTime), this._currentTime = e, this._paused) return "paused";
            if (!(e < this._startTime)) {
                this._elapse(e, t);
                var a = Math.min(this._elapsedTime / this.life, 1);
                if (!(a < 0)) {
                    var i;
                    return i = this.easing ? this.easing(a) : a, n || this.fire("frame", i), 1 === a ? this._loop && this._loopRemained > 0 ? (this._restartInLoop(e), this._loopRemained--, "restart") : (this._needsRemove = !0, "finish") : null
                }
            }
        },
        setTime: function(e) {
            return this.step(e + this._startTime)
        },
        restart: function(e) {
            var t = 0;
            e && (this._elapse(e), t = this._elapsedTime % this.life), e = e || Date.now(), this._startTime = e - t + this.delay, this._elapsedTime = 0, this._needsRemove = !1, this._paused = !1
        },
        getElapsedTime: function() {
            return this._elapsedTime
        },
        _restartInLoop: function(e) {
            this._startTime = e + this.gap, this._elapsedTime = 0
        },
        _elapse: function(e, t) {
            this._elapsedTime += t * this.playbackRate
        },
        fire: function(e, t) {
            var n = "on" + e;
            this[n] && this[n](this.target, t)
        },
        clone: function() {
            var e = new this.constructor;
            return e.name = this.name, e._loop = this._loop, e._loopRemained = this._loopRemained, e.life = this.life, e.gap = this.gap, e.delay = this.delay, e
        },
        pause: function() {
            this._paused = !0
        },
        resume: function() {
            this._paused = !1
        }
    }, r.prototype.constructor = r, t.a = r
}, function(e, t, n) {
    "use strict";
    var a = {
        linear: function(e) {
            return e
        },
        quadraticIn: function(e) {
            return e * e
        },
        quadraticOut: function(e) {
            return e * (2 - e)
        },
        quadraticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        },
        cubicIn: function(e) {
            return e * e * e
        },
        cubicOut: function(e) {
            return --e * e * e + 1
        },
        cubicInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        quarticIn: function(e) {
            return e * e * e * e
        },
        quarticOut: function(e) {
            return 1 - --e * e * e * e
        },
        quarticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        },
        quinticIn: function(e) {
            return e * e * e * e * e
        },
        quinticOut: function(e) {
            return --e * e * e * e * e + 1
        },
        quinticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        sinusoidalIn: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        sinusoidalOut: function(e) {
            return Math.sin(e * Math.PI / 2)
        },
        sinusoidalInOut: function(e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        },
        exponentialIn: function(e) {
            return 0 === e ? 0 : Math.pow(1024, e - 1)
        },
        exponentialOut: function(e) {
            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
        },
        exponentialInOut: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        circularIn: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        circularOut: function(e) {
            return Math.sqrt(1 - --e * e)
        },
        circularInOut: function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        elasticIn: function(e) {
            var t, n = .1;
            return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
        },
        elasticOut: function(e) {
            var t, n = .1;
            return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
        },
        elasticInOut: function(e) {
            var t, n = .1;
            return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
        },
        backIn: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        backOut: function(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        },
        backInOut: function(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        },
        bounceIn: function(e) {
            return 1 - a.bounceOut(1 - e)
        },
        bounceOut: function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        bounceInOut: function(e) {
            return e < .5 ? .5 * a.bounceIn(2 * e) : .5 * a.bounceOut(2 * e - 1) + .5
        }
    };
    t.a = a
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.skybox.vertex\n#define SHADER_NAME skybox\nuniform mat4 world : WORLD;\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\nvarying vec3 v_WorldPosition;\nvoid main()\n{\n v_WorldPosition = (world * vec4(position, 1.0)).xyz;\n gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n@end\n@export clay.skybox.fragment\nuniform mat4 viewInverse : VIEWINVERSE;\nuniform samplerCube environmentMap;\nuniform float lod: 0.0;\nvarying vec3 v_WorldPosition;\n@import clay.util.rgbm\n@import clay.util.srgb\n@import clay.util.ACES\nvoid main()\n{\n vec3 eyePos = viewInverse[3].xyz;\n vec3 viewDirection = normalize(v_WorldPosition - eyePos);\n#ifdef LOD\n vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, viewDirection, lod));\n#else\n vec4 texel = decodeHDR(textureCube(environmentMap, viewDirection));\n#endif\n#ifdef SRGB_DECODE\n texel = sRGBToLinear(texel);\n#endif\n#ifdef TONEMAPPING\n texel.rgb = ACESToneMapping(texel.rgb);\n#endif\n#ifdef SRGB_ENCODE\n texel = linearTosRGB(texel);\n#endif\n gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));\n}\n@end"
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = new s;
        return r.a.get({
            url: e,
            responseType: t,
            onload: function(e) {
                n.resolve(e)
            },
            onerror: function(e) {
                n.reject(e)
            }
        }), n
    }
    var i = n(20),
        r = n(29),
        o = n(7),
        s = function() {
            this._fullfilled = !1, this._rejected = !1
        };
    s.prototype.resolve = function(e) {
        this._fullfilled = !0, this._rejected = !1, this.trigger("success", e)
    }, s.prototype.reject = function(e) {
        this._rejected = !0, this._fullfilled = !1, this.trigger("error", e)
    }, s.prototype.isFullfilled = function() {
        return this._fullfilled
    }, s.prototype.isRejected = function() {
        return this._rejected
    }, s.prototype.isSettled = function() {
        return this._fullfilled || this._rejected
    }, o.a.extend(s.prototype, i.a), s.makeRequestTask = function(e, t) {
        if ("string" == typeof e) return a(e, t);
        if (e.url) {
            var n = e;
            return a(n.url, n.responseType)
        }
        if (Array.isArray(e)) {
            var i = e,
                r = [];
            return i.forEach(function(e) {
                var t, n;
                "string" == typeof e ? t = e : Object(e) === e && (t = e.url, n = e.responseType), r.push(a(t, n))
            }), r
        }
    }, s.makeTask = function() {
        return new s
    }, o.a.extend(s.prototype, i.a), t.a = s
}, function(e, t, n) {
    "use strict";

    function a(e) {
        c.a.defaultsWithPropList(e, u, p), i(e);
        for (var t = "", n = 0; n < p.length; n++) {
            t += e[p[n]].toString()
        }
        return t
    }

    function i(e) {
        var t = r(e.width, e.height);
        e.format === s.a.DEPTH_COMPONENT && (e.useMipmap = !1), t && e.useMipmap || (e.minFilter == s.a.NEAREST_MIPMAP_NEAREST || e.minFilter == s.a.NEAREST_MIPMAP_LINEAR ? e.minFilter = s.a.NEAREST : e.minFilter != s.a.LINEAR_MIPMAP_LINEAR && e.minFilter != s.a.LINEAR_MIPMAP_NEAREST || (e.minFilter = s.a.LINEAR)), t || (e.wrapS = s.a.CLAMP_TO_EDGE, e.wrapT = s.a.CLAMP_TO_EDGE)
    }

    function r(e, t) {
        return 0 == (e & e - 1) && 0 == (t & t - 1)
    }
    var o = n(5),
        s = n(6),
        c = n(7),
        l = function() {
            this._pool = {}, this._allocatedTextures = []
        };
    l.prototype = {
        constructor: l,
        get: function(e) {
            var t = a(e);
            this._pool.hasOwnProperty(t) || (this._pool[t] = []);
            var n = this._pool[t];
            if (!n.length) {
                var i = new o.a(e);
                return this._allocatedTextures.push(i), i
            }
            return n.pop()
        },
        put: function(e) {
            var t = a(e);
            this._pool.hasOwnProperty(t) || (this._pool[t] = []), this._pool[t].push(e)
        },
        clear: function(e) {
            for (var t = 0; t < this._allocatedTextures.length; t++) this._allocatedTextures[t].dispose(e);
            this._pool = {}, this._allocatedTextures = []
        }
    };
    var u = {
            width: 512,
            height: 512,
            type: s.a.UNSIGNED_BYTE,
            format: s.a.RGBA,
            wrapS: s.a.CLAMP_TO_EDGE,
            wrapT: s.a.CLAMP_TO_EDGE,
            minFilter: s.a.LINEAR_MIPMAP_LINEAR,
            magFilter: s.a.LINEAR,
            useMipmap: !0,
            anisotropic: 1,
            flipY: !0,
            unpackAlignment: 4,
            premultiplyAlpha: !1
        },
        p = Object.keys(u);
    t.a = l
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.kernel.gaussian_9\nfloat gaussianKernel[9];\ngaussianKernel[0] = 0.07;\ngaussianKernel[1] = 0.09;\ngaussianKernel[2] = 0.12;\ngaussianKernel[3] = 0.14;\ngaussianKernel[4] = 0.16;\ngaussianKernel[5] = 0.14;\ngaussianKernel[6] = 0.12;\ngaussianKernel[7] = 0.09;\ngaussianKernel[8] = 0.07;\n@end\n@export clay.compositor.kernel.gaussian_13\nfloat gaussianKernel[13];\ngaussianKernel[0] = 0.02;\ngaussianKernel[1] = 0.03;\ngaussianKernel[2] = 0.06;\ngaussianKernel[3] = 0.08;\ngaussianKernel[4] = 0.11;\ngaussianKernel[5] = 0.13;\ngaussianKernel[6] = 0.14;\ngaussianKernel[7] = 0.13;\ngaussianKernel[8] = 0.11;\ngaussianKernel[9] = 0.08;\ngaussianKernel[10] = 0.06;\ngaussianKernel[11] = 0.03;\ngaussianKernel[12] = 0.02;\n@end\n@export clay.compositor.gaussian_blur\n#define SHADER_NAME gaussian_blur\nuniform sampler2D texture;varying vec2 v_Texcoord;\nuniform float blurSize : 2.0;\nuniform vec2 textureSize : [512.0, 512.0];\nuniform float blurDir : 0.0;\n@import clay.util.rgbm\n@import clay.util.clamp_sample\nvoid main (void)\n{\n @import clay.compositor.kernel.gaussian_9\n vec2 off = blurSize / textureSize;\n off *= vec2(1.0 - blurDir, blurDir);\n vec4 sum = vec4(0.0);\n float weightAll = 0.0;\n for (int i = 0; i < 9; i++) {\n float w = gaussianKernel[i];\n vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));\n sum += texel * w;\n weightAll += w;\n }\n gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));\n}\n@end\n"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.output\n#define OUTPUT_ALPHA\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));\n gl_FragColor.rgb = tex.rgb;\n#ifdef OUTPUT_ALPHA\n gl_FragColor.a = tex.a;\n#else\n gl_FragColor.a = 1.0;\n#endif\n gl_FragColor = encodeHDR(gl_FragColor);\n#ifdef PREMULTIPLY_ALPHA\n gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.bright\nuniform sampler2D texture;\nuniform float threshold : 1;\nuniform float scale : 1.0;\nuniform vec2 textureSize: [512, 512];\nvarying vec2 v_Texcoord;\nconst vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);\n@import clay.util.rgbm\nvec4 median(vec4 a, vec4 b, vec4 c)\n{\n return a + b + c - min(min(a, b), c) - max(max(a, b), c);\n}\nvoid main()\n{\n vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));\n#ifdef ANTI_FLICKER\n vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);\n vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));\n vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));\n vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));\n vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));\n texel = median(median(texel, s1, s2), s3, s4);\n#endif\n float lum = dot(texel.rgb , lumWeight);\n vec4 color;\n if (lum > threshold && texel.a > 0.0)\n {\n color = vec4(texel.rgb * scale, texel.a * scale);\n }\n else\n {\n color = vec4(0.0);\n }\n gl_FragColor = encodeHDR(color);\n}\n@end\n"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.downsample\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nfloat brightness(vec3 c)\n{\n return max(max(c.r, c.g), c.b);\n}\n@import clay.util.clamp_sample\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n#ifdef ANTI_FLICKER\n vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;\n vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;\n vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;\n vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;\n float s1w = 1.0 / (brightness(s1) + 1.0);\n float s2w = 1.0 / (brightness(s2) + 1.0);\n float s3w = 1.0 / (brightness(s3) + 1.0);\n float s4w = 1.0 / (brightness(s4) + 1.0);\n float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);\n vec4 color = vec4(\n (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,\n 1.0\n );\n#else\n vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));\n color *= 0.25;\n#endif\n gl_FragColor = encodeHDR(color);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.compositor.upsample\n#define HIGH_QUALITY\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nuniform float sampleScale: 0.5;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.clamp_sample\nvoid main()\n{\n#ifdef HIGH_QUALITY\n vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;\n vec4 s;\n s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));\n s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n gl_FragColor = encodeHDR(s / 16.0);\n#else\n vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;\n vec4 s;\n s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));\n gl_FragColor = encodeHDR(s / 4.0);\n#endif\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.hdr.composite\nuniform sampler2D texture;\n#ifdef BLOOM_ENABLED\nuniform sampler2D bloom;\n#endif\n#ifdef LENSFLARE_ENABLED\nuniform sampler2D lensflare;\nuniform sampler2D lensdirt;\n#endif\n#ifdef LUM_ENABLED\nuniform sampler2D lum;\n#endif\n#ifdef LUT_ENABLED\nuniform sampler2D lut;\n#endif\n#ifdef COLOR_CORRECTION\nuniform float brightness : 0.0;\nuniform float contrast : 1.0;\nuniform float saturation : 1.0;\n#endif\n#ifdef VIGNETTE\nuniform float vignetteDarkness: 1.0;\nuniform float vignetteOffset: 1.0;\n#endif\nuniform float exposure : 1.0;\nuniform float bloomIntensity : 0.25;\nuniform float lensflareIntensity : 1;\nvarying vec2 v_Texcoord;\n@import clay.util.srgb\nvec3 ACESToneMapping(vec3 color)\n{\n const float A = 2.51;\n const float B = 0.03;\n const float C = 2.43;\n const float D = 0.59;\n const float E = 0.14;\n return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nfloat eyeAdaption(float fLum)\n{\n return mix(0.2, fLum, 0.5);\n}\n#ifdef LUT_ENABLED\nvec3 lutTransform(vec3 color) {\n float blueColor = color.b * 63.0;\n vec2 quad1;\n quad1.y = floor(floor(blueColor) / 8.0);\n quad1.x = floor(blueColor) - (quad1.y * 8.0);\n vec2 quad2;\n quad2.y = floor(ceil(blueColor) / 8.0);\n quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n vec2 texPos1;\n texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);\n texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);\n vec2 texPos2;\n texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);\n texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);\n vec4 newColor1 = texture2D(lut, texPos1);\n vec4 newColor2 = texture2D(lut, texPos2);\n vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n return newColor.rgb;\n}\n#endif\n@import clay.util.rgbm\nvoid main()\n{\n vec4 texel = vec4(0.0);\n vec4 originalTexel = vec4(0.0);\n#ifdef TEXTURE_ENABLED\n texel = decodeHDR(texture2D(texture, v_Texcoord));\n originalTexel = texel;\n#endif\n#ifdef BLOOM_ENABLED\n vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));\n texel.rgb += bloomTexel.rgb * bloomIntensity;\n texel.a += bloomTexel.a * bloomIntensity;\n#endif\n#ifdef LENSFLARE_ENABLED\n texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;\n#endif\n texel.a = min(texel.a, 1.0);\n#ifdef LUM_ENABLED\n float fLum = texture2D(lum, vec2(0.5, 0.5)).r;\n float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));\n float exposureBias = adaptedLumDest * exposure;\n#else\n float exposureBias = exposure;\n#endif\n texel.rgb *= exposureBias;\n texel.rgb = ACESToneMapping(texel.rgb);\n texel = linearTosRGB(texel);\n#ifdef LUT_ENABLED\n texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));\n#endif\n#ifdef COLOR_CORRECTION\n texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);\n texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);\n float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));\n texel.rgb = mix(vec3(lum), texel.rgb, saturation);\n#endif\n#ifdef VIGNETTE\n vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);\n texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));\n#endif\n gl_FragColor = encodeHDR(texel);\n#ifdef DEBUG\n #if DEBUG == 1\n gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));\n #elif DEBUG == 2\n gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);\n #elif DEBUG == 3\n gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));\n #endif\n#endif\n if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {\n gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));\n }\n#ifdef PREMULTIPLY_ALPHA\n gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.blend\n#define SHADER_NAME blend\n#ifdef TEXTURE1_ENABLED\nuniform sampler2D texture1;\nuniform float weight1 : 1.0;\n#endif\n#ifdef TEXTURE2_ENABLED\nuniform sampler2D texture2;\nuniform float weight2 : 1.0;\n#endif\n#ifdef TEXTURE3_ENABLED\nuniform sampler2D texture3;\nuniform float weight3 : 1.0;\n#endif\n#ifdef TEXTURE4_ENABLED\nuniform sampler2D texture4;\nuniform float weight4 : 1.0;\n#endif\n#ifdef TEXTURE5_ENABLED\nuniform sampler2D texture5;\nuniform float weight5 : 1.0;\n#endif\n#ifdef TEXTURE6_ENABLED\nuniform sampler2D texture6;\nuniform float weight6 : 1.0;\n#endif\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = vec4(0.0);\n#ifdef TEXTURE1_ENABLED\n tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;\n#endif\n#ifdef TEXTURE2_ENABLED\n tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;\n#endif\n#ifdef TEXTURE3_ENABLED\n tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;\n#endif\n#ifdef TEXTURE4_ENABLED\n tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;\n#endif\n#ifdef TEXTURE5_ENABLED\n tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;\n#endif\n#ifdef TEXTURE6_ENABLED\n tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;\n#endif\n gl_FragColor = encodeHDR(tex);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.fxaa\nuniform sampler2D texture;\nuniform vec4 viewport : VIEWPORT;\nvarying vec2 v_Texcoord;\n#define FXAA_REDUCE_MIN (1.0/128.0)\n#define FXAA_REDUCE_MUL (1.0/8.0)\n#define FXAA_SPAN_MAX 8.0\n@import clay.util.rgbm\nvoid main()\n{\n vec2 resolution = 1.0 / viewport.zw;\n vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;\n vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;\n vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;\n vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;\n vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );\n vec3 rgbM = rgbaM.xyz;\n float opacity = rgbaM.w;\n vec3 luma = vec3( 0.299, 0.587, 0.114 );\n float lumaNW = dot( rgbNW, luma );\n float lumaNE = dot( rgbNE, luma );\n float lumaSW = dot( rgbSW, luma );\n float lumaSE = dot( rgbSE, luma );\n float lumaM = dot( rgbM, luma );\n float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );\n float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );\n vec2 dir;\n dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );\n float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\n dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n dir * rcpDirMin)) * resolution;\n vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;\n rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;\n rgbA *= 0.5;\n vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;\n rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;\n rgbB *= 0.25;\n rgbB += rgbA * 0.5;\n float lumaB = dot( rgbB, luma );\n if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )\n {\n gl_FragColor = vec4( rgbA, opacity );\n }\n else {\n gl_FragColor = vec4( rgbB, opacity );\n }\n}\n@end"
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        i = n(15),
        r = n(3),
        o = n(11),
        s = n(13),
        c = n(10),
        l = n(2),
        u = n(35),
        p = n(17),
        d = n(33),
        f = n(12),
        h = n(32),
        m = n(119),
        v = n(120),
        g = {},
        x = ["px", "nx", "py", "ny", "pz", "nz"];
    g.prefilterEnvironmentMap = function(e, t, n, s, m) {
        m && s || (s = g.generateNormalDistribution(), m = g.integrateBRDF(e, s)), n = n || {};
        var _ = n.width || 64,
            y = n.height || 64,
            b = n.type || t.type,
            T = new i.a({
                width: _,
                height: y,
                type: b,
                flipY: !1,
                mipmaps: []
            });
        T.isPowerOfTwo() || console.warn("Width and height must be power of two to enable mipmap.");
        var E = Math.min(_, y),
            w = Math.log(E) / Math.log(2) + 1,
            A = new c.a({
                shader: new l.a({
                    vertex: l.a.source("clay.skybox.vertex"),
                    fragment: v.a
                })
            });
        A.set("normalDistribution", s), n.encodeRGBM && A.define("fragment", "RGBM_ENCODE"), n.decodeRGBM && A.define("fragment", "RGBM_DECODE");
        var S, C = new p.a;
        if ("texture2D" === t.textureType) {
            var R = new i.a({
                width: _,
                height: y,
                type: b === r.a.FLOAT ? r.a.HALF_FLOAT : b
            });
            h.a.panoramaToCubeMap(e, t, R, {
                encodeRGBM: n.decodeRGBM
            }), t = R
        }
        S = new u.a({
            scene: C,
            material: A
        }), S.material.set("environmentMap", t);
        var M = new d.a({
            texture: T
        });
        n.encodeRGBM && (b = T.type = r.a.UNSIGNED_BYTE);
        for (var N = new a.a({
                width: _,
                height: y,
                type: b
            }), L = new o.a({
                depthBuffer: !1
            }), O = f.a[b === r.a.UNSIGNED_BYTE ? "Uint8Array" : "Float32Array"], P = 0; P < w; P++) {
            T.mipmaps[P] = {
                pixels: {}
            }, S.material.set("roughness", P / (x.length - 1));
            var D = N.width * N.height;
            N.width >= 32 && (D /= 4), S.material.set("maxSampleNumber", Math.min(D, 1024));
            for (var I = N.width, F = 2 * Math.atan(I / (I - .5)) / Math.PI * 180, k = 0; k < x.length; k++) {
                var B = new O(N.width * N.height * 4);
                L.attach(N), L.bind(e);
                var U = M.getCamera(x[k]);
                U.fov = F, e.render(C, U), e.gl.readPixels(0, 0, N.width, N.height, r.a.RGBA, b, B), L.unbind(e), T.mipmaps[P].pixels[x[k]] = B
            }
            N.width /= 2, N.height /= 2, N.dirty()
        }
        return L.dispose(e), N.dispose(e), S.dispose(e), s.dispose(e), {
            environmentMap: T,
            brdfLookup: m,
            normalDistribution: s,
            maxMipmapLevel: w
        }
    }, g.integrateBRDF = function(e, t) {
        t = t || g.generateNormalDistribution();
        var n = new o.a({
                depthBuffer: !1
            }),
            i = new s.a({
                fragment: m.a
            }),
            c = new a.a({
                width: 512,
                height: 256,
                type: r.a.HALF_FLOAT,
                wrapS: r.a.CLAMP_TO_EDGE,
                wrapT: r.a.CLAMP_TO_EDGE,
                minFilter: r.a.NEAREST,
                magFilter: r.a.NEAREST,
                useMipmap: !1
            });
        return i.setUniform("normalDistribution", t), i.setUniform("viewportSize", [512, 256]), i.attachOutput(c), i.render(e, n), n.dispose(e), c
    }, g.generateNormalDistribution = function(e, t) {
        for (var e = e || 256, t = t || 1024, n = new a.a({
                width: e,
                height: t,
                type: r.a.FLOAT,
                minFilter: r.a.NEAREST,
                magFilter: r.a.NEAREST,
                wrapS: r.a.CLAMP_TO_EDGE,
                wrapT: r.a.CLAMP_TO_EDGE,
                useMipmap: !1
            }), i = new Float32Array(t * e * 4), o = [], s = 0; s < e; s++) {
            for (var c = s / e, l = c * c, u = 0; u < t; u++) {
                var p = (u << 16 | u >>> 16) >>> 0;
                p = ((1431655765 & p) << 1 | (2863311530 & p) >>> 1) >>> 0, p = ((858993459 & p) << 2 | (3435973836 & p) >>> 2) >>> 0, p = ((252645135 & p) << 4 | (4042322160 & p) >>> 4) >>> 0, p = (((16711935 & p) << 8 | (4278255360 & p) >>> 8) >>> 0) / 4294967296;
                var d = Math.sqrt((1 - p) / (1 + (l * l - 1) * p));
                o[u] = d
            }
            for (var u = 0; u < t; u++) {
                var f = 4 * (u * e + s),
                    d = o[u],
                    h = Math.sqrt(1 - d * d),
                    m = u / t,
                    v = 2 * Math.PI * m;
                i[f] = h * Math.cos(v), i[f + 1] = d, i[f + 2] = h * Math.sin(v), i[f + 3] = 1
            }
        }
        return n.pixels = i, n
    }, t.a = g
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.deferred.gbuffer.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;\nuniform mat4 world : WORLD;\nuniform vec2 uvRepeat;\nuniform vec2 uvOffset;\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\n#ifdef FIRST_PASS\nattribute vec3 normal : NORMAL;\n#endif\n@import clay.chunk.skinning_header\n#ifdef FIRST_PASS\nvarying vec3 v_Normal;\nattribute vec4 tangent : TANGENT;\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\nvarying vec3 v_WorldPosition;\n#endif\nvarying vec2 v_Texcoord;\nvoid main()\n{\n vec3 skinnedPosition = position;\n#ifdef FIRST_PASS\n vec3 skinnedNormal = normal;\n vec3 skinnedTangent = tangent.xyz;\n bool hasTangent = dot(tangent, tangent) > 0.0;\n#endif\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n #ifdef FIRST_PASS\n skinnedNormal = (skinMatrixWS * vec4(normal, 0.0)).xyz;\n if (hasTangent) {\n skinnedTangent = (skinMatrixWS * vec4(tangent.xyz, 0.0)).xyz;\n }\n #endif\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0);\n v_Texcoord = texcoord * uvRepeat + uvOffset;\n#ifdef FIRST_PASS\n v_Normal = normalize((worldInverseTranspose * vec4(skinnedNormal, 0.0)).xyz);\n if (hasTangent) {\n v_Tangent = normalize((worldInverseTranspose * vec4(skinnedTangent, 0.0)).xyz);\n v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);\n }\n v_WorldPosition = (world * vec4(skinnedPosition, 1.0)).xyz;\n#endif\n}\n@end\n@export clay.deferred.gbuffer1.fragment\nuniform mat4 viewInverse : VIEWINVERSE;\nuniform float glossiness;\nvarying vec2 v_Texcoord;\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\nuniform sampler2D normalMap;\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\nuniform sampler2D roughGlossMap;\nuniform bool useRoughGlossMap;\nuniform bool useRoughness;\nuniform bool doubleSided;\nuniform int roughGlossChannel: 0;\nfloat indexingTexel(in vec4 texel, in int idx) {\n if (idx == 3) return texel.a;\n else if (idx == 1) return texel.g;\n else if (idx == 2) return texel.b;\n else return texel.r;\n}\nvoid main()\n{\n vec3 N = v_Normal;\n if (doubleSided) {\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = eyePos - v_WorldPosition;\n if (dot(N, V) < 0.0) {\n N = -N;\n }\n }\n if (dot(v_Tangent, v_Tangent) > 0.0) {\n vec3 normalTexel = texture2D(normalMap, v_Texcoord).xyz;\n if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;\n mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);\n N = normalize(tbn * N);\n }\n }\n gl_FragColor.rgb = (N + 1.0) * 0.5;\n float g = glossiness;\n if (useRoughGlossMap) {\n float g2 = indexingTexel(texture2D(roughGlossMap, v_Texcoord), roughGlossChannel);\n if (useRoughness) {\n g2 = 1.0 - g2;\n }\n g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);\n }\n gl_FragColor.a = g + 0.005;\n}\n@end\n@export clay.deferred.gbuffer2.fragment\nuniform sampler2D diffuseMap;\nuniform sampler2D metalnessMap;\nuniform vec3 color;\nuniform float metalness;\nuniform bool useMetalnessMap;\nuniform bool linear;\nvarying vec2 v_Texcoord;\n@import clay.util.srgb\nvoid main ()\n{\n float m = metalness;\n if (useMetalnessMap) {\n vec4 metalnessTexel = texture2D(metalnessMap, v_Texcoord);\n m = clamp(metalnessTexel.r + (m * 2.0 - 1.0), 0.0, 1.0);\n }\n vec4 texel = texture2D(diffuseMap, v_Texcoord);\n if (linear) {\n texel = sRGBToLinear(texel);\n }\n gl_FragColor.rgb = texel.rgb * color;\n gl_FragColor.a = m + 0.005;\n}\n@end\n@export clay.deferred.gbuffer.debug\n@import clay.deferred.chunk.light_head\nuniform int debug: 0;\nvoid main ()\n{\n @import clay.deferred.chunk.gbuffer_read\n if (debug == 0) {\n gl_FragColor = vec4(N, 1.0);\n }\n else if (debug == 1) {\n gl_FragColor = vec4(vec3(z), 1.0);\n }\n else if (debug == 2) {\n gl_FragColor = vec4(position, 1.0);\n }\n else if (debug == 3) {\n gl_FragColor = vec4(vec3(glossiness), 1.0);\n }\n else if (debug == 4) {\n gl_FragColor = vec4(vec3(metalness), 1.0);\n }\n else {\n gl_FragColor = vec4(albedo, 1.0);\n }\n}\n@end"
}, function(e, t, n) {
    "use strict";
    var a = function() {
            this.head = null, this.tail = null, this._len = 0
        },
        i = a.prototype;
    i.insert = function(e) {
        var t = new r(e);
        return this.insertEntry(t), t
    }, i.insertEntry = function(e) {
        this.head ? (this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e) : this.head = this.tail = e, this._len++
    }, i.remove = function(e) {
        var t = e.prev,
            n = e.next;
        t ? t.next = n : this.head = n, n ? n.prev = t : this.tail = t, e.next = e.prev = null, this._len--
    }, i.len = function() {
        return this._len
    }, i.clear = function() {
        this.head = this.tail = null, this._len = 0
    };
    var r = function(e) {
            this.value = e, this.next, this.prev
        },
        o = function(e) {
            this._list = new a, this._map = {}, this._maxSize = e || 10, this._lastRemovedEntry = null
        },
        s = o.prototype;
    s.put = function(e, t) {
        var n = this._list,
            a = this._map,
            i = null;
        if (null == a[e]) {
            var o = n.len(),
                s = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
                var c = n.head;
                n.remove(c), delete a[c.key], i = c.value, this._lastRemovedEntry = c
            }
            s ? s.value = t : s = new r(t), s.key = e, n.insertEntry(s), a[e] = s
        }
        return i
    }, s.get = function(e) {
        var t = this._map[e],
            n = this._list;
        if (null != t) return t !== n.tail && (n.remove(t), n.insertEntry(t)), t.value
    }, s.clear = function() {
        this._list.clear(), this._map = {}
    }, t.a = o
}, function(e, t, n) {
    "use strict";

    function a() {
        ["mainLight", "secondaryLight", "tertiaryLight"].forEach(function(e) {
            j[e].alpha = 90 * j[e].$padAngle[1], j[e].beta = 180 * j[e].$padAngle[0]
        }), A.setMainLight(j.mainLight), A.setSecondaryLight(j.secondaryLight), A.setTertiaryLight(j.tertiaryLight), A.setAmbientLight(j.ambientLight)
    }

    function i() {
        A.setPostEffect(j.postEffect)
    }

    function r() {
        j.ambientCubemapLight.texture = I.a.ENV_TEXTURE_ROOT + j.ambientCubemapLight.$texture + ".hdr", A.setAmbientCubemapLight(j.ambientCubemapLight)
    }

    function o() {
        A.setGround(j.ground)
    }

    function s() {
        a(), i(), r(), o()
    }

    function c() {
        var e = Math.max(G.$textureTiling, .01);
        G.uvRepeat = [e, e], G.transparent = G.alpha < 1, A.setMaterial(G.name, G)
    }

    function l(e) {
        G.name = e.name;
        var t = A.getMaterial(e.name);
        t.$textureTiling = t.uvRepeat[0], F.a.extend(G, t), null == t.specularColor ? (C.enable(), R.disable()) : (R.enable(), C.disable()), V.update()
    }

    function u(e) {
        return e && "none" !== e
    }

    function p(e, t, n) {
        var a = !1;
        u(n) && ([
            ["diffuseMap", "color", "#fff"],
            ["metalnessMap", "metalness", .5],
            ["roughnessMap", "roughness", .5],
            ["glossinessMap", "glossiness", .5],
            ["specularMap", "specularColor", "#fff"],
            ["emissiveMap", "emission", "#fff"]
        ].forEach(function(t) {
            e === t[0] && (console.warn("Force %s to be %s after set %s", t[1], t[2], t[0]), G[t[1]] = t[2], a = !0)
        }, this), g(), I.a.AUTO_SAVE && D.g(t).then(_).catch(_), N[n] = t.name, a && V.update()), c()
    }

    function d() {
        document.getElementById("tip").style.display = "block"
    }

    function f() {
        document.getElementById("tip").style.display = "none"
    }

    function h() {
        A = new L.a(document.getElementById("viewport"), j), A.enablePicking(), A.setCameraControl(j.viewControl), A.start(), A.on("select", function(e) {
            A.refresh(), l(e.target.material), M = e.target, W = [], A.getModelRoot().traverse(function(e) {
                e.material && e.material.name === M.material.name && W.push(e)
            })
        }), A.on("doffocus", function(e) {
            j.postEffect.depthOfField.enable && (j.postEffect.depthOfField.focalDistance = e.distance, V.update())
        }), A.on("unselect", function() {
            A.refresh(), C.disable(), R.disable(), M = null, W = []
        }), A.on("afterrender", function(e, t, n) {
            M && Object(H.a)(A, W, n)
        }), A.on("updatecamera", function(e) {
            j.viewControl = {
                center: e.center,
                alpha: e.alpha,
                beta: e.beta,
                distance: e.distance
            }
        })
    }

    function m(e) {
        document.body.appendChild(X), X.querySelector("#loading-text").innerHTML = e || "LOADING"
    }

    function v() {
        X.parentNode && X.parentNode.removeChild(X)
    }

    function g() {
        //q.style.display = "block", q.querySelector("#background-progress-text").innerHTML = "Saving...DONT close the page."
    }

    function x() {
        q.style.display = "block", q.querySelector("#background-progress-text").innerHTML = "Preparing for download...DONT close the page."
    }

    function _() {
        q.style.display = "none"
    }

    function blobToFile(theBlob, fileName){
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }

    function y() {
        v();
        //document.getElementById("toolbar").style.display = "block";
        //document.getElementById("reset").addEventListener("click", T);
        //document.getElementById("download").addEventListener("click", E);
        h();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'explode_final.glb', true);
        xhr.responseType = 'blob';
        xhr.onload = function(e) {
          if (this.status == 200) {
            var e = [blobToFile(this.response, 'explode_final.glb')];
            m("Loading model"), U.a(), D.a(e).then(function(e) {
                var t = e.glTF,
                    n = e.filesMap,
                    a = e.buffers,
                    i = e.allFiles;
                N = {};
                for (var r in n) N[n[r]] = r;
                var o = !(!t.extras || !t.extras.clayViewerConfig);
                o && (k.merge(j, t.extras.clayViewerConfig, !0), A.setCameraControl(j.viewControl), s(), V.update()), A.loadModel(t, {
                    files: n,
                    buffers: a,
                    textureFlipY: j.textureFlipY,
                    doubleSided: !0,
                    upAxis: j.zUpToYUp ? "z" : "y",
                    includeTexture: !o
                }).on("ready", function() {
                    f(), v(), o && (t.extras.clayViewerConfig.materials || []).forEach(function(e) {
                        for (var t in e) n[e[t]] && (e[t] = n[e[t]]);
                        A.setMaterial(e.name, e)
                    });
                }).on("loadmodel", w).on("error", function() {
                    v(), swal("Model load error")
                }), C.disable(), R.disable()
            }).catch(function(e) {
                v(), A.getModelRoot() || d(), U.b(A), console.log(e), swal(e.toString())
            })
          }
        };
        xhr.send();
        b(), Y = !0
    }

    function b() {
        function e(e) {
            return N && N[e]
        }

        function t(t) {
            t.addStringOutput(G, "name", {
                label: "Name"
            }).addColor(G, "color", {
                label: "Base Color",
                onChange: c
            }).addSlider(G, "alpha", "$alphaRange", {
                label: "Alpha",
                onChange: c
            }).addSlider(G, "alphaCutoff", "$alphaCutoffRange", {
                label: "Alpha Cutoff",
                onChange: c
            }).addNumberInput(G, "$textureTiling", {
                label: "Tiling",
                onChange: c,
                step: .5
            }).addCustomComponent(B.a, G, "diffuseMap", {
                label: "Base Map",
                onChange: p.bind(null, "diffuseMap"),
                getFileName: e
            }).addCustomComponent(B.a, G, "normalMap", {
                label: "Normal/Bump Map",
                onChange: p.bind(null, "normalMap"),
                getFileName: e
            })
        }

        function n(t) {
            t.addCustomComponent(B.a, G, "parallaxOcclusionMap", {
                label: "Parallax Occlusion Map",
                onChange: p.bind(null, "parallaxOcclusionMap"),
                getFileName: e
            }).addSlider(G, "parallaxOcclusionScale", "$parallaxOcclusionScaleRange", {
                label: "Scale",
                onChange: c
            }).addColor(G, "emission", {
                label: "Emission",
                onChange: c
            }).addNumberInput(G, "emissionIntensity", {
                label: "Emission Intensity",
                onChange: c
            }).addCustomComponent(B.a, G, "emissiveMap", {
                label: "Emissive Map",
                onChange: p.bind(null, "emissiveMap"),
                getFileName: e
            })
        }
        S = V.addPanel({
            label: "Settings",
            width: 250
        }), S.addGroup({
            label: "Global"
        }).addSubGroup({
            label: "Load Option"
        }).addCheckbox(j, "textureFlipY", {
            label: "Flip Texture",
            onChange: function() {
                A.setTextureFlipY(j.textureFlipY)
            }
        }).addCheckbox(j, "zUpToYUp", {
            label: "Z Up",
            onChange: function() {
                A.setModelUpAxis(j.zUpToYUp ? "Z" : "Y")
            }
        }).addSubGroup({
            label: "Ground"
        }).addCheckbox(j.ground, "show", {
            label: "Show",
            onChange: o
        }).addCheckbox(j.ground, "grid", {
            label: "Grid",
            onChange: o
        }), S.addGroup({
            label: "Environment",
            enable: !1
        }).addSelect(j.ambientCubemapLight, "$textureOptions", {
            label: "HDR Texture",
            onChange: r,
            target: "$texture"
        }).addNumberInput(j.ambientCubemapLight, "diffuseIntensity", {
            label: "Diffuse Intensity",
            onChange: r,
            step: .1
        }).addNumberInput(j.ambientCubemapLight, "specularIntensity", {
            label: "Specular Intensity",
            onChange: r,
            step: .1
        }), S.addGroup({
            label: "Light",
            enable: !1
        }).addSubGroup({
            label: "Main",
            enable: !1
        }).addCheckbox(j.mainLight, "shadow", {
            label: "Cast Shadow",
            onChange: a
        }).addNumberInput(j.mainLight, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: a
        }).addColor(j.mainLight, "color", {
            label: "Color",
            onChange: a
        }).addPad(j.mainLight, "$padAngle", {
            label: "Direction",
            onChange: a
        }).addSubGroup({
            label: "Secondary",
            enable: !1
        }).addNumberInput(j.secondaryLight, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: a
        }).addColor(j.secondaryLight, "color", {
            label: "Color",
            onChange: a
        }).addPad(j.secondaryLight, "$padAngle", {
            label: "Direction",
            onChange: a
        }).addSubGroup({
            label: "Tertiary",
            enable: !1
        }).addNumberInput(j.tertiaryLight, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: a
        }).addColor(j.tertiaryLight, "color", {
            label: "Color",
            onChange: a
        }).addPad(j.tertiaryLight, "$padAngle", {
            label: "Direction",
            onChange: a
        }).addSubGroup({
            label: "Ambient",
            enable: !1
        }).addNumberInput(j.ambientLight, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: a
        }).addColor(j.ambientLight, "color", {
            label: "Color",
            onChange: a
        }), S.addGroup({
            label: "Post Effect",
            enable: !1
        }).addCheckbox(j.postEffect, "enable", {
            label: "Enable",
            onChange: i
        }).addSubGroup({
            label: "Bloom",
            enable: !1
        }).addCheckbox(j.postEffect.bloom, "enable", {
            label: "Enable",
            onChange: i
        }).addNumberInput(j.postEffect.bloom, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: i
        }).addSubGroup({
            label: "Screen Space Ambient Occulusion",
            enable: !1
        }).addCheckbox(j.postEffect.screenSpaceAmbientOcclusion, "enable", {
            label: "Enable",
            onChange: i
        }).addNumberInput(j.postEffect.screenSpaceAmbientOcclusion, "radius", {
            label: "Radius",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.screenSpaceAmbientOcclusion, "intensity", {
            label: "Intensity",
            step: .1,
            onChange: i
        }).addSelect(j.postEffect.screenSpaceAmbientOcclusion, "$qualityOptions", {
            label: "Quality",
            onChange: i,
            target: "quality"
        }).addSubGroup({
            label: "Screen Space Reflection",
            enable: !1
        }).addCheckbox(j.postEffect.screenSpaceReflection, "enable", {
            label: "Enable",
            onChange: i
        }).addCheckbox(j.postEffect.screenSpaceReflection, "physical", {
            label: "Physical",
            onChange: i
        }).addNumberInput(j.postEffect.screenSpaceReflection, "maxRoughness", {
            label: "Max Roughness",
            step: .01,
            onChange: i
        }).addSelect(j.postEffect.screenSpaceReflection, "$qualityOptions", {
            label: "Quality",
            onChange: i,
            target: "quality"
        }).addSubGroup({
            label: "Depth of Field",
            enable: !1
        }).addCheckbox(j.postEffect.depthOfField, "enable", {
            label: "Enable",
            onChange: i
        }).addNumberInput(j.postEffect.depthOfField, "fstop", {
            label: "f-stop",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.depthOfField, "focalDistance", {
            label: "Focal Distance",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.depthOfField, "focalRange", {
            label: "Focal Range",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.depthOfField, "blurRadius", {
            label: "Blur Radius",
            step: .1,
            onChange: i
        }).addSelect(j.postEffect.depthOfField, "$qualityOptions", {
            label: "Quality",
            onChange: i,
            target: "quality"
        }).addSubGroup({
            label: "Color Correction",
            enable: !1
        }).addNumberInput(j.postEffect.colorCorrection, "exposure", {
            label: "Exposure",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.colorCorrection, "brightness", {
            label: "Brightness",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.colorCorrection, "contrast", {
            label: "Contrast",
            step: .1,
            onChange: i
        }).addNumberInput(j.postEffect.colorCorrection, "saturation", {
            label: "Saturation",
            step: .1,
            onChange: i
        }), C = V.addPanel({
            label: "Material - Metalllic Roughness",
            width: 240,
            fixed: !1,
            align: "left",
            position: [10, 10]
        }), t(C), C.addCustomComponent(B.a, G, "metalnessMap", {
            label: "Metalness Map",
            onChange: p.bind(null, "metalnessMap"),
            getFileName: e
        }).addSlider(G, "metalness", "$metalnessRange", {
            label: "Metalness",
            onChange: c
        }).addCustomComponent(B.a, G, "roughnessMap", {
            label: "Roughness Map",
            onChange: p.bind(null, "roughnessMap"),
            getFileName: e
        }).addSlider(G, "roughness", "$roughnessRange", {
            label: "Roughness",
            onChange: c
        }), n(C), C.disable(), R = V.addPanel({
            label: "Material - Specular Glossiness",
            width: 240,
            fixed: !1,
            align: "left",
            position: [10, 10]
        }), t(R), R.addCustomComponent(B.a, G, "specularMap", {
            label: "Specular Map",
            onChange: p.bind(null, "specularMap"),
            getFileName: e
        }).addColor(G, "specularColor", {
            label: "Specular Factor",
            onChange: c
        }).addCustomComponent(B.a, G, "glossinessMap", {
            label: "Glossiness Map",
            onChange: p.bind(null, "glossinessMap"),
            getFileName: e
        }).addSlider(G, "glossiness", "$glossinessRange", {
            label: "Glossiness",
            onChange: c
        }), n(R), R.disable()
    }

    function T() {
        swal({
            title: "Reset?",
            text: "Reset the viewer",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then(function() {
            k.merge(j, Object(O.a)(), !0), k.merge(G, Object(P.a)(), !0), V.update(), C.disable(), R.disable(), M = null, W = [], A.dispose(), h(), D.d(), d(), U.b(A), _()
        }).catch(function() {})
    }

    function E() {
        swal({
            title: "Select download format.",
            input: "radio",
            inputOptions: {
                glb: "GLB",
                zip: "ZIP"
            }
        }).then(function(e) {
            x(), D.b(e, _, _)
        })
    }

    function w() {
        M = null, A.stopAnimation(), U.b(A)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var A, S, C, R, M, N, L = n(67),
        O = n(145),
        P = n(146),
        D = n(147),
        I = n(36),
        F = n(7),
        k = n(156),
        B = (n.n(k), n(157)),
        U = n(158),
        H = n(159),
        z = n(161),
        j = Object(O.a)(),
        G = Object(P.a)(),
        V = new ControlKit({
            loadAndSave: !1,
            useExternalStyle: !0
        }),
        W = [],
        X = document.getElementById("loading"),
        q = document.getElementById("background-progress"),
        Y = !1;
    D.c(function(e, t, n) {
        if (n && k.merge(j, n, !0), !Y)
            if (y(), e) {
                N = {};
                for (var a in t) N[t[a]] = a;
                A.loadModel(e, {
                    files: t,
                    textureFlipY: j.textureFlipY,
                    upAxis: j.zUpToYUp ? "z" : "y",
                    doubleSided: !0,
                    includeTexture: !1
                }).on("ready", function() {
                    n && n.materials && n.materials.forEach(function(e) {
                        for (var n in e) t[e[n]] && (e[n] = t[e[n]]);
                        A.setMaterial(e.name, e)
                    })
                }).on("loadmodel", w).on("error", function() {
                    d(), swal("Model load error")
                })
            } else d()
    }), setTimeout(function() {
        Y || (console.warn("Init time out"), y())
    }, 5e3), setInterval(function() {
        if (A && !document.hidden) {
            var e = {};
            j.materials = A.getMaterialsNames().map(function(t) {
                var n = A.getMaterial(t);
                for (var a in n) N[n[a]] && (n[a] = N[n[a]]);
                return n.targetMeshes = [], e[t] = n, n
            }), A.getModelRoot() && A.getModelRoot().traverse(function(t) {
                t.material && e[t.material.name] && e[t.material.name].targetMeshes.push(t.originalMeshName || t.name)
            }), g(), I.a.AUTO_SAVE && D.f(j).then(function() {
                _(), console.log("Saved")
            }).catch(_)
        }
    }, 5e3), window.addEventListener("resize", function() {
        A.resize()
    }), window.addEventListener("dragover", function(e) {
        e.preventDefault()
    }), window.addEventListener("drop", function(e) {
        e.preventDefault()
    }), $(document).on("click", 'a[href^="http"]', function(e) {
        e.preventDefault(), Object(z.a)(this.href)
    })
}, function(e, t, n) {
    "use strict";
    var a = n(68);
    t.a = a.a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        t = A.a(t), A.b(t, w.a), this.init(e, t);
    }
    var i = n(27),
        r = n(41),
        o = n(4),
        s = n(86),
        c = n(89),
        l = n(53),
        u = n(90),
        p = n(7),
        d = n(14),
        f = n(16),
        h = n(10),
        m = n(31),
        v = n(2),
        g = n(91),
        x = n(20),
        _ = n(32),
        y = n(15),
        b = n(96),
        T = n(26),
        E = n(134),
        w = n(137),
        A = n(138),
        S = n(139),
        C = n(140),
        R = n(142),
        M = n(144);
    v.a.import(M.a);
    var N = ["diffuseMap", "normalMap", "emissiveMap", "metalnessMap", "roughnessMap", "specularMap", "glossinessMap"];
    a.prototype.init = function(e, t) {
        //joca init
        t = t || {}, this.root = e, this._timeline = new s.a;
        var n = new i.a({
            devicePixelRatio: t.devicePixelRatio || window.devicePixelRatio
        });
        e.appendChild(n.canvas), n.canvas.style.cssText = "position:absolute;left:0;top:0", this._renderer = n, this._renderMain = new b.a(n, t.shadow, "perspective"), this._renderMain.afterRenderScene = function(e, t, n) {
            this.trigger("renderscene", e, t, n)
        }.bind(this), this._renderMain.afterRenderAll = function(e, t, n) {
            this.trigger("afterrender", e, t, n)
        }.bind(this), this._renderMain.preZ = t.preZ || !1;
        var a = this._cameraControl = new C.a({
            renderer: n,
            timeline: this._timeline,
            domElement: e
        });
        a.target = this._renderMain.camera, a.init(), this._hotspotManager = new R.a({
            dom: e,
            renderer: n,
            camera: this._renderMain.camera
        }), this._skeletons = [], this._clips = [], this._takes = [], this._materialsMap = {}, this._sceneHelper = new E.a(this._renderMain.scene), this._sceneHelper.initLight(this._renderMain.scene), this.resize(), t.postEffect && this.setPostEffect(t.postEffect), t.mainLight && this.setMainLight(t.mainLight), t.secondaryLight && this.setSecondaryLight(t.secondaryLight), t.tertiaryLight && this.setTertiaryLight(t.tertiaryLight), t.ambientCubemapLight && this.setAmbientCubemapLight(t.ambientCubemapLight), t.ambientLight && this.setAmbientLight(t.ambientLight), t.environment && this.setEnvironment(t.environment), this._createGround(), t.ground && this.setGround(t.ground), this.setCameraControl({
            distance: 20,
            minDisntance: 2,
            maxDistance: 100,
            center: [0, 0, 0]
        }), this._enablePicking = t.picking || !1, this._initHandlers(), a.on("update", function() {
            this.trigger("updatecamera", {
                center: a.getCenter(),
                alpha: a.getAlpha(),
                beta: a.getBeta(),
                distance: a.getDistance()
            }), this.refresh()
        }, this)
    }, a.prototype._createGround = function() {
        var e = new f.a({
            isGround: !0,
            material: new h.a({
                shader: new v.a({
                    vertex: v.a.source("qmv.ground.vertex"),
                    fragment: v.a.source("qmv.ground.fragment")
                }),
                transparent: !0
            }),
            castShadow: !1,
            geometry: new m.a,
            renderOrder: -10
        });
        e.material.set("color", [1, 1, 1, 1]), e.scale.set(40, 40, 1), e.rotation.rotateX(-Math.PI / 2), this._groundMesh = e, this._renderMain.scene.add(e)
    }, a.prototype._addModel = function(e, t, n, a) {
        this.removeModel(), this._renderMain.scene.add(e), this._skeletons = n.slice(), this._modelNode = e, this._setAnimationClips(a), t && t.length && (this._nodes = t);
        var i = {};
        e.traverse(function(e) {
            if (e.material) {
                var t = e.material;
                i[t.name] = i[t.name] || [], i[t.name].push(t)
            }
        }, this), this._materialsMap = i, this._updateMaterialsSRGB(), this._stopAccumulating()
    }, a.prototype._removeAnimationClips = function() {
        this._clips.forEach(function(e) {
            this._timeline.removeClip(e)
        }, this), this._clips = [], this._takes = []
    }, a.prototype._setAnimationClips = function(e) {
    
        function t() {
            n.refresh()
        }
        var n = this;
        e.forEach(function(e) {
            e.tracks.forEach(function(e) {
                e.target || (e.target = this._nodes[e.targetNodeIndex])
            }, this), e.onframe = t, this._timeline.addClip(e), this._takes.push({
                name: e.name,
                range: [0, e.life],
                clip: e
            })
        }, this), this._clips = e.slice();
    }, a.prototype._initHandlers = function() {
        this._picking = new g.a({
            renderer: this._renderer,
            scene: this._renderMain.scene,
            camera: this._renderMain.camera
        }), this._clickHandler = this._clickHandler.bind(this), this._mouseDownHandler = this._mouseDownHandler.bind(this), this.root.addEventListener("mousedown", this._mouseDownHandler), this.root.addEventListener("click", this._clickHandler)
    }, a.prototype._mouseDownHandler = function(e) {
        this._startX = e.clientX, this._startY = e.clientY;
        return false;
    }, a.prototype._clickHandler = function(e) {
        return;
        if (this._enablePicking || this._renderMain.isDOFEnabled()) {
            var t = e.clientX - this._startX,
                n = e.clientY - this._startY;
            if (!(Math.sqrt(t * t + n * n) >= 5)) {
                var a = this._picking.pick(e.clientX, e.clientY, !0);
                a && !a.target.isGround ? (this._renderMain.setDOFFocusOnPoint(a.distance), this.trigger("doffocus", a), this._selectResult = a, this.trigger("select", a), this.refresh()) : (this._selectResult && this.trigger("unselect", this._selectResult), this._selectResult = null)
            }
        }
    }, a.prototype.enablePicking = function() {
        this._enablePicking = !0
    }, a.prototype.disablePicking = function() {
        this._enablePicking = !1
    }, a.prototype.setModelUpAxis = function(e) {
        var t = this._modelNode;
        t && (t.position.set(0, 0, 0), t.scale.set(1, 1, 1), t.rotation.identity(), "z" === e.toLowerCase() && t.rotation.identity().rotateX(-Math.PI / 2), this.autoFitModel())
    }, a.prototype.setTextureFlipY = function(e) {
        if (this._modelNode) {
            for (var t in this._materialsMap)
                for (var n = 0; n < this._materialsMap[t].length; n++)
                    for (var a = this._materialsMap[t][n], i = 0; i < N.length; i++) {
                        var r = a.get(N[i]);
                        r && (r.flipY = e, r.dirty())
                    }
            this.refresh()
        }
    }, a.prototype.resize = function() {
        var e = this._renderer;
        e.resize(this.root.clientWidth, this.root.clientHeight), this._renderMain.setViewport(0, 0, e.getWidth(), e.getHeight(), e.getDevicePixelRatio()), this.refresh()
    }, a.prototype.autoFitModel = function(e) {
        if (e = e || 10, this._modelNode) {
            this.setPose(10), this._modelNode.update(), this._skeletons.forEach(function(e) {
                e.update()
            });
            var t = Object(S.a)(this._modelNode),
                n = new o.a;
            n.copy(t.max).sub(t.min);
            var a = new o.a;
            a.copy(t.max).add(t.min).scale(.5);
            var i = e / Math.max(n.x, n.y, n.z) || 1;
            this._modelNode.scale.set(i, i, i), this._modelNode.position.copy(a).scale(-i), this._modelNode.update(), this._hotspotManager.setBoundingBox(t.min.array, t.max.array), this._modelNode.traverse(function(e) {
                e.isSkinnedMesh() && e.geometry.boundingBox.applyTransform(this._modelNode.worldTransform)
            }, this), this._groundMesh.position.y = -n.y * i / 2, this.refresh()
        }
    }, a.prototype.loadModel = function(e, t) {
        if (t = t || {}, !e) throw new Error("URL of model is not provided");
        var n = t.shader || "standard",
            a = null;
        t.files && (a = function(e) {
            if (e.match(/^data:(.*?)base64,/)) return e;
            e = e.replace(/[\\\/]+/g, "/");
            var n = e.substr(e.lastIndexOf("/") + 1);
            return t.files[n] ? t.files[n] : n || ""
        });
        var i = {
            rootNode: new d.a,
            shader: "clay." + n,
            textureRootPath: t.textureRootPath,
            bufferRootPath: t.bufferRootPath,
            crossOrigin: "Anonymous",
            includeTexture: null == t.includeTexture || t.includeTexture,
            textureFlipY: t.textureFlipY,
            textureConvertToPOT: !0
        };
        a && (i.resolveTexturePath = i.resolveBinaryPath = a);
        var o = new r.a(i);
        "string" == typeof e ? o.load(e) : e instanceof ArrayBuffer ? o.parseBinary(e) : o.parse(e, t.buffers), t.upAxis && "z" === t.upAxis.toLowerCase() && o.rootNode.rotation.rotateX(-Math.PI / 2);
        var s = new l.a,
            c = 0,
            f = 0,
            h = 0;

        return o.success(function(e) {
            e.rootNode.traverse(function(e) {
                h++, e.geometry && (f += e.geometry.triangleCount, c += e.geometry.vertexCount)
            }), this._preprocessModel(e.rootNode, t), this._addModel(e.rootNode, e.nodes, e.skeletons, e.clips), this.autoFitModel();
            var n = {
                triangleCount: f,
                vertexCount: c,
                nodeCount: h,
                meshCount: Object.keys(e.meshes).length,
                materialCount: Object.keys(e.materials).length,
                textureCount: Object.keys(e.textures).length
            };
            s.trigger("loadmodel", n);
            var a = [];
            p.a.each(e.textures, function(e) {
                e.isRenderable() || a.push(e)
            }), (new u.a).allSettled(a).success(function() {
                this._convertBumpToNormal(), s.trigger("ready"), this.refresh()
            }, this), this.refresh();
        }, this), o.error(function() {
            s.trigger("error")
        }), this._textureFlipY = t.textureFlipY, this._shaderName = n, s;
    }, a.prototype._convertBumpToNormal = function() {
        for (var e in this._materialsMap)
            for (var t = 0; t < this._materialsMap[e].length; t++) {
                var n = this._materialsMap[e][t],
                    a = n.get("normalMap");
                if (a && _.a.isHeightImage(a.image)) {
                    var i = _.a.heightToNormal(a.image);
                    i.srcImage = a.image, a.image = i, a.dirty()
                }
            }
    }, a.prototype.removeModel = function() {
        var e = this._modelNode;
        e && (this._renderer.disposeNode(e), this._renderMain.scene.remove(e), this._modelNode = null, this.refresh()), this._removeAnimationClips(), this._materialsMap = {}, this._nodes = [], this._skeletons = []
    }, a.prototype.getScene = function() {
        return this._renderMain.scene
    }, a.prototype.getModelRoot = function() {
        return this._modelNode
    }, a.prototype._preprocessModel = function(e, t) {
        var n = t.alphaCutoff,
            a = t.doubleSided,
            i = [];
        e.traverse(function(e) {
            e.skeleton && i.push(e)
        }), i.forEach(function(e) {
            var t = c.a.splitByJoints(e, 15, !0);
            t !== e && t.eachChild(function(e) {
                e.originalMeshName = t.name
            })
        }, this), e.traverse(function(e) {
            e.geometry && (t.regenerateNormal && e.geometry.generateVertexNormals(), e.geometry.updateBoundingBox(), null != a && (e.culling = !a)), e.material && (e.material.define("fragment", "DIFFUSEMAP_ALPHA_ALPHA"), e.material.define("fragment", "ALPHA_TEST"), null != a && e.material[a ? "define" : "undefine"]("fragment", "DOUBLE_SIDED"), e.material.precision = "mediump", null != n && e.material.set("alphaCutoff", n), e.material.transparent && (e.castShadow = !1))
        })
    }, a.prototype.loadAnimation = function(e) {
        var t = new r.a({
            rootNode: new d.a,
            crossOrigin: "Anonymous"
        });
        return t.load(e), t.success(function(e) {
            this._removeAnimationClips(), this._setAnimationClips(e.clips)
        }, this), t
    }, a.prototype.pauseAnimation = function() {
        this._clips.forEach(function(e) {
            e.pause()
        })
    }, a.prototype.stopAnimation = function() {
        this._clips.forEach(function(e) {
            this._timeline.removeClip(e)
        }, this)
    }, a.prototype.resumeAnimation = function() {
        this._clips.forEach(function(e) {
            e.resume()
        })
    }, a.prototype.setCameraControl = function(e) {
        this._cameraControl.setOption(e), this.refresh()
    }, a.prototype.setMainLight = function(e) {
        this._sceneHelper.updateMainLight(e, this), this.refresh()
    }, a.prototype.setSecondaryLight = function(e) {
        this._sceneHelper.updateSecondaryLight(e, this), this.refresh()
    }, a.prototype.setTertiaryLight = function(e) {
        this._sceneHelper.updateTertiaryLight(e, this), this.refresh()
    }, a.prototype.setAmbientLight = function(e) {
        this._sceneHelper.updateAmbientLight(e, this), this.refresh()
    }, a.prototype.setAmbientCubemapLight = function(e) {
        this._sceneHelper.updateAmbientCubemapLight(e, this), this.refresh()
    }, a.prototype.setEnvironment = function(e) {
        this._sceneHelper.updateSkybox(e, this._renderMain.isLinearSpace(), this)
    }, a.prototype.setMaterial = function(e, t) {
        function n(e) {
            return e && "none" !== e
        }

        function a(e) {
            if (e in t)
                if (n(t[e])) {
                    var a = "environmentMap" === e;
                    c = "normalMap" === e || "parallaxOcclusionMap" === e, T.a.loadTexture(t[e], o, {
                        flipY: !a && s,
                        anisotropic: a ? 1 : 8
                    }, function(t) {
                        if ("normalMap" === e && _.a.isHeightImage(t.image)) {
                            var n = _.a.heightToNormal(t.image);
                            n.srcImage = t.image, t.image = n
                        } else if ("environmentMap" === e) {
                            var a = Math.round(t.width / 4),
                                s = new y.a({
                                    width: a,
                                    height: a
                                });
                            _.a.panoramaToCubeMap(i, t, s), t = s
                        }
                        r.forEach(function(n) {
                            n.set(e, t)
                        }), o.refresh()
                    })
                } else r.forEach(function(t) {
                    t.set(e, null)
                })
        }
        var i = this._renderer;
        t = t || {}, e instanceof Array || (e = [e]);
        var r = [];
        e.forEach(function(e) {
            this._materialsMap[e] && (r = r.concat(this._materialsMap[e]))
        }, this);
        var o = this,
            s = this._textureFlipY;
        if (!r || !r.length) return void console.warn("Material %s not exits", e.join(", "));
        var c = !1;
        ["diffuseMap", "normalMap", "parallaxOcclusionMap", "emissiveMap", "environmentMap"].forEach(function(e) {
            a(e)
        }, this), r[0].isDefined("fragment", "USE_METALNESS") ? ["metalnessMap", "roughnessMap"].forEach(function(e) {
            a(e)
        }, this) : ["specularMap", "glossinessMap"].forEach(function(e) {
            a(e)
        }, this), c && this._modelNode.traverse(function(t) {
            t.material && t.material.name === e && (t.geometry.attributes.tangent.value || t.geometry.generateTangents())
        }), r.forEach(function(e) {
            null != t.transparent && (e.transparent = !!t.transparent, e.depthMask = !t.transparent), ["color", "emission", "specularColor"].forEach(function(n) {
                null != t[n] && e.set(n, T.a.parseColor(t[n]))
            }), ["alpha", "alphaCutoff", "metalness", "roughness", "glossiness", "emissionIntensity", "uvRepeat", "parallaxOcclusionScale"].forEach(function(n) {
                null != t[n] && e.set(n, t[n])
            })
        }, this), this.refresh()
    }, a.prototype.getMaterial = function(e) {
        function t(e) {
            var t = a.get(e);
            if (!t) return "";
            for (var n = t.image; n.srcImage;) n = n.srcImage;
            return n && n.src || ""
        }
        var n = this._materialsMap[e];
        if (!n) return void console.warn("Material %s not exits", e);
        var a = n[0],
            i = {
                name: e,
                transparent: a.transparent
            };
        return ["color", "emission"].forEach(function(e) {
            i[e] = T.a.stringifyColor(a.get(e), "hex")
        }), ["alpha", "alphaCutoff", "emissionIntensity", "uvRepeat", "parallaxOcclusionScale"].forEach(function(e) {
            i[e] = a.get(e)
        }), ["diffuseMap", "normalMap", "parallaxOcclusionMap", "emissiveMap"].forEach(function(e) {
            i[e] = t(e)
        }), a.isDefined("fragment", "USE_METALNESS") ? (["metalness", "roughness"].forEach(function(e) {
            i[e] = a.get(e)
        }), ["metalnessMap", "roughnessMap"].forEach(function(e) {
            i[e] = t(e)
        }), i.type = "pbrMetallicRoughness") : (i.specularColor = T.a.stringifyColor(a.get("specularColor"), "hex"), i.glossiness = a.get("glossiness"), ["specularMap", "glossinessMap"].forEach(function(e) {
            i[e] = t(e)
        }), i.type = "pbrSpecularGlossiness"), i
    }, a.prototype.setGround = function(e) {
        "show" in e && (this._groundMesh.invisible = !e.show), "grid" in e && this._groundMesh.material.set("showGrid", e.grid), this.refresh()
    }, a.prototype.getMaterialsNames = function() {
        return Object.keys(this._materialsMap)
    }, a.prototype.setPostEffect = function(e) {
        this._renderMain.setPostEffect(e), this._updateMaterialsSRGB(), this.refresh()
    }, a.prototype.start = function() {
        if (this._disposed) return void console.warn("Viewer already disposed");
        this._timeline.start(), this._timeline.on("frame", this._loop, this)
    }, a.prototype.stop = function() {
        this._timeline.stop(), this._timeline.off("frame", this._loop)
    }, a.prototype.addHotspot = function(e, t) {
        return this._hotspotManager.add(e, t)
    }, a.prototype.setPose = function(e) {
        this._clips.forEach(function(t) {
            t.setTime(e)
        }), this.refresh()
    }, a.prototype.getAnimationDuration = function() {
        var e = 0;
        return this._clips.forEach(function(t) {
            e = Math.max(t.life, e)
        }), e
    }, a.prototype.refresh = function() {
        this._needsRefresh = !0
    }, a.prototype.getRenderer = function() {
        return this._renderer
    }, a.prototype._updateMaterialsSRGB = function() {
        var e = this._renderMain.isLinearSpace();
        for (var t in this._materialsMap)
            for (var n = this._materialsMap[t], a = 0; a < n.length; a++) n[a][e ? "define" : "undefine"]("fragment", "SRGB_DECODE")
    }, a.prototype._loop = function(e) {
        this._disposed || this._needsRefresh && (this._needsRefresh = !1, this._renderMain.prepareRender(), this._renderMain.render(), this._startAccumulating(), this._hotspotManager.update())
    };
    var L = 1;
    a.prototype._stopAccumulating = function() {
        this._accumulatingId = 0, clearTimeout(this._accumulatingTimeout)
    }, a.prototype._startAccumulating = function(e) {
        function t(i) {
            if (n._accumulatingId && i === n._accumulatingId && !n._disposed) {
                n._renderMain.isAccumulateFinished() && a || (n._renderMain.render(!0), e ? t(i) : requestAnimationFrame(function() {
                    t(i)
                }))
            }
        }
        var n = this;
        this._stopAccumulating();
        var a = n._renderMain.needsAccumulate();
        a && (this._accumulatingId = L++, e ? t(n._accumulatingId) : this._accumulatingTimeout = setTimeout(function() {
            t(n._accumulatingId)
        }, 50))
    }, a.prototype.dispose = function() {
        this._disposed = !0, this._renderer.disposeScene(this._renderMain.scene), this._renderMain.dispose(this._renderer), this._sceneHelper.dispose(this._renderer), this._renderer.dispose(), this._cameraControl.dispose(), this.root.removeEventListener("mousedown", this._mouseDownHandler), this.root.removeEventListener("click", this._clickHandler), this.root.innerHTML = "", this.off("select"), this.off("doffocus"), this.off("unselect"), this.off("afterrender"), this.off("updatecamera"), this.stop()
    }, p.a.extend(a.prototype, x.a), a.version = "0.2.1", t.a = a;
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        "object" == typeof t && (n = t, t = null);
        var a, o = this;
        if (!(e instanceof Function)) {
            a = [];
            for (var s in e) e.hasOwnProperty(s) && a.push(s)
        }
        var c = function(t) {
            if (o.apply(this, arguments), e instanceof Function ? i(this, e.call(this, t)) : r(this, e, a), this.constructor === c)
                for (var n = c.__initializers__, s = 0; s < n.length; s++) n[s].apply(this, arguments)
        };
        c.__super__ = o, o.__initializers__ ? c.__initializers__ = o.__initializers__.slice() : c.__initializers__ = [], t && c.__initializers__.push(t);
        var l = function() {};
        return l.prototype = o.prototype, c.prototype = new l, c.prototype.constructor = c, i(c.prototype, n), c.extend = o.extend, c.derive = o.extend, c
    }

    function i(e, t) {
        if (t)
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }

    function r(e, t, n) {
        for (var a = 0; a < n.length; a++) {
            var i = n[a];
            e[i] = t[i]
        }
    }
    t.a = {
        extend: a,
        derive: a
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        function t(t) {
            var a = e.getExtension(t);
            a || (a = e.getExtension("MOZ_" + t)), a || (a = e.getExtension("WEBKIT_" + t)), n[t] = a
        }
        for (var n = {}, a = {}, o = 0; o < i.length; o++) {
            t(i[o])
        }
        for (var o = 0; o < r.length; o++) {
            var s = r[o];
            a[s] = e.getParameter(e[s])
        }
        this.getExtension = function(e) {
            return e in n || t(e), n[e]
        }, this.getParameter = function(e) {
            return a[e]
        }
    }
    var i = ["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "OES_vertex_array_object", "OES_element_index_uint", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "EXT_shader_texture_lod", "WEBGL_draw_buffers", "EXT_frag_depth", "EXT_sRGB"],
        r = ["MAX_TEXTURE_SIZE", "MAX_CUBE_MAP_TEXTURE_SIZE"];
    t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
    }

    function i(e) {
        return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e
    }

    function r(e) {
        return e < 0 ? 0 : e > 1 ? 1 : e
    }

    function o(e) {
        return a(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function s(e) {
        return r(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function c(e, t, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * n * 6 : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function l(e, t, n) {
        return e + (t - e) * n
    }

    function u(e, t, n, a, i) {
        return e[0] = t, e[1] = n, e[2] = a, e[3] = i, e
    }

    function p(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function d(e, t) {
        _ && p(_, t), _ = x.put(e, _ || t.slice())
    }

    function f(e, t) {
        var n = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
            i = s(e[1]),
            r = s(e[2]),
            o = r <= .5 ? r * (i + 1) : r + i - r * i,
            l = 2 * r - o;
        return t = t || [], u(t, a(255 * c(l, o, n + 1 / 3)), a(255 * c(l, o, n)), a(255 * c(l, o, n - 1 / 3)), 1), 4 === e.length && (t[3] = e[3]), t
    }

    function h(e) {
        if (e) {
            var t, n, a = e[0] / 255,
                i = e[1] / 255,
                r = e[2] / 255,
                o = Math.min(a, i, r),
                s = Math.max(a, i, r),
                c = s - o,
                l = (s + o) / 2;
            if (0 === c) t = 0, n = 0;
            else {
                n = l < .5 ? c / (s + o) : c / (2 - s - o);
                var u = ((s - a) / 6 + c / 2) / c,
                    p = ((s - i) / 6 + c / 2) / c,
                    d = ((s - r) / 6 + c / 2) / c;
                a === s ? t = d - p : i === s ? t = 1 / 3 + u - d : r === s && (t = 2 / 3 + p - u), t < 0 && (t += 1), t > 1 && (t -= 1)
            }
            var f = [360 * t, n, l];
            return null != e[3] && f.push(e[3]), f
        }
    }
    var m = n(38),
        v = {},
        g = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        },
        x = new m.a(20),
        _ = null;
    v.parse = function(e, t) {
        if (e) {
            t = t || [];
            var n = x.get(e);
            if (n) return p(t, n);
            e += "";
            var a = e.replace(/ /g, "").toLowerCase();
            if (a in g) return p(t, g[a]), d(e, t), t;
            if ("#" !== a.charAt(0)) {
                var i = a.indexOf("("),
                    r = a.indexOf(")");
                if (-1 !== i && r + 1 === a.length) {
                    var c = a.substr(0, i),
                        l = a.substr(i + 1, r - (i + 1)).split(","),
                        h = 1;
                    switch (c) {
                        case "rgba":
                            if (4 !== l.length) return void u(t, 0, 0, 0, 1);
                            h = s(l.pop());
                        case "rgb":
                            return 3 !== l.length ? void u(t, 0, 0, 0, 1) : (u(t, o(l[0]), o(l[1]), o(l[2]), h), d(e, t), t);
                        case "hsla":
                            return 4 !== l.length ? void u(t, 0, 0, 0, 1) : (l[3] = s(l[3]), f(l, t), d(e, t), t);
                        case "hsl":
                            return 3 !== l.length ? void u(t, 0, 0, 0, 1) : (f(l, t), d(e, t), t);
                        default:
                            return
                    }
                }
                u(t, 0, 0, 0, 1)
            } else {
                if (4 === a.length) {
                    var m = parseInt(a.substr(1), 16);
                    return m >= 0 && m <= 4095 ? (u(t, (3840 & m) >> 4 | (3840 & m) >> 8, 240 & m | (240 & m) >> 4, 15 & m | (15 & m) << 4, 1), d(e, t), t) : void u(t, 0, 0, 0, 1)
                }
                if (7 === a.length) {
                    var m = parseInt(a.substr(1), 16);
                    return m >= 0 && m <= 16777215 ? (u(t, (16711680 & m) >> 16, (65280 & m) >> 8, 255 & m, 1), d(e, t), t) : void u(t, 0, 0, 0, 1)
                }
            }
        }
    }, v.parseToFloat = function(e, t) {
        if (t = v.parse(e, t)) return t[0] /= 255, t[1] /= 255, t[2] /= 255, t
    }, v.lift = function(e, t) {
        var n = v.parse(e);
        if (n) {
            for (var a = 0; a < 3; a++) n[a] = t < 0 ? n[a] * (1 - t) | 0 : (255 - n[a]) * t + n[a] | 0;
            return v.stringify(n, 4 === n.length ? "rgba" : "rgb")
        }
    }, v.toHex = function(e) {
        var t = v.parse(e);
        if (t) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1)
    }, v.fastLerp = function(e, t, n) {
        if (t && t.length && e >= 0 && e <= 1) {
            n = n || [];
            var i = e * (t.length - 1),
                o = Math.floor(i),
                s = Math.ceil(i),
                c = t[o],
                u = t[s],
                p = i - o;
            return n[0] = a(l(c[0], u[0], p)), n[1] = a(l(c[1], u[1], p)), n[2] = a(l(c[2], u[2], p)), n[3] = r(l(c[3], u[3], p)), n
        }
    }, v.fastMapToColor = v.fastLerp, v.lerp = function(e, t, n) {
        if (t && t.length && e >= 0 && e <= 1) {
            var i = e * (t.length - 1),
                o = Math.floor(i),
                s = Math.ceil(i),
                c = v.parse(t[o]),
                u = v.parse(t[s]),
                p = i - o,
                d = v.stringify([a(l(c[0], u[0], p)), a(l(c[1], u[1], p)), a(l(c[2], u[2], p)), r(l(c[3], u[3], p))], "rgba");
            return n ? {
                color: d,
                leftIndex: o,
                rightIndex: s,
                value: i
            } : d
        }
    }, v.mapToColor = v.lerp, v.modifyHSL = function(e, t, n, a) {
        if (e = v.parse(e)) return e = h(e), null != t && (e[0] = i(t)), null != n && (e[1] = s(n)), null != a && (e[2] = s(a)), v.stringify(f(e), "rgba")
    }, v.modifyAlpha = function(e, t) {
        if ((e = v.parse(e)) && null != t) return e[3] = r(t), v.stringify(e, "rgba")
    }, v.stringify = function(e, t) {
        if (e && e.length) {
            var n = e[0] + "," + e[1] + "," + e[2];
            return "rgba" !== t && "hsva" !== t && "hsla" !== t || (n += "," + e[3]), t + "(" + n + ")"
        }
    }, t.a = v
}, function(e, t, n) {
    "use strict";
    var a = function() {
        this.head = null, this.tail = null, this._length = 0
    };
    a.prototype.insert = function(e) {
        var t = new a.Entry(e);
        return this.insertEntry(t), t
    }, a.prototype.insertAt = function(e, t) {
        if (!(e < 0)) {
            for (var n = this.head, i = 0; n && i != e;) n = n.next, i++;
            if (n) {
                var r = new a.Entry(t),
                    o = n.prev;
                o ? (o.next = r, r.prev = o) : this.head = r, r.next = n, n.prev = r
            } else this.insert(t)
        }
    }, a.prototype.insertBeforeEntry = function(e, t) {
        var n = new a.Entry(e),
            i = t.prev;
        i ? (i.next = n, n.prev = i) : this.head = n, n.next = t, t.prev = n, this._length++
    }, a.prototype.insertEntry = function(e) {
        this.head ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : this.head = this.tail = e, this._length++
    }, a.prototype.remove = function(e) {
        var t = e.prev,
            n = e.next;
        t ? t.next = n : this.head = n, n ? n.prev = t : this.tail = t, e.next = e.prev = null, this._length--
    }, a.prototype.removeAt = function(e) {
        if (!(e < 0)) {
            for (var t = this.head, n = 0; t && n != e;) t = t.next, n++;
            return t ? (this.remove(t), t.value) : void 0
        }
    }, a.prototype.getHead = function() {
        if (this.head) return this.head.value
    }, a.prototype.getTail = function() {
        if (this.tail) return this.tail.value
    }, a.prototype.getAt = function(e) {
        if (!(e < 0)) {
            for (var t = this.head, n = 0; t && n != e;) t = t.next, n++;
            return t.value
        }
    }, a.prototype.indexOf = function(e) {
        for (var t = this.head, n = 0; t;) {
            if (t.value === e) return n;
            t = t.next, n++
        }
    }, a.prototype.length = function() {
        return this._length
    }, a.prototype.isEmpty = function() {
        return 0 === this._length
    }, a.prototype.forEach = function(e, t) {
        for (var n = this.head, a = 0, i = void 0 !== t; n;) i ? e.call(t, n.value, a) : e(n.value, a), n = n.next, a++
    }, a.prototype.clear = function() {
        this.tail = this.head = null, this._length = 0
    }, a.Entry = function(e) {
        this.value = e, this.next = null, this.prev = null
    }, t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        function a(e, n, a, r) {
            var o = "";
            isNaN(n) && (n = n in t ? t[n] : i[n]), isNaN(a) && (a = a in t ? t[a] : i[a]);
            for (var s = parseInt(n); s < parseInt(a); s++) o += "{" + r.replace(/float\s*\(\s*_idx_\s*\)/g, s.toFixed(1)).replace(/_idx_/g, s) + "}";
            return o
        }
        var i = {};
        for (var r in n) i[r + "_COUNT"] = n[r];
        return e.replace(l, a)
    }

    function i(e, t, n) {
        var a = [];
        if (t)
            for (var i in t) {
                var r = t[i];
                r > 0 && a.push("#define " + i.toUpperCase() + "_COUNT " + r)
            }
        if (n)
            for (var o = 0; o < n.length; o++) {
                var s = n[o];
                a.push("#define " + s.toUpperCase() + "_ENABLED")
            }
        for (var s in e) {
            var c = e[s];
            null === c ? a.push("#define " + s) : a.push("#define " + s + " " + c.toString())
        }
        return a.join("\n")
    }

    function r(e) {
        for (var t = [], n = 0; n < e.length; n++) t.push("#extension GL_" + e[n] + " : enable");
        return t.join("\n")
    }

    function o(e) {
        return ["precision", e, "float"].join(" ") + ";\n" + ["precision", e, "int"].join(" ") + ";\n" + ["precision", e, "sampler2D"].join(" ") + ";\n"
    }

    function s(e) {
        this._renderer = e, this._cache = {}
    }
    var c = n(74),
        l = /for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;
    s.prototype.getProgram = function(e, t, n) {
        var s = this._cache,
            l = "s" + t.shader.shaderID + "m" + t.getProgramKey();
        n && (l += "se" + n.getProgramKey(e.lightGroup)), e.isSkinnedMesh() && (l += "," + e.joints.length);
        var u = s[l];
        if (u) return u;
        var p = n ? n.getLightsNumbers(e.lightGroup) : {},
            d = this._renderer,
            f = d.gl,
            h = t.getEnabledTextures(),
            m = "";
        e.isSkinnedMesh() && (m = "\n" + i({
            SKINNING: null,
            JOINT_COUNT: e.joints.length
        }) + "\n");
        var v = m + i(t.vertexDefines, p, h),
            g = m + i(t.fragmentDefines, p, h),
            x = v + "\n" + t.shader.vertex,
            _ = r(["OES_standard_derivatives", "EXT_shader_texture_lod"]) + "\n" + o(t.precision) + "\n" + g + "\n" + t.shader.fragment,
            y = a(x, t.vertexDefines, p),
            b = a(_, t.fragmentDefines, p),
            u = new c.a;
        u.uniformSemantics = t.shader.uniformSemantics, u.attributes = t.shader.attributes;
        var T = u.buildProgram(f, t.shader, y, b);
        return u.__error = T, s[l] = u, u
    }, t.a = s
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t = e.split("\n"), n = 0, a = t.length; n < a; n++) t[n] = n + 1 + ": " + t[n];
        return t.join("\n")
    }

    function i(e, t, n) {
        if (!e.getShaderParameter(t, e.COMPILE_STATUS)) return [e.getShaderInfoLog(t), a(n)].join("\n")
    }
    var r = n(12),
        o = n(1),
        s = {},
        c = new r.a.Float32Array(16),
        l = o.a.extend({
            uniformSemantics: {},
            attributes: {}
        }, function() {
            this._locations = {}, this._textureSlot = 0, this._program = null
        }, {
            bind: function(e) {
                this._textureSlot = 0, e.gl.useProgram(this._program)
            },
            hasUniform: function(e) {
                var t = this._locations[e];
                return null !== t && void 0 !== t
            },
            useTextureSlot: function(e, t, n) {
                t && (e.gl.activeTexture(e.gl.TEXTURE0 + n), t.isRenderable() ? t.bind(e) : t.unbind(e))
            },
            currentTextureSlot: function() {
                return this._textureSlot
            },
            resetTextureSlot: function(e) {
                this._textureSlot = e || 0
            },
            takeCurrentTextureSlot: function(e, t) {
                var n = this._textureSlot;
                return this.useTextureSlot(e, t, n), this._textureSlot++, n
            },
            setUniform: function(e, t, n, a) {
                var i = this._locations,
                    o = i[n];
                if (null === o || void 0 === o) return !1;
                switch (t) {
                    case "m4":
                        if (!(a instanceof Float32Array)) {
                            for (var s = 0; s < a.length; s++) c[s] = a[s];
                            a = c
                        }
                        e.uniformMatrix4fv(o, !1, a);
                        break;
                    case "2i":
                        e.uniform2i(o, a[0], a[1]);
                        break;
                    case "2f":
                        e.uniform2f(o, a[0], a[1]);
                        break;
                    case "3i":
                        e.uniform3i(o, a[0], a[1], a[2]);
                        break;
                    case "3f":
                        e.uniform3f(o, a[0], a[1], a[2]);
                        break;
                    case "4i":
                        e.uniform4i(o, a[0], a[1], a[2], a[3]);
                        break;
                    case "4f":
                        e.uniform4f(o, a[0], a[1], a[2], a[3]);
                        break;
                    case "1i":
                        e.uniform1i(o, a);
                        break;
                    case "1f":
                        e.uniform1f(o, a);
                        break;
                    case "1fv":
                        e.uniform1fv(o, a);
                        break;
                    case "1iv":
                        e.uniform1iv(o, a);
                        break;
                    case "2iv":
                        e.uniform2iv(o, a);
                        break;
                    case "2fv":
                        e.uniform2fv(o, a);
                        break;
                    case "3iv":
                        e.uniform3iv(o, a);
                        break;
                    case "3fv":
                        e.uniform3fv(o, a);
                        break;
                    case "4iv":
                        e.uniform4iv(o, a);
                        break;
                    case "4fv":
                        e.uniform4fv(o, a);
                        break;
                    case "m2":
                    case "m2v":
                        e.uniformMatrix2fv(o, !1, a);
                        break;
                    case "m3":
                    case "m3v":
                        e.uniformMatrix3fv(o, !1, a);
                        break;
                    case "m4v":
                        if (Array.isArray(a) && Array.isArray(a[0])) {
                            for (var l = new r.a.Float32Array(16 * a.length), u = 0, s = 0; s < a.length; s++)
                                for (var p = a[s], d = 0; d < 16; d++) l[u++] = p[d];
                            e.uniformMatrix4fv(o, !1, l)
                        } else e.uniformMatrix4fv(o, !1, a)
                }
                return !0
            },
            setUniformOfSemantic: function(e, t, n) {
                var a = this.uniformSemantics[t];
                return !!a && this.setUniform(e, a.type, a.symbol, n)
            },
            enableAttributes: function(e, t, n) {
                var a, i = e.gl,
                    r = this._program,
                    o = this._locations;
                (a = n ? n.__enabledAttributeList : s[e.__uid__]) || (a = n ? n.__enabledAttributeList = [] : s[e.__uid__] = []);
                for (var c = [], l = 0; l < t.length; l++) {
                    var u = t[l];
                    if (this.attributes[u]) {
                        var p = o[u];
                        if (null == p) {
                            if (-1 === (p = i.getAttribLocation(r, u))) {
                                c[l] = -1;
                                continue
                            }
                            o[u] = p
                        }
                        c[l] = p, a[p] ? a[p] = 2 : a[p] = 1
                    } else c[l] = -1
                }
                for (var l = 0; l < a.length; l++) switch (a[l]) {
                    case 1:
                        i.enableVertexAttribArray(l), a[l] = 3;
                        break;
                    case 2:
                        a[l] = 3;
                        break;
                    case 3:
                        i.disableVertexAttribArray(l), a[l] = 0
                }
                return c
            },
            buildProgram: function(e, t, n, a) {
                var r = e.createShader(e.VERTEX_SHADER),
                    o = e.createProgram();
                e.shaderSource(r, n), e.compileShader(r);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, a), e.compileShader(s);
                var c = i(e, r, n);
                if (c) return c;
                if (c = i(e, s, a)) return c;
                if (e.attachShader(o, r), e.attachShader(o, s), t.attributeSemantics.POSITION) e.bindAttribLocation(o, 0, t.attributeSemantics.POSITION.symbol);
                else {
                    var l = Object.keys(this.attributes);
                    e.bindAttribLocation(o, 0, l[0])
                }
                if (e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) return "Could not link program\nVALIDATE_STATUS: " + e.getProgramParameter(o, e.VALIDATE_STATUS) + ", gl error [" + e.getError() + "]";
                for (var u = 0; u < t.uniforms.length; u++) {
                    var p = t.uniforms[u];
                    this._locations[p] = e.getUniformLocation(o, p)
                }
                e.deleteShader(r), e.deleteShader(s), this._program = o, this.vertexCode = n, this.fragmentCode = a
            }
        });
    t.a = l
}, function(e, t, n) {
    "use strict";
    t.a = "vec3 calcAmbientSHLight(int idx, vec3 N) {\n int offset = 9 * idx;\n return ambientSHLightCoefficients[0]\n + ambientSHLightCoefficients[1] * N.x\n + ambientSHLightCoefficients[2] * N.y\n + ambientSHLightCoefficients[3] * N.z\n + ambientSHLightCoefficients[4] * N.x * N.z\n + ambientSHLightCoefficients[5] * N.z * N.y\n + ambientSHLightCoefficients[6] * N.y * N.x\n + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)\n + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);\n}"
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = n.n(a),
        r = i.a.quat,
        o = function(e, t, n, a) {
            e = e || 0, t = t || 0, n = n || 0, a = void 0 === a ? 1 : a, this.array = r.fromValues(e, t, n, a), this._dirty = !0
        };
    o.prototype = {
        constructor: o,
        add: function(e) {
            return r.add(this.array, this.array, e.array), this._dirty = !0, this
        },
        calculateW: function() {
            return r.calculateW(this.array, this.array), this._dirty = !0, this
        },
        set: function(e, t, n, a) {
            return this.array[0] = e, this.array[1] = t, this.array[2] = n, this.array[3] = a, this._dirty = !0, this
        },
        setArray: function(e) {
            return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this.array[3] = e[3], this._dirty = !0, this
        },
        clone: function() {
            return new o(this.x, this.y, this.z, this.w)
        },
        conjugate: function() {
            return r.conjugate(this.array, this.array), this._dirty = !0, this
        },
        copy: function(e) {
            return r.copy(this.array, e.array), this._dirty = !0, this
        },
        dot: function(e) {
            return r.dot(this.array, e.array)
        },
        fromMat3: function(e) {
            return r.fromMat3(this.array, e.array), this._dirty = !0, this
        },
        fromMat4: function() {
            var e = i.a.mat3,
                t = e.create();
            return function(n) {
                return e.fromMat4(t, n.array), e.transpose(t, t), r.fromMat3(this.array, t), this._dirty = !0, this
            }
        }(),
        identity: function() {
            return r.identity(this.array), this._dirty = !0, this
        },
        invert: function() {
            return r.invert(this.array, this.array), this._dirty = !0, this
        },
        len: function() {
            return r.len(this.array)
        },
        length: function() {
            return r.length(this.array)
        },
        lerp: function(e, t, n) {
            return r.lerp(this.array, e.array, t.array, n), this._dirty = !0, this
        },
        mul: function(e) {
            return r.mul(this.array, this.array, e.array), this._dirty = !0, this
        },
        mulLeft: function(e) {
            return r.multiply(this.array, e.array, this.array), this._dirty = !0, this
        },
        multiply: function(e) {
            return r.multiply(this.array, this.array, e.array), this._dirty = !0, this
        },
        multiplyLeft: function(e) {
            return r.multiply(this.array, e.array, this.array), this._dirty = !0, this
        },
        normalize: function() {
            return r.normalize(this.array, this.array), this._dirty = !0, this
        },
        rotateX: function(e) {
            return r.rotateX(this.array, this.array, e), this._dirty = !0, this
        },
        rotateY: function(e) {
            return r.rotateY(this.array, this.array, e), this._dirty = !0, this
        },
        rotateZ: function(e) {
            return r.rotateZ(this.array, this.array, e), this._dirty = !0, this
        },
        rotationTo: function(e, t) {
            return r.rotationTo(this.array, e.array, t.array), this._dirty = !0, this
        },
        setAxes: function(e, t, n) {
            return r.setAxes(this.array, e.array, t.array, n.array), this._dirty = !0, this
        },
        setAxisAngle: function(e, t) {
            return r.setAxisAngle(this.array, e.array, t), this._dirty = !0, this
        },
        slerp: function(e, t, n) {
            return r.slerp(this.array, e.array, t.array, n), this._dirty = !0, this
        },
        sqrLen: function() {
            return r.sqrLen(this.array)
        },
        squaredLength: function() {
            return r.squaredLength(this.array)
        },
        fromEuler: function(e, t) {
            return o.fromEuler(this, e, t)
        },
        toString: function() {
            return "[" + Array.prototype.join.call(this.array, ",") + "]"
        },
        toArray: function() {
            return Array.prototype.slice.call(this.array)
        }
    };
    var s = Object.defineProperty;
    if (s) {
        var c = o.prototype;
        s(c, "x", {
            get: function() {
                return this.array[0]
            },
            set: function(e) {
                this.array[0] = e, this._dirty = !0
            }
        }), s(c, "y", {
            get: function() {
                return this.array[1]
            },
            set: function(e) {
                this.array[1] = e, this._dirty = !0
            }
        }), s(c, "z", {
            get: function() {
                return this.array[2]
            },
            set: function(e) {
                this.array[2] = e, this._dirty = !0
            }
        }), s(c, "w", {
            get: function() {
                return this.array[3]
            },
            set: function(e) {
                this.array[3] = e, this._dirty = !0
            }
        })
    }
    o.add = function(e, t, n) {
        return r.add(e.array, t.array, n.array), e._dirty = !0, e
    }, o.set = function(e, t, n, a, i) {
        r.set(e.array, t, n, a, i), e._dirty = !0
    }, o.copy = function(e, t) {
        return r.copy(e.array, t.array), e._dirty = !0, e
    }, o.calculateW = function(e, t) {
        return r.calculateW(e.array, t.array), e._dirty = !0, e
    }, o.conjugate = function(e, t) {
        return r.conjugate(e.array, t.array), e._dirty = !0, e
    }, o.identity = function(e) {
        return r.identity(e.array), e._dirty = !0, e
    }, o.invert = function(e, t) {
        return r.invert(e.array, t.array), e._dirty = !0, e
    }, o.dot = function(e, t) {
        return r.dot(e.array, t.array)
    }, o.len = function(e) {
        return r.length(e.array)
    }, o.lerp = function(e, t, n, a) {
        return r.lerp(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.slerp = function(e, t, n, a) {
        return r.slerp(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.mul = function(e, t, n) {
        return r.multiply(e.array, t.array, n.array), e._dirty = !0, e
    }, o.multiply = o.mul, o.rotateX = function(e, t, n) {
        return r.rotateX(e.array, t.array, n), e._dirty = !0, e
    }, o.rotateY = function(e, t, n) {
        return r.rotateY(e.array, t.array, n), e._dirty = !0, e
    }, o.rotateZ = function(e, t, n) {
        return r.rotateZ(e.array, t.array, n), e._dirty = !0, e
    }, o.setAxisAngle = function(e, t, n) {
        return r.setAxisAngle(e.array, t.array, n), e._dirty = !0, e
    }, o.normalize = function(e, t) {
        return r.normalize(e.array, t.array), e._dirty = !0, e
    }, o.sqrLen = function(e) {
        return r.sqrLen(e.array)
    }, o.squaredLength = o.sqrLen, o.fromMat3 = function(e, t) {
        return r.fromMat3(e.array, t.array), e._dirty = !0, e
    }, o.setAxes = function(e, t, n, a) {
        return r.setAxes(e.array, t.array, n.array, a.array), e._dirty = !0, e
    }, o.rotationTo = function(e, t, n) {
        return r.rotationTo(e.array, t.array, n.array), e._dirty = !0, e
    }, o.fromEuler = function(e, t, n) {
        e._dirty = !0, t = t.array;
        var a = e.array,
            i = Math.cos(t[0] / 2),
            r = Math.cos(t[1] / 2),
            o = Math.cos(t[2] / 2),
            s = Math.sin(t[0] / 2),
            c = Math.sin(t[1] / 2),
            l = Math.sin(t[2] / 2),
            n = (n || "XYZ").toUpperCase();
        switch (n) {
            case "XYZ":
                a[0] = s * r * o + i * c * l, a[1] = i * c * o - s * r * l, a[2] = i * r * l + s * c * o, a[3] = i * r * o - s * c * l;
                break;
            case "YXZ":
                a[0] = s * r * o + i * c * l, a[1] = i * c * o - s * r * l, a[2] = i * r * l - s * c * o, a[3] = i * r * o + s * c * l;
                break;
            case "ZXY":
                a[0] = s * r * o - i * c * l, a[1] = i * c * o + s * r * l, a[2] = i * r * l + s * c * o, a[3] = i * r * o - s * c * l;
                break;
            case "ZYX":
                a[0] = s * r * o - i * c * l, a[1] = i * c * o + s * r * l, a[2] = i * r * l - s * c * o, a[3] = i * r * o + s * c * l;
                break;
            case "YZX":
                a[0] = s * r * o + i * c * l, a[1] = i * c * o + s * r * l, a[2] = i * r * l - s * c * o, a[3] = i * r * o - s * c * l;
                break;
            case "XZY":
                a[0] = s * r * o - i * c * l, a[1] = i * c * o - s * r * l, a[2] = i * r * l + s * c * o, a[3] = i * r * o + s * c * l
        }
    }, t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        i = n(0),
        r = n.n(i),
        o = r.a.vec3,
        s = r.a.mat4,
        c = r.a.vec4,
        l = function(e, t) {
            this.normal = e || new a.a(0, 1, 0), this.distance = t || 0
        };
    l.prototype = {
        constructor: l,
        distanceToPoint: function(e) {
            return o.dot(e.array, this.normal.array) - this.distance
        },
        projectPoint: function(e, t) {
            t || (t = new a.a);
            var n = this.distanceToPoint(e);
            return o.scaleAndAdd(t.array, e.array, this.normal.array, -n), t._dirty = !0, t
        },
        normalize: function() {
            var e = 1 / o.len(this.normal.array);
            o.scale(this.normal.array, e), this.distance *= e
        },
        intersectFrustum: function(e) {
            for (var t = e.vertices, n = this.normal.array, a = o.dot(t[0].array, n) > this.distance, i = 1; i < 8; i++)
                if (o.dot(t[i].array, n) > this.distance != a) return !0
        },
        intersectLine: function() {
            var e = o.create();
            return function(t, n, i) {
                var r = this.distanceToPoint(t),
                    s = this.distanceToPoint(n);
                if (r > 0 && s > 0 || r < 0 && s < 0) return null;
                var c = this.normal.array,
                    l = this.distance,
                    u = t.array;
                o.sub(e, n.array, t.array), o.normalize(e, e);
                var p = o.dot(c, e);
                if (0 === p) return null;
                i || (i = new a.a);
                var d = (o.dot(c, u) - l) / p;
                return o.scaleAndAdd(i.array, u, e, -d), i._dirty = !0, i
            }
        }(),
        applyTransform: function() {
            var e = s.create(),
                t = c.create(),
                n = c.create();
            return n[3] = 1,
                function(a) {
                    a = a.array, o.scale(n, this.normal.array, this.distance), c.transformMat4(n, n, a), this.distance = o.dot(n, this.normal.array), s.invert(e, a), s.transpose(e, e), t[3] = 0, o.copy(t, this.normal.array), c.transformMat4(t, t, e), o.copy(this.normal.array, t)
                }
        }(),
        copy: function(e) {
            o.copy(this.normal.array, e.normal.array), this.normal._dirty = !0, this.distance = e.distance
        },
        clone: function() {
            var e = new l;
            return e.copy(this), e
        }
    }, t.a = l
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(49),
        r = n(0),
        o = n.n(r),
        s = o.a.quat,
        c = o.a.vec3,
        l = o.a.mat4,
        u = a.a.extend(function() {
            return {
                relativeRootNode: null,
                name: "",
                joints: [],
                _clips: [],
                _invBindPoseMatricesArray: null,
                _jointMatricesSubArrays: [],
                _skinMatricesArray: null,
                _skinMatricesSubArrays: [],
                _subSkinMatricesArray: {}
            }
        }, {
            addClip: function(e, t) {
                for (var n = 0; n < this._clips.length; n++)
                    if (this._clips[n].clip === e) return;
                for (var a = [], n = 0; n < this.joints.length; n++) a[n] = -1;
                for (var n = 0; n < e.tracks.length; n++)
                    for (var i = 0; i < this.joints.length; i++) {
                        var r = this.joints[i],
                            o = e.tracks[n],
                            s = r.name;
                        if (t && (s = t[s]), o.name === s) {
                            a[i] = n;
                            break
                        }
                    }
                return this._clips.push({
                    maps: a,
                    clip: e
                }), this._clips.length - 1
            },
            removeClip: function(e) {
                for (var t = -1, n = 0; n < this._clips.length; n++)
                    if (this._clips[n].clip === e) {
                        t = n;
                        break
                    } t > 0 && this._clips.splice(t, 1)
            },
            removeClipsAll: function() {
                this._clips = []
            },
            getClip: function(e) {
                if (this._clips[e]) return this._clips[e].clip
            },
            getClipNumber: function() {
                return this._clips.length
            },
            updateJointMatrices: function() {
                var e = l.create();
                return function() {
                    this._invBindPoseMatricesArray = new Float32Array(16 * this.joints.length), this._skinMatricesArray = new Float32Array(16 * this.joints.length);
                    for (var t = 0; t < this.joints.length; t++) {
                        var n = this.joints[t];
                        l.copy(e, n.node.worldTransform.array), l.invert(e, e);
                        for (var a = 16 * t, i = 0; i < 16; i++) this._invBindPoseMatricesArray[a + i] = e[i]
                    }
                    this.updateMatricesSubArrays()
                }
            }(),
            setJointMatricesArray: function(e) {
                this._invBindPoseMatricesArray = e, this._skinMatricesArray = new Float32Array(e.length), this.updateMatricesSubArrays()
            },
            updateMatricesSubArrays: function() {
                for (var e = 0; e < this.joints.length; e++) this._jointMatricesSubArrays[e] = this._invBindPoseMatricesArray.subarray(16 * e, 16 * (e + 1)), this._skinMatricesSubArrays[e] = this._skinMatricesArray.subarray(16 * e, 16 * (e + 1))
            },
            update: function() {
                this._setPose();
                for (var e = 0; e < this.joints.length; e++) {
                    var t = this.joints[e];
                    l.multiply(this._skinMatricesSubArrays[e], t.node.worldTransform.array, this._jointMatricesSubArrays[e])
                }
            },
            getSubSkinMatrices: function(e, t) {
                var n = this._subSkinMatricesArray[e];
                n || (n = this._subSkinMatricesArray[e] = new Float32Array(16 * t.length));
                for (var a = 0, i = 0; i < t.length; i++)
                    for (var r = t[i], o = 0; o < 16; o++) n[a++] = this._skinMatricesArray[16 * r + o];
                return n
            },
            _setPose: function() {
                if (this._clips[0])
                    for (var e = this._clips[0].clip, t = this._clips[0].maps, n = 0; n < this.joints.length; n++) {
                        var a = this.joints[n];
                        if (-1 !== t[n]) {
                            var i = e.tracks[t[n]];
                            i.channels.position && c.copy(a.node.position.array, i.position), i.channels.rotation && s.copy(a.node.rotation.array, i.rotation), i.channels.scale && c.copy(a.node.scale.array, i.scale), a.node.position._dirty = !0, a.node.rotation._dirty = !0, a.node.scale._dirty = !0
                        }
                    }
            },
            clone: function(e) {
                var t = new u;
                t.name = this.name;
                for (var n = 0; n < this.joints.length; n++) {
                    var a = new i.a,
                        r = this.joints[n];
                    if (a.name = r.name, a.index = r.index, e) {
                        var o = e[r.node.__uid__];
                        o || console.warn("Can't find node"), a.node = o || r.node
                    } else a.node = r.node;
                    t.joints.push(a)
                }
                if (this._invBindPoseMatricesArray) {
                    var s = this._invBindPoseMatricesArray.length;
                    t._invBindPoseMatricesArray = new Float32Array(s);
                    for (var n = 0; n < s; n++) t._invBindPoseMatricesArray[n] = this._invBindPoseMatricesArray[n];
                    t._skinMatricesArray = new Float32Array(s), t.updateMatricesSubArrays()
                }
                return t.update(), t
            }
        });
    t.a = u
}, function(e, t, n) {
    "use strict";
    var a = n(50),
        i = n(0),
        r = n.n(i),
        o = r.a.quat,
        s = r.a.vec3,
        c = function(e) {
            e = e || {}, a.a.call(this, e), this.tracks = e.tracks || [], this.calcLifeFromTracks()
        };
    c.prototype = Object.create(a.a.prototype), c.prototype.constructor = c, c.prototype.step = function(e, t, n) {
        var i = a.a.prototype.step.call(this, e, t, !0);
        if ("finish" !== i) {
            var e = this.getElapsedTime();
            this._range && (e = this._range[0] + e), this.setTime(e)
        }
        return n || "paused" === i || this.fire("frame"), i
    }, c.prototype.setRange = function(e) {
        this.calcLifeFromTracks(), this._range = e, e && (e[1] = Math.min(e[1], this.life), e[0] = Math.min(e[0], this.life), this.life = e[1] - e[0])
    }, c.prototype.setTime = function(e) {
        for (var t = 0; t < this.tracks.length; t++) this.tracks[t].setTime(e)
    }, c.prototype.calcLifeFromTracks = function() {
        this.life = 0;
        for (var e = 0; e < this.tracks.length; e++) this.life = Math.max(this.life, this.tracks[e].getMaxTime())
    }, c.prototype.addTrack = function(e) {
        this.tracks.push(e), this.calcLifeFromTracks()
    }, c.prototype.removeTarck = function(e) {
        var t = this.tracks.indexOf(e);
        t >= 0 && this.tracks.splice(t, 1)
    }, c.prototype.getSubClip = function(e, t, n) {
        for (var a = new c({
                name: this.name
            }), i = 0; i < this.tracks.length; i++) {
            var r = this.tracks[i].getSubTrack(e, t);
            a.addTrack(r)
        }
        return void 0 !== n && a.setLoop(n), a.life = t - e, a
    }, c.prototype.blend1D = function(e, t, n) {
        for (var a = 0; a < this.tracks.length; a++) {
            var i = e.tracks[a],
                r = t.tracks[a];
            this.tracks[a].blend1D(i, r, n)
        }
    }, c.prototype.additiveBlend = function(e, t) {
        for (var n = 0; n < this.tracks.length; n++) {
            var a = e.tracks[n],
                i = t.tracks[n];
            this.tracks[n].additiveBlend(a, i)
        }
    }, c.prototype.subtractiveBlend = function(e, t) {
        for (var n = 0; n < this.tracks.length; n++) {
            var a = e.tracks[n],
                i = t.tracks[n];
            this.tracks[n].subtractiveBlend(a, i)
        }
    }, c.prototype.blend2D = function(e, t, n, a, i) {
        for (var r = 0; r < this.tracks.length; r++) {
            var o = e.tracks[r],
                s = t.tracks[r],
                c = n.tracks[r];
            this.tracks[r].blend2D(o, s, c, a, i)
        }
    }, c.prototype.copy = function(e) {
        for (var t = 0; t < this.tracks.length; t++) {
            var n = e.tracks[t],
                a = this.tracks[t];
            s.copy(a.position, n.position), s.copy(a.scale, n.scale), o.copy(a.rotation, n.rotation)
        }
    }, c.prototype.clone = function() {
        for (var e = a.a.prototype.clone.call(this), t = 0; t < this.tracks.length; t++) e.addTrack(this.tracks[t].clone());
        return e.life = this.life, e
    }, t.a = c
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a, i, r) {
        var o = t[i],
            s = t[i + 1],
            c = t[i + 2];
        return e[0] = o + a * (n[r] - o), e[1] = s + a * (n[r + 1] - s), e[2] = c + a * (n[r + 2] - c), e
    }

    function i(e, t, n, a, i, r) {
        var o, s, c, l, u, p = t[0 + i],
            d = t[1 + i],
            f = t[2 + i],
            h = t[3 + i],
            m = n[0 + r],
            v = n[1 + r],
            g = n[2 + r],
            x = n[3 + r];
        return s = p * m + d * v + f * g + h * x, s < 0 && (s = -s, m = -m, v = -v, g = -g, x = -x), 1 - s > 1e-6 ? (o = Math.acos(s), c = Math.sin(o), l = Math.sin((1 - a) * o) / c, u = Math.sin(a * o) / c) : (l = 1 - a, u = a), e[0] = l * p + u * m, e[1] = l * d + u * v, e[2] = l * f + u * g, e[3] = l * h + u * x, e
    }
    var r = n(0),
        o = n.n(r),
        s = o.a.quat,
        c = o.a.vec3,
        l = function(e) {
            e = e || {}, this.name = e.name || "", this.target = e.target || null, this.position = c.create(), this.rotation = s.create(), this.scale = c.fromValues(1, 1, 1), this.channels = {
                time: null,
                position: null,
                rotation: null,
                scale: null
            }, this._cacheKey = 0, this._cacheTime = 0
        };
    l.prototype.setTime = function(e) {
        if (this.channels.time) {
            var t = this.channels,
                n = t.time.length,
                r = -1;
            if (1 === n) return t.rotation && s.copy(this.rotation, t.rotation), t.position && c.copy(this.position, t.position), void(t.scale && c.copy(this.scale, t.scale));
            if (e <= t.time[0]) e = t.time[0], r = 0;
            else if (e >= t.time[n - 1]) e = t.time[n - 1], r = n - 2;
            else if (e < this._cacheTime) {
                for (var o = Math.min(n - 1, this._cacheKey + 1), l = o; l >= 0; l--)
                    if (t.time[l - 1] <= e && t.time[l] > e) {
                        r = l - 1;
                        break
                    }
            } else
                for (var l = this._cacheKey; l < n - 1; l++)
                    if (t.time[l] <= e && t.time[l + 1] > e) {
                        r = l;
                        break
                    } if (r > -1) {
                this._cacheKey = r, this._cacheTime = e;
                var u = r,
                    p = r + 1,
                    d = t.time[u],
                    f = t.time[p],
                    h = f - d,
                    m = 0 === h ? 0 : (e - d) / h;
                t.rotation && i(this.rotation, t.rotation, t.rotation, m, 4 * u, 4 * p), t.position && a(this.position, t.position, t.position, m, 3 * u, 3 * p), t.scale && a(this.scale, t.scale, t.scale, m, 3 * u, 3 * p)
            }
            r === n - 2 && (this._cacheKey = 0, this._cacheTime = 0), this.updateTarget()
        }
    }, l.prototype.updateTarget = function() {
        var e = this.channels;
        this.target && (e.position && this.target.position.setArray(this.position), e.rotation && this.target.rotation.setArray(this.rotation), e.scale && this.target.scale.setArray(this.scale))
    }, l.prototype.getMaxTime = function() {
        return this.channels.time[this.channels.time.length - 1]
    }, l.prototype.getSubTrack = function(e, t) {
        var n = new l({
                name: this.name
            }),
            a = this.channels.time[0];
        e = Math.min(Math.max(e, a), this.life), t = Math.min(Math.max(t, a), this.life);
        var i = this._findRange(e),
            r = this._findRange(t),
            o = r[0] - i[0] + 1;
        0 === i[1] && 0 === r[1] && (o -= 1), this.channels.rotation && (n.channels.rotation = new Float32Array(4 * o)), this.channels.position && (n.channels.position = new Float32Array(3 * o)), this.channels.scale && (n.channels.scale = new Float32Array(3 * o)), this.channels.time && (n.channels.time = new Float32Array(o)), this.setTime(e);
        for (var s = 0; s < 3; s++) n.channels.rotation[s] = this.rotation[s], n.channels.position[s] = this.position[s], n.channels.scale[s] = this.scale[s];
        n.channels.time[0] = 0, n.channels.rotation[3] = this.rotation[3];
        for (var s = 1; s < o - 1; s++) {
            for (var c, u = 0; u < 3; u++) c = i[0] + s, n.channels.rotation[4 * s + u] = this.channels.rotation[4 * c + u], n.channels.position[3 * s + u] = this.channels.position[3 * c + u], n.channels.scale[3 * s + u] = this.channels.scale[3 * c + u];
            n.channels.time[s] = this.channels.time[c] - e, n.channels.rotation[4 * s + 3] = this.channels.rotation[4 * c + 3]
        }
        this.setTime(t);
        for (var s = 0; s < 3; s++) n.channels.rotation[4 * (o - 1) + s] = this.rotation[s], n.channels.position[3 * (o - 1) + s] = this.position[s], n.channels.scale[3 * (o - 1) + s] = this.scale[s];
        return n.channels.time[o - 1] = t - e, n.channels.rotation[4 * (o - 1) + 3] = this.rotation[3], n.life = t - e, n
    }, l.prototype._findRange = function(e) {
        for (var t = this.channels, n = t.time.length, a = -1, i = 0; i < n - 1; i++) t.time[i] <= e && t.time[i + 1] > e && (a = i);
        var r = 0;
        if (a >= 0) var o = t.time[a],
            s = t.time[a + 1],
            r = (e - o) / (s - o);
        return [a, r]
    }, l.prototype.blend1D = function(e, t, n) {
        c.lerp(this.position, e.position, t.position, n), c.lerp(this.scale, e.scale, t.scale, n), s.slerp(this.rotation, e.rotation, t.rotation, n)
    }, l.prototype.blend2D = function() {
        var e = s.create(),
            t = s.create();
        return function(n, a, i, r, o) {
            var c = 1 - r - o;
            this.position[0] = n.position[0] * c + a.position[0] * r + i.position[0] * o, this.position[1] = n.position[1] * c + a.position[1] * r + i.position[1] * o, this.position[2] = n.position[2] * c + a.position[2] * r + i.position[2] * o, this.scale[0] = n.scale[0] * c + a.scale[0] * r + i.scale[0] * o, this.scale[1] = n.scale[1] * c + a.scale[1] * r + i.scale[1] * o, this.scale[2] = n.scale[2] * c + a.scale[2] * r + i.scale[2] * o;
            var l = r + o;
            0 === l ? s.copy(this.rotation, n.rotation) : (s.slerp(e, n.rotation, a.rotation, l), s.slerp(t, n.rotation, i.rotation, l), s.slerp(this.rotation, e, t, o / l))
        }
    }(), l.prototype.additiveBlend = function(e, t) {
        c.add(this.position, e.position, t.position), c.add(this.scale, e.scale, t.scale), s.multiply(this.rotation, t.rotation, e.rotation)
    }, l.prototype.subtractiveBlend = function(e, t) {
        c.sub(this.position, e.position, t.position), c.sub(this.scale, e.scale, t.scale), s.invert(this.rotation, t.rotation), s.multiply(this.rotation, this.rotation, e.rotation)
    }, l.prototype.clone = function() {
        var e = l.prototype.clone.call(this);
        return e.channels = {
            time: this.channels.time || null,
            position: this.channels.position || null,
            rotation: this.channels.rotation || null,
            scale: this.channels.scale || null
        }, c.copy(e.position, this.position), s.copy(e.rotation, this.rotation), c.copy(e.scale, this.scale), e.target = this.target, e.updateTarget(), e
    }, t.a = l
}, function(e, t, n) {
    "use strict";
    var a = n(39),
        i = n(82),
        r = n(83),
        o = n(84),
        s = n(45),
        c = n(85),
        l = n(52),
        u = n(40),
        p = n(48),
        d = n(2);
    d.a.import(a.a), d.a.import(i.a), d.a.import(r.a), d.a.import(o.a), d.a.import(s.a), d.a.import(c.a), d.a.import(l.a), d.a.import(u.a), p.a.template("clay.basic", d.a.source("clay.basic.vertex"), d.a.source("clay.basic.fragment")), p.a.template("clay.lambert", d.a.source("clay.lambert.vertex"), d.a.source("clay.lambert.fragment")), p.a.template("clay.wireframe", d.a.source("clay.wireframe.vertex"), d.a.source("clay.wireframe.fragment")), p.a.template("clay.skybox", d.a.source("clay.skybox.vertex"), d.a.source("clay.skybox.fragment")), p.a.template("clay.prez", d.a.source("clay.prez.vertex"), d.a.source("clay.prez.fragment")), p.a.template("clay.standard", d.a.source("clay.standard.vertex"), d.a.source("clay.standard.fragment")), p.a.template("clay.standardMR", d.a.source("clay.standardMR.vertex"), d.a.source("clay.standardMR.fragment"))
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.util.rand\nhighp float rand(vec2 uv) {\n const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);\n return fract(sin(sn) * c);\n}\n@end\n@export clay.util.calculate_attenuation\nuniform float attenuationFactor : 5.0;\nfloat lightAttenuation(float dist, float range)\n{\n float attenuation = 1.0;\n attenuation = dist*dist/(range*range+1.0);\n float att_s = attenuationFactor;\n attenuation = 1.0/(attenuation*att_s+1.0);\n att_s = 1.0/(att_s+1.0);\n attenuation = attenuation - att_s;\n attenuation /= 1.0 - att_s;\n return clamp(attenuation, 0.0, 1.0);\n}\n@end\n@export clay.util.edge_factor\nfloat edgeFactor(float width)\n{\n vec3 d = fwidth(v_Barycentric);\n vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);\n return min(min(a3.x, a3.y), a3.z);\n}\n@end\n@export clay.util.encode_float\nvec4 encodeFloat(const in float depth)\n{\n const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);\n const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);\n vec4 res = fract(depth * bitShifts);\n res -= res.xxyz * bit_mask;\n return res;\n}\n@end\n@export clay.util.decode_float\nfloat decodeFloat(const in vec4 color)\n{\n const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);\n return dot(color, bitShifts);\n}\n@end\n@export clay.util.float\n@import clay.util.encode_float\n@import clay.util.decode_float\n@end\n@export clay.util.rgbm_decode\nvec3 RGBMDecode(vec4 rgbm, float range) {\n return range * rgbm.rgb * rgbm.a;\n}\n@end\n@export clay.util.rgbm_encode\nvec4 RGBMEncode(vec3 color, float range) {\n if (dot(color, color) == 0.0) {\n return vec4(0.0);\n }\n vec4 rgbm;\n color /= range;\n rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);\n rgbm.a = ceil(rgbm.a * 255.0) / 255.0;\n rgbm.rgb = color / rgbm.a;\n return rgbm;\n}\n@end\n@export clay.util.rgbm\n@import clay.util.rgbm_decode\n@import clay.util.rgbm_encode\nvec4 decodeHDR(vec4 color)\n{\n#if defined(RGBM_DECODE) || defined(RGBM)\n return vec4(RGBMDecode(color, 8.12), 1.0);\n#else\n return color;\n#endif\n}\nvec4 encodeHDR(vec4 color)\n{\n#if defined(RGBM_ENCODE) || defined(RGBM)\n return RGBMEncode(color.xyz, 8.12);\n#else\n return color;\n#endif\n}\n@end\n@export clay.util.srgb\nvec4 sRGBToLinear(in vec4 value) {\n return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);\n}\nvec4 linearTosRGB(in vec4 value) {\n return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);\n}\n@end\n@export clay.chunk.skinning_header\n#ifdef SKINNING\nattribute vec3 weight : WEIGHT;\nattribute vec4 joint : JOINT;\nuniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;\nmat4 getSkinMatrix(float idx) {\n return skinMatrix[int(idx)];\n}\n#endif\n@end\n@export clay.chunk.skin_matrix\nmat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;\nif (weight.y > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.y) * weight.y;\n}\nif (weight.z > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.z) * weight.z;\n}\nfloat weightW = 1.0-weight.x-weight.y-weight.z;\nif (weightW > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.w) * weightW;\n}\n@end\n@export clay.util.parallax_correct\nvec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {\n vec3 first = (boxMax - pos) / dir;\n vec3 second = (boxMin - pos) / dir;\n vec3 further = max(first, second);\n float dist = min(further.x, min(further.y, further.z));\n vec3 fixedPos = pos + dir * dist;\n vec3 boxCenter = (boxMax + boxMin) * 0.5;\n return normalize(fixedPos - boxCenter);\n}\n@end\n@export clay.util.clamp_sample\nvec4 clampSample(const in sampler2D texture, const in vec2 coord)\n{\n#ifdef STEREO\n float eye = step(0.5, coord.x) * 0.5;\n vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));\n#else\n vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));\n#endif\n return texture2D(texture, coordClamped);\n}\n@end\n@export clay.util.ACES\nvec3 ACESToneMapping(vec3 color)\n{\n const float A = 2.51;\n const float B = 0.03;\n const float C = 2.43;\n const float D = 0.59;\n const float E = 0.14;\n return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.basic.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec2 uvRepeat : [1.0, 1.0];\nuniform vec2 uvOffset : [0.0, 0.0];\nattribute vec2 texcoord : TEXCOORD_0;\nattribute vec3 position : POSITION;\nattribute vec3 barycentric;\n@import clay.chunk.skinning_header\nvarying vec2 v_Texcoord;\nvarying vec3 v_Barycentric;\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\nvoid main()\n{\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n v_Texcoord = texcoord * uvRepeat + uvOffset;\n v_Barycentric = barycentric;\n gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0);\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n}\n@end\n@export clay.basic.fragment\nvarying vec2 v_Texcoord;\nuniform sampler2D diffuseMap;\nuniform vec3 color : [1.0, 1.0, 1.0];\nuniform vec3 emission : [0.0, 0.0, 0.0];\nuniform float alpha : 1.0;\n#ifdef ALPHA_TEST\nuniform float alphaCutoff: 0.9;\n#endif\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\nuniform float lineWidth : 0.0;\nuniform vec4 lineColor : [0.0, 0.0, 0.0, 0.6];\nvarying vec3 v_Barycentric;\n@import clay.util.edge_factor\n@import clay.util.rgbm\n@import clay.util.srgb\n@import clay.util.ACES\nvoid main()\n{\n#ifdef RENDER_TEXCOORD\n gl_FragColor = vec4(v_Texcoord, 1.0, 1.0);\n return;\n#endif\n gl_FragColor = vec4(color, alpha);\n#ifdef VERTEX_COLOR\n gl_FragColor *= v_Color;\n#endif\n#ifdef DIFFUSEMAP_ENABLED\n vec4 texel = decodeHDR(texture2D(diffuseMap, v_Texcoord));\n#ifdef SRGB_DECODE\n texel = sRGBToLinear(texel);\n#endif\n#if defined(DIFFUSEMAP_ALPHA_ALPHA)\n gl_FragColor.a = texel.a;\n#endif\n gl_FragColor.rgb *= texel.rgb;\n#endif\n gl_FragColor.rgb += emission;\n if( lineWidth > 0.)\n {\n gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor(lineWidth)) * lineColor.a);\n }\n#ifdef ALPHA_TEST\n if (gl_FragColor.a < alphaCutoff) {\n discard;\n }\n#endif\n#ifdef TONEMAPPING\n gl_FragColor.rgb = ACESToneMapping(gl_FragColor.rgb);\n#endif\n#ifdef SRGB_ENCODE\n gl_FragColor = linearTosRGB(gl_FragColor);\n#endif\n gl_FragColor = encodeHDR(gl_FragColor);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.lambert.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;\nuniform mat4 world : WORLD;\nuniform vec2 uvRepeat : [1.0, 1.0];\nuniform vec2 uvOffset : [0.0, 0.0];\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\nattribute vec3 normal : NORMAL;\nattribute vec3 barycentric;\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\n@import clay.chunk.skinning_header\nvarying vec2 v_Texcoord;\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\nvarying vec3 v_Barycentric;\nvoid main()\n{\n vec3 skinnedPosition = position;\n vec3 skinnedNormal = normal;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n skinnedNormal = (skinMatrixWS * vec4(normal, 0.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4( skinnedPosition, 1.0 );\n v_Texcoord = texcoord * uvRepeat + uvOffset;\n v_Normal = normalize( ( worldInverseTranspose * vec4(skinnedNormal, 0.0) ).xyz );\n v_WorldPosition = ( world * vec4( skinnedPosition, 1.0) ).xyz;\n v_Barycentric = barycentric;\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n}\n@end\n@export clay.lambert.fragment\nvarying vec2 v_Texcoord;\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\nuniform sampler2D diffuseMap;\nuniform sampler2D alphaMap;\nuniform vec3 color : [1.0, 1.0, 1.0];\nuniform vec3 emission : [0.0, 0.0, 0.0];\nuniform float alpha : 1.0;\n#ifdef ALPHA_TEST\nuniform float alphaCutoff: 0.9;\n#endif\nuniform float lineWidth : 0.0;\nuniform vec4 lineColor : [0.0, 0.0, 0.0, 0.6];\nvarying vec3 v_Barycentric;\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n#ifdef POINT_LIGHT_COUNT\n@import clay.header.point_light\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n#ifdef SPOT_LIGHT_COUNT\n@import clay.header.spot_light\n#endif\n@import clay.util.calculate_attenuation\n@import clay.util.edge_factor\n@import clay.util.rgbm\n@import clay.plugin.compute_shadow_map\n@import clay.util.ACES\nvoid main()\n{\n#ifdef RENDER_NORMAL\n gl_FragColor = vec4(v_Normal * 0.5 + 0.5, 1.0);\n return;\n#endif\n#ifdef RENDER_TEXCOORD\n gl_FragColor = vec4(v_Texcoord, 1.0, 1.0);\n return;\n#endif\n gl_FragColor = vec4(color, alpha);\n#ifdef VERTEX_COLOR\n gl_FragColor *= v_Color;\n#endif\n#ifdef DIFFUSEMAP_ENABLED\n vec4 tex = texture2D( diffuseMap, v_Texcoord );\n#ifdef SRGB_DECODE\n tex.rgb = pow(tex.rgb, vec3(2.2));\n#endif\n gl_FragColor.rgb *= tex.rgb;\n#ifdef DIFFUSEMAP_ALPHA_ALPHA\n gl_FragColor.a *= tex.a;\n#endif\n#endif\n vec3 diffuseColor = vec3(0.0, 0.0, 0.0);\n#ifdef AMBIENT_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)\n {\n diffuseColor += ambientLightColor[_idx_];\n }\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n diffuseColor += calcAmbientSHLight(_idx_, v_Normal) * ambientSHLightColor[_idx_];\n }}\n#endif\n#ifdef POINT_LIGHT_COUNT\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsPoint[POINT_LIGHT_COUNT];\n if( shadowEnabled )\n {\n computeShadowOfPointLights(v_WorldPosition, shadowContribsPoint);\n }\n#endif\n for(int i = 0; i < POINT_LIGHT_COUNT; i++)\n {\n vec3 lightPosition = pointLightPosition[i];\n vec3 lightColor = pointLightColor[i];\n float range = pointLightRange[i];\n vec3 lightDirection = lightPosition - v_WorldPosition;\n float dist = length(lightDirection);\n float attenuation = lightAttenuation(dist, range);\n lightDirection /= dist;\n float ndl = dot( v_Normal, lightDirection );\n float shadowContrib = 1.0;\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\n if( shadowEnabled )\n {\n shadowContrib = shadowContribsPoint[i];\n }\n#endif\n diffuseColor += lightColor * clamp(ndl, 0.0, 1.0) * attenuation * shadowContrib;\n }\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)\n {\n vec3 lightDirection = -directionalLightDirection[i];\n vec3 lightColor = directionalLightColor[i];\n float ndl = dot(v_Normal, normalize(lightDirection));\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if( shadowEnabled )\n {\n shadowContrib = shadowContribsDir[i];\n }\n#endif\n diffuseColor += lightColor * clamp(ndl, 0.0, 1.0) * shadowContrib;\n }\n#endif\n#ifdef SPOT_LIGHT_COUNT\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsSpot[SPOT_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfSpotLights(v_WorldPosition, shadowContribsSpot);\n }\n#endif\n for(int i = 0; i < SPOT_LIGHT_COUNT; i++)\n {\n vec3 lightPosition = -spotLightPosition[i];\n vec3 spotLightDirection = -normalize( spotLightDirection[i] );\n vec3 lightColor = spotLightColor[i];\n float range = spotLightRange[i];\n float a = spotLightUmbraAngleCosine[i];\n float b = spotLightPenumbraAngleCosine[i];\n float falloffFactor = spotLightFalloffFactor[i];\n vec3 lightDirection = lightPosition - v_WorldPosition;\n float dist = length(lightDirection);\n float attenuation = lightAttenuation(dist, range);\n lightDirection /= dist;\n float c = dot(spotLightDirection, lightDirection);\n float falloff;\n falloff = clamp((c - a) /( b - a), 0.0, 1.0);\n falloff = pow(falloff, falloffFactor);\n float ndl = dot(v_Normal, lightDirection);\n ndl = clamp(ndl, 0.0, 1.0);\n float shadowContrib = 1.0;\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\n if( shadowEnabled )\n {\n shadowContrib = shadowContribsSpot[i];\n }\n#endif\n diffuseColor += lightColor * ndl * attenuation * (1.0-falloff) * shadowContrib;\n }\n#endif\n gl_FragColor.rgb *= diffuseColor;\n gl_FragColor.rgb += emission;\n if(lineWidth > 0.)\n {\n gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor(lineWidth)) * lineColor.a);\n }\n#ifdef ALPHA_TEST\n if (gl_FragColor.a < alphaCutoff) {\n discard;\n }\n#endif\n#ifdef TONEMAPPING\n gl_FragColor.rgb = ACESToneMapping(gl_FragColor.rgb);\n#endif\n#ifdef SRGB_ENCODE\n gl_FragColor = linearTosRGB(gl_FragColor);\n#endif\n gl_FragColor = encodeHDR(gl_FragColor);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.wireframe.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 world : WORLD;\nattribute vec3 position : POSITION;\nattribute vec3 barycentric;\n@import clay.chunk.skinning_header\nvarying vec3 v_Barycentric;\nvoid main()\n{\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition, 1.0 );\n v_Barycentric = barycentric;\n}\n@end\n@export clay.wireframe.fragment\nuniform vec3 color : [0.0, 0.0, 0.0];\nuniform float alpha : 1.0;\nuniform float lineWidth : 1.0;\nvarying vec3 v_Barycentric;\n@import clay.util.edge_factor\nvoid main()\n{\n gl_FragColor.rgb = color;\n gl_FragColor.a = (1.0-edgeFactor(lineWidth)) * alpha;\n}\n@end"
}, function(e, t, n) {
    "use strict";
    var a = n(87);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(1),
            i = n(88),
            r = "undefined" == typeof window ? e : window,
            o = r.requestAnimationFrame || r.msRequestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function(e) {
                setTimeout(e, 16)
            },
            s = a.a.extend(function() {
                return {
                    stage: null,
                    _clips: [],
                    _running: !1,
                    _time: 0,
                    _paused: !1,
                    _pausedTime: 0
                }
            }, {
                addAnimator: function(e) {
                    e.animation = this;
                    for (var t = e.getClips(), n = 0; n < t.length; n++) this.addClip(t[n])
                },
                addClip: function(e) {
                    this._clips.indexOf(e) < 0 && this._clips.push(e)
                },
                removeClip: function(e) {
                    var t = this._clips.indexOf(e);
                    t >= 0 && this._clips.splice(t, 1)
                },
                removeAnimator: function(e) {
                    for (var t = e.getClips(), n = 0; n < t.length; n++) this.removeClip(t[n]);
                    e.animation = null
                },
                _update: function() {
                    for (var e = Date.now() - this._pausedTime, t = e - this._time, n = this._clips, a = n.length, i = [], r = [], o = 0; o < a; o++) {
                        var s = n[o],
                            c = s.step(e, t, !1);
                        c && (i.push(c), r.push(s))
                    }
                    for (var o = 0; o < a;) n[o]._needsRemove ? (n[o] = n[a - 1], n.pop(), a--) : o++;
                    a = i.length;
                    for (var o = 0; o < a; o++) r[o].fire(i[o]);
                    this._time = e, this.trigger("frame", t), this.stage && this.stage.render && this.stage.render()
                },
                start: function() {
                    //joca true start
                    console.log('start');
                    function e() {
                        t._running && (o(e), t._paused || t._update())
                    }
                    var t = this;
                    this._running = !0, this._time = Date.now(), this._pausedTime = 0, o(e)
                },
                stop: function() {
                    this._running = !1
                },
                pause: function() {
                    this._paused || (this._pauseStart = Date.now(), this._paused = !0)
                },
                resume: function() {
                    this._paused && (this._pausedTime += Date.now() - this._pauseStart, this._paused = !1)
                },
                removeClipsAll: function() {
                    this._clips = []
                },
                animate: function(e, t) {
                    t = t || {};
                    var n = new i.a(e, t.loop, t.getter, t.setter, t.interpolater);
                    return n.animation = this, n
                }
            });
        t.a = s
    }).call(t, n(37))
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e[t]
    }

    function i(e, t, n) {
        e[t] = n
    }

    function r(e, t, n) {
        return (t - e) * n + e
    }

    function o(e, t, n, a, i) {
        var o = e.length;
        if (1 == i)
            for (var s = 0; s < o; s++) a[s] = r(e[s], t[s], n);
        else
            for (var c = e[0].length, s = 0; s < o; s++)
                for (var l = 0; l < c; l++) a[s][l] = r(e[s][l], t[s][l], n)
    }

    function s(e) {
        return void 0 !== e && ("string" != typeof e && "number" == typeof e.length)
    }

    function c(e) {
        if (s(e)) {
            var t = e.length;
            if (s(e[0])) {
                for (var n = [], a = 0; a < t; a++) n.push(x.call(e[a]));
                return n
            }
            return x.call(e)
        }
        return e
    }

    function l(e, t, n, a, i, r, o, s, c) {
        var l = e.length;
        if (1 == c)
            for (var p = 0; p < l; p++) s[p] = u(e[p], t[p], n[p], a[p], i, r, o);
        else
            for (var d = e[0].length, p = 0; p < l; p++)
                for (var f = 0; f < d; f++) s[p][f] = u(e[p][f], t[p][f], n[p][f], a[p][f], i, r, o)
    }

    function u(e, t, n, a, i, r, o) {
        var s = .5 * (n - e),
            c = .5 * (a - t);
        return (2 * (t - n) + s + c) * o + (-3 * (t - n) - 2 * s - c) * r + s * i + t
    }

    function p(e, t, n) {
        var a = e.length,
            i = t.length;
        if (a !== i) {
            if (a > i) e.length = i;
            else
                for (var r = a; r < i; r++) e.push(1 === n ? t[r] : x.call(t[r]))
        }
        for (var o = e[0] && e[0].length, r = 0; r < e.length; r++)
            if (1 === n) isNaN(e[r]) && (e[r] = t[r]);
            else
                for (var s = 0; s < o; s++) isNaN(e[r][s]) && (e[r][s] = t[r][s])
    }

    function d(e, t, n) {
        if (e === t) return !0;
        var a = e.length;
        if (a !== t.length) return !1;
        if (1 === n) {
            for (var i = 0; i < a; i++)
                if (e[i] !== t[i]) return !1
        } else
            for (var r = e[0].length, i = 0; i < a; i++)
                for (var o = 0; o < r; o++)
                    if (e[i][o] !== t[i][o]) return !1;
        return !0
    }

    function f(e, t, n, a, i, c, f) {
        var h = e._getter,
            m = e._setter,
            g = "spline" === t,
            x = a.length;
        if (x) {
            var _ = a[0].value,
                y = s(_),
                b = y && s(_[0]) ? 2 : 1;
            a.sort(function(e, t) {
                return e.time - t.time
            });
            for (var T = [], E = [], w = [], A = a[0].value, S = !0, C = 0; C < x; C++) {
                T.push(a[C].time / f);
                var R = a[C].value;
                y && d(R, A, b) || !y && R === A || (S = !1), A = R, E.push(R), w.push(a[C].easing)
            }
            if (!S) {
                for (var M = E[x - 1], C = 0; C < x - 1; C++) y ? p(E[C], M, b) : isNaN(E[C]) && !isNaN(M) && (E[C] = M);
                y && p(h(e._target, i), M, b);
                var N, C, L, O, P, D, I, F = 0,
                    k = 0,
                    B = function(e, t) {
                        if (t < k) {
                            for (N = Math.min(F + 1, x - 1), C = N; C >= 0 && !(T[C] <= t); C--);
                            C = Math.min(C, x - 2)
                        } else {
                            for (C = F; C < x && !(T[C] > t); C++);
                            C = Math.min(C - 1, x - 2)
                        }
                        F = C, k = t;
                        var n = T[C + 1] - T[C];
                        0 !== n && (L = (t - T[C]) / n, L = Math.max(Math.min(1, L), 0), L = w[C + 1](L), g ? (P = E[C], O = E[0 === C ? C : C - 1], D = E[C > x - 2 ? x - 1 : C + 1], I = E[C > x - 3 ? x - 1 : C + 2], c ? m(e, i, c(h(e, i), O, P, D, I, L)) : y ? l(O, P, D, I, L, L * L, L * L * L, h(e, i), b) : m(e, i, u(O, P, D, I, L, L * L, L * L * L))) : c ? m(e, i, c(h(e, i), E[C], E[C + 1], L)) : y ? o(E[C], E[C + 1], L, h(e, i), b) : m(e, i, r(E[C], E[C + 1], L)))
                    },
                    U = new v.a({
                        target: e._target,
                        life: f,
                        loop: e._loop,
                        delay: e._delay,
                        onframe: B,
                        onfinish: n
                    });
                return t && "spline" !== t && U.setEasing(t), U
            }
        }
    }

    function h(e, t, n, r, o) {
        this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = n || a, this._setter = r || i, this._interpolater = o || null, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [], this._maxTime = 0, this._lastKFTime = 0
    }

    function m(e) {
        return e
    }
    var v = n(50),
        g = n(51),
        x = Array.prototype.slice;
    h.prototype = {
        constructor: h,
        when: function(e, t, n) {
            this._maxTime = Math.max(e, this._maxTime), n = ("function" == typeof n ? n : g.a[n]) || m;
            for (var a in t) this._tracks[a] || (this._tracks[a] = [], 0 !== e && this._tracks[a].push({
                time: 0,
                value: c(this._getter(this._target, a)),
                easing: n
            })), this._tracks[a].push({
                time: parseInt(e),
                value: t[a],
                easing: n
            });
            return this
        },
        then: function(e, t, n) {
            return this.when(e + this._lastKFTime, t, n), this._lastKFTime += e, this
        },
        during: function(e) {
            return this._onframeList.push(e), this
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var e = this._doneList, t = e.length, n = 0; n < t; n++) e[n].call(this)
        },
        start: function(e) {
            var t, n = this,
                a = 0,
                i = function() {
                    0 === --a && n._doneCallback()
                },
                r = 0;
            for (var o in this._tracks) {
                var s = f(this, e, i, this._tracks[o], o, n._interpolater, n._maxTime);
                s && (r = Math.max(r, s.life), this._clipList.push(s), a++, this.animation && this.animation.addClip(s), t = s)
            }
            if (t) {
                var c = t.onframe;
                t.onframe = function(e, t) {
                    c(e, t);
                    for (var a = 0; a < n._onframeList.length; a++) n._onframeList[a](e, t)
                }
            }
            return a || this._doneCallback(), this
        },
        stop: function() {
            for (var e = 0; e < this._clipList.length; e++) {
                var t = this._clipList[e];
                this.animation.removeClip(t)
            }
            this._clipList = []
        },
        delay: function(e) {
            return this._delay = e, this
        },
        done: function(e) {
            return e && this._doneList.push(e), this
        },
        getClips: function() {
            return this._clipList
        }
    }, t.a = h
}, function(e, t, n) {
    "use strict";
    var a = n(19),
        i = n(16),
        r = n(14),
        o = (n(44), n(8)),
        s = n(0),
        c = n.n(s),
        l = c.a.mat4,
        u = c.a.vec3,
        p = {
            merge: function(e, t) {
                if (e.length) {
                    var n = e[0],
                        r = n.geometry,
                        s = n.material,
                        c = new a.a({
                            dynamic: !1
                        });
                    c.boundingBox = new o.a;
                    for (var p = r.getEnabledAttributes(), d = 0; d < p.length; d++) {
                        var f = p[d],
                            h = r.attributes[f];
                        c.attributes[f] || (c.attributes[f] = h.clone(!1))
                    }
                    for (var m = l.create(), v = 0, g = 0, x = 0; x < e.length; x++) {
                        var _ = e[x].geometry;
                        _.boundingBox && (_.boundingBox.applyTransform(t ? e[x].worldTransform : e[x].localTransform), c.boundingBox.union(_.boundingBox)), v += _.vertexCount, g += _.triangleCount
                    }
                    for (var y = 0; y < p.length; y++) {
                        var f = p[y];
                        c.attributes[f].init(v)
                    }
                    c.indices = v >= 65535 ? new Uint32Array(3 * g) : new Uint16Array(3 * g);
                    for (var b = 0, T = 0, E = r.isUseIndices(), w = 0; w < e.length; w++) {
                        var A = e[w],
                            _ = A.geometry,
                            v = _.vertexCount,
                            S = t ? A.worldTransform.array : A.localTransform.array;
                        l.invert(m, S), l.transpose(m, m);
                        for (var C = 0; C < p.length; C++) {
                            var f = p[C],
                                R = _.attributes[f],
                                M = c.attributes[f];
                            if (R.value.length) {
                                for (var N = R.value.length, L = R.size, O = b * L, P = N / L, d = 0; d < N; d++) M.value[O + d] = R.value[d];
                                "position" === f ? u.forEach(M.value, L, O, P, u.transformMat4, S) : "normal" !== f && "tangent" !== f || u.forEach(M.value, L, O, P, u.transformMat4, m)
                            }
                        }
                        if (E) {
                            for (var N = _.indices.length, d = 0; d < N; d++) c.indices[d + T] = _.indices[d] + b;
                            T += N
                        }
                        b += v
                    }
                    return new i.a({
                        material: s,
                        geometry: c
                    })
                }
            },
            splitByJoints: function(e, t, n) {
                var o = e.geometry,
                    s = e.skeleton,
                    c = e.material,
                    l = e.joints;
                if (o && s && l.length) {
                    if (l.length < t) return e;
                    for (var u = o.indices, p = o.triangleCount, d = p, f = [], h = o.attributes.joint.value, m = 0; m < p; m++) f[m] = !1;
                    for (var v = [], g = [], x = function(e) {
                            return l[e]
                        }; d > 0;) {
                        for (var _ = [], y = [], b = [], T = 0, m = 0; m < l.length; m++) y[m] = -1;
                        for (var E = 0; E < p; E++)
                            if (!f[E]) {
                                for (var w = !0, A = 0, m = 0; m < 3; m++)
                                    for (var S = u[3 * E + m], C = 0; C < 4; C++) {
                                        var R = h[4 * S + C];
                                        R >= 0 && -1 === y[R] && (T < t ? (y[R] = T, b[T++] = R, v[A++] = R) : w = !1)
                                    }
                                if (w) _.push(u.subarray(3 * E, 3 * (E + 1))), f[E] = !0, d--;
                                else
                                    for (var m = 0; m < A; m++) y[v[m]] = -1, b.pop(), T--
                            } g.push({
                            triangles: _,
                            joints: b.map(x),
                            jointReverseMap: y
                        })
                    }
                    var M = new r.a({
                            name: e.name
                        }),
                        N = o.getEnabledAttributes();
                    N.splice(N.indexOf("joint"), 1);
                    for (var L = [], O = 0; O < g.length; O++) {
                        for (var P = g[O], D = P.jointReverseMap, T = P.joints.length, I = new a.a, F = new i.a({
                                name: [e.name, m].join("-"),
                                material: c,
                                geometry: I,
                                skeleton: s,
                                joints: P.joints.slice()
                            }), k = 0, B = o.vertexCount, m = 0; m < B; m++) L[m] = -1;
                        for (var E = 0; E < P.triangles.length; E++)
                            for (var U = P.triangles[E], m = 0; m < 3; m++) {
                                var S = U[m]; - 1 === L[S] && (L[S] = k, k++)
                            }
                        for (var H = 0; H < N.length; H++) {
                            var z = N[H],
                                j = I.attributes[z];
                            j.init(k)
                        }
                        I.attributes.joint.value = new Float32Array(4 * k), I.indices = k > 65535 ? new Uint32Array(3 * P.triangles.length) : new Uint16Array(3 * P.triangles.length);
                        var G = 0;
                        k = 0;
                        for (var m = 0; m < B; m++) L[m] = -1;
                        for (var E = 0; E < P.triangles.length; E++)
                            for (var V = P.triangles[E], m = 0; m < 3; m++) {
                                var S = V[m];
                                if (-1 === L[S]) {
                                    L[S] = k;
                                    for (var H = 0; H < N.length; H++)
                                        for (var z = N[H], W = o.attributes[z], j = I.attributes[z], X = W.size, C = 0; C < X; C++) j.value[k * X + C] = W.value[S * X + C];
                                    for (var C = 0; C < 4; C++) {
                                        var R = o.attributes.joint.value[4 * S + C],
                                            q = 4 * k + C;
                                        I.attributes.joint.value[q] = R >= 0 ? D[R] : -1
                                    }
                                    k++
                                }
                                I.indices[G++] = L[S]
                            }
                        I.updateBoundingBox(), M.add(F)
                    }
                    for (var Y = e.children(), m = 0; m < Y.length; m++) M.add(Y[m]);
                    if (M.position.copy(e.position), M.rotation.copy(e.rotation), M.scale.copy(e.scale), n && e.getParent()) {
                        var K = e.getParent();
                        K.remove(e), K.add(M)
                    }
                    return M
                }
            }
        };
    t.a = p
}, function(e, t, n) {
    "use strict";
    var a = n(7),
        i = n(53),
        r = function() {
            i.a.apply(this, arguments), this._tasks = [], this._fulfilledNumber = 0, this._rejectedNumber = 0
        },
        o = function() {};
    o.prototype = i.a.prototype, r.prototype = new o, r.prototype.constructor = r, r.prototype.all = function(e) {
        var t = 0,
            n = this,
            i = [];
        return this._tasks = e, this._fulfilledNumber = 0, this._rejectedNumber = 0, a.a.each(e, function(e, a) {
            e && e.once && (t++, e.once("success", function(r) {
                t--, n._fulfilledNumber++, e._fulfilled = !0, e._rejected = !1, i[a] = r, 0 === t && n.resolve(i)
            }), e.once("error", function() {
                n._rejectedNumber++, e._fulfilled = !1, e._rejected = !0, n.reject(e)
            }))
        }), 0 === t ? (setTimeout(function() {
            n.resolve(i)
        }), this) : this
    }, r.prototype.allSettled = function(e) {
        var t = 0,
            n = this,
            i = [];
        return 0 === e.length ? (setTimeout(function() {
            n.trigger("success", i)
        }), this) : (this._tasks = e, a.a.each(e, function(e, a) {
            e && e.once && (t++, e.once("success", function(r) {
                t--, n._fulfilledNumber++, e._fulfilled = !0, e._rejected = !1, i[a] = r, 0 === t && n.resolve(i)
            }), e.once("error", function(r) {
                t--, n._rejectedNumber++, e._fulfilled = !1, e._rejected = !0, i[a] = null, 0 === t && n.resolve(i)
            }))
        }), this)
    }, r.prototype.getFulfilledNumber = function(e) {
        if (e) {
            for (var t = 0, n = 0; n < this._tasks.length; n++) {
                var a = this._tasks[n];
                a instanceof r ? t += a.getFulfilledNumber(e) : a._fulfilled && (t += 1)
            }
            return t
        }
        return this._fulfilledNumber
    }, r.prototype.getRejectedNumber = function(e) {
        if (e) {
            for (var t = 0, n = 0; n < this._tasks.length; n++) {
                var a = this._tasks[n];
                a instanceof r ? t += a.getRejectedNumber(e) : a._rejected && (t += 1)
            }
            return t
        }
        return this._rejectedNumber
    }, r.prototype.getSettledNumber = function(e) {
        if (e) {
            for (var t = 0, n = 0; n < this._tasks.length; n++) {
                var a = this._tasks[n];
                a instanceof r ? t += a.getSettledNumber(e) : (a._rejected || a._fulfilled) && (t += 1)
            }
            return t
        }
        return this._fulfilledNumber + this._rejectedNumber
    }, r.prototype.getTaskNumber = function(e) {
        if (e) {
            for (var t = 0, n = 0; n < this._tasks.length; n++) {
                var a = this._tasks[n];
                t += a instanceof r ? a.getTaskNumber(e) : 1
            }
            return t
        }
        return this._tasks.length
    }, t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(43),
        r = n(21),
        o = n(4),
        s = n(9),
        c = n(46),
        l = n(6),
        u = n(0),
        p = n.n(u),
        d = p.a.vec3,
        f = a.a.extend({
            scene: null,
            camera: null,
            renderer: null
        }, function() {
            this._ray = new i.a, this._ndc = new r.a
        }, {
            pick: function(e, t, n) {
                return this.pickAll(e, t, [], n)[0] || null
            },
            pickAll: function(e, t, n, a) {
                return this.renderer.screenToNDC(e, t, this._ndc), this.camera.castRay(this._ndc, this._ray), n = n || [], this._intersectNode(this.scene, n, a || !1), n.sort(this._intersectionCompareFunc), n
            },
            _intersectNode: function(e, t, n) {
                e instanceof c.a && e.isRenderable() && (e.ignorePicking && !n || !(e.mode === l.a.TRIANGLES && e.geometry.isUseIndices() || e.geometry.pickByRay || e.geometry.pick) || this._intersectRenderable(e, t));
                for (var a = 0; a < e._children.length; a++) this._intersectNode(e._children[a], t, n)
            },
            _intersectRenderable: function() {
                var e = new o.a,
                    t = new o.a,
                    n = new o.a,
                    a = new i.a,
                    r = new s.a;
                return function(i, c) {
                    var u = i.isSkinnedMesh();
                    a.copy(this._ray), s.a.invert(r, i.worldTransform), u || a.applyTransform(r);
                    var p = i.geometry;
                    if (u || !p.boundingBox || a.intersectBoundingBox(p.boundingBox)) {
                        if (p.pick) return void p.pick(this._ndc.x, this._ndc.y, this.renderer, this.camera, i, c);
                        if (p.pickByRay) return void p.pickByRay(a, i, c);
                        var h, m, v = i.cullFace === l.a.BACK && i.frontFace === l.a.CCW || i.cullFace === l.a.FRONT && i.frontFace === l.a.CW,
                            g = p.indices,
                            x = p.attributes.position,
                            _ = p.attributes.weight,
                            y = p.attributes.joint,
                            b = [];
                        if (x && x.value && g) {
                            if (u) {
                                m = i.skeleton.getSubSkinMatrices(i.__uid__, i.joints);
                                for (var T = 0; T < i.joints.length; T++) {
                                    b[T] = b[T] || [];
                                    for (var E = 0; E < 16; E++) b[T][E] = m[16 * T + E]
                                }
                                var w = [],
                                    A = [],
                                    S = [],
                                    C = [],
                                    R = [],
                                    M = p.attributes.skinnedPosition;
                                M && M.value || (p.createAttribute("skinnedPosition", "f", 3), M = p.attributes.skinnedPosition, M.init(p.vertexCount));
                                for (var T = 0; T < p.vertexCount; T++) {
                                    x.get(T, w), _.get(T, A), y.get(T, S), A[3] = 1 - A[0] - A[1] - A[2], d.set(C, 0, 0, 0);
                                    for (var E = 0; E < 4; E++) S[E] >= 0 && A[E] > 1e-4 && (d.transformMat4(R, w, b[S[E]]), d.scaleAndAdd(C, C, R, A[E]));
                                    M.set(T, C)
                                }
                            }
                            for (var T = 0; T < g.length; T += 3) {
                                var N = g[T],
                                    L = g[T + 1],
                                    O = g[T + 2],
                                    P = u ? p.attributes.skinnedPosition : x;
                                if (P.get(N, e.array), P.get(L, t.array), P.get(O, n.array), h = v ? a.intersectTriangle(e, t, n, i.culling) : a.intersectTriangle(e, n, t, i.culling)) {
                                    var D = new o.a;
                                    u ? o.a.copy(D, h) : o.a.transformMat4(D, h, i.worldTransform), c.push(new f.Intersection(h, D, i, [N, L, O], T / 3, o.a.dist(D, this._ray.origin)))
                                }
                            }
                        }
                    }
                }
            }(),
            _intersectionCompareFunc: function(e, t) {
                return e.distance - t.distance
            }
        });
    f.Intersection = function(e, t, n, a, i, r) {
        this.point = e, this.pointWorld = t, this.target = n, this.triangle = a, this.triangleIndex = i, this.distance = r
    }, t.a = f
}, function(e, t, n) {
    "use strict";
    var a = n(19),
        i = n(8),
        r = a.a.extend({
            dynamic: !1,
            widthSegments: 40,
            heightSegments: 20,
            phiStart: 0,
            phiLength: 2 * Math.PI,
            thetaStart: 0,
            thetaLength: Math.PI,
            radius: 1
        }, function() {
            this.build()
        }, {
            build: function() {
                var e = this.heightSegments,
                    t = this.widthSegments,
                    n = this.attributes.position,
                    a = this.attributes.texcoord0,
                    r = this.attributes.normal,
                    o = (t + 1) * (e + 1);
                n.init(o), a.init(o), r.init(o);
                var s, c, l, u, p, d, f, h = o > 65535 ? Uint32Array : Uint16Array,
                    m = this.indices = new h(t * e * 6),
                    v = this.radius,
                    g = this.phiStart,
                    x = this.phiLength,
                    _ = this.thetaStart,
                    y = this.thetaLength,
                    v = this.radius,
                    b = [],
                    T = [],
                    E = 0,
                    w = 1 / v;
                for (f = 0; f <= e; f++)
                    for (d = 0; d <= t; d++) u = d / t, p = f / e, s = -v * Math.cos(g + u * x) * Math.sin(_ + p * y), c = v * Math.cos(_ + p * y), l = v * Math.sin(g + u * x) * Math.sin(_ + p * y), b[0] = s, b[1] = c, b[2] = l, T[0] = u, T[1] = p, n.set(E, b), a.set(E, T), b[0] *= w, b[1] *= w, b[2] *= w, r.set(E, b), E++;
                var A, S, C, R, M = t + 1,
                    N = 0;
                for (f = 0; f < e; f++)
                    for (d = 0; d < t; d++) S = f * M + d, A = f * M + d + 1, R = (f + 1) * M + d + 1, C = (f + 1) * M + d, m[N++] = A, m[N++] = S, m[N++] = R, m[N++] = S, m[N++] = C, m[N++] = R;
                this.boundingBox = new i.a, this.boundingBox.max.set(v, v, v), this.boundingBox.min.set(-v, -v, -v)
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.skydome.vertex\n#define SHADER_NAME skydome\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec2 texcoord : TEXCOORD_0;\nattribute vec3 position : POSITION;\nvarying vec2 v_Texcoord;\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(position, 1.0);\n v_Texcoord = texcoord;\n}\n@end\n@export clay.skydome.fragment\nuniform sampler2D environmentMap;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.srgb\n@import clay.util.ACES\nvoid main()\n{\n vec4 texel = decodeHDR(texture2D(environmentMap, v_Texcoord));\n#ifdef SRGB_DECODE\n texel = sRGBToLinear(texel);\n#endif\n#ifdef TONEMAPPING\n texel.rgb = ACESToneMapping(texel.rgb);\n#endif\n#ifdef SRGB_ENCODE\n texel = linearTosRGB(texel);\n#endif\n gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));\n}\n@end"
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
    }
    var i = n(3),
        r = n(5),
        o = (n(15), a("DXT1")),
        s = a("DXT3"),
        c = a("DXT5"),
        l = {
            parse: function(e, t) {
                var n = new Int32Array(e, 0, 31);
                if (542327876 !== n[0]) return null;
                if (4 & !n(20)) return null;
                var a, l, u = n(21),
                    p = n[4],
                    d = n[3],
                    f = 512 & n[28],
                    h = 131072 & n[2];
                switch (u) {
                    case o:
                        a = 8, l = i.a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        break;
                    case s:
                        a = 16, l = i.a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        break;
                    case c:
                        a = 16, l = i.a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;
                    default:
                        return null
                }
                var m = n[1] + 4,
                    v = f ? 6 : 1,
                    g = 1;
                h && (g = Math.max(1, n[7]));
                for (var x = [], _ = 0; _ < v; _++) {
                    var y = p,
                        b = d;
                    x[_] = new r.a({
                        width: y,
                        height: b,
                        format: l
                    });
                    for (var T = [], E = 0; E < g; E++) {
                        var w = Math.max(4, y) / 4 * Math.max(4, b) / 4 * a,
                            A = new Uint8Array(e, m, w);
                        m += w, y *= .5, b *= .5, T[E] = A
                    }
                    x[_].pixels = T[0], h && (x[_].mipmaps = T)
                }
                if (!t) return x[0];
                t.width = x[0].width, t.height = x[0].height, t.format = x[0].format, t.pixels = x[0].pixels, t.mipmaps = x[0].mipmaps
            }
        };
    t.a = l
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        if (e[3] > 0) {
            var i = Math.pow(2, e[3] - 128 - 8 + a);
            t[n + 0] = e[0] * i, t[n + 1] = e[1] * i, t[n + 2] = e[2] * i
        } else t[n + 0] = 0, t[n + 1] = 0, t[n + 2] = 0;
        return t[n + 3] = 1, t
    }

    function i(e, t, n) {
        for (var a = "", i = t; i < n; i++) a += u(e[i]);
        return a
    }

    function r(e, t) {
        t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3]
    }

    function o(e, t, n, a) {
        for (var i = 0, o = 0, s = a; s > 0;)
            if (e[o][0] = t[n++], e[o][1] = t[n++], e[o][2] = t[n++], e[o][3] = t[n++], 1 === e[o][0] && 1 === e[o][1] && 1 === e[o][2]) {
                for (var c = e[o][3] << i >>> 0; c > 0; c--) r(e[o - 1], e[o]), o++, s--;
                i += 8
            } else o++, s--, i = 0;
        return n
    }

    function s(e, t, n, a) {
        if (a < p | a > d) return o(e, t, n, a);
        var i = t[n++];
        if (2 != i) return o(e, t, n - 1, a);
        if (e[0][1] = t[n++], e[0][2] = t[n++], i = t[n++], (e[0][2] << 8 >>> 0 | i) >>> 0 !== a) return null;
        for (var i = 0; i < 4; i++)
            for (var r = 0; r < a;) {
                var s = t[n++];
                if (s > 128) {
                    s = (127 & s) >>> 0;
                    for (var c = t[n++]; s--;) e[r++][i] = c
                } else
                    for (; s--;) e[r++][i] = t[n++]
            }
        return n
    }
    var c = n(3),
        l = n(5),
        u = String.fromCharCode,
        p = 8,
        d = 32767,
        f = {
            parseRGBE: function(e, t, n) {
                null == n && (n = 0);
                var r = new Uint8Array(e),
                    o = r.length;
                if ("#?" === i(r, 0, 2)) {
                    for (var p = 2; p < o && ("\n" !== u(r[p]) || "\n" !== u(r[p + 1])); p++);
                    if (!(p >= o)) {
                        p += 2;
                        for (var d = ""; p < o; p++) {
                            var f = u(r[p]);
                            if ("\n" === f) break;
                            d += f
                        }
                        var h = d.split(" "),
                            m = parseInt(h[1]),
                            v = parseInt(h[3]);
                        if (v && m) {
                            for (var g = p + 1, x = [], _ = 0; _ < v; _++) {
                                x[_] = [];
                                for (var y = 0; y < 4; y++) x[_][y] = 0
                            }
                            for (var b = new Float32Array(v * m * 4), T = 0, E = 0; E < m; E++) {
                                var g = s(x, r, g, v);
                                if (!g) return null;
                                for (var _ = 0; _ < v; _++) a(x[_], b, T, n), T += 4
                            }
                            return t || (t = new l.a), t.width = v, t.height = m, t.pixels = b, t.type = c.a.FLOAT, t
                        }
                    }
                }
            },
            parseRGBEFromPNG: function(e) {}
        };
    t.a = f
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        this.renderer = e, n = n || "perspective", this.scene = new i.a, this.rootNode = this.scene, this.viewport = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, this.preZ = !1, this.setProjection(n), this._compositor = new l.a, this._temporalSS = new u.a, t && (this._shadowMapPass = new r.a({
            lightFrustumBias: 20
        }));
        for (var a = [], o = 0, s = 0; s < 30; s++) {
            for (var c = [], d = 0; d < 6; d++) c.push(4 * Object(p.a)(o, 2) - 2), c.push(4 * Object(p.a)(o, 3) - 2), o++;
            a.push(c)
        }
        this._pcfKernels = a, this._enableTemporalSS = "auto", this.scene.on("beforerender", function(e, t, n) {
            this.needsTemporalSS() && this._temporalSS.jitterProjection(e, n)
        }, this)
    }
    var i = n(17),
        r = n(97),
        o = n(22),
        s = n(23),
        c = (n(9), n(4), n(21)),
        l = (n(20), n(100)),
        u = n(133),
        p = n(25);
    a.prototype.setProjection = function(e) {
        var t = this.camera;
        t && t.update(), "perspective" === e ? this.camera instanceof o.a || (this.camera = new o.a, t && this.camera.setLocalTransform(t.localTransform)) : this.camera instanceof s.a || (this.camera = new s.a, t && this.camera.setLocalTransform(t.localTransform)), this.camera.near = .1, this.camera.far = 2e3
    }, a.prototype.setViewport = function(e, t, n, a, i) {
        this.camera instanceof o.a && (this.camera.aspect = n / a), i = i || 1, this.viewport.x = e, this.viewport.y = t, this.viewport.width = n, this.viewport.height = a, this.viewport.devicePixelRatio = i, this._compositor.resize(n * i, a * i), this._temporalSS.resize(n * i, a * i)
    }, a.prototype.containPoint = function(e, t) {
        var n = this.viewport;
        return t = this.layer.renderer.getHeight() - t, e >= n.x && t >= n.y && e <= n.x + n.width && t <= n.y + n.height
    };
    var d = new c.a;
    a.prototype.castRay = function(e, t, n) {
        var a = this.layer.renderer,
            i = a.viewport;
        return a.viewport = this.viewport, a.screenToNDC(e, t, d), this.camera.castRay(d, n), a.viewport = i, n
    }, a.prototype.prepareRender = function() {
        this.scene.update(), this.scene.updateLights(), this.scene.updateRenderList(this.camera), this.camera.update(), this._frame = 0, this._temporalSS.resetFrame();
        for (var e = this.scene.getLights(), t = 0; t < e.length; t++) e[t].cubemap && (this._compositor && this._compositor.isSSREnabled() ? e[t].invisible = !0 : e[t].invisible = !1)
    }, a.prototype.render = function(e) {
        this._doRender(e, this._frame), this._frame++
    }, a.prototype.needsAccumulate = function() {
        return this.needsTemporalSS() || this._needsSortProgressively
    }, a.prototype.needsTemporalSS = function() {
        var e = this._enableTemporalSS;
        return "auto" === e && (e = this._enablePostEffect), e
    }, a.prototype.hasDOF = function() {
        return this._enableDOF
    }, a.prototype.isAccumulateFinished = function() {
        var e = this._frame;
        return !(this.needsTemporalSS() && !this._temporalSS.isFinished(e) || this._compositor && !this._compositor.isSSAOFinished(e) || this._compositor && !this._compositor.isSSRFinished(e) || this._compositor && e < 30)
    }, a.prototype._doRender = function(e, t) {
        var n = this.scene,
            a = this.camera,
            i = this.renderer;
        t = t || 0, !e && this._shadowMapPass && (this._shadowMapPass.kernelPCF = this._pcfKernels[0], this._shadowMapPass.render(i, n, a, !0)), this._updateShadowPCFKernel(t), i.gl.clearColor(0, 0, 0, 0), this._enablePostEffect && (this.needsTemporalSS() && this._temporalSS.jitterProjection(i, a), this._compositor.updateGBuffer(i, n, a, this._temporalSS.getFrame())), this._updateSSAO(i, n, a, this._temporalSS.getFrame());
        var r;
        this._enablePostEffect ? (r = this._compositor.getSourceFrameBuffer(), r.bind(i), i.gl.clear(i.gl.DEPTH_BUFFER_BIT | i.gl.COLOR_BUFFER_BIT), i.render(n, a, !0, this.preZ), this.afterRenderScene(i, n, a), r.unbind(i), this.needsTemporalSS() && e ? (this._compositor.composite(i, n, a, this._temporalSS.getSourceFrameBuffer(), this._temporalSS.getFrame()), i.setViewport(this.viewport), this._temporalSS.render(i)) : (i.setViewport(this.viewport), this._compositor.composite(i, n, a, null, 0))) : this.needsTemporalSS() && e ? (r = this._temporalSS.getSourceFrameBuffer(), r.bind(i), i.saveClear(), i.clearBit = i.gl.DEPTH_BUFFER_BIT | i.gl.COLOR_BUFFER_BIT, i.render(n, a, !0, this.preZ), this.afterRenderScene(i, n, a), i.restoreClear(), r.unbind(i), i.setViewport(this.viewport), this._temporalSS.render(i)) : (i.setViewport(this.viewport), i.render(n, a, !0, this.preZ), this.afterRenderScene(i, n, a)), this.afterRenderAll(i, n, a)
    }, a.prototype.afterRenderScene = function(e, t, n) {}, a.prototype.afterRenderAll = function(e, t, n) {}, a.prototype._updateSSAO = function(e, t, n, a) {
        function i(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.material[r ? "enableTexture" : "disableTexture"]("ssaoMap"), r && n.material.set("ssaoMap", o.getSSAOTexture())
            }
        }
        var r = this._enableSSAO && this._enablePostEffect,
            o = this._compositor;
        r && this._compositor.updateSSAO(e, t, n, this._temporalSS.getFrame()), i(t.getRenderList(n).opaque), i(t.getRenderList(n).transparent)
    }, a.prototype._updateShadowPCFKernel = function(e) {
        function t(e) {
            for (var t = 0; t < e.length; t++) e[t].receiveShadow && (e[t].material.set("pcfKernel", n), e[t].material && e[t].material.define("fragment", "PCF_KERNEL_SIZE", n.length / 2))
        }
        var n = this._pcfKernels[e % this._pcfKernels.length];
        t(this.scene.getRenderList(this.camera).opaque), t(this.scene.getRenderList(this.camera).transparent)
    }, a.prototype.dispose = function(e) {
        this._compositor.dispose(e), this._temporalSS.dispose(e), this._shadowMapPass && this._shadowMapPass.dispose(e)
    }, a.prototype.setPostEffect = function(e, t) {
        var n = this._compositor;
        e = e || {}, this._enablePostEffect = !!e.enable;
        var a = e.bloom || {},
            i = e.edge || {},
            r = e.depthOfField || {},
            o = e.screenSpaceAmbientOcclusion || {},
            s = e.screenSpaceReflection || {},
            c = e.FXAA || {},
            l = e.colorCorrection || {};
        a.enable ? n.enableBloom() : n.disableBloom(), r.enable ? n.enableDOF() : n.disableDOF(), s.enable ? n.enableSSR() : n.disableSSR(), l.enable ? n.enableColorCorrection() : n.disableColorCorrection(), i.enable ? n.enableEdge() : n.disableEdge(), c.enable ? n.enableFXAA() : n.disableFXAA(), this._enableDOF = r.enable, this._enableSSAO = o.enable, this._enableSSAO ? n.enableSSAO() : n.disableSSAO(), n.setBloomIntensity(a.intensity), n.setEdgeColor(i.color), n.setColorLookupTexture(l.lookupTexture, t), n.setExposure(l.exposure), ["radius", "quality", "intensity"].forEach(function(e) {
            n.setSSAOParameter(e, o[e])
        }), ["quality", "maxRoughness", "physical"].forEach(function(e) {
            n.setSSRParameter(e, s[e])
        }), ["quality", "focalDistance", "focalRange", "blurRadius", "fstop"].forEach(function(e) {
            n.setDOFParameter(e, r[e])
        }), ["brightness", "contrast", "saturation"].forEach(function(e) {
            n.setColorCorrection(e, l[e])
        })
    }, a.prototype.isDOFEnabled = function() {
        return this._enablePostEffect && this._enableDOF
    }, a.prototype.setDOFFocusOnPoint = function(e) {
        if (this._enablePostEffect) {
            if (e > this.camera.far || e < this.camera.near) return;
            return this._compositor.setDOFParameter("focalDistance", e), !0
        }
    }, a.prototype.setTemporalSuperSampling = function(e) {
        e = e || {}, this._enableTemporalSS = e.enable
    }, a.prototype.isLinearSpace = function() {
        return this._enablePostEffect
    }, a.prototype.setRootNode = function(e) {
        if (this.rootNode !== e) {
            for (var t = this.rootNode.children(), n = 0; n < t.length; n++) e.add(t[n]);
            e !== this.scene && this.scene.add(e), this.rootNode = e
        }
    }, a.prototype.add = function(e) {
        this.rootNode.add(e)
    }, a.prototype.remove = function(e) {
        this.rootNode.remove(e)
    }, a.prototype.removeAll = function(e) {
        this.rootNode.removeAll(e)
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(6),
        r = n(4),
        o = n(8),
        s = n(42),
        c = n(9),
        l = n(27),
        u = n(2),
        p = n(10),
        d = n(11),
        f = n(3),
        h = n(5),
        m = n(15),
        v = n(22),
        g = n(23),
        x = n(13),
        _ = n(54),
        y = n(0),
        b = n.n(y),
        T = n(99),
        E = b.a.mat4,
        w = ["px", "nx", "py", "ny", "pz", "nz"];
    u.a.import(T.a);
    var A = a.a.extend(function() {
        return {
            softShadow: A.PCF,
            shadowBlur: 1,
            lightFrustumBias: "auto",
            kernelPCF: new Float32Array([1, 0, 1, 1, -1, 1, 0, 1, -1, 0, -1, -1, 1, -1, 0, -1]),
            precision: "highp",
            _lastRenderNotCastShadow: !1,
            _frameBuffer: new d.a,
            _textures: {},
            _shadowMapNumber: {
                POINT_LIGHT: 0,
                DIRECTIONAL_LIGHT: 0,
                SPOT_LIGHT: 0
            },
            _depthMaterials: {},
            _distanceMaterials: {},
            _receivers: [],
            _lightsCastShadow: [],
            _lightCameras: {},
            _lightMaterials: {},
            _texturePool: new _.a
        }
    }, function() {
        this._gaussianPassH = new x.a({
            fragment: u.a.source("clay.compositor.gaussian_blur")
        }), this._gaussianPassV = new x.a({
            fragment: u.a.source("clay.compositor.gaussian_blur")
        }), this._gaussianPassH.setUniform("blurSize", this.shadowBlur), this._gaussianPassH.setUniform("blurDir", 0), this._gaussianPassV.setUniform("blurSize", this.shadowBlur), this._gaussianPassV.setUniform("blurDir", 1), this._outputDepthPass = new x.a({
            fragment: u.a.source("clay.sm.debug_depth")
        })
    }, {
        render: function(e, t, n, a) {
            n || (n = t.getMainCamera()), this.trigger("beforerender", this, e, t, n), this._renderShadowPass(e, t, n, a), this.trigger("afterrender", this, e, t, n)
        },
        renderDebug: function(e, t) {
            e.saveClear();
            var n = e.viewport,
                a = 0,
                i = t || n.width / 4,
                r = i;
            this.softShadow === A.VSM ? this._outputDepthPass.material.define("fragment", "USE_VSM") : this._outputDepthPass.material.undefine("fragment", "USE_VSM");
            for (var o in this._textures) {
                var s = this._textures[o];
                e.setViewport(a, 0, i * s.width / s.height, r), this._outputDepthPass.setUniform("depthMap", s), this._outputDepthPass.render(e), a += i * s.width / s.height
            }
            e.setViewport(n), e.restoreClear()
        },
        _updateReceivers: function(e, t) {
            if (t.receiveShadow ? (this._receivers.push(t), t.material.set("shadowEnabled", 1), t.material.set("pcfKernel", this.kernelPCF)) : t.material.set("shadowEnabled", 0), this.softShadow === A.VSM) t.material.define("fragment", "USE_VSM"), t.material.undefine("fragment", "PCF_KERNEL_SIZE");
            else {
                t.material.undefine("fragment", "USE_VSM");
                var n = this.kernelPCF;
                n && n.length ? t.material.define("fragment", "PCF_KERNEL_SIZE", n.length / 2) : t.material.undefine("fragment", "PCF_KERNEL_SIZE")
            }
        },
        _update: function(e, t) {
            var n = this;
            t.traverse(function(t) {
                t.isRenderable() && n._updateReceivers(e, t)
            });
            for (var a = 0; a < t.lights.length; a++) {
                var i = t.lights[a];
                i.castShadow && !i.invisible && this._lightsCastShadow.push(i)
            }
        },
        _renderShadowPass: function(e, t, n, a) {
            function i(e) {
                return e.height
            }
            for (var r in this._shadowMapNumber) this._shadowMapNumber[r] = 0;
            this._lightsCastShadow.length = 0, this._receivers.length = 0;
            var o = e.gl;
            if (a || t.update(), n && n.update(), t.updateLights(), this._update(e, t), this._lightsCastShadow.length || !this._lastRenderNotCastShadow) {
                this._lastRenderNotCastShadow = 0 === this._lightsCastShadow, o.enable(o.DEPTH_TEST), o.depthMask(!0), o.disable(o.BLEND), o.clearColor(1, 1, 1, 1);
                for (var s, c = [], l = [], u = [], p = [], d = [], f = [], h = 0; h < this._lightsCastShadow.length; h++) {
                    var m = this._lightsCastShadow[h];
                    if ("DIRECTIONAL_LIGHT" === m.type) {
                        if (s) {
                            console.warn("Only one direectional light supported with shadow cascade");
                            continue
                        }
                        if (m.shadowCascade > 4) {
                            console.warn("Support at most 4 cascade");
                            continue
                        }
                        m.shadowCascade > 1 && (s = m), this.renderDirectionalLightShadow(e, t, n, m, d, p, u)
                    } else "SPOT_LIGHT" === m.type ? this.renderSpotLightShadow(e, t, m, l, c) : "POINT_LIGHT" === m.type && this.renderPointLightShadow(e, t, m, f);
                    this._shadowMapNumber[m.type]++
                }
                for (var v in this._shadowMapNumber)
                    for (var g = this._shadowMapNumber[v], x = v + "_SHADOWMAP_COUNT", h = 0; h < this._receivers.length; h++) {
                        var _ = this._receivers[h],
                            y = _.material;
                        y.fragmentDefines[x] !== g && (g > 0 ? y.define("fragment", x, g) : y.isDefined("fragment", x) && y.undefine("fragment", x))
                    }
                for (var h = 0; h < this._receivers.length; h++) {
                    var _ = this._receivers[h],
                        y = _.material;
                    s ? y.define("fragment", "SHADOW_CASCADE", s.shadowCascade) : y.undefine("fragment", "SHADOW_CASCADE")
                }
                var b = t.shadowUniforms;
                if (u.length > 0) {
                    var T = u.map(i);
                    if (b.directionalLightShadowMaps = {
                            value: u,
                            type: "tv"
                        }, b.directionalLightMatrices = {
                            value: p,
                            type: "m4v"
                        }, b.directionalLightShadowMapSizes = {
                            value: T,
                            type: "1fv"
                        }, s) {
                        var E = d.slice(),
                            w = d.slice();
                        E.pop(), w.shift(), E.reverse(), w.reverse(), p.reverse(), b.shadowCascadeClipsNear = {
                            value: E,
                            type: "1fv"
                        }, b.shadowCascadeClipsFar = {
                            value: w,
                            type: "1fv"
                        }
                    }
                }
                if (c.length > 0) {
                    var A = c.map(i),
                        b = t.shadowUniforms;
                    b.spotLightShadowMaps = {
                        value: c,
                        type: "tv"
                    }, b.spotLightMatrices = {
                        value: l,
                        type: "m4v"
                    }, b.spotLightShadowMapSizes = {
                        value: A,
                        type: "1fv"
                    }
                }
                f.length > 0 && (b.pointLightShadowMaps = {
                    value: f,
                    type: "tv"
                })
            }
        },
        renderDirectionalLightShadow: function() {
            var e = new s.a,
                t = new c.a,
                n = new o.a,
                a = new c.a,
                i = new c.a,
                r = new c.a,
                u = new c.a;
            return function(o, s, p, d, f, h, m) {
                var g = this._getDepthMaterial(d),
                    x = {
                        getMaterial: function(e) {
                            return e.shadowDepthMaterial || g
                        },
                        ifRender: function(e) {
                            return e.castShadow
                        },
                        sortCompare: l.a.opaqueSortCompare
                    };
                if (!s.viewBoundingBoxLastFrame.isFinite()) {
                    var _ = s.getBoundingBox();
                    s.viewBoundingBoxLastFrame.copy(_).applyTransform(p.viewMatrix)
                }
                var y = Math.min(-s.viewBoundingBoxLastFrame.min.z, p.far),
                    b = Math.max(-s.viewBoundingBoxLastFrame.max.z, p.near),
                    T = this._getDirectionalLightCamera(d, s, p),
                    w = r.array;
                u.copy(T.projectionMatrix), E.invert(i.array, T.worldTransform.array), E.multiply(i.array, i.array, p.worldTransform.array), E.multiply(w, u.array, i.array);
                for (var S = [], C = p instanceof v.a, R = (p.near + p.far) / (p.near - p.far), M = 2 * p.near * p.far / (p.near - p.far), N = 0; N <= d.shadowCascade; N++) {
                    var L = b * Math.pow(y / b, N / d.shadowCascade),
                        O = b + (y - b) * N / d.shadowCascade,
                        P = L * d.cascadeSplitLogFactor + O * (1 - d.cascadeSplitLogFactor);
                    S.push(P), f.push(-(-P * R + M) / -P)
                }
                var D = this._getTexture(d, d.shadowCascade);
                m.push(D);
                var I = o.viewport,
                    F = o.gl;
                this._frameBuffer.attach(D), this._frameBuffer.bind(o), F.clear(F.COLOR_BUFFER_BIT | F.DEPTH_BUFFER_BIT);
                for (var N = 0; N < d.shadowCascade; N++) {
                    var k = S[N],
                        B = S[N + 1];
                    C ? E.perspective(t.array, p.fov / 180 * Math.PI, p.aspect, k, B) : E.ortho(t.array, p.left, p.right, p.bottom, p.top, k, B), e.setFromProjection(t), e.getTransformedBoundingBox(n, i), n.applyProjection(u);
                    var U = n.min.array,
                        H = n.max.array;
                    U[0] = Math.max(U[0], -1), U[1] = Math.max(U[1], -1), H[0] = Math.min(H[0], 1), H[1] = Math.min(H[1], 1), a.ortho(U[0], H[0], U[1], H[1], 1, -1), T.projectionMatrix.multiplyLeft(a);
                    var z = d.shadowResolution || 512;
                    o.setViewport((d.shadowCascade - N - 1) * z, 0, z, z, 1);
                    var j = s.updateRenderList(T);
                    o.renderPass(j.opaque, T, x), this.softShadow === A.VSM && this._gaussianFilter(o, D, D.width);
                    var G = new c.a;
                    G.copy(T.viewMatrix).multiplyLeft(T.projectionMatrix), h.push(G.array), T.projectionMatrix.copy(u)
                }
                this._frameBuffer.unbind(o), o.setViewport(I)
            }
        }(),
        renderSpotLightShadow: function(e, t, n, a, i) {
            var r = this._getTexture(n),
                o = this._getSpotLightCamera(n),
                s = e.gl;
            this._frameBuffer.attach(r), this._frameBuffer.bind(e), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT);
            var u = this._getDepthMaterial(n),
                p = {
                    getMaterial: function(e) {
                        return e.shadowDepthMaterial || u
                    },
                    ifRender: function(e) {
                        return e.castShadow
                    },
                    sortCompare: l.a.opaqueSortCompare
                },
                d = t.updateRenderList(o);
            e.renderPass(d.opaque, o, p), this._frameBuffer.unbind(e), this.softShadow === A.VSM && this._gaussianFilter(e, r, r.width);
            var f = new c.a;
            f.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix), i.push(r), a.push(f.array)
        },
        renderPointLightShadow: function(e, t, n, a) {
            var i = this._getTexture(n),
                s = e.gl;
            a.push(i);
            var c = this._getDepthMaterial(n),
                u = {
                    getMaterial: function(e) {
                        return e.shadowDepthMaterial || c
                    },
                    sortCompare: l.a.opaqueSortCompare
                },
                p = {
                    px: [],
                    py: [],
                    pz: [],
                    nx: [],
                    ny: [],
                    nz: []
                },
                d = new o.a,
                f = n.getWorldPosition().array,
                h = new o.a,
                m = n.range;
            h.min.setArray(f), h.max.setArray(f);
            var v = new r.a(m, m, m);
            h.max.add(v), h.min.sub(v);
            var g = {
                px: !1,
                py: !1,
                pz: !1,
                nx: !1,
                ny: !1,
                nz: !1
            };
            t.traverse(function(e) {
                if (e.isRenderable() && e.castShadow) {
                    var t = e.geometry;
                    if (!t.boundingBox) {
                        for (var n = 0; n < w.length; n++) p[w[n]].push(e);
                        return
                    }
                    if (d.transformFrom(t.boundingBox, e.worldTransform), !d.intersectBoundingBox(h)) return;
                    d.updateVertices();
                    for (var n = 0; n < w.length; n++) g[w[n]] = !1;
                    for (var n = 0; n < 8; n++) {
                        var a = d.vertices[n],
                            i = a[0] - f[0],
                            r = a[1] - f[1],
                            o = a[2] - f[2],
                            s = Math.abs(i),
                            c = Math.abs(r),
                            l = Math.abs(o);
                        s > c ? s > l ? g[i > 0 ? "px" : "nx"] = !0 : g[o > 0 ? "pz" : "nz"] = !0 : c > l ? g[r > 0 ? "py" : "ny"] = !0 : g[o > 0 ? "pz" : "nz"] = !0
                    }
                    for (var n = 0; n < w.length; n++) g[w[n]] && p[w[n]].push(e)
                }
            });
            for (var x = 0; x < 6; x++) {
                var _ = w[x],
                    y = this._getPointLightCamera(n, _);
                this._frameBuffer.attach(i, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + x), this._frameBuffer.bind(e), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), e.renderPass(p[_], y, u)
            }
            this._frameBuffer.unbind(e)
        },
        _getDepthMaterial: function(e) {
            var t = this._lightMaterials[e.__uid__],
                n = "POINT_LIGHT" === e.type;
            if (!t) {
                var a = n ? "clay.sm.distance." : "clay.sm.depth.";
                t = new p.a({
                    precision: this.precision,
                    shader: new u.a(u.a.source(a + "vertex"), u.a.source(a + "fragment"))
                }), this._lightMaterials[e.__uid__] = t
            }
            return null != e.shadowSlopeScale && t.setUniform("slopeScale", e.shadowSlopeScale), null != e.shadowBias && t.setUniform("bias", e.shadowBias), this.softShadow === A.VSM ? t.define("fragment", "USE_VSM") : t.undefine("fragment", "USE_VSM"), n && (t.set("lightPosition", e.getWorldPosition().array), t.set("range", e.range)), t
        },
        _gaussianFilter: function(e, t, n) {
            var a = {
                    width: n,
                    height: n,
                    type: f.a.FLOAT
                },
                i = this._texturePool.get(a);
            this._frameBuffer.attach(i), this._frameBuffer.bind(e), this._gaussianPassH.setUniform("texture", t), this._gaussianPassH.setUniform("textureWidth", n), this._gaussianPassH.render(e), this._frameBuffer.attach(t), this._gaussianPassV.setUniform("texture", i), this._gaussianPassV.setUniform("textureHeight", n), this._gaussianPassV.render(e), this._frameBuffer.unbind(e), this._texturePool.put(i)
        },
        _getTexture: function(e, t) {
            var n = e.__uid__,
                a = this._textures[n],
                r = e.shadowResolution || 512;
            return t = t || 1, a || (a = "POINT_LIGHT" === e.type ? new m.a : new h.a, a.width = r * t, a.height = r, this.softShadow === A.VSM ? (a.type = f.a.FLOAT, a.anisotropic = 4) : (a.minFilter = i.a.NEAREST, a.magFilter = i.a.NEAREST, a.useMipmap = !1), this._textures[n] = a), a
        },
        _getPointLightCamera: function(e, t) {
            this._lightCameras.point || (this._lightCameras.point = {
                px: new v.a,
                nx: new v.a,
                py: new v.a,
                ny: new v.a,
                pz: new v.a,
                nz: new v.a
            });
            var n = this._lightCameras.point[t];
            switch (n.far = e.range, n.fov = 90, n.position.set(0, 0, 0), t) {
                case "px":
                    n.lookAt(r.a.POSITIVE_X, r.a.NEGATIVE_Y);
                    break;
                case "nx":
                    n.lookAt(r.a.NEGATIVE_X, r.a.NEGATIVE_Y);
                    break;
                case "py":
                    n.lookAt(r.a.POSITIVE_Y, r.a.POSITIVE_Z);
                    break;
                case "ny":
                    n.lookAt(r.a.NEGATIVE_Y, r.a.NEGATIVE_Z);
                    break;
                case "pz":
                    n.lookAt(r.a.POSITIVE_Z, r.a.NEGATIVE_Y);
                    break;
                case "nz":
                    n.lookAt(r.a.NEGATIVE_Z, r.a.NEGATIVE_Y)
            }
            return e.getWorldPosition(n.position), n.update(), n
        },
        _getDirectionalLightCamera: function() {
            var e = new c.a,
                t = new o.a,
                n = new o.a;
            return function(a, i, r) {
                this._lightCameras.directional || (this._lightCameras.directional = new g.a);
                var o = this._lightCameras.directional;
                t.copy(i.viewBoundingBoxLastFrame), t.intersection(r.frustum.boundingBox), o.position.copy(t.min).add(t.max).scale(.5).transformMat4(r.worldTransform), o.rotation.copy(a.rotation), o.scale.copy(a.scale), o.updateWorldTransform(), c.a.invert(e, o.worldTransform), c.a.multiply(e, e, r.worldTransform), n.copy(t).applyTransform(e);
                var s = n.min.array,
                    l = n.max.array;
                return o.position.set((s[0] + l[0]) / 2, (s[1] + l[1]) / 2, l[2]).transformMat4(o.worldTransform), o.near = 0, o.far = -s[2] + l[2], isNaN(this.lightFrustumBias) ? o.far *= 4 : o.far += this.lightFrustumBias, o.left = s[0], o.right = l[0], o.top = l[1], o.bottom = s[1], o.update(!0), o
            }
        }(),
        _getSpotLightCamera: function(e) {
            this._lightCameras.spot || (this._lightCameras.spot = new v.a);
            var t = this._lightCameras.spot;
            return t.fov = 2 * e.penumbraAngle, t.far = e.range, t.worldTransform.copy(e.worldTransform), t.updateProjectionMatrix(), E.invert(t.viewMatrix.array, t.worldTransform.array), t
        },
        dispose: function(e) {
            var t = e.gl || e;
            this._frameBuffer && this._frameBuffer.dispose(t);
            for (var n in this._textures) this._textures[n].dispose(t);
            this._texturePool.clear(e.gl), this._depthMaterials = {}, this._distanceMaterials = {}, this._textures = {}, this._lightCameras = {}, this._shadowMapNumber = {
                POINT_LIGHT: 0,
                DIRECTIONAL_LIGHT: 0,
                SPOT_LIGHT: 0
            }, this._meshMaterials = {};
            for (var a = 0; a < this._receivers.length; a++) {
                var i = this._receivers[a];
                if (i.material) {
                    var r = i.material;
                    r.undefine("fragment", "POINT_LIGHT_SHADOW_COUNT"), r.undefine("fragment", "DIRECTIONAL_LIGHT_SHADOW_COUNT"), r.undefine("fragment", "AMBIENT_LIGHT_SHADOW_COUNT"), r.set("shadowEnabled", 0)
                }
            }
            this._receivers = [], this._lightsCastShadow = []
        }
    });
    A.VSM = 1, A.PCF = 2, t.a = A
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.compositor.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\nvarying vec2 v_Texcoord;\nvoid main()\n{\n v_Texcoord = texcoord;\n gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.sm.depth.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\n#ifdef SHADOW_TRANSPARENT\nattribute vec2 texcoord : TEXCOORD_0;\n#endif\n@import clay.chunk.skinning_header\nvarying vec4 v_ViewPosition;\n#ifdef SHADOW_TRANSPARENT\nvarying vec2 v_Texcoord;\n#endif\nvoid main(){\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n v_ViewPosition = worldViewProjection * vec4(skinnedPosition, 1.0);\n gl_Position = v_ViewPosition;\n#ifdef SHADOW_TRANSPARENT\n v_Texcoord = texcoord;\n#endif\n}\n@end\n@export clay.sm.depth.fragment\nvarying vec4 v_ViewPosition;\n#ifdef SHADOW_TRANSPARENT\nvarying vec2 v_Texcoord;\n#endif\nuniform float bias : 0.001;\nuniform float slopeScale : 1.0;\n#ifdef SHADOW_TRANSPARENT\nuniform sampler2D transparentMap;\n#endif\n@import clay.util.encode_float\nvoid main(){\n float depth = v_ViewPosition.z / v_ViewPosition.w;\n#ifdef USE_VSM\n depth = depth * 0.5 + 0.5;\n float moment1 = depth;\n float moment2 = depth * depth;\n float dx = dFdx(depth);\n float dy = dFdy(depth);\n moment2 += 0.25*(dx*dx+dy*dy);\n gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);\n#else\n float dx = dFdx(depth);\n float dy = dFdy(depth);\n depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;\n#ifdef SHADOW_TRANSPARENT\n if (texture2D(transparentMap, v_Texcoord).a <= 0.1) {\n gl_FragColor = encodeFloat(0.9999);\n return;\n }\n#endif\n gl_FragColor = encodeFloat(depth * 0.5 + 0.5);\n#endif\n}\n@end\n@export clay.sm.debug_depth\nuniform sampler2D depthMap;\nvarying vec2 v_Texcoord;\n@import clay.util.decode_float\nvoid main() {\n vec4 tex = texture2D(depthMap, v_Texcoord);\n#ifdef USE_VSM\n gl_FragColor = vec4(tex.rgb, 1.0);\n#else\n float depth = decodeFloat(tex);\n gl_FragColor = vec4(depth, depth, depth, 1.0);\n#endif\n}\n@end\n@export clay.sm.distance.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 world : WORLD;\nattribute vec3 position : POSITION;\n@import clay.chunk.skinning_header\nvarying vec3 v_WorldPosition;\nvoid main (){\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition , 1.0);\n v_WorldPosition = (world * vec4(skinnedPosition, 1.0)).xyz;\n}\n@end\n@export clay.sm.distance.fragment\nuniform vec3 lightPosition;\nuniform float range : 100;\nvarying vec3 v_WorldPosition;\n@import clay.util.encode_float\nvoid main(){\n float dist = distance(lightPosition, v_WorldPosition);\n#ifdef USE_VSM\n gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);\n#else\n dist = dist / range;\n gl_FragColor = encodeFloat(dist);\n#endif\n}\n@end\n@export clay.plugin.shadow_map_common\n@import clay.util.decode_float\nfloat tapShadowMap(sampler2D map, vec2 uv, float z){\n vec4 tex = texture2D(map, uv);\n return step(z, decodeFloat(tex) * 2.0 - 1.0);\n}\nfloat pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {\n float shadowContrib = tapShadowMap(map, uv, z);\n vec2 offset = vec2(1.0 / textureSize) * scale;\n#ifdef PCF_KERNEL_SIZE\n for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{\n shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);\n }}\n return shadowContrib / float(PCF_KERNEL_SIZE + 1);\n#else\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);\n return shadowContrib / 9.0;\n#endif\n}\nfloat pcf(sampler2D map, vec2 uv, float z, float textureSize) {\n return pcf(map, uv, z, textureSize, vec2(1.0));\n}\nfloat chebyshevUpperBound(vec2 moments, float z){\n float p = 0.0;\n z = z * 0.5 + 0.5;\n if (z <= moments.x) {\n p = 1.0;\n }\n float variance = moments.y - moments.x * moments.x;\n variance = max(variance, 0.0000001);\n float mD = moments.x - z;\n float pMax = variance / (variance + mD * mD);\n pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);\n return max(p, pMax);\n}\nfloat computeShadowContrib(\n sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset\n) {\n vec4 posInLightSpace = lightVPM * vec4(position, 1.0);\n posInLightSpace.xyz /= posInLightSpace.w;\n float z = posInLightSpace.z;\n if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&\n all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){\n vec2 uv = (posInLightSpace.xy+1.0) / 2.0;\n #ifdef USE_VSM\n vec2 moments = texture2D(map, uv * scale + offset).xy;\n return chebyshevUpperBound(moments, z);\n #else\n return pcf(map, uv * scale + offset, z, textureSize, scale);\n #endif\n }\n return 1.0;\n}\nfloat computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {\n return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));\n}\nfloat computeShadowContribOmni(samplerCube map, vec3 direction, float range)\n{\n float dist = length(direction);\n vec4 shadowTex = textureCube(map, direction);\n#ifdef USE_VSM\n vec2 moments = shadowTex.xy;\n float variance = moments.y - moments.x * moments.x;\n float mD = moments.x - dist;\n float p = variance / (variance + mD * mD);\n if(moments.x + 0.001 < dist){\n return clamp(p, 0.0, 1.0);\n }else{\n return 1.0;\n }\n#else\n return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);\n#endif\n}\n@end\n@export clay.plugin.compute_shadow_map\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)\n#ifdef SPOT_LIGHT_SHADOWMAP_COUNT\nuniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\n#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT\n#if defined(SHADOW_CASCADE)\nuniform sampler2D directionalLightShadowMaps[1]:unconfigurable;\nuniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;\nuniform float directionalLightShadowMapSizes[1]:unconfigurable;\nuniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;\nuniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;\n#else\nuniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\n#endif\n#ifdef POINT_LIGHT_SHADOWMAP_COUNT\nuniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\nuniform bool shadowEnabled : true;\n#ifdef PCF_KERNEL_SIZE\nuniform vec2 pcfKernel[PCF_KERNEL_SIZE];\n#endif\n@import clay.plugin.shadow_map_common\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\nvoid computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {\n float shadowContrib;\n for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n shadowContrib = computeShadowContrib(\n spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,\n spotLightShadowMapSizes[_idx_]\n );\n shadowContribs[_idx_] = shadowContrib;\n }}\n for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n#ifdef SHADOW_CASCADE\nvoid computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){\n float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)\n / (gl_DepthRange.far - gl_DepthRange.near);\n float shadowContrib;\n shadowContribs[0] = 1.0;\n for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{\n if (\n depth >= shadowCascadeClipsNear[_idx_] &&\n depth <= shadowCascadeClipsFar[_idx_]\n ) {\n shadowContrib = computeShadowContrib(\n directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,\n directionalLightShadowMapSizes[0],\n vec2(1.0 / float(SHADOW_CASCADE), 1.0),\n vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)\n );\n shadowContribs[0] = shadowContrib;\n }\n }}\n for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#else\nvoid computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){\n float shadowContrib;\n for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n shadowContrib = computeShadowContrib(\n directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,\n directionalLightShadowMapSizes[_idx_]\n );\n shadowContribs[_idx_] = shadowContrib;\n }}\n for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#endif\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\nvoid computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){\n vec3 lightPosition;\n vec3 direction;\n for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n lightPosition = pointLightPosition[_idx_];\n direction = position - lightPosition;\n shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);\n }}\n for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#endif\n@end"
}, function(e, t, n) {
    "use strict";

    function a() {
        this._sourceTexture = new r.a({
            type: o.a.HALF_FLOAT
        }), this._depthTexture = new r.a({
            format: o.a.DEPTH_COMPONENT,
            type: o.a.UNSIGNED_INT
        }), this._framebuffer = new s.a, this._framebuffer.attach(this._sourceTexture), this._framebuffer.attach(this._depthTexture, s.a.DEPTH_ATTACHMENT), this._gBufferPass = new d.a({
            renderTransparent: !0,
            enableTargetTexture3: !1
        }), this._compositor = Object(c.a)(f.a);
        var e = this._compositor.getNodeByName("source");
        e.texture = this._sourceTexture;
        var t = this._compositor.getNodeByName("coc");
        this._sourceNode = e, this._cocNode = t, this._compositeNode = this._compositor.getNodeByName("composite"), this._fxaaNode = this._compositor.getNodeByName("FXAA"), this._dofBlurNodes = ["dof_far_blur", "dof_near_blur", "dof_coc_blur"].map(function(e) {
            return this._compositor.getNodeByName(e)
        }, this), this._dofBlurKernel = null, this._dofBlurKernelSize = new Float32Array(0), this._finalNodesChain = S.map(function(e) {
            return this._compositor.getNodeByName(e)
        }, this);
        var n = {
            normalTexture: this._gBufferPass.getTargetTexture1(),
            depthTexture: this._gBufferPass.getTargetTexture2(),
            albedoTexture: this._gBufferPass.getTargetTexture3()
        };
        this._ssaoPass = new l.a(n), this._ssrPass = new u.a(n)
    }
    var i = n(2),
        r = n(5),
        o = n(3),
        s = n(11),
        c = n(101),
        l = n(115),
        u = n(117),
        p = n(122),
        d = n(123),
        f = (n(9), n(26), n(130)),
        h = n(55),
        m = n(56),
        v = n(57),
        g = n(58),
        x = n(59),
        _ = n(60),
        y = n(61),
        b = n(62),
        T = n(64),
        E = n(131),
        w = n(132);
    i.a.import(h.a), i.a.import(m.a), i.a.import(v.a), i.a.import(g.a), i.a.import(x.a), i.a.import(_.a), i.a.import(y.a), i.a.import(b.a), i.a.import(T.a), i.a.import(E.a), i.a.import(w.a);
    var A = {
            color: {
                parameters: {
                    width: function(e) {
                        return e.getWidth()
                    },
                    height: function(e) {
                        return e.getHeight()
                    }
                }
            }
        },
        S = ["composite", "FXAA"];
    a.prototype.resize = function(e, t, n) {
        n = n || 1, e *= n, t *= n;
        var a = this._sourceTexture,
            i = this._depthTexture;
        a.width = e, a.height = t, i.width = e, i.height = t, this._gBufferPass.resize(e, t)
    }, a.prototype._ifRenderNormalPass = function() {
        return this._enableSSAO || this._enableEdge || this._enableSSR
    }, a.prototype._getPrevNode = function(e) {
        for (var t = S.indexOf(e.name) - 1, n = this._finalNodesChain[t]; n && !this._compositor.getNodeByName(n.name);) t -= 1, n = this._finalNodesChain[t];
        return n
    }, a.prototype._getNextNode = function(e) {
        for (var t = S.indexOf(e.name) + 1, n = this._finalNodesChain[t]; n && !this._compositor.getNodeByName(n.name);) t += 1, n = this._finalNodesChain[t];
        return n
    }, a.prototype._addChainNode = function(e) {
        var t = this._getPrevNode(e),
            n = this._getNextNode(e);
        t && (t.outputs = A, e.inputs.texture = t.name, n ? (e.outputs = A, n.inputs.texture = e.name) : e.outputs = null, this._compositor.addNode(e))
    }, a.prototype._removeChainNode = function(e) {
        var t = this._getPrevNode(e),
            n = this._getNextNode(e);
        t && (n ? (t.outputs = A, n.inputs.texture = t.name) : t.outputs = null, this._compositor.removeNode(e))
    }, a.prototype.updateGBuffer = function(e, t, n, a) {
        this._ifRenderNormalPass() && this._gBufferPass.update(e, t, n)
    }, a.prototype.updateSSAO = function(e, t, n, a) {
        this._ssaoPass.update(e, n, a)
    }, a.prototype.enableSSAO = function() {
        this._enableSSAO = !0
    }, a.prototype.disableSSAO = function() {
        this._enableSSAO = !1
    }, a.prototype.enableSSR = function() {
        this._enableSSR = !0, this._gBufferPass.enableTargetTexture3 = !0
    }, a.prototype.disableSSR = function() {
        this._enableSSR = !1, this._gBufferPass.enableTargetTexture3 = !1
    }, a.prototype.getSSAOTexture = function() {
        return this._ssaoPass.getTargetTexture()
    }, a.prototype.getSourceFrameBuffer = function() {
        return this._framebuffer
    }, a.prototype.getSourceTexture = function() {
        return this._sourceTexture
    }, a.prototype.disableFXAA = function() {
        this._removeChainNode(this._fxaaNode)
    }, a.prototype.enableFXAA = function() {
        this._addChainNode(this._fxaaNode)
    }, a.prototype.enableBloom = function() {
        this._compositeNode.inputs.bloom = "bloom_composite", this._compositor.dirty()
    }, a.prototype.disableBloom = function() {
        this._compositeNode.inputs.bloom = null, this._compositor.dirty()
    }, a.prototype.enableDOF = function() {
        this._compositeNode.inputs.texture = "dof_composite", this._compositor.dirty()
    }, a.prototype.disableDOF = function() {
        this._compositeNode.inputs.texture = "source", this._compositor.dirty()
    }, a.prototype.enableColorCorrection = function() {
        this._compositeNode.define("COLOR_CORRECTION"), this._enableColorCorrection = !0
    }, a.prototype.disableColorCorrection = function() {
        this._compositeNode.undefine("COLOR_CORRECTION"), this._enableColorCorrection = !1
    }, a.prototype.enableEdge = function() {
        this._enableEdge = !0
    }, a.prototype.disableEdge = function() {
        this._enableEdge = !1
    }, a.prototype.setBloomIntensity = function(e) {
        null != e && this._compositeNode.setParameter("bloomIntensity", e)
    }, a.prototype.setSSAOParameter = function(e, t) {
        if (null != t) switch (e) {
            case "quality":
                var n = {
                    low: 6,
                    medium: 12,
                    high: 32,
                    ultra: 62
                } [t] || 12;
                this._ssaoPass.setParameter("kernelSize", n);
                break;
            case "radius":
                this._ssaoPass.setParameter(e, t), this._ssaoPass.setParameter("bias", t / 50);
                break;
            case "intensity":
                this._ssaoPass.setParameter(e, t)
        }
    }, a.prototype.setDOFParameter = function(e, t) {
        if (null != t) switch (e) {
            case "focalDistance":
            case "focalRange":
            case "fstop":
                this._cocNode.setParameter(e, t);
                break;
            case "blurRadius":
                for (var n = 0; n < this._dofBlurNodes.length; n++) this._dofBlurNodes[n].setParameter("blurRadius", t);
                break;
            case "quality":
                var a = {
                    low: 4,
                    medium: 8,
                    high: 16,
                    ultra: 32
                } [t] || 8;
                this._dofBlurKernelSize = a;
                for (var n = 0; n < this._dofBlurNodes.length; n++) this._dofBlurNodes[n].define("POISSON_KERNEL_SIZE", a);
                this._dofBlurKernel = new Float32Array(2 * a)
        }
    }, a.prototype.setSSRParameter = function(e, t) {
        if (null != t) switch (e) {
            case "quality":
                var n = {
                        low: 10,
                        medium: 15,
                        high: 30,
                        ultra: 80
                    } [t] || 20,
                    a = {
                        low: 32,
                        medium: 16,
                        high: 8,
                        ultra: 4
                    } [t] || 16;
                this._ssrPass.setParameter("maxIteration", n), this._ssrPass.setParameter("pixelStride", a);
                break;
            case "maxRoughness":
                this._ssrPass.setParameter("minGlossiness", Math.max(Math.min(1 - t, 1), 0));
                break;
            case "physical":
                this.setPhysicallyCorrectSSR(t);
                break;
            default:
                console.warn("Unkown SSR parameter " + e)
        }
    }, a.prototype.setPhysicallyCorrectSSR = function(e) {
        this._ssrPass.setPhysicallyCorrect(e)
    }, a.prototype.setEdgeColor = function(e) {}, a.prototype.setExposure = function(e) {
        null != e && this._compositeNode.setParameter("exposure", Math.pow(2, e))
    }, a.prototype.setColorLookupTexture = function(e, t) {
        this._compositeNode.pass.material.setTextureImage("lut", this._enableColorCorrection ? e : "none", t, {
            minFilter: o.a.NEAREST,
            magFilter: o.a.NEAREST,
            flipY: !1
        })
    }, a.prototype.setColorCorrection = function(e, t) {
        this._compositeNode.setParameter(e, t)
    }, a.prototype.composite = function(e, t, n, a, i) {
        var r = this._sourceTexture,
            o = r;
        if (this._enableSSR) {
            this._ssrPass.update(e, n, r, i), o = this._ssrPass.getTargetTexture(), this._ssrPass.setSSAOTexture(this._enableSSAO ? this._ssaoPass.getTargetTexture() : null);
            for (var s = t.getLights(), c = 0; c < s.length; c++) s[c].cubemap && this._ssrPass.setAmbientCubemap(s[c].cubemap, s[c]._brdfLookup, s[c].intensity)
        }
        this._sourceNode.texture = o, this._cocNode.setParameter("depth", this._depthTexture);
        for (var l = this._dofBlurKernel, u = this._dofBlurKernelSize, d = Math.floor(p.a.length / 2 / u), f = i % d, c = 0; c < 2 * u; c++) l[c] = p.a[c + f * u * 2];
        for (var c = 0; c < this._dofBlurNodes.length; c++) this._dofBlurNodes[c].setParameter("percent", i / 30), this._dofBlurNodes[c].setParameter("poissonKernel", l);
        this._cocNode.setParameter("zNear", n.near), this._cocNode.setParameter("zFar", n.far), this._compositor.render(e, a)
    }, a.prototype.isSSRFinished = function(e) {
        return !this._ssrPass || this._ssrPass.isFinished(e)
    }, a.prototype.isSSAOFinished = function(e) {
        return !this._ssaoPass || this._ssaoPass.isFinished(e)
    }, a.prototype.isSSREnabled = function() {
        return this._enableSSR
    }, a.prototype.dispose = function(e) {
        this._sourceTexture.dispose(e), this._depthTexture.dispose(e), this._framebuffer.dispose(e), this._compositor.dispose(e), this._gBufferPass.dispose(e), this._ssaoPass.dispose(e)
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var a = n(102);
    t.a = a.a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = new p.a;
        t = t || {};
        var a = {
                textures: {},
                parameters: {}
            },
            s = function(r, o) {
                for (var s = 0; s < e.nodes.length; s++) {
                    var c = e.nodes[s],
                        l = i(c, a, t);
                    l && n.addNode(l)
                }
            };
        for (var c in e.parameters) {
            var l = e.parameters[c];
            a.parameters[c] = r(l)
        }
        return o(e, a, t, function(e) {
            a.textures = e, s()
        }), n
    }

    function i(e, t, n) {
        var a, i, o, c = e.type || "filter";
        if ("filter" === c) {
            var u = e.shader.trim(),
                p = _.exec(u);
            if (p ? a = m.a.source(p[1].trim()) : "#" === u.charAt(0) && (a = t.shaders[u.substr(1)]), a || (a = u), !a) return
        }
        if (e.inputs) {
            i = {};
            for (var v in e.inputs) "string" == typeof e.inputs[v] ? i[v] = e.inputs[v] : i[v] = {
                node: e.inputs[v].node,
                pin: e.inputs[v].pin
            }
        }
        if (e.outputs) {
            o = {};
            for (var v in e.outputs) {
                var g = e.outputs[v];
                o[v] = {}, null != g.attachment && (o[v].attachment = g.attachment), null != g.keepLastFrame && (o[v].keepLastFrame = g.keepLastFrame), null != g.outputLastFrame && (o[v].outputLastFrame = g.outputLastFrame), g.parameters && (o[v].parameters = r(g.parameters))
            }
        }
        var x;
        if (x = "scene" === c ? new d.a({
                name: e.name,
                scene: n.scene,
                camera: n.camera,
                outputs: o
            }) : "texture" === c ? new f.a({
                name: e.name,
                outputs: o
            }) : new h.a({
                name: e.name,
                shader: a,
                inputs: i,
                outputs: o
            })) {
            if (e.parameters)
                for (var v in e.parameters) {
                    var y = e.parameters[v];
                    "string" == typeof y && (y = y.trim(), "#" === y.charAt(0) ? y = t.textures[y.substr(1)] : x.on("beforerender", s(v, l(y)))), x.setParameter(v, y)
                }
            if (e.defines && x.pass)
                for (var v in e.defines) {
                    var y = e.defines[v];
                    x.pass.material.define("fragment", v, y)
                }
        }
        return x
    }

    function r(e) {
        var t = {};
        return e ? (["type", "minFilter", "magFilter", "wrapS", "wrapT", "flipY", "useMipmap"].forEach(function(n) {
            var a = e[n];
            null != a && ("string" == typeof a && (a = v.a[a]), t[n] = a)
        }), ["width", "height"].forEach(function(n) {
            if (null != e[n]) {
                var a = e[n];
                "string" == typeof a ? (a = a.trim(), t[n] = c(n, l(a))) : t[n] = a
            }
        }), null != e.useMipmap && (t.useMipmap = e.useMipmap), t) : t
    }

    function o(e, t, n, a) {
        if (!e.textures) return void a({});
        var i = {},
            o = 0,
            s = !1,
            c = n.textureRootPath;
        u.a.each(e.textures, function(e, t) {
            var n, l = e.path,
                p = r(e.parameters);
            if (Array.isArray(l) && 6 === l.length) c && (l = l.map(function(e) {
                return u.a.relative2absolute(e, c)
            })), n = new x.a(p);
            else {
                if ("string" != typeof l) return;
                c && (l = u.a.relative2absolute(l, c)), n = new g.a(p)
            }
            n.load(l), o++, n.once("success", function() {
                i[t] = n, 0 === --o && (a(i), s = !0)
            })
        }), 0 !== o || s || a(i)
    }

    function s(e, t) {
        return function(n) {
            var a = n.getDevicePixelRatio(),
                i = n.getWidth(),
                r = n.getHeight(),
                o = t(i, r, a);
            this.setParameter(e, o)
        }
    }

    function c(e, t) {
        return function(e) {
            var n = e.getDevicePixelRatio(),
                a = e.getWidth(),
                i = e.getHeight();
            return t(a, i, n)
        }
    }

    function l(e) {
        var t = /^expr\((.*)\)$/.exec(e);
        if (t) try {
            var n = new Function("width", "height", "dpr", "return " + t[1]);
            return n(1, 1), n
        } catch (e) {
            throw new Error("Invalid expression.")
        }
    }
    var u = n(7),
        p = n(103),
        d = n(105),
        f = n(106),
        h = n(107),
        m = n(2),
        v = n(3),
        g = n(5),
        x = n(15),
        _ = (n(108), /^#source\((.*?)\)/);
    t.a = a
}, function(e, t, n) {
    "use strict";
    var a = n(104),
        i = n(54),
        r = n(11),
        o = a.a.extend(function() {
            return {
                _outputs: [],
                _texturePool: new i.a,
                _frameBuffer: new r.a({
                    depthBuffer: !1
                })
            }
        }, {
            addNode: function(e) {
                a.a.prototype.addNode.call(this, e), e._compositor = this
            },
            render: function(e, t) {
                if (this._dirty) {
                    this.update(), this._dirty = !1, this._outputs.length = 0;
                    for (var n = 0; n < this.nodes.length; n++) this.nodes[n].outputs || this._outputs.push(this.nodes[n])
                }
                for (var n = 0; n < this.nodes.length; n++) this.nodes[n].beforeFrame();
                for (var n = 0; n < this._outputs.length; n++) this._outputs[n].updateReference();
                for (var n = 0; n < this._outputs.length; n++) this._outputs[n].render(e, t);
                for (var n = 0; n < this.nodes.length; n++) this.nodes[n].afterFrame()
            },
            allocateTexture: function(e) {
                return this._texturePool.get(e)
            },
            releaseTexture: function(e) {
                this._texturePool.put(e)
            },
            getFrameBuffer: function() {
                return this._frameBuffer
            },
            dispose: function(e) {
                this._texturePool.clear(e)
            }
        });
    t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(24),
        r = a.a.extend(function() {
            return {
                nodes: []
            }
        }, {
            dirty: function() {
                this._dirty = !0
            },
            addNode: function(e) {
                this.nodes.indexOf(e) >= 0 || (this.nodes.push(e), this._dirty = !0)
            },
            removeNode: function(e) {
                "string" == typeof e && (e = this.getNodeByName(e));
                var t = this.nodes.indexOf(e);
                t >= 0 && (this.nodes.splice(t, 1), this._dirty = !0)
            },
            getNodeByName: function(e) {
                for (var t = 0; t < this.nodes.length; t++)
                    if (this.nodes[t].name === e) return this.nodes[t]
            },
            update: function() {
                for (var e = 0; e < this.nodes.length; e++) this.nodes[e].clear();
                for (var e = 0; e < this.nodes.length; e++) {
                    var t = this.nodes[e];
                    if (t.inputs)
                        for (var n in t.inputs)
                            if (t.inputs[n])
                                if (!t.pass || t.pass.material.isUniformEnabled(n)) {
                                    var a = t.inputs[n],
                                        i = this.findPin(a);
                                    i ? t.link(n, i.node, i.pin) : "string" == typeof a ? console.warn("Node " + a + " not exist") : console.warn("Pin of " + a.node + "." + a.pin + " not exist")
                                } else console.warn("Pin " + t.name + "." + n + " not used.")
                }
            },
            findPin: function(e) {
                var t;
                if (("string" == typeof e || e instanceof i.a) && (e = {
                        node: e
                    }), "string" == typeof e.node)
                    for (var n = 0; n < this.nodes.length; n++) {
                        var a = this.nodes[n];
                        a.name === e.node && (t = a)
                    } else t = e.node;
                if (t) {
                    var r = e.pin;
                    if (r || t.outputs && (r = Object.keys(t.outputs)[0]), t.outputs[r]) return {
                        node: t,
                        pin: r
                    }
                }
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(24),
        i = n(6),
        r = n(11),
        o = a.a.extend({
            name: "scene",
            scene: null,
            camera: null,
            autoUpdateScene: !0,
            preZ: !1
        }, function() {
            this.frameBuffer = new r.a
        }, {
            render: function(e) {
                this._rendering = !0;
                var t = e.gl;
                this.trigger("beforerender");
                var n;
                if (this.outputs) {
                    var a = this.frameBuffer;
                    for (var r in this.outputs) {
                        var o = this.updateParameter(r, e),
                            s = this.outputs[r],
                            c = this._compositor.allocateTexture(o);
                        this._outputTextures[r] = c;
                        var l = s.attachment || t.COLOR_ATTACHMENT0;
                        "string" == typeof l && (l = t[l]), a.attach(c, l)
                    }
                    a.bind(e);
                    var u = e.getGLExtension("EXT_draw_buffers");
                    if (u) {
                        var p = [];
                        for (var l in this.outputs)(l = parseInt(l)) >= t.COLOR_ATTACHMENT0 && l <= t.COLOR_ATTACHMENT0 + 8 && p.push(l);
                        u.drawBuffersEXT(p)
                    }
                    e.saveClear(), e.clearBit = i.a.DEPTH_BUFFER_BIT | i.a.COLOR_BUFFER_BIT, n = e.render(this.scene, this.camera, !this.autoUpdateScene, this.preZ), e.restoreClear(), a.unbind(e)
                } else n = e.render(this.scene, this.camera, !this.autoUpdateScene, this.preZ);
                this.trigger("afterrender", n), this._rendering = !1, this._rendered = !0
            }
        });
    t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(24),
        i = a.a.extend(function() {
            return {
                texture: null,
                outputs: {
                    color: {}
                }
            }
        }, function() {}, {
            getOutput: function(e, t) {
                return this.texture
            },
            beforeFrame: function() {},
            afterFrame: function() {}
        });
    t.a = i
}, function(e, t, n) {
    "use strict";
    var a = n(13),
        i = n(24),
        r = i.a.extend(function() {
            return {
                name: "",
                inputs: {},
                outputs: null,
                shader: "",
                inputLinks: {},
                outputLinks: {},
                pass: null,
                _prevOutputTextures: {},
                _outputTextures: {},
                _outputReferences: {},
                _rendering: !1,
                _rendered: !1,
                _compositor: null
            }
        }, function() {
            var e = new a.a({
                fragment: this.shader
            });
            this.pass = e
        }, {
            render: function(e, t) {
                this.trigger("beforerender", e), this._rendering = !0;
                var n = e.gl;
                for (var a in this.inputLinks) {
                    var i = this.inputLinks[a],
                        r = i.node.getOutput(e, i.pin);
                    this.pass.setUniform(a, r)
                }
                if (this.outputs) {
                    this.pass.outputs = {};
                    var o = {};
                    for (var s in this.outputs) {
                        var c = this.updateParameter(s, e);
                        isNaN(c.width) && this.updateParameter(s, e);
                        var l = this.outputs[s],
                            u = this._compositor.allocateTexture(c);
                        this._outputTextures[s] = u;
                        var p = l.attachment || n.COLOR_ATTACHMENT0;
                        "string" == typeof p && (p = n[p]), o[p] = u
                    }
                    this._compositor.getFrameBuffer().bind(e);
                    for (var p in o) this._compositor.getFrameBuffer().attach(o[p], p);
                    this.pass.render(e), this._compositor.getFrameBuffer().updateMipmap(e.gl)
                } else this.pass.outputs = null, this._compositor.getFrameBuffer().unbind(e), this.pass.render(e, t);
                for (var a in this.inputLinks) {
                    var i = this.inputLinks[a];
                    i.node.removeReference(i.pin)
                }
                this._rendering = !1, this._rendered = !0, this.trigger("afterrender", e)
            },
            updateParameter: function(e, t) {
                var n = this.outputs[e],
                    a = n.parameters,
                    i = n._parametersCopy;
                if (i || (i = n._parametersCopy = {}), a)
                    for (var r in a) "width" !== r && "height" !== r && (i[r] = a[r]);
                var o, s;
                return o = a.width instanceof Function ? a.width.call(this, t) : a.width, s = a.height instanceof Function ? a.height.call(this, t) : a.height, i.width === o && i.height === s || this._outputTextures[e] && this._outputTextures[e].dispose(t), i.width = o, i.height = s, i
            },
            setParameter: function(e, t) {
                this.pass.setUniform(e, t)
            },
            getParameter: function(e) {
                return this.pass.getUniform(e)
            },
            setParameters: function(e) {
                for (var t in e) this.setParameter(t, e[t])
            },
            define: function(e, t) {
                this.pass.material.define("fragment", e, t)
            },
            undefine: function(e) {
                this.pass.material.undefine("fragment", e)
            },
            removeReference: function(e) {
                if (0 === --this._outputReferences[e]) {
                    this.outputs[e].keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
                }
            },
            clear: function() {
                i.a.prototype.clear.call(this), this.pass.material.disableTexturesAll()
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(2),
        i = n(109),
        r = n(55),
        o = n(110),
        s = n(111),
        c = n(112),
        l = n(56),
        u = n(57),
        p = n(58),
        d = n(59),
        f = n(60),
        h = n(113),
        m = n(114),
        v = n(61),
        g = n(62);
    a.a.import(i.a), a.a.import(r.a), a.a.import(o.a), a.a.import(s.a), a.a.import(c.a), a.a.import(l.a), a.a.import(u.a), a.a.import(p.a), a.a.import(d.a), a.a.import(f.a), a.a.import(h.a), a.a.import(m.a), a.a.import(v.a), a.a.import(g.a)
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.coloradjust\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float brightness : 0.0;\nuniform float contrast : 1.0;\nuniform float exposure : 0.0;\nuniform float gamma : 1.0;\nuniform float saturation : 1.0;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);\n color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);\n color = clamp( color * pow(2.0, exposure), 0.0, 1.0);\n color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);\n float luminance = dot( color, w );\n color = mix(vec3(luminance), color, saturation);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.brightness\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float brightness : 0.0;\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = tex.rgb + vec3(brightness);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.contrast\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float contrast : 1.0;\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.exposure\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float exposure : 0.0;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = tex.rgb * pow(2.0, exposure);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.gamma\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float gamma : 1.0;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = pow(tex.rgb, vec3(gamma));\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.saturation\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float saturation : 1.0;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = tex.rgb;\n float luminance = dot(color, w);\n color = mix(vec3(luminance), color, saturation);\n gl_FragColor = vec4(color, tex.a);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.hdr.log_lum\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));\n float luminance = dot(tex.rgb, w);\n luminance = log(luminance + 0.001);\n gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));\n}\n@end\n@export clay.compositor.hdr.lum_adaption\nvarying vec2 v_Texcoord;\nuniform sampler2D adaptedLum;\nuniform sampler2D currentLum;\nuniform float frameTime : 0.02;\n@import clay.util.rgbm\nvoid main()\n{\n float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;\n float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);\n fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));\n gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));\n}\n@end\n@export clay.compositor.lum\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord );\n float luminance = dot(tex.rgb, w);\n gl_FragColor = vec4(vec3(luminance), 1.0);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "\n@export clay.compositor.lut\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform sampler2D lookup;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n float blueColor = tex.b * 63.0;\n vec2 quad1;\n quad1.y = floor(floor(blueColor) / 8.0);\n quad1.x = floor(blueColor) - (quad1.y * 8.0);\n vec2 quad2;\n quad2.y = floor(ceil(blueColor) / 8.0);\n quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n vec2 texPos1;\n texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);\n texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);\n vec2 texPos2;\n texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);\n texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);\n vec4 newColor1 = texture2D(lookup, texPos1);\n vec4 newColor2 = texture2D(lookup, texPos2);\n vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n gl_FragColor = vec4(newColor.rgb, tex.w);\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.vignette\n#define OUTPUT_ALPHA\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float darkness: 1;\nuniform float offset: 1;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));\n gl_FragColor.rgb = texel.rgb;\n vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);\n gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.dof.coc\nuniform sampler2D depth;\nuniform float zNear: 0.1;\nuniform float zFar: 2000;\nuniform float focalDist: 3;\nuniform float focalRange: 1;\nuniform float focalLength: 30;\nuniform float fstop: 2.8;\nvarying vec2 v_Texcoord;\n@import clay.util.encode_float\nvoid main()\n{\n float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;\n float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));\n float aperture = focalLength / fstop;\n float coc;\n float uppper = focalDist + focalRange;\n float lower = focalDist - focalRange;\n if (dist <= uppper && dist >= lower) {\n coc = 0.5;\n }\n else {\n float focalAdjusted = dist > uppper ? uppper : lower;\n coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));\n coc = clamp(coc, 0.0, 0.4) / 0.4000001;\n if (dist < lower) {\n coc = -coc;\n }\n coc = coc * 0.5 + 0.5;\n }\n gl_FragColor = encodeFloat(coc);\n}\n@end\n@export clay.compositor.dof.premultiply\nuniform sampler2D texture;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.decode_float\nvoid main() {\n float fCoc = max(abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0), 0.1);\n gl_FragColor = encodeHDR(\n vec4(decodeHDR(texture2D(texture, v_Texcoord)).rgb * fCoc, 1.0)\n );\n}\n@end\n@export clay.compositor.dof.min_coc\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\nuniform vec2 textureSize : [512.0, 512.0];\n@import clay.util.float\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n float fCoc = decodeFloat(texture2D(coc, v_Texcoord + d.xy));\n fCoc = min(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.zy)));\n fCoc = min(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.xw)));\n fCoc = min(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.zw)));\n gl_FragColor = encodeFloat(fCoc);\n}\n@end\n@export clay.compositor.dof.max_coc\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\nuniform vec2 textureSize : [512.0, 512.0];\n@import clay.util.float\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n float fCoc = decodeFloat(texture2D(coc, v_Texcoord + d.xy));\n fCoc = max(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.zy)));\n fCoc = max(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.xw)));\n fCoc = max(fCoc, decodeFloat(texture2D(coc, v_Texcoord + d.zw)));\n gl_FragColor = encodeFloat(fCoc);\n}\n@end\n@export clay.compositor.dof.coc_upsample\n#define HIGH_QUALITY\nuniform sampler2D coc;\nuniform vec2 textureSize : [512, 512];\nuniform float sampleScale: 0.5;\nvarying vec2 v_Texcoord;\n@import clay.util.float\nvoid main()\n{\n#ifdef HIGH_QUALITY\n vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;\n float s;\n s = decodeFloat(texture2D(coc, v_Texcoord - d.xy));\n s += decodeFloat(texture2D(coc, v_Texcoord - d.wy)) * 2.0;\n s += decodeFloat(texture2D(coc, v_Texcoord - d.zy));\n s += decodeFloat(texture2D(coc, v_Texcoord + d.zw)) * 2.0;\n s += decodeFloat(texture2D(coc, v_Texcoord )) * 4.0;\n s += decodeFloat(texture2D(coc, v_Texcoord + d.xw)) * 2.0;\n s += decodeFloat(texture2D(coc, v_Texcoord + d.zy));\n s += decodeFloat(texture2D(coc, v_Texcoord + d.wy)) * 2.0;\n s += decodeFloat(texture2D(coc, v_Texcoord + d.xy));\n gl_FragColor = encodeFloat(s / 16.0);\n#else\n vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;\n float s;\n s = decodeFloat(texture2D(coc, v_Texcoord + d.xy));\n s += decodeFloat(texture2D(coc, v_Texcoord + d.zy));\n s += decodeFloat(texture2D(coc, v_Texcoord + d.xw));\n s += decodeFloat(texture2D(coc, v_Texcoord + d.zw));\n gl_FragColor = encodeFloat(s / 4.0);\n#endif\n}\n@end\n@export clay.compositor.dof.upsample\n#define HIGH_QUALITY\nuniform sampler2D coc;\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nuniform float sampleScale: 0.5;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.decode_float\nfloat tap(vec2 uv, inout vec4 color, float baseWeight) {\n float weight = abs(decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0) * baseWeight;\n color += decodeHDR(texture2D(texture, uv)) * weight;\n return weight;\n}\nvoid main()\n{\n#ifdef HIGH_QUALITY\n vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;\n vec4 color = vec4(0.0);\n float baseWeight = 1.0 / 16.0;\n float w = tap(v_Texcoord - d.xy, color, baseWeight);\n w += tap(v_Texcoord - d.wy, color, baseWeight * 2.0);\n w += tap(v_Texcoord - d.zy, color, baseWeight);\n w += tap(v_Texcoord + d.zw, color, baseWeight * 2.0);\n w += tap(v_Texcoord , color, baseWeight * 4.0);\n w += tap(v_Texcoord + d.xw, color, baseWeight * 2.0);\n w += tap(v_Texcoord + d.zy, color, baseWeight);\n w += tap(v_Texcoord + d.wy, color, baseWeight * 2.0);\n w += tap(v_Texcoord + d.xy, color, baseWeight);\n gl_FragColor = encodeHDR(color / w);\n#else\n vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;\n vec4 color = vec4(0.0);\n float baseWeight = 1.0 / 4.0;\n float w = tap(v_Texcoord + d.xy, color, baseWeight);\n w += tap(v_Texcoord + d.zy, color, baseWeight);\n w += tap(v_Texcoord + d.xw, color, baseWeight);\n w += tap(v_Texcoord + d.zw, color, baseWeight);\n gl_FragColor = encodeHDR(color / w);\n#endif\n}\n@end\n@export clay.compositor.dof.downsample\nuniform sampler2D texture;\nuniform sampler2D coc;\nuniform vec2 textureSize : [512, 512];\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.decode_float\nfloat tap(vec2 uv, inout vec4 color) {\n float weight = abs(decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0) * 0.25;\n color += decodeHDR(texture2D(texture, uv)) * weight;\n return weight;\n}\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n vec4 color = vec4(0.0);\n float weight = tap(v_Texcoord + d.xy, color);\n weight += tap(v_Texcoord + d.zy, color);\n weight += tap(v_Texcoord + d.xw, color);\n weight += tap(v_Texcoord + d.zw, color);\n color /= weight;\n gl_FragColor = encodeHDR(color);\n}\n@end\n@export clay.compositor.dof.hexagonal_blur_frag\n@import clay.util.float\nvec4 doBlur(sampler2D targetTexture, vec2 offset) {\n#ifdef BLUR_COC\n float cocSum = 0.0;\n#else\n vec4 color = vec4(0.0);\n#endif\n float weightSum = 0.0;\n float kernelWeight = 1.0 / float(KERNEL_SIZE);\n for (int i = 0; i < KERNEL_SIZE; i++) {\n vec2 coord = v_Texcoord + offset * float(i);\n float w = kernelWeight;\n#ifdef BLUR_COC\n float fCoc = decodeFloat(texture2D(targetTexture, coord)) * 2.0 - 1.0;\n cocSum += clamp(fCoc, -1.0, 0.0) * w;\n#else\n float fCoc = decodeFloat(texture2D(coc, coord)) * 2.0 - 1.0;\n vec4 texel = texture2D(targetTexture, coord);\n #if !defined(BLUR_NEARFIELD)\n w *= abs(fCoc);\n #endif\n color += decodeHDR(texel) * w;\n#endif\n weightSum += w;\n }\n#ifdef BLUR_COC\n return encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);\n#else\n return color / weightSum;\n#endif\n}\n@end\n@export clay.compositor.dof.hexagonal_blur_1\n#define KERNEL_SIZE 5\nuniform sampler2D texture;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\nuniform float blurSize : 1.0;\nuniform vec2 textureSize : [512.0, 512.0];\n@import clay.util.rgbm\n@import clay.compositor.dof.hexagonal_blur_frag\nvoid main()\n{\n vec2 offset = blurSize / textureSize;\n#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)\n offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);\n#endif\n gl_FragColor = doBlur(texture, vec2(0.0, offset.y));\n#if !defined(BLUR_COC)\n gl_FragColor = encodeHDR(gl_FragColor);\n#endif\n}\n@end\n@export clay.compositor.dof.hexagonal_blur_2\n#define KERNEL_SIZE 5\nuniform sampler2D texture;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\nuniform float blurSize : 1.0;\nuniform vec2 textureSize : [512.0, 512.0];\n@import clay.util.rgbm\n@import clay.compositor.dof.hexagonal_blur_frag\nvoid main()\n{\n vec2 offset = blurSize / textureSize;\n#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)\n offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);\n#endif\n offset.y /= 2.0;\n gl_FragColor = doBlur(texture, -offset);\n#if !defined(BLUR_COC)\n gl_FragColor = encodeHDR(gl_FragColor);\n#endif\n}\n@end\n@export clay.compositor.dof.hexagonal_blur_3\n#define KERNEL_SIZE 5\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\nuniform float blurSize : 1.0;\nuniform vec2 textureSize : [512.0, 512.0];\n@import clay.util.rgbm\n@import clay.compositor.dof.hexagonal_blur_frag\nvoid main()\n{\n vec2 offset = blurSize / textureSize;\n#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)\n offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);\n#endif\n offset.y /= 2.0;\n vec2 vDownRight = vec2(offset.x, -offset.y);\n vec4 texel1 = doBlur(texture1, -offset);\n vec4 texel2 = doBlur(texture1, vDownRight);\n vec4 texel3 = doBlur(texture2, vDownRight);\n#ifdef BLUR_COC\n float coc1 = decodeFloat(texel1) * 2.0 - 1.0;\n float coc2 = decodeFloat(texel2) * 2.0 - 1.0;\n float coc3 = decodeFloat(texel3) * 2.0 - 1.0;\n gl_FragColor = encodeFloat(\n ((coc1 + coc2 + coc3) / 3.0) * 0.5 + 0.5\n );\n#else\n vec4 color = (texel1 + texel2 + texel3) / 3.0;\n gl_FragColor = encodeHDR(color);\n#endif\n}\n@end\n@export clay.compositor.dof.composite\n#define DEBUG 0\nuniform sampler2D original;\nuniform sampler2D blurred;\nuniform sampler2D nearfield;\nuniform sampler2D coc;\nuniform sampler2D nearcoc;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.float\nvoid main()\n{\n vec4 blurredColor = decodeHDR(texture2D(blurred, v_Texcoord));\n vec4 originalColor = decodeHDR(texture2D(original, v_Texcoord));\n float fCoc = decodeFloat(texture2D(coc, v_Texcoord));\n fCoc = abs(fCoc * 2.0 - 1.0);\n float weight = smoothstep(0.0, 1.0, fCoc);\n#ifdef NEARFIELD_ENABLED\n vec4 nearfieldColor = decodeHDR(texture2D(nearfield, v_Texcoord));\n float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));\n fNearCoc = abs(fNearCoc * 2.0 - 1.0);\n gl_FragColor = encodeHDR(\n mix(\n nearfieldColor, mix(originalColor, blurredColor, weight),\n pow(1.0 - fNearCoc, 4.0)\n )\n );\n#else\n gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));\n#endif\n#if DEBUG == 1\n gl_FragColor = vec4(vec3(fCoc), 1.0);\n#elif DEBUG == 2\n gl_FragColor = vec4(vec3(fNearCoc), 1.0);\n#elif DEBUG == 3\n gl_FragColor = encodeHDR(blurredColor);\n#elif DEBUG == 4\n gl_FragColor = encodeHDR(nearfieldColor);\n#endif\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.compositor.lensflare\n#define SAMPLE_NUMBER 8\nuniform sampler2D texture;\nuniform sampler2D lenscolor;\nuniform vec2 textureSize : [512, 512];\nuniform float dispersal : 0.3;\nuniform float haloWidth : 0.4;\nuniform float distortion : 1.0;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nvec4 textureDistorted(\n in vec2 texcoord,\n in vec2 direction,\n in vec3 distortion\n) {\n return vec4(\n decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,\n decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,\n decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,\n 1.0\n );\n}\nvoid main()\n{\n vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;\n vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;\n vec2 haloVec = normalize(ghostVec) * haloWidth;\n vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);\n vec4 result = vec4(0.0);\n for (int i = 0; i < SAMPLE_NUMBER; i++)\n {\n vec2 offset = fract(texcoord + ghostVec * float(i));\n float weight = length(vec2(0.5) - offset) / length(vec2(0.5));\n weight = pow(1.0 - weight, 10.0);\n result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;\n }\n result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));\n float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));\n weight = pow(1.0 - weight, 10.0);\n vec2 offset = fract(texcoord + haloVec);\n result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;\n gl_FragColor = result;\n}\n@end"
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t = new Uint8Array(e * e * 4), n = 0, a = new c.a, i = 0; i < e; i++)
            for (var r = 0; r < e; r++) a.set(2 * Math.random() - 1, 2 * Math.random() - 1, 0).normalize(), t[n++] = 255 * (.5 * a.x + .5), t[n++] = 255 * (.5 * a.y + .5), t[n++] = 0, t[n++] = 255;
        return t
    }

    function i(e) {
        return new l.a({
            pixels: a(e),
            wrapS: u.a.REPEAT,
            wrapT: u.a.REPEAT,
            width: e,
            height: e
        })
    }

    function r(e, t, n) {
        var a = new Float32Array(3 * e);
        t = t || 0;
        for (var i = 0; i < e; i++) {
            var r = Object(h.a)(i + t, 2) * (n ? 1 : 2) * Math.PI,
                o = Object(h.a)(i + t, 3) * Math.PI,
                s = Math.random(),
                c = Math.cos(r) * Math.sin(o) * s,
                l = Math.cos(o) * s,
                u = Math.sin(r) * Math.sin(o) * s;
            a[3 * i] = c, a[3 * i + 1] = l, a[3 * i + 2] = u
        }
        return a
    }

    function o(e) {
        e = e || {}, this._ssaoPass = new p.a({
            fragment: d.a.source("ecgl.ssao.estimate")
        }), this._blurPass = new p.a({
            fragment: d.a.source("ecgl.ssao.blur")
        }), this._framebuffer = new f.a, this._ssaoTexture = new l.a, this._blurTexture = new l.a, this._depthTex = e.depthTexture, this._normalTex = e.normalTexture, this.setNoiseSize(4), this.setKernelSize(e.kernelSize || 12), null != e.radius && this.setParameter("radius", e.radius), null != e.power && this.setParameter("power", e.power), this._normalTex || (this._ssaoPass.material.disableTexture("normalTex"), this._blurPass.material.disableTexture("normalTex")), this._depthTex || this._blurPass.material.disableTexture("depthTex"), this._blurPass.material.setUniform("normalTex", this._normalTex), this._blurPass.material.setUniform("depthTex", this._depthTex)
    }
    var s = n(9),
        c = n(4),
        l = n(5),
        u = n(3),
        p = n(13),
        d = n(2),
        f = n(11),
        h = n(25),
        m = n(116);
    d.a.import(m.a), o.prototype.setDepthTexture = function(e) {
        this._depthTex = e
    }, o.prototype.setNormalTexture = function(e) {
        this._normalTex = e, this._ssaoPass.material[e ? "enableTexture" : "disableTexture"]("normalTex"), this.setKernelSize(this._kernelSize)
    }, o.prototype.update = function(e, t, n) {
        var a = e.getWidth(),
            i = e.getHeight(),
            r = this._ssaoPass,
            o = this._blurPass;
        r.setUniform("kernel", this._kernels[n % this._kernels.length]), r.setUniform("depthTex", this._depthTex), null != this._normalTex && r.setUniform("normalTex", this._normalTex), r.setUniform("depthTexSize", [this._depthTex.width, this._depthTex.height]);
        var c = new s.a;
        s.a.transpose(c, t.worldTransform), r.setUniform("projection", t.projectionMatrix.array), r.setUniform("projectionInv", t.invProjectionMatrix.array), r.setUniform("viewInverseTranspose", c.array);
        var l = this._ssaoTexture,
            u = this._blurTexture;
        l.width = a, l.height = i, u.width = a, u.height = i, this._framebuffer.attach(l), this._framebuffer.bind(e), e.gl.clearColor(1, 1, 1, 1), e.gl.clear(e.gl.COLOR_BUFFER_BIT), r.render(e), o.setUniform("textureSize", [a, i]), o.setUniform("projection", t.projectionMatrix.array), this._framebuffer.attach(u), o.setUniform("direction", 0), o.setUniform("ssaoTexture", l), o.render(e), this._framebuffer.attach(l), o.setUniform("direction", 1), o.setUniform("ssaoTexture", u), o.render(e), this._framebuffer.unbind(e);
        var p = e.clearColor;
        e.gl.clearColor(p[0], p[1], p[2], p[3])
    }, o.prototype.getTargetTexture = function() {
        return this._ssaoTexture
    }, o.prototype.setParameter = function(e, t) {
        "noiseTexSize" === e ? this.setNoiseSize(t) : "kernelSize" === e ? this.setKernelSize(t) : "intensity" === e ? this._ssaoPass.material.set("intensity", t) : this._ssaoPass.setUniform(e, t)
    }, o.prototype.setKernelSize = function(e) {
        this._kernelSize = e, this._ssaoPass.material.define("fragment", "KERNEL_SIZE", e), this._kernels = this._kernels || [];
        for (var t = 0; t < 30; t++) this._kernels[t] = r(e, t * e, !!this._normalTex)
    }, o.prototype.setNoiseSize = function(e) {
        var t = this._ssaoPass.getUniform("noiseTex");
        t ? (t.data = a(e), t.width = t.height = e, t.dirty()) : (t = i(e), this._ssaoPass.setUniform("noiseTex", i(e))), this._ssaoPass.setUniform("noiseTexSize", [e, e])
    }, o.prototype.dispose = function(e) {
        this._blurTexture.dispose(e), this._ssaoTexture.dispose(e)
    }, o.prototype.isFinished = function(e) {
        return e > 30
    }, t.a = o
}, function(e, t, n) {
    "use strict";
    t.a = "@export ecgl.ssao.estimate\n\n#define SHADER_NAME SSAO\n\nuniform sampler2D depthTex;\n\nuniform sampler2D normalTex;\n\nuniform sampler2D noiseTex;\n\nuniform vec2 depthTexSize;\n\nuniform vec2 noiseTexSize;\n\nuniform mat4 projection;\n\nuniform mat4 projectionInv;\n\nuniform mat4 viewInverseTranspose;\n\nuniform vec3 kernel[KERNEL_SIZE];\n\nuniform float radius : 1;\n\nuniform float power : 1;\n\nuniform float bias: 0.01;\n\nuniform float intensity: 1.0;\n\nvarying vec2 v_Texcoord;\n\nfloat ssaoEstimator(in vec3 originPos, in vec3 N, in mat3 kernelBasis) {\n float occlusion = 0.0;\n\n for (int i = 0; i < KERNEL_SIZE; i++) {\n vec3 samplePos = kernel[i];\n#ifdef NORMALTEX_ENABLED\n samplePos = kernelBasis * samplePos;\n#endif\n samplePos = samplePos * radius + originPos;\n\n vec4 texCoord = projection * vec4(samplePos, 1.0);\n texCoord.xy /= texCoord.w;\n texCoord.xy = texCoord.xy * 0.5 + 0.5;\n\n vec4 depthTexel = texture2D(depthTex, texCoord.xy);\n float z = depthTexel.r * 2.0 - 1.0;\n#ifdef ALCHEMY\n vec4 projectedPos = vec4(texCoord.xy * 2.0 - 1.0, z, 1.0);\n vec4 p4 = projectionInv * projectedPos;\n p4.xyz /= p4.w;\n vec3 cDir = p4.xyz - originPos;\n\n float vv = dot(cDir, cDir);\n float vn = dot(cDir, N);\n\n float radius2 = radius * radius;\n\n vn = max(vn + p4.z * bias, 0.0);\n float f = max(radius2 - vv, 0.0) / radius2;\n occlusion += f * f * f * max(vn / (0.01 + vv), 0.0);\n#else\n if (projection[3][3] == 0.0) {\n z = projection[3][2] / (z * projection[2][3] - projection[2][2]);\n }\n else {\n z = (z - projection[3][2]) / projection[2][2];\n }\n float factor = step(samplePos.z, z - bias);\n float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - z));\n occlusion += rangeCheck * factor;\n#endif\n }\n#ifdef NORMALTEX_ENABLED\n occlusion = 1.0 - occlusion / float(KERNEL_SIZE);\n#else\n occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);\n#endif\n return pow(occlusion, power);\n}\n\nvoid main()\n{\n\n vec4 depthTexel = texture2D(depthTex, v_Texcoord);\n\n#ifdef NORMALTEX_ENABLED\n vec4 tex = texture2D(normalTex, v_Texcoord);\n if (dot(tex.rgb, tex.rgb) == 0.0) {\n gl_FragColor = vec4(1.0);\n return;\n }\n vec3 N = tex.rgb * 2.0 - 1.0;\n N = (viewInverseTranspose * vec4(N, 0.0)).xyz;\n\n vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;\n vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;\n vec3 T = normalize(rvec - N * dot(rvec, N));\n vec3 BT = normalize(cross(N, T));\n mat3 kernelBasis = mat3(T, BT, N);\n#else\n if (depthTexel.r > 0.99999) {\n gl_FragColor = vec4(1.0);\n return;\n }\n mat3 kernelBasis;\n#endif\n\n float z = depthTexel.r * 2.0 - 1.0;\n\n vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);\n vec4 p4 = projectionInv * projectedPos;\n\n vec3 position = p4.xyz / p4.w;\n\n float ao = ssaoEstimator(position, N, kernelBasis);\n ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);\n gl_FragColor = vec4(vec3(ao), 1.0);\n}\n\n@end\n\n\n@export ecgl.ssao.blur\n#define SHADER_NAME SSAO_BLUR\n\nuniform sampler2D ssaoTexture;\n\n#ifdef NORMALTEX_ENABLED\nuniform sampler2D normalTex;\n#endif\n\nvarying vec2 v_Texcoord;\n\nuniform vec2 textureSize;\nuniform float blurSize : 1.0;\n\nuniform int direction: 0.0;\n\n#ifdef DEPTHTEX_ENABLED\nuniform sampler2D depthTex;\nuniform mat4 projection;\nuniform float depthRange : 0.05;\n\nfloat getLinearDepth(vec2 coord)\n{\n float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n}\n#endif\n\nvoid main()\n{\n float kernel[5];\n kernel[0] = 0.122581;\n kernel[1] = 0.233062;\n kernel[2] = 0.288713;\n kernel[3] = 0.233062;\n kernel[4] = 0.122581;\n\n vec2 off = vec2(0.0);\n if (direction == 0) {\n off[0] = blurSize / textureSize.x;\n }\n else {\n off[1] = blurSize / textureSize.y;\n }\n\n vec2 coord = v_Texcoord;\n\n float sum = 0.0;\n float weightAll = 0.0;\n\n#ifdef NORMALTEX_ENABLED\n vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;\n#endif\n#if defined(DEPTHTEX_ENABLED)\n float centerDepth = getLinearDepth(v_Texcoord);\n#endif\n\n for (int i = 0; i < 5; i++) {\n vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));\n\n float w = kernel[i];\n#ifdef NORMALTEX_ENABLED\n vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;\n w *= clamp(dot(normal, centerNormal), 0.0, 1.0);\n#endif\n#ifdef DEPTHTEX_ENABLED\n float d = getLinearDepth(coord);\n w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));\n#endif\n\n weightAll += w;\n sum += texture2D(ssaoTexture, coord).r * w;\n }\n\n gl_FragColor = vec4(vec3(sum / weightAll), 1.0);\n}\n@end\n"
}, function(e, t, n) {
    "use strict";

    function a(e) {
        e = e || {}, this._ssrPass = new s.a({
            fragment: c.a.source("ecgl.ssr.main"),
            clearColor: [0, 0, 0, 0]
        }), this._blurPass1 = new s.a({
            fragment: c.a.source("ecgl.ssr.blur"),
            clearColor: [0, 0, 0, 0]
        }), this._blurPass2 = new s.a({
            fragment: c.a.source("ecgl.ssr.blur"),
            clearColor: [0, 0, 0, 0]
        }), this._blendPass = new s.a({
            fragment: c.a.source("clay.compositor.blend")
        }), this._blendPass.material.disableTexturesAll(), this._blendPass.material.enableTexture(["texture1", "texture2"]), this._ssrPass.setUniform("gBufferTexture1", e.normalTexture), this._ssrPass.setUniform("gBufferTexture2", e.depthTexture), this._ssrPass.setUniform("gBufferTexture3", e.albedoTexture), this._blurPass1.setUniform("gBufferTexture1", e.normalTexture), this._blurPass1.setUniform("gBufferTexture2", e.depthTexture), this._blurPass2.setUniform("gBufferTexture1", e.normalTexture), this._blurPass2.setUniform("gBufferTexture2", e.depthTexture), this._blurPass2.material.define("fragment", "VERTICAL"), this._blurPass2.material.define("fragment", "BLEND"), this._ssrTexture = new r.a({
            type: o.a.HALF_FLOAT
        }), this._texture2 = new r.a({
            type: o.a.HALF_FLOAT
        }), this._texture3 = new r.a({
            type: o.a.HALF_FLOAT
        }), this._prevTexture = new r.a({
            type: o.a.HALF_FLOAT
        }), this._currentTexture = new r.a({
            type: o.a.HALF_FLOAT
        }), this._frameBuffer = new l.a({
            depthBuffer: !1
        }), this._normalDistribution = null, this._totalSamples = 256, this._samplePerFrame = 4, this._ssrPass.material.define("fragment", "SAMPLE_PER_FRAME", this._samplePerFrame), this._ssrPass.material.define("fragment", "TOTAL_SAMPLES", this._totalSamples), this._downScale = 1
    }
    var i = n(9),
        r = (n(4), n(5)),
        o = n(3),
        s = n(13),
        c = n(2),
        l = n(11),
        u = (n(25), n(63)),
        p = n(121);
    c.a.import(p.a), a.prototype.setAmbientCubemap = function(e, t, n) {
        this._ssrPass.material.set("specularCubemap", e), this._ssrPass.material.set("brdfLookup", t), this._ssrPass.material.set("specularIntensity", n);
        var a = e && n;
        this._ssrPass.material[a ? "enableTexture" : "disableTexture"]("specularCubemap")
    }, a.prototype.update = function(e, t, n, a) {
        var r = e.getWidth(),
            o = e.getHeight(),
            s = this._ssrTexture,
            c = this._texture2,
            l = this._texture3;
        s.width = this._prevTexture.width = this._currentTexture.width = r / this._downScale, s.height = this._prevTexture.height = this._currentTexture.height = o / this._downScale, c.width = l.width = r, c.height = l.height = o;
        var u = this._frameBuffer,
            p = this._ssrPass,
            d = this._blurPass1,
            f = this._blurPass2,
            h = this._blendPass,
            m = new i.a,
            v = new i.a;
        i.a.transpose(m, t.worldTransform), i.a.transpose(v, t.viewMatrix), p.setUniform("sourceTexture", n), p.setUniform("projection", t.projectionMatrix.array), p.setUniform("projectionInv", t.invProjectionMatrix.array), p.setUniform("toViewSpace", m.array), p.setUniform("toWorldSpace", v.array), p.setUniform("nearZ", t.near);
        var g = a / this._totalSamples * this._samplePerFrame;
        if (p.setUniform("jitterOffset", g), p.setUniform("sampleOffset", a * this._samplePerFrame), d.setUniform("textureSize", [s.width, s.height]), f.setUniform("textureSize", [r, o]), f.setUniform("sourceTexture", n), d.setUniform("projection", t.projectionMatrix.array), f.setUniform("projection", t.projectionMatrix.array), u.attach(s), u.bind(e), p.render(e), this._physicallyCorrect && (u.attach(this._currentTexture), h.setUniform("texture1", this._prevTexture), h.setUniform("texture2", s), h.material.set({
                weight1: a >= 1 ? .95 : 0,
                weight2: a >= 1 ? .05 : 1
            }), h.render(e)), u.attach(c), d.setUniform("texture", this._physicallyCorrect ? this._currentTexture : s), d.render(e), u.attach(l), f.setUniform("texture", c), f.render(e), u.unbind(e), this._physicallyCorrect) {
            var x = this._prevTexture;
            this._prevTexture = this._currentTexture, this._currentTexture = x
        }
    }, a.prototype.getTargetTexture = function() {
        return this._texture3
    }, a.prototype.setParameter = function(e, t) {
        "maxIteration" === e ? this._ssrPass.material.define("fragment", "MAX_ITERATION", t) : this._ssrPass.setUniform(e, t)
    }, a.prototype.setPhysicallyCorrect = function(e) {
        e ? (this._normalDistribution || (this._normalDistribution = u.a.generateNormalDistribution(64, this._totalSamples)), this._ssrPass.material.define("fragment", "PHYSICALLY_CORRECT"), this._ssrPass.material.set("normalDistribution", this._normalDistribution), this._ssrPass.material.set("normalDistributionSize", [64, this._totalSamples])) : this._ssrPass.material.undefine("fragment", "PHYSICALLY_CORRECT"), this._physicallyCorrect = e
    }, a.prototype.setSSAOTexture = function(e) {
        var t = this._blurPass2;
        e ? (t.material.enableTexture("ssaoTex"), t.material.set("ssaoTex", e)) : t.material.disableTexture("ssaoTex")
    }, a.prototype.isFinished = function(e) {
        return !this._physicallyCorrect || e > this._totalSamples / this._samplePerFrame
    }, a.prototype.dispose = function(e) {
        this._ssrTexture.dispose(e), this._texture2.dispose(e), this._texture3.dispose(e), this._prevTexture.dispose(e), this._currentTexture.dispose(e), this._frameBuffer.dispose(e)
    }, t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        u.identity();
        var a = new r.a({
            widthSegments: t,
            heightSegments: n
        });
        switch (e) {
            case "px":
                o.a.translate(u, u, s.a.POSITIVE_X), o.a.rotateY(u, u, Math.PI / 2);
                break;
            case "nx":
                o.a.translate(u, u, s.a.NEGATIVE_X), o.a.rotateY(u, u, -Math.PI / 2);
                break;
            case "py":
                o.a.translate(u, u, s.a.POSITIVE_Y), o.a.rotateX(u, u, -Math.PI / 2);
                break;
            case "ny":
                o.a.translate(u, u, s.a.NEGATIVE_Y), o.a.rotateX(u, u, Math.PI / 2);
                break;
            case "pz":
                o.a.translate(u, u, s.a.POSITIVE_Z);
                break;
            case "nz":
                o.a.translate(u, u, s.a.NEGATIVE_Z), o.a.rotateY(u, u, Math.PI)
        }
        return a.applyTransform(u), a
    }
    var i = n(19),
        r = n(31),
        o = n(9),
        s = n(4),
        c = n(8),
        l = n(12),
        u = new o.a,
        p = i.a.extend({
            dynamic: !1,
            widthSegments: 1,
            heightSegments: 1,
            depthSegments: 1,
            inside: !1
        }, function() {
            this.build()
        }, {
            build: function() {
                var e = {
                        px: a("px", this.depthSegments, this.heightSegments),
                        nx: a("nx", this.depthSegments, this.heightSegments),
                        py: a("py", this.widthSegments, this.depthSegments),
                        ny: a("ny", this.widthSegments, this.depthSegments),
                        pz: a("pz", this.widthSegments, this.heightSegments),
                        nz: a("nz", this.widthSegments, this.heightSegments)
                    },
                    t = ["position", "texcoord0", "normal"],
                    n = 0,
                    i = 0;
                for (var r in e) n += e[r].vertexCount, i += e[r].indices.length;
                for (var o = 0; o < t.length; o++) this.attributes[t[o]].init(n);
                this.indices = new l.a.Uint16Array(i);
                var s = 0,
                    u = 0;
                for (var r in e) {
                    for (var p = e[r], o = 0; o < t.length; o++)
                        for (var d = t[o], f = p.attributes[d].value, h = p.attributes[d].size, m = "normal" === d, v = 0; v < f.length; v++) {
                            var g = f[v];
                            this.inside && m && (g = -g), this.attributes[d].value[v + h * u] = g
                        }
                    for (var x = p.indices.length, v = 0; v < p.indices.length; v++) this.indices[v + s] = u + p.indices[this.inside ? x - v - 1 : v];
                    s += p.indices.length, u += p.vertexCount
                }
                this.boundingBox = new c.a, this.boundingBox.max.set(1, 1, 1), this.boundingBox.min.set(-1, -1, -1)
            }
        });
    t.a = p
}, function(e, t, n) {
    "use strict";
    t.a = "#define SAMPLE_NUMBER 1024\n#define PI 3.14159265358979\nuniform sampler2D normalDistribution;\nuniform vec2 viewportSize : [512, 256];\nconst vec3 N = vec3(0.0, 0.0, 1.0);\nconst float fSampleNumber = float(SAMPLE_NUMBER);\nvec3 importanceSampleNormal(float i, float roughness, vec3 N) {\n vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;\n vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nfloat G_Smith(float roughness, float NoV, float NoL) {\n float k = roughness * roughness / 2.0;\n float G1V = NoV / (NoV * (1.0 - k) + k);\n float G1L = NoL / (NoL * (1.0 - k) + k);\n return G1L * G1V;\n}\nvoid main() {\n vec2 uv = gl_FragCoord.xy / viewportSize;\n float NoV = uv.x;\n float roughness = uv.y;\n vec3 V;\n V.x = sqrt(1.0 - NoV * NoV);\n V.y = 0.0;\n V.z = NoV;\n float A = 0.0;\n float B = 0.0;\n for (int i = 0; i < SAMPLE_NUMBER; i++) {\n vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);\n vec3 L = reflect(-V, H);\n float NoL = clamp(L.z, 0.0, 1.0);\n float NoH = clamp(H.z, 0.0, 1.0);\n float VoH = clamp(dot(V, H), 0.0, 1.0);\n if (NoL > 0.0) {\n float G = G_Smith(roughness, NoV, NoL);\n float G_Vis = G * VoH / (NoH * NoV);\n float Fc = pow(1.0 - VoH, 5.0);\n A += (1.0 - Fc) * G_Vis;\n B += Fc * G_Vis;\n }\n }\n gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);\n}\n"
}, function(e, t, n) {
    "use strict";
    t.a = "#define SHADER_NAME prefilter\n#define SAMPLE_NUMBER 1024\n#define PI 3.14159265358979\nuniform mat4 viewInverse : VIEWINVERSE;\nuniform samplerCube environmentMap;\nuniform sampler2D normalDistribution;\nuniform float roughness : 0.5;\nuniform int maxSampleNumber: 1024\nvarying vec2 v_Texcoord;\nvarying vec3 v_WorldPosition;\n@import clay.util.rgbm\nvec3 importanceSampleNormal(float i, float roughness, vec3 N) {\n vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;\n vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nvoid main() {\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(v_WorldPosition - eyePos);\n vec3 N = V;\n vec3 prefilteredColor = vec3(0.0);\n float totalWeight = 0.0;\n float fMaxSampleNumber = float(maxSampleNumber);\n for (int i = 0; i < SAMPLE_NUMBER; i++) {\n if (i > maxSampleNumber) {\n break;\n }\n vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);\n vec3 L = reflect(-V, H);\n float NoL = clamp(dot(N, L), 0.0, 1.0);\n if (NoL > 0.0) {\n prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;\n totalWeight += NoL;\n }\n }\n gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));\n}\n"
}, function(e, t, n) {
    "use strict";
    t.a = "@export ecgl.ssr.main\n\n#define SHADER_NAME SSR\n#define MAX_ITERATION 20;\n#define SAMPLE_PER_FRAME 5;\n#define TOTAL_SAMPLES 128;\n\nuniform sampler2D sourceTexture;\nuniform sampler2D gBufferTexture1;\nuniform sampler2D gBufferTexture2;\nuniform sampler2D gBufferTexture3;\nuniform samplerCube specularCubemap;\nuniform sampler2D brdfLookup;\nuniform float specularIntensity: 1;\n\nuniform mat4 projection;\nuniform mat4 projectionInv;\nuniform mat4 toViewSpace;\nuniform mat4 toWorldSpace;\n\nuniform float maxRayDistance: 200;\n\nuniform float pixelStride: 16;\nuniform float pixelStrideZCutoff: 50; \nuniform float screenEdgeFadeStart: 0.9; \nuniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; \nuniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;\n\nuniform float nearZ;\nuniform vec2 viewportSize : VIEWPORT_SIZE;\n\nuniform float jitterOffset: 0;\n\nvarying vec2 v_Texcoord;\n\n#ifdef DEPTH_DECODE\n@import clay.util.decode_float\n#endif\n\n#ifdef PHYSICALLY_CORRECT\nuniform sampler2D normalDistribution;\nuniform float sampleOffset: 0;\nuniform vec2 normalDistributionSize;\n\nvec3 transformNormal(vec3 H, vec3 N) {\n vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nvec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {\n float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));\n vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;\n return transformNormal(H, N);\n}\nfloat G_Smith(float g, float ndv, float ndl) {\n float roughness = 1.0 - g;\n float k = roughness * roughness / 2.0;\n float G1V = ndv / (ndv * (1.0 - k) + k);\n float G1L = ndl / (ndl * (1.0 - k) + k);\n return G1L * G1V;\n}\nvec3 F_Schlick(float ndv, vec3 spec) {\n return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);\n}\n#endif\n\nfloat fetchDepth(sampler2D depthTexture, vec2 uv)\n{\n vec4 depthTexel = texture2D(depthTexture, uv);\n return depthTexel.r * 2.0 - 1.0;\n}\n\nfloat linearDepth(float depth)\n{\n if (projection[3][3] == 0.0) {\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n }\n else {\n return (depth - projection[3][2]) / projection[2][2];\n }\n}\n\nbool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)\n{\n if (rayZFar > rayZNear)\n {\n float t = rayZFar; rayZFar = rayZNear; rayZNear = t;\n }\n float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));\n return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;\n}\n\n\nbool traceScreenSpaceRay(\n vec3 rayOrigin, vec3 rayDir, float jitter,\n out vec2 hitPixel, out vec3 hitPoint, out float iterationCount\n)\n{\n float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)\n ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;\n\n vec3 rayEnd = rayOrigin + rayDir * rayLength;\n\n vec4 H0 = projection * vec4(rayOrigin, 1.0);\n vec4 H1 = projection * vec4(rayEnd, 1.0);\n\n float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;\n\n vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;\n\n vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;\n vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;\n\n P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;\n vec2 delta = P1 - P0;\n\n bool permute = false;\n if (abs(delta.x) < abs(delta.y)) {\n permute = true;\n delta = delta.yx;\n P0 = P0.yx;\n P1 = P1.yx;\n }\n float stepDir = sign(delta.x);\n float invdx = stepDir / delta.x;\n\n vec3 dQ = (Q1 - Q0) * invdx;\n float dk = (k1 - k0) * invdx;\n\n vec2 dP = vec2(stepDir, delta.y * invdx);\n\n float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);\n float pixStride = 1.0 + strideScaler * pixelStride;\n\n dP *= pixStride; dQ *= pixStride; dk *= pixStride;\n\n vec4 pqk = vec4(P0, Q0.z, k0);\n vec4 dPQK = vec4(dP, dQ.z, dk);\n\n pqk += dPQK * jitter;\n float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);\n float rayZNear;\n\n bool intersect = false;\n\n vec2 texelSize = 1.0 / viewportSize;\n\n iterationCount = 0.0;\n\n for (int i = 0; i < MAX_ITERATION; i++)\n {\n pqk += dPQK;\n\n rayZNear = rayZFar;\n rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);\n\n hitPixel = permute ? pqk.yx : pqk.xy;\n hitPixel *= texelSize;\n\n intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);\n\n iterationCount += 1.0;\n\n dPQK *= 1.2;\n\n if (intersect) {\n break;\n }\n }\n\n Q0.xy += dQ.xy * iterationCount;\n Q0.z = pqk.z;\n hitPoint = Q0 / pqk.w;\n\n return intersect;\n}\n\nfloat calculateAlpha(\n float iterationCount, float reflectivity,\n vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir\n)\n{\n float alpha = clamp(reflectivity, 0.0, 1.0);\n alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));\n vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;\n float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));\n alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);\n\n float _eyeFadeStart = eyeFadeStart;\n float _eyeFadeEnd = eyeFadeEnd;\n if (_eyeFadeStart > _eyeFadeEnd) {\n float tmp = _eyeFadeEnd;\n _eyeFadeEnd = _eyeFadeStart;\n _eyeFadeStart = tmp;\n }\n\n float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);\n alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);\n\n alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);\n\n return alpha;\n}\n\n@import clay.util.rand\n\n@import clay.util.rgbm\n\nvoid main()\n{\n vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);\n\n if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {\n discard;\n }\n\n float g = normalAndGloss.a;\n#if !defined(PHYSICALLY_CORRECT)\n if (g <= minGlossiness) {\n discard;\n }\n#endif\n\n float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);\n\n vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);\n N = normalize((toViewSpace * vec4(N, 0.0)).xyz);\n\n vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);\n vec4 pos = projectionInv * projectedPos;\n vec3 rayOrigin = pos.xyz / pos.w;\n vec3 V = -normalize(rayOrigin);\n\n float ndv = clamp(dot(N, V), 0.0, 1.0);\n float iterationCount;\n float jitter = rand(fract(v_Texcoord + jitterOffset));\n\n vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);\n vec3 albedo = albedoMetalness.rgb;\n float m = albedoMetalness.a;\n vec3 diffuseColor = albedo * (1.0 - m);\n vec3 spec = mix(vec3(0.04), albedo, m);\n\n#ifdef PHYSICALLY_CORRECT\n vec4 color = vec4(vec3(0.0), 1.0);\n\n float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);\n\n for (int i = 0; i < SAMPLE_PER_FRAME; i++) {\n vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);\n vec3 rayDir = normalize(reflect(-V, H));\n#else\n vec3 rayDir = normalize(reflect(-V, N));\n#endif\n vec2 hitPixel;\n vec3 hitPoint;\n\n bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);\n\n float dist = distance(rayOrigin, hitPoint);\n\n vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;\n hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);\n#ifdef PHYSICALLY_CORRECT\n float ndl = clamp(dot(N, rayDir), 0.0, 1.0);\n float vdh = clamp(dot(V, H), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n vec3 litTexel = vec3(0.0);\n if (dot(hitNormal, rayDir) < 0.0 && intersect) {\n litTexel = texture2D(sourceTexture, hitPixel).rgb;\n litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);\n\n }\n else {\n #ifdef SPECULARCUBEMAP_ENABLED\n vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;\n litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;\n#endif\n }\n color.rgb += ndl * litTexel * (\n F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)\n );\n }\n color.rgb /= float(SAMPLE_PER_FRAME);\n#else\n #if !defined(SPECULARCUBEMAP_ENABLED)\n if (dot(hitNormal, rayDir) >= 0.0) {\n discard;\n }\n if (!intersect) {\n discard;\n }\n#endif\n float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);\n vec4 color = texture2D(sourceTexture, hitPixel);\n color.rgb *= alpha;\n\n#ifdef SPECULARCUBEMAP_ENABLED\n vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;\n alpha = alpha * (intersect ? 1.0 : 0.0);\n float bias = (1.0 - g) * 5.0;\n vec2 brdfParam2 = texture2D(brdfLookup, vec2(1.0 - g, ndv)).xy;\n color.rgb += (1.0 - alpha)\n * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb\n * (spec * brdfParam2.x + brdfParam2.y)\n * specularIntensity;\n#endif\n\n#endif\n\n gl_FragColor = encodeHDR(color);\n}\n@end\n\n@export ecgl.ssr.blur\n\nuniform sampler2D texture;\nuniform sampler2D gBufferTexture1;\nuniform sampler2D gBufferTexture2;\nuniform mat4 projection;\nuniform float depthRange : 0.05;\n\nvarying vec2 v_Texcoord;\n\nuniform vec2 textureSize;\nuniform float blurSize : 1.0;\n\n#ifdef BLEND\n #ifdef SSAOTEX_ENABLED\nuniform sampler2D ssaoTex;\n #endif\nuniform sampler2D sourceTexture;\n#endif\n\nfloat getLinearDepth(vec2 coord)\n{\n float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n}\n\n@import clay.util.rgbm\n\n\nvoid main()\n{\n @import clay.compositor.kernel.gaussian_9\n\n vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);\n float g = centerNTexel.a;\n float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;\n#ifdef VERTICAL\n vec2 off = vec2(0.0, maxBlurSize / textureSize.y);\n#else\n vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);\n#endif\n\n vec2 coord = v_Texcoord;\n\n vec4 sum = vec4(0.0);\n float weightAll = 0.0;\n\n vec3 cN = centerNTexel.rgb * 2.0 - 1.0;\n float cD = getLinearDepth(v_Texcoord);\n for (int i = 0; i < 9; i++) {\n vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));\n float w = gaussianKernel[i]\n * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);\n float d = getLinearDepth(coord);\n w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));\n\n weightAll += w;\n sum += decodeHDR(texture2D(texture, coord)) * w;\n }\n\n#ifdef BLEND\n float aoFactor = 1.0;\n #ifdef SSAOTEX_ENABLED\n aoFactor = texture2D(ssaoTex, v_Texcoord).r;\n #endif\n gl_FragColor = encodeHDR(\n sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))\n );\n#else\n gl_FragColor = encodeHDR(sum / weightAll);\n#endif\n}\n\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = [0, 0, -.321585265978, -.154972575841, .458126042375, .188473391593, .842080129861, .527766490688, .147304551086, -.659453822776, -.331943915203, -.940619700594, .0479226680259, .54812163202, .701581552186, -.709825561388, -.295436780218, .940589268233, -.901489676764, .237713156085, .973570876096, -.109899459384, -.866792314779, -.451805525005, .330975007087, .800048655954, -.344275183665, .381779221166, -.386139432542, -.437418421534, -.576478634965, -.0148463392551, .385798197415, -.262426961053, -.666302061145, .682427250835, -.628010632582, -.732836215494, .10163141741, -.987658134403, .711995289051, -.320024291314, .0296005138058, .950296523438, .0130612307608, -.351024443122, -.879596633704, -.10478487883, .435712737232, .504254490347, .779203817497, .206477676721, .388264289969, -.896736162545, -.153106280781, -.629203242522, -.245517550697, .657969239148, .126830499058, .26862328493, -.634888119007, -.302301223431, .617074219636, .779817204925]
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = document.createElement("canvas");
        t.width = t.height = 1;
        var n = t.getContext("2d");
        return n.fillStyle = e || "#000", n.fillRect(0, 0, 1, 1), t
    }

    function i(e, t, n, a, i) {
        var r = e.gl;
        t.setUniform(r, "1i", n, i), r.activeTexture(r.TEXTURE0 + i), a.isRenderable() ? a.bind(e) : a.unbind(e)
    }

    function r(e, t, n) {
        var a, r, o;
        return function(s, c, l) {
            if (!o || o.material !== s.material) {
                var u, p, d, f = s.material,
                    h = s.__program,
                    m = f.isDefined("fragment", "USE_ROUGHNESS"),
                    v = f.isDefined("fragment", "DOUBLE_SIDED");
                m ? (u = 1 - f.get("roughness"), p = f.get("roughnessMap"), d = f.getDefine("fragment", "ROUGHNESS_CHANNEL")) : (u = f.get("glossiness"), p = f.get("glossinessMap"), d = f.getDefine("fragment", "GLOSSINESS_CHANNEL"));
                var g = !!p,
                    x = f.get("normalMap") || t,
                    _ = f.get("uvRepeat"),
                    y = f.get("uvOffset");
                p = p || n, l !== c ? (c.set("glossiness", u), c.set("normalMap", x), c.set("roughGlossMap", p), c.set("useRoughGlossMap", +g), c.set("useRoughness", +m), c.set("doubleSided", +v), c.set("roughGlossChannel", +d || 0), c.set("uvRepeat", _), c.set("uvOffset", y)) : (h.setUniform(e, "1f", "glossiness", u), a !== x && i(this, h, "normalMap", x, 0), r !== p && i(this, h, "roughGlossMap", p, 1), h.setUniform(e, "1i", "useRoughGlossMap", +g), h.setUniform(e, "1i", "useRoughness", +m), h.setUniform(e, "1i", "doubleSided", +v), h.setUniform(e, "1i", "roughGlossChannel", +d || 0), null != _ && h.setUniform(e, "2f", "uvRepeat", _), null != y && h.setUniform(e, "2f", "uvOffset", y)), a = x, r = p, o = s
            }
        }
    }

    function o(e, t, n) {
        var a, r, o;
        return function(s, c, l) {
            if (!r || r.material !== s.material) {
                var u = s.__program,
                    p = s.material,
                    d = p.get("color"),
                    f = p.get("metalness") || 0,
                    h = p.get("diffuseMap"),
                    m = p.get("metalnessMap"),
                    v = p.get("uvRepeat"),
                    g = p.get("uvOffset"),
                    x = !!m;
                h = h || t, m = m || n, l !== c ? (c.set("color", d), c.set("metalness", f), c.set("diffuseMap", h), c.set("metalnessMap", m), c.set("useMetalnessMap", +x), c.set("uvRepeat", v), c.set("uvOffset", g), c.set("linear", +p.linear || 0)) : (u.setUniform(e, "1f", "metalness", f), u.setUniform(e, "3f", "color", d), a !== h && i(this, u, "diffuseMap", h, 0), o !== m && i(this, u, "metalnessMap", m, 1), u.setUniform(e, "1i", "useMetalnessMap", +x), u.setUniform(e, "2f", "uvRepeat", v), u.setUniform(e, "2f", "uvOffset", g), u.setUniform(e, "1i", "linear", +p.linear || 0)), a = h, o = m, r = s
            }
        }
    }
    var s = n(1),
        c = n(5),
        l = n(3),
        u = n(10),
        p = n(11),
        d = n(2),
        f = (n(27), n(13)),
        h = n(9),
        m = n(64),
        v = n(124);
    d.a.import(m.a), d.a.import(v.a);
    var g = s.a.extend(function() {
        return {
            enableTargetTexture1: !0,
            enableTargetTexture2: !0,
            enableTargetTexture3: !0,
            renderTransparent: !1,
            _gBufferRenderList: [],
            _gBufferTex1: new c.a({
                minFilter: l.a.NEAREST,
                magFilter: l.a.NEAREST,
                type: l.a.HALF_FLOAT
            }),
            _gBufferTex2: new c.a({
                minFilter: l.a.NEAREST,
                magFilter: l.a.NEAREST,
                format: l.a.DEPTH_STENCIL,
                type: l.a.UNSIGNED_INT_24_8_WEBGL
            }),
            _gBufferTex3: new c.a({
                minFilter: l.a.NEAREST,
                magFilter: l.a.NEAREST
            }),
            _defaultNormalMap: new c.a({
                image: a("#000")
            }),
            _defaultRoughnessMap: new c.a({
                image: a("#fff")
            }),
            _defaultMetalnessMap: new c.a({
                image: a("#fff")
            }),
            _defaultDiffuseMap: new c.a({
                image: a("#fff")
            }),
            _frameBuffer: new p.a,
            _gBufferMaterial1: new u.a({
                shader: new d.a(d.a.source("clay.deferred.gbuffer.vertex"), d.a.source("clay.deferred.gbuffer1.fragment")),
                vertexDefines: {
                    FIRST_PASS: null
                },
                fragmentDefines: {
                    FIRST_PASS: null
                }
            }),
            _gBufferMaterial2: new u.a({
                shader: new d.a(d.a.source("clay.deferred.gbuffer.vertex"), d.a.source("clay.deferred.gbuffer2.fragment"))
            }),
            _debugPass: new f.a({
                fragment: d.a.source("clay.deferred.gbuffer.debug")
            })
        }
    }, {
        resize: function(e, t) {
            this._gBufferTex1.width === e && this._gBufferTex1.height === t || (this._gBufferTex1.width = e, this._gBufferTex1.height = t, this._gBufferTex2.width = e, this._gBufferTex2.height = t, this._gBufferTex3.width = e, this._gBufferTex3.height = t)
        },
        setViewport: function(e, t, n, a, i) {
            var r;
            r = "object" == typeof e ? e : {
                x: e,
                y: t,
                width: n,
                height: a,
                devicePixelRatio: i || 1
            }, this._frameBuffer.viewport = r
        },
        getViewport: function() {
            return this._frameBuffer.viewport ? this._frameBuffer.viewport : {
                x: 0,
                y: 0,
                width: this._gBufferTex1.width,
                height: this._gBufferTex1.height,
                devicePixelRatio: 1
            }
        },
        update: function(e, t, n) {
            for (var a = e.gl, i = this._frameBuffer, s = i.viewport, c = t.updateRenderList(n, !0), l = c.opaque, u = c.transparent, p = 0, d = this._gBufferRenderList, f = 0; f < l.length; f++) l[f].ignoreGBuffer || (d[p++] = l[f]);
            if (this.renderTransparent)
                for (var f = 0; f < u.length; f++) u[f].ignoreGBuffer || (d[p++] = u[f]);
            d.length = p, a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.colorMask(!0, !0, !0, !0), a.disable(a.BLEND);
            var h = this.enableTargetTexture1,
                m = this.enableTargetTexture2,
                v = this.enableTargetTexture3;
            if (h || v || (console.warn("Can't disable targetTexture1 targetTexture3 both"), h = !0), m && i.attach(this._gBufferTex2, e.gl.DEPTH_STENCIL_ATTACHMENT), e.bindSceneRendering(t), h) {
                if (i.attach(this._gBufferTex1), i.bind(e), s) {
                    var g = s.devicePixelRatio;
                    a.enable(a.SCISSOR_TEST), a.scissor(s.x * g, s.y * g, s.width * g, s.height * g)
                }
                a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), s && a.disable(a.SCISSOR_TEST);
                var x = this._gBufferMaterial1,
                    _ = {
                        getMaterial: function() {
                            return x
                        },
                        beforeRender: r(a, this._defaultNormalMap, this._defaultRoughnessMap),
                        sortCompare: e.opaqueSortCompare
                    };
                e.renderPass(d, n, _)
            }
            if (v) {
                if (i.attach(this._gBufferTex3), i.bind(e), s) {
                    var g = s.devicePixelRatio;
                    a.enable(a.SCISSOR_TEST), a.scissor(s.x * g, s.y * g, s.width * g, s.height * g)
                }
                a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), s && a.disable(a.SCISSOR_TEST);
                var y = this._gBufferMaterial2,
                    _ = {
                        getMaterial: function() {
                            return y
                        },
                        beforeRender: o(a, this._defaultDiffuseMap, this._defaultMetalnessMap),
                        sortCompare: e.opaqueSortCompare
                    };
                e.renderPass(d, n, _)
            }
            e.bindSceneRendering(null), i.unbind(e)
        },
        renderDebug: function(e, t, n, a) {
            var i = {
                normal: 0,
                depth: 1,
                position: 2,
                glossiness: 3,
                metalness: 4,
                albedo: 5
            };
            null == i[n] && (console.warn('Unkown type "' + n + '"'), n = "normal"), e.saveClear(), e.saveViewport(), e.clearBit = e.gl.DEPTH_BUFFER_BIT, a && e.setViewport(a);
            var r = new h.a;
            h.a.multiply(r, t.worldTransform, t.invProjectionMatrix);
            var o = this._debugPass;
            o.setUniform("viewportSize", [e.getWidth(), e.getHeight()]), o.setUniform("gBufferTexture1", this._gBufferTex1), o.setUniform("gBufferTexture2", this._gBufferTex2), o.setUniform("gBufferTexture3", this._gBufferTex3), o.setUniform("debug", i[n]), o.setUniform("viewProjectionInv", r.array), o.render(e), e.restoreViewport(), e.restoreClear()
        },
        getTargetTexture1: function() {
            return this._gBufferTex1
        },
        getTargetTexture2: function() {
            return this._gBufferTex2
        },
        getTargetTexture3: function() {
            return this._gBufferTex3
        },
        dispose: function(e) {}
    });
    t.a = g
}, function(e, t, n) {
    "use strict";
    t.a = "@export clay.deferred.chunk.light_head\nuniform sampler2D gBufferTexture1;\nuniform sampler2D gBufferTexture2;\nuniform sampler2D gBufferTexture3;\nuniform vec2 windowSize: WINDOW_SIZE;\nuniform vec4 viewport: VIEWPORT;\nuniform mat4 viewProjectionInv;\n#ifdef DEPTH_ENCODED\n@import clay.util.decode_float\n#endif\n@end\n@export clay.deferred.chunk.gbuffer_read\n vec2 uv = gl_FragCoord.xy / windowSize;\n vec2 uv2 = (gl_FragCoord.xy - viewport.xy) / viewport.zw;\n vec4 texel1 = texture2D(gBufferTexture1, uv);\n vec4 texel3 = texture2D(gBufferTexture3, uv);\n if (dot(texel1.rgb, vec3(1.0)) == 0.0) {\n discard;\n }\n float glossiness = texel1.a;\n float metalness = texel3.a;\n vec3 N = texel1.rgb * 2.0 - 1.0;\n float z = texture2D(gBufferTexture2, uv).r * 2.0 - 1.0;\n vec2 xy = uv2 * 2.0 - 1.0;\n vec4 projectedPos = vec4(xy, z, 1.0);\n vec4 p4 = viewProjectionInv * projectedPos;\n vec3 position = p4.xyz / p4.w;\n vec3 albedo = texel3.rgb;\n vec3 diffuseColor = albedo * (1.0 - metalness);\n vec3 specularColor = mix(vec3(0.04), albedo, metalness);\n@end\n@export clay.deferred.chunk.light_equation\nfloat D_Phong(in float g, in float ndh) {\n float a = pow(8192.0, g);\n return (a + 2.0) / 8.0 * pow(ndh, a);\n}\nfloat D_GGX(in float g, in float ndh) {\n float r = 1.0 - g;\n float a = r * r;\n float tmp = ndh * ndh * (a - 1.0) + 1.0;\n return a / (3.1415926 * tmp * tmp);\n}\nvec3 F_Schlick(in float ndv, vec3 spec) {\n return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);\n}\nvec3 lightEquation(\n in vec3 lightColor, in vec3 diffuseColor, in vec3 specularColor,\n in float ndl, in float ndh, in float ndv, in float g\n)\n{\n return ndl * lightColor\n * (diffuseColor + D_Phong(g, ndh) * F_Schlick(ndv, specularColor));\n}\n@end"
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        i = n(63),
        r = a.a.extend({
            cubemap: null,
            castShadow: !1,
            _normalDistribution: null,
            _brdfLookup: null
        }, {
            type: "AMBIENT_CUBEMAP_LIGHT",
            prefilter: function(e, t) {
                this._brdfLookup || (this._normalDistribution = i.a.generateNormalDistribution(), this._brdfLookup = i.a.integrateBRDF(e, this._normalDistribution));
                var n = this.cubemap;
                if (!n.__prefiltered) {
                    var a = i.a.prefilterEnvironmentMap(e, n, {
                        encodeRGBM: !0,
                        width: t,
                        height: t
                    }, this._normalDistribution, this._brdfLookup);
                    this.cubemap = a.environmentMap, this.cubemap.__prefiltered = !0, n.dispose(e)
                }
            },
            getBRDFLookup: function() {
                return this._brdfLookup
            },
            uniformTemplates: {
                ambientCubemapLightColor: {
                    type: "3f",
                    value: function(e) {
                        var t = e.color,
                            n = e.intensity;
                        return [t[0] * n, t[1] * n, t[2] * n]
                    }
                },
                ambientCubemapLightCubemap: {
                    type: "t",
                    value: function(e) {
                        return e.cubemap
                    }
                },
                ambientCubemapLightBRDFLookup: {
                    type: "t",
                    value: function(e) {
                        return e._brdfLookup
                    }
                }
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        i = n(12),
        r = a.a.extend({
            castShadow: !1,
            coefficients: []
        }, function() {
            this._coefficientsTmpArr = new i.a.Float32Array(27)
        }, {
            type: "AMBIENT_SH_LIGHT",
            uniformTemplates: {
                ambientSHLightColor: {
                    type: "3f",
                    value: function(e) {
                        var t = e.color,
                            n = e.intensity;
                        return [t[0] * n, t[1] * n, t[2] * n]
                    }
                },
                ambientSHLightCoefficients: {
                    type: "3f",
                    value: function(e) {
                        for (var t = e._coefficientsTmpArr, n = 0; n < e.coefficients.length; n++) t[n] = e.coefficients[n];
                        return t
                    }
                }
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = e[0],
            a = e[1],
            i = e[2];
        return 0 === t ? 1 : 1 === t ? n : 2 === t ? a : 3 === t ? i : 4 === t ? n * i : 5 === t ? a * i : 6 === t ? n * a : 7 === t ? 3 * i * i - 1 : n * n - a * a
    }

    function i(e, t, n, i) {
        for (var r = new c.a.Float32Array(27), o = m.create(), s = m.create(), l = m.create(), u = 0; u < 9; u++) {
            for (var p = m.create(), d = 0; d < g.length; d++) {
                for (var f = t[g[d]], h = m.create(), v = 0, _ = 0, y = x[g[d]], b = 0; b < i; b++)
                    for (var T = 0; T < n; T++) {
                        o[0] = T / (n - 1) * 2 - 1, o[1] = b / (i - 1) * 2 - 1, o[2] = -1, m.normalize(o, o), l[0] = o[y[0]] * y[3], l[1] = o[y[1]] * y[4], l[2] = o[y[2]] * y[5], s[0] = f[_++] / 255, s[1] = f[_++] / 255, s[2] = f[_++] / 255;
                        var E = f[_++] / 255 * 8.12;
                        s[0] *= E, s[1] *= E, s[2] *= E, m.scaleAndAdd(h, h, s, a(l, u) * -o[2]), v += -o[2]
                    }
                m.scaleAndAdd(p, p, h, 1 / v)
            }
            r[3 * u] = p[0] / 6, r[3 * u + 1] = p[1] / 6, r[3 * u + 2] = p[2] / 6
        }
        return r
    }
    var r = n(3),
        o = n(11),
        s = n(5),
        c = (n(13), n(12)),
        l = n(35),
        u = n(34),
        p = n(33),
        d = n(17),
        f = n(0),
        h = n.n(f),
        m = (n(128), h.a.vec3),
        v = {},
        g = ["px", "nx", "py", "ny", "pz", "nz"],
        x = {
            px: [2, 1, 0, -1, -1, 1],
            nx: [2, 1, 0, 1, -1, -1],
            py: [0, 2, 1, 1, -1, -1],
            ny: [0, 2, 1, 1, 1, 1],
            pz: [0, 1, 2, -1, -1, -1],
            nz: [0, 1, 2, 1, -1, 1]
        };
    v.projectEnvironmentMap = function(e, t, n) {
        n = n || {}, n.lod = n.lod || 0;
        var a, c = new d.a,
            f = 64;
        "texture2D" === t.textureType ? a = new u.a({
            scene: c,
            environmentMap: t
        }) : (f = t.image && t.image.px ? t.image.px.width : t.width, a = new l.a({
            scene: c,
            environmentMap: t
        }));
        var h = Math.ceil(f / Math.pow(2, n.lod)),
            m = Math.ceil(f / Math.pow(2, n.lod)),
            v = new s.a({
                width: h,
                height: m
            }),
            x = new o.a;
        a.material.define("fragment", "RGBM_ENCODE"), n.decodeRGBM && a.material.define("fragment", "RGBM_DECODE"), a.material.set("lod", n.lod);
        for (var _ = new p.a({
                texture: v
            }), y = {}, b = 0; b < g.length; b++) {
            y[g[b]] = new Uint8Array(h * m * 4);
            var T = _.getCamera(g[b]);
            T.fov = 90, x.attach(v), x.bind(e), e.render(c, T), e.gl.readPixels(0, 0, h, m, r.a.RGBA, r.a.UNSIGNED_BYTE, y[g[b]]), x.unbind(e)
        }
        return a.dispose(e), x.dispose(e), v.dispose(e), i(e, y, h, m)
    }, t.a = v
}, function(e, t, n) {
    "use strict";
    t.a = "uniform samplerCube environmentMap;\nvarying vec2 v_Texcoord;\n#define TEXTURE_SIZE 16\nmat3 front = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 1.0, 0.0,\n 0.0, 0.0, 1.0\n);\nmat3 back = mat3(\n -1.0, 0.0, 0.0,\n 0.0, 1.0, 0.0,\n 0.0, 0.0, -1.0\n);\nmat3 left = mat3(\n 0.0, 0.0, -1.0,\n 0.0, 1.0, 0.0,\n 1.0, 0.0, 0.0\n);\nmat3 right = mat3(\n 0.0, 0.0, 1.0,\n 0.0, 1.0, 0.0,\n -1.0, 0.0, 0.0\n);\nmat3 up = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 0.0, 1.0,\n 0.0, -1.0, 0.0\n);\nmat3 down = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 0.0, -1.0,\n 0.0, 1.0, 0.0\n);\nfloat harmonics(vec3 normal){\n int index = int(gl_FragCoord.x);\n float x = normal.x;\n float y = normal.y;\n float z = normal.z;\n if(index==0){\n return 1.0;\n }\n else if(index==1){\n return x;\n }\n else if(index==2){\n return y;\n }\n else if(index==3){\n return z;\n }\n else if(index==4){\n return x*z;\n }\n else if(index==5){\n return y*z;\n }\n else if(index==6){\n return x*y;\n }\n else if(index==7){\n return 3.0*z*z - 1.0;\n }\n else{\n return x*x - y*y;\n }\n}\nvec3 sampleSide(mat3 rot)\n{\n vec3 result = vec3(0.0);\n float divider = 0.0;\n for (int i = 0; i < TEXTURE_SIZE * TEXTURE_SIZE; i++) {\n float x = mod(float(i), float(TEXTURE_SIZE));\n float y = float(i / TEXTURE_SIZE);\n vec2 sidecoord = ((vec2(x, y) + vec2(0.5, 0.5)) / vec2(TEXTURE_SIZE)) * 2.0 - 1.0;\n vec3 normal = normalize(vec3(sidecoord, -1.0));\n vec3 fetchNormal = rot * normal;\n vec3 texel = textureCube(environmentMap, fetchNormal).rgb;\n result += harmonics(fetchNormal) * texel * -normal.z;\n divider += -normal.z;\n }\n return result / divider;\n}\nvoid main()\n{\n vec3 result = (\n sampleSide(front) +\n sampleSide(back) +\n sampleSide(left) +\n sampleSide(right) +\n sampleSide(up) +\n sampleSide(down)\n ) / 6.0;\n gl_FragColor = vec4(result, 1.0);\n}"
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
    }

    function i(e) {
        return e < 0 ? 0 : e > 1 ? 1 : e
    }

    function r(e) {
        return a(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function o(e) {
        return i(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function s(e, t, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * n * 6 : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function c(e, t, n, a, i) {
        return e[0] = t, e[1] = n, e[2] = a, e[3] = i, e
    }

    function l(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function u(e, t) {
        g && l(g, t), g = v.put(e, g || t.slice())
    }

    function p(e, t) {
        if (e) {
            t = t || [];
            var n = v.get(e);
            if (n) return l(t, n);
            e += "";
            var a = e.replace(/ /g, "").toLowerCase();
            if (a in m) return l(t, m[a]), u(e, t), t;
            if ("#" !== a.charAt(0)) {
                var i = a.indexOf("("),
                    s = a.indexOf(")");
                if (-1 !== i && s + 1 === a.length) {
                    var p = a.substr(0, i),
                        f = a.substr(i + 1, s - (i + 1)).split(","),
                        h = 1;
                    switch (p) {
                        case "rgba":
                            if (4 !== f.length) return void c(t, 0, 0, 0, 1);
                            h = o(f.pop());
                        case "rgb":
                            return 3 !== f.length ? void c(t, 0, 0, 0, 1) : (c(t, r(f[0]), r(f[1]), r(f[2]), h), u(e, t), t);
                        case "hsla":
                            return 4 !== f.length ? void c(t, 0, 0, 0, 1) : (f[3] = o(f[3]), d(f, t), u(e, t), t);
                        case "hsl":
                            return 3 !== f.length ? void c(t, 0, 0, 0, 1) : (d(f, t), u(e, t), t);
                        default:
                            return
                    }
                }
                c(t, 0, 0, 0, 1)
            } else {
                if (4 === a.length) {
                    var g = parseInt(a.substr(1), 16);
                    return g >= 0 && g <= 4095 ? (c(t, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), u(e, t), t) : void c(t, 0, 0, 0, 1)
                }
                if (7 === a.length) {
                    var g = parseInt(a.substr(1), 16);
                    return g >= 0 && g <= 16777215 ? (c(t, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), u(e, t), t) : void c(t, 0, 0, 0, 1)
                }
            }
        }
    }

    function d(e, t) {
        var n = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
            i = o(e[1]),
            r = o(e[2]),
            l = r <= .5 ? r * (i + 1) : r + i - r * i,
            u = 2 * r - l;
        return t = t || [], c(t, a(255 * s(u, l, n + 1 / 3)), a(255 * s(u, l, n)), a(255 * s(u, l, n - 1 / 3)), 1), 4 === e.length && (t[3] = e[3]), t
    }

    function f(e, t) {
        if (e && e.length) {
            var n = e[0] + "," + e[1] + "," + e[2];
            return "rgba" !== t && "hsva" !== t && "hsla" !== t || (n += "," + e[3]), t + "(" + n + ")"
        }
    }
    t.a = p, t.b = f;
    var h = n(65),
        m = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        },
        v = new h.a(20),
        g = null
}, function(e, t, n) {
    "use strict";
    t.a = {
        type: "compositor",
        nodes: [{
            name: "source",
            type: "texture",
            outputs: {
                color: {}
            }
        }, {
            name: "source_half",
            shader: "#source(clay.compositor.downsample)",
            inputs: {
                texture: "source"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 2)",
                        height: "expr(height * 1.0 / 2)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0, height * 1.0] )"
            }
        }, {
            name: "bright",
            shader: "#source(clay.compositor.bright)",
            inputs: {
                texture: "source_half"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 2)",
                        height: "expr(height * 1.0 / 2)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                threshold: 2,
                scale: 4,
                textureSize: "expr([width * 1.0 / 2, height / 2])"
            }
        }, {
            name: "bright_downsample_4",
            shader: "#source(clay.compositor.downsample)",
            inputs: {
                texture: "bright"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 4)",
                        height: "expr(height * 1.0 / 4)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0 / 2, height / 2] )"
            }
        }, {
            name: "bright_downsample_8",
            shader: "#source(clay.compositor.downsample)",
            inputs: {
                texture: "bright_downsample_4"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 8)",
                        height: "expr(height * 1.0 / 8)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0 / 4, height / 4] )"
            }
        }, {
            name: "bright_downsample_16",
            shader: "#source(clay.compositor.downsample)",
            inputs: {
                texture: "bright_downsample_8"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 16)",
                        height: "expr(height * 1.0 / 16)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0 / 8, height / 8] )"
            }
        }, {
            name: "bright_downsample_32",
            shader: "#source(clay.compositor.downsample)",
            inputs: {
                texture: "bright_downsample_16"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 32)",
                        height: "expr(height * 1.0 / 32)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0 / 16, height / 16] )"
            }
        }, {
            name: "bright_upsample_16_blur_h",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_downsample_32"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 16)",
                        height: "expr(height * 1.0 / 16)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 0,
                textureSize: "expr( [width * 1.0 / 32, height / 32] )"
            }
        }, {
            name: "bright_upsample_16_blur_v",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_upsample_16_blur_h"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 16)",
                        height: "expr(height * 1.0 / 16)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 1,
                textureSize: "expr( [width * 1.0 / 32, height * 1.0 / 32] )"
            }
        }, {
            name: "bright_upsample_8_blur_h",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_downsample_16"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 8)",
                        height: "expr(height * 1.0 / 8)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 0,
                textureSize: "expr( [width * 1.0 / 16, height * 1.0 / 16] )"
            }
        }, {
            name: "bright_upsample_8_blur_v",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_upsample_8_blur_h"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 8)",
                        height: "expr(height * 1.0 / 8)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 1,
                textureSize: "expr( [width * 1.0 / 16, height * 1.0 / 16] )"
            }
        }, {
            name: "bright_upsample_8_blend",
            shader: "#source(clay.compositor.blend)",
            inputs: {
                texture1: "bright_upsample_8_blur_v",
                texture2: "bright_upsample_16_blur_v"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 8)",
                        height: "expr(height * 1.0 / 8)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                weight1: .3,
                weight2: .7
            }
        }, {
            name: "bright_upsample_4_blur_h",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_downsample_8"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 4)",
                        height: "expr(height * 1.0 / 4)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 0,
                textureSize: "expr( [width * 1.0 / 8, height * 1.0 / 8] )"
            }
        }, {
            name: "bright_upsample_4_blur_v",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_upsample_4_blur_h"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 4)",
                        height: "expr(height * 1.0 / 4)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 1,
                textureSize: "expr( [width * 1.0 / 8, height * 1.0 / 8] )"
            }
        }, {
            name: "bright_upsample_4_blend",
            shader: "#source(clay.compositor.blend)",
            inputs: {
                texture1: "bright_upsample_4_blur_v",
                texture2: "bright_upsample_8_blend"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 4)",
                        height: "expr(height * 1.0 / 4)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                weight1: .3,
                weight2: .7
            }
        }, {
            name: "bright_upsample_2_blur_h",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_downsample_4"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 2)",
                        height: "expr(height * 1.0 / 2)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 0,
                textureSize: "expr( [width * 1.0 / 4, height * 1.0 / 4] )"
            }
        }, {
            name: "bright_upsample_2_blur_v",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_upsample_2_blur_h"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 2)",
                        height: "expr(height * 1.0 / 2)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 1,
                textureSize: "expr( [width * 1.0 / 4, height * 1.0 / 4] )"
            }
        }, {
            name: "bright_upsample_2_blend",
            shader: "#source(clay.compositor.blend)",
            inputs: {
                texture1: "bright_upsample_2_blur_v",
                texture2: "bright_upsample_4_blend"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0 / 2)",
                        height: "expr(height * 1.0 / 2)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                weight1: .3,
                weight2: .7
            }
        }, {
            name: "bright_upsample_full_blur_h",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 0,
                textureSize: "expr( [width * 1.0 / 2, height * 1.0 / 2] )"
            }
        }, {
            name: "bright_upsample_full_blur_v",
            shader: "#source(clay.compositor.gaussian_blur)",
            inputs: {
                texture: "bright_upsample_full_blur_h"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                blurSize: 1,
                blurDir: 1,
                textureSize: "expr( [width * 1.0 / 2, height * 1.0 / 2] )"
            }
        }, {
            name: "bloom_composite",
            shader: "#source(clay.compositor.blend)",
            inputs: {
                texture1: "bright_upsample_full_blur_v",
                texture2: "bright_upsample_2_blend"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                weight1: .3,
                weight2: .7
            }
        }, {
            name: "coc",
            shader: "#source(ecgl.dof.coc)",
            outputs: {
                color: {
                    parameters: {
                        minFilter: "NEAREST",
                        magFilter: "NEAREST",
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)"
                    }
                }
            },
            parameters: {
                focalDist: 50,
                focalRange: 30
            }
        }, {
            name: "dof_far_blur",
            shader: "#source(ecgl.dof.diskBlur)",
            inputs: {
                texture: "source",
                coc: "coc"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0, height * 1.0] )"
            }
        }, {
            name: "dof_near_blur",
            shader: "#source(ecgl.dof.diskBlur)",
            inputs: {
                texture: "source",
                coc: "coc"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0, height * 1.0] )"
            },
            defines: {
                BLUR_NEARFIELD: null
            }
        }, {
            name: "dof_coc_blur",
            shader: "#source(ecgl.dof.diskBlur)",
            inputs: {
                texture: "coc"
            },
            outputs: {
                color: {
                    parameters: {
                        minFilter: "NEAREST",
                        magFilter: "NEAREST",
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)"
                    }
                }
            },
            parameters: {
                textureSize: "expr( [width * 1.0, height * 1.0] )"
            },
            defines: {
                BLUR_COC: null
            }
        }, {
            name: "dof_composite",
            shader: "#source(ecgl.dof.composite)",
            inputs: {
                original: "source",
                blurred: "dof_far_blur",
                nearfield: "dof_near_blur",
                coc: "coc",
                nearcoc: "dof_coc_blur"
            },
            outputs: {
                color: {
                    parameters: {
                        width: "expr(width * 1.0)",
                        height: "expr(height * 1.0)",
                        type: "HALF_FLOAT"
                    }
                }
            }
        }, {
            name: "composite",
            shader: "#source(clay.compositor.hdr.composite)",
            inputs: {
                texture: "source",
                bloom: "bloom_composite"
            },
            defines: {}
        }, {
            name: "FXAA",
            shader: "#source(clay.compositor.fxaa)",
            inputs: {
                texture: "composite"
            }
        }]
    }
}, function(e, t, n) {
    "use strict";
    t.a = "@export ecgl.dof.coc\n\nuniform sampler2D depth;\n\nuniform float zNear: 0.1;\nuniform float zFar: 2000;\n\nuniform float focalDistance: 3;\nuniform float focalRange: 1;\nuniform float focalLength: 30;\nuniform float fstop: 2.8;\n\nvarying vec2 v_Texcoord;\n\n@import clay.util.encode_float\n\nvoid main()\n{\n float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;\n\n float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));\n\n float aperture = focalLength / fstop;\n\n float coc;\n\n float uppper = focalDistance + focalRange;\n float lower = focalDistance - focalRange;\n if (dist <= uppper && dist >= lower) {\n coc = 0.5;\n }\n else {\n float focalAdjusted = dist > uppper ? uppper : lower;\n\n coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));\n coc = clamp(coc, 0.0, 2.0) / 2.00001;\n\n if (dist < lower) {\n coc = -coc;\n }\n coc = coc * 0.5 + 0.5;\n }\n\n gl_FragColor = encodeFloat(coc);\n}\n@end\n\n\n@export ecgl.dof.composite\n\n#define DEBUG 0\n\nuniform sampler2D original;\nuniform sampler2D blurred;\nuniform sampler2D nearfield;\nuniform sampler2D coc;\nuniform sampler2D nearcoc;\nvarying vec2 v_Texcoord;\n\n@import clay.util.rgbm\n@import clay.util.float\n\nvoid main()\n{\n vec4 blurredColor = decodeHDR(texture2D(blurred, v_Texcoord));\n vec4 originalColor = decodeHDR(texture2D(original, v_Texcoord));\n\n float fCoc = decodeFloat(texture2D(coc, v_Texcoord));\n\n fCoc = abs(fCoc * 2.0 - 1.0);\n\n float weight = smoothstep(0.0, 1.0, fCoc);\n \n#ifdef NEARFIELD_ENABLED\n vec4 nearfieldColor = decodeHDR(texture2D(nearfield, v_Texcoord));\n float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));\n fNearCoc = abs(fNearCoc * 2.0 - 1.0);\n\n gl_FragColor = encodeHDR(\n mix(\n nearfieldColor, mix(originalColor, blurredColor, weight),\n pow(1.0 - fNearCoc, 4.0)\n )\n );\n#else\n gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));\n#endif\n\n}\n\n@end\n\n\n\n@export ecgl.dof.diskBlur\n\n#define POISSON_KERNEL_SIZE 16;\n\nuniform sampler2D texture;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\n\nuniform float blurRadius : 10.0;\nuniform vec2 textureSize : [512.0, 512.0];\n\nuniform vec2 poissonKernel[POISSON_KERNEL_SIZE];\n\nuniform float percent;\n\nfloat nrand(const in vec2 n) {\n return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n@import clay.util.rgbm\n@import clay.util.float\n\n\nvoid main()\n{\n vec2 offset = blurRadius / textureSize;\n\n float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );\n float cosa = cos(rnd);\n float sina = sin(rnd);\n vec4 basis = vec4(cosa, -sina, sina, cosa);\n\n#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)\n offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);\n#endif\n\n#ifdef BLUR_COC\n float cocSum = 0.0;\n#else\n vec4 color = vec4(0.0);\n#endif\n\n\n float weightSum = 0.0;\n\n for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {\n vec2 ofs = poissonKernel[i];\n\n ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));\n\n vec2 uv = v_Texcoord + ofs * offset;\n vec4 texel = texture2D(texture, uv);\n\n float w = 1.0;\n#ifdef BLUR_COC\n float fCoc = decodeFloat(texel) * 2.0 - 1.0;\n cocSum += clamp(fCoc, -1.0, 0.0) * w;\n#else\n texel = decodeHDR(texel);\n #if !defined(BLUR_NEARFIELD)\n float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;\n w *= abs(fCoc);\n #endif\n color += texel * w;\n#endif\n\n weightSum += w;\n }\n\n#ifdef BLUR_COC\n gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);\n#else\n color /= weightSum;\n gl_FragColor = encodeHDR(color);\n#endif\n}\n\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = "@export ecgl.edge\n\nuniform sampler2D texture;\n\nuniform sampler2D normalTexture;\nuniform sampler2D depthTexture;\n\nuniform mat4 projectionInv;\n\nuniform vec2 textureSize;\n\nuniform vec4 edgeColor: [0,0,0,0.8];\n\nvarying vec2 v_Texcoord;\n\nvec3 packColor(vec2 coord) {\n float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;\n vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);\n vec4 p4 = projectionInv * p;\n\n return vec3(\n texture2D(normalTexture, coord).rg,\n -p4.z / p4.w / 5.0\n );\n}\n\nvoid main() {\n vec2 cc = v_Texcoord;\n vec3 center = packColor(cc);\n\n float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;\n float dx = size / textureSize.x;\n float dy = size / textureSize.y;\n\n vec2 coord;\n vec3 topLeft = packColor(cc+vec2(-dx, -dy));\n vec3 top = packColor(cc+vec2(0.0, -dy));\n vec3 topRight = packColor(cc+vec2(dx, -dy));\n vec3 left = packColor(cc+vec2(-dx, 0.0));\n vec3 right = packColor(cc+vec2(dx, 0.0));\n vec3 bottomLeft = packColor(cc+vec2(-dx, dy));\n vec3 bottom = packColor(cc+vec2(0.0, dy));\n vec3 bottomRight = packColor(cc+vec2(dx, dy));\n\n vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;\n vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;\n\n float edge = sqrt(dot(h, h) + dot(v, v));\n\n edge = smoothstep(0.8, 1.0, edge);\n\n gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);\n}\n@end"
}, function(e, t, n) {
    "use strict";

    function a() {
        for (var e = [], t = 0; t < 30; t++) e.push([Object(i.a)(t, 2), Object(i.a)(t, 3)]);
        this._haltonSequence = e, this._frame = 0, this._sourceTex = new s.a, this._sourceFb = new o.a, this._sourceFb.attach(this._sourceTex), this._prevFrameTex = new s.a, this._outputTex = new s.a;
        var n = this._blendPass = new r.a({
            fragment: c.a.source("clay.compositor.blend")
        });
        n.material.disableTexturesAll(), n.material.enableTexture(["texture1", "texture2"]), this._blendFb = new o.a({
            depthBuffer: !1
        }), this._outputPass = new r.a({
            fragment: c.a.source("clay.compositor.output"),
            blendWithPrevious: !0
        }), this._outputPass.material.define("fragment", "OUTPUT_ALPHA"), this._outputPass.material.blend = function(e) {
            e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
        }
    }
    var i = n(25),
        r = n(13),
        o = n(11),
        s = n(5),
        c = n(2),
        l = n(9);
    a.prototype = {
        constructor: a,
        jitterProjection: function(e, t) {
            var n = e.viewport,
                a = n.devicePixelRatio || e.getDevicePixelRatio(),
                i = n.width * a,
                r = n.height * a,
                o = this._haltonSequence[this._frame % this._haltonSequence.length],
                s = new l.a;
            s.array[12] = (2 * o[0] - 1) / i, s.array[13] = (2 * o[1] - 1) / r, l.a.mul(t.projectionMatrix, s, t.projectionMatrix), l.a.invert(t.invProjectionMatrix, t.projectionMatrix)
        },
        resetFrame: function() {
            this._frame = 0
        },
        getFrame: function() {
            return this._frame
        },
        getSourceFrameBuffer: function() {
            return this._sourceFb
        },
        resize: function(e, t) {
            this._sourceTex.width === e && this._sourceTex.height === t || (this._prevFrameTex.width = e, this._prevFrameTex.height = t, this._outputTex.width = e, this._outputTex.height = t, this._sourceTex.width = e, this._sourceTex.height = t, this._prevFrameTex.dirty(), this._outputTex.dirty(), this._sourceTex.dirty())
        },
        isFinished: function() {
            return this._frame >= this._haltonSequence.length
        },
        render: function(e) {
            var t = this._blendPass;
            0 === this._frame ? (t.setUniform("weight1", 0), t.setUniform("weight2", 1)) : (t.setUniform("weight1", .9), t.setUniform("weight2", .1)), t.setUniform("texture1", this._prevFrameTex), t.setUniform("texture2", this._sourceTex), this._blendFb.attach(this._outputTex), this._blendFb.bind(e), t.render(e), this._blendFb.unbind(e), this._outputPass.setUniform("texture", this._outputTex), this._outputPass.render(e);
            var n = this._prevFrameTex;
            this._prevFrameTex = this._outputTex, this._outputTex = n, this._frame++
        },
        dispose: function(e) {
            this._sourceFb.dispose(e), this._blendFb.dispose(e), this._prevFrameTex.dispose(e), this._outputTex.dispose(e), this._sourceTex.dispose(e), this._outputPass.dispose(e), this._blendPass.dispose(e)
        }
    }, t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        this.setScene(e)
    }
    var i = n(26),
        r = n(35),
        o = n(34),
        s = n(4),
        c = n(135),
        l = n(136);
    a.prototype = {
        constructor: a,
        setScene: function(e) {
            this._scene = e, this._skybox && this._skybox.attachScene(this._scene)
        },
        initLight: function(e) {
            this._lightRoot = e, this.mainLight = new c.a({
                shadowBias: .005
            }), this.secondaryLight = new c.a({
                shadowBias: .005
            }), this.tertiaryLight = new c.a({
                shadowBias: .005
            }), this.ambientLight = new l.a
        },
        dispose: function(e) {
            this._lightRoot && (this._lightRoot.remove(this.mainLight), this._lightRoot.remove(this.secondaryLight), this._lightRoot.remove(this.tertiaryLight), this._lightRoot.remove(this.ambientLight)), this._currentCubemapLights && (this._lightRoot.remove(this._currentCubemapLights.diffuse), this._currentCubemapLights.specular && (this._lightRoot.remove(this._currentCubemapLights.specular), this._currentCubemapLights.specular.cubemap.dispose(e)))
        },
        updateMainLight: function(e, t) {
            this._updateDirectionalLight(this.mainLight, e, t)
        },
        updateSecondaryLight: function(e, t) {
            this._updateDirectionalLight(this.secondaryLight, e, t)
        },
        updateTertiaryLight: function(e, t) {
            this._updateDirectionalLight(this.tertiaryLight, e, t)
        },
        _updateDirectionalLight: function(e, t, n) {
            t = t || {}, null != t.intensity && (e.intensity = t.intensity, this._lightRoot[t.intensity ? "add" : "remove"](e)), null != t.color && (e.color = i.a.parseColor(t.color).slice(0, 3));
            var a = i.a.firstNotNull(t.alpha, 45),
                r = i.a.firstNotNull(t.beta, 45);
            e.position.setArray(i.a.directionFromAlphaBeta(a, r)), e.lookAt(s.a.ZERO);
            var o = {
                low: 512,
                medium: 1024,
                high: 2048,
                ultra: 4096
            } [t.quality] || 1024;
            e.castShadow = i.a.firstNotNull(t.shadow, !0), e.shadowResolution = o
        },
        updateAmbientLight: function(e, t) {
            e = e || {}, null != e.intensity && (this.ambientLight.intensity = e.intensity, this._lightRoot[e.intensity ? "add" : "remove"](this.ambientLight)), null != e.color && (this.ambientLight.color = i.a.parseColor(e.color).slice(0, 3))
        },
        updateAmbientCubemapLight: function(e, t) {
            e = e || {};
            var n = t.getRenderer(),
                a = e.texture,
                o = this;
            if ("texture" in e && (!this._currentCubemapLights || a !== this._currentCubemapLights.textureUrl))
                if (this._currentCubemapLights && (this._lightRoot.remove(this._currentCubemapLights.diffuse), this._currentCubemapLights.specular && (this._lightRoot.remove(this._currentCubemapLights.specular), this._currentCubemapLights.specular.cubemap.dispose(n.gl))), a) {
                    var s = i.a.createAmbientCubemap(e, t, function() {
                        s.specular && o._skybox instanceof r.a && o._skybox.setEnvironmentMap(s.specular.cubemap), t.refresh()
                    });
                    s.diffuse && this._lightRoot.add(s.diffuse), s.specular && this._lightRoot.add(s.specular), this._currentCubemapLights = s, this._currentCubemapLights.textureUrl = a
                } else this._currentCubemapLights && (this._lightRoot.remove(this._currentCubemapLights.diffuse), this._lightRoot.remove(this._currentCubemapLights.specular), this._currentCubemapLights = null);
            this._currentCubemapLights && (null != e.specularIntensity && this._currentCubemapLights.specular && (this._currentCubemapLights.specular.intensity = e.specularIntensity), null != e.diffuseIntensity && this._currentCubemapLights.diffuse && (this._currentCubemapLights.diffuse.intensity = e.diffuseIntensity))
        },
        updateSkybox: function(e, t, n) {
            var a = n.getRenderer(),
                s = this;
            if (e && "none" !== e)
                if ("auto" === e)
                    if (this._currentCubemapLights) {
                        var c = function() {
                            return s._skybox instanceof r.a || (s._skybox && s._skybox.dispose(a), s._skybox = new r.a), s._skybox
                        }();
                        if (this._currentCubemapLights.specular) {
                            var l = this._currentCubemapLights.specular.cubemap;
                            c.setEnvironmentMap(l)
                        }
                        this._scene && c.attachScene(this._scene), c.material.set("lod", 2)
                    } else this._skybox && this._skybox.detachScene();
            else {
                var u = function() {
                        return s._skybox instanceof o.a || (s._skybox && s._skybox.dispose(a), s._skybox = new o.a), s._skybox
                    }(),
                    p = i.a.loadTexture(e, n, {
                        flipY: !1
                    }, function() {
                        n.refresh()
                    });
                u.setEnvironmentMap(p), u.attachScene(this._scene)
            } else this._skybox && this._skybox.detachScene(this._scene), this._skybox = null;
            if (this._skybox)
                if ("auto" === e || e.match && e.match(/.hdr$/)) this._skybox.material.undefine("fragment", "SRGB_DECODE");
                else {
                    var d = t ? "define" : "undefine";
                    this._skybox.material[d]("fragment", "SRGB_DECODE")
                }
        }
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        i = n(4),
        r = a.a.extend({
            shadowBias: .001,
            shadowSlopeScale: 2,
            shadowCascade: 1,
            cascadeSplitLogFactor: .2
        }, {
            type: "DIRECTIONAL_LIGHT",
            uniformTemplates: {
                directionalLightDirection: {
                    type: "3f",
                    value: function(e) {
                        return e.__dir = e.__dir || new i.a, e.__dir.copy(e.worldTransform.z).normalize().negate().array
                    }
                },
                directionalLightColor: {
                    type: "3f",
                    value: function(e) {
                        var t = e.color,
                            n = e.intensity;
                        return [t[0] * n, t[1] * n, t[2] * n]
                    }
                }
            },
            clone: function() {
                var e = a.a.prototype.clone.call(this);
                return e.shadowBias = this.shadowBias, e.shadowSlopeScale = this.shadowSlopeScale, e
            }
        });
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        i = a.a.extend({
            castShadow: !1
        }, {
            type: "AMBIENT_LIGHT",
            uniformTemplates: {
                ambientLightColor: {
                    type: "3f",
                    value: function(e) {
                        var t = e.color,
                            n = e.intensity;
                        return [t[0] * n, t[1] * n, t[2] * n]
                    }
                }
            }
        });
    t.a = i
}, function(e, t, n) {
    "use strict";
    t.a = {
        devicePixelRatio: null,
        preZ: !1,
        picking: !1,
        shadow: !0,
        environment: "",
        ground: {
            show: !1,
            grid: !1
        },
        mainLight: {
            shadow: !0,
            shadowQuality: "medium",
            intensity: .8,
            color: "#fff",
            alpha: 45,
            beta: 45
        },
        secondaryLight: {
            shadow: !0,
            shadowQuality: "medium",
            intensity: 0,
            color: "#fff",
            alpha: 60,
            beta: -50
        },
        tertiaryLight: {
            shadow: !0,
            shadowQuality: "medium",
            intensity: 0,
            color: "#fff",
            alpha: 89,
            beta: 0
        },
        ambientLight: {
            intensity: .3,
            color: "#fff"
        },
        ambientCubemapLight: {
            texture: "",
            exposure: 3,
            diffuseIntensity: .5,
            specularIntensity: .5
        },
        postEffect: {
            enable: !1,
            bloom: {
                enable: !1,
                intensity: .1
            },
            depthOfField: {
                enable: !1,
                focalDistance: 5,
                focalRange: 1,
                blurRadius: 5,
                fstop: 2.8,
                quality: "medium"
            },
            screenSpaceAmbientOcculusion: {
                enable: !1,
                physical: !1,
                radius: .5,
                quality: "medium",
                intensity: 1
            },
            screenSpaceReflection: {
                enable: !1,
                quality: "medium",
                maxRoughness: .8
            },
            colorCorrection: {
                enable: !0,
                exposure: 0,
                brightness: 0,
                contrast: 1,
                saturation: 1,
                lookupTexture: ""
            },
            FXAA: {
                enable: !1
            }
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (null == e || "object" != typeof e) return e;
        var t = e,
            n = m.call(e);
        if ("[object Array]" === n) {
            t = [];
            for (var i = 0, r = e.length; i < r; i++) t[i] = a(e[i])
        } else if (h[n]) {
            var o = e.constructor;
            if (e.constructor.from) t = o.from(e);
            else {
                t = new o(e.length);
                for (var i = 0, r = e.length; i < r; i++) t[i] = a(e[i])
            }
        } else if (!f[n] && !p(e) && !u(e)) {
            t = {};
            for (var s in e) e.hasOwnProperty(s) && (t[s] = a(e[s]))
        }
        return t
    }

    function i(e, t, n) {
        if (!c(t) || !c(e)) return n ? a(t) : e;
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                var o = e[r],
                    d = t[r];
                !c(d) || !c(o) || s(d) || s(o) || u(d) || u(o) || l(d) || l(o) || p(d) || p(o) ? !n && r in e || (e[r] = a(t[r], !0)) : i(o, d, n)
            } return e
    }

    function r(e, t, n) {
        if (e && t)
            if (e.forEach && e.forEach === g) e.forEach(t, n);
            else if (e.length === +e.length)
            for (var a = 0, i = e.length; a < i; a++) t.call(n, e[a], a, e);
        else
            for (var r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function o(e, t) {
        var n = x.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(x.call(arguments)))
        }
    }

    function s(e) {
        return "[object Array]" === m.call(e)
    }

    function c(e) {
        var t = typeof e;
        return "function" === t || !!e && "object" == t
    }

    function l(e) {
        return !!f[m.call(e)]
    }

    function u(e) {
        return "object" == typeof e && "number" == typeof e.nodeType && "object" == typeof e.ownerDocument
    }

    function p(e) {
        return e[_]
    }

    function d(e) {
        e && r(e, function(e, t) {
            this.set(t, e)
        }, this)
    }
    t.a = a, t.b = i;
    var f = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        },
        h = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        },
        m = Object.prototype.toString,
        v = Array.prototype,
        g = v.forEach,
        x = (v.filter, v.slice),
        _ = (v.map, v.reduce, "__ec_primitive__");
    d.prototype = {
        constructor: d,
        get: function(e) {
            return this["_ec_" + e]
        },
        set: function(e, t) {
            return this["_ec_" + e] = t, t
        },
        each: function(e, t) {
            void 0 !== t && (e = o(e, t));
            for (var n in this) this.hasOwnProperty(n) && e(this[n], n.slice(4))
        },
        removeKey: function(e) {
            delete this["_ec_" + e]
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        for (var n = [], a = [], i = [], r = [], o = [], s = [], l = e.geometry, u = e.skeleton.getSubSkinMatrices(e.__GUID__, e.joints), p = 0; p < e.joints.length; p++) {
            r[p] = r[p] || [];
            for (var d = 0; d < 16; d++) r[p][d] = u[16 * p + d]
        }
        for (var f = l.attributes.position, h = l.attributes.weight, m = l.attributes.joint, v = [1 / 0, 1 / 0, 1 / 0], g = [-1 / 0, -1 / 0, -1 / 0], p = 0; p < l.vertexCount; p++) {
            f.get(p, n), h.get(p, i), m.get(p, a), i[3] = 1 - i[0] - i[1] - i[2], c.set(o, 0, 0, 0);
            for (var d = 0; d < 4; d++) a[d] >= 0 && i[d] > 1e-6 && (c.transformMat4(s, n, r[a[d]]), c.scaleAndAdd(o, o, s, i[d]));
            c.min(v, v, o), c.max(g, g, o)
        }
        t.min.setArray(v), t.max.setArray(g)
    }

    function i(e, t) {
        t = t || new r.a;
        var n = new r.a;
        return e.traverse(function(e) {
            e.geometry && (e.isSkinnedMesh() ? (a(e, n), e.geometry.boundingBox.copy(n)) : (n.copy(e.geometry.boundingBox), n.applyTransform(e.worldTransform)), t.union(n))
        }), t
    }
    var r = n(8),
        o = n(0),
        s = n.n(o),
        c = s.a.vec3;
    t.a = i
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return Array.isArray(e) || (e = [e, e]), e
    }
    var i = n(1),
        r = n(21),
        o = n(4),
        s = n(141),
        c = i.a.extend(function() {
            return {
                timeline: null,
                domElement: null,
                target: null,
                _center: new o.a,
                minDistance: .1,
                maxDistance: 1e3,
                minAlpha: -90,
                maxAlpha: 90,
                minBeta: -1 / 0,
                maxBeta: 1 / 0,
                autoRotateAfterStill: 0,
                autoRotateDirection: "cw",
                autoRotateSpeed: 60,
                _mode: "rotate",
                damping: .8,
                rotateSensitivity: 1,
                zoomSensitivity: 1,
                panSensitivity: 1,
                _needsUpdate: !1,
                _rotating: !1,
                _phi: 0,
                _theta: 0,
                _mouseX: 0,
                _mouseY: 0,
                _rotateVelocity: new r.a,
                _panVelocity: new r.a,
                _distance: 20,
                _zoomSpeed: 0,
                _stillTimeout: 0,
                _animators: [],
                _gestureMgr: new s.a
            }
        }, function() {
            this._mouseDownHandler = this._mouseDownHandler.bind(this), this._mouseWheelHandler = this._mouseWheelHandler.bind(this), this._mouseMoveHandler = this._mouseMoveHandler.bind(this), this._mouseUpHandler = this._mouseUpHandler.bind(this), this._pinchHandler = this._pinchHandler.bind(this), this.update = this.update.bind(this), this.init()
        }, {
            init: function() {
                var e = this.domElement;
                e.addEventListener("touchstart", this._mouseDownHandler), e.addEventListener("mousedown", this._mouseDownHandler), e.addEventListener("mousewheel", this._mouseWheelHandler), this.timeline && this.timeline.on("frame", this.update)
            },
            dispose: function() {
                var e = this.domElement;
                e.removeEventListener("touchstart", this._mouseDownHandler), e.removeEventListener("touchmove", this._mouseMoveHandler), e.removeEventListener("touchend", this._mouseUpHandler), e.removeEventListener("mousedown", this._mouseDownHandler), e.removeEventListener("mousemove", this._mouseMoveHandler), e.removeEventListener("mouseup", this._mouseUpHandler), e.removeEventListener("mousewheel", this._mouseWheelHandler), e.removeEventListener("mouseout", this._mouseUpHandler), this.timeline && this.timeline.off("frame", this.update), this.stopAllAnimation()
            },
            getDistance: function() {
                return this._distance
            },
            setDistance: function(e) {
                this._distance = e, this._needsUpdate = !0
            },
            getAlpha: function() {
                return this._theta / Math.PI * 180
            },
            getBeta: function() {
                return -this._phi / Math.PI * 180
            },
            getCenter: function() {
                return this._center.toArray()
            },
            setAlpha: function(e) {
                e = Math.max(Math.min(this.maxAlpha, e), this.minAlpha), this._theta = e / 180 * Math.PI, this._needsUpdate = !0
            },
            setBeta: function(e) {
                e = Math.max(Math.min(this.maxBeta, e), this.minBeta), this._phi = -e / 180 * Math.PI, this._needsUpdate = !0
            },
            setCenter: function(e) {
                this._center.setArray(e)
            },
            setOption: function(e) {
                e = e || {}, ["autoRotate", "autoRotateAfterStill", "autoRotateDirection", "autoRotateSpeed", "damping", "minDistance", "maxDistance", "minAlpha", "maxAlpha", "minBeta", "maxBeta", "rotateSensitivity", "zoomSensitivity", "panSensitivity"].forEach(function(t) {
                    null != e[t] && (this[t] = e[t])
                }, this), null != e.distance && this.setDistance(e.distance), null != e.alpha && this.setAlpha(e.alpha), null != e.beta && this.setBeta(e.beta), e.center && this.setCenter(e.center)
            },
            animateTo: function(e) {
                var t = this,
                    n = {},
                    a = {},
                    i = this.timeline;
                if (i) return null != e.distance && (n.distance = this.getDistance(), a.distance = e.distance), null != e.alpha && (n.alpha = this.getAlpha(), a.alpha = e.alpha), null != e.beta && (n.beta = this.getBeta(), a.beta = e.beta), null != e.center && (n.center = this.getCenter(), a.center = e.center), this._addAnimator(i.animate(n).when(e.duration || 1e3, a).during(function() {
                    null != n.alpha && t.setAlpha(n.alpha), null != n.beta && t.setBeta(n.beta), null != n.distance && t.setDistance(n.distance), null != n.center && t.setCenter(n.center), t._needsUpdate = !0
                }).done(e.done)).start(e.easing || "linear")
            },
            stopAllAnimation: function() {
                for (var e = 0; e < this._animators.length; e++) this._animators[e].stop();
                this._animators.length = 0
            },
            _isAnimating: function() {
                return this._animators.length > 0
            },
            update: function(e) {
                if (e = e || 16, this._rotating) {
                    var t = ("cw" === this.autoRotateDirection ? 1 : -1) * this.autoRotateSpeed / 180 * Math.PI;
                    this._phi -= t * e / 1e3, this._needsUpdate = !0
                } else this._rotateVelocity.len() > 0 && (this._needsUpdate = !0);
                (Math.abs(this._zoomSpeed) > .01 || this._panVelocity.len() > 0) && (this._needsUpdate = !0), this._needsUpdate && (this._updateDistance(Math.min(e, 50)), this._updatePan(Math.min(e, 50)), this._updateRotate(Math.min(e, 50)), this._updateTransform(), this.target.update(), this.trigger("update"), this._needsUpdate = !1)
            },
            _updateRotate: function(e) {
                var t = this._rotateVelocity;
                this._phi = t.y * e / 20 + this._phi, this._theta = t.x * e / 20 + this._theta, this.setAlpha(this.getAlpha()), this.setBeta(this.getBeta()), this._vectorDamping(t, this.damping), t.x = t.y = 0
            },
            _updateDistance: function(e) {
                this._setDistance(this._distance + this._zoomSpeed * e / 20), this._zoomSpeed *= this.damping
            },
            _setDistance: function(e) {
                this._distance = Math.max(Math.min(e, this.maxDistance), this.minDistance)
            },
            _updatePan: function(e) {
                var t = this._panVelocity,
                    n = this._distance,
                    a = this.target,
                    i = a.worldTransform.y,
                    r = a.worldTransform.x;
                this._center.scaleAndAdd(r, -t.x * n / 200).scaleAndAdd(i, -t.y * n / 200), this._vectorDamping(t, 0), t.x = t.y = 0
            },
            _updateTransform: function() {
                var e = this.target,
                    t = new o.a,
                    n = this._theta + Math.PI / 2,
                    a = this._phi + Math.PI / 2,
                    i = Math.sin(n);
                t.x = i * Math.cos(a), t.y = -Math.cos(n), t.z = i * Math.sin(a), e.position.copy(this._center).scaleAndAdd(t, this._distance), e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)
            },
            _startCountingStill: function() {
                clearTimeout(this._stillTimeout);
                var e = this.autoRotateAfterStill,
                    t = this;
                !isNaN(e) && e > 0 && (this._stillTimeout = setTimeout(function() {
                    t._rotating = !0
                }, 1e3 * e))
            },
            _vectorDamping: function(e, t) {
                var n = e.len();
                n *= t, n < 1e-4 && (n = 0), e.normalize().scale(n)
            },
            decomposeTransform: function() {
                if (this.target) {
                    this.target.updateWorldTransform();
                    var e = this.target.worldTransform.z,
                        t = Math.asin(e.y),
                        n = Math.atan2(e.x, e.z);
                    this._theta = t, this._phi = -n, this.setBeta(this.getBeta()), this.setAlpha(this.getAlpha()), this._setDistance(this.target.position.dist(this._center))
                }
            },
            _mouseDownHandler: function(e) {
                if (!this._isAnimating()) {
                    var t = e.clientX,
                        n = e.clientY;
                    if (e.targetTouches) {
                        var a = e.targetTouches[0];
                        t = a.clientX, n = a.clientY, this._mode = "rotate", this._processGesture(e, "start")
                    }
                    var i = this.domElement;
                    i.addEventListener("touchmove", this._mouseMoveHandler), i.addEventListener("touchend", this._mouseUpHandler), i.addEventListener("mousemove", this._mouseMoveHandler), i.addEventListener("mouseup", this._mouseUpHandler), i.addEventListener("mouseout", this._mouseUpHandler), 0 === e.button ? this._mode = "rotate" : 1 === e.button ? this._mode = "pan" : this._mode = null, this._rotateVelocity.set(0, 0), this._rotating = !1, this.autoRotate && this._startCountingStill(), this._mouseX = t, this._mouseY = n
                }
            },
            _mouseMoveHandler: function(e) {
                if (!this._isAnimating()) {
                    var t, n = e.clientX,
                        i = e.clientY;
                    if (e.targetTouches) {
                        var r = e.targetTouches[0];
                        n = r.clientX, i = r.clientY, t = this._processGesture(e, "change")
                    }
                    var o = a(this.panSensitivity),
                        s = a(this.rotateSensitivity);
                    t || ("rotate" === this._mode ? (this._rotateVelocity.y += (n - this._mouseX) / this.domElement.clientWidth * 2 * s[0], this._rotateVelocity.x += (i - this._mouseY) / this.domElement.clientHeight * 2 * s[1]) : "pan" === this._mode && (this._panVelocity.x += (n - this._mouseX) / this.domElement.clientWidth * o[0] * 400, this._panVelocity.y += (-i + this._mouseY) / this.domElement.clientHeight * o[1] * 400)), this._mouseX = n, this._mouseY = i, e.preventDefault()
                }
            },
            _mouseWheelHandler: function(e) {
                if (!this._isAnimating()) {
                    var t = e.wheelDelta || -e.detail;
                    0 !== t && this._zoomHandler(e, t > 0 ? -1 : 1)
                }
            },
            _pinchHandler: function(e) {
                this._isAnimating() || this._zoomHandler(e, e.pinchScale > 1 ? -.4 : .4)
            },
            _zoomHandler: function(e, t) {
                var n = Math.max(Math.min(this._distance - this.minDistance, this.maxDistance - this._distance));
                this._zoomSpeed = t * Math.max(n / 40 * this.zoomSensitivity, .2), this._rotating = !1, this.autoRotate && "rotate" === this._mode && this._startCountingStill(), e.preventDefault()
            },
            _mouseUpHandler: function(e) {
                var t = this.domElement;
                t.removeEventListener("touchmove", this._mouseMoveHandler), t.removeEventListener("touchend", this._mouseUpHandler), t.removeEventListener("mousemove", this._mouseMoveHandler), t.removeEventListener("mouseup", this._mouseUpHandler), t.removeEventListener("mouseout", this._mouseUpHandler), this._processGesture(e, "end")
            },
            _addAnimator: function(e) {
                var t = this._animators;
                return t.push(e), e.done(function() {
                    var n = t.indexOf(e);
                    n >= 0 && t.splice(n, 1)
                }), e
            },
            _processGesture: function(e, t) {
                var n = this._gestureMgr;
                "start" === t && n.clear();
                var a = n.recognize(e, null, this.domElement);
                if ("end" === t && n.clear(), a) {
                    var i = a.type;
                    e.gestureEvent = i, this._pinchHandler(a.event)
                }
                return a
            }
        });
    Object.defineProperty(c.prototype, "autoRotate", {
        get: function() {
            return this._autoRotate
        },
        set: function(e) {
            this._autoRotate = e, this._rotating = e
        }
    }), Object.defineProperty(c.prototype, "target", {
        get: function() {
            return this._target
        },
        set: function(e) {
            e && e.target && this.setCenter(e.target.toArray()), this._target = e, this.decomposeTransform()
        }
    }), t.a = c
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e[1][0] - e[0][0],
            n = e[1][1] - e[0][1];
        return Math.sqrt(t * t + n * n)
    }

    function i(e) {
        return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
    }
    var r = function() {
        this._track = []
    };
    r.prototype = {
        constructor: r,
        recognize: function(e, t, n) {
            return this._doTrack(e, t, n), this._recognize(e)
        },
        clear: function() {
            return this._track.length = 0, this
        },
        _doTrack: function(e, t, n) {
            var a = e.targetTouches;
            if (a) {
                for (var i = {
                        points: [],
                        touches: [],
                        target: t,
                        event: e
                    }, r = 0, o = a.length; r < o; r++) {
                    var s = a[r];
                    i.points.push([s.clientX, s.clientY]), i.touches.push(s)
                }
                this._track.push(i)
            }
        },
        _recognize: function(e) {
            for (var t in o)
                if (o.hasOwnProperty(t)) {
                    var n = o[t](this._track, e);
                    if (n) return n
                }
        }
    };
    var o = {
        pinch: function(e, t) {
            var n = e.length;
            if (n) {
                var r = (e[n - 1] || {}).points,
                    o = (e[n - 2] || {}).points || r;
                if (o && o.length > 1 && r && r.length > 1) {
                    var s = a(r) / a(o);
                    !isFinite(s) && (s = 1), t.pinchScale = s;
                    var c = i(r);
                    return t.pinchX = c[0], t.pinchY = c[1], {
                        type: "pinch",
                        target: e[0].target,
                        event: t
                    }
                }
            }
        }
    };
    t.a = r
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        i = n(143),
        r = n(8),
        o = a.a.extend(function() {
            return {
                dom: null,
                renderer: null,
                camera: null,
                _boundingBox: new r.a,
                _hotspotRoot: null,
                _hotspots: []
            }
        }, function() {
            if (!this.dom || !this.renderer || !this.camera) throw new Error("Tip manager needs `root`,  `camera`, `renderer`");
            var e = this._hotspotRoot = document.createElement("div");
            e.style.cssText = "position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;", this.dom.appendChild(e)
        }, {
            setBoundingBox: function(e, t) {
                this._boundingBox.min.setArray(e), this._boundingBox.max.setArray(t)
            },
            add: function(e, t) {
                if ("string" == typeof t) {
                    var n = document.createElement("div");
                    n.innerHTML = t, t = n
                }
                return t.classList.add("qmv-annotation"), t.style.position = "absolute", this._hotspotRoot.appendChild(t), this._hotspots.push({
                    position: e,
                    dom: t
                }), t
            },
            remove: function(e) {
                for (var t = -1, n = 0; n < this._hotspots.length; n++)
                    if (this._hotspots[n].dom === e) {
                        t = n;
                        break
                    } t >= 0 && (this._hotspots.splice(t, 1), this._hotspotRoot.removeChild(e))
            },
            update: function() {
                var e = new i.a,
                    t = new r.a;
                this._hotspots.forEach(function(n) {
                    var a = n.position;
                    e.set(a[0], a[1], a[2], 1), e.transformMat4(this.camera.viewMatrix);
                    var i = e.z;
                    e.transformMat4(this.camera.projectionMatrix), e.scale(1 / e.w);
                    var r = .5 * (e.x + 1) * this.renderer.getWidth(),
                        o = .5 * (e.y + 1) * this.renderer.getHeight();
                    n.dom.style.left = r + "px", n.dom.style.top = this.renderer.getHeight() - o + "px";
                    var s = null == n.farAlpha ? .1 : n.farAlpha,
                        c = null == n.nearAlpha ? 1 : n.nearAlpha;
                    t.copy(this._boundingBox), t.applyTransform(this.camera.viewMatrix);
                    var l = (i - t.max.z) / (t.min.z - t.max.z);
                    Math.max(Math.min(l, 1), 0);
                    n.dom.style.opacity = 1, n.onupdate && n.onupdate(r, o)
                }, this)
            }
        });
    t.a = o
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = n.n(a),
        r = i.a.vec4,
        o = function(e, t, n, a) {
            e = e || 0, t = t || 0, n = n || 0, a = a || 0, this.array = r.fromValues(e, t, n, a), this._dirty = !0
        };
    o.prototype = {
        constructor: o,
        add: function(e) {
            return r.add(this.array, this.array, e.array), this._dirty = !0, this
        },
        set: function(e, t, n, a) {
            return this.array[0] = e, this.array[1] = t, this.array[2] = n, this.array[3] = a, this._dirty = !0, this
        },
        setArray: function(e) {
            return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this.array[3] = e[3], this._dirty = !0, this
        },
        clone: function() {
            return new o(this.x, this.y, this.z, this.w)
        },
        copy: function(e) {
            return r.copy(this.array, e.array), this._dirty = !0, this
        },
        dist: function(e) {
            return r.dist(this.array, e.array)
        },
        distance: function(e) {
            return r.distance(this.array, e.array)
        },
        div: function(e) {
            return r.div(this.array, this.array, e.array), this._dirty = !0, this
        },
        divide: function(e) {
            return r.divide(this.array, this.array, e.array), this._dirty = !0, this
        },
        dot: function(e) {
            return r.dot(this.array, e.array)
        },
        len: function() {
            return r.len(this.array)
        },
        length: function() {
            return r.length(this.array)
        },
        lerp: function(e, t, n) {
            return r.lerp(this.array, e.array, t.array, n), this._dirty = !0, this
        },
        min: function(e) {
            return r.min(this.array, this.array, e.array), this._dirty = !0, this
        },
        max: function(e) {
            return r.max(this.array, this.array, e.array), this._dirty = !0, this
        },
        mul: function(e) {
            return r.mul(this.array, this.array, e.array), this._dirty = !0, this
        },
        multiply: function(e) {
            return r.multiply(this.array, this.array, e.array), this._dirty = !0, this
        },
        negate: function() {
            return r.negate(this.array, this.array), this._dirty = !0, this
        },
        normalize: function() {
            return r.normalize(this.array, this.array), this._dirty = !0, this
        },
        random: function(e) {
            return r.random(this.array, e), this._dirty = !0, this
        },
        scale: function(e) {
            return r.scale(this.array, this.array, e), this._dirty = !0, this
        },
        scaleAndAdd: function(e, t) {
            return r.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
        },
        sqrDist: function(e) {
            return r.sqrDist(this.array, e.array)
        },
        squaredDistance: function(e) {
            return r.squaredDistance(this.array, e.array)
        },
        sqrLen: function() {
            return r.sqrLen(this.array)
        },
        squaredLength: function() {
            return r.squaredLength(this.array)
        },
        sub: function(e) {
            return r.sub(this.array, this.array, e.array), this._dirty = !0, this
        },
        subtract: function(e) {
            return r.subtract(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat4: function(e) {
            return r.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformQuat: function(e) {
            return r.transformQuat(this.array, this.array, e.array), this._dirty = !0, this
        },
        toString: function() {
            return "[" + Array.prototype.join.call(this.array, ",") + "]"
        },
        toArray: function() {
            return Array.prototype.slice.call(this.array)
        }
    };
    var s = Object.defineProperty;
    if (s) {
        var c = o.prototype;
        s(c, "x", {
            get: function() {
                return this.array[0]
            },
            set: function(e) {
                this.array[0] = e, this._dirty = !0
            }
        }), s(c, "y", {
            get: function() {
                return this.array[1]
            },
            set: function(e) {
                this.array[1] = e, this._dirty = !0
            }
        }), s(c, "z", {
            get: function() {
                return this.array[2]
            },
            set: function(e) {
                this.array[2] = e, this._dirty = !0
            }
        }), s(c, "w", {
            get: function() {
                return this.array[3]
            },
            set: function(e) {
                this.array[3] = e, this._dirty = !0
            }
        })
    }
    o.add = function(e, t, n) {
        return r.add(e.array, t.array, n.array), e._dirty = !0, e
    }, o.set = function(e, t, n, a, i) {
        r.set(e.array, t, n, a, i), e._dirty = !0
    }, o.copy = function(e, t) {
        return r.copy(e.array, t.array), e._dirty = !0, e
    }, o.dist = function(e, t) {
        return r.distance(e.array, t.array)
    }, o.distance = o.dist, o.div = function(e, t, n) {
        return r.divide(e.array, t.array, n.array), e._dirty = !0, e
    }, o.divide = o.div, o.dot = function(e, t) {
        return r.dot(e.array, t.array)
    }, o.len = function(e) {
        return r.length(e.array)
    }, o.lerp = function(e, t, n, a) {
        return r.lerp(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.min = function(e, t, n) {
        return r.min(e.array, t.array, n.array), e._dirty = !0, e
    }, o.max = function(e, t, n) {
        return r.max(e.array, t.array, n.array), e._dirty = !0, e
    }, o.mul = function(e, t, n) {
        return r.multiply(e.array, t.array, n.array), e._dirty = !0, e
    }, o.multiply = o.mul, o.negate = function(e, t) {
        return r.negate(e.array, t.array), e._dirty = !0, e
    }, o.normalize = function(e, t) {
        return r.normalize(e.array, t.array), e._dirty = !0, e
    }, o.random = function(e, t) {
        return r.random(e.array, t), e._dirty = !0, e
    }, o.scale = function(e, t, n) {
        return r.scale(e.array, t.array, n), e._dirty = !0, e
    }, o.scaleAndAdd = function(e, t, n, a) {
        return r.scaleAndAdd(e.array, t.array, n.array, a), e._dirty = !0, e
    }, o.sqrDist = function(e, t) {
        return r.sqrDist(e.array, t.array)
    }, o.squaredDistance = o.sqrDist, o.sqrLen = function(e) {
        return r.sqrLen(e.array)
    }, o.squaredLength = o.sqrLen, o.sub = function(e, t, n) {
        return r.subtract(e.array, t.array, n.array), e._dirty = !0, e
    }, o.subtract = o.sub, o.transformMat4 = function(e, t, n) {
        return r.transformMat4(e.array, t.array, n.array), e._dirty = !0, e
    }, o.transformQuat = function(e, t, n) {
        return r.transformQuat(e.array, t.array, n.array), e._dirty = !0, e
    }, t.a = o
}, function(e, t, n) {
    "use strict";
    t.a = "@export qmv.ground.vertex\n@import clay.lambert.vertex\n@end\n\n\n@export qmv.ground.fragment\n\nvarying vec2 v_Texcoord;\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\nuniform float gridSize: 5;\nuniform float gridSize2: 1;\nuniform vec4 gridColor: [0, 0, 0, 1];\nuniform vec4 gridColor2: [0.3, 0.3, 0.3, 1];\n\nuniform bool showGrid: true;\n\nuniform float glossiness: 0.7;\n\n#ifdef SSAOMAP_ENABLED\nuniform sampler2D ssaoMap;\nuniform vec4 viewport : VIEWPORT;\n#endif\n\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n\n@import clay.plugin.compute_shadow_map\n\nvoid main()\n{\n gl_FragColor = color;\n\n if (showGrid) {\n float wx = v_WorldPosition.x;\n float wz = v_WorldPosition.z;\n float x0 = abs(fract(wx / gridSize - 0.5) - 0.5) / fwidth(wx) * gridSize / 2.0;\n float z0 = abs(fract(wz / gridSize - 0.5) - 0.5) / fwidth(wz) * gridSize / 2.0;\n\n float x1 = abs(fract(wx / gridSize2 - 0.5) - 0.5) / fwidth(wx) * gridSize2;\n float z1 = abs(fract(wz / gridSize2 - 0.5) - 0.5) / fwidth(wz) * gridSize2;\n\n float v0 = 1.0 - clamp(min(x0, z0), 0.0, 1.0);\n float v1 = 1.0 - clamp(min(x1, z1), 0.0, 1.0);\n if (v0 > 0.1) {\n gl_FragColor = mix(gl_FragColor, gridColor, v0);\n }\n else {\n gl_FragColor = mix(gl_FragColor, gridColor2, v1);\n }\n }\n\n vec3 diffuseColor = vec3(0.0, 0.0, 0.0);\n\n#ifdef AMBIENT_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)\n {\n diffuseColor += ambientLightColor[_idx_];\n }\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n diffuseColor += calcAmbientSHLight(_idx_, v_Normal) * ambientSHLightColor[_idx_];\n }}\n#endif\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)\n {\n vec3 lightDirection = -directionalLightDirection[i];\n vec3 lightColor = directionalLightColor[i];\n\n float ndl = dot(v_Normal, normalize(lightDirection));\n\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if( shadowEnabled )\n {\n shadowContrib = shadowContribsDir[i];\n }\n#endif\n\n diffuseColor += lightColor * clamp(ndl, 0.0, 1.0) * shadowContrib;\n }\n#endif\n\n#ifdef SSAOMAP_ENABLED\n diffuseColor *= texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;\n#endif\n\n gl_FragColor.rgb *= diffuseColor;\n\n gl_FragColor.a *= 1.0 - clamp(length(v_WorldPosition.xz) / 30.0, 0.0, 1.0);\n\n}\n\n@end"
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    t.a = function() {
        return {
            preZ: !0,
            materials: [],
            takes: [],
            textureFlipY: !1,
            zUpToYUp: !1,
            shadow: !0,
            environment: "auto",
            viewControl: {
                alpha: 20,
                beta: 160,
                distance: 30
            },
            ground: {
                show: 0,
                grid: !1
            },
            mainLight: {
                shadow: !0,
                shadowQuality: "medium",
                intensity: .8,
                color: "#fff",
                alpha: 45,
                beta: 45,
                $padAngle: [.25, .5]
            },
            secondaryLight: {
                shadow: !0,
                shadowQuality: "medium",
                intensity: 0,
                color: "#fff",
                alpha: 60,
                beta: -50,
                $padAngle: [-50 / 180, 60 / 90]
            },
            tertiaryLight: {
                shadow: !0,
                shadowQuality: "medium",
                intensity: 0,
                color: "#fff",
                alpha: 89,
                beta: 0,
                $padAngle: [0, 89 / 90]
            },
            ambientLight: {
                intensity: 0,
                color: "#fff"
            },
            ambientCubemapLight: {
                texture: a.a.ENV_TEXTURE_ROOT + "Old_Industrial_Hall.hdr",
                $texture: "Old_Industrial_Hall",
                $textureOptions: ["pisa", "Barce_Rooftop_C", "Factory_Catwalk", "Grand_Canyon_C", "Ice_Lake", "Hall", "Old_Industrial_Hall"],
                exposure: 3,
                diffuseIntensity: .3,
                specularIntensity: .5
            },
            postEffect: {
                enable: !0,
                bloom: {
                    enable: !0,
                    intensity: .1
                },
                depthOfField: {
                    enable: !1,
                    focalDistance: 4,
                    focalRange: 1,
                    blurRadius: 5,
                    fstop: 10,
                    quality: "medium",
                    $qualityOptions: ["low", "medium", "high", "ultra"]
                },
                screenSpaceAmbientOcclusion: {
                    enable: 1,
                    radius: 1.5,
                    quality: "medium",
                    intensity: 1,
                    $qualityOptions: ["low", "medium", "high", "ultra"]
                },
                screenSpaceReflection: {
                    enable: !1,
                    physical: !1,
                    quality: "medium",
                    maxRoughness: .8,
                    $qualityOptions: ["low", "medium", "high", "ultra"]
                },
                colorCorrection: {
                    enable: !0,
                    exposure: 0,
                    brightness: 0,
                    contrast: 1,
                    saturation: 1,
                    lookupTexture: ""
                },
                FXAA: {
                    enable: !1
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return {
            name: "",
            type: "pbrMetallicRoughness",
            color: "#fff",
            transparent: !1,
            alpha: 1,
            alphaCutoff: 0,
            diffuseMap: "",
            normalMap: "",
            parallaxOcclusionScale: .01,
            parallaxOcclusionMap: "",
            emission: "#fff",
            emissionIntensity: 0,
            emissiveMap: "",
            uvRepeat: [1, 1],
            metalness: 0,
            roughness: .5,
            metalnessMap: "",
            roughnessMap: "",
            glossiness: .5,
            specularColor: "#111",
            glossinessMap: "",
            specularMap: "",
            $alphaRange: [0, 1],
            $alphaCutoffRange: [0, 1],
            $metalnessRange: [0, 1],
            $roughnessRange: [0, 1],
            $glossinessRange: [0, 1],
            $parallaxOcclusionScaleRange: [0, .1],
            $textureTiling: 1
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.lastIndexOf(".");
        return t >= 0 ? e.substr(t + 1).toLowerCase() : ""
    }

    function i(e, t) {
        var n = e.split("/");
        return t = t || "", 0 === e.indexOf("/") && n.shift(), n = n.filter(function(e) {
            return !!e
        }), new Promise(function(e, a) {
            if (!x) return void a(w);
            var r = n.shift(),
                o = t + "/" + r;
            x.mkdir(o, function(t) {
                t && "EEXIST" !== t.code ? a(t.toString()) : n.length ? i(n.join("/"), o).then(e).catch(a) : e()
            })
        })
    }

    function r(e) {
        return new Promise(function(t, n) {
            if (!x) return void n(w);
            s(e).then(function(t) {
                return Promise.all(t.map(function(t) {
                    return new Promise(function(n, a) {
                        var i = e + "/" + t;
                        x.lstat(i, function(e, t) {
                            e ? a(e.toString()) : t.isDirectory() ? r(i).then(n, a) : x.unlink(i, function(e) {
                                e ? a(e.toString()) : n()
                            })
                        })
                    })
                }))
            }, n).then(function() {
                x.rmdir(e, function(e) {
                    e ? n(e.toString()) : t()
                })
            }, n)
        })
    }

    function o(e, t) {
        return new Promise(function(n, a) {
            x || a(w), FileAPI.readAsArrayBuffer(t, function(i) {
                "load" === i.type && x.writeFile(e, E.from(i.result), function(e) {
                    e && "EEXIST" !== e.code ? a(e) : (console.log("Writed file " + t.name + " " + i.result.byteLength), n())
                })
            })
        })
    }

    function s(e) {
        return new Promise(function(t, n) {
            x.readdir(e, function(e, a) {
                e ? n(e) : t(a)
            })
        })
    }

    function c(e) {
        BrowserFS.install(window), BrowserFS.configure({
            fs: "IndexedDB",
            options: {}
        }, function(t) {
            if (t) throw t;
            x = BrowserFS.BFSRequire("fs"), i("/project").then(function() {
                Promise.all([d(), p()]).then(function(t) {
                    t[0] ? e && e(t[0].glTF, t[0].filesMap, t[1]) : e()
                }).catch(function(t) {
                    e()
                })
            }, function(t) {
                e()
            })
        })
    }

    function l(e) {
        function t() {
            return i("/project/model").then(function() {
                return Promise.all(e.map(function(e) {
                    return o("/project/model/" + e.name, e)
                }))
            })
        }
        return r("/project/model").then(function() {
            return t()
        }, function(e) {
            return t()
        })
    }

    function u(e) {
        return i("/project").then(function() {
            return o("/project/scene.json", new File([JSON.stringify(e)], "scene.json", {
                type: "application/json"
            }))
        })
    }

    function p() {
        return new Promise(function(e, t) {
            if (!x) return void t(w);
            x.readFile("/project/scene.json", "utf-8", function(t, n) {
                if (t) e(null);
                else {
                    var a = null;
                    try {
                        a = JSON.parse(n)
                    } catch (e) {
                        console.error(e)
                    }
                    e(a)
                }
            })
        })
    }

    function d() {
        return m().then(function(e) {
            return v(e)
        })
    }

    function f(e) {
        return i("/project/model").then(function() {
            return o("/project/model/" + e.name, e)
        })
    }

    function h() {
        return r("/project")
    }

    function m() {
        return s("/project/model").then(function(e) {
            return Promise.all(e.map(function(e) {
                return new Promise(function(t, n) {
                    x.readFile("/project/model/" + e, function(i, r) {
                        i ? n(i) : t(new File([r], e, {
                            type: b.a.lookup(a(e))
                        }))
                    })
                })
            }))
        })
    }

    function v(e) {
        return new Promise(function(t, n) {
            function a(n, a, o) {
                function s(t) {
                    var n = 0;
                    e.forEach(function(e) {
                        e !== i && (n++, l[e.name] = URL.createObjectURL(e))
                    }), t && t(l)
                }
                e = e.filter(function(e) {
                    return e.name.match(/.(gltf|bin|glb)$/) || e.type.match(/image/)
                });
                for (var c in A) URL.revokeObjectURL(A[c]);
                var l = {};
                A = l, a ? s(function(i) {
                    e.push(new File([a], n + ".gltf", {
                        type: "application/json"
                    }), new File([o], n + ".bin", {
                        type: "application/octet-stream"
                    })), t({
                        glTF: JSON.parse(a),
                        filesMap: i,
                        buffers: [o],
                        allFiles: e
                    })
                }) : r ? FileAPI.readAsArrayBuffer(r, function(n) {
                    "load" === n.type && s(function(a) {
                        t({
                            glTF: n.result,
                            filesMap: a,
                            allFiles: e
                        })
                    })
                }) : i && FileAPI.readAsText(i, "utf-8", function(n) {
                    if ("load" === n.type) {
                        var a;
                        try {
                            a = JSON.parse(n.result)
                        } catch (e) {
                            return void t(null)
                        }
                        s(function(n) {
                            t({
                                glTF: a,
                                filesMap: n,
                                allFiles: e
                            })
                        })
                    }
                })
            }
            var i = e.find(function(e) {
                    return e.name.endsWith(".gltf")
                }),
                r = e.find(function(e) {
                    return e.name.endsWith(".glb")
                });
            if (i || r) a();
            else {
                n("No glTF file found")
            }
        })
    }

    function g(e, t, n) {
        Promise.all([m(), p()]).then(function(a) {
            var i, r = a[0],
                o = a[1],
                s = new JSZip,
                c = {};
            if (r = (r || []).filter(function(e) {
                    if (!e.name.endsWith(".gltf")) return c[e.name] = e, !0;
                    i = e
                }), !i) return swal("No glTF file in project!"), void(n && n());
            Promise.all(o.materials.map(function(e, t) {
                if (e.metalnessMap || e.roughnessMap) {
                    var n = c[e.metalnessMap],
                        a = c[e.roughnessMap];
                    return new Promise(function(i) {
                        Object(_.b)(n, a, e.metalness, e.roughness).then(function(n) {
                            var a = e.name + "$" + t + "_metallicRoughness.png",
                                r = n.toDataURL();
                            r = r.slice("data:image/png;base64,".length), s.file(a, r, {
                                base64: !0
                            }), e.metalnessMap = e.roughnessMap = a, console.log("Merged %s, %s to %s", e.metalnessMap, e.roughnessMap, a), i()
                        })
                    })
                }
                if (e.specularMap || e.glossinessMap) {
                    var i = c[e.specularMap],
                        r = c[e.glossinessMap];
                    return new Promise(function(n) {
                        Object(_.c)(i, r, e.specularColor, e.glossiness).then(function(a) {
                            var i = e.name + "$" + t + "_specularGlossiness.png",
                                r = a.toDataURL();
                            r = r.slice("data:image/png;base64,".length), s.file(i, r, {
                                base64: !0
                            }), e.specularMap = e.glossinessMap = i, console.log("Merged %s, %s to %s", e.specularMap, e.glossinessMap, i), n()
                        })
                    })
                }
                return null
            }).filter(function(e) {
                return null != e
            })).then(function() {
                FileAPI.readAsText(i, "utf-8", function(a) {
                    if ("load" == a.type) {
                        var c = Object(_.d)(JSON.parse(a.result), o);
                        if (c.extensionsUsed = c.extensionsUsed || [], c.extensionsUsed.indexOf("KHR_materials_pbrSpecularGlossiness") < 0 && c.extensionsUsed.push("KHR_materials_pbrSpecularGlossiness"), ["extensionsUsed", "images", "textures", "samplers", "animations"].forEach(function(e) {
                                c[e] && !c[e].length && delete c[e]
                            }), c.textures || delete c.samplers, r = r.filter(function(e) {
                                return e.type.match(/image/) ? c.images && c.images.some(function(t) {
                                    return t.uri === e.name
                                }) : !!e.name.endsWith(".bin") || void 0
                            }), r.forEach(function(e) {
                                s.file(e.name, e)
                            }), "glb" === e) {
                            var l = [],
                                u = [];
                            s.forEach(function(e, t) {
                                (e.endsWith(".bin") ? l : u).push({
                                    reader: s.file(e).async("arraybuffer"),
                                    name: e
                                })
                            }), Promise.all([Promise.all(l.map(function(e) {
                                return e.reader
                            })), Promise.all(u.map(function(e) {
                                return e.reader
                            }))]).then(function(e) {
                                var n = Object(_.a)(c, e[0], e[1].reduce(function(e, t, n) {
                                    return e[u[n].name] = t, e
                                }, {}));
                                Object(T.a)(new Blob([n], {
                                    type: "model/json-binary"
                                }), "model.glb"), t && t()
                            }).catch(n)
                        } else s.file(i.name, JSON.stringify(c, null, 2)), s.generateAsync({
                            type: "blob"
                        }).then(function(e) {
                            Object(T.a)(e, "model.zip"), t && t()
                        }).catch(n)
                    }
                })
            })
        }).catch(function(e) {
            swal(e.toString()), n && n()
        })
    }
    n.d(t, "c", function() {
        return c
    }), n.d(t, "e", function() {
        return l
    }), n.d(t, "a", function() {
        return v
    }), n.d(t, "f", function() {
        return u
    }), n.d(t, "g", function() {
        return f
    }), n.d(t, "d", function() {
        return h
    }), n.d(t, "b", function() {
        return g
    });
    var x, _ = (n(36), n(148)),
        y = (n(149), n(150)),
        b = n.n(y),
        T = n(155),
        E = BrowserFS.BFSRequire("buffer").Buffer,
        w = "File system not prepared yet.",
        A = {}
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return new Promise(function(t, n) {
            Promise.all(e.map(function(e) {
                var t = e && URL.createObjectURL(e);
                return new Promise(function(e, n) {
                    if (t) {
                        var a = new Image;
                        a.src = t, a.onload = function() {
                            e(a)
                        }
                    } else e(null)
                })
            })).then(function(e) {
                var n = e.find(function(e) {
                    return null != e
                });
                n || t(null);
                var a = document.createElement("canvas"),
                    i = a.getContext("2d"),
                    r = a.width = n.width,
                    o = a.height = n.height,
                    s = e.map(function(e) {
                        return e ? (i.drawImage(e, 0, 0, r, o), i.getImageData(0, 0, r, o).data) : null
                    });
                t({
                    canvas: a,
                    imageDataList: s
                })
            })
        })
    }

    function i(e, t, n, i) {
        return new Promise(function(r, o) {
            a([e, t]).then(function(e) {
                for (var t = e.canvas, a = t.getContext("2d"), o = e.imageDataList[0], s = e.imageDataList[1], c = a.createImageData(t.width, t.height), l = 0; l < (o || s).length; l += 4) {
                    var u = n;
                    if (o) {
                        var p = o[l + 2] / 255;
                        u = Math.min(Math.max(p + 2 * (u - .5), 0), 1)
                    }
                    var d = i;
                    if (s) {
                        var f = s[l + 1] / 255;
                        d = Math.min(Math.max(f + 2 * (d - .5), 0), 1)
                    }
                    c.data[l] = c.data[l + 3] = 0, c.data[l + 1] = Math.round(255 * d), c.data[l + 2] = Math.round(255 * u)
                }
                a.putImageData(c, 0, 0), r(t)
            })
        })
    }

    function r(e, t, n, i) {
        return n = d.a.parseColor(n).slice(0, 3), new Promise(function(r, o) {
            a([e, t]).then(function(e) {
                for (var t = e.canvas, a = t.getContext("2d"), o = e.imageDataList[0], s = e.imageDataList[1], c = a.createImageData(t.width, t.height), l = 0; l < (o || s).length; l += 4) {
                    var u = n.slice();
                    o && (u[0] *= o[l] / 255, u[1] *= o[l + 1] / 255, u[2] *= o[l + 2] / 255);
                    var p = i;
                    if (s) {
                        var d = s[l + 3] / 255;
                        p = Math.min(Math.max(d + 2 * (p - .5), 0), 1)
                    }
                    for (var f = 0; f < 3; f++) c.data[l + f] = Math.round(255 * u[f]);
                    c.data[l + 3] = Math.round(255 * p)
                }
                a.putImageData(c, 0, 0), r(t)
            })
        })
    }

    function o(e, t) {
        var n = {},
            a = 0;
        return e.images = [], e.textures = [], e.samplers = [{
            minFilter: h.a.LINEAR_MIPMAP_LINEAR,
            magFilter: h.a.LINEAR,
            wrapS: h.a.REPEAT,
            wrapT: h.a.REPEAT
        }], t.materials.forEach(function(t, i) {
            m.forEach(function(i) {
                t[i] && !n.hasOwnProperty(i) && (e.images.push({
                    uri: t[i]
                }), e.textures.push({
                    sampler: 0,
                    source: a
                }), n[t[i]] = a++)
            })
        }), n
    }

    function s(e, t) {
        var n = {
            baseColorFactor: d.a.parseColor(e.color),
            metallicFactor: e.metalness,
            roughnessFactor: e.roughness
        };
        return n.baseColorFactor[3] = e.alpha, e.diffuseMap && (n.baseColorTexture = {
            index: t[e.diffuseMap],
            texCoord: 0
        }), e.metalnessMap && (n.metallicRoughnessTexture = {
            index: t[e.metalnessMap],
            texCoord: 0
        }, n.metallicFactor = 1, n.roughnessFactor = 1), n
    }

    function c(e, t) {
        var n = {
            diffuseFactor: d.a.parseColor(e.color),
            specularFactor: d.a.parseColor(e.specularColor).slice(0, 3),
            glossinessFactor: e.glossiness
        };
        return n.diffuseFactor[3] = e.alpha, e.diffuseMap && (n.diffuseTexture = {
            index: t[e.diffuseMap],
            texCoord: 0
        }), e.specularMap && (n.specularGlossinessTexture = {
            index: t[e.specularMap],
            texCoord: 0
        }, n.specularFactor = [1, 1, 1], n.glossinessFactor = 1), n
    }

    function l(e, t) {
        if (e.materials) {
            var n = o(e, t),
                a = {};
            return e.materials = [], e.nodes.forEach(function(t, n) {
                if (null != t.mesh) {
                    var i = e.meshes[t.mesh];
                    1 === i.primitives.length ? a[t.name] = i.primitives[0] : i.primitives.forEach(function(n, i) {
                        a[f.a.generateMeshName(e.meshes, t.mesh, i)] = n
                    })
                }
            }), t.materials.forEach(function(t, i) {
                var r = {
                    name: t.name,
                    emissiveFactor: d.a.parseColor(t.emission).slice(0, 3).map(function(e) {
                        return e * t.emissionIntensity
                    }),
                    alphaMode: t.transparent ? "BLEND" : "OPAQUE"
                };
                t.normalMap && (r.normalTexture = {
                    texCoord: 0,
                    scale: 1,
                    index: n[t.normalMap]
                }), t.emissiveMap && (r.emissiveTexture = {
                    texCoord: 0,
                    index: n[t.emissiveMap]
                }), "pbrMetallicRoughness" === t.type ? r.pbrMetallicRoughness = s(t, n) : r.extensions = {
                    KHR_materials_pbrSpecularGlossiness: c(t, n)
                }, t.targetMeshes.forEach(function(e) {
                    a[e].material = i
                }), e.materials[i] = r
            }), e.extras = e.extras || {}, e.extras.clayViewerConfig = t, e
        }
    }

    function u(e, t, n) {
        function a(e) {
            return 4 * Math.ceil(e / 4)
        }
        var i = 0,
            r = [],
            o = t.slice();
        e.buffers.forEach(function(e) {
            r.push(i), i += a(e.byteLength), delete e.uri
        }), e.bufferViews.forEach(function(e) {
            null == e.byteOffset ? e.byteOffset = 0 : e.byteOffset = e.byteOffset + r[e.buffer]
        }), (e.images || []).forEach(function(t, s) {
            var c = t.uri,
                l = n[c];
            if (delete t.uri, l) {
                var u = {
                    buffer: 0,
                    byteOffset: i,
                    byteLength: l.byteLength
                };
                r.push(i), i += a(l.byteLength), t.bufferView = e.bufferViews.length, t.mimeType = p(c), e.bufferViews.push(u), o.push(l)
            }
        });
        var s = i;
        e.buffers = [{
            byteLength: s
        }];
        var c, l = new TextEncoder,
            u = l.encode(JSON.stringify(e)),
            d = a(u.length);
        d !== u.length && (c = d - u.length);
        var f = 20 + d + 8 + s,
            h = new ArrayBuffer(f),
            m = new DataView(h),
            v = 0;
        m.setUint32(v, 1179937895, !0), v += 4, m.setUint32(v, 2, !0), v += 4, m.setUint32(v, f, !0), v += 4, m.setUint32(v, d, !0), v += 4, m.setUint32(v, 1313821514, !0), v += 4;
        for (var g = 0; g < u.length; g++) m.setUint8(v++, u[g]);
        if (null != c)
            for (var g = 0; g < c; g++) m.setUint8(v++, 32);
        m.setUint32(v, s, !0), v += 4, m.setUint32(v, 5130562, !0), v += 4;
        for (var x = 0; x < o.length; x++)
            for (var _ = v + r[x], y = new Uint8Array(o[x]), b = _, g = 0; g < y.byteLength; g++) m.setUint8(b, y[g]), b++;
        return h
    }

    function p(e) {
        for (var t in v)
            for (var n in v[t]) {
                var a = v[t][n];
                if (e.toLowerCase().endsWith("." + a)) return t
            }
        return "application/octet-stream"
    }
    n.d(t, "d", function() {
        return l
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "c", function() {
        return r
    }), n.d(t, "a", function() {
        return u
    });
    var d = n(26),
        f = n(41),
        h = n(3),
        m = ["diffuseMap", "normalMap", "emissiveMap", "metalnessMap", "roughnessMap", "specularMap", "glossinessMap"],
        v = {
            "image/png": ["png"],
            "image/jpeg": ["jpg", "jpeg"],
            "text/plain": ["glsl", "vert", "vs", "frag", "fs", "txt"],
            "image/vnd-ms.dds": ["dds"]
        }
}, function(e, t, n) {
    "use strict";
    t.a = function() {}
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (!e || "string" != typeof e) return !1;
        var t = l.exec(e),
            n = t && s[t[1].toLowerCase()];
        return n && n.charset ? n.charset : !(!t || !u.test(t[1])) && "UTF-8"
    }

    function i(e) {
        if (!e || "string" != typeof e) return !1;
        var n = -1 === e.indexOf("/") ? t.lookup(e) : e;
        if (!n) return !1;
        if (-1 === n.indexOf("charset")) {
            var a = t.charset(n);
            a && (n += "; charset=" + a.toLowerCase())
        }
        return n
    }

    function r(e) {
        if (!e || "string" != typeof e) return !1;
        var n = l.exec(e),
            a = n && t.extensions[n[1].toLowerCase()];
        return !(!a || !a.length) && a[0]
    }

    function o(e) {
        if (!e || "string" != typeof e) return !1;
        var n = c("x." + e).toLowerCase().substr(1);
        return !!n && (t.types[n] || !1)
    }
    /*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
    var s = n(151),
        c = n(153).extname,
        l = /^\s*([^;\s]*)(?:;|\s|$)/,
        u = /^text\//i;
    t.charset = a, t.charsets = {
            lookup: a
        }, t.contentType = i, t.extension = r, t.extensions = Object.create(null), t.lookup = o, t.types = Object.create(null),
        function(e, t) {
            var n = ["nginx", "apache", void 0, "iana"];
            Object.keys(s).forEach(function(a) {
                var i = s[a],
                    r = i.extensions;
                if (r && r.length) {
                    e[a] = r;
                    for (var o = 0; o < r.length; o++) {
                        var c = r[o];
                        if (t[c]) {
                            var l = n.indexOf(s[t[c]].source),
                                u = n.indexOf(i.source);
                            if ("application/octet-stream" !== t[c] && (l > u || l === u && "application/" === t[c].substr(0, 12))) continue
                        }
                        t[c] = a
                    }
                }
            })
        }(t.extensions, t.types)
}, function(e, t, n) {
    /*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */
    e.exports = n(152)
}, function(e, t) {
    e.exports = {
        "application/1d-interleaved-parityfec": {
            source: "iana"
        },
        "application/3gpdash-qoe-report+xml": {
            source: "iana"
        },
        "application/3gpp-ims+xml": {
            source: "iana"
        },
        "application/a2l": {
            source: "iana"
        },
        "application/activemessage": {
            source: "iana"
        },
        "application/alto-costmap+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-costmapfilter+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-directory+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointcost+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointcostparams+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointprop+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointpropparams+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-error+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-networkmap+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-networkmapfilter+json": {
            source: "iana",
            compressible: !0
        },
        "application/aml": {
            source: "iana"
        },
        "application/andrew-inset": {
            source: "iana",
            extensions: ["ez"]
        },
        "application/applefile": {
            source: "iana"
        },
        "application/applixware": {
            source: "apache",
            extensions: ["aw"]
        },
        "application/atf": {
            source: "iana"
        },
        "application/atfx": {
            source: "iana"
        },
        "application/atom+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["atom"]
        },
        "application/atomcat+xml": {
            source: "iana",
            extensions: ["atomcat"]
        },
        "application/atomdeleted+xml": {
            source: "iana"
        },
        "application/atomicmail": {
            source: "iana"
        },
        "application/atomsvc+xml": {
            source: "iana",
            extensions: ["atomsvc"]
        },
        "application/atxml": {
            source: "iana"
        },
        "application/auth-policy+xml": {
            source: "iana"
        },
        "application/bacnet-xdd+zip": {
            source: "iana"
        },
        "application/batch-smtp": {
            source: "iana"
        },
        "application/bdoc": {
            compressible: !1,
            extensions: ["bdoc"]
        },
        "application/beep+xml": {
            source: "iana"
        },
        "application/calendar+json": {
            source: "iana",
            compressible: !0
        },
        "application/calendar+xml": {
            source: "iana"
        },
        "application/call-completion": {
            source: "iana"
        },
        "application/cals-1840": {
            source: "iana"
        },
        "application/cbor": {
            source: "iana"
        },
        "application/cccex": {
            source: "iana"
        },
        "application/ccmp+xml": {
            source: "iana"
        },
        "application/ccxml+xml": {
            source: "iana",
            extensions: ["ccxml"]
        },
        "application/cdfx+xml": {
            source: "iana"
        },
        "application/cdmi-capability": {
            source: "iana",
            extensions: ["cdmia"]
        },
        "application/cdmi-container": {
            source: "iana",
            extensions: ["cdmic"]
        },
        "application/cdmi-domain": {
            source: "iana",
            extensions: ["cdmid"]
        },
        "application/cdmi-object": {
            source: "iana",
            extensions: ["cdmio"]
        },
        "application/cdmi-queue": {
            source: "iana",
            extensions: ["cdmiq"]
        },
        "application/cdni": {
            source: "iana"
        },
        "application/cea": {
            source: "iana"
        },
        "application/cea-2018+xml": {
            source: "iana"
        },
        "application/cellml+xml": {
            source: "iana"
        },
        "application/cfw": {
            source: "iana"
        },
        "application/clue_info+xml": {
            source: "iana"
        },
        "application/cms": {
            source: "iana"
        },
        "application/cnrp+xml": {
            source: "iana"
        },
        "application/coap-group+json": {
            source: "iana",
            compressible: !0
        },
        "application/coap-payload": {
            source: "iana"
        },
        "application/commonground": {
            source: "iana"
        },
        "application/conference-info+xml": {
            source: "iana"
        },
        "application/cose": {
            source: "iana"
        },
        "application/cose-key": {
            source: "iana"
        },
        "application/cose-key-set": {
            source: "iana"
        },
        "application/cpl+xml": {
            source: "iana"
        },
        "application/csrattrs": {
            source: "iana"
        },
        "application/csta+xml": {
            source: "iana"
        },
        "application/cstadata+xml": {
            source: "iana"
        },
        "application/csvm+json": {
            source: "iana",
            compressible: !0
        },
        "application/cu-seeme": {
            source: "apache",
            extensions: ["cu"]
        },
        "application/cybercash": {
            source: "iana"
        },
        "application/dart": {
            compressible: !0
        },
        "application/dash+xml": {
            source: "iana",
            extensions: ["mpd"]
        },
        "application/dashdelta": {
            source: "iana"
        },
        "application/davmount+xml": {
            source: "iana",
            extensions: ["davmount"]
        },
        "application/dca-rft": {
            source: "iana"
        },
        "application/dcd": {
            source: "iana"
        },
        "application/dec-dx": {
            source: "iana"
        },
        "application/dialog-info+xml": {
            source: "iana"
        },
        "application/dicom": {
            source: "iana"
        },
        "application/dicom+json": {
            source: "iana",
            compressible: !0
        },
        "application/dicom+xml": {
            source: "iana"
        },
        "application/dii": {
            source: "iana"
        },
        "application/dit": {
            source: "iana"
        },
        "application/dns": {
            source: "iana"
        },
        "application/docbook+xml": {
            source: "apache",
            extensions: ["dbk"]
        },
        "application/dskpp+xml": {
            source: "iana"
        },
        "application/dssc+der": {
            source: "iana",
            extensions: ["dssc"]
        },
        "application/dssc+xml": {
            source: "iana",
            extensions: ["xdssc"]
        },
        "application/dvcs": {
            source: "iana"
        },
        "application/ecmascript": {
            source: "iana",
            compressible: !0,
            extensions: ["ecma"]
        },
        "application/edi-consent": {
            source: "iana"
        },
        "application/edi-x12": {
            source: "iana",
            compressible: !1
        },
        "application/edifact": {
            source: "iana",
            compressible: !1
        },
        "application/efi": {
            source: "iana"
        },
        "application/emergencycalldata.comment+xml": {
            source: "iana"
        },
        "application/emergencycalldata.control+xml": {
            source: "iana"
        },
        "application/emergencycalldata.deviceinfo+xml": {
            source: "iana"
        },
        "application/emergencycalldata.ecall.msd": {
            source: "iana"
        },
        "application/emergencycalldata.providerinfo+xml": {
            source: "iana"
        },
        "application/emergencycalldata.serviceinfo+xml": {
            source: "iana"
        },
        "application/emergencycalldata.subscriberinfo+xml": {
            source: "iana"
        },
        "application/emergencycalldata.veds+xml": {
            source: "iana"
        },
        "application/emma+xml": {
            source: "iana",
            extensions: ["emma"]
        },
        "application/emotionml+xml": {
            source: "iana"
        },
        "application/encaprtp": {
            source: "iana"
        },
        "application/epp+xml": {
            source: "iana"
        },
        "application/epub+zip": {
            source: "iana",
            extensions: ["epub"]
        },
        "application/eshop": {
            source: "iana"
        },
        "application/exi": {
            source: "iana",
            extensions: ["exi"]
        },
        "application/fastinfoset": {
            source: "iana"
        },
        "application/fastsoap": {
            source: "iana"
        },
        "application/fdt+xml": {
            source: "iana"
        },
        "application/fido.trusted-apps+json": {
            compressible: !0
        },
        "application/fits": {
            source: "iana"
        },
        "application/font-sfnt": {
            source: "iana"
        },
        "application/font-tdpfr": {
            source: "iana",
            extensions: ["pfr"]
        },
        "application/font-woff": {
            source: "iana",
            compressible: !1,
            extensions: ["woff"]
        },
        "application/font-woff2": {
            compressible: !1,
            extensions: ["woff2"]
        },
        "application/framework-attributes+xml": {
            source: "iana"
        },
        "application/geo+json": {
            source: "iana",
            compressible: !0,
            extensions: ["geojson"]
        },
        "application/geo+json-seq": {
            source: "iana"
        },
        "application/geoxacml+xml": {
            source: "iana"
        },
        "application/gml+xml": {
            source: "iana",
            extensions: ["gml"]
        },
        "application/gpx+xml": {
            source: "apache",
            extensions: ["gpx"]
        },
        "application/gxf": {
            source: "apache",
            extensions: ["gxf"]
        },
        "application/gzip": {
            source: "iana",
            compressible: !1,
            extensions: ["gz"]
        },
        "application/h224": {
            source: "iana"
        },
        "application/held+xml": {
            source: "iana"
        },
        "application/http": {
            source: "iana"
        },
        "application/hyperstudio": {
            source: "iana",
            extensions: ["stk"]
        },
        "application/ibe-key-request+xml": {
            source: "iana"
        },
        "application/ibe-pkg-reply+xml": {
            source: "iana"
        },
        "application/ibe-pp-data": {
            source: "iana"
        },
        "application/iges": {
            source: "iana"
        },
        "application/im-iscomposing+xml": {
            source: "iana"
        },
        "application/index": {
            source: "iana"
        },
        "application/index.cmd": {
            source: "iana"
        },
        "application/index.obj": {
            source: "iana"
        },
        "application/index.response": {
            source: "iana"
        },
        "application/index.vnd": {
            source: "iana"
        },
        "application/inkml+xml": {
            source: "iana",
            extensions: ["ink", "inkml"]
        },
        "application/iotp": {
            source: "iana"
        },
        "application/ipfix": {
            source: "iana",
            extensions: ["ipfix"]
        },
        "application/ipp": {
            source: "iana"
        },
        "application/isup": {
            source: "iana"
        },
        "application/its+xml": {
            source: "iana"
        },
        "application/java-archive": {
            source: "apache",
            compressible: !1,
            extensions: ["jar", "war", "ear"]
        },
        "application/java-serialized-object": {
            source: "apache",
            compressible: !1,
            extensions: ["ser"]
        },
        "application/java-vm": {
            source: "apache",
            compressible: !1,
            extensions: ["class"]
        },
        "application/javascript": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["js", "mjs"]
        },
        "application/jf2feed+json": {
            source: "iana",
            compressible: !0
        },
        "application/jose": {
            source: "iana"
        },
        "application/jose+json": {
            source: "iana",
            compressible: !0
        },
        "application/jrd+json": {
            source: "iana",
            compressible: !0
        },
        "application/json": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["json", "map"]
        },
        "application/json-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/json-seq": {
            source: "iana"
        },
        "application/json5": {
            extensions: ["json5"]
        },
        "application/jsonml+json": {
            source: "apache",
            compressible: !0,
            extensions: ["jsonml"]
        },
        "application/jwk+json": {
            source: "iana",
            compressible: !0
        },
        "application/jwk-set+json": {
            source: "iana",
            compressible: !0
        },
        "application/jwt": {
            source: "iana"
        },
        "application/kpml-request+xml": {
            source: "iana"
        },
        "application/kpml-response+xml": {
            source: "iana"
        },
        "application/ld+json": {
            source: "iana",
            compressible: !0,
            extensions: ["jsonld"]
        },
        "application/lgr+xml": {
            source: "iana"
        },
        "application/link-format": {
            source: "iana"
        },
        "application/load-control+xml": {
            source: "iana"
        },
        "application/lost+xml": {
            source: "iana",
            extensions: ["lostxml"]
        },
        "application/lostsync+xml": {
            source: "iana"
        },
        "application/lxf": {
            source: "iana"
        },
        "application/mac-binhex40": {
            source: "iana",
            extensions: ["hqx"]
        },
        "application/mac-compactpro": {
            source: "apache",
            extensions: ["cpt"]
        },
        "application/macwriteii": {
            source: "iana"
        },
        "application/mads+xml": {
            source: "iana",
            extensions: ["mads"]
        },
        "application/manifest+json": {
            charset: "UTF-8",
            compressible: !0,
            extensions: ["webmanifest"]
        },
        "application/marc": {
            source: "iana",
            extensions: ["mrc"]
        },
        "application/marcxml+xml": {
            source: "iana",
            extensions: ["mrcx"]
        },
        "application/mathematica": {
            source: "iana",
            extensions: ["ma", "nb", "mb"]
        },
        "application/mathml+xml": {
            source: "iana",
            extensions: ["mathml"]
        },
        "application/mathml-content+xml": {
            source: "iana"
        },
        "application/mathml-presentation+xml": {
            source: "iana"
        },
        "application/mbms-associated-procedure-description+xml": {
            source: "iana"
        },
        "application/mbms-deregister+xml": {
            source: "iana"
        },
        "application/mbms-envelope+xml": {
            source: "iana"
        },
        "application/mbms-msk+xml": {
            source: "iana"
        },
        "application/mbms-msk-response+xml": {
            source: "iana"
        },
        "application/mbms-protection-description+xml": {
            source: "iana"
        },
        "application/mbms-reception-report+xml": {
            source: "iana"
        },
        "application/mbms-register+xml": {
            source: "iana"
        },
        "application/mbms-register-response+xml": {
            source: "iana"
        },
        "application/mbms-schedule+xml": {
            source: "iana"
        },
        "application/mbms-user-service-description+xml": {
            source: "iana"
        },
        "application/mbox": {
            source: "iana",
            extensions: ["mbox"]
        },
        "application/media-policy-dataset+xml": {
            source: "iana"
        },
        "application/media_control+xml": {
            source: "iana"
        },
        "application/mediaservercontrol+xml": {
            source: "iana",
            extensions: ["mscml"]
        },
        "application/merge-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/metalink+xml": {
            source: "apache",
            extensions: ["metalink"]
        },
        "application/metalink4+xml": {
            source: "iana",
            extensions: ["meta4"]
        },
        "application/mets+xml": {
            source: "iana",
            extensions: ["mets"]
        },
        "application/mf4": {
            source: "iana"
        },
        "application/mikey": {
            source: "iana"
        },
        "application/mmt-usd+xml": {
            source: "iana"
        },
        "application/mods+xml": {
            source: "iana",
            extensions: ["mods"]
        },
        "application/moss-keys": {
            source: "iana"
        },
        "application/moss-signature": {
            source: "iana"
        },
        "application/mosskey-data": {
            source: "iana"
        },
        "application/mosskey-request": {
            source: "iana"
        },
        "application/mp21": {
            source: "iana",
            extensions: ["m21", "mp21"]
        },
        "application/mp4": {
            source: "iana",
            extensions: ["mp4s", "m4p"]
        },
        "application/mpeg4-generic": {
            source: "iana"
        },
        "application/mpeg4-iod": {
            source: "iana"
        },
        "application/mpeg4-iod-xmt": {
            source: "iana"
        },
        "application/mrb-consumer+xml": {
            source: "iana"
        },
        "application/mrb-publish+xml": {
            source: "iana"
        },
        "application/msc-ivr+xml": {
            source: "iana"
        },
        "application/msc-mixer+xml": {
            source: "iana"
        },
        "application/msword": {
            source: "iana",
            compressible: !1,
            extensions: ["doc", "dot"]
        },
        "application/mud+json": {
            source: "iana",
            compressible: !0
        },
        "application/mxf": {
            source: "iana",
            extensions: ["mxf"]
        },
        "application/n-quads": {
            source: "iana"
        },
        "application/n-triples": {
            source: "iana"
        },
        "application/nasdata": {
            source: "iana"
        },
        "application/news-checkgroups": {
            source: "iana"
        },
        "application/news-groupinfo": {
            source: "iana"
        },
        "application/news-transmission": {
            source: "iana"
        },
        "application/nlsml+xml": {
            source: "iana"
        },
        "application/nss": {
            source: "iana"
        },
        "application/ocsp-request": {
            source: "iana"
        },
        "application/ocsp-response": {
            source: "iana"
        },
        "application/octet-stream": {
            source: "iana",
            compressible: !1,
            extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
        },
        "application/oda": {
            source: "iana",
            extensions: ["oda"]
        },
        "application/odx": {
            source: "iana"
        },
        "application/oebps-package+xml": {
            source: "iana",
            extensions: ["opf"]
        },
        "application/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["ogx"]
        },
        "application/omdoc+xml": {
            source: "apache",
            extensions: ["omdoc"]
        },
        "application/onenote": {
            source: "apache",
            extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
        },
        "application/oxps": {
            source: "iana",
            extensions: ["oxps"]
        },
        "application/p2p-overlay+xml": {
            source: "iana"
        },
        "application/parityfec": {
            source: "iana"
        },
        "application/passport": {
            source: "iana"
        },
        "application/patch-ops-error+xml": {
            source: "iana",
            extensions: ["xer"]
        },
        "application/pdf": {
            source: "iana",
            compressible: !1,
            extensions: ["pdf"]
        },
        "application/pdx": {
            source: "iana"
        },
        "application/pgp-encrypted": {
            source: "iana",
            compressible: !1,
            extensions: ["pgp"]
        },
        "application/pgp-keys": {
            source: "iana"
        },
        "application/pgp-signature": {
            source: "iana",
            extensions: ["asc", "sig"]
        },
        "application/pics-rules": {
            source: "apache",
            extensions: ["prf"]
        },
        "application/pidf+xml": {
            source: "iana"
        },
        "application/pidf-diff+xml": {
            source: "iana"
        },
        "application/pkcs10": {
            source: "iana",
            extensions: ["p10"]
        },
        "application/pkcs12": {
            source: "iana"
        },
        "application/pkcs7-mime": {
            source: "iana",
            extensions: ["p7m", "p7c"]
        },
        "application/pkcs7-signature": {
            source: "iana",
            extensions: ["p7s"]
        },
        "application/pkcs8": {
            source: "iana",
            extensions: ["p8"]
        },
        "application/pkix-attr-cert": {
            source: "iana",
            extensions: ["ac"]
        },
        "application/pkix-cert": {
            source: "iana",
            extensions: ["cer"]
        },
        "application/pkix-crl": {
            source: "iana",
            extensions: ["crl"]
        },
        "application/pkix-pkipath": {
            source: "iana",
            extensions: ["pkipath"]
        },
        "application/pkixcmp": {
            source: "iana",
            extensions: ["pki"]
        },
        "application/pls+xml": {
            source: "iana",
            extensions: ["pls"]
        },
        "application/poc-settings+xml": {
            source: "iana"
        },
        "application/postscript": {
            source: "iana",
            compressible: !0,
            extensions: ["ai", "eps", "ps"]
        },
        "application/ppsp-tracker+json": {
            source: "iana",
            compressible: !0
        },
        "application/problem+json": {
            source: "iana",
            compressible: !0
        },
        "application/problem+xml": {
            source: "iana"
        },
        "application/provenance+xml": {
            source: "iana"
        },
        "application/prs.alvestrand.titrax-sheet": {
            source: "iana"
        },
        "application/prs.cww": {
            source: "iana",
            extensions: ["cww"]
        },
        "application/prs.hpub+zip": {
            source: "iana"
        },
        "application/prs.nprend": {
            source: "iana"
        },
        "application/prs.plucker": {
            source: "iana"
        },
        "application/prs.rdf-xml-crypt": {
            source: "iana"
        },
        "application/prs.xsf+xml": {
            source: "iana"
        },
        "application/pskc+xml": {
            source: "iana",
            extensions: ["pskcxml"]
        },
        "application/qsig": {
            source: "iana"
        },
        "application/raptorfec": {
            source: "iana"
        },
        "application/rdap+json": {
            source: "iana",
            compressible: !0
        },
        "application/rdf+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rdf"]
        },
        "application/reginfo+xml": {
            source: "iana",
            extensions: ["rif"]
        },
        "application/relax-ng-compact-syntax": {
            source: "iana",
            extensions: ["rnc"]
        },
        "application/remote-printing": {
            source: "iana"
        },
        "application/reputon+json": {
            source: "iana",
            compressible: !0
        },
        "application/resource-lists+xml": {
            source: "iana",
            extensions: ["rl"]
        },
        "application/resource-lists-diff+xml": {
            source: "iana",
            extensions: ["rld"]
        },
        "application/rfc+xml": {
            source: "iana"
        },
        "application/riscos": {
            source: "iana"
        },
        "application/rlmi+xml": {
            source: "iana"
        },
        "application/rls-services+xml": {
            source: "iana",
            extensions: ["rs"]
        },
        "application/route-apd+xml": {
            source: "iana"
        },
        "application/route-s-tsid+xml": {
            source: "iana"
        },
        "application/route-usd+xml": {
            source: "iana"
        },
        "application/rpki-ghostbusters": {
            source: "iana",
            extensions: ["gbr"]
        },
        "application/rpki-manifest": {
            source: "iana",
            extensions: ["mft"]
        },
        "application/rpki-publication": {
            source: "iana"
        },
        "application/rpki-roa": {
            source: "iana",
            extensions: ["roa"]
        },
        "application/rpki-updown": {
            source: "iana"
        },
        "application/rsd+xml": {
            source: "apache",
            extensions: ["rsd"]
        },
        "application/rss+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["rss"]
        },
        "application/rtf": {
            source: "iana",
            compressible: !0,
            extensions: ["rtf"]
        },
        "application/rtploopback": {
            source: "iana"
        },
        "application/rtx": {
            source: "iana"
        },
        "application/samlassertion+xml": {
            source: "iana"
        },
        "application/samlmetadata+xml": {
            source: "iana"
        },
        "application/sbml+xml": {
            source: "iana",
            extensions: ["sbml"]
        },
        "application/scaip+xml": {
            source: "iana"
        },
        "application/scim+json": {
            source: "iana",
            compressible: !0
        },
        "application/scvp-cv-request": {
            source: "iana",
            extensions: ["scq"]
        },
        "application/scvp-cv-response": {
            source: "iana",
            extensions: ["scs"]
        },
        "application/scvp-vp-request": {
            source: "iana",
            extensions: ["spq"]
        },
        "application/scvp-vp-response": {
            source: "iana",
            extensions: ["spp"]
        },
        "application/sdp": {
            source: "iana",
            extensions: ["sdp"]
        },
        "application/sep+xml": {
            source: "iana"
        },
        "application/sep-exi": {
            source: "iana"
        },
        "application/session-info": {
            source: "iana"
        },
        "application/set-payment": {
            source: "iana"
        },
        "application/set-payment-initiation": {
            source: "iana",
            extensions: ["setpay"]
        },
        "application/set-registration": {
            source: "iana"
        },
        "application/set-registration-initiation": {
            source: "iana",
            extensions: ["setreg"]
        },
        "application/sgml": {
            source: "iana"
        },
        "application/sgml-open-catalog": {
            source: "iana"
        },
        "application/shf+xml": {
            source: "iana",
            extensions: ["shf"]
        },
        "application/sieve": {
            source: "iana"
        },
        "application/simple-filter+xml": {
            source: "iana"
        },
        "application/simple-message-summary": {
            source: "iana"
        },
        "application/simplesymbolcontainer": {
            source: "iana"
        },
        "application/slate": {
            source: "iana"
        },
        "application/smil": {
            source: "iana"
        },
        "application/smil+xml": {
            source: "iana",
            extensions: ["smi", "smil"]
        },
        "application/smpte336m": {
            source: "iana"
        },
        "application/soap+fastinfoset": {
            source: "iana"
        },
        "application/soap+xml": {
            source: "iana",
            compressible: !0
        },
        "application/sparql-query": {
            source: "iana",
            extensions: ["rq"]
        },
        "application/sparql-results+xml": {
            source: "iana",
            extensions: ["srx"]
        },
        "application/spirits-event+xml": {
            source: "iana"
        },
        "application/sql": {
            source: "iana"
        },
        "application/srgs": {
            source: "iana",
            extensions: ["gram"]
        },
        "application/srgs+xml": {
            source: "iana",
            extensions: ["grxml"]
        },
        "application/sru+xml": {
            source: "iana",
            extensions: ["sru"]
        },
        "application/ssdl+xml": {
            source: "apache",
            extensions: ["ssdl"]
        },
        "application/ssml+xml": {
            source: "iana",
            extensions: ["ssml"]
        },
        "application/tamp-apex-update": {
            source: "iana"
        },
        "application/tamp-apex-update-confirm": {
            source: "iana"
        },
        "application/tamp-community-update": {
            source: "iana"
        },
        "application/tamp-community-update-confirm": {
            source: "iana"
        },
        "application/tamp-error": {
            source: "iana"
        },
        "application/tamp-sequence-adjust": {
            source: "iana"
        },
        "application/tamp-sequence-adjust-confirm": {
            source: "iana"
        },
        "application/tamp-status-query": {
            source: "iana"
        },
        "application/tamp-status-response": {
            source: "iana"
        },
        "application/tamp-update": {
            source: "iana"
        },
        "application/tamp-update-confirm": {
            source: "iana"
        },
        "application/tar": {
            compressible: !0
        },
        "application/tei+xml": {
            source: "iana",
            extensions: ["tei", "teicorpus"]
        },
        "application/thraud+xml": {
            source: "iana",
            extensions: ["tfi"]
        },
        "application/timestamp-query": {
            source: "iana"
        },
        "application/timestamp-reply": {
            source: "iana"
        },
        "application/timestamped-data": {
            source: "iana",
            extensions: ["tsd"]
        },
        "application/trig": {
            source: "iana"
        },
        "application/ttml+xml": {
            source: "iana"
        },
        "application/tve-trigger": {
            source: "iana"
        },
        "application/ulpfec": {
            source: "iana"
        },
        "application/urc-grpsheet+xml": {
            source: "iana"
        },
        "application/urc-ressheet+xml": {
            source: "iana"
        },
        "application/urc-targetdesc+xml": {
            source: "iana"
        },
        "application/urc-uisocketdesc+xml": {
            source: "iana"
        },
        "application/vcard+json": {
            source: "iana",
            compressible: !0
        },
        "application/vcard+xml": {
            source: "iana"
        },
        "application/vemmi": {
            source: "iana"
        },
        "application/vividence.scriptfile": {
            source: "apache"
        },
        "application/vnd.1000minds.decision-model+xml": {
            source: "iana"
        },
        "application/vnd.3gpp-prose+xml": {
            source: "iana"
        },
        "application/vnd.3gpp-prose-pc3ch+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.access-transfer-events+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.bsf+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.gmop+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.mcptt-info+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.mid-call+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.pic-bw-large": {
            source: "iana",
            extensions: ["plb"]
        },
        "application/vnd.3gpp.pic-bw-small": {
            source: "iana",
            extensions: ["psb"]
        },
        "application/vnd.3gpp.pic-bw-var": {
            source: "iana",
            extensions: ["pvb"]
        },
        "application/vnd.3gpp.sms": {
            source: "iana"
        },
        "application/vnd.3gpp.sms+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.srvcc-ext+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.srvcc-info+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.state-and-event-info+xml": {
            source: "iana"
        },
        "application/vnd.3gpp.ussd+xml": {
            source: "iana"
        },
        "application/vnd.3gpp2.bcmcsinfo+xml": {
            source: "iana"
        },
        "application/vnd.3gpp2.sms": {
            source: "iana"
        },
        "application/vnd.3gpp2.tcap": {
            source: "iana",
            extensions: ["tcap"]
        },
        "application/vnd.3lightssoftware.imagescal": {
            source: "iana"
        },
        "application/vnd.3m.post-it-notes": {
            source: "iana",
            extensions: ["pwn"]
        },
        "application/vnd.accpac.simply.aso": {
            source: "iana",
            extensions: ["aso"]
        },
        "application/vnd.accpac.simply.imp": {
            source: "iana",
            extensions: ["imp"]
        },
        "application/vnd.acucobol": {
            source: "iana",
            extensions: ["acu"]
        },
        "application/vnd.acucorp": {
            source: "iana",
            extensions: ["atc", "acutc"]
        },
        "application/vnd.adobe.air-application-installer-package+zip": {
            source: "apache",
            extensions: ["air"]
        },
        "application/vnd.adobe.flash.movie": {
            source: "iana"
        },
        "application/vnd.adobe.formscentral.fcdt": {
            source: "iana",
            extensions: ["fcdt"]
        },
        "application/vnd.adobe.fxp": {
            source: "iana",
            extensions: ["fxp", "fxpl"]
        },
        "application/vnd.adobe.partial-upload": {
            source: "iana"
        },
        "application/vnd.adobe.xdp+xml": {
            source: "iana",
            extensions: ["xdp"]
        },
        "application/vnd.adobe.xfdf": {
            source: "iana",
            extensions: ["xfdf"]
        },
        "application/vnd.aether.imp": {
            source: "iana"
        },
        "application/vnd.ah-barcode": {
            source: "iana"
        },
        "application/vnd.ahead.space": {
            source: "iana",
            extensions: ["ahead"]
        },
        "application/vnd.airzip.filesecure.azf": {
            source: "iana",
            extensions: ["azf"]
        },
        "application/vnd.airzip.filesecure.azs": {
            source: "iana",
            extensions: ["azs"]
        },
        "application/vnd.amazon.ebook": {
            source: "apache",
            extensions: ["azw"]
        },
        "application/vnd.amazon.mobi8-ebook": {
            source: "iana"
        },
        "application/vnd.americandynamics.acc": {
            source: "iana",
            extensions: ["acc"]
        },
        "application/vnd.amiga.ami": {
            source: "iana",
            extensions: ["ami"]
        },
        "application/vnd.amundsen.maze+xml": {
            source: "iana"
        },
        "application/vnd.android.package-archive": {
            source: "apache",
            compressible: !1,
            extensions: ["apk"]
        },
        "application/vnd.anki": {
            source: "iana"
        },
        "application/vnd.anser-web-certificate-issue-initiation": {
            source: "iana",
            extensions: ["cii"]
        },
        "application/vnd.anser-web-funds-transfer-initiation": {
            source: "apache",
            extensions: ["fti"]
        },
        "application/vnd.antix.game-component": {
            source: "iana",
            extensions: ["atx"]
        },
        "application/vnd.apache.thrift.binary": {
            source: "iana"
        },
        "application/vnd.apache.thrift.compact": {
            source: "iana"
        },
        "application/vnd.apache.thrift.json": {
            source: "iana"
        },
        "application/vnd.api+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.apothekende.reservation+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.apple.installer+xml": {
            source: "iana",
            extensions: ["mpkg"]
        },
        "application/vnd.apple.mpegurl": {
            source: "iana",
            extensions: ["m3u8"]
        },
        "application/vnd.apple.pkpass": {
            compressible: !1,
            extensions: ["pkpass"]
        },
        "application/vnd.arastra.swi": {
            source: "iana"
        },
        "application/vnd.aristanetworks.swi": {
            source: "iana",
            extensions: ["swi"]
        },
        "application/vnd.artsquare": {
            source: "iana"
        },
        "application/vnd.astraea-software.iota": {
            source: "iana",
            extensions: ["iota"]
        },
        "application/vnd.audiograph": {
            source: "iana",
            extensions: ["aep"]
        },
        "application/vnd.autopackage": {
            source: "iana"
        },
        "application/vnd.avistar+xml": {
            source: "iana"
        },
        "application/vnd.balsamiq.bmml+xml": {
            source: "iana"
        },
        "application/vnd.balsamiq.bmpr": {
            source: "iana"
        },
        "application/vnd.bekitzur-stech+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.bint.med-content": {
            source: "iana"
        },
        "application/vnd.biopax.rdf+xml": {
            source: "iana"
        },
        "application/vnd.blink-idb-value-wrapper": {
            source: "iana"
        },
        "application/vnd.blueice.multipass": {
            source: "iana",
            extensions: ["mpm"]
        },
        "application/vnd.bluetooth.ep.oob": {
            source: "iana"
        },
        "application/vnd.bluetooth.le.oob": {
            source: "iana"
        },
        "application/vnd.bmi": {
            source: "iana",
            extensions: ["bmi"]
        },
        "application/vnd.businessobjects": {
            source: "iana",
            extensions: ["rep"]
        },
        "application/vnd.cab-jscript": {
            source: "iana"
        },
        "application/vnd.canon-cpdl": {
            source: "iana"
        },
        "application/vnd.canon-lips": {
            source: "iana"
        },
        "application/vnd.capasystems-pg+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cendio.thinlinc.clientconf": {
            source: "iana"
        },
        "application/vnd.century-systems.tcp_stream": {
            source: "iana"
        },
        "application/vnd.chemdraw+xml": {
            source: "iana",
            extensions: ["cdxml"]
        },
        "application/vnd.chess-pgn": {
            source: "iana"
        },
        "application/vnd.chipnuts.karaoke-mmd": {
            source: "iana",
            extensions: ["mmd"]
        },
        "application/vnd.cinderella": {
            source: "iana",
            extensions: ["cdy"]
        },
        "application/vnd.cirpack.isdn-ext": {
            source: "iana"
        },
        "application/vnd.citationstyles.style+xml": {
            source: "iana"
        },
        "application/vnd.claymore": {
            source: "iana",
            extensions: ["cla"]
        },
        "application/vnd.cloanto.rp9": {
            source: "iana",
            extensions: ["rp9"]
        },
        "application/vnd.clonk.c4group": {
            source: "iana",
            extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
        },
        "application/vnd.cluetrust.cartomobile-config": {
            source: "iana",
            extensions: ["c11amc"]
        },
        "application/vnd.cluetrust.cartomobile-config-pkg": {
            source: "iana",
            extensions: ["c11amz"]
        },
        "application/vnd.coffeescript": {
            source: "iana"
        },
        "application/vnd.collection+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.collection.doc+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.collection.next+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.comicbook+zip": {
            source: "iana"
        },
        "application/vnd.commerce-battelle": {
            source: "iana"
        },
        "application/vnd.commonspace": {
            source: "iana",
            extensions: ["csp"]
        },
        "application/vnd.contact.cmsg": {
            source: "iana",
            extensions: ["cdbcmsg"]
        },
        "application/vnd.coreos.ignition+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cosmocaller": {
            source: "iana",
            extensions: ["cmc"]
        },
        "application/vnd.crick.clicker": {
            source: "iana",
            extensions: ["clkx"]
        },
        "application/vnd.crick.clicker.keyboard": {
            source: "iana",
            extensions: ["clkk"]
        },
        "application/vnd.crick.clicker.palette": {
            source: "iana",
            extensions: ["clkp"]
        },
        "application/vnd.crick.clicker.template": {
            source: "iana",
            extensions: ["clkt"]
        },
        "application/vnd.crick.clicker.wordbank": {
            source: "iana",
            extensions: ["clkw"]
        },
        "application/vnd.criticaltools.wbs+xml": {
            source: "iana",
            extensions: ["wbs"]
        },
        "application/vnd.ctc-posml": {
            source: "iana",
            extensions: ["pml"]
        },
        "application/vnd.ctct.ws+xml": {
            source: "iana"
        },
        "application/vnd.cups-pdf": {
            source: "iana"
        },
        "application/vnd.cups-postscript": {
            source: "iana"
        },
        "application/vnd.cups-ppd": {
            source: "iana",
            extensions: ["ppd"]
        },
        "application/vnd.cups-raster": {
            source: "iana"
        },
        "application/vnd.cups-raw": {
            source: "iana"
        },
        "application/vnd.curl": {
            source: "iana"
        },
        "application/vnd.curl.car": {
            source: "apache",
            extensions: ["car"]
        },
        "application/vnd.curl.pcurl": {
            source: "apache",
            extensions: ["pcurl"]
        },
        "application/vnd.cyan.dean.root+xml": {
            source: "iana"
        },
        "application/vnd.cybank": {
            source: "iana"
        },
        "application/vnd.d2l.coursepackage1p0+zip": {
            source: "iana"
        },
        "application/vnd.dart": {
            source: "iana",
            compressible: !0,
            extensions: ["dart"]
        },
        "application/vnd.data-vision.rdz": {
            source: "iana",
            extensions: ["rdz"]
        },
        "application/vnd.datapackage+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dataresource+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.debian.binary-package": {
            source: "iana"
        },
        "application/vnd.dece.data": {
            source: "iana",
            extensions: ["uvf", "uvvf", "uvd", "uvvd"]
        },
        "application/vnd.dece.ttml+xml": {
            source: "iana",
            extensions: ["uvt", "uvvt"]
        },
        "application/vnd.dece.unspecified": {
            source: "iana",
            extensions: ["uvx", "uvvx"]
        },
        "application/vnd.dece.zip": {
            source: "iana",
            extensions: ["uvz", "uvvz"]
        },
        "application/vnd.denovo.fcselayout-link": {
            source: "iana",
            extensions: ["fe_launch"]
        },
        "application/vnd.desmume-movie": {
            source: "iana"
        },
        "application/vnd.desmume.movie": {
            source: "apache"
        },
        "application/vnd.dir-bi.plate-dl-nosuffix": {
            source: "iana"
        },
        "application/vnd.dm.delegation+xml": {
            source: "iana"
        },
        "application/vnd.dna": {
            source: "iana",
            extensions: ["dna"]
        },
        "application/vnd.document+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dolby.mlp": {
            source: "apache",
            extensions: ["mlp"]
        },
        "application/vnd.dolby.mobile.1": {
            source: "iana"
        },
        "application/vnd.dolby.mobile.2": {
            source: "iana"
        },
        "application/vnd.doremir.scorecloud-binary-document": {
            source: "iana"
        },
        "application/vnd.dpgraph": {
            source: "iana",
            extensions: ["dpg"]
        },
        "application/vnd.dreamfactory": {
            source: "iana",
            extensions: ["dfac"]
        },
        "application/vnd.drive+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ds-keypoint": {
            source: "apache",
            extensions: ["kpxx"]
        },
        "application/vnd.dtg.local": {
            source: "iana"
        },
        "application/vnd.dtg.local.flash": {
            source: "iana"
        },
        "application/vnd.dtg.local.html": {
            source: "iana"
        },
        "application/vnd.dvb.ait": {
            source: "iana",
            extensions: ["ait"]
        },
        "application/vnd.dvb.dvbj": {
            source: "iana"
        },
        "application/vnd.dvb.esgcontainer": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcdftnotifaccess": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgaccess": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgaccess2": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgpdd": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcroaming": {
            source: "iana"
        },
        "application/vnd.dvb.iptv.alfec-base": {
            source: "iana"
        },
        "application/vnd.dvb.iptv.alfec-enhancement": {
            source: "iana"
        },
        "application/vnd.dvb.notif-aggregate-root+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-container+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-generic+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-ia-msglist+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-ia-registration-request+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-ia-registration-response+xml": {
            source: "iana"
        },
        "application/vnd.dvb.notif-init+xml": {
            source: "iana"
        },
        "application/vnd.dvb.pfr": {
            source: "iana"
        },
        "application/vnd.dvb.service": {
            source: "iana",
            extensions: ["svc"]
        },
        "application/vnd.dxr": {
            source: "iana"
        },
        "application/vnd.dynageo": {
            source: "iana",
            extensions: ["geo"]
        },
        "application/vnd.dzr": {
            source: "iana"
        },
        "application/vnd.easykaraoke.cdgdownload": {
            source: "iana"
        },
        "application/vnd.ecdis-update": {
            source: "iana"
        },
        "application/vnd.ecowin.chart": {
            source: "iana",
            extensions: ["mag"]
        },
        "application/vnd.ecowin.filerequest": {
            source: "iana"
        },
        "application/vnd.ecowin.fileupdate": {
            source: "iana"
        },
        "application/vnd.ecowin.series": {
            source: "iana"
        },
        "application/vnd.ecowin.seriesrequest": {
            source: "iana"
        },
        "application/vnd.ecowin.seriesupdate": {
            source: "iana"
        },
        "application/vnd.efi.img": {
            source: "iana"
        },
        "application/vnd.efi.iso": {
            source: "iana"
        },
        "application/vnd.emclient.accessrequest+xml": {
            source: "iana"
        },
        "application/vnd.enliven": {
            source: "iana",
            extensions: ["nml"]
        },
        "application/vnd.enphase.envoy": {
            source: "iana"
        },
        "application/vnd.eprints.data+xml": {
            source: "iana"
        },
        "application/vnd.epson.esf": {
            source: "iana",
            extensions: ["esf"]
        },
        "application/vnd.epson.msf": {
            source: "iana",
            extensions: ["msf"]
        },
        "application/vnd.epson.quickanime": {
            source: "iana",
            extensions: ["qam"]
        },
        "application/vnd.epson.salt": {
            source: "iana",
            extensions: ["slt"]
        },
        "application/vnd.epson.ssf": {
            source: "iana",
            extensions: ["ssf"]
        },
        "application/vnd.ericsson.quickcall": {
            source: "iana"
        },
        "application/vnd.espass-espass+zip": {
            source: "iana"
        },
        "application/vnd.eszigno3+xml": {
            source: "iana",
            extensions: ["es3", "et3"]
        },
        "application/vnd.etsi.aoc+xml": {
            source: "iana"
        },
        "application/vnd.etsi.asic-e+zip": {
            source: "iana"
        },
        "application/vnd.etsi.asic-s+zip": {
            source: "iana"
        },
        "application/vnd.etsi.cug+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvcommand+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvdiscovery+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvprofile+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvsad-bc+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvsad-cod+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvsad-npvr+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvservice+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvsync+xml": {
            source: "iana"
        },
        "application/vnd.etsi.iptvueprofile+xml": {
            source: "iana"
        },
        "application/vnd.etsi.mcid+xml": {
            source: "iana"
        },
        "application/vnd.etsi.mheg5": {
            source: "iana"
        },
        "application/vnd.etsi.overload-control-policy-dataset+xml": {
            source: "iana"
        },
        "application/vnd.etsi.pstn+xml": {
            source: "iana"
        },
        "application/vnd.etsi.sci+xml": {
            source: "iana"
        },
        "application/vnd.etsi.simservs+xml": {
            source: "iana"
        },
        "application/vnd.etsi.timestamp-token": {
            source: "iana"
        },
        "application/vnd.etsi.tsl+xml": {
            source: "iana"
        },
        "application/vnd.etsi.tsl.der": {
            source: "iana"
        },
        "application/vnd.eudora.data": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.profile": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.settings": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.theme": {
            source: "iana"
        },
        "application/vnd.ezpix-album": {
            source: "iana",
            extensions: ["ez2"]
        },
        "application/vnd.ezpix-package": {
            source: "iana",
            extensions: ["ez3"]
        },
        "application/vnd.f-secure.mobile": {
            source: "iana"
        },
        "application/vnd.fastcopy-disk-image": {
            source: "iana"
        },
        "application/vnd.fdf": {
            source: "iana",
            extensions: ["fdf"]
        },
        "application/vnd.fdsn.mseed": {
            source: "iana",
            extensions: ["mseed"]
        },
        "application/vnd.fdsn.seed": {
            source: "iana",
            extensions: ["seed", "dataless"]
        },
        "application/vnd.ffsns": {
            source: "iana"
        },
        "application/vnd.filmit.zfc": {
            source: "iana"
        },
        "application/vnd.fints": {
            source: "iana"
        },
        "application/vnd.firemonkeys.cloudcell": {
            source: "iana"
        },
        "application/vnd.flographit": {
            source: "iana",
            extensions: ["gph"]
        },
        "application/vnd.fluxtime.clip": {
            source: "iana",
            extensions: ["ftc"]
        },
        "application/vnd.font-fontforge-sfd": {
            source: "iana"
        },
        "application/vnd.framemaker": {
            source: "iana",
            extensions: ["fm", "frame", "maker", "book"]
        },
        "application/vnd.frogans.fnc": {
            source: "iana",
            extensions: ["fnc"]
        },
        "application/vnd.frogans.ltf": {
            source: "iana",
            extensions: ["ltf"]
        },
        "application/vnd.fsc.weblaunch": {
            source: "iana",
            extensions: ["fsc"]
        },
        "application/vnd.fujitsu.oasys": {
            source: "iana",
            extensions: ["oas"]
        },
        "application/vnd.fujitsu.oasys2": {
            source: "iana",
            extensions: ["oa2"]
        },
        "application/vnd.fujitsu.oasys3": {
            source: "iana",
            extensions: ["oa3"]
        },
        "application/vnd.fujitsu.oasysgp": {
            source: "iana",
            extensions: ["fg5"]
        },
        "application/vnd.fujitsu.oasysprs": {
            source: "iana",
            extensions: ["bh2"]
        },
        "application/vnd.fujixerox.art-ex": {
            source: "iana"
        },
        "application/vnd.fujixerox.art4": {
            source: "iana"
        },
        "application/vnd.fujixerox.ddd": {
            source: "iana",
            extensions: ["ddd"]
        },
        "application/vnd.fujixerox.docuworks": {
            source: "iana",
            extensions: ["xdw"]
        },
        "application/vnd.fujixerox.docuworks.binder": {
            source: "iana",
            extensions: ["xbd"]
        },
        "application/vnd.fujixerox.docuworks.container": {
            source: "iana"
        },
        "application/vnd.fujixerox.hbpl": {
            source: "iana"
        },
        "application/vnd.fut-misnet": {
            source: "iana"
        },
        "application/vnd.fuzzysheet": {
            source: "iana",
            extensions: ["fzs"]
        },
        "application/vnd.genomatix.tuxedo": {
            source: "iana",
            extensions: ["txd"]
        },
        "application/vnd.geo+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.geocube+xml": {
            source: "iana"
        },
        "application/vnd.geogebra.file": {
            source: "iana",
            extensions: ["ggb"]
        },
        "application/vnd.geogebra.tool": {
            source: "iana",
            extensions: ["ggt"]
        },
        "application/vnd.geometry-explorer": {
            source: "iana",
            extensions: ["gex", "gre"]
        },
        "application/vnd.geonext": {
            source: "iana",
            extensions: ["gxt"]
        },
        "application/vnd.geoplan": {
            source: "iana",
            extensions: ["g2w"]
        },
        "application/vnd.geospace": {
            source: "iana",
            extensions: ["g3w"]
        },
        "application/vnd.gerber": {
            source: "iana"
        },
        "application/vnd.globalplatform.card-content-mgt": {
            source: "iana"
        },
        "application/vnd.globalplatform.card-content-mgt-response": {
            source: "iana"
        },
        "application/vnd.gmx": {
            source: "iana",
            extensions: ["gmx"]
        },
        "application/vnd.google-apps.document": {
            compressible: !1,
            extensions: ["gdoc"]
        },
        "application/vnd.google-apps.presentation": {
            compressible: !1,
            extensions: ["gslides"]
        },
        "application/vnd.google-apps.spreadsheet": {
            compressible: !1,
            extensions: ["gsheet"]
        },
        "application/vnd.google-earth.kml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["kml"]
        },
        "application/vnd.google-earth.kmz": {
            source: "iana",
            compressible: !1,
            extensions: ["kmz"]
        },
        "application/vnd.gov.sk.e-form+xml": {
            source: "iana"
        },
        "application/vnd.gov.sk.e-form+zip": {
            source: "iana"
        },
        "application/vnd.gov.sk.xmldatacontainer+xml": {
            source: "iana"
        },
        "application/vnd.grafeq": {
            source: "iana",
            extensions: ["gqf", "gqs"]
        },
        "application/vnd.gridmp": {
            source: "iana"
        },
        "application/vnd.groove-account": {
            source: "iana",
            extensions: ["gac"]
        },
        "application/vnd.groove-help": {
            source: "iana",
            extensions: ["ghf"]
        },
        "application/vnd.groove-identity-message": {
            source: "iana",
            extensions: ["gim"]
        },
        "application/vnd.groove-injector": {
            source: "iana",
            extensions: ["grv"]
        },
        "application/vnd.groove-tool-message": {
            source: "iana",
            extensions: ["gtm"]
        },
        "application/vnd.groove-tool-template": {
            source: "iana",
            extensions: ["tpl"]
        },
        "application/vnd.groove-vcard": {
            source: "iana",
            extensions: ["vcg"]
        },
        "application/vnd.hal+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hal+xml": {
            source: "iana",
            extensions: ["hal"]
        },
        "application/vnd.handheld-entertainment+xml": {
            source: "iana",
            extensions: ["zmm"]
        },
        "application/vnd.hbci": {
            source: "iana",
            extensions: ["hbci"]
        },
        "application/vnd.hc+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hcl-bireports": {
            source: "iana"
        },
        "application/vnd.hdt": {
            source: "iana"
        },
        "application/vnd.heroku+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hhe.lesson-player": {
            source: "iana",
            extensions: ["les"]
        },
        "application/vnd.hp-hpgl": {
            source: "iana",
            extensions: ["hpgl"]
        },
        "application/vnd.hp-hpid": {
            source: "iana",
            extensions: ["hpid"]
        },
        "application/vnd.hp-hps": {
            source: "iana",
            extensions: ["hps"]
        },
        "application/vnd.hp-jlyt": {
            source: "iana",
            extensions: ["jlt"]
        },
        "application/vnd.hp-pcl": {
            source: "iana",
            extensions: ["pcl"]
        },
        "application/vnd.hp-pclxl": {
            source: "iana",
            extensions: ["pclxl"]
        },
        "application/vnd.httphone": {
            source: "iana"
        },
        "application/vnd.hydrostatix.sof-data": {
            source: "iana",
            extensions: ["sfd-hdstx"]
        },
        "application/vnd.hyper-item+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hyperdrive+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hzn-3d-crossword": {
            source: "iana"
        },
        "application/vnd.ibm.afplinedata": {
            source: "iana"
        },
        "application/vnd.ibm.electronic-media": {
            source: "iana"
        },
        "application/vnd.ibm.minipay": {
            source: "iana",
            extensions: ["mpy"]
        },
        "application/vnd.ibm.modcap": {
            source: "iana",
            extensions: ["afp", "listafp", "list3820"]
        },
        "application/vnd.ibm.rights-management": {
            source: "iana",
            extensions: ["irm"]
        },
        "application/vnd.ibm.secure-container": {
            source: "iana",
            extensions: ["sc"]
        },
        "application/vnd.iccprofile": {
            source: "iana",
            extensions: ["icc", "icm"]
        },
        "application/vnd.ieee.1905": {
            source: "iana"
        },
        "application/vnd.igloader": {
            source: "iana",
            extensions: ["igl"]
        },
        "application/vnd.imagemeter.folder+zip": {
            source: "iana"
        },
        "application/vnd.imagemeter.image+zip": {
            source: "iana"
        },
        "application/vnd.immervision-ivp": {
            source: "iana",
            extensions: ["ivp"]
        },
        "application/vnd.immervision-ivu": {
            source: "iana",
            extensions: ["ivu"]
        },
        "application/vnd.ims.imsccv1p1": {
            source: "iana"
        },
        "application/vnd.ims.imsccv1p2": {
            source: "iana"
        },
        "application/vnd.ims.imsccv1p3": {
            source: "iana"
        },
        "application/vnd.ims.lis.v2.result+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolproxy+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolproxy.id+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolsettings+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolsettings.simple+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.informedcontrol.rms+xml": {
            source: "iana"
        },
        "application/vnd.informix-visionary": {
            source: "iana"
        },
        "application/vnd.infotech.project": {
            source: "iana"
        },
        "application/vnd.infotech.project+xml": {
            source: "iana"
        },
        "application/vnd.innopath.wamp.notification": {
            source: "iana"
        },
        "application/vnd.insors.igm": {
            source: "iana",
            extensions: ["igm"]
        },
        "application/vnd.intercon.formnet": {
            source: "iana",
            extensions: ["xpw", "xpx"]
        },
        "application/vnd.intergeo": {
            source: "iana",
            extensions: ["i2g"]
        },
        "application/vnd.intertrust.digibox": {
            source: "iana"
        },
        "application/vnd.intertrust.nncp": {
            source: "iana"
        },
        "application/vnd.intu.qbo": {
            source: "iana",
            extensions: ["qbo"]
        },
        "application/vnd.intu.qfx": {
            source: "iana",
            extensions: ["qfx"]
        },
        "application/vnd.iptc.g2.catalogitem+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.conceptitem+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.knowledgeitem+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.newsitem+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.newsmessage+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.packageitem+xml": {
            source: "iana"
        },
        "application/vnd.iptc.g2.planningitem+xml": {
            source: "iana"
        },
        "application/vnd.ipunplugged.rcprofile": {
            source: "iana",
            extensions: ["rcprofile"]
        },
        "application/vnd.irepository.package+xml": {
            source: "iana",
            extensions: ["irp"]
        },
        "application/vnd.is-xpr": {
            source: "iana",
            extensions: ["xpr"]
        },
        "application/vnd.isac.fcs": {
            source: "iana",
            extensions: ["fcs"]
        },
        "application/vnd.jam": {
            source: "iana",
            extensions: ["jam"]
        },
        "application/vnd.japannet-directory-service": {
            source: "iana"
        },
        "application/vnd.japannet-jpnstore-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-payment-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-registration": {
            source: "iana"
        },
        "application/vnd.japannet-registration-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-setstore-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-verification": {
            source: "iana"
        },
        "application/vnd.japannet-verification-wakeup": {
            source: "iana"
        },
        "application/vnd.jcp.javame.midlet-rms": {
            source: "iana",
            extensions: ["rms"]
        },
        "application/vnd.jisp": {
            source: "iana",
            extensions: ["jisp"]
        },
        "application/vnd.joost.joda-archive": {
            source: "iana",
            extensions: ["joda"]
        },
        "application/vnd.jsk.isdn-ngn": {
            source: "iana"
        },
        "application/vnd.kahootz": {
            source: "iana",
            extensions: ["ktz", "ktr"]
        },
        "application/vnd.kde.karbon": {
            source: "iana",
            extensions: ["karbon"]
        },
        "application/vnd.kde.kchart": {
            source: "iana",
            extensions: ["chrt"]
        },
        "application/vnd.kde.kformula": {
            source: "iana",
            extensions: ["kfo"]
        },
        "application/vnd.kde.kivio": {
            source: "iana",
            extensions: ["flw"]
        },
        "application/vnd.kde.kontour": {
            source: "iana",
            extensions: ["kon"]
        },
        "application/vnd.kde.kpresenter": {
            source: "iana",
            extensions: ["kpr", "kpt"]
        },
        "application/vnd.kde.kspread": {
            source: "iana",
            extensions: ["ksp"]
        },
        "application/vnd.kde.kword": {
            source: "iana",
            extensions: ["kwd", "kwt"]
        },
        "application/vnd.kenameaapp": {
            source: "iana",
            extensions: ["htke"]
        },
        "application/vnd.kidspiration": {
            source: "iana",
            extensions: ["kia"]
        },
        "application/vnd.kinar": {
            source: "iana",
            extensions: ["kne", "knp"]
        },
        "application/vnd.koan": {
            source: "iana",
            extensions: ["skp", "skd", "skt", "skm"]
        },
        "application/vnd.kodak-descriptor": {
            source: "iana",
            extensions: ["sse"]
        },
        "application/vnd.las.las+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.las.las+xml": {
            source: "iana",
            extensions: ["lasxml"]
        },
        "application/vnd.liberty-request+xml": {
            source: "iana"
        },
        "application/vnd.llamagraphics.life-balance.desktop": {
            source: "iana",
            extensions: ["lbd"]
        },
        "application/vnd.llamagraphics.life-balance.exchange+xml": {
            source: "iana",
            extensions: ["lbe"]
        },
        "application/vnd.lotus-1-2-3": {
            source: "iana",
            extensions: ["123"]
        },
        "application/vnd.lotus-approach": {
            source: "iana",
            extensions: ["apr"]
        },
        "application/vnd.lotus-freelance": {
            source: "iana",
            extensions: ["pre"]
        },
        "application/vnd.lotus-notes": {
            source: "iana",
            extensions: ["nsf"]
        },
        "application/vnd.lotus-organizer": {
            source: "iana",
            extensions: ["org"]
        },
        "application/vnd.lotus-screencam": {
            source: "iana",
            extensions: ["scm"]
        },
        "application/vnd.lotus-wordpro": {
            source: "iana",
            extensions: ["lwp"]
        },
        "application/vnd.macports.portpkg": {
            source: "iana",
            extensions: ["portpkg"]
        },
        "application/vnd.mapbox-vector-tile": {
            source: "iana"
        },
        "application/vnd.marlin.drm.actiontoken+xml": {
            source: "iana"
        },
        "application/vnd.marlin.drm.conftoken+xml": {
            source: "iana"
        },
        "application/vnd.marlin.drm.license+xml": {
            source: "iana"
        },
        "application/vnd.marlin.drm.mdcf": {
            source: "iana"
        },
        "application/vnd.mason+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.maxmind.maxmind-db": {
            source: "iana"
        },
        "application/vnd.mcd": {
            source: "iana",
            extensions: ["mcd"]
        },
        "application/vnd.medcalcdata": {
            source: "iana",
            extensions: ["mc1"]
        },
        "application/vnd.mediastation.cdkey": {
            source: "iana",
            extensions: ["cdkey"]
        },
        "application/vnd.meridian-slingshot": {
            source: "iana"
        },
        "application/vnd.mfer": {
            source: "iana",
            extensions: ["mwf"]
        },
        "application/vnd.mfmp": {
            source: "iana",
            extensions: ["mfm"]
        },
        "application/vnd.micro+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.micrografx.flo": {
            source: "iana",
            extensions: ["flo"]
        },
        "application/vnd.micrografx.igx": {
            source: "iana",
            extensions: ["igx"]
        },
        "application/vnd.microsoft.portable-executable": {
            source: "iana"
        },
        "application/vnd.microsoft.windows.thumbnail-cache": {
            source: "iana"
        },
        "application/vnd.miele+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.mif": {
            source: "iana",
            extensions: ["mif"]
        },
        "application/vnd.minisoft-hp3000-save": {
            source: "iana"
        },
        "application/vnd.mitsubishi.misty-guard.trustweb": {
            source: "iana"
        },
        "application/vnd.mobius.daf": {
            source: "iana",
            extensions: ["daf"]
        },
        "application/vnd.mobius.dis": {
            source: "iana",
            extensions: ["dis"]
        },
        "application/vnd.mobius.mbk": {
            source: "iana",
            extensions: ["mbk"]
        },
        "application/vnd.mobius.mqy": {
            source: "iana",
            extensions: ["mqy"]
        },
        "application/vnd.mobius.msl": {
            source: "iana",
            extensions: ["msl"]
        },
        "application/vnd.mobius.plc": {
            source: "iana",
            extensions: ["plc"]
        },
        "application/vnd.mobius.txf": {
            source: "iana",
            extensions: ["txf"]
        },
        "application/vnd.mophun.application": {
            source: "iana",
            extensions: ["mpn"]
        },
        "application/vnd.mophun.certificate": {
            source: "iana",
            extensions: ["mpc"]
        },
        "application/vnd.motorola.flexsuite": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.adsi": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.fis": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.gotap": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.kmr": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.ttc": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.wem": {
            source: "iana"
        },
        "application/vnd.motorola.iprm": {
            source: "iana"
        },
        "application/vnd.mozilla.xul+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xul"]
        },
        "application/vnd.ms-3mfdocument": {
            source: "iana"
        },
        "application/vnd.ms-artgalry": {
            source: "iana",
            extensions: ["cil"]
        },
        "application/vnd.ms-asf": {
            source: "iana"
        },
        "application/vnd.ms-cab-compressed": {
            source: "iana",
            extensions: ["cab"]
        },
        "application/vnd.ms-color.iccprofile": {
            source: "apache"
        },
        "application/vnd.ms-excel": {
            source: "iana",
            compressible: !1,
            extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
        },
        "application/vnd.ms-excel.addin.macroenabled.12": {
            source: "iana",
            extensions: ["xlam"]
        },
        "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
            source: "iana",
            extensions: ["xlsb"]
        },
        "application/vnd.ms-excel.sheet.macroenabled.12": {
            source: "iana",
            extensions: ["xlsm"]
        },
        "application/vnd.ms-excel.template.macroenabled.12": {
            source: "iana",
            extensions: ["xltm"]
        },
        "application/vnd.ms-fontobject": {
            source: "iana",
            compressible: !0,
            extensions: ["eot"]
        },
        "application/vnd.ms-htmlhelp": {
            source: "iana",
            extensions: ["chm"]
        },
        "application/vnd.ms-ims": {
            source: "iana",
            extensions: ["ims"]
        },
        "application/vnd.ms-lrm": {
            source: "iana",
            extensions: ["lrm"]
        },
        "application/vnd.ms-office.activex+xml": {
            source: "iana"
        },
        "application/vnd.ms-officetheme": {
            source: "iana",
            extensions: ["thmx"]
        },
        "application/vnd.ms-opentype": {
            source: "apache",
            compressible: !0
        },
        "application/vnd.ms-outlook": {
            compressible: !1,
            extensions: ["msg"]
        },
        "application/vnd.ms-package.obfuscated-opentype": {
            source: "apache"
        },
        "application/vnd.ms-pki.seccat": {
            source: "apache",
            extensions: ["cat"]
        },
        "application/vnd.ms-pki.stl": {
            source: "apache",
            extensions: ["stl"]
        },
        "application/vnd.ms-playready.initiator+xml": {
            source: "iana"
        },
        "application/vnd.ms-powerpoint": {
            source: "iana",
            compressible: !1,
            extensions: ["ppt", "pps", "pot"]
        },
        "application/vnd.ms-powerpoint.addin.macroenabled.12": {
            source: "iana",
            extensions: ["ppam"]
        },
        "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
            source: "iana",
            extensions: ["pptm"]
        },
        "application/vnd.ms-powerpoint.slide.macroenabled.12": {
            source: "iana",
            extensions: ["sldm"]
        },
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
            source: "iana",
            extensions: ["ppsm"]
        },
        "application/vnd.ms-powerpoint.template.macroenabled.12": {
            source: "iana",
            extensions: ["potm"]
        },
        "application/vnd.ms-printdevicecapabilities+xml": {
            source: "iana"
        },
        "application/vnd.ms-printing.printticket+xml": {
            source: "apache"
        },
        "application/vnd.ms-printschematicket+xml": {
            source: "iana"
        },
        "application/vnd.ms-project": {
            source: "iana",
            extensions: ["mpp", "mpt"]
        },
        "application/vnd.ms-tnef": {
            source: "iana"
        },
        "application/vnd.ms-windows.devicepairing": {
            source: "iana"
        },
        "application/vnd.ms-windows.nwprinting.oob": {
            source: "iana"
        },
        "application/vnd.ms-windows.printerpairing": {
            source: "iana"
        },
        "application/vnd.ms-windows.wsd.oob": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.lic-chlg-req": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.lic-resp": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.meter-chlg-req": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.meter-resp": {
            source: "iana"
        },
        "application/vnd.ms-word.document.macroenabled.12": {
            source: "iana",
            extensions: ["docm"]
        },
        "application/vnd.ms-word.template.macroenabled.12": {
            source: "iana",
            extensions: ["dotm"]
        },
        "application/vnd.ms-works": {
            source: "iana",
            extensions: ["wps", "wks", "wcm", "wdb"]
        },
        "application/vnd.ms-wpl": {
            source: "iana",
            extensions: ["wpl"]
        },
        "application/vnd.ms-xpsdocument": {
            source: "iana",
            compressible: !1,
            extensions: ["xps"]
        },
        "application/vnd.msa-disk-image": {
            source: "iana"
        },
        "application/vnd.mseq": {
            source: "iana",
            extensions: ["mseq"]
        },
        "application/vnd.msign": {
            source: "iana"
        },
        "application/vnd.multiad.creator": {
            source: "iana"
        },
        "application/vnd.multiad.creator.cif": {
            source: "iana"
        },
        "application/vnd.music-niff": {
            source: "iana"
        },
        "application/vnd.musician": {
            source: "iana",
            extensions: ["mus"]
        },
        "application/vnd.muvee.style": {
            source: "iana",
            extensions: ["msty"]
        },
        "application/vnd.mynfc": {
            source: "iana",
            extensions: ["taglet"]
        },
        "application/vnd.ncd.control": {
            source: "iana"
        },
        "application/vnd.ncd.reference": {
            source: "iana"
        },
        "application/vnd.nearst.inv+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nervana": {
            source: "iana"
        },
        "application/vnd.netfpx": {
            source: "iana"
        },
        "application/vnd.neurolanguage.nlu": {
            source: "iana",
            extensions: ["nlu"]
        },
        "application/vnd.nintendo.nitro.rom": {
            source: "iana"
        },
        "application/vnd.nintendo.snes.rom": {
            source: "iana"
        },
        "application/vnd.nitf": {
            source: "iana",
            extensions: ["ntf", "nitf"]
        },
        "application/vnd.noblenet-directory": {
            source: "iana",
            extensions: ["nnd"]
        },
        "application/vnd.noblenet-sealer": {
            source: "iana",
            extensions: ["nns"]
        },
        "application/vnd.noblenet-web": {
            source: "iana",
            extensions: ["nnw"]
        },
        "application/vnd.nokia.catalogs": {
            source: "iana"
        },
        "application/vnd.nokia.conml+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.conml+xml": {
            source: "iana"
        },
        "application/vnd.nokia.iptv.config+xml": {
            source: "iana"
        },
        "application/vnd.nokia.isds-radio-presets": {
            source: "iana"
        },
        "application/vnd.nokia.landmark+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.landmark+xml": {
            source: "iana"
        },
        "application/vnd.nokia.landmarkcollection+xml": {
            source: "iana"
        },
        "application/vnd.nokia.n-gage.ac+xml": {
            source: "iana"
        },
        "application/vnd.nokia.n-gage.data": {
            source: "iana",
            extensions: ["ngdat"]
        },
        "application/vnd.nokia.n-gage.symbian.install": {
            source: "iana",
            extensions: ["n-gage"]
        },
        "application/vnd.nokia.ncd": {
            source: "iana"
        },
        "application/vnd.nokia.pcd+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.pcd+xml": {
            source: "iana"
        },
        "application/vnd.nokia.radio-preset": {
            source: "iana",
            extensions: ["rpst"]
        },
        "application/vnd.nokia.radio-presets": {
            source: "iana",
            extensions: ["rpss"]
        },
        "application/vnd.novadigm.edm": {
            source: "iana",
            extensions: ["edm"]
        },
        "application/vnd.novadigm.edx": {
            source: "iana",
            extensions: ["edx"]
        },
        "application/vnd.novadigm.ext": {
            source: "iana",
            extensions: ["ext"]
        },
        "application/vnd.ntt-local.content-share": {
            source: "iana"
        },
        "application/vnd.ntt-local.file-transfer": {
            source: "iana"
        },
        "application/vnd.ntt-local.ogw_remote-access": {
            source: "iana"
        },
        "application/vnd.ntt-local.sip-ta_remote": {
            source: "iana"
        },
        "application/vnd.ntt-local.sip-ta_tcp_stream": {
            source: "iana"
        },
        "application/vnd.oasis.opendocument.chart": {
            source: "iana",
            extensions: ["odc"]
        },
        "application/vnd.oasis.opendocument.chart-template": {
            source: "iana",
            extensions: ["otc"]
        },
        "application/vnd.oasis.opendocument.database": {
            source: "iana",
            extensions: ["odb"]
        },
        "application/vnd.oasis.opendocument.formula": {
            source: "iana",
            extensions: ["odf"]
        },
        "application/vnd.oasis.opendocument.formula-template": {
            source: "iana",
            extensions: ["odft"]
        },
        "application/vnd.oasis.opendocument.graphics": {
            source: "iana",
            compressible: !1,
            extensions: ["odg"]
        },
        "application/vnd.oasis.opendocument.graphics-template": {
            source: "iana",
            extensions: ["otg"]
        },
        "application/vnd.oasis.opendocument.image": {
            source: "iana",
            extensions: ["odi"]
        },
        "application/vnd.oasis.opendocument.image-template": {
            source: "iana",
            extensions: ["oti"]
        },
        "application/vnd.oasis.opendocument.presentation": {
            source: "iana",
            compressible: !1,
            extensions: ["odp"]
        },
        "application/vnd.oasis.opendocument.presentation-template": {
            source: "iana",
            extensions: ["otp"]
        },
        "application/vnd.oasis.opendocument.spreadsheet": {
            source: "iana",
            compressible: !1,
            extensions: ["ods"]
        },
        "application/vnd.oasis.opendocument.spreadsheet-template": {
            source: "iana",
            extensions: ["ots"]
        },
        "application/vnd.oasis.opendocument.text": {
            source: "iana",
            compressible: !1,
            extensions: ["odt"]
        },
        "application/vnd.oasis.opendocument.text-master": {
            source: "iana",
            extensions: ["odm"]
        },
        "application/vnd.oasis.opendocument.text-template": {
            source: "iana",
            extensions: ["ott"]
        },
        "application/vnd.oasis.opendocument.text-web": {
            source: "iana",
            extensions: ["oth"]
        },
        "application/vnd.obn": {
            source: "iana"
        },
        "application/vnd.ocf+cbor": {
            source: "iana"
        },
        "application/vnd.oftn.l10n+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.contentaccessdownload+xml": {
            source: "iana"
        },
        "application/vnd.oipf.contentaccessstreaming+xml": {
            source: "iana"
        },
        "application/vnd.oipf.cspg-hexbinary": {
            source: "iana"
        },
        "application/vnd.oipf.dae.svg+xml": {
            source: "iana"
        },
        "application/vnd.oipf.dae.xhtml+xml": {
            source: "iana"
        },
        "application/vnd.oipf.mippvcontrolmessage+xml": {
            source: "iana"
        },
        "application/vnd.oipf.pae.gem": {
            source: "iana"
        },
        "application/vnd.oipf.spdiscovery+xml": {
            source: "iana"
        },
        "application/vnd.oipf.spdlist+xml": {
            source: "iana"
        },
        "application/vnd.oipf.ueprofile+xml": {
            source: "iana"
        },
        "application/vnd.oipf.userprofile+xml": {
            source: "iana"
        },
        "application/vnd.olpc-sugar": {
            source: "iana",
            extensions: ["xo"]
        },
        "application/vnd.oma-scws-config": {
            source: "iana"
        },
        "application/vnd.oma-scws-http-request": {
            source: "iana"
        },
        "application/vnd.oma-scws-http-response": {
            source: "iana"
        },
        "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.drm-trigger+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.imd+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.ltkm": {
            source: "iana"
        },
        "application/vnd.oma.bcast.notification+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.provisioningtrigger": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sgboot": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sgdd+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sgdu": {
            source: "iana"
        },
        "application/vnd.oma.bcast.simple-symbol-container": {
            source: "iana"
        },
        "application/vnd.oma.bcast.smartcard-trigger+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sprov+xml": {
            source: "iana"
        },
        "application/vnd.oma.bcast.stkm": {
            source: "iana"
        },
        "application/vnd.oma.cab-address-book+xml": {
            source: "iana"
        },
        "application/vnd.oma.cab-feature-handler+xml": {
            source: "iana"
        },
        "application/vnd.oma.cab-pcc+xml": {
            source: "iana"
        },
        "application/vnd.oma.cab-subs-invite+xml": {
            source: "iana"
        },
        "application/vnd.oma.cab-user-prefs+xml": {
            source: "iana"
        },
        "application/vnd.oma.dcd": {
            source: "iana"
        },
        "application/vnd.oma.dcdc": {
            source: "iana"
        },
        "application/vnd.oma.dd2+xml": {
            source: "iana",
            extensions: ["dd2"]
        },
        "application/vnd.oma.drm.risd+xml": {
            source: "iana"
        },
        "application/vnd.oma.group-usage-list+xml": {
            source: "iana"
        },
        "application/vnd.oma.lwm2m+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.lwm2m+tlv": {
            source: "iana"
        },
        "application/vnd.oma.pal+xml": {
            source: "iana"
        },
        "application/vnd.oma.poc.detailed-progress-report+xml": {
            source: "iana"
        },
        "application/vnd.oma.poc.final-report+xml": {
            source: "iana"
        },
        "application/vnd.oma.poc.groups+xml": {
            source: "iana"
        },
        "application/vnd.oma.poc.invocation-descriptor+xml": {
            source: "iana"
        },
        "application/vnd.oma.poc.optimized-progress-report+xml": {
            source: "iana"
        },
        "application/vnd.oma.push": {
            source: "iana"
        },
        "application/vnd.oma.scidm.messages+xml": {
            source: "iana"
        },
        "application/vnd.oma.xcap-directory+xml": {
            source: "iana"
        },
        "application/vnd.omads-email+xml": {
            source: "iana"
        },
        "application/vnd.omads-file+xml": {
            source: "iana"
        },
        "application/vnd.omads-folder+xml": {
            source: "iana"
        },
        "application/vnd.omaloc-supl-init": {
            source: "iana"
        },
        "application/vnd.onepager": {
            source: "iana"
        },
        "application/vnd.onepagertamp": {
            source: "iana"
        },
        "application/vnd.onepagertamx": {
            source: "iana"
        },
        "application/vnd.onepagertat": {
            source: "iana"
        },
        "application/vnd.onepagertatp": {
            source: "iana"
        },
        "application/vnd.onepagertatx": {
            source: "iana"
        },
        "application/vnd.openblox.game+xml": {
            source: "iana"
        },
        "application/vnd.openblox.game-binary": {
            source: "iana"
        },
        "application/vnd.openeye.oeb": {
            source: "iana"
        },
        "application/vnd.openofficeorg.extension": {
            source: "apache",
            extensions: ["oxt"]
        },
        "application/vnd.openstreetmap.data+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawing+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml-template": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
            source: "iana",
            compressible: !1,
            extensions: ["pptx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slide": {
            source: "iana",
            extensions: ["sldx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
            source: "iana",
            extensions: ["ppsx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.template": {
            source: "apache",
            extensions: ["potx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml-template": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            source: "iana",
            compressible: !1,
            extensions: ["xlsx"]
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
            source: "apache",
            extensions: ["xltx"]
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.theme+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.vmldrawing": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml-template": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
            source: "iana",
            compressible: !1,
            extensions: ["docx"]
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
            source: "apache",
            extensions: ["dotx"]
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-package.core-properties+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
            source: "iana"
        },
        "application/vnd.openxmlformats-package.relationships+xml": {
            source: "iana"
        },
        "application/vnd.oracle.resource+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.orange.indata": {
            source: "iana"
        },
        "application/vnd.osa.netdeploy": {
            source: "iana"
        },
        "application/vnd.osgeo.mapguide.package": {
            source: "iana",
            extensions: ["mgp"]
        },
        "application/vnd.osgi.bundle": {
            source: "iana"
        },
        "application/vnd.osgi.dp": {
            source: "iana",
            extensions: ["dp"]
        },
        "application/vnd.osgi.subsystem": {
            source: "iana",
            extensions: ["esa"]
        },
        "application/vnd.otps.ct-kip+xml": {
            source: "iana"
        },
        "application/vnd.oxli.countgraph": {
            source: "iana"
        },
        "application/vnd.pagerduty+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.palm": {
            source: "iana",
            extensions: ["pdb", "pqa", "oprc"]
        },
        "application/vnd.panoply": {
            source: "iana"
        },
        "application/vnd.paos+xml": {
            source: "iana"
        },
        "application/vnd.paos.xml": {
            source: "apache"
        },
        "application/vnd.pawaafile": {
            source: "iana",
            extensions: ["paw"]
        },
        "application/vnd.pcos": {
            source: "iana"
        },
        "application/vnd.pg.format": {
            source: "iana",
            extensions: ["str"]
        },
        "application/vnd.pg.osasli": {
            source: "iana",
            extensions: ["ei6"]
        },
        "application/vnd.piaccess.application-licence": {
            source: "iana"
        },
        "application/vnd.picsel": {
            source: "iana",
            extensions: ["efif"]
        },
        "application/vnd.pmi.widget": {
            source: "iana",
            extensions: ["wg"]
        },
        "application/vnd.poc.group-advertisement+xml": {
            source: "iana"
        },
        "application/vnd.pocketlearn": {
            source: "iana",
            extensions: ["plf"]
        },
        "application/vnd.powerbuilder6": {
            source: "iana",
            extensions: ["pbd"]
        },
        "application/vnd.powerbuilder6-s": {
            source: "iana"
        },
        "application/vnd.powerbuilder7": {
            source: "iana"
        },
        "application/vnd.powerbuilder7-s": {
            source: "iana"
        },
        "application/vnd.powerbuilder75": {
            source: "iana"
        },
        "application/vnd.powerbuilder75-s": {
            source: "iana"
        },
        "application/vnd.preminet": {
            source: "iana"
        },
        "application/vnd.previewsystems.box": {
            source: "iana",
            extensions: ["box"]
        },
        "application/vnd.proteus.magazine": {
            source: "iana",
            extensions: ["mgz"]
        },
        "application/vnd.publishare-delta-tree": {
            source: "iana",
            extensions: ["qps"]
        },
        "application/vnd.pvi.ptid1": {
            source: "iana",
            extensions: ["ptid"]
        },
        "application/vnd.pwg-multiplexed": {
            source: "iana"
        },
        "application/vnd.pwg-xhtml-print+xml": {
            source: "iana"
        },
        "application/vnd.qualcomm.brew-app-res": {
            source: "iana"
        },
        "application/vnd.quarantainenet": {
            source: "iana"
        },
        "application/vnd.quark.quarkxpress": {
            source: "iana",
            extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
        },
        "application/vnd.quobject-quoxdocument": {
            source: "iana"
        },
        "application/vnd.radisys.moml+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-audit+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-audit-conf+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-audit-conn+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-audit-dialog+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-audit-stream+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-conf+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-base+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-fax-detect+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-group+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-speech+xml": {
            source: "iana"
        },
        "application/vnd.radisys.msml-dialog-transform+xml": {
            source: "iana"
        },
        "application/vnd.rainstor.data": {
            source: "iana"
        },
        "application/vnd.rapid": {
            source: "iana"
        },
        "application/vnd.rar": {
            source: "iana"
        },
        "application/vnd.realvnc.bed": {
            source: "iana",
            extensions: ["bed"]
        },
        "application/vnd.recordare.musicxml": {
            source: "iana",
            extensions: ["mxl"]
        },
        "application/vnd.recordare.musicxml+xml": {
            source: "iana",
            extensions: ["musicxml"]
        },
        "application/vnd.renlearn.rlprint": {
            source: "iana"
        },
        "application/vnd.rig.cryptonote": {
            source: "iana",
            extensions: ["cryptonote"]
        },
        "application/vnd.rim.cod": {
            source: "apache",
            extensions: ["cod"]
        },
        "application/vnd.rn-realmedia": {
            source: "apache",
            extensions: ["rm"]
        },
        "application/vnd.rn-realmedia-vbr": {
            source: "apache",
            extensions: ["rmvb"]
        },
        "application/vnd.route66.link66+xml": {
            source: "iana",
            extensions: ["link66"]
        },
        "application/vnd.rs-274x": {
            source: "iana"
        },
        "application/vnd.ruckus.download": {
            source: "iana"
        },
        "application/vnd.s3sms": {
            source: "iana"
        },
        "application/vnd.sailingtracker.track": {
            source: "iana",
            extensions: ["st"]
        },
        "application/vnd.sbm.cid": {
            source: "iana"
        },
        "application/vnd.sbm.mid2": {
            source: "iana"
        },
        "application/vnd.scribus": {
            source: "iana"
        },
        "application/vnd.sealed.3df": {
            source: "iana"
        },
        "application/vnd.sealed.csf": {
            source: "iana"
        },
        "application/vnd.sealed.doc": {
            source: "iana"
        },
        "application/vnd.sealed.eml": {
            source: "iana"
        },
        "application/vnd.sealed.mht": {
            source: "iana"
        },
        "application/vnd.sealed.net": {
            source: "iana"
        },
        "application/vnd.sealed.ppt": {
            source: "iana"
        },
        "application/vnd.sealed.tiff": {
            source: "iana"
        },
        "application/vnd.sealed.xls": {
            source: "iana"
        },
        "application/vnd.sealedmedia.softseal.html": {
            source: "iana"
        },
        "application/vnd.sealedmedia.softseal.pdf": {
            source: "iana"
        },
        "application/vnd.seemail": {
            source: "iana",
            extensions: ["see"]
        },
        "application/vnd.sema": {
            source: "iana",
            extensions: ["sema"]
        },
        "application/vnd.semd": {
            source: "iana",
            extensions: ["semd"]
        },
        "application/vnd.semf": {
            source: "iana",
            extensions: ["semf"]
        },
        "application/vnd.shana.informed.formdata": {
            source: "iana",
            extensions: ["ifm"]
        },
        "application/vnd.shana.informed.formtemplate": {
            source: "iana",
            extensions: ["itp"]
        },
        "application/vnd.shana.informed.interchange": {
            source: "iana",
            extensions: ["iif"]
        },
        "application/vnd.shana.informed.package": {
            source: "iana",
            extensions: ["ipk"]
        },
        "application/vnd.sigrok.session": {
            source: "iana"
        },
        "application/vnd.simtech-mindmapper": {
            source: "iana",
            extensions: ["twd", "twds"]
        },
        "application/vnd.siren+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.smaf": {
            source: "iana",
            extensions: ["mmf"]
        },
        "application/vnd.smart.notebook": {
            source: "iana"
        },
        "application/vnd.smart.teacher": {
            source: "iana",
            extensions: ["teacher"]
        },
        "application/vnd.software602.filler.form+xml": {
            source: "iana"
        },
        "application/vnd.software602.filler.form-xml-zip": {
            source: "iana"
        },
        "application/vnd.solent.sdkm+xml": {
            source: "iana",
            extensions: ["sdkm", "sdkd"]
        },
        "application/vnd.spotfire.dxp": {
            source: "iana",
            extensions: ["dxp"]
        },
        "application/vnd.spotfire.sfs": {
            source: "iana",
            extensions: ["sfs"]
        },
        "application/vnd.sss-cod": {
            source: "iana"
        },
        "application/vnd.sss-dtf": {
            source: "iana"
        },
        "application/vnd.sss-ntf": {
            source: "iana"
        },
        "application/vnd.stardivision.calc": {
            source: "apache",
            extensions: ["sdc"]
        },
        "application/vnd.stardivision.draw": {
            source: "apache",
            extensions: ["sda"]
        },
        "application/vnd.stardivision.impress": {
            source: "apache",
            extensions: ["sdd"]
        },
        "application/vnd.stardivision.math": {
            source: "apache",
            extensions: ["smf"]
        },
        "application/vnd.stardivision.writer": {
            source: "apache",
            extensions: ["sdw", "vor"]
        },
        "application/vnd.stardivision.writer-global": {
            source: "apache",
            extensions: ["sgl"]
        },
        "application/vnd.stepmania.package": {
            source: "iana",
            extensions: ["smzip"]
        },
        "application/vnd.stepmania.stepchart": {
            source: "iana",
            extensions: ["sm"]
        },
        "application/vnd.street-stream": {
            source: "iana"
        },
        "application/vnd.sun.wadl+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wadl"]
        },
        "application/vnd.sun.xml.calc": {
            source: "apache",
            extensions: ["sxc"]
        },
        "application/vnd.sun.xml.calc.template": {
            source: "apache",
            extensions: ["stc"]
        },
        "application/vnd.sun.xml.draw": {
            source: "apache",
            extensions: ["sxd"]
        },
        "application/vnd.sun.xml.draw.template": {
            source: "apache",
            extensions: ["std"]
        },
        "application/vnd.sun.xml.impress": {
            source: "apache",
            extensions: ["sxi"]
        },
        "application/vnd.sun.xml.impress.template": {
            source: "apache",
            extensions: ["sti"]
        },
        "application/vnd.sun.xml.math": {
            source: "apache",
            extensions: ["sxm"]
        },
        "application/vnd.sun.xml.writer": {
            source: "apache",
            extensions: ["sxw"]
        },
        "application/vnd.sun.xml.writer.global": {
            source: "apache",
            extensions: ["sxg"]
        },
        "application/vnd.sun.xml.writer.template": {
            source: "apache",
            extensions: ["stw"]
        },
        "application/vnd.sus-calendar": {
            source: "iana",
            extensions: ["sus", "susp"]
        },
        "application/vnd.svd": {
            source: "iana",
            extensions: ["svd"]
        },
        "application/vnd.swiftview-ics": {
            source: "iana"
        },
        "application/vnd.symbian.install": {
            source: "apache",
            extensions: ["sis", "sisx"]
        },
        "application/vnd.syncml+xml": {
            source: "iana",
            extensions: ["xsm"]
        },
        "application/vnd.syncml.dm+wbxml": {
            source: "iana",
            extensions: ["bdm"]
        },
        "application/vnd.syncml.dm+xml": {
            source: "iana",
            extensions: ["xdm"]
        },
        "application/vnd.syncml.dm.notification": {
            source: "iana"
        },
        "application/vnd.syncml.dmddf+wbxml": {
            source: "iana"
        },
        "application/vnd.syncml.dmddf+xml": {
            source: "iana"
        },
        "application/vnd.syncml.dmtnds+wbxml": {
            source: "iana"
        },
        "application/vnd.syncml.dmtnds+xml": {
            source: "iana"
        },
        "application/vnd.syncml.ds.notification": {
            source: "iana"
        },
        "application/vnd.tableschema+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.tao.intent-module-archive": {
            source: "iana",
            extensions: ["tao"]
        },
        "application/vnd.tcpdump.pcap": {
            source: "iana",
            extensions: ["pcap", "cap", "dmp"]
        },
        "application/vnd.tmd.mediaflex.api+xml": {
            source: "iana"
        },
        "application/vnd.tml": {
            source: "iana"
        },
        "application/vnd.tmobile-livetv": {
            source: "iana",
            extensions: ["tmo"]
        },
        "application/vnd.tri.onesource": {
            source: "iana"
        },
        "application/vnd.trid.tpt": {
            source: "iana",
            extensions: ["tpt"]
        },
        "application/vnd.triscape.mxs": {
            source: "iana",
            extensions: ["mxs"]
        },
        "application/vnd.trueapp": {
            source: "iana",
            extensions: ["tra"]
        },
        "application/vnd.truedoc": {
            source: "iana"
        },
        "application/vnd.ubisoft.webplayer": {
            source: "iana"
        },
        "application/vnd.ufdl": {
            source: "iana",
            extensions: ["ufd", "ufdl"]
        },
        "application/vnd.uiq.theme": {
            source: "iana",
            extensions: ["utz"]
        },
        "application/vnd.umajin": {
            source: "iana",
            extensions: ["umj"]
        },
        "application/vnd.unity": {
            source: "iana",
            extensions: ["unityweb"]
        },
        "application/vnd.uoml+xml": {
            source: "iana",
            extensions: ["uoml"]
        },
        "application/vnd.uplanet.alert": {
            source: "iana"
        },
        "application/vnd.uplanet.alert-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.bearer-choice": {
            source: "iana"
        },
        "application/vnd.uplanet.bearer-choice-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.cacheop": {
            source: "iana"
        },
        "application/vnd.uplanet.cacheop-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.channel": {
            source: "iana"
        },
        "application/vnd.uplanet.channel-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.list": {
            source: "iana"
        },
        "application/vnd.uplanet.list-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.listcmd": {
            source: "iana"
        },
        "application/vnd.uplanet.listcmd-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.signal": {
            source: "iana"
        },
        "application/vnd.uri-map": {
            source: "iana"
        },
        "application/vnd.valve.source.material": {
            source: "iana"
        },
        "application/vnd.vcx": {
            source: "iana",
            extensions: ["vcx"]
        },
        "application/vnd.vd-study": {
            source: "iana"
        },
        "application/vnd.vectorworks": {
            source: "iana"
        },
        "application/vnd.vel+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.verimatrix.vcas": {
            source: "iana"
        },
        "application/vnd.vidsoft.vidconference": {
            source: "iana"
        },
        "application/vnd.visio": {
            source: "iana",
            extensions: ["vsd", "vst", "vss", "vsw"]
        },
        "application/vnd.visionary": {
            source: "iana",
            extensions: ["vis"]
        },
        "application/vnd.vividence.scriptfile": {
            source: "iana"
        },
        "application/vnd.vsf": {
            source: "iana",
            extensions: ["vsf"]
        },
        "application/vnd.wap.sic": {
            source: "iana"
        },
        "application/vnd.wap.slc": {
            source: "iana"
        },
        "application/vnd.wap.wbxml": {
            source: "iana",
            extensions: ["wbxml"]
        },
        "application/vnd.wap.wmlc": {
            source: "iana",
            extensions: ["wmlc"]
        },
        "application/vnd.wap.wmlscriptc": {
            source: "iana",
            extensions: ["wmlsc"]
        },
        "application/vnd.webturbo": {
            source: "iana",
            extensions: ["wtb"]
        },
        "application/vnd.wfa.p2p": {
            source: "iana"
        },
        "application/vnd.wfa.wsc": {
            source: "iana"
        },
        "application/vnd.windows.devicepairing": {
            source: "iana"
        },
        "application/vnd.wmc": {
            source: "iana"
        },
        "application/vnd.wmf.bootstrap": {
            source: "iana"
        },
        "application/vnd.wolfram.mathematica": {
            source: "iana"
        },
        "application/vnd.wolfram.mathematica.package": {
            source: "iana"
        },
        "application/vnd.wolfram.player": {
            source: "iana",
            extensions: ["nbp"]
        },
        "application/vnd.wordperfect": {
            source: "iana",
            extensions: ["wpd"]
        },
        "application/vnd.wqd": {
            source: "iana",
            extensions: ["wqd"]
        },
        "application/vnd.wrq-hp3000-labelled": {
            source: "iana"
        },
        "application/vnd.wt.stf": {
            source: "iana",
            extensions: ["stf"]
        },
        "application/vnd.wv.csp+wbxml": {
            source: "iana"
        },
        "application/vnd.wv.csp+xml": {
            source: "iana"
        },
        "application/vnd.wv.ssp+xml": {
            source: "iana"
        },
        "application/vnd.xacml+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.xara": {
            source: "iana",
            extensions: ["xar"]
        },
        "application/vnd.xfdl": {
            source: "iana",
            extensions: ["xfdl"]
        },
        "application/vnd.xfdl.webform": {
            source: "iana"
        },
        "application/vnd.xmi+xml": {
            source: "iana"
        },
        "application/vnd.xmpie.cpkg": {
            source: "iana"
        },
        "application/vnd.xmpie.dpkg": {
            source: "iana"
        },
        "application/vnd.xmpie.plan": {
            source: "iana"
        },
        "application/vnd.xmpie.ppkg": {
            source: "iana"
        },
        "application/vnd.xmpie.xlim": {
            source: "iana"
        },
        "application/vnd.yamaha.hv-dic": {
            source: "iana",
            extensions: ["hvd"]
        },
        "application/vnd.yamaha.hv-script": {
            source: "iana",
            extensions: ["hvs"]
        },
        "application/vnd.yamaha.hv-voice": {
            source: "iana",
            extensions: ["hvp"]
        },
        "application/vnd.yamaha.openscoreformat": {
            source: "iana",
            extensions: ["osf"]
        },
        "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
            source: "iana",
            extensions: ["osfpvg"]
        },
        "application/vnd.yamaha.remote-setup": {
            source: "iana"
        },
        "application/vnd.yamaha.smaf-audio": {
            source: "iana",
            extensions: ["saf"]
        },
        "application/vnd.yamaha.smaf-phrase": {
            source: "iana",
            extensions: ["spf"]
        },
        "application/vnd.yamaha.through-ngn": {
            source: "iana"
        },
        "application/vnd.yamaha.tunnel-udpencap": {
            source: "iana"
        },
        "application/vnd.yaoweme": {
            source: "iana"
        },
        "application/vnd.yellowriver-custom-menu": {
            source: "iana",
            extensions: ["cmp"]
        },
        "application/vnd.zul": {
            source: "iana",
            extensions: ["zir", "zirz"]
        },
        "application/vnd.zzazz.deck+xml": {
            source: "iana",
            extensions: ["zaz"]
        },
        "application/voicexml+xml": {
            source: "iana",
            extensions: ["vxml"]
        },
        "application/vq-rtcpxr": {
            source: "iana"
        },
        "application/watcherinfo+xml": {
            source: "iana"
        },
        "application/whoispp-query": {
            source: "iana"
        },
        "application/whoispp-response": {
            source: "iana"
        },
        "application/widget": {
            source: "iana",
            extensions: ["wgt"]
        },
        "application/winhlp": {
            source: "apache",
            extensions: ["hlp"]
        },
        "application/wita": {
            source: "iana"
        },
        "application/wordperfect5.1": {
            source: "iana"
        },
        "application/wsdl+xml": {
            source: "iana",
            extensions: ["wsdl"]
        },
        "application/wspolicy+xml": {
            source: "iana",
            extensions: ["wspolicy"]
        },
        "application/x-7z-compressed": {
            source: "apache",
            compressible: !1,
            extensions: ["7z"]
        },
        "application/x-abiword": {
            source: "apache",
            extensions: ["abw"]
        },
        "application/x-ace-compressed": {
            source: "apache",
            extensions: ["ace"]
        },
        "application/x-amf": {
            source: "apache"
        },
        "application/x-apple-diskimage": {
            source: "apache",
            extensions: ["dmg"]
        },
        "application/x-arj": {
            compressible: !1,
            extensions: ["arj"]
        },
        "application/x-authorware-bin": {
            source: "apache",
            extensions: ["aab", "x32", "u32", "vox"]
        },
        "application/x-authorware-map": {
            source: "apache",
            extensions: ["aam"]
        },
        "application/x-authorware-seg": {
            source: "apache",
            extensions: ["aas"]
        },
        "application/x-bcpio": {
            source: "apache",
            extensions: ["bcpio"]
        },
        "application/x-bdoc": {
            compressible: !1,
            extensions: ["bdoc"]
        },
        "application/x-bittorrent": {
            source: "apache",
            extensions: ["torrent"]
        },
        "application/x-blorb": {
            source: "apache",
            extensions: ["blb", "blorb"]
        },
        "application/x-bzip": {
            source: "apache",
            compressible: !1,
            extensions: ["bz"]
        },
        "application/x-bzip2": {
            source: "apache",
            compressible: !1,
            extensions: ["bz2", "boz"]
        },
        "application/x-cbr": {
            source: "apache",
            extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
        },
        "application/x-cdlink": {
            source: "apache",
            extensions: ["vcd"]
        },
        "application/x-cfs-compressed": {
            source: "apache",
            extensions: ["cfs"]
        },
        "application/x-chat": {
            source: "apache",
            extensions: ["chat"]
        },
        "application/x-chess-pgn": {
            source: "apache",
            extensions: ["pgn"]
        },
        "application/x-chrome-extension": {
            extensions: ["crx"]
        },
        "application/x-cocoa": {
            source: "nginx",
            extensions: ["cco"]
        },
        "application/x-compress": {
            source: "apache"
        },
        "application/x-conference": {
            source: "apache",
            extensions: ["nsc"]
        },
        "application/x-cpio": {
            source: "apache",
            extensions: ["cpio"]
        },
        "application/x-csh": {
            source: "apache",
            extensions: ["csh"]
        },
        "application/x-deb": {
            compressible: !1
        },
        "application/x-debian-package": {
            source: "apache",
            extensions: ["deb", "udeb"]
        },
        "application/x-dgc-compressed": {
            source: "apache",
            extensions: ["dgc"]
        },
        "application/x-director": {
            source: "apache",
            extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
        },
        "application/x-doom": {
            source: "apache",
            extensions: ["wad"]
        },
        "application/x-dtbncx+xml": {
            source: "apache",
            extensions: ["ncx"]
        },
        "application/x-dtbook+xml": {
            source: "apache",
            extensions: ["dtb"]
        },
        "application/x-dtbresource+xml": {
            source: "apache",
            extensions: ["res"]
        },
        "application/x-dvi": {
            source: "apache",
            compressible: !1,
            extensions: ["dvi"]
        },
        "application/x-envoy": {
            source: "apache",
            extensions: ["evy"]
        },
        "application/x-eva": {
            source: "apache",
            extensions: ["eva"]
        },
        "application/x-font-bdf": {
            source: "apache",
            extensions: ["bdf"]
        },
        "application/x-font-dos": {
            source: "apache"
        },
        "application/x-font-framemaker": {
            source: "apache"
        },
        "application/x-font-ghostscript": {
            source: "apache",
            extensions: ["gsf"]
        },
        "application/x-font-libgrx": {
            source: "apache"
        },
        "application/x-font-linux-psf": {
            source: "apache",
            extensions: ["psf"]
        },
        "application/x-font-otf": {
            source: "apache",
            compressible: !0,
            extensions: ["otf"]
        },
        "application/x-font-pcf": {
            source: "apache",
            extensions: ["pcf"]
        },
        "application/x-font-snf": {
            source: "apache",
            extensions: ["snf"]
        },
        "application/x-font-speedo": {
            source: "apache"
        },
        "application/x-font-sunos-news": {
            source: "apache"
        },
        "application/x-font-ttf": {
            source: "apache",
            compressible: !0,
            extensions: ["ttf", "ttc"]
        },
        "application/x-font-type1": {
            source: "apache",
            extensions: ["pfa", "pfb", "pfm", "afm"]
        },
        "application/x-font-vfont": {
            source: "apache"
        },
        "application/x-freearc": {
            source: "apache",
            extensions: ["arc"]
        },
        "application/x-futuresplash": {
            source: "apache",
            extensions: ["spl"]
        },
        "application/x-gca-compressed": {
            source: "apache",
            extensions: ["gca"]
        },
        "application/x-glulx": {
            source: "apache",
            extensions: ["ulx"]
        },
        "application/x-gnumeric": {
            source: "apache",
            extensions: ["gnumeric"]
        },
        "application/x-gramps-xml": {
            source: "apache",
            extensions: ["gramps"]
        },
        "application/x-gtar": {
            source: "apache",
            extensions: ["gtar"]
        },
        "application/x-gzip": {
            source: "apache"
        },
        "application/x-hdf": {
            source: "apache",
            extensions: ["hdf"]
        },
        "application/x-httpd-php": {
            compressible: !0,
            extensions: ["php"]
        },
        "application/x-install-instructions": {
            source: "apache",
            extensions: ["install"]
        },
        "application/x-iso9660-image": {
            source: "apache",
            extensions: ["iso"]
        },
        "application/x-java-archive-diff": {
            source: "nginx",
            extensions: ["jardiff"]
        },
        "application/x-java-jnlp-file": {
            source: "apache",
            compressible: !1,
            extensions: ["jnlp"]
        },
        "application/x-javascript": {
            compressible: !0
        },
        "application/x-latex": {
            source: "apache",
            compressible: !1,
            extensions: ["latex"]
        },
        "application/x-lua-bytecode": {
            extensions: ["luac"]
        },
        "application/x-lzh-compressed": {
            source: "apache",
            extensions: ["lzh", "lha"]
        },
        "application/x-makeself": {
            source: "nginx",
            extensions: ["run"]
        },
        "application/x-mie": {
            source: "apache",
            extensions: ["mie"]
        },
        "application/x-mobipocket-ebook": {
            source: "apache",
            extensions: ["prc", "mobi"]
        },
        "application/x-mpegurl": {
            compressible: !1
        },
        "application/x-ms-application": {
            source: "apache",
            extensions: ["application"]
        },
        "application/x-ms-shortcut": {
            source: "apache",
            extensions: ["lnk"]
        },
        "application/x-ms-wmd": {
            source: "apache",
            extensions: ["wmd"]
        },
        "application/x-ms-wmz": {
            source: "apache",
            extensions: ["wmz"]
        },
        "application/x-ms-xbap": {
            source: "apache",
            extensions: ["xbap"]
        },
        "application/x-msaccess": {
            source: "apache",
            extensions: ["mdb"]
        },
        "application/x-msbinder": {
            source: "apache",
            extensions: ["obd"]
        },
        "application/x-mscardfile": {
            source: "apache",
            extensions: ["crd"]
        },
        "application/x-msclip": {
            source: "apache",
            extensions: ["clp"]
        },
        "application/x-msdos-program": {
            extensions: ["exe"]
        },
        "application/x-msdownload": {
            source: "apache",
            extensions: ["exe", "dll", "com", "bat", "msi"]
        },
        "application/x-msmediaview": {
            source: "apache",
            extensions: ["mvb", "m13", "m14"]
        },
        "application/x-msmetafile": {
            source: "apache",
            extensions: ["wmf", "wmz", "emf", "emz"]
        },
        "application/x-msmoney": {
            source: "apache",
            extensions: ["mny"]
        },
        "application/x-mspublisher": {
            source: "apache",
            extensions: ["pub"]
        },
        "application/x-msschedule": {
            source: "apache",
            extensions: ["scd"]
        },
        "application/x-msterminal": {
            source: "apache",
            extensions: ["trm"]
        },
        "application/x-mswrite": {
            source: "apache",
            extensions: ["wri"]
        },
        "application/x-netcdf": {
            source: "apache",
            extensions: ["nc", "cdf"]
        },
        "application/x-ns-proxy-autoconfig": {
            compressible: !0,
            extensions: ["pac"]
        },
        "application/x-nzb": {
            source: "apache",
            extensions: ["nzb"]
        },
        "application/x-perl": {
            source: "nginx",
            extensions: ["pl", "pm"]
        },
        "application/x-pilot": {
            source: "nginx",
            extensions: ["prc", "pdb"]
        },
        "application/x-pkcs12": {
            source: "apache",
            compressible: !1,
            extensions: ["p12", "pfx"]
        },
        "application/x-pkcs7-certificates": {
            source: "apache",
            extensions: ["p7b", "spc"]
        },
        "application/x-pkcs7-certreqresp": {
            source: "apache",
            extensions: ["p7r"]
        },
        "application/x-rar-compressed": {
            source: "apache",
            compressible: !1,
            extensions: ["rar"]
        },
        "application/x-redhat-package-manager": {
            source: "nginx",
            extensions: ["rpm"]
        },
        "application/x-research-info-systems": {
            source: "apache",
            extensions: ["ris"]
        },
        "application/x-sea": {
            source: "nginx",
            extensions: ["sea"]
        },
        "application/x-sh": {
            source: "apache",
            compressible: !0,
            extensions: ["sh"]
        },
        "application/x-shar": {
            source: "apache",
            extensions: ["shar"]
        },
        "application/x-shockwave-flash": {
            source: "apache",
            compressible: !1,
            extensions: ["swf"]
        },
        "application/x-silverlight-app": {
            source: "apache",
            extensions: ["xap"]
        },
        "application/x-sql": {
            source: "apache",
            extensions: ["sql"]
        },
        "application/x-stuffit": {
            source: "apache",
            compressible: !1,
            extensions: ["sit"]
        },
        "application/x-stuffitx": {
            source: "apache",
            extensions: ["sitx"]
        },
        "application/x-subrip": {
            source: "apache",
            extensions: ["srt"]
        },
        "application/x-sv4cpio": {
            source: "apache",
            extensions: ["sv4cpio"]
        },
        "application/x-sv4crc": {
            source: "apache",
            extensions: ["sv4crc"]
        },
        "application/x-t3vm-image": {
            source: "apache",
            extensions: ["t3"]
        },
        "application/x-tads": {
            source: "apache",
            extensions: ["gam"]
        },
        "application/x-tar": {
            source: "apache",
            compressible: !0,
            extensions: ["tar"]
        },
        "application/x-tcl": {
            source: "apache",
            extensions: ["tcl", "tk"]
        },
        "application/x-tex": {
            source: "apache",
            extensions: ["tex"]
        },
        "application/x-tex-tfm": {
            source: "apache",
            extensions: ["tfm"]
        },
        "application/x-texinfo": {
            source: "apache",
            extensions: ["texinfo", "texi"]
        },
        "application/x-tgif": {
            source: "apache",
            extensions: ["obj"]
        },
        "application/x-ustar": {
            source: "apache",
            extensions: ["ustar"]
        },
        "application/x-virtualbox-hdd": {
            compressible: !0,
            extensions: ["hdd"]
        },
        "application/x-virtualbox-ova": {
            compressible: !0,
            extensions: ["ova"]
        },
        "application/x-virtualbox-ovf": {
            compressible: !0,
            extensions: ["ovf"]
        },
        "application/x-virtualbox-vbox": {
            compressible: !0,
            extensions: ["vbox"]
        },
        "application/x-virtualbox-vbox-extpack": {
            compressible: !1,
            extensions: ["vbox-extpack"]
        },
        "application/x-virtualbox-vdi": {
            compressible: !0,
            extensions: ["vdi"]
        },
        "application/x-virtualbox-vhd": {
            compressible: !0,
            extensions: ["vhd"]
        },
        "application/x-virtualbox-vmdk": {
            compressible: !0,
            extensions: ["vmdk"]
        },
        "application/x-wais-source": {
            source: "apache",
            extensions: ["src"]
        },
        "application/x-web-app-manifest+json": {
            compressible: !0,
            extensions: ["webapp"]
        },
        "application/x-www-form-urlencoded": {
            source: "iana",
            compressible: !0
        },
        "application/x-x509-ca-cert": {
            source: "apache",
            extensions: ["der", "crt", "pem"]
        },
        "application/x-xfig": {
            source: "apache",
            extensions: ["fig"]
        },
        "application/x-xliff+xml": {
            source: "apache",
            extensions: ["xlf"]
        },
        "application/x-xpinstall": {
            source: "apache",
            compressible: !1,
            extensions: ["xpi"]
        },
        "application/x-xz": {
            source: "apache",
            extensions: ["xz"]
        },
        "application/x-zmachine": {
            source: "apache",
            extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
        },
        "application/x400-bp": {
            source: "iana"
        },
        "application/xacml+xml": {
            source: "iana"
        },
        "application/xaml+xml": {
            source: "apache",
            extensions: ["xaml"]
        },
        "application/xcap-att+xml": {
            source: "iana"
        },
        "application/xcap-caps+xml": {
            source: "iana"
        },
        "application/xcap-diff+xml": {
            source: "iana",
            extensions: ["xdf"]
        },
        "application/xcap-el+xml": {
            source: "iana"
        },
        "application/xcap-error+xml": {
            source: "iana"
        },
        "application/xcap-ns+xml": {
            source: "iana"
        },
        "application/xcon-conference-info+xml": {
            source: "iana"
        },
        "application/xcon-conference-info-diff+xml": {
            source: "iana"
        },
        "application/xenc+xml": {
            source: "iana",
            extensions: ["xenc"]
        },
        "application/xhtml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xhtml", "xht"]
        },
        "application/xhtml-voice+xml": {
            source: "apache"
        },
        "application/xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xml", "xsl", "xsd", "rng"]
        },
        "application/xml-dtd": {
            source: "iana",
            compressible: !0,
            extensions: ["dtd"]
        },
        "application/xml-external-parsed-entity": {
            source: "iana"
        },
        "application/xml-patch+xml": {
            source: "iana"
        },
        "application/xmpp+xml": {
            source: "iana"
        },
        "application/xop+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xop"]
        },
        "application/xproc+xml": {
            source: "apache",
            extensions: ["xpl"]
        },
        "application/xslt+xml": {
            source: "iana",
            extensions: ["xslt"]
        },
        "application/xspf+xml": {
            source: "apache",
            extensions: ["xspf"]
        },
        "application/xv+xml": {
            source: "iana",
            extensions: ["mxml", "xhvml", "xvml", "xvm"]
        },
        "application/yang": {
            source: "iana",
            extensions: ["yang"]
        },
        "application/yang-data+json": {
            source: "iana",
            compressible: !0
        },
        "application/yang-data+xml": {
            source: "iana"
        },
        "application/yang-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/yang-patch+xml": {
            source: "iana"
        },
        "application/yin+xml": {
            source: "iana",
            extensions: ["yin"]
        },
        "application/zip": {
            source: "iana",
            compressible: !1,
            extensions: ["zip"]
        },
        "application/zlib": {
            source: "iana"
        },
        "audio/1d-interleaved-parityfec": {
            source: "iana"
        },
        "audio/32kadpcm": {
            source: "iana"
        },
        "audio/3gpp": {
            source: "iana",
            compressible: !1,
            extensions: ["3gpp"]
        },
        "audio/3gpp2": {
            source: "iana"
        },
        "audio/ac3": {
            source: "iana"
        },
        "audio/adpcm": {
            source: "apache",
            extensions: ["adp"]
        },
        "audio/amr": {
            source: "iana"
        },
        "audio/amr-wb": {
            source: "iana"
        },
        "audio/amr-wb+": {
            source: "iana"
        },
        "audio/aptx": {
            source: "iana"
        },
        "audio/asc": {
            source: "iana"
        },
        "audio/atrac-advanced-lossless": {
            source: "iana"
        },
        "audio/atrac-x": {
            source: "iana"
        },
        "audio/atrac3": {
            source: "iana"
        },
        "audio/basic": {
            source: "iana",
            compressible: !1,
            extensions: ["au", "snd"]
        },
        "audio/bv16": {
            source: "iana"
        },
        "audio/bv32": {
            source: "iana"
        },
        "audio/clearmode": {
            source: "iana"
        },
        "audio/cn": {
            source: "iana"
        },
        "audio/dat12": {
            source: "iana"
        },
        "audio/dls": {
            source: "iana"
        },
        "audio/dsr-es201108": {
            source: "iana"
        },
        "audio/dsr-es202050": {
            source: "iana"
        },
        "audio/dsr-es202211": {
            source: "iana"
        },
        "audio/dsr-es202212": {
            source: "iana"
        },
        "audio/dv": {
            source: "iana"
        },
        "audio/dvi4": {
            source: "iana"
        },
        "audio/eac3": {
            source: "iana"
        },
        "audio/encaprtp": {
            source: "iana"
        },
        "audio/evrc": {
            source: "iana"
        },
        "audio/evrc-qcp": {
            source: "iana"
        },
        "audio/evrc0": {
            source: "iana"
        },
        "audio/evrc1": {
            source: "iana"
        },
        "audio/evrcb": {
            source: "iana"
        },
        "audio/evrcb0": {
            source: "iana"
        },
        "audio/evrcb1": {
            source: "iana"
        },
        "audio/evrcnw": {
            source: "iana"
        },
        "audio/evrcnw0": {
            source: "iana"
        },
        "audio/evrcnw1": {
            source: "iana"
        },
        "audio/evrcwb": {
            source: "iana"
        },
        "audio/evrcwb0": {
            source: "iana"
        },
        "audio/evrcwb1": {
            source: "iana"
        },
        "audio/evs": {
            source: "iana"
        },
        "audio/fwdred": {
            source: "iana"
        },
        "audio/g711-0": {
            source: "iana"
        },
        "audio/g719": {
            source: "iana"
        },
        "audio/g722": {
            source: "iana"
        },
        "audio/g7221": {
            source: "iana"
        },
        "audio/g723": {
            source: "iana"
        },
        "audio/g726-16": {
            source: "iana"
        },
        "audio/g726-24": {
            source: "iana"
        },
        "audio/g726-32": {
            source: "iana"
        },
        "audio/g726-40": {
            source: "iana"
        },
        "audio/g728": {
            source: "iana"
        },
        "audio/g729": {
            source: "iana"
        },
        "audio/g7291": {
            source: "iana"
        },
        "audio/g729d": {
            source: "iana"
        },
        "audio/g729e": {
            source: "iana"
        },
        "audio/gsm": {
            source: "iana"
        },
        "audio/gsm-efr": {
            source: "iana"
        },
        "audio/gsm-hr-08": {
            source: "iana"
        },
        "audio/ilbc": {
            source: "iana"
        },
        "audio/ip-mr_v2.5": {
            source: "iana"
        },
        "audio/isac": {
            source: "apache"
        },
        "audio/l16": {
            source: "iana"
        },
        "audio/l20": {
            source: "iana"
        },
        "audio/l24": {
            source: "iana",
            compressible: !1
        },
        "audio/l8": {
            source: "iana"
        },
        "audio/lpc": {
            source: "iana"
        },
        "audio/melp": {
            source: "iana"
        },
        "audio/melp1200": {
            source: "iana"
        },
        "audio/melp2400": {
            source: "iana"
        },
        "audio/melp600": {
            source: "iana"
        },
        "audio/midi": {
            source: "apache",
            extensions: ["mid", "midi", "kar", "rmi"]
        },
        "audio/mobile-xmf": {
            source: "iana"
        },
        "audio/mp3": {
            compressible: !1,
            extensions: ["mp3"]
        },
        "audio/mp4": {
            source: "iana",
            compressible: !1,
            extensions: ["m4a", "mp4a"]
        },
        "audio/mp4a-latm": {
            source: "iana"
        },
        "audio/mpa": {
            source: "iana"
        },
        "audio/mpa-robust": {
            source: "iana"
        },
        "audio/mpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
        },
        "audio/mpeg4-generic": {
            source: "iana"
        },
        "audio/musepack": {
            source: "apache"
        },
        "audio/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["oga", "ogg", "spx"]
        },
        "audio/opus": {
            source: "iana"
        },
        "audio/parityfec": {
            source: "iana"
        },
        "audio/pcma": {
            source: "iana"
        },
        "audio/pcma-wb": {
            source: "iana"
        },
        "audio/pcmu": {
            source: "iana"
        },
        "audio/pcmu-wb": {
            source: "iana"
        },
        "audio/prs.sid": {
            source: "iana"
        },
        "audio/qcelp": {
            source: "iana"
        },
        "audio/raptorfec": {
            source: "iana"
        },
        "audio/red": {
            source: "iana"
        },
        "audio/rtp-enc-aescm128": {
            source: "iana"
        },
        "audio/rtp-midi": {
            source: "iana"
        },
        "audio/rtploopback": {
            source: "iana"
        },
        "audio/rtx": {
            source: "iana"
        },
        "audio/s3m": {
            source: "apache",
            extensions: ["s3m"]
        },
        "audio/silk": {
            source: "apache",
            extensions: ["sil"]
        },
        "audio/smv": {
            source: "iana"
        },
        "audio/smv-qcp": {
            source: "iana"
        },
        "audio/smv0": {
            source: "iana"
        },
        "audio/sp-midi": {
            source: "iana"
        },
        "audio/speex": {
            source: "iana"
        },
        "audio/t140c": {
            source: "iana"
        },
        "audio/t38": {
            source: "iana"
        },
        "audio/telephone-event": {
            source: "iana"
        },
        "audio/tone": {
            source: "iana"
        },
        "audio/uemclip": {
            source: "iana"
        },
        "audio/ulpfec": {
            source: "iana"
        },
        "audio/vdvi": {
            source: "iana"
        },
        "audio/vmr-wb": {
            source: "iana"
        },
        "audio/vnd.3gpp.iufp": {
            source: "iana"
        },
        "audio/vnd.4sb": {
            source: "iana"
        },
        "audio/vnd.audiokoz": {
            source: "iana"
        },
        "audio/vnd.celp": {
            source: "iana"
        },
        "audio/vnd.cisco.nse": {
            source: "iana"
        },
        "audio/vnd.cmles.radio-events": {
            source: "iana"
        },
        "audio/vnd.cns.anp1": {
            source: "iana"
        },
        "audio/vnd.cns.inf1": {
            source: "iana"
        },
        "audio/vnd.dece.audio": {
            source: "iana",
            extensions: ["uva", "uvva"]
        },
        "audio/vnd.digital-winds": {
            source: "iana",
            extensions: ["eol"]
        },
        "audio/vnd.dlna.adts": {
            source: "iana"
        },
        "audio/vnd.dolby.heaac.1": {
            source: "iana"
        },
        "audio/vnd.dolby.heaac.2": {
            source: "iana"
        },
        "audio/vnd.dolby.mlp": {
            source: "iana"
        },
        "audio/vnd.dolby.mps": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2x": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2z": {
            source: "iana"
        },
        "audio/vnd.dolby.pulse.1": {
            source: "iana"
        },
        "audio/vnd.dra": {
            source: "iana",
            extensions: ["dra"]
        },
        "audio/vnd.dts": {
            source: "iana",
            extensions: ["dts"]
        },
        "audio/vnd.dts.hd": {
            source: "iana",
            extensions: ["dtshd"]
        },
        "audio/vnd.dvb.file": {
            source: "iana"
        },
        "audio/vnd.everad.plj": {
            source: "iana"
        },
        "audio/vnd.hns.audio": {
            source: "iana"
        },
        "audio/vnd.lucent.voice": {
            source: "iana",
            extensions: ["lvp"]
        },
        "audio/vnd.ms-playready.media.pya": {
            source: "iana",
            extensions: ["pya"]
        },
        "audio/vnd.nokia.mobile-xmf": {
            source: "iana"
        },
        "audio/vnd.nortel.vbk": {
            source: "iana"
        },
        "audio/vnd.nuera.ecelp4800": {
            source: "iana",
            extensions: ["ecelp4800"]
        },
        "audio/vnd.nuera.ecelp7470": {
            source: "iana",
            extensions: ["ecelp7470"]
        },
        "audio/vnd.nuera.ecelp9600": {
            source: "iana",
            extensions: ["ecelp9600"]
        },
        "audio/vnd.octel.sbc": {
            source: "iana"
        },
        "audio/vnd.presonus.multitrack": {
            source: "iana"
        },
        "audio/vnd.qcelp": {
            source: "iana"
        },
        "audio/vnd.rhetorex.32kadpcm": {
            source: "iana"
        },
        "audio/vnd.rip": {
            source: "iana",
            extensions: ["rip"]
        },
        "audio/vnd.rn-realaudio": {
            compressible: !1
        },
        "audio/vnd.sealedmedia.softseal.mpeg": {
            source: "iana"
        },
        "audio/vnd.vmx.cvsd": {
            source: "iana"
        },
        "audio/vnd.wave": {
            compressible: !1
        },
        "audio/vorbis": {
            source: "iana",
            compressible: !1
        },
        "audio/vorbis-config": {
            source: "iana"
        },
        "audio/wav": {
            compressible: !1,
            extensions: ["wav"]
        },
        "audio/wave": {
            compressible: !1,
            extensions: ["wav"]
        },
        "audio/webm": {
            source: "apache",
            compressible: !1,
            extensions: ["weba"]
        },
        "audio/x-aac": {
            source: "apache",
            compressible: !1,
            extensions: ["aac"]
        },
        "audio/x-aiff": {
            source: "apache",
            extensions: ["aif", "aiff", "aifc"]
        },
        "audio/x-caf": {
            source: "apache",
            compressible: !1,
            extensions: ["caf"]
        },
        "audio/x-flac": {
            source: "apache",
            extensions: ["flac"]
        },
        "audio/x-m4a": {
            source: "nginx",
            extensions: ["m4a"]
        },
        "audio/x-matroska": {
            source: "apache",
            extensions: ["mka"]
        },
        "audio/x-mpegurl": {
            source: "apache",
            extensions: ["m3u"]
        },
        "audio/x-ms-wax": {
            source: "apache",
            extensions: ["wax"]
        },
        "audio/x-ms-wma": {
            source: "apache",
            extensions: ["wma"]
        },
        "audio/x-pn-realaudio": {
            source: "apache",
            extensions: ["ram", "ra"]
        },
        "audio/x-pn-realaudio-plugin": {
            source: "apache",
            extensions: ["rmp"]
        },
        "audio/x-realaudio": {
            source: "nginx",
            extensions: ["ra"]
        },
        "audio/x-tta": {
            source: "apache"
        },
        "audio/x-wav": {
            source: "apache",
            extensions: ["wav"]
        },
        "audio/xm": {
            source: "apache",
            extensions: ["xm"]
        },
        "chemical/x-cdx": {
            source: "apache",
            extensions: ["cdx"]
        },
        "chemical/x-cif": {
            source: "apache",
            extensions: ["cif"]
        },
        "chemical/x-cmdf": {
            source: "apache",
            extensions: ["cmdf"]
        },
        "chemical/x-cml": {
            source: "apache",
            extensions: ["cml"]
        },
        "chemical/x-csml": {
            source: "apache",
            extensions: ["csml"]
        },
        "chemical/x-pdb": {
            source: "apache"
        },
        "chemical/x-xyz": {
            source: "apache",
            extensions: ["xyz"]
        },
        "font/otf": {
            compressible: !0,
            extensions: ["otf"]
        },
        "image/apng": {
            compressible: !1,
            extensions: ["apng"]
        },
        "image/bmp": {
            source: "iana",
            compressible: !0,
            extensions: ["bmp"]
        },
        "image/cgm": {
            source: "iana",
            extensions: ["cgm"]
        },
        "image/dicom-rle": {
            source: "iana"
        },
        "image/emf": {
            source: "iana"
        },
        "image/fits": {
            source: "iana"
        },
        "image/g3fax": {
            source: "iana",
            extensions: ["g3"]
        },
        "image/gif": {
            source: "iana",
            compressible: !1,
            extensions: ["gif"]
        },
        "image/ief": {
            source: "iana",
            extensions: ["ief"]
        },
        "image/jls": {
            source: "iana"
        },
        "image/jp2": {
            source: "iana"
        },
        "image/jpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["jpeg", "jpg", "jpe"]
        },
        "image/jpm": {
            source: "iana"
        },
        "image/jpx": {
            source: "iana"
        },
        "image/ktx": {
            source: "iana",
            extensions: ["ktx"]
        },
        "image/naplps": {
            source: "iana"
        },
        "image/pjpeg": {
            compressible: !1
        },
        "image/png": {
            source: "iana",
            compressible: !1,
            extensions: ["png"]
        },
        "image/prs.btif": {
            source: "iana",
            extensions: ["btif"]
        },
        "image/prs.pti": {
            source: "iana"
        },
        "image/pwg-raster": {
            source: "iana"
        },
        "image/sgi": {
            source: "apache",
            extensions: ["sgi"]
        },
        "image/svg+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["svg", "svgz"]
        },
        "image/t38": {
            source: "iana"
        },
        "image/tiff": {
            source: "iana",
            compressible: !1,
            extensions: ["tiff", "tif"]
        },
        "image/tiff-fx": {
            source: "iana"
        },
        "image/vnd.adobe.photoshop": {
            source: "iana",
            compressible: !0,
            extensions: ["psd"]
        },
        "image/vnd.airzip.accelerator.azv": {
            source: "iana"
        },
        "image/vnd.cns.inf2": {
            source: "iana"
        },
        "image/vnd.dece.graphic": {
            source: "iana",
            extensions: ["uvi", "uvvi", "uvg", "uvvg"]
        },
        "image/vnd.djvu": {
            source: "iana",
            extensions: ["djvu", "djv"]
        },
        "image/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
        },
        "image/vnd.dwg": {
            source: "iana",
            extensions: ["dwg"]
        },
        "image/vnd.dxf": {
            source: "iana",
            extensions: ["dxf"]
        },
        "image/vnd.fastbidsheet": {
            source: "iana",
            extensions: ["fbs"]
        },
        "image/vnd.fpx": {
            source: "iana",
            extensions: ["fpx"]
        },
        "image/vnd.fst": {
            source: "iana",
            extensions: ["fst"]
        },
        "image/vnd.fujixerox.edmics-mmr": {
            source: "iana",
            extensions: ["mmr"]
        },
        "image/vnd.fujixerox.edmics-rlc": {
            source: "iana",
            extensions: ["rlc"]
        },
        "image/vnd.globalgraphics.pgb": {
            source: "iana"
        },
        "image/vnd.microsoft.icon": {
            source: "iana"
        },
        "image/vnd.mix": {
            source: "iana"
        },
        "image/vnd.mozilla.apng": {
            source: "iana"
        },
        "image/vnd.ms-modi": {
            source: "iana",
            extensions: ["mdi"]
        },
        "image/vnd.ms-photo": {
            source: "apache",
            extensions: ["wdp"]
        },
        "image/vnd.net-fpx": {
            source: "iana",
            extensions: ["npx"]
        },
        "image/vnd.radiance": {
            source: "iana"
        },
        "image/vnd.sealed.png": {
            source: "iana"
        },
        "image/vnd.sealedmedia.softseal.gif": {
            source: "iana"
        },
        "image/vnd.sealedmedia.softseal.jpg": {
            source: "iana"
        },
        "image/vnd.svf": {
            source: "iana"
        },
        "image/vnd.tencent.tap": {
            source: "iana"
        },
        "image/vnd.valve.source.texture": {
            source: "iana"
        },
        "image/vnd.wap.wbmp": {
            source: "iana",
            extensions: ["wbmp"]
        },
        "image/vnd.xiff": {
            source: "iana",
            extensions: ["xif"]
        },
        "image/vnd.zbrush.pcx": {
            source: "iana"
        },
        "image/webp": {
            source: "apache",
            extensions: ["webp"]
        },
        "image/wmf": {
            source: "iana"
        },
        "image/x-3ds": {
            source: "apache",
            extensions: ["3ds"]
        },
        "image/x-cmu-raster": {
            source: "apache",
            extensions: ["ras"]
        },
        "image/x-cmx": {
            source: "apache",
            extensions: ["cmx"]
        },
        "image/x-freehand": {
            source: "apache",
            extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
        },
        "image/x-icon": {
            source: "apache",
            compressible: !0,
            extensions: ["ico"]
        },
        "image/x-jng": {
            source: "nginx",
            extensions: ["jng"]
        },
        "image/x-mrsid-image": {
            source: "apache",
            extensions: ["sid"]
        },
        "image/x-ms-bmp": {
            source: "nginx",
            compressible: !0,
            extensions: ["bmp"]
        },
        "image/x-pcx": {
            source: "apache",
            extensions: ["pcx"]
        },
        "image/x-pict": {
            source: "apache",
            extensions: ["pic", "pct"]
        },
        "image/x-portable-anymap": {
            source: "apache",
            extensions: ["pnm"]
        },
        "image/x-portable-bitmap": {
            source: "apache",
            extensions: ["pbm"]
        },
        "image/x-portable-graymap": {
            source: "apache",
            extensions: ["pgm"]
        },
        "image/x-portable-pixmap": {
            source: "apache",
            extensions: ["ppm"]
        },
        "image/x-rgb": {
            source: "apache",
            extensions: ["rgb"]
        },
        "image/x-tga": {
            source: "apache",
            extensions: ["tga"]
        },
        "image/x-xbitmap": {
            source: "apache",
            extensions: ["xbm"]
        },
        "image/x-xcf": {
            compressible: !1
        },
        "image/x-xpixmap": {
            source: "apache",
            extensions: ["xpm"]
        },
        "image/x-xwindowdump": {
            source: "apache",
            extensions: ["xwd"]
        },
        "message/cpim": {
            source: "iana"
        },
        "message/delivery-status": {
            source: "iana"
        },
        "message/disposition-notification": {
            source: "iana"
        },
        "message/external-body": {
            source: "iana"
        },
        "message/feedback-report": {
            source: "iana"
        },
        "message/global": {
            source: "iana"
        },
        "message/global-delivery-status": {
            source: "iana"
        },
        "message/global-disposition-notification": {
            source: "iana"
        },
        "message/global-headers": {
            source: "iana"
        },
        "message/http": {
            source: "iana",
            compressible: !1
        },
        "message/imdn+xml": {
            source: "iana",
            compressible: !0
        },
        "message/news": {
            source: "iana"
        },
        "message/partial": {
            source: "iana",
            compressible: !1
        },
        "message/rfc822": {
            source: "iana",
            compressible: !0,
            extensions: ["eml", "mime"]
        },
        "message/s-http": {
            source: "iana"
        },
        "message/sip": {
            source: "iana"
        },
        "message/sipfrag": {
            source: "iana"
        },
        "message/tracking-status": {
            source: "iana"
        },
        "message/vnd.si.simp": {
            source: "iana"
        },
        "message/vnd.wfa.wsc": {
            source: "iana"
        },
        "model/3mf": {
            source: "iana"
        },
        "model/gltf+json": {
            source: "iana",
            compressible: !0,
            extensions: ["gltf"]
        },
        "model/gltf-binary": {
            compressible: !0,
            extensions: ["glb"]
        },
        "model/iges": {
            source: "iana",
            compressible: !1,
            extensions: ["igs", "iges"]
        },
        "model/mesh": {
            source: "iana",
            compressible: !1,
            extensions: ["msh", "mesh", "silo"]
        },
        "model/vnd.collada+xml": {
            source: "iana",
            extensions: ["dae"]
        },
        "model/vnd.dwf": {
            source: "iana",
            extensions: ["dwf"]
        },
        "model/vnd.flatland.3dml": {
            source: "iana"
        },
        "model/vnd.gdl": {
            source: "iana",
            extensions: ["gdl"]
        },
        "model/vnd.gs-gdl": {
            source: "apache"
        },
        "model/vnd.gs.gdl": {
            source: "iana"
        },
        "model/vnd.gtw": {
            source: "iana",
            extensions: ["gtw"]
        },
        "model/vnd.moml+xml": {
            source: "iana"
        },
        "model/vnd.mts": {
            source: "iana",
            extensions: ["mts"]
        },
        "model/vnd.opengex": {
            source: "iana"
        },
        "model/vnd.parasolid.transmit.binary": {
            source: "iana"
        },
        "model/vnd.parasolid.transmit.text": {
            source: "iana"
        },
        "model/vnd.rosette.annotated-data-model": {
            source: "iana"
        },
        "model/vnd.valve.source.compiled-map": {
            source: "iana"
        },
        "model/vnd.vtu": {
            source: "iana",
            extensions: ["vtu"]
        },
        "model/vrml": {
            source: "iana",
            compressible: !1,
            extensions: ["wrl", "vrml"]
        },
        "model/x3d+binary": {
            source: "apache",
            compressible: !1,
            extensions: ["x3db", "x3dbz"]
        },
        "model/x3d+fastinfoset": {
            source: "iana"
        },
        "model/x3d+vrml": {
            source: "apache",
            compressible: !1,
            extensions: ["x3dv", "x3dvz"]
        },
        "model/x3d+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["x3d", "x3dz"]
        },
        "model/x3d-vrml": {
            source: "iana"
        },
        "multipart/alternative": {
            source: "iana",
            compressible: !1
        },
        "multipart/appledouble": {
            source: "iana"
        },
        "multipart/byteranges": {
            source: "iana"
        },
        "multipart/digest": {
            source: "iana"
        },
        "multipart/encrypted": {
            source: "iana",
            compressible: !1
        },
        "multipart/form-data": {
            source: "iana",
            compressible: !1
        },
        "multipart/header-set": {
            source: "iana"
        },
        "multipart/mixed": {
            source: "iana",
            compressible: !1
        },
        "multipart/parallel": {
            source: "iana"
        },
        "multipart/related": {
            source: "iana",
            compressible: !1
        },
        "multipart/report": {
            source: "iana"
        },
        "multipart/signed": {
            source: "iana",
            compressible: !1
        },
        "multipart/vnd.bint.med-plus": {
            source: "iana"
        },
        "multipart/voice-message": {
            source: "iana"
        },
        "multipart/x-mixed-replace": {
            source: "iana"
        },
        "text/1d-interleaved-parityfec": {
            source: "iana"
        },
        "text/cache-manifest": {
            source: "iana",
            compressible: !0,
            extensions: ["appcache", "manifest"]
        },
        "text/calendar": {
            source: "iana",
            extensions: ["ics", "ifb"]
        },
        "text/calender": {
            compressible: !0
        },
        "text/cmd": {
            compressible: !0
        },
        "text/coffeescript": {
            extensions: ["coffee", "litcoffee"]
        },
        "text/css": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["css"]
        },
        "text/csv": {
            source: "iana",
            compressible: !0,
            extensions: ["csv"]
        },
        "text/csv-schema": {
            source: "iana"
        },
        "text/directory": {
            source: "iana"
        },
        "text/dns": {
            source: "iana"
        },
        "text/ecmascript": {
            source: "iana"
        },
        "text/encaprtp": {
            source: "iana"
        },
        "text/enriched": {
            source: "iana"
        },
        "text/fwdred": {
            source: "iana"
        },
        "text/grammar-ref-list": {
            source: "iana"
        },
        "text/hjson": {
            extensions: ["hjson"]
        },
        "text/html": {
            source: "iana",
            compressible: !0,
            extensions: ["html", "htm", "shtml"]
        },
        "text/jade": {
            extensions: ["jade"]
        },
        "text/javascript": {
            source: "iana",
            compressible: !0
        },
        "text/jcr-cnd": {
            source: "iana"
        },
        "text/jsx": {
            compressible: !0,
            extensions: ["jsx"]
        },
        "text/less": {
            extensions: ["less"]
        },
        "text/markdown": {
            source: "iana",
            compressible: !0,
            extensions: ["markdown", "md"]
        },
        "text/mathml": {
            source: "nginx",
            extensions: ["mml"]
        },
        "text/mizar": {
            source: "iana"
        },
        "text/n3": {
            source: "iana",
            compressible: !0,
            extensions: ["n3"]
        },
        "text/parameters": {
            source: "iana"
        },
        "text/parityfec": {
            source: "iana"
        },
        "text/plain": {
            source: "iana",
            compressible: !0,
            extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
        },
        "text/provenance-notation": {
            source: "iana"
        },
        "text/prs.fallenstein.rst": {
            source: "iana"
        },
        "text/prs.lines.tag": {
            source: "iana",
            extensions: ["dsc"]
        },
        "text/prs.prop.logic": {
            source: "iana"
        },
        "text/raptorfec": {
            source: "iana"
        },
        "text/red": {
            source: "iana"
        },
        "text/rfc822-headers": {
            source: "iana"
        },
        "text/richtext": {
            source: "iana",
            compressible: !0,
            extensions: ["rtx"]
        },
        "text/rtf": {
            source: "iana",
            compressible: !0,
            extensions: ["rtf"]
        },
        "text/rtp-enc-aescm128": {
            source: "iana"
        },
        "text/rtploopback": {
            source: "iana"
        },
        "text/rtx": {
            source: "iana"
        },
        "text/sgml": {
            source: "iana",
            extensions: ["sgml", "sgm"]
        },
        "text/slim": {
            extensions: ["slim", "slm"]
        },
        "text/strings": {
            source: "iana"
        },
        "text/stylus": {
            extensions: ["stylus", "styl"]
        },
        "text/t140": {
            source: "iana"
        },
        "text/tab-separated-values": {
            source: "iana",
            compressible: !0,
            extensions: ["tsv"]
        },
        "text/troff": {
            source: "iana",
            extensions: ["t", "tr", "roff", "man", "me", "ms"]
        },
        "text/turtle": {
            source: "iana",
            extensions: ["ttl"]
        },
        "text/ulpfec": {
            source: "iana"
        },
        "text/uri-list": {
            source: "iana",
            compressible: !0,
            extensions: ["uri", "uris", "urls"]
        },
        "text/vcard": {
            source: "iana",
            compressible: !0,
            extensions: ["vcard"]
        },
        "text/vnd.a": {
            source: "iana"
        },
        "text/vnd.abc": {
            source: "iana"
        },
        "text/vnd.ascii-art": {
            source: "iana"
        },
        "text/vnd.curl": {
            source: "iana",
            extensions: ["curl"]
        },
        "text/vnd.curl.dcurl": {
            source: "apache",
            extensions: ["dcurl"]
        },
        "text/vnd.curl.mcurl": {
            source: "apache",
            extensions: ["mcurl"]
        },
        "text/vnd.curl.scurl": {
            source: "apache",
            extensions: ["scurl"]
        },
        "text/vnd.debian.copyright": {
            source: "iana"
        },
        "text/vnd.dmclientscript": {
            source: "iana"
        },
        "text/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
        },
        "text/vnd.esmertec.theme-descriptor": {
            source: "iana"
        },
        "text/vnd.fly": {
            source: "iana",
            extensions: ["fly"]
        },
        "text/vnd.fmi.flexstor": {
            source: "iana",
            extensions: ["flx"]
        },
        "text/vnd.graphviz": {
            source: "iana",
            extensions: ["gv"]
        },
        "text/vnd.in3d.3dml": {
            source: "iana",
            extensions: ["3dml"]
        },
        "text/vnd.in3d.spot": {
            source: "iana",
            extensions: ["spot"]
        },
        "text/vnd.iptc.newsml": {
            source: "iana"
        },
        "text/vnd.iptc.nitf": {
            source: "iana"
        },
        "text/vnd.latex-z": {
            source: "iana"
        },
        "text/vnd.motorola.reflex": {
            source: "iana"
        },
        "text/vnd.ms-mediapackage": {
            source: "iana"
        },
        "text/vnd.net2phone.commcenter.command": {
            source: "iana"
        },
        "text/vnd.radisys.msml-basic-layout": {
            source: "iana"
        },
        "text/vnd.si.uricatalogue": {
            source: "iana"
        },
        "text/vnd.sun.j2me.app-descriptor": {
            source: "iana",
            extensions: ["jad"]
        },
        "text/vnd.trolltech.linguist": {
            source: "iana"
        },
        "text/vnd.wap.si": {
            source: "iana"
        },
        "text/vnd.wap.sl": {
            source: "iana"
        },
        "text/vnd.wap.wml": {
            source: "iana",
            extensions: ["wml"]
        },
        "text/vnd.wap.wmlscript": {
            source: "iana",
            extensions: ["wmls"]
        },
        "text/vtt": {
            charset: "UTF-8",
            compressible: !0,
            extensions: ["vtt"]
        },
        "text/x-asm": {
            source: "apache",
            extensions: ["s", "asm"]
        },
        "text/x-c": {
            source: "apache",
            extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
        },
        "text/x-component": {
            source: "nginx",
            extensions: ["htc"]
        },
        "text/x-fortran": {
            source: "apache",
            extensions: ["f", "for", "f77", "f90"]
        },
        "text/x-gwt-rpc": {
            compressible: !0
        },
        "text/x-handlebars-template": {
            extensions: ["hbs"]
        },
        "text/x-java-source": {
            source: "apache",
            extensions: ["java"]
        },
        "text/x-jquery-tmpl": {
            compressible: !0
        },
        "text/x-lua": {
            extensions: ["lua"]
        },
        "text/x-markdown": {
            compressible: !0,
            extensions: ["mkd"]
        },
        "text/x-nfo": {
            source: "apache",
            extensions: ["nfo"]
        },
        "text/x-opml": {
            source: "apache",
            extensions: ["opml"]
        },
        "text/x-org": {
            compressible: !0,
            extensions: ["org"]
        },
        "text/x-pascal": {
            source: "apache",
            extensions: ["p", "pas"]
        },
        "text/x-processing": {
            compressible: !0,
            extensions: ["pde"]
        },
        "text/x-sass": {
            extensions: ["sass"]
        },
        "text/x-scss": {
            extensions: ["scss"]
        },
        "text/x-setext": {
            source: "apache",
            extensions: ["etx"]
        },
        "text/x-sfv": {
            source: "apache",
            extensions: ["sfv"]
        },
        "text/x-suse-ymp": {
            compressible: !0,
            extensions: ["ymp"]
        },
        "text/x-uuencode": {
            source: "apache",
            extensions: ["uu"]
        },
        "text/x-vcalendar": {
            source: "apache",
            extensions: ["vcs"]
        },
        "text/x-vcard": {
            source: "apache",
            extensions: ["vcf"]
        },
        "text/xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xml"]
        },
        "text/xml-external-parsed-entity": {
            source: "iana"
        },
        "text/yaml": {
            extensions: ["yaml", "yml"]
        },
        "video/1d-interleaved-parityfec": {
            source: "iana"
        },
        "video/3gpp": {
            source: "iana",
            extensions: ["3gp", "3gpp"]
        },
        "video/3gpp-tt": {
            source: "iana"
        },
        "video/3gpp2": {
            source: "iana",
            extensions: ["3g2"]
        },
        "video/bmpeg": {
            source: "iana"
        },
        "video/bt656": {
            source: "iana"
        },
        "video/celb": {
            source: "iana"
        },
        "video/dv": {
            source: "iana"
        },
        "video/encaprtp": {
            source: "iana"
        },
        "video/h261": {
            source: "iana",
            extensions: ["h261"]
        },
        "video/h263": {
            source: "iana",
            extensions: ["h263"]
        },
        "video/h263-1998": {
            source: "iana"
        },
        "video/h263-2000": {
            source: "iana"
        },
        "video/h264": {
            source: "iana",
            extensions: ["h264"]
        },
        "video/h264-rcdo": {
            source: "iana"
        },
        "video/h264-svc": {
            source: "iana"
        },
        "video/h265": {
            source: "iana"
        },
        "video/iso.segment": {
            source: "iana"
        },
        "video/jpeg": {
            source: "iana",
            extensions: ["jpgv"]
        },
        "video/jpeg2000": {
            source: "iana"
        },
        "video/jpm": {
            source: "apache",
            extensions: ["jpm", "jpgm"]
        },
        "video/mj2": {
            source: "iana",
            extensions: ["mj2", "mjp2"]
        },
        "video/mp1s": {
            source: "iana"
        },
        "video/mp2p": {
            source: "iana"
        },
        "video/mp2t": {
            source: "iana",
            extensions: ["ts"]
        },
        "video/mp4": {
            source: "iana",
            compressible: !1,
            extensions: ["mp4", "mp4v", "mpg4"]
        },
        "video/mp4v-es": {
            source: "iana"
        },
        "video/mpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
        },
        "video/mpeg4-generic": {
            source: "iana"
        },
        "video/mpv": {
            source: "iana"
        },
        "video/nv": {
            source: "iana"
        },
        "video/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["ogv"]
        },
        "video/parityfec": {
            source: "iana"
        },
        "video/pointer": {
            source: "iana"
        },
        "video/quicktime": {
            source: "iana",
            compressible: !1,
            extensions: ["qt", "mov"]
        },
        "video/raptorfec": {
            source: "iana"
        },
        "video/raw": {
            source: "iana"
        },
        "video/rtp-enc-aescm128": {
            source: "iana"
        },
        "video/rtploopback": {
            source: "iana"
        },
        "video/rtx": {
            source: "iana"
        },
        "video/smpte292m": {
            source: "iana"
        },
        "video/ulpfec": {
            source: "iana"
        },
        "video/vc1": {
            source: "iana"
        },
        "video/vnd.cctv": {
            source: "iana"
        },
        "video/vnd.dece.hd": {
            source: "iana",
            extensions: ["uvh", "uvvh"]
        },
        "video/vnd.dece.mobile": {
            source: "iana",
            extensions: ["uvm", "uvvm"]
        },
        "video/vnd.dece.mp4": {
            source: "iana"
        },
        "video/vnd.dece.pd": {
            source: "iana",
            extensions: ["uvp", "uvvp"]
        },
        "video/vnd.dece.sd": {
            source: "iana",
            extensions: ["uvs", "uvvs"]
        },
        "video/vnd.dece.video": {
            source: "iana",
            extensions: ["uvv", "uvvv"]
        },
        "video/vnd.directv.mpeg": {
            source: "iana"
        },
        "video/vnd.directv.mpeg-tts": {
            source: "iana"
        },
        "video/vnd.dlna.mpeg-tts": {
            source: "iana"
        },
        "video/vnd.dvb.file": {
            source: "iana",
            extensions: ["dvb"]
        },
        "video/vnd.fvt": {
            source: "iana",
            extensions: ["fvt"]
        },
        "video/vnd.hns.video": {
            source: "iana"
        },
        "video/vnd.iptvforum.1dparityfec-1010": {
            source: "iana"
        },
        "video/vnd.iptvforum.1dparityfec-2005": {
            source: "iana"
        },
        "video/vnd.iptvforum.2dparityfec-1010": {
            source: "iana"
        },
        "video/vnd.iptvforum.2dparityfec-2005": {
            source: "iana"
        },
        "video/vnd.iptvforum.ttsavc": {
            source: "iana"
        },
        "video/vnd.iptvforum.ttsmpeg2": {
            source: "iana"
        },
        "video/vnd.motorola.video": {
            source: "iana"
        },
        "video/vnd.motorola.videop": {
            source: "iana"
        },
        "video/vnd.mpegurl": {
            source: "iana",
            extensions: ["mxu", "m4u"]
        },
        "video/vnd.ms-playready.media.pyv": {
            source: "iana",
            extensions: ["pyv"]
        },
        "video/vnd.nokia.interleaved-multimedia": {
            source: "iana"
        },
        "video/vnd.nokia.videovoip": {
            source: "iana"
        },
        "video/vnd.objectvideo": {
            source: "iana"
        },
        "video/vnd.radgamettools.bink": {
            source: "iana"
        },
        "video/vnd.radgamettools.smacker": {
            source: "iana"
        },
        "video/vnd.sealed.mpeg1": {
            source: "iana"
        },
        "video/vnd.sealed.mpeg4": {
            source: "iana"
        },
        "video/vnd.sealed.swf": {
            source: "iana"
        },
        "video/vnd.sealedmedia.softseal.mov": {
            source: "iana"
        },
        "video/vnd.uvvu.mp4": {
            source: "iana",
            extensions: ["uvu", "uvvu"]
        },
        "video/vnd.vivo": {
            source: "iana",
            extensions: ["viv"]
        },
        "video/vp8": {
            source: "iana"
        },
        "video/webm": {
            source: "apache",
            compressible: !1,
            extensions: ["webm"]
        },
        "video/x-f4v": {
            source: "apache",
            extensions: ["f4v"]
        },
        "video/x-fli": {
            source: "apache",
            extensions: ["fli"]
        },
        "video/x-flv": {
            source: "apache",
            compressible: !1,
            extensions: ["flv"]
        },
        "video/x-m4v": {
            source: "apache",
            extensions: ["m4v"]
        },
        "video/x-matroska": {
            source: "apache",
            compressible: !1,
            extensions: ["mkv", "mk3d", "mks"]
        },
        "video/x-mng": {
            source: "apache",
            extensions: ["mng"]
        },
        "video/x-ms-asf": {
            source: "apache",
            extensions: ["asf", "asx"]
        },
        "video/x-ms-vob": {
            source: "apache",
            extensions: ["vob"]
        },
        "video/x-ms-wm": {
            source: "apache",
            extensions: ["wm"]
        },
        "video/x-ms-wmv": {
            source: "apache",
            compressible: !1,
            extensions: ["wmv"]
        },
        "video/x-ms-wmx": {
            source: "apache",
            extensions: ["wmx"]
        },
        "video/x-ms-wvx": {
            source: "apache",
            extensions: ["wvx"]
        },
        "video/x-msvideo": {
            source: "apache",
            extensions: ["avi"]
        },
        "video/x-sgi-movie": {
            source: "apache",
            extensions: ["movie"]
        },
        "video/x-smv": {
            source: "apache",
            extensions: ["smv"]
        },
        "x-conference/x-cooltalk": {
            source: "apache",
            extensions: ["ice"]
        },
        "x-shader/x-fragment": {
            compressible: !0
        },
        "x-shader/x-vertex": {
            compressible: !0
        }
    }
}, function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, a = e.length - 1; a >= 0; a--) {
                var i = e[a];
                "." === i ? e.splice(a, 1) : ".." === i ? (e.splice(a, 1), n++) : n && (e.splice(a, 1), n--)
            }
            if (t)
                for (; n--; n) e.unshift("..");
            return e
        }

        function a(e, t) {
            if (e.filter) return e.filter(t);
            for (var n = [], a = 0; a < e.length; a++) t(e[a], a, e) && n.push(e[a]);
            return n
        }
        var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            r = function(e) {
                return i.exec(e).slice(1)
            };
        t.resolve = function() {
            for (var t = "", i = !1, r = arguments.length - 1; r >= -1 && !i; r--) {
                var o = r >= 0 ? arguments[r] : e.cwd();
                if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                o && (t = o + "/" + t, i = "/" === o.charAt(0))
            }
            return t = n(a(t.split("/"), function(e) {
                return !!e
            }), !i).join("/"), (i ? "/" : "") + t || "."
        }, t.normalize = function(e) {
            var i = t.isAbsolute(e),
                r = "/" === o(e, -1);
            return e = n(a(e.split("/"), function(e) {
                return !!e
            }), !i).join("/"), e || i || (e = "."), e && r && (e += "/"), (i ? "/" : "") + e
        }, t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }, t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(a(e, function(e, t) {
                if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                return e
            }).join("/"))
        }, t.relative = function(e, n) {
            function a(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
            for (var i = a(e.split("/")), r = a(n.split("/")), o = Math.min(i.length, r.length), s = o, c = 0; c < o; c++)
                if (i[c] !== r[c]) {
                    s = c;
                    break
                } for (var l = [], c = s; c < i.length; c++) l.push("..");
            return l = l.concat(r.slice(s)), l.join("/")
        }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
            var t = r(e),
                n = t[0],
                a = t[1];
            return n || a ? (a && (a = a.substr(0, a.length - 1)), n + a) : "."
        }, t.basename = function(e, t) {
            var n = r(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
        }, t.extname = function(e) {
            return r(e)[3]
        };
        var o = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        } : function(e, t, n) {
            return t < 0 && (t = e.length + t), e.substr(t, n)
        }
    }).call(t, n(154))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === a || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }

    function o() {
        m && f && (m = !1, f.length ? h = f.concat(h) : v = -1, h.length && s())
    }

    function s() {
        if (!m) {
            var e = i(o);
            m = !0;
            for (var t = h.length; t;) {
                for (f = h, h = []; ++v < t;) f && f[v].run();
                v = -1, t = h.length
            }
            f = null, m = !1, r(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var u, p, d = e.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            p = a
        }
    }();
    var f, h = [],
        m = !1,
        v = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new c(e, t)), 1 !== h.length || m || i(s)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e) {
        return []
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        saveAs(e, t)
    }
}, function(e, t) {
    function n(e) {
        if (null == e || "object" != typeof e) return e;
        var t = e,
            a = H.call(e);
        if ("[object Array]" === a) {
            t = [];
            for (var i = 0, r = e.length; i < r; i++) t[i] = n(e[i])
        } else if (U[a]) {
            var o = e.constructor;
            if (e.constructor.from) t = o.from(e);
            else {
                t = new o(e.length);
                for (var i = 0, r = e.length; i < r; i++) t[i] = n(e[i])
            }
        } else if (!B[a] && !P(e) && !w(e)) {
            t = {};
            for (var s in e) e.hasOwnProperty(s) && (t[s] = n(e[s]))
        }
        return t
    }

    function a(e, t, i) {
        if (!T(t) || !T(e)) return i ? n(t) : e;
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                var o = e[r],
                    s = t[r];
                !T(s) || !T(o) || _(s) || _(o) || w(s) || w(o) || E(s) || E(o) || P(s) || P(o) ? !i && r in e || (e[r] = n(t[r], !0)) : a(o, s, i)
            } return e
    }

    function i(e, t) {
        for (var n = e[0], i = 1, r = e.length; i < r; i++) n = a(n, e[i], t);
        return n
    }

    function r(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function o(e, t, n) {
        for (var a in t) t.hasOwnProperty(a) && (n ? null != t[a] : null == e[a]) && (e[a] = t[a]);
        return e
    }

    function s() {
        return k || (k = q().getContext("2d")), k
    }

    function c(e, t) {
        if (e) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, a = e.length; n < a; n++)
                if (e[n] === t) return n
        }
        return -1
    }

    function l(e, t) {
        function n() {}
        var a = e.prototype;
        n.prototype = t.prototype, e.prototype = new n;
        for (var i in a) e.prototype[i] = a[i];
        e.prototype.constructor = e, e.superClass = t
    }

    function u(e, t, n) {
        e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, o(e, t, n)
    }

    function p(e) {
        if (e) return "string" != typeof e && "number" == typeof e.length
    }

    function d(e, t, n) {
        if (e && t)
            if (e.forEach && e.forEach === j) e.forEach(t, n);
            else if (e.length === +e.length)
            for (var a = 0, i = e.length; a < i; a++) t.call(n, e[a], a, e);
        else
            for (var r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function f(e, t, n) {
        if (e && t) {
            if (e.map && e.map === W) return e.map(t, n);
            for (var a = [], i = 0, r = e.length; i < r; i++) a.push(t.call(n, e[i], i, e));
            return a
        }
    }

    function h(e, t, n, a) {
        if (e && t) {
            if (e.reduce && e.reduce === X) return e.reduce(t, n, a);
            for (var i = 0, r = e.length; i < r; i++) n = t.call(a, n, e[i], i, e);
            return n
        }
    }

    function m(e, t, n) {
        if (e && t) {
            if (e.filter && e.filter === G) return e.filter(t, n);
            for (var a = [], i = 0, r = e.length; i < r; i++) t.call(n, e[i], i, e) && a.push(e[i]);
            return a
        }
    }

    function v(e, t, n) {
        if (e && t)
            for (var a = 0, i = e.length; a < i; a++)
                if (t.call(n, e[a], a, e)) return e[a]
    }

    function g(e, t) {
        var n = V.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(V.call(arguments)))
        }
    }

    function x(e) {
        var t = V.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(V.call(arguments)))
        }
    }

    function _(e) {
        return "[object Array]" === H.call(e)
    }

    function y(e) {
        return "function" == typeof e
    }

    function b(e) {
        return "[object String]" === H.call(e)
    }

    function T(e) {
        var t = typeof e;
        return "function" === t || !!e && "object" == t
    }

    function E(e) {
        return !!B[H.call(e)]
    }

    function w(e) {
        return "object" == typeof e && "number" == typeof e.nodeType && "object" == typeof e.ownerDocument
    }

    function A(e) {
        return e !== e
    }

    function S(e) {
        for (var t = 0, n = arguments.length; t < n; t++)
            if (null != arguments[t]) return arguments[t]
    }

    function C(e, t) {
        return null != e ? e : t
    }

    function R(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function M() {
        return Function.call.apply(V, arguments)
    }

    function N(e) {
        if ("number" == typeof e) return [e, e, e, e];
        var t = e.length;
        return 2 === t ? [e[0], e[1], e[0], e[1]] : 3 === t ? [e[0], e[1], e[2], e[1]] : e
    }

    function L(e, t) {
        if (!e) throw new Error(t)
    }

    function O(e) {
        e[Y] = !0
    }

    function P(e) {
        return e[Y]
    }

    function D(e) {
        e && d(e, function(e, t) {
            this.set(t, e)
        }, this)
    }

    function I(e) {
        return new D(e)
    }

    function F() {}
    var k, B = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        },
        U = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        },
        H = Object.prototype.toString,
        z = Array.prototype,
        j = z.forEach,
        G = z.filter,
        V = z.slice,
        W = z.map,
        X = z.reduce,
        q = function() {
            return document.createElement("canvas")
        },
        Y = "__ec_primitive__";
    D.prototype = {
        constructor: D,
        get: function(e) {
            return this["_ec_" + e]
        },
        set: function(e, t) {
            return this["_ec_" + e] = t, t
        },
        each: function(e, t) {
            void 0 !== t && (e = g(e, t));
            for (var n in this) this.hasOwnProperty(n) && e(this[n], n.slice(4))
        },
        removeKey: function(e) {
            delete this["_ec_" + e]
        }
    };
    var K = {
        createCanvas: function(e) {
            q = e, t.createCanvas = e
        }
    };
    t.clone = n, t.merge = a, t.mergeAll = i, t.extend = r, t.defaults = o, t.createCanvas = q, t.getContext = s, t.indexOf = c, t.inherits = l, t.mixin = u, t.isArrayLike = p, t.each = d, t.map = f, t.reduce = h, t.filter = m, t.find = v, t.bind = g, t.curry = x, t.isArray = _, t.isFunction = y, t.isString = b, t.isObject = T, t.isBuiltInObject = E, t.isDom = w, t.eqNaN = A, t.retrieve = S, t.retrieve2 = C, t.retrieve3 = R, t.slice = M, t.normalizeCssArray = N, t.assert = L, t.setAsPrimitive = O, t.isPrimitive = P, t.createHashMap = I, t.noop = F, t.$inject = K
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        function i(e) {
            var a = e.filter(function(e) {
                return e.type.match(/image/)
            })[0];
            a && (t[n] = URL.createObjectURL(a), r._onChange(a, t[n]), r.update())
        }
        ControlKit.ObjectComponent.apply(this, arguments), this._object = t, this._key = n, this._onChange = a.onChange || function() {}, this._getFileNameByURL = a.getFileName || function(e) {
            return e
        };
        var r = this,
            o = this._wrapNode;
        o.setStyleClass("texture-wrap");
        var s = document.createElement("img"),
            c = document.createElement("div");
        c.className = "texture-delete button";
        var l = document.createElement("div");
        l.className = "texture-upload button", this._img = s, this._uploadEl = l, o.getElement().appendChild(s), o.getElement().appendChild(l), o.getElement().appendChild(c), this.update();
        var u = this._wrapNode.getParent().getElement();
        FileAPI.event.dnd(u, function(e) {
            e ? u.classList.add("drag-hover") : u.classList.remove("drag-hover")
        }, function(e) {
            i(e)
        }), c.addEventListener("click", function() {
            t[n] = "none", r.update(), r._onChange(null, "none")
        }), l.addEventListener("click", function() {
            var e = document.createElement("input");
            e.type = "file", e.onchange = function(t) {
                i(Array.prototype.slice.call(e.files))
            }, e.click()
        })
    }
    a.prototype = Object.create(ControlKit.ObjectComponent.prototype), a.prototype.constructor = a, a.prototype.update = function() {
        var e = this._object[this._key];
        this._img.src = e && "none" !== e.toLowerCase() ? e : "./img/chessboard.jpg", this._img.style.opacity = e && "none" != e ? 1 : .5;
        var t = this._getFileNameByURL(e) || e || "none";
        this._uploadEl.innerHTML = t, this._uploadEl.title = t
    }, t.a = a
}, function(e, t, n) {
    "use strict";

    function a() {
        document.getElementById("timeline").style.display = "block";

    }

    function i() {
        document.getElementById("timeline").style.display = "none", c()
    }

    function r(e) {
        //pause from beginning (joca)
        
        if (u = e, l = Math.floor(e.getAnimationDuration()), l > 0 ? a() : i(), !(l <= 0)) {
            var t = document.getElementById("timeline-pause-resume");
            t.removeEventListener("click", d), t.addEventListener("click", d = function() {
                f ? c() : s(n)
            }), m = 0, h = 0, o();
            var n = Math.random();
            p = n, l > 0 ? s(n) : c();
            var r = null;
            if (!$("#timeline-progress input").data("ionRangeSlider")) {
                $("#timeline-progress input").ionRangeSlider({
                    from_shadow: !0,
                    force_edges: !0,
                    onChange: function(e) {
                        h = e.from, u.setPose(h), null == r && (r = f), c()
                    },
                    onFinish: function() {
                        r && s(n), r = null
                    }
                }), $("#timeline-range input").ionRangeSlider({
                    from_shadow: !0,
                    force_edges: !0,
                    type: "double",
                    drag_interval: !0,
                    grid: !0,
                    grid_num: 10,
                    onChange: function(e) {
                        l = e.to - e.from, m = e.from, h = Math.min(Math.max(e.from, h), e.to), u.setPose(h), v.update({
                            from_min: e.from,
                            from_max: e.to
                        })
                    }
                });
                var v = $("#timeline-progress input").data("ionRangeSlider"),
                    g = $("#timeline-range input").data("ionRangeSlider");
                v.update({
                    min: 0,
                    max: l,
                    from: h,
                    from_min: 0,
                    from_max: l
                }), g.update({
                    min: 0,
                    max: l,
                    from: 0,
                    to: l
                })
            }
        }
        document.getElementById('timeline-pause-resume').click();
    }

    function o() {
        var e = $("#timeline-progress input").data("ionRangeSlider");
        e && e.update({
            from: h
        })
    }

    function s(e) {
        function t() {
            if (f && e === p) {
                u.setPose(h);
                var a = Math.min(Date.now() - n, 20);
                n = Date.now(), o(), h += a, h > m + l && (h = m), requestAnimationFrame(t)
            }
        }
        if (!f) {
            f = !0;
            var n = Date.now(),
                a = document.getElementById("timeline-pause-resume");
            a.classList.remove("icon-resume"), a.classList.add("icon-pause"), requestAnimationFrame(t)
        }
    }

    function c() {
        //joca vuelve
        if (f) {
            f = !1;
            var e = document.getElementById("timeline-pause-resume");
            e.classList.remove("icon-pause"), e.classList.add("icon-resume")
        }
    }
    n.d(t, "b", function() {
        return r
    }), n.d(t, "a", function() {
        return i
    });
    var l, u, p, d, f = !1,
        h = 0,
        m = 0
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        i = (n(3), n(13)),
        r = n(2),
        o = n(11),
        s = n(10),
        c = n(160);
    r.a.import(c.a);
    var l = new a.a,
        u = new o.a;
    u.attach(l);
    var p = new i.a({
            fragment: r.a.source("qmv.editor.edge")
        }),
        d = new s.a({
            shader: new r.a(r.a.source("clay.basic.vertex"), r.a.source("clay.basic.fragment"))
        });
    t.a = function(e, t, n) {
        var a = e.getRenderer();
        l.width = a.getWidth(), l.height = a.getHeight(), u.bind(a), a.gl.clearColor(0, 0, 0, 0), a.gl.clear(a.gl.COLOR_BUFFER_BIT | a.gl.DEPTH_BUFFER_BIT), n.update(), a.renderPass(t, n, {
            getMaterial: function() {
                return d
            }
        }), u.unbind(a), p.setUniform("edgeWidth", 1.5), p.setUniform("edgeColor", [1, 1, 0, 1]), p.setUniform("texture", l), p.setUniform("textureSize", [l.width, l.height]), p.render(a)
    }
}, function(e, t, n) {
    "use strict";
    t.a = "@export qmv.editor.edge\n\nuniform sampler2D texture;\n\nuniform vec2 textureSize;\n\nuniform vec4 edgeColor: [0,0,0,1.0];\nuniform float edgeWidth: 1;\n\nvarying vec2 v_Texcoord;\n\nfloat getCol(vec2 coord) {\n return texture2D(texture, coord).a;\n}\n\nvoid main() {\n vec2 cc = v_Texcoord;\n float center = getCol(cc);\n\n float dx = edgeWidth / textureSize.x;\n float dy = edgeWidth / textureSize.y;\n\n vec2 coord;\n float topLeft = getCol(cc+vec2(-dx, -dy));\n float top = getCol(cc+vec2(0.0, -dy));\n float topRight = getCol(cc+vec2(dx, -dy));\n float left = getCol(cc+vec2(-dx, 0.0));\n float right = getCol(cc+vec2(dx, 0.0));\n float bottomLeft = getCol(cc+vec2(-dx, dy));\n float bottom = getCol(cc+vec2(0.0, dy));\n float bottomRight = getCol(cc+vec2(dx, dy));\n\n float v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;\n float h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;\n\n float edge = sqrt(h * h + v * v);\n\n edge = smoothstep(0.9, 1.0, edge);\n if (edge < 0.5) {\n discard;\n }\n\n gl_FragColor = edgeColor;\n}\n@end"
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        window.open(e)
    }
}]);