// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.web.main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('kee_frame.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('reagent.dom.client');
goog.require('beta.creature.interface$');
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(function (_,p__9211){
var vec__9212 = p__9211;
var page_no = cljs.core.nth.call(null,vec__9212,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),page_no], null)], null)], null);
}));
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"open-creature-sheet","open-creature-sheet",-1476376860),(function (_,p__9215){
var vec__9216 = p__9215;
var creature_id = cljs.core.nth.call(null,vec__9216,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature","creature",-1010611920),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),creature_id], null)], null)], null);
}));
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044),(function (p__9219,_){
var map__9220 = p__9219;
var map__9220__$1 = cljs.core.__destructure_map.call(null,map__9220);
var db = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406),false));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587),(function (db,_){
return new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889),(function (db,_){
return new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889).cljs$core$IFn$_invoke$arity$1(db);
}));
beta.web.main.initial_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-data","some-data",-1679942389),"data"], null);
beta.web.main.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/page/:page-no",new cljs.core.Keyword(null,"page","page",849072397)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/creature/:id",new cljs.core.Keyword(null,"creature","creature",-1010611920)], null)], null);
beta.web.main.app = (function beta$web$main$app(){
return kee_frame.core.case_route.call(null,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(1)], null));
})], null),"Page 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-creature-sheet","open-creature-sheet",-1476376860),(74766790688878)], null));
})], null),"Aleksander"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),(1)], null)], null))], null),"Page 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),(2)], null)], null))], null),"Page 2"], null)], null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587)], null))))?"green":"red")], null)], null),"Page Stuff"], null),((cljs.core.not.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-status","page-load-status",-1785802587)], null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null))], null),"Home"], null)], null):null)], null),new cljs.core.Keyword(null,"creature","creature",-1010611920),(function (){
cljs.core.println.call(null,"Creature ID: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889)], null))));

return beta.creature.interface$.creature_display.call(null,(74766790688878));
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Page not Found"], null));
});
beta.web.main.main_BANG_ = (function beta$web$main$main_BANG_(){
return kee_frame.core.start_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),beta.web.main.initial_db,new cljs.core.Keyword(null,"routes","routes",457900162),beta.web.main.routes,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [beta.web.main.app], null)], null));
});
kee_frame.core.reg_controller.call(null,new cljs.core.Keyword(null,"creature","creature",-1010611920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(function (route_data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)),new cljs.core.Keyword(null,"creature","creature",-1010611920))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_data));
} else {
return null;
}
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (ctx,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature","load","creature/load",81823261),id], null);
})], null));
kee_frame.core.reg_chain.call(null,new cljs.core.Keyword("creature","load","creature/load",81823261),(function (ctx,p__9221){
var vec__9222 = p__9221;
var id = cljs.core.nth.call(null,vec__9222,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8000/creature/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044)], null)], null)], null);
}),(function (p__9225,p__9226){
var map__9227 = p__9225;
var map__9227__$1 = cljs.core.__destructure_map.call(null,map__9227);
var db = cljs.core.get.call(null,map__9227__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9228 = p__9226;
var _ = cljs.core.nth.call(null,vec__9228,(0),null);
var creature_id = cljs.core.nth.call(null,vec__9228,(1),null);
cljs.core.println.call(null,["Creature: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(creature_id)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-creature","active-creature",-1459158889),creature_id)], null);
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
kee_frame.core.reg_chain.call(null,new cljs.core.Keyword("page","load","page/load",-1315748755),(function (ctx,p__9231){
var vec__9232 = p__9231;
var page_no = cljs.core.nth.call(null,vec__9232,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8000/page",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-load-failure","page-load-failure",-1869189044)], null)], null)], null);
}),(function (p__9235,p__9236){
var map__9237 = p__9235;
var map__9237__$1 = cljs.core.__destructure_map.call(null,map__9237);
var db = cljs.core.get.call(null,map__9237__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9238 = p__9236;
var _ = cljs.core.nth.call(null,vec__9238,(0),null);
var page_no = cljs.core.nth.call(null,vec__9238,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-load-success","page-load-success",-1550676406),true)], null);
}));
beta.web.main.main_BANG_.call(null);

//# sourceMappingURL=main.js.map
