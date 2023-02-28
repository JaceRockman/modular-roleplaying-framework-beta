// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066 = (function (val,meta3067){
this.val = val;
this.meta3067 = meta3067;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3068,meta3067__$1){
var self__ = this;
var _3068__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066(self__.val,meta3067__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3068){
var self__ = this;
var _3068__$1 = this;
return self__.meta3067;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta3067","meta3067",-1762185382,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels3066");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels3066");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels3066.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels3066 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels3066(val__$1,meta3067){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066(val__$1,meta3067));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels3066(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_3069 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_3069.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_3081 = self__.puts.pop();
if((putter_3081 == null)){
} else {
var put_handler_3082 = putter_3081.handler;
var val_3083 = putter_3081.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_3082)){
var put_cb_3084 = cljs.core.async.impl.protocols.commit.call(null,put_handler_3082);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_3084,put_handler_3082,val_3083,putter_3081,this$__$1){
return (function (){
return put_cb_3084.call(null,true);
});})(put_cb_3084,put_handler_3082,val_3083,putter_3081,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(closed__$1){
cljs.core.async.impl.protocols.commit.call(null,handler);

return cljs.core.async.impl.channels.box.call(null,false);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__5043__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__3085 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__3085;
continue;
} else {
var G__3086 = takers;
takers = G__3086;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__3070_3087 = cljs.core.seq.call(null,take_cbs);
var chunk__3071_3088 = null;
var count__3072_3089 = (0);
var i__3073_3090 = (0);
while(true){
if((i__3073_3090 < count__3072_3089)){
var f_3091 = cljs.core._nth.call(null,chunk__3071_3088,i__3073_3090);
cljs.core.async.impl.dispatch.run.call(null,f_3091);


var G__3092 = seq__3070_3087;
var G__3093 = chunk__3071_3088;
var G__3094 = count__3072_3089;
var G__3095 = (i__3073_3090 + (1));
seq__3070_3087 = G__3092;
chunk__3071_3088 = G__3093;
count__3072_3089 = G__3094;
i__3073_3090 = G__3095;
continue;
} else {
var temp__5804__auto___3096 = cljs.core.seq.call(null,seq__3070_3087);
if(temp__5804__auto___3096){
var seq__3070_3097__$1 = temp__5804__auto___3096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3070_3097__$1)){
var c__5568__auto___3098 = cljs.core.chunk_first.call(null,seq__3070_3097__$1);
var G__3099 = cljs.core.chunk_rest.call(null,seq__3070_3097__$1);
var G__3100 = c__5568__auto___3098;
var G__3101 = cljs.core.count.call(null,c__5568__auto___3098);
var G__3102 = (0);
seq__3070_3087 = G__3099;
chunk__3071_3088 = G__3100;
count__3072_3089 = G__3101;
i__3073_3090 = G__3102;
continue;
} else {
var f_3103 = cljs.core.first.call(null,seq__3070_3097__$1);
cljs.core.async.impl.dispatch.run.call(null,f_3103);


var G__3104 = cljs.core.next.call(null,seq__3070_3097__$1);
var G__3105 = null;
var G__3106 = (0);
var G__3107 = (0);
seq__3070_3087 = G__3104;
chunk__3071_3088 = G__3105;
count__3072_3089 = G__3106;
i__3073_3090 = G__3107;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5802__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5802__auto__)){
var take_cb = temp__5802__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__3074 = ((((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__5043__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__5043__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))))){
var G__3108 = cbs__$1;
cbs = G__3108;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__3074,(0),null);
var cbs = cljs.core.nth.call(null,vec__3074,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__3077_3109 = cljs.core.seq.call(null,cbs);
var chunk__3078_3110 = null;
var count__3079_3111 = (0);
var i__3080_3112 = (0);
while(true){
if((i__3080_3112 < count__3079_3111)){
var cb_3113 = cljs.core._nth.call(null,chunk__3078_3110,i__3080_3112);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__3077_3109,chunk__3078_3110,count__3079_3111,i__3080_3112,cb_3113,val,vec__3074,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return cb_3113.call(null,true);
});})(seq__3077_3109,chunk__3078_3110,count__3079_3111,i__3080_3112,cb_3113,val,vec__3074,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__3114 = seq__3077_3109;
var G__3115 = chunk__3078_3110;
var G__3116 = count__3079_3111;
var G__3117 = (i__3080_3112 + (1));
seq__3077_3109 = G__3114;
chunk__3078_3110 = G__3115;
count__3079_3111 = G__3116;
i__3080_3112 = G__3117;
continue;
} else {
var temp__5804__auto___3118 = cljs.core.seq.call(null,seq__3077_3109);
if(temp__5804__auto___3118){
var seq__3077_3119__$1 = temp__5804__auto___3118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3077_3119__$1)){
var c__5568__auto___3120 = cljs.core.chunk_first.call(null,seq__3077_3119__$1);
var G__3121 = cljs.core.chunk_rest.call(null,seq__3077_3119__$1);
var G__3122 = c__5568__auto___3120;
var G__3123 = cljs.core.count.call(null,c__5568__auto___3120);
var G__3124 = (0);
seq__3077_3109 = G__3121;
chunk__3078_3110 = G__3122;
count__3079_3111 = G__3123;
i__3080_3112 = G__3124;
continue;
} else {
var cb_3125 = cljs.core.first.call(null,seq__3077_3119__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__3077_3109,chunk__3078_3110,count__3079_3111,i__3080_3112,cb_3125,seq__3077_3119__$1,temp__5804__auto___3118,val,vec__3074,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return cb_3125.call(null,true);
});})(seq__3077_3109,chunk__3078_3110,count__3079_3111,i__3080_3112,cb_3125,seq__3077_3119__$1,temp__5804__auto___3118,val,vec__3074,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__3126 = cljs.core.next.call(null,seq__3077_3119__$1);
var G__3127 = null;
var G__3128 = (0);
var G__3129 = (0);
seq__3077_3109 = G__3126;
chunk__3078_3110 = G__3127;
count__3079_3111 = G__3128;
i__3080_3112 = G__3129;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__5043__auto__;
}
})())){
var has_val = (function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5043__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (self__.puts.length === (0));
} else {
return and__5043__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_3130 = self__.takes.pop();
if((taker_3130 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_3130)){
var take_cb_3131 = cljs.core.async.impl.protocols.commit.call(null,taker_3130);
var val_3132 = (cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5043__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_3131,val_3132,taker_3130,this$__$1){
return (function (){
return take_cb_3131.call(null,val_3132);
});})(take_cb_3131,val_3132,taker_3130,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__5045__auto__ = exh;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__3134 = arguments.length;
switch (G__3134) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__3138 = null;
var G__3138__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e3135){var t = e3135;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__3138__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e3136){var t = e3136;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__3138 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__3138__1.call(this,buf__$1);
case 2:
return G__3138__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3138.cljs$core$IFn$_invoke$arity$1 = G__3138__1;
G__3138.cljs$core$IFn$_invoke$arity$2 = G__3138__2;
return G__3138;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map
