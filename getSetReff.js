function getSetReff() {

    var _reff = []; //settings
    var __mv = 7; //max referrer values
    var __tsc = t__apc = [];
    var __rf = __tpc = res__apc = __gsr = __nwss = __lp = "";
    var __cmp = "utm_campaign";
    var __mdm = "utm_medium";
    var __srcs = "utm_source";
    var __cnt = "utm_content";
    var __trm = "utm_term";
    var __sesst = 1 / 24 / 60 * 30; //half an hour cookie

    if (!Array.prototype.filter) //Array.filter() isn't included in IE until version 9.
    {
        Array.prototype.filter = function (fun /*, thisArg */) {
            "use strict";

            if (this === void 0 || this === null)
                throw new TypeError();

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== "function")
                throw new TypeError();

            var res = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];

                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (fun.call(thisArg, val, i, t))
                        res.push(val2);
                }
            }

            return res;
        };
    }

    _reff = dataLayer.filter(function (value) { if (value.setDomain) return value; });

    if (_reff.length === 0) _reff[0] = { 'setDomain': document.location.hostname };

    //get cookies
    var __asc = (typeof rC("__sreff") != "undefined" ? rC("__sreff") : ""); // session cookie
    var __apc = (typeof rC("__reff") != "undefined" ? rC("__reff").split('|').slice(1 - __mv).join('|') : ""); // long term cookie

    function rC(k) { return (document.cookie.match('(^|; )' + k + '=([^;]*)') || 0)[2] }
    function sC(n, v, d) { dd = new Date(); dd.setTime(dd.getTime() + (d * 24 * 60 * 60 * 1000)); e = typeof d != "undefined" ? ";expires=" + dd.toGMTString() : ""; document.cookie = n + "=" + v + e + ";domain=" + _reff[0].setDomain + ";path=/"; }
    function gcP(p) { if (document.location.search.indexOf(p) != -1) { return ("" + document.location.search.split(p + "=")[1]).split("&")[0]; } else { return "not-set"; } }


    //referrer or params?
    if (document.location.search.indexOf(__cmp) != -1 || document.location.search.indexOf(__mdm) != -1 || document.location.search.indexOf(__srcs) != -1) {
        __gsr = "//campaign::";
        __gsr += gcP(__cmp) != "not-set" ? "c:[" + gcP(__cmp) + "]" : "";
        __gsr += gcP(__mdm) != "not-set" ? "m:[" + gcP(__mdm) + "]" : "";
        __gsr += gcP(__srcs) != "not-set" ? "s:[" + gcP(__srcs) + "]" : "";
        __gsr += gcP(__cnt) != "not-set" ? "o:[" + gcP(__cnt) + "]" : "";
        __gsr += gcP(__trm) != "not-set" ? "t:[" + gcP(__trm) + "]" : "";
    }
    else { __gsr = document.referrer; }
    __gsr = ((document.location.search.indexOf("gclid") != -1) ? "//campaign::cr:[" + gcP("gclid") + "]m:[paid]s:[adwords]" : __gsr);
    __gsr = ((typeof __gsr == "undefined" || __gsr == "" || __gsr.indexOf(_reff[0].setDomain) != -1) ? "(direct)" : __gsr.split('/')[2]);

    __lp = "[[" + document.location.hostname + document.location.pathname + "]]";

    if (__asc) {
        __tsc = __asc.split(".");
        __tsc[1] = new Date().getTime();
        __tsc[2]++;
        __asc = __tsc.join(".");
        sC("__sreff", __asc, __sesst);
    }
    else {
        __tsc[0] = __tsc[1] = new Date().getTime(); //start time = current time
        __tsc[2] = 1; //first pageview
        __asc = __tsc.join(".");
        __nwss = 1;
        sC("__sreff", __asc, __sesst);
    }



    //if new session
    if (__nwss == 1) {
        res__apc = (__apc != "" ? __apc + "|" : "");
        sC("__reff", res__apc + __lp + __gsr + "&" + __asc, 730);
        dataLayer.push({ 'itlvisit': 'new' });
    }
    else {
        t__apc = __apc.split("|");
        __tpc = t__apc[t__apc.length - 1];
        __tpc = __tpc.split("&")[0] != "" ? __tpc.split("&")[0] : __lp + __gsr;
        res__apc = (t__apc.length == 1 ? "" : (t__apc.slice(0, -1).join("|") + "|"));
        if (__gsr == "(direct)" || __tpc.split("&")[0].indexOf(__gsr) != -1) {
            sC("__reff", res__apc + __tpc + "&" + __asc, 730);
        }
        else {
            sC("__reff", __apc + "|" + __lp + __gsr + "&" + __asc, 730);
            dataLayer.push({ 'itlvisit': 'new' });
        }
    }

    return rC("__reff");

}