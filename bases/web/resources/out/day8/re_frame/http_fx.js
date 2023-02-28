// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__4270){
var vec__4271 = p__4270;
var success_QMARK_ = cljs.core.nth.call(null,vec__4271,(0),null);
var response = cljs.core.nth.call(null,vec__4271,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__4276){
var map__4277 = p__4276;
var map__4277__$1 = cljs.core.__destructure_map.call(null,map__4277);
var request = map__4277__$1;
var on_success = cljs.core.get.call(null,map__4277__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__4277__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__4274_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__4274_SHARP_));
}),(function (p1__4275_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__4275_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__4278 = cljs.core.seq.call(null,seq_request_maps);
var chunk__4279 = null;
var count__4280 = (0);
var i__4281 = (0);
while(true){
if((i__4281 < count__4280)){
var request__$1 = cljs.core._nth.call(null,chunk__4279,i__4281);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__4282 = seq__4278;
var G__4283 = chunk__4279;
var G__4284 = count__4280;
var G__4285 = (i__4281 + (1));
seq__4278 = G__4282;
chunk__4279 = G__4283;
count__4280 = G__4284;
i__4281 = G__4285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4278);
if(temp__5804__auto__){
var seq__4278__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4278__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__4278__$1);
var G__4286 = cljs.core.chunk_rest.call(null,seq__4278__$1);
var G__4287 = c__5568__auto__;
var G__4288 = cljs.core.count.call(null,c__5568__auto__);
var G__4289 = (0);
seq__4278 = G__4286;
chunk__4279 = G__4287;
count__4280 = G__4288;
i__4281 = G__4289;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__4278__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__4290 = cljs.core.next.call(null,seq__4278__$1);
var G__4291 = null;
var G__4292 = (0);
var G__4293 = (0);
seq__4278 = G__4290;
chunk__4279 = G__4291;
count__4280 = G__4292;
i__4281 = G__4293;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
