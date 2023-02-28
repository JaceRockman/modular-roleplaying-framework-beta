// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.core');
goog.require('cljs.core');
goog.require('kee_frame.legacy');
goog.require('kee_frame.state');
goog.require('kee_frame.router');
goog.require('re_frame.core');
goog.require('kee_frame.log');
goog.require('kee_frame.spec');
goog.require('re_frame.interop');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
kee_frame.core.valid_option_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"debug-config","debug-config",329260673),null,new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586),null,new cljs.core.Keyword(null,"route-change-event","route-change-event",1834214120),null,new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732),null,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),null,new cljs.core.Keyword(null,"chain-links","chain-links",951542256),null,new cljs.core.Keyword(null,"process-route","process-route",-38423566),null,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),null,new cljs.core.Keyword(null,"scroll","scroll",971553779),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null,new cljs.core.Keyword(null,"log-spec-error","log-spec-error",718867605),null,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),null,new cljs.core.Keyword(null,"log","log",-1595516004),null,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),null], null), null);
/**
 * Complete listing of invalid options sent to the `start!` function.
 */
kee_frame.core.extra_options = (function kee_frame$core$extra_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__15937){
var vec__15938 = p__15937;
var k = cljs.core.nth.call(null,vec__15938,(0),null);
return cljs.core.not.call(null,kee_frame.core.valid_option_key_QMARK_.call(null,k));
}),options));
});
/**
 * Starts your client application with the specified `options`.
 * 
 *   This function is intentionally forgiving in certain ways:
 *   - You can call it as often as you want. Figwheel should call it on each code change
 *   - You can omit the `options` altogether. kee-frame chooses sensible defaults for you and leads the way.
 * 
 *   Usage:
 *   ```
 *   (k/start! {:debug?         true
 *           :routes         my-reitit-routes
 *           :hash-routing?  true
 *           :initial-db     {:some-property "default value"}
 *           :root-component [my-reagent-root-component]
 *           :app-db-spec    :spec/my-db-spec})
 *   ```
 */
kee_frame.core.start_BANG_ = (function kee_frame$core$start_BANG_(options){
kee_frame.log.init_BANG_.call(null,new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(options));

if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options)){
} else {
expound.alpha.expound.call(null,new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options);

throw cljs.core.ex_info.call(null,"Invalid options",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),options));
}

var extras_15941 = kee_frame.core.extra_options.call(null,options);
if(cljs.core.seq.call(null,extras_15941)){
throw cljs.core.ex_info.call(null,["Uknown startup options. Valid keys are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kee_frame.core.valid_option_key_QMARK_)].join(''),extras_15941);
} else {
}

return kee_frame.router.start_BANG_.call(null,options);
});
kee_frame.core.reg_chain = kee_frame.legacy.reg_chain;
kee_frame.core.reg_chain_named = kee_frame.legacy.reg_chain_named;
kee_frame.core.reg_event_fx = kee_frame.legacy.reg_event_fx;
kee_frame.core.reg_event_db = kee_frame.legacy.reg_event_db;
kee_frame.core._replace_controller = (function kee_frame$core$_replace_controller(controllers,controller){
return cljs.core.reduce.call(null,(function (ret,existing_controller){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing_controller))){
return cljs.core.conj.call(null,ret,controller);
} else {
return cljs.core.conj.call(null,ret,existing_controller);
}
}),re_frame.interop.empty_queue,controllers);
});
/**
 * Put a controller config map into the global controller registry.
 * 
 *   Parameters:
 * 
 *   `id`: Must be unique in controllere registry. Will appear in logs.
 * 
 *   `controller`: A map with the following keys:
 *   - `:params`: A function that receives the route data and returns the part that should be sent to the `start` function. A nil
 *   return means that the controller should not run for this route.
 * 
 *   - `:start`: A function or an event vector. Called when `params` returns a non-nil value different from the previous
 *   invocation. The function receives whatever non-nil value that was returned from `params`,
 *   and returns a re-frame event vector. If the function does nothing but returning the vector, the surrounding function
 *   can be omitted.
 * 
 *   - `:stop`: Optional. A function or an event vector. Called when previous invocation of `params` returned non-nil and the
 *   current invocation returned nil. If the function does nothing but returning the vector, the surrounding function
 *   can be omitted.
 */
kee_frame.core.reg_controller = (function kee_frame$core$reg_controller(id,controller){
var controller__$1 = cljs.core.assoc.call(null,controller,new cljs.core.Keyword(null,"id","id",-1388402092),id);
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller__$1)){
} else {
expound.alpha.expound.call(null,new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller__$1);

throw cljs.core.ex_info.call(null,"Invalid controller",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),controller__$1));
}

