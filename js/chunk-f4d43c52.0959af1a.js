(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4d43c52"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"2d5c":function(t,e,r){},"429c":function(t,e,r){"use strict";r("80db")},6237:function(t,e,r){"use strict";r("2d5c")},6582:function(t,e,r){t.exports=r.p+"img/edit.cbfbcfdb.svg"},"80db":function(t,e,r){},"927c":function(t,e,r){t.exports=r.p+"img/cat.debab63e.jpg"},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=E(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,j=w&&w(w(P([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=g.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return y.prototype=O.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),u(O,c,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a3fd:function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("7a23"),o=r("6582"),i=r.n(o),a=r("d739"),c=r.n(a),u=r("927c"),s=r.n(u),f=Object(n["B"])("data-v-7bff55b0");Object(n["r"])("data-v-7bff55b0");var l=Object(n["f"])("h2",null,"Lista de videos",-1),h={class:"contenedor-main"},d=Object(n["f"])("div",{class:"icons"},[Object(n["f"])("img",{src:i.a,alt:"#"}),Object(n["f"])("img",{src:c.a,alt:"#"})],-1),p=Object(n["f"])("div",{class:"img"},[Object(n["f"])("img",{src:s.a,alt:""})],-1),v={class:"info"},m=Object(n["f"])("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, possimus! Consequuntur eum animi rerum delectus laborum a impedit. Nulla soluta eos maxime ea placeat quibusdam exercitationem ducimus corrupti doloribus in.",-1),y=Object(n["e"])(" Ver detalles ");Object(n["p"])();var g=f((function(t,e,r,o,i,a){var c=Object(n["v"])("Header"),u=Object(n["v"])("Main"),s=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])(c),Object(n["f"])(u),Object(n["f"])("main",null,[l,Object(n["f"])("div",h,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(i.users,(function(t,e){return Object(n["o"])(),Object(n["d"])("div",{key:e,class:"tarjeta"},[d,p,Object(n["f"])("div",v,[Object(n["f"])("h1",null,Object(n["x"])(t.name),1),Object(n["f"])("p",null,Object(n["x"])(t.email),1),m,Object(n["f"])("button",null,[Object(n["f"])(s,{class:"boton",to:"/videos/".concat(t.id)},{default:f((function(){return[y]})),_:2},1032,["to"])])])])})),128))])])])})),b=r("1da1"),w=(r("96cf"),r("d3b7"),r("0418")),j=Object(n["B"])("data-v-21e73497"),O=j((function(t,e,r,n,o,i){return null})),x={data:function(){return{users:[]}},methods:{getUsers:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.users=n,console.log(n);case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.getUsers()}};r("429c");x.render=O,x.__scopeId="data-v-21e73497";var L=x,E={name:"Videos",components:{Videos:w["default"],Header:w["default"],Main:L},data:function(){return{users:[]}},methods:{getUsers:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.users=n,console.log(n);case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.getUsers()}};r("6237");E.render=g,E.__scopeId="data-v-7bff55b0";e["default"]=E},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},d739:function(t,e,r){t.exports=r.p+"img/delete.47f212c8.svg"}}]);
//# sourceMappingURL=chunk-f4d43c52.0959af1a.js.map