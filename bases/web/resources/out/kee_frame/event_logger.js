// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.event_logger');
goog.require('cljs.core');
goog.require('re_frame.interceptor');
goog.require('clojure.data');
goog.require('taoensso.timbre');
kee_frame.event_logger.interceptor = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-logger","event-logger",-24704467),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.event-logger","not-found","kee-frame.event-logger/not-found",1442366090));
var effects = cljs.core.dissoc.call(null,re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.event-logger",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null),((cljs.core.seq.call(null,effects))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side-effects","side-effects",851436977),effects], null):null),((cljs.core.not_EQ_.call(null,new_db,new cljs.core.Keyword("kee-frame.event-logger","not-found","kee-frame.event-logger/not-found",1442366090)))?(function (){var vec__15782 = clojure.data.diff.call(null,orig_db,new_db);
var only_before = cljs.core.nth.call(null,vec__15782,(0),null);
var only_after = cljs.core.nth.call(null,vec__15782,(1),null);
var db_changed_QMARK_ = (((!((only_before == null)))) || ((!((only_after == null)))));
if(db_changed_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-diff","db-diff",1372538101),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"only-before","only-before",738369676),only_before,new cljs.core.Keyword(null,"only-after","only-after",676451840),only_after], null)], null);
} else {
return null;
}
})():null))], null);
}),null)),null,1724730984,null);

return context;
}));

//# sourceMappingURL=event_logger.js.map
