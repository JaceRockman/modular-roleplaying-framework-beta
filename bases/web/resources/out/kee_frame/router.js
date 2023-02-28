// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.router');
goog.require('cljs.core');
goog.require('kee_frame.interop');
goog.require('re_frame.core');
goog.require('re_chain.core');
goog.require('kee_frame.event_logger');
goog.require('kee_frame.api');
goog.require('kee_frame.spec');
goog.require('kee_frame.state');
goog.require('kee_frame.scroll');
goog.require('kee_frame.controller');
goog.require('reitit.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('clojure.set');
kee_frame.router.default_chain_links = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804),(function (effects){
return new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(effects);
}),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),(function (effects){
return cljs.core.get_in.call(null,effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
}),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects,dispatch){
return cljs.core.assoc_in.call(null,effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),dispatch);
})], null)], null);
kee_frame.router.url = (function kee_frame$router$url(data){
if(cljs.core.truth_(cljs.core.deref.call(null,kee_frame.state.router))){
} else {
throw cljs.core.ex_info.call(null,"No router defined for this app",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.deref.call(null,kee_frame.state.router)], null));
}

return kee_frame.api.data__GT_url.call(null,cljs.core.deref.call(null,kee_frame.state.router),data);
});
kee_frame.router.goto$ = (function kee_frame$router$goto(data){
return kee_frame.api.navigate_BANG_.call(null,cljs.core.deref.call(null,kee_frame.state.navigator),kee_frame.router.url.call(null,data));
});
kee_frame.router.nav_handler = (function kee_frame$router$nav_handler(router,route_change_event){
return (function (path){
var temp__5802__auto__ = kee_frame.api.url__GT_data.call(null,router,path);
if(cljs.core.truth_(temp__5802__auto__)){
var route = temp__5802__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = route_change_event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849);
}
})(),route], null));
} else {
re_frame.core.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"No route match found");

re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"No match found for path ",path);

