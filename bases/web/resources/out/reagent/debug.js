// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__1033__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1034__i = 0, G__1034__a = new Array(arguments.length -  0);
while (G__1034__i < G__1034__a.length) {G__1034__a[G__1034__i] = arguments[G__1034__i + 0]; ++G__1034__i;}
  args = new cljs.core.IndexedSeq(G__1034__a,0,null);
} 
return G__1033__delegate.call(this,args);};
G__1033.cljs$lang$maxFixedArity = 0;
G__1033.cljs$lang$applyTo = (function (arglist__1035){
var args = cljs.core.seq(arglist__1035);
return G__1033__delegate(args);
});
G__1033.cljs$core$IFn$_invoke$arity$variadic = G__1033__delegate;
return G__1033;
})()
);

(o.error = (function() { 
var G__1036__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1037__i = 0, G__1037__a = new Array(arguments.length -  0);
while (G__1037__i < G__1037__a.length) {G__1037__a[G__1037__i] = arguments[G__1037__i + 0]; ++G__1037__i;}
  args = new cljs.core.IndexedSeq(G__1037__a,0,null);
} 
return G__1036__delegate.call(this,args);};
G__1036.cljs$lang$maxFixedArity = 0;
G__1036.cljs$lang$applyTo = (function (arglist__1038){
var args = cljs.core.seq(arglist__1038);
return G__1036__delegate(args);
});
G__1036.cljs$core$IFn$_invoke$arity$variadic = G__1036__delegate;
return G__1036;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
