var _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  },
  _typeof2 = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function (e) {
    return void 0 === e ? "undefined" : _typeof3(e)
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof3(e)
  },
  _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
    return void 0 === e ? "undefined" : _typeof2(e)
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e)
  },
  Giteement = function (n) {
    var o = {};

    function r(e) {
      if (o[e]) return o[e].exports;
      var t = o[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    return r.m = n, r.c = o, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == (void 0 === t ? "undefined" : _typeof(t)) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
        for (var o in t) r.d(n, o, function (e) {
          return t[e]
        }.bind(null, o));
      return n
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 126)
  }([function (e, o, Jn) {
    (function (In) {
      var e, t, n, Rn = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : _typeof(e)
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
      };
      n = function () {
        var e, r;

        function M() {
          return e.apply(null, arguments)
        }

        function s(e) {
          return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function d(e) {
          return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function u(e) {
          return void 0 === e
        }

        function l(e) {
          return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function c(e) {
          return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function _(e, t) {
          var n, o = [];
          for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
          return o
        }

        function v(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }

        function m(e, t) {
          for (var n in t) v(t, n) && (e[n] = t[n]);
          return v(t, "toString") && (e.toString = t.toString), v(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function f(e, t, n, o) {
          return kt(e, t, n, o, !0).utc()
        }

        function L(e) {
          return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), e._pf
        }

        function p(e) {
          if (null == e._isValid) {
            var t = L(e),
              n = r.call(t.parsedDateParts, function (e) {
                return null != e
              }),
              o = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (o = o && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return o;
            e._isValid = o
          }
          return e._isValid
        }

        function y(e) {
          var t = f(NaN);
          return null != e ? m(L(t), e) : L(t).userInvalidated = !0, t
        }
        r = Array.prototype.some ? Array.prototype.some : function (e) {
          for (var t = Object(this), n = t.length >>> 0, o = 0; o < n; o++)
            if (o in t && e.call(this, t[o], o, t)) return !0;
          return !1
        };
        var i = M.momentProperties = [];

        function h(e, t) {
          var n, o, r;
          if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = L(t)), u(t._locale) || (e._locale = t._locale), 0 < i.length)
            for (n = 0; n < i.length; n++) u(r = t[o = i[n]]) || (e[o] = r);
          return e
        }
        var t = !1;

        function b(e) {
          h(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, M.updateOffset(this), t = !1)
        }

        function g(e) {
          return e instanceof b || null != e && null != e._isAMomentObject
        }

        function Y(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function k(e) {
          var t = +e,
            n = 0;
          return 0 != t && isFinite(t) && (n = Y(t)), n
        }

        function a(e, t, n) {
          var o, r = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            a = 0;
          for (o = 0; o < r; o++)(n && e[o] !== t[o] || !n && k(e[o]) !== k(t[o])) && a++;
          return a + i
        }

        function S(e) {
          !1 === M.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function n(r, i) {
          var a = !0;
          return m(function () {
            if (null != M.deprecationHandler && M.deprecationHandler(null, r), a) {
              for (var e, t = [], n = 0; n < arguments.length; n++) {
                if (e = "", "object" === Rn(arguments[n])) {
                  for (var o in e += "\n[" + n + "] ", arguments[0]) e += o + ": " + arguments[0][o] + ", ";
                  e = e.slice(0, -2)
                } else e = arguments[n];
                t.push(e)
              }
              S(r + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
            }
            return i.apply(this, arguments)
          }, i)
        }
        var o, D = {};

        function w(e, t) {
          null != M.deprecationHandler && M.deprecationHandler(e, t), D[e] || (S(t), D[e] = !0)
        }

        function T(e) {
          return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function x(e, t) {
          var n, o = m({}, e);
          for (n in t) v(t, n) && (d(e[n]) && d(t[n]) ? (o[n] = {}, m(o[n], e[n]), m(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
          for (n in e) v(e, n) && !v(t, n) && d(e[n]) && (o[n] = m({}, o[n]));
          return o
        }

        function j(e) {
          null != e && this.set(e)
        }
        M.suppressDeprecationWarnings = !1, M.deprecationHandler = null, o = Object.keys ? Object.keys : function (e) {
          var t, n = [];
          for (t in e) v(e, t) && n.push(t);
          return n
        };
        var H = {};

        function O(e, t) {
          var n = e.toLowerCase();
          H[n] = H[n + "s"] = H[t] = e
        }

        function E(e) {
          return "string" == typeof e ? H[e] || H[e.toLowerCase()] : void 0
        }

        function A(e) {
          var t, n, o = {};
          for (n in e) v(e, n) && (t = E(n)) && (o[t] = e[n]);
          return o
        }
        var P = {};

        function C(e, t) {
          P[e] = t
        }

        function W(e, t, n) {
          var o = "" + Math.abs(e),
            r = t - o.length;
          return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + o
        }
        var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          z = {},
          I = {};

        function R(e, t, n, o) {
          var r = o;
          "string" == typeof o && (r = function () {
            return this[o]()
          }), e && (I[e] = r), t && (I[t[0]] = function () {
            return W(r.apply(this, arguments), t[1], t[2])
          }), n && (I[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), e)
          })
        }

        function J(e, t) {
          return e.isValid() ? (t = q(t, e.localeData()), z[t] = z[t] || function (o) {
            var e, r, t, i = o.match(N);
            for (e = 0, r = i.length; e < r; e++) I[i[e]] ? i[e] = I[i[e]] : i[e] = (t = i[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function (e) {
              var t, n = "";
              for (t = 0; t < r; t++) n += T(i[t]) ? i[t].call(e, o) : i[t];
              return n
            }
          }(t), z[t](e)) : e.localeData().invalidDate()
        }

        function q(e, t) {
          var n = 5;

          function o(e) {
            return t.longDateFormat(e) || e
          }
          for (F.lastIndex = 0; 0 <= n && F.test(e);) e = e.replace(F, o), F.lastIndex = 0, n -= 1;
          return e
        }
        var U = /\d/,
          V = /\d\d/,
          B = /\d{3}/,
          G = /\d{4}/,
          $ = /[+-]?\d{6}/,
          K = /\d\d?/,
          Z = /\d\d\d\d?/,
          X = /\d\d\d\d\d\d?/,
          Q = /\d{1,3}/,
          ee = /\d{1,4}/,
          te = /[+-]?\d{1,6}/,
          ne = /\d+/,
          oe = /[+-]?\d+/,
          re = /Z|[+-]\d\d:?\d\d/gi,
          ie = /Z|[+-]\d\d(?::?\d\d)?/gi,
          ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          se = {};

        function de(e, n, o) {
          se[e] = T(n) ? n : function (e, t) {
            return e && o ? o : n
          }
        }

        function ue(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        var le = {};

        function ce(e, n) {
          var t, o = n;
          for ("string" == typeof e && (e = [e]), l(n) && (o = function (e, t) {
              t[n] = k(e)
            }), t = 0; t < e.length; t++) le[e[t]] = o
        }

        function _e(e, r) {
          ce(e, function (e, t, n, o) {
            n._w = n._w || {}, r(e, n._w, n, o)
          })
        }
        var me = 0,
          fe = 1,
          pe = 2,
          ye = 3,
          he = 4,
          Me = 5,
          ve = 6,
          Le = 7,
          be = 8;

        function ge(e) {
          return Ye(e) ? 366 : 365
        }

        function Ye(e) {
          return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }
        R("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? "" + e : "+" + e
        }), R(0, ["YY", 2], 0, function () {
          return this.year() % 100
        }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), C("year", 1), de("Y", oe), de("YY", K, V), de("YYYY", ee, G), de("YYYYY", te, $), de("YYYYYY", te, $), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
          t[me] = 2 === e.length ? M.parseTwoDigitYear(e) : k(e)
        }), ce("YY", function (e, t) {
          t[me] = M.parseTwoDigitYear(e)
        }), ce("Y", function (e, t) {
          t[me] = parseInt(e, 10)
        }), M.parseTwoDigitYear = function (e) {
          return k(e) + (68 < k(e) ? 1900 : 2e3)
        };
        var ke, Se = De("FullYear", !0);

        function De(t, n) {
          return function (e) {
            return null != e ? (Te(this, t, e), M.updateOffset(this, n), this) : we(this, t)
          }
        }

        function we(e, t) {
          return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function Te(e, t, n) {
          e.isValid() && !isNaN(n) && ("FullYear" === t && Ye(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), xe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        function xe(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n = (t % 12 + 12) % 12;
          return e += (t - n) / 12, 1 == n ? Ye(e) ? 29 : 28 : 31 - n % 7 % 2
        }
        ke = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
          var t;
          for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
          return -1
        }, R("M", ["MM", 2], "Mo", function () {
          return this.month() + 1
        }), R("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e)
        }), R("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e)
        }), O("month", "M"), C("month", 8), de("M", K), de("MM", K, V), de("MMM", function (e, t) {
          return t.monthsShortRegex(e)
        }), de("MMMM", function (e, t) {
          return t.monthsRegex(e)
        }), ce(["M", "MM"], function (e, t) {
          t[fe] = k(e) - 1
        }), ce(["MMM", "MMMM"], function (e, t, n, o) {
          var r = n._locale.monthsParse(e, o, n._strict);
          null != r ? t[fe] = r : L(n).invalidMonth = e
        });
        var je = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Ee(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = k(t);
            else if (!l(t = e.localeData().monthsParse(t))) return e;
          return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function Ae(e) {
          return null != e ? (Ee(this, e), M.updateOffset(this, !0), this) : we(this, "Month")
        }
        var Pe = ae,
          Ce = ae;

        function We() {
          function e(e, t) {
            return t.length - e.length
          }
          var t, n, o = [],
            r = [],
            i = [];
          for (t = 0; t < 12; t++) n = f([2e3, t]), o.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
          for (o.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) o[t] = ue(o[t]), r[t] = ue(r[t]);
          for (t = 0; t < 24; t++) i[t] = ue(i[t]);
          this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function Ne(e) {
          var t = new Date(Date.UTC.apply(null, arguments));
          return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function Fe(e, t, n) {
          var o = 7 + t - n;
          return -(7 + Ne(e, 0, o).getUTCDay() - t) % 7 + o - 1
        }

        function ze(e, t, n, o, r) {
          var i, a, s = 1 + 7 * (t - 1) + (7 + n - o) % 7 + Fe(e, o, r);
          return a = s <= 0 ? ge(i = e - 1) + s : s > ge(e) ? (i = e + 1, s - ge(e)) : (i = e, s), {
            year: i,
            dayOfYear: a
          }
        }

        function Ie(e, t, n) {
          var o, r, i = Fe(e.year(), t, n),
            a = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
          return a < 1 ? o = a + Re(r = e.year() - 1, t, n) : a > Re(e.year(), t, n) ? (o = a - Re(e.year(), t, n), r = e.year() + 1) : (r = e.year(), o = a), {
            week: o,
            year: r
          }
        }

        function Re(e, t, n) {
          var o = Fe(e, t, n),
            r = Fe(e + 1, t, n);
          return (ge(e) - o + r) / 7
        }
        R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), C("week", 5), C("isoWeek", 5), de("w", K), de("ww", K, V), de("W", K), de("WW", K, V), _e(["w", "ww", "W", "WW"], function (e, t, n, o) {
          t[o.substr(0, 1)] = k(e)
        }), R("d", 0, "do", "day"), R("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e)
        }), R("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e)
        }), R("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e)
        }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), C("day", 11), C("weekday", 11), C("isoWeekday", 11), de("d", K), de("e", K), de("E", K), de("dd", function (e, t) {
          return t.weekdaysMinRegex(e)
        }), de("ddd", function (e, t) {
          return t.weekdaysShortRegex(e)
        }), de("dddd", function (e, t) {
          return t.weekdaysRegex(e)
        }), _e(["dd", "ddd", "dddd"], function (e, t, n, o) {
          var r = n._locale.weekdaysParse(e, o, n._strict);
          null != r ? t.d = r : L(n).invalidWeekday = e
        }), _e(["d", "e", "E"], function (e, t, n, o) {
          t[o] = k(e)
        });
        var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Ve = ae,
          Be = ae,
          Ge = ae;

        function $e() {
          function e(e, t) {
            return t.length - e.length
          }
          var t, n, o, r, i, a = [],
            s = [],
            d = [],
            u = [];
          for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t), o = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), a.push(o), s.push(r), d.push(i), u.push(o), u.push(r), u.push(i);
          for (a.sort(e), s.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = ue(s[t]), d[t] = ue(d[t]), u[t] = ue(u[t]);
          this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function Ke() {
          return this.hours() % 12 || 12
        }

        function Ze(e, t) {
          R(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
          })
        }

        function Xe(e, t) {
          return t._meridiemParse
        }
        R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Ke), R("k", ["kk", 2], 0, function () {
          return this.hours() || 24
        }), R("hmm", 0, 0, function () {
          return "" + Ke.apply(this) + W(this.minutes(), 2)
        }), R("hmmss", 0, 0, function () {
          return "" + Ke.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
        }), R("Hmm", 0, 0, function () {
          return "" + this.hours() + W(this.minutes(), 2)
        }), R("Hmmss", 0, 0, function () {
          return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
        }), Ze("a", !0), Ze("A", !1), O("hour", "h"), C("hour", 13), de("a", Xe), de("A", Xe), de("H", K), de("h", K), de("k", K), de("HH", K, V), de("hh", K, V), de("kk", K, V), de("hmm", Z), de("hmmss", X), de("Hmm", Z), de("Hmmss", X), ce(["H", "HH"], ye), ce(["k", "kk"], function (e, t, n) {
          var o = k(e);
          t[ye] = 24 === o ? 0 : o
        }), ce(["a", "A"], function (e, t, n) {
          n._isPm = n._locale.isPM(e), n._meridiem = e
        }), ce(["h", "hh"], function (e, t, n) {
          t[ye] = k(e), L(n).bigHour = !0
        }), ce("hmm", function (e, t, n) {
          var o = e.length - 2;
          t[ye] = k(e.substr(0, o)), t[he] = k(e.substr(o)), L(n).bigHour = !0
        }), ce("hmmss", function (e, t, n) {
          var o = e.length - 4,
            r = e.length - 2;
          t[ye] = k(e.substr(0, o)), t[he] = k(e.substr(o, 2)), t[Me] = k(e.substr(r)), L(n).bigHour = !0
        }), ce("Hmm", function (e, t, n) {
          var o = e.length - 2;
          t[ye] = k(e.substr(0, o)), t[he] = k(e.substr(o))
        }), ce("Hmmss", function (e, t, n) {
          var o = e.length - 4,
            r = e.length - 2;
          t[ye] = k(e.substr(0, o)), t[he] = k(e.substr(o, 2)), t[Me] = k(e.substr(r))
        });
        var Qe, et = De("Hours", !0),
          tt = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            months: He,
            monthsShort: Oe,
            week: {
              dow: 0,
              doy: 6
            },
            weekdays: Je,
            weekdaysMin: Ue,
            weekdaysShort: qe,
            meridiemParse: /[ap]\.?m?\.?/i
          },
          nt = {},
          ot = {};

        function rt(e) {
          return e ? e.toLowerCase().replace("_", "-") : e
        }

        function it(e) {
          var t = null;
          if (!nt[e] && void 0 !== In && In && In.exports) try {
            t = Qe._abbr, Jn(131)("./" + e), at(t)
          } catch (e) {}
          return nt[e]
        }

        function at(e, t) {
          var n;
          return e && ((n = u(t) ? dt(e) : st(e, t)) ? Qe = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Qe._abbr
        }

        function st(e, t) {
          if (null === t) return delete nt[e], null;
          var n, o = tt;
          if (t.abbr = e, null != nt[e]) w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = nt[e]._config;
          else if (null != t.parentLocale)
            if (null != nt[t.parentLocale]) o = nt[t.parentLocale]._config;
            else {
              if (null == (n = it(t.parentLocale))) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              o = n._config
            } return nt[e] = new j(x(o, t)), ot[e] && ot[e].forEach(function (e) {
            st(e.name, e.config)
          }), at(e), nt[e]
        }

        function dt(e) {
          var t;
          if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Qe;
          if (!s(e)) {
            if (t = it(e)) return t;
            e = [e]
          }
          return function (e) {
            for (var t, n, o, r, i = 0; i < e.length;) {
              for (t = (r = rt(e[i]).split("-")).length, n = (n = rt(e[i + 1])) ? n.split("-") : null; 0 < t;) {
                if (o = it(r.slice(0, t).join("-"))) return o;
                if (n && n.length >= t && a(r, n, !0) >= t - 1) break;
                t--
              }
              i++
            }
            return Qe
          }(e)
        }

        function ut(e) {
          var t, n = e._a;
          return n && -2 === L(e).overflow && (t = n[fe] < 0 || 11 < n[fe] ? fe : n[pe] < 1 || n[pe] > xe(n[me], n[fe]) ? pe : n[ye] < 0 || 24 < n[ye] || 24 === n[ye] && (0 !== n[he] || 0 !== n[Me] || 0 !== n[ve]) ? ye : n[he] < 0 || 59 < n[he] ? he : n[Me] < 0 || 59 < n[Me] ? Me : n[ve] < 0 || 999 < n[ve] ? ve : -1, L(e)._overflowDayOfYear && (t < me || pe < t) && (t = pe), L(e)._overflowWeeks && -1 === t && (t = Le), L(e)._overflowWeekday && -1 === t && (t = be), L(e).overflow = t), e
        }

        function lt(e, t, n) {
          return null != e ? e : null != t ? t : n
        }

        function ct(e) {
          var t, n, o, r, i, a, s, d = [];
          if (!e._d) {
            for (a = e, s = void 0, s = new Date(M.now()), o = a._useUTC ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()] : [s.getFullYear(), s.getMonth(), s.getDate()], e._w && null == e._a[pe] && null == e._a[fe] && function (e) {
                var t, n, o, r, i, a, s, d;
                if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, a = 4, n = lt(t.GG, e._a[me], Ie(St(), 1, 4).year), o = lt(t.W, 1), ((r = lt(t.E, 1)) < 1 || 7 < r) && (d = !0);
                else {
                  i = e._locale._week.dow, a = e._locale._week.doy;
                  var u = Ie(St(), i, a);
                  n = lt(t.gg, e._a[me], u.year), o = lt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || 6 < t.e) && (d = !0)) : r = i
                }
                o < 1 || o > Re(n, i, a) ? L(e)._overflowWeeks = !0 : null != d ? L(e)._overflowWeekday = !0 : (s = ze(n, o, r, i, a), e._a[me] = s.year, e._dayOfYear = s.dayOfYear)
              }(e), null != e._dayOfYear && (i = lt(e._a[me], o[me]), (e._dayOfYear > ge(i) || 0 === e._dayOfYear) && (L(e)._overflowDayOfYear = !0), n = Ne(i, 0, e._dayOfYear), e._a[fe] = n.getUTCMonth(), e._a[pe] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = d[t] = o[t];
            for (; t < 7; t++) e._a[t] = d[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ye] && 0 === e._a[he] && 0 === e._a[Me] && 0 === e._a[ve] && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? Ne : function (e, t, n, o, r, i, a) {
              var s = new Date(e, t, n, o, r, i, a);
              return e < 100 && 0 <= e && isFinite(s.getFullYear()) && s.setFullYear(e), s
            }).apply(null, d), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (L(e).weekdayMismatch = !0)
          }
        }
        var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ft = /Z|[+-]\d\d(?::?\d\d)?/,
          pt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
          ],
          yt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
          ],
          ht = /^\/?Date\((\-?\d+)/i;

        function Mt(e) {
          var t, n, o, r, i, a, s = e._i,
            d = _t.exec(s) || mt.exec(s);
          if (d) {
            for (L(e).iso = !0, t = 0, n = pt.length; t < n; t++)
              if (pt[t][1].exec(d[1])) {
                r = pt[t][0], o = !1 !== pt[t][2];
                break
              } if (null == r) return void(e._isValid = !1);
            if (d[3]) {
              for (t = 0, n = yt.length; t < n; t++)
                if (yt[t][1].exec(d[3])) {
                  i = (d[2] || " ") + yt[t][0];
                  break
                } if (null == i) return void(e._isValid = !1)
            }
            if (!o && null != i) return void(e._isValid = !1);
            if (d[4]) {
              if (!ft.exec(d[4])) return void(e._isValid = !1);
              a = "Z"
            }
            e._f = r + (i || "") + (a || ""), gt(e)
          } else e._isValid = !1
        }
        var vt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Lt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
          };

        function bt(e) {
          var t, n, o, r, i, a, s, d, u, l, c, _ = vt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
          if (_) {
            var m = (r = _[4], i = _[3], a = _[2], s = _[5], d = _[6], u = _[7], c = [(l = parseInt(r, 10), l <= 49 ? 2e3 + l : l <= 999 ? 1900 + l : l), Oe.indexOf(i), parseInt(a, 10), parseInt(s, 10), parseInt(d, 10)], u && c.push(parseInt(u, 10)), c);
            if (n = m, o = e, (t = _[1]) && qe.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (L(o).weekdayMismatch = !0, !(o._isValid = !1))) return;
            e._a = m, e._tzm = function (e, t, n) {
              if (e) return Lt[e];
              if (t) return 0;
              var o = parseInt(n, 10),
                r = o % 100;
              return (o - r) / 100 * 60 + r
            }(_[8], _[9], _[10]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), L(e).rfc2822 = !0
          } else e._isValid = !1
        }

        function gt(e) {
          if (e._f !== M.ISO_8601)
            if (e._f !== M.RFC_2822) {
              e._a = [], L(e).empty = !0;
              var t, n, o, r, i, a = "" + e._i,
                s = a.length,
                d = 0;
              for (o = q(e._f, e._locale).match(N) || [], t = 0; t < o.length; t++) r = o[t], (n = (a.match((h = e, v(se, y = r) ? se[y](h._strict, h._locale) : new RegExp(ue(y.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, o, r) {
                return t || n || o || r
              }))))) || [])[0]) && (0 < (i = a.substr(0, a.indexOf(n))).length && L(e).unusedInput.push(i), a = a.slice(a.indexOf(n) + n.length), d += n.length), I[r] ? (n ? L(e).empty = !1 : L(e).unusedTokens.push(r), m = r, p = e, null != (f = n) && v(le, m) && le[m](f, p._a, p, m)) : e._strict && !n && L(e).unusedTokens.push(r);
              L(e).charsLeftOver = s - d, 0 < a.length && L(e).unusedInput.push(a), e._a[ye] <= 12 && !0 === L(e).bigHour && 0 < e._a[ye] && (L(e).bigHour = void 0), L(e).parsedDateParts = e._a.slice(0), L(e).meridiem = e._meridiem, e._a[ye] = (u = e._locale, l = e._a[ye], null == (c = e._meridiem) ? l : null != u.meridiemHour ? u.meridiemHour(l, c) : (null != u.isPM && ((_ = u.isPM(c)) && l < 12 && (l += 12), _ || 12 !== l || (l = 0)), l)), ct(e), ut(e)
            } else bt(e);
          else Mt(e);
          var u, l, c, _, m, f, p, y, h
        }

        function Yt(e) {
          var t, n, o, r, i = e._i,
            a = e._f;
          return e._locale = e._locale || dt(e._l), null === i || void 0 === a && "" === i ? y({
            nullInput: !0
          }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), g(i) ? new b(ut(i)) : (c(i) ? e._d = i : s(a) ? function (e) {
            var t, n, o, r, i;
            if (0 === e._f.length) return L(e).invalidFormat = !0, e._d = new Date(NaN);
            for (r = 0; r < e._f.length; r++) i = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], gt(t), p(t) && (i += L(t).charsLeftOver, i += 10 * L(t).unusedTokens.length, L(t).score = i, (null == o || i < o) && (o = i, n = t));
            m(e, n || t)
          }(e) : a ? gt(e) : u(r = (t = e)._i) ? t._d = new Date(M.now()) : c(r) ? t._d = new Date(r.valueOf()) : "string" == typeof r ? (n = t, null === (o = ht.exec(n._i)) ? (Mt(n), !1 === n._isValid && (delete n._isValid, bt(n), !1 === n._isValid && (delete n._isValid, M.createFromInputFallback(n)))) : n._d = new Date(+o[1])) : s(r) ? (t._a = _(r.slice(0), function (e) {
            return parseInt(e, 10)
          }), ct(t)) : d(r) ? function (e) {
            if (!e._d) {
              var t = A(e._i);
              e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10)
              }), ct(e)
            }
          }(t) : l(r) ? t._d = new Date(r) : M.createFromInputFallback(t), p(e) || (e._d = null), e))
        }

        function kt(e, t, n, o, r) {
          var i, a = {};
          return !0 !== n && !1 !== n || (o = n, n = void 0), (d(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
              if (e.hasOwnProperty(t)) return !1;
            return !0
          }(e) || s(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = n, a._i = e, a._f = t, a._strict = o, (i = new b(ut(Yt(a))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i
        }

        function St(e, t, n, o) {
          return kt(e, t, n, o, !1)
        }
        M.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), M.ISO_8601 = function () {}, M.RFC_2822 = function () {};
        var Dt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = St.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : y()
          }),
          wt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = St.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : y()
          });

        function Tt(e, t) {
          var n, o;
          if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return St();
          for (n = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][e](n) || (n = t[o]);
          return n
        }
        var xt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function jt(e) {
          var t = A(e),
            n = t.year || 0,
            o = t.quarter || 0,
            r = t.month || 0,
            i = t.week || 0,
            a = t.day || 0,
            s = t.hour || 0,
            d = t.minute || 0,
            u = t.second || 0,
            l = t.millisecond || 0;
          this._isValid = function (e) {
            for (var t in e)
              if (-1 === ke.call(xt, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, o = 0; o < xt.length; ++o)
              if (e[xt[o]]) {
                if (n) return !1;
                parseFloat(e[xt[o]]) !== k(e[xt[o]]) && (n = !0)
              } return !0
          }(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * s * 60 * 60, this._days = +a + 7 * i, this._months = +r + 3 * o + 12 * n, this._data = {}, this._locale = dt(), this._bubble()
        }

        function Ht(e) {
          return e instanceof jt
        }

        function Ot(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Et(e, n) {
          R(e, 0, 0, function () {
            var e = this.utcOffset(),
              t = "+";
            return e < 0 && (e = -e, t = "-"), t + W(~~(e / 60), 2) + n + W(~~e % 60, 2)
          })
        }
        Et("Z", ":"), Et("ZZ", ""), de("Z", ie), de("ZZ", ie), ce(["Z", "ZZ"], function (e, t, n) {
          n._useUTC = !0, n._tzm = Pt(ie, e)
        });
        var At = /([\+\-]|\d\d)/gi;

        function Pt(e, t) {
          var n = (t || "").match(e);
          if (null === n) return null;
          var o = ((n[n.length - 1] || []) + "").match(At) || ["-", 0, 0],
            r = 60 * o[1] + k(o[2]);
          return 0 === r ? 0 : "+" === o[0] ? r : -r
        }

        function Ct(e, t) {
          var n, o;
          return t._isUTC ? (n = t.clone(), o = (g(e) || c(e) ? e.valueOf() : St(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), M.updateOffset(n, !1), n) : St(e).local()
        }

        function Wt(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Nt() {
          return !!this.isValid() && this._isUTC && 0 === this._offset
        }
        M.updateOffset = function () {};
        var Ft = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function It(e, t) {
          var n, o, r, i, a, s, d = e,
            u = null;
          return Ht(e) ? d = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
          } : l(e) ? (d = {}, t ? d[t] = e : d.milliseconds = e) : (u = Ft.exec(e)) ? (n = "-" === u[1] ? -1 : 1, d = {
            y: 0,
            d: k(u[pe]) * n,
            h: k(u[ye]) * n,
            m: k(u[he]) * n,
            s: k(u[Me]) * n,
            ms: k(Ot(1e3 * u[ve])) * n
          }) : (u = zt.exec(e)) ? (n = "-" === u[1] ? -1 : (u[1], 1), d = {
            y: Rt(u[2], n),
            M: Rt(u[3], n),
            w: Rt(u[4], n),
            d: Rt(u[5], n),
            h: Rt(u[6], n),
            m: Rt(u[7], n),
            s: Rt(u[8], n)
          }) : null == d ? d = {} : "object" === (void 0 === d ? "undefined" : Rn(d)) && ("from" in d || "to" in d) && (i = St(d.from), a = St(d.to), r = i.isValid() && a.isValid() ? (a = Ct(a, i), i.isBefore(a) ? s = Jt(i, a) : ((s = Jt(a, i)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
            milliseconds: 0,
            months: 0
          }, (d = {}).ms = r.milliseconds, d.M = r.months), o = new jt(d), Ht(e) && v(e, "_locale") && (o._locale = e._locale), o
        }

        function Rt(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t
        }

        function Jt(e, t) {
          var n = {
            milliseconds: 0,
            months: 0
          };
          return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function qt(o, r) {
          return function (e, t) {
            var n;
            return null === t || isNaN(+t) || (w(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Ut(this, It(e = "string" == typeof e ? +e : e, t), o), this
          }
        }

        function Ut(e, t, n, o) {
          var r = t._milliseconds,
            i = Ot(t._days),
            a = Ot(t._months);
          e.isValid() && (o = null == o || o, a && Ee(e, we(e, "Month") + a * n), i && Te(e, "Date", we(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), o && M.updateOffset(e, i || a))
        }
        It.fn = jt.prototype, It.invalid = function () {
          return It(NaN)
        };
        var Vt = qt(1, "add"),
          Bt = qt(-1, "subtract");

        function Gt(e, t) {
          var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            o = e.clone().add(n, "months");
          return -(n + (t - o < 0 ? (t - o) / (o - e.clone().add(n - 1, "months")) : (t - o) / (e.clone().add(1 + n, "months") - o))) || 0
        }

        function $t(e) {
          var t;
          return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this)
        }
        M.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", M.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
          return void 0 === e ? this.localeData() : this.locale(e)
        });

        function Zt() {
          return this._locale
        }

        function Xt(e, t) {
          R(0, [e, e.length], 0, t)
        }

        function Qt(e, t, n, o, r) {
          var i;
          return null == e ? Ie(this, o, r).year : (t > (i = Re(e, o, r)) && (t = i), function (e, t, n, o, r) {
            var i = ze(e, t, n, o, r),
              a = Ne(i.year, 0, i.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
          }.call(this, e, t, n, o, r))
        }
        R(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100
        }), R(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100
        }), Xt("gggg", "weekYear"), Xt("ggggg", "weekYear"), Xt("GGGG", "isoWeekYear"), Xt("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), C("weekYear", 1), C("isoWeekYear", 1), de("G", oe), de("g", oe), de("GG", K, V), de("gg", K, V), de("GGGG", ee, G), de("gggg", ee, G), de("GGGGG", te, $), de("ggggg", te, $), _e(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, o) {
          t[o.substr(0, 2)] = k(e)
        }), _e(["gg", "GG"], function (e, t, n, o) {
          t[o] = M.parseTwoDigitYear(e)
        }), R("Q", 0, "Qo", "quarter"), O("quarter", "Q"), C("quarter", 7), de("Q", U), ce("Q", function (e, t) {
          t[fe] = 3 * (k(e) - 1)
        }), R("D", ["DD", 2], "Do", "date"), O("date", "D"), C("date", 9), de("D", K), de("DD", K, V), de("Do", function (e, t) {
          return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), ce(["D", "DD"], pe), ce("Do", function (e, t) {
          t[pe] = k(e.match(K)[0])
        });
        var en = De("Date", !0);
        R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), C("dayOfYear", 4), de("DDD", Q), de("DDDD", B), ce(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = k(e)
        }), R("m", ["mm", 2], 0, "minute"), O("minute", "m"), C("minute", 14), de("m", K), de("mm", K, V), ce(["m", "mm"], he);
        var tn = De("Minutes", !1);
        R("s", ["ss", 2], 0, "second"), O("second", "s"), C("second", 15), de("s", K), de("ss", K, V), ce(["s", "ss"], Me);
        var nn, on = De("Seconds", !1);
        for (R("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
          }), R(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
          }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
          }), R(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
          }), R(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
          }), R(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
          }), R(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
          }), R(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
          }), O("millisecond", "ms"), C("millisecond", 16), de("S", Q, U), de("SS", Q, V), de("SSS", Q, B), nn = "SSSS"; nn.length <= 9; nn += "S") de(nn, ne);

        function rn(e, t) {
          t[ve] = k(1e3 * ("0." + e))
        }
        for (nn = "S"; nn.length <= 9; nn += "S") ce(nn, rn);
        var an = De("Milliseconds", !1);
        R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
        var sn = b.prototype;

        function dn(e) {
          return e
        }
        sn.add = Vt, sn.calendar = function (e, t) {
          var n = e || St(),
            o = Ct(n, this).startOf("day"),
            r = M.calendarFormat(this, o) || "sameElse",
            i = t && (T(t[r]) ? t[r].call(this, n) : t[r]);
          return this.format(i || this.localeData().calendar(r, this, St(n)))
        }, sn.clone = function () {
          return new b(this)
        }, sn.diff = function (e, t, n) {
          var o, r, i;
          if (!this.isValid()) return NaN;
          if (!(o = Ct(e, this)).isValid()) return NaN;
          switch (r = 6e4 * (o.utcOffset() - this.utcOffset()), t = E(t)) {
            case "year":
              i = Gt(this, o) / 12;
              break;
            case "month":
              i = Gt(this, o);
              break;
            case "quarter":
              i = Gt(this, o) / 3;
              break;
            case "second":
              i = (this - o) / 1e3;
              break;
            case "minute":
              i = (this - o) / 6e4;
              break;
            case "hour":
              i = (this - o) / 36e5;
              break;
            case "day":
              i = (this - o - r) / 864e5;
              break;
            case "week":
              i = (this - o - r) / 6048e5;
              break;
            default:
              i = this - o
          }
          return n ? i : Y(i)
        }, sn.endOf = function (e) {
          return void 0 === (e = E(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }, sn.format = function (e) {
          e = e || (this.isUtc() ? M.defaultFormatUtc : M.defaultFormat);
          var t = J(this, e);
          return this.localeData().postformat(t)
        }, sn.from = function (e, t) {
          return this.isValid() && (g(e) && e.isValid() || St(e).isValid()) ? It({
            to: this,
            from: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, sn.fromNow = function (e) {
          return this.from(St(), e)
        }, sn.to = function (e, t) {
          return this.isValid() && (g(e) && e.isValid() || St(e).isValid()) ? It({
            from: this,
            to: e
          }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, sn.toNow = function (e) {
          return this.to(St(), e)
        }, sn.get = function (e) {
          return T(this[e = E(e)]) ? this[e]() : this
        }, sn.invalidAt = function () {
          return L(this).overflow
        }, sn.isAfter = function (e, t) {
          var n = g(e) ? e : St(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = E(u(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }, sn.isBefore = function (e, t) {
          var n = g(e) ? e : St(e);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = E(u(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }, sn.isBetween = function (e, t, n, o) {
          return ("(" === (o = o || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === o[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }, sn.isSame = function (e, t) {
          var n, o = g(e) ? e : St(e);
          return !(!this.isValid() || !o.isValid()) && ("millisecond" === (t = E(t || "millisecond")) ? this.valueOf() === o.valueOf() : (n = o.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }, sn.isSameOrAfter = function (e, t) {
          return this.isSame(e, t) || this.isAfter(e, t)
        }, sn.isSameOrBefore = function (e, t) {
          return this.isSame(e, t) || this.isBefore(e, t)
        }, sn.isValid = function () {
          return p(this)
        }, sn.lang = Kt, sn.locale = $t, sn.localeData = Zt, sn.max = wt, sn.min = Dt, sn.parsingFlags = function () {
          return m({}, L(this))
        }, sn.set = function (e, t) {
          if ("object" === (void 0 === e ? "undefined" : Rn(e)))
            for (var n = function (e) {
                var t = [];
                for (var n in e) t.push({
                  unit: n,
                  priority: P[n]
                });
                return t.sort(function (e, t) {
                  return e.priority - t.priority
                }), t
              }(e = A(e)), o = 0; o < n.length; o++) this[n[o].unit](e[n[o].unit]);
          else if (T(this[e = E(e)])) return this[e](t);
          return this
        }, sn.startOf = function (e) {
          switch (e = E(e)) {
            case "year":
              this.month(0);
            case "quarter":
            case "month":
              this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
              this.hours(0);
            case "hour":
              this.minutes(0);
            case "minute":
              this.seconds(0);
            case "second":
              this.milliseconds(0)
          }
          return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, sn.subtract = Bt, sn.toArray = function () {
          var e = this;
          return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }, sn.toObject = function () {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
          }
        }, sn.toDate = function () {
          return new Date(this.valueOf())
        }, sn.toISOString = function (e) {
          if (!this.isValid()) return null;
          var t = !0 !== e,
            n = t ? this.clone().utc() : this;
          return n.year() < 0 || 9999 < n.year() ? J(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(n, "Z")) : J(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, sn.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e = "moment",
            t = "";
          this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
          var n = "[" + e + '("]',
            o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            r = t + '[")]';
          return this.format(n + o + "-MM-DD[T]HH:mm:ss.SSS" + r)
        }, sn.toJSON = function () {
          return this.isValid() ? this.toISOString() : null
        }, sn.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, sn.unix = function () {
          return Math.floor(this.valueOf() / 1e3)
        }, sn.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, sn.creationData = function () {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          }
        }, sn.year = Se, sn.isLeapYear = function () {
          return Ye(this.year())
        }, sn.weekYear = function (e) {
          return Qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, sn.isoWeekYear = function (e) {
          return Qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, sn.quarter = sn.quarters = function (e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, sn.month = Ae, sn.daysInMonth = function () {
          return xe(this.year(), this.month())
        }, sn.week = sn.weeks = function (e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), "d")
        }, sn.isoWeek = sn.isoWeeks = function (e) {
          var t = Ie(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), "d")
        }, sn.weeksInYear = function () {
          var e = this.localeData()._week;
          return Re(this.year(), e.dow, e.doy)
        }, sn.isoWeeksInYear = function () {
          return Re(this.year(), 1, 4)
        }, sn.date = en, sn.day = sn.days = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t, n, o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - o, "d")) : o
        }, sn.weekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, "d")
        }, sn.isoWeekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null == e) return this.day() || 7;
          var t, n, o = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
          return this.day(this.day() % 7 ? o : o - 7)
        }, sn.dayOfYear = function (e) {
          var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == e ? t : this.add(e - t, "d")
        }, sn.hour = sn.hours = et, sn.minute = sn.minutes = tn, sn.second = sn.seconds = on, sn.millisecond = sn.milliseconds = an, sn.utcOffset = function (e, t, n) {
          var o, r = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null == e) return this._isUTC ? r : Wt(this);
          if ("string" == typeof e) {
            if (null === (e = Pt(ie, e))) return this
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return !this._isUTC && t && (o = Wt(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? Ut(this, It(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, M.updateOffset(this, !0), this._changeInProgress = null)), this
        }, sn.utc = function (e) {
          return this.utcOffset(0, e)
        }, sn.local = function (e) {
          return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this
        }, sn.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" == typeof this._i) {
            var e = Pt(re, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
          }
          return this
        }, sn.hasAlignedHourOffset = function (e) {
          return !!this.isValid() && (e = e ? St(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, sn.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, sn.isLocal = function () {
          return !!this.isValid() && !this._isUTC
        }, sn.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC
        }, sn.isUtc = Nt, sn.isUTC = Nt, sn.zoneAbbr = function () {
          return this._isUTC ? "UTC" : ""
        }, sn.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : ""
        }, sn.dates = n("dates accessor is deprecated. Use date instead.", en), sn.months = n("months accessor is deprecated. Use month instead", Ae), sn.years = n("years accessor is deprecated. Use year instead", Se), sn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
          return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }), sn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!u(this._isDSTShifted)) return this._isDSTShifted;
          var e = {};
          if (h(e, this), (e = Yt(e))._a) {
            var t = e._isUTC ? f(e._a) : St(e._a);
            this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
          } else this._isDSTShifted = !1;
          return this._isDSTShifted
        });
        var un = j.prototype;

        function ln(e, t, n, o) {
          var r = dt(),
            i = f().set(o, t);
          return r[n](i, e)
        }

        function cn(e, t, n) {
          if (l(e) && (t = e, e = void 0), e = e || "", null != t) return ln(e, t, n, "month");
          var o, r = [];
          for (o = 0; o < 12; o++) r[o] = ln(e, o, n, "month");
          return r
        }

        function _n(e, t, n, o) {
          "boolean" == typeof e || (n = t = e, e = !1), l(t) && (n = t, t = void 0), t = t || "";
          var r, i = dt(),
            a = e ? i._week.dow : 0;
          if (null != n) return ln(t, (n + a) % 7, o, "day");
          var s = [];
          for (r = 0; r < 7; r++) s[r] = ln(t, (r + a) % 7, o, "day");
          return s
        }
        un.calendar = function (e, t, n) {
          var o = this._calendar[e] || this._calendar.sameElse;
          return T(o) ? o.call(t, n) : o
        }, un.longDateFormat = function (e) {
          var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
          return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
          }), this._longDateFormat[e])
        }, un.invalidDate = function () {
          return this._invalidDate
        }, un.ordinal = function (e) {
          return this._ordinal.replace("%d", e)
        }, un.preparse = dn, un.postformat = dn, un.relativeTime = function (e, t, n, o) {
          var r = this._relativeTime[n];
          return T(r) ? r(e, t, n, o) : r.replace(/%d/i, e)
        }, un.pastFuture = function (e, t) {
          var n = this._relativeTime[0 < e ? "future" : "past"];
          return T(n) ? n(t) : n.replace(/%s/i, t)
        }, un.set = function (e) {
          var t, n;
          for (n in e) T(t = e[n]) ? this[n] = t : this["_" + n] = t;
          this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, un.months = function (e, t) {
          return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || je).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
        }, un.monthsShort = function (e, t) {
          return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[je.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, un.monthsParse = function (e, t, n) {
          var o, r, i;
          if (this._monthsParseExact) return function (e, t, n) {
            var o, r, i, a = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o) i = f([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(i, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (r = ke.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = ke.call(this._longMonthsParse, a)) ? r : null : "MMM" === t ? -1 !== (r = ke.call(this._shortMonthsParse, a)) ? r : -1 !== (r = ke.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = ke.call(this._longMonthsParse, a)) ? r : -1 !== (r = ke.call(this._shortMonthsParse, a)) ? r : null
          }.call(this, e, t, n);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
            if (r = f([2e3, o]), n && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[o] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[o] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[o].test(e)) return o;
            if (n && "MMM" === t && this._shortMonthsParse[o].test(e)) return o;
            if (!n && this._monthsParse[o].test(e)) return o
          }
        }, un.monthsRegex = function (e) {
          return this._monthsParseExact ? (v(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = Ce), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, un.monthsShortRegex = function (e) {
          return this._monthsParseExact ? (v(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Pe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, un.week = function (e) {
          return Ie(e, this._week.dow, this._week.doy).week
        }, un.firstDayOfYear = function () {
          return this._week.doy
        }, un.firstDayOfWeek = function () {
          return this._week.dow
        }, un.weekdays = function (e, t) {
          return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, un.weekdaysMin = function (e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, un.weekdaysShort = function (e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, un.weekdaysParse = function (e, t, n) {
          var o, r, i;
          if (this._weekdaysParseExact) return function (e, t, n) {
            var o, r, i, a = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o) i = f([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(i, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (r = ke.call(this._weekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = ke.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = ke.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === t ? -1 !== (r = ke.call(this._weekdaysParse, a)) ? r : -1 !== (r = ke.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = ke.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = ke.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = ke.call(this._weekdaysParse, a)) ? r : -1 !== (r = ke.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = ke.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = ke.call(this._weekdaysParse, a)) ? r : -1 !== (r = ke.call(this._shortWeekdaysParse, a)) ? r : null
          }.call(this, e, t, n);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
            if (r = f([2e3, 1]).day(o), n && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[o] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[o].test(e)) return o;
            if (n && "ddd" === t && this._shortWeekdaysParse[o].test(e)) return o;
            if (n && "dd" === t && this._minWeekdaysParse[o].test(e)) return o;
            if (!n && this._weekdaysParse[o].test(e)) return o
          }
        }, un.weekdaysRegex = function (e) {
          return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = Ve), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, un.weekdaysShortRegex = function (e) {
          return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, un.weekdaysMinRegex = function (e) {
          return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ge), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, un.isPM = function (e) {
          return "p" === (e + "").toLowerCase().charAt(0)
        }, un.meridiem = function (e, t, n) {
          return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, at("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10;
            return e + (1 === k(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
          }
        }), M.lang = n("moment.lang is deprecated. Use moment.locale instead.", at), M.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt);
        var mn = Math.abs;

        function fn(e, t, n, o) {
          var r = It(t, n);
          return e._milliseconds += o * r._milliseconds, e._days += o * r._days, e._months += o * r._months, e._bubble()
        }

        function pn(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function yn(e) {
          return 4800 * e / 146097
        }

        function hn(e) {
          return 146097 * e / 4800
        }

        function Mn(e) {
          return function () {
            return this.as(e)
          }
        }
        var vn = Mn("ms"),
          Ln = Mn("s"),
          bn = Mn("m"),
          gn = Mn("h"),
          Yn = Mn("d"),
          kn = Mn("w"),
          Sn = Mn("M"),
          Dn = Mn("y");

        function wn(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN
          }
        }
        var Tn = wn("milliseconds"),
          xn = wn("seconds"),
          jn = wn("minutes"),
          Hn = wn("hours"),
          On = wn("days"),
          En = wn("months"),
          An = wn("years"),
          Pn = Math.round,
          Cn = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
          },
          Wn = Math.abs;

        function Nn(e) {
          return (0 < e) - (e < 0) || +e
        }

        function Fn() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e, t, n = Wn(this._milliseconds) / 1e3,
            o = Wn(this._days),
            r = Wn(this._months);
          t = Y((e = Y(n / 60)) / 60), n %= 60, e %= 60;
          var i = Y(r / 12),
            a = r %= 12,
            s = o,
            d = t,
            u = e,
            l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            c = this.asSeconds();
          if (!c) return "P0D";
          var _ = c < 0 ? "-" : "",
            m = Nn(this._months) !== Nn(c) ? "-" : "",
            f = Nn(this._days) !== Nn(c) ? "-" : "",
            p = Nn(this._milliseconds) !== Nn(c) ? "-" : "";
          return _ + "P" + (i ? m + i + "Y" : "") + (a ? m + a + "M" : "") + (s ? f + s + "D" : "") + (d || u || l ? "T" : "") + (d ? p + d + "H" : "") + (u ? p + u + "M" : "") + (l ? p + l + "S" : "")
        }
        var zn = jt.prototype;
        return zn.isValid = function () {
          return this._isValid
        }, zn.abs = function () {
          var e = this._data;
          return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), e.milliseconds = mn(e.milliseconds), e.seconds = mn(e.seconds), e.minutes = mn(e.minutes), e.hours = mn(e.hours), e.months = mn(e.months), e.years = mn(e.years), this
        }, zn.add = function (e, t) {
          return fn(this, e, t, 1)
        }, zn.subtract = function (e, t) {
          return fn(this, e, t, -1)
        }, zn.as = function (e) {
          if (!this.isValid()) return NaN;
          var t, n, o = this._milliseconds;
          if ("month" === (e = E(e)) || "year" === e) return t = this._days + o / 864e5, n = this._months + yn(t), "month" === e ? n : n / 12;
          switch (t = this._days + Math.round(hn(this._months)), e) {
            case "week":
              return t / 7 + o / 6048e5;
            case "day":
              return t + o / 864e5;
            case "hour":
              return 24 * t + o / 36e5;
            case "minute":
              return 1440 * t + o / 6e4;
            case "second":
              return 86400 * t + o / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + o;
            default:
              throw new Error("Unknown unit " + e)
          }
        }, zn.asMilliseconds = vn, zn.asSeconds = Ln, zn.asMinutes = bn, zn.asHours = gn, zn.asDays = Yn, zn.asWeeks = kn, zn.asMonths = Sn, zn.asYears = Dn, zn.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
        }, zn._bubble = function () {
          var e, t, n, o, r, i = this._milliseconds,
            a = this._days,
            s = this._months,
            d = this._data;
          return 0 <= i && 0 <= a && 0 <= s || i <= 0 && a <= 0 && s <= 0 || (i += 864e5 * pn(hn(s) + a), s = a = 0), d.milliseconds = i % 1e3, e = Y(i / 1e3), d.seconds = e % 60, t = Y(e / 60), d.minutes = t % 60, n = Y(t / 60), d.hours = n % 24, s += r = Y(yn(a += Y(n / 24))), a -= pn(hn(r)), o = Y(s / 12), s %= 12, d.days = a, d.months = s, d.years = o, this
        }, zn.clone = function () {
          return It(this)
        }, zn.get = function (e) {
          return e = E(e), this.isValid() ? this[e + "s"]() : NaN
        }, zn.milliseconds = Tn, zn.seconds = xn, zn.minutes = jn, zn.hours = Hn, zn.days = On, zn.weeks = function () {
          return Y(this.days() / 7)
        }, zn.months = En, zn.years = An, zn.humanize = function (e) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t, n, o, r, i, a, s, d, u, l, c = this.localeData(),
            _ = (t = !e, n = c, o = It(this).abs(), r = Pn(o.as("s")), i = Pn(o.as("m")), a = Pn(o.as("h")), s = Pn(o.as("d")), d = Pn(o.as("M")), u = Pn(o.as("y")), (l = r <= Cn.ss && ["s", r] || r < Cn.s && ["ss", r] || i <= 1 && ["m"] || i < Cn.m && ["mm", i] || a <= 1 && ["h"] || a < Cn.h && ["hh", a] || s <= 1 && ["d"] || s < Cn.d && ["dd", s] || d <= 1 && ["M"] || d < Cn.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u])[2] = t, l[3] = 0 < +this, l[4] = n, function (e, t, n, o, r) {
              return r.relativeTime(t || 1, !!n, e, o)
            }.apply(null, l));
          return e && (_ = c.pastFuture(+this, _)), c.postformat(_)
        }, zn.toISOString = Fn, zn.toString = Fn, zn.toJSON = Fn, zn.locale = $t, zn.localeData = Zt, zn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Fn), zn.lang = Kt, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), de("x", oe), de("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e, 10))
        }), ce("x", function (e, t, n) {
          n._d = new Date(k(e))
        }), M.version = "2.22.2", e = St, M.fn = sn, M.min = function () {
          return Tt("isBefore", [].slice.call(arguments, 0))
        }, M.max = function () {
          return Tt("isAfter", [].slice.call(arguments, 0))
        }, M.now = function () {
          return Date.now ? Date.now() : +new Date
        }, M.utc = f, M.unix = function (e) {
          return St(1e3 * e)
        }, M.months = function (e, t) {
          return cn(e, t, "months")
        }, M.isDate = c, M.locale = at, M.invalid = y, M.duration = It, M.isMoment = g, M.weekdays = function (e, t, n) {
          return _n(e, t, n, "weekdays")
        }, M.parseZone = function () {
          return St.apply(null, arguments).parseZone()
        }, M.localeData = dt, M.isDuration = Ht, M.monthsShort = function (e, t) {
          return cn(e, t, "monthsShort")
        }, M.weekdaysMin = function (e, t, n) {
          return _n(e, t, n, "weekdaysMin")
        }, M.defineLocale = st, M.updateLocale = function (e, t) {
          if (null != t) {
            var n, o, r = tt;
            null != (o = it(e)) && (r = o._config), (n = new j(t = x(r, t))).parentLocale = nt[e], nt[e] = n, at(e)
          } else null != nt[e] && (null != nt[e].parentLocale ? nt[e] = nt[e].parentLocale : null != nt[e] && delete nt[e]);
          return nt[e]
        }, M.locales = function () {
          return o(nt)
        }, M.weekdaysShort = function (e, t, n) {
          return _n(e, t, n, "weekdaysShort")
        }, M.normalizeUnits = E, M.relativeTimeRounding = function (e) {
          return void 0 === e ? Pn : "function" == typeof e && (Pn = e, !0)
        }, M.relativeTimeThreshold = function (e, t) {
          return void 0 !== Cn[e] && (void 0 === t ? Cn[e] : (Cn[e] = t, "s" === e && (Cn.ss = t - 1), !0))
        }, M.calendarFormat = function (e, t) {
          var n = e.diff(t, "days", !0);
          return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }, M.prototype = sn, M.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "YYYY-[W]WW",
          MONTH: "YYYY-MM"
        }, M
      }, "object" === Rn(o) && void 0 !== In ? In.exports = n() : void 0 === (t = "function" == typeof (e = n) ? e.call(o, Jn, o, In) : e) || (In.exports = t)
    }).call(this, Jn(2)(e))
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.LS_ACCESS_TOKEN_KEY = "giteement-comments-token", t.LS_USER_KEY = "giteement-user-info", t.NOT_INITIALIZED_ERROR = new Error("Comments Not Initialized")
  }, function (e, t, n) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function s(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
      }

      function t(a) {
        return function (e, t, n, o) {
          var r = s(e),
            i = d[a][s(e)];
          return 2 === r && (i = i[t ? 0 : 1]), i.replace(/%d/i, e)
        }
      }
      var n = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠"
        },
        o = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0"
        },
        d = {
          s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
          m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
          h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
          d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
          M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
          y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        },
        r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      return e.defineLocale("ar", {
        months: r,
        monthsShort: r,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: t("s"),
          ss: t("s"),
          m: t("m"),
          mm: t("m"),
          h: t("h"),
          hh: t("h"),
          d: t("d"),
          dd: t("d"),
          M: t("M"),
          MM: t("M"),
          y: t("y"),
          yy: t("y")
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return o[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return n[e]
          }).replace(/,/g, "،")
        },
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 0,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 0,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function s(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
      }

      function t(a) {
        return function (e, t, n, o) {
          var r = s(e),
            i = d[a][s(e)];
          return 2 === r && (i = i[t ? 0 : 1]), i.replace(/%d/i, e)
        }
      }
      var n = {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          0: "0"
        },
        d = {
          s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
          m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
          h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
          d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
          M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
          y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        },
        o = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      return e.defineLocale("ar-ly", {
        months: o,
        monthsShort: o,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: t("s"),
          ss: t("s"),
          m: t("m"),
          mm: t("m"),
          h: t("h"),
          hh: t("h"),
          d: t("d"),
          dd: t("d"),
          M: t("M"),
          MM: t("M"),
          y: t("y"),
          yy: t("y")
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return n[e]
          }).replace(/,/g, "،")
        },
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠"
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0"
        };
      return e.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
      };
      return e.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "birneçə saniyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + "-ıncı";
          var t = e % 10;
          return e + (n[t] || n[e % 100 - t] || n[100 <= e ? 100 : null])
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (o = +e, r = {
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
        } [n].split("_"), o % 10 == 1 && o % 100 != 11 ? r[0] : 2 <= o % 10 && o % 10 <= 4 && (o % 100 < 10 || 20 <= o % 100) ? r[1] : r[2]);
        var o, r
      }
      return e.defineLocale("be", {
        months: {
          format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
          standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
          standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
          sameDay: "[Сёння ў] LT",
          nextDay: "[Заўтра ў] LT",
          lastDay: "[Учора ў] LT",
          nextWeek: function () {
            return "[У] dddd [ў] LT"
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "дзень",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
            case "D":
              return e + "-га";
            default:
              return e
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[В изминалата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[В изминалия] dddd [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дни",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d"
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "১",
          2: "২",
          3: "৩",
          4: "৪",
          5: "৫",
          6: "৬",
          7: "৭",
          8: "৮",
          9: "৯",
          0: "০"
        },
        n = {
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
          "০": "0"
        };
      return e.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর"
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "রাত" === t && 4 <= e || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "༡",
          2: "༢",
          3: "༣",
          4: "༤",
          5: "༥",
          6: "༦",
          7: "༧",
          8: "༨",
          9: "༩",
          0: "༠"
        },
        n = {
          "༡": "1",
          "༢": "2",
          "༣": "3",
          "༤": "4",
          "༥": "5",
          "༦": "6",
          "༧": "7",
          "༨": "8",
          "༩": "9",
          "༠": "0"
        };
      return e.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ"
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "མཚན་མོ" === t && 4 <= e || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        return e + " " + (o = {
          mm: "munutenn",
          MM: "miz",
          dd: "devezh"
        } [n], 2 === e ? void 0 === (i = {
          m: "v",
          b: "v",
          d: "z"
        })[(r = o).charAt(0)] ? r : i[r.charAt(0)] + r.substring(1) : o);
        var o, r, i
      }
      return e.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h[e]mm A",
          LTS: "h[e]mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY h[e]mm A",
          LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warc'hoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Dec'h da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s 'zo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: function (e) {
            switch (function e(t) {
              return 9 < t ? e(t % 10) : t
            }(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz"
            }
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? "añ" : "vet")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        var o = e + " ";
        switch (n) {
          case "ss":
            return o + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return o + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return o + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
          case "dd":
            return o + (1 === e ? "dan" : "dana");
          case "MM":
            return o + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
          case "yy":
            return o + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
        }
      }
      return e.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ca", {
        months: {
          standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          },
          nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          },
          nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          },
          lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          },
          lastWeek: function () {
            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return "w" !== t && "W" !== t || (n = "a"), e + n
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

      function i(e) {
        return 1 < e && e < 5 && 1 != ~~(e / 10)
      }

      function o(e, t, n, o) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || o ? "pár sekund" : "pár sekundami";
          case "ss":
            return t || o ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
          case "m":
            return t ? "minuta" : o ? "minutu" : "minutou";
          case "mm":
            return t || o ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
          case "h":
            return t ? "hodina" : o ? "hodinu" : "hodinou";
          case "hh":
            return t || o ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
          case "d":
            return t || o ? "den" : "dnem";
          case "dd":
            return t || o ? r + (i(e) ? "dny" : "dní") : r + "dny";
          case "M":
            return t || o ? "měsíc" : "měsícem";
          case "MM":
            return t || o ? r + (i(e) ? "měsíce" : "měsíců") : r + "měsíci";
          case "y":
            return t || o ? "rok" : "rokem";
          case "yy":
            return t || o ? r + (i(e) ? "roky" : "let") : r + "lety"
        }
      }
      return e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsParse: function (e, t) {
          var n, o = [];
          for (n = 0; n < 12; n++) o[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
          return o
        }(t, n),
        shortMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(n),
        longMonthsParse: function (e) {
          var t, n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
          return n
        }(t),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY"
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zítra v] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT"
            }
          },
          lastDay: "[včera v] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: o,
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: o,
          dd: o,
          M: o,
          MM: o,
          y: o,
          yy: o
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = "";
          return 20 < e ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? r[n][0] : r[n][1]
      }
      return e.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? r[n][0] : r[n][1]
      }
      return e.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? r[n][0] : r[n][1]
      }
      return e.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
        n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
      return e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return "މފ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "މކ" : "މފ"
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {
          dow: 7,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function (e, t) {
          return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
          return 11 < e ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT"
            }
          },
          sameElse: "L"
        },
        calendar: function (e, t) {
          var n, o = this._calendarEl[e],
            r = t && t.hours();
          return ((n = o) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (o = o.apply(t)), o.replace("{}", r % 12 == 1 ? "στη" : "στις")
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-il", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D[-a de] MMMM, YYYY",
          LLL: "D[-a de] MMMM, YYYY HH:mm",
          LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return 11 < e ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd [je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasinta] dddd [je] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "sekundoj",
          ss: "%d sekundoj",
          m: "minuto",
          mm: "%d minutoj",
          h: "horo",
          hh: "%d horoj",
          d: "tago",
          dd: "%d tagoj",
          M: "monato",
          MM: "%d monatoj",
          y: "jaro",
          yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
      return e.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "MMMM [de] D [de] YYYY",
          LLL: "MMMM [de] D [de] YYYY h:mm A",
          LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastWeek: function () {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          ss: [e + "sekundi", e + "sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"]
        };
        return t ? r[n][2] ? r[n][2] : r[n][1] : o ? r[n][0] : r[n][1]
      }
      return e.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "۱",
          2: "۲",
          3: "۳",
          4: "۴",
          5: "۵",
          6: "۶",
          7: "۷",
          8: "۸",
          9: "۹",
          0: "۰"
        },
        n = {
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
          "۰": "0"
        };
      return e.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "ثانیه d%",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/[۰-۹]/g, function (e) {
            return n[e]
          }).replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          }).replace(/,/g, "،")
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
        s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];

      function t(e, t, n, o) {
        var r, i = "";
        switch (n) {
          case "s":
            return o ? "muutaman sekunnin" : "muutama sekunti";
          case "ss":
            return o ? "sekunnin" : "sekuntia";
          case "m":
            return o ? "minuutin" : "minuutti";
          case "mm":
            i = o ? "minuutin" : "minuuttia";
            break;
          case "h":
            return o ? "tunnin" : "tunti";
          case "hh":
            i = o ? "tunnin" : "tuntia";
            break;
          case "d":
            return o ? "päivän" : "päivä";
          case "dd":
            i = o ? "päivän" : "päivää";
            break;
          case "M":
            return o ? "kuukauden" : "kuukausi";
          case "MM":
            i = o ? "kuukauden" : "kuukautta";
            break;
          case "y":
            return o ? "vuoden" : "vuosi";
          case "yy":
            i = o ? "vuoden" : "vuotta"
        }
        return ((r = e) < 10 ? o ? s[r] : a[r] : r) + " " + i
      }
      return e.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minutt",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaði",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + (1 === e ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e")
          }
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e")
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        o = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      return e.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("gd", {
        months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
        monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
        monthsParseExact: !0,
        weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          },
          nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
          },
          nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
          },
          lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
          },
          lastWeek: function () {
            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          s: ["thodde secondanim", "thodde second"],
          ss: [e + " secondanim", e + " second"],
          m: ["eka mintan", "ek minute"],
          mm: [e + " mintanim", e + " mintam"],
          h: ["eka horan", "ek hor"],
          hh: [e + " horanim", e + " horam"],
          d: ["eka disan", "ek dis"],
          dd: [e + " disanim", e + " dis"],
          M: ["eka mhoinean", "ek mhoino"],
          MM: [e + " mhoineanim", e + " mhoine"],
          y: ["eka vorsan", "ek voros"],
          yy: [e + " vorsanim", e + " vorsam"]
        };
        return t ? r[n][0] : r[n][1]
      }
      return e.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Ieta to] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fatlo] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + "er";
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
            case "w":
            case "W":
              return e
          }
        },
        week: {
          dow: 1,
          doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? 12 < e ? e : e + 12 : "sanje" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "૧",
          2: "૨",
          3: "૩",
          4: "૪",
          5: "૫",
          6: "૬",
          7: "૭",
          8: "૮",
          9: "૯",
          0: "૦"
        },
        n = {
          "૧": "1",
          "૨": "2",
          "૩": "3",
          "૪": "4",
          "૫": "5",
          "૬": "6",
          "૭": "7",
          "૮": "8",
          "૯": "9",
          "૦": "0"
        };
      return e.defineLocale("gu", {
        months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
        monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
        monthsParseExact: !0,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પેહલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ"
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? 10 <= e ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות"
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים"
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים"
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
        };
      return e.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? 10 <= e ? e : e + 12 : "शाम" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        var o = e + " ";
        switch (n) {
          case "ss":
            return o + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return o + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return o + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
          case "dd":
            return o + (1 === e ? "dan" : "dana");
          case "MM":
            return o + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
          case "yy":
            return o + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
        }
      }
      return e.defineLocale("hr", {
        months: {
          format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
          standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

      function n(e, t, n, o) {
        var r = e;
        switch (n) {
          case "s":
            return o || t ? "néhány másodperc" : "néhány másodperce";
          case "ss":
            return r + (o || t) ? " másodperc" : " másodperce";
          case "m":
            return "egy" + (o || t ? " perc" : " perce");
          case "mm":
            return r + (o || t ? " perc" : " perce");
          case "h":
            return "egy" + (o || t ? " óra" : " órája");
          case "hh":
            return r + (o || t ? " óra" : " órája");
          case "d":
            return "egy" + (o || t ? " nap" : " napja");
          case "dd":
            return r + (o || t ? " nap" : " napja");
          case "M":
            return "egy" + (o || t ? " hónap" : " hónapja");
          case "MM":
            return r + (o || t ? " hónap" : " hónapja");
          case "y":
            return "egy" + (o || t ? " év" : " éve");
          case "yy":
            return r + (o || t ? " év" : " éve")
        }
        return ""
      }

      function o(e) {
        return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
      }
      return e.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function (e, t, n) {
          return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
        },
        calendar: {
          sameDay: "[ma] LT[-kor]",
          nextDay: "[holnap] LT[-kor]",
          nextWeek: function () {
            return o.call(this, !0)
          },
          lastDay: "[tegnap] LT[-kor]",
          lastWeek: function () {
            return o.call(this, !1)
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("hy-am", {
        months: {
          format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
          standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
          sameDay: "[այսօր] LT",
          nextDay: "[վաղը] LT",
          lastDay: "[երեկ] LT",
          nextWeek: function () {
            return "dddd [օրը ժամը] LT"
          },
          lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e)
        },
        meridiem: function (e) {
          return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case "DDD":
            case "w":
            case "W":
            case "DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function i(e) {
        return e % 100 == 11 || e % 10 != 1
      }

      function t(e, t, n, o) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case "ss":
            return i(e) ? r + (t || o ? "sekúndur" : "sekúndum") : r + "sekúnda";
          case "m":
            return t ? "mínúta" : "mínútu";
          case "mm":
            return i(e) ? r + (t || o ? "mínútur" : "mínútum") : t ? r + "mínúta" : r + "mínútu";
          case "hh":
            return i(e) ? r + (t || o ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
          case "d":
            return t ? "dagur" : o ? "dag" : "degi";
          case "dd":
            return i(e) ? t ? r + "dagar" : r + (o ? "daga" : "dögum") : t ? r + "dagur" : r + (o ? "dag" : "degi");
          case "M":
            return t ? "mánuður" : o ? "mánuð" : "mánuði";
          case "MM":
            return i(e) ? t ? r + "mánuðir" : r + (o ? "mánuði" : "mánuðum") : t ? r + "mánuður" : r + (o ? "mánuð" : "mánuði");
          case "y":
            return t || o ? "ár" : "ári";
          case "yy":
            return i(e) ? r + (t || o ? "ár" : "árum") : r + (t || o ? "ár" : "ári")
        }
      }
      return e.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: "klukkustund",
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日(ddd) HH:mm"
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "午前" : "午後"
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: function (e) {
            return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
          },
          lastDay: "[昨日] LT",
          lastWeek: function (e) {
            return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
          },
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? 11 <= e ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ka", {
        months: {
          standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
          format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
          standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
          format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
      };
      return e.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "១",
          2: "២",
          3: "៣",
          4: "៤",
          5: "៥",
          6: "៦",
          7: "៧",
          8: "៨",
          9: "៩",
          0: "០"
        },
        n = {
          "១": "1",
          "២": "2",
          "៣": "3",
          "៤": "4",
          "៥": "5",
          "៦": "6",
          "៧": "7",
          "៨": "8",
          "៩": "9",
          "០": "0"
        };
      return e.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (e) {
          return "ល្ងាច" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ព្រឹក" : "ល្ងាច"
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ"
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function (e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "೧",
          2: "೨",
          3: "೩",
          4: "೪",
          5: "೫",
          6: "೬",
          7: "೭",
          8: "೮",
          9: "೯",
          0: "೦"
        },
        n = {
          "೧": "1",
          "೨": "2",
          "೩": "3",
          "೪": "4",
          "೫": "5",
          "೬": "6",
          "೭": "7",
          "೮": "8",
          "೯": "9",
          "೦": "0"
        };
      return e.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
        monthsParseExact: !0,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ"
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? 10 <= e ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + "ನೇ"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "일";
            case "M":
              return e + "월";
            case "w":
            case "W":
              return e + "주";
            default:
              return e
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "오전" : "오후"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
      };
      return e.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кече саат] LT",
          lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"]
        };
        return t ? r[n][0] : r[n][1]
      }

      function n(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 == t ? e / 10 : t)
        }
        if (e < 1e4) {
          for (; 10 <= e;) e /= 10;
          return n(e)
        }
        return n(e /= 1e3)
      }
      return e.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT"
            }
          }
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
          },
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
      };

      function i(e, t, n, o) {
        return t ? s(n)[0] : o ? s(n)[1] : s(n)[2]
      }

      function a(e) {
        return e % 10 == 0 || 10 < e && e < 20
      }

      function s(e) {
        return t[e].split("_")
      }

      function n(e, t, n, o) {
        var r = e + " ";
        return 1 === e ? r + i(0, t, n[0], o) : t ? r + (a(e) ? s(n)[1] : s(n)[0]) : o ? r + s(n)[1] : r + (a(e) ? s(n)[1] : s(n)[2])
      }
      return e.defineLocale("lt", {
        months: {
          format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
          format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
          standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "po %s",
          past: "prieš %s",
          s: function (e, t, n, o) {
            return t ? "kelios sekundės" : o ? "kelių sekundžių" : "kelias sekundes"
          },
          ss: n,
          m: i,
          mm: n,
          h: i,
          hh: n,
          d: i,
          dd: n,
          M: i,
          MM: n,
          y: i,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + "-oji"
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var o = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
      };

      function r(e, t, n) {
        return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
      }

      function t(e, t, n) {
        return e + " " + r(o[n], e, t)
      }

      function n(e, t, n) {
        return r(o[n], e, t)
      }
      return e.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "pēc %s",
          past: "pirms %s",
          s: function (e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
          },
          ss: t,
          m: n,
          mm: t,
          h: n,
          hh: t,
          d: n,
          dd: t,
          M: n,
          MM: t,
          y: n,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var r = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function (e, t, n) {
          var o = r.words[n];
          return 1 === n.length ? t ? o[0] : o[1] : e + " " + r.correctGrammaticalCase(e, o)
        }
      };
      return e.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sjutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: r.translate,
          m: r.translate,
          mm: r.translate,
          h: r.translate,
          hh: r.translate,
          d: "dan",
          dd: r.translate,
          M: "mjesec",
          MM: r.translate,
          y: "godinu",
          yy: r.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "после %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеци",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "രാത്രി" === t && 4 <= e || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        switch (n) {
          case "s":
            return t ? "хэдхэн секунд" : "хэдхэн секундын";
          case "ss":
            return e + (t ? " секунд" : " секундын");
          case "m":
          case "mm":
            return e + (t ? " минут" : " минутын");
          case "h":
          case "hh":
            return e + (t ? " цаг" : " цагийн");
          case "d":
          case "dd":
            return e + (t ? " өдөр" : " өдрийн");
          case "M":
          case "MM":
            return e + (t ? " сар" : " сарын");
          case "y":
          case "yy":
            return e + (t ? " жил" : " жилийн");
          default:
            return e
        }
      }
      return e.defineLocale("mn", {
        months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
        monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
        monthsParseExact: !0,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm"
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
          return "ҮХ" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ҮӨ" : "ҮХ"
        },
        calendar: {
          sameDay: "[Өнөөдөр] LT",
          nextDay: "[Маргааш] LT",
          nextWeek: "[Ирэх] dddd LT",
          lastDay: "[Өчигдөр] LT",
          lastWeek: "[Өнгөрсөн] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s дараа",
          past: "%s өмнө",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + " өдөр";
            default:
              return e
          }
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
        };

      function o(e, t, n, o) {
        var r = "";
        if (t) switch (n) {
          case "s":
            r = "काही सेकंद";
            break;
          case "ss":
            r = "%d सेकंद";
            break;
          case "m":
            r = "एक मिनिट";
            break;
          case "mm":
            r = "%d मिनिटे";
            break;
          case "h":
            r = "एक तास";
            break;
          case "hh":
            r = "%d तास";
            break;
          case "d":
            r = "एक दिवस";
            break;
          case "dd":
            r = "%d दिवस";
            break;
          case "M":
            r = "एक महिना";
            break;
          case "MM":
            r = "%d महिने";
            break;
          case "y":
            r = "एक वर्ष";
            break;
          case "yy":
            r = "%d वर्षे"
        } else switch (n) {
          case "s":
            r = "काही सेकंदां";
            break;
          case "ss":
            r = "%d सेकंदां";
            break;
          case "m":
            r = "एका मिनिटा";
            break;
          case "mm":
            r = "%d मिनिटां";
            break;
          case "h":
            r = "एका तासा";
            break;
          case "hh":
            r = "%d तासां";
            break;
          case "d":
            r = "एका दिवसा";
            break;
          case "dd":
            r = "%d दिवसां";
            break;
          case "M":
            r = "एका महिन्या";
            break;
          case "MM":
            r = "%d महिन्यां";
            break;
          case "y":
            r = "एका वर्षा";
            break;
          case "yy":
            r = "%d वर्षां"
        }
        return r.replace(/%d/i, e)
      }
      return e.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: o,
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: o,
          dd: o,
          M: o,
          MM: o,
          y: o,
          yy: o
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? 10 <= e ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
        weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "၁",
          2: "၂",
          3: "၃",
          4: "၄",
          5: "၅",
          6: "၆",
          7: "၇",
          8: "၈",
          9: "၉",
          0: "၀"
        },
        n = {
          "၁": "1",
          "၂": "2",
          "၃": "3",
          "၄": "4",
          "၅": "5",
          "၆": "6",
          "၇": "7",
          "၈": "8",
          "၉": "9",
          "၀": "0"
        };
      return e.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L"
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်"
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०"
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0"
        };
      return e.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? 10 <= e ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, t) {
          return e ? /-MMM-/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "੧",
          2: "੨",
          3: "੩",
          4: "੪",
          5: "੫",
          6: "੬",
          7: "੭",
          8: "੮",
          9: "੯",
          0: "੦"
        },
        n = {
          "੧": "1",
          "੨": "2",
          "੩": "3",
          "੪": "4",
          "੫": "5",
          "੬": "6",
          "੭": "7",
          "੮": "8",
          "੯": "9",
          "੦": "0"
        };
      return e.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "[ਅਗਲਾ] dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ"
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? 10 <= e ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        o = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

      function r(e) {
        return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1
      }

      function t(e, t, n) {
        var o = e + " ";
        switch (n) {
          case "ss":
            return o + (r(e) ? "sekundy" : "sekund");
          case "m":
            return t ? "minuta" : "minutę";
          case "mm":
            return o + (r(e) ? "minuty" : "minut");
          case "h":
            return t ? "godzina" : "godzinę";
          case "hh":
            return o + (r(e) ? "godziny" : "godzin");
          case "MM":
            return o + (r(e) ? "miesiące" : "miesięcy");
          case "yy":
            return o + (r(e) ? "lata" : "lat")
        }
      }
      return e.defineLocale("pl", {
        months: function (e, t) {
          return e ? "" === t ? "(" + o[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(t) ? o[e.month()] : n[e.month()] : n
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dziś o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W niedzielę o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W środę o] LT";
              case 6:
                return "[W sobotę o] LT";
              default:
                return "[W] dddd [o] LT"
            }
          },
          lastDay: "[Wczoraj o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: t,
          y: "rok",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("pt", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("pt-br", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº"
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        var o = " ";
        return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (o = " de "), e + o + {
          ss: "secunde",
          mm: "minute",
          hh: "ore",
          dd: "zile",
          MM: "luni",
          yy: "ani"
        } [n]
      }
      return e.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: t,
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        return "m" === n ? t ? "минута" : "минуту" : e + " " + (o = +e, r = {
          ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет"
        } [n].split("_"), o % 10 == 1 && o % 100 != 11 ? r[0] : 2 <= o % 10 && o % 10 <= 4 && (o % 100 < 10 || 20 <= o % 100) ? r[1] : r[2]);
        var o, r
      }
      var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
      return e.defineLocale("ru", {
        months: {
          format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
          standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
          format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
          standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
          standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
          format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
          sameDay: "[Сегодня, в] LT",
          nextDay: "[Завтра, в] LT",
          lastDay: "[Вчера, в] LT",
          nextWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В следующее] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В следующий] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В следующую] dddd, [в] LT"
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В прошлое] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В прошлый] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В прошлую] dddd, [в] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: t,
          m: t,
          mm: t,
          h: "час",
          hh: t,
          d: "день",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
              return e + "-й";
            case "D":
              return e + "-го";
            case "w":
            case "W":
              return e + "-я";
            default:
              return e
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
        n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
      return e.defineLocale("sd", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි"
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return "ප.ව." === e || "පස් වරු" === e
        },
        meridiem: function (e, t, n) {
          return 11 < e ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
        n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

      function i(e) {
        return 1 < e && e < 5
      }

      function o(e, t, n, o) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || o ? "pár sekúnd" : "pár sekundami";
          case "ss":
            return t || o ? r + (i(e) ? "sekundy" : "sekúnd") : r + "sekundami";
          case "m":
            return t ? "minúta" : o ? "minútu" : "minútou";
          case "mm":
            return t || o ? r + (i(e) ? "minúty" : "minút") : r + "minútami";
          case "h":
            return t ? "hodina" : o ? "hodinu" : "hodinou";
          case "hh":
            return t || o ? r + (i(e) ? "hodiny" : "hodín") : r + "hodinami";
          case "d":
            return t || o ? "deň" : "dňom";
          case "dd":
            return t || o ? r + (i(e) ? "dni" : "dní") : r + "dňami";
          case "M":
            return t || o ? "mesiac" : "mesiacom";
          case "MM":
            return t || o ? r + (i(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
          case "y":
            return t || o ? "rok" : "rokom";
          case "yy":
            return t || o ? r + (i(e) ? "roky" : "rokov") : r + "rokmi"
        }
      }
      return e.defineLocale("sk", {
        months: t,
        monthsShort: n,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[dnes o] LT",
          nextDay: "[zajtra o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedeľu o] LT";
              case 1:
              case 2:
                return "[v] dddd [o] LT";
              case 3:
                return "[v stredu o] LT";
              case 4:
                return "[vo štvrtok o] LT";
              case 5:
                return "[v piatok o] LT";
              case 6:
                return "[v sobotu o] LT"
            }
          },
          lastDay: "[včera o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulú nedeľu o] LT";
              case 1:
              case 2:
                return "[minulý] dddd [o] LT";
              case 3:
                return "[minulú stredu o] LT";
              case 4:
              case 5:
                return "[minulý] dddd [o] LT";
              case 6:
                return "[minulú sobotu o] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: o,
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: o,
          dd: o,
          M: o,
          MM: o,
          y: o,
          yy: o
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || o ? "nekaj sekund" : "nekaj sekundami";
          case "ss":
            return r + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || o ? "sekundi" : "sekundah" : e < 5 ? t || o ? "sekunde" : "sekundah" : "sekund");
          case "m":
            return t ? "ena minuta" : "eno minuto";
          case "mm":
            return r + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || o ? "minuti" : "minutama" : e < 5 ? t || o ? "minute" : "minutami" : t || o ? "minut" : "minutami");
          case "h":
            return t ? "ena ura" : "eno uro";
          case "hh":
            return r + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || o ? "uri" : "urama" : e < 5 ? t || o ? "ure" : "urami" : t || o ? "ur" : "urami");
          case "d":
            return t || o ? "en dan" : "enim dnem";
          case "dd":
            return r + (1 === e ? t || o ? "dan" : "dnem" : 2 === e ? t || o ? "dni" : "dnevoma" : t || o ? "dni" : "dnevi");
          case "M":
            return t || o ? "en mesec" : "enim mesecem";
          case "MM":
            return r + (1 === e ? t || o ? "mesec" : "mesecem" : 2 === e ? t || o ? "meseca" : "mesecema" : e < 5 ? t || o ? "mesece" : "meseci" : t || o ? "mesecev" : "meseci");
          case "y":
            return t || o ? "eno leto" : "enim letom";
          case "yy":
            return r + (1 === e ? t || o ? "leto" : "letom" : 2 === e ? t || o ? "leti" : "letoma" : e < 5 ? t || o ? "leta" : "leti" : t || o ? "let" : "leti")
        }
      }
      return e.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danes ob] LT",
          nextDay: "[jutri ob] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT"
            }
          },
          lastDay: "[včeraj ob] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "PD" : "MD"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var r = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jedne minute"],
          mm: ["minut", "minute", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mesec", "meseca", "meseci"],
          yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function (e, t, n) {
          var o = r.words[n];
          return 1 === n.length ? t ? o[0] : o[1] : e + " " + r.correctGrammaticalCase(e, o)
        }
      };
      return e.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT"
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: r.translate,
          m: r.translate,
          mm: r.translate,
          h: r.translate,
          hh: r.translate,
          d: "dan",
          dd: r.translate,
          M: "mesec",
          MM: r.translate,
          y: "godinu",
          yy: r.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var r = {
        words: {
          ss: ["секунда", "секунде", "секунди"],
          m: ["један минут", "једне минуте"],
          mm: ["минут", "минуте", "минута"],
          h: ["један сат", "једног сата"],
          hh: ["сат", "сата", "сати"],
          dd: ["дан", "дана", "дана"],
          MM: ["месец", "месеца", "месеци"],
          yy: ["година", "године", "година"]
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function (e, t, n) {
          var o = r.words[n];
          return 1 === n.length ? t ? o[0] : o[1] : e + " " + r.correctGrammaticalCase(e, o)
        }
      };
      return e.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[данас у] LT",
          nextDay: "[сутра у] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[у] [недељу] [у] LT";
              case 3:
                return "[у] [среду] [у] LT";
              case 6:
                return "[у] [суботу] [у] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[у] dddd [у] LT"
            }
          },
          lastDay: "[јуче у] LT",
          lastWeek: function () {
            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: r.translate,
          m: r.translate,
          mm: r.translate,
          h: r.translate,
          hh: r.translate,
          d: "дан",
          dd: r.translate,
          M: "месец",
          MM: r.translate,
          y: "годину",
          yy: r.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? 11 <= e ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "e" : 1 == t ? "a" : 2 == t ? "a" : "e")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "masiku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
          1: "௧",
          2: "௨",
          3: "௩",
          4: "௪",
          5: "௫",
          6: "௬",
          7: "௭",
          8: "௮",
          9: "௯",
          0: "௦"
        },
        n = {
          "௧": "1",
          "௨": "2",
          "௩": "3",
          "௪": "4",
          "௫": "5",
          "௬": "6",
          "௭": "7",
          "௮": "8",
          "௯": "9",
          "௦": "0"
        };
      return e.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + "வது"
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e]
          })
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e]
          })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && 10 <= e ? e : e + 12
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? 10 <= e ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
        },
        week: {
          dow: 0,
          doy: 6
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "minutu balun",
          ss: "minutu %d",
          m: "minutu ida",
          mm: "minutu %d",
          h: "oras ida",
          hh: "oras %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум"
      };
      return e.defineLocale("tg", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Имрӯз соати] LT",
          nextDay: "[Пагоҳ соати] LT",
          lastDay: "[Дирӯз соати] LT",
          nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
          lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "баъди %s",
          past: "%s пеш",
          s: "якчанд сония",
          m: "як дақиқа",
          mm: "%d дақиқа",
          h: "як соат",
          hh: "%d соат",
          d: "як рӯз",
          dd: "%d рӯз",
          M: "як моҳ",
          MM: "%d моҳ",
          y: "як сол",
          yy: "%d сол"
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? 11 <= e ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null])
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L"
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var l = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

      function t(e, t, n, o) {
        var r, i, a, s, d, u = (r = e, i = Math.floor(r % 1e3 / 100), a = Math.floor(r % 100 / 10), s = r % 10, d = "", 0 < i && (d += l[i] + "vatlh"), 0 < a && (d += ("" !== d ? " " : "") + l[a] + "maH"), 0 < s && (d += ("" !== d ? " " : "") + l[s]), "" === d ? "pagh" : d);
        switch (n) {
          case "ss":
            return u + " lup";
          case "mm":
            return u + " tup";
          case "hh":
            return u + " rep";
          case "dd":
            return u + " jaj";
          case "MM":
            return u + " jar";
          case "yy":
            return u + " DIS"
        }
      }
      return e.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L"
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
          },
          past: function (e) {
            var t = e;
            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
          },
          s: "puS lup",
          ss: t,
          m: "wa’ tup",
          mm: t,
          h: "wa’ rep",
          hh: t,
          d: "wa’ jaj",
          dd: t,
          M: "wa’ jar",
          MM: t,
          y: "wa’ DIS",
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var o = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
      };
      return e.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl"
        },
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return e;
            default:
              if (0 === e) return e + "'ıncı";
              var n = e % 10;
              return e + (o[n] || o[e % 100 - n] || o[100 <= e ? 100 : null])
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n, o) {
        var r = {
          s: ["viensas secunds", "'iensas secunds"],
          ss: [e + " secunds", e + " secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", e + " ars"]
        };
        return o ? r[n][0] : t ? r[n][0] : r[n][1]
      }
      return e.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase()
        },
        meridiem: function (e, t, n) {
          return 11 < e ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn"
        },
        week: {
          dow: 6,
          doy: 12
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("ug-cn", {
        months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
          LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : 11 <= e ? e : e + 12
        },
        meridiem: function (e, t, n) {
          var o = 100 * e + t;
          return o < 600 ? "يېرىم كېچە" : o < 900 ? "سەھەر" : o < 1130 ? "چۈشتىن بۇرۇن" : o < 1230 ? "چۈش" : o < 1800 ? "چۈشتىن كېيىن" : "كەچ"
        },
        calendar: {
          sameDay: "[بۈگۈن سائەت] LT",
          nextDay: "[ئەتە سائەت] LT",
          nextWeek: "[كېلەركى] dddd [سائەت] LT",
          lastDay: "[تۆنۈگۈن] LT",
          lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s كېيىن",
          past: "%s بۇرۇن",
          s: "نەچچە سېكونت",
          ss: "%d سېكونت",
          m: "بىر مىنۇت",
          mm: "%d مىنۇت",
          h: "بىر سائەت",
          hh: "%d سائەت",
          d: "بىر كۈن",
          dd: "%d كۈن",
          M: "بىر ئاي",
          MM: "%d ئاي",
          y: "بىر يىل",
          yy: "%d يىل"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "-كۈنى";
            case "w":
            case "W":
              return e + "-ھەپتە";
            default:
              return e
          }
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      function t(e, t, n) {
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (o = +e, r = {
          ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
          mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: t ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
        } [n].split("_"), o % 10 == 1 && o % 100 != 11 ? r[0] : 2 <= o % 10 && o % 10 <= 4 && (o % 100 < 10 || 20 <= o % 100) ? r[1] : r[2]);
        var o, r
      }

      function n(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
      }
      return e.defineLocale("uk", {
        months: {
          format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
          standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
          var n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
          };
          return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
          sameDay: n("[Сьогодні "),
          nextDay: n("[Завтра "),
          lastDay: n("[Вчора "),
          nextWeek: n("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return n("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return n("[Минулого] dddd [").call(this)
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: t,
          m: t,
          mm: t,
          h: "годину",
          hh: t,
          d: "день",
          dd: t,
          M: "місяць",
          MM: t,
          y: "рік",
          yy: t
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return e + "-й";
            case "D":
              return e + "-го";
            default:
              return e
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
        n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
      return e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام"
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال"
        },
        preparse: function (e) {
          return e.replace(/،/g, ",")
        },
        postformat: function (e) {
          return e.replace(/,/g, "،")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil"
        },
        week: {
          dow: 1,
          doy: 7
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e)
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần rồi lúc] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : 11 <= e ? e : e + 12
        },
        meridiem: function (e, t, n) {
          var o = 100 * e + t;
          return o < 600 ? "凌晨" : o < 900 ? "早上" : o < 1130 ? "上午" : o < 1230 ? "中午" : o < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "周";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        week: {
          dow: 1,
          doy: 4
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var o = 100 * e + t;
          return o < 600 ? "凌晨" : o < 900 ? "早上" : o < 1130 ? "上午" : o < 1230 ? "中午" : o < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    var o, r, i, a;
    a = function (e) {
      return e.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
          var o = 100 * e + t;
          return o < 600 ? "凌晨" : o < 900 ? "早上" : o < 1130 ? "上午" : o < 1230 ? "中午" : o < 1800 ? "下午" : "晚上"
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      })
    }, "object" === ("function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    })(t) && void 0 !== e ? a(n(0)) : (r = [n(0)], void 0 === (i = "function" == typeof (o = a) ? o.apply(t, r) : o) || (e.exports = i))
  }, function (e, t, n) {
    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
    }
    var _ = n(127),
      m = n(1),
      f = n(130),
      p = a(n(132)),
      r = a(n(0));

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var s = m.LS_ACCESS_TOKEN_KEY + (0, r.default)().format("YYYYMMDD"),
      d = (o(y, [{
        key: "accessToken",
        get: function () {
          var e = localStorage.getItem(s);
          return e || localStorage.clear(), e
        },
        set: function (e) {
          localStorage.setItem(s, e)
        }
      }, {
        key: "loginLink",
        get: function () {
          var e = this.backcall_uri + "?bkurl=" + encodeURIComponent(window.location.href),
            t = Object.assign({
              response_type: "code",
              redirect_uri: e
            }, this.oauth);
          return "https://gitee.com/oauth/authorize" + f.Query.stringify(t)
        }
      }]), o(y, [{
        key: "init",
        value: function () {
          var t = this;
          return this.createIssue().then(function () {
            return t.loadComments()
          }).then(function (e) {
            return t.state.error = null, e
          })
        }
      }, {
        key: "useTheme",
        value: function (e) {
          var t = this,
            n = 0 < arguments.length && void 0 !== e ? e : {};
          this.theme = n, Object.keys(this.theme).forEach(function (e) {
            var o, r;
            (o = t)[r = e] = function (e) {
              var t = (0, f.getTargetContainer)(e),
                n = o.theme[r] || o.defaultTheme[r];
              return (0, _.autorun)(function () {
                var e = n(o.state, o);
                t.firstChild ? t.replaceChild(e, t.firstChild) : t.appendChild(e)
              }), t
            }
          })
        }
      }, {
        key: "update",
        value: function () {
          var t = this;
          return Promise.all([this.loadMeta(), this.loadUserInfo()]).then(function () {
            return Promise.all([t.loadComments()])
          }).catch(function (e) {
            return t.state.error = e
          })
        }
      }, {
        key: "markdown",
        value: function (e) {
          return f.http.post("/markdown", {
            text: e
          })
        }
      }, {
        key: "users",
        value: function (e) {
          return f.http.get("/users/" + e)
        }
      }, {
        key: "createIssue",
        value: function () {
          var t = this,
            e = this.id,
            n = this.owner,
            o = this.repo,
            r = this.title,
            i = this.link,
            a = this.desc,
            s = this.labels,
            d = this.accessToken;
          return f.http.post("/repos/" + n + "/issues", {
            access_token: d,
            title: r,
            repo: o,
            labels: s.concat(["giteement", e]),
            body: i + "\n\n" + a
          }).then(function (e) {
            return t.state.meta = e
          })
        }
      }, {
        key: "getIssue",
        value: function () {
          return this.state.meta.id ? Promise.resolve(this.state.meta) : this.loadMeta()
        }
      }, {
        key: "post",
        value: function (t) {
          var n = this,
            o = this.accessToken;
          return this.getIssue().then(function (e) {
            return f.http.post(e.url + "/comments", {
              access_token: o,
              body: t
            }, "")
          }).then(function (e) {
            n.state.meta.comments++;
            var t = Math.ceil(n.state.meta.comments / n.perPage);
            return n.state.currentPage === t && n.state.comments.push(e), e
          })
        }
      }, {
        key: "loadMeta",
        value: function () {
          var t = this,
            e = this.id,
            n = this.owner,
            o = this.repo;
          return f.http.get("/repos/" + n + "/" + o + "/issues", {
            creator: n,
            labels: e
          }).then(function (e) {
            return e.length ? (t.state.meta = e[0], e[0]) : Promise.reject(m.NOT_INITIALIZED_ERROR)
          })
        }
      }, {
        key: "loadComments",
        value: function (e) {
          var t = this,
            n = 0 < arguments.length && void 0 !== e ? e : this.state.currentPage;
          return this.getIssue().then(function (e) {
            return f.http.get(e.url + "/comments", {
              page: n,
              per_page: t.perPage
            }, "")
          }).then(function (e) {
            return t.state.comments = e
          })
        }
      }, {
        key: "loadUserInfo",
        value: function () {
          var t = this;
          return this.accessToken && "undefined" != this.accessToken ? f.http.get("/user", {
            token: this.accessToken
          }).then(function (e) {
            return t.state.user = e, localStorage.setItem(m.LS_USER_KEY, JSON.stringify(e)), e
          }) : (this.logout(), Promise.resolve({}))
        }
      }, {
        key: "login",
        value: function () {
          window.location.href = this.loginLink
        }
      }, {
        key: "logout",
        value: function () {
          localStorage.clear(), this.state.user = {}
        }
      }, {
        key: "goto",
        value: function (e) {
          return this.state.currentPage = e, this.state.comments = void 0, this.loadComments(e)
        }
      }]), y);

    function y() {
      var t = this,
        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      ! function (e) {
        if (!(e instanceof y)) throw new TypeError("Cannot call a class as a function")
      }(this), this.defaultTheme = p.default, this.useTheme(p.default), Object.assign(this, {
        id: window.location.href,
        title: window.document.title,
        link: window.location.href,
        desc: "",
        labels: "",
        theme: p.default,
        oauth: {},
        perPage: 20,
        maxCommentHeight: 250
      }, e), this.useTheme(this.theme);
      var n = {};
      try {
        var o = localStorage.getItem(m.LS_USER_KEY);
        this.accessToken && o && Object.assign(n, JSON.parse(o), {
          fromCache: !0
        })
      } catch (e) {
        localStorage.removeItem(m.LS_USER_KEY), localStorage.removeItem(m.LS_ACCESS_TOKEN_KEY)
      }
      this.state = (0, _.observable)({
        user: n,
        error: null,
        meta: {},
        comments: void 0,
        currentPage: 1
      });
      var r = f.Query.parse();
      if (r.code) {
        var i = this.oauth,
          a = i.client_id,
          s = i.client_secret,
          d = this.backcall_uri + "?bkurl=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.hash.split("?")[0]),
          u = r.code;
        delete r.code;
        var l = f.Query.stringify(r),
          c = "" + window.location.origin + window.location.pathname + l + window.location.hash.split("?")[0];
        history.replaceState({}, "", c), Object.assign(this, {
          id: c,
          link: c
        }, e), this.state.user.isLoggingIn = !0, f.http.post(this.oauth_uri, {
          code: u,
          client_id: a,
          client_secret: s,
          redirect_uri: d,
          grant_type: "authorization_code"
        }, "").then(function (e) {
          t.accessToken = e.access_token, t.update()
        }).catch(function (e) {
          t.state.user.isLoggingIn = !1, alert(e)
        })
      } else this.update()
    }
    e.exports = d
  }, function (e, en, t) {
    (function (n, e) {
      Object.defineProperty(en, "__esModule", {
        value: !0
      });
      var f = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return void 0 === e ? "undefined" : _typeof(e)
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
        },
        t = Object.setPrototypeOf || {
          __proto__: []
        }
      instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      }, c = Object.assign || function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++)
          for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      };

      function u(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t ? t.call(e) : {
          next: function () {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        }
      }

      function l(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var o, r, i = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || 0 < t--) && !(o = i.next()).done;) a.push(o.value)
        } catch (e) {
          r = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i)
          } finally {
            if (r) throw r.error
          }
        }
        return a
      }
      var o = "An invariant failed, however the error is obfuscated because this is an production build.",
        s = [];
      Object.freeze(s);
      var p = {};

      function y() {
        return ++De.mobxGuid
      }

      function d(e) {
        throw _(!1, e), "X"
      }

      function _(e, t) {
        if (!e) throw new Error("[mobx] " + (t || o))
      }

      function r(e) {
        var t = !1;
        return function () {
          if (!t) return t = !0, e.apply(this, arguments)
        }
      }
      Object.freeze(p);
      var i = function () {};

      function a(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : f(e))
      }

      function m(e) {
        if (null === e || "object" !== (void 0 === e ? "undefined" : f(e))) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t
      }

      function h(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: n
        })
      }

      function M(e, t) {
        var n = "isMobX" + e;
        return t.prototype[n] = !0,
          function (e) {
            return a(e) && !0 === e[n]
          }
      }

      function v(e) {
        return e instanceof Map
      }

      function L(e) {
        return null === e ? null : "object" === (void 0 === e ? "undefined" : f(e)) ? "" + e : e
      }
      var b = Symbol("mobx administration"),
        g = (k.prototype.onBecomeUnobserved = function () {}, k.prototype.onBecomeObserved = function () {}, k.prototype.reportObserved = function () {
          return Ae(this)
        }, k.prototype.reportChanged = function () {
          var t;
          Oe(), (t = this).lowestObserverState !== Q.STALE && (t.lowestObserverState = Q.STALE, t.observers.forEach(function (e) {
            e.dependenciesState === Q.UP_TO_DATE && (e.isTracing !== ee.NONE && Pe(e, t), e.onBecomeStale()), e.dependenciesState = Q.STALE
          })), Ee()
        }, k.prototype.toString = function () {
          return this.name
        }, k),
        Y = M("Atom", g);

      function k(e) {
        void 0 === e && (e = "Atom@" + y()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = new Set, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = Q.NOT_TRACKING
      }

      function S(e, t, n) {
        void 0 === t && (t = i), void 0 === n && (n = i);
        var o = new g(e);
        return Ze(o, t), Xe(o, n), o
      }
      var D = {
          identity: function (e, t) {
            return e === t
          },
          structural: function (e, t) {
            return Kt(e, t)
          },
          default: function (e, t) {
            return Object.is(e, t)
          }
        },
        w = Symbol("mobx did run lazy initializers"),
        T = Symbol("mobx pending decorators"),
        x = {},
        j = {};

      function H(e) {
        if (!0 !== e[w]) {
          var t = e[T];
          if (t)
            for (var n in h(e, w, !0), t) {
              var o = t[n];
              o.propertyCreator(e, o.prop, o.descriptor, o.decoratorTarget, o.decoratorArguments)
            }
        }
      }

      function O(u, l) {
        return function () {
          function e(e, t, n, o) {
            if (!0 === o) return l(e, t, n, e, d), null;
            if (!Object.prototype.hasOwnProperty.call(e, T)) {
              var r = e[T];
              h(e, T, c({}, r))
            }
            return e[T][t] = {
              prop: t,
              propertyCreator: l,
              descriptor: n,
              decoratorTarget: e,
              decoratorArguments: d
            }, (s = (a = u) ? x : j)[i = t] || (s[i] = {
              configurable: !0,
              enumerable: a,
              get: function () {
                return H(this), this[i]
              },
              set: function (e) {
                H(this), this[i] = e
              }
            });
            var i, a, s
          }
          var d, t;
          return (2 === (t = arguments).length || 3 === t.length) && "string" == typeof t[1] || 4 === t.length && !0 === t[3] ? (d = s, e.apply(null, arguments)) : (d = Array.prototype.slice.call(arguments), e)
        }
      }

      function E(e, t, n) {
        return lt(e) ? e : Array.isArray(e) ? q.array(e, {
          name: n
        }) : m(e) ? q.object(e, void 0, {
          name: n
        }) : v(e) ? q.map(e, {
          name: n
        }) : e
      }

      function A(e) {
        return e
      }

      function P(a) {
        _(a);
        var e = O(!0, function (e, t, n, o, r) {
            var i = n ? n.initializer ? n.initializer.call(e) : n.value : void 0;
            zt(e).addObservableProp(t, i, a)
          }),
          t = (void 0 !== n && n.env, e);
        return t.enhancer = a, t
      }
      var C = {
        deep: !0,
        name: void 0,
        defaultDecorator: void 0,
        proxy: !0
      };

      function W(e) {
        return null == e ? C : "string" == typeof e ? {
          name: e,
          deep: !0,
          proxy: !0
        } : e
      }
      Object.freeze(C);
      var N = P(E),
        F = P(function (e, t, n) {
          return null == e ? e : Ut(e) || Et(e) || Ct(e) ? e : Array.isArray(e) ? q.array(e, {
            name: n,
            deep: !1
          }) : m(e) ? q.object(e, void 0, {
            name: n,
            deep: !1
          }) : v(e) ? q.map(e, {
            name: n,
            deep: !1
          }) : d(!1)
        }),
        z = P(A),
        I = P(function (e, t, n) {
          return Kt(e, t) ? t : e
        });

      function R(e) {
        return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? A : E
      }
      var J = {
          box: function (e, t) {
            2 < arguments.length && U("box");
            var n = W(t);
            return new se(e, R(n), n.name)
          },
          array: function (e, t) {
            2 < arguments.length && U("array");
            var n = W(t);
            return function (e, t, n, o) {
              void 0 === n && (n = "ObservableArray@" + y()), void 0 === o && (o = !1);
              var r, i, a, s = new Tt(n, t, o);
              r = s.values, i = b, a = s, Object.defineProperty(r, i, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: a
              });
              var d = new Proxy(s.values, wt);
              if (s.proxy = d, e && e.length) {
                var u = Z(!0);
                s.spliceWithArray(0, 0, e), X(u)
              }
              return d
            }(e, R(n), n.name)
          },
          map: function (e, t) {
            2 < arguments.length && U("map");
            var n = W(t);
            return new Pt(e, R(n), n.name)
          },
          object: function (e, t, n) {
            "string" == typeof t && U("object");
            var o = W(n);
            if (!1 === o.proxy) return et({}, e, t, o);
            var r, i, a = tt(o),
              s = (r = et({}, void 0, void 0, o), i = new Proxy(r, Lt), r[b].proxy = i);
            return nt(s, e, t, a), s
          },
          ref: z,
          shallow: F,
          deep: N,
          struct: I
        },
        q = function e(t, n, o) {
          if ("string" == typeof n) return N.apply(null, arguments);
          if (lt(t)) return t;
          var r = m(t) ? e.object(t, n, o) : Array.isArray(t) ? e.array(t, n) : v(t) ? e.map(t, n) : t;
          if (r !== t) return r;
          d(!1)
        };

      function U(e) {
        d("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
      }

      function V(e, t, n) {
        if ("string" == typeof t) return B.apply(null, arguments);
        if (null !== e && "object" === (void 0 === e ? "undefined" : f(e)) && 1 === arguments.length) return B.apply(null, arguments);
        var o = "object" === (void 0 === t ? "undefined" : f(t)) ? t : {};
        return o.get = e, o.set = "function" == typeof t ? t : o.set, o.name = o.name || e.name || "", new ue(o)
      }
      Object.keys(J).forEach(function (e) {
        return q[e] = J[e]
      });
      var B = O(!1, function (e, t, n, o, r) {
          var i = n.get,
            a = n.set,
            s = r[0] || {};
          zt(e).addComputedProp(o, t, c({
            get: i,
            set: a,
            context: e
          }, s))
        }),
        G = B({
          equals: D.structural
        });

      function $(e, t) {
        function n() {
          return K(e, t, this, arguments)
        }
        return n.isMobxAction = !0, n
      }

      function K(e, t, n, o) {
        var r, i, a = (r = be(), Oe(), {
          prevDerivation: r,
          prevAllowStateChanges: Z(!0),
          notifySpy: !1,
          startTime: 0
        });
        try {
          return t.apply(n, o)
        } finally {
          X((i = a).prevAllowStateChanges), Ee(), ge(i.prevDerivation)
        }
      }

      function Z(e) {
        var t = De.allowStateChanges;
        return De.allowStateChanges = e, t
      }

      function X(e) {
        De.allowStateChanges = e
      }
      V.struct = G;
      var Q, ee, te, ne, oe, re, ie, ae = {},
        se = (t(ne = _e, oe = te = g), ne.prototype = null === oe ? Object.create(oe) : (me.prototype = oe.prototype, new me), _e.prototype.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e
        }, _e.prototype.set = function (e) {
          this.value, (e = this.prepareNewValue(e)) !== ae && this.setNewValue(e)
        }, _e.prototype.prepareNewValue = function (e) {
          if (he(this), bt(this)) {
            var t = Yt(this, {
              object: this,
              type: "update",
              newValue: e
            });
            if (!t) return ae;
            e = t.newValue
          }
          return e = this.enhancer(e, this.value, this.name), this.value !== e ? e : ae
        }, _e.prototype.setNewValue = function (e) {
          var t = this.value;
          this.value = e, this.reportChanged(), kt(this) && Dt(this, {
            type: "update",
            object: this,
            newValue: e,
            oldValue: t
          })
        }, _e.prototype.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value)
        }, _e.prototype.intercept = function (e) {
          return gt(this, e)
        }, _e.prototype.observe = function (e, t) {
          return t && e({
            object: this,
            type: "update",
            newValue: this.value,
            oldValue: void 0
          }), St(this, e)
        }, _e.prototype.toJSON = function () {
          return this.get()
        }, _e.prototype.toString = function () {
          return this.name + "[" + this.value + "]"
        }, _e.prototype.valueOf = function () {
          return L(this.get())
        }, _e.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf()
        }, _e),
        de = M("ObservableValue", se),
        ue = (ce.prototype.onBecomeStale = function () {
          var t;
          (t = this).lowestObserverState === Q.UP_TO_DATE && (t.lowestObserverState = Q.POSSIBLY_STALE, t.observers.forEach(function (e) {
            e.dependenciesState === Q.UP_TO_DATE && (e.dependenciesState = Q.POSSIBLY_STALE, e.isTracing !== ee.NONE && Pe(e, t), e.onBecomeStale())
          }))
        }, ce.prototype.onBecomeUnobserved = function () {}, ce.prototype.onBecomeObserved = function () {}, ce.prototype.get = function () {
          var t, e = this;
          this.keepAlive && this.firstGet && (this.firstGet = !1, Ge(function () {
            return e.get()
          })), this.isComputing && d("Cycle detected in computation " + this.name + ": " + this.derivation), 0 === De.inBatch && 0 === this.observers.size ? ye(this) && (this.warnAboutUntrackedRead(), Oe(), this.value = this.computeValue(!1), Ee()) : (Ae(this), ye(this) && this.trackAndCompute() && (t = this).lowestObserverState !== Q.STALE && (t.lowestObserverState = Q.STALE, t.observers.forEach(function (e) {
            e.dependenciesState === Q.POSSIBLY_STALE ? e.dependenciesState = Q.STALE : e.dependenciesState === Q.UP_TO_DATE && (t.lowestObserverState = Q.UP_TO_DATE)
          })));
          var n = this.value;
          if (pe(n)) throw n.cause;
          return n
        }, ce.prototype.peek = function () {
          var e = this.computeValue(!1);
          if (pe(e)) throw e.cause;
          return e
        }, ce.prototype.set = function (e) {
          if (this.setter) {
            _(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
            try {
              this.setter.call(this.scope, e)
            } finally {
              this.isRunningSetter = !1
            }
          } else _(!1, !1)
        }, ce.prototype.trackAndCompute = function () {
          var e = this.value,
            t = this.dependenciesState === Q.NOT_TRACKING,
            n = this.computeValue(!0),
            o = t || pe(e) || pe(n) || !this.equals(e, n);
          return o && (this.value = n), o
        }, ce.prototype.computeValue = function (e) {
          var t;
          if (this.isComputing = !0, De.computationDepth++, e) t = Me(this, this.derivation, this.scope);
          else if (!0 === De.disableErrorBoundaries) t = this.derivation.call(this.scope);
          else try {
            t = this.derivation.call(this.scope)
          } catch (e) {
            t = new fe(e)
          }
          return De.computationDepth--, this.isComputing = !1, t
        }, ce.prototype.suspend = function () {
          ve(this), this.value = void 0
        }, ce.prototype.observe = function (n, o) {
          var r = this,
            i = !0,
            a = void 0;
          return Ge(function () {
            var e = r.get();
            if (!i || o) {
              var t = be();
              n({
                type: "update",
                object: r,
                newValue: e,
                oldValue: a
              }), ge(t)
            }
            i = !1, a = e
          })
        }, ce.prototype.warnAboutUntrackedRead = function () {}, ce.prototype.toJSON = function () {
          return this.get()
        }, ce.prototype.toString = function () {
          return this.name + "[" + this.derivation.toString() + "]"
        }, ce.prototype.valueOf = function () {
          return L(this.get())
        }, ce.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf()
        }, ce),
        le = M("ComputedValue", ue);

      function ce(e) {
        this.dependenciesState = Q.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = new Set, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = Q.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + y(), this.value = new fe(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = ee.NONE, this.firstGet = !0, this.derivation = e.get, this.name = e.name || "ComputedValue@" + y(), e.set && (this.setter = $(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? D.structural : D.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
      }

      function _e(e, t, n, o) {
        void 0 === n && (n = "ObservableValue@" + y()), void 0 === o && (o = !0);
        var r = te.call(this, n) || this;
        return r.enhancer = t, r.hasUnreportedChange = !1, r.value = t(e, void 0, n), r
      }

      function me() {
        this.constructor = ne
      }(ie = Q || (en.IDerivationState = Q = {}))[ie.NOT_TRACKING = -1] = "NOT_TRACKING", ie[ie.UP_TO_DATE = 0] = "UP_TO_DATE", ie[ie.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", ie[ie.STALE = 2] = "STALE", (re = ee = ee || {})[re.NONE = 0] = "NONE", re[re.LOG = 1] = "LOG", re[re.BREAK = 2] = "BREAK";
      var fe = function (e) {
        this.cause = e
      };

      function pe(e) {
        return e instanceof fe
      }

      function ye(e) {
        switch (e.dependenciesState) {
          case Q.UP_TO_DATE:
            return !1;
          case Q.NOT_TRACKING:
          case Q.STALE:
            return !0;
          case Q.POSSIBLY_STALE:
            for (var t = be(), n = e.observing, o = n.length, r = 0; r < o; r++) {
              var i = n[r];
              if (le(i)) {
                if (De.disableErrorBoundaries) i.get();
                else try {
                  i.get()
                } catch (e) {
                  return ge(t), !0
                }
                if (e.dependenciesState === Q.STALE) return ge(t), !0
              }
            }
            return Ye(e), ge(t), !1
        }
      }

      function he(e) {
        var t = 0 < e.observers.size;
        0 < De.computationDepth && t && d(!1), De.allowStateChanges || !t && "strict" !== De.enforceActions || d(!1)
      }

      function Me(e, t, n) {
        Ye(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++De.runId;
        var o, r = De.trackingDerivation;
        if (De.trackingDerivation = e, !0 === De.disableErrorBoundaries) o = t.call(n);
        else try {
          o = t.call(n)
        } catch (e) {
          o = new fe(e)
        }
        return De.trackingDerivation = r,
          function (e) {
            for (var t = e.observing, n = e.observing = e.newObserving, o = Q.UP_TO_DATE, r = 0, i = e.unboundDepsCount, a = 0; a < i; a++) 0 === (s = n[a]).diffValue && (s.diffValue = 1, r !== a && (n[r] = s), r++), s.dependenciesState > o && (o = s.dependenciesState);
            for (n.length = r, e.newObserving = null, i = t.length; i--;) 0 === (s = t[i]).diffValue && je(s, e), s.diffValue = 0;
            for (; r--;) {
              var s;
              1 === (s = n[r]).diffValue && (s.diffValue = 0, u = e, (d = s).observers.add(u), d.lowestObserverState > u.dependenciesState && (d.lowestObserverState = u.dependenciesState))
            }
            var d, u;
            o !== Q.UP_TO_DATE && (e.dependenciesState = o, e.onBecomeStale())
          }(e), o
      }

      function ve(e) {
        var t = e.observing;
        e.observing = [];
        for (var n = t.length; n--;) je(t[n], e);
        e.dependenciesState = Q.NOT_TRACKING
      }

      function Le(e) {
        var t = be();
        try {
          return e()
        } finally {
          ge(t)
        }
      }

      function be() {
        var e = De.trackingDerivation;
        return De.trackingDerivation = null, e
      }

      function ge(e) {
        De.trackingDerivation = e
      }

      function Ye(e) {
        if (e.dependenciesState !== Q.UP_TO_DATE) {
          e.dependenciesState = Q.UP_TO_DATE;
          for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = Q.UP_TO_DATE
        }
      }

      function ke() {
        this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.disableErrorBoundaries = !1
      }
      var Se = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId"],
        De = new ke,
        we = !1,
        Te = xe();

      function xe() {
        return "undefined" != typeof window ? window : e
      }

      function je(e, t) {
        e.observers.delete(t), 0 === e.observers.size && He(e)
      }

      function He(e) {
        !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, De.pendingUnobservations.push(e))
      }

      function Oe() {
        De.inBatch++
      }

      function Ee() {
        if (0 == --De.inBatch) {
          ze();
          for (var e = De.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation = !1, 0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof ue && n.suspend())
          }
          De.pendingUnobservations = []
        }
      }

      function Ae(e) {
        var t = De.trackingDerivation;
        return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, (t.newObserving[t.unboundDepsCount++] = e).isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.size && 0 < De.inBatch && He(e), !1)
      }

      function Pe(e, t) {
        if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === ee.BREAK) {
          var n = [];
          ! function t(e, n, o) {
            1e3 <= n.length ? n.push("(and many more)") : (n.push("" + new Array(o).join("\t") + e.name), e.dependencies && e.dependencies.forEach(function (e) {
              return t(e, n, o + 1)
            }))
          }(ot(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof ue ? e.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
        }
      }
      Te.__mobxInstanceCount ? (Te.__mobxInstanceCount++, setTimeout(function () {
        we || d(!1)
      }, 1)) : Te.__mobxInstanceCount = 1;
      var Ce = (We.prototype.onBecomeStale = function () {
        this.schedule()
      }, We.prototype.schedule = function () {
        this._isScheduled || (this._isScheduled = !0, De.pendingReactions.push(this), ze())
      }, We.prototype.isScheduled = function () {
        return this._isScheduled
      }, We.prototype.runReaction = function () {
        if (!this.isDisposed) {
          if (Oe(), this._isScheduled = !1, ye(this)) {
            this._isTrackPending = !0;
            try {
              this.onInvalidate(), this._isTrackPending
            } catch (e) {
              this.reportExceptionInDerivation(e)
            }
          }
          Ee()
        }
      }, We.prototype.track = function (e) {
        Oe(), this._isRunning = !0;
        var t = Me(this, e, void 0);
        this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && ve(this), pe(t) && this.reportExceptionInDerivation(t.cause), Ee()
      }, We.prototype.reportExceptionInDerivation = function (t) {
        var n = this;
        if (this.errorHandler) this.errorHandler(t, this);
        else {
          if (De.disableErrorBoundaries) throw t;
          var e = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
          console.error(e, t), De.globalReactionErrorHandlers.forEach(function (e) {
            return e(t, n)
          })
        }
      }, We.prototype.dispose = function () {
        this.isDisposed || (this.isDisposed = !0, this._isRunning || (Oe(), ve(this), Ee()))
      }, We.prototype.getDisposer = function () {
        var e = this.dispose.bind(this);
        return e[b] = this, e
      }, We.prototype.toString = function () {
        return "Reaction[" + this.name + "]"
      }, We.prototype.trace = function (e) {
        void 0 === e && (e = !1), yt(this, e)
      }, We);

      function We(e, t, n) {
        void 0 === e && (e = "Reaction@" + y()), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.observing = [], this.newObserving = [], this.dependenciesState = Q.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + y(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = ee.NONE
      }
      var Ne = 100,
        Fe = function (e) {
          return e()
        };

      function ze() {
        0 < De.inBatch || De.isRunningReactions || Fe(Ie)
      }

      function Ie() {
        De.isRunningReactions = !0;
        for (var e = De.pendingReactions, t = 0; 0 < e.length;) {
          ++t === Ne && (console.error("Reaction doesn't converge to a stable state after " + Ne + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
          for (var n = e.splice(0), o = 0, r = n.length; o < r; o++) n[o].runReaction()
        }
        De.isRunningReactions = !1
      }
      var Re = M("Reaction", Ce);

      function Je(e) {
        return console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
      }

      function qe() {
        d(!1)
      }

      function Ue(i) {
        return function (e, t, n) {
          if (n) {
            if (n.value) return {
              value: $(i, n.value),
              enumerable: !1,
              configurable: !0,
              writable: !0
            };
            var o = n.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function () {
                return $(i, o.call(this))
              }
            }
          }
          return (r = i, function (e, t, n) {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !1,
              get: function () {},
              set: function (e) {
                h(this, t, Ve(r, e))
              }
            })
          }).apply(this, arguments);
          var r
        }
      }
      var Ve = function (e, t, n, o) {
        return 1 === arguments.length && "function" == typeof e ? $(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? $(e, t) : 1 === arguments.length && "string" == typeof e ? Ue(e) : !0 !== o ? Ue(t).apply(null, arguments) : void h(e, t, $(e.name || t, n.value))
      };

      function Be(e, t, n) {
        h(e, t, $(t, n.bind(e)))
      }

      function Ge(e, t) {
        void 0 === t && (t = p);
        var n, o = t && t.name || e.name || "Autorun@" + y();
        if (t.scheduler || t.delay) {
          var r = Ke(t),
            i = !1;
          n = new Ce(o, function () {
            i || (i = !0, r(function () {
              i = !1, n.isDisposed || n.track(a)
            }))
          }, t.onError)
        } else n = new Ce(o, function () {
          this.track(a)
        }, t.onError);

        function a() {
          e(n)
        }
        return n.schedule(), n.getDisposer()
      }
      Ve.bound = function (e, t, n, o) {
        return !0 === o ? (Be(e, t, n.value), null) : n ? {
          configurable: !0,
          enumerable: !1,
          get: function () {
            return Be(this, t, n.value || n.initializer.call(this)), this[t]
          },
          set: qe
        } : {
          enumerable: !1,
          configurable: !0,
          set: function (e) {
            Be(this, t, e)
          },
          get: function () {}
        }
      };
      var $e = function (e) {
        return e()
      };

      function Ke(t) {
        return t.scheduler ? t.scheduler : t.delay ? function (e) {
          return setTimeout(e, t.delay)
        } : $e
      }

      function Ze(e, t, n) {
        return Qe("onBecomeObserved", e, t, n)
      }

      function Xe(e, t, n) {
        return Qe("onBecomeUnobserved", e, t, n)
      }

      function Qe(e, t, n, o) {
        var r = "string" == typeof n ? Vt(t, n) : Vt(t),
          i = "string" == typeof n ? o : n,
          a = r[e];
        return "function" != typeof a ? d(!1) : (r[e] = function () {
          a.call(this), i.call(this)
        }, function () {
          r[e] = a
        })
      }

      function et(e, t, n, o) {
        var r = tt(o = W(o));
        return zt(e, o.name, r.enhancer), t && nt(e, t, n, r), e
      }

      function tt(e) {
        return e.defaultDecorator || (!1 === e.deep ? z : N)
      }

      function nt(e, t, n, o) {
        Oe();
        try {
          for (var r in t) {
            var i = Object.getOwnPropertyDescriptor(t, r),
              a = (n && r in n ? n[r] : i.get ? B : o)(e, r, i, !0);
            a && Object.defineProperty(e, r, a)
          }
        } finally {
          Ee()
        }
      }

      function ot(e, t) {
        return rt(Vt(e, t))
      }

      function rt(e) {
        var t, n, o = {
          name: e.name
        };
        return e.observing && 0 < e.observing.length && (o.dependencies = (t = e.observing, n = [], t.forEach(function (e) {
          -1 === n.indexOf(e) && n.push(e)
        }), n).map(rt)), o
      }

      function it(e) {
        var t, n = {
          name: e.name
        };
        return (t = e).observers && 0 < t.observers.size && (n.observers = Array.from(e.observers).map(it)), n
      }
      var at = 0;

      function st(e) {
        "function" == typeof e.cancel && e.cancel()
      }

      function dt(e, t) {
        if (null == e) return !1;
        if (void 0 === t) return le(e);
        if (!1 === Ut(e)) return !1;
        if (!e[b].values.has(t)) return !1;
        var n = Vt(e, t);
        return le(n)
      }

      function ut(e, t) {
        return null != e && (void 0 !== t ? !!Ut(e) && e[b].values.has(t) : Ut(e) || !!e[b] || Y(e) || Re(e) || le(e))
      }

      function lt(e) {
        return 1 !== arguments.length && d(!1), ut(e)
      }

      function ct(e) {
        return Ut(e) ? e[b].getKeys() : Ct(e) ? Array.from(e.keys()) : d(!1)
      }

      function _t(e, t, n) {
        if (2 !== arguments.length)
          if (Ut(e)) {
            var o = e[b];
            o.values.get(t) ? o.write(t, n) : o.addObservableProp(t, n, o.defaultEnhancer)
          } else if (Ct(e)) e.set(t, n);
        else {
          if (!Et(e)) return d(!1);
          "number" != typeof t && (t = parseInt(t, 10)), _(0 <= t, "Not a valid index: '" + t + "'"), Oe(), t >= e.length && (e.length = t + 1), e[t] = n, Ee()
        } else {
          Oe();
          var r = t;
          try {
            for (var i in r) _t(e, i, r[i])
          } finally {
            Ee()
          }
        }
      }

      function mt(e, t) {
        return Ut(e) ? Bt(e).has(t) : Ct(e) ? e.has(t) : Et(e) ? 0 <= t && t < e.length : d(!1)
      }
      var ft = {
        detectCycles: !0,
        exportMapsAsObjects: !0
      };

      function pt(e, t, n, o) {
        return o.detectCycles && e.set(t, n), n
      }

      function yt() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = !1;
        "boolean" == typeof e[e.length - 1] && (n = e.pop());
        var o = function (e) {
          switch (e.length) {
            case 0:
              return De.trackingDerivation;
            case 1:
              return Vt(e[0]);
            case 2:
              return Vt(e[0], e[1])
          }
        }(e);
        if (!o) return d(!1);
        o.isTracing === ee.NONE && console.log("[mobx.trace] '" + o.name + "' tracing enabled"), o.isTracing = n ? ee.BREAK : ee.LOG
      }

      function ht(e, t) {
        void 0 === t && (t = void 0), Oe();
        try {
          return e.apply(t)
        } finally {
          Ee()
        }
      }

      function Mt(t, e, n) {
        var o;
        "number" == typeof n.timeout && (o = setTimeout(function () {
          if (!i[b].isDisposed) {
            i();
            var e = new Error("WHEN_TIMEOUT");
            if (!n.onError) throw e;
            n.onError(e)
          }
        }, n.timeout)), n.name = n.name || "When@" + y();
        var r = $(n.name + "-effect", e),
          i = Ge(function (e) {
            t() && (e.dispose(), o && clearTimeout(o), r())
          }, n);
        return i
      }

      function vt(e) {
        return e[b]
      }
      var Lt = {
        has: function (e, t) {
          if (t === b || "constructor" === t || t === w) return !0;
          var n = vt(e);
          return !!n.values.get(t) || ("string" == typeof t ? n.has(t) : t in e)
        },
        get: function (e, t) {
          if (t === b || "constructor" === t || t === w) return e[t];
          var n = vt(e),
            o = n.values.get(t);
          return o instanceof g ? o.get() : ("string" == typeof t && n.has(t), e[t])
        },
        set: function (e, t, n) {
          return "string" == typeof t && (_t(e, t, n), !0)
        },
        deleteProperty: function (e, t) {
          return "string" == typeof t && (vt(e).remove(t), !0)
        },
        ownKeys: function (e) {
          return vt(e).keysAtom.reportObserved(), Reflect.ownKeys(e)
        },
        preventExtensions: function (e) {
          return d("Dynamic observable objects cannot be frozen"), !1
        }
      };

      function bt(e) {
        return void 0 !== e.interceptors && 0 < e.interceptors.length
      }

      function gt(e, t) {
        var n = e.interceptors || (e.interceptors = []);
        return n.push(t), r(function () {
          var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
        })
      }

      function Yt(e, t) {
        var n = be();
        try {
          var o = e.interceptors;
          if (o)
            for (var r = 0, i = o.length; r < i && (_(!(t = o[r](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); r++);
          return t
        } finally {
          ge(n)
        }
      }

      function kt(e) {
        return void 0 !== e.changeListeners && 0 < e.changeListeners.length
      }

      function St(e, t) {
        var n = e.changeListeners || (e.changeListeners = []);
        return n.push(t), r(function () {
          var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
        })
      }

      function Dt(e, t) {
        var n = be(),
          o = e.changeListeners;
        if (o) {
          for (var r = 0, i = (o = o.slice()).length; r < i; r++) o[r](t);
          ge(n)
        }
      }
      var wt = {
          get: function (e, t) {
            return t === b ? e[b] : "length" === t ? e[b].getArrayLength() : "number" == typeof t ? xt.get.call(e, t) : "string" != typeof t || isNaN(t) ? xt.hasOwnProperty(t) ? xt[t] : e[t] : xt.get.call(e, parseInt(t))
          },
          set: function (e, t, n) {
            return "length" === t ? (e[b].setArrayLength(n), !0) : "number" == typeof t ? (xt.set.call(e, t, n), !0) : !isNaN(t) && (xt.set.call(e, parseInt(t), n), !0)
          },
          preventExtensions: function (e) {
            return d("Observable arrays cannot be frozen"), !1
          }
        },
        Tt = (jt.prototype.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e
        }, jt.prototype.dehanceValues = function (e) {
          return void 0 !== this.dehancer && 0 < this.values.length ? e.map(this.dehancer) : e
        }, jt.prototype.intercept = function (e) {
          return gt(this, e)
        }, jt.prototype.observe = function (e, t) {
          return void 0 === t && (t = !1), t && e({
            object: this.proxy,
            type: "splice",
            index: 0,
            added: this.values.slice(),
            addedCount: this.values.length,
            removed: [],
            removedCount: 0
          }), St(this, e)
        }, jt.prototype.getArrayLength = function () {
          return this.atom.reportObserved(), this.values.length
        }, jt.prototype.setArrayLength = function (e) {
          if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
          var t = this.values.length;
          if (e !== t)
            if (t < e) {
              for (var n = new Array(e - t), o = 0; o < e - t; o++) n[o] = void 0;
              this.spliceWithArray(t, 0, n)
            } else this.spliceWithArray(e, t - e)
        }, jt.prototype.updateArrayLength = function (e, t) {
          if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
          this.lastKnownLength += t
        }, jt.prototype.spliceWithArray = function (e, t, n) {
          var o = this;
          he(this.atom);
          var r = this.values.length;
          if (void 0 === e ? e = 0 : r < e ? e = r : e < 0 && (e = Math.max(0, r + e)), t = 1 === arguments.length ? r - e : null == t ? 0 : Math.max(0, Math.min(t, r - e)), void 0 === n && (n = s), bt(this)) {
            var i = Yt(this, {
              object: this.proxy,
              type: "splice",
              index: e,
              removedCount: t,
              added: n
            });
            if (!i) return s;
            t = i.removedCount, n = i.added
          }
          n = 0 === n.length ? n : n.map(function (e) {
            return o.enhancer(e, void 0)
          });
          var a = this.spliceItemsIntoValues(e, t, n);
          return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, a), this.dehanceValues(a)
        }, jt.prototype.spliceItemsIntoValues = function (e, t, n) {
          var o;
          if (n.length < 1e4) return (o = this.values).splice.apply(o, function () {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
            return e
          }([e, t], n));
          var r = this.values.slice(e, e + t);
          return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), r
        }, jt.prototype.notifyArrayChildUpdate = function (e, t, n) {
          var o = !this.owned && !1,
            r = kt(this),
            i = r || o ? {
              object: this.proxy,
              type: "update",
              index: e,
              newValue: t,
              oldValue: n
            } : null;
          this.atom.reportChanged(), r && Dt(this, i)
        }, jt.prototype.notifyArraySplice = function (e, t, n) {
          var o = !this.owned && !1,
            r = kt(this),
            i = r || o ? {
              object: this.proxy,
              type: "splice",
              index: e,
              removed: n,
              added: t,
              removedCount: n.length,
              addedCount: t.length
            } : null;
          this.atom.reportChanged(), r && Dt(this, i)
        }, jt),
        xt = {
          intercept: function (e) {
            return this[b].intercept(e)
          },
          observe: function (e, t) {
            return void 0 === t && (t = !1), this[b].observe(e, t)
          },
          clear: function () {
            return this.splice(0)
          },
          replace: function (e) {
            var t = this[b];
            return t.spliceWithArray(0, t.values.length, e)
          },
          toJS: function () {
            return this.slice()
          },
          toJSON: function () {
            return this.toJS()
          },
          splice: function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
            var r = this[b];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return r.spliceWithArray(e);
              case 2:
                return r.spliceWithArray(e, t)
            }
            return r.spliceWithArray(e, t, n)
          },
          spliceWithArray: function (e, t, n) {
            return this[b].spliceWithArray(e, t, n)
          },
          push: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = this[b];
            return n.spliceWithArray(n.values.length, 0, e), n.values.length
          },
          pop: function () {
            return this.splice(Math.max(this[b].values.length - 1, 0), 1)[0]
          },
          shift: function () {
            return this.splice(0, 1)[0]
          },
          unshift: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = this[b];
            return n.spliceWithArray(0, 0, e), n.values.length
          },
          reverse: function () {
            var e = this.slice();
            return e.reverse.apply(e, arguments)
          },
          sort: function (e) {
            var t = this.slice();
            return t.sort.apply(t, arguments)
          },
          remove: function (e) {
            var t = this[b],
              n = t.dehanceValues(t.values).indexOf(e);
            return -1 < n && (this.splice(n, 1), !0)
          },
          get: function (e) {
            var t = this[b];
            if (t) {
              if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
              console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
            }
          },
          set: function (e, t) {
            var n = this[b],
              o = n.values;
            if (e < o.length) {
              he(n.atom);
              var r = o[e];
              if (bt(n)) {
                var i = Yt(n, {
                  type: "update",
                  object: this,
                  index: e,
                  newValue: t
                });
                if (!i) return;
                t = i.newValue
              }(t = n.enhancer(t, r)) !== r && (o[e] = t, n.notifyArrayChildUpdate(e, t, r))
            } else {
              if (e !== o.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + o.length);
              n.spliceWithArray(e, 0, [t])
            }
          }
        };

      function jt(n, o, e) {
        this.owned = e, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new g(n || "ObservableArray@" + y()), this.enhancer = function (e, t) {
          return o(e, t, n + "[..]")
        }
      } ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (n) {
        xt[n] = function () {
          var e = this[b];
          e.atom.reportObserved();
          var t = e.dehanceValues(e.values);
          return t[n].apply(t, arguments)
        }
      });
      var Ht, Ot = M("ObservableArrayAdministration", Tt);

      function Et(e) {
        return a(e) && Ot(e[b])
      }
      var At = {},
        Pt = (Ft.prototype._has = function (e) {
          return this._data.has(e)
        }, Ft.prototype.has = function (e) {
          return this._hasMap.has(e) ? this._hasMap.get(e).get() : this._updateHasMapEntry(e, !1).get()
        }, Ft.prototype.set = function (e, t) {
          var n = this._has(e);
          if (bt(this)) {
            var o = Yt(this, {
              type: n ? "update" : "add",
              object: this,
              newValue: t,
              name: e
            });
            if (!o) return this;
            t = o.newValue
          }
          return n ? this._updateValue(e, t) : this._addValue(e, t), this
        }, Ft.prototype.delete = function (e) {
          var t = this;
          if (bt(this) && !(o = Yt(this, {
              type: "delete",
              object: this,
              name: e
            }))) return !1;
          if (this._has(e)) {
            var n = kt(this),
              o = n ? {
                type: "delete",
                object: this,
                oldValue: this._data.get(e).value,
                name: e
              } : null;
            return ht(function () {
              t._keysAtom.reportChanged(), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
            }), n && Dt(this, o), !0
          }
          return !1
        }, Ft.prototype._updateHasMapEntry = function (e, t) {
          var n = this._hasMap.get(e);
          return n ? n.setNewValue(t) : (n = new se(t, A, this.name + "." + e + "?", !1), this._hasMap.set(e, n)), n
        }, Ft.prototype._updateValue = function (e, t) {
          var n = this._data.get(e);
          if ((t = n.prepareNewValue(t)) !== ae) {
            var o = kt(this),
              r = o ? {
                type: "update",
                object: this,
                oldValue: n.value,
                name: e,
                newValue: t
              } : null;
            n.setNewValue(t), o && Dt(this, r)
          }
        }, Ft.prototype._addValue = function (t, n) {
          var o = this;
          he(this._keysAtom), ht(function () {
            var e = new se(n, o.enhancer, o.name + "." + t, !1);
            o._data.set(t, e), n = e.value, o._updateHasMapEntry(t, !0), o._keysAtom.reportChanged()
          });
          var e = kt(this);
          e && Dt(this, e ? {
            type: "add",
            object: this,
            name: t,
            newValue: n
          } : null)
        }, Ft.prototype.get = function (e) {
          return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
        }, Ft.prototype.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e
        }, Ft.prototype.keys = function () {
          return this._keysAtom.reportObserved(), this._data.keys()
        }, Ft.prototype.values = function () {
          var e = this,
            t = 0,
            n = Array.from(this.keys());
          return Xt({
            next: function () {
              return t < n.length ? {
                value: e.get(n[t++]),
                done: !1
              } : {
                done: !0
              }
            }
          })
        }, Ft.prototype.entries = function () {
          var t = this,
            n = 0,
            o = Array.from(this.keys());
          return Xt({
            next: function () {
              if (n < o.length) {
                var e = o[n++];
                return {
                  value: [e, t.get(e)],
                  done: !1
                }
              }
              return {
                done: !0
              }
            }
          })
        }, Ft.prototype[(Ht = b, Symbol.iterator)] = function () {
          return this.entries()
        }, Ft.prototype.forEach = function (e, t) {
          var n, o;
          try {
            for (var r = u(this), i = r.next(); !i.done; i = r.next()) {
              var a = l(i.value, 2),
                s = a[0],
                d = a[1];
              e.call(t, d, s, this)
            }
          } catch (e) {
            n = {
              error: e
            }
          } finally {
            try {
              i && !i.done && (o = r.return) && o.call(r)
            } finally {
              if (n) throw n.error
            }
          }
        }, Ft.prototype.merge = function (t) {
          var r = this;
          return Ct(t) && (t = t.toJS()), ht(function () {
            m(t) ? Object.keys(t).forEach(function (e) {
              return r.set(e, t[e])
            }) : Array.isArray(t) ? t.forEach(function (e) {
              var t = l(e, 2),
                n = t[0],
                o = t[1];
              return r.set(n, o)
            }) : v(t) ? t.forEach(function (e, t) {
              return r.set(t, e)
            }) : null != t && d("Cannot initialize map from " + t)
          }), this
        }, Ft.prototype.clear = function () {
          var i = this;
          ht(function () {
            Le(function () {
              var e, t;
              try {
                for (var n = u(i.keys()), o = n.next(); !o.done; o = n.next()) {
                  var r = o.value;
                  i.delete(r)
                }
              } catch (t) {
                e = {
                  error: t
                }
              } finally {
                try {
                  o && !o.done && (t = n.return) && t.call(n)
                } finally {
                  if (e) throw e.error
                }
              }
            })
          })
        }, Ft.prototype.replace = function (n) {
          var o = this;
          return ht(function () {
            var e, t = m(e = n) ? Object.keys(e) : Array.isArray(e) ? e.map(function (e) {
              return l(e, 1)[0]
            }) : v(e) || Ct(e) ? Array.from(e.keys()) : d("Cannot get keys from '" + e + "'");
            Array.from(o.keys()).filter(function (e) {
              return -1 === t.indexOf(e)
            }).forEach(function (e) {
              return o.delete(e)
            }), o.merge(n)
          }), this
        }, Object.defineProperty(Ft.prototype, "size", {
          get: function () {
            return this._keysAtom.reportObserved(), this._data.size
          },
          enumerable: !0,
          configurable: !0
        }), Ft.prototype.toPOJO = function () {
          var e, t, n = {};
          try {
            for (var o = u(this), r = o.next(); !r.done; r = o.next()) {
              var i = l(r.value, 2),
                a = i[0],
                s = i[1];
              n["" + a] = s
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              r && !r.done && (t = o.return) && t.call(o)
            } finally {
              if (e) throw e.error
            }
          }
          return n
        }, Ft.prototype.toJS = function () {
          return new Map(this)
        }, Ft.prototype.toJSON = function () {
          return this.toPOJO()
        }, Ft.prototype.toString = function () {
          var t = this;
          return this.name + "[{ " + Array.from(this.keys()).map(function (e) {
            return e + ": " + t.get(e)
          }).join(", ") + " }]"
        }, Ft.prototype.observe = function (e, t) {
          return St(this, e)
        }, Ft.prototype.intercept = function (e) {
          return gt(this, e)
        }, Ft),
        Ct = M("ObservableMap", Pt),
        Wt = (Nt.prototype.read = function (e) {
          return this.values.get(e).get()
        }, Nt.prototype.write = function (e, t) {
          var n = this.target,
            o = this.values.get(e);
          if (o instanceof ue) o.set(t);
          else {
            if (bt(this)) {
              if (!(i = Yt(this, {
                  type: "update",
                  object: this.proxy || n,
                  name: e,
                  newValue: t
                }))) return;
              t = i.newValue
            }
            if ((t = o.prepareNewValue(t)) !== ae) {
              var r = kt(this),
                i = r ? {
                  type: "update",
                  object: this.proxy || n,
                  oldValue: o.value,
                  name: e,
                  newValue: t
                } : null;
              o.setNewValue(t), r && Dt(this, i)
            }
          }
        }, Nt.prototype.has = function (e) {
          return this.values.get(e) instanceof se || (this.waitForKey(e), !1)
        }, Nt.prototype.waitForKey = function (e) {
          var t = this.pendingKeys || (this.pendingKeys = new Map),
            n = t.get(e);
          n || (n = new se(!1, A, this.name + "." + e.toString() + "?", !1), t.set(e, n)), n.get()
        }, Nt.prototype.addObservableProp = function (e, t, n) {
          void 0 === n && (n = this.defaultEnhancer);
          var o = this.target;
          if (bt(this)) {
            var r = Yt(this, {
              object: this.proxy || o,
              name: e,
              type: "add",
              newValue: t
            });
            if (!r) return;
            t = r.newValue
          }
          var i, a = new se(t, n, this.name + "." + e, !1);
          this.values.set(e, a), t = a.value, Object.defineProperty(o, e, It[i = e] || (It[i] = {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this[b].read(i)
            },
            set: function (e) {
              this[b].write(i, e)
            }
          })), this.notifyPropertyAddition(e, t)
        }, Nt.prototype.addComputedProp = function (e, t, n) {
          var o, r, i, a, s = this.target;
          n.name = n.name || this.name + "." + t, this.values.set(t, new ue(n)), e !== s && (r = e, i = t, (a = Object.getOwnPropertyDescriptor(r, i)) && (!1 === a.configurable || !1 === a.writable)) || Object.defineProperty(e, t, Rt[o = t] || (Rt[o] = {
            configurable: !0,
            enumerable: !1,
            get: function () {
              return Jt(this).read(o)
            },
            set: function (e) {
              Jt(this).write(o, e)
            }
          }))
        }, Nt.prototype.remove = function (e) {
          if (this.values.has(e)) {
            var t = this.target;
            if (bt(this) && !(i = Yt(this, {
                object: this.proxy || t,
                name: e,
                type: "remove"
              }))) return;
            try {
              Oe();
              var n = kt(this),
                o = this.values.get(e),
                r = o && o.get();
              o && o.set(void 0), this.keysAtom.reportChanged(), this.values.delete(e), delete this.target[e];
              var i = n ? {
                type: "remove",
                object: this.proxy || t,
                oldValue: r,
                name: e
              } : null;
              n && Dt(this, i)
            } finally {
              Ee()
            }
          }
        }, Nt.prototype.illegalAccess = function (e, t) {
          console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
        }, Nt.prototype.observe = function (e, t) {
          return St(this, e)
        }, Nt.prototype.intercept = function (e) {
          return gt(this, e)
        }, Nt.prototype.notifyPropertyAddition = function (e, t) {
          var n = kt(this),
            o = n ? {
              type: "add",
              object: this.proxy || this.target,
              name: e,
              newValue: t
            } : null;
          if (n && Dt(this, o), this.pendingKeys) {
            var r = this.pendingKeys.get(e);
            r && r.set(!0)
          }
          this.keysAtom.reportChanged()
        }, Nt.prototype.getKeys = function () {
          var e, t;
          this.keysAtom.reportObserved();
          var n = [];
          try {
            for (var o = u(this.values), r = o.next(); !r.done; r = o.next()) {
              var i = l(r.value, 2),
                a = i[0];
              i[1] instanceof se && n.push(a)
            }
          } catch (t) {
            e = {
              error: t
            }
          } finally {
            try {
              r && !r.done && (t = o.return) && t.call(o)
            } finally {
              if (e) throw e.error
            }
          }
          return n
        }, Nt);

      function Nt(e, t, n, o) {
        void 0 === t && (t = new Map), this.target = e, this.values = t, this.name = n, this.defaultEnhancer = o, this.keysAtom = new g(n + ".keys")
      }

      function Ft(e, t, n) {
        if (void 0 === t && (t = E), void 0 === n && (n = "ObservableMap@" + y()), this.enhancer = t, this.name = n, this[Ht] = At, this._keysAtom = S(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        this._data = new Map, this._hasMap = new Map, this.merge(e)
      }

      function zt(e, t, n) {
        if (void 0 === t && (t = ""), void 0 === n && (n = E), Object.prototype.hasOwnProperty.call(e, b)) return e[b];
        m(e) || (t = (e.constructor.name || "ObservableObject") + "@" + y()), t = t || "ObservableObject@" + y();
        var o = new Wt(e, new Map, t, n);
        return h(e, b, o), o
      }
      var It = {},
        Rt = {};

      function Jt(e) {
        return e[b] || (H(e), e[b])
      }
      var qt = M("ObservableObjectAdministration", Wt);

      function Ut(e) {
        return !!a(e) && (H(e), qt(e[b]))
      }

      function Vt(e, t) {
        if ("object" === (void 0 === e ? "undefined" : f(e)) && null !== e) {
          if (Et(e)) return void 0 !== t && d(!1), e[b].atom;
          if (Ct(e)) {
            var n = e;
            return void 0 === t ? n._keysAtom : ((o = n._data.get(t) || n._hasMap.get(t)) || d(!1), o)
          }
          var o;
          if (H(e), t && !e[b] && e[t], Ut(e)) return t ? ((o = e[b].values.get(t)) || d(!1), o) : d(!1);
          if (Y(e) || le(e) || Re(e)) return e
        } else if ("function" == typeof e && Re(e[b])) return e[b];
        return d(!1)
      }

      function Bt(e, t) {
        return e || d("Expecting some object"), void 0 !== t ? Bt(Vt(e, t)) : Y(e) || le(e) || Re(e) ? e : Ct(e) ? e : (H(e), e[b] ? e[b] : void d(!1))
      }

      function Gt(e, t) {
        return (void 0 !== t ? Vt(e, t) : Ut(e) || Ct(e) ? Bt(e) : Vt(e)).name
      }
      var $t = Object.prototype.toString;

      function Kt(e, t) {
        return function m(e, t, n, o) {
          if (e === t) return 0 !== e || 1 / e == 1 / t;
          if (null == e || null == t) return !1;
          if (e != e) return t != t;
          var r = void 0 === e ? "undefined" : f(e);
          return ("function" === r || "object" === r || "object" == (void 0 === t ? "undefined" : f(t))) && function (e, t, n, o) {
            e = Zt(e), t = Zt(t);
            var r = $t.call(e);
            if (r !== $t.call(t)) return !1;
            switch (r) {
              case "[object RegExp]":
              case "[object String]":
                return "" + e == "" + t;
              case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
              case "[object Date]":
              case "[object Boolean]":
                return +e == +t;
              case "[object Symbol]":
                return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            }
            var i = "[object Array]" === r;
            if (!i) {
              if ("object" != (void 0 === e ? "undefined" : f(e)) || "object" != (void 0 === t ? "undefined" : f(t))) return !1;
              var a = e.constructor,
                s = t.constructor;
              if (a !== s && !("function" == typeof a && a instanceof a && "function" == typeof s && s instanceof s) && "constructor" in e && "constructor" in t) return !1
            }
            o = o || [];
            for (var d, u, l = (n = n || []).length; l--;)
              if (n[l] === e) return o[l] === t;
            if (n.push(e), o.push(t), i) {
              if ((l = e.length) !== t.length) return !1;
              for (; l--;)
                if (!m(e[l], t[l], n, o)) return !1
            } else {
              var c, _ = Object.keys(e);
              if (l = _.length, Object.keys(t).length !== l) return !1;
              for (; l--;)
                if (d = t, u = c = _[l], !Object.prototype.hasOwnProperty.call(d, u) || !m(e[c], t[c], n, o)) return !1
            }
            return n.pop(), o.pop(), !0
          }(e, t, n, o)
        }(e, t)
      }

      function Zt(e) {
        return Et(e) ? e.slice() : v(e) || Ct(e) ? Array.from(e.entries()) : e
      }

      function Xt(e) {
        return e[Symbol.iterator] = Qt, e
      }

      function Qt() {
        return this
      }
      if ("undefined" == typeof Proxy) throw new Error("[mobx] MobX 5+ requires Proxy objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4.");
      "object" === ("undefined" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ? "undefined" : f(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: Je,
        extras: {
          getDebugName: Gt
        },
        $mobx: b
      }), en.Reaction = Ce, en.untracked = Le, en.IDerivationState = Q, en.createAtom = S, en.spy = Je, en.comparer = D, en.isObservableObject = Ut, en.isBoxedObservable = de, en.isObservableArray = Et, en.ObservableMap = Pt, en.isObservableMap = Ct, en.transaction = ht, en.observable = q, en.computed = V, en.isObservable = lt, en.isObservableProp = function (e, t) {
        return "string" != typeof t ? d(!1) : ut(e, t)
      }, en.isComputed = function (e) {
        return 1 < arguments.length ? d(!1) : dt(e)
      }, en.isComputedProp = function (e, t) {
        return "string" != typeof t ? d(!1) : dt(e, t)
      }, en.extendObservable = et, en.observe = function (e, t, n, o) {
        return "function" == typeof n ? (a = n, s = o, Bt(e, t).observe(a, s)) : (r = t, i = n, Bt(e).observe(r, i));
        var r, i, a, s
      }, en.intercept = function (e, t, n) {
        return "function" == typeof n ? (r = n, Bt(e, t).intercept(r)) : (o = t, Bt(e).intercept(o));
        var o, r
      }, en.autorun = Ge, en.reaction = function (n, e, o) {
        void 0 === o && (o = p);
        var r, t, i, a = o.name || "Reaction@" + y(),
          s = Ve(a, o.onError ? (t = o.onError, i = e, function () {
            try {
              return i.apply(this, arguments)
            } catch (e) {
              t.call(this, e)
            }
          }) : e),
          d = !o.scheduler && !o.delay,
          u = Ke(o),
          l = !0,
          c = !1,
          _ = o.compareStructural ? D.structural : o.equals || D.default,
          m = new Ce(a, function () {
            l || d ? f() : c || (c = !0, u(f))
          }, o.onError);

        function f() {
          if (c = !1, !m.isDisposed) {
            var t = !1;
            m.track(function () {
              var e = n(m);
              t = l || !_(r, e), r = e
            }), l && o.fireImmediately && s(r, m), l || !0 !== t || s(r, m), l = l && !1
          }
        }
        return m.schedule(), m.getDisposer()
      }, en.when = function (e, t, n) {
        return 1 === arguments.length || t && "object" === (void 0 === t ? "undefined" : f(t)) ? (o = e, r = t, (a = new Promise(function (e, t) {
          var n = Mt(o, e, c({}, r, {
            onError: t
          }));
          i = function () {
            n(), t("WHEN_CANCELLED")
          }
        })).cancel = i, a) : Mt(e, t, n || {});
        var o, r, i, a
      }, en.action = Ve, en.isAction = function (e) {
        return "function" == typeof e && !0 === e.isMobxAction
      }, en.runInAction = function (e, t) {
        return K("string" == typeof e || e.name, "function" == typeof e ? e : t, this, void 0)
      }, en.keys = ct, en.values = function (t) {
        return Ut(t) ? ct(t).map(function (e) {
          return t[e]
        }) : Ct(t) ? ct(t).map(function (e) {
          return t.get(e)
        }) : Et(t) ? t.slice() : d(!1)
      }, en.entries = function (t) {
        return Ut(t) ? ct(t).map(function (e) {
          return [e, t[e]]
        }) : Ct(t) ? ct(t).map(function (e) {
          return [e, t.get(e)]
        }) : Et(t) ? t.map(function (e, t) {
          return [t, e]
        }) : d(!1)
      }, en.set = _t, en.remove = function (e, t) {
        if (Ut(e)) e[b].remove(t);
        else if (Ct(e)) e.delete(t);
        else {
          if (!Et(e)) return d(!1);
          "number" != typeof t && (t = parseInt(t, 10)), _(0 <= t, "Not a valid index: '" + t + "'"), e.splice(t, 1)
        }
      }, en.has = mt, en.get = function (e, t) {
        if (mt(e, t)) return Ut(e) ? e[t] : Ct(e) ? e.get(t) : Et(e) ? e[t] : d(!1)
      }, en.decorate = function (e, t) {
        var n = "function" == typeof e ? e.prototype : e;
        for (var o in t) {
          var r = (0, t[o])(n, o, Object.getOwnPropertyDescriptor(n, o));
          r && Object.defineProperty(n, o, r)
        }
        return e
      }, en.configure = function (e) {
        var t, n, o = e.enforceActions,
          r = e.computedRequiresReaction,
          i = e.disableErrorBoundaries,
          a = e.reactionScheduler;
        if (void 0 !== o) {
          if ("boolean" != typeof o && "strict" !== o) return fail("Invalid configuration for 'enforceActions': " + o);
          De.enforceActions = o, De.allowStateChanges = !0 !== o && "strict" !== o
        }
        void 0 !== r && (De.computedRequiresReaction = !!r), !0 === e.isolateGlobalState && (we = !0, xe().__mobxInstanceCount--), void 0 !== i && (!0 === i && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), De.disableErrorBoundaries = !!i), a && (t = a, n = Fe, Fe = function (e) {
          return t(function () {
            return n(e)
          })
        })
      }, en.onBecomeObserved = Ze, en.onBecomeUnobserved = Xe, en.flow = function (n) {
        1 !== arguments.length && d("Flow expects one 1 argument and cannot be used as decorator");
        var c = n.name || "<unnamed flow>";
        return function () {
          var s, e = arguments,
            d = ++at,
            u = Ve(c + " - runid: " + d + " - init", n).apply(this, e),
            l = void 0,
            t = new Promise(function (t, n) {
              var o = 0;

              function r(e) {
                var t;
                l = void 0;
                try {
                  t = Ve(c + " - runid: " + d + " - yield " + o++, u.next).call(u, e)
                } catch (e) {
                  return n(e)
                }
                a(t)
              }

              function i(e) {
                var t;
                l = void 0;
                try {
                  t = Ve(c + " - runid: " + d + " - yield " + o++, u.throw).call(u, e)
                } catch (e) {
                  return n(e)
                }
                a(t)
              }

              function a(e) {
                if (!e || "function" != typeof e.then) return e.done ? t(e.value) : (l = Promise.resolve(e.value)).then(r, i);
                e.then(a, n)
              }
              s = n, r(void 0)
            });
          return t.cancel = Ve(c + " - runid: " + d + " - cancel", function () {
            try {
              l && st(l);
              var e = u.return(),
                t = Promise.resolve(e.value);
              t.then(i, i), st(t), s(new Error("FLOW_CANCELLED"))
            } catch (e) {
              s(e)
            }
          }), t
        }
      }, en.toJS = function (e, t) {
        return lt(e) ? ("boolean" == typeof t && (t = {
          detectCycles: t
        }), !0 === (t = t || ft).detectCycles && (n = new Map), function n(e, o, r) {
          if (!lt(e)) return e;
          if (!0 === o.detectCycles && null !== e && "object" === (void 0 === e ? "undefined" : f(e)) && r.has(e)) return r.get(e);
          if (Et(e)) {
            var t = pt(r, e, [], o),
              i = e.map(function (e) {
                return n(e, o, r)
              });
            t.length = i.length;
            for (var a = 0, s = i.length; a < s; a++) t[a] = i[a];
            return t
          }
          if (Ut(e)) {
            for (var d in t = pt(r, e, {}, o), ct(e), e) t[d] = n(e[d], o, r);
            return t
          }
          if (Ct(e)) {
            if (!1 === o.exportMapsAsObjects) {
              var u = pt(r, e, new Map, o);
              return e.forEach(function (e, t) {
                u.set(t, n(e, o, r))
              }), u
            }
            var l = pt(r, e, {}, o);
            return e.forEach(function (e, t) {
              l[t] = n(e, o, r)
            }), l
          }
          return de(e) ? n(e.get(), o, r) : e
        }(e, t, n)) : e;
        var n
      }, en.trace = yt, en.getDependencyTree = ot, en.getObserverTree = function (e, t) {
        return it(Vt(e, t))
      }, en._resetGlobalState = function () {
        var e = new ke;
        for (var t in e) - 1 === Se.indexOf(t) && (De[t] = e[t]);
        De.allowStateChanges = !De.enforceActions
      }, en._getGlobalState = function () {
        return De
      }, en.getDebugName = Gt, en.getAtom = Vt, en._getAdministration = Bt, en._allowStateChanges = function (e, t) {
        var n, o = Z(e);
        try {
          n = t()
        } finally {
          X(o)
        }
        return n
      }, en.isArrayLike = function (e) {
        return Array.isArray(e) || Et(e)
      }, en.$mobx = b, en._isComputingDerivation = function () {
        return null !== De.trackingDerivation
      }, en.onReactionError = function (t) {
        return De.globalReactionErrorHandlers.push(t),
          function () {
            var e = De.globalReactionErrorHandlers.indexOf(t);
            0 <= e && De.globalReactionErrorHandlers.splice(e, 1)
          }
      }, en._interceptReads = function (e, t, n) {
        var o;
        if (Ct(e) || Et(e) || de(e)) o = Bt(e);
        else {
          if (!Ut(e)) return d(!1);
          if ("string" != typeof t) return d(!1);
          o = Bt(e, t)
        }
        return void 0 !== o.dehancer ? d(!1) : (o.dehancer = "function" == typeof t ? t : n, function () {
          o.dehancer = void 0
        })
      }
    }).call(this, t(128), t(129))
  }, function (e, t, n) {
    var o, r, i = e.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function d(t) {
      if (o === setTimeout) return setTimeout(t, 0);
      if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0);
      try {
        return o(t, 0)
      } catch (e) {
        try {
          return o.call(null, t, 0)
        } catch (e) {
          return o.call(this, t, 0)
        }
      }
    }! function () {
      try {
        o = "function" == typeof setTimeout ? setTimeout : a
      } catch (e) {
        o = a
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        r = s
      }
    }();
    var u, l = [],
      c = !1,
      _ = -1;

    function m() {
      c && u && (c = !1, u.length ? l = u.concat(l) : _ = -1, l.length && f())
    }

    function f() {
      if (!c) {
        var e = d(m);
        c = !0;
        for (var t = l.length; t;) {
          for (u = l, l = []; ++_ < t;) u && u[_].run();
          _ = -1, t = l.length
        }
        u = null, c = !1,
          function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
            try {
              r(t)
            } catch (e) {
              try {
                return r.call(null, t)
              } catch (e) {
                return r.call(this, t)
              }
            }
          }(e)
      }
    }

    function p(e, t) {
      this.fun = e, this.array = t
    }

    function y() {}
    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new p(e, t)), 1 !== l.length || c || d(f)
    }, p.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function (e) {
      return []
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function () {
      return "/"
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function () {
      return 0
    }
  }, function (mva, nva, ova) {
    var pva, qva = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : _typeof(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
    };
    pva = function () {
      return this
    }();
    try {
      pva = pva || Function("return this")() || eval("this")
    } catch (mva) {
      "object" === ("undefined" == typeof window ? "undefined" : qva(window)) && (pva = window)
    }
    mva.exports = pva
  }, function (e, t, n) {
    var o;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.http = t.Query = t.isString = void 0, t.getTargetContainer = function (e) {
      return e instanceof Element ? e : r(e) ? document.getElementById(e) : document.createElement("div")
    }, n(1), (o = n(0)) && o.__esModule;
    var r = t.isString = function (e) {
        return "[object String]" === toString.call(e)
      },
      u = t.Query = {
        parse: function (e) {
          var t = 0 < arguments.length && void 0 !== e ? e : window.location.search || window.location.hash.split("?")[1];
          if (!t) return {};
          var r = {};
          return ("?" === t[0] ? t.substring(1) : t).split("&").forEach(function (e) {
            var t = function (e) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e) {
                  var t = [],
                    n = !0,
                    o = !1,
                    r = void 0;
                  try {
                    for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done) && (t.push(i.value), 2 !== t.length); n = !0);
                  } catch (e) {
                    o = !0, r = e
                  } finally {
                    try {
                      !n && a.return && a.return()
                    } finally {
                      if (o) throw r
                    }
                  }
                  return t
                }(e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
              }(e.split("=")),
              n = t[0],
              o = t[1];
            n && (r[n] = o)
          }), r
        },
        stringify: function (t, e) {
          var n = 1 < arguments.length && void 0 !== e ? e : "?",
            o = Object.keys(t).map(function (e) {
              return e + "=" + encodeURIComponent(t[e] || "")
            }).join("&");
          return o ? n + o : ""
        }
      };

    function i(d) {
      return function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "https://gitee.com/api/v5",
          i = new XMLHttpRequest,
          o = "" + n + e,
          r = null;
        "GET" !== d && "DELETE" !== d || (o += u.stringify(t));
        var a = new Promise(function (o, r) {
          i.addEventListener("load", function () {
            var e = i.getResponseHeader("content-type"),
              t = i.responseText;
            if (/json/.test(e)) {
              var n = i.responseText ? JSON.parse(t) : {};
              n.message ? r(new Error(n.message)) : o(n)
            } else o(t)
          }), i.addEventListener("error", function (e) {
            return r(e)
          })
        });
        i.open(d, o, !0), i.setRequestHeader("Accept", "application/json, text/plain");
        var s = t.token;
        return s && i.setRequestHeader("Authorization", "token " + s), "GET" !== d && "DELETE" !== d && (r = JSON.stringify(t), i.setRequestHeader("Content-Type", "application/json")), i.send(r), a
      }
    }
    t.http = {
      get: i("GET"),
      post: i("POST"),
      delete: i("DELETE"),
      put: i("PUT")
    }
  }, function (e, t, n) {
    var o = {
      "./af": 3,
      "./af.js": 3,
      "./ar": 4,
      "./ar-dz": 5,
      "./ar-dz.js": 5,
      "./ar-kw": 6,
      "./ar-kw.js": 6,
      "./ar-ly": 7,
      "./ar-ly.js": 7,
      "./ar-ma": 8,
      "./ar-ma.js": 8,
      "./ar-sa": 9,
      "./ar-sa.js": 9,
      "./ar-tn": 10,
      "./ar-tn.js": 10,
      "./ar.js": 4,
      "./az": 11,
      "./az.js": 11,
      "./be": 12,
      "./be.js": 12,
      "./bg": 13,
      "./bg.js": 13,
      "./bm": 14,
      "./bm.js": 14,
      "./bn": 15,
      "./bn.js": 15,
      "./bo": 16,
      "./bo.js": 16,
      "./br": 17,
      "./br.js": 17,
      "./bs": 18,
      "./bs.js": 18,
      "./ca": 19,
      "./ca.js": 19,
      "./cs": 20,
      "./cs.js": 20,
      "./cv": 21,
      "./cv.js": 21,
      "./cy": 22,
      "./cy.js": 22,
      "./da": 23,
      "./da.js": 23,
      "./de": 24,
      "./de-at": 25,
      "./de-at.js": 25,
      "./de-ch": 26,
      "./de-ch.js": 26,
      "./de.js": 24,
      "./dv": 27,
      "./dv.js": 27,
      "./el": 28,
      "./el.js": 28,
      "./en-au": 29,
      "./en-au.js": 29,
      "./en-ca": 30,
      "./en-ca.js": 30,
      "./en-gb": 31,
      "./en-gb.js": 31,
      "./en-ie": 32,
      "./en-ie.js": 32,
      "./en-il": 33,
      "./en-il.js": 33,
      "./en-nz": 34,
      "./en-nz.js": 34,
      "./eo": 35,
      "./eo.js": 35,
      "./es": 36,
      "./es-do": 37,
      "./es-do.js": 37,
      "./es-us": 38,
      "./es-us.js": 38,
      "./es.js": 36,
      "./et": 39,
      "./et.js": 39,
      "./eu": 40,
      "./eu.js": 40,
      "./fa": 41,
      "./fa.js": 41,
      "./fi": 42,
      "./fi.js": 42,
      "./fo": 43,
      "./fo.js": 43,
      "./fr": 44,
      "./fr-ca": 45,
      "./fr-ca.js": 45,
      "./fr-ch": 46,
      "./fr-ch.js": 46,
      "./fr.js": 44,
      "./fy": 47,
      "./fy.js": 47,
      "./gd": 48,
      "./gd.js": 48,
      "./gl": 49,
      "./gl.js": 49,
      "./gom-latn": 50,
      "./gom-latn.js": 50,
      "./gu": 51,
      "./gu.js": 51,
      "./he": 52,
      "./he.js": 52,
      "./hi": 53,
      "./hi.js": 53,
      "./hr": 54,
      "./hr.js": 54,
      "./hu": 55,
      "./hu.js": 55,
      "./hy-am": 56,
      "./hy-am.js": 56,
      "./id": 57,
      "./id.js": 57,
      "./is": 58,
      "./is.js": 58,
      "./it": 59,
      "./it.js": 59,
      "./ja": 60,
      "./ja.js": 60,
      "./jv": 61,
      "./jv.js": 61,
      "./ka": 62,
      "./ka.js": 62,
      "./kk": 63,
      "./kk.js": 63,
      "./km": 64,
      "./km.js": 64,
      "./kn": 65,
      "./kn.js": 65,
      "./ko": 66,
      "./ko.js": 66,
      "./ky": 67,
      "./ky.js": 67,
      "./lb": 68,
      "./lb.js": 68,
      "./lo": 69,
      "./lo.js": 69,
      "./lt": 70,
      "./lt.js": 70,
      "./lv": 71,
      "./lv.js": 71,
      "./me": 72,
      "./me.js": 72,
      "./mi": 73,
      "./mi.js": 73,
      "./mk": 74,
      "./mk.js": 74,
      "./ml": 75,
      "./ml.js": 75,
      "./mn": 76,
      "./mn.js": 76,
      "./mr": 77,
      "./mr.js": 77,
      "./ms": 78,
      "./ms-my": 79,
      "./ms-my.js": 79,
      "./ms.js": 78,
      "./mt": 80,
      "./mt.js": 80,
      "./my": 81,
      "./my.js": 81,
      "./nb": 82,
      "./nb.js": 82,
      "./ne": 83,
      "./ne.js": 83,
      "./nl": 84,
      "./nl-be": 85,
      "./nl-be.js": 85,
      "./nl.js": 84,
      "./nn": 86,
      "./nn.js": 86,
      "./pa-in": 87,
      "./pa-in.js": 87,
      "./pl": 88,
      "./pl.js": 88,
      "./pt": 89,
      "./pt-br": 90,
      "./pt-br.js": 90,
      "./pt.js": 89,
      "./ro": 91,
      "./ro.js": 91,
      "./ru": 92,
      "./ru.js": 92,
      "./sd": 93,
      "./sd.js": 93,
      "./se": 94,
      "./se.js": 94,
      "./si": 95,
      "./si.js": 95,
      "./sk": 96,
      "./sk.js": 96,
      "./sl": 97,
      "./sl.js": 97,
      "./sq": 98,
      "./sq.js": 98,
      "./sr": 99,
      "./sr-cyrl": 100,
      "./sr-cyrl.js": 100,
      "./sr.js": 99,
      "./ss": 101,
      "./ss.js": 101,
      "./sv": 102,
      "./sv.js": 102,
      "./sw": 103,
      "./sw.js": 103,
      "./ta": 104,
      "./ta.js": 104,
      "./te": 105,
      "./te.js": 105,
      "./tet": 106,
      "./tet.js": 106,
      "./tg": 107,
      "./tg.js": 107,
      "./th": 108,
      "./th.js": 108,
      "./tl-ph": 109,
      "./tl-ph.js": 109,
      "./tlh": 110,
      "./tlh.js": 110,
      "./tr": 111,
      "./tr.js": 111,
      "./tzl": 112,
      "./tzl.js": 112,
      "./tzm": 113,
      "./tzm-latn": 114,
      "./tzm-latn.js": 114,
      "./tzm.js": 113,
      "./ug-cn": 115,
      "./ug-cn.js": 115,
      "./uk": 116,
      "./uk.js": 116,
      "./ur": 117,
      "./ur.js": 117,
      "./uz": 118,
      "./uz-latn": 119,
      "./uz-latn.js": 119,
      "./uz.js": 118,
      "./vi": 120,
      "./vi.js": 120,
      "./x-pseudo": 121,
      "./x-pseudo.js": 121,
      "./yo": 122,
      "./yo.js": 122,
      "./zh-cn": 123,
      "./zh-cn.js": 123,
      "./zh-hk": 124,
      "./zh-hk.js": 124,
      "./zh-tw": 125,
      "./zh-tw.js": 125
    };

    function r(e) {
      var t = i(e);
      return n(t)
    }

    function i(e) {
      var t = o[e];
      if (t + 1) return t;
      var n = new Error("Cannot find module '" + e + "'");
      throw n.code = "MODULE_NOT_FOUND", n
    }
    r.keys = function () {
      return Object.keys(o)
    }, r.resolve = i, (e.exports = r).id = 131
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var y = n(133),
      L = n(1),
      b = o(n(0)),
      h = o(n(134));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      var n = e.meta,
        o = (e.user, document.createElement("div"));
      o.lang = "en-US", o.className = "gitment-container gitment-header-container";
      var r = document.createElement("span");
      r.innerHTML = "\n    " + (n.comments ? "总评论数 • <strong>" + n.comments + "</strong> " : "") + "\n  ", o.appendChild(r);
      var i = document.createElement("a");
      return i.className = "gitment-header-issue-link", i.href = n.html_url, i.target = "_blank", i.innerText = "Issue Page", o.appendChild(i), o
    }

    function i(e, u) {
      var l = e.meta,
        t = e.comments,
        n = e.currentPage,
        o = e.user,
        r = e.error,
        i = document.createElement("div");
      if (i.lang = "en-US", i.className = "gitment-container gitment-comments-container", r) {
        var a = document.createElement("div");
        if (a.className = "gitment-comments-error", r === L.NOT_INITIALIZED_ERROR && o.login && o.login.toLowerCase() === u.owner.toLowerCase()) {
          var s = document.createElement("div"),
            d = document.createElement("button");
          d.className = "gitment-comments-init-btn", d.onclick = function () {
            d.setAttribute("disabled", !0), u.init().catch(function (e) {
              d.removeAttribute("disabled"), alert(e)
            })
          }, d.innerText = "初始化评论", s.appendChild(d), a.appendChild(s)
        } else a.innerText = r;
        return i.appendChild(a), i
      }
      if (void 0 === t) {
        var c = document.createElement("div");
        return c.innerText = "Loading comments...", c.className = "gitment-comments-loading", i.appendChild(c), i
      }
      if (!t.length) {
        var _ = document.createElement("div");
        return _.className = "gitment-comments-empty", _.innerText = "暂时没有评论！", i.appendChild(_), i
      }
      var m = document.createElement("ul");
      if (m.className = "gitment-comments-list", t.forEach(function (e) {
          var t, n, o, r, i = new Date(e.created_at),
            a = document.createElement("li");
          a.className = "gitment-comment", a.innerHTML = '\n      <a class="gitment-comment-avatar" href="' + e.user.html_url + '" target="_blank">\n        <img class="gitment-comment-avatar-img" src="' + e.user.avatar_url + '"/>\n      </a>\n      <div class="gitment-comment-main">\n        <div class="gitment-comment-header">\n          <a class="gitment-comment-name" href="' + e.user.html_url + '" target="_blank">\n            ' + e.user.name + "\n          </a>\n          " + (l.user.login == e.user.login ? ' <span class="giteement-role-label" title="该用户是博客的拥有者">博主</span>' : "") + '\n          评论创建于\n          <span title="' + i + '">' + (0, b.default)(i).format("YYYY年MM月DD日") + '</span>\n        </div>\n        <div id="' + e.id + '" class="gitment-comment-body gitment-markdown"></div>\n      </div>\n    ', t = u, (r = (o = (n = e).body).match(/^@[^ ]*/g)) && 0 < r.length && r.forEach(function (e) {
            return t.users(e.substr(1)).then(function (e) {
              var t = "[@" + e.name + "](" + e.html_url + ")";
              o = o.replace("@" + e.login, t)
            }).catch(function () {})
          }), t.markdown(o).then(function (e) {
            return document.getElementById(n.id).innerHTML = e.replace(/src="\/assets\//g, 'src="https://gitee.com/assets/')
          });
          var s = document.createElement("img"),
            d = a.querySelector(".gitment-comment-body");
          s.className = "gitment-hidden", s.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", s.onload = function () {
            d.clientHeight > u.maxCommentHeight && (d.classList.add("gitment-comment-body-folded"), d.style.maxHeight = u.maxCommentHeight + "px", d.title = "Click to Expand", d.onclick = function () {
              d.classList.remove("gitment-comment-body-folded"), d.style.maxHeight = "", d.title = "", d.onclick = null
            })
          }, a.appendChild(s), m.appendChild(a)
        }), i.appendChild(m), l) {
        var f = Math.ceil(l.comments / u.perPage);
        if (1 < f) {
          function p(e) {
            var t = document.createElement("li");
            t.className = "gitment-comments-page-item", t.innerText = e, t.onclick = function () {
              return u.goto(e)
            }, n === e && t.classList.add("gitment-selected"), y.appendChild(t)
          }
          var y = document.createElement("ul");
          if (y.className = "gitment-comments-pagination", 1 < n) {
            var h = document.createElement("li");
            h.className = "gitment-comments-page-item", h.innerText = "Previous", h.onclick = function () {
              return u.goto(n - 1)
            }, y.appendChild(h)
          }
          for (var M = 1; M <= f; M++) p(M);
          if (n < f) {
            var v = document.createElement("li");
            v.className = "gitment-comments-page-item", v.innerText = "Next", v.onclick = function () {
              return u.goto(n + 1)
            }, y.appendChild(v)
          }
          i.appendChild(y)
        }
      }
      return i
    }

    function a(e, n) {
      var t = e.user,
        o = e.error,
        r = e.comments,
        i = document.createElement("div");
      i.lang = "en-US", i.className = "gitment-container gitment-editor-container";
      var a = t.login && !o ? "" : "disabled",
        s = t.login ? "" : "请登录，在评论！";
      i.innerHTML = "\n      " + (t.login ? '<a class="gitment-editor-avatar" href="' + t.html_url + '" target="_blank">\n            <img class="gitment-editor-avatar-img" src="' + t.avatar_url + '"/>\n          </a>' : t.isLoggingIn ? '<div class="gitment-editor-avatar">' + y.spinner + "</div>" : '<a class="gitment-editor-avatar" href="' + n.loginLink + '" title="login with GitHub">\n              ' + y.giteehub + "\n            </a>") + '\n    </a>\n    <div class="gitment-editor-main">\n      <div class="gitment-editor-header">\n        <nav class="gitment-editor-tabs">\n          <button class="gitment-editor-tab gitment-selected">编辑</button>\n          <button class="gitment-editor-tab">预览</button>\n        </nav>\n        <div class="gitment-editor-login">\n          ' + (t.login ? '<a class="gitment-editor-logout-link">退出</a>' : t.isLoggingIn ? "Logging in..." : '<a class="gitment-editor-login-link" href="' + n.loginLink + '">登录</a> 码云') + '\n        </div>\n      </div>\n      <div class="gitment-editor-body">\n        <div class="gitment-editor-write-field">\n          <textarea id="commentEditorTextArea" placeholder="发表评论" title="' + s + '" ' + a + '></textarea>\n        </div>\n        <div class="gitment-editor-preview-field gitment-hidden">\n          <div class="gitment-editor-preview gitment-markdown"></div>\n        </div>\n      </div>\n    </div>\n    <div class="gitment-editor-footer">\n      <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank">\n        支持Markdown的样式\n      </a>\n      <button class="gitment-editor-submit" title="' + s + '" ' + a + ">评论</button>\n    </div>\n  ", t.login && (i.querySelector(".gitment-editor-logout-link").onclick = function () {
        return n.logout()
      });
      var d = i.querySelector(".gitment-editor-write-field"),
        u = i.querySelector(".gitment-editor-preview-field"),
        l = d.querySelector("textarea");
      l.oninput = function () {
        l.style.height = "auto";
        var e = window.getComputedStyle(l, null),
          t = parseInt(e.height, 10),
          n = l.clientHeight,
          o = l.scrollHeight;
        n < o && (l.style.height = t + o - n + "px")
      };
      var c = new h.default({
          element: l,
          container: i,
          comments: r
        }),
        _ = function (e) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e) {
            var t = [],
              n = !0,
              o = !1,
              r = void 0;
            try {
              for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done) && (t.push(i.value), 2 !== t.length); n = !0);
            } catch (e) {
              o = !0, r = e
            } finally {
              try {
                !n && a.return && a.return()
              } finally {
                if (o) throw r
              }
            }
            return t
          }(e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }(i.querySelectorAll(".gitment-editor-tab")),
        m = _[0],
        f = _[1];
      m.onclick = function () {
        m.classList.add("gitment-selected"), f.classList.remove("gitment-selected"), d.classList.remove("gitment-hidden"), u.classList.add("gitment-hidden"), l.focus()
      }, f.onclick = function () {
        f.classList.add("gitment-selected"), m.classList.remove("gitment-selected"), u.classList.remove("gitment-hidden"), d.classList.add("gitment-hidden");
        var t = u.querySelector(".gitment-editor-preview"),
          e = l.value.trim();
        e ? (t.innerText = "加载预览中...", n.markdown(e).then(function (e) {
          return t.innerHTML = e
        })) : t.innerText = "没有预览"
      };
      var p = i.querySelector(".gitment-editor-submit");
      return p.onclick = function () {
        p.innerText = "提交中...", p.setAttribute("disabled", !0), n.post(function (n, o) {
          if (n.startsWith("@")) {
            var e = n.match(/^@[^ ]*/g);
            e && 0 < e.length && e.forEach(function (e) {
              var t = e.substr(1);
              o[t] && (n = n.replace(t, o[t]))
            })
          }
          return n
        }(l.value.trim(), c.nameMap)).then(function (e) {
          l.value = "", l.style.height = "auto", p.removeAttribute("disabled"), p.innerText = "评论"
        }).catch(function (e) {
          alert(e), p.removeAttribute("disabled"), p.innerText = "评论"
        })
      }, i
    }

    function s(e, t) {
      ! function () {
        if (null == e) throw new TypeError("Cannot destructure undefined")
      }();
      var n = document.createElement("div");
      return n.lang = "en-US", n.className = "gitment-container gitment-footer-container", n.innerHTML = '\n    Powered By\n    <a class="gitment-footer-project-link" href="https://github.com/ShangBaiShuYao" target="_blank">\n      Giteement\n    </a>\n  ', n
    }
    t.default = {
      render: function (e, t) {
        var n = document.createElement("div");
        return n.lang = "en-US", n.className = "gitment-container gitment-root-container", n.appendChild(r(e)), n.appendChild(i(e, t)), n.appendChild(a(e, t)), n.appendChild(s(e)), n
      },
      renderHeader: r,
      renderComments: i,
      renderEditor: a,
      renderFooter: s
    }
  }, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.close = '<svg class="gitment-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></svg>', t.heart = '<svg class="gitment-heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>', t.spinner = '<svg class="gitment-spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>', t.giteehub = '<svg width="50px" height="50px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo_darkbg" transform="translate(-163.000000, -92.000000)" fill="#C71D23"><g id="logo" transform="translate(163.000000, 91.000000)"><path d="M86,37 L40,37 L40,37.0010476 C37.7912701,37.0010476 36.0005785,38.7912703 36.0000001,41.0000001 L35.9963338,51.0000001 L35.9952531,50.9999999 C35.9946746,53.2091388 37.7850666,55.0004687 39.9942055,55.0010472 C39.9945658,55.0010473 39.994926,55.0010473 39.9952863,55.0010473 L68,54.9997333 L68,54.9997 C70.209139,54.9996816 72.0000149,56.7905277 72.0000333,58.9996667 C72.0000333,58.9996778 72.0000333,58.9996889 72.0000333,58.9997 L72,59.9997 L72,61 L72,61 C72,67.627417 66.627417,73 60,73 L21.9970229,73 L21.9970229,72.9998897 C19.788201,72.9998897 17.99758,71.2093181 17.9975191,69.0004962 L17.9963613,31 L17.9960306,31 C17.9958479,24.372583 23.3682828,18.9998519 29.9956998,18.9996692 C29.99581,18.9996692 29.9959203,18.9996692 29.9960306,18.9996692 L85.988836,19 L85.988836,18.9975183 C88.1970062,18.9975183 89.9874656,17.208169 89.9888352,14.9999992 L89.9975191,4.99999923 L89.9999992,5.00000077 C90.0013694,2.79086219 88.2116195,0.998890802 86.0024809,0.997520639 C86.0016539,0.997520127 86.000827,0.99751987 86,0.99751987 L30,1 L30,1.00016539 C13.4315221,1.00016539 9.13442924e-05,14.4315221 4.58559413e-10,31 L-0.000474127419,87 L-0.000496179797,87 C-0.000508359022,89.209139 1.79034277,91.0000099 3.99948177,91.0000221 C3.99948912,91.0000221 3.99949647,91.0000221 3.99950382,91.0000221 L63,91 L63,91 C77.9116882,91 90,78.9116882 90,64 L90,41 L90,41 C90,38.790861 88.209139,37 86,37 Z" id="G"></path></g></g></g></svg>'
  }, function (e, t, n) {
    var o, c = (o = n(135)) && o.__esModule ? o : {
      default: o
    };

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }
    var i = (r(a.prototype, [{
      key: "creatSelUserTab",
      value: function (e) {
        if ("undefined" != e && e) {
          for (var t = (0, c.default)("<div class='giteement-at-outdiv'></div>"), n = (0, c.default)("<div class='giteement-at-div'></div>"), o = (0, c.default)("<ol class='giteement-at-ol'></ol>"), r = {}, i = 0; i < e.length; i++) {
            var a = e[i].user;
            if (this.nameMap[a.name] = a.login, !r[a.login]) {
              r[a.login] = a.name;
              var s = void 0;
              (s = i === e.length - 1 ? (0, c.default)("<li class='giteement-at-li giteement-at-li-tail'></li>") : (0, c.default)("<li class='giteement-at-li'></li>")).text(a.login + "  " + a.name), o.append(s)
            }
          }
          n.append(o), t.append(n), (0, c.default)(this.container).append(t), (0, c.default)(document).off("keydown.atwhouser").on("keydown.atwhouser", function (e) {
            if (40 === e.keyCode) {
              var t = (0, c.default)(".giteement-at-li-select").next();
              (0, c.default)(".giteement-at-li-select").removeClass("giteement-at-li-select"), 0 == t.length ? (0, c.default)(".giteement-at-li:first").addClass("giteement-at-li-select") : t.addClass("giteement-at-li-select")
            } else if (38 === e.keyCode) {
              var n = (0, c.default)(".giteement-at-li-select").prev();
              (0, c.default)(".giteement-at-li-select").removeClass("giteement-at-li-select"), 0 == n.length ? (0, c.default)(".giteement-at-li:last").addClass("giteement-at-li-select") : n.addClass("giteement-at-li-select")
            }
          })
        }
      }
    }, {
      key: "init",
      value: function () {
        this.addListener()
      }
    }, {
      key: "addListener",
      value: function () {
        var t = this;
        t.jqElement.on("compositionstart", function () {
          console.log("---compositionstart")
        }).on("compositionend", function () {
          console.log("---compositionend")
        }).on("keyup.atwhoInner", function (e) {
          t.onKeyup(e)
        }).on("keydown.atwhoInner", function (e) {
          t.altflg && (38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode || e.preventDefault()), t.onKeydown(e)
        }).on("blur.atwhoInner", function () {
          (0, c.default)(".giteement-at-div").hide(), this.altflg = !1
        }).on("click.atwhoInner", function () {
          console.log("---click.atwhoInner")
        }).on("scroll.atwhoInner", function () {
          console.log("---scroll.atwhoInner")
        })
      }
    }, {
      key: "onKeyup",
      value: function (e) {
        if ("@" === this.jqElement.val().substring(0, this.jqElement[0].selectionEnd)) {
          if (this.altflg) {
            if (13 === e.keyCode) {
              var t = (0, c.default)(".giteement-at-li-select").text().split("  ")[1] + " ";
              this.jqElement[0].setRangeText(t), this.jqElement[0].selectionStart = this.jqElement[0].selectionEnd = this.jqElement.val().length, (0, c.default)(".giteement-at-div").hide(), this.altflg = !1
            }
            return
          }
          var n = function (e) {
              function t(e) {
                return e.replace(/<|>|`|"|&/g, "?").replace(/\r\n|\r|\n/g, "<br>")
              }
              var n = e.selectionEnd,
                o = e.value.slice(0, n),
                r = e.value.slice(n),
                i = '<div class="textarea-mirror">' + t(o) + '<span id="cursor">|</span>' + t(r) + "</div>",
                a = (0, c.default)(i),
                s = (0, c.default)(e);
              s.after(a);
              var d = document.getElementById("cursor").getBoundingClientRect(),
                u = d.left,
                l = d.top - s.outerHeight(!0) + 7;
              return a.remove(), {
                x: u,
                y: l
              }
            }(this.jqElement[0]),
            o = (0, c.default)(".giteement-at-outdiv")[0].getBoundingClientRect();
          (0, c.default)(".giteement-at-div").css("left", n.x - o.left + "px"), (0, c.default)(".giteement-at-div").css("top", n.y - o.top + "px"), (0, c.default)(".giteement-at-li-select").removeClass("giteement-at-li-select"), (0, c.default)((0, c.default)(".giteement-at-li")[0]).addClass("giteement-at-li-select"), (0, c.default)(".giteement-at-div").show(), this.altflg = !0
        } else(0, c.default)(".giteement-at-div").hide(), this.altflg = !1
      }
    }, {
      key: "onKeydown",
      value: function (e) {
        this.altflg && (38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode || e.preventDefault())
      }
    }]), a);

    function a() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      ! function (e) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
      }(this), Object.assign(this, {
        altflg: !1,
        nameMap: {}
      }, e), this.jqElement = (0, c.default)(this.element), this.creatSelUserTab(this.comments), this.init()
    }
    e.exports = i
  }, function (e, an, t) {
    (function (nn) {
      var on, e, t, rn = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : _typeof(e)
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
      };
      e = "undefined" != typeof window ? window : void 0, t = function (Y, e) {
        function p(e) {
          return null != e && e === e.window
        }
        var t = [],
          k = Y.document,
          o = Object.getPrototypeOf,
          s = t.slice,
          y = t.concat,
          d = t.push,
          r = t.indexOf,
          n = {},
          i = n.toString,
          h = n.hasOwnProperty,
          a = h.toString,
          u = a.call(Object),
          M = {},
          v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
          },
          l = {
            type: !0,
            src: !0,
            noModule: !0
          };

        function L(e, t, n) {
          var o, r = (t = t || k).createElement("script");
          if (r.text = e, n)
            for (o in l) n[o] && (r[o] = n[o]);
          t.head.appendChild(r).parentNode.removeChild(r)
        }

        function b(e) {
          return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : rn(e)) || "function" == typeof e ? n[i.call(e)] || "object" : void 0 === e ? "undefined" : rn(e)
        }
        var S = function e(t, n) {
            return new e.fn.init(t, n)
          },
          c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function _(e) {
          var t = !!e && "length" in e && e.length,
            n = b(e);
          return !v(e) && !p(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        S.fn = S.prototype = {
          jquery: "3.3.1",
          constructor: S,
          length: 0,
          toArray: function () {
            return s.call(this)
          },
          get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
          },
          pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
          },
          each: function (e) {
            return S.each(this, e)
          },
          map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
              return n.call(e, t, e)
            }))
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments))
          },
          first: function () {
            return this.eq(0)
          },
          last: function () {
            return this.eq(-1)
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
          },
          end: function () {
            return this.prevObject || this.constructor()
          },
          push: d,
          sort: t.sort,
          splice: t.splice
        }, S.extend = S.fn.extend = function () {
          var e, t, n, o, r, i, a = arguments[0] || {},
            s = 1,
            d = arguments.length,
            u = !1;
          for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" === (void 0 === a ? "undefined" : rn(a)) || v(a) || (a = {}), s === d && (a = this, s--); s < d; s++)
            if (null != (e = arguments[s]))
              for (t in e) n = a[t], a !== (o = e[t]) && (u && o && (S.isPlainObject(o) || (r = Array.isArray(o))) ? (i = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, a[t] = S.extend(u, i, o)) : void 0 !== o && (a[t] = o));
          return a
        }, S.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e)
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e) || (t = o(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || a.call(n) !== u))
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
          },
          globalEval: function (e) {
            L(e)
          },
          each: function (e, t) {
            var n, o = 0;
            if (_(e))
              for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
              for (o in e)
                if (!1 === t.call(e[o], o, e[o])) break;
            return e
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(c, "")
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (_(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
          },
          merge: function (e, t) {
            for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
            return e.length = r, e
          },
          grep: function (e, t, n) {
            for (var o = [], r = 0, i = e.length, a = !n; r < i; r++) !t(e[r], r) != a && o.push(e[r]);
            return o
          },
          map: function (e, t, n) {
            var o, r, i = 0,
              a = [];
            if (_(e))
              for (o = e.length; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
            else
              for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
            return y.apply([], a)
          },
          guid: 1,
          support: M
        }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase()
        });
        var m = function (n) {
          function c(e, t, n) {
            var o = "0x" + t - 65536;
            return o != o || n ? t : o < 0 ? String.fromCharCode(65536 + o) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
          }

          function r() {
            g()
          }
          var e, m, L, i, a, f, _, p, b, d, u, g, Y, s, k, y, l, h, M, S = "sizzle" + 1 * new Date,
            v = n.document,
            D = 0,
            o = 0,
            w = ae(),
            T = ae(),
            x = ae(),
            j = function (e, t) {
              return e === t && (u = !0), 0
            },
            H = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            E = t.push,
            A = t.push,
            P = t.slice,
            C = function (e, t) {
              for (var n = 0, o = e.length; n < o; n++)
                if (e[n] === t) return n;
              return -1
            },
            W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + N + "*(" + F + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + N + "*\\]",
            I = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            R = new RegExp(N + "+", "g"),
            J = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            q = new RegExp("^" + N + "*," + N + "*"),
            U = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            V = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            B = new RegExp(I),
            G = new RegExp("^" + F + "$"),
            $ = {
              ID: new RegExp("^#(" + F + ")"),
              CLASS: new RegExp("^\\.(" + F + ")"),
              TAG: new RegExp("^(" + F + "|[*])"),
              ATTR: new RegExp("^" + z),
              PSEUDO: new RegExp("^" + I),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + W + ")$", "i"),
              needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            X = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = Me(function (e) {
              return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
              dir: "parentNode",
              next: "legend"
            });
          try {
            A.apply(t = P.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
          } catch (n) {
            A = {
              apply: t.length ? function (e, t) {
                E.apply(e, P.call(t))
              } : function (e, t) {
                for (var n = e.length, o = 0; e[n++] = t[o++];);
                e.length = n - 1
              }
            }
          }

          function ie(e, t, n, o) {
            var r, i, a, s, d, u, l, c = t && t.ownerDocument,
              _ = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return n;
            if (!o && ((t ? t.ownerDocument || t : v) !== Y && g(t), t = t || Y, k)) {
              if (11 !== _ && (d = Q.exec(e)))
                if (r = d[1]) {
                  if (9 === _) {
                    if (!(a = t.getElementById(r))) return n;
                    if (a.id === r) return n.push(a), n
                  } else if (c && (a = c.getElementById(r)) && M(t, a) && a.id === r) return n.push(a), n
                } else {
                  if (d[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                  if ((r = d[3]) && m.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(r)), n
                } if (m.qsa && !x[e + " "] && (!y || !y.test(e))) {
                if (1 !== _) c = t, l = e;
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for ((s = t.getAttribute("id")) ? s = s.replace(ne, oe) : t.setAttribute("id", s = S), i = (u = f(e)).length; i--;) u[i] = "#" + s + " " + he(u[i]);
                  l = u.join(","), c = ee.test(e) && pe(t.parentNode) || t
                }
                if (l) try {
                  return A.apply(n, c.querySelectorAll(l)), n
                } catch (e) {} finally {
                  s === S && t.removeAttribute("id")
                }
              }
            }
            return p(e.replace(J, "$1"), t, n, o)
          }

          function ae() {
            var o = [];
            return function e(t, n) {
              return o.push(t + " ") > L.cacheLength && delete e[o.shift()], e[t + " "] = n
            }
          }

          function se(e) {
            return e[S] = !0, e
          }

          function de(e) {
            var t = Y.createElement("fieldset");
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
            }
          }

          function ue(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) L.attrHandle[n[o]] = t
          }

          function le(e, t) {
            var n = t && e,
              o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n)
              for (; n = n.nextSibling;)
                if (n === t) return -1;
            return e ? 1 : -1
          }

          function ce(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
            }
          }

          function _e(n) {
            return function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n
            }
          }

          function me(t) {
            return function (e) {
              return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
          }

          function fe(a) {
            return se(function (i) {
              return i = +i, se(function (e, t) {
                for (var n, o = a([], e.length, i), r = o.length; r--;) e[n = o[r]] && (e[n] = !(t[n] = e[n]))
              })
            })
          }

          function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          for (e in m = ie.support = {}, a = ie.isXML = function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName
            }, g = ie.setDocument = function (e) {
              var t, n, o = e ? e.ownerDocument || e : v;
              return o !== Y && 9 === o.nodeType && o.documentElement && (s = (Y = o).documentElement, k = !a(Y), v !== Y && (n = Y.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), m.attributes = de(function (e) {
                return e.className = "i", !e.getAttribute("className")
              }), m.getElementsByTagName = de(function (e) {
                return e.appendChild(Y.createComment("")), !e.getElementsByTagName("*").length
              }), m.getElementsByClassName = X.test(Y.getElementsByClassName), m.getById = de(function (e) {
                return s.appendChild(e).id = S, !Y.getElementsByName || !Y.getElementsByName(S).length
              }), m.getById ? (L.filter.ID = function (e) {
                var t = e.replace(te, c);
                return function (e) {
                  return e.getAttribute("id") === t
                }
              }, L.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
                }
              }) : (L.filter.ID = function (e) {
                var n = e.replace(te, c);
                return function (e) {
                  var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return t && t.value === n
                }
              }, L.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n, o, r, i = t.getElementById(e);
                  if (i) {
                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                    for (r = t.getElementsByName(e), o = 0; i = r[o++];)
                      if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                  }
                  return []
                }
              }), L.find.TAG = m.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
              } : function (e, t) {
                var n, o = [],
                  r = 0,
                  i = t.getElementsByTagName(e);
                if ("*" !== e) return i;
                for (; n = i[r++];) 1 === n.nodeType && o.push(n);
                return o
              }, L.find.CLASS = m.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
              }, l = [], y = [], (m.qsa = X.test(Y.querySelectorAll)) && (de(function (e) {
                s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + N + "*(?:value|" + W + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]")
              }), de(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = Y.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
              })), (m.matchesSelector = X.test(h = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && de(function (e) {
                m.disconnectedMatch = h.call(e, "*"), h.call(e, "[s!='']:x"), l.push("!=", I)
              }), y = y.length && new RegExp(y.join("|")), l = l.length && new RegExp(l.join("|")), t = X.test(s.compareDocumentPosition), M = t || X.test(s.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                  o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
              } : function (e, t) {
                if (t)
                  for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
              }, j = t ? function (e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === Y || e.ownerDocument === v && M(v, e) ? -1 : t === Y || t.ownerDocument === v && M(v, t) ? 1 : d ? C(d, e) - C(d, t) : 0 : 4 & n ? -1 : 1)
              } : function (e, t) {
                if (e === t) return u = !0, 0;
                var n, o = 0,
                  r = e.parentNode,
                  i = t.parentNode,
                  a = [e],
                  s = [t];
                if (!r || !i) return e === Y ? -1 : t === Y ? 1 : r ? -1 : i ? 1 : d ? C(d, e) - C(d, t) : 0;
                if (r === i) return le(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[o] === s[o];) o++;
                return o ? le(a[o], s[o]) : a[o] === v ? -1 : s[o] === v ? 1 : 0
              }), Y
            }, ie.matches = function (e, t) {
              return ie(e, null, null, t)
            }, ie.matchesSelector = function (e, t) {
              if ((e.ownerDocument || e) !== Y && g(e), t = t.replace(V, "='$1']"), m.matchesSelector && k && !x[t + " "] && (!l || !l.test(t)) && (!y || !y.test(t))) try {
                var n = h.call(e, t);
                if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
              } catch (e) {}
              return 0 < ie(t, Y, null, [e]).length
            }, ie.contains = function (e, t) {
              return (e.ownerDocument || e) !== Y && g(e), M(e, t)
            }, ie.attr = function (e, t) {
              (e.ownerDocument || e) !== Y && g(e);
              var n = L.attrHandle[t.toLowerCase()],
                o = n && H.call(L.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
              return void 0 !== o ? o : m.attributes || !k ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ie.escape = function (e) {
              return (e + "").replace(ne, oe)
            }, ie.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function (e) {
              var t, n = [],
                o = 0,
                r = 0;
              if (u = !m.detectDuplicates, d = !m.sortStable && e.slice(0), e.sort(j), u) {
                for (; t = e[r++];) t === e[r] && (o = n.push(r));
                for (; o--;) e.splice(n[o], 1)
              }
              return d = null, e
            }, i = ie.getText = function (e) {
              var t, n = "",
                o = 0,
                r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === r || 4 === r) return e.nodeValue
              } else
                for (; t = e[o++];) n += i(t);
              return n
            }, (L = ie.selectors = {
              cacheLength: 50,
              createPseudo: se,
              match: $,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0
                },
                " ": {
                  dir: "parentNode"
                },
                "+": {
                  dir: "previousSibling",
                  first: !0
                },
                "~": {
                  dir: "previousSibling"
                }
              },
              preFilter: {
                ATTR: function (e) {
                  return e[1] = e[1].replace(te, c), e[3] = (e[3] || e[4] || e[5] || "").replace(te, c), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                },
                PSEUDO: function (e) {
                  var t, n = !e[6] && e[2];
                  return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, c).toLowerCase();
                  return "*" === e ? function () {
                    return !0
                  } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                  }
                },
                CLASS: function (e) {
                  var t = w[e + " "];
                  return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && w(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  })
                },
                ATTR: function (n, o, r) {
                  return function (e) {
                    var t = ie.attr(e, n);
                    return null == t ? "!=" === o : !o || (t += "", "=" === o ? t === r : "!=" === o ? t !== r : "^=" === o ? r && 0 === t.indexOf(r) : "*=" === o ? r && -1 < t.indexOf(r) : "$=" === o ? r && t.slice(-r.length) === r : "~=" === o ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === o && (t === r || t.slice(0, r.length + 1) === r + "-"))
                  }
                },
                CHILD: function (f, e, t, p, y) {
                  var h = "nth" !== f.slice(0, 3),
                    M = "last" !== f.slice(-4),
                    v = "of-type" === e;
                  return 1 === p && 0 === y ? function (e) {
                    return !!e.parentNode
                  } : function (e, t, n) {
                    var o, r, i, a, s, d, u = h != M ? "nextSibling" : "previousSibling",
                      l = e.parentNode,
                      c = v && e.nodeName.toLowerCase(),
                      _ = !n && !v,
                      m = !1;
                    if (l) {
                      if (h) {
                        for (; u;) {
                          for (a = e; a = a[u];)
                            if (v ? a.nodeName.toLowerCase() === c : 1 === a.nodeType) return !1;
                          d = u = "only" === f && !d && "nextSibling"
                        }
                        return !0
                      }
                      if (d = [M ? l.firstChild : l.lastChild], M && _) {
                        for (m = (s = (o = (r = (i = (a = l)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] || [])[0] === D && o[1]) && o[2], a = s && l.childNodes[s]; a = ++s && a && a[u] || (m = s = 0) || d.pop();)
                          if (1 === a.nodeType && ++m && a === e) {
                            r[f] = [D, s, m];
                            break
                          }
                      } else if (_ && (m = s = (o = (r = (i = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] || [])[0] === D && o[1]), !1 === m)
                        for (;
                          (a = ++s && a && a[u] || (m = s = 0) || d.pop()) && ((v ? a.nodeName.toLowerCase() !== c : 1 !== a.nodeType) || !++m || (_ && ((r = (i = a[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] = [D, m]), a !== e)););
                      return (m -= y) === p || m % p == 0 && 0 <= m / p
                    }
                  }
                },
                PSEUDO: function (e, i) {
                  var t, a = L.pseudos[e] || L.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                  return a[S] ? a(i) : 1 < a.length ? (t = [e, e, "", i], L.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                    for (var n, o = a(e, i), r = o.length; r--;) e[n = C(e, o[r])] = !(t[n] = o[r])
                  }) : function (e) {
                    return a(e, 0, t)
                  }) : a
                }
              },
              pseudos: {
                not: se(function (e) {
                  var o = [],
                    r = [],
                    s = _(e.replace(J, "$1"));
                  return s[S] ? se(function (e, t, n, o) {
                    for (var r, i = s(e, null, o, []), a = e.length; a--;)(r = i[a]) && (e[a] = !(t[a] = r))
                  }) : function (e, t, n) {
                    return o[0] = e, s(o, null, n, r), o[0] = null, !r.pop()
                  }
                }),
                has: se(function (t) {
                  return function (e) {
                    return 0 < ie(t, e).length
                  }
                }),
                contains: se(function (t) {
                  return t = t.replace(te, c),
                    function (e) {
                      return -1 < (e.textContent || e.innerText || i(e)).indexOf(t)
                    }
                }),
                lang: se(function (n) {
                  return G.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, c).toLowerCase(),
                    function (e) {
                      var t;
                      do {
                        if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1
                    }
                }),
                target: function (e) {
                  var t = n.location && n.location.hash;
                  return t && t.slice(1) === e.id
                },
                root: function (e) {
                  return e === s
                },
                focus: function (e) {
                  return e === Y.activeElement && (!Y.hasFocus || Y.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0
                },
                parent: function (e) {
                  return !L.pseudos.empty(e)
                },
                header: function (e) {
                  return Z.test(e.nodeName)
                },
                input: function (e) {
                  return K.test(e.nodeName)
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: fe(function () {
                  return [0]
                }),
                last: fe(function (e, t) {
                  return [t - 1]
                }),
                eq: fe(function (e, t, n) {
                  return [n < 0 ? n + t : n]
                }),
                even: fe(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e
                }),
                odd: fe(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e
                }),
                lt: fe(function (e, t, n) {
                  for (var o = n < 0 ? n + t : n; 0 <= --o;) e.push(o);
                  return e
                }),
                gt: fe(function (e, t, n) {
                  for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                  return e
                })
              }
            }).pseudos.nth = L.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) L.pseudos[e] = ce(e);
          for (e in {
              submit: !0,
              reset: !0
            }) L.pseudos[e] = _e(e);

          function ye() {}

          function he(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o
          }

          function Me(s, e, t) {
            var d = e.dir,
              u = e.next,
              l = u || d,
              c = t && "parentNode" === l,
              _ = o++;
            return e.first ? function (e, t, n) {
              for (; e = e[d];)
                if (1 === e.nodeType || c) return s(e, t, n);
              return !1
            } : function (e, t, n) {
              var o, r, i, a = [D, _];
              if (n) {
                for (; e = e[d];)
                  if ((1 === e.nodeType || c) && s(e, t, n)) return !0
              } else
                for (; e = e[d];)
                  if (1 === e.nodeType || c)
                    if (r = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[d] || e;
                    else {
                      if ((o = r[l]) && o[0] === D && o[1] === _) return a[2] = o[2];
                      if ((r[l] = a)[2] = s(e, t, n)) return !0
                    } return !1
            }
          }

          function ve(r) {
            return 1 < r.length ? function (e, t, n) {
              for (var o = r.length; o--;)
                if (!r[o](e, t, n)) return !1;
              return !0
            } : r[0]
          }

          function Le(e, t, n, o, r) {
            for (var i, a = [], s = 0, d = e.length, u = null != t; s < d; s++)(i = e[s]) && (n && !n(i, o, r) || (a.push(i), u && t.push(s)));
            return a
          }

          function be(m, f, p, y, h, e) {
            return y && !y[S] && (y = be(y)), h && !h[S] && (h = be(h, e)), se(function (e, t, n, o) {
              var r, i, a, s = [],
                d = [],
                u = t.length,
                l = e || function (e, t, n) {
                  for (var o = 0, r = t.length; o < r; o++) ie(e, t[o], n);
                  return n
                }(f || "*", n.nodeType ? [n] : n, []),
                c = !m || !e && f ? l : Le(l, s, m, n, o),
                _ = p ? h || (e ? m : u || y) ? [] : t : c;
              if (p && p(c, _, n, o), y)
                for (r = Le(_, d), y(r, [], n, o), i = r.length; i--;)(a = r[i]) && (_[d[i]] = !(c[d[i]] = a));
              if (e) {
                if (h || m) {
                  if (h) {
                    for (r = [], i = _.length; i--;)(a = _[i]) && r.push(c[i] = a);
                    h(null, _ = [], r, o)
                  }
                  for (i = _.length; i--;)(a = _[i]) && -1 < (r = h ? C(e, a) : s[i]) && (e[r] = !(t[r] = a))
                }
              } else _ = Le(_ === t ? _.splice(u, _.length) : _), h ? h(null, t, _, o) : A.apply(t, _)
            })
          }

          function ge(e) {
            for (var r, t, n, o = e.length, i = L.relative[e[0].type], a = i || L.relative[" "], s = i ? 1 : 0, d = Me(function (e) {
                return e === r
              }, a, !0), u = Me(function (e) {
                return -1 < C(r, e)
              }, a, !0), l = [function (e, t, n) {
                var o = !i && (n || t !== b) || ((r = t).nodeType ? d(e, t, n) : u(e, t, n));
                return r = null, o
              }]; s < o; s++)
              if (t = L.relative[e[s].type]) l = [Me(ve(l), t)];
              else {
                if ((t = L.filter[e[s].type].apply(null, e[s].matches))[S]) {
                  for (n = ++s; n < o && !L.relative[e[n].type]; n++);
                  return be(1 < s && ve(l), 1 < s && he(e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : ""
                  })).replace(J, "$1"), t, s < n && ge(e.slice(s, n)), n < o && ge(e = e.slice(n)), n < o && he(e))
                }
                l.push(t)
              } return ve(l)
          }
          return ye.prototype = L.filters = L.pseudos, L.setFilters = new ye, f = ie.tokenize = function (e, t) {
            var n, o, r, i, a, s, d, u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], d = L.preFilter; a;) {
              for (i in n && !(o = q.exec(a)) || (o && (a = a.slice(o[0].length) || a), s.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
                  value: n,
                  type: o[0].replace(J, " ")
                }), a = a.slice(n.length)), L.filter) !(o = $[i].exec(a)) || d[i] && !(o = d[i](o)) || (n = o.shift(), r.push({
                value: n,
                type: i,
                matches: o
              }), a = a.slice(n.length));
              if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : T(e, s).slice(0)
          }, _ = ie.compile = function (e, t) {
            var n, y, h, M, v, o = [],
              r = [],
              i = x[e + " "];
            if (!i) {
              for (n = (t = t || f(e)).length; n--;)(i = ge(t[n]))[S] ? o.push(i) : r.push(i);
              (i = x(e, (y = r, M = 0 < (h = o).length, v = 0 < y.length, M ? se(a) : a))).selector = e
            }

            function a(e, t, n, o, r) {
              var i, a, s, d = 0,
                u = "0",
                l = e && [],
                c = [],
                _ = b,
                m = e || v && L.find.TAG("*", r),
                f = D += null == _ ? 1 : Math.random() || .1,
                p = m.length;
              for (r && (b = t === Y || t || r); u !== p && null != (i = m[u]); u++) {
                if (v && i) {
                  for (a = 0, t || i.ownerDocument === Y || (g(i), n = !k); s = y[a++];)
                    if (s(i, t || Y, n)) {
                      o.push(i);
                      break
                    } r && (D = f)
                }
                M && ((i = !s && i) && d--, e && l.push(i))
              }
              if (d += u, M && u !== d) {
                for (a = 0; s = h[a++];) s(l, c, t, n);
                if (e) {
                  if (0 < d)
                    for (; u--;) l[u] || c[u] || (c[u] = O.call(o));
                  c = Le(c)
                }
                A.apply(o, c), r && !e && 0 < c.length && 1 < d + h.length && ie.uniqueSort(o)
              }
              return r && (D = f, b = _), l
            }
            return i
          }, p = ie.select = function (e, t, n, o) {
            var r, i, a, s, d, u = "function" == typeof e && e,
              l = !o && f(e = u.selector || e);
            if (n = n || [], 1 === l.length) {
              if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && k && L.relative[i[1].type]) {
                if (!(t = (L.find.ID(a.matches[0].replace(te, c), t) || [])[0])) return n;
                u && (t = t.parentNode), e = e.slice(i.shift().value.length)
              }
              for (r = $.needsContext.test(e) ? 0 : i.length; r-- && (a = i[r], !L.relative[s = a.type]);)
                if ((d = L.find[s]) && (o = d(a.matches[0].replace(te, c), ee.test(i[0].type) && pe(t.parentNode) || t))) {
                  if (i.splice(r, 1), !(e = o.length && he(i))) return A.apply(n, o), n;
                  break
                }
            }
            return (u || _(e, l))(o, t, !k, n, !t || ee.test(e) && pe(t.parentNode) || t), n
          }, m.sortStable = S.split("").sort(j).join("") === S, m.detectDuplicates = !!u, g(), m.sortDetached = de(function (e) {
            return 1 & e.compareDocumentPosition(Y.createElement("fieldset"))
          }), de(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          }) || ue("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          }), m.attributes && de(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          }) || ue("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
          }), de(function (e) {
            return null == e.getAttribute("disabled")
          }) || ue(W, function (e, t, n) {
            var o;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
          }), ie
        }(Y);

        function f(e, t, n) {
          for (var o = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (r && S(e).is(n)) break;
              o.push(e)
            } return o
        }

        function g(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        }
        S.find = m, S.expr = m.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = m.uniqueSort, S.text = m.getText, S.isXMLDoc = m.isXML, S.contains = m.contains, S.escapeSelector = m.escape;
        var D = S.expr.match.needsContext;

        function w(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function x(e, n, o) {
          return v(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== o
          }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== o
          }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < r.call(n, e) !== o
          }) : S.filter(n, e, o)
        }
        S.filter = function (e, t, n) {
          var o = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? S.find.matchesSelector(o, e) ? [o] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
          }))
        }, S.fn.extend({
          find: function (e) {
            var t, n, o = this.length,
              r = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
              for (t = 0; t < o; t++)
                if (S.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < o; t++) S.find(e, r[t], n);
            return 1 < o ? S.uniqueSort(n) : n
          },
          filter: function (e) {
            return this.pushStack(x(this, e || [], !1))
          },
          not: function (e) {
            return this.pushStack(x(this, e || [], !0))
          },
          is: function (e) {
            return !!x(this, "string" == typeof e && D.test(e) ? S(e) : e || [], !1).length
          }
        });
        var j, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function (e, t, n) {
          var o, r;
          if (!e) return this;
          if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
          if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : H.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (o[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), T.test(o[1]) && S.isPlainObject(t))
              for (o in t) v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this
          }
          return (r = k.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }).prototype = S.fn, j = S(k);
        var O = /^(?:parents|prev(?:Until|All))/,
          E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };

        function A(e, t) {
          for (;
            (e = e[t]) && 1 !== e.nodeType;);
          return e
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (S.contains(this, t[e])) return !0
            })
          },
          closest: function (e, t) {
            var n, o = 0,
              r = this.length,
              i = [],
              a = "string" != typeof e && S(e);
            if (!D.test(e))
              for (; o < r; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                    i.push(n);
                    break
                  } return this.pushStack(1 < i.length ? S.uniqueSort(i) : i)
          },
          index: function (e) {
            return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
        }), S.each({
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
          },
          parents: function (e) {
            return f(e, "parentNode")
          },
          parentsUntil: function (e, t, n) {
            return f(e, "parentNode", n)
          },
          next: function (e) {
            return A(e, "nextSibling")
          },
          prev: function (e) {
            return A(e, "previousSibling")
          },
          nextAll: function (e) {
            return f(e, "nextSibling")
          },
          prevAll: function (e) {
            return f(e, "previousSibling")
          },
          nextUntil: function (e, t, n) {
            return f(e, "nextSibling", n)
          },
          prevUntil: function (e, t, n) {
            return f(e, "previousSibling", n)
          },
          siblings: function (e) {
            return g((e.parentNode || {}).firstChild, e)
          },
          children: function (e) {
            return g(e.firstChild)
          },
          contents: function (e) {
            return w(e, "iframe") ? e.contentDocument : (w(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
          }
        }, function (o, r) {
          S.fn[o] = function (e, t) {
            var n = S.map(this, r, e);
            return "Until" !== o.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (E[o] || S.uniqueSort(n), O.test(o) && n.reverse()), this.pushStack(n)
          }
        });
        var P = /[^\x20\t\r\n\f]+/g;

        function C(e) {
          return e
        }

        function W(e) {
          throw e
        }

        function N(e, t, n, o) {
          var r;
          try {
            e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(o))
          } catch (e) {
            n.apply(void 0, [e])
          }
        }
        S.Callbacks = function (o) {
          var e, n;

          function r() {
            for (s = s || o.once, a = i = !0; u.length; l = -1)
              for (t = u.shift(); ++l < d.length;) !1 === d[l].apply(t[0], t[1]) && o.stopOnFalse && (l = d.length, t = !1);
            o.memory || (t = !1), i = !1, s && (d = t ? [] : "")
          }
          o = "string" == typeof o ? (e = o, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
          }), n) : S.extend({}, o);
          var i, t, a, s, d = [],
            u = [],
            l = -1,
            c = {
              add: function () {
                return d && (t && !i && (l = d.length - 1, u.push(t)), function n(e) {
                  S.each(e, function (e, t) {
                    v(t) ? o.unique && c.has(t) || d.push(t) : t && t.length && "string" !== b(t) && n(t)
                  })
                }(arguments), t && !i && r()), this
              },
              remove: function () {
                return S.each(arguments, function (e, t) {
                  for (var n; - 1 < (n = S.inArray(t, d, n));) d.splice(n, 1), n <= l && l--
                }), this
              },
              has: function (e) {
                return e ? -1 < S.inArray(e, d) : 0 < d.length
              },
              empty: function () {
                return d = d && [], this
              },
              disable: function () {
                return s = u = [], d = t = "", this
              },
              disabled: function () {
                return !d
              },
              lock: function () {
                return s = u = [], t || i || (d = t = ""), this
              },
              locked: function () {
                return !!s
              },
              fireWith: function (e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || r()), this
              },
              fire: function () {
                return c.fireWith(this, arguments), this
              },
              fired: function () {
                return !!a
              }
            };
          return c
        }, S.extend({
          Deferred: function (e) {
            var i = [
                ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
              ],
              r = "pending",
              a = {
                state: function () {
                  return r
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this
                },
                catch: function (e) {
                  return a.then(null, e)
                },
                pipe: function () {
                  var r = arguments;
                  return S.Deferred(function (o) {
                    S.each(i, function (e, t) {
                      var n = v(r[t[4]]) && r[t[4]];
                      s[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && v(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this, n ? [e] : arguments)
                      })
                    }), r = null
                  }).promise()
                },
                then: function (t, n, o) {
                  var d = 0;

                  function u(r, i, a, s) {
                    return function () {
                      function e() {
                        var e, t;
                        if (!(r < d)) {
                          if ((e = a.apply(n, o)) === i.promise()) throw new TypeError("Thenable self-resolution");
                          t = e && ("object" === (void 0 === e ? "undefined" : rn(e)) || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, u(d, i, C, s), u(d, i, W, s)) : (d++, t.call(e, u(d, i, C, s), u(d, i, W, s), u(d, i, C, i.notifyWith))) : (a !== C && (n = void 0, o = [e]), (s || i.resolveWith)(n, o))
                        }
                      }
                      var n = this,
                        o = arguments,
                        t = s ? e : function () {
                          try {
                            e()
                          } catch (e) {
                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), d <= r + 1 && (a !== W && (n = void 0, o = [e]), i.rejectWith(n, o))
                          }
                        };
                      r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), Y.setTimeout(t))
                    }
                  }
                  return S.Deferred(function (e) {
                    i[0][3].add(u(0, e, v(o) ? o : C, e.notifyWith)), i[1][3].add(u(0, e, v(t) ? t : C)), i[2][3].add(u(0, e, v(n) ? n : W))
                  }).promise()
                },
                promise: function (e) {
                  return null != e ? S.extend(e, a) : a
                }
              },
              s = {};
            return S.each(i, function (e, t) {
              var n = t[2],
                o = t[5];
              a[t[1]] = n.add, o && n.add(function () {
                r = o
              }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
              }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
          },
          when: function (e) {
            function t(t) {
              return function (e) {
                r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(r, i)
              }
            }
            var n = arguments.length,
              o = n,
              r = Array(o),
              i = s.call(arguments),
              a = S.Deferred();
            if (n <= 1 && (N(e, a.done(t(o)).resolve, a.reject, !n), "pending" === a.state() || v(i[o] && i[o].then))) return a.then();
            for (; o--;) N(i[o], t(o), a.reject);
            return a.promise()
          }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function (e, t) {
          Y.console && Y.console.warn && e && F.test(e.name) && Y.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, S.readyException = function (e) {
          Y.setTimeout(function () {
            throw e
          })
        };
        var z = S.Deferred();

        function I() {
          k.removeEventListener("DOMContentLoaded", I), Y.removeEventListener("load", I), S.ready()
        }

        function R(e, t, n, o, r, i, a) {
          var s = 0,
            d = e.length,
            u = null == n;
          if ("object" === b(n))
            for (s in r = !0, n) R(e, t, s, n[s], !0, i, a);
          else if (void 0 !== o && (r = !0, v(o) || (a = !0), u && (t = a ? (t.call(e, o), null) : (u = t, function (e, t, n) {
              return u.call(S(e), n)
            })), t))
            for (; s < d; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
          return r ? e : u ? t.call(e) : d ? t(e[0], n) : i
        }
        S.fn.ready = function (e) {
          return z.then(e).catch(function (e) {
            S.readyException(e)
          }), this
        }, S.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || z.resolveWith(k, [S])
          }
        }), S.ready.then = z.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? Y.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", I), Y.addEventListener("load", I));
        var J = /^-ms-/,
          q = /-([a-z])/g;

        function U(e, t) {
          return t.toUpperCase()
        }

        function V(e) {
          return e.replace(J, "ms-").replace(q, U)
        }

        function B(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }

        function G() {
          this.expando = S.expando + G.uid++
        }
        G.uid = 1, G.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, B(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
            }))), t
          },
          set: function (e, t, n) {
            var o, r = this.cache(e);
            if ("string" == typeof t) r[V(t)] = n;
            else
              for (o in t) r[V(o)] = t[o];
            return r
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
          },
          access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
          },
          remove: function (e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in o ? [t] : t.match(P) || []).length;
                for (; n--;) delete o[t[n]]
              }
              void 0 !== t && !S.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
          }
        };
        var $ = new G,
          K = new G,
          Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          X = /[A-Z]/g;

        function Q(e, t, n) {
          var o, r;
          if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(o))) {
              try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
              } catch (e) {}
              K.set(e, t, n)
            } else n = void 0;
          return n
        }

        function ee(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        }

        function te(e, t, n, o) {
          var r, i, a = {};
          for (i in t) a[i] = e.style[i], e.style[i] = t[i];
          for (i in r = n.apply(e, o || []), t) e.style[i] = a[i];
          return r
        }
        S.extend({
          hasData: function (e) {
            return K.hasData(e) || $.hasData(e)
          },
          data: function (e, t, n) {
            return K.access(e, t, n)
          },
          removeData: function (e, t) {
            K.remove(e, t)
          },
          _data: function (e, t, n) {
            return $.access(e, t, n)
          },
          _removeData: function (e, t) {
            $.remove(e, t)
          }
        }), S.fn.extend({
          data: function (n, e) {
            var t, o, r, i = this[0],
              a = i && i.attributes;
            if (void 0 !== n) return "object" === (void 0 === n ? "undefined" : rn(n)) ? this.each(function () {
              K.set(this, n)
            }) : R(this, function (e) {
              var t;
              if (i && void 0 === e) return void 0 !== (t = K.get(i, n)) ? t : void 0 !== (t = Q(i, n)) ? t : void 0;
              this.each(function () {
                K.set(this, n, e)
              })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = K.get(i), 1 === i.nodeType && !$.get(i, "hasDataAttrs"))) {
              for (t = a.length; t--;) a[t] && 0 === (o = a[t].name).indexOf("data-") && (o = V(o.slice(5)), Q(i, o, r[o]));
              $.set(i, "hasDataAttrs", !0)
            }
            return r
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e)
            })
          }
        }), S.extend({
          queue: function (e, t, n) {
            var o;
            if (e) return t = (t || "fx") + "queue", o = $.get(e, t), n && (!o || Array.isArray(n) ? o = $.access(e, t, S.makeArray(n)) : o.push(n)), o || []
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
              o = n.length,
              r = n.shift(),
              i = S._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, function () {
              S.dequeue(e, t)
            }, i)), !o && i && i.empty.fire()
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return $.get(e, n) || $.access(e, n, {
              empty: S.Callbacks("once memory").add(function () {
                $.remove(e, [t + "queue", n])
              })
            })
          }
        }), S.fn.extend({
          queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
              var e = S.queue(this, t, n);
              S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
          },
          dequeue: function (e) {
            return this.each(function () {
              S.dequeue(this, e)
            })
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", [])
          },
          promise: function (e, t) {
            function n() {
              --r || i.resolveWith(a, [a])
            }
            var o, r = 1,
              i = S.Deferred(),
              a = this,
              s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(o = $.get(a[s], e + "queueHooks")) && o.empty && (r++, o.empty.add(n));
            return n(), i.promise(t)
          }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
          re = ["Top", "Right", "Bottom", "Left"];

        function ie(e, t, n, o) {
          var r, i, a = 20,
            s = o ? function () {
              return o.cur()
            } : function () {
              return S.css(e, t, "")
            },
            d = s(),
            u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            l = (S.cssNumber[t] || "px" !== u && +d) && oe.exec(S.css(e, t));
          if (l && l[3] !== u) {
            for (d /= 2, u = u || l[3], l = +d || 1; a--;) S.style(e, t, l + u), (1 - i) * (1 - (i = s() / d || .5)) <= 0 && (a = 0), l /= i;
            l *= 2, S.style(e, t, l + u), n = n || []
          }
          return n && (l = +l || +d || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], o && (o.unit = u, o.start = l, o.end = r)), r
        }
        var ae = {};

        function se(e, t) {
          for (var n, o, r = [], i = 0, a = e.length; i < a; i++)(o = e[i]).style && (n = o.style.display, t ? ("none" === n && (r[i] = $.get(o, "display") || null, r[i] || (o.style.display = "")), "" === o.style.display && ee(o) && (r[i] = (c = u = d = void 0, u = (s = o).ownerDocument, l = s.nodeName, (c = ae[l]) || (d = u.body.appendChild(u.createElement(l)), c = S.css(d, "display"), d.parentNode.removeChild(d), "none" === c && (c = "block"), ae[l] = c)))) : "none" !== n && (r[i] = "none", $.set(o, "display", n)));
          var s, d, u, l, c;
          for (i = 0; i < a; i++) null != r[i] && (e[i].style.display = r[i]);
          return e
        }
        S.fn.extend({
          show: function () {
            return se(this, !0)
          },
          hide: function () {
            return se(this)
          },
          toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              ee(this) ? S(this).show() : S(this).hide()
            })
          }
        });
        var de = /^(?:checkbox|radio)$/i,
          ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          le = /^$|^module$|\/(?:java|ecma)script/i,
          ce = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };

        function _e(e, t) {
          var n;
          return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && w(e, t) ? S.merge([e], n) : n
        }

        function me(e, t) {
          for (var n = 0, o = e.length; n < o; n++) $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
        }
        ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td;
        var fe, pe, ye = /<|&#?\w+;/;

        function he(e, t, n, o, r) {
          for (var i, a, s, d, u, l, c = t.createDocumentFragment(), _ = [], m = 0, f = e.length; m < f; m++)
            if ((i = e[m]) || 0 === i)
              if ("object" === b(i)) S.merge(_, i.nodeType ? [i] : i);
              else if (ye.test(i)) {
            for (a = a || c.appendChild(t.createElement("div")), s = (ue.exec(i) || ["", ""])[1].toLowerCase(), d = ce[s] || ce._default, a.innerHTML = d[1] + S.htmlPrefilter(i) + d[2], l = d[0]; l--;) a = a.lastChild;
            S.merge(_, a.childNodes), (a = c.firstChild).textContent = ""
          } else _.push(t.createTextNode(i));
          for (c.textContent = "", m = 0; i = _[m++];)
            if (o && -1 < S.inArray(i, o)) r && r.push(i);
            else if (u = S.contains(i.ownerDocument, i), a = _e(c.appendChild(i), "script"), u && me(a), n)
            for (l = 0; i = a[l++];) le.test(i.type || "") && n.push(i);
          return c
        }
        fe = k.createDocumentFragment().appendChild(k.createElement("div")), (pe = k.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), M.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", M.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
        var Me = k.documentElement,
          ve = /^key/,
          Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          be = /^([^.]*)(?:\.(.+)|)/;

        function ge() {
          return !0
        }

        function Ye() {
          return !1
        }

        function ke() {
          try {
            return k.activeElement
          } catch (e) {}
        }

        function Se(e, t, n, o, r, i) {
          var a, s;
          if ("object" === (void 0 === t ? "undefined" : rn(t))) {
            for (s in "string" != typeof n && (o = o || n, n = void 0), t) Se(e, s, n, o, t[s], i);
            return e
          }
          if (null == o && null == r ? (r = n, o = n = void 0) : null == r && ("string" == typeof n ? (r = o, o = void 0) : (r = o, o = n, n = void 0)), !1 === r) r = Ye;
          else if (!r) return e;
          return 1 === i && (a = r, (r = function (e) {
            return S().off(e), a.apply(this, arguments)
          }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, r, o, n)
          })
        }
        S.event = {
          global: {},
          add: function (t, e, n, o, r) {
            var i, a, s, d, u, l, c, _, m, f, p, y = $.get(t);
            if (y)
              for (n.handler && (n = (i = n).handler, r = i.selector), r && S.find.matchesSelector(Me, r), n.guid || (n.guid = S.guid++), (d = y.events) || (d = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                  return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), u = (e = (e || "").match(P) || [""]).length; u--;) m = p = (s = be.exec(e[u]) || [])[1], f = (s[2] || "").split(".").sort(), m && (c = S.event.special[m] || {}, m = (r ? c.delegateType : c.bindType) || m, c = S.event.special[m] || {}, l = S.extend({
                type: m,
                origType: p,
                data: o,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && S.expr.match.needsContext.test(r),
                namespace: f.join(".")
              }, i), (_ = d[m]) || ((_ = d[m] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, o, f, a) || t.addEventListener && t.addEventListener(m, a)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? _.splice(_.delegateCount++, 0, l) : _.push(l), S.event.global[m] = !0)
          },
          remove: function (e, t, n, o, r) {
            var i, a, s, d, u, l, c, _, m, f, p, y = $.hasData(e) && $.get(e);
            if (y && (d = y.events)) {
              for (u = (t = (t || "").match(P) || [""]).length; u--;)
                if (m = p = (s = be.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), m) {
                  for (c = S.event.special[m] || {}, _ = d[m = (o ? c.delegateType : c.bindType) || m] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = _.length; i--;) l = _[i], !r && p !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || o && o !== l.selector && ("**" !== o || !l.selector) || (_.splice(i, 1), l.selector && _.delegateCount--, c.remove && c.remove.call(e, l));
                  a && !_.length && (c.teardown && !1 !== c.teardown.call(e, f, y.handle) || S.removeEvent(e, m, y.handle), delete d[m])
                } else
                  for (m in d) S.event.remove(e, m + t[u], n, o, !0);
              S.isEmptyObject(d) && $.remove(e, "handle events")
            }
          },
          dispatch: function (e) {
            var t, n, o, r, i, a, s = S.event.fix(e),
              d = new Array(arguments.length),
              u = ($.get(this, "events") || {})[s.type] || [],
              l = S.event.special[s.type] || {};
            for (d[0] = s, t = 1; t < arguments.length; t++) d[t] = arguments[t];
            if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
              for (a = S.event.handlers.call(this, s, u), t = 0;
                (r = a[t++]) && !s.isPropagationStopped();)
                for (s.currentTarget = r.elem, n = 0;
                  (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (o = ((S.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, d)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, s), s.result
            }
          },
          handlers: function (e, t) {
            var n, o, r, i, a, s = [],
              d = t.delegateCount,
              u = e.target;
            if (d && u.nodeType && !("click" === e.type && 1 <= e.button))
              for (; u !== this; u = u.parentNode || this)
                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                  for (i = [], a = {}, n = 0; n < d; n++) void 0 === a[r = (o = t[n]).selector + " "] && (a[r] = o.needsContext ? -1 < S(r, this).index(u) : S.find(r, this, null, [u]).length), a[r] && i.push(o);
                  i.length && s.push({
                    elem: u,
                    handlers: i
                  })
                } return u = this, d < t.length && s.push({
              elem: u,
              handlers: t.slice(d)
            }), s
          },
          addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: v(e) ? function () {
                if (this.originalEvent) return e(this.originalEvent)
              } : function () {
                if (this.originalEvent) return this.originalEvent[t]
              },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e
                })
              }
            })
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
          },
          special: {
            load: {
              noBubble: !0
            },
            focus: {
              trigger: function () {
                if (this !== ke() && this.focus) return this.focus(), !1
              },
              delegateType: "focusin"
            },
            blur: {
              trigger: function () {
                if (this === ke() && this.blur) return this.blur(), !1
              },
              delegateType: "focusout"
            },
            click: {
              trigger: function () {
                if ("checkbox" === this.type && this.click && w(this, "input")) return this.click(), !1
              },
              _default: function (e) {
                return w(e.target, "a")
              }
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
            }
          }
        }, S.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
        }, S.Event = function (e, t) {
          if (!(this instanceof S.Event)) return new S.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ge : Ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
        }, S.Event.prototype = {
          constructor: S.Event,
          isDefaultPrevented: Ye,
          isPropagationStopped: Ye,
          isImmediatePropagationStopped: Ye,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ge, e && !this.isSimulated && e.preventDefault()
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ge, e && !this.isSimulated && e.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ge, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
          }
        }, S.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Le.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
          }
        }, S.event.addProp), S.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function (e, r) {
          S.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
              var t, n = e.relatedTarget,
                o = e.handleObj;
              return n && (n === this || S.contains(this, n)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r), t
            }
          }
        }), S.fn.extend({
          on: function (e, t, n, o) {
            return Se(this, e, t, n, o)
          },
          one: function (e, t, n, o) {
            return Se(this, e, t, n, o, 1)
          },
          off: function (e, t, n) {
            var o, r;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, S(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" !== (void 0 === e ? "undefined" : rn(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ye), this.each(function () {
              S.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
          }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          we = /<script|<style|<link/i,
          Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
          xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function je(e, t) {
          return w(e, "table") && w(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
        }

        function He(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Oe(e) {
          return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ee(e, t) {
          var n, o, r, i, a, s, d, u;
          if (1 === t.nodeType) {
            if ($.hasData(e) && (i = $.access(e), a = $.set(t, i), u = i.events))
              for (r in delete a.handle, a.events = {}, u)
                for (n = 0, o = u[r].length; n < o; n++) S.event.add(t, r, u[r][n]);
            K.hasData(e) && (s = K.access(e), d = S.extend({}, s), K.set(t, d))
          }
        }

        function Ae(n, o, r, i) {
          o = y.apply([], o);
          var e, t, a, s, d, u, l = 0,
            c = n.length,
            _ = c - 1,
            m = o[0],
            f = v(m);
          if (f || 1 < c && "string" == typeof m && !M.checkClone && Te.test(m)) return n.each(function (e) {
            var t = n.eq(e);
            f && (o[0] = m.call(this, e, t.html())), Ae(t, o, r, i)
          });
          if (c && (t = (e = he(o, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (s = (a = S.map(_e(e, "script"), He)).length; l < c; l++) d = e, l !== _ && (d = S.clone(d, !0, !0), s && S.merge(a, _e(d, "script"))), r.call(n[l], d, l);
            if (s)
              for (u = a[a.length - 1].ownerDocument, S.map(a, Oe), l = 0; l < s; l++) d = a[l], le.test(d.type || "") && !$.access(d, "globalEval") && S.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(d.src) : L(d.textContent.replace(xe, ""), u, d))
          }
          return n
        }

        function Pe(e, t, n) {
          for (var o, r = t ? S.filter(t, e) : e, i = 0; null != (o = r[i]); i++) n || 1 !== o.nodeType || S.cleanData(_e(o)), o.parentNode && (n && S.contains(o.ownerDocument, o) && me(_e(o, "script")), o.parentNode.removeChild(o));
          return e
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e.replace(De, "<$1></$2>")
          },
          clone: function (e, t, n) {
            var o, r, i, a, s, d, u, l = e.cloneNode(!0),
              c = S.contains(e.ownerDocument, e);
            if (!(M.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
              for (a = _e(l), o = 0, r = (i = _e(e)).length; o < r; o++) s = i[o], "input" === (u = (d = a[o]).nodeName.toLowerCase()) && de.test(s.type) ? d.checked = s.checked : "input" !== u && "textarea" !== u || (d.defaultValue = s.defaultValue);
            if (t)
              if (n)
                for (i = i || _e(e), a = a || _e(l), o = 0, r = i.length; o < r; o++) Ee(i[o], a[o]);
              else Ee(e, l);
            return 0 < (a = _e(l, "script")).length && me(a, !c && _e(e, "script")), l
          },
          cleanData: function (e) {
            for (var t, n, o, r = S.event.special, i = 0; void 0 !== (n = e[i]); i++)
              if (B(n)) {
                if (t = n[$.expando]) {
                  if (t.events)
                    for (o in t.events) r[o] ? S.event.remove(n, o) : S.removeEvent(n, o, t.handle);
                  n[$.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
              }
          }
        }), S.fn.extend({
          detach: function (e) {
            return Pe(this, e, !0)
          },
          remove: function (e) {
            return Pe(this, e)
          },
          text: function (e) {
            return R(this, function (e) {
              return void 0 === e ? S.text(this) : this.empty().each(function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
            }, null, e, arguments.length)
          },
          append: function () {
            return Ae(this, arguments, function (e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
          },
          prepend: function () {
            return Ae(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = je(this, e);
                t.insertBefore(e, t.firstChild)
              }
            })
          },
          before: function () {
            return Ae(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
            })
          },
          after: function () {
            return Ae(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(_e(e, !1)), e.textContent = "");
            return this
          },
          clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return S.clone(this, e, t)
            })
          },
          html: function (e) {
            return R(this, function (e) {
              var t = this[0] || {},
                n = 0,
                o = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !we.test(e) && !ce[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = S.htmlPrefilter(e);
                try {
                  for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(_e(t, !1)), t.innerHTML = e);
                  t = 0
                } catch (e) {}
              }
              t && this.empty().append(e)
            }, null, e, arguments.length)
          },
          replaceWith: function () {
            var n = [];
            return Ae(this, arguments, function (e) {
              var t = this.parentNode;
              S.inArray(this, n) < 0 && (S.cleanData(_e(this)), t && t.replaceChild(e, this))
            }, n)
          }
        }), S.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function (e, a) {
          S.fn[e] = function (e) {
            for (var t, n = [], o = S(e), r = o.length - 1, i = 0; i <= r; i++) t = i === r ? this : this.clone(!0), S(o[i])[a](t), d.apply(n, t.get());
            return this.pushStack(n)
          }
        });
        var Ce, We, Ne, Fe, ze, Ie, Re, Je = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
          qe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = Y), t.getComputedStyle(e)
          },
          Ue = new RegExp(re.join("|"), "i");

        function Ve(e, t, n) {
          var o, r, i, a, s = e.style;
          return (n = n || qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), !M.pixelBoxStyles() && Je.test(a) && Ue.test(t) && (o = s.width, r = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = r, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function Be(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
            }
          }
        }

        function Ge() {
          if (Re) {
            Ie.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Re.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Me.appendChild(Ie).appendChild(Re);
            var e = Y.getComputedStyle(Re);
            Ce = "1%" !== e.top, ze = 12 === $e(e.marginLeft), Re.style.right = "60%", Fe = 36 === $e(e.right), We = 36 === $e(e.width), Re.style.position = "absolute", Ne = 36 === Re.offsetWidth || "absolute", Me.removeChild(Ie), Re = null
          }
        }

        function $e(e) {
          return Math.round(parseFloat(e))
        }
        Ie = k.createElement("div"), (Re = k.createElement("div")).style && (Re.style.backgroundClip = "content-box", Re.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = "content-box" === Re.style.backgroundClip, S.extend(M, {
          boxSizingReliable: function () {
            return Ge(), We
          },
          pixelBoxStyles: function () {
            return Ge(), Fe
          },
          pixelPosition: function () {
            return Ge(), Ce
          },
          reliableMarginLeft: function () {
            return Ge(), ze
          },
          scrollboxSize: function () {
            return Ge(), Ne
          }
        }));
        var Ke = /^(none|table(?!-c[ea]).+)/,
          Ze = /^--/,
          Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          },
          Qe = {
            letterSpacing: "0",
            fontWeight: "400"
          },
          et = ["Webkit", "Moz", "ms"],
          tt = k.createElement("div").style;

        function nt(e) {
          return S.cssProps[e] || (S.cssProps[e] = function (e) {
            if (e in tt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
              if ((e = et[n] + t) in tt) return e
          }(e) || e)
        }

        function ot(e, t, n) {
          var o = oe.exec(t);
          return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
        }

        function rt(e, t, n, o, r, i) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            d = 0;
          if (n === (o ? "border" : "content")) return 0;
          for (; a < 4; a += 2) "margin" === n && (d += S.css(e, n + re[a], !0, r)), o ? ("content" === n && (d -= S.css(e, "padding" + re[a], !0, r)), "margin" !== n && (d -= S.css(e, "border" + re[a] + "Width", !0, r))) : (d += S.css(e, "padding" + re[a], !0, r), "padding" !== n ? d += S.css(e, "border" + re[a] + "Width", !0, r) : s += S.css(e, "border" + re[a] + "Width", !0, r));
          return !o && 0 <= i && (d += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - d - s - .5))), d
        }

        function it(e, t, n) {
          var o = qe(e),
            r = Ve(e, t, o),
            i = "border-box" === S.css(e, "boxSizing", !1, o),
            a = i;
          if (Je.test(r)) {
            if (!n) return r;
            r = "auto"
          }
          return a = a && (M.boxSizingReliable() || r === e.style[t]), "auto" !== r && (parseFloat(r) || "inline" !== S.css(e, "display", !1, o)) || (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + rt(e, t, n || (i ? "border" : "content"), a, o, r) + "px"
        }

        function at(e, t, n, o, r) {
          return new at.prototype.init(e, t, n, o, r)
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ve(e, "opacity");
                  return "" === n ? "1" : n
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r, i, a, s = V(t),
                d = Ze.test(t),
                u = e.style;
              if (d || (t = nt(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, o)) ? r : u[t];
              "string" === (i = void 0 === n ? "undefined" : rn(n)) && (r = oe.exec(n)) && r[1] && (n = ie(e, t, r), i = "number"), null != n && n == n && ("number" === i && (n += r && r[3] || (S.cssNumber[s] ? "" : "px")), M.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (d ? u.setProperty(t, n) : u[t] = n))
            }
          },
          css: function (e, t, n, o) {
            var r, i, a, s = V(t);
            return Ze.test(t) || (t = nt(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Ve(e, t, o)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (i = parseFloat(r), !0 === n || isFinite(i) ? i || 0 : r) : r
          }
        }), S.each(["height", "width"], function (e, s) {
          S.cssHooks[s] = {
            get: function (e, t, n) {
              if (t) return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, s, n) : te(e, Xe, function () {
                return it(e, s, n)
              })
            },
            set: function (e, t, n) {
              var o, r = qe(e),
                i = "border-box" === S.css(e, "boxSizing", !1, r),
                a = n && rt(e, s, n, i, r);
              return i && M.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - rt(e, s, "border", !1, r) - .5)), a && (o = oe.exec(t)) && "px" !== (o[3] || "px") && (e.style[s] = t, t = S.css(e, s)), ot(0, t, a)
            }
          }
        }), S.cssHooks.marginLeft = Be(M.reliableMarginLeft, function (e, t) {
          if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
            marginLeft: 0
          }, function () {
            return e.getBoundingClientRect().left
          })) + "px"
        }), S.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function (r, i) {
          S.cssHooks[r + i] = {
            expand: function (e) {
              for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + re[t] + i] = o[t] || o[t - 2] || o[0];
              return n
            }
          }, "margin" !== r && (S.cssHooks[r + i].set = ot)
        }), S.fn.extend({
          css: function (e, t) {
            return R(this, function (e, t, n) {
              var o, r, i = {},
                a = 0;
              if (Array.isArray(t)) {
                for (o = qe(e), r = t.length; a < r; a++) i[t[a]] = S.css(e, t[a], !1, o);
                return i
              }
              return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
          }
        }), ((S.Tween = at).prototype = {
          constructor: at,
          init: function (e, t, n, o, r, i) {
            this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || (S.cssNumber[n] ? "" : "px")
          },
          cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
          },
          run: function (e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
          }
        }).init.prototype = at.prototype, (at.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
              S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
          }
        }).scrollTop = at.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
        }, S.easing = {
          linear: function (e) {
            return e
          },
          swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          },
          _default: "swing"
        }, S.fx = at.prototype.init, S.fx.step = {};
        var st, dt, ut, lt, ct = /^(?:toggle|show|hide)$/,
          _t = /queueHooks$/;

        function mt() {
          dt && (!1 === k.hidden && Y.requestAnimationFrame ? Y.requestAnimationFrame(mt) : Y.setTimeout(mt, S.fx.interval), S.fx.tick())
        }

        function ft() {
          return Y.setTimeout(function () {
            st = void 0
          }), st = Date.now()
        }

        function pt(e, t) {
          var n, o = 0,
            r = {
              height: e
            };
          for (t = t ? 1 : 0; o < 4; o += 2 - t) r["margin" + (n = re[o])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r
        }

        function yt(e, t, n) {
          for (var o, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), i = 0, a = r.length; i < a; i++)
            if (o = r[i].call(n, t, e)) return o
        }

        function ht(i, e, t) {
          var n, a, o = 0,
            r = ht.prefilters.length,
            s = S.Deferred().always(function () {
              delete d.elem
            }),
            d = function () {
              if (a) return !1;
              for (var e = st || ft(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), o = 0, r = u.tweens.length; o < r; o++) u.tweens[o].run(n);
              return s.notifyWith(i, [u, n, t]), n < 1 && r ? t : (r || s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u]), !1)
            },
            u = s.promise({
              elem: i,
              props: S.extend({}, e),
              opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
              }, t),
              originalProperties: e,
              originalOptions: t,
              startTime: st || ft(),
              duration: t.duration,
              tweens: [],
              createTween: function (e, t) {
                var n = S.Tween(i, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
              },
              stop: function (e) {
                var t = 0,
                  n = e ? u.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) u.tweens[t].run(1);
                return e ? (s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u, e])) : s.rejectWith(i, [u, e]), this
              }
            }),
            l = u.props;
          for (function (e, t) {
              var n, o, r, i, a;
              for (n in e)
                if (r = t[o = V(n)], i = e[n], Array.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), (a = S.cssHooks[o]) && "expand" in a)
                  for (n in i = a.expand(i), delete e[o], i) n in e || (e[n] = i[n], t[n] = r);
                else t[o] = r
            }(l, u.opts.specialEasing); o < r; o++)
            if (n = ht.prefilters[o].call(u, i, l, u.opts)) return v(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
          return S.map(l, yt, u), v(u.opts.start) && u.opts.start.call(i, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(d, {
            elem: i,
            anim: u,
            queue: u.opts.queue
          })), u
        }
        S.Animation = S.extend(ht, {
          tweeners: {
            "*": [function (e, t) {
              var n = this.createTween(e, t);
              return ie(n.elem, e, oe.exec(t), n), n
            }]
          },
          tweener: function (e, t) {
            for (var n, o = 0, r = (e = v(e) ? (t = e, ["*"]) : e.match(P)).length; o < r; o++) n = e[o], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
          },
          prefilters: [function (e, t, n) {
            var o, r, i, a, s, d, u, l, c = "width" in t || "height" in t,
              _ = this,
              m = {},
              f = e.style,
              p = e.nodeType && ee(e),
              y = $.get(e, "fxshow");
            for (o in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
              }), a.unqueued++, _.always(function () {
                _.always(function () {
                  a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                })
              })), t)
              if (r = t[o], ct.test(r)) {
                if (delete t[o], i = i || "toggle" === r, r === (p ? "hide" : "show")) {
                  if ("show" !== r || !y || void 0 === y[o]) continue;
                  p = !0
                }
                m[o] = y && y[o] || S.style(e, o)
              } if ((d = !S.isEmptyObject(t)) || !S.isEmptyObject(m))
              for (o in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = y && y.display) && (u = $.get(e, "display")), "none" === (l = S.css(e, "display")) && (u ? l = u : (se([e], !0), u = e.style.display || u, l = S.css(e, "display"), se([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === S.css(e, "float") && (d || (_.done(function () {
                  f.display = u
                }), null == u && (l = f.display, u = "none" === l ? "" : l)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", _.always(function () {
                  f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), d = !1, m) d || (y ? "hidden" in y && (p = y.hidden) : y = $.access(e, "fxshow", {
                display: u
              }), i && (y.hidden = !p), p && se([e], !0), _.done(function () {
                for (o in p || se([e]), $.remove(e, "fxshow"), m) S.style(e, o, m[o])
              })), d = yt(p ? y[o] : 0, o, _), o in y || (y[o] = d.start, p && (d.end = d.start, d.start = 0))
          }],
          prefilter: function (e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
          }
        }), S.speed = function (e, t, n) {
          var o = e && "object" === (void 0 === e ? "undefined" : rn(e)) ? S.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
          };
          return S.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in S.fx.speeds ? o.duration = S.fx.speeds[o.duration] : o.duration = S.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function () {
            v(o.old) && o.old.call(this), o.queue && S.dequeue(this, o.queue)
          }, o
        }, S.fn.extend({
          fadeTo: function (e, t, n, o) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, o)
          },
          animate: function (t, e, n, o) {
            function r() {
              var e = ht(this, S.extend({}, t), a);
              (i || $.get(this, "finish")) && e.stop(!0)
            }
            var i = S.isEmptyObject(t),
              a = S.speed(e, n, o);
            return r.finish = r, i || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
          },
          stop: function (r, e, i) {
            function a(e) {
              var t = e.stop;
              delete e.stop, t(i)
            }
            return "string" != typeof r && (i = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
              var e = !0,
                t = null != r && r + "queueHooks",
                n = S.timers,
                o = $.get(this);
              if (t) o[t] && o[t].stop && a(o[t]);
              else
                for (t in o) o[t] && o[t].stop && _t.test(t) && a(o[t]);
              for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
              !e && i || S.dequeue(this, r)
            })
          },
          finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
              var e, t = $.get(this),
                n = t[a + "queue"],
                o = t[a + "queueHooks"],
                r = S.timers,
                i = n ? n.length : 0;
              for (t.finish = !0, S.queue(this, a, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish
            })
          }
        }), S.each(["toggle", "show", "hide"], function (e, o) {
          var r = S.fn[o];
          S.fn[o] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(pt(o, !0), e, t, n)
          }
        }), S.each({
          slideDown: pt("show"),
          slideUp: pt("hide"),
          slideToggle: pt("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function (e, o) {
          S.fn[e] = function (e, t, n) {
            return this.animate(o, e, t, n)
          }
        }), S.timers = [], S.fx.tick = function () {
          var e, t = 0,
            n = S.timers;
          for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || S.fx.stop(), st = void 0
        }, S.fx.timer = function (e) {
          S.timers.push(e), S.fx.start()
        }, S.fx.interval = 13, S.fx.start = function () {
          dt || (dt = !0, mt())
        }, S.fx.stop = function () {
          dt = null
        }, S.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, S.fn.delay = function (o, e) {
          return o = S.fx && S.fx.speeds[o] || o, e = e || "fx", this.queue(e, function (e, t) {
            var n = Y.setTimeout(e, o);
            t.stop = function () {
              Y.clearTimeout(n)
            }
          })
        }, ut = k.createElement("input"), lt = k.createElement("select").appendChild(k.createElement("option")), ut.type = "checkbox", M.checkOn = "" !== ut.value, M.optSelected = lt.selected, (ut = k.createElement("input")).value = "t", ut.type = "radio", M.radioValue = "t" === ut.value;
        var Mt, vt = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return R(this, S.attr, e, t, 1 < arguments.length)
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e)
            })
          }
        }), S.extend({
          attr: function (e, t, n) {
            var o, r, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === i && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Mt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (o = r.get(e, t)) ? o : null == (o = S.find.attr(e, t)) ? void 0 : o)
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!M.radioValue && "radio" === t && w(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n, o = 0,
              r = t && t.match(P);
            if (r && 1 === e.nodeType)
              for (; n = r[o++];) e.removeAttribute(n)
          }
        }), Mt = {
          set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
          }
        }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var a = vt[t] || S.find.attr;
          vt[t] = function (e, t, n) {
            var o, r, i = t.toLowerCase();
            return n || (r = vt[i], vt[i] = o, o = null != a(e, t, n) ? i : null, vt[i] = r), o
          }
        });
        var Lt = /^(?:input|select|textarea|button)$/i,
          bt = /^(?:a|area)$/i;

        function gt(e) {
          return (e.match(P) || []).join(" ")
        }

        function Yt(e) {
          return e.getAttribute && e.getAttribute("class") || ""
        }

        function kt(e) {
          return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        S.fn.extend({
          prop: function (e, t) {
            return R(this, S.prop, e, t, 1 < arguments.length)
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e]
            })
          }
        }), S.extend({
          prop: function (e, t, n) {
            var o, r, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : e[t] = n : r && "get" in r && null !== (o = r.get(e, t)) ? o : e[t]
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = S.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : Lt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
              }
            }
          },
          propFix: {
            for: "htmlFor",
            class: "className"
          }
        }), M.optSelected || (S.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
          }
        }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          S.propFix[this.toLowerCase()] = this
        }), S.fn.extend({
          addClass: function (t) {
            var e, n, o, r, i, a, s, d = 0;
            if (v(t)) return this.each(function (e) {
              S(this).addClass(t.call(this, e, Yt(this)))
            });
            if ((e = kt(t)).length)
              for (; n = this[d++];)
                if (r = Yt(n), o = 1 === n.nodeType && " " + gt(r) + " ") {
                  for (a = 0; i = e[a++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                  r !== (s = gt(o)) && n.setAttribute("class", s)
                } return this
          },
          removeClass: function (t) {
            var e, n, o, r, i, a, s, d = 0;
            if (v(t)) return this.each(function (e) {
              S(this).removeClass(t.call(this, e, Yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = kt(t)).length)
              for (; n = this[d++];)
                if (r = Yt(n), o = 1 === n.nodeType && " " + gt(r) + " ") {
                  for (a = 0; i = e[a++];)
                    for (; - 1 < o.indexOf(" " + i + " ");) o = o.replace(" " + i + " ", " ");
                  r !== (s = gt(o)) && n.setAttribute("class", s)
                } return this
          },
          toggleClass: function (r, t) {
            var i = void 0 === r ? "undefined" : rn(r),
              a = "string" === i || Array.isArray(r);
            return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : v(r) ? this.each(function (e) {
              S(this).toggleClass(r.call(this, e, Yt(this), t), t)
            }) : this.each(function () {
              var e, t, n, o;
              if (a)
                for (t = 0, n = S(this), o = kt(r); e = o[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else void 0 !== r && "boolean" !== i || ((e = Yt(this)) && $.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : $.get(this, "__className__") || ""))
            })
          },
          hasClass: function (e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
              if (1 === n.nodeType && -1 < (" " + gt(Yt(n)) + " ").indexOf(t)) return !0;
            return !1
          }
        });
        var St = /\r/g;

        function Dt(e) {
          e.stopPropagation()
        }
        S.fn.extend({
          val: function (n) {
            var o, e, r, t = this[0];
            return arguments.length ? (r = v(n), this.each(function (e) {
              var t;
              1 === this.nodeType && (null == (t = r ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                return null == e ? "" : e + ""
              })), (o = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in o && void 0 !== o.set(this, t, "value") || (this.value = t))
            })) : t ? (o = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in o && void 0 !== (e = o.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
          }
        }), S.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = S.find.attr(e, "value");
                return null != t ? t : gt(S.text(e))
              }
            },
            select: {
              get: function (e) {
                var t, n, o, r = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  d = a ? i + 1 : r.length;
                for (o = i < 0 ? d : a ? i : 0; o < d; o++)
                  if (((n = r[o]).selected || o === i) && !n.disabled && (!n.parentNode.disabled || !w(n.parentNode, "optgroup"))) {
                    if (t = S(n).val(), a) return t;
                    s.push(t)
                  } return s
              },
              set: function (e, t) {
                for (var n, o, r = e.options, i = S.makeArray(t), a = r.length; a--;)((o = r[a]).selected = -1 < S.inArray(S.valHooks.option.get(o), i)) && (n = !0);
                return n || (e.selectedIndex = -1), i
              }
            }
          }
        }), S.each(["radio", "checkbox"], function () {
          S.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
          }, M.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
          })
        }), M.focusin = "onfocusin" in Y;
        var wt = /^(?:focusinfocus|focusoutblur)$/;
        S.extend(S.event, {
          trigger: function (e, t, n, o) {
            var r, i, a, s, d, u, l, c, _ = [n || k],
              m = h.call(e, "type") ? e.type : e,
              f = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (i = c = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(m + S.event.triggered) && (-1 < m.indexOf(".") && (m = (f = m.split(".")).shift(), f.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[S.expando] ? e : new S.Event(m, "object" === (void 0 === e ? "undefined" : rn(e)) && e)).isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), l = S.event.special[m] || {}, o || !l.trigger || !1 !== l.trigger.apply(n, t))) {
              if (!o && !l.noBubble && !p(n)) {
                for (s = l.delegateType || m, wt.test(s + m) || (i = i.parentNode); i; i = i.parentNode) _.push(i), a = i;
                a === (n.ownerDocument || k) && _.push(a.defaultView || a.parentWindow || Y)
              }
              for (r = 0;
                (i = _[r++]) && !e.isPropagationStopped();) c = i, e.type = 1 < r ? s : l.bindType || m, (u = ($.get(i, "events") || {})[e.type] && $.get(i, "handle")) && u.apply(i, t), (u = d && i[d]) && u.apply && B(i) && (e.result = u.apply(i, t), !1 === e.result && e.preventDefault());
              return e.type = m, o || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(_.pop(), t) || !B(n) || d && v(n[m]) && !p(n) && ((a = n[d]) && (n[d] = null), S.event.triggered = m, e.isPropagationStopped() && c.addEventListener(m, Dt), n[m](), e.isPropagationStopped() && c.removeEventListener(m, Dt), S.event.triggered = void 0, a && (n[d] = a)), e.result
            }
          },
          simulate: function (e, t, n) {
            var o = S.extend(new S.Event, n, {
              type: e,
              isSimulated: !0
            });
            S.event.trigger(o, null, t)
          }
        }), S.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              S.event.trigger(e, t, this)
            })
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
          }
        }), M.focusin || S.each({
          focus: "focusin",
          blur: "focusout"
        }, function (n, o) {
          function r(e) {
            S.event.simulate(o, e.target, S.event.fix(e))
          }
          S.event.special[o] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = $.access(e, o);
              t || e.addEventListener(n, r, !0), $.access(e, o, (t || 0) + 1)
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = $.access(e, o) - 1;
              t ? $.access(e, o, t) : (e.removeEventListener(n, r, !0), $.remove(e, o))
            }
          }
        });
        var Tt = Y.location,
          xt = Date.now(),
          jt = /\?/;
        S.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = (new Y.DOMParser).parseFromString(e, "text/xml")
          } catch (e) {
            t = void 0
          }
          return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
        };
        var Ht = /\[\]$/,
          Ot = /\r?\n/g,
          Et = /^(?:submit|button|image|reset|file)$/i,
          At = /^(?:input|select|textarea|keygen)/i;

        function Pt(n, e, o, r) {
          var t;
          if (Array.isArray(e)) S.each(e, function (e, t) {
            o || Ht.test(n) ? r(n, t) : Pt(n + "[" + ("object" === (void 0 === t ? "undefined" : rn(t)) && null != t ? e : "") + "]", t, o, r)
          });
          else if (o || "object" !== b(e)) r(n, e);
          else
            for (t in e) Pt(n + "[" + t + "]", e[t], o, r)
        }
        S.param = function (e, t) {
          function n(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          }
          var o, r = [];
          if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            n(this.name, this.value)
          });
          else
            for (o in e) Pt(o, e[o], t, n);
          return r.join("&")
        }, S.fn.extend({
          serialize: function () {
            return S.param(this.serializeArray())
          },
          serializeArray: function () {
            return this.map(function () {
              var e = S.prop(this, "elements");
              return e ? S.makeArray(e) : this
            }).filter(function () {
              var e = this.type;
              return this.name && !S(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !de.test(e))
            }).map(function (e, t) {
              var n = S(this).val();
              return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                return {
                  name: t.name,
                  value: e.replace(Ot, "\r\n")
                }
              }) : {
                name: t.name,
                value: n.replace(Ot, "\r\n")
              }
            }).get()
          }
        });
        var Ct = /%20/g,
          Wt = /#.*$/,
          Nt = /([?&])_=[^&]*/,
          Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          zt = /^(?:GET|HEAD)$/,
          It = /^\/\//,
          Rt = {},
          Jt = {},
          qt = "*/".concat("*"),
          Ut = k.createElement("a");

        function Vt(i) {
          return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, o = 0,
              r = e.toLowerCase().match(P) || [];
            if (v(t))
              for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
          }
        }

        function Bt(t, r, i, a) {
          var s = {},
            d = t === Jt;

          function u(e) {
            var o;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
              var n = t(r, i, a);
              return "string" != typeof n || d || s[n] ? d ? !(o = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), o
          }
          return u(r.dataTypes[0]) || !s["*"] && u("*")
        }

        function Gt(e, t) {
          var n, o, r = S.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((r[n] ? e : o = o || {})[n] = t[n]);
          return o && S.extend(!0, e, o), e
        }
        Ut.href = Tt.href, S.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": qt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": S.parseXML
            },
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          ajaxSetup: function (e, t) {
            return t ? Gt(Gt(e, S.ajaxSettings), t) : Gt(S.ajaxSettings, e)
          },
          ajaxPrefilter: Vt(Rt),
          ajaxTransport: Vt(Jt),
          ajax: function (e, t) {
            "object" === (void 0 === e ? "undefined" : rn(e)) && (t = e, e = void 0), t = t || {};
            var l, c, _, n, m, o, f, p, r, i, y = S.ajaxSetup({}, t),
              h = y.context || y,
              M = y.context && (h.nodeType || h.jquery) ? S(h) : S.event,
              v = S.Deferred(),
              L = S.Callbacks("once memory"),
              b = y.statusCode || {},
              a = {},
              s = {},
              d = "canceled",
              g = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (f) {
                    if (!n)
                      for (n = {}; t = Ft.exec(_);) n[t[1].toLowerCase()] = t[2];
                    t = n[e.toLowerCase()]
                  }
                  return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                  return f ? _ : null
                },
                setRequestHeader: function (e, t) {
                  return null == f && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                },
                overrideMimeType: function (e) {
                  return null == f && (y.mimeType = e), this
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (f) g.always(e[g.status]);
                    else
                      for (t in e) b[t] = [b[t], e[t]];
                  return this
                },
                abort: function (e) {
                  var t = e || d;
                  return l && l.abort(t), u(0, t), this
                }
              };
            if (v.promise(g), y.url = ((e || y.url || Tt.href) + "").replace(It, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
              o = k.createElement("a");
              try {
                o.href = y.url, o.href = o.href, y.crossDomain = Ut.protocol + "//" + Ut.host != o.protocol + "//" + o.host
              } catch (e) {
                y.crossDomain = !0
              }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)), Bt(Rt, y, t, g), f) return g;
            for (r in (p = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !zt.test(y.type), c = y.url.replace(Wt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Ct, "+")) : (i = y.url.slice(c.length), y.data && (y.processData || "string" == typeof y.data) && (c += (jt.test(c) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (c = c.replace(Nt, "$1"), i = (jt.test(c) ? "&" : "?") + "_=" + xt++ + i), y.url = c + i), y.ifModified && (S.lastModified[c] && g.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && g.setRequestHeader("If-None-Match", S.etag[c])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && g.setRequestHeader("Content-Type", y.contentType), g.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : y.accepts["*"]), y.headers) g.setRequestHeader(r, y.headers[r]);
            if (y.beforeSend && (!1 === y.beforeSend.call(h, g, y) || f)) return g.abort();
            if (d = "abort", L.add(y.complete), g.done(y.success), g.fail(y.error), l = Bt(Jt, y, t, g)) {
              if (g.readyState = 1, p && M.trigger("ajaxSend", [g, y]), f) return g;
              y.async && 0 < y.timeout && (m = Y.setTimeout(function () {
                g.abort("timeout")
              }, y.timeout));
              try {
                f = !1, l.send(a, u)
              } catch (e) {
                if (f) throw e;
                u(-1, e)
              }
            } else u(-1, "No Transport");

            function u(e, t, n, o) {
              var r, i, a, s, d, u = t;
              f || (f = !0, m && Y.clearTimeout(m), l = void 0, _ = o || "", g.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                for (var o, r, i, a, s = e.contents, d = e.dataTypes;
                  "*" === d[0];) d.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o)
                  for (r in s)
                    if (s[r] && s[r].test(o)) {
                      d.unshift(r);
                      break
                    } if (d[0] in n) i = d[0];
                else {
                  for (r in n) {
                    if (!d[0] || e.converters[r + " " + d[0]]) {
                      i = r;
                      break
                    }
                    a = a || r
                  }
                  i = i || a
                }
                if (i) return i !== d[0] && d.unshift(i), n[i]
              }(y, g, n)), s = function (e, t, n, o) {
                var r, i, a, s, d, u = {},
                  l = e.dataTypes.slice();
                if (l[1])
                  for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                for (i = l.shift(); i;)
                  if (e.responseFields[i] && (n[e.responseFields[i]] = t), !d && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = i, i = l.shift())
                    if ("*" === i) i = d;
                    else if ("*" !== d && d !== i) {
                  if (!(a = u[d + " " + i] || u["* " + i]))
                    for (r in u)
                      if ((s = r.split(" "))[1] === i && (a = u[d + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[r] : !0 !== u[r] && (i = s[0], l.unshift(s[1]));
                        break
                      } if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                      t = a(t)
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + d + " to " + i
                      }
                    }
                }
                return {
                  state: "success",
                  data: t
                }
              }(y, s, g, r), r ? (y.ifModified && ((d = g.getResponseHeader("Last-Modified")) && (S.lastModified[c] = d), (d = g.getResponseHeader("etag")) && (S.etag[c] = d)), 204 === e || "HEAD" === y.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, i = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), g.status = e, g.statusText = (t || u) + "", r ? v.resolveWith(h, [i, u, g]) : v.rejectWith(h, [g, u, a]), g.statusCode(b), b = void 0, p && M.trigger(r ? "ajaxSuccess" : "ajaxError", [g, y, r ? i : a]), L.fireWith(h, [g, u]), p && (M.trigger("ajaxComplete", [g, y]), --S.active || S.event.trigger("ajaxStop")))
            }
            return g
          },
          getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
          },
          getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
          }
        }), S.each(["get", "post"], function (e, r) {
          S[r] = function (e, t, n, o) {
            return v(t) && (o = o || n, n = t, t = void 0), S.ajax(S.extend({
              url: e,
              type: r,
              dataType: o,
              data: t,
              success: n
            }, S.isPlainObject(e) && e))
          }
        }), S._evalUrl = function (e) {
          return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          })
        }, S.fn.extend({
          wrapAll: function (e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
            }).append(this)), this
          },
          wrapInner: function (n) {
            return v(n) ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n)
            })
          },
          wrap: function (t) {
            var n = v(t);
            return this.each(function (e) {
              S(this).wrapAll(n ? t.call(this, e) : t)
            })
          },
          unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
              S(this).replaceWith(this.childNodes)
            }), this
          }
        }), S.expr.pseudos.hidden = function (e) {
          return !S.expr.pseudos.visible(e)
        }, S.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, S.ajaxSettings.xhr = function () {
          try {
            return new Y.XMLHttpRequest
          } catch (e) {}
        };
        var $t = {
            0: 200,
            1223: 204
          },
          Kt = S.ajaxSettings.xhr();
        M.cors = !!Kt && "withCredentials" in Kt, M.ajax = Kt = !!Kt, S.ajaxTransport(function (r) {
          var i, a;
          if (M.cors || Kt && !r.crossDomain) return {
            send: function (e, t) {
              var n, o = r.xhr();
              if (o.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                for (n in r.xhrFields) o[n] = r.xhrFields[n];
              for (n in r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) o.setRequestHeader(n, e[n]);
              i = function (e) {
                return function () {
                  i && (i = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? t(0, "error") : t(o.status, o.statusText) : t($t[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                    binary: o.response
                  } : {
                    text: o.responseText
                  }, o.getAllResponseHeaders()))
                }
              }, o.onload = i(), a = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = a : o.onreadystatechange = function () {
                4 === o.readyState && Y.setTimeout(function () {
                  i && a()
                })
              }, i = i("abort");
              try {
                o.send(r.hasContent && r.data || null)
              } catch (e) {
                if (i) throw e
              }
            },
            abort: function () {
              i && i()
            }
          }
        }), S.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1)
        }), S.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function (e) {
              return S.globalEval(e), e
            }
          }
        }), S.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), S.ajaxTransport("script", function (n) {
          var o, r;
          if (n.crossDomain) return {
            send: function (e, t) {
              o = S("<script>").prop({
                charset: n.scriptCharset,
                src: n.url
              }).on("load error", r = function (e) {
                o.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
              }), k.head.appendChild(o[0])
            },
            abort: function () {
              r && r()
            }
          }
        });
        var Zt, Xt = [],
          Qt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + xt++;
            return this[e] = !0, e
          }
        }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
          var o, r, i, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
          if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + o) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return i || S.error(o + " was not called"), i[0]
          }, e.dataTypes[0] = "json", r = Y[o], Y[o] = function () {
            i = arguments
          }, n.always(function () {
            void 0 === r ? S(Y).removeProp(o) : Y[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)), i && v(r) && r(i[0]), i = r = void 0
          }), "script"
        }), M.createHTMLDocument = ((Zt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Zt.childNodes.length), S.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (M.createHTMLDocument ? ((o = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(o)) : t = k), i = !n && [], (r = T.exec(e)) ? [t.createElement(r[1])] : (r = he([e], t, i), i && i.length && S(i).remove(), S.merge([], r.childNodes)));
          var o, r, i
        }, S.fn.load = function (e, t, n) {
          var o, r, i, a = this,
            s = e.indexOf(" ");
          return -1 < s && (o = gt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : rn(t)) && (r = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
          }).done(function (e) {
            i = arguments, a.html(o ? S("<div>").append(S.parseHTML(e)).find(o) : e)
          }).always(n && function (e, t) {
            a.each(function () {
              n.apply(this, i || [e.responseText, t, e])
            })
          }), this
        }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e)
          }
        }), S.expr.pseudos.animated = function (t) {
          return S.grep(S.timers, function (e) {
            return t === e.elem
          }).length
        }, S.offset = {
          setOffset: function (e, t, n) {
            var o, r, i, a, s, d, u = S.css(e, "position"),
              l = S(e),
              c = {};
            "static" === u && (e.style.position = "relative"), s = l.offset(), i = S.css(e, "top"), d = S.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (i + d).indexOf("auto") ? (a = (o = l.position()).top, o.left) : (a = parseFloat(i) || 0, parseFloat(d) || 0), v(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (c.top = t.top - s.top + a), null != t.left && (c.left = t.left - s.left + r), "using" in t ? t.using.call(e, c) : l.css(c)
          }
        }, S.fn.extend({
          offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
              S.offset.setOffset(this, t, e)
            });
            var e, n, o = this[0];
            return o ? o.getClientRects().length ? (e = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
              top: e.top + n.pageYOffset,
              left: e.left + n.pageXOffset
            }) : {
              top: 0,
              left: 0
            } : void 0
          },
          position: function () {
            if (this[0]) {
              var e, t, n, o = this[0],
                r = {
                  top: 0,
                  left: 0
                };
              if ("fixed" === S.css(o, "position")) t = o.getBoundingClientRect();
              else {
                for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                e && e !== o && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
              }
              return {
                top: t.top - r.top - S.css(o, "marginTop", !0),
                left: t.left - r.left - S.css(o, "marginLeft", !0)
              }
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
              return e || Me
            })
          }
        }), S.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, function (t, r) {
          var i = "pageYOffset" === r;
          S.fn[t] = function (e) {
            return R(this, function (e, t, n) {
              var o;
              if (p(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === n) return o ? o[r] : e[t];
              o ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
          }
        }), S.each(["top", "left"], function (e, n) {
          S.cssHooks[n] = Be(M.pixelPosition, function (e, t) {
            if (t) return t = Ve(e, n), Je.test(t) ? S(e).position()[n] + "px" : t
          })
        }), S.each({
          Height: "height",
          Width: "width"
        }, function (a, s) {
          S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
          }, function (o, i) {
            S.fn[i] = function (e, t) {
              var n = arguments.length && (o || "boolean" != typeof e),
                r = o || (!0 === e || !0 === t ? "margin" : "border");
              return R(this, function (e, t, n) {
                var o;
                return p(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + a], o["scroll" + a], e.body["offset" + a], o["offset" + a], o["client" + a])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
              }, s, n ? e : void 0, n)
            }
          })
        }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
          }
        }), S.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
          }
        }), S.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n)
          },
          unbind: function (e, t) {
            return this.off(e, null, t)
          },
          delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
        }), S.proxy = function (e, t) {
          var n, o, r;
          if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return o = s.call(arguments, 2), (r = function () {
            return e.apply(t || this, o.concat(s.call(arguments)))
          }).guid = e.guid = e.guid || S.guid++, r
        }, S.holdReady = function (e) {
          e ? S.readyWait++ : S.ready(!0)
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = w, S.isFunction = v, S.isWindow = p, S.camelCase = V, S.type = b, S.now = Date.now, S.isNumeric = function (e) {
          var t = S.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (on = function () {
          return S
        }.apply(an, [])) || (nn.exports = on);
        var en = Y.jQuery,
          tn = Y.$;
        return S.noConflict = function (e) {
          return Y.$ === S && (Y.$ = tn), e && Y.jQuery === S && (Y.jQuery = en), S
        }, e || (Y.jQuery = Y.$ = S), S
      }, "object" === rn(nn) && "object" === rn(nn.exports) ? nn.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      } : t(e)
    }).call(this, t(2)(e))
  }]);