return cljs.core.swap_BANG_.call(null,kee_frame.state.controllers,(function (controllers){
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),controllers);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids))){
return kee_frame.core._replace_controller.call(null,controllers,controller__$1);
} else {
return cljs.core.conj.call(null,controllers,controller__$1);
}
}));
});
/**
 * Make a uri from route data. Useful for avoiding hard coded links in your app.
 * 
 *   Parameters:
 * 
 *   `handler`: The reitit handler from route data
 * 
 *   `params`: Reitit route params for the requested route
 * 
 *   Usage: `[:a {:href (k/path-for [:orders :sort-by :date]} "Orders sorted by date"]`
 */
kee_frame.core.path_for = (function kee_frame$core$path_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15944 = arguments.length;
var i__5770__auto___15945 = (0);
while(true){
if((i__5770__auto___15945 < len__5769__auto___15944)){
args__5775__auto__.push((arguments[i__5770__auto___15945]));

var G__15946 = (i__5770__auto___15945 + (1));
i__5770__auto___15945 = G__15946;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (handler,params){
return cljs.core.apply.call(null,kee_frame.router.url,handler,params);
}));

(kee_frame.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.path_for.cljs$lang$applyTo = (function (seq15942){
var G__15943 = cljs.core.first.call(null,seq15942);
var seq15942__$1 = cljs.core.next.call(null,seq15942);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15943,seq15942__$1);
}));

/**
 * Reagent component that renders different components for different routes.
 * 
 *   Semantics similar to clojure.core/case
 * 
 *   You can include a single default component at the end that serves as the default view
 * 
 *   Parameters:
 * 
 *   `f`: A function that receives the route data on every route change, and returns the value to dispatch on.
 * 
 *   `pairs`: A pair consists of the dispatch value and the reagent component to dispatch to. An optional single default
 *   component can be added at the end.
 * 
 *   Returns the first component with a matching dispatch value.
 * 
 *   Usage:
 *   ```
 *   [k/switch-route (fn [route] (:handler route))
 *  :index [:div "This is index page"]
 *  :about [:div "This is the about page"]
 *  [:div "Probably also the index page"]]
 *   ```
 */
kee_frame.core.case_route = (function kee_frame$core$case_route(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15949 = arguments.length;
var i__5770__auto___15950 = (0);
while(true){
if((i__5770__auto___15950 < len__5769__auto___15949)){
args__5775__auto__.push((arguments[i__5770__auto___15950]));

var G__15951 = (i__5770__auto___15950 + (1));
i__5770__auto___15950 = G__15951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.core.case_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.core.case_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
return cljs.core.apply.call(null,kee_frame.router.case_route,f,pairs);
}));

(kee_frame.core.case_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.case_route.cljs$lang$applyTo = (function (seq15947){
var G__15948 = cljs.core.first.call(null,seq15947);
var seq15947__$1 = cljs.core.next.call(null,seq15947);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15948,seq15947__$1);
}));

/**
 * DEPRECATED in favor of case-route
 * 
 *   Reagent component that renders different components for different routes.
 * 
 *   You might need to include a case for `nil`, since there are no route data before the first navigation.
 * 
 *   Parameters:
 * 
 *   `f`: A function that receives the route data on every route change, and returns the value to dispatch on.
 * 
 *   `pairs`: A pair consists of the dispatch value and the reagent component to dispatch to.
 * 
 *   Returns the first component with a matching dispatch value.
 * 
 *   Usage:
 *   ```
 *   [k/switch-route (fn [route] (:handler route))
 *  :index [:div "This is index page"]
 *  :about [:div "This is the about page"]
 *  nil    [:div "Probably also the index page"]]
 *   ```
 */
kee_frame.core.switch_route = (function kee_frame$core$switch_route(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15954 = arguments.length;
var i__5770__auto___15955 = (0);
while(true){
if((i__5770__auto___15955 < len__5769__auto___15954)){
args__5775__auto__.push((arguments[i__5770__auto___15955]));

var G__15956 = (i__5770__auto___15955 + (1));
i__5770__auto___15955 = G__15956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
return cljs.core.apply.call(null,kee_frame.router.switch_route,f,pairs);
}));

(kee_frame.core.switch_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.core.switch_route.cljs$lang$applyTo = (function (seq15952){
var G__15953 = cljs.core.first.call(null,seq15952);
var seq15952__$1 = cljs.core.next.call(null,seq15952);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15953,seq15952__$1);
}));


//# sourceMappingURL=core.js.map
