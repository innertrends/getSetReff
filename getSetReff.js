var dataLayer = dataLayer || [];
dataLayer.push({"getSetReff" : "v1.0", "setDomain" : "yourdomain.com"});

function getSetReff()
{
    function rC(k){return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2]}
    function sC(n,v,d) { dd = new Date(); dd.setTime(dd.getTime() + (d*24*60*60*1000)) ;e = typeof d != "undefined" ? ";expires="+dd.toGMTString() : ""; document.cookie = n+"="+v+e+";path=/"; }
    function gcP(p) { if (document.location.search.indexOf(p) != -1) { return (""+document.location.search.split(p+"=")[1]).split("&")[0]; } else { return "not-set"; }  }
    var _reff=[];
    _reff = dataLayer.filter(function (value) {if (value.setDomain) return value;});
    
    //every pageview
    var __asc = (typeof rC("__sreff") != "undefined" ? rC("__sreff") : "");
    var __apc = (typeof rC("__reff") != "undefined" ? rC("__reff") : "");
    var __tsc = t__apc = [];
    var __rf = __tpc = res__apc = __gsr = __nwss = "";
    var __cmp = "utm_campaign";
    var __mdm = "utm_medium";
    var __srcs = "utm_source";


    //referrer or params?
    if (document.location.search.indexOf(__cmp) != -1 || document.location.search.indexOf(__mdm) != -1 || document.location.search.indexOf(__srcs) != -1)
    {
        __gsr = "campaign://c:["+gcP(__cmp)+"]m:["+gcP(__mdm)+"]s:["+gcP(__srcs)+"]";
    }
    else if ((document.referrer == "" || document.referrer.indexOf(_reff[0].setDomain)!=-1) && __apc.split("|")[__apc.split("|").length-1].indexOf("c:") != -1)
    {
        __gsr = "campaign://"+(__apc.split("|")[__apc.split("|").length-1]).split("&")[0];
    }
    else { __gsr = document.referrer; }

    //get referrer domain & verify adwords
    __gsr = ((document.location.search.indexOf("gclid") != -1 && document.referrer != "") ? __gsr= __gsr.split('/')[2]+":[adwords]" : __gsr.split('/')[2]) 
    
    if (__asc)
    {
        __tsc = __asc.split(".");
        __tsc[1] = new Date().getTime();
        __tsc[2]++;
        __asc = __tsc.join(".");
        sC("__sreff",__asc);
    }
    else
    {
        __tsc[0] = __tsc[1] = new Date().getTime(); //start time = current time
        __tsc[2]=1; //first pageview
        __tsc[3]=0; //todo - identify new vs returning visitor
        __asc = __tsc.join(".");
        __nwss = 1;
        sC("__sreff",__asc);
    }
    
    // if refferer is not current domain
    if (__nwss == 1 || __gsr.indexOf(_reff[0].setDomain)==-1)
    {
        __rf = (__gsr != "" ? __gsr : "(direct)");      
        t__apc = __apc.split("|");
        __tpc = t__apc[t__apc.length-1];
        __tpc=__tpc.split("&")[0];
        if (__nwss == 1 || __rf != __tpc) { res__apc = (__apc != "" ? __apc+"|" : ""); __tpc = __rf; sC("__reff",res__apc+__tpc+"&"+__asc,180);}
    }
    else
    {
        t__apc = __apc.split("|");
        __tpc = t__apc[t__apc.length-1];
        __tpc=__tpc.split("&")[0] != "" ? __tpc.split("&")[0] : "(direct)";
        __tpc = __tcp.indexOf(_reff[0].setDomain)!=-1 ? __tcp : "(direct)";
        res__apc = (t__apc.length == 1 ? "" : (t__apc.slice(0,-1).join("|")+"|"));
        sC("__reff",res__apc+__tpc+"&"+__asc,180);
    }
    

    return rC("__reff");
}


