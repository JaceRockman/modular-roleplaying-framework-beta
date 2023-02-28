// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__3270 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__3271 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__3271);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___3304 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___3304)){
var new_db_3305 = temp__5804__auto___3304;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_3305);
} else {
}

var seq__3272 = cljs.core.seq.call(null,effects_without_db);
var chunk__3273 = null;
var count__3274 = (0);
var i__3275 = (0);
while(true){
if((i__3275 < count__3274)){
var vec__3282 = cljs.core._nth.call(null,chunk__3273,i__3275);
var effect_key = cljs.core.nth.call(null,vec__3282,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3282,(1),null);
var temp__5802__auto___3306 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3306)){
var effect_fn_3307 = temp__5802__auto___3306;
effect_fn_3307.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3308 = seq__3272;
var G__3309 = chunk__3273;
var G__3310 = count__3274;
var G__3311 = (i__3275 + (1));
seq__3272 = G__3308;
chunk__3273 = G__3309;
count__3274 = G__3310;
i__3275 = G__3311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3272);
if(temp__5804__auto__){
var seq__3272__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3272__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3272__$1);
var G__3312 = cljs.core.chunk_rest.call(null,seq__3272__$1);
var G__3313 = c__5568__auto__;
var G__3314 = cljs.core.count.call(null,c__5568__auto__);
var G__3315 = (0);
seq__3272 = G__3312;
chunk__3273 = G__3313;
count__3274 = G__3314;
i__3275 = G__3315;
continue;
} else {
var vec__3285 = cljs.core.first.call(null,seq__3272__$1);
var effect_key = cljs.core.nth.call(null,vec__3285,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3285,(1),null);
var temp__5802__auto___3316 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3316)){
var effect_fn_3317 = temp__5802__auto___3316;
effect_fn_3317.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3318 = cljs.core.next.call(null,seq__3272__$1);
var G__3319 = null;
var G__3320 = (0);
var G__3321 = (0);
seq__3272 = G__3318;
chunk__3273 = G__3319;
count__3274 = G__3320;
i__3275 = G__3321;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1601__auto___3322 = re_frame.interop.now.call(null);
var duration__1602__auto___3323 = (end__1601__auto___3322 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__1602__auto___3323,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__1601__auto___3322);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__3270);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___3324 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___3324)){
var new_db_3325 = temp__5804__auto___3324;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_3325);
} else {
}

