// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.web.main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('kee_frame.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('reagent.dom.client');
goog.require('beta.creature.interface$');
kee_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"go-to-page","go-to-page",705805659),(function (p__9693,p__9694){
var map__9695 = p__9693;
var map__9695__$1 = cljs.core.__destructure_map.call(null,map__9695);
var db = cljs.core.get.call(null,map__9695__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9696 = p__9694;
var _ = cljs.core.nth.call(null,vec__9696,(0),null);
var page_no = cljs.core.nth.call(null,vec__9696,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),page_no], null)], null)], null);
}));
beta.web.main.initial_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-data","some-data",-1679942389),"data"], null);
beta.web.main.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/page/:page-no",new cljs.core.Keyword(null,"page","page",849072397)], null)], null);
beta.web.main.app = (function beta$web$main$app(){
return kee_frame.core.case_route.call(null,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),(1)], null)], null))], null),"Page 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-no","page-no",1459765550),(2)], null)], null))], null),"Page 2"], null)], null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Page not Found"], null));
});
beta.web.main.main_BANG_ = (function beta$web$main$main_BANG_(){
return kee_frame.core.start_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),beta.web.main.initial_db,new cljs.core.Keyword(null,"routes","routes",457900162),beta.web.main.routes,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [beta.web.main.app], null)], null));
});
kee_frame.core.reg_controller.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(function (route_data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)),new cljs.core.Keyword(null,"page","page",849072397))){
return new cljs.core.Keyword(null,"page-no","page-no",1459765550).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_data));
} else {
return null;
}
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (ctx,page_no){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","load","page/load",-1315748755),page_no], null);
})], null));
kee_frame.core.reg_chain.call(null,new cljs.core.Keyword("page","load","page/load",-1315748755),(function (ctx,p__9699){
var vec__9700 = p__9699;
var page_no = cljs.core.nth.call(null,vec__9700,(0),null);
cljs.core.println.call(null,["Page Loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_no)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"localhost:8080/page",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], null);
}),(function (p__9703,p__9704){
var map__9705 = p__9703;
var map__9705__$1 = cljs.core.__destructure_map.call(null,map__9705);
var db = cljs.core.get.call(null,map__9705__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__9706 = p__9704;
var _ = cljs.core.nth.call(null,vec__9706,(0),null);
var page_data = cljs.core.nth.call(null,vec__9706,(1),null);
cljs.core.println.call(null,page_data);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page_data),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(1)], null)], null)], null);
}));
beta.web.main.main_BANG_.call(null);

//# sourceMappingURL=main.js.map