return re_frame.core.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
}
});
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.rep_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__793__auto__,v__794__auto__){
return cljs.core.nth.call(null,v__794__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__15801){
return cljs.core.map_QMARK_.call(null,G__15801);
})], null),null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null)));
kee_frame.router.assert_route_data = (function kee_frame$router$assert_route_data(data){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data)){
return null;
} else {
expound.alpha.expound.call(null,new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data);

throw cljs.core.ex_info.call(null,"Bad route data input",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data));
}
});
kee_frame.router.url_not_found = (function kee_frame$router$url_not_found(routes,data){
throw cljs.core.ex_info.call(null,"Could not find url for the provided data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
kee_frame.router.route_match_not_found = (function kee_frame$router$route_match_not_found(routes,url){
throw cljs.core.ex_info.call(null,"No match for URL in routes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"routes","routes",457900162),routes], null));
});
kee_frame.router.valid_QMARK_ = (function kee_frame$router$valid_QMARK_(p__15802){
var map__15803 = p__15802;
var map__15803__$1 = cljs.core.__destructure_map.call(null,map__15803);
var path_params = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var required = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return clojure.set.subset_QMARK_.call(null,required,cljs.core.set.call(null,cljs.core.keys.call(null,path_params)));
});
kee_frame.router.match_data = (function kee_frame$router$match_data(routes,route,hash_QMARK_){
var vec__15804 = route;
var _ = cljs.core.nth.call(null,vec__15804,(0),null);
var path_params = cljs.core.nth.call(null,vec__15804,(1),null);
var map__15807 = cljs.core.apply.call(null,reitit.core.match_by_name,routes,route);
var map__15807__$1 = cljs.core.__destructure_map.call(null,map__15807);
var match = map__15807__$1;
var path = cljs.core.get.call(null,map__15807__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(kee_frame.router.valid_QMARK_.call(null,match)){
return [(cljs.core.truth_(hash_QMARK_)?"/#":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),(function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5808__auto__ == null)){
return null;
} else {
var q = temp__5808__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
}
})(),(function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5808__auto__ == null)){
return null;
} else {
var h = temp__5808__auto__;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
}
})()].join('');
} else {
return null;
}
});
kee_frame.router.match_url = (function kee_frame$router$match_url(routes,url){
var vec__15808 = clojure.string.split.call(null,clojure.string.replace.call(null,url,/^\/#\//,"/"),/#/,(2));
var path_PLUS_query = cljs.core.nth.call(null,vec__15808,(0),null);
var fragment = cljs.core.nth.call(null,vec__15808,(1),null);
var vec__15811 = clojure.string.split.call(null,path_PLUS_query,/\?/,(2));
var path = cljs.core.nth.call(null,vec__15811,(0),null);
var query = cljs.core.nth.call(null,vec__15811,(1),null);
var G__15814 = reitit.core.match_by_path.call(null,routes,path);
if((G__15814 == null)){
return null;
} else {
return cljs.core.assoc.call(null,G__15814,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query,new cljs.core.Keyword(null,"hash","hash",-13781596),fragment);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {kee_frame.api.Router}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kee_frame.router.ReititRouter = (function (routes,hash_QMARK_,not_found,__meta,__extmap,__hash){
this.routes = routes;
this.hash_QMARK_ = hash_QMARK_;
this.not_found = not_found;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15816,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15820 = k15816;
var G__15820__$1 = (((G__15820 instanceof cljs.core.Keyword))?G__15820.fqn:null);
switch (G__15820__$1) {
case "routes":
return self__.routes;

break;
case "hash?":
return self__.hash_QMARK_;

break;
case "not-found":
return self__.not_found;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15816,else__5346__auto__);

}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__15821){
var vec__15822 = p__15821;
var k__5367__auto__ = cljs.core.nth.call(null,vec__15822,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__15822,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#kee-frame.router.ReititRouter{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not-found","not-found",-629079980),self__.not_found],null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15815){
var self__ = this;
var G__15815__$1 = this;
return (new cljs.core.RecordIter((0),G__15815__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"hash?","hash?",-1899275922),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1127529290 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15817,other15818){
var self__ = this;
var this15817__$1 = this;
return (((!((other15818 == null)))) && ((((this15817__$1.constructor === other15818.constructor)) && (((cljs.core._EQ_.call(null,this15817__$1.routes,other15818.routes)) && (((cljs.core._EQ_.call(null,this15817__$1.hash_QMARK_,other15818.hash_QMARK_)) && (((cljs.core._EQ_.call(null,this15817__$1.not_found,other15818.not_found)) && (cljs.core._EQ_.call(null,this15817__$1.__extmap,other15818.__extmap)))))))))));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"hash?","hash?",-1899275922),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$data__GT_url$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
kee_frame.router.assert_route_data.call(null,data);

var or__5045__auto__ = kee_frame.router.match_data.call(null,self__.routes,data,self__.hash_QMARK_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kee_frame.router.url_not_found.call(null,self__.routes,data);
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$url__GT_data$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = kee_frame.router.match_url.call(null,self__.routes,url);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__15825 = self__.not_found;
if((G__15825 == null)){
return null;
} else {
return kee_frame.router.match_url.call(null,self__.routes,G__15825);
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return kee_frame.router.route_match_not_found.call(null,self__.routes,url);
}
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15816){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15826 = k15816;
var G__15826__$1 = (((G__15826 instanceof cljs.core.Keyword))?G__15826.fqn:null);
switch (G__15826__$1) {
case "routes":
case "hash?":
case "not-found":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k15816);

}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15815){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15827 = cljs.core.keyword_identical_QMARK_;
var expr__15828 = k__5352__auto__;
if(cljs.core.truth_(pred__15827.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__15828))){
return (new kee_frame.router.ReititRouter(G__15815,self__.hash_QMARK_,self__.not_found,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15827.call(null,new cljs.core.Keyword(null,"hash?","hash?",-1899275922),expr__15828))){
return (new kee_frame.router.ReititRouter(self__.routes,G__15815,self__.not_found,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15827.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),expr__15828))){
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,G__15815,self__.__meta,self__.__extmap,null));
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__15815),null));
}
}
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"not-found","not-found",-629079980),self__.not_found,null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15815){
var self__ = this;
var this__5342__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,G__15815,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(kee_frame.router.ReititRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"hash?","hash?",-258744395,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null);
}));

