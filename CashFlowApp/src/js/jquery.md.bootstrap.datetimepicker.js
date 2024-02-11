/*!
 * 
 * Bootstrap 4+ Persian Date Time Picker jQuery Plugin
 * https://github.com/Mds92/MD.BootstrapPersianDateTimePicker
 * version : 3.11.5
 * Written By Mohammad Dayyan, Mordad 1397 - 1400
 * mds.soft@gmail.com - @mdssoft
 *
 *
 */
! function(e) {
    function t(e, t, a) {
        return function(e) {
            var t, a, r, d = s(e).gy,
                c = d - 621,
                u = n(c),
                m = o(d, 3, u.march);
            if ((r = e - m) >= 0) {
                if (r <= 185) return {
                    jy: c,
                    jm: a = 1 + i(r, 31),
                    jd: t = l(r, 31) + 1
                };
                r -= 186
            } else c -= 1, r += 179, 1 === u.leap && (r += 1);
            return a = 7 + i(r, 30), t = l(r, 30) + 1, {
                jy: c,
                jm: a,
                jd: t
            }
        }(o(e, t, a))
    }

    function a(e, t, a) {
        return s(function(e, t, a) {
            var r = n(e);
            return o(r.gy, 3, r.march) + 31 * (t - 1) - i(t, 7) * (t - 7) + a - 1
        }(e, t, a))
    }

    function r(e) {
        return 0 === n(e).leap
    }

    function n(e) {
        var t, a, r, n, o = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178],
            s = o.length,
            d = e + 621,
            c = -14,
            u = o[0],
            m = 1;
        if (e < u || e >= o[s - 1]) throw new Error("Invalid Jalali year " + e);
        for (n = 1; n < s && (m = (t = o[n]) - u, !(e < t)); n += 1) c = c + 8 * i(m, 33) + i(l(m, 33), 4), u = t;
        c = c + 8 * i(r = e - u, 33) + i(l(r, 33) + 3, 4), 4 === l(m, 33) && m - r == 4 && (c += 1);
        var g = 20 + c - (i(d, 4) - i(3 * (i(d, 100) + 1), 4) - 150);
        return m - r < 6 && (r = r - m + 33 * i(m + 4, 33)), -1 === (a = l(l(r + 1, 33) - 1, 4)) && (a = 4), {
            leap: a,
            gy: d,
            march: g
        }
    }

    function o(e, t, a) {
        var r = i(1461 * (e + i(t - 8, 6) + 100100), 4) + i(153 * l(t + 9, 12) + 2, 5) + a - 34840408;
        return r = r - i(3 * i(e + 100100 + i(t - 8, 6), 100), 4) + 752
    }

    function s(e) {
        var t;
        t = (t = 4 * e + 139361631) + 4 * i(3 * i(4 * e + 183187720, 146097), 4) - 3908;
        var a = 5 * i(l(t, 1461), 4) + 308,
            r = i(l(a, 153), 5) + 1,
            n = l(i(a, 153), 12) + 1;
        return {
            gy: i(t, 1461) - 100100 + i(8 - n, 6),
            gm: n,
            gd: r
        }
    }

    function i(e, t) {
        return ~~(e / t)
    }

    function l(e, t) {
        return e - ~~(e / t) * t
    }
    var d = "data-mdpersiandatetimepicker",
        c = "[" + d + "]",
        u = "data-mdpersiandatetimepicker-group",
        m = "data-mdpersiandatetimepicker-element",
        g = "[" + m + "]",
        h = "data-mdpersiandatetimepicker-container",
        D = "[" + h + "]",
        b = "MdPersianDateTimePicker",
        p = !1,
        f = `\n<div class="modal fade mds-bootstrap-persian-datetime-picker-modal" tabindex="-1" role="dialog" \n  aria-labelledby="mdDateTimePickerModalLabel" aria-hidden="true" ${m}>\n  <div class="modal-dialog modal-xl modal-dialog-centered" data-buttonselector="">\n    <div class="modal-content">\n      <div class="modal-body" data-name="mds-datetimepicker-body">\n        MD DateTimePicker Html\n      </div>\n    </div>\n  </div>\n</div>\n`,
        y = `\n<div class="popover mds-bootstrap-persian-datetime-picker-popover" role="tooltip" ${m}>    \n    <div class="arrow"></div>    \n    <h3 class="popover-header text-center" data-name="mds-datetimepicker-title"></h3>    \n    <div class="popover-body p-0" data-name="mds-datetimepicker-body"></div>\n</div>`,
        v = '\n<table class="table table-sm table-borderless text-center p-0 m-0 {{rtlCssClass}}">\n    <tr>\n        <th>            \n            <a href="javascript:void(0)" title="{{previousText}}" data-year="{{latestPreviousYear}}" data-yearrangebuttonchange="-1"> &lt; </a>\n        </th>\n        <th>\n            {{yearsRangeText}}\n        </th>\n        <th>            \n            <a href="javascript:void(0)" title="{{nextText}}" data-year="{{latestNextYear}}" data-yearrangebuttonchange="1"> &gt; </a>\n        </th>\n    </tr>       \n</table>',
        S = `\n<div class="mds-bootstrap-persian-datetime-picker-container {{rtlCssClass}}" ${h}>\n\n\t<div class="select-year-inline-box w-0" data-name="dateTimePickerYearsButtonsContainer">        \n    </div>\n    <div class="select-year-box w-0" data-name="dateTimePickerYearsToSelectContainer">        \n    </div>\n\n    <table class="table table-sm text-center p-0 m-0">\n        <thead>\n            <tr {{selectedDateStringAttribute}}>\n                <th colspan="100" data-selecteddatestring>{{selectedDateString}}</th>\n            </tr>            \n        </thead>\n        <tbody>\n            <tr>\n                {{monthsTdHtml}}\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr {{timePickerAttribute}}>\n                <td colspan="100" class="border-0">\n                    <table class="table table-sm table-borderless">\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <input type="text" title="{{hourText}}" value="{{hour}}" maxlength="2" data-clock="hour" />\n                                </td>\n                                <td>:</td>\n                                <td>\n                                    <input type="text" title="{{minuteText}}" value="{{minute}}" maxlength="2" data-clock="minute" />\n                                </td>\n                                <td>:</td>\n                                <td>\n                                    <input type="text" title="{{secondText}}" value="{{second}}" maxlength="2" data-clock="second" />\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <td colspan="100">\n                    <button type="button" class="btn btn-light" title="{{goTodayText}}" data-go-today>{{todayDateString}}</button>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</div>`;
    triggerChangeCalling = !1;
    var M = "قبلی",
        C = "بعدی",
        w = "Previous",
        N = "Next",
        T = {
            am: 0,
            pm: 1,
            none: 2
        },
        x = ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        k = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
        B = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        G = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        P = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        A = ["یک شنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"];

    function E(e) {
        return e.parents(".modal" + g + ":first").length > 0
    }

    function Y(t) {
        var a = t.parents(c + ":first");
        return a.length <= 0 && (a = t.parents(g + ":first"), a = e('[aria-describedby="' + a.attr("id") + '"]')), a
    }

    function F(t) {
        return e("#" + t.attr("aria-describedby"))
    }

    function H(e) {
        return null != e.attr("aria-describedby")
    }

    function I(t) {
        if (E(t)) {
            var a = t.parents("[data-buttonselector]:first").attr("data-buttonselector");
            return e('[data-uniqueid="' + a + '"]').data(b)
        }
        return Y(t).data(b)
    }

    function O(e) {
        return e.data(b)
    }

    function $(e, t, a) {
        if (t) {
            var r = e.parents(c + ":first").find('[data-name="dateTimePickerYearsButtonsContainer"]');
            r.html(a), r.removeClass("w-0")
        } else ! function(e) {
            return null != e.attr("aria-describedby")
        }(e) ? e.parents(g + ":first").find('[data-name="mds-datetimepicker-title"]').html(a) : F(e).find('[data-name="mds-datetimepicker-title"]').html(a)
    }

    function L(e, t) {
        return Y(e).data(b, t)
    }

    function R(t, a) {
        var r = Se(a),
            n = a.inLine ? t.parents(c + ":first") : t.parents('[data-name="mds-datetimepicker-body"]:first');
        $(t, a.inLine, e(r).find("[data-selecteddatestring]").text().trim()), n.html(r)
    }

    function j(e) {
        return null == e.selectedDate ? "" : e.rangeSelector && null != e.rangeSelectorStartDate && null != e.rangeSelectorEndDate ? be(e.isGregorian ? de(e.rangeSelectorStartDate) : ue(e.rangeSelectorStartDate), e.textFormat, e.isGregorian, e.englishNumber) + " - " + be(e.isGregorian ? de(e.rangeSelectorEndDate) : ue(e.rangeSelectorEndDate), e.textFormat, e.isGregorian, e.englishNumber) : be(e.isGregorian ? de(e.selectedDate) : ue(e.selectedDate), e.textFormat, e.isGregorian, e.englishNumber)
    }

    function W(e) {
        return null == e.selectedDate ? "" : e.rangeSelector && null != e.rangeSelectorStartDate && null != e.rangeSelectorEndDate ? be(de(e.rangeSelectorStartDate), e.dateFormat, e.isGregorian, e.englishNumber) + " - " + be(de(e.rangeSelectorEndDate), e.dateFormat, e.isGregorian, e.englishNumber) : be(de(e.selectedDate), e.dateFormat, e.isGregorian, e.englishNumber)
    }

    function J(t) {
        var a = e(t.targetTextSelector);
        if (a.length > 0) switch (a[0].tagName.toLowerCase()) {
            case "input":
                a.val(j(t)), triggerChangeCalling = !0, a.trigger("change");
                break;
            default:
                a.text(j(t)), triggerChangeCalling = !0, a.trigger("change")
        }
        var r = e(t.targetDateSelector);
        if (r.length > 0) switch (r[0].tagName.toLowerCase()) {
            case "input":
                r.val(U(W(t))), triggerChangeCalling = !0, r.trigger("change");
                break;
            default:
                r.text(U(W(t))), triggerChangeCalling = !0, r.trigger("change")
        }
    }

    function q(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function V(e) {
        if (!e) return "";
        var t = e.toString().trim();
        return t ? t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/0/gim, "۰")).replace(/1/gim, "۱")).replace(/2/gim, "۲")).replace(/3/gim, "۳")).replace(/4/gim, "۴")).replace(/5/gim, "۵")).replace(/6/gim, "۶")).replace(/7/gim, "۷")).replace(/8/gim, "۸")).replace(/9/gim, "۹") : ""
    }

    function U(e) {
        if (!e) return "";
        var t = e.toString().trim();
        return t ? t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/۰/gim, "0")).replace(/۱/gim, "1")).replace(/۲/gim, "2")).replace(/۳/gim, "3")).replace(/۴/gim, "4")).replace(/۵/gim, "5")).replace(/۶/gim, "6")).replace(/۷/gim, "7")).replace(/۸/gim, "8")).replace(/۹/gim, "9") : ""
    }

    function z(e, t) {
        return t ? G[e] : B[e]
    }

    function Q(t, a, r) {
        var n = e.extend({}, t);
        return n.day = 1, n.month += a, r ? de(ie(n)) : (n.month <= 0 && (n.month = 12, n.year--), n.month > 12 && (n.year++, n.month = 1), n)
    }

    function K(e, t, a) {
        return a ? ie(Q(de(e), t, a)) : se(Q(ue(e), t, a))
    }

    function X(e, t) {
        return t ? P[e] : A[e]
    }

    function Z(e, t) {
        return t ? k[e] : x[e]
    }

    function _(e, t) {
        return e > 12 ? t ? "PM" : "ب.ظ" : t ? "AM" : "ق.ظ"
    }

    function ee(e) {
        e && (e.popover("hide"), e.modal("hide"))
    }

    function te(e) {
        return Number(De(e.year) + De(e.month) + De(e.day))
    }

    function ae(e, t, a) {
        return Number(De(e) + De(t) + De(a))
    }

    function re(e) {
        return te(de(e))
    }

    function ne(e) {
        return Number(De(e.getFullYear()) + De(e.getMonth()) + De(e.getDate()))
    }

    function oe(e, t, r, n, o, s) {
        q(n) || (n = 0), q(o) || (o = 0), q(s) || (s = 0);
        var i = a(e, t, r);
        return new Date(i.gy, i.gm - 1, i.gd, n, o, s)
    }

    function se(e) {
        e.hour || (e.hour = 0), e.minute || (e.minute = 0), e.second || (e.second = 0);
        var t = a(e.year, e.month, e.day);
        return new Date(t.gy, t.gm - 1, t.gd, e.hour, e.minute, e.second)
    }

    function ie(e) {
        return new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second)
    }

    function le(e, t, a) {
        var r = ce(e);
        if (a.isGregorian) t = new Date(r.year, r.month - 1, r.day, t.getHours(), t.getMinutes(), t.getSeconds());
        else {
            var n = ue(t);
            n.year = r.year, n.month = r.month, n.day = r.day, t = se(n)
        }
        return t
    }

    function de(e) {
        return {
            year: e.getFullYear(),
            month: e.getMonth() + 1,
            day: e.getDate(),
            hour: e.getHours(),
            minute: e.getMinutes(),
            second: e.getSeconds(),
            dayOfWeek: e.getDay()
        }
    }

    function ce(e) {
        return {
            year: Math.floor(e / 1e4),
            month: Math.floor(e / 100) % 100,
            day: e % 100,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    function ue(e) {
        var a = t(e.getFullYear(), e.getMonth() + 1, e.getDate());
        return {
            year: a.jy,
            month: a.jm,
            day: a.jd,
            hour: e.getHours(),
            minute: e.getMinutes(),
            second: e.getSeconds(),
            dayOfWeek: e.getDay()
        }
    }

    function me(e, t) {
        var a = 31;
        return t > 6 && t < 12 ? a = 30 : 12 == t && (a = r(e) ? 30 : 29), a
    }

    function ge(e, t) {
        return new Date(e, t + 1, 0).getDate()
    }

    function he(e) {
        return new Date(e.getTime())
    }

    function De(e, t) {
        if (null == e || "" == e) return "00";
        null != t && "" != t || (t = "00");
        var a = String(t).length - String(e).length + 1;
        return a > 0 ? new Array(a).join("0") + e : e
    }

    function be(e, t, a, r) {
        var n;
        return a && (r = !0), t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/yyyy/gm, e.year)).replace(/yy/gm, e.year % 100)).replace(/MMMM/gm, z(e.month - 1, a))).replace(/MM/gm, De(e.month))).replace(/M/gm, e.month)).replace(/dddd/gm, X(e.dayOfWeek, a))).replace(/dd/gm, De(e.day))).replace(/d/gm, e.day)).replace(/HH/gm, De(e.hour))).replace(/H/gm, e.hour)).replace(/hh/gm, De((n = e.hour) > 12 ? n - 12 : n))).replace(/h/gm, De(e.hour))).replace(/mm/gm, De(e.minute))).replace(/m/gm, e.minute)).replace(/ss/gm, De(e.second))).replace(/s/gm, e.second)).replace(/fff/gm, De(e.millisecond, "000"))).replace(/ff/gm, De(e.millisecond / 10))).replace(/f/gm, e.millisecond / 100)).replace(/tt/gm, _(e.hour, a))).replace(/t/gm, _(e.hour, a)[0]), r || (t = V(t)), t
    }

    function pe(e, t) {
        var a = he(e);
        if (t) {
            var r = new Date(a.getFullYear(), a.getMonth() - 1, 1),
                n = ge(r.getFullYear(), r.getMonth());
            return new Date(r.getFullYear(), r.getMonth(), n)
        }
        var o = ue(a);
        return o.month += -1, o.month <= 0 ? (o.month = 12, o.year--) : o.month > 12 && (o.year++, o.month = 1), oe(o.year, o.month, me(o.year, o.month))
    }

    function fe(e, t) {
        var a = he(e);
        if (t) {
            var r = new Date(a.getFullYear(), a.getMonth() + 1, 1);
            return new Date(r.getFullYear(), r.getMonth(), 1)
        }
        var n = ue(a);
        return n.month += 1, n.month <= 0 && (n.month = 12, n.year--), n.month > 12 && (n.year++, n.month = 1), oe(n.year, n.month, 1)
    }

    function ye(e, t) {
        if (e) return t.isGregorian ? function(e) {
            if (!(e = U(e))) {
                var t = new Date;
                return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
            }
            return new Date(e)
        }(e) : function(e, t) {
            t || (t = "/|-"), t = new RegExp(t, "img"), e = U(e);
            var a = 0,
                r = 0,
                n = 0,
                o = 0,
                s = 0,
                i = 0,
                l = 0,
                d = T.none,
                c = t.test(e);
            if ((e = "-" + (e = (e = (e = (e = (e = (e = e.replace(/&nbsp;/gim, " ")).replace(/\s+/gim, "-")).replace(/\\/gim, "-")).replace(/ك/gim, "ک")).replace(/ي/gim, "ی")).replace(t, "-")) + "-").indexOf("ق.ظ") > -1 ? d = T.AM : e.indexOf("ب.ظ") > -1 && (d = T.PM), e.indexOf(":") > -1) {
                o = (e = e.replace(/-*:-*/gim, ":")).match(/-\d{1,2}(?=:)/gim)[0].replace(/\D+/, "");
                var u = e.match(/:\d{1,2}(?=:?)/gim);
                s = u[0].replace(/\D+/, ""), null != u[1] && (i = u[1].replace(/\D+/, "")), null != u[2] && (l = u[2].replace(/\D+/, ""))
            }
            if (c) {
                var m = e.match(/-\d{1,2}(?=-\d{1,2}[^:]|-)/gim);
                a = m[0].replace(/\D+/, ""), n = m[1].replace(/\D+/, ""), r = e.match(/-\d{2,4}(?=-\d{1,2}[^:])/gim)[0].replace(/\D+/, "")
            } else {
                for (var g = 1; g < 12; g++) {
                    var h = z(g - 1, !1);
                    if (!(e.indexOf(h) > -1)) {
                        a = g;
                        break
                    }
                }
                var D = e.match(/-\d{1,2}(?=-)/gim);
                null != D && (n = D[0].replace(/\D+/, ""), e = e.replace(new RegExp("-" + n + "(?=-)", "img"), "-"));
                var b = e.match(/-\d{4}(?=-)/gim);
                (null != b || null != (b = e.match(/-\d{2,4}(?=-)/gim))) && (r = b[0].replace(/\D+/, ""))
            }
            var p = Number(r),
                f = Number(a),
                y = Number(n),
                v = Number(o),
                S = Number(s),
                M = Number(i);
            switch (Number(l), p <= 0 && (p = persianDateTime[0]), f <= 0 && (f = persianDateTime[1]), y <= 0 && (y = persianDateTime[2]), d) {
                case T.PM:
                    v < 12 && (v += 12)
            }
            return oe(p, f, y, v, S, M)
        }(e)
    }

    function ve(t, a) {
        var r, n, o = he(t.selectedDateToShow),
            s = '\n<table class="table table-sm text-center p-0 m-0">\n    <tbody>\n        {{yearsToSelectHtml}}\n    </tbody>            \n</table>',
            i = "",
            l = {},
            d = {},
            c = 1;
        if (t.isGregorian ? (d = de(o), l = de(new Date), r = t.disableBeforeDate ? de(t.disableBeforeDate) : void 0, n = t.disableAfterDate ? de(t.disableAfterDate) : void 0) : (d = ue(o), l = ue(new Date), r = t.disableBeforeDate ? ue(t.disableBeforeDate) : void 0, n = t.disableAfterDate ? ue(t.disableAfterDate) : void 0), (t.fromDate || t.toDate) && t.groupId) {
            var m = e("[" + u + '="' + t.groupId + '"][data-toDate]'),
                g = e("[" + u + '="' + t.groupId + '"][data-fromDate]');
            if (t.fromDate) {
                var h = O(m).selectedDate;
                n = h ? t.isGregorian ? de(h) : ue(h) : void 0
            } else if (t.toDate) {
                var D = O(g).selectedDate;
                r = D ? t.isGregorian ? de(D) : ue(D) : void 0
            }
        }
        c = 1;
        for (var b = a || l.year - t.yearOffset, p = a ? a + 2 * t.yearOffset : l.year + t.yearOffset, f = b; f < p; f++)
            if (!(t.disableBeforeToday && f < l.year || t.disableAfterToday && f > l.year || null != r && null != r.year && f < r.year || null != n && null != n.year && f > n.year)) {
                var y = ce(ae(f, d.month, me(f, d.month))),
                    v = "",
                    S = t.englishNumber ? f.toString() : V(f),
                    M = ae(f, d.month, 1);
                null != r && null != r.year && y.year < r.year && (v = "disabled"), null != n && null != n.year && y.year > n.year && (v = "disabled"), t.disableBeforeToday && y.year < l.year && (v = "disabled"), t.disableAfterToday && y.year > l.year && (v = "disabled"), 1 == c && (i += "<tr>"), i += `\n<td class="text-center" ${d.year == f ? "selected-year" : ""}>\n    <button class="btn btn-sm btn-light" type="button" data-changedatebutton data-number="${M}" ${v}>${S}</button>        \n</td>\n`, 5 == c && (i += "</tr>"), ++c > 5 && (c = 1)
            }
        return {
            yearStart: b,
            yearEnd: p,
            html: s = s.replace(/{{yearsToSelectHtml}}/gim, i)
        }
    }

    function Se(t) {
        var a = he(t.selectedDateToShow),
            r = S;
        r = (r = (r = (r = (r = (r = (r = r.replace(/{{rtlCssClass}}/gim, t.isGregorian ? "" : "rtl")).replace(/{{selectedDateStringAttribute}}/gim, t.inLine ? "" : "hidden")).replace(/{{hourText}}/gim, t.isGregorian ? "Hour" : "ساعت")).replace(/{{minuteText}}/gim, t.isGregorian ? "Minute" : "دقیقه")).replace(/{{secondText}}/gim, t.isGregorian ? "Second" : "ثانیه")).replace(/{{goTodayText}}/gim, t.isGregorian ? "Go Today" : "برو به امروز")).replace(/{{timePickerAttribute}}/gim, t.enableTimePicker ? "" : "hidden");
        var n, o, s = "",
            i = "",
            l = {},
            d = t.rangeSelector && t.rangeSelectorStartDate ? he(t.rangeSelectorStartDate) : void 0,
            c = t.rangeSelector && t.rangeSelectorEndDate ? he(t.rangeSelectorEndDate) : void 0,
            m = {},
            g = {},
            h = {},
            D = {};
        if (t.isGregorian ? (D = de(a), l = de(new Date), m = null != d ? de(d) : void 0, g = null != c ? de(c) : void 0, h = null == t.selectedDate ? l : de(t.selectedDate), n = t.disableBeforeDate ? de(t.disableBeforeDate) : void 0, o = t.disableAfterDate ? de(t.disableAfterDate) : void 0) : (D = ue(a), l = ue(new Date), m = null != d ? ue(d) : void 0, g = null != c ? ue(c) : void 0, h = null == t.selectedDate ? l : ue(t.selectedDate), n = t.disableBeforeDate ? ue(t.disableBeforeDate) : void 0, o = t.disableAfterDate ? ue(t.disableAfterDate) : void 0), (t.fromDate || t.toDate) && t.groupId) {
            var b = e("[" + u + '="' + t.groupId + '"][data-toDate]'),
                p = e("[" + u + '="' + t.groupId + '"][data-fromDate]');
            if (t.fromDate && b.length > 0) {
                var f = O(b).selectedDate;
                o = f ? t.isGregorian ? de(f) : ue(f) : void 0
            } else if (t.toDate && p.length > 0) {
                var y = O(p).selectedDate;
                n = y ? t.isGregorian ? de(y) : ue(y) : void 0
            }
        }
        s = t.rangeSelector && null != m && null != g ? `${X(m.dayOfWeek, t.isGregorian)}، ${m.day} ${z(m.month - 1, t.isGregorian)} ${m.year} - \n                ${X(g.dayOfWeek, t.isGregorian)}، ${g.day} ${z(g.month - 1, t.isGregorian)} ${g.year}` : `${X(h.dayOfWeek, t.isGregorian)}، ${h.day} ${z(h.month - 1, t.isGregorian)} ${h.year}`, i = `${t.isGregorian ? "Today," : "امروز،"} ${l.day} ${z(l.month - 1, t.isGregorian)} ${l.year}`, t.englishNumber || (s = V(s), i = V(i)), null != o && o.year <= D.year && o.month < D.month && (a = t.isGregorian ? new Date(o.year, o.month - 1, 1) : oe(o.year, o.month, o.day)), null != n && n.year >= D.year && n.month > D.month && (a = t.isGregorian ? new Date(n.year, n.month - 1, 1) : oe(n.year, n.month, n.day));
        for (var v = "", M = t.monthsToShow[1] <= 0 ? 0 : t.monthsToShow[1], C = t.monthsToShow[0] <= 0 ? 0 : t.monthsToShow[0], w = C *= -1; w < 0; w++) t.selectedDateToShow = K(he(a), w), v += Me(t, !1, !0);
        t.selectedDateToShow = he(a), v += Me(t, !1, !1);
        for (var N = 1; N <= M; N++) t.selectedDateToShow = K(he(a), N), v += Me(t, !0, !1);
        var T = Math.abs(C) + 1 + M,
            x = T > 1 ? "width: " + (100 / T).toString() + "%;" : "";
        return v = v.replace(/{{monthTdStyle}}/gim, x), r = (r = (r = (r = (r = (r = r.replace(/{{selectedDateString}}/gim, s)).replace(/{{todayDateString}}/gim, i)).replace(/{{hour}}/gim, D.hour)).replace(/{{minute}}/gim, D.minute)).replace(/{{second}}/gim, D.second)).replace(/{{monthsTdHtml}}/gim, v)
    }

    function Me(t, r, n) {
        var o = he(t.selectedDateToShow),
            s = he(o),
            i = null != t.selectedDate ? he(t.selectedDate) : void 0,
            l = r || n,
            d = '\n<td class="border-0" style="{{monthTdStyle}}" {{monthTdAttribute}} data-td-month>\n\t<table class="table table-sm table-striped table-borderless">\n\t\t<thead>\n\t\t\t<tr {{monthNameAttribute}}>\n\t\t\t\t<th colspan="100" class="border-0">\n\t\t\t\t\t<table class="table table-sm table-borderless">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-light"> {{currentMonthInfo}} </button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t</table>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t\t<tr {{theadSelectDateButtonTrAttribute}}>\n                <td colspan="100" class="border-0">\n                    <table class="table table-sm table-borderless">\n                        <tr>\n                            <th>\n                                <button type="button" class="btn btn-light btn-sm" title="{{previousYearText}}" data-changedatebutton data-number="{{previousYearButtonDateNumber}}" {{previousYearButtonDisabledAttribute}}> &lt;&lt; </button>\n                            </th>\n                            <th>\n                                <button type="button" class="btn btn-light btn-sm" title="{{previousMonthText}}" data-changedatebutton data-number="{{previousMonthButtonDateNumber}}" {{previousMonthButtonDisabledAttribute}}> &lt; </button>\n                            </th>\n                            <th style="width: 120px;">\n                                <div class="dropdown">\n                                    <button type="button" class="btn btn-light btn-sm dropdown-toggle" id="mdsBootstrapPersianDatetimePickerMonthSelectorButon"\n                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                        {{selectedMonthName}}\n                                    </button>\n                                    <div class="dropdown-menu" aria-labelledby="mdsBootstrapPersianDatetimePickerMonthSelectorButon">\n                                        <a class="dropdown-item {{selectMonth1ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth1DateNumber}}">{{monthName1}}</a>\n                                        <a class="dropdown-item {{selectMonth2ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth2DateNumber}}">{{monthName2}}</a>\n                                        <a class="dropdown-item {{selectMonth3ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth3DateNumber}}">{{monthName3}}</a>\n                                        <div class="dropdown-divider"></div>\n                                        <a class="dropdown-item {{selectMonth4ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth4DateNumber}}">{{monthName4}}</a>\n                                        <a class="dropdown-item {{selectMonth5ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth5DateNumber}}">{{monthName5}}</a>\n                                        <a class="dropdown-item {{selectMonth6ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth6DateNumber}}">{{monthName6}}</a>\n                                        <div class="dropdown-divider"></div>\n                                        <a class="dropdown-item {{selectMonth7ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth7DateNumber}}">{{monthName7}}</a>\n                                        <a class="dropdown-item {{selectMonth8ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth8DateNumber}}">{{monthName8}}</a>\n                                        <a class="dropdown-item {{selectMonth9ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth9DateNumber}}">{{monthName9}}</a>\n                                        <div class="dropdown-divider"></div>\n                                        <a class="dropdown-item {{selectMonth10ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth10DateNumber}}">{{monthName10}}</a>\n                                        <a class="dropdown-item {{selectMonth11ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth11DateNumber}}">{{monthName11}}</a>\n                                        <a class="dropdown-item {{selectMonth12ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth12DateNumber}}">{{monthName12}}</a>\n                                    </div>\n                                </div>\n                            </th>\n                            <th style="width: 50px;">\n                                <button type="button" class="btn btn-light btn-sm" select-year-button {{selectYearButtonDisabledAttribute}}>{{selectedYear}}</button>\n                            </th>\n                            <th>\n                                <button type="button" class="btn btn-light btn-sm" title="{{nextMonthText}}" data-changedatebutton data-number="{{nextMonthButtonDateNumber}}" {{nextMonthButtonDisabledAttribute}}> &gt; </button>\n                            </th>\n                            <th>\n                                <button type="button" class="btn btn-light btn-sm" title="{{nextYearText}}" data-changedatebutton data-number="{{nextYearButtonDateNumber}}" {{nextYearButtonDisabledAttribute}}> &gt;&gt; </button>\n                            </th>\n                        </tr>\n                    </table>\n                </td>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody class="days">\n            <tr>\n                <td class="{{weekDayShortName1CssClass}}">{{weekDayShortName1}}</td>\n                <td>{{weekDayShortName2}}</td>\n                <td>{{weekDayShortName3}}</td>\n                <td>{{weekDayShortName4}}</td>\n                <td>{{weekDayShortName5}}</td>\n                <td>{{weekDayShortName6}}</td>\n                <td class="{{weekDayShortName7CssClass}}">{{weekDayShortName7}}</td>\n            </tr>\n        {{daysHtml}}\n\t\t</tbody>\n\t</table>\n</td>\n    ';
        d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = d.replace(/{{monthTdAttribute}}/gim, r ? "data-next-month" : n ? "data-prev-month" : "")).replace(/{{monthNameAttribute}}/gim, l ? "" : "hidden")).replace(/{{theadSelectDateButtonTrAttribute}}/gim, t.inLine || !l ? "" : "hidden")).replace(/{{weekDayShortName1CssClass}}/gim, t.isGregorian ? "text-danger" : "")).replace(/{{weekDayShortName7CssClass}}/gim, t.isGregorian ? "" : "text-danger")).replace(/{{previousYearText}}/gim, t.isGregorian ? "Previous Year" : "سال قبل")).replace(/{{previousMonthText}}/gim, t.isGregorian ? "Previous Month" : "ماه قبل")).replace(/{{nextMonthText}}/gim, t.isGregorian ? "Next Month" : "ماه بعد")).replace(/{{nextYearText}}/gim, t.isGregorian ? "Next Year" : "سال بعد")).replace(/{{monthName1}}/gim, z(0, t.isGregorian))).replace(/{{monthName2}}/gim, z(1, t.isGregorian))).replace(/{{monthName3}}/gim, z(2, t.isGregorian))).replace(/{{monthName4}}/gim, z(3, t.isGregorian))).replace(/{{monthName5}}/gim, z(4, t.isGregorian))).replace(/{{monthName6}}/gim, z(5, t.isGregorian))).replace(/{{monthName7}}/gim, z(6, t.isGregorian))).replace(/{{monthName8}}/gim, z(7, t.isGregorian))).replace(/{{monthName9}}/gim, z(8, t.isGregorian))).replace(/{{monthName10}}/gim, z(9, t.isGregorian))).replace(/{{monthName11}}/gim, z(10, t.isGregorian))).replace(/{{monthName12}}/gim, z(11, t.isGregorian))).replace(/{{weekDayShortName1}}/gim, Z(0, t.isGregorian))).replace(/{{weekDayShortName2}}/gim, Z(1, t.isGregorian))).replace(/{{weekDayShortName3}}/gim, Z(2, t.isGregorian))).replace(/{{weekDayShortName4}}/gim, Z(3, t.isGregorian))).replace(/{{weekDayShortName5}}/gim, Z(4, t.isGregorian))).replace(/{{weekDayShortName6}}/gim, Z(5, t.isGregorian))).replace(/{{weekDayShortName7}}/gim, Z(6, t.isGregorian));
        var c, m, g, h, D, b, p, f = 0,
            y = 0,
            v = 0,
            S = 0,
            M = 0,
            C = {},
            w = {},
            N = e("<tr />"),
            T = e("<td />"),
            x = "",
            k = 0,
            B = "",
            G = 0,
            P = 0,
            A = 0,
            E = 0,
            Y = t.rangeSelector && null != t.rangeSelectorStartDate ? he(t.rangeSelectorStartDate) : void 0,
            F = t.rangeSelector && null != t.rangeSelectorEndDate ? he(t.rangeSelectorEndDate) : void 0,
            H = 0,
            I = 0,
            $ = "0",
            L = "",
            R = {
                month1DateNumber: 0,
                month2DateNumber: 0,
                month3DateNumber: 0,
                month4DateNumber: 0,
                month5DateNumber: 0,
                month6DateNumber: 0,
                month7DateNumber: 0,
                month8DateNumber: 0,
                month9DateNumber: 0,
                month10DateNumber: 0,
                month11DateNumber: 0,
                month12DateNumber: 0,
                selectMonth1ButtonCssClass: "",
                selectMonth2ButtonCssClass: "",
                selectMonth3ButtonCssClass: "",
                selectMonth4ButtonCssClass: "",
                selectMonth5ButtonCssClass: "",
                selectMonth6ButtonCssClass: "",
                selectMonth7ButtonCssClass: "",
                selectMonth8ButtonCssClass: "",
                selectMonth9ButtonCssClass: "",
                selectMonth10ButtonCssClass: "",
                selectMonth11ButtonCssClass: "",
                selectMonth12ButtonCssClass: ""
            },
            j = [],
            W = [],
            J = [],
            U = {},
            K = {},
            _ = "",
            ee = "",
            ne = "",
            oe = "",
            se = "";
        if (t.isGregorian) {
            for (w = de(s), C = de(new Date), U = t.disableBeforeDate ? de(t.disableBeforeDate) : void 0, K = t.disableAfterDate ? de(t.disableAfterDate) : void 0, c = new Date(w.year, w.month - 1, 1).getDay(), M = i ? te(de(i)) : 0, D = ge(w.year, w.month - 1), numberOfDaysInPreviousMonth = ge(w.year, w.month - 2), G = te(de(pe(s, !0))), P = te(de(fe(s, !0))), s = he(o), A = te(de(new Date(s.setFullYear(s.getFullYear() - 1)))), s = he(o), E = te(de(new Date(s.setFullYear(s.getFullYear() + 1)))), s = he(o), H = t.rangeSelector && Y ? re(Y) : 0, I = t.rangeSelector && F ? re(F) : 0, f = 1; f <= 12; f++) R["month" + f.toString() + "DateNumber"] = te(de(new Date(s.setMonth(f - 1)))), s = he(o);
            for (f = 0; f < t.holiDays.length; f++) j.push(te(de(t.holiDays[f])));
            for (f = 0; f < t.disabledDates.length; f++) W.push(te(de(t.disabledDates[f])));
            for (f = 0; f < t.specialDates.length; f++) J.push(te(de(t.specialDates[f])))
        } else {
            for (w = ue(s), C = ue(new Date), U = t.disableBeforeDate ? ue(t.disableBeforeDate) : void 0, K = t.disableAfterDate ? ue(t.disableAfterDate) : void 0, c = function(e, t, r, n, o, s) {
                    q(n) || (n = 0), q(o) || (o = 0), q(s) || (s = 0);
                    var i = a(e, t, r);
                    return ue(new Date(i.gy, i.gm - 1, i.gd, n, o, s))
                }(w.year, w.month, 1, 0, 0, 0).dayOfWeek, M = i ? te(ue(i)) : 0, D = me(w.year, w.month), numberOfDaysInPreviousMonth = me(w.year - 1, w.month - 1), G = te(ue(pe(s, !1))), P = te(ue(fe(s = he(o), !1))), s = he(o), A = ae(w.year - 1, w.month, w.day), E = ae(w.year + 1, w.month, w.day), s = he(o), H = t.rangeSelector && Y ? te(ue(Y)) : 0, I = t.rangeSelector && F ? te(ue(F)) : 0, f = 1; f <= 12; f++) R["month" + f.toString() + "DateNumber"] = ae(w.year, f, me(w.year, f)), s = he(o);
            for (f = 0; f < t.holiDays.length; f++) j.push(te(ue(t.holiDays[f])));
            for (f = 0; f < t.disabledDates.length; f++) W.push(te(ue(t.disabledDates[f])));
            for (f = 0; f < t.specialDates.length; f++) J.push(te(ue(t.specialDates[f])))
        }
        if ((t.fromDate || t.toDate) && t.groupId) {
            var ie = e("[" + u + '="' + t.groupId + '"][data-toDate]'),
                le = e("[" + u + '="' + t.groupId + '"][data-fromDate]');
            if (t.fromDate && ie.length > 0) {
                var ce = O(ie).selectedDate;
                K = ce ? t.isGregorian ? de(ce) : ue(ce) : void 0
            } else if (t.toDate && le.length > 0) {
                var be = O(le).selectedDate;
                U = be ? t.isGregorian ? de(be) : ue(be) : void 0
            }
        }
        if (h = te(C), m = t.englishNumber ? w.year : V(w.year), b = U ? te(U) : void 0, p = K ? te(K) : void 0, B = z(w.month - 1, t.isGregorian) + " " + w.year.toString(), t.englishNumber || (B = V(B)), g = z(w.month - 1, t.isGregorian), t.yearOffset <= 0 && (_ = "disabled", se = "disabled", ne = "disabled"), 6 != c) {
            t.isGregorian && c--;
            var ye = Q(w, -1, t.isGregorian);
            for (f = numberOfDaysInPreviousMonth - c; f <= numberOfDaysInPreviousMonth; f++) k = ae(ye.year, ye.month, f), $ = t.englishNumber ? De(f) : V(De(f)), T = e("<td data-nm />").attr("data-number", k).html($), t.rangeSelector && (k == H || k == I ? T.addClass("selected-range-days-start-end") : H > 0 && I > 0 && k > H && k < I && T.addClass("selected-range-days")), t.isGregorian || 6 != S ? t.isGregorian && 0 == S && T.addClass("text-danger") : T.addClass("text-danger"), N.append(T), v++, ++S >= 7 && (S = 0, x += N[0].outerHTML, isTrAppended = !0, N = e("<tr />"))
        }
        for (f = 1; f <= D; f++) {
            for (S >= 7 && (S = 0, x += N[0].outerHTML, isTrAppended = !0, N = e("<tr />")), k = ae(w.year, w.month, f), $ = t.englishNumber ? De(f) : V(De(f)), T = e("<td data-day />").attr("data-number", k).html($), k == h && (T.attr("data-today", ""), L || (L = X(S - 1 < 0 ? 0 : S - 1, t.isGregorian))), t.rangeSelector || M != k || (T.attr("data-selectedday", ""), L = X(S - 1 < 0 ? 0 : S - 1, t.isGregorian)), y = 0; y < j.length; y++)
                if (j[y] == k) {
                    T.addClass("text-danger");
                    break
                }
            if (t.isGregorian || 6 != S ? t.isGregorian && 0 == S && T.addClass("text-danger") : T.addClass("text-danger"), t.disableBeforeToday)
                for (k < h && T.attr("disabled", ""), P < h && (oe = "disabled"), E < h && (se = "disabled"), G < h && (ee = "disabled"), A < h && (_ = "disabled"), y = 1; y <= 12; y++) R["month" + y.toString() + "DateNumber"] < h && (R["selectMonth" + y.toString() + "ButtonCssClass"] = "disabled");
            if (t.disableAfterToday)
                for (k > h && T.attr("disabled", ""), P > h && (oe = "disabled"), E > h && (se = "disabled"), G > h && (ee = "disabled"), A > h && (_ = "disabled"), y = 1; y <= 12; y++) R["month" + y.toString() + "DateNumber"] > h && (R["selectMonth" + y.toString() + "ButtonCssClass"] = "disabled");
            if (p)
                for (k > p && T.attr("disabled", ""), P > p && (oe = "disabled"), E > p && (se = "disabled"), G > p && (ee = "disabled"), A > p && (_ = "disabled"), y = 1; y <= 12; y++) R["month" + y.toString() + "DateNumber"] > p && (R["selectMonth" + y.toString() + "ButtonCssClass"] = "disabled");
            if (b)
                for (k < b && T.attr("disabled", ""), P < b && (oe = "disabled"), E < b && (se = "disabled"), G < b && (ee = "disabled"), A < b && (_ = "disabled"), y = 1; y <= 12; y++) R["month" + y.toString() + "DateNumber"] < b && (R["selectMonth" + y.toString() + "ButtonCssClass"] = "disabled");
            for (y = 0; y < W.length; y++) k == W[y] && T.attr("disabled", "");
            for (y = 0; y < J.length; y++) k == J[y] && T.attr("data-special-date", "");
            t.disabledDays && t.disabledDays.indexOf(S) >= 0 && T.attr("disabled", ""), t.rangeSelector && (k == H || k == I ? T.addClass("selected-range-days-start-end") : H > 0 && I > 0 && k > H && k < I && T.addClass("selected-range-days")), N.append(T), isTrAppended = !1, S++, v++
        }
        S >= 7 && (S = 0, x += N[0].outerHTML, isTrAppended = !0, N = e("<tr />"));
        var ve = Q(w, 1, t.isGregorian);
        for (f = 1; f <= 42 - v; f++) $ = t.englishNumber ? De(f) : V(De(f)), k = ae(ve.year, ve.month, f), T = e("<td data-nm />").attr("data-number", k).html($), t.rangeSelector && (k == H || k == I ? T.addClass("selected-range-days-start-end") : H > 0 && I > 0 && k > H && k < I && T.addClass("selected-range-days")), t.isGregorian || 6 != S ? t.isGregorian && 0 == S && T.addClass("text-danger") : T.addClass("text-danger"), N.append(T), ++S >= 7 && (S = 0, x += N[0].outerHTML, isTrAppended = !0, N = e("<tr />"));
        return isTrAppended || (x += N[0].outerHTML, isTrAppended = !0), d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = (d = d.replace(/{{currentMonthInfo}}/gim, B)).replace(/{{selectedYear}}/gim, m)).replace(/{{selectedMonthName}}/gim, g)).replace(/{{daysHtml}}/gim, x)).replace(/{{previousYearButtonDisabledAttribute}}/gim, _)).replace(/{{previousYearButtonDateNumber}}/gim, A)).replace(/{{previousMonthButtonDisabledAttribute}}/gim, ee)).replace(/{{previousMonthButtonDateNumber}}/gim, G)).replace(/{{selectYearButtonDisabledAttribute}}/gim, ne)).replace(/{{nextMonthButtonDisabledAttribute}}/gim, oe)).replace(/{{nextMonthButtonDateNumber}}/gim, P)).replace(/{{nextYearButtonDisabledAttribute}}/gim, se)).replace(/{{nextYearButtonDateNumber}}/gim, E)).replace(/{{dropDownMenuMonth1DateNumber}}/gim, R.month1DateNumber)).replace(/{{dropDownMenuMonth2DateNumber}}/gim, R.month2DateNumber)).replace(/{{dropDownMenuMonth3DateNumber}}/gim, R.month3DateNumber)).replace(/{{dropDownMenuMonth4DateNumber}}/gim, R.month4DateNumber)).replace(/{{dropDownMenuMonth5DateNumber}}/gim, R.month5DateNumber)).replace(/{{dropDownMenuMonth6DateNumber}}/gim, R.month6DateNumber)).replace(/{{dropDownMenuMonth7DateNumber}}/gim, R.month7DateNumber)).replace(/{{dropDownMenuMonth8DateNumber}}/gim, R.month8DateNumber)).replace(/{{dropDownMenuMonth9DateNumber}}/gim, R.month9DateNumber)).replace(/{{dropDownMenuMonth10DateNumber}}/gim, R.month10DateNumber)).replace(/{{dropDownMenuMonth11DateNumber}}/gim, R.month11DateNumber)).replace(/{{dropDownMenuMonth12DateNumber}}/gim, R.month12DateNumber)).replace(/{{selectMonth1ButtonCssClass}}/gim, R.selectMonth1ButtonCssClass)).replace(/{{selectMonth2ButtonCssClass}}/gim, R.selectMonth2ButtonCssClass)).replace(/{{selectMonth3ButtonCssClass}}/gim, R.selectMonth3ButtonCssClass)).replace(/{{selectMonth4ButtonCssClass}}/gim, R.selectMonth4ButtonCssClass)).replace(/{{selectMonth5ButtonCssClass}}/gim, R.selectMonth5ButtonCssClass)).replace(/{{selectMonth6ButtonCssClass}}/gim, R.selectMonth6ButtonCssClass)).replace(/{{selectMonth7ButtonCssClass}}/gim, R.selectMonth7ButtonCssClass)).replace(/{{selectMonth8ButtonCssClass}}/gim, R.selectMonth8ButtonCssClass)).replace(/{{selectMonth9ButtonCssClass}}/gim, R.selectMonth9ButtonCssClass)).replace(/{{selectMonth10ButtonCssClass}}/gim, R.selectMonth10ButtonCssClass)).replace(/{{selectMonth11ButtonCssClass}}/gim, R.selectMonth11ButtonCssClass)).replace(/{{selectMonth12ButtonCssClass}}/gim, R.selectMonth12ButtonCssClass)
    }
    e(document).on("click", D + " [data-day]", (function(t) {
        var a = e(this),
            r = a.attr("disabled"),
            n = Number(a.attr("data-number")),
            o = I(a),
            s = null == o.selectedDate ? void 0 : de(o.selectedDate),
            i = he(o.selectedDateToShow),
            l = null == i ? void 0 : de(i);
        if (r) null != o.onDayClick && o.onDayClick({
            selectedDate: o.selectedDate,
            disabled: r,
            event: t,
            selectedDateToShow: i,
            rangeSelectorStartDate: o.rangeSelectorStartDate,
            rangeSelectorEndDate: o.rangeSelectorEndDate
        });
        else {
            if (i = le(n, i, o), o.rangeSelector) return null != o.rangeSelectorStartDate && null != o.rangeSelectorEndDate && (o.selectedRangeDate = [], o.rangeSelectorStartDate = void 0, o.rangeSelectorEndDate = void 0, a.parents("table:last").find("td.selected-range-days-start-end,td.selected-range-days").removeClass("selected-range-days").removeClass("selected-range-days-start-end")), null == o.rangeSelectorStartDate ? (a.addClass("selected-range-days-start-end"), o.rangeSelectorStartDate = he(i), o.selectedDate = he(i), o.selectedDateToShow = he(i)) : null != o.rangeSelectorStartDate && null == o.rangeSelectorEndDate && (a.addClass("selected-range-days-start-end"), o.rangeSelectorEndDate = he(i), J(o)), L(a, o), void(null != o.rangeSelectorStartDate && null != o.rangeSelectorEndDate && (o.selectedRangeDate = [he(o.rangeSelectorStartDate), he(o.rangeSelectorEndDate)], o.inLine ? R(a, o) : ee(e(g))));
            if (o.selectedDate = he(i), o.selectedDateToShow = he(i), null != s && (s.hour = l.hour, s.minute = l.minute, s.second = l.second, o.selectedDate.setHours(s.hour), o.selectedDate.setMinutes(s.minute), o.selectedDate.setSeconds(s.second)), L(a, o), J(o), o.inLine)
                if (o.inLine && (o.toDate || o.fromDate)) {
                    var d = e("[" + u + '="' + o.groupId + '"][data-toDate]').find("[data-day]:first"),
                        c = e("[" + u + '="' + o.groupId + '"][data-fromDate]').find("[data-day]:first");
                    o.fromDate && d.length > 0 ? R(d, I(d)) : o.toDate && c.length > 0 && R(c, I(c)), R(a, o)
                } else R(a, o);
            else ee(e(g));
            null != o.onDayClick && o.onDayClick({
                rangeSelector: o.rangeSelector,
                selectedDate: o.selectedDate,
                disabled: r,
                event: t,
                selectedDateToShow: i,
                rangeSelectorStartDate: o.rangeSelectorStartDate,
                rangeSelectorEndDate: o.rangeSelectorEndDate
            })
        }
    })), e(document).on("mouseenter", D + " [data-day]," + D + " [data-nm]," + D + " [data-pm]", (function() {
        var t = e(this),
            a = t.parents("table:last").find("td[data-day]"),
            r = t.attr("disabled"),
            n = Number(t.attr("data-number")),
            o = I(t);
        if (!r && o.rangeSelector && (null == o.rangeSelectorStartDate || null == o.rangeSelectorEndDate)) {
            a.removeClass("selected-range-days");
            var s = o.rangeSelectorStartDate ? he(o.rangeSelectorStartDate) : void 0,
                i = o.rangeSelectorEndDate ? he(o.rangeSelectorEndDate) : void 0,
                l = 0,
                d = 0;
            if (o.isGregorian ? (l = s ? re(s) : 0, d = i ? re(i) : 0) : (l = s ? te(ue(s)) : 0, d = i ? te(ue(i)) : 0), l > 0 && n > l)
                for (var c = l; c <= n; c++) a.filter('[data-number="' + c.toString() + '"]:not(.selected-range-days-start-end)').addClass("selected-range-days");
            else if (d > 0 && n < d)
                for (var u = n; u <= d; u++) a.filter('[data-number="' + u.toString() + '"]:not(.selected-range-days-start-end)').addClass("selected-range-days")
        }
    })), e(document).on("click", D + " [data-changedatebutton]", (function() {
        var t = e(this),
            a = t.attr("disabled"),
            r = Number(t.attr("data-number")),
            n = I(t),
            o = he(n.selectedDateToShow);
        a || (o = le(r, o, n), n.selectedDateToShow = he(o), L(t, n), R(t, n), null != n.calendarViewOnChange && n.calendarViewOnChange(n.selectedDateToShow))
    })), e(document).on("blur", D + " input[data-clock]", (function() {
        var t = e(this),
            a = t.parents(D + ":first"),
            r = a.find('input[type="text"][data-clock="hour"]'),
            n = a.find('input[type="text"][data-clock="minute"]'),
            o = a.find('input[type="text"][data-clock="second"]'),
            s = Number(r.val()),
            i = Number(n.val()),
            l = Number(o.val()),
            d = I(t);
        d.enableTimePicker && (null == d.selectedDateToShow && (d.selectedDateToShow = new Date), s = q(s) ? s : d.selectedDateToShow.getHours(), i = q(i) ? i : d.selectedDateToShow.getMinutes(), l = q(l) ? l : d.selectedDateToShow.getSeconds(), d.selectedDateToShow = new Date(d.selectedDateToShow.setHours(s)), d.selectedDateToShow = new Date(d.selectedDateToShow.setMinutes(i)), d.selectedDateToShow = new Date(d.selectedDateToShow.setSeconds(l)), null == d.selectedDate && (d.selectedDate = new Date), d.selectedDate = new Date(d.selectedDate.setHours(s)), d.selectedDate = new Date(d.selectedDate.setMinutes(i)), d.selectedDate = new Date(d.selectedDate.setSeconds(l)), L(t, d), J(d))
    })), e(document).on("click", D + " [select-year-button]", (function() {
        var t = e(this),
            a = I(t),
            r = ve(a),
            n = ` ${r.yearStart} - ${r.yearEnd} `,
            o = v,
            s = r.html,
            i = t.parents(D + ":first").find('[data-name="dateTimePickerYearsToSelectContainer"]');
        o = (o = (o = (o = (o = (o = o.replace(/{{rtlCssClass}}/gim, a.isGregorian ? "" : "rtl")).replace(/{{yearsRangeText}}/gim, a.isGregorian || a.englishNumber ? n : V(n))).replace(/{{previousText}}/gim, a.isGregorian ? w : M)).replace(/{{nextText}}/gim, a.isGregorian ? N : C)).replace(/{{latestPreviousYear}}/gim, r.yearStart > r.yearEnd ? r.yearEnd : r.yearStart)).replace(/{{latestNextYear}}/gim, r.yearStart > r.yearEnd ? r.yearStart : r.yearEnd), $(t, a.inLine, o), i.html(s), i.removeClass("w-0"), a.inLine ? i.addClass("inline") : i.removeClass("inline")
    })), e(document).on("click", "[data-yearrangebuttonchange]", (function() {
        var t = e(this),
            a = I(t),
            r = "1" == t.attr("data-yearrangebuttonchange"),
            n = Number(t.attr("data-year")),
            o = ve(a, r ? n : n - 2 * a.yearOffset),
            s = ` ${o.yearStart} - ${o.yearEnd - 1} `,
            i = v,
            l = o.html;
        i = (i = (i = (i = (i = (i = i.replace(/{{rtlCssClass}}/gim, a.isGregorian ? "" : "rtl")).replace(/{{yearsRangeText}}/gim, a.isGregorian ? s : V(s))).replace(/{{previousText}}/gim, a.isGregorian ? w : M)).replace(/{{nextText}}/gim, a.isGregorian ? N : C)).replace(/{{latestPreviousYear}}/gim, o.yearStart > o.yearEnd ? o.yearEnd : o.yearStart)).replace(/{{latestNextYear}}/gim, o.yearStart > o.yearEnd ? o.yearStart : o.yearEnd), $(t, a.inLine, i), e(D).find('[data-name="dateTimePickerYearsToSelectContainer"]').html(l)
    })), e(document).on("click", D + " [data-go-today]", (function() {
        var t = e(this),
            a = I(t);
        a.selectedDateToShow = new Date, L(t, a), R(t, a)
    })), e("html").on("click", (function(t) {
        if (!p) {
            var a = e(t.target);
            Y(a).length >= 1 || E(a) || H(a) || ee(e(g))
        }
    }));
    var Ce = {
        init: function(t) {
            return this.each((function() {
                var a = e(this),
                    r = e.extend({
                        englishNumber: !1,
                        placement: "bottom",
                        trigger: "click",
                        enableTimePicker: !1,
                        targetTextSelector: "",
                        targetDateSelector: "",
                        toDate: !1,
                        fromDate: !1,
                        groupId: "",
                        disabled: !1,
                        textFormat: "",
                        dateFormat: "",
                        isGregorian: !1,
                        inLine: !1,
                        selectedDate: void 0,
                        selectedDateToShow: new Date,
                        monthsToShow: [0, 0],
                        yearOffset: 15,
                        holiDays: [],
                        disabledDates: [],
                        disabledDays: [],
                        specialDates: [],
                        disableBeforeToday: !1,
                        disableAfterToday: !1,
                        disableBeforeDate: void 0,
                        disableAfterDate: void 0,
                        rangeSelector: !1,
                        rangeSelectorStartDate: void 0,
                        rangeSelectorEndDate: void 0,
                        modalMode: !1,
                        calendarViewOnChange: () => {},
                        onDayClick: () => {}
                    }, t);
                if (a.attr(d, ""), r.targetDateSelector) {
                    var n = e(r.targetDateSelector).val();
                    n && (r.selectedDate = new Date(n), r.selectedDateToShow = he(r.selectedDate))
                } else if (r.targetTextSelector) {
                    var o = e(r.targetTextSelector).val();
                    o && (r.selectedDate = ye(o, r), r.selectedDateToShow = he(r.selectedDate))
                }
                if (r.rangeSelector && (r.fromDate = !1, r.toDate = !1, r.enableTimePicker = !1), (r.fromDate || r.toDate) && r.groupId && (a.attr(u, r.groupId), r.toDate ? a.attr("data-toDate", "") : r.fromDate && a.attr("data-fromDate", "")), r.isGregorian && (r.englishNumber = !0), r.toDate && r.fromDate) throw new Error("MdPersianDateTimePicker => You can not set true 'toDate' and 'fromDate' together");
                if (!r.groupId && (r.toDate || r.fromDate)) throw new Error("MdPersianDateTimePicker => When you set 'toDate' or 'fromDate' true, you have to set 'groupId'");
                r.disable && a.attr("disabled", ""), r.enableTimePicker && !r.textFormat ? r.textFormat = "yyyy/MM/dd   HH:mm:ss" : r.enableTimePicker || r.textFormat || (r.textFormat = "yyyy/MM/dd"), r.enableTimePicker && !r.dateFormat ? r.dateFormat = "yyyy/MM/dd   HH:mm:ss" : r.enableTimePicker || r.dateFormat || (r.dateFormat = "yyyy/MM/dd");
                var s = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                }));
                a.data(b, r), a.attr("data-uniqueid", s), r.rangeSelector && null != r.selectedRangeDate ? (function(t) {
                    var a = e(t.targetTextSelector),
                        r = t.selectedRangeDate[0],
                        n = t.selectedRangeDate[1];
                    if (!r) throw new Error(`Start Date of '${t.targetTextSelector}' is not valid for range selector`);
                    if (!n) throw new Error(`End Date of '${t.targetTextSelector}' is not valid for range selector`);
                    if (t.selectedDate = r, t.rangeSelectorStartDate = r, t.rangeSelectorEndDate = n, a.length > 0) switch (a[0].tagName.toLowerCase()) {
                        case "input":
                            a.val(j(t)), triggerChangeCalling = !0, a.trigger("change");
                            break;
                        default:
                            a.text(j(t)), triggerChangeCalling = !0, a.trigger("change")
                    }
                }(r), triggerChangeCalling = !1) : null != r.selectedDate && (J(r), triggerChangeCalling = !1), r.inLine ? a.append(Se(r)) : r.modalMode ? r.modalMode && (e("body").append(f), a.on("click", (function() {
                    if (!r.disabled) {
                        r.selectedDateToShow = null != r.selectedDate ? he(r.selectedDate) : new Date;
                        var t = Se(r);
                        e(g).find('[data-name="mds-datetimepicker-body"]').html(t), e(g).find("[data-buttonselector]").attr("data-buttonselector", s), e(g).modal("show")
                    }
                }))) : a.popover({
                    container: "body",
                    content: "",
                    html: !0,
                    placement: r.placement,
                    title: " ",
                    trigger: "manual",
                    template: y,
                    sanitize: !1
                }).on(r.trigger, (function() {
                    var t, n;
                    p = !0, a = e(this), (r = a.data(b)).disabled || H(a) ? p = !1 : (t = a, e(g).each((function() {
                        var a = e(this);
                        !t && t.is(a) || ee(a)
                    })), (n = a) && n.popover("show"), setTimeout((function() {
                        r.selectedDateToShow = null != r.selectedDate ? he(r.selectedDate) : he(r.selectedDateToShow);
                        var t = Se(r);
                        $(a, r.inLine, e(t).find("[data-selecteddatestring]").text().trim()), F(a).find('[data-name="mds-datetimepicker-body"]').html(t), a.popover("update"), p = !1
                    }), 10))
                })), e(document).on("change", r.targetTextSelector, (function() {
                    if (triggerChangeCalling) setTimeout((function() {
                        triggerChangeCalling = !1
                    }), 100);
                    else {
                        var t = e(this).val();
                        if (t) try {
                            if (r.rangeSelector) {
                                let e = t.split(" - ");
                                a.MdPersianDateTimePicker("setDateRange", ye(e[0], r), ye(e[1], r))
                            } else a.MdPersianDateTimePicker("setDate", ye(t, r))
                        } catch (e) {
                            J(r)
                        } else a.MdPersianDateTimePicker("clearDate")
                    }
                }))
            }))
        },
        getText: function() {
            var t = [];
            return this.each((function() {
                t.push(j(O(e(this))))
            })), t.length > 1 ? t : t[0]
        },
        getDate: function() {
            var t = [];
            return this.each((function() {
                t.push(O(e(this)).selectedDate)
            })), t.length > 1 ? t : t[0]
        },
        getDateRange: function() {
            var t = [];
            return this.each((function() {
                var a = O(e(this));
                if (a.rangeSelector) t.push([a.rangeSelectorStartDate, a.rangeSelectorEndDate]);
                else {
                    if (!a.toDate && !a.fromDate || !a.groupId) return [];
                    var r = O(e("[" + u + '="' + a.groupId + '"][data-fromDate]')),
                        n = O(e("[" + u + '="' + a.groupId + '"][data-toDate]'));
                    t.push([r.selectedDate, n.selectedDate])
                }
            })), t.length > 1 ? t : t[0]
        },
        setDate: function(t) {
            if (null == t) throw new Error("MdPersianDateTimePicker => setDate => مقدار ورودی نا معتبر است");
            return this.each((function() {
                var a = e(this),
                    r = O(a);
                r.selectedDate = he(t), L(a, r), J(r)
            }))
        },
        setOption: function(t, a) {
            if (!t) throw new Error("MdPersianDateTimePicker => setOption => name parameter مقدار ورودی نا معتبر است");
            return this.each((function() {
                var r = e(this),
                    n = O(r);
                n[t] = a, L(r, n)
            }))
        },
        setDateRange: function(t, a) {
            if (null == t || null == a) throw new Error("MdPersianDateTimePicker => setDateRange => مقدار ورودی نا معتبر است");
            if (ne(t) > ne(a)) throw new Error("MdPersianDateTimePicker => setDateRange => مقدار ورودی نا معتبر است, تاریخ شروع باید بزرگتر از تاریخ پایان باشد");
            return this.each((function() {
                var r = e(this),
                    n = O(r);
                if (n.rangeSelector) n.selectedDate = t, n.selectedRangeDate = [t, a], n.rangeSelectorStartDate = t, n.rangeSelectorEndDate = a, L(r, n), J(n);
                else if ((n.fromDate || n.toDate) && n.groupId) {
                    var o = e("[" + u + '="' + n.groupId + '"][data-toDate]'),
                        s = e("[" + u + '="' + n.groupId + '"][data-fromDate]');
                    if (s.length > 0) {
                        var i = O(s);
                        i.selectedDate = t, L(s, i), J(i)
                    }
                    if (o.length > 0) {
                        var l = O(o);
                        l.selectedDate = a, L(o, l), J(l)
                    }
                }
            }))
        },
        clearDate: function() {
            return this.each((function() {
                var t = e(this),
                    a = O(t);
                a.selectedDate = void 0, a.selectedRangeDate = [], a.rangeSelectorStartDate = void 0, a.rangeSelectorEndDate = void 0, L(t, a), J(a)
            }))
        },
        setDatePersian: function(t) {
            if (null == t) throw new Error("MdPersianDateTimePicker => setDatePersian => ورودی باید از نوه جی سان با حداقل پراپرتی های year, month, day باشد");
            return t.hour = t.hour ? t.hour : 0, t.minute = t.hour ? t.minute : 0, t.second = t.second ? t.second : 0, this.each((function() {
                var a = e(this),
                    r = O(a);
                r.selectedDate = se(t), L(a, r), J(r)
            }))
        },
        hide: function() {
            return this.each((function() {
                ee(e(this))
            }))
        },
        show: function() {
            return this.each((function() {
                var t = O(e(this));
                e(this).trigger(t.trigger)
            }))
        },
        disable: function(t) {
            return this.each((function() {
                var a = e(this),
                    r = O(a);
                r.disabled = t, L(a, r), t ? a.attr("disabled", "") : a.removeAttr("disabled")
            }))
        },
        destroy: function() {
            return this.each((function() {
                var t = e(this),
                    a = O(t);
                a.disable && t.removeAttr("disabled"), a.inLine && t.find(D).remove(), t.removeAttr(d).removeAttr("data-toDate").removeAttr("data-fromDate"), t.off(a.trigger).popover("dispose"), t.removeData(b)
            }))
        },
        changeType: function(t, a) {
            return this.each((function() {
                var r = e(this),
                    n = O(r);
                ee(r), n.isGregorian = t, n.englishNumber = a, n.isGregorian && (n.englishNumber = !0), L(r, n), J(n)
            }))
        }
    };
    e.fn.MdPersianDateTimePicker = function(t) {
        return Ce[t] ? Ce[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist in jquery.Bootstrap-PersianDateTimePicker"), !1) : Ce.init.apply(this, arguments)
    }
}(jQuery);
//# sourceMappingURL=jquery.md.bootstrap.datetimepicker.js.map