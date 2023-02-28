// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__3650){
var vec__3651 = p__3650;
var ___$1 = cljs.core.nth.call(null,vec__3651,(0),null);
var map__3654 = cljs.core.nth.call(null,vec__3651,(1),null);
var map__3654__$1 = cljs.core.__destructure_map.call(null,map__3654);
var opts = map__3654__$1;
var breakpoints = cljs.core.get.call(null,map__3654__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.call(null,map__3654__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814),(function (coeffect){
var screen_width = (function (){var or__5045__auto__ = (function (){var G__3655 = window;
if((G__3655 == null)){
return null;
} else {
return G__3655.innerWidth;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__3656 = document;
var G__3656__$1 = (((G__3656 == null))?null:G__3656.documentElement);
if((G__3656__$1 == null)){
return null;
} else {
return G__3656__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var G__3657 = document;
var G__3657__$1 = (((G__3657 == null))?null:G__3657.body);
if((G__3657__$1 == null)){
return null;
} else {
return G__3657__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__5045__auto__ = (function (){var G__3658 = window;
if((G__3658 == null)){
return null;
} else {
return G__3658.innerHeight;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__3659 = document;
var G__3659__$1 = (((G__3659 == null))?null:G__3659.documentElement);
if((G__3659__$1 == null)){
return null;
} else {
return G__3659__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var G__3660 = document;
var G__3660__$1 = (((G__3660 == null))?null:G__3660.body);
if((G__3660__$1 == null)){
return null;
} else {
return G__3660__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.call(null,coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height);
}));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__3661,_){
var map__3662 = p__3661;
var map__3662__$1 = cljs.core.__destructure_map.call(null,map__3662);
var db = cljs.core.get.call(null,map__3662__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.call(null,map__3662__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.call(null,map__3662__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__3663){
var vec__3664 = p__3663;
var ___$1 = cljs.core.nth.call(null,vec__3664,(0),null);
var debounce_ms = cljs.core.nth.call(null,vec__3664,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.call(null,(function (prev_breakpoint,p__3667){
var vec__3668 = p__3667;
var screen_key = cljs.core.nth.call(null,vec__3668,(0),null);
var breakpoint = cljs.core.nth.call(null,vec__3668,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced.call(null,screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.call(null,(2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__3671,_){
var vec__3672 = p__3671;
var screen_width = cljs.core.nth.call(null,vec__3672,(0),null);
var screen_height = cljs.core.nth.call(null,vec__3672,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),breaking_point.core.__GT_get_screen.call(null,breakpoints));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null),breaking_point.core.get_orientation);

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
}));

var screen_keys = (function (){var G__3675 = breakpoints;
var G__3675__$1 = (((G__3675 == null))?null:cljs.core.map_indexed.call(null,cljs.core.vector,G__3675));
var G__3675__$2 = (((G__3675__$1 == null))?null:cljs.core.filter.call(null,(function (p__3676){
var vec__3677 = p__3676;
var i = cljs.core.nth.call(null,vec__3677,(0),null);
var k = cljs.core.nth.call(null,vec__3677,(1),null);
return cljs.core.even_QMARK_.call(null,i);
}),G__3675__$1));
if((G__3675__$2 == null)){
return null;
} else {
return cljs.core.mapv.call(null,cljs.core.second,G__3675__$2);
}
})();
var seq__3680 = cljs.core.seq.call(null,screen_keys);
var chunk__3681 = null;
var count__3682 = (0);
var i__3683 = (0);
while(true){
if((i__3683 < count__3682)){
var screen_key = cljs.core._nth.call(null,chunk__3681,i__3683);
re_frame.core.reg_sub.call(null,cljs.core.keyword.call(null,"breaking-point.core",[cljs.core.name.call(null,screen_key),"?"].join('')),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__3680,chunk__3681,count__3682,i__3683,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.call(null,screen,screen_key);
});})(seq__3680,chunk__3681,count__3682,i__3683,screen_key,screen_keys))
);


var G__3684 = seq__3680;
var G__3685 = chunk__3681;
var G__3686 = count__3682;
var G__3687 = (i__3683 + (1));
seq__3680 = G__3684;
chunk__3681 = G__3685;
count__3682 = G__3686;
i__3683 = G__3687;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__3680);
if(temp__5804__auto__){
var seq__3680__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3680__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3680__$1);
var G__3688 = cljs.core.chunk_rest.call(null,seq__3680__$1);
var G__3689 = c__5568__auto__;
var G__3690 = cljs.core.count.call(null,c__5568__auto__);
var G__3691 = (0);
seq__3680 = G__3688;
chunk__3681 = G__3689;
count__3682 = G__3690;
i__3683 = G__3691;
continue;
} else {
var screen_key = cljs.core.first.call(null,seq__3680__$1);
re_frame.core.reg_sub.call(null,cljs.core.keyword.call(null,"breaking-point.core",[cljs.core.name.call(null,screen_key),"?"].join('')),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__3680,chunk__3681,count__3682,i__3683,screen_key,seq__3680__$1,temp__5804__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.call(null,screen,screen_key);
});})(seq__3680,chunk__3681,count__3682,i__3683,screen_key,seq__3680__$1,temp__5804__auto__,screen_keys))
);


var G__3692 = cljs.core.next.call(null,seq__3680__$1);
var G__3693 = null;
var G__3694 = (0);
var G__3695 = (0);
seq__3680 = G__3692;
chunk__3681 = G__3693;
count__3682 = G__3694;
i__3683 = G__3695;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__3696){
var map__3697 = p__3696;
var map__3697__$1 = cljs.core.__destructure_map.call(null,map__3697);
var opts = map__3697__$1;
var breakpoints = cljs.core.get.call(null,map__3697__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.call(null,map__3697__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs.call(null,breakpoints);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));
}
}),true);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints);

//# sourceMappingURL=core.js.map