(kee_frame.router.ReititRouter.cljs$lang$type = true);

(kee_frame.router.ReititRouter.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"kee-frame.router/ReititRouter",null,(1),null));
}));

(kee_frame.router.ReititRouter.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"kee-frame.router/ReititRouter");
}));

/**
 * Positional factory function for kee-frame.router/ReititRouter.
 */
kee_frame.router.__GT_ReititRouter = (function kee_frame$router$__GT_ReititRouter(routes,hash_QMARK_,not_found){
return (new kee_frame.router.ReititRouter(routes,hash_QMARK_,not_found,null,null,null));
});

/**
 * Factory function for kee-frame.router/ReititRouter, taking a map of keywords to field values.
 */
kee_frame.router.map__GT_ReititRouter = (function kee_frame$router$map__GT_ReititRouter(G__15819){
var extmap__5385__auto__ = (function (){var G__15830 = cljs.core.dissoc.call(null,G__15819,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"hash?","hash?",-1899275922),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.record_QMARK_.call(null,G__15819)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__15830);
} else {
return G__15830;
}
})();
return (new kee_frame.router.ReititRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__15819),new cljs.core.Keyword(null,"hash?","hash?",-1899275922).cljs$core$IFn$_invoke$arity$1(G__15819),new cljs.core.Keyword(null,"not-found","not-found",-629079980).cljs$core$IFn$_invoke$arity$1(G__15819),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

kee_frame.router.bootstrap_routes = (function kee_frame$router$bootstrap_routes(p__15834){
var map__15835 = p__15834;
var map__15835__$1 = cljs.core.__destructure_map.call(null,map__15835);
var routes = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var router = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var hash_routing_QMARK_ = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732));
var scroll = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var route_change_event = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"route-change-event","route-change-event",1834214120));
var not_found = cljs.core.get.call(null,map__15835__$1,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var initialized_QMARK_ = cljs.core.boolean$.call(null,cljs.core.deref.call(null,kee_frame.state.navigator));
var router__$1 = (function (){var or__5045__auto__ = router;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return kee_frame.router.__GT_ReititRouter.call(null,reitit.core.router.call(null,routes),hash_routing_QMARK_,not_found);
}
})();
cljs.core.reset_BANG_.call(null,kee_frame.state.router,router__$1);

re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),kee_frame.router.goto$);

if(initialized_QMARK_){
} else {
if(cljs.core.truth_(scroll)){
kee_frame.scroll.start_BANG_.call(null);
} else {
}

cljs.core.reset_BANG_.call(null,kee_frame.state.navigator,kee_frame.interop.make_navigator.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),kee_frame.router.nav_handler.call(null,router__$1,route_change_event),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (p1__15833_SHARP_){
return cljs.core.boolean$.call(null,kee_frame.api.url__GT_data.call(null,router__$1,p1__15833_SHARP_));
})], null)));
}

