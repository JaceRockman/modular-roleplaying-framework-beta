// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.state');
goog.require('cljs.core');
goog.require('re_frame.interop');
kee_frame.state.controllers = cljs.core.atom.call(null,re_frame.interop.empty_queue);
kee_frame.state.router = cljs.core.atom.call(null,null);
kee_frame.state.navigator = cljs.core.atom.call(null,null);
kee_frame.state.breakpoints_initialized_QMARK_ = cljs.core.atom.call(null,false);
kee_frame.state.reset_state_BANG_ = (function kee_frame$state$reset_state_BANG_(){
cljs.core.reset_BANG_.call(null,kee_frame.state.controllers,re_frame.interop.empty_queue);

cljs.core.reset_BANG_.call(null,kee_frame.state.router,null);

return cljs.core.reset_BANG_.call(null,kee_frame.state.navigator,null);
});

//# sourceMappingURL=state.js.map
