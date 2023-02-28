// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1904){
var map__1905 = p__1904;
var map__1905__$1 = cljs.core.__destructure_map.call(null,map__1905);
var m = map__1905__$1;
var n = cljs.core.get.call(null,map__1905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1906_1934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1907_1935 = null;
var count__1908_1936 = (0);
var i__1909_1937 = (0);
while(true){
if((i__1909_1937 < count__1908_1936)){
var f_1938 = cljs.core._nth.call(null,chunk__1907_1935,i__1909_1937);
cljs.core.println.call(null,"  ",f_1938);


var G__1939 = seq__1906_1934;
var G__1940 = chunk__1907_1935;
var G__1941 = count__1908_1936;
var G__1942 = (i__1909_1937 + (1));
seq__1906_1934 = G__1939;
chunk__1907_1935 = G__1940;
count__1908_1936 = G__1941;
i__1909_1937 = G__1942;
continue;
} else {
var temp__5804__auto___1943 = cljs.core.seq.call(null,seq__1906_1934);
if(temp__5804__auto___1943){
var seq__1906_1944__$1 = temp__5804__auto___1943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1906_1944__$1)){
var c__5568__auto___1945 = cljs.core.chunk_first.call(null,seq__1906_1944__$1);
var G__1946 = cljs.core.chunk_rest.call(null,seq__1906_1944__$1);
var G__1947 = c__5568__auto___1945;
var G__1948 = cljs.core.count.call(null,c__5568__auto___1945);
var G__1949 = (0);
seq__1906_1934 = G__1946;
chunk__1907_1935 = G__1947;
count__1908_1936 = G__1948;
i__1909_1937 = G__1949;
continue;
} else {
var f_1950 = cljs.core.first.call(null,seq__1906_1944__$1);
cljs.core.println.call(null,"  ",f_1950);


var G__1951 = cljs.core.next.call(null,seq__1906_1944__$1);
var G__1952 = null;
var G__1953 = (0);
var G__1954 = (0);
seq__1906_1934 = G__1951;
chunk__1907_1935 = G__1952;
count__1908_1936 = G__1953;
i__1909_1937 = G__1954;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1955 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1955);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1955)))?cljs.core.second.call(null,arglists_1955):arglists_1955));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1910_1956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1911_1957 = null;
var count__1912_1958 = (0);
var i__1913_1959 = (0);
while(true){
if((i__1913_1959 < count__1912_1958)){
var vec__1922_1960 = cljs.core._nth.call(null,chunk__1911_1957,i__1913_1959);
var name_1961 = cljs.core.nth.call(null,vec__1922_1960,(0),null);
var map__1925_1962 = cljs.core.nth.call(null,vec__1922_1960,(1),null);
var map__1925_1963__$1 = cljs.core.__destructure_map.call(null,map__1925_1962);
var doc_1964 = cljs.core.get.call(null,map__1925_1963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1965 = cljs.core.get.call(null,map__1925_1963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1961);

cljs.core.println.call(null," ",arglists_1965);

if(cljs.core.truth_(doc_1964)){
cljs.core.println.call(null," ",doc_1964);
} else {
}


var G__1966 = seq__1910_1956;
var G__1967 = chunk__1911_1957;
var G__1968 = count__1912_1958;
var G__1969 = (i__1913_1959 + (1));
seq__1910_1956 = G__1966;
chunk__1911_1957 = G__1967;
count__1912_1958 = G__1968;
i__1913_1959 = G__1969;
continue;
} else {
var temp__5804__auto___1970 = cljs.core.seq.call(null,seq__1910_1956);
if(temp__5804__auto___1970){
var seq__1910_1971__$1 = temp__5804__auto___1970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1910_1971__$1)){
var c__5568__auto___1972 = cljs.core.chunk_first.call(null,seq__1910_1971__$1);
var G__1973 = cljs.core.chunk_rest.call(null,seq__1910_1971__$1);
var G__1974 = c__5568__auto___1972;
var G__1975 = cljs.core.count.call(null,c__5568__auto___1972);
var G__1976 = (0);
seq__1910_1956 = G__1973;
chunk__1911_1957 = G__1974;
count__1912_1958 = G__1975;
i__1913_1959 = G__1976;
continue;
} else {
var vec__1926_1977 = cljs.core.first.call(null,seq__1910_1971__$1);
var name_1978 = cljs.core.nth.call(null,vec__1926_1977,(0),null);
var map__1929_1979 = cljs.core.nth.call(null,vec__1926_1977,(1),null);
var map__1929_1980__$1 = cljs.core.__destructure_map.call(null,map__1929_1979);
var doc_1981 = cljs.core.get.call(null,map__1929_1980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1982 = cljs.core.get.call(null,map__1929_1980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1978);

cljs.core.println.call(null," ",arglists_1982);

if(cljs.core.truth_(doc_1981)){
cljs.core.println.call(null," ",doc_1981);
} else {
}


var G__1983 = cljs.core.next.call(null,seq__1910_1971__$1);
var G__1984 = null;
var G__1985 = (0);
var G__1986 = (0);
seq__1910_1956 = G__1983;
chunk__1911_1957 = G__1984;
count__1912_1958 = G__1985;
i__1913_1959 = G__1986;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__1930 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1931 = null;
var count__1932 = (0);
var i__1933 = (0);
while(true){
if((i__1933 < count__1932)){
var role = cljs.core._nth.call(null,chunk__1931,i__1933);
var temp__5804__auto___1987__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1987__$1)){
var spec_1988 = temp__5804__auto___1987__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1988));
} else {
}


var G__1989 = seq__1930;
var G__1990 = chunk__1931;
var G__1991 = count__1932;
var G__1992 = (i__1933 + (1));
seq__1930 = G__1989;
chunk__1931 = G__1990;
count__1932 = G__1991;
i__1933 = G__1992;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__1930);
if(temp__5804__auto____$1){
var seq__1930__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1930__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__1930__$1);
var G__1993 = cljs.core.chunk_rest.call(null,seq__1930__$1);
var G__1994 = c__5568__auto__;
var G__1995 = cljs.core.count.call(null,c__5568__auto__);
var G__1996 = (0);
seq__1930 = G__1993;
chunk__1931 = G__1994;
count__1932 = G__1995;
i__1933 = G__1996;
continue;
} else {
var role = cljs.core.first.call(null,seq__1930__$1);
var temp__5804__auto___1997__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1997__$2)){
var spec_1998 = temp__5804__auto___1997__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1998));
} else {
}