return kee_frame.api.dispatch_current_BANG_.call(null,cljs.core.deref.call(null,kee_frame.state.navigator));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,p__15836){
var vec__15837 = p__15836;
var _ = cljs.core.nth.call(null,vec__15837,(0),null);
var initial = cljs.core.nth.call(null,vec__15837,(1),null);
return cljs.core.merge.call(null,initial,db);
}));
kee_frame.router.reg_route_event = (function kee_frame$router$reg_route_event(scroll){
return re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.event_logger.interceptor], null),(function (p__15840,p__15841){
var map__15842 = p__15840;
var map__15842__$1 = cljs.core.__destructure_map.call(null,map__15842);
var ctx = map__15842__$1;
var db = cljs.core.get.call(null,map__15842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15843 = p__15841;
var _ = cljs.core.nth.call(null,vec__15843,(0),null);
var route = cljs.core.nth.call(null,vec__15843,(1),null);
if(cljs.core.truth_(scroll)){
kee_frame.scroll.monitor_requests_BANG_.call(null,route);
} else {
}

var map__15846 = kee_frame.controller.controller_effects.call(null,cljs.core.deref.call(null,kee_frame.state.controllers),ctx,route);
var map__15846__$1 = cljs.core.__destructure_map.call(null,map__15846);
var update_controllers = cljs.core.get.call(null,map__15846__$1,new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559));
var dispatch_n = cljs.core.get.call(null,map__15846__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var G__15847 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),route),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(scroll)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),route,(0)], null)], null):null)], null)], null);
var G__15847__$1 = (cljs.core.truth_(dispatch_n)?cljs.core.assoc.call(null,G__15847,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatch_n):G__15847);
if(cljs.core.truth_(update_controllers)){
return cljs.core.assoc.call(null,G__15847__$1,new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559),update_controllers);
} else {
return G__15847__$1;
}
}));
});
kee_frame.router.deprecations = (function kee_frame$router$deprecations(p__15848){
var map__15849 = p__15848;
var map__15849__$1 = cljs.core.__destructure_map.call(null,map__15849);
var debug_QMARK_ = cljs.core.get.call(null,map__15849__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
var debug_config = cljs.core.get.call(null,map__15849__$1,new cljs.core.Keyword(null,"debug-config","debug-config",329260673));
if((!((debug_QMARK_ == null)))){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Kee-frame option :debug? has been removed. Configure timbre logger through :log option instead. Example: {:level :debug :ns-blacklist [\"kee-frame.event-logger\"]}");
} else {
}

if((!((debug_config == null)))){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Kee-frame option :debug-config has been removed. Configure timbre logger through :log option instead. Example: {:level :debug :ns-blacklist [\"kee-frame.event-logger\"]}");
} else {
return null;
}
});
kee_frame.router.start_BANG_ = (function kee_frame$router$start_BANG_(p__15850){
var map__15851 = p__15850;
var map__15851__$1 = cljs.core.__destructure_map.call(null,map__15851);
var config = map__15851__$1;
var initial_db = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var routes = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var screen__$1 = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var router = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var app_db_spec = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586));
var chain_links = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"chain-links","chain-links",951542256));
var global_interceptors = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472));
var scroll = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779),true);
var root_component = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"root-component","root-component",-1807026475));
var log_spec_error = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"log-spec-error","log-spec-error",718867605));
kee_frame.router.deprecations.call(null,config);

if(cljs.core.truth_(app_db_spec)){
re_frame.core.reg_global_interceptor.call(null,kee_frame.spec.spec_interceptor.call(null,app_db_spec,log_spec_error));
} else {
}

var seq__15852_15856 = cljs.core.seq.call(null,global_interceptors);
var chunk__15853_15857 = null;
var count__15854_15858 = (0);
var i__15855_15859 = (0);
while(true){
if((i__15855_15859 < count__15854_15858)){
var i_15860 = cljs.core._nth.call(null,chunk__15853_15857,i__15855_15859);
re_frame.core.reg_global_interceptor.call(null,i_15860);


var G__15861 = seq__15852_15856;
var G__15862 = chunk__15853_15857;
var G__15863 = count__15854_15858;
var G__15864 = (i__15855_15859 + (1));
seq__15852_15856 = G__15861;
chunk__15853_15857 = G__15862;
count__15854_15858 = G__15863;
i__15855_15859 = G__15864;
continue;
} else {
var temp__5804__auto___15865 = cljs.core.seq.call(null,seq__15852_15856);
if(temp__5804__auto___15865){
var seq__15852_15866__$1 = temp__5804__auto___15865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15852_15866__$1)){
var c__5568__auto___15867 = cljs.core.chunk_first.call(null,seq__15852_15866__$1);
var G__15868 = cljs.core.chunk_rest.call(null,seq__15852_15866__$1);
var G__15869 = c__5568__auto___15867;
var G__15870 = cljs.core.count.call(null,c__5568__auto___15867);
var G__15871 = (0);
seq__15852_15856 = G__15868;
chunk__15853_15857 = G__15869;
count__15854_15858 = G__15870;
i__15855_15859 = G__15871;
continue;
} else {
var i_15872 = cljs.core.first.call(null,seq__15852_15866__$1);
re_frame.core.reg_global_interceptor.call(null,i_15872);


var G__15873 = cljs.core.next.call(null,seq__15852_15866__$1);
var G__15874 = null;
var G__15875 = (0);
var G__15876 = (0);
seq__15852_15856 = G__15873;
chunk__15853_15857 = G__15874;
count__15854_15858 = G__15875;
i__15855_15859 = G__15876;
continue;
}
} else {
}
}
break;
}

