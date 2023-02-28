// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13710 = arguments.length;
switch (G__13710) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13711 = (function (f,blockable,meta13712){
this.f = f;
this.blockable = blockable;
this.meta13712 = meta13712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13713,meta13712__$1){
var self__ = this;
var _13713__$1 = this;
return (new cljs.core.async.t_cljs$core$async13711(self__.f,self__.blockable,meta13712__$1));
}));

(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13713){
var self__ = this;
var _13713__$1 = this;
return self__.meta13712;
}));

(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13712","meta13712",1590957646,null)], null);
}));

(cljs.core.async.t_cljs$core$async13711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13711");

(cljs.core.async.t_cljs$core$async13711.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async13711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13711.
 */
cljs.core.async.__GT_t_cljs$core$async13711 = (function cljs$core$async$__GT_t_cljs$core$async13711(f__$1,blockable__$1,meta13712){
return (new cljs.core.async.t_cljs$core$async13711(f__$1,blockable__$1,meta13712));
});

}

return (new cljs.core.async.t_cljs$core$async13711(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13717 = arguments.length;
switch (G__13717) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13720 = arguments.length;
switch (G__13720) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13723 = arguments.length;
switch (G__13723) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13725 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13725);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13725);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13727 = arguments.length;
switch (G__13727) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___13729 = n;
var x_13730 = (0);
while(true){
if((x_13730 < n__5636__auto___13729)){
(a[x_13730] = x_13730);

var G__13731 = (x_13730 + (1));
x_13730 = G__13731;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13732 = (function (flag,meta13733){
this.flag = flag;
this.meta13733 = meta13733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13734,meta13733__$1){
var self__ = this;
var _13734__$1 = this;
return (new cljs.core.async.t_cljs$core$async13732(self__.flag,meta13733__$1));
}));

(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13734){
var self__ = this;
var _13734__$1 = this;
return self__.meta13733;
}));

(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13733","meta13733",-168578537,null)], null);
}));

(cljs.core.async.t_cljs$core$async13732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13732");

(cljs.core.async.t_cljs$core$async13732.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async13732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13732.
 */
cljs.core.async.__GT_t_cljs$core$async13732 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13732(flag__$1,meta13733){
return (new cljs.core.async.t_cljs$core$async13732(flag__$1,meta13733));
});

}

return (new cljs.core.async.t_cljs$core$async13732(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13735 = (function (flag,cb,meta13736){
this.flag = flag;
this.cb = cb;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13737,meta13736__$1){
var self__ = this;
var _13737__$1 = this;
return (new cljs.core.async.t_cljs$core$async13735(self__.flag,self__.cb,meta13736__$1));
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13737){
var self__ = this;
var _13737__$1 = this;
return self__.meta13736;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13736","meta13736",1710898726,null)], null);
}));

(cljs.core.async.t_cljs$core$async13735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13735");

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async13735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13735.
 */
cljs.core.async.__GT_t_cljs$core$async13735 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13735(flag__$1,cb__$1,meta13736){
return (new cljs.core.async.t_cljs$core$async13735(flag__$1,cb__$1,meta13736));
});

}

