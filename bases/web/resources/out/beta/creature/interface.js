// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.creature.interface$');
goog.require('cljs.core');
goog.require('beta.creature.core');
beta.creature.interface$.creature_display = (function beta$creature$interface$creature_display(creature_id){
return beta.creature.core.creature_component.call(null,cljs.core.filter.call(null,(function (p1__954_SHARP_){
return cljs.core._EQ_.call(null,creature_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__954_SHARP_));
}),beta.creature.core.mock_db));
});
beta.creature.interface$.creature_list = (function beta$creature$interface$creature_list(){
return beta.creature.core.all_creatures.call(null,beta.creature.core.mock_db);
});

//# sourceMappingURL=interface.js.map
