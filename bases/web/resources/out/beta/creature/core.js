// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.creature.core');
goog.require('cljs.core');
beta.creature.core.mock_db = cljs.core.list(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(74766790688878),new cljs.core.Keyword("creature","id","creature/id",1371426325),new cljs.core.UUID("547664ba-b88a-4a82-8f2c-92b1b69a42ce", -715236940),new cljs.core.Keyword("creature","name","creature/name",-110764950),"aleksander",new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(83562883711083),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("race","elf","race/elf",1764040817)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(83562883711084),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("race","human","race/human",-830670885)], null)], null),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Physical"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Spiritual"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Mental"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Social"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(74766790688879),new cljs.core.Keyword("creature","id","creature/id",1371426325),new cljs.core.UUID("cfa2f993-7743-456f-b34a-537922bbde7f", 948231189),new cljs.core.Keyword("creature","name","creature/name",-110764950),"eilonwey",new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(83562883711083),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("race","elf","race/elf",1764040817)], null)], null),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Physical"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Spiritual"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Mental"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Social"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(74766790688880),new cljs.core.Keyword("creature","id","creature/id",1371426325),new cljs.core.UUID("045e28bb-27be-46ec-bf7c-a34ed1ca7a87", 1067079045),new cljs.core.Keyword("creature","name","creature/name",-110764950),"durflag",new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(83562883711085),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("race","dwarf","race/dwarf",-1643443259)], null)], null),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Physical"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Spiritual"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Mental"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Social"], null)], null)], null));
beta.creature.core.creature_component = (function beta$creature$core$creature_component(creature_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(creature_data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword("creature","name","creature/name",-110764950).cljs$core$IFn$_invoke$arity$1(creature_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Races: ",cljs.core.interpose.call(null,", ",cljs.core.map.call(null,(function (p1__950_SHARP_){
return new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__950_SHARP_);
}),new cljs.core.Keyword("creature","race","creature/race",-622475031).cljs$core$IFn$_invoke$arity$1(creature_data)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Domains: ",cljs.core.interpose.call(null,", ",cljs.core.map.call(null,(function (p1__951_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__951_SHARP_);
}),new cljs.core.Keyword("creature","domains","creature/domains",-996719930).cljs$core$IFn$_invoke$arity$1(creature_data)))], null)], null);
});
beta.creature.core.all_creatures = (function beta$creature$core$all_creatures(creature_list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null)], null),"Creatures"], null),cljs.core.map.call(null,beta.creature.core.creature_component,creature_list)], null);
});

//# sourceMappingURL=core.js.map
