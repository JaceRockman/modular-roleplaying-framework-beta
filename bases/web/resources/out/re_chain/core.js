// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_chain.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('re_frame.core');
re_chain.core._STAR_replace_pointers_STAR_ = false;
re_chain.core.links = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_chain.core.seqify = (function re_chain$core$seqify(x){
if(((cljs.core.sequential_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x)))){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
re_chain.core.step_id = (function re_chain$core$step_id(event_id,counter){
if(cljs.core._EQ_.call(null,(0),counter)){
return event_id;
} else {
return cljs.core.keyword.call(null,[cljs.core.namespace.call(null,event_id),(cljs.core.truth_(cljs.core.namespace.call(null,event_id))?"/":null),cljs.core.name.call(null,event_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join(''));
}
});
re_chain.core.replace_pointers = (function re_chain$core$replace_pointers(next_event,effects){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215))){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Keyword :kee-frame.core/next is deprecated, use :chain/next instead.");
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215),null,new cljs.core.Keyword("chain","next","chain/next",-480219822),null], null), null).call(null,x))){
return next_event;
} else {
return x;
}
}),effects);
});
re_chain.core.single_valid_link = (function re_chain$core$single_valid_link(effects){
var links = cljs.core.filter.call(null,(function (p__4790){
var map__4791 = p__4790;
var map__4791__$1 = cljs.core.__destructure_map.call(null,map__4791);
var get_dispatch = cljs.core.get.call(null,map__4791__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var effect_present_QMARK_ = cljs.core.get.call(null,map__4791__$1,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804));
var and__5043__auto__ = effect_present_QMARK_.call(null,effects);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,get_dispatch.call(null,effects));
} else {
return and__5043__auto__;
}
}),cljs.core.deref.call(null,re_chain.core.links));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,links))){
return cljs.core.first.call(null,links);
} else {
return null;
}
});
re_chain.core.dispatch_empty_or_next = (function re_chain$core$dispatch_empty_or_next(effects,next_event_id){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects))) || (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects)),next_event_id)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects__$1,event){
return cljs.core.assoc.call(null,effects__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event);
})], null);
} else {
return null;
}
});
re_chain.core.single_valid_next = (function re_chain$core$single_valid_next(next_event_id,effects){
var xs = cljs.core.filter.call(null,(function (p__4792){
var map__4793 = p__4792;
var map__4793__$1 = cljs.core.__destructure_map.call(null,map__4793);
var get_dispatch = cljs.core.get.call(null,map__4793__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
return cljs.core._EQ_.call(null,next_event_id,cljs.core.first.call(null,get_dispatch.call(null,effects)));
}),cljs.core.deref.call(null,re_chain.core.links));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs))){
return cljs.core.first.call(null,xs);
} else {
return null;
}
});
re_chain.core.select_link = (function re_chain$core$select_link(next_event_id,effects){
var or__5045__auto__ = re_chain.core.single_valid_next.call(null,next_event_id,effects);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = re_chain.core.single_valid_link.call(null,effects);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = re_chain.core.dispatch_empty_or_next.call(null,effects,next_event_id);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
throw cljs.core.ex_info.call(null,"Not possible to select next in chain",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_event_id,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.deref.call(null,re_chain.core.links)], null));
}
}
}
});
re_chain.core.make_event = (function re_chain$core$make_event(next_event_id,previous_event_params,p__4794){
var vec__4795 = p__4794;
var seq__4796 = cljs.core.seq.call(null,vec__4795);
var first__4797 = cljs.core.first.call(null,seq__4796);
var seq__4796__$1 = cljs.core.next.call(null,seq__4796);
var _ = first__4797;
var params = seq__4796__$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_event_id], null),cljs.core.concat.call(null,previous_event_params,params));
});
re_chain.core.link_effects = (function re_chain$core$link_effects(next_event_id,event_params,effects){
if(cljs.core.truth_(next_event_id)){
var temp__5802__auto__ = re_chain.core.select_link.call(null,next_event_id,effects);
if(cljs.core.truth_(temp__5802__auto__)){
var map__4798 = temp__5802__auto__;
var map__4798__$1 = cljs.core.__destructure_map.call(null,map__4798);
var set_dispatch = cljs.core.get.call(null,map__4798__$1,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401));
var get_dispatch = cljs.core.get.call(null,map__4798__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
return set_dispatch.call(null,effects,re_chain.core.make_event.call(null,next_event_id,event_params,get_dispatch.call(null,effects)));
} else {
return effects;
}
} else {
return effects;
}
});
re_chain.core.effect_postprocessor = (function re_chain$core$effect_postprocessor(next_event_id){
return (function (ctx){
var event_params = cljs.core.rest.call(null,re_frame.core.get_coeffect.call(null,ctx,new cljs.core.Keyword(null,"event","event",301435442)));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"effects","effects",-282369292),(function (p1__4799_SHARP_){
var G__4800 = p1__4799_SHARP_;
var G__4800__$1 = (cljs.core.truth_(re_chain.core._STAR_replace_pointers_STAR_)?re_chain.core.replace_pointers.call(null,next_event_id,G__4800):G__4800);
return re_chain.core.link_effects.call(null,next_event_id,event_params,G__4800__$1);

}));
});
});
re_chain.core.chain_interceptor = (function re_chain$core$chain_interceptor(current_event_id,next_event_id){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),current_event_id,new cljs.core.Keyword(null,"after","after",594996914),re_chain.core.effect_postprocessor.call(null,next_event_id));
});
re_chain.core.conform_named_handlers = (function re_chain$core$conform_named_handlers(handlers){
var G__4804 = handlers;
var vec__4805 = G__4804;
var seq__4806 = cljs.core.seq.call(null,vec__4805);
var first__4807 = cljs.core.first.call(null,seq__4806);
var seq__4806__$1 = cljs.core.next.call(null,seq__4806);
var id = first__4807;
var first__4807__$1 = cljs.core.first.call(null,seq__4806__$1);
var seq__4806__$2 = cljs.core.next.call(null,seq__4806__$1);
var interceptors_or_handler = first__4807__$1;
var rest = seq__4806__$2;
var matches = cljs.core.PersistentVector.EMPTY;
var G__4804__$1 = G__4804;
var matches__$1 = matches;
while(true){
var vec__4814 = G__4804__$1;
var seq__4815 = cljs.core.seq.call(null,vec__4814);
var first__4816 = cljs.core.first.call(null,seq__4815);
var seq__4815__$1 = cljs.core.next.call(null,seq__4815);
var id__$1 = first__4816;
var first__4816__$1 = cljs.core.first.call(null,seq__4815__$1);
var seq__4815__$2 = cljs.core.next.call(null,seq__4815__$1);
var interceptors_or_handler__$1 = first__4816__$1;
var rest__$1 = seq__4815__$2;
var matches__$2 = matches__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.fn_QMARK_.call(null,interceptors_or_handler__$1)){
var G__4820 = rest__$1;
var G__4821 = cljs.core.conj.call(null,matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__4804__$1 = G__4820;
matches__$1 = G__4821;
continue;
} else {
var vec__4817 = rest__$1;
var seq__4818 = cljs.core.seq.call(null,vec__4817);
var first__4819 = cljs.core.first.call(null,seq__4818);
var seq__4818__$1 = cljs.core.next.call(null,seq__4818);
var handler = first__4819;
var rest__$2 = seq__4818__$1;
if(cljs.core.fn_QMARK_.call(null,handler)){
var G__4822 = rest__$2;
var G__4823 = cljs.core.conj.call(null,matches__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__4804__$1 = G__4822;
matches__$1 = G__4823;
continue;
} else {
throw cljs.core.ex_info.call(null,"No valid handler found for ",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_named_event_instructions = (function re_chain$core$collect_named_event_instructions(step_fns){
var chain_handlers = re_chain.core.conform_named_handlers.call(null,step_fns);
return cljs.core.map.call(null,(function (p__4824){
var vec__4825 = p__4824;
var map__4828 = cljs.core.nth.call(null,vec__4825,(0),null);
var map__4828__$1 = cljs.core.__destructure_map.call(null,map__4828);
var handler_1 = map__4828__$1;
var id = cljs.core.get.call(null,map__4828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var interceptors = cljs.core.get.call(null,map__4828__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var handler_2 = cljs.core.nth.call(null,vec__4825,(1),null);
var next_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(handler_2);
return cljs.core.assoc.call(null,handler_1,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (){var G__4829 = interceptors;
if((G__4829 == null)){
return null;
} else {
return re_chain.core.seqify.call(null,G__4829);
}
})(),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(handler_1),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor.call(null,id,next_id));
}),cljs.core.partition.call(null,(2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.conform_handlers = (function re_chain$core$conform_handlers(handlers){
var G__4833 = handlers;
var vec__4834 = G__4833;
var seq__4835 = cljs.core.seq.call(null,vec__4834);
var first__4836 = cljs.core.first.call(null,seq__4835);
var seq__4835__$1 = cljs.core.next.call(null,seq__4835);
var interceptors_or_handler = first__4836;
var rest = seq__4835__$1;
var matches = cljs.core.PersistentVector.EMPTY;
var G__4833__$1 = G__4833;
var matches__$1 = matches;
while(true){
var vec__4843 = G__4833__$1;
var seq__4844 = cljs.core.seq.call(null,vec__4843);
var first__4845 = cljs.core.first.call(null,seq__4844);
var seq__4844__$1 = cljs.core.next.call(null,seq__4844);
var interceptors_or_handler__$1 = first__4845;
var rest__$1 = seq__4844__$1;
var matches__$2 = matches__$1;
if(cljs.core.truth_(interceptors_or_handler__$1)){
if(cljs.core.fn_QMARK_.call(null,interceptors_or_handler__$1)){
var G__4849 = rest__$1;
var G__4850 = cljs.core.conj.call(null,matches__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__4833__$1 = G__4849;
matches__$1 = G__4850;
continue;
} else {
var vec__4846 = rest__$1;
var seq__4847 = cljs.core.seq.call(null,vec__4846);
var first__4848 = cljs.core.first.call(null,seq__4847);
var seq__4847__$1 = cljs.core.next.call(null,seq__4847);
var handler = first__4848;
var rest__$2 = seq__4847__$1;
if(cljs.core.fn_QMARK_.call(null,handler)){
var G__4851 = rest__$2;
var G__4852 = cljs.core.conj.call(null,matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__4833__$1 = G__4851;
matches__$1 = G__4852;
continue;
} else {
throw cljs.core.ex_info.call(null,"Interceptor without matching handler",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_event_instructions = (function re_chain$core$collect_event_instructions(key,step_fns){
var chain_handlers = re_chain.core.conform_handlers.call(null,step_fns);
return cljs.core.map_indexed.call(null,(function (counter,p__4853){
var vec__4854 = p__4853;
var current_handler = cljs.core.nth.call(null,vec__4854,(0),null);
var next_handler = cljs.core.nth.call(null,vec__4854,(1),null);
var map__4857 = current_handler;
var map__4857__$1 = cljs.core.__destructure_map.call(null,map__4857);
var fn = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var interceptors = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var id = re_chain.core.step_id.call(null,key,counter);
var next_id = (cljs.core.truth_(next_handler)?re_chain.core.step_id.call(null,key,(counter + (1))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),fn,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor.call(null,id,next_id)], null);
}),cljs.core.partition.call(null,(2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.register_chain_handlers_BANG_ = (function re_chain$core$register_chain_handlers_BANG_(instructions,user_interceptors){
var seq__4858 = cljs.core.seq.call(null,instructions);
var chunk__4859 = null;
var count__4860 = (0);
var i__4861 = (0);
while(true){
if((i__4861 < count__4860)){
var map__4864 = cljs.core._nth.call(null,chunk__4859,i__4861);
var map__4864__$1 = cljs.core.__destructure_map.call(null,map__4864);
var id = cljs.core.get.call(null,map__4864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.call(null,map__4864__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.call(null,map__4864__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.call(null,map__4864__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.call(null,id,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.call(null,user_interceptors,interceptors)),event_handler);


var G__4866 = seq__4858;
var G__4867 = chunk__4859;
var G__4868 = count__4860;
var G__4869 = (i__4861 + (1));
seq__4858 = G__4866;
chunk__4859 = G__4867;
count__4860 = G__4868;
i__4861 = G__4869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4858);
if(temp__5804__auto__){
var seq__4858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4858__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__4858__$1);
var G__4870 = cljs.core.chunk_rest.call(null,seq__4858__$1);
var G__4871 = c__5568__auto__;
var G__4872 = cljs.core.count.call(null,c__5568__auto__);
var G__4873 = (0);
seq__4858 = G__4870;
chunk__4859 = G__4871;
count__4860 = G__4872;
i__4861 = G__4873;
continue;
} else {
var map__4865 = cljs.core.first.call(null,seq__4858__$1);
var map__4865__$1 = cljs.core.__destructure_map.call(null,map__4865);
var id = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.call(null,map__4865__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.call(null,id,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.call(null,user_interceptors,interceptors)),event_handler);


var G__4874 = cljs.core.next.call(null,seq__4858__$1);
var G__4875 = null;
var G__4876 = (0);
var G__4877 = (0);
seq__4858 = G__4874;
chunk__4859 = G__4875;
count__4860 = G__4876;
i__4861 = G__4877;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Same as `reg-chain-named`, but with a vector of interceptors as the first parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_named_STAR_ = (function re_chain$core$reg_chain_named_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4881 = arguments.length;
var i__5770__auto___4882 = (0);
while(true){
if((i__5770__auto___4882 < len__5769__auto___4881)){
args__5775__auto__.push((arguments[i__5770__auto___4882]));

var G__4883 = (i__5770__auto___4882 + (1));
i__5770__auto___4882 = G__4883;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (interceptors,step_fns){
var instructions = re_chain.core.collect_named_event_instructions.call(null,step_fns);
return re_chain.core.register_chain_handlers_BANG_.call(null,instructions,(function (){var G__4880 = interceptors;
if((G__4880 == null)){
return null;
} else {
return re_chain.core.seqify.call(null,G__4880);
}
})());
}));

(re_chain.core.reg_chain_named_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain_named_STAR_.cljs$lang$applyTo = (function (seq4878){
var G__4879 = cljs.core.first.call(null,seq4878);
var seq4878__$1 = cljs.core.next.call(null,seq4878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4879,seq4878__$1);
}));

/**
 * Same as `reg-chain`, but with a vector of interceptors as the second parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_STAR_ = (function re_chain$core$reg_chain_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4888 = arguments.length;
var i__5770__auto___4889 = (0);
while(true){
if((i__5770__auto___4889 < len__5769__auto___4888)){
args__5775__auto__.push((arguments[i__5770__auto___4889]));

var G__4890 = (i__5770__auto___4889 + (1));
i__5770__auto___4889 = G__4890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (id,interceptors,step_fns){
var instructions = re_chain.core.collect_event_instructions.call(null,id,step_fns);
return re_chain.core.register_chain_handlers_BANG_.call(null,instructions,(function (){var G__4887 = interceptors;
if((G__4887 == null)){
return null;
} else {
return re_chain.core.seqify.call(null,G__4887);
}
})());
}));

(re_chain.core.reg_chain_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_chain.core.reg_chain_STAR_.cljs$lang$applyTo = (function (seq4884){
var G__4885 = cljs.core.first.call(null,seq4884);
var seq4884__$1 = cljs.core.next.call(null,seq4884);
var G__4886 = cljs.core.first.call(null,seq4884__$1);
var seq4884__$2 = cljs.core.next.call(null,seq4884__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4885,G__4886,seq4884__$2);
}));

/**
 * re-chain only supports the `dispatch` effect out of the box. To add more effects, call this function at the startup
 *   of your app.
 * 
 *   Parameters:
 * 
 *   `chain-links`: Vector of maps. Each map describes how to chain together events using a certain effect. The map should
 *   contain 3 keys:
 *   - `:effect-present?` : Is the effect present in the effects map returned from an event function?
 *   - `:get-dispatch` : Try to lookup the dispatch value from the effects map
 *   - `:set-dispatch` : Set the dispatch value in the effects map
 * 
 *   Usage:
 *   ```
 *   (chain/configure! [{:effect-present? (fn [effects] (:http-xhrio effects))
 *                    :get-dispatch    (fn [effects] (get-in effects [:http-xhrio :on-success]))
 *                    :set-dispatch    (fn [effects dispatch] (assoc-in effects [:http-xhrio :on-success] dispatch))}])
 *   ```
 *   
 */
re_chain.core.configure_BANG_ = (function re_chain$core$configure_BANG_(chain_links){
return cljs.core.reset_BANG_.call(null,re_chain.core.links,chain_links);
});
/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler. Optionally with interceptors between id and handler.
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
re_chain.core.reg_chain_named = (function re_chain$core$reg_chain_named(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4892 = arguments.length;
var i__5770__auto___4893 = (0);
while(true){
if((i__5770__auto___4893 < len__5769__auto___4892)){
args__5775__auto__.push((arguments[i__5770__auto___4893]));

var G__4894 = (i__5770__auto___4893 + (1));
i__5770__auto___4893 = G__4894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return cljs.core.apply.call(null,re_chain.core.reg_chain_named_STAR_,null,handlers);
}));

(re_chain.core.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_chain.core.reg_chain_named.cljs$lang$applyTo = (function (seq4891){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4891));
}));

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
 *   `handlers`: re-frame event handler functions, registered with `re-frame.core/reg-event-fx`. Interceptors can be
 *            specified before the handler, same as with normal event handlers.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn {ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain = (function re_chain$core$reg_chain(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4897 = arguments.length;
var i__5770__auto___4898 = (0);
while(true){
if((i__5770__auto___4898 < len__5769__auto___4897)){
args__5775__auto__.push((arguments[i__5770__auto___4898]));

var G__4899 = (i__5770__auto___4898 + (1));
i__5770__auto___4898 = G__4899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
return cljs.core.apply.call(null,re_chain.core.reg_chain_STAR_,id,null,handlers);
}));

(re_chain.core.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain.cljs$lang$applyTo = (function (seq4895){
var G__4896 = cljs.core.first.call(null,seq4895);
var seq4895__$1 = cljs.core.next.call(null,seq4895);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4896,seq4895__$1);
}));


//# sourceMappingURL=core.js.map
