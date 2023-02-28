// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__10375 = arguments.length;
switch (G__10375) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__10376 = opts;
var map__10376__$1 = cljs.core.__destructure_map.call(null,map__10376);
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__10377 = data;
var map__10377__$1 = cljs.core.__destructure_map.call(null,map__10377);
var level = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,timestamp_))," ",clojure.string.upper_case.call(null,cljs.core.name.call(null,level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [appender-data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn      default-output-fn ; (fn [appender-data]) -> string
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),taoensso.timbre.println_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This map controls all Timbre behaviour including:
 *  - When to log (via level and namespace filtering)
 *  - How  to log (which appenders to use)
 *  - What to log (config to control how data sent to appenders
 *                 will be formatted to output string)
 * 
 *   See `default-config` for default value (and example config).
 * 
 *   Modify this config with `binding`, `alter-var-root`, or with utils:
 *     `set-level!`,         `with-level`,
 *    `set-config!`,        `with-config`,
 *  `merge-config!`, `with-merged-config`.
 * 
 *   MAIN OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set the min-level based on the namespace
 *    by providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [appender-data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [appender-data]) -> string, see `default-output-fn`
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop after exceeding given maximum number
 *                       ; of calls within given rolling window/s.
 *                       ; e.g. [[100 (encore/ms :mins 1)] [1000 (encore/ms :hours 1)]]
 *                       ; will limit noop after:
 *                       ;   - >100  calls in 1 rolling minute, or
 *                       ;   - >1000 calls in 1 rolling hour
 * 
 *      :output-fn       ; Optional override for inherited (fn [appender-data]) -> string
 *      :timestamp-opts  ; Optional override for inherited config map
 *      :fn              ; (fn [appender-data]) -> side-effects, with keys described below
 * 
 *   APPENDER DATA
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire active config map
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :spying?         ; Is call occuring via the `spy` macro?
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as edn)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as edn)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as edn)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as edn)
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
var ret__5824__auto___10383 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10384 = arguments.length;
var i__5770__auto___10385 = (0);
while(true){
if((i__5770__auto___10385 < len__5769__auto___10384)){
args__5775__auto__.push((arguments[i__5770__auto___10385]));

var G__10386 = (i__5770__auto___10385 + (1));
i__5770__auto___10385 = G__10386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq10379){
var G__10380 = cljs.core.first.call(null,seq10379);
var seq10379__$1 = cljs.core.next.call(null,seq10379);
var G__10381 = cljs.core.first.call(null,seq10379__$1);
var seq10379__$2 = cljs.core.next.call(null,seq10379__$1);
var G__10382 = cljs.core.first.call(null,seq10379__$2);
var seq10379__$3 = cljs.core.next.call(null,seq10379__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10380,G__10381,G__10382,seq10379__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__5824__auto___10391 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10392 = arguments.length;
var i__5770__auto___10393 = (0);
while(true){
if((i__5770__auto___10393 < len__5769__auto___10392)){
args__5775__auto__.push((arguments[i__5770__auto___10393]));

var G__10394 = (i__5770__auto___10393 + (1));
i__5770__auto___10393 = G__10394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","nested-merge","taoensso.encore/nested-merge",-258675759,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_merged_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq10387){
var G__10388 = cljs.core.first.call(null,seq10387);
var seq10387__$1 = cljs.core.next.call(null,seq10387);
var G__10389 = cljs.core.first.call(null,seq10387__$1);
var seq10387__$2 = cljs.core.next.call(null,seq10387__$1);
var G__10390 = cljs.core.first.call(null,seq10387__$2);
var seq10387__$3 = cljs.core.next.call(null,seq10387__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10388,G__10389,G__10390,seq10387__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10397 = arguments.length;
var i__5770__auto___10398 = (0);
while(true){
if((i__5770__auto___10398 < len__5769__auto___10397)){
args__5775__auto__.push((arguments[i__5770__auto___10398]));

var G__10399 = (i__5770__auto___10398 + (1));
i__5770__auto___10398 = G__10399;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq10395){
var G__10396 = cljs.core.first.call(null,seq10395);
var seq10395__$1 = cljs.core.next.call(null,seq10395);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10396,seq10395__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});
var ret__5824__auto___10404 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10405 = arguments.length;
var i__5770__auto___10406 = (0);
while(true){
if((i__5770__auto___10406 < len__5769__auto___10405)){
args__5775__auto__.push((arguments[i__5770__auto___10406]));

var G__10407 = (i__5770__auto___10406 + (1));
i__5770__auto___10406 = G__10407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,(1),null)),(new cljs.core.List(null,level,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq10400){
var G__10401 = cljs.core.first.call(null,seq10400);
var seq10400__$1 = cljs.core.next.call(null,seq10400);
var G__10402 = cljs.core.first.call(null,seq10400__$1);
var seq10400__$2 = cljs.core.next.call(null,seq10400__$1);
var G__10403 = cljs.core.first.call(null,seq10400__$2);
var seq10400__$3 = cljs.core.next.call(null,seq10400__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10401,G__10402,G__10403,seq10400__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_10410 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_10411 = (function (p1__10408_SHARP_){
var G__10409 = p1__10408_SHARP_;
var G__10409__$1 = (((G__10409 instanceof cljs.core.Keyword))?G__10409.fqn:null);
switch (G__10409__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_10411.call(null,x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_10411.call(null,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,err_10410,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__5045__auto__ = level__GT_int_10411.call(null,x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.call(null,err_10410,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
var valid_level__GT_int_10413 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (valid_level__GT_int_10413.call(null,x) >= valid_level__GT_int_10413.call(null,y));
});
var fn_QMARK__10418 = cljs.core.fn_QMARK_;
var compile_10419 = taoensso.encore.fmemoize.call(null,(function (x){
return taoensso.encore.compile_str_filter.call(null,x);
}));
var conform_QMARK__STAR__10420 = taoensso.encore.fmemoize.call(null,(function (x,ns){
return compile_10419.call(null,x).call(null,ns);
}));
var conform_QMARK__10421 = (function (ns_filter,ns){
if(cljs.core.truth_(fn_QMARK__10418.call(null,ns_filter))){
return ns_filter.call(null,ns);
} else {
return conform_QMARK__STAR__10420.call(null,ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__10421.call(null,ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize.call(null,(function (specs,ns){
return taoensso.encore.rsome.call(null,(function (p__10414){
var vec__10415 = p__10414;
var ns_pattern = cljs.core.nth.call(null,vec__10415,(0),null);
var min_level = cljs.core.nth.call(null,vec__10415,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__10420.call(null,ns_pattern,ns))){
return taoensso.timbre.valid_level.call(null,min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_10422 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_10423 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
return valid_level_10422.call(null,(function (){var or__5045__auto__ = ((cljs.core.vector_QMARK_.call(null,x))?ns__GT__QMARK_min_level_10423.call(null,x,ns):x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
})());
});
var leglist_10424 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]).call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_10424.call(null,ns_whitelist);
var ns_blacklist__$1 = leglist_10424.call(null,ns_blacklist);
if(cljs.core.truth_((function (){var or__5045__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__10427 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__10428 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_10429 = taoensso.timbre.get_min_level;
var legacy_ns_filter_10430 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__10426 = arguments.length;
switch (G__10426) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__5045__auto__ = _QMARK_config;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = get_min_level_10429.call(null,default_min_level,(function (){var or__5045__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})(),_QMARK_ns_str);
if(cljs.core.truth_(level_GT__EQ__10427.call(null,level,min_level))){
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return legacy_ns_filter_10430.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774)),cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142)));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ns_filter = temp__5802__auto__;
if(cljs.core.truth_(may_log_ns_QMARK__10428.call(null,ns_filter,_QMARK_ns_str))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,(function (x){
var x__$1 = taoensso.encore.nil__GT_str.call(null,x);
if(cljs.core.record_QMARK_.call(null,x__$1)){
return cljs.core.pr_str.call(null,x__$1);
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize.call(null,(function (appender_id,specs){
return taoensso.encore.limiter.call(null,specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
var ret__5824__auto___10436 = (function (){
/**
 * Executes body so that given arbitrary data will be passed (as `:context`)
 *   to appenders for any enclosed logging calls.
 * 
 *   (with-context
 *  {:user-name "Stu"} ; Will be incl. in data dispatched to appenders
 *  (info "User request"))
 * 
 *   See also `with-context+`.
 */
taoensso.timbre.with_context = (function taoensso$timbre$with_context(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10437 = arguments.length;
var i__5770__auto___10438 = (0);
while(true){
if((i__5770__auto___10438 < len__5769__auto___10437)){
args__5775__auto__.push((arguments[i__5770__auto___10438]));

var G__10439 = (i__5770__auto___10438 + (1));
i__5770__auto___10438 = G__10439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq10432){
var G__10433 = cljs.core.first.call(null,seq10432);
var seq10432__$1 = cljs.core.next.call(null,seq10432);
var G__10434 = cljs.core.first.call(null,seq10432__$1);
var seq10432__$2 = cljs.core.next.call(null,seq10432__$1);
var G__10435 = cljs.core.first.call(null,seq10432__$2);
var seq10432__$3 = cljs.core.next.call(null,seq10432__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10433,G__10434,G__10435,seq10432__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__5824__auto___10444 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10445 = arguments.length;
var i__5770__auto___10446 = (0);
while(true){
if((i__5770__auto___10446 < len__5769__auto___10445)){
args__5775__auto__.push((arguments[i__5770__auto___10446]));

var G__10447 = (i__5770__auto___10446 + (1));
i__5770__auto___10446 = G__10447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq10440){
var G__10441 = cljs.core.first.call(null,seq10440);
var seq10440__$1 = cljs.core.next.call(null,seq10440);
var G__10442 = cljs.core.first.call(null,seq10440__$1);
var seq10440__$2 = cljs.core.next.call(null,seq10440__$1);
var G__10443 = cljs.core.first.call(null,seq10440__$2);
var seq10440__$3 = cljs.core.next.call(null,seq10440__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10441,G__10442,G__10443,seq10440__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var fmt_msg_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552));
var vec__10448 = vargs;
var v0 = cljs.core.nth.call(null,vec__10448,(0),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__5043__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest.call(null,vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__10451 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__10451,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_.call(null,v0);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v0));
} else {
return and__5043__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.call(null,_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest.call(null,vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__10454 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__10454,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__10457 = timestamp_opts;
var map__10457__$1 = cljs.core.__destructure_map.call(null,map__10457);
var pattern = cljs.core.get.call(null,map__10457__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__10459 = arguments.length;
switch (G__10459) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_10467 = (new Date());
var context_10468 = taoensso.timbre._STAR_context_STAR_;
var vargs_10469 = cljs.core.deref.call(null,vargs_);
var vec__10460_10470 = taoensso.timbre.parse_vargs.call(null,_QMARK_err,msg_type,vargs_10469);
var _QMARK_err_10471__$1 = cljs.core.nth.call(null,vec__10460_10470,(0),null);
var _QMARK_meta_10472 = cljs.core.nth.call(null,vec__10460_10470,(1),null);
var _QMARK_msg_fmt_10473 = cljs.core.nth.call(null,vec__10460_10470,(2),null);
var vargs_10474__$1 = cljs.core.nth.call(null,vec__10460_10470,(3),null);
var data_10475 = cljs.core.conj.call(null,(function (){var or__5045__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_10467,spying_QMARK_,config,vargs_10474__$1,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,_QMARK_err_10471__$1,context_10468,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_10471__$1;
}),null)),_QMARK_meta_10472,_QMARK_msg_fmt_10473]));
var _QMARK_data_10476 = cljs.core.reduce.call(null,(function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
}),data_10475,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__5804__auto___10477 = _QMARK_data_10476;
if(cljs.core.truth_(temp__5804__auto___10477)){
var data_10478__$1 = temp__5804__auto___10477;
var map__10463_10479 = data_10478__$1;
var map__10463_10480__$1 = cljs.core.__destructure_map.call(null,map__10463_10479);
var vargs_10481__$2 = cljs.core.get.call(null,map__10463_10480__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_10482__$2 = cljs.core.assoc.call(null,data_10478__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_10481__$2;
}),null)));
var data_10483__$3 = taoensso.encore.assoc_nx.call(null,data_10482__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
var G__10464 = msg_type;
if(cljs.core._EQ_.call(null,null,G__10464)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),G__10464)){
return taoensso.timbre.str_join.call(null,vargs_10481__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),G__10464)){
if(typeof _QMARK_msg_fmt_10473 === 'string'){
} else {
throw cljs.core.ex_info.call(null,"Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_.call(null,_QMARK_msg_fmt_10473,vargs_10481__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10464)].join('')));

}
}
}
}),null)),new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_10473,cljs.core.get.call(null,_QMARK_meta_10472,new cljs.core.Keyword(null,"hash","hash",-13781596),vargs_10481__$2)], null));
}),null)));
var output_fn1_10484 = taoensso.encore.fmemoize.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
var timestamp_opts1_10485 = cljs.core.conj.call(null,taoensso.timbre.default_timestamp_opts,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var get_timestamp__10486 = taoensso.encore.fmemoize.call(null,(function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp.call(null,opts,cljs.core.get.call(null,data_10483__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
cljs.core.reduce_kv.call(null,(function (_,id,appender){
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__5043__auto__)){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__5043__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__5045__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
return cljs.core.not.call(null,rl_fn.call(null,cljs.core.force.call(null,new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_10483__$3))));
}
})();
if(rate_limit_okay_QMARK_){
var map__10465 = appender;
var map__10465__$1 = cljs.core.__destructure_map.call(null,map__10465);
var apfn = cljs.core.get.call(null,map__10465__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__10465__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__5045__auto__ = (f == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return output_fn1_10484;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__5045__auto__ = (opts == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return get_timestamp__10486.call(null,timestamp_opts1_10485);
} else {
return get_timestamp__10486.call(null,cljs.core.conj.call(null,timestamp_opts1_10485,opts));
}
})();
var output_ = (new cljs.core.Delay((function (){
return output_fn.call(null,cljs.core.assoc.call(null,data_10483__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_));
}),null));
var data__$4 = cljs.core.conj.call(null,data_10483__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5802__auto__)){
var mfn = temp__5802__auto__;
return mfn.call(null,data__$4);
} else {
return data__$4;
}
})();
var temp__5804__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5804__auto____$1)){
var data__$5 = temp__5804__auto____$1;
return apfn.call(null,data__$5);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,and_form));
});
var ret__5824__auto___10499 = (function (){
/**
 * Core low-level log macro. Useful for tooling, etc.
 * 
 *  * `level`    - must eval to a valid logging level
 *  * `msg-type` - must eval to e/o #{:p :f nil}
 *  * `opts`     - ks e/o #{:config :?err :?ns-str :?file :?line :?base-data :spying?}
 * 
 *   Supports compile-time elision when compile-time const vals
 *   provided for `level` and/or `?ns-str`.
 */
taoensso.timbre.log_BANG_ = (function taoensso$timbre$log_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10500 = arguments.length;
var i__5770__auto___10501 = (0);
while(true){
if((i__5770__auto___10501 < len__5769__auto___10500)){
args__5775__auto__.push((arguments[i__5770__auto___10501]));

var G__10502 = (i__5770__auto___10501 + (1));
i__5770__auto___10501 = G__10502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__10493){
var vec__10494 = p__10493;
var opts = cljs.core.nth.call(null,vec__10494,(0),null);
if((function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)));
}).call(null,args)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",690,"([:or nil? sequential?] args)",args,null,null);
}

var map__10497 = opts;
var map__10497__$1 = cljs.core.__destructure_map.call(null,map__10497);
var _QMARK_ns_str = cljs.core.get.call(null,map__10497__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__10498 = opts;
var map__10498__$1 = cljs.core.__destructure_map.call(null,map__10498);
var config = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null));
var _QMARK_err = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _QMARK_file = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"?file","?file",1533429675),null);
var _QMARK_line = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"?base-data","?base-data",1332523851));
var spying_QMARK_ = cljs.core.get.call(null,map__10498__$1,new cljs.core.Keyword(null,"spying?","spying?",1753444487));
var _QMARK_file__$1 = ((cljs.core.not_EQ_.call(null,_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.call(null)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log!","taoensso.timbre/-log!",-1032395770,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null)))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq10487){
var G__10488 = cljs.core.first.call(null,seq10487);
var seq10487__$1 = cljs.core.next.call(null,seq10487);
var G__10489 = cljs.core.first.call(null,seq10487__$1);
var seq10487__$2 = cljs.core.next.call(null,seq10487__$1);
var G__10490 = cljs.core.first.call(null,seq10487__$2);
var seq10487__$3 = cljs.core.next.call(null,seq10487__$2);
var G__10491 = cljs.core.first.call(null,seq10487__$3);
var seq10487__$4 = cljs.core.next.call(null,seq10487__$3);
var G__10492 = cljs.core.first.call(null,seq10487__$4);
var seq10487__$5 = cljs.core.next.call(null,seq10487__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10488,G__10489,G__10490,G__10491,G__10492,seq10487__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__5824__auto___10508 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10509 = arguments.length;
var i__5770__auto___10510 = (0);
while(true){
if((i__5770__auto___10510 < len__5769__auto___10509)){
args__5775__auto__.push((arguments[i__5770__auto___10510]));

var G__10511 = (i__5770__auto___10510 + (1));
i__5770__auto___10510 = G__10511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.log_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq10503){
var G__10504 = cljs.core.first.call(null,seq10503);
var seq10503__$1 = cljs.core.next.call(null,seq10503);
var G__10505 = cljs.core.first.call(null,seq10503__$1);
var seq10503__$2 = cljs.core.next.call(null,seq10503__$1);
var G__10506 = cljs.core.first.call(null,seq10503__$2);
var seq10503__$3 = cljs.core.next.call(null,seq10503__$2);
var G__10507 = cljs.core.first.call(null,seq10503__$3);
var seq10503__$4 = cljs.core.next.call(null,seq10503__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10504,G__10505,G__10506,G__10507,seq10503__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__5824__auto___10516 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10517 = arguments.length;
var i__5770__auto___10518 = (0);
while(true){
if((i__5770__auto___10518 < len__5769__auto___10517)){
args__5775__auto__.push((arguments[i__5770__auto___10518]));

var G__10519 = (i__5770__auto___10518 + (1));
i__5770__auto___10518 = G__10519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.log.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq10512){
var G__10513 = cljs.core.first.call(null,seq10512);
var seq10512__$1 = cljs.core.next.call(null,seq10512);
var G__10514 = cljs.core.first.call(null,seq10512__$1);
var seq10512__$2 = cljs.core.next.call(null,seq10512__$1);
var G__10515 = cljs.core.first.call(null,seq10512__$2);
var seq10512__$3 = cljs.core.next.call(null,seq10512__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10513,G__10514,G__10515,seq10512__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__5824__auto___10523 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10524 = arguments.length;
var i__5770__auto___10525 = (0);
while(true){
if((i__5770__auto___10525 < len__5769__auto___10524)){
args__5775__auto__.push((arguments[i__5770__auto___10525]));

var G__10526 = (i__5770__auto___10525 + (1));
i__5770__auto___10525 = G__10526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.trace.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq10520){
var G__10521 = cljs.core.first.call(null,seq10520);
var seq10520__$1 = cljs.core.next.call(null,seq10520);
var G__10522 = cljs.core.first.call(null,seq10520__$1);
var seq10520__$2 = cljs.core.next.call(null,seq10520__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10521,G__10522,seq10520__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__5824__auto___10530 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10531 = arguments.length;
var i__5770__auto___10532 = (0);
while(true){
if((i__5770__auto___10532 < len__5769__auto___10531)){
args__5775__auto__.push((arguments[i__5770__auto___10532]));

var G__10533 = (i__5770__auto___10532 + (1));
i__5770__auto___10532 = G__10533;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debug.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq10527){
var G__10528 = cljs.core.first.call(null,seq10527);
var seq10527__$1 = cljs.core.next.call(null,seq10527);
var G__10529 = cljs.core.first.call(null,seq10527__$1);
var seq10527__$2 = cljs.core.next.call(null,seq10527__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10528,G__10529,seq10527__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__5824__auto___10537 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10538 = arguments.length;
var i__5770__auto___10539 = (0);
while(true){
if((i__5770__auto___10539 < len__5769__auto___10538)){
args__5775__auto__.push((arguments[i__5770__auto___10539]));

var G__10540 = (i__5770__auto___10539 + (1));
i__5770__auto___10539 = G__10540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq10534){
var G__10535 = cljs.core.first.call(null,seq10534);
var seq10534__$1 = cljs.core.next.call(null,seq10534);
var G__10536 = cljs.core.first.call(null,seq10534__$1);
var seq10534__$2 = cljs.core.next.call(null,seq10534__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10535,G__10536,seq10534__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__5824__auto___10544 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10545 = arguments.length;
var i__5770__auto___10546 = (0);
while(true){
if((i__5770__auto___10546 < len__5769__auto___10545)){
args__5775__auto__.push((arguments[i__5770__auto___10546]));

var G__10547 = (i__5770__auto___10546 + (1));
i__5770__auto___10546 = G__10547;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq10541){
var G__10542 = cljs.core.first.call(null,seq10541);
var seq10541__$1 = cljs.core.next.call(null,seq10541);
var G__10543 = cljs.core.first.call(null,seq10541__$1);
var seq10541__$2 = cljs.core.next.call(null,seq10541__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10542,G__10543,seq10541__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__5824__auto___10551 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10552 = arguments.length;
var i__5770__auto___10553 = (0);
while(true){
if((i__5770__auto___10553 < len__5769__auto___10552)){
args__5775__auto__.push((arguments[i__5770__auto___10553]));

var G__10554 = (i__5770__auto___10553 + (1));
i__5770__auto___10553 = G__10554;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq10548){
var G__10549 = cljs.core.first.call(null,seq10548);
var seq10548__$1 = cljs.core.next.call(null,seq10548);
var G__10550 = cljs.core.first.call(null,seq10548__$1);
var seq10548__$2 = cljs.core.next.call(null,seq10548__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10549,G__10550,seq10548__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__5824__auto___10558 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10559 = arguments.length;
var i__5770__auto___10560 = (0);
while(true){
if((i__5770__auto___10560 < len__5769__auto___10559)){
args__5775__auto__.push((arguments[i__5770__auto___10560]));

var G__10561 = (i__5770__auto___10560 + (1));
i__5770__auto___10560 = G__10561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatal.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq10555){
var G__10556 = cljs.core.first.call(null,seq10555);
var seq10555__$1 = cljs.core.next.call(null,seq10555);
var G__10557 = cljs.core.first.call(null,seq10555__$1);
var seq10555__$2 = cljs.core.next.call(null,seq10555__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10556,G__10557,seq10555__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__5824__auto___10565 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10566 = arguments.length;
var i__5770__auto___10567 = (0);
while(true){
if((i__5770__auto___10567 < len__5769__auto___10566)){
args__5775__auto__.push((arguments[i__5770__auto___10567]));

var G__10568 = (i__5770__auto___10567 + (1));
i__5770__auto___10567 = G__10568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.report.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq10562){
var G__10563 = cljs.core.first.call(null,seq10562);
var seq10562__$1 = cljs.core.next.call(null,seq10562);
var G__10564 = cljs.core.first.call(null,seq10562__$1);
var seq10562__$2 = cljs.core.next.call(null,seq10562__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10563,G__10564,seq10562__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__5824__auto___10574 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10575 = arguments.length;
var i__5770__auto___10576 = (0);
while(true){
if((i__5770__auto___10576 < len__5769__auto___10575)){
args__5775__auto__.push((arguments[i__5770__auto___10576]));

var G__10577 = (i__5770__auto___10576 + (1));
i__5770__auto___10576 = G__10577;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.logf_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq10569){
var G__10570 = cljs.core.first.call(null,seq10569);
var seq10569__$1 = cljs.core.next.call(null,seq10569);
var G__10571 = cljs.core.first.call(null,seq10569__$1);
var seq10569__$2 = cljs.core.next.call(null,seq10569__$1);
var G__10572 = cljs.core.first.call(null,seq10569__$2);
var seq10569__$3 = cljs.core.next.call(null,seq10569__$2);
var G__10573 = cljs.core.first.call(null,seq10569__$3);
var seq10569__$4 = cljs.core.next.call(null,seq10569__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10570,G__10571,G__10572,G__10573,seq10569__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__5824__auto___10582 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10583 = arguments.length;
var i__5770__auto___10584 = (0);
while(true){
if((i__5770__auto___10584 < len__5769__auto___10583)){
args__5775__auto__.push((arguments[i__5770__auto___10584]));

var G__10585 = (i__5770__auto___10584 + (1));
i__5770__auto___10584 = G__10585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.logf.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq10578){
var G__10579 = cljs.core.first.call(null,seq10578);
var seq10578__$1 = cljs.core.next.call(null,seq10578);
var G__10580 = cljs.core.first.call(null,seq10578__$1);
var seq10578__$2 = cljs.core.next.call(null,seq10578__$1);
var G__10581 = cljs.core.first.call(null,seq10578__$2);
var seq10578__$3 = cljs.core.next.call(null,seq10578__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10579,G__10580,G__10581,seq10578__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__5824__auto___10589 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10590 = arguments.length;
var i__5770__auto___10591 = (0);
while(true){
if((i__5770__auto___10591 < len__5769__auto___10590)){
args__5775__auto__.push((arguments[i__5770__auto___10591]));

var G__10592 = (i__5770__auto___10591 + (1));
i__5770__auto___10591 = G__10592;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.tracef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq10586){
var G__10587 = cljs.core.first.call(null,seq10586);
var seq10586__$1 = cljs.core.next.call(null,seq10586);
var G__10588 = cljs.core.first.call(null,seq10586__$1);
var seq10586__$2 = cljs.core.next.call(null,seq10586__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10587,G__10588,seq10586__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__5824__auto___10596 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10597 = arguments.length;
var i__5770__auto___10598 = (0);
while(true){
if((i__5770__auto___10598 < len__5769__auto___10597)){
args__5775__auto__.push((arguments[i__5770__auto___10598]));

var G__10599 = (i__5770__auto___10598 + (1));
i__5770__auto___10598 = G__10599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debugf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq10593){
var G__10594 = cljs.core.first.call(null,seq10593);
var seq10593__$1 = cljs.core.next.call(null,seq10593);
var G__10595 = cljs.core.first.call(null,seq10593__$1);
var seq10593__$2 = cljs.core.next.call(null,seq10593__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10594,G__10595,seq10593__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__5824__auto___10603 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10604 = arguments.length;
var i__5770__auto___10605 = (0);
while(true){
if((i__5770__auto___10605 < len__5769__auto___10604)){
args__5775__auto__.push((arguments[i__5770__auto___10605]));

var G__10606 = (i__5770__auto___10605 + (1));
i__5770__auto___10605 = G__10606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.infof.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq10600){
var G__10601 = cljs.core.first.call(null,seq10600);
var seq10600__$1 = cljs.core.next.call(null,seq10600);
var G__10602 = cljs.core.first.call(null,seq10600__$1);
var seq10600__$2 = cljs.core.next.call(null,seq10600__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10601,G__10602,seq10600__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__5824__auto___10610 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10611 = arguments.length;
var i__5770__auto___10612 = (0);
while(true){
if((i__5770__auto___10612 < len__5769__auto___10611)){
args__5775__auto__.push((arguments[i__5770__auto___10612]));

var G__10613 = (i__5770__auto___10612 + (1));
i__5770__auto___10612 = G__10613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warnf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq10607){
var G__10608 = cljs.core.first.call(null,seq10607);
var seq10607__$1 = cljs.core.next.call(null,seq10607);
var G__10609 = cljs.core.first.call(null,seq10607__$1);
var seq10607__$2 = cljs.core.next.call(null,seq10607__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10608,G__10609,seq10607__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__5824__auto___10617 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10618 = arguments.length;
var i__5770__auto___10619 = (0);
while(true){
if((i__5770__auto___10619 < len__5769__auto___10618)){
args__5775__auto__.push((arguments[i__5770__auto___10619]));

var G__10620 = (i__5770__auto___10619 + (1));
i__5770__auto___10619 = G__10620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.errorf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq10614){
var G__10615 = cljs.core.first.call(null,seq10614);
var seq10614__$1 = cljs.core.next.call(null,seq10614);
var G__10616 = cljs.core.first.call(null,seq10614__$1);
var seq10614__$2 = cljs.core.next.call(null,seq10614__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10615,G__10616,seq10614__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__5824__auto___10624 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10625 = arguments.length;
var i__5770__auto___10626 = (0);
while(true){
if((i__5770__auto___10626 < len__5769__auto___10625)){
args__5775__auto__.push((arguments[i__5770__auto___10626]));

var G__10627 = (i__5770__auto___10626 + (1));
i__5770__auto___10626 = G__10627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatalf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq10621){
var G__10622 = cljs.core.first.call(null,seq10621);
var seq10621__$1 = cljs.core.next.call(null,seq10621);
var G__10623 = cljs.core.first.call(null,seq10621__$1);
var seq10621__$2 = cljs.core.next.call(null,seq10621__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10622,G__10623,seq10621__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__5824__auto___10631 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10632 = arguments.length;
var i__5770__auto___10633 = (0);
while(true){
if((i__5770__auto___10633 < len__5769__auto___10632)){
args__5775__auto__.push((arguments[i__5770__auto___10633]));

var G__10634 = (i__5770__auto___10633 + (1));
i__5770__auto___10633 = G__10634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.reportf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq10628){
var G__10629 = cljs.core.first.call(null,seq10628);
var seq10628__$1 = cljs.core.next.call(null,seq10628);
var G__10630 = cljs.core.first.call(null,seq10628__$1);
var seq10628__$2 = cljs.core.next.call(null,seq10628__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10629,G__10630,seq10628__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__5824__auto___10640 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10641 = arguments.length;
var i__5770__auto___10642 = (0);
while(true){
if((i__5770__auto___10642 < len__5769__auto___10641)){
args__5775__auto__.push((arguments[i__5770__auto___10642]));

var G__10643 = (i__5770__auto___10642 + (1));
i__5770__auto___10642 = G__10643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10635__auto__","e__10635__auto__",885046852,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10635__auto__","e__10635__auto__",885046852,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq10636){
var G__10637 = cljs.core.first.call(null,seq10636);
var seq10636__$1 = cljs.core.next.call(null,seq10636);
var G__10638 = cljs.core.first.call(null,seq10636__$1);
var seq10636__$2 = cljs.core.next.call(null,seq10636__$1);
var G__10639 = cljs.core.first.call(null,seq10636__$2);
var seq10636__$3 = cljs.core.next.call(null,seq10636__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10637,G__10638,G__10639,seq10636__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__5824__auto___10649 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10650 = arguments.length;
var i__5770__auto___10651 = (0);
while(true){
if((i__5770__auto___10651 < len__5769__auto___10650)){
args__5775__auto__.push((arguments[i__5770__auto___10651]));

var G__10652 = (i__5770__auto___10651 + (1));
i__5770__auto___10651 = G__10652;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10644__auto__","e__10644__auto__",-1895714500,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10644__auto__","e__10644__auto__",-1895714500,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10644__auto__","e__10644__auto__",-1895714500,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq10645){
var G__10646 = cljs.core.first.call(null,seq10645);
var seq10645__$1 = cljs.core.next.call(null,seq10645);
var G__10647 = cljs.core.first.call(null,seq10645__$1);
var seq10645__$2 = cljs.core.next.call(null,seq10645__$1);
var G__10648 = cljs.core.first.call(null,seq10645__$2);
var seq10645__$3 = cljs.core.next.call(null,seq10645__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10646,G__10647,G__10648,seq10645__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__5824__auto___10657 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10658 = arguments.length;
var i__5770__auto___10659 = (0);
while(true){
if((i__5770__auto___10659 < len__5769__auto___10658)){
args__5775__auto__.push((arguments[i__5770__auto___10659]));

var G__10660 = (i__5770__auto___10659 + (1));
i__5770__auto___10659 = G__10660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","future","taoensso.timbre/future",997994192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre._logged_future.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq10653){
var G__10654 = cljs.core.first.call(null,seq10653);
var seq10653__$1 = cljs.core.next.call(null,seq10653);
var G__10655 = cljs.core.first.call(null,seq10653__$1);
var seq10653__$2 = cljs.core.next.call(null,seq10653__$1);
var G__10656 = cljs.core.first.call(null,seq10653__$2);
var seq10653__$3 = cljs.core.next.call(null,seq10653__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10654,G__10655,G__10656,seq10653__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__5824__auto___10664 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10665 = arguments.length;
var i__5770__auto___10666 = (0);
while(true){
if((i__5770__auto___10666 < len__5769__auto___10665)){
args__5775__auto__.push((arguments[i__5770__auto___10666]));

var G__10667 = (i__5770__auto___10666 + (1));
i__5770__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq10661){
var G__10662 = cljs.core.first.call(null,seq10661);
var seq10661__$1 = cljs.core.next.call(null,seq10661);
var G__10663 = cljs.core.first.call(null,seq10661__$1);
var seq10661__$2 = cljs.core.next.call(null,seq10661__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10662,G__10663,seq10661__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__5824__auto___10671 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10672 = arguments.length;
var i__5770__auto___10673 = (0);
while(true){
if((i__5770__auto___10673 < len__5769__auto___10672)){
args__5775__auto__.push((arguments[i__5770__auto___10673]));

var G__10674 = (i__5770__auto___10673 + (1));
i__5770__auto___10673 = G__10674;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_and_rethrow_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq10668){
var G__10669 = cljs.core.first.call(null,seq10668);
var seq10668__$1 = cljs.core.next.call(null,seq10668);
var G__10670 = cljs.core.first.call(null,seq10668__$1);
var seq10668__$2 = cljs.core.next.call(null,seq10668__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10669,G__10670,seq10668__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__5824__auto___10678 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10679 = arguments.length;
var i__5770__auto___10680 = (0);
while(true){
if((i__5770__auto___10680 < len__5769__auto___10679)){
args__5775__auto__.push((arguments[i__5770__auto___10680]));

var G__10681 = (i__5770__auto___10680 + (1));
i__5770__auto___10680 = G__10681;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-logged-future","taoensso.timbre/-logged-future",-576685890,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.logged_future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq10675){
var G__10676 = cljs.core.first.call(null,seq10675);
var seq10675__$1 = cljs.core.next.call(null,seq10675);
var G__10677 = cljs.core.first.call(null,seq10675__$1);
var seq10675__$2 = cljs.core.next.call(null,seq10675__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10676,G__10677,seq10675__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__5824__auto___10683 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__10682__auto__","result__10682__auto__",-15209228,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__10682__auto__","result__10682__auto__",-15209228,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"spying?","spying?",1753444487),true], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__10682__auto__","result__10682__auto__",-15209228,null),null,(1),null))))),null,(1),null)))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__5824__auto___10686 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__10685 = arguments.length;
switch (G__10685) {
case 3:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$lang$maxFixedArity = 6);

return null;
})()
;
(taoensso.timbre.spy.cljs$lang$macro = true);

var ret__5824__auto___10688 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","get-env","taoensso.encore/get-env",2067773776,null),null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__5824__auto___10693 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10694 = arguments.length;
var i__5770__auto___10695 = (0);
while(true){
if((i__5770__auto___10695 < len__5769__auto___10694)){
args__5775__auto__.push((arguments[i__5770__auto___10695]));

var G__10696 = (i__5770__auto___10695 + (1));
i__5770__auto___10695 = G__10696;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-out","taoensso.timbre/default-out",858097375,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*err*","taoensso.timbre/*err*",-1766459963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-err","taoensso.timbre/default-err",-724946294,null),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_default_outs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq10690){
var G__10691 = cljs.core.first.call(null,seq10690);
var seq10690__$1 = cljs.core.next.call(null,seq10690);
var G__10692 = cljs.core.first.call(null,seq10690__$1);
var seq10690__$2 = cljs.core.next.call(null,seq10690__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10691,G__10692,seq10690__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__10698 = arguments.length;
switch (G__10698) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.call(null,err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
var or__5045__auto__ = err.stack;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

var ret__5824__auto___10704 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10705 = arguments.length;
var i__5770__auto___10706 = (0);
while(true){
if((i__5770__auto___10706 < len__5769__auto___10705)){
args__5775__auto__.push((arguments[i__5770__auto___10706]));

var G__10707 = (i__5770__auto___10706 + (1));
i__5770__auto___10706 = G__10707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,probability,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"Probability: 0 <= p <= 1",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rand","cljs.core/rand",-1079209816,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre.sometimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq10700){
var G__10701 = cljs.core.first.call(null,seq10700);
var seq10700__$1 = cljs.core.next.call(null,seq10700);
var G__10702 = cljs.core.first.call(null,seq10700__$1);
var seq10700__$2 = cljs.core.next.call(null,seq10700__$1);
var G__10703 = cljs.core.first.call(null,seq10700__$2);
var seq10700__$3 = cljs.core.next.call(null,seq10700__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10701,G__10702,G__10703,seq10700__$3);
}));

return null;
})()
;
(taoensso.timbre.sometimes.cljs$lang$macro = true);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.call(null,level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10722 = arguments.length;
var i__5770__auto___10723 = (0);
while(true){
if((i__5770__auto___10723 < len__5769__auto___10722)){
args__5775__auto__.push((arguments[i__5770__auto___10723]));

var G__10724 = (i__5770__auto___10723 + (1));
i__5770__auto___10723 = G__10724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq10708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10708));
}));


var ret__5824__auto___10725 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10726 = arguments.length;
var i__5770__auto___10727 = (0);
while(true){
if((i__5770__auto___10727 < len__5769__auto___10726)){
args__5775__auto__.push((arguments[i__5770__auto___10727]));

var G__10728 = (i__5770__auto___10727 + (1));
i__5770__auto___10727 = G__10728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-level","taoensso.timbre/with-level",1514604232,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),body)));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq10709){
var G__10710 = cljs.core.first.call(null,seq10709);
var seq10709__$1 = cljs.core.next.call(null,seq10709);
var G__10711 = cljs.core.first.call(null,seq10709__$1);
var seq10709__$2 = cljs.core.next.call(null,seq10709__$1);
var G__10712 = cljs.core.first.call(null,seq10709__$2);
var seq10709__$3 = cljs.core.next.call(null,seq10709__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10710,G__10711,G__10712,seq10709__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__5824__auto___10729 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10730 = arguments.length;
var i__5770__auto___10731 = (0);
while(true){
if((i__5770__auto___10731 < len__5769__auto___10730)){
args__5775__auto__.push((arguments[i__5770__auto___10731]));

var G__10732 = (i__5770__auto___10731 + (1));
i__5770__auto___10731 = G__10732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),body)));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq10713){
var G__10714 = cljs.core.first.call(null,seq10713);
var seq10713__$1 = cljs.core.next.call(null,seq10713);
var G__10715 = cljs.core.first.call(null,seq10713__$1);
var seq10713__$2 = cljs.core.next.call(null,seq10713__$1);
var G__10716 = cljs.core.first.call(null,seq10713__$2);
var seq10713__$3 = cljs.core.next.call(null,seq10713__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10714,G__10715,G__10716,seq10713__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__5824__auto___10733 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10734 = arguments.length;
var i__5770__auto___10735 = (0);
while(true){
if((i__5770__auto___10735 < len__5769__auto___10734)){
args__5775__auto__.push((arguments[i__5770__auto___10735]));

var G__10736 = (i__5770__auto___10735 + (1));
i__5770__auto___10735 = G__10736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq10717){
var G__10718 = cljs.core.first.call(null,seq10717);
var seq10717__$1 = cljs.core.next.call(null,seq10717);
var G__10719 = cljs.core.first.call(null,seq10717__$1);
var seq10717__$2 = cljs.core.next.call(null,seq10717__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10718,G__10719,seq10717__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__5824__auto___10737 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__10721 = arguments.length;
switch (G__10721) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,"&env",null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


//# sourceMappingURL=timbre.js.map
