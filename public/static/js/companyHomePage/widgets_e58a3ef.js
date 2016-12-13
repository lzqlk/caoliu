;/*!/common/widgets/plat/exposure.js*/
define("common/widgets/plat/exposure",["require","exports","module"],function(require,exports){function a(a,w,j){for(var g=[],i=0;i<a.length;i++)g.push(c(a[i][0],a[i][1],a[i][2]));var v=new Image,A={lt:"trackshow",a:g.join(","),t:w,v:0,dl:encodeURIComponent(window.location.href),dr:encodeURIComponent(window.location.protocol+"//"+window.location.hostname),time:(new Date).getTime()};"undefined"!=typeof j&&(A.abt=j.join(",")),paramsArr=[];for(var I in A)paramsArr.push(I+"="+A[I]);v.src=h.jsonURL+"?"+paramsArr.join("&")}function c(a,c,h){return[$.trim(a),$.trim(c),0,$.trim(h),Math.round(1e4*Math.random())].join("_")}exports.exposure=a;var h={jsonURL:document.location.protocol+"//a.lagou.com/json"};exports.postoA=function(a){if(a){var c=[],h=new Image;for(var i in a)c.push(i+"="+a[i]);c.push("time="+Math.random()),h.src=document.location.protocol+"//a.lagou.com/show?"+c.join("&")}}});
;/*!/common/widgets/plat/poster.js*/
define("common/widgets/plat/poster",["require","exports","module","common/widgets/plat/exposure"],function(require,exports){function a(a,c){var g=a||".lgad_container";$(g).size()<1||$(g).each(function(i,e){var a=$(e).attr("key"),g=$("#keyword").val();$(e).data("loadAdAlready")||($(e).data("loadAdAlready",1),$.getJSON(document.location.protocol+"//ggservice.lagou.com/promotionSpace/data?callback=?",{spaceKey:a,keyword:g},function(a){if(a.success&&a.data.promotionAds.length>0){var g=(a.data.promotionAds[0].img1||"").replace(/^https?\:\/\/www\.lagou\.com/i,GLOBAL_DOMAIN.lgsctx),w=a.data.promotionAds[0].width||a.data.width,A=a.data.promotionAds[0].height||a.data.height,v=a.data.promotionAds[0].link1,_=a.data.tgCode,j=a.data.promotionAds[0].id||"idnull";if(!g)return;var k=$('<img src="'+g+'" />');$(e).append(k),w&&k.width(w),A&&k.height(A),v&&(_?(k.wrap('<a href="'+v+'" data-lg-tj-id="'+_+'" data-lg-tj-no="idnull" data-lg-tj-cid="'+j+'" target="_blank" rel="nofollow"></a>'),$(e).hasClass("ad_exposure")&&(h([[_,"idnull",j]],"ad"),$(e).removeClass("ad_exposure"))):k.wrap('<a href="'+v+'" target="_blank" rel="nofollow"></a>')),$(e).removeClass("lgad_container"),c&&c(),$(window).trigger("resize")}else $(e).remove()}))})}function c(a,c){var g=a||".multi_lgad_container";$(g).size()<1||$(g).each(function(i,e){var a=$(e).attr("key"),g=$("#keyword").val();$(e).data("loadAdAlready")||($(e).data("loadAdAlready",1),$.getJSON(document.location.protocol+"//ggservice.lagou.com/promotionSpace/data?callback=?",{spaceKey:a,keyword:g},function(a){if(a.success&&a.data.promotionAds.length>0){for(var g=0;g<a.data.promotionAds.length;g++){var w=(a.data.promotionAds[g].img1||"").replace(/^https?\:\/\/www\.lagou\.com/i,GLOBAL_DOMAIN.lgsctx),A=a.data.promotionAds[g].width||a.data.width,v=a.data.promotionAds[g].height||a.data.height,_=a.data.promotionAds[g].link1,j=a.data.tgCode,k="00"+(g+1>9?g+1:"0"+(g+1)),y=a.data.promotionAds[g].id||"idnull";if(w){var C=$('<img src="'+w+'" />');$(e).append(C),A&&C.width(A),v&&C.height(v),_&&(j?(C.wrap('<a href="'+_+'" data-lg-tj-id="'+j+'" data-lg-tj-no="'+k+'" data-lg-tj-cid="'+y+'" target="_blank" rel="nofollow"></a>'),$(e).hasClass("ad_exposure")&&(h([[j,"idnull",y]],"ad"),$(e).removeClass("ad_exposure"))):C.wrap('<a href="'+_+'" target="_blank" rel="nofollow"></a>')),$(e).removeClass("multi_lgad_container")}}c&&c(),$(window).trigger("resize")}else $(e).remove()}))})}function g(){var a=[];$(".tj_exposure").each(function(c,e){if($(e).attr("data-lg-tj-id")){var g=$(e).attr("data-lg-tj-id")||"idnull",h=$(e).attr("data-lg-tj-no")||"idnull",w=$(e).attr("data-lg-tj-cid")||"idnull";a.push([g,h,w]),$(e).removeClass("tj_exposure")}}),a.length>0&&h(a,"ad")}var h=require("common/widgets/plat/exposure").exposure;exports.sendStatistics=g,exports.getSingleAd=a,exports.getMultipleAds=c;({jsonURL:document.location.protocol+"//a.lagou.com/json"});$("div[key^=SPACE_KEY_]").size()>0&&$.ajax({url:document.location.protocol+"//ggservice.lagou.com/static/main-mix.js",dataType:"script",cache:!0}),a(".lgad_jsonp"),c(".multi_lgad_jsonp"),g()});
;/*!/common/static/js/plat_tj.js*/
!function(a){var c=window.Cookies,g=window.Cookies=a();g.noConflict=function(){return window.Cookies=c,g}}(function(){function a(){for(var i=0,a={};i<arguments.length;i++){var c=arguments[i];for(var g in c)a[g]=c[g]}return a}function c(g){function C(c,A,v){var w;if("undefined"!=typeof document){if(arguments.length>1){if(v=a({path:"/"},C.defaults,v),"number"==typeof v.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*v.expires),v.expires=h}try{w=JSON.stringify(A),/^[\{\[]/.test(w)&&(A=w)}catch(e){}return A=g.write?g.write(A,c):encodeURIComponent(String(A)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),c=encodeURIComponent(String(c)),c=c.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),c=c.replace(/[\(\)]/g,escape),document.cookie=[c,"=",A,v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join("")}c||(w={});for(var b=document.cookie?document.cookie.split("; "):[],k=/(%[0-9A-Z]{2})+/g,i=0;i<b.length;i++){var j=b[i].split("="),R=j.slice(1).join("=");'"'===R.charAt(0)&&(R=R.slice(1,-1));try{var D=j[0].replace(k,decodeURIComponent);if(R=g.read?g.read(R,D):g(R,D)||R.replace(k,decodeURIComponent),this.json)try{R=JSON.parse(R)}catch(e){}if(c===D){w=R;break}c||(w[D]=R)}catch(e){}}return w}}return C.set=C,C.get=function(a){return C.call(C,a)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(c,g){C(c,"",a(g,{expires:-1}))},C.withConverter=c,C}return c(function(){})}),function(){function a(e){for(var a=e.target||e.srcElement,C=[];a&&a.getAttribute&&!a.getAttribute("data-lg-tj-id")&&!a.getAttribute("data-lg-gatj-msg");)a=a.parentNode;if(a&&a.getAttribute)try{A=(a.getAttribute("data-lg-tj-id")||"idnull").trim(),v=(a.getAttribute("data-lg-tj-no")||"idnull").trim(),h=(a.getAttribute("data-lg-tj-cid")||"idnull").trim(),b=g(),k=(a.getAttribute("data-lg-tj-abt")||"").trim();for(var I=a;I&&I.getAttribute;){if(I.getAttribute("data-lg-tj-track-code")){var _=(I.getAttribute("data-lg-tj-track-code")||"").trim(),N=(I.getAttribute("data-lg-tj-track-type")||"0").trim();break}I=I.parentNode}Cookies.get("TG-TRACK-CODE")&&""!=Cookies.get("TG-TRACK-CODE")?1==N&&_&&Cookies.set("TG-TRACK-CODE",_,{path:"/"}):_&&Cookies.set("TG-TRACK-CODE",_,{path:"/"});var U=Cookies.get("TG-TRACK-CODE");if(j=(a.getAttribute("data-lg-gatj-method")||"send").trim(),R=(a.getAttribute("data-lg-gatj-msgtype")||"event").trim(),D=(a.getAttribute("data-lg-gatj-msg")||"").trim(),E=parseInt(a.getAttribute("data-lg-gatj-val")||0),D&&"function"==typeof ga&&(C.push(j,R),C=C.concat(D.split(",")),!!E&&C.push(E),ga.apply(null,C)),"idnull"==A)return;var M={};M.v=y,M.t=a.tagName.toLocaleLowerCase(),M.dl=encodeURIComponent(T),M.dr=encodeURIComponent(O),M.dt=S,M.aid=[A,v,w,h,b].join("_"),!!k&&"|"!=k&&(M.abt=k),!!U&&""!=U&&(M.intrack=U),c(M)}catch(e){}}function c(a){var c=new Image;paramsArr=[];for(var g in a)"string"==typeof g&&paramsArr.push(g+"="+a[g]);c.src=C.server+"?"+paramsArr.join("&")}function g(a){function c(){for(var a="",i=0;C>i;i++){var r=Math.floor(10*Math.random());a+=r.toString()}return a.toString()}window._CASH_RANDOM?"":window._CASH_RANDOM={};for(var g=window._CASH_RANDOM||{},C=a||4,A=c();g[A]&&(A=c(),g[A]););return window._CASH_RANDOM[A]=A,A}var C={server:document.location.protocol+"//a.lagou.com/track"},A="",v="",w=0,h="",b="",k="",j="",R="",D="",E=0,y=1,T=window.location.href,O=document.referrer,S=document.title,I=document;I.addEventListener?I.addEventListener("click",a,!0):I.attachEvent&&I.attachEvent("onclick",a),window._PTJ=window._PTJ||{postEncodingID:a}}();
;/*!/common/static/js/analytics.js*/
dataHost="a.lagou.com",function(i,s,o,a,r,c,m){i.LgAnalytics=r,i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date,c=s.createElement(o),m=s.getElementsByTagName(o)[0],c.async=1,c.src=a,m.parentNode.insertBefore(c,m)}(window,document,"script","//a.lagou.com/js/a.js","gatherer"),gatherer("create","UA-41268416-1",{alwaysSendReferrer:!0}),gatherer("send","pageview");var bd_hmt_key="4233e74dff0ae5bd0a3d81c6ccf756e6";"yanzhi.lagou.com"==location.hostname?bd_hmt_key="7a53ea85ebffc2dd72e2b7b654bda440":"easy.lagou.com"==location.hostname&&(bd_hmt_key="bfa5351db2249abae67476f1ec317000");var _hmt=_hmt||[];!function(){var a=document.createElement("script");a.src="//hm.baidu.com/hm.js?"+bd_hmt_key;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s)}(),function(i,s,o,a,r,c,m){i.GoogleAnalyticsObject=r,i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date,c=s.createElement(o),m=s.getElementsByTagName(o)[0],c.async=1,c.src=a,m.parentNode.insertBefore(c,m)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-41268416-1","auto"),ga("require","displayfeatures"),ga("require","linker"),ga("send","pageview");
;/*!/common/widgets/passport/passport.js*/
define("common/widgets/passport/passport",["require","exports","module","dep/rgrove-lazyload/lazyload","dep/blueimp-md5/js/md5"],function(require){function a(a){var c=top.location,g={protocol:c.protocol.substring(0,c.protocol.length-1),hostname:c.hostname,port:c.port||"80"},F=y.exec(a.url);if(F&&F.length){var v={protocol:F[1],hostname:F[2],port:F[3]||"80"};(g.protocol!=v.protocol||g.hostname!=v.hostname||g.port!=v.port)&&(a.dataType="jsonp",a.jsonp="jsoncallback")}}function c(){D.tinfo("Resource Ready!"),T=!0}function g(a,c){var g=a+"_"+c;$("#"+g).remove(),D.tinfo("Iframe "+g+" removed")}require("dep/rgrove-lazyload/lazyload"),window.md5=require("dep/blueimp-md5/js/md5");var F=!1,v="1.0.2",_=0,h={remote:{}},y=/^(https?):\/\/((?:[\u4E00-\u9FA5a-z0-9.-]|%[0-9A-F]{2}){2,})(?::(\d+))?((?:\/(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*)*)(?:\?((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?$/i,w={server:"https://passport.lagou.com",poplogin:"/login/login.json",poptransfer:"/ajaxLogin/frameGrant.html",autologin:"/ajaxLogin/login.html"},b={popup:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/css/loginpop_f86913d.css"},j={jq:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/dep/jquery.min_7506461.js",jqv:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/dep/jquery.validate.min_f66db7c.js",lagou:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/js/lagou_5427c0e.js",cb:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/dep/jquery.colorbox-min_169e500.js",jsf:"//"+GLOBAL_CDN_DOMAIN+"/www/static/common/widgets/passport/dep/json2_f94ab06.js"},D={rpc:function(c){if(c.url){c.type||(c.type="POST"),c.params||(c.params={});var g=arguments.callee;D.tinfo("Start passport.rpc: "+c.url);var F={type:c.type,data:c.params,url:c.url,dataType:"json"};a(F),$.ajax(F).done(function(a,F){if(D.tinfo("passport.rpc.succ: "+F),"10001"==a.state){var v=a.content.data.crossServiceUrl.replace(/^https?\:/i,window.location.protocol);return void PASSPORT.remote(v,function(){D.tinfo("passport.rpc.remote.succ"),g(c)},function(a){D.tinfo("passport.rpc.remote.fail"),c.fail&&c.fail.apply(null,[a])})}c.succ&&c.succ.apply(null,arguments)}).fail(function(a,g){D.tinfo("passport.rpc.fail: "+g),c.fail&&c.fail.apply(null,arguments)})}},getTargetUrl:function(a,c){var g={fl:void 0!=c.fl?c.fl:!0,service:c.service,osc:c.osc,ofc:c.ofc,pfurl:document.URL};return a+"?"+$.param(g)},getCurEncodeUrl:function(){return encodeURIComponent(document.URL)},createIframe:function(a,c){var g='<iframe src="'+c+'" id="'+a+"_"+_+'" style="display:none;"></iframe>';$("body").append(g),_++},requester:function(a,c){a.dataType=a.dataType||"json",a.type=a.type||"POST",a.data=a.data||{},$.ajax(a).done(function(a){c&&c(a)})},strFormat:function(a,c){a=String(a);var g=Array.prototype.slice.call(arguments,1),F=Object.prototype.toString;return g.length?(g=1==g.length&&null!==c&&/\[object Array\]|\[object Object\]/.test(F.call(c))?c:g,a.replace(/#\{(.+?)\}/g,function(a,c){var v=g[c];return"[object Function]"==F.call(v)&&(v=v(c)),"undefined"==typeof v?"":v})):a},tipheader:"Lagou Passport v"+v+" -> ",tip:function(){if(F){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);console[a].apply(console,c)}},tinfo:function(a){D.tip("info",D.tipheader+a)}};D.tinfo("Enter passport...");var A=function(){function a(){}var c=a.prototype;return c._getEvents=function(){return this._events||(this._events={}),this._events},c._getMaxListeners=function(){return isNaN(this.maxListeners)&&(this.maxListeners=10),this.maxListeners},c.on=function(a,c){var g=this._getEvents(),F=this._getMaxListeners();g[a]=g[a]||[];var v=g[a].length;if(v>=F&&0!==F)throw new RangeError("Warning: possible Emitter memory leak detected. "+v+" listeners added.");return g[a].push(c),this},c.once=function(a,c){function g(){F.off(a,g),c.apply(this,arguments)}var F=this;return g.listener=c,this.on(a,g),this},c.off=function(a,c){var g=this._getEvents();if(0===arguments.length)return this._events={},this;var F=g[a];if(!F)return this;if(1===arguments.length)return delete g[a],this;for(var v,i=0;i<F.length;i++)if(v=F[i],v===c||v.listener===c){F.splice(i,1);break}return this},c.emit=function(a){var c=this._getEvents(),g=c[a],F=Array.prototype.slice.call(arguments,1);if(g){g=g.slice(0);for(var i=0,v=g.length;v>i;i++)g[i].apply(this,F)}return this},c.listeners=function(a){var c=this._getEvents();return c[a]||[]},c.setMaxListeners=function(a){return this.maxListeners=a,this},a.mixin=function(c){for(var g in a.prototype)c[g]=a.prototype[g];return c},a}(),P=function(){var a=!1;try{a=!(!$||!jQuery)}catch(e){a=!1}return a}(),C=function(){return!(!P||!$("body").validate)}(),S=function(){return!(!P||!$.colorbox)}(),L=function(){return!!JSON.stringify}(),O=function(){return!(!O||!lg)}();D.tinfo("Has$: "+P),D.tinfo("HasValidate: "+C),D.tinfo("HasCb: "+S),D.tinfo("HasLagou: "+O),D.tinfo("HasJsf: "+L);var T=!1;!function(){var a={};!P&&(a[j.jq]=!1),!C&&(a[j.jqv]=!1),!O&&(a[j.lagou]=!1),!S&&(a[j.cb]=!1),!L&&(a[j.jsf]=!1);var g=function(){for(var c in a)if(!a[c])return!1;return!0},F=function(F){D.tinfo("Load "+F+"..."),LazyLoad.js(F,function(){a[F]=!0,D.tinfo("Load "+F+" success!"),g()&&c()})};for(var v in a)F(v)}();var R=new A,k=function(a){return function(){var c=70,g=arguments;T?a.apply(null,g):window.setTimeout(function(){g.callee.apply(null,g)},c)}},E=!1;E||LazyLoad.css(b.popup,function(){E=!0,D.tinfo("Load popup style success!")});var z=function(){var a=D.getCurEncodeUrl(),c=w.server;$.colorbox({html:'<div id="loginPop" class="popup" style="height:240px;"><form id="login_form_popup" action="javascript:;" method="post"  data-view="loginView"><div data-propertyname="username" data-controltype="Phone"><input type="text" id="email" name="email" tabindex="1" placeholder="请输入已验证手机/邮箱"></div><div data-propertyname="password" data-controltype="Password"><input type="password" id="password" name="password" tabindex="2" placeholder="请输入密码"></div><div class="input_item clearfix"  data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display:none;clear: both;"><input type="text" class="input input_white fl" style="width:150px;font-size: 16px;display:block;" name="" placeholder="请证明你不是机器人" data-required="required" autocomplete="off" ><img src="" alt="" class="yzm"><a href="javascript:;" class="reflash"></a></div><label class="fl" for="remember" style="display:none"><input type="checkbox" id="remember"  value="" checked="checked" name="autoLogin"> 记住我</label><a class="fr" href="'+c+'/accountPwd/toReset.html">忘记密码？</a><div data-propertyname="submit" data-controltype="Botton"><input type="button" id="submitLogin" value="登 &nbsp; &nbsp; 录" data-lg-tj-id="1gC0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></div></form><div class="login_right"><div>还没有拉勾帐号？</div><a href="'+c+'/register/register.html" class="registor_now" data-lg-tj-id="1gD0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">立即注册</a><div class="login_others">使用以下帐号直接登录:</div><a href="'+c+"/oauth20/auth_sinaWeiboProvider.html?service="+a+'" target="_blank" id="icon_wb" class="icon_wb" title="使用新浪微博帐号登录" data-lg-tj-id="1hw0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a><a href="'+c+"/oauth20/auth_qqProvider.html?service="+a+'" class="icon_qq" id="icon_qq" target="_blank" title="使用腾讯QQ帐号登录" data-lg-tj-id="1hx0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a><a href="'+c+"/oauth20/auth_weixinProvider.html?service="+a+'" class="icon_weixin" id="icon_weixin" target="_blank" title="使用微信帐号登录" data-lg-tj-id="1hy0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a></div></div>',title:"登录"});new lg.Views.BaseView({name:"loginView",fields:[{name:"username",validRules:[{mode:"require",data:"",message:"请输入已验证手机/邮箱",trigger:"blur"},{mode:"pattern",isUse:!0,status:!1,data:{phone:/^(0|86|17951)?((13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[57])[0-9]{8})$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i},message:"请输入有效的手机/邮箱"}],controlType:"Phone"},{name:"password",validRules:[{mode:"require",data:"",message:"请输入密码"},{mode:"pattern",data:"/^[\\S\\s]{6,16}$/",message:"请输入6-16位密码，字母区分大小写"}],controlType:"Password"},{name:"request_form_verifyCode",isVisible:!1,validRules:[],from:"register",url:"https://passport.lagou.com/vcode/create",controlType:"VerifyCode"},{name:"submit",validRules:[],controlType:"Button",url:"/login/login.json",click:function(e){var a=e,c=a.parent.CollectData(),g="veenike";if(c.isValidate){c.password=md5(c.password),c.password=md5(g+c.password+g);var F=$("#remember",$("body #colorbox #login_form_popup"));F.val(F.prop("checked")?1:null);var v=F.val(),h=void 0==v||null==v?!1:1==v?!0:!1;c.rememberMe=h,$.ajax({url:a.control._option.url,data:c,url:w.server+w.poplogin,dataType:"jsonp",jsonp:"jsoncallback"}).done(function(c){var g={1:{message:"成功",linkFor:"password",level:"info"},210:{message:"请输入有效的手机/邮箱",linkFor:"username",level:"error"},211:{message:"请输入6-16位密码，字母区分大小写",linkFor:"password",level:"error"},220:{message:"请输入有效的手机/邮箱",linkFor:"username",level:"error"},240:{message:"请输入已验证手机/邮箱",linkFor:"username",level:"error"},241:{message:"请输入密码",linkFor:"password",level:"error"},299:{message:"你的操作太过频繁，请稍后再试",linkFor:"password",level:"error"},400:{message:"帐号和密码不匹配",linkFor:"password",level:"error"},500:{message:"登录失败,系统内部异常",linkFor:"password",level:"error"},10010:{message:"验证码不正确",linkFor:"request_form_verifyCode",level:"error"},10011:{message:"操作太频繁",linkFor:"password",level:"error"},10012:{message:"系统错误",linkFor:"password",level:"error"}};if(g[c.state]&&1!=c.state&&a.parent.field[g[c.state].linkFor].showMessage({message:g[c.state].message}),10010!=c.state||a.parent.field.request_form_verifyCode.getIsVisible()||(a.parent.field.request_form_verifyCode.getVerifyCode(),a.parent.field.request_form_verifyCode.setVisible(!0)),"info"==g[c.state].level&&1==c.state){var F=D.getTargetUrl(w.server+w.poptransfer,{fl:"2",service:document.URL,osc:"PASSPORT._pscb("+_+")",ofc:"PASSPORT._pfcb("+_+")"});D.createIframe("popup_login_iframe",F)}else a.parent.field.request_form_verifyCode.getVerifyCode()})}}}]})};window.PASSPORT=window.PASSPORT||{on:function(){R.on.apply(R,arguments)},auto:k(function(){var a=D.getTargetUrl(w.server+w.autologin,{fl:"1",service:document.URL,osc:"PASSPORT._ascb("+_+")",ofc:"PASSPORT._afcb("+_+")"});D.createIframe("auto_login_iframe",a)}),_ascb:function(a,c){D.tinfo("Call of PASSPORT._ascb"+a+": "+c),R.emit("autologin:succ",c),g("auto_login_iframe",a)},_afcb:function(a,c){D.tinfo("Call of PASSPORT._afcb"+a+": "+c),R.emit("autologin:fail",c),g("auto_login_iframe",a)},popup:k(function(){z()}),_pscb:function(a,c){D.tinfo("Call of PASSPORT._pscb"+a+": "+c),R.emit("popuplogin:succ",c),g("popup_login_iframe",a)},_pfcb:function(a,c){D.tinfo("Call of PASSPORT._pfcb"+a+": "+c),R.emit("popuplogin:fail",c),g("popup_login_iframe",a)},remote:k(function(a,c,g){D.tinfo("Remote request: "+a+" "+c+" "+g),h.remote[_]={},c&&(h.remote[_].succ=c),g&&(h.remote[_].fail=g),D.tinfo("Remote request put into callbacks: "+JSON.stringify(h.remote));var F=D.getTargetUrl(w.server+w.autologin,{fl:"3",service:a,osc:"PASSPORT._rscb("+_+")",ofc:"PASSPORT._rfcb("+_+")"});D.createIframe("remote_login_iframe",F)}),_rscb:function(a,c){D.tinfo("Call of PASSPORT._rscb"+a+": "+c),R.emit("remotelogin:succ",c),g("remote_login_iframe",a),h.remote[a]&&h.remote[a].succ&&h.remote[a].succ(c)},_rfcb:function(a,c){D.tinfo("Call of PASSPORT._rfcb"+a+": "+c),R.emit("remotelogin:fail",c),g("remote_login_iframe",a),h.remote[a]&&h.remote[a].fail&&h.remote[a].fail(c)},util:{rpc:k(D.rpc),tinfo:k(D.tinfo)}}});