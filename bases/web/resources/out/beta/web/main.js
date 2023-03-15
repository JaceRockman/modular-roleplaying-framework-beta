// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.web.main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('kee_frame.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('reagent.dom.client');
goog.require('clojure.edn');
goog.require('beta.creature.interface$');
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(function (_,p__9217){
var vec__9218 = p__9217;
var page_no = cljs.core.nth.call(null,vec__9218,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),page_no], null)], null)], null);
}));
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"open-creature-sheet","open-creature-sheet",-1476376860),(function (db,p__9221){
var vec__9222 = p__9221;
var creature_id = cljs.core.nth.call(null,vec__9222,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889),creature_id),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature","creature",-1010611920),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),creature_id], null)], null)], null);
}));
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"open-creatures-menu","open-creatures-menu",-1640664634),(function (_,p__9225){
var vec__9226 = p__9225;
var creature_id = cljs.core.nth.call(null,vec__9226,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)], null);
}));
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044),(function (p__9229,_){
var map__9230 = p__9229;
var map__9230__$1 = cljs.core.__destructure_map.call(null,map__9230);
var db = cljs.core.get.call(null,map__9230__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406),false));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587),(function (db,_){
return new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889),(function (db,_){
return new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-creature-data","active-creature-data",-1015143500),(function (db,_){
var creatures = new cljs.core.Keyword(null,"creatures","creatures",761416150).cljs$core$IFn$_invoke$arity$1(db);
var active_creature_id = new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9231_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("creature","id","creature/id",1371426325).cljs$core$IFn$_invoke$arity$1(p1__9231_SHARP_),active_creature_id);
}),creatures));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"creatures","creatures",761416150),(function (db,_){
return new cljs.core.Keyword(null,"creatures","creatures",761416150).cljs$core$IFn$_invoke$arity$1(db);
}));
beta.web.main.initial_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-data","some-data",-1679942389),"data"], null);
beta.web.main.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/page/:page-no",new cljs.core.Keyword(null,"page","page",849072397)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/creatures",new cljs.core.Keyword(null,"creatures","creatures",761416150)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/creature/:id",new cljs.core.Keyword(null,"creature","creature",-1010611920)], null)], null);
beta.web.main.creature_button = (function beta$web$main$creature_button(creature_data){
var creature_id = new cljs.core.Keyword("creature","id","creature/id",1371426325).cljs$core$IFn$_invoke$arity$1(creature_data);
var creature_name = new cljs.core.Keyword("creature","name","creature/name",-110764950).cljs$core$IFn$_invoke$arity$1(creature_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),creature_id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-creature-sheet","open-creature-sheet",-1476376860),creature_id], null));
})], null),creature_name], null);
});
beta.web.main.app = (function beta$web$main$app(){
return kee_frame.core.case_route.call(null,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(1)], null));
})], null),"Page 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(2)], null));
})], null),"Page 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-creatures-menu","open-creatures-menu",-1640664634)], null));
})], null),"Creatures"], null)], null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587)], null))))?"green":"red")], null)], null),"Page Stuff"], null),((cljs.core.not.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587)], null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null))], null),"Home"], null)], null):null)], null),new cljs.core.Keyword(null,"creatures","creatures",761416150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,beta.web.main.creature_button,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creatures","creatures",761416150)], null))))], null),new cljs.core.Keyword(null,"creature","creature",-1010611920),(function (){
cljs.core.println.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-creature-data","active-creature-data",-1015143500)], null))));

return beta.creature.interface$.creature_display.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-creature-data","active-creature-data",-1015143500)], null))));
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Page not Found"], null));
});
beta.web.main.main_BANG_ = (function beta$web$main$main_BANG_(){
return kee_frame.core.start_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),beta.web.main.initial_db,new cljs.core.Keyword(null,"routes","routes",457900162),beta.web.main.routes,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [beta.web.main.app], null)], null));
});
kee_frame.core.reg_controller.call(null,new cljs.core.Keyword(null,"creatures","creatures",761416150),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(function (route_data){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)),new cljs.core.Keyword(null,"creatures","creatures",761416150));
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (ctx,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creatures","load","creatures/load",-569322004)], null);
})], null));
kee_frame.core.reg_chain.call(null,new cljs.core.Keyword("creatures","load","creatures/load",-569322004),(function (ctx,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8000/creatures",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044)], null)], null)], null);
}),(function (p__9232,p__9233){
var map__9234 = p__9232;
var map__9234__$1 = cljs.core.__destructure_map.call(null,map__9234);
var db = cljs.core.get.call(null,map__9234__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9235 = p__9233;
var creature_data = cljs.core.nth.call(null,vec__9235,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"creatures","creatures",761416150),clojure.edn.read_string.call(null,creature_data))], null);
}));
kee_frame.core.reg_controller.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(function (route_data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)),new cljs.core.Keyword(null,"page","page",849072397))){
return new cljs.core.Keyword(null,"page-no","page-no",1459765550).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_data));
} else {
return null;
}
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (ctx,page_no){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","load","page/load",-1315748755),page_no], null);
})], null));
kee_frame.core.reg_chain.call(null,new cljs.core.Keyword("page","load","page/load",-1315748755),(function (ctx,p__9238){
var vec__9239 = p__9238;
var page_no = cljs.core.nth.call(null,vec__9239,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8000/page",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044)], null)], null)], null);
}),(function (p__9242,p__9243){
var map__9244 = p__9242;
var map__9244__$1 = cljs.core.__destructure_map.call(null,map__9244);
var db = cljs.core.get.call(null,map__9244__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9245 = p__9243;
var page_no = cljs.core.nth.call(null,vec__9245,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406),true)], null);
}));
beta.web.main.main_BANG_.call(null);

//# sourceMappingURL=main.js.map