var seq__3288 = cljs.core.seq.call(null,effects_without_db);
var chunk__3289 = null;
var count__3290 = (0);
var i__3291 = (0);
while(true){
if((i__3291 < count__3290)){
var vec__3298 = cljs.core._nth.call(null,chunk__3289,i__3291);
var effect_key = cljs.core.nth.call(null,vec__3298,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3298,(1),null);
var temp__5802__auto___3326 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3326)){
var effect_fn_3327 = temp__5802__auto___3326;
effect_fn_3327.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3328 = seq__3288;
var G__3329 = chunk__3289;
var G__3330 = count__3290;
var G__3331 = (i__3291 + (1));
seq__3288 = G__3328;
chunk__3289 = G__3329;
count__3290 = G__3330;
i__3291 = G__3331;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3288);
if(temp__5804__auto__){
var seq__3288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3288__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3288__$1);
var G__3332 = cljs.core.chunk_rest.call(null,seq__3288__$1);
var G__3333 = c__5568__auto__;
var G__3334 = cljs.core.count.call(null,c__5568__auto__);
var G__3335 = (0);
seq__3288 = G__3332;
chunk__3289 = G__3333;
count__3290 = G__3334;
i__3291 = G__3335;
continue;
} else {
var vec__3301 = cljs.core.first.call(null,seq__3288__$1);
var effect_key = cljs.core.nth.call(null,vec__3301,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3301,(1),null);
var temp__5802__auto___3336 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3336)){
var effect_fn_3337 = temp__5802__auto___3336;
effect_fn_3337.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3338 = cljs.core.next.call(null,seq__3288__$1);
var G__3339 = null;
var G__3340 = (0);
var G__3341 = (0);
seq__3288 = G__3338;
chunk__3289 = G__3339;
count__3290 = G__3340;
i__3291 = G__3341;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__3342){
var map__3343 = p__3342;
var map__3343__$1 = cljs.core.__destructure_map.call(null,map__3343);
var effect = map__3343__$1;
var ms = cljs.core.get.call(null,map__3343__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__3343__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__3344 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__3345 = null;
var count__3346 = (0);
var i__3347 = (0);
while(true){
if((i__3347 < count__3346)){
var effect = cljs.core._nth.call(null,chunk__3345,i__3347);
re_frame.fx.dispatch_later.call(null,effect);


var G__3348 = seq__3344;
var G__3349 = chunk__3345;
var G__3350 = count__3346;
var G__3351 = (i__3347 + (1));
seq__3344 = G__3348;
chunk__3345 = G__3349;
count__3346 = G__3350;
i__3347 = G__3351;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3344);
if(temp__5804__auto__){
var seq__3344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3344__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3344__$1);
var G__3352 = cljs.core.chunk_rest.call(null,seq__3344__$1);
var G__3353 = c__5568__auto__;
var G__3354 = cljs.core.count.call(null,c__5568__auto__);
var G__3355 = (0);
seq__3344 = G__3352;
chunk__3345 = G__3353;
count__3346 = G__3354;
i__3347 = G__3355;
continue;
} else {
var effect = cljs.core.first.call(null,seq__3344__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__3356 = cljs.core.next.call(null,seq__3344__$1);
var G__3357 = null;
var G__3358 = (0);
var G__3359 = (0);
seq__3344 = G__3356;
chunk__3345 = G__3357;
count__3346 = G__3358;
i__3347 = G__3359;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__3360 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__3361 = null;
var count__3362 = (0);
var i__3363 = (0);
while(true){
if((i__3363 < count__3362)){
var vec__3370 = cljs.core._nth.call(null,chunk__3361,i__3363);
var effect_key = cljs.core.nth.call(null,vec__3370,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3370,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___3376 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3376)){
var effect_fn_3377 = temp__5802__auto___3376;
effect_fn_3377.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__3378 = seq__3360;
var G__3379 = chunk__3361;
var G__3380 = count__3362;
var G__3381 = (i__3363 + (1));
seq__3360 = G__3378;
chunk__3361 = G__3379;
count__3362 = G__3380;
i__3363 = G__3381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3360);
if(temp__5804__auto__){
var seq__3360__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3360__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3360__$1);
var G__3382 = cljs.core.chunk_rest.call(null,seq__3360__$1);
var G__3383 = c__5568__auto__;
var G__3384 = cljs.core.count.call(null,c__5568__auto__);
var G__3385 = (0);
seq__3360 = G__3382;
chunk__3361 = G__3383;
count__3362 = G__3384;
i__3363 = G__3385;
continue;
} else {
var vec__3373 = cljs.core.first.call(null,seq__3360__$1);
var effect_key = cljs.core.nth.call(null,vec__3373,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3373,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___3386 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___3386)){
var effect_fn_3387 = temp__5802__auto___3386;
effect_fn_3387.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__3388 = cljs.core.next.call(null,seq__3360__$1);
var G__3389 = null;
var G__3390 = (0);
var G__3391 = (0);
seq__3360 = G__3388;
chunk__3361 = G__3389;
count__3362 = G__3390;
i__3363 = G__3391;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__3392 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__3393 = null;
var count__3394 = (0);
var i__3395 = (0);
while(true){
if((i__3395 < count__3394)){
var event = cljs.core._nth.call(null,chunk__3393,i__3395);
re_frame.router.dispatch.call(null,event);


var G__3396 = seq__3392;
var G__3397 = chunk__3393;
var G__3398 = count__3394;
var G__3399 = (i__3395 + (1));
seq__3392 = G__3396;
chunk__3393 = G__3397;
count__3394 = G__3398;
i__3395 = G__3399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3392);
if(temp__5804__auto__){
var seq__3392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3392__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3392__$1);
var G__3400 = cljs.core.chunk_rest.call(null,seq__3392__$1);
var G__3401 = c__5568__auto__;
var G__3402 = cljs.core.count.call(null,c__5568__auto__);
var G__3403 = (0);
seq__3392 = G__3400;
chunk__3393 = G__3401;
count__3394 = G__3402;
i__3395 = G__3403;
continue;
} else {
var event = cljs.core.first.call(null,seq__3392__$1);
re_frame.router.dispatch.call(null,event);


var G__3404 = cljs.core.next.call(null,seq__3392__$1);
var G__3405 = null;
var G__3406 = (0);
var G__3407 = (0);
seq__3392 = G__3404;
chunk__3393 = G__3405;
count__3394 = G__3406;
i__3395 = G__3407;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__3408 = cljs.core.seq.call(null,value);
var chunk__3409 = null;
var count__3410 = (0);
var i__3411 = (0);
while(true){
if((i__3411 < count__3410)){
var event = cljs.core._nth.call(null,chunk__3409,i__3411);
clear_event.call(null,event);


var G__3412 = seq__3408;
var G__3413 = chunk__3409;
var G__3414 = count__3410;
var G__3415 = (i__3411 + (1));
seq__3408 = G__3412;
chunk__3409 = G__3413;
count__3410 = G__3414;
i__3411 = G__3415;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3408);
if(temp__5804__auto__){
var seq__3408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3408__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3408__$1);
var G__3416 = cljs.core.chunk_rest.call(null,seq__3408__$1);
var G__3417 = c__5568__auto__;
var G__3418 = cljs.core.count.call(null,c__5568__auto__);
var G__3419 = (0);
seq__3408 = G__3416;
chunk__3409 = G__3417;
count__3410 = G__3418;
i__3411 = G__3419;
continue;
} else {
var event = cljs.core.first.call(null,seq__3408__$1);
clear_event.call(null,event);


var G__3420 = cljs.core.next.call(null,seq__3408__$1);
var G__3421 = null;
var G__3422 = (0);
var G__3423 = (0);
seq__3408 = G__3420;
chunk__3409 = G__3421;
count__3410 = G__3422;
i__3411 = G__3423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
