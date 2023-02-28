// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.scroll');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('clerk.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),(function (db,p__15787){
var vec__15788 = p__15787;
var _ = cljs.core.nth.call(null,vec__15788,(0),null);
var route = cljs.core.nth.call(null,vec__15788,(1),null);
var inc_or_dec = cljs.core.nth.call(null,vec__15788,(2),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"balance","balance",418967409)], null),inc_or_dec);
}));
kee_frame.scroll.start_BANG_ = (function kee_frame$scroll$start_BANG_(){
return clerk.core.initialize_BANG_.call(null);
});
kee_frame.scroll.monitor_requests_BANG_ = (function kee_frame$scroll$monitor_requests_BANG_(route){
clerk.core.navigate_page_BANG_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route));

return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,(function (interceptors){
return cljs.core.conj.call(null,cljs.core.filter.call(null,(function (p1__15791_SHARP_){
return cljs.core.not_EQ_.call(null,"route-interceptor",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__15791_SHARP_));
}),interceptors),ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"route-interceptor",new cljs.core.Keyword(null,"request","request",1772954723),(function (request){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.inc], null));

return request;
}),new cljs.core.Keyword(null,"response","response",-1068424192),(function (response){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.dec], null));

return response;
})], null)));
}));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933),(function (_,___$1){
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),(function (p__15792,p__15793){
var map__15794 = p__15792;
var map__15794__$1 = cljs.core.__destructure_map.call(null,map__15794);
var db = cljs.core.get.call(null,map__15794__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15795 = p__15793;
var _ = cljs.core.nth.call(null,vec__15795,(0),null);
var active_route = cljs.core.nth.call(null,vec__15795,(1),null);
var counter = cljs.core.nth.call(null,vec__15795,(2),null);
var map__15798 = new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649).cljs$core$IFn$_invoke$arity$1(db);
var map__15798__$1 = cljs.core.__destructure_map.call(null,map__15798);
var route = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"route","route",329891309));
var balance = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
if(cljs.core._EQ_.call(null,route,active_route)){
if((!((balance > (0))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933)], null)], null);
} else {
if((balance > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),active_route,(counter + (1))], null)], null)], null)], null);
} else {
if(((20) < counter)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),null)], null);
} else {
return null;
}
}
}
} else {
return null;
}
}));

//# sourceMappingURL=scroll.js.map
