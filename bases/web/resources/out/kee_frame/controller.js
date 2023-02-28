// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.controller');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('kee_frame.state');
goog.require('kee_frame.spec');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('taoensso.timbre');
goog.require('re_frame.core');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_.call(null,params)){
return cljs.core.get_in.call(null,route,params);
} else {
if(cljs.core.ifn_QMARK_.call(null,params)){
return params.call(null,route);
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dispatch returned from controller function ",dispatch], null);
}),null)),null,-1716811840,null);

if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound.call(null,new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.call(null,"Invalid dispatch value",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return dispatch;
} else {
return null;
}
});
kee_frame.controller.stop_controller = (function kee_frame$controller$stop_controller(ctx,p__12161){
var map__12162 = p__12161;
var map__12162__$1 = cljs.core.__destructure_map.call(null,map__12162);
var controller = map__12162__$1;
var stop = cljs.core.get.call(null,map__12162__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"controller-stop","controller-stop",549799298),new cljs.core.Keyword(null,"controller","controller",2013778659),controller,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], null)], null);
}),null)),null,-1457709816,null);

if(cljs.core.vector_QMARK_.call(null,stop)){
return stop;
} else {
if(cljs.core.ifn_QMARK_.call(null,stop)){
return kee_frame.controller.validate_and_dispatch_BANG_.call(null,stop.call(null,ctx));
} else {
return null;
}
}
});
kee_frame.controller.start_controller = (function kee_frame$controller$start_controller(ctx,p__12163){
var map__12164 = p__12163;
var map__12164__$1 = cljs.core.__destructure_map.call(null,map__12164);
var controller = map__12164__$1;
var last_params = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var start = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"start","start",-355208981));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"controller-start","controller-start",-1635703237),new cljs.core.Keyword(null,"controller","controller",2013778659),controller,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], null)], null);
}),null)),null,1395847673,null);

if(cljs.core.truth_(start)){
if(cljs.core.vector_QMARK_.call(null,start)){
return cljs.core.conj.call(null,start,last_params);
} else {
if(cljs.core.ifn_QMARK_.call(null,start)){
return kee_frame.controller.validate_and_dispatch_BANG_.call(null,start.call(null,ctx,last_params));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.controller_actions = (function kee_frame$controller$controller_actions(controllers,route){
return cljs.core.reduce.call(null,(function (actions,p__12165){
var map__12166 = p__12165;
var map__12166__$1 = cljs.core.__destructure_map.call(null,map__12166);
var id = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var last_params = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params.call(null,params,route);
var controller = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop,new cljs.core.Keyword(null,"last-params","last-params",1293824707),current_params], null);
var last_params__$1 = last_params;
var current_params__$1 = current_params;
var ocr_12167 = cljs.core._EQ_.call(null,last_params__$1,current_params__$1);
try{if((ocr_12167 === true)){
return actions;
} else {
throw cljs.core.match.backtrack;

}
}catch (e12177){if((e12177 instanceof Error)){
var e__11255__auto__ = e12177;
if((e__11255__auto__ === cljs.core.match.backtrack)){
try{if((ocr_12167 === false)){
try{if((last_params__$1 === null)){
return cljs.core.update.call(null,actions,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.conj,controller);
} else {
throw cljs.core.match.backtrack;

}
}catch (e12179){if((e12179 instanceof Error)){
var e__11255__auto____$1 = e12179;
if((e__11255__auto____$1 === cljs.core.match.backtrack)){
try{if((current_params__$1 === null)){
return cljs.core.update.call(null,actions,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.conj,controller);
} else {
throw cljs.core.match.backtrack;

}
}catch (e12180){if((e12180 instanceof Error)){
var e__11255__auto____$2 = e12180;
if((e__11255__auto____$2 === cljs.core.match.backtrack)){
return cljs.core.update.call(null,cljs.core.update.call(null,actions,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.conj,controller),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.conj,controller);
} else {
throw e__11255__auto____$2;
}
} else {
throw e12180;

}
}} else {
throw e__11255__auto____$1;
}
} else {
throw e12179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e12178){if((e12178 instanceof Error)){
var e__11255__auto____$1 = e12178;
if((e__11255__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_12167)].join('')));
} else {
throw e__11255__auto____$1;
}
} else {
throw e12178;

}
}} else {
throw e__11255__auto__;
}
} else {
throw e12177;

}
}}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
kee_frame.controller.update_controllers = (function kee_frame$controller$update_controllers(controllers,new_controllers){
var id__GT_new_controller = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new_controllers));
return cljs.core.map.call(null,(function (p__12181){
var map__12182 = p__12181;
var map__12182__$1 = cljs.core.__destructure_map.call(null,map__12182);
var controller = map__12182__$1;
var id = cljs.core.get.call(null,map__12182__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5802__auto__ = id__GT_new_controller.call(null,id);
if(cljs.core.truth_(temp__5802__auto__)){
var updated_controller = temp__5802__auto__;
return cljs.core.assoc.call(null,controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),new cljs.core.Keyword(null,"last-params","last-params",1293824707).cljs$core$IFn$_invoke$arity$1(updated_controller));
} else {
return controller;
}
}),controllers);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kee-frame.controller","start-controllers","kee-frame.controller/start-controllers",488030820),(function (_,p__12183){
var vec__12184 = p__12183;
var ___$1 = cljs.core.nth.call(null,vec__12184,(0),null);
var dispatches = cljs.core.nth.call(null,vec__12184,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatches], null);
}));
kee_frame.controller.controller_effects = (function kee_frame$controller$controller_effects(controllers,ctx,route){
var map__12189 = kee_frame.controller.controller_actions.call(null,controllers,route);
var map__12189__$1 = cljs.core.__destructure_map.call(null,map__12189);
var start = cljs.core.get.call(null,map__12189__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12189__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_dispatches = cljs.core.map.call(null,(function (p1__12187_SHARP_){
return kee_frame.controller.start_controller.call(null,ctx,p1__12187_SHARP_);
}),start);
var stop_dispatches = cljs.core.map.call(null,(function (p1__12188_SHARP_){
return kee_frame.controller.stop_controller.call(null,ctx,p1__12188_SHARP_);
}),stop);
var dispatch_n = ((((cljs.core.seq.call(null,start)) && (cljs.core.seq.call(null,stop))))?cljs.core.conj.call(null,stop_dispatches,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.controller","start-controllers","kee-frame.controller/start-controllers",488030820),start_dispatches], null)):((cljs.core.seq.call(null,start))?start_dispatches:((cljs.core.seq.call(null,stop))?stop_dispatches:null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559),cljs.core.concat.call(null,start,stop),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatch_n], null);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559),(function (new_controllers){
return cljs.core.swap_BANG_.call(null,kee_frame.state.controllers,kee_frame.controller.update_controllers,new_controllers);
}));

//# sourceMappingURL=controller.js.map
