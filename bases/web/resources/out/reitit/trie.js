// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.core.set.call(null,x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,x);

}
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k1862,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__1866 = k1862;
var G__1866__$1 = (((G__1866 instanceof cljs.core.Keyword))?G__1866.fqn:null);
switch (G__1866__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1862,else__5346__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__1867){
var vec__1868 = p__1867;
var k__5367__auto__ = cljs.core.nth.call(null,vec__1868,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__1868,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#reitit.trie.Wild{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1861){
var self__ = this;
var G__1861__$1 = this;
return (new cljs.core.RecordIter((0),G__1861__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1863,other1864){
var self__ = this;
var this1863__$1 = this;
return (((!((other1864 == null)))) && ((((this1863__$1.constructor === other1864.constructor)) && (((cljs.core._EQ_.call(null,this1863__$1.value,other1864.value)) && (cljs.core._EQ_.call(null,this1863__$1.__extmap,other1864.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k1862){
var self__ = this;
var this__5350__auto____$1 = this;
var G__1871 = k1862;
var G__1871__$1 = (((G__1871 instanceof cljs.core.Keyword))?G__1871.fqn:null);
switch (G__1871__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k1862);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__1861){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__1872 = cljs.core.keyword_identical_QMARK_;
var expr__1873 = k__5352__auto__;
if(cljs.core.truth_(pred__1872.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__1873))){
return (new reitit.trie.Wild(G__1861,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__1861),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__1861){
var self__ = this;
var this__5342__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__1861,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__1865){
var extmap__5385__auto__ = (function (){var G__1875 = cljs.core.dissoc.call(null,G__1865,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__1865)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1875);
} else {
return G__1875;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__1865),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k1879,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__1883 = k1879;
var G__1883__$1 = (((G__1883 instanceof cljs.core.Keyword))?G__1883.fqn:null);
switch (G__1883__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1879,else__5346__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__1884){
var vec__1885 = p__1884;
var k__5367__auto__ = cljs.core.nth.call(null,vec__1885,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__1885,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#reitit.trie.CatchAll{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1878){
var self__ = this;
var G__1878__$1 = this;
return (new cljs.core.RecordIter((0),G__1878__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1880,other1881){
var self__ = this;
var this1880__$1 = this;
return (((!((other1881 == null)))) && ((((this1880__$1.constructor === other1881.constructor)) && (((cljs.core._EQ_.call(null,this1880__$1.value,other1881.value)) && (cljs.core._EQ_.call(null,this1880__$1.__extmap,other1881.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k1879){
var self__ = this;
var this__5350__auto____$1 = this;
var G__1888 = k1879;
var G__1888__$1 = (((G__1888 instanceof cljs.core.Keyword))?G__1888.fqn:null);
switch (G__1888__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k1879);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__1878){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__1889 = cljs.core.keyword_identical_QMARK_;
var expr__1890 = k__5352__auto__;
if(cljs.core.truth_(pred__1889.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__1890))){
return (new reitit.trie.CatchAll(G__1878,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__1878),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__1878){
var self__ = this;
var this__5342__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__1878,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__1882){
var extmap__5385__auto__ = (function (){var G__1892 = cljs.core.dissoc.call(null,G__1882,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__1882)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1892);
} else {
return G__1892;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__1882),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k1896,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__1900 = k1896;
var G__1900__$1 = (((G__1900 instanceof cljs.core.Keyword))?G__1900.fqn:null);
switch (G__1900__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1896,else__5346__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__1901){
var vec__1902 = p__1901;
var k__5367__auto__ = cljs.core.nth.call(null,vec__1902,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__1902,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#reitit.trie.Match{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1895){
var self__ = this;
var G__1895__$1 = this;
return (new cljs.core.RecordIter((0),G__1895__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1897,other1898){
var self__ = this;
var this1897__$1 = this;
return (((!((other1898 == null)))) && ((((this1897__$1.constructor === other1898.constructor)) && (((cljs.core._EQ_.call(null,this1897__$1.params,other1898.params)) && (((cljs.core._EQ_.call(null,this1897__$1.data,other1898.data)) && (cljs.core._EQ_.call(null,this1897__$1.__extmap,other1898.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k1896){
var self__ = this;
var this__5350__auto____$1 = this;
var G__1905 = k1896;
var G__1905__$1 = (((G__1905 instanceof cljs.core.Keyword))?G__1905.fqn:null);
switch (G__1905__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k1896);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__1895){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__1906 = cljs.core.keyword_identical_QMARK_;
var expr__1907 = k__5352__auto__;
if(cljs.core.truth_(pred__1906.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__1907))){
return (new reitit.trie.Match(G__1895,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1906.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__1907))){
return (new reitit.trie.Match(self__.params,G__1895,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__1895),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__1895){
var self__ = this;
var this__5342__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__1895,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__1899){
var extmap__5385__auto__ = (function (){var G__1909 = cljs.core.dissoc.call(null,G__1899,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__1899)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1909);
} else {
return G__1909;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__1899),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__1899),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k1913,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__1917 = k1913;
var G__1917__$1 = (((G__1917 instanceof cljs.core.Keyword))?G__1917.fqn:null);
switch (G__1917__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1913,else__5346__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__1918){
var vec__1919 = p__1918;
var k__5367__auto__ = cljs.core.nth.call(null,vec__1919,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__1919,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#reitit.trie.Node{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1912){
var self__ = this;
var G__1912__$1 = this;
return (new cljs.core.RecordIter((0),G__1912__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1914,other1915){
var self__ = this;
var this1914__$1 = this;
return (((!((other1915 == null)))) && ((((this1914__$1.constructor === other1915.constructor)) && (((cljs.core._EQ_.call(null,this1914__$1.children,other1915.children)) && (((cljs.core._EQ_.call(null,this1914__$1.wilds,other1915.wilds)) && (((cljs.core._EQ_.call(null,this1914__$1.catch_all,other1915.catch_all)) && (((cljs.core._EQ_.call(null,this1914__$1.params,other1915.params)) && (((cljs.core._EQ_.call(null,this1914__$1.data,other1915.data)) && (cljs.core._EQ_.call(null,this1914__$1.__extmap,other1915.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k1913){
var self__ = this;
var this__5350__auto____$1 = this;
var G__1922 = k1913;
var G__1922__$1 = (((G__1922 instanceof cljs.core.Keyword))?G__1922.fqn:null);
switch (G__1922__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k1913);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__1912){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__1923 = cljs.core.keyword_identical_QMARK_;
var expr__1924 = k__5352__auto__;
if(cljs.core.truth_(pred__1923.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__1924))){
return (new reitit.trie.Node(G__1912,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1923.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__1924))){
return (new reitit.trie.Node(self__.children,G__1912,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1923.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__1924))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__1912,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1923.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__1924))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__1912,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1923.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__1924))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__1912,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__1912),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__1912){
var self__ = this;
var this__5342__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__1912,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__1916){
var extmap__5385__auto__ = (function (){var G__1926 = cljs.core.dissoc.call(null,G__1916,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__1916)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1926);
} else {
return G__1926;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__1916),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__1916),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__1916),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__1916),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__1916),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_1929 = (function (this$,i,max,path){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.match[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,i,max,path);
} else {
var m__5392__auto__ = (reitit.trie.match["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,i,max,path);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_1929.call(null,this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_1930 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.view[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (reitit.trie.view["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_1930.call(null,this$);
}
});

var reitit$trie$Matcher$depth$dyn_1931 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.depth[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (reitit.trie.depth["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_1931.call(null,this$);
}
});

var reitit$trie$Matcher$length$dyn_1932 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.length[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (reitit.trie.length["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_1932.call(null,this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_1933 = (function (this$,params,data){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,params,data);
} else {
var m__5392__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_1933.call(null,this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_1934 = (function (this$,path,matcher){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,path,matcher);
} else {
var m__5392__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,path,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_1934.call(null,this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_1935 = (function (this$,key,end,matcher){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,key,end,matcher);
} else {
var m__5392__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,key,end,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_1935.call(null,this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_1936 = (function (this$,key,params,data){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,key,params,data);
} else {
var m__5392__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,key,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_1936.call(null,this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_1937 = (function (this$,matchers,ordered_QMARK_){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
var m__5392__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_1937.call(null,this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_1938 = (function (this$,matcher){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie._pretty[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,matcher);
} else {
var m__5392__auto__ = (reitit.trie._pretty["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_1938.call(null,this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_1939 = (function (this$,matcher){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,matcher);
} else {
var m__5392__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_1939.call(null,this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__5133__auto__ = cljs.core.count.call(null,s1);
var y__5134__auto__ = cljs.core.count.call(null,s2);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.call(null,s1,(0),max);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,s1,i),cljs.core.get.call(null,s2,i))){
if((!((i === (0))))){
return cljs.core.subs.call(null,s1,(0),i);
} else {
return null;
}
} else {
var G__1940 = (i + (1));
i = G__1940;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5802__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__1941){
var map__1942 = p__1941;
var map__1942__$1 = cljs.core.__destructure_map.call(null,map__1942);
var syntax = cljs.core.get.call(null,map__1942__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.call(null,from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild.call(null,reitit.trie._keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.call(null,to,cljs.core.count.call(null,s))){
return cljs.core.concat.call(null,ss,_static.call(null,from,to));
} else {
var c = cljs.core.get.call(null,s,to);
if(cljs.core.truth_((function (){var and__5043__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,"{",c);
} else {
return and__5043__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5045__auto__ = clojure.string.index_of.call(null,s,"}",to);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.call(null,"*",cljs.core.get.call(null,s,(to + (1))))){
var G__1943 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,(to + (1)),to_SINGLEQUOTE_));
var G__1944 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__1945 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__1943;
from = G__1944;
to = G__1945;
continue;
} else {
var G__1946 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__1947 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__1948 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__1946;
from = G__1947;
to = G__1948;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,":",c);
} else {
return and__5043__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5045__auto__ = clojure.string.index_of.call(null,s,"/",to);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.count.call(null,s);
}
})();
if(cljs.core._EQ_.call(null,(1),(to_SINGLEQUOTE_ - to))){
var G__1949 = ss;
var G__1950 = from;
var G__1951 = (to + (1));
ss = G__1949;
from = G__1950;
to = G__1951;
continue;
} else {
var G__1952 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__1953 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__1954 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__1952;
from = G__1953;
to = G__1954;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,"*",c);
} else {
return and__5043__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count.call(null,s);
var G__1955 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,to,to_SINGLEQUOTE_));
var G__1956 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__1957 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__1955;
from = G__1956;
to = G__1957;
continue;
} else {
var G__1958 = ss;
var G__1959 = from;
var G__1960 = (to + (1));
ss = G__1958;
from = G__1959;
to = G__1960;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.call(null,(function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path.call(null,reitit.trie.split_path.call(null,s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__1961,p__1962){
var vec__1963 = p__1961;
var p1 = cljs.core.nth.call(null,vec__1963,(0),null);
var p1s = vec__1963;
var vec__1966 = p__1962;
var p2 = cljs.core.nth.call(null,vec__1966,(0),null);
var p2s = vec__1966;
var _split = (function (p){
var temp__5802__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.call(null,cljs.core.count.call(null,cp),cljs.core.count.call(null,p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,cljs.core.count.call(null,cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not.call(null,cp)))){
return _split.call(null,p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__1969){
var vec__1970 = p__1969;
var p = cljs.core.nth.call(null,vec__1970,(0),null);
var pps = vec__1970;
var i = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = i;
if(cljs.core.truth_(and__5043__auto__)){
return (i > (0));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null),cljs.core.rest.call(null,pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__1973){
var vec__1974 = p__1973;
var p = cljs.core.nth.call(null,vec__1974,(0),null);
var ps = vec__1974;
return cljs.core.concat.call(null,_slash.call(null,cp,p),cljs.core.rest.call(null,ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut.call(null,p1s),_postcut.call(null,p2s)], null);
} else {
var temp__5802__auto__ = (function (){var and__5043__auto__ = typeof p1 === 'string';
if(and__5043__auto__){
var and__5043__auto____$1 = typeof p2 === 'string';
if(and__5043__auto____$1){
return reitit.trie.common_prefix.call(null,p1,p2);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var cp = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut.call(null,cp,p1s),_tailcut.call(null,cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.call(null,x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__1977 = reitit.trie._slice_start.call(null,parts1,parts2);
var vec__1980 = cljs.core.nth.call(null,vec__1977,(0),null);
var seq__1981 = cljs.core.seq.call(null,vec__1980);
var first__1982 = cljs.core.first.call(null,seq__1981);
var seq__1981__$1 = cljs.core.next.call(null,seq__1981);
var s1 = first__1982;
var ss1 = seq__1981__$1;
var vec__1983 = cljs.core.nth.call(null,vec__1977,(1),null);
var seq__1984 = cljs.core.seq.call(null,vec__1983);
var first__1985 = cljs.core.first.call(null,seq__1984);
var seq__1984__$1 = cljs.core.next.call(null,seq__1984);
var s2 = first__1985;
var ss2 = seq__1984__$1;
if(cljs.core._EQ_.call(null,s1,s2,null)){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_.call(null,s1)) || (reitit.trie.catch_all_QMARK_.call(null,s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_.call(null,s1)) || (reitit.trie.wild_QMARK_.call(null,s2)))){
var G__1986 = reitit.trie._slice_end.call(null,s1,ss1);
var G__1987 = reitit.trie._slice_end.call(null,s2,ss2);
parts1 = G__1986;
parts2 = G__1987;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1,s2)){
return false;
} else {
var G__1988 = ss1;
var G__1989 = ss2;
parts1 = G__1988;
parts2 = G__1989;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_.call(null,reitit.trie.split_path.call(null,path1,opts),reitit.trie.split_path.call(null,path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__1990,fp,params,data){
var vec__1991 = p__1990;
var seq__1992 = cljs.core.seq.call(null,vec__1991);
var first__1993 = cljs.core.first.call(null,seq__1992);
var seq__1992__$1 = cljs.core.next.call(null,seq__1992);
var path = first__1993;
var ps = seq__1992__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"params","params",710516235),params):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first.call(null,ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
return reitit.trie._insert.call(null,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),ps,fp,params,data);
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_.call(null,path))?reitit.trie._insert.call(null,node,ps,fp,params,data):(function (){var or__5045__auto__ = cljs.core.reduce.call(null,(function (_,p__1994){
var vec__1995 = p__1994;
var p = cljs.core.nth.call(null,vec__1995,(0),null);
var n = cljs.core.nth.call(null,vec__1995,(1),null);
var temp__5802__auto__ = reitit.trie.common_prefix.call(null,p,path);
if(cljs.core.truth_(temp__5802__auto__)){
var cp = temp__5802__auto__;
if(cljs.core._EQ_.call(null,cp,p)){
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,n,cljs.core.conj.call(null,ps,cljs.core.subs.call(null,path,cljs.core.count.call(null,p))),fp,params,data);
return cljs.core.reduced.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.call(null,p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.call(null,path,((cp).length));
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data);
var n_SINGLEQUOTE__SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null)),null,null,null,null);
return cljs.core.reduced.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data));
}
})()
))));
var temp__5802__auto__ = cljs.core.get_in.call(null,node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return cljs.core.update.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.call(null,path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie1998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie1998 = (function (meta1999){
this.meta1999 = meta1999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie1998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2000,meta1999__$1){
var self__ = this;
var _2000__$1 = this;
return (new reitit.trie.t_reitit$trie1998(meta1999__$1));
}));

(reitit.trie.t_reitit$trie1998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2000){
var self__ = this;
var _2000__$1 = this;
return self__.meta1999;
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie2001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie2001 = (function (meta1999,_,params,data,match,meta2002){
this.meta1999 = meta1999;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta2002 = meta2002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie2001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2003,meta2002__$1){
var self__ = this;
var _2003__$1 = this;
return (new reitit.trie.t_reitit$trie2001(self__.meta1999,self__._,self__.params,self__.data,self__.match,meta2002__$1));
}));

(reitit.trie.t_reitit$trie2001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2003){
var self__ = this;
var _2003__$1 = this;
return self__.meta2002;
}));

(reitit.trie.t_reitit$trie2001.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie2001.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.call(null,i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie2001.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie2001.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie2001.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie2001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie1998","reitit.trie/t_reitit$trie1998",1325656065,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta2002","meta2002",280099251,null)], null);
}));

(reitit.trie.t_reitit$trie2001.cljs$lang$type = true);

(reitit.trie.t_reitit$trie2001.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie2001");

(reitit.trie.t_reitit$trie2001.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie2001");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie2001.
 */
reitit.trie.__GT_t_reitit$trie2001 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie2001(meta1999__$1,___$2,params__$1,data__$1,match__$1,meta2002){
return (new reitit.trie.t_reitit$trie2001(meta1999__$1,___$2,params__$1,data__$1,match__$1,meta2002));
});

}

return (new reitit.trie.t_reitit$trie2001(self__.meta1999,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count.call(null,path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie2004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie2004 = (function (meta1999,_,path,matcher,size,meta2005){
this.meta1999 = meta1999;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta2005 = meta2005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie2004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2006,meta2005__$1){
var self__ = this;
var _2006__$1 = this;
return (new reitit.trie.t_reitit$trie2004(self__.meta1999,self__._,self__.path,self__.matcher,self__.size,meta2005__$1));
}));

(reitit.trie.t_reitit$trie2004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2006){
var self__ = this;
var _2006__$1 = this;
return self__.meta2005;
}));

(reitit.trie.t_reitit$trie2004.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie2004.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,self__.size)){
return reitit.trie.match.call(null,self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p,(i + j)),cljs.core.get.call(null,self__.path,j))){
var G__2022 = (j + (1));
j = G__2022;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie2004.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie2004.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie2004.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count.call(null,self__.path);
}));

(reitit.trie.t_reitit$trie2004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie1998","reitit.trie/t_reitit$trie1998",1325656065,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta2005","meta2005",-1121904975,null)], null);
}));

(reitit.trie.t_reitit$trie2004.cljs$lang$type = true);

(reitit.trie.t_reitit$trie2004.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie2004");

(reitit.trie.t_reitit$trie2004.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie2004");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie2004.
 */
reitit.trie.__GT_t_reitit$trie2004 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie2004(meta1999__$1,___$2,path__$1,matcher__$1,size__$1,meta2005){
return (new reitit.trie.t_reitit$trie2004(meta1999__$1,___$2,path__$1,matcher__$1,size__$1,meta2005));
});

}

return (new reitit.trie.t_reitit$trie2004(self__.meta1999,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie2007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie2007 = (function (meta1999,_,key,end,matcher,meta2008){
this.meta1999 = meta1999;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta2008 = meta2008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie2007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2009,meta2008__$1){
var self__ = this;
var _2009__$1 = this;
return (new reitit.trie.t_reitit$trie2007(self__.meta1999,self__._,self__.key,self__.end,self__.matcher,meta2008__$1));
}));

(reitit.trie.t_reitit$trie2007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2009){
var self__ = this;
var _2009__$1 = this;
return self__.meta2008;
}));

(reitit.trie.t_reitit$trie2007.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie2007.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.call(null,max,j)){
var temp__5802__auto__ = reitit.trie.match.call(null,self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.call(null,path,j);
var pred__2013 = cljs.core._EQ_;
var expr__2014 = c;
if(cljs.core.truth_(pred__2013.call(null,self__.end,expr__2014))){
var temp__5802__auto__ = reitit.trie.match.call(null,self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__2013.call(null,"%",expr__2014))){
var G__2023 = true;
var G__2024 = (j + (1));
percent_QMARK_ = G__2023;
j = G__2024;
continue;
} else {
var G__2025 = percent_QMARK_;
var G__2026 = (j + (1));
percent_QMARK_ = G__2025;
j = G__2026;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie2007.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie2007.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie2007.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie2007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie1998","reitit.trie/t_reitit$trie1998",1325656065,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta2008","meta2008",2127251488,null)], null);
}));

(reitit.trie.t_reitit$trie2007.cljs$lang$type = true);

(reitit.trie.t_reitit$trie2007.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie2007");

(reitit.trie.t_reitit$trie2007.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie2007");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie2007.
 */
reitit.trie.__GT_t_reitit$trie2007 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie2007(meta1999__$1,___$2,key__$1,end__$1,matcher__$1,meta2008){
return (new reitit.trie.t_reitit$trie2007(meta1999__$1,___$2,key__$1,end__$1,matcher__$1,meta2008));
});

}

return (new reitit.trie.t_reitit$trie2007(self__.meta1999,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie2016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie2016 = (function (meta1999,_,key,params,data,match,meta2017){
this.meta1999 = meta1999;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta2017 = meta2017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie2016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2018,meta2017__$1){
var self__ = this;
var _2018__$1 = this;
return (new reitit.trie.t_reitit$trie2016(self__.meta1999,self__._,self__.key,self__.params,self__.data,self__.match,meta2017__$1));
}));

(reitit.trie.t_reitit$trie2016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2018){
var self__ = this;
var _2018__$1 = this;
return self__.meta2017;
}));

(reitit.trie.t_reitit$trie2016.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie2016.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param.call(null,self__.match,self__.key,reitit.trie.decode.call(null,path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie2016.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie2016.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie2016.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie2016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie1998","reitit.trie/t_reitit$trie1998",1325656065,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta2017","meta2017",-1590282598,null)], null);
}));

(reitit.trie.t_reitit$trie2016.cljs$lang$type = true);

(reitit.trie.t_reitit$trie2016.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie2016");

(reitit.trie.t_reitit$trie2016.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie2016");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie2016.
 */
reitit.trie.__GT_t_reitit$trie2016 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie2016(meta1999__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta2017){
return (new reitit.trie.t_reitit$trie2016(meta1999__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta2017));
});

}

return (new reitit.trie.t_reitit$trie2016(self__.meta1999,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec.call(null,(cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count.call(null,matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie2019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie2019 = (function (meta1999,_,matchers,ordered_QMARK_,size,meta2020){
this.meta1999 = meta1999;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta2020 = meta2020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie2019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2021,meta2020__$1){
var self__ = this;
var _2021__$1 = this;
return (new reitit.trie.t_reitit$trie2019(self__.meta1999,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta2020__$1));
}));

(reitit.trie.t_reitit$trie2019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2021){
var self__ = this;
var _2021__$1 = this;
return self__.meta2020;
}));

(reitit.trie.t_reitit$trie2019.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie2019.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__5045__auto__ = reitit.trie.match.call(null,cljs.core.get.call(null,self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__2027 = (j + (1));
j = G__2027;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie2019.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.call(null,reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie2019.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie2019.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie2019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie1998","reitit.trie/t_reitit$trie1998",1325656065,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta2020","meta2020",-1399127468,null)], null);
}));

(reitit.trie.t_reitit$trie2019.cljs$lang$type = true);

(reitit.trie.t_reitit$trie2019.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie2019");

(reitit.trie.t_reitit$trie2019.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie2019");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie2019.
 */
reitit.trie.__GT_t_reitit$trie2019 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie2019(meta1999__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta2020){
return (new reitit.trie.t_reitit$trie2019(meta1999__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta2020));
});

}

return (new reitit.trie.t_reitit$trie2019(self__.meta1999,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view.call(null,matcher);
}));

(reitit.trie.t_reitit$trie1998.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5802__auto__ = reitit.trie.match.call(null,matcher,(0),cljs.core.count.call(null,path),path);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return reitit.trie.__GT_Match.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie1998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1999","meta1999",-492555958,null)], null);
}));

(reitit.trie.t_reitit$trie1998.cljs$lang$type = true);

(reitit.trie.t_reitit$trie1998.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie1998");

(reitit.trie.t_reitit$trie1998.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reitit.trie/t_reitit$trie1998");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie1998.
 */
reitit.trie.__GT_t_reitit$trie1998 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie1998(meta1999){
return (new reitit.trie.t_reitit$trie1998(meta1999));
});

}

return (new reitit.trie.t_reitit$trie1998(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap.call(null,keys,cljs.core.repeat.call(null,null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__2029 = arguments.length;
switch (G__2029) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.call(null,null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.call(null,(function (acc,p__2030){
var vec__2031 = p__2030;
var p = cljs.core.nth.call(null,vec__2031,(0),null);
var d = cljs.core.nth.call(null,vec__2031,(1),null);
return reitit.trie.insert.call(null,acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.call(null,node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__2034){
var map__2035 = p__2034;
var map__2035__$1 = cljs.core.__destructure_map.call(null,map__2035);
var opts = map__2035__$1;
var parameters = cljs.core.get.call(null,map__2035__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path.call(null,path,opts);
var params = parameters.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,parts)));
return reitit.trie._insert.call(null,(function (){var or__5045__auto__ = node;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path.call(null,path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler.call(null);
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__2038 = arguments.length;
switch (G__2038) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.call(null,options,reitit.trie.compiler.call(null));
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.call(null,options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__2039,compiler,cp){
var map__2040 = p__2039;
var map__2040__$1 = cljs.core.__destructure_map.call(null,map__2040);
var data = cljs.core.get.call(null,map__2040__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.call(null,map__2040__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.call(null,map__2040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.call(null,map__2040__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.call(null,map__2040__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__2041){
var map__2042 = p__2041;
var map__2042__$1 = cljs.core.__destructure_map.call(null,map__2042);
var children__$1 = cljs.core.get.call(null,map__2042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5045__auto__ = cljs.core.keys.call(null,children__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,(function (){var G__2043 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.call(null,G__2043,reitit.trie.data_matcher.call(null,compiler,params,data));
} else {
return G__2043;
}
})(),(function (){var iter__5523__auto__ = (function reitit$trie$iter__2044(s__2045){
return (new cljs.core.LazySeq(null,(function (){
var s__2045__$1 = s__2045;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2045__$1);
if(temp__5804__auto__){
var s__2045__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2045__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__2045__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__2047 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__2046 = (0);
while(true){
if((i__2046 < size__5522__auto__)){
var vec__2048 = cljs.core._nth.call(null,c__5521__auto__,i__2046);
var p = cljs.core.nth.call(null,vec__2048,(0),null);
var c = cljs.core.nth.call(null,vec__2048,(1),null);
cljs.core.chunk_append.call(null,b__2047,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))));

var G__2075 = (i__2046 + (1));
i__2046 = G__2075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2047),reitit$trie$iter__2044.call(null,cljs.core.chunk_rest.call(null,s__2045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2047),null);
}
} else {
var vec__2051 = cljs.core.first.call(null,s__2045__$2);
var p = cljs.core.nth.call(null,vec__2051,(0),null);
var c = cljs.core.nth.call(null,vec__2051,(1),null);
return cljs.core.cons.call(null,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))),reitit$trie$iter__2044.call(null,cljs.core.rest.call(null,s__2045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,children);
})()),(function (){var iter__5523__auto__ = (function reitit$trie$iter__2054(s__2055){
return (new cljs.core.LazySeq(null,(function (){
var s__2055__$1 = s__2055;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2055__$1);
if(temp__5804__auto__){
var s__2055__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2055__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__2055__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__2057 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__2056 = (0);
while(true){
if((i__2056 < size__5522__auto__)){
var vec__2058 = cljs.core._nth.call(null,c__5521__auto__,i__2056);
var p = cljs.core.nth.call(null,vec__2058,(0),null);
var c = cljs.core.nth.call(null,vec__2058,(1),null);
cljs.core.chunk_append.call(null,b__2057,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})());

var G__2076 = (i__2056 + (1));
i__2056 = G__2076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2057),reitit$trie$iter__2054.call(null,cljs.core.chunk_rest.call(null,s__2055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2057),null);
}
} else {
var vec__2061 = cljs.core.first.call(null,s__2055__$2);
var p = cljs.core.nth.call(null,vec__2061,(0),null);
var c = cljs.core.nth.call(null,vec__2061,(1),null);
return cljs.core.cons.call(null,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})(),reitit$trie$iter__2054.call(null,cljs.core.rest.call(null,s__2055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,wilds);
})()),(function (){var iter__5523__auto__ = (function reitit$trie$iter__2064(s__2065){
return (new cljs.core.LazySeq(null,(function (){
var s__2065__$1 = s__2065;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2065__$1);
if(temp__5804__auto__){
var s__2065__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2065__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__2065__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__2067 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__2066 = (0);
while(true){
if((i__2066 < size__5522__auto__)){
var vec__2068 = cljs.core._nth.call(null,c__5521__auto__,i__2066);
var p = cljs.core.nth.call(null,vec__2068,(0),null);
var c = cljs.core.nth.call(null,vec__2068,(1),null);
cljs.core.chunk_append.call(null,b__2067,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__2077 = (i__2066 + (1));
i__2066 = G__2077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2067),reitit$trie$iter__2064.call(null,cljs.core.chunk_rest.call(null,s__2065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2067),null);
}
} else {
var vec__2071 = cljs.core.first.call(null,s__2065__$2);
var p = cljs.core.nth.call(null,vec__2071,(0),null);
var c = cljs.core.nth.call(null,vec__2071,(1),null);
return cljs.core.cons.call(null,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__2064.call(null,cljs.core.rest.call(null,s__2065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,catch_all);
})());
if((cljs.core.count.call(null,matchers) > (1))){
return reitit.trie.linear_matcher.call(null,compiler,matchers,false);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matchers),(1))){
return cljs.core.first.call(null,matchers);
} else {
return reitit.trie.data_matcher.call(null,compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__2079 = arguments.length;
switch (G__2079) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty.call(null,compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__2082 = arguments.length;
switch (G__2082) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher.call(null,compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=trie.js.map