re_chain.core.configure_BANG_.call(null,cljs.core.concat.call(null,kee_frame.router.default_chain_links,chain_links));

kee_frame.router.reg_route_event.call(null,scroll);

if(cljs.core.truth_((function (){var and__5043__auto__ = routes;
if(cljs.core.truth_(and__5043__auto__)){
return router;
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Both routes and router specified. If you want to use these routes, pass them to your router constructor.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"router","router",1091916230),router], null));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = routes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return router;
}
})())){
kee_frame.router.bootstrap_routes.call(null,config);
} else {
}

if(cljs.core.truth_(initial_db)){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434),initial_db], null));
} else {
}

if(cljs.core.truth_(screen__$1)){
var config_15877__$1 = ((cljs.core.boolean_QMARK_.call(null,screen__$1))?null:screen__$1);
if(cljs.core.truth_(cljs.core.deref.call(null,kee_frame.state.breakpoints_initialized_QMARK_))){
kee_frame.interop.set_breakpoint_subs.call(null,config_15877__$1);
} else {
kee_frame.interop.set_breakpoints.call(null,config_15877__$1);

cljs.core.reset_BANG_.call(null,kee_frame.state.breakpoints_initialized_QMARK_,true);
}
} else {
}

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),(function (db,_){
return new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640).cljs$core$IFn$_invoke$arity$2(db,null);
}));

return kee_frame.interop.render_root.call(null,root_component);
});
kee_frame.router.make_route_component = (function kee_frame$router$make_route_component(component,route){
if(cljs.core.fn_QMARK_.call(null,component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,route], null);
} else {
return component;
}
});
kee_frame.router.case_route = (function kee_frame$router$case_route(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15895 = arguments.length;
var i__5770__auto___15896 = (0);
while(true){
if((i__5770__auto___15896 < len__5769__auto___15895)){
args__5775__auto__.push((arguments[i__5770__auto___15896]));

var G__15897 = (i__5770__auto___15896 + (1));
i__5770__auto___15896 = G__15897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.router.case_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.router.case_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null));
var dispatch_value = f.call(null,cljs.core.deref.call(null,route));
var G__15883 = cljs.core.partition_all.call(null,(2),pairs);
var vec__15884 = G__15883;
var seq__15885 = cljs.core.seq.call(null,vec__15884);
var first__15886 = cljs.core.first.call(null,seq__15885);
var seq__15885__$1 = cljs.core.next.call(null,seq__15885);
var first_pair = first__15886;
var rest_pairs = seq__15885__$1;
var G__15883__$1 = G__15883;
while(true){
var vec__15887 = G__15883__$1;
var seq__15888 = cljs.core.seq.call(null,vec__15887);
var first__15889 = cljs.core.first.call(null,seq__15888);
var seq__15888__$1 = cljs.core.next.call(null,seq__15888);
var first_pair__$1 = first__15889;
var rest_pairs__$1 = seq__15888__$1;
if(cljs.core.truth_((function (){var G__15890 = first_pair__$1;
var G__15890__$1 = (((G__15890 == null))?null:cljs.core.seq.call(null,G__15890));
var G__15890__$2 = (((G__15890__$1 == null))?null:cljs.core.count.call(null,G__15890__$1));
if((G__15890__$2 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__15890__$2,(2));
}
})())){
var vec__15891 = first_pair__$1;
var value = cljs.core.nth.call(null,vec__15891,(0),null);
var component = cljs.core.nth.call(null,vec__15891,(1),null);
if(cljs.core._EQ_.call(null,value,dispatch_value)){
return kee_frame.router.make_route_component.call(null,component,cljs.core.deref.call(null,route));
} else {
var G__15898 = rest_pairs__$1;
G__15883__$1 = G__15898;
continue;
}
} else {
if(cljs.core.truth_((function (){var G__15894 = first_pair__$1;
var G__15894__$1 = (((G__15894 == null))?null:cljs.core.seq.call(null,G__15894));
var G__15894__$2 = (((G__15894__$1 == null))?null:cljs.core.count.call(null,G__15894__$1));
if((G__15894__$2 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__15894__$2,(1));
}
})())){
return kee_frame.router.make_route_component.call(null,cljs.core.first.call(null,first_pair__$1),cljs.core.deref.call(null,route));
} else {
throw cljs.core.ex_info.call(null,"Could not find a component to match route. Did you remember to include a single last default case?",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.deref.call(null,route),new cljs.core.Keyword(null,"dispatch-value","dispatch-value",163470182),dispatch_value,new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));

}
}
break;
}
}));

