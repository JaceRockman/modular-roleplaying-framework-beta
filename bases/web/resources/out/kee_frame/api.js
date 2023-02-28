// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('kee_frame.api');
goog.require('cljs.core');

/**
 * @interface
 */
kee_frame.api.Navigator = function(){};

var kee_frame$api$Navigator$dispatch_current_BANG_$dyn_3141 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (kee_frame.api.dispatch_current_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (kee_frame.api.dispatch_current_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Navigator.dispatch-current!",_);
}
}
});
kee_frame.api.dispatch_current_BANG_ = (function kee_frame$api$dispatch_current_BANG_(_){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1 == null)))))){
return _.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1(_);
} else {
return kee_frame$api$Navigator$dispatch_current_BANG_$dyn_3141.call(null,_);
}
});

var kee_frame$api$Navigator$navigate_BANG_$dyn_3142 = (function (_,url){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (kee_frame.api.navigate_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,url);
} else {
var m__5392__auto__ = (kee_frame.api.navigate_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,url);
} else {
throw cljs.core.missing_protocol.call(null,"Navigator.navigate!",_);
}
}
});
kee_frame.api.navigate_BANG_ = (function kee_frame$api$navigate_BANG_(_,url){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Navigator$navigate_BANG_$arity$2 == null)))))){
return _.kee_frame$api$Navigator$navigate_BANG_$arity$2(_,url);
} else {
return kee_frame$api$Navigator$navigate_BANG_$dyn_3142.call(null,_,url);
}
});


/**
 * @interface
 */
kee_frame.api.Router = function(){};

var kee_frame$api$Router$data__GT_url$dyn_3143 = (function (_,data){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (kee_frame.api.data__GT_url[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,data);
} else {
var m__5392__auto__ = (kee_frame.api.data__GT_url["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,data);
} else {
throw cljs.core.missing_protocol.call(null,"Router.data->url",_);
}
}
});
kee_frame.api.data__GT_url = (function kee_frame$api$data__GT_url(_,data){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Router$data__GT_url$arity$2 == null)))))){
return _.kee_frame$api$Router$data__GT_url$arity$2(_,data);
} else {
return kee_frame$api$Router$data__GT_url$dyn_3143.call(null,_,data);
}
});

var kee_frame$api$Router$url__GT_data$dyn_3144 = (function (_,url){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (kee_frame.api.url__GT_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,url);
} else {
var m__5392__auto__ = (kee_frame.api.url__GT_data["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,url);
} else {
throw cljs.core.missing_protocol.call(null,"Router.url->data",_);
}
}
});
kee_frame.api.url__GT_data = (function kee_frame$api$url__GT_data(_,url){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Router$url__GT_data$arity$2 == null)))))){
return _.kee_frame$api$Router$url__GT_data$arity$2(_,url);
} else {
return kee_frame$api$Router$url__GT_data$dyn_3144.call(null,_,url);
}
});


//# sourceMappingURL=api.js.map