return (new cljs.core.async.t_cljs$core$async13735(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__13738_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13738_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__13739_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13739_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13740 = (i + (1));
i = G__13740;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13745 = arguments.length;
var i__5770__auto___13746 = (0);
while(true){
if((i__5770__auto___13746 < len__5769__auto___13745)){
args__5775__auto__.push((arguments[i__5770__auto___13746]));

var G__13747 = (i__5770__auto___13746 + (1));
i__5770__auto___13746 = G__13747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13743){
var map__13744 = p__13743;
var map__13744__$1 = cljs.core.__destructure_map.call(null,map__13744);
var opts = map__13744__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13741){
var G__13742 = cljs.core.first.call(null,seq13741);
var seq13741__$1 = cljs.core.next.call(null,seq13741);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13742,seq13741__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13749 = arguments.length;
switch (G__13749) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13650__auto___13796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_13773){
var state_val_13774 = (state_13773[(1)]);
if((state_val_13774 === (7))){
var inst_13769 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13775_13797 = state_13773__$1;
(statearr_13775_13797[(2)] = inst_13769);

(statearr_13775_13797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (1))){
var state_13773__$1 = state_13773;
var statearr_13776_13798 = state_13773__$1;
(statearr_13776_13798[(2)] = null);

(statearr_13776_13798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (4))){
var inst_13752 = (state_13773[(7)]);
var inst_13752__$1 = (state_13773[(2)]);
var inst_13753 = (inst_13752__$1 == null);
var state_13773__$1 = (function (){var statearr_13777 = state_13773;
(statearr_13777[(7)] = inst_13752__$1);

return statearr_13777;
})();
if(cljs.core.truth_(inst_13753)){
var statearr_13778_13799 = state_13773__$1;
(statearr_13778_13799[(1)] = (5));

} else {
var statearr_13779_13800 = state_13773__$1;
(statearr_13779_13800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (13))){
var state_13773__$1 = state_13773;
var statearr_13780_13801 = state_13773__$1;
(statearr_13780_13801[(2)] = null);

(statearr_13780_13801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (6))){
var inst_13752 = (state_13773[(7)]);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13773__$1,(11),to,inst_13752);
} else {
if((state_val_13774 === (3))){
var inst_13771 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13773__$1,inst_13771);
} else {
if((state_val_13774 === (12))){
var state_13773__$1 = state_13773;
var statearr_13781_13802 = state_13773__$1;
(statearr_13781_13802[(2)] = null);

(statearr_13781_13802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (2))){
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13773__$1,(4),from);
} else {
if((state_val_13774 === (11))){
var inst_13762 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
if(cljs.core.truth_(inst_13762)){
var statearr_13782_13803 = state_13773__$1;
(statearr_13782_13803[(1)] = (12));

} else {
var statearr_13783_13804 = state_13773__$1;
(statearr_13783_13804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (9))){
var state_13773__$1 = state_13773;
var statearr_13784_13805 = state_13773__$1;
(statearr_13784_13805[(2)] = null);

(statearr_13784_13805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (5))){
var state_13773__$1 = state_13773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13785_13806 = state_13773__$1;
(statearr_13785_13806[(1)] = (8));

} else {
var statearr_13786_13807 = state_13773__$1;
(statearr_13786_13807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (14))){
var inst_13767 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13787_13808 = state_13773__$1;
(statearr_13787_13808[(2)] = inst_13767);

(statearr_13787_13808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (10))){
var inst_13759 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13788_13809 = state_13773__$1;
(statearr_13788_13809[(2)] = inst_13759);

(statearr_13788_13809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (8))){
var inst_13756 = cljs.core.async.close_BANG_.call(null,to);
var state_13773__$1 = state_13773;
var statearr_13789_13810 = state_13773__$1;
(statearr_13789_13810[(2)] = inst_13756);

(statearr_13789_13810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_13790 = [null,null,null,null,null,null,null,null];
(statearr_13790[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_13790[(1)] = (1));

return statearr_13790;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_13773){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13791){var ex__13580__auto__ = e13791;
var statearr_13792_13811 = state_13773;
(statearr_13792_13811[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13773[(4)]))){
var statearr_13793_13812 = state_13773;
(statearr_13793_13812[(1)] = cljs.core.first.call(null,(state_13773[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13813 = state_13773;
state_13773 = G__13813;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_13773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_13773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_13794 = f__13651__auto__.call(null);
(statearr_13794[(6)] = c__13650__auto___13796);

return statearr_13794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__13814){
var vec__13815 = p__13814;
var v = cljs.core.nth.call(null,vec__13815,(0),null);
var p = cljs.core.nth.call(null,vec__13815,(1),null);
var job = vec__13815;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13650__auto___13991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_13822){
var state_val_13823 = (state_13822[(1)]);
if((state_val_13823 === (1))){
var state_13822__$1 = state_13822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13822__$1,(2),res,v);
} else {
if((state_val_13823 === (2))){
var inst_13819 = (state_13822[(2)]);
var inst_13820 = cljs.core.async.close_BANG_.call(null,res);
var state_13822__$1 = (function (){var statearr_13824 = state_13822;
(statearr_13824[(7)] = inst_13819);

return statearr_13824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13822__$1,inst_13820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_13825 = [null,null,null,null,null,null,null,null];
(statearr_13825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__);

(statearr_13825[(1)] = (1));

return statearr_13825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1 = (function (state_13822){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13826){var ex__13580__auto__ = e13826;
var statearr_13827_13992 = state_13822;
(statearr_13827_13992[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13822[(4)]))){
var statearr_13828_13993 = state_13822;
(statearr_13828_13993[(1)] = cljs.core.first.call(null,(state_13822[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13994 = state_13822;
state_13822 = G__13994;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = function(state_13822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1.call(this,state_13822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_13829 = f__13651__auto__.call(null);
(statearr_13829[(6)] = c__13650__auto___13991);

return statearr_13829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13830){
var vec__13831 = p__13830;
var v = cljs.core.nth.call(null,vec__13831,(0),null);
var p = cljs.core.nth.call(null,vec__13831,(1),null);
var job = vec__13831;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___13995 = n;
var __13996 = (0);
while(true){
if((__13996 < n__5636__auto___13995)){
var G__13834_13997 = type;
var G__13834_13998__$1 = (((G__13834_13997 instanceof cljs.core.Keyword))?G__13834_13997.fqn:null);
switch (G__13834_13998__$1) {
case "compute":
var c__13650__auto___14000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13996,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = ((function (__13996,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function (state_13847){
var state_val_13848 = (state_13847[(1)]);
if((state_val_13848 === (1))){
var state_13847__$1 = state_13847;
var statearr_13849_14001 = state_13847__$1;
(statearr_13849_14001[(2)] = null);

(statearr_13849_14001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13848 === (2))){
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13847__$1,(4),jobs);
} else {
if((state_val_13848 === (3))){
var inst_13845 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13847__$1,inst_13845);
} else {
if((state_val_13848 === (4))){
var inst_13837 = (state_13847[(2)]);
var inst_13838 = process__$1.call(null,inst_13837);
var state_13847__$1 = state_13847;
if(cljs.core.truth_(inst_13838)){
var statearr_13850_14002 = state_13847__$1;
(statearr_13850_14002[(1)] = (5));

} else {
var statearr_13851_14003 = state_13847__$1;
(statearr_13851_14003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13848 === (5))){
var state_13847__$1 = state_13847;
var statearr_13852_14004 = state_13847__$1;
(statearr_13852_14004[(2)] = null);

(statearr_13852_14004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13848 === (6))){
var state_13847__$1 = state_13847;
var statearr_13853_14005 = state_13847__$1;
(statearr_13853_14005[(2)] = null);

(statearr_13853_14005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13848 === (7))){
var inst_13843 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
var statearr_13854_14006 = state_13847__$1;
(statearr_13854_14006[(2)] = inst_13843);

(statearr_13854_14006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13996,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
;
return ((function (__13996,switch__13576__auto__,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_13855 = [null,null,null,null,null,null,null];
(statearr_13855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__);

(statearr_13855[(1)] = (1));

return statearr_13855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1 = (function (state_13847){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13856){var ex__13580__auto__ = e13856;
var statearr_13857_14007 = state_13847;
(statearr_13857_14007[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13847[(4)]))){
var statearr_13858_14008 = state_13847;
(statearr_13858_14008[(1)] = cljs.core.first.call(null,(state_13847[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14009 = state_13847;
state_13847 = G__14009;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = function(state_13847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1.call(this,state_13847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__;
})()
;})(__13996,switch__13576__auto__,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
})();
var state__13652__auto__ = (function (){var statearr_13859 = f__13651__auto__.call(null);
(statearr_13859[(6)] = c__13650__auto___14000);

return statearr_13859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
});})(__13996,c__13650__auto___14000,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
);


break;
case "async":
var c__13650__auto___14010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13996,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = ((function (__13996,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function (state_13872){
var state_val_13873 = (state_13872[(1)]);
if((state_val_13873 === (1))){
var state_13872__$1 = state_13872;
var statearr_13874_14011 = state_13872__$1;
(statearr_13874_14011[(2)] = null);

(statearr_13874_14011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (2))){
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13872__$1,(4),jobs);
} else {
if((state_val_13873 === (3))){
var inst_13870 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13872__$1,inst_13870);
} else {
if((state_val_13873 === (4))){
var inst_13862 = (state_13872[(2)]);
var inst_13863 = async.call(null,inst_13862);
var state_13872__$1 = state_13872;
if(cljs.core.truth_(inst_13863)){
var statearr_13875_14012 = state_13872__$1;
(statearr_13875_14012[(1)] = (5));

} else {
var statearr_13876_14013 = state_13872__$1;
(statearr_13876_14013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (5))){
var state_13872__$1 = state_13872;
var statearr_13877_14014 = state_13872__$1;
(statearr_13877_14014[(2)] = null);

(statearr_13877_14014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (6))){
var state_13872__$1 = state_13872;
var statearr_13878_14015 = state_13872__$1;
(statearr_13878_14015[(2)] = null);

(statearr_13878_14015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13873 === (7))){
var inst_13868 = (state_13872[(2)]);
var state_13872__$1 = state_13872;
var statearr_13879_14016 = state_13872__$1;
(statearr_13879_14016[(2)] = inst_13868);

(statearr_13879_14016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13996,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
;
return ((function (__13996,switch__13576__auto__,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_13880 = [null,null,null,null,null,null,null];
(statearr_13880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__);

(statearr_13880[(1)] = (1));

return statearr_13880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1 = (function (state_13872){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13881){var ex__13580__auto__ = e13881;
var statearr_13882_14017 = state_13872;
(statearr_13882_14017[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13872[(4)]))){
var statearr_13883_14018 = state_13872;
(statearr_13883_14018[(1)] = cljs.core.first.call(null,(state_13872[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14019 = state_13872;
state_13872 = G__14019;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = function(state_13872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1.call(this,state_13872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__;
})()
;})(__13996,switch__13576__auto__,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
})();
var state__13652__auto__ = (function (){var statearr_13884 = f__13651__auto__.call(null);
(statearr_13884[(6)] = c__13650__auto___14010);

return statearr_13884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
});})(__13996,c__13650__auto___14010,G__13834_13997,G__13834_13998__$1,n__5636__auto___13995,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13834_13998__$1)].join('')));

}

var G__14020 = (__13996 + (1));
__13996 = G__14020;
continue;
} else {
}
break;
}

var c__13650__auto___14021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_13906){
var state_val_13907 = (state_13906[(1)]);
if((state_val_13907 === (7))){
var inst_13902 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13908_14022 = state_13906__$1;
(statearr_13908_14022[(2)] = inst_13902);

(statearr_13908_14022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (1))){
var state_13906__$1 = state_13906;
var statearr_13909_14023 = state_13906__$1;
(statearr_13909_14023[(2)] = null);

(statearr_13909_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (4))){
var inst_13887 = (state_13906[(7)]);
var inst_13887__$1 = (state_13906[(2)]);
var inst_13888 = (inst_13887__$1 == null);
var state_13906__$1 = (function (){var statearr_13910 = state_13906;
(statearr_13910[(7)] = inst_13887__$1);

return statearr_13910;
})();
if(cljs.core.truth_(inst_13888)){
var statearr_13911_14024 = state_13906__$1;
(statearr_13911_14024[(1)] = (5));

} else {
var statearr_13912_14025 = state_13906__$1;
(statearr_13912_14025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (6))){
var inst_13887 = (state_13906[(7)]);
var inst_13892 = (state_13906[(8)]);
var inst_13892__$1 = cljs.core.async.chan.call(null,(1));
var inst_13893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13894 = [inst_13887,inst_13892__$1];
var inst_13895 = (new cljs.core.PersistentVector(null,2,(5),inst_13893,inst_13894,null));
var state_13906__$1 = (function (){var statearr_13913 = state_13906;
(statearr_13913[(8)] = inst_13892__$1);

return statearr_13913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,(8),jobs,inst_13895);
} else {
if((state_val_13907 === (3))){
var inst_13904 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13906__$1,inst_13904);
} else {
if((state_val_13907 === (2))){
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13906__$1,(4),from);
} else {
if((state_val_13907 === (9))){
var inst_13899 = (state_13906[(2)]);
var state_13906__$1 = (function (){var statearr_13914 = state_13906;
(statearr_13914[(9)] = inst_13899);

return statearr_13914;
})();
var statearr_13915_14026 = state_13906__$1;
(statearr_13915_14026[(2)] = null);

(statearr_13915_14026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (5))){
var inst_13890 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13906__$1 = state_13906;
var statearr_13916_14027 = state_13906__$1;
(statearr_13916_14027[(2)] = inst_13890);

(statearr_13916_14027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (8))){
var inst_13892 = (state_13906[(8)]);
var inst_13897 = (state_13906[(2)]);
var state_13906__$1 = (function (){var statearr_13917 = state_13906;
(statearr_13917[(10)] = inst_13897);

return statearr_13917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,(9),results,inst_13892);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_13918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__);

(statearr_13918[(1)] = (1));

return statearr_13918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1 = (function (state_13906){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13919){var ex__13580__auto__ = e13919;
var statearr_13920_14028 = state_13906;
(statearr_13920_14028[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13906[(4)]))){
var statearr_13921_14029 = state_13906;
(statearr_13921_14029[(1)] = cljs.core.first.call(null,(state_13906[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14030 = state_13906;
state_13906 = G__14030;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = function(state_13906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1.call(this,state_13906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_13922 = f__13651__auto__.call(null);
(statearr_13922[(6)] = c__13650__auto___14021);

return statearr_13922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


var c__13650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_13960){
var state_val_13961 = (state_13960[(1)]);
if((state_val_13961 === (7))){
var inst_13956 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
var statearr_13962_14031 = state_13960__$1;
(statearr_13962_14031[(2)] = inst_13956);

(statearr_13962_14031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (20))){
var state_13960__$1 = state_13960;
var statearr_13963_14032 = state_13960__$1;
(statearr_13963_14032[(2)] = null);

(statearr_13963_14032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (1))){
var state_13960__$1 = state_13960;
var statearr_13964_14033 = state_13960__$1;
(statearr_13964_14033[(2)] = null);

(statearr_13964_14033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (4))){
var inst_13925 = (state_13960[(7)]);
var inst_13925__$1 = (state_13960[(2)]);
var inst_13926 = (inst_13925__$1 == null);
var state_13960__$1 = (function (){var statearr_13965 = state_13960;
(statearr_13965[(7)] = inst_13925__$1);

return statearr_13965;
})();
if(cljs.core.truth_(inst_13926)){
var statearr_13966_14034 = state_13960__$1;
(statearr_13966_14034[(1)] = (5));

} else {
var statearr_13967_14035 = state_13960__$1;
(statearr_13967_14035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (15))){
var inst_13938 = (state_13960[(8)]);
var state_13960__$1 = state_13960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13960__$1,(18),to,inst_13938);
} else {
if((state_val_13961 === (21))){
var inst_13951 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
var statearr_13968_14036 = state_13960__$1;
(statearr_13968_14036[(2)] = inst_13951);

(statearr_13968_14036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (13))){
var inst_13953 = (state_13960[(2)]);
var state_13960__$1 = (function (){var statearr_13969 = state_13960;
(statearr_13969[(9)] = inst_13953);

return statearr_13969;
})();
var statearr_13970_14037 = state_13960__$1;
(statearr_13970_14037[(2)] = null);

(statearr_13970_14037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (6))){
var inst_13925 = (state_13960[(7)]);
var state_13960__$1 = state_13960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13960__$1,(11),inst_13925);
} else {
if((state_val_13961 === (17))){
var inst_13946 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
if(cljs.core.truth_(inst_13946)){
var statearr_13971_14038 = state_13960__$1;
(statearr_13971_14038[(1)] = (19));

} else {
var statearr_13972_14039 = state_13960__$1;
(statearr_13972_14039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (3))){
var inst_13958 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13960__$1,inst_13958);
} else {
if((state_val_13961 === (12))){
var inst_13935 = (state_13960[(10)]);
var state_13960__$1 = state_13960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13960__$1,(14),inst_13935);
} else {
if((state_val_13961 === (2))){
var state_13960__$1 = state_13960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13960__$1,(4),results);
} else {
if((state_val_13961 === (19))){
var state_13960__$1 = state_13960;
var statearr_13973_14040 = state_13960__$1;
(statearr_13973_14040[(2)] = null);

(statearr_13973_14040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (11))){
var inst_13935 = (state_13960[(2)]);
var state_13960__$1 = (function (){var statearr_13974 = state_13960;
(statearr_13974[(10)] = inst_13935);

return statearr_13974;
})();
var statearr_13975_14041 = state_13960__$1;
(statearr_13975_14041[(2)] = null);

(statearr_13975_14041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (9))){
var state_13960__$1 = state_13960;
var statearr_13976_14042 = state_13960__$1;
(statearr_13976_14042[(2)] = null);

(statearr_13976_14042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (5))){
var state_13960__$1 = state_13960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13977_14043 = state_13960__$1;
(statearr_13977_14043[(1)] = (8));

} else {
var statearr_13978_14044 = state_13960__$1;
(statearr_13978_14044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (14))){
var inst_13938 = (state_13960[(8)]);
var inst_13940 = (state_13960[(11)]);
var inst_13938__$1 = (state_13960[(2)]);
var inst_13939 = (inst_13938__$1 == null);
var inst_13940__$1 = cljs.core.not.call(null,inst_13939);
var state_13960__$1 = (function (){var statearr_13979 = state_13960;
(statearr_13979[(8)] = inst_13938__$1);

(statearr_13979[(11)] = inst_13940__$1);

return statearr_13979;
})();
if(inst_13940__$1){
var statearr_13980_14045 = state_13960__$1;
(statearr_13980_14045[(1)] = (15));

} else {
var statearr_13981_14046 = state_13960__$1;
(statearr_13981_14046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (16))){
var inst_13940 = (state_13960[(11)]);
var state_13960__$1 = state_13960;
var statearr_13982_14047 = state_13960__$1;
(statearr_13982_14047[(2)] = inst_13940);

(statearr_13982_14047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (10))){
var inst_13932 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
var statearr_13983_14048 = state_13960__$1;
(statearr_13983_14048[(2)] = inst_13932);

(statearr_13983_14048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (18))){
var inst_13943 = (state_13960[(2)]);
var state_13960__$1 = state_13960;
var statearr_13984_14049 = state_13960__$1;
(statearr_13984_14049[(2)] = inst_13943);

(statearr_13984_14049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13961 === (8))){
var inst_13929 = cljs.core.async.close_BANG_.call(null,to);
var state_13960__$1 = state_13960;
var statearr_13985_14050 = state_13960__$1;
(statearr_13985_14050[(2)] = inst_13929);

(statearr_13985_14050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_13986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__);

(statearr_13986[(1)] = (1));

return statearr_13986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1 = (function (state_13960){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_13960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e13987){var ex__13580__auto__ = e13987;
var statearr_13988_14051 = state_13960;
(statearr_13988_14051[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_13960[(4)]))){
var statearr_13989_14052 = state_13960;
(statearr_13989_14052[(1)] = cljs.core.first.call(null,(state_13960[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14053 = state_13960;
state_13960 = G__14053;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__ = function(state_13960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1.call(this,state_13960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_13990 = f__13651__auto__.call(null);
(statearr_13990[(6)] = c__13650__auto__);

return statearr_13990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

return c__13650__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14055 = arguments.length;
switch (G__14055) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14058 = arguments.length;
switch (G__14058) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14061 = arguments.length;
switch (G__14061) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13650__auto___14111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14087){
var state_val_14088 = (state_14087[(1)]);
if((state_val_14088 === (7))){
var inst_14083 = (state_14087[(2)]);
var state_14087__$1 = state_14087;
var statearr_14089_14112 = state_14087__$1;
(statearr_14089_14112[(2)] = inst_14083);

(statearr_14089_14112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (1))){
var state_14087__$1 = state_14087;
var statearr_14090_14113 = state_14087__$1;
(statearr_14090_14113[(2)] = null);

(statearr_14090_14113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (4))){
var inst_14064 = (state_14087[(7)]);
var inst_14064__$1 = (state_14087[(2)]);
var inst_14065 = (inst_14064__$1 == null);
var state_14087__$1 = (function (){var statearr_14091 = state_14087;
(statearr_14091[(7)] = inst_14064__$1);

return statearr_14091;
})();
if(cljs.core.truth_(inst_14065)){
var statearr_14092_14114 = state_14087__$1;
(statearr_14092_14114[(1)] = (5));

} else {
var statearr_14093_14115 = state_14087__$1;
(statearr_14093_14115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (13))){
var state_14087__$1 = state_14087;
var statearr_14094_14116 = state_14087__$1;
(statearr_14094_14116[(2)] = null);

(statearr_14094_14116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (6))){
var inst_14064 = (state_14087[(7)]);
var inst_14070 = p.call(null,inst_14064);
var state_14087__$1 = state_14087;
if(cljs.core.truth_(inst_14070)){
var statearr_14095_14117 = state_14087__$1;
(statearr_14095_14117[(1)] = (9));

} else {
var statearr_14096_14118 = state_14087__$1;
(statearr_14096_14118[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (3))){
var inst_14085 = (state_14087[(2)]);
var state_14087__$1 = state_14087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14087__$1,inst_14085);
} else {
if((state_val_14088 === (12))){
var state_14087__$1 = state_14087;
var statearr_14097_14119 = state_14087__$1;
(statearr_14097_14119[(2)] = null);

(statearr_14097_14119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (2))){
var state_14087__$1 = state_14087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14087__$1,(4),ch);
} else {
if((state_val_14088 === (11))){
var inst_14064 = (state_14087[(7)]);
var inst_14074 = (state_14087[(2)]);
var state_14087__$1 = state_14087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14087__$1,(8),inst_14074,inst_14064);
} else {
if((state_val_14088 === (9))){
var state_14087__$1 = state_14087;
var statearr_14098_14120 = state_14087__$1;
(statearr_14098_14120[(2)] = tc);

(statearr_14098_14120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (5))){
var inst_14067 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14068 = cljs.core.async.close_BANG_.call(null,fc);
var state_14087__$1 = (function (){var statearr_14099 = state_14087;
(statearr_14099[(8)] = inst_14067);

return statearr_14099;
})();
var statearr_14100_14121 = state_14087__$1;
(statearr_14100_14121[(2)] = inst_14068);

(statearr_14100_14121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (14))){
var inst_14081 = (state_14087[(2)]);
var state_14087__$1 = state_14087;
var statearr_14101_14122 = state_14087__$1;
(statearr_14101_14122[(2)] = inst_14081);

(statearr_14101_14122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (10))){
var state_14087__$1 = state_14087;
var statearr_14102_14123 = state_14087__$1;
(statearr_14102_14123[(2)] = fc);

(statearr_14102_14123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14088 === (8))){
var inst_14076 = (state_14087[(2)]);
var state_14087__$1 = state_14087;
if(cljs.core.truth_(inst_14076)){
var statearr_14103_14124 = state_14087__$1;
(statearr_14103_14124[(1)] = (12));

} else {
var statearr_14104_14125 = state_14087__$1;
(statearr_14104_14125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_14105 = [null,null,null,null,null,null,null,null,null];
(statearr_14105[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_14105[(1)] = (1));

return statearr_14105;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_14087){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14106){var ex__13580__auto__ = e14106;
var statearr_14107_14126 = state_14087;
(statearr_14107_14126[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14087[(4)]))){
var statearr_14108_14127 = state_14087;
(statearr_14108_14127[(1)] = cljs.core.first.call(null,(state_14087[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14128 = state_14087;
state_14087 = G__14128;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_14087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_14087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14109 = f__13651__auto__.call(null);
(statearr_14109[(6)] = c__13650__auto___14111);

return statearr_14109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14150){
var state_val_14151 = (state_14150[(1)]);
if((state_val_14151 === (7))){
var inst_14146 = (state_14150[(2)]);
var state_14150__$1 = state_14150;
var statearr_14152_14171 = state_14150__$1;
(statearr_14152_14171[(2)] = inst_14146);

(statearr_14152_14171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (1))){
var inst_14129 = init;
var inst_14130 = inst_14129;
var state_14150__$1 = (function (){var statearr_14153 = state_14150;
(statearr_14153[(7)] = inst_14130);

return statearr_14153;
})();
var statearr_14154_14172 = state_14150__$1;
(statearr_14154_14172[(2)] = null);

(statearr_14154_14172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (4))){
var inst_14133 = (state_14150[(8)]);
var inst_14133__$1 = (state_14150[(2)]);
var inst_14134 = (inst_14133__$1 == null);
var state_14150__$1 = (function (){var statearr_14155 = state_14150;
(statearr_14155[(8)] = inst_14133__$1);

return statearr_14155;
})();
if(cljs.core.truth_(inst_14134)){
var statearr_14156_14173 = state_14150__$1;
(statearr_14156_14173[(1)] = (5));

} else {
var statearr_14157_14174 = state_14150__$1;
(statearr_14157_14174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (6))){
var inst_14130 = (state_14150[(7)]);
var inst_14133 = (state_14150[(8)]);
var inst_14137 = (state_14150[(9)]);
var inst_14137__$1 = f.call(null,inst_14130,inst_14133);
var inst_14138 = cljs.core.reduced_QMARK_.call(null,inst_14137__$1);
var state_14150__$1 = (function (){var statearr_14158 = state_14150;
(statearr_14158[(9)] = inst_14137__$1);

return statearr_14158;
})();
if(inst_14138){
var statearr_14159_14175 = state_14150__$1;
(statearr_14159_14175[(1)] = (8));

} else {
var statearr_14160_14176 = state_14150__$1;
(statearr_14160_14176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (3))){
var inst_14148 = (state_14150[(2)]);
var state_14150__$1 = state_14150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14150__$1,inst_14148);
} else {
if((state_val_14151 === (2))){
var state_14150__$1 = state_14150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14150__$1,(4),ch);
} else {
if((state_val_14151 === (9))){
var inst_14137 = (state_14150[(9)]);
var inst_14130 = inst_14137;
var state_14150__$1 = (function (){var statearr_14161 = state_14150;
(statearr_14161[(7)] = inst_14130);

return statearr_14161;
})();
var statearr_14162_14177 = state_14150__$1;
(statearr_14162_14177[(2)] = null);

(statearr_14162_14177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (5))){
var inst_14130 = (state_14150[(7)]);
var state_14150__$1 = state_14150;
var statearr_14163_14178 = state_14150__$1;
(statearr_14163_14178[(2)] = inst_14130);

(statearr_14163_14178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (10))){
var inst_14144 = (state_14150[(2)]);
var state_14150__$1 = state_14150;
var statearr_14164_14179 = state_14150__$1;
(statearr_14164_14179[(2)] = inst_14144);

(statearr_14164_14179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14151 === (8))){
var inst_14137 = (state_14150[(9)]);
var inst_14140 = cljs.core.deref.call(null,inst_14137);
var state_14150__$1 = state_14150;
var statearr_14165_14180 = state_14150__$1;
(statearr_14165_14180[(2)] = inst_14140);

(statearr_14165_14180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13577__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13577__auto____0 = (function (){
var statearr_14166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14166[(0)] = cljs$core$async$reduce_$_state_machine__13577__auto__);

(statearr_14166[(1)] = (1));

return statearr_14166;
});
var cljs$core$async$reduce_$_state_machine__13577__auto____1 = (function (state_14150){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14167){var ex__13580__auto__ = e14167;
var statearr_14168_14181 = state_14150;
(statearr_14168_14181[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14150[(4)]))){
var statearr_14169_14182 = state_14150;
(statearr_14169_14182[(1)] = cljs.core.first.call(null,(state_14150[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14183 = state_14150;
state_14150 = G__14183;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13577__auto__ = function(state_14150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13577__auto____1.call(this,state_14150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13577__auto____0;
cljs$core$async$reduce_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13577__auto____1;
return cljs$core$async$reduce_$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14170 = f__13651__auto__.call(null);
(statearr_14170[(6)] = c__13650__auto__);

return statearr_14170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

return c__13650__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14189){
var state_val_14190 = (state_14189[(1)]);
if((state_val_14190 === (1))){
var inst_14184 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14189__$1 = state_14189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14189__$1,(2),inst_14184);
} else {
if((state_val_14190 === (2))){
var inst_14186 = (state_14189[(2)]);
var inst_14187 = f__$1.call(null,inst_14186);
var state_14189__$1 = state_14189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14189__$1,inst_14187);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13577__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13577__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null];
(statearr_14191[(0)] = cljs$core$async$transduce_$_state_machine__13577__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var cljs$core$async$transduce_$_state_machine__13577__auto____1 = (function (state_14189){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14192){var ex__13580__auto__ = e14192;
var statearr_14193_14196 = state_14189;
(statearr_14193_14196[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14189[(4)]))){
var statearr_14194_14197 = state_14189;
(statearr_14194_14197[(1)] = cljs.core.first.call(null,(state_14189[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14198 = state_14189;
state_14189 = G__14198;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13577__auto__ = function(state_14189){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13577__auto____1.call(this,state_14189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13577__auto____0;
cljs$core$async$transduce_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13577__auto____1;
return cljs$core$async$transduce_$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14195 = f__13651__auto__.call(null);
(statearr_14195[(6)] = c__13650__auto__);

return statearr_14195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

return c__13650__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14200 = arguments.length;
switch (G__14200) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14225){
var state_val_14226 = (state_14225[(1)]);
if((state_val_14226 === (7))){
var inst_14207 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14227_14249 = state_14225__$1;
(statearr_14227_14249[(2)] = inst_14207);

(statearr_14227_14249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (1))){
var inst_14201 = cljs.core.seq.call(null,coll);
var inst_14202 = inst_14201;
var state_14225__$1 = (function (){var statearr_14228 = state_14225;
(statearr_14228[(7)] = inst_14202);

return statearr_14228;
})();
var statearr_14229_14250 = state_14225__$1;
(statearr_14229_14250[(2)] = null);

(statearr_14229_14250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (4))){
var inst_14202 = (state_14225[(7)]);
var inst_14205 = cljs.core.first.call(null,inst_14202);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14225__$1,(7),ch,inst_14205);
} else {
if((state_val_14226 === (13))){
var inst_14219 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14230_14251 = state_14225__$1;
(statearr_14230_14251[(2)] = inst_14219);

(statearr_14230_14251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (6))){
var inst_14210 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
if(cljs.core.truth_(inst_14210)){
var statearr_14231_14252 = state_14225__$1;
(statearr_14231_14252[(1)] = (8));

} else {
var statearr_14232_14253 = state_14225__$1;
(statearr_14232_14253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (3))){
var inst_14223 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14225__$1,inst_14223);
} else {
if((state_val_14226 === (12))){
var state_14225__$1 = state_14225;
var statearr_14233_14254 = state_14225__$1;
(statearr_14233_14254[(2)] = null);

(statearr_14233_14254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (2))){
var inst_14202 = (state_14225[(7)]);
var state_14225__$1 = state_14225;
if(cljs.core.truth_(inst_14202)){
var statearr_14234_14255 = state_14225__$1;
(statearr_14234_14255[(1)] = (4));

} else {
var statearr_14235_14256 = state_14225__$1;
(statearr_14235_14256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (11))){
var inst_14216 = cljs.core.async.close_BANG_.call(null,ch);
var state_14225__$1 = state_14225;
var statearr_14236_14257 = state_14225__$1;
(statearr_14236_14257[(2)] = inst_14216);

(statearr_14236_14257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (9))){
var state_14225__$1 = state_14225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14237_14258 = state_14225__$1;
(statearr_14237_14258[(1)] = (11));

} else {
var statearr_14238_14259 = state_14225__$1;
(statearr_14238_14259[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (5))){
var inst_14202 = (state_14225[(7)]);
var state_14225__$1 = state_14225;
var statearr_14239_14260 = state_14225__$1;
(statearr_14239_14260[(2)] = inst_14202);

(statearr_14239_14260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (10))){
var inst_14221 = (state_14225[(2)]);
var state_14225__$1 = state_14225;
var statearr_14240_14261 = state_14225__$1;
(statearr_14240_14261[(2)] = inst_14221);

(statearr_14240_14261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14226 === (8))){
var inst_14202 = (state_14225[(7)]);
var inst_14212 = cljs.core.next.call(null,inst_14202);
var inst_14202__$1 = inst_14212;
var state_14225__$1 = (function (){var statearr_14241 = state_14225;
(statearr_14241[(7)] = inst_14202__$1);

return statearr_14241;
})();
var statearr_14242_14262 = state_14225__$1;
(statearr_14242_14262[(2)] = null);

(statearr_14242_14262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_14243 = [null,null,null,null,null,null,null,null];
(statearr_14243[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_14243[(1)] = (1));

return statearr_14243;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_14225){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14244){var ex__13580__auto__ = e14244;
var statearr_14245_14263 = state_14225;
(statearr_14245_14263[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14225[(4)]))){
var statearr_14246_14264 = state_14225;
(statearr_14246_14264[(1)] = cljs.core.first.call(null,(state_14225[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14265 = state_14225;
state_14225 = G__14265;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_14225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_14225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14247 = f__13651__auto__.call(null);
(statearr_14247[(6)] = c__13650__auto__);

return statearr_14247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

return c__13650__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14267 = arguments.length;
switch (G__14267) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14269 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14269.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14270 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14270.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14271 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14271.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14272 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14272.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14273 = (function (ch,cs,meta14274){
this.ch = ch;
this.cs = cs;
this.meta14274 = meta14274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14275,meta14274__$1){
var self__ = this;
var _14275__$1 = this;
return (new cljs.core.async.t_cljs$core$async14273(self__.ch,self__.cs,meta14274__$1));
}));

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14275){
var self__ = this;
var _14275__$1 = this;
return self__.meta14274;
}));

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14273.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14274","meta14274",1630538785,null)], null);
}));

(cljs.core.async.t_cljs$core$async14273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14273");

(cljs.core.async.t_cljs$core$async14273.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async14273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14273.
 */
cljs.core.async.__GT_t_cljs$core$async14273 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14273(ch__$1,cs__$1,meta14274){
return (new cljs.core.async.t_cljs$core$async14273(ch__$1,cs__$1,meta14274));
});

}

return (new cljs.core.async.t_cljs$core$async14273(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__13650__auto___14492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14408){
var state_val_14409 = (state_14408[(1)]);
if((state_val_14409 === (7))){
var inst_14404 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14410_14493 = state_14408__$1;
(statearr_14410_14493[(2)] = inst_14404);

(statearr_14410_14493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (20))){
var inst_14309 = (state_14408[(7)]);
var inst_14321 = cljs.core.first.call(null,inst_14309);
var inst_14322 = cljs.core.nth.call(null,inst_14321,(0),null);
var inst_14323 = cljs.core.nth.call(null,inst_14321,(1),null);
var state_14408__$1 = (function (){var statearr_14411 = state_14408;
(statearr_14411[(8)] = inst_14322);

return statearr_14411;
})();
if(cljs.core.truth_(inst_14323)){
var statearr_14412_14494 = state_14408__$1;
(statearr_14412_14494[(1)] = (22));

} else {
var statearr_14413_14495 = state_14408__$1;
(statearr_14413_14495[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (27))){
var inst_14351 = (state_14408[(9)]);
var inst_14353 = (state_14408[(10)]);
var inst_14358 = (state_14408[(11)]);
var inst_14278 = (state_14408[(12)]);
var inst_14358__$1 = cljs.core._nth.call(null,inst_14351,inst_14353);
var inst_14359 = cljs.core.async.put_BANG_.call(null,inst_14358__$1,inst_14278,done);
var state_14408__$1 = (function (){var statearr_14414 = state_14408;
(statearr_14414[(11)] = inst_14358__$1);

return statearr_14414;
})();
if(cljs.core.truth_(inst_14359)){
var statearr_14415_14496 = state_14408__$1;
(statearr_14415_14496[(1)] = (30));

} else {
var statearr_14416_14497 = state_14408__$1;
(statearr_14416_14497[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (1))){
var state_14408__$1 = state_14408;
var statearr_14417_14498 = state_14408__$1;
(statearr_14417_14498[(2)] = null);

(statearr_14417_14498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (24))){
var inst_14309 = (state_14408[(7)]);
var inst_14328 = (state_14408[(2)]);
var inst_14329 = cljs.core.next.call(null,inst_14309);
var inst_14287 = inst_14329;
var inst_14288 = null;
var inst_14289 = (0);
var inst_14290 = (0);
var state_14408__$1 = (function (){var statearr_14418 = state_14408;
(statearr_14418[(13)] = inst_14328);

(statearr_14418[(14)] = inst_14287);

(statearr_14418[(15)] = inst_14288);

(statearr_14418[(16)] = inst_14289);

(statearr_14418[(17)] = inst_14290);

return statearr_14418;
})();
var statearr_14419_14499 = state_14408__$1;
(statearr_14419_14499[(2)] = null);

(statearr_14419_14499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (39))){
var state_14408__$1 = state_14408;
var statearr_14423_14500 = state_14408__$1;
(statearr_14423_14500[(2)] = null);

(statearr_14423_14500[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (4))){
var inst_14278 = (state_14408[(12)]);
var inst_14278__$1 = (state_14408[(2)]);
var inst_14279 = (inst_14278__$1 == null);
var state_14408__$1 = (function (){var statearr_14424 = state_14408;
(statearr_14424[(12)] = inst_14278__$1);

return statearr_14424;
})();
if(cljs.core.truth_(inst_14279)){
var statearr_14425_14501 = state_14408__$1;
(statearr_14425_14501[(1)] = (5));

} else {
var statearr_14426_14502 = state_14408__$1;
(statearr_14426_14502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (15))){
var inst_14290 = (state_14408[(17)]);
var inst_14287 = (state_14408[(14)]);
var inst_14288 = (state_14408[(15)]);
var inst_14289 = (state_14408[(16)]);
var inst_14305 = (state_14408[(2)]);
var inst_14306 = (inst_14290 + (1));
var tmp14420 = inst_14289;
var tmp14421 = inst_14287;
var tmp14422 = inst_14288;
var inst_14287__$1 = tmp14421;
var inst_14288__$1 = tmp14422;
var inst_14289__$1 = tmp14420;
var inst_14290__$1 = inst_14306;
var state_14408__$1 = (function (){var statearr_14427 = state_14408;
(statearr_14427[(18)] = inst_14305);

(statearr_14427[(14)] = inst_14287__$1);

(statearr_14427[(15)] = inst_14288__$1);

(statearr_14427[(16)] = inst_14289__$1);

(statearr_14427[(17)] = inst_14290__$1);

return statearr_14427;
})();
var statearr_14428_14503 = state_14408__$1;
(statearr_14428_14503[(2)] = null);

(statearr_14428_14503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (21))){
var inst_14332 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14432_14504 = state_14408__$1;
(statearr_14432_14504[(2)] = inst_14332);

(statearr_14432_14504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (31))){
var inst_14358 = (state_14408[(11)]);
var inst_14362 = cljs.core.async.untap_STAR_.call(null,m,inst_14358);
var state_14408__$1 = state_14408;
var statearr_14433_14505 = state_14408__$1;
(statearr_14433_14505[(2)] = inst_14362);

(statearr_14433_14505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (32))){
var inst_14353 = (state_14408[(10)]);
var inst_14350 = (state_14408[(19)]);
var inst_14351 = (state_14408[(9)]);
var inst_14352 = (state_14408[(20)]);
var inst_14364 = (state_14408[(2)]);
var inst_14365 = (inst_14353 + (1));
var tmp14429 = inst_14352;
var tmp14430 = inst_14351;
var tmp14431 = inst_14350;
var inst_14350__$1 = tmp14431;
var inst_14351__$1 = tmp14430;
var inst_14352__$1 = tmp14429;
var inst_14353__$1 = inst_14365;
var state_14408__$1 = (function (){var statearr_14434 = state_14408;
(statearr_14434[(21)] = inst_14364);

(statearr_14434[(19)] = inst_14350__$1);

(statearr_14434[(9)] = inst_14351__$1);

(statearr_14434[(20)] = inst_14352__$1);

(statearr_14434[(10)] = inst_14353__$1);

return statearr_14434;
})();
var statearr_14435_14506 = state_14408__$1;
(statearr_14435_14506[(2)] = null);

(statearr_14435_14506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (40))){
var inst_14377 = (state_14408[(22)]);
var inst_14381 = cljs.core.async.untap_STAR_.call(null,m,inst_14377);
var state_14408__$1 = state_14408;
var statearr_14436_14507 = state_14408__$1;
(statearr_14436_14507[(2)] = inst_14381);

(statearr_14436_14507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (33))){
var inst_14368 = (state_14408[(23)]);
var inst_14370 = cljs.core.chunked_seq_QMARK_.call(null,inst_14368);
var state_14408__$1 = state_14408;
if(inst_14370){
var statearr_14437_14508 = state_14408__$1;
(statearr_14437_14508[(1)] = (36));

} else {
var statearr_14438_14509 = state_14408__$1;
(statearr_14438_14509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (13))){
var inst_14299 = (state_14408[(24)]);
var inst_14302 = cljs.core.async.close_BANG_.call(null,inst_14299);
var state_14408__$1 = state_14408;
var statearr_14439_14510 = state_14408__$1;
(statearr_14439_14510[(2)] = inst_14302);

(statearr_14439_14510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (22))){
var inst_14322 = (state_14408[(8)]);
var inst_14325 = cljs.core.async.close_BANG_.call(null,inst_14322);
var state_14408__$1 = state_14408;
var statearr_14440_14511 = state_14408__$1;
(statearr_14440_14511[(2)] = inst_14325);

(statearr_14440_14511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (36))){
var inst_14368 = (state_14408[(23)]);
var inst_14372 = cljs.core.chunk_first.call(null,inst_14368);
var inst_14373 = cljs.core.chunk_rest.call(null,inst_14368);
var inst_14374 = cljs.core.count.call(null,inst_14372);
var inst_14350 = inst_14373;
var inst_14351 = inst_14372;
var inst_14352 = inst_14374;
var inst_14353 = (0);
var state_14408__$1 = (function (){var statearr_14441 = state_14408;
(statearr_14441[(19)] = inst_14350);

(statearr_14441[(9)] = inst_14351);

(statearr_14441[(20)] = inst_14352);

(statearr_14441[(10)] = inst_14353);

return statearr_14441;
})();
var statearr_14442_14512 = state_14408__$1;
(statearr_14442_14512[(2)] = null);

(statearr_14442_14512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (41))){
var inst_14368 = (state_14408[(23)]);
var inst_14383 = (state_14408[(2)]);
var inst_14384 = cljs.core.next.call(null,inst_14368);
var inst_14350 = inst_14384;
var inst_14351 = null;
var inst_14352 = (0);
var inst_14353 = (0);
var state_14408__$1 = (function (){var statearr_14443 = state_14408;
(statearr_14443[(25)] = inst_14383);

(statearr_14443[(19)] = inst_14350);

(statearr_14443[(9)] = inst_14351);

(statearr_14443[(20)] = inst_14352);

(statearr_14443[(10)] = inst_14353);

return statearr_14443;
})();
var statearr_14444_14513 = state_14408__$1;
(statearr_14444_14513[(2)] = null);

(statearr_14444_14513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (43))){
var state_14408__$1 = state_14408;
var statearr_14445_14514 = state_14408__$1;
(statearr_14445_14514[(2)] = null);

(statearr_14445_14514[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (29))){
var inst_14392 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14446_14515 = state_14408__$1;
(statearr_14446_14515[(2)] = inst_14392);

(statearr_14446_14515[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (44))){
var inst_14401 = (state_14408[(2)]);
var state_14408__$1 = (function (){var statearr_14447 = state_14408;
(statearr_14447[(26)] = inst_14401);

return statearr_14447;
})();
var statearr_14448_14516 = state_14408__$1;
(statearr_14448_14516[(2)] = null);

(statearr_14448_14516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (6))){
var inst_14342 = (state_14408[(27)]);
var inst_14341 = cljs.core.deref.call(null,cs);
var inst_14342__$1 = cljs.core.keys.call(null,inst_14341);
var inst_14343 = cljs.core.count.call(null,inst_14342__$1);
var inst_14344 = cljs.core.reset_BANG_.call(null,dctr,inst_14343);
var inst_14349 = cljs.core.seq.call(null,inst_14342__$1);
var inst_14350 = inst_14349;
var inst_14351 = null;
var inst_14352 = (0);
var inst_14353 = (0);
var state_14408__$1 = (function (){var statearr_14449 = state_14408;
(statearr_14449[(27)] = inst_14342__$1);

(statearr_14449[(28)] = inst_14344);

(statearr_14449[(19)] = inst_14350);

(statearr_14449[(9)] = inst_14351);

(statearr_14449[(20)] = inst_14352);

(statearr_14449[(10)] = inst_14353);

return statearr_14449;
})();
var statearr_14450_14517 = state_14408__$1;
(statearr_14450_14517[(2)] = null);

(statearr_14450_14517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (28))){
var inst_14350 = (state_14408[(19)]);
var inst_14368 = (state_14408[(23)]);
var inst_14368__$1 = cljs.core.seq.call(null,inst_14350);
var state_14408__$1 = (function (){var statearr_14451 = state_14408;
(statearr_14451[(23)] = inst_14368__$1);

return statearr_14451;
})();
if(inst_14368__$1){
var statearr_14452_14518 = state_14408__$1;
(statearr_14452_14518[(1)] = (33));

} else {
var statearr_14453_14519 = state_14408__$1;
(statearr_14453_14519[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (25))){
var inst_14353 = (state_14408[(10)]);
var inst_14352 = (state_14408[(20)]);
var inst_14355 = (inst_14353 < inst_14352);
var inst_14356 = inst_14355;
var state_14408__$1 = state_14408;
if(cljs.core.truth_(inst_14356)){
var statearr_14454_14520 = state_14408__$1;
(statearr_14454_14520[(1)] = (27));

} else {
var statearr_14455_14521 = state_14408__$1;
(statearr_14455_14521[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (34))){
var state_14408__$1 = state_14408;
var statearr_14456_14522 = state_14408__$1;
(statearr_14456_14522[(2)] = null);

(statearr_14456_14522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (17))){
var state_14408__$1 = state_14408;
var statearr_14457_14523 = state_14408__$1;
(statearr_14457_14523[(2)] = null);

(statearr_14457_14523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (3))){
var inst_14406 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14408__$1,inst_14406);
} else {
if((state_val_14409 === (12))){
var inst_14337 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14458_14524 = state_14408__$1;
(statearr_14458_14524[(2)] = inst_14337);

(statearr_14458_14524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (2))){
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14408__$1,(4),ch);
} else {
if((state_val_14409 === (23))){
var state_14408__$1 = state_14408;
var statearr_14459_14525 = state_14408__$1;
(statearr_14459_14525[(2)] = null);

(statearr_14459_14525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (35))){
var inst_14390 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14460_14526 = state_14408__$1;
(statearr_14460_14526[(2)] = inst_14390);

(statearr_14460_14526[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (19))){
var inst_14309 = (state_14408[(7)]);
var inst_14313 = cljs.core.chunk_first.call(null,inst_14309);
var inst_14314 = cljs.core.chunk_rest.call(null,inst_14309);
var inst_14315 = cljs.core.count.call(null,inst_14313);
var inst_14287 = inst_14314;
var inst_14288 = inst_14313;
var inst_14289 = inst_14315;
var inst_14290 = (0);
var state_14408__$1 = (function (){var statearr_14461 = state_14408;
(statearr_14461[(14)] = inst_14287);

(statearr_14461[(15)] = inst_14288);

(statearr_14461[(16)] = inst_14289);

(statearr_14461[(17)] = inst_14290);

return statearr_14461;
})();
var statearr_14462_14527 = state_14408__$1;
(statearr_14462_14527[(2)] = null);

(statearr_14462_14527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (11))){
var inst_14287 = (state_14408[(14)]);
var inst_14309 = (state_14408[(7)]);
var inst_14309__$1 = cljs.core.seq.call(null,inst_14287);
var state_14408__$1 = (function (){var statearr_14463 = state_14408;
(statearr_14463[(7)] = inst_14309__$1);

return statearr_14463;
})();
if(inst_14309__$1){
var statearr_14464_14528 = state_14408__$1;
(statearr_14464_14528[(1)] = (16));

} else {
var statearr_14465_14529 = state_14408__$1;
(statearr_14465_14529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (9))){
var inst_14339 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14466_14530 = state_14408__$1;
(statearr_14466_14530[(2)] = inst_14339);

(statearr_14466_14530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (5))){
var inst_14285 = cljs.core.deref.call(null,cs);
var inst_14286 = cljs.core.seq.call(null,inst_14285);
var inst_14287 = inst_14286;
var inst_14288 = null;
var inst_14289 = (0);
var inst_14290 = (0);
var state_14408__$1 = (function (){var statearr_14467 = state_14408;
(statearr_14467[(14)] = inst_14287);

(statearr_14467[(15)] = inst_14288);

(statearr_14467[(16)] = inst_14289);

(statearr_14467[(17)] = inst_14290);

return statearr_14467;
})();
var statearr_14468_14531 = state_14408__$1;
(statearr_14468_14531[(2)] = null);

(statearr_14468_14531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (14))){
var state_14408__$1 = state_14408;
var statearr_14469_14532 = state_14408__$1;
(statearr_14469_14532[(2)] = null);

(statearr_14469_14532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (45))){
var inst_14398 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14470_14533 = state_14408__$1;
(statearr_14470_14533[(2)] = inst_14398);

(statearr_14470_14533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (26))){
var inst_14342 = (state_14408[(27)]);
var inst_14394 = (state_14408[(2)]);
var inst_14395 = cljs.core.seq.call(null,inst_14342);
var state_14408__$1 = (function (){var statearr_14471 = state_14408;
(statearr_14471[(29)] = inst_14394);

return statearr_14471;
})();
if(inst_14395){
var statearr_14472_14534 = state_14408__$1;
(statearr_14472_14534[(1)] = (42));

} else {
var statearr_14473_14535 = state_14408__$1;
(statearr_14473_14535[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (16))){
var inst_14309 = (state_14408[(7)]);
var inst_14311 = cljs.core.chunked_seq_QMARK_.call(null,inst_14309);
var state_14408__$1 = state_14408;
if(inst_14311){
var statearr_14474_14536 = state_14408__$1;
(statearr_14474_14536[(1)] = (19));

} else {
var statearr_14475_14537 = state_14408__$1;
(statearr_14475_14537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (38))){
var inst_14387 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14476_14538 = state_14408__$1;
(statearr_14476_14538[(2)] = inst_14387);

(statearr_14476_14538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (30))){
var state_14408__$1 = state_14408;
var statearr_14477_14539 = state_14408__$1;
(statearr_14477_14539[(2)] = null);

(statearr_14477_14539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (10))){
var inst_14288 = (state_14408[(15)]);
var inst_14290 = (state_14408[(17)]);
var inst_14298 = cljs.core._nth.call(null,inst_14288,inst_14290);
var inst_14299 = cljs.core.nth.call(null,inst_14298,(0),null);
var inst_14300 = cljs.core.nth.call(null,inst_14298,(1),null);
var state_14408__$1 = (function (){var statearr_14478 = state_14408;
(statearr_14478[(24)] = inst_14299);

return statearr_14478;
})();
if(cljs.core.truth_(inst_14300)){
var statearr_14479_14540 = state_14408__$1;
(statearr_14479_14540[(1)] = (13));

} else {
var statearr_14480_14541 = state_14408__$1;
(statearr_14480_14541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (18))){
var inst_14335 = (state_14408[(2)]);
var state_14408__$1 = state_14408;
var statearr_14481_14542 = state_14408__$1;
(statearr_14481_14542[(2)] = inst_14335);

(statearr_14481_14542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (42))){
var state_14408__$1 = state_14408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14408__$1,(45),dchan);
} else {
if((state_val_14409 === (37))){
var inst_14368 = (state_14408[(23)]);
var inst_14377 = (state_14408[(22)]);
var inst_14278 = (state_14408[(12)]);
var inst_14377__$1 = cljs.core.first.call(null,inst_14368);
var inst_14378 = cljs.core.async.put_BANG_.call(null,inst_14377__$1,inst_14278,done);
var state_14408__$1 = (function (){var statearr_14482 = state_14408;
(statearr_14482[(22)] = inst_14377__$1);

return statearr_14482;
})();
if(cljs.core.truth_(inst_14378)){
var statearr_14483_14543 = state_14408__$1;
(statearr_14483_14543[(1)] = (39));

} else {
var statearr_14484_14544 = state_14408__$1;
(statearr_14484_14544[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14409 === (8))){
var inst_14290 = (state_14408[(17)]);
var inst_14289 = (state_14408[(16)]);
var inst_14292 = (inst_14290 < inst_14289);
var inst_14293 = inst_14292;
var state_14408__$1 = state_14408;
if(cljs.core.truth_(inst_14293)){
var statearr_14485_14545 = state_14408__$1;
(statearr_14485_14545[(1)] = (10));

} else {
var statearr_14486_14546 = state_14408__$1;
(statearr_14486_14546[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13577__auto__ = null;
var cljs$core$async$mult_$_state_machine__13577__auto____0 = (function (){
var statearr_14487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14487[(0)] = cljs$core$async$mult_$_state_machine__13577__auto__);

(statearr_14487[(1)] = (1));

return statearr_14487;
});
var cljs$core$async$mult_$_state_machine__13577__auto____1 = (function (state_14408){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14488){var ex__13580__auto__ = e14488;
var statearr_14489_14547 = state_14408;
(statearr_14489_14547[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14408[(4)]))){
var statearr_14490_14548 = state_14408;
(statearr_14490_14548[(1)] = cljs.core.first.call(null,(state_14408[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14549 = state_14408;
state_14408 = G__14549;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13577__auto__ = function(state_14408){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13577__auto____1.call(this,state_14408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13577__auto____0;
cljs$core$async$mult_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13577__auto____1;
return cljs$core$async$mult_$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14491 = f__13651__auto__.call(null);
(statearr_14491[(6)] = c__13650__auto___14492);

return statearr_14491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14551 = arguments.length;
switch (G__14551) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14553 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14553.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14554 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14554.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14555 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14555.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14556 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14556.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14557 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14557.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14567 = arguments.length;
var i__5770__auto___14568 = (0);
while(true){
if((i__5770__auto___14568 < len__5769__auto___14567)){
args__5775__auto__.push((arguments[i__5770__auto___14568]));

var G__14569 = (i__5770__auto___14568 + (1));
i__5770__auto___14568 = G__14569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14562){
var map__14563 = p__14562;
var map__14563__$1 = cljs.core.__destructure_map.call(null,map__14563);
var opts = map__14563__$1;
var statearr_14564_14570 = state;
(statearr_14564_14570[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_14565_14571 = state;
(statearr_14565_14571[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14566_14572 = state;
(statearr_14566_14572[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14558){
var G__14559 = cljs.core.first.call(null,seq14558);
var seq14558__$1 = cljs.core.next.call(null,seq14558);
var G__14560 = cljs.core.first.call(null,seq14558__$1);
var seq14558__$2 = cljs.core.next.call(null,seq14558__$1);
var G__14561 = cljs.core.first.call(null,seq14558__$2);
var seq14558__$3 = cljs.core.next.call(null,seq14558__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14559,G__14560,G__14561,seq14558__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14573 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14574){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14574 = meta14574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14575,meta14574__$1){
var self__ = this;
var _14575__$1 = this;
return (new cljs.core.async.t_cljs$core$async14573(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14574__$1));
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14575){
var self__ = this;
var _14575__$1 = this;
return self__.meta14574;
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14574","meta14574",-161073625,null)], null);
}));

(cljs.core.async.t_cljs$core$async14573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14573");

(cljs.core.async.t_cljs$core$async14573.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async14573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14573.
 */
cljs.core.async.__GT_t_cljs$core$async14573 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14573(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14574){
return (new cljs.core.async.t_cljs$core$async14573(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14574));
});

}

return (new cljs.core.async.t_cljs$core$async14573(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13650__auto___14688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14643){
var state_val_14644 = (state_14643[(1)]);
if((state_val_14644 === (7))){
var inst_14603 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
if(cljs.core.truth_(inst_14603)){
var statearr_14645_14689 = state_14643__$1;
(statearr_14645_14689[(1)] = (8));

} else {
var statearr_14646_14690 = state_14643__$1;
(statearr_14646_14690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (20))){
var inst_14596 = (state_14643[(7)]);
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14643__$1,(23),out,inst_14596);
} else {
if((state_val_14644 === (1))){
var inst_14579 = calc_state.call(null);
var inst_14580 = cljs.core.__destructure_map.call(null,inst_14579);
var inst_14581 = cljs.core.get.call(null,inst_14580,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14582 = cljs.core.get.call(null,inst_14580,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14583 = cljs.core.get.call(null,inst_14580,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14584 = inst_14579;
var state_14643__$1 = (function (){var statearr_14647 = state_14643;
(statearr_14647[(8)] = inst_14581);

(statearr_14647[(9)] = inst_14582);

(statearr_14647[(10)] = inst_14583);

(statearr_14647[(11)] = inst_14584);

return statearr_14647;
})();
var statearr_14648_14691 = state_14643__$1;
(statearr_14648_14691[(2)] = null);

(statearr_14648_14691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (24))){
var inst_14587 = (state_14643[(12)]);
var inst_14584 = inst_14587;
var state_14643__$1 = (function (){var statearr_14649 = state_14643;
(statearr_14649[(11)] = inst_14584);

return statearr_14649;
})();
var statearr_14650_14692 = state_14643__$1;
(statearr_14650_14692[(2)] = null);

(statearr_14650_14692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (4))){
var inst_14596 = (state_14643[(7)]);
var inst_14598 = (state_14643[(13)]);
var inst_14595 = (state_14643[(2)]);
var inst_14596__$1 = cljs.core.nth.call(null,inst_14595,(0),null);
var inst_14597 = cljs.core.nth.call(null,inst_14595,(1),null);
var inst_14598__$1 = (inst_14596__$1 == null);
var state_14643__$1 = (function (){var statearr_14651 = state_14643;
(statearr_14651[(7)] = inst_14596__$1);

(statearr_14651[(14)] = inst_14597);

(statearr_14651[(13)] = inst_14598__$1);

return statearr_14651;
})();
if(cljs.core.truth_(inst_14598__$1)){
var statearr_14652_14693 = state_14643__$1;
(statearr_14652_14693[(1)] = (5));

} else {
var statearr_14653_14694 = state_14643__$1;
(statearr_14653_14694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (15))){
var inst_14588 = (state_14643[(15)]);
var inst_14617 = (state_14643[(16)]);
var inst_14617__$1 = cljs.core.empty_QMARK_.call(null,inst_14588);
var state_14643__$1 = (function (){var statearr_14654 = state_14643;
(statearr_14654[(16)] = inst_14617__$1);

return statearr_14654;
})();
if(inst_14617__$1){
var statearr_14655_14695 = state_14643__$1;
(statearr_14655_14695[(1)] = (17));

} else {
var statearr_14656_14696 = state_14643__$1;
(statearr_14656_14696[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (21))){
var inst_14587 = (state_14643[(12)]);
var inst_14584 = inst_14587;
var state_14643__$1 = (function (){var statearr_14657 = state_14643;
(statearr_14657[(11)] = inst_14584);

return statearr_14657;
})();
var statearr_14658_14697 = state_14643__$1;
(statearr_14658_14697[(2)] = null);

(statearr_14658_14697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (13))){
var inst_14610 = (state_14643[(2)]);
var inst_14611 = calc_state.call(null);
var inst_14584 = inst_14611;
var state_14643__$1 = (function (){var statearr_14659 = state_14643;
(statearr_14659[(17)] = inst_14610);

(statearr_14659[(11)] = inst_14584);

return statearr_14659;
})();
var statearr_14660_14698 = state_14643__$1;
(statearr_14660_14698[(2)] = null);

(statearr_14660_14698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (22))){
var inst_14637 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14661_14699 = state_14643__$1;
(statearr_14661_14699[(2)] = inst_14637);

(statearr_14661_14699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (6))){
var inst_14597 = (state_14643[(14)]);
var inst_14601 = cljs.core._EQ_.call(null,inst_14597,change);
var state_14643__$1 = state_14643;
var statearr_14662_14700 = state_14643__$1;
(statearr_14662_14700[(2)] = inst_14601);

(statearr_14662_14700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (25))){
var state_14643__$1 = state_14643;
var statearr_14663_14701 = state_14643__$1;
(statearr_14663_14701[(2)] = null);

(statearr_14663_14701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (17))){
var inst_14589 = (state_14643[(18)]);
var inst_14597 = (state_14643[(14)]);
var inst_14619 = inst_14589.call(null,inst_14597);
var inst_14620 = cljs.core.not.call(null,inst_14619);
var state_14643__$1 = state_14643;
var statearr_14664_14702 = state_14643__$1;
(statearr_14664_14702[(2)] = inst_14620);

(statearr_14664_14702[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (3))){
var inst_14641 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14643__$1,inst_14641);
} else {
if((state_val_14644 === (12))){
var state_14643__$1 = state_14643;
var statearr_14665_14703 = state_14643__$1;
(statearr_14665_14703[(2)] = null);

(statearr_14665_14703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (2))){
var inst_14584 = (state_14643[(11)]);
var inst_14587 = (state_14643[(12)]);
var inst_14587__$1 = cljs.core.__destructure_map.call(null,inst_14584);
var inst_14588 = cljs.core.get.call(null,inst_14587__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14589 = cljs.core.get.call(null,inst_14587__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14590 = cljs.core.get.call(null,inst_14587__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14643__$1 = (function (){var statearr_14666 = state_14643;
(statearr_14666[(12)] = inst_14587__$1);

(statearr_14666[(15)] = inst_14588);

(statearr_14666[(18)] = inst_14589);

return statearr_14666;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14643__$1,(4),inst_14590);
} else {
if((state_val_14644 === (23))){
var inst_14628 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
if(cljs.core.truth_(inst_14628)){
var statearr_14667_14704 = state_14643__$1;
(statearr_14667_14704[(1)] = (24));

} else {
var statearr_14668_14705 = state_14643__$1;
(statearr_14668_14705[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (19))){
var inst_14623 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14669_14706 = state_14643__$1;
(statearr_14669_14706[(2)] = inst_14623);

(statearr_14669_14706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (11))){
var inst_14597 = (state_14643[(14)]);
var inst_14607 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14597);
var state_14643__$1 = state_14643;
var statearr_14670_14707 = state_14643__$1;
(statearr_14670_14707[(2)] = inst_14607);

(statearr_14670_14707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (9))){
var inst_14588 = (state_14643[(15)]);
var inst_14597 = (state_14643[(14)]);
var inst_14614 = (state_14643[(19)]);
var inst_14614__$1 = inst_14588.call(null,inst_14597);
var state_14643__$1 = (function (){var statearr_14671 = state_14643;
(statearr_14671[(19)] = inst_14614__$1);

return statearr_14671;
})();
if(cljs.core.truth_(inst_14614__$1)){
var statearr_14672_14708 = state_14643__$1;
(statearr_14672_14708[(1)] = (14));

} else {
var statearr_14673_14709 = state_14643__$1;
(statearr_14673_14709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (5))){
var inst_14598 = (state_14643[(13)]);
var state_14643__$1 = state_14643;
var statearr_14674_14710 = state_14643__$1;
(statearr_14674_14710[(2)] = inst_14598);

(statearr_14674_14710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (14))){
var inst_14614 = (state_14643[(19)]);
var state_14643__$1 = state_14643;
var statearr_14675_14711 = state_14643__$1;
(statearr_14675_14711[(2)] = inst_14614);

(statearr_14675_14711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (26))){
var inst_14633 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14676_14712 = state_14643__$1;
(statearr_14676_14712[(2)] = inst_14633);

(statearr_14676_14712[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (16))){
var inst_14625 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
if(cljs.core.truth_(inst_14625)){
var statearr_14677_14713 = state_14643__$1;
(statearr_14677_14713[(1)] = (20));

} else {
var statearr_14678_14714 = state_14643__$1;
(statearr_14678_14714[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (10))){
var inst_14639 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14679_14715 = state_14643__$1;
(statearr_14679_14715[(2)] = inst_14639);

(statearr_14679_14715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (18))){
var inst_14617 = (state_14643[(16)]);
var state_14643__$1 = state_14643;
var statearr_14680_14716 = state_14643__$1;
(statearr_14680_14716[(2)] = inst_14617);

(statearr_14680_14716[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (8))){
var inst_14596 = (state_14643[(7)]);
var inst_14605 = (inst_14596 == null);
var state_14643__$1 = state_14643;
if(cljs.core.truth_(inst_14605)){
var statearr_14681_14717 = state_14643__$1;
(statearr_14681_14717[(1)] = (11));

} else {
var statearr_14682_14718 = state_14643__$1;
(statearr_14682_14718[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13577__auto__ = null;
var cljs$core$async$mix_$_state_machine__13577__auto____0 = (function (){
var statearr_14683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14683[(0)] = cljs$core$async$mix_$_state_machine__13577__auto__);

(statearr_14683[(1)] = (1));

return statearr_14683;
});
var cljs$core$async$mix_$_state_machine__13577__auto____1 = (function (state_14643){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14684){var ex__13580__auto__ = e14684;
var statearr_14685_14719 = state_14643;
(statearr_14685_14719[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14643[(4)]))){
var statearr_14686_14720 = state_14643;
(statearr_14686_14720[(1)] = cljs.core.first.call(null,(state_14643[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14721 = state_14643;
state_14643 = G__14721;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13577__auto__ = function(state_14643){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13577__auto____1.call(this,state_14643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13577__auto____0;
cljs$core$async$mix_$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13577__auto____1;
return cljs$core$async$mix_$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14687 = f__13651__auto__.call(null);
(statearr_14687[(6)] = c__13650__auto___14688);

return statearr_14687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14724 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14724.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14725 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14725.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14726 = (function() {
var G__14727 = null;
var G__14727__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__14727__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__14727 = function(p,v){
switch(arguments.length){
case 1:
return G__14727__1.call(this,p);
case 2:
return G__14727__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14727.cljs$core$IFn$_invoke$arity$1 = G__14727__1;
G__14727.cljs$core$IFn$_invoke$arity$2 = G__14727__2;
return G__14727;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14723 = arguments.length;
switch (G__14723) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14726.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14726.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14731 = arguments.length;
switch (G__14731) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14729_SHARP_){
if(cljs.core.truth_(p1__14729_SHARP_.call(null,topic))){
return p1__14729_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14729_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14732 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14733){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14733 = meta14733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14734,meta14733__$1){
var self__ = this;
var _14734__$1 = this;
return (new cljs.core.async.t_cljs$core$async14732(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14733__$1));
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14734){
var self__ = this;
var _14734__$1 = this;
return self__.meta14733;
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14733","meta14733",-1544331360,null)], null);
}));

(cljs.core.async.t_cljs$core$async14732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14732");

(cljs.core.async.t_cljs$core$async14732.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async14732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14732.
 */
cljs.core.async.__GT_t_cljs$core$async14732 = (function cljs$core$async$__GT_t_cljs$core$async14732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14733){
return (new cljs.core.async.t_cljs$core$async14732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14733));
});

}

return (new cljs.core.async.t_cljs$core$async14732(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13650__auto___14853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14806){
var state_val_14807 = (state_14806[(1)]);
if((state_val_14807 === (7))){
var inst_14802 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14808_14854 = state_14806__$1;
(statearr_14808_14854[(2)] = inst_14802);

(statearr_14808_14854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (20))){
var state_14806__$1 = state_14806;
var statearr_14809_14855 = state_14806__$1;
(statearr_14809_14855[(2)] = null);

(statearr_14809_14855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (1))){
var state_14806__$1 = state_14806;
var statearr_14810_14856 = state_14806__$1;
(statearr_14810_14856[(2)] = null);

(statearr_14810_14856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (24))){
var inst_14785 = (state_14806[(7)]);
var inst_14794 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14785);
var state_14806__$1 = state_14806;
var statearr_14811_14857 = state_14806__$1;
(statearr_14811_14857[(2)] = inst_14794);

(statearr_14811_14857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (4))){
var inst_14737 = (state_14806[(8)]);
var inst_14737__$1 = (state_14806[(2)]);
var inst_14738 = (inst_14737__$1 == null);
var state_14806__$1 = (function (){var statearr_14812 = state_14806;
(statearr_14812[(8)] = inst_14737__$1);

return statearr_14812;
})();
if(cljs.core.truth_(inst_14738)){
var statearr_14813_14858 = state_14806__$1;
(statearr_14813_14858[(1)] = (5));

} else {
var statearr_14814_14859 = state_14806__$1;
(statearr_14814_14859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (15))){
var inst_14779 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14815_14860 = state_14806__$1;
(statearr_14815_14860[(2)] = inst_14779);

(statearr_14815_14860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (21))){
var inst_14799 = (state_14806[(2)]);
var state_14806__$1 = (function (){var statearr_14816 = state_14806;
(statearr_14816[(9)] = inst_14799);

return statearr_14816;
})();
var statearr_14817_14861 = state_14806__$1;
(statearr_14817_14861[(2)] = null);

(statearr_14817_14861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (13))){
var inst_14761 = (state_14806[(10)]);
var inst_14763 = cljs.core.chunked_seq_QMARK_.call(null,inst_14761);
var state_14806__$1 = state_14806;
if(inst_14763){
var statearr_14818_14862 = state_14806__$1;
(statearr_14818_14862[(1)] = (16));

} else {
var statearr_14819_14863 = state_14806__$1;
(statearr_14819_14863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (22))){
var inst_14791 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
if(cljs.core.truth_(inst_14791)){
var statearr_14820_14864 = state_14806__$1;
(statearr_14820_14864[(1)] = (23));

} else {
var statearr_14821_14865 = state_14806__$1;
(statearr_14821_14865[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (6))){
var inst_14737 = (state_14806[(8)]);
var inst_14785 = (state_14806[(7)]);
var inst_14787 = (state_14806[(11)]);
var inst_14785__$1 = topic_fn.call(null,inst_14737);
var inst_14786 = cljs.core.deref.call(null,mults);
var inst_14787__$1 = cljs.core.get.call(null,inst_14786,inst_14785__$1);
var state_14806__$1 = (function (){var statearr_14822 = state_14806;
(statearr_14822[(7)] = inst_14785__$1);

(statearr_14822[(11)] = inst_14787__$1);

return statearr_14822;
})();
if(cljs.core.truth_(inst_14787__$1)){
var statearr_14823_14866 = state_14806__$1;
(statearr_14823_14866[(1)] = (19));

} else {
var statearr_14824_14867 = state_14806__$1;
(statearr_14824_14867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (25))){
var inst_14796 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14825_14868 = state_14806__$1;
(statearr_14825_14868[(2)] = inst_14796);

(statearr_14825_14868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (17))){
var inst_14761 = (state_14806[(10)]);
var inst_14770 = cljs.core.first.call(null,inst_14761);
var inst_14771 = cljs.core.async.muxch_STAR_.call(null,inst_14770);
var inst_14772 = cljs.core.async.close_BANG_.call(null,inst_14771);
var inst_14773 = cljs.core.next.call(null,inst_14761);
var inst_14747 = inst_14773;
var inst_14748 = null;
var inst_14749 = (0);
var inst_14750 = (0);
var state_14806__$1 = (function (){var statearr_14826 = state_14806;
(statearr_14826[(12)] = inst_14772);

(statearr_14826[(13)] = inst_14747);

(statearr_14826[(14)] = inst_14748);

(statearr_14826[(15)] = inst_14749);

(statearr_14826[(16)] = inst_14750);

return statearr_14826;
})();
var statearr_14827_14869 = state_14806__$1;
(statearr_14827_14869[(2)] = null);

(statearr_14827_14869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (3))){
var inst_14804 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14806__$1,inst_14804);
} else {
if((state_val_14807 === (12))){
var inst_14781 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14828_14870 = state_14806__$1;
(statearr_14828_14870[(2)] = inst_14781);

(statearr_14828_14870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (2))){
var state_14806__$1 = state_14806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14806__$1,(4),ch);
} else {
if((state_val_14807 === (23))){
var state_14806__$1 = state_14806;
var statearr_14829_14871 = state_14806__$1;
(statearr_14829_14871[(2)] = null);

(statearr_14829_14871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (19))){
var inst_14787 = (state_14806[(11)]);
var inst_14737 = (state_14806[(8)]);
var inst_14789 = cljs.core.async.muxch_STAR_.call(null,inst_14787);
var state_14806__$1 = state_14806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14806__$1,(22),inst_14789,inst_14737);
} else {
if((state_val_14807 === (11))){
var inst_14747 = (state_14806[(13)]);
var inst_14761 = (state_14806[(10)]);
var inst_14761__$1 = cljs.core.seq.call(null,inst_14747);
var state_14806__$1 = (function (){var statearr_14830 = state_14806;
(statearr_14830[(10)] = inst_14761__$1);

return statearr_14830;
})();
if(inst_14761__$1){
var statearr_14831_14872 = state_14806__$1;
(statearr_14831_14872[(1)] = (13));

} else {
var statearr_14832_14873 = state_14806__$1;
(statearr_14832_14873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (9))){
var inst_14783 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14833_14874 = state_14806__$1;
(statearr_14833_14874[(2)] = inst_14783);

(statearr_14833_14874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (5))){
var inst_14744 = cljs.core.deref.call(null,mults);
var inst_14745 = cljs.core.vals.call(null,inst_14744);
var inst_14746 = cljs.core.seq.call(null,inst_14745);
var inst_14747 = inst_14746;
var inst_14748 = null;
var inst_14749 = (0);
var inst_14750 = (0);
var state_14806__$1 = (function (){var statearr_14834 = state_14806;
(statearr_14834[(13)] = inst_14747);

(statearr_14834[(14)] = inst_14748);

(statearr_14834[(15)] = inst_14749);

(statearr_14834[(16)] = inst_14750);

return statearr_14834;
})();
var statearr_14835_14875 = state_14806__$1;
(statearr_14835_14875[(2)] = null);

(statearr_14835_14875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (14))){
var state_14806__$1 = state_14806;
var statearr_14839_14876 = state_14806__$1;
(statearr_14839_14876[(2)] = null);

(statearr_14839_14876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (16))){
var inst_14761 = (state_14806[(10)]);
var inst_14765 = cljs.core.chunk_first.call(null,inst_14761);
var inst_14766 = cljs.core.chunk_rest.call(null,inst_14761);
var inst_14767 = cljs.core.count.call(null,inst_14765);
var inst_14747 = inst_14766;
var inst_14748 = inst_14765;
var inst_14749 = inst_14767;
var inst_14750 = (0);
var state_14806__$1 = (function (){var statearr_14840 = state_14806;
(statearr_14840[(13)] = inst_14747);

(statearr_14840[(14)] = inst_14748);

(statearr_14840[(15)] = inst_14749);

(statearr_14840[(16)] = inst_14750);

return statearr_14840;
})();
var statearr_14841_14877 = state_14806__$1;
(statearr_14841_14877[(2)] = null);

(statearr_14841_14877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (10))){
var inst_14748 = (state_14806[(14)]);
var inst_14750 = (state_14806[(16)]);
var inst_14747 = (state_14806[(13)]);
var inst_14749 = (state_14806[(15)]);
var inst_14755 = cljs.core._nth.call(null,inst_14748,inst_14750);
var inst_14756 = cljs.core.async.muxch_STAR_.call(null,inst_14755);
var inst_14757 = cljs.core.async.close_BANG_.call(null,inst_14756);
var inst_14758 = (inst_14750 + (1));
var tmp14836 = inst_14747;
var tmp14837 = inst_14749;
var tmp14838 = inst_14748;
var inst_14747__$1 = tmp14836;
var inst_14748__$1 = tmp14838;
var inst_14749__$1 = tmp14837;
var inst_14750__$1 = inst_14758;
var state_14806__$1 = (function (){var statearr_14842 = state_14806;
(statearr_14842[(17)] = inst_14757);

(statearr_14842[(13)] = inst_14747__$1);

(statearr_14842[(14)] = inst_14748__$1);

(statearr_14842[(15)] = inst_14749__$1);

(statearr_14842[(16)] = inst_14750__$1);

return statearr_14842;
})();
var statearr_14843_14878 = state_14806__$1;
(statearr_14843_14878[(2)] = null);

(statearr_14843_14878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (18))){
var inst_14776 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14844_14879 = state_14806__$1;
(statearr_14844_14879[(2)] = inst_14776);

(statearr_14844_14879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14807 === (8))){
var inst_14750 = (state_14806[(16)]);
var inst_14749 = (state_14806[(15)]);
var inst_14752 = (inst_14750 < inst_14749);
var inst_14753 = inst_14752;
var state_14806__$1 = state_14806;
if(cljs.core.truth_(inst_14753)){
var statearr_14845_14880 = state_14806__$1;
(statearr_14845_14880[(1)] = (10));

} else {
var statearr_14846_14881 = state_14806__$1;
(statearr_14846_14881[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_14847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14847[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_14847[(1)] = (1));

return statearr_14847;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_14806){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14848){var ex__13580__auto__ = e14848;
var statearr_14849_14882 = state_14806;
(statearr_14849_14882[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14806[(4)]))){
var statearr_14850_14883 = state_14806;
(statearr_14850_14883[(1)] = cljs.core.first.call(null,(state_14806[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14884 = state_14806;
state_14806 = G__14884;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_14806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_14806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14851 = f__13651__auto__.call(null);
(statearr_14851[(6)] = c__13650__auto___14853);

return statearr_14851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14886 = arguments.length;
switch (G__14886) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14889 = arguments.length;
switch (G__14889) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14892 = arguments.length;
switch (G__14892) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__13650__auto___14970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_14935){
var state_val_14936 = (state_14935[(1)]);
if((state_val_14936 === (7))){
var state_14935__$1 = state_14935;
var statearr_14937_14971 = state_14935__$1;
(statearr_14937_14971[(2)] = null);

(statearr_14937_14971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (1))){
var state_14935__$1 = state_14935;
var statearr_14938_14972 = state_14935__$1;
(statearr_14938_14972[(2)] = null);

(statearr_14938_14972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (4))){
var inst_14896 = (state_14935[(7)]);
var inst_14895 = (state_14935[(8)]);
var inst_14898 = (inst_14896 < inst_14895);
var state_14935__$1 = state_14935;
if(cljs.core.truth_(inst_14898)){
var statearr_14939_14973 = state_14935__$1;
(statearr_14939_14973[(1)] = (6));

} else {
var statearr_14940_14974 = state_14935__$1;
(statearr_14940_14974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (15))){
var inst_14921 = (state_14935[(9)]);
var inst_14926 = cljs.core.apply.call(null,f,inst_14921);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(17),out,inst_14926);
} else {
if((state_val_14936 === (13))){
var inst_14921 = (state_14935[(9)]);
var inst_14921__$1 = (state_14935[(2)]);
var inst_14922 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14921__$1);
var state_14935__$1 = (function (){var statearr_14941 = state_14935;
(statearr_14941[(9)] = inst_14921__$1);

return statearr_14941;
})();
if(cljs.core.truth_(inst_14922)){
var statearr_14942_14975 = state_14935__$1;
(statearr_14942_14975[(1)] = (14));

} else {
var statearr_14943_14976 = state_14935__$1;
(statearr_14943_14976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (6))){
var state_14935__$1 = state_14935;
var statearr_14944_14977 = state_14935__$1;
(statearr_14944_14977[(2)] = null);

(statearr_14944_14977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (17))){
var inst_14928 = (state_14935[(2)]);
var state_14935__$1 = (function (){var statearr_14946 = state_14935;
(statearr_14946[(10)] = inst_14928);

return statearr_14946;
})();
var statearr_14947_14978 = state_14935__$1;
(statearr_14947_14978[(2)] = null);

(statearr_14947_14978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (3))){
var inst_14933 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else {
if((state_val_14936 === (12))){
var _ = (function (){var statearr_14948 = state_14935;
(statearr_14948[(4)] = cljs.core.rest.call(null,(state_14935[(4)])));

return statearr_14948;
})();
var state_14935__$1 = state_14935;
var ex14945 = (state_14935__$1[(2)]);
var statearr_14949_14979 = state_14935__$1;
(statearr_14949_14979[(5)] = ex14945);


if((ex14945 instanceof Object)){
var statearr_14950_14980 = state_14935__$1;
(statearr_14950_14980[(1)] = (11));

(statearr_14950_14980[(5)] = null);

} else {
throw ex14945;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (2))){
var inst_14894 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14895 = cnt;
var inst_14896 = (0);
var state_14935__$1 = (function (){var statearr_14951 = state_14935;
(statearr_14951[(11)] = inst_14894);

(statearr_14951[(8)] = inst_14895);

(statearr_14951[(7)] = inst_14896);

return statearr_14951;
})();
var statearr_14952_14981 = state_14935__$1;
(statearr_14952_14981[(2)] = null);

(statearr_14952_14981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (11))){
var inst_14900 = (state_14935[(2)]);
var inst_14901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14935__$1 = (function (){var statearr_14953 = state_14935;
(statearr_14953[(12)] = inst_14900);

return statearr_14953;
})();
var statearr_14954_14982 = state_14935__$1;
(statearr_14954_14982[(2)] = inst_14901);

(statearr_14954_14982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (9))){
var inst_14896 = (state_14935[(7)]);
var _ = (function (){var statearr_14955 = state_14935;
(statearr_14955[(4)] = cljs.core.cons.call(null,(12),(state_14935[(4)])));

return statearr_14955;
})();
var inst_14907 = chs__$1.call(null,inst_14896);
var inst_14908 = done.call(null,inst_14896);
var inst_14909 = cljs.core.async.take_BANG_.call(null,inst_14907,inst_14908);
var ___$1 = (function (){var statearr_14956 = state_14935;
(statearr_14956[(4)] = cljs.core.rest.call(null,(state_14935[(4)])));

return statearr_14956;
})();
var state_14935__$1 = state_14935;
var statearr_14957_14983 = state_14935__$1;
(statearr_14957_14983[(2)] = inst_14909);

(statearr_14957_14983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (5))){
var inst_14919 = (state_14935[(2)]);
var state_14935__$1 = (function (){var statearr_14958 = state_14935;
(statearr_14958[(13)] = inst_14919);

return statearr_14958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14935__$1,(13),dchan);
} else {
if((state_val_14936 === (14))){
var inst_14924 = cljs.core.async.close_BANG_.call(null,out);
var state_14935__$1 = state_14935;
var statearr_14959_14984 = state_14935__$1;
(statearr_14959_14984[(2)] = inst_14924);

(statearr_14959_14984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (16))){
var inst_14931 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14960_14985 = state_14935__$1;
(statearr_14960_14985[(2)] = inst_14931);

(statearr_14960_14985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (10))){
var inst_14896 = (state_14935[(7)]);
var inst_14912 = (state_14935[(2)]);
var inst_14913 = (inst_14896 + (1));
var inst_14896__$1 = inst_14913;
var state_14935__$1 = (function (){var statearr_14961 = state_14935;
(statearr_14961[(14)] = inst_14912);

(statearr_14961[(7)] = inst_14896__$1);

return statearr_14961;
})();
var statearr_14962_14986 = state_14935__$1;
(statearr_14962_14986[(2)] = null);

(statearr_14962_14986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (8))){
var inst_14917 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14963_14987 = state_14935__$1;
(statearr_14963_14987[(2)] = inst_14917);

(statearr_14963_14987[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_14964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14964[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_14964[(1)] = (1));

return statearr_14964;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_14935){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_14935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e14965){var ex__13580__auto__ = e14965;
var statearr_14966_14988 = state_14935;
(statearr_14966_14988[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_14935[(4)]))){
var statearr_14967_14989 = state_14935;
(statearr_14967_14989[(1)] = cljs.core.first.call(null,(state_14935[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14990 = state_14935;
state_14935 = G__14990;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_14968 = f__13651__auto__.call(null);
(statearr_14968[(6)] = c__13650__auto___14970);

return statearr_14968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14993 = arguments.length;
switch (G__14993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15025){
var state_val_15026 = (state_15025[(1)]);
if((state_val_15026 === (7))){
var inst_15004 = (state_15025[(7)]);
var inst_15005 = (state_15025[(8)]);
var inst_15004__$1 = (state_15025[(2)]);
var inst_15005__$1 = cljs.core.nth.call(null,inst_15004__$1,(0),null);
var inst_15006 = cljs.core.nth.call(null,inst_15004__$1,(1),null);
var inst_15007 = (inst_15005__$1 == null);
var state_15025__$1 = (function (){var statearr_15027 = state_15025;
(statearr_15027[(7)] = inst_15004__$1);

(statearr_15027[(8)] = inst_15005__$1);

(statearr_15027[(9)] = inst_15006);

return statearr_15027;
})();
if(cljs.core.truth_(inst_15007)){
var statearr_15028_15049 = state_15025__$1;
(statearr_15028_15049[(1)] = (8));

} else {
var statearr_15029_15050 = state_15025__$1;
(statearr_15029_15050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (1))){
var inst_14994 = cljs.core.vec.call(null,chs);
var inst_14995 = inst_14994;
var state_15025__$1 = (function (){var statearr_15030 = state_15025;
(statearr_15030[(10)] = inst_14995);

return statearr_15030;
})();
var statearr_15031_15051 = state_15025__$1;
(statearr_15031_15051[(2)] = null);

(statearr_15031_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (4))){
var inst_14995 = (state_15025[(10)]);
var state_15025__$1 = state_15025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15025__$1,(7),inst_14995);
} else {
if((state_val_15026 === (6))){
var inst_15021 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15032_15052 = state_15025__$1;
(statearr_15032_15052[(2)] = inst_15021);

(statearr_15032_15052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (3))){
var inst_15023 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15025__$1,inst_15023);
} else {
if((state_val_15026 === (2))){
var inst_14995 = (state_15025[(10)]);
var inst_14997 = cljs.core.count.call(null,inst_14995);
var inst_14998 = (inst_14997 > (0));
var state_15025__$1 = state_15025;
if(cljs.core.truth_(inst_14998)){
var statearr_15034_15053 = state_15025__$1;
(statearr_15034_15053[(1)] = (4));

} else {
var statearr_15035_15054 = state_15025__$1;
(statearr_15035_15054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (11))){
var inst_14995 = (state_15025[(10)]);
var inst_15014 = (state_15025[(2)]);
var tmp15033 = inst_14995;
var inst_14995__$1 = tmp15033;
var state_15025__$1 = (function (){var statearr_15036 = state_15025;
(statearr_15036[(11)] = inst_15014);

(statearr_15036[(10)] = inst_14995__$1);

return statearr_15036;
})();
var statearr_15037_15055 = state_15025__$1;
(statearr_15037_15055[(2)] = null);

(statearr_15037_15055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (9))){
var inst_15005 = (state_15025[(8)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15025__$1,(11),out,inst_15005);
} else {
if((state_val_15026 === (5))){
var inst_15019 = cljs.core.async.close_BANG_.call(null,out);
var state_15025__$1 = state_15025;
var statearr_15038_15056 = state_15025__$1;
(statearr_15038_15056[(2)] = inst_15019);

(statearr_15038_15056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (10))){
var inst_15017 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15039_15057 = state_15025__$1;
(statearr_15039_15057[(2)] = inst_15017);

(statearr_15039_15057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (8))){
var inst_14995 = (state_15025[(10)]);
var inst_15004 = (state_15025[(7)]);
var inst_15005 = (state_15025[(8)]);
var inst_15006 = (state_15025[(9)]);
var inst_15009 = (function (){var cs = inst_14995;
var vec__15000 = inst_15004;
var v = inst_15005;
var c = inst_15006;
return (function (p1__14991_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14991_SHARP_);
});
})();
var inst_15010 = cljs.core.filterv.call(null,inst_15009,inst_14995);
var inst_14995__$1 = inst_15010;
var state_15025__$1 = (function (){var statearr_15040 = state_15025;
(statearr_15040[(10)] = inst_14995__$1);

return statearr_15040;
})();
var statearr_15041_15058 = state_15025__$1;
(statearr_15041_15058[(2)] = null);

(statearr_15041_15058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15042[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15042[(1)] = (1));

return statearr_15042;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15025){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15043){var ex__13580__auto__ = e15043;
var statearr_15044_15059 = state_15025;
(statearr_15044_15059[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15025[(4)]))){
var statearr_15045_15060 = state_15025;
(statearr_15045_15060[(1)] = cljs.core.first.call(null,(state_15025[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15061 = state_15025;
state_15025 = G__15061;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15046 = f__13651__auto__.call(null);
(statearr_15046[(6)] = c__13650__auto___15048);

return statearr_15046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15063 = arguments.length;
switch (G__15063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15087){
var state_val_15088 = (state_15087[(1)]);
if((state_val_15088 === (7))){
var inst_15069 = (state_15087[(7)]);
var inst_15069__$1 = (state_15087[(2)]);
var inst_15070 = (inst_15069__$1 == null);
var inst_15071 = cljs.core.not.call(null,inst_15070);
var state_15087__$1 = (function (){var statearr_15089 = state_15087;
(statearr_15089[(7)] = inst_15069__$1);

return statearr_15089;
})();
if(inst_15071){
var statearr_15090_15110 = state_15087__$1;
(statearr_15090_15110[(1)] = (8));

} else {
var statearr_15091_15111 = state_15087__$1;
(statearr_15091_15111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (1))){
var inst_15064 = (0);
var state_15087__$1 = (function (){var statearr_15092 = state_15087;
(statearr_15092[(8)] = inst_15064);

return statearr_15092;
})();
var statearr_15093_15112 = state_15087__$1;
(statearr_15093_15112[(2)] = null);

(statearr_15093_15112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (4))){
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15087__$1,(7),ch);
} else {
if((state_val_15088 === (6))){
var inst_15082 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15094_15113 = state_15087__$1;
(statearr_15094_15113[(2)] = inst_15082);

(statearr_15094_15113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (3))){
var inst_15084 = (state_15087[(2)]);
var inst_15085 = cljs.core.async.close_BANG_.call(null,out);
var state_15087__$1 = (function (){var statearr_15095 = state_15087;
(statearr_15095[(9)] = inst_15084);

return statearr_15095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15087__$1,inst_15085);
} else {
if((state_val_15088 === (2))){
var inst_15064 = (state_15087[(8)]);
var inst_15066 = (inst_15064 < n);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15066)){
var statearr_15096_15114 = state_15087__$1;
(statearr_15096_15114[(1)] = (4));

} else {
var statearr_15097_15115 = state_15087__$1;
(statearr_15097_15115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (11))){
var inst_15064 = (state_15087[(8)]);
var inst_15074 = (state_15087[(2)]);
var inst_15075 = (inst_15064 + (1));
var inst_15064__$1 = inst_15075;
var state_15087__$1 = (function (){var statearr_15098 = state_15087;
(statearr_15098[(10)] = inst_15074);

(statearr_15098[(8)] = inst_15064__$1);

return statearr_15098;
})();
var statearr_15099_15116 = state_15087__$1;
(statearr_15099_15116[(2)] = null);

(statearr_15099_15116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (9))){
var state_15087__$1 = state_15087;
var statearr_15100_15117 = state_15087__$1;
(statearr_15100_15117[(2)] = null);

(statearr_15100_15117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (5))){
var state_15087__$1 = state_15087;
var statearr_15101_15118 = state_15087__$1;
(statearr_15101_15118[(2)] = null);

(statearr_15101_15118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (10))){
var inst_15079 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15102_15119 = state_15087__$1;
(statearr_15102_15119[(2)] = inst_15079);

(statearr_15102_15119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (8))){
var inst_15069 = (state_15087[(7)]);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15087__$1,(11),out,inst_15069);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15103[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15103[(1)] = (1));

return statearr_15103;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15087){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15104){var ex__13580__auto__ = e15104;
var statearr_15105_15120 = state_15087;
(statearr_15105_15120[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15087[(4)]))){
var statearr_15106_15121 = state_15087;
(statearr_15106_15121[(1)] = cljs.core.first.call(null,(state_15087[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15122 = state_15087;
state_15087 = G__15122;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15107 = f__13651__auto__.call(null);
(statearr_15107[(6)] = c__13650__auto___15109);

return statearr_15107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15124 = (function (f,ch,meta15125){
this.f = f;
this.ch = ch;
this.meta15125 = meta15125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15126,meta15125__$1){
var self__ = this;
var _15126__$1 = this;
return (new cljs.core.async.t_cljs$core$async15124(self__.f,self__.ch,meta15125__$1));
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15126){
var self__ = this;
var _15126__$1 = this;
return self__.meta15125;
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15127 = (function (f,ch,meta15125,_,fn1,meta15128){
this.f = f;
this.ch = ch;
this.meta15125 = meta15125;
this._ = _;
this.fn1 = fn1;
this.meta15128 = meta15128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15129,meta15128__$1){
var self__ = this;
var _15129__$1 = this;
return (new cljs.core.async.t_cljs$core$async15127(self__.f,self__.ch,self__.meta15125,self__._,self__.fn1,meta15128__$1));
}));

(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15129){
var self__ = this;
var _15129__$1 = this;
return self__.meta15128;
}));

(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__15123_SHARP_){
return f1.call(null,(((p1__15123_SHARP_ == null))?null:self__.f.call(null,p1__15123_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async15127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15125","meta15125",514418610,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15124","cljs.core.async/t_cljs$core$async15124",771122516,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15128","meta15128",383124606,null)], null);
}));

(cljs.core.async.t_cljs$core$async15127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15127");

(cljs.core.async.t_cljs$core$async15127.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async15127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15127.
 */
cljs.core.async.__GT_t_cljs$core$async15127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15127(f__$1,ch__$1,meta15125__$1,___$2,fn1__$1,meta15128){
return (new cljs.core.async.t_cljs$core$async15127(f__$1,ch__$1,meta15125__$1,___$2,fn1__$1,meta15128));
});

}

return (new cljs.core.async.t_cljs$core$async15127(self__.f,self__.ch,self__.meta15125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15125","meta15125",514418610,null)], null);
}));

(cljs.core.async.t_cljs$core$async15124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15124");

(cljs.core.async.t_cljs$core$async15124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async15124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15124.
 */
cljs.core.async.__GT_t_cljs$core$async15124 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15124(f__$1,ch__$1,meta15125){
return (new cljs.core.async.t_cljs$core$async15124(f__$1,ch__$1,meta15125));
});

}

return (new cljs.core.async.t_cljs$core$async15124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15130 = (function (f,ch,meta15131){
this.f = f;
this.ch = ch;
this.meta15131 = meta15131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15132,meta15131__$1){
var self__ = this;
var _15132__$1 = this;
return (new cljs.core.async.t_cljs$core$async15130(self__.f,self__.ch,meta15131__$1));
}));

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15132){
var self__ = this;
var _15132__$1 = this;
return self__.meta15131;
}));

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async15130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15131","meta15131",-677213839,null)], null);
}));

(cljs.core.async.t_cljs$core$async15130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15130");

(cljs.core.async.t_cljs$core$async15130.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async15130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15130.
 */
cljs.core.async.__GT_t_cljs$core$async15130 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15130(f__$1,ch__$1,meta15131){
return (new cljs.core.async.t_cljs$core$async15130(f__$1,ch__$1,meta15131));
});

}

return (new cljs.core.async.t_cljs$core$async15130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15133 = (function (p,ch,meta15134){
this.p = p;
this.ch = ch;
this.meta15134 = meta15134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15135,meta15134__$1){
var self__ = this;
var _15135__$1 = this;
return (new cljs.core.async.t_cljs$core$async15133(self__.p,self__.ch,meta15134__$1));
}));

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15135){
var self__ = this;
var _15135__$1 = this;
return self__.meta15134;
}));

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15134","meta15134",-927026156,null)], null);
}));

(cljs.core.async.t_cljs$core$async15133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15133");

(cljs.core.async.t_cljs$core$async15133.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async15133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15133.
 */
cljs.core.async.__GT_t_cljs$core$async15133 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15133(p__$1,ch__$1,meta15134){
return (new cljs.core.async.t_cljs$core$async15133(p__$1,ch__$1,meta15134));
});

}

return (new cljs.core.async.t_cljs$core$async15133(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15137 = arguments.length;
switch (G__15137) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15158){
var state_val_15159 = (state_15158[(1)]);
if((state_val_15159 === (7))){
var inst_15154 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15160_15179 = state_15158__$1;
(statearr_15160_15179[(2)] = inst_15154);

(statearr_15160_15179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (1))){
var state_15158__$1 = state_15158;
var statearr_15161_15180 = state_15158__$1;
(statearr_15161_15180[(2)] = null);

(statearr_15161_15180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (4))){
var inst_15140 = (state_15158[(7)]);
var inst_15140__$1 = (state_15158[(2)]);
var inst_15141 = (inst_15140__$1 == null);
var state_15158__$1 = (function (){var statearr_15162 = state_15158;
(statearr_15162[(7)] = inst_15140__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15141)){
var statearr_15163_15181 = state_15158__$1;
(statearr_15163_15181[(1)] = (5));

} else {
var statearr_15164_15182 = state_15158__$1;
(statearr_15164_15182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (6))){
var inst_15140 = (state_15158[(7)]);
var inst_15145 = p.call(null,inst_15140);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15145)){
var statearr_15165_15183 = state_15158__$1;
(statearr_15165_15183[(1)] = (8));

} else {
var statearr_15166_15184 = state_15158__$1;
(statearr_15166_15184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (3))){
var inst_15156 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15158__$1,inst_15156);
} else {
if((state_val_15159 === (2))){
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15158__$1,(4),ch);
} else {
if((state_val_15159 === (11))){
var inst_15148 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15167_15185 = state_15158__$1;
(statearr_15167_15185[(2)] = inst_15148);

(statearr_15167_15185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (9))){
var state_15158__$1 = state_15158;
var statearr_15168_15186 = state_15158__$1;
(statearr_15168_15186[(2)] = null);

(statearr_15168_15186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (5))){
var inst_15143 = cljs.core.async.close_BANG_.call(null,out);
var state_15158__$1 = state_15158;
var statearr_15169_15187 = state_15158__$1;
(statearr_15169_15187[(2)] = inst_15143);

(statearr_15169_15187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (10))){
var inst_15151 = (state_15158[(2)]);
var state_15158__$1 = (function (){var statearr_15170 = state_15158;
(statearr_15170[(8)] = inst_15151);

return statearr_15170;
})();
var statearr_15171_15188 = state_15158__$1;
(statearr_15171_15188[(2)] = null);

(statearr_15171_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (8))){
var inst_15140 = (state_15158[(7)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15158__$1,(11),out,inst_15140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15172 = [null,null,null,null,null,null,null,null,null];
(statearr_15172[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15172[(1)] = (1));

return statearr_15172;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15158){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15173){var ex__13580__auto__ = e15173;
var statearr_15174_15189 = state_15158;
(statearr_15174_15189[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15158[(4)]))){
var statearr_15175_15190 = state_15158;
(statearr_15175_15190[(1)] = cljs.core.first.call(null,(state_15158[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15191 = state_15158;
state_15158 = G__15191;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15176 = f__13651__auto__.call(null);
(statearr_15176[(6)] = c__13650__auto___15178);

return statearr_15176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15193 = arguments.length;
switch (G__15193) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15256){
var state_val_15257 = (state_15256[(1)]);
if((state_val_15257 === (7))){
var inst_15252 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15258_15297 = state_15256__$1;
(statearr_15258_15297[(2)] = inst_15252);

(statearr_15258_15297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (20))){
var inst_15222 = (state_15256[(7)]);
var inst_15233 = (state_15256[(2)]);
var inst_15234 = cljs.core.next.call(null,inst_15222);
var inst_15208 = inst_15234;
var inst_15209 = null;
var inst_15210 = (0);
var inst_15211 = (0);
var state_15256__$1 = (function (){var statearr_15259 = state_15256;
(statearr_15259[(8)] = inst_15233);

(statearr_15259[(9)] = inst_15208);

(statearr_15259[(10)] = inst_15209);

(statearr_15259[(11)] = inst_15210);

(statearr_15259[(12)] = inst_15211);

return statearr_15259;
})();
var statearr_15260_15298 = state_15256__$1;
(statearr_15260_15298[(2)] = null);

(statearr_15260_15298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (1))){
var state_15256__$1 = state_15256;
var statearr_15261_15299 = state_15256__$1;
(statearr_15261_15299[(2)] = null);

(statearr_15261_15299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (4))){
var inst_15197 = (state_15256[(13)]);
var inst_15197__$1 = (state_15256[(2)]);
var inst_15198 = (inst_15197__$1 == null);
var state_15256__$1 = (function (){var statearr_15262 = state_15256;
(statearr_15262[(13)] = inst_15197__$1);

return statearr_15262;
})();
if(cljs.core.truth_(inst_15198)){
var statearr_15263_15300 = state_15256__$1;
(statearr_15263_15300[(1)] = (5));

} else {
var statearr_15264_15301 = state_15256__$1;
(statearr_15264_15301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (15))){
var state_15256__$1 = state_15256;
var statearr_15268_15302 = state_15256__$1;
(statearr_15268_15302[(2)] = null);

(statearr_15268_15302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (21))){
var state_15256__$1 = state_15256;
var statearr_15269_15303 = state_15256__$1;
(statearr_15269_15303[(2)] = null);

(statearr_15269_15303[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (13))){
var inst_15211 = (state_15256[(12)]);
var inst_15208 = (state_15256[(9)]);
var inst_15209 = (state_15256[(10)]);
var inst_15210 = (state_15256[(11)]);
var inst_15218 = (state_15256[(2)]);
var inst_15219 = (inst_15211 + (1));
var tmp15265 = inst_15210;
var tmp15266 = inst_15208;
var tmp15267 = inst_15209;
var inst_15208__$1 = tmp15266;
var inst_15209__$1 = tmp15267;
var inst_15210__$1 = tmp15265;
var inst_15211__$1 = inst_15219;
var state_15256__$1 = (function (){var statearr_15270 = state_15256;
(statearr_15270[(14)] = inst_15218);

(statearr_15270[(9)] = inst_15208__$1);

(statearr_15270[(10)] = inst_15209__$1);

(statearr_15270[(11)] = inst_15210__$1);

(statearr_15270[(12)] = inst_15211__$1);

return statearr_15270;
})();
var statearr_15271_15304 = state_15256__$1;
(statearr_15271_15304[(2)] = null);

(statearr_15271_15304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (22))){
var state_15256__$1 = state_15256;
var statearr_15272_15305 = state_15256__$1;
(statearr_15272_15305[(2)] = null);

(statearr_15272_15305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (6))){
var inst_15197 = (state_15256[(13)]);
var inst_15206 = f.call(null,inst_15197);
var inst_15207 = cljs.core.seq.call(null,inst_15206);
var inst_15208 = inst_15207;
var inst_15209 = null;
var inst_15210 = (0);
var inst_15211 = (0);
var state_15256__$1 = (function (){var statearr_15273 = state_15256;
(statearr_15273[(9)] = inst_15208);

(statearr_15273[(10)] = inst_15209);

(statearr_15273[(11)] = inst_15210);

(statearr_15273[(12)] = inst_15211);

return statearr_15273;
})();
var statearr_15274_15306 = state_15256__$1;
(statearr_15274_15306[(2)] = null);

(statearr_15274_15306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (17))){
var inst_15222 = (state_15256[(7)]);
var inst_15226 = cljs.core.chunk_first.call(null,inst_15222);
var inst_15227 = cljs.core.chunk_rest.call(null,inst_15222);
var inst_15228 = cljs.core.count.call(null,inst_15226);
var inst_15208 = inst_15227;
var inst_15209 = inst_15226;
var inst_15210 = inst_15228;
var inst_15211 = (0);
var state_15256__$1 = (function (){var statearr_15275 = state_15256;
(statearr_15275[(9)] = inst_15208);

(statearr_15275[(10)] = inst_15209);

(statearr_15275[(11)] = inst_15210);

(statearr_15275[(12)] = inst_15211);

return statearr_15275;
})();
var statearr_15276_15307 = state_15256__$1;
(statearr_15276_15307[(2)] = null);

(statearr_15276_15307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (3))){
var inst_15254 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15256__$1,inst_15254);
} else {
if((state_val_15257 === (12))){
var inst_15242 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15277_15308 = state_15256__$1;
(statearr_15277_15308[(2)] = inst_15242);

(statearr_15277_15308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (2))){
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15256__$1,(4),in$);
} else {
if((state_val_15257 === (23))){
var inst_15250 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15278_15309 = state_15256__$1;
(statearr_15278_15309[(2)] = inst_15250);

(statearr_15278_15309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (19))){
var inst_15237 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15279_15310 = state_15256__$1;
(statearr_15279_15310[(2)] = inst_15237);

(statearr_15279_15310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (11))){
var inst_15208 = (state_15256[(9)]);
var inst_15222 = (state_15256[(7)]);
var inst_15222__$1 = cljs.core.seq.call(null,inst_15208);
var state_15256__$1 = (function (){var statearr_15280 = state_15256;
(statearr_15280[(7)] = inst_15222__$1);

return statearr_15280;
})();
if(inst_15222__$1){
var statearr_15281_15311 = state_15256__$1;
(statearr_15281_15311[(1)] = (14));

} else {
var statearr_15282_15312 = state_15256__$1;
(statearr_15282_15312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (9))){
var inst_15244 = (state_15256[(2)]);
var inst_15245 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15256__$1 = (function (){var statearr_15283 = state_15256;
(statearr_15283[(15)] = inst_15244);

return statearr_15283;
})();
if(cljs.core.truth_(inst_15245)){
var statearr_15284_15313 = state_15256__$1;
(statearr_15284_15313[(1)] = (21));

} else {
var statearr_15285_15314 = state_15256__$1;
(statearr_15285_15314[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (5))){
var inst_15200 = cljs.core.async.close_BANG_.call(null,out);
var state_15256__$1 = state_15256;
var statearr_15286_15315 = state_15256__$1;
(statearr_15286_15315[(2)] = inst_15200);

(statearr_15286_15315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (14))){
var inst_15222 = (state_15256[(7)]);
var inst_15224 = cljs.core.chunked_seq_QMARK_.call(null,inst_15222);
var state_15256__$1 = state_15256;
if(inst_15224){
var statearr_15287_15316 = state_15256__$1;
(statearr_15287_15316[(1)] = (17));

} else {
var statearr_15288_15317 = state_15256__$1;
(statearr_15288_15317[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (16))){
var inst_15240 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15289_15318 = state_15256__$1;
(statearr_15289_15318[(2)] = inst_15240);

(statearr_15289_15318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15257 === (10))){
var inst_15209 = (state_15256[(10)]);
var inst_15211 = (state_15256[(12)]);
var inst_15216 = cljs.core._nth.call(null,inst_15209,inst_15211);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15256__$1,(13),out,inst_15216);
} else {
if((state_val_15257 === (18))){
var inst_15222 = (state_15256[(7)]);
var inst_15231 = cljs.core.first.call(null,inst_15222);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15256__$1,(20),out,inst_15231);
} else {
if((state_val_15257 === (8))){
var inst_15211 = (state_15256[(12)]);
var inst_15210 = (state_15256[(11)]);
var inst_15213 = (inst_15211 < inst_15210);
var inst_15214 = inst_15213;
var state_15256__$1 = state_15256;
if(cljs.core.truth_(inst_15214)){
var statearr_15290_15319 = state_15256__$1;
(statearr_15290_15319[(1)] = (10));

} else {
var statearr_15291_15320 = state_15256__$1;
(statearr_15291_15320[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____0 = (function (){
var statearr_15292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15292[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__);

(statearr_15292[(1)] = (1));

return statearr_15292;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____1 = (function (state_15256){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15293){var ex__13580__auto__ = e15293;
var statearr_15294_15321 = state_15256;
(statearr_15294_15321[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15256[(4)]))){
var statearr_15295_15322 = state_15256;
(statearr_15295_15322[(1)] = cljs.core.first.call(null,(state_15256[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15323 = state_15256;
state_15256 = G__15323;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13577__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15296 = f__13651__auto__.call(null);
(statearr_15296[(6)] = c__13650__auto__);

return statearr_15296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));

return c__13650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15325 = arguments.length;
switch (G__15325) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15328 = arguments.length;
switch (G__15328) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15331 = arguments.length;
switch (G__15331) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15355){
var state_val_15356 = (state_15355[(1)]);
if((state_val_15356 === (7))){
var inst_15350 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15357_15380 = state_15355__$1;
(statearr_15357_15380[(2)] = inst_15350);

(statearr_15357_15380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (1))){
var inst_15332 = null;
var state_15355__$1 = (function (){var statearr_15358 = state_15355;
(statearr_15358[(7)] = inst_15332);

return statearr_15358;
})();
var statearr_15359_15381 = state_15355__$1;
(statearr_15359_15381[(2)] = null);

(statearr_15359_15381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (4))){
var inst_15335 = (state_15355[(8)]);
var inst_15335__$1 = (state_15355[(2)]);
var inst_15336 = (inst_15335__$1 == null);
var inst_15337 = cljs.core.not.call(null,inst_15336);
var state_15355__$1 = (function (){var statearr_15360 = state_15355;
(statearr_15360[(8)] = inst_15335__$1);

return statearr_15360;
})();
if(inst_15337){
var statearr_15361_15382 = state_15355__$1;
(statearr_15361_15382[(1)] = (5));

} else {
var statearr_15362_15383 = state_15355__$1;
(statearr_15362_15383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (6))){
var state_15355__$1 = state_15355;
var statearr_15363_15384 = state_15355__$1;
(statearr_15363_15384[(2)] = null);

(statearr_15363_15384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (3))){
var inst_15352 = (state_15355[(2)]);
var inst_15353 = cljs.core.async.close_BANG_.call(null,out);
var state_15355__$1 = (function (){var statearr_15364 = state_15355;
(statearr_15364[(9)] = inst_15352);

return statearr_15364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15355__$1,inst_15353);
} else {
if((state_val_15356 === (2))){
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15355__$1,(4),ch);
} else {
if((state_val_15356 === (11))){
var inst_15335 = (state_15355[(8)]);
var inst_15344 = (state_15355[(2)]);
var inst_15332 = inst_15335;
var state_15355__$1 = (function (){var statearr_15365 = state_15355;
(statearr_15365[(10)] = inst_15344);

(statearr_15365[(7)] = inst_15332);

return statearr_15365;
})();
var statearr_15366_15385 = state_15355__$1;
(statearr_15366_15385[(2)] = null);

(statearr_15366_15385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (9))){
var inst_15335 = (state_15355[(8)]);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(11),out,inst_15335);
} else {
if((state_val_15356 === (5))){
var inst_15335 = (state_15355[(8)]);
var inst_15332 = (state_15355[(7)]);
var inst_15339 = cljs.core._EQ_.call(null,inst_15335,inst_15332);
var state_15355__$1 = state_15355;
if(inst_15339){
var statearr_15368_15386 = state_15355__$1;
(statearr_15368_15386[(1)] = (8));

} else {
var statearr_15369_15387 = state_15355__$1;
(statearr_15369_15387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (10))){
var inst_15347 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15370_15388 = state_15355__$1;
(statearr_15370_15388[(2)] = inst_15347);

(statearr_15370_15388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (8))){
var inst_15332 = (state_15355[(7)]);
var tmp15367 = inst_15332;
var inst_15332__$1 = tmp15367;
var state_15355__$1 = (function (){var statearr_15371 = state_15355;
(statearr_15371[(7)] = inst_15332__$1);

return statearr_15371;
})();
var statearr_15372_15389 = state_15355__$1;
(statearr_15372_15389[(2)] = null);

(statearr_15372_15389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15373[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15373[(1)] = (1));

return statearr_15373;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15355){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15374){var ex__13580__auto__ = e15374;
var statearr_15375_15390 = state_15355;
(statearr_15375_15390[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15355[(4)]))){
var statearr_15376_15391 = state_15355;
(statearr_15376_15391[(1)] = cljs.core.first.call(null,(state_15355[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15392 = state_15355;
state_15355 = G__15392;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15377 = f__13651__auto__.call(null);
(statearr_15377[(6)] = c__13650__auto___15379);

return statearr_15377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15394 = arguments.length;
switch (G__15394) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15432){
var state_val_15433 = (state_15432[(1)]);
if((state_val_15433 === (7))){
var inst_15428 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15434_15462 = state_15432__$1;
(statearr_15434_15462[(2)] = inst_15428);

(statearr_15434_15462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (1))){
var inst_15395 = (new Array(n));
var inst_15396 = inst_15395;
var inst_15397 = (0);
var state_15432__$1 = (function (){var statearr_15435 = state_15432;
(statearr_15435[(7)] = inst_15396);

(statearr_15435[(8)] = inst_15397);

return statearr_15435;
})();
var statearr_15436_15463 = state_15432__$1;
(statearr_15436_15463[(2)] = null);

(statearr_15436_15463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (4))){
var inst_15400 = (state_15432[(9)]);
var inst_15400__$1 = (state_15432[(2)]);
var inst_15401 = (inst_15400__$1 == null);
var inst_15402 = cljs.core.not.call(null,inst_15401);
var state_15432__$1 = (function (){var statearr_15437 = state_15432;
(statearr_15437[(9)] = inst_15400__$1);

return statearr_15437;
})();
if(inst_15402){
var statearr_15438_15464 = state_15432__$1;
(statearr_15438_15464[(1)] = (5));

} else {
var statearr_15439_15465 = state_15432__$1;
(statearr_15439_15465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (15))){
var inst_15422 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15440_15466 = state_15432__$1;
(statearr_15440_15466[(2)] = inst_15422);

(statearr_15440_15466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (13))){
var state_15432__$1 = state_15432;
var statearr_15441_15467 = state_15432__$1;
(statearr_15441_15467[(2)] = null);

(statearr_15441_15467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (6))){
var inst_15397 = (state_15432[(8)]);
var inst_15418 = (inst_15397 > (0));
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15418)){
var statearr_15442_15468 = state_15432__$1;
(statearr_15442_15468[(1)] = (12));

} else {
var statearr_15443_15469 = state_15432__$1;
(statearr_15443_15469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (3))){
var inst_15430 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15432__$1,inst_15430);
} else {
if((state_val_15433 === (12))){
var inst_15396 = (state_15432[(7)]);
var inst_15420 = cljs.core.vec.call(null,inst_15396);
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15432__$1,(15),out,inst_15420);
} else {
if((state_val_15433 === (2))){
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15432__$1,(4),ch);
} else {
if((state_val_15433 === (11))){
var inst_15412 = (state_15432[(2)]);
var inst_15413 = (new Array(n));
var inst_15396 = inst_15413;
var inst_15397 = (0);
var state_15432__$1 = (function (){var statearr_15444 = state_15432;
(statearr_15444[(10)] = inst_15412);

(statearr_15444[(7)] = inst_15396);

(statearr_15444[(8)] = inst_15397);

return statearr_15444;
})();
var statearr_15445_15470 = state_15432__$1;
(statearr_15445_15470[(2)] = null);

(statearr_15445_15470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (9))){
var inst_15396 = (state_15432[(7)]);
var inst_15410 = cljs.core.vec.call(null,inst_15396);
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15432__$1,(11),out,inst_15410);
} else {
if((state_val_15433 === (5))){
var inst_15396 = (state_15432[(7)]);
var inst_15397 = (state_15432[(8)]);
var inst_15400 = (state_15432[(9)]);
var inst_15405 = (state_15432[(11)]);
var inst_15404 = (inst_15396[inst_15397] = inst_15400);
var inst_15405__$1 = (inst_15397 + (1));
var inst_15406 = (inst_15405__$1 < n);
var state_15432__$1 = (function (){var statearr_15446 = state_15432;
(statearr_15446[(12)] = inst_15404);

(statearr_15446[(11)] = inst_15405__$1);

return statearr_15446;
})();
if(cljs.core.truth_(inst_15406)){
var statearr_15447_15471 = state_15432__$1;
(statearr_15447_15471[(1)] = (8));

} else {
var statearr_15448_15472 = state_15432__$1;
(statearr_15448_15472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (14))){
var inst_15425 = (state_15432[(2)]);
var inst_15426 = cljs.core.async.close_BANG_.call(null,out);
var state_15432__$1 = (function (){var statearr_15450 = state_15432;
(statearr_15450[(13)] = inst_15425);

return statearr_15450;
})();
var statearr_15451_15473 = state_15432__$1;
(statearr_15451_15473[(2)] = inst_15426);

(statearr_15451_15473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (10))){
var inst_15416 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15452_15474 = state_15432__$1;
(statearr_15452_15474[(2)] = inst_15416);

(statearr_15452_15474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (8))){
var inst_15396 = (state_15432[(7)]);
var inst_15405 = (state_15432[(11)]);
var tmp15449 = inst_15396;
var inst_15396__$1 = tmp15449;
var inst_15397 = inst_15405;
var state_15432__$1 = (function (){var statearr_15453 = state_15432;
(statearr_15453[(7)] = inst_15396__$1);

(statearr_15453[(8)] = inst_15397);

return statearr_15453;
})();
var statearr_15454_15475 = state_15432__$1;
(statearr_15454_15475[(2)] = null);

(statearr_15454_15475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15455[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15455[(1)] = (1));

return statearr_15455;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15432){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15456){var ex__13580__auto__ = e15456;
var statearr_15457_15476 = state_15432;
(statearr_15457_15476[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15432[(4)]))){
var statearr_15458_15477 = state_15432;
(statearr_15458_15477[(1)] = cljs.core.first.call(null,(state_15432[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15478 = state_15432;
state_15432 = G__15478;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15459 = f__13651__auto__.call(null);
(statearr_15459[(6)] = c__13650__auto___15461);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15480 = arguments.length;
switch (G__15480) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13650__auto___15558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13651__auto__ = (function (){var switch__13576__auto__ = (function (state_15525){
var state_val_15526 = (state_15525[(1)]);
if((state_val_15526 === (7))){
var inst_15521 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15527_15559 = state_15525__$1;
(statearr_15527_15559[(2)] = inst_15521);

(statearr_15527_15559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (1))){
var inst_15481 = [];
var inst_15482 = inst_15481;
var inst_15483 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15525__$1 = (function (){var statearr_15528 = state_15525;
(statearr_15528[(7)] = inst_15482);

(statearr_15528[(8)] = inst_15483);

return statearr_15528;
})();
var statearr_15529_15560 = state_15525__$1;
(statearr_15529_15560[(2)] = null);

(statearr_15529_15560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (4))){
var inst_15486 = (state_15525[(9)]);
var inst_15486__$1 = (state_15525[(2)]);
var inst_15487 = (inst_15486__$1 == null);
var inst_15488 = cljs.core.not.call(null,inst_15487);
var state_15525__$1 = (function (){var statearr_15530 = state_15525;
(statearr_15530[(9)] = inst_15486__$1);

return statearr_15530;
})();
if(inst_15488){
var statearr_15531_15561 = state_15525__$1;
(statearr_15531_15561[(1)] = (5));

} else {
var statearr_15532_15562 = state_15525__$1;
(statearr_15532_15562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (15))){
var inst_15482 = (state_15525[(7)]);
var inst_15513 = cljs.core.vec.call(null,inst_15482);
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15525__$1,(18),out,inst_15513);
} else {
if((state_val_15526 === (13))){
var inst_15508 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15533_15563 = state_15525__$1;
(statearr_15533_15563[(2)] = inst_15508);

(statearr_15533_15563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (6))){
var inst_15482 = (state_15525[(7)]);
var inst_15510 = inst_15482.length;
var inst_15511 = (inst_15510 > (0));
var state_15525__$1 = state_15525;
if(cljs.core.truth_(inst_15511)){
var statearr_15534_15564 = state_15525__$1;
(statearr_15534_15564[(1)] = (15));

} else {
var statearr_15535_15565 = state_15525__$1;
(statearr_15535_15565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (17))){
var inst_15518 = (state_15525[(2)]);
var inst_15519 = cljs.core.async.close_BANG_.call(null,out);
var state_15525__$1 = (function (){var statearr_15536 = state_15525;
(statearr_15536[(10)] = inst_15518);

return statearr_15536;
})();
var statearr_15537_15566 = state_15525__$1;
(statearr_15537_15566[(2)] = inst_15519);

(statearr_15537_15566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (3))){
var inst_15523 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15525__$1,inst_15523);
} else {
if((state_val_15526 === (12))){
var inst_15482 = (state_15525[(7)]);
var inst_15501 = cljs.core.vec.call(null,inst_15482);
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15525__$1,(14),out,inst_15501);
} else {
if((state_val_15526 === (2))){
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15525__$1,(4),ch);
} else {
if((state_val_15526 === (11))){
var inst_15482 = (state_15525[(7)]);
var inst_15486 = (state_15525[(9)]);
var inst_15490 = (state_15525[(11)]);
var inst_15498 = inst_15482.push(inst_15486);
var tmp15538 = inst_15482;
var inst_15482__$1 = tmp15538;
var inst_15483 = inst_15490;
var state_15525__$1 = (function (){var statearr_15539 = state_15525;
(statearr_15539[(12)] = inst_15498);

(statearr_15539[(7)] = inst_15482__$1);

(statearr_15539[(8)] = inst_15483);

return statearr_15539;
})();
var statearr_15540_15567 = state_15525__$1;
(statearr_15540_15567[(2)] = null);

(statearr_15540_15567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (9))){
var inst_15483 = (state_15525[(8)]);
var inst_15494 = cljs.core.keyword_identical_QMARK_.call(null,inst_15483,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15525__$1 = state_15525;
var statearr_15541_15568 = state_15525__$1;
(statearr_15541_15568[(2)] = inst_15494);

(statearr_15541_15568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (5))){
var inst_15486 = (state_15525[(9)]);
var inst_15490 = (state_15525[(11)]);
var inst_15483 = (state_15525[(8)]);
var inst_15491 = (state_15525[(13)]);
var inst_15490__$1 = f.call(null,inst_15486);
var inst_15491__$1 = cljs.core._EQ_.call(null,inst_15490__$1,inst_15483);
var state_15525__$1 = (function (){var statearr_15542 = state_15525;
(statearr_15542[(11)] = inst_15490__$1);

(statearr_15542[(13)] = inst_15491__$1);

return statearr_15542;
})();
if(inst_15491__$1){
var statearr_15543_15569 = state_15525__$1;
(statearr_15543_15569[(1)] = (8));

} else {
var statearr_15544_15570 = state_15525__$1;
(statearr_15544_15570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (14))){
var inst_15486 = (state_15525[(9)]);
var inst_15490 = (state_15525[(11)]);
var inst_15503 = (state_15525[(2)]);
var inst_15504 = [];
var inst_15505 = inst_15504.push(inst_15486);
var inst_15482 = inst_15504;
var inst_15483 = inst_15490;
var state_15525__$1 = (function (){var statearr_15545 = state_15525;
(statearr_15545[(14)] = inst_15503);

(statearr_15545[(15)] = inst_15505);

(statearr_15545[(7)] = inst_15482);

(statearr_15545[(8)] = inst_15483);

return statearr_15545;
})();
var statearr_15546_15571 = state_15525__$1;
(statearr_15546_15571[(2)] = null);

(statearr_15546_15571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (16))){
var state_15525__$1 = state_15525;
var statearr_15547_15572 = state_15525__$1;
(statearr_15547_15572[(2)] = null);

(statearr_15547_15572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (10))){
var inst_15496 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
if(cljs.core.truth_(inst_15496)){
var statearr_15548_15573 = state_15525__$1;
(statearr_15548_15573[(1)] = (11));

} else {
var statearr_15549_15574 = state_15525__$1;
(statearr_15549_15574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (18))){
var inst_15515 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15550_15575 = state_15525__$1;
(statearr_15550_15575[(2)] = inst_15515);

(statearr_15550_15575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (8))){
var inst_15491 = (state_15525[(13)]);
var state_15525__$1 = state_15525;
var statearr_15551_15576 = state_15525__$1;
(statearr_15551_15576[(2)] = inst_15491);

(statearr_15551_15576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13577__auto__ = null;
var cljs$core$async$state_machine__13577__auto____0 = (function (){
var statearr_15552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15552[(0)] = cljs$core$async$state_machine__13577__auto__);

(statearr_15552[(1)] = (1));

return statearr_15552;
});
var cljs$core$async$state_machine__13577__auto____1 = (function (state_15525){
while(true){
var ret_value__13578__auto__ = (function (){try{while(true){
var result__13579__auto__ = switch__13576__auto__.call(null,state_15525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13579__auto__;
}
break;
}
}catch (e15553){var ex__13580__auto__ = e15553;
var statearr_15554_15577 = state_15525;
(statearr_15554_15577[(2)] = ex__13580__auto__);


if(cljs.core.seq.call(null,(state_15525[(4)]))){
var statearr_15555_15578 = state_15525;
(statearr_15555_15578[(1)] = cljs.core.first.call(null,(state_15525[(4)])));

} else {
throw ex__13580__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15579 = state_15525;
state_15525 = G__15579;
continue;
} else {
return ret_value__13578__auto__;
}
break;
}
});
cljs$core$async$state_machine__13577__auto__ = function(state_15525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13577__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13577__auto____1.call(this,state_15525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13577__auto____0;
cljs$core$async$state_machine__13577__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13577__auto____1;
return cljs$core$async$state_machine__13577__auto__;
})()
})();
var state__13652__auto__ = (function (){var statearr_15556 = f__13651__auto__.call(null);
(statearr_15556[(6)] = c__13650__auto___15558);

return statearr_15556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13652__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