(kee_frame.router.case_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.router.case_route.cljs$lang$applyTo = (function (seq15878){
var G__15879 = cljs.core.first.call(null,seq15878);
var seq15878__$1 = cljs.core.next.call(null,seq15878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15879,seq15878__$1);
}));

kee_frame.router.switch_route = (function kee_frame$router$switch_route(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15914 = arguments.length;
var i__5770__auto___15915 = (0);
while(true){
if((i__5770__auto___15915 < len__5769__auto___15914)){
args__5775__auto__.push((arguments[i__5770__auto___15915]));

var G__15916 = (i__5770__auto___15915 + (1));
i__5770__auto___15915 = G__15916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,pairs))){
} else {
throw cljs.core.ex_info.call(null,"switch-route accepts an even number of args",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs,new cljs.core.Keyword(null,"pairs-count","pairs-count",168301941),cljs.core.count.call(null,pairs)], null));
}

var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null));
var dispatch_value = f.call(null,cljs.core.deref.call(null,route));
var G__15904 = cljs.core.partition.call(null,(2),pairs);
var vec__15905 = G__15904;
var seq__15906 = cljs.core.seq.call(null,vec__15905);
var first__15907 = cljs.core.first.call(null,seq__15906);
var seq__15906__$1 = cljs.core.next.call(null,seq__15906);
var first_pair = first__15907;
var rest_pairs = seq__15906__$1;
var G__15904__$1 = G__15904;
while(true){
var vec__15908 = G__15904__$1;
var seq__15909 = cljs.core.seq.call(null,vec__15908);
var first__15910 = cljs.core.first.call(null,seq__15909);
var seq__15909__$1 = cljs.core.next.call(null,seq__15909);
var first_pair__$1 = first__15910;
var rest_pairs__$1 = seq__15909__$1;
if(cljs.core.truth_(first_pair__$1)){
var vec__15911 = first_pair__$1;
var value = cljs.core.nth.call(null,vec__15911,(0),null);
var component = cljs.core.nth.call(null,vec__15911,(1),null);
if(cljs.core._EQ_.call(null,value,dispatch_value)){
return kee_frame.router.make_route_component.call(null,component,cljs.core.deref.call(null,route));
} else {
var G__15917 = rest_pairs__$1;
G__15904__$1 = G__15917;
continue;
}
} else {
throw cljs.core.ex_info.call(null,"Could not find a component to match route. Did you remember to include a case for nil?",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.deref.call(null,route),new cljs.core.Keyword(null,"dispatch-value","dispatch-value",163470182),dispatch_value,new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));
}
break;
}
}));

(kee_frame.router.switch_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.router.switch_route.cljs$lang$applyTo = (function (seq15899){
var G__15900 = cljs.core.first.call(null,seq15899);
var seq15899__$1 = cljs.core.next.call(null,seq15899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15900,seq15899__$1);
}));


//# sourceMappingURL=router.js.map
