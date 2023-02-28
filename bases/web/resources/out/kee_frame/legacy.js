// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.legacy');
goog.require('cljs.core');
goog.require('kee_frame.event_logger');
goog.require('re_chain.core');
goog.require('re_frame.core');
kee_frame.legacy.kee_frame_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.event_logger.interceptor,re_frame.core.trim_v], null);
kee_frame.legacy.reg_warn = (function kee_frame$legacy$reg_warn(id){
return null;
});
/**
 * Exactly same signature as `re-frame.core/reg-event-fx`. Use this version if you want kee-frame logging and spec validation.
 * 
 *   `re-frame.core/trim-v` interceptor is also applied.
 */
kee_frame.legacy.reg_event_fx = (function kee_frame$legacy$reg_event_fx(var_args){
var G__15921 = arguments.length;
switch (G__15921) {
case 2:
return kee_frame.legacy.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kee_frame.legacy.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kee_frame.legacy.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return kee_frame.legacy.reg_event_fx.call(null,id,null,handler);
}));

(kee_frame.legacy.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
kee_frame.legacy.reg_warn.call(null,id);

return re_frame.core.reg_event_fx.call(null,id,cljs.core.concat.call(null,kee_frame.legacy.kee_frame_interceptors,interceptors),handler);
}));

(kee_frame.legacy.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Exactly same signature as `re-frame.core/reg-event-db`. Use this version if you want kee-frame logging and spec validation.
 * 
 *   `re-frame.core/trim-v` interceptor is also applied.
 */
kee_frame.legacy.reg_event_db = (function kee_frame$legacy$reg_event_db(var_args){
var G__15924 = arguments.length;
switch (G__15924) {
case 2:
return kee_frame.legacy.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kee_frame.legacy.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kee_frame.legacy.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return kee_frame.legacy.reg_event_db.call(null,id,null,handler);
}));

(kee_frame.legacy.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
kee_frame.legacy.reg_warn.call(null,id);

return re_frame.core.reg_event_db.call(null,id,cljs.core.concat.call(null,kee_frame.legacy.kee_frame_interceptors,interceptors),handler);
}));

(kee_frame.legacy.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register a list of re-frame fx handlers, chained together.
 * 
 *   The chaining is done through dispatch inference. https://github.com/Day8/re-frame-http-fx is supported by default,
 *   you can easily add your own like this: https://github.com/ingesolvoll/kee-frame#configuring-chains-since-020.
 * 
 *   Each handler's event vector is prepended with accumulated event vectors of previous handlers. So if the first handler
 *   receives [a b], and the second handler normally would receive [c], it will actually receive [a b c]. The purpose is
 *   to make all context available to the entire chain, without a complex framework or crazy scope tricks.
 * 
 *   Parameters:
 * 
 *   `id`: the id of the first re-frame event. The next events in the chain will get the same id followed by an index, so
 *   if your id is `add-todo`, the next one in chain will be called `add-todo-1`.
 * 
 *   `handlers`: re-frame event handler functions, registered with `kee-frame.core/reg-event-fx`.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
kee_frame.legacy.reg_chain = (function kee_frame$legacy$reg_chain(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15928 = arguments.length;
var i__5770__auto___15929 = (0);
while(true){
if((i__5770__auto___15929 < len__5769__auto___15928)){
args__5775__auto__.push((arguments[i__5770__auto___15929]));

var G__15930 = (i__5770__auto___15929 + (1));
i__5770__auto___15929 = G__15930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.legacy.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.legacy.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
kee_frame.legacy.reg_warn.call(null,id);

return cljs.core.apply.call(null,re_chain.core.reg_chain_STAR_,id,kee_frame.legacy.kee_frame_interceptors,handlers);
}));

(kee_frame.legacy.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.legacy.reg_chain.cljs$lang$applyTo = (function (seq15926){
var G__15927 = cljs.core.first.call(null,seq15926);
var seq15926__$1 = cljs.core.next.call(null,seq15926);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15927,seq15926__$1);
}));

/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler.
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain-named
 * 
 *  :load-customer-data
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri "..."}})
 * 
 *  :receive-customer-data
 *   (fn [ctx [customer-id customer-data]]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
kee_frame.legacy.reg_chain_named = (function kee_frame$legacy$reg_chain_named(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15932 = arguments.length;
var i__5770__auto___15933 = (0);
while(true){
if((i__5770__auto___15933 < len__5769__auto___15932)){
args__5775__auto__.push((arguments[i__5770__auto___15933]));

var G__15934 = (i__5770__auto___15933 + (1));
i__5770__auto___15933 = G__15934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return kee_frame.legacy.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(kee_frame.legacy.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
kee_frame.legacy.reg_warn.call(null,"");

return cljs.core.apply.call(null,re_chain.core.reg_chain_named_STAR_,kee_frame.legacy.kee_frame_interceptors,handlers);
}));

(kee_frame.legacy.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kee_frame.legacy.reg_chain_named.cljs$lang$applyTo = (function (seq15931){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15931));
}));


//# sourceMappingURL=legacy.js.map
