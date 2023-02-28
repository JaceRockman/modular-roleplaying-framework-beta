// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_frame_fx.dispatch');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5804__auto__)){
var deferred = temp__5804__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return re_frame.core.dispatch.call(null,event);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__3596 = cljs.core.seq.call(null,event);
var chunk__3597 = null;
var count__3598 = (0);
var i__3599 = (0);
while(true){
if((i__3599 < count__3598)){
var e = cljs.core._nth.call(null,chunk__3597,i__3599);
re_frame.core.dispatch.call(null,e);


var G__3614 = seq__3596;
var G__3615 = chunk__3597;
var G__3616 = count__3598;
var G__3617 = (i__3599 + (1));
seq__3596 = G__3614;
chunk__3597 = G__3615;
count__3598 = G__3616;
i__3599 = G__3617;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3596);
if(temp__5804__auto__){
var seq__3596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3596__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3596__$1);
var G__3618 = cljs.core.chunk_rest.call(null,seq__3596__$1);
var G__3619 = c__5568__auto__;
var G__3620 = cljs.core.count.call(null,c__5568__auto__);
var G__3621 = (0);
seq__3596 = G__3618;
chunk__3597 = G__3619;
count__3598 = G__3620;
i__3599 = G__3621;
continue;
} else {
var e = cljs.core.first.call(null,seq__3596__$1);
re_frame.core.dispatch.call(null,e);


var G__3622 = cljs.core.next.call(null,seq__3596__$1);
var G__3623 = null;
var G__3624 = (0);
var G__3625 = (0);
seq__3596 = G__3622;
chunk__3597 = G__3623;
count__3598 = G__3624;
i__3599 = G__3625;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
var seq__3600 = cljs.core.seq.call(null,(function (){var G__3609 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_.call(null,dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__3609],null));
} else {
return G__3609;
}
})());
var chunk__3601 = null;
var count__3602 = (0);
var i__3603 = (0);
while(true){
if((i__3603 < count__3602)){
var map__3610 = cljs.core._nth.call(null,chunk__3601,i__3603);
var map__3610__$1 = cljs.core.__destructure_map.call(null,map__3610);
var id = cljs.core.get.call(null,map__3610__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__3610__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.call(null,map__3610__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.call(null,map__3610__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null).call(null,action))){
cancel_timeout.call(null,id);

cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__3600,chunk__3601,count__3602,i__3603,map__3610,map__3610__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout.call(null,id);

return run_action.call(null,action,event);
});})(seq__3600,chunk__3601,count__3602,i__3603,map__3610,map__3610__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout.call(null,id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5804__auto___3626 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5804__auto___3626)){
var map__3611_3627 = temp__5804__auto___3626;
var map__3611_3628__$1 = cljs.core.__destructure_map.call(null,map__3611_3627);
var action_3629__$1 = cljs.core.get.call(null,map__3611_3628__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_3630__$1 = cljs.core.get.call(null,map__3611_3628__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout.call(null,id);

run_action.call(null,action_3629__$1,event_3630__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__3631 = seq__3600;
var G__3632 = chunk__3601;
var G__3633 = count__3602;
var G__3634 = (i__3603 + (1));
seq__3600 = G__3631;
chunk__3601 = G__3632;
count__3602 = G__3633;
i__3603 = G__3634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3600);
if(temp__5804__auto__){
var seq__3600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3600__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3600__$1);
var G__3635 = cljs.core.chunk_rest.call(null,seq__3600__$1);
var G__3636 = c__5568__auto__;
var G__3637 = cljs.core.count.call(null,c__5568__auto__);
var G__3638 = (0);
seq__3600 = G__3635;
chunk__3601 = G__3636;
count__3602 = G__3637;
i__3603 = G__3638;
continue;
} else {
var map__3612 = cljs.core.first.call(null,seq__3600__$1);
var map__3612__$1 = cljs.core.__destructure_map.call(null,map__3612);
var id = cljs.core.get.call(null,map__3612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__3612__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.call(null,map__3612__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.call(null,map__3612__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null).call(null,action))){
cancel_timeout.call(null,id);

cljs.core.swap_BANG_.call(null,re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__3600,chunk__3601,count__3602,i__3603,map__3612,map__3612__$1,id,timeout,action,event,seq__3600__$1,temp__5804__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout.call(null,id);

return run_action.call(null,action,event);
});})(seq__3600,chunk__3601,count__3602,i__3603,map__3612,map__3612__$1,id,timeout,action,event,seq__3600__$1,temp__5804__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout.call(null,id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5804__auto___3639__$1 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5804__auto___3639__$1)){
var map__3613_3640 = temp__5804__auto___3639__$1;
var map__3613_3641__$1 = cljs.core.__destructure_map.call(null,map__3613_3640);
var action_3642__$1 = cljs.core.get.call(null,map__3613_3641__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_3643__$1 = cljs.core.get.call(null,map__3613_3641__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout.call(null,id);

run_action.call(null,action_3642__$1,event_3643__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__3644 = cljs.core.next.call(null,seq__3600__$1);
var G__3645 = null;
var G__3646 = (0);
var G__3647 = (0);
seq__3600 = G__3644;
chunk__3601 = G__3645;
count__3602 = G__3646;
i__3603 = G__3647;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce);

//# sourceMappingURL=dispatch.js.map