var G__1999 = cljs.core.next.call(null,seq__1930__$1);
var G__2000 = null;
var G__2001 = (0);
var G__2002 = (0);
seq__1930 = G__1999;
chunk__1931 = G__2000;
count__1932 = G__2001;
i__1933 = G__2002;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__2003 = cljs.core.conj.call(null,via,t);
var G__2004 = cljs.core.ex_cause.call(null,t);
via = G__2003;
t = G__2004;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__2007 = datafied_throwable;
var map__2007__$1 = cljs.core.__destructure_map.call(null,map__2007);
var via = cljs.core.get.call(null,map__2007__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__2007__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__2007__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__2008 = cljs.core.last.call(null,via);
var map__2008__$1 = cljs.core.__destructure_map.call(null,map__2008);
var type = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__2009 = data;
var map__2009__$1 = cljs.core.__destructure_map.call(null,map__2009);
var problems = cljs.core.get.call(null,map__2009__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__2009__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__2009__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__2010 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__2010__$1 = cljs.core.__destructure_map.call(null,map__2010);
var top_data = map__2010__$1;
var source = cljs.core.get.call(null,map__2010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__2011 = phase;
var G__2011__$1 = (((G__2011 instanceof cljs.core.Keyword))?G__2011.fqn:null);
switch (G__2011__$1) {
case "read-source":
var map__2012 = data;
var map__2012__$1 = cljs.core.__destructure_map.call(null,map__2012);
var line = cljs.core.get.call(null,map__2012__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2012__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__2013 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__2013__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2013,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2013);
var G__2013__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2013__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2013__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2013__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__2014 = top_data;
var G__2014__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2014,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2014);
var G__2014__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2014__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2014__$1);
var G__2014__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2014__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2014__$2);
var G__2014__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2014__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2014__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2014__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2014__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__2015 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2015,(0),null);
var method = cljs.core.nth.call(null,vec__2015,(1),null);
var file = cljs.core.nth.call(null,vec__2015,(2),null);
var line = cljs.core.nth.call(null,vec__2015,(3),null);
var G__2018 = top_data;
var G__2018__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__2018,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__2018);
var G__2018__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__2018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__2018__$1);
var G__2018__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__2018__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__2018__$2);
var G__2018__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2018__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2018__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2018__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2018__$4;
}

break;
case "execution":
var vec__2019 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2019,(0),null);
var method = cljs.core.nth.call(null,vec__2019,(1),null);
var file = cljs.core.nth.call(null,vec__2019,(2),null);
var line = cljs.core.nth.call(null,vec__2019,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__2006_SHARP_){
var or__5045__auto__ = (p1__2006_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__2006_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__2022 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__2022__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__2022,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__2022);
var G__2022__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2022__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2022__$1);
var G__2022__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__2022__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__2022__$2);
var G__2022__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__2022__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__2022__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2022__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2022__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2011__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__2026){
var map__2027 = p__2026;
var map__2027__$1 = cljs.core.__destructure_map.call(null,map__2027);
var triage_data = map__2027__$1;
var phase = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__2027__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__2028 = phase;
var G__2028__$1 = (((G__2028 instanceof cljs.core.Keyword))?G__2028.fqn:null);
switch (G__2028__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2029_2038 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2030_2039 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2031_2040 = true;
var _STAR_print_fn_STAR__temp_val__2032_2041 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2031_2040);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2032_2041);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2024_SHARP_){
return cljs.core.dissoc.call(null,p1__2024_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2030_2039);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2029_2038);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2033_2042 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2034_2043 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2035_2044 = true;
var _STAR_print_fn_STAR__temp_val__2036_2045 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2035_2044);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2036_2045);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2025_SHARP_){
return cljs.core.dissoc.call(null,p1__2025_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2034_2043);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2033_2042);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2028__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
