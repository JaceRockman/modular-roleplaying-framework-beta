// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('beta.creature.interface$');
goog.require('cljs.core');
goog.require('beta.creature.core');
beta.creature.interface$.creature_display = (function beta$creature$interface$creature_display(creature_data){
return beta.creature.core.creature_component.call(null,creature_data);
});
beta.creature.interface$.creature_list = (function beta$creature$interface$creature_list(){
return beta.creature.core.all_creatures.call(null,beta.creature.core.mock_db);
});

//# sourceMappingURL=interface.js.map
