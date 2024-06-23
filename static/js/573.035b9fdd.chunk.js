/*! For license information please see 573.035b9fdd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvalarva=self.webpackChunkmarvalarva||[]).push([[573],{8573:function(t,e,i){function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}i.r(e),i.d(e,{GiscusWidget:function(){return Vt}});var r,s,o,a,l,u,h,c=i(1413),d=i(7326),v=i(1752),f=i(1120),p=i(3433),y=i(9439),g=i(4165),_=i(5861),$=i(136),m=i(7277),A=i(8737),S=i(7762),k=i(5671),E=i(3144),b=globalThis,Z=b.ShadowRoot&&(void 0===b.ShadyCSS||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,w=Symbol(),C=new WeakMap,U=function(){function t(e,i,n){if((0,k.Z)(this,t),this._$cssResult$=!0,n!==w)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}return(0,E.Z)(t,[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(Z&&void 0===t){var i=void 0!==e&&1===e.length;i&&(t=C.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&C.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}]),t}(),P=Z?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,i="",n=(0,S.Z)(t.cssRules);try{for(n.s();!(e=n.n()).done;){i+=e.value.cssText}}catch(r){n.e(r)}finally{n.f()}return function(t){return new U("string"==typeof t?t:t+"",void 0,w)}(i)}(t):t},O=Object.is,M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,R=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols,I=Object.getPrototypeOf,H=globalThis,x=H.trustedTypes,L=x?x.emptyScript:"",j=H.reactiveElementPolyfillSupport,z=function(t,e){return t},D={toAttribute:function(t,e){switch(e){case Boolean:t=t?L:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(n){i=null}}return i}},Y=function(t,e){return!O(t,e)},G={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y};null!==(r=Symbol.metadata)&&void 0!==r||(Symbol.metadata=Symbol("metadata")),null!==(s=H.litPropertyMetadata)&&void 0!==s||(H.litPropertyMetadata=new WeakMap);var B=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.call(this))._$Ep=void 0,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Em=null,t._$Ev(),t}return(0,E.Z)(i,[{key:"_$Ev",value:function(){var t,e=this;this._$ES=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(i=t.hostConnected)||i.call(t))}},{key:"removeController",value:function(t){var e;null==(e=this._$EO)||e.delete(t)}},{key:"_$E_",value:function(){var t,e=new Map,i=this.constructor.elementProperties,n=(0,S.Z)(i.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value;this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r])}}catch(s){n.e(s)}finally{n.f()}e.size>0&&(this._$Ep=e)}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){if(Z)t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet}));else{var i,n=(0,S.Z)(e);try{for(n.s();!(i=n.n()).done;){var r=i.value,s=document.createElement("style"),o=b.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=r.cssText,t.appendChild(s)}}catch(a){n.e(a)}finally{n.f()}}}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((function(t){var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null==(t=this._$EO)||t.forEach((function(t){var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,i){this._$AK(t,i)}},{key:"_$EC",value:function(t,e){var i,n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){var s=(void 0!==(null==(i=n.converter)?void 0:i.toAttribute)?n.converter:D).toAttribute(e,n.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}},{key:"_$AK",value:function(t,e){var i,n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){var s=n.getPropertyOptions(r),o="function"==typeof s.converter?{fromAttribute:s.converter}:void 0!==(null==(i=s.converter)?void 0:i.fromAttribute)?s.converter:D;this._$Em=r,this[r]=o.fromAttribute(e,s.type),this._$Em=null}}},{key:"requestUpdate",value:function(t,e,i){if(void 0!==t){var n,r;if(null!==(n=i)&&void 0!==n||(i=this.constructor.getPropertyOptions(t)),!(null!==(r=i.hasChanged)&&void 0!==r?r:Y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(t,e,i){var n;this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(null!==(n=this._$Ej)&&void 0!==n?n:this._$Ej=new Set).add(t)}},{key:"_$ET",value:function(){var t=(0,_.Z)((0,g.Z)().mark((function t(){var e;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$ES;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var t;if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var i,n=(0,S.Z)(this._$Ep);try{for(n.s();!(i=n.n()).done;){var r=(0,y.Z)(i.value,2),s=r[0],o=r[1];this[s]=o}}catch(p){n.e(p)}finally{n.f()}this._$Ep=void 0}var a=this.constructor.elementProperties;if(a.size>0){var l,u=(0,S.Z)(a);try{for(u.s();!(l=u.n()).done;){var h=(0,y.Z)(l.value,2),c=h[0],d=h[1];!0!==d.wrapped||this._$AL.has(c)||void 0===this[c]||this.P(c,this[c],d)}}catch(p){u.e(p)}finally{u.f()}}}var v=!1,f=this._$AL;try{(v=this.shouldUpdate(f))?(this.willUpdate(f),null==(t=this._$EO)||t.forEach((function(t){var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(f)):this._$EU()}catch(a){throw v=!1,this._$EU(),a}v&&this._$AE(f)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null==(e=this._$EO)||e.forEach((function(t){var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(t){return e._$EC(t,e[t])}))),this._$EU()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&(0,p.Z)(this._$Eh.keys())}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){var i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&M(this.prototype,t,n)}}},{key:"getPropertyDescriptor",value:function(t,e,i){var n,r=null!==(n=T(this.prototype,t))&&void 0!==n?n:{get:function(){return this[e]},set:function(t){this[e]=t}},s=r.get,o=r.set;return{get:function(){return null==s?void 0:s.call(this)},set:function(e){var n=null==s?void 0:s.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:G}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(z("elementProperties"))){var t=I(this);t.finalize(),void 0!==t.l&&(this.l=(0,p.Z)(t.l)),this.elementProperties=new Map(t.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){var t,e=this.properties,i=[].concat((0,p.Z)(R(e)),(0,p.Z)(N(e))),n=(0,S.Z)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.createProperty(r,e[r])}}catch(m){n.e(m)}finally{n.f()}}var s=this[Symbol.metadata];if(null!==s){var o=litPropertyMetadata.get(s);if(void 0!==o){var a,l=(0,S.Z)(o);try{for(l.s();!(a=l.n()).done;){var u=(0,y.Z)(a.value,2),h=u[0],c=u[1];this.elementProperties.set(h,c)}}catch(m){l.e(m)}finally{l.f()}}}this._$Eh=new Map;var d,v=(0,S.Z)(this.elementProperties);try{for(v.s();!(d=v.n()).done;){var f=(0,y.Z)(d.value,2),g=f[0],_=f[1],$=this._$Eu(g,_);void 0!==$&&this._$Eh.set($,g)}}catch(m){v.e(m)}finally{v.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var i,n=new Set(t.flat(1/0).reverse()),r=(0,S.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;e.unshift(P(s))}}catch(o){r.e(o)}finally{r.f()}}else void 0!==t&&e.push(P(t));return e}},{key:"_$Eu",value:function(t,e){var i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}}]),i}((0,A.Z)(HTMLElement));B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[z("elementProperties")]=new Map,B[z("finalized")]=new Map,null==j||j({ReactiveElement:B}),(null!==(o=H.reactiveElementVersions)&&void 0!==o?o:H.reactiveElementVersions=[]).push("2.0.4");var W,V=globalThis,q=V.trustedTypes,K=q?q.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,J="$lit$",F="lit$".concat((Math.random()+"").slice(9),"$"),Q="?"+F,X="<".concat(Q,">"),tt=document,et=function(){return tt.createComment("")},it=function(t){return null===t||"object"!=typeof t&&"function"!=typeof t},nt=Array.isArray,rt="[ \t\n\f\r]",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,at=/>/g,lt=RegExp(">|".concat(rt,"(?:([^\\s\"'>=/]+)(").concat(rt,"*=").concat(rt,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ut=/'/g,ht=/"/g,ct=/^(?:script|style|textarea|title)$/i,dt=(W=1,function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return{_$litType$:W,strings:t,values:i}}),vt=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),pt=new WeakMap,yt=tt.createTreeWalker(tt,129);function gt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==K?K.createHTML(e):e}var _t=function(){function t(e,i){var n,r=e.strings,s=e._$litType$;(0,k.Z)(this,t),this.parts=[];var o=0,a=0,l=r.length-1,u=this.parts,h=function(t,e){for(var i,n=t.length-1,r=[],s=2===e?"<svg>":"",o=st,a=0;a<n;a++){for(var l=t[a],u=void 0,h=void 0,c=-1,d=0;d<l.length&&(o.lastIndex=d,null!==(h=o.exec(l)));){var v;d=o.lastIndex,o===st?"!--"===h[1]?o=ot:void 0!==h[1]?o=at:void 0!==h[2]?(ct.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=lt):void 0!==h[3]&&(o=lt):o===lt?">"===h[0]?(o=null!==(v=i)&&void 0!==v?v:st,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,u=h[1],o=void 0===h[3]?lt:'"'===h[3]?ht:ut):o===ht||o===ut?o=lt:o===ot||o===at?o=st:(o=lt,i=void 0)}var f=o===lt&&t[a+1].startsWith("/>")?" ":"";s+=o===st?l+X:c>=0?(r.push(u),l.slice(0,c)+J+l.slice(c)+F+f):l+F+(-2===c?a:f)}return[gt(t,s+(t[n]||"<?>")+(2===e?"</svg>":"")),r]}(r,s),c=(0,y.Z)(h,2),d=c[0],v=c[1];if(this.el=t.createElement(d,i),yt.currentNode=this.el.content,2===s){var f=this.el.content.firstChild;f.replaceWith.apply(f,(0,p.Z)(f.childNodes))}for(;null!==(n=yt.nextNode())&&u.length<l;){if(1===n.nodeType){if(n.hasAttributes()){var g,_=(0,S.Z)(n.getAttributeNames());try{for(_.s();!(g=_.n()).done;){var $=g.value;if($.endsWith(J)){var m=v[a++],A=n.getAttribute($).split(F),E=/([.?@])?(.*)/.exec(m);u.push({type:1,index:o,name:E[2],strings:A,ctor:"."===E[1]?kt:"?"===E[1]?Et:"@"===E[1]?bt:St}),n.removeAttribute($)}else $.startsWith(F)&&(u.push({type:6,index:o}),n.removeAttribute($))}}catch(U){_.e(U)}finally{_.f()}}if(ct.test(n.tagName)){var b=n.textContent.split(F),Z=b.length-1;if(Z>0){n.textContent=q?q.emptyScript:"";for(var w=0;w<Z;w++)n.append(b[w],et()),yt.nextNode(),u.push({type:2,index:++o});n.append(b[Z],et())}}}else if(8===n.nodeType)if(n.data===Q)u.push({type:2,index:o});else for(var C=-1;-1!==(C=n.data.indexOf(F,C+1));)u.push({type:7,index:o}),C+=F.length-1;o++}}return(0,E.Z)(t,null,[{key:"createElement",value:function(t,e){var i=tt.createElement("template");return i.innerHTML=t,i}}]),t}();function $t(t,e){var i,n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=arguments.length>3?arguments[3]:void 0;if(e===vt)return e;var a=void 0!==o?null==(n=s._$Co)?void 0:n[o]:s._$Cl,l=it(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null==(r=null==a?void 0:a._$AO)||r.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,s,o),void 0!==o?(null!==(i=s._$Co)&&void 0!==i?i:s._$Co=[])[o]=a:s._$Cl=a),void 0!==a&&(e=$t(t,a._$AS(t,e.values),a,o)),e}var mt=function(){function t(e,i){(0,k.Z)(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}return(0,E.Z)(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:tt).importNode(n,!0);yt.currentNode=s;for(var o=yt.nextNode(),a=0,l=0,u=r[0];void 0!==u;){if(a===u.index){var h=void 0;2===u.type?h=new At(o,o.nextSibling,this,t):1===u.type?h=new u.ctor(o,u.name,u.strings,this,t):6===u.type&&(h=new Zt(o,this,t)),this._$AV.push(h),u=r[++l]}a!==(null==u?void 0:u.index)&&(o=yt.nextNode(),a++)}return yt.currentNode=tt,s}},{key:"p",value:function(t){var e,i=0,n=(0,S.Z)(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(s){n.e(s)}finally{n.f()}}}]),t}(),At=function(){function t(e,i,n,r){var s;(0,k.Z)(this,t),this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}return(0,E.Z)(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null==(e=this._$AM)?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=$t(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),it(t)?t===ft||null==t||""===t?(this._$AH!==ft&&this._$AR(),this._$AH=ft):t!==this._$AH&&t!==vt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return nt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"S",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}},{key:"_",value:function(t){this._$AH!==ft&&it(this._$AH)?this._$AA.nextSibling.data=t:this.T(tt.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=_t.createElement(gt(n.h,n.h[0]),this.options)),n);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{var s=new mt(r,this),o=s.u(this.options);s.p(i),this.T(o),this._$AH=s}}},{key:"_$AC",value:function(t){var e=pt.get(t.strings);return void 0===e&&pt.set(t.strings,e=new _t(t)),e}},{key:"k",value:function(e){nt(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,s=0,o=(0,S.Z)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;s===r.length?r.push(i=new t(this.S(et()),this.S(et()),this,this.options)):i=r[s],i._$AI(a),s++}}catch(l){o.e(l)}finally{o.f()}s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null==(t=this._$AP)||t.call(this,!1,!0,i);e&&e!==this._$AB;){var n=e.nextSibling;e.remove(),e=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}]),t}(),St=function(){function t(e,i,n,r,s){(0,k.Z)(this,t),this.type=1,this._$AH=ft,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ft}return(0,E.Z)(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,s=!1;if(void 0===r)t=$t(this,t,e,0),(s=!it(t)||t!==this._$AH&&t!==vt)&&(this._$AH=t);else{var o,a,l=t;for(t=r[0],o=0;o<r.length-1;o++){var u;(a=$t(this,l[i+o],e,o))===vt&&(a=this._$AH[o]),s||(s=!it(a)||a!==this._$AH[o]),a===ft?t=ft:t!==ft&&(t+=(null!==(u=a)&&void 0!==u?u:"")+r[o+1]),this._$AH[o]=a}}s&&!n&&this.j(t)}},{key:"j",value:function(t){t===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!==t&&void 0!==t?t:"")}}]),t}(),kt=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.apply(this,arguments)).type=3,t}return(0,E.Z)(i,[{key:"j",value:function(t){this.element[this.name]=t===ft?void 0:t}}]),i}(St),Et=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.apply(this,arguments)).type=4,t}return(0,E.Z)(i,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==ft)}}]),i}(St),bt=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(t,n,r,s,o){var a;return(0,k.Z)(this,i),(a=e.call(this,t,n,r,s,o)).type=5,a}return(0,E.Z)(i,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=$t(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:ft)!==vt){var i=this._$AH,n=t===ft&&i!==ft||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==ft&&(i===ft||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null==(i=this.options)?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}]),i}(St),Zt=function(){function t(e,i,n){(0,k.Z)(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}return(0,E.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){$t(this,t)}}]),t}(),wt=V.litHtmlPolyfillSupport;null==wt||wt(_t,At),(null!==(a=V.litHtmlVersions)&&void 0!==a?a:V.litHtmlVersions=[]).push("3.1.2");var Ct,Ut=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.apply(this,arguments)).renderOptions={host:(0,d.Z)(t)},t._$Do=void 0,t}return(0,E.Z)(i,[{key:"createRenderRoot",value:function(){var t,e,n=(0,v.Z)((0,f.Z)(i.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),(0,v.Z)((0,f.Z)(i.prototype),"update",this).call(this,t),this._$Do=function(t,e,i){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,s=r._$litPart$;if(void 0===s){var o,a=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new At(e.insertBefore(et(),a),a,void 0,null!==i&&void 0!==i?i:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;(0,v.Z)((0,f.Z)(i.prototype),"connectedCallback",this).call(this),null==(t=this._$Do)||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;(0,v.Z)((0,f.Z)(i.prototype),"disconnectedCallback",this).call(this),null==(t=this._$Do)||t.setConnected(!1)}},{key:"render",value:function(){return vt}}]),i}(B);Ut._$litElement$=!0,Ut.finalized=!0,null==(Ct=globalThis.litElementHydrateSupport)||Ct.call(globalThis,{LitElement:Ut});var Pt=globalThis.litElementPolyfillSupport;null==Pt||Pt({LitElement:Ut}),(null!==(l=globalThis.litElementVersions)&&void 0!==l?l:globalThis.litElementVersions=[]).push("4.0.4");var Ot={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y};function Mt(t){return function(e,i){return"object"==typeof i?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,n=i.kind,r=i.metadata,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),"accessor"===n){var o=i.name;return{set:function(i){var n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init:function(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){var a=i.name;return function(i){var n=this[a];e.call(this,i),this.requestUpdate(a,n,t)}}throw Error("Unsupported decorator location: "+n)}(t,e,i):function(t,e,i){var n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?(0,c.Z)((0,c.Z)({},t),{},{wrapped:!0}):t),n?Object.getOwnPropertyDescriptor(e,i):void 0}(t,e,i)}}var Tt=2,Rt=function t(e,i){var n,r=e._$AN;if(void 0===r)return!1;var s,o=(0,S.Z)(r);try{for(o.s();!(s=o.n()).done;){var a=s.value;null==(n=a._$AO)||n.call(a,i,!1),t(a,i)}}catch(l){o.e(l)}finally{o.f()}return!0},Nt=function(t){var e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===(null==i?void 0:i.size))},It=function(t){for(var e;e=t._$AM;t=e){var i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Lt(e)}};function Ht(t){void 0!==this._$AN?(Nt(this),this._$AM=t,It(this)):this._$AM=t}function xt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(n))for(var s=i;s<n.length;s++)Rt(n[s],!1),Nt(n[s]);else null!=n&&(Rt(n,!1),Nt(n));else Rt(this,t)}var Lt=function(t){var e,i;t.type==Tt&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=xt),null!==(i=t._$AQ)&&void 0!==i||(t._$AQ=Ht))},jt=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.apply(this,arguments))._$AN=void 0,t}return(0,E.Z)(i,[{key:"_$AT",value:function(t,e,n){(0,v.Z)((0,f.Z)(i.prototype),"_$AT",this).call(this,t,e,n),It(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var e,i,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null==(e=this.reconnected)||e.call(this):null==(i=this.disconnected)||i.call(this)),n&&(Rt(this,t),Nt(this))}},{key:"setValue",value:function(t){if(function(t){return void 0===t.strings}(this._$Ct))this._$Ct._$AI(t,this);else{var e=(0,p.Z)(this._$Ct._$AH);e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),i}(function(){function t(e){(0,k.Z)(this,t)}return(0,E.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AT",value:function(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}},{key:"_$AS",value:function(t,e){return this.update(t,e)}},{key:"update",value:function(t,e){return this.render.apply(this,(0,p.Z)(e))}}]),t}()),zt=(0,E.Z)((function t(){(0,k.Z)(this,t)})),Dt=new WeakMap,Yt=function(t){return function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return{_$litDirective$:t,values:i}}}(function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){return(0,k.Z)(this,i),e.apply(this,arguments)}return(0,E.Z)(i,[{key:"render",value:function(t){return ft}},{key:"update",value:function(t,e){var i,n=(0,y.Z)(e,1)[0],r=n!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=n,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),ft}},{key:"rt",value:function(t){if("function"==typeof this.Y){var e,i=null!==(e=this.ht)&&void 0!==e?e:globalThis,n=Dt.get(i);void 0===n&&(n=new WeakMap,Dt.set(i,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}},{key:"lt",get:function(){var t,e,i;return"function"==typeof this.Y?null==(e=Dt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))?void 0:e.get(this.Y):null==(i=this.Y)?void 0:i.value}},{key:"disconnected",value:function(){this.lt===this.ct&&this.rt(void 0)}},{key:"reconnected",value:function(){this.rt(this.ct)}}]),i}(jt)),Gt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Wt=function(t,e,i,n){for(var r,s=n>1?void 0:n?Bt(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(s=(n?r(e,i,s):r(s))||s);return n&&s&&Gt(e,i,s),s};var Vt=function(t){(0,$.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,k.Z)(this,i),(t=e.call(this)).GISCUS_SESSION_KEY="giscus-session",t.GISCUS_DEFAULT_HOST="https://giscus.app",t.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",t.__session="",t._iframeRef=new zt,t.messageEventHandler=t.handleMessageEvent.bind((0,d.Z)(t)),t.hasLoaded=!1,t.host=t.GISCUS_DEFAULT_HOST,t.strict="0",t.reactionsEnabled="1",t.emitMetadata="0",t.inputPosition="bottom",t.theme="light",t.lang="en",t.loading="eager",t.setupSession(),window.addEventListener("message",t.messageEventHandler),t}return(0,E.Z)(i,[{key:"iframeRef",get:function(){var t;return null==(t=this._iframeRef)?void 0:t.value}},{key:"_host",get:function(){try{return new URL(this.host),this.host}catch(t){return this.GISCUS_DEFAULT_HOST}}},{key:"disconnectedCallback",value:function(){(0,v.Z)((0,f.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("message",this.messageEventHandler)}},{key:"_formatError",value:function(t){return'[giscus] An error occurred. Error message: "'.concat(t,'".')}},{key:"setupSession",value:function(){var t,e=location.href,i=new URL(e),n=localStorage.getItem(this.GISCUS_SESSION_KEY),r=null!==(t=i.searchParams.get("giscus"))&&void 0!==t?t:"";if(this.__session="",r)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(r)),this.__session=r,i.searchParams.delete("giscus"),i.hash="",void history.replaceState(void 0,document.title,i.toString());if(n)try{this.__session=JSON.parse(n)}catch(s){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn("".concat(this._formatError(null==s?void 0:s.message)," Session has been cleared."))}}},{key:"signOut",value:function(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}},{key:"handleMessageEvent",value:function(t){if(t.origin===this._host){var e=t.data;if("object"==typeof e&&e.giscus){if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height="".concat(e.giscus.resizeHeight,"px")),e.giscus.signOut)return console.info("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(e.giscus.error){var i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn("".concat(this._formatError(i)," Session has been cleared.")),void this.signOut();console.error("".concat(this._formatError(i)," No session is stored initially. ").concat(this.ERROR_SUGGESTION))}i.includes("Discussion not found")?console.warn("[giscus] ".concat(i,". A new discussion will be created if a comment/reaction is submitted.")):console.error("".concat(this._formatError(i)," ").concat(this.ERROR_SUGGESTION))}}}}},{key:"sendMessage",value:function(t){var e;null==(e=this.iframeRef)||!e.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}},{key:"updateConfig",value:function(){var t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}},{key:"firstUpdated",value:function(){var t,e=this;null==(t=this.iframeRef)||t.addEventListener("load",(function(){var t;null==(t=e.iframeRef)||t.classList.remove("loading"),e.hasLoaded=!0,e.updateConfig()}))}},{key:"requestUpdate",value:function(t,e,n){this.hasUpdated&&"host"!==t?this.updateConfig():(0,v.Z)((0,f.Z)(i.prototype),"requestUpdate",this).call(this,t,e,n)}},{key:"getMetaContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"meta[property='og:".concat(t,"'],"):"",i=document.querySelector(e+"meta[name='".concat(t,"']"));return i?i.content:""}},{key:"_getCleanedUrl",value:function(){var t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}},{key:"getTerm",value:function(){var t;switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return null!==(t=this.term)&&void 0!==t?t:"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}},{key:"getNumber",value:function(){var t;return"number"===this.mapping&&null!==(t=this.term)&&void 0!==t?t:""}},{key:"getIframeSrc",value:function(){var t,e,i,n=this._getCleanedUrl().toString(),r="".concat(n).concat(this.id?"#"+this.id:""),s=this.getMetaContent("description",!0),o=this.getMetaContent("giscus:backlink")||n,a={origin:r,session:this.__session,repo:this.repo,repoId:null!==(t=this.repoId)&&void 0!==t?t:"",category:null!==(e=this.category)&&void 0!==e?e:"",categoryId:null!==(i=this.categoryId)&&void 0!==i?i:"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:o},l=this._host,u=this.lang?"/".concat(this.lang):"",h=new URLSearchParams(a);return"".concat(l).concat(u,"/widget?").concat(h.toString())}},{key:"render",value:function(){return dt(u||(u=n(['\n      <iframe\n        title="Comments"\n        scrolling="no"\n        class="loading"\n        ',"\n        src=","\n        loading=",'\n        allow="clipboard-write"\n        part="iframe"\n      ></iframe>\n    '])),Yt(this._iframeRef),this.getIframeSrc(),this.loading)}}]),i}(Ut);Vt.styles=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var r=1===t.length?t[0]:i.reduce((function(e,i,n){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+t[n+1]}),t[0]);return new U(r,t,w)}(h||(h=n(["\n    :host,\n    iframe {\n      width: 100%;\n      border: none;\n      min-height: 150px;\n      color-scheme: light dark;\n    }\n\n    iframe.loading {\n      opacity: 0;\n    }\n  "]))),Wt([Mt({reflect:!0})],Vt.prototype,"host",2),Wt([Mt({reflect:!0})],Vt.prototype,"repo",2),Wt([Mt({reflect:!0})],Vt.prototype,"repoId",2),Wt([Mt({reflect:!0})],Vt.prototype,"category",2),Wt([Mt({reflect:!0})],Vt.prototype,"categoryId",2),Wt([Mt({reflect:!0})],Vt.prototype,"mapping",2),Wt([Mt({reflect:!0})],Vt.prototype,"term",2),Wt([Mt({reflect:!0})],Vt.prototype,"strict",2),Wt([Mt({reflect:!0})],Vt.prototype,"reactionsEnabled",2),Wt([Mt({reflect:!0})],Vt.prototype,"emitMetadata",2),Wt([Mt({reflect:!0})],Vt.prototype,"inputPosition",2),Wt([Mt({reflect:!0})],Vt.prototype,"theme",2),Wt([Mt({reflect:!0})],Vt.prototype,"lang",2),Wt([Mt({reflect:!0})],Vt.prototype,"loading",2),Vt=Wt([function(t){return customElements.get(t)?function(t){return t}:function(t){return function(e,i){void 0!==i?i.addInitializer((function(){customElements.define(t,e)})):customElements.define(t,e)}}(t)}("giscus-widget")],Vt)}}]);
//# sourceMappingURL=573.035b9fdd.chunk.js.map