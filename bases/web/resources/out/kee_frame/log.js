// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.log');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
kee_frame.log.config = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__15602_SHARP_){
return cljs.core.assoc.call(null,p1__15602_SHARP_,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061),true);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null)], null)], null));
kee_frame.log.init_BANG_ = (function kee_frame$log$init_BANG_(user_config){
return taoensso.timbre.set_config_BANG_.call(null,cljs.core.merge.call(null,kee_frame.log.config,user_config));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__15603){
var vec__15604 = p__15603;
var seq__15605 = cljs.core.seq.call(null,vec__15604);
var first__15606 = cljs.core.first.call(null,seq__15605);
var seq__15605__$1 = cljs.core.next.call(null,seq__15605);
var level = first__15606;
var vargs = seq__15605__$1;
var arg = vec__15604;
if(cljs.core.truth_(arg)){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,level,"kee-frame.log",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs], null);
}),null)),null,-2013144335,null);
} else {
return null;
}
}));

//# sourceMappingURL=log.js.map
