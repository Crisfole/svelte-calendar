var app=function(){"use strict";function t(t,e){var n=arguments;if(null==t)throw new TypeError("Cannot convert first argument to object");for(var o=Object(t),r=1;r<arguments.length;r++){var a=n[r];if(null!=a)for(var i=Object.keys(Object(a)),s=0,c=i.length;s<c;s++){var d=i[s],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(o[d]=a[d])}}return o}var e=function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})};function n(){}function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){for(var n in e)t[n]=1;return t}function a(t,e){return 0===e&&t(),function(){--e||t()}}function i(t,e,n,o,r){t.__svelte_meta={loc:{file:e,line:n,column:o,char:r}}}function s(t){t()}function c(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n)}function h(t){t.parentNode.removeChild(t)}function l(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}function u(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(){return document.createDocumentFragment()}function m(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(t,e,n,o){t.addEventListener(e,n,o)}function v(t,e,n,o){t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){t.data=""+e}function _(t,e,n){t.style.setProperty(e,n)}function b(t,e,n){t.classList.toggle(e,!!n)}function k(){return Object.create(null)}function D(t){t._lock=!0,C(t._beforecreate),C(t._oncreate),C(t._aftercreate),t._lock=!1}function M(t,e){t._handlers=k(),t._slots=k(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function C(t){for(;t&&t.length;)t.shift()()}var x={destroy:function(t){(function(t){this.destroy=n,this.fire("destroy"),this.set=n,this._fragment.d(!1!==t),this._fragment=null,this._state={}}).call(this,t),this.destroy=function(){console.warn("Component was already destroyed")}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1){var r=n[o];if(!r.__calling)try{r.__calling=!0,r.call(this,e)}finally{r.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if("object"!=typeof t)throw new Error(this._debugName+".set was called without an object of data key-values to update.");this._checkReadOnly(t),function(t){this._set(o({},t)),this.root._lock||D(this.root)}.call(this,t)},_recompute:n,_set:function(t){var e=this._state,n={},r=!1;for(var a in t=o(this._staged,t),this._staged={},t)this._differs(t[a],e[a])&&(n[a]=r=!0);r&&(this._state=o(o({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_stage:function(t){o(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}},S=[{name:"January",abbrev:"Jan"},{name:"February",abbrev:"Feb"},{name:"March",abbrev:"Mar"},{name:"April",abbrev:"Apr"},{name:"May",abbrev:"May"},{name:"June",abbrev:"Jun"},{name:"July",abbrev:"Jul"},{name:"August",abbrev:"Aug"},{name:"September",abbrev:"Sep"},{name:"October",abbrev:"Oct"},{name:"November",abbrev:"Nov"},{name:"December",abbrev:"Dec"}],O=[{name:"Sunday",abbrev:"Sun"},{name:"Monday",abbrev:"Mon"},{name:"Tuesday",abbrev:"Tue"},{name:"Wednesday",abbrev:"Wed"},{name:"Thursday",abbrev:"Thu"},{name:"Friday",abbrev:"Fri"},{name:"Saturday",abbrev:"Sat"}],N=function(t,e,n){var o=new Date(e,t,1);o.setDate(o.getDate()-o.getDay());for(var r=11==t?0:t+1,a=[];o.getMonth()!=r||0!=o.getDay()||6!=a.length;)0==o.getDay()&&a.unshift({days:[]}),a[0].days.push(Object.assign({},{partOfMonth:o.getMonth()==t,date:new Date(o)},n(o))),o.setDate(o.getDate()+1);return a.reverse(),{month:t,year:e,weeks:a}},F=function(t,e){var n=new Date;return n.setHours(0,0,0,0),function(o){return{selectable:o>=t&&o<=e,isToday:o.getTime()==n.getTime()}}};var E=function(t,e,n){return t.replace(new RegExp("#{"+e+"}","g"),n)},j=function(t,e,n){if(t=t.toString(),void 0===e)return t;if(t.length==e)return t;if(n=void 0!==n&&n,t.length<e)for(;e-t.length>0;)t="0"+t;else t.length>e&&(t=n?t.substring(t.length-e):t.substring(0,e));return t},I={daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthsOfYear:["January","February","March","April","May","June","July","August","September","October","November","December"]},P=[{key:"d",method:function(t){return j(t.getDate(),2)}},{key:"D",method:function(t){return j(I.daysOfWeek[t.getDay()],3)}},{key:"j",method:function(t){return t.getDate()}},{key:"l",method:function(t){return I.daysOfWeek[t.getDay()]}},{key:"F",method:function(t){return I.monthsOfYear[t.getMonth()]}},{key:"m",method:function(t){return j(t.getMonth()+1,2)}},{key:"M",method:function(t){return j(I.monthsOfYear[t.getMonth()],3)}},{key:"n",method:function(t){return t.getMonth()+1}},{key:"Y",method:function(t){return t.getFullYear()}},{key:"y",method:function(t){return j(t.getFullYear(),2,!0)}}],Y=[{key:"a",method:function(t){return t.getHours()>11?"pm":"am"}},{key:"A",method:function(t){return t.getHours()>11?"PM":"AM"}},{key:"g",method:function(t){return t.getHours()%12||12}},{key:"G",method:function(t){return t.getHours()}},{key:"h",method:function(t){return j(t.getHours()%12||12,2)}},{key:"H",method:function(t){return j(t.getHours(),2)}},{key:"i",method:function(t){return j(t.getMinutes(),2)}},{key:"s",method:function(t){return j(t.getSeconds(),2)}}],T=function(t,e){return void 0===e&&(e="#{m}/#{d}/#{Y}"),P.forEach(function(n){-1!=e.indexOf("#{"+n.key+"}")&&(e=E(e,n.key,n.method(t)))}),Y.forEach(function(n){-1!=e.indexOf("#{"+n.key+"}")&&(e=E(e,n.key,n.method(t)))}),e},A={left:37,up:38,right:39,down:40,pgup:33,pgdown:34,enter:13,escape:27,tab:9},H=Object.keys(A).map(function(t){return A[t]});function R(t,e){return t.getDate()==e.getDate()&&t.getMonth()==e.getMonth()&&t.getFullYear()==e.getFullYear()}var W="src/Components/Week.html";function q(t){var e=this._svelte,n=e.component,o=e.ctx;n.fire("dateSelected",o.day.date)}function L(t,e,n){var o=Object.create(t);return o.day=e[n],o}function B(t,e){var n,o,r,a,s=e.day.date.getDate();return{c:function(){n=m("div"),o=m("button"),r=p(s),a=p("\n    "),o.className="day--label svelte-1pt5i06",b(o,"selected",!0===R(e.day.date,e.selected)),i(o,W,8,6,209),n._svelte={component:t,ctx:e},g(n,"click",q),n.className="day svelte-1pt5i06",b(n,"outside-month",!e.day.partOfMonth),b(n,"is-today",e.day.isToday),i(n,W,2,4,45)},m:function(t,e){d(t,n,e),c(n,o),c(o,r),c(n,a)},p:function(t,a){e=a,t.days&&s!==(s=e.day.date.getDate())&&w(r,s),(t.days||t.selected)&&b(o,"selected",!0===R(e.day.date,e.selected)),n._svelte.ctx=e,t.days&&(b(n,"outside-month",!e.day.partOfMonth),b(n,"is-today",e.day.isToday))},d:function(t){t&&h(n),v(n,"click",q)}}}function V(t){if(this._debugName="<Week>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this._state=o({},t.data),"days"in this._state||console.warn("<Week> was created without expected data property 'days'"),"selected"in this._state||console.warn("<Week> was created without expected data property 'selected'"),this._intro=!!t.intro,this._fragment=function(t,e){for(var n,o,r=e.days,a=[],c=0;c<r.length;c+=1)a[c]=B(t,L(e,r,c));return{c:function(){n=m("div");for(var t=0;t<a.length;t+=1)a[t].c();n.className="week svelte-1pt5i06",i(n,W,0,0,0)},m:function(t,e){d(t,n,e);for(var r=0;r<a.length;r+=1)a[r].m(n,null);o=!0},p:function(e,o){if(e.days||e.selected){r=o.days;for(var i=0;i<r.length;i+=1){var s=L(o,r,i);a[i]?a[i].p(e,s):(a[i]=B(t,s),a[i].c(),a[i].m(n,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=r.length}},i:function(t,e){o||this.m(t,e)},o:s,d:function(t){t&&h(n),u(a,t)}}}(this,this._state),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor)}this._intro=!0}o(V.prototype,x),V.prototype._checkReadOnly=function(t){};var J="src/Components/Month.html";function X(t,e,n){var o=Object.create(t);return o.week=e[n],o}function K(t,e){var n,o={days:e.week.days,selected:e.selected},r=new V({root:t.root,store:t.store,data:o});return r.on("dateSelected",function(e){t.fire("dateSelected",e)}),{c:function(){r._fragment.c()},m:function(t,e){r._mount(t,e),n=!0},p:function(t,e){var n={};t.visibleMonth&&(n.days=e.week.days),t.selected&&(n.selected=e.selected),r._set(n)},i:function(t,e){n||this.m(t,e)},o:function(t){n&&(r&&r._fragment.o(t),n=!1)},d:function(t){r.destroy(t)}}}function z(t){if(this._debugName="<Month>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this._state=o({monthDict:S},t.data),"visibleMonth"in this._state||console.warn("<Month> was created without expected data property 'visibleMonth'"),"selected"in this._state||console.warn("<Month> was created without expected data property 'selected'"),this._intro=!!t.intro,this._fragment=function(t,e){for(var n,o,r=e.visibleMonth.weeks,s=[],c=0;c<r.length;c+=1)s[c]=K(t,X(e,r,c));function l(t,e,n){s[t]&&s[t].o(function(){e&&(s[t].d(e),s[t]=null),n&&n()})}return{c:function(){n=m("div");for(var t=0;t<s.length;t+=1)s[t].c();n.className="month-container svelte-15vij24",i(n,J,0,0,0)},m:function(t,e){d(t,n,e);for(var r=0;r<s.length;r+=1)s[r].i(n,null);o=!0},p:function(e,o){if(e.visibleMonth||e.selected){r=o.visibleMonth.weeks;for(var a=0;a<r.length;a+=1){var i=X(o,r,a);s[a]?s[a].p(e,i):(s[a]=K(t,i),s[a].c()),s[a].i(n,null)}for(;a<s.length;a+=1)l(a,1)}},i:function(t,e){o||this.m(t,e)},o:function(t){if(o){for(var e=a(t,(s=s.filter(Boolean)).length),n=0;n<s.length;n+=1)l(n,0,e);o=!1}},d:function(t){t&&h(n),u(s,t)}}}(this,this._state),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor),D(this)}this._intro=!0}o(z.prototype,x),z.prototype._checkReadOnly=function(t){};var U="src/Components/NavBar.html";function G(t){var e=this._svelte,n=e.component,o=e.ctx;n.monthSelected(t,o.index)}function Q(t,e,n){var o=Object.create(t);return o.monthDefinition=e[n],o.index=n,o}function Z(t,e){var n,o,r,a,s=e.monthDefinition.abbrev;return{c:function(){n=m("div"),o=m("span"),r=p(s),a=p("\n      "),o.className="svelte-cih5yl",i(o,U,23,8,741),n._svelte={component:t,ctx:e},g(n,"click",G),n.className="month-selector--month svelte-cih5yl",b(n,"selected",e.index==e.month),i(n,U,18,6,596)},m:function(t,e){d(t,n,e),c(n,o),c(o,r),c(n,a)},p:function(t,o){e=o,t.monthDict&&s!==(s=e.monthDefinition.abbrev)&&w(r,s),n._svelte.ctx=e,t.month&&b(n,"selected",e.index==e.month)},d:function(t){t&&h(n),v(n,"click",G)}}}function $(t){if(this._debugName="<NavBar>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this._state=o({monthDict:S,monthSelectorOpen:!1},t.data),"canDecrementMonth"in this._state||console.warn("<NavBar> was created without expected data property 'canDecrementMonth'"),"monthDict"in this._state||console.warn("<NavBar> was created without expected data property 'monthDict'"),"month"in this._state||console.warn("<NavBar> was created without expected data property 'month'"),"year"in this._state||console.warn("<NavBar> was created without expected data property 'year'"),"canIncrementMonth"in this._state||console.warn("<NavBar> was created without expected data property 'canIncrementMonth'"),"monthSelectorOpen"in this._state||console.warn("<NavBar> was created without expected data property 'monthSelectorOpen'"),this._intro=!!t.intro,this._fragment=function(t,e){var n,o,r,a,l,f,y,_,k,D,M,C,x,S,O,N=e.monthDict[e.month].name;function F(e){t.fire("incrementMonth",-1)}function E(e){t.toggleMonthSelectorOpen()}function j(e){t.fire("incrementMonth",1)}for(var I=e.monthDict,P=[],Y=0;Y<I.length;Y+=1)P[Y]=Z(t,Q(e,I,Y));return{c:function(){n=m("div"),o=m("div"),r=m("div"),a=m("i"),l=p("\n    "),f=m("div"),y=p(N),_=p(" "),k=p(e.year),D=p(" \n    "),M=m("div"),C=m("i"),x=p("\n  "),S=m("div");for(var t=0;t<P.length;t+=1)P[t].c();a.className="arrow left svelte-cih5yl",i(a,U,5,6,169),g(r,"click",F),r.className="control svelte-cih5yl",b(r,"enabled",e.canDecrementMonth),i(r,U,2,4,56),g(f,"click",E),f.className="label svelte-cih5yl",i(f,U,7,4,211),C.className="arrow right svelte-cih5yl",i(C,U,13,6,432),g(M,"click",j),M.className="control svelte-cih5yl",b(M,"enabled",e.canIncrementMonth),i(M,U,10,4,321),o.className="heading-section svelte-cih5yl",i(o,U,1,2,22),S.className="month-selector svelte-cih5yl",b(S,"open",e.monthSelectorOpen),i(S,U,16,2,482),n.className="title",i(n,U,0,0,0)},m:function(t,e){d(t,n,e),c(n,o),c(o,r),c(r,a),c(o,l),c(o,f),c(f,y),c(f,_),c(f,k),c(o,D),c(o,M),c(M,C),c(n,x),c(n,S);for(var i=0;i<P.length;i+=1)P[i].m(S,null);O=!0},p:function(e,n){if(e.canDecrementMonth&&b(r,"enabled",n.canDecrementMonth),(e.monthDict||e.month)&&N!==(N=n.monthDict[n.month].name)&&w(y,N),e.year&&w(k,n.year),e.canIncrementMonth&&b(M,"enabled",n.canIncrementMonth),e.month||e.monthDict){I=n.monthDict;for(var o=0;o<I.length;o+=1){var a=Q(n,I,o);P[o]?P[o].p(e,a):(P[o]=Z(t,a),P[o].c(),P[o].m(S,null))}for(;o<P.length;o+=1)P[o].d(1);P.length=I.length}e.monthSelectorOpen&&b(S,"open",n.monthSelectorOpen)},i:function(t,e){O||this.m(t,e)},o:s,d:function(t){t&&h(n),v(r,"click",F),v(f,"click",E),v(M,"click",j),u(P,t)}}}(this,this._state),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor)}this._intro=!0}function tt(t){if(this.get().open){var e=t.target;do{if(e==this.refs.popover)return}while(e=e.parentNode);this.close()}}o($.prototype,x),o($.prototype,{toggleMonthSelectorOpen:function(){var t=this.get().monthSelectorOpen;t=!t,this.set({monthSelectorOpen:t})},monthSelected:function(t,e){t.stopPropagation(),this.fire("monthSelected",e),this.toggleMonthSelectorOpen()}}),$.prototype._checkReadOnly=function(t){};var et={getDistanceToEdges:function(){var t=this.get().open;t||this.set({open:!0});var e=this.get(),n=e.translateX,o=e.translateY,r=this.refs.contentsWrapper,a=(r.offsetWidth,r.offsetHeight,r.getBoundingClientRect());return t||this.set({open:!1}),{top:a.top+-1*o,bottom:window.innerHeight-a.bottom+o,left:a.left+-1*n,right:document.body.clientWidth-a.right+n}},getTranslate:function(){var t,e=this.get().w,n=this.getDistanceToEdges();return t=e<480?n.bottom:n.top<0?Math.abs(n.top):n.bottom<0?n.bottom:0,{translateX:n.left<0?Math.abs(n.left):n.right<0?n.right:0,translateY:t}},open:function(){this.set(Object.assign({},{open:!0},this.getTranslate())),this.fire("opened")},close:function(){var t=this;this.set({shrink:!0}),function(t,e,n){t.addEventListener(e,function o(){n.apply(this,arguments),t.removeEventListener(e,o)})}(this.refs.contentsAnimated,"animationend",function(){t.set({shrink:!1,open:!1}),t.fire("closed")})}};function nt(){document.removeEventListener("click",tt)}var ot="src/Components/Popover.html";function rt(t){var e=this;if(this._debugName="<Popover>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this.refs={},this._state=o({open:!1,shrink:!1,translateY:0,translateX:0},t.data),this._state.w=window.innerWidth,"w"in this._state||console.warn("<Popover> was created without expected data property 'w'"),"open"in this._state||console.warn("<Popover> was created without expected data property 'open'"),"shrink"in this._state||console.warn("<Popover> was created without expected data property 'shrink'"),"translateX"in this._state||console.warn("<Popover> was created without expected data property 'translateX'"),"translateY"in this._state||console.warn("<Popover> was created without expected data property 'translateY'"),this._intro=!!t.intro,this._handlers.destroy=[nt],this._slotted=t.slots||{},this._fragment=function(t,e){var n,o,r,a,u,f,y,w=t._slotted.trigger,k=t._slotted.contents;function D(e){t._updatingReadonlyProperty=!0,t.set({w:this.innerWidth}),t._updatingReadonlyProperty=!1}function M(e){t.open()}return window.addEventListener("resize",D),{c:function(){n=m("div"),o=m("div"),r=p("\n  "),a=m("div"),u=m("div"),f=m("div"),g(o,"click",M),o.className="trigger",i(o,ot,2,2,74),f.className="contents-inner svelte-xgu4qd",i(f,ot,13,6,437),u.className="contents svelte-xgu4qd",i(u,ot,12,4,387),a.className="contents-wrapper svelte-xgu4qd",_(a,"transform","translate(-50%,-50%) translate("+e.translateX+"px, "+e.translateY+"px)"),b(a,"visible",e.open),b(a,"shrink",e.shrink),i(a,ot,6,2,184),n.className="popover svelte-xgu4qd",i(n,ot,1,0,38)},m:function(e,i){d(e,n,i),c(n,o),w&&c(o,w),t.refs.triggerContainer=o,c(n,r),c(n,a),c(a,u),c(u,f),k&&c(f,k),t.refs.contentsAnimated=u,t.refs.contentsWrapper=a,t.refs.popover=n,y=!0},p:function(t,e){(t.translateX||t.translateY)&&_(a,"transform","translate(-50%,-50%) translate("+e.translateX+"px, "+e.translateY+"px)"),t.open&&b(a,"visible",e.open),t.shrink&&b(a,"shrink",e.shrink)},i:function(t,e){y||this.m(t,e)},o:s,d:function(e){window.removeEventListener("resize",D),e&&h(n),w&&l(o,w),v(o,"click",M),t.refs.triggerContainer===o&&(t.refs.triggerContainer=null),k&&l(f,k),t.refs.contentsAnimated===u&&(t.refs.contentsAnimated=null),t.refs.contentsWrapper===a&&(t.refs.contentsWrapper=null),t.refs.popover===n&&(t.refs.popover=null)}}}(this,this._state),this.root._oncreate.push(function(){(function(){document.addEventListener("click",tt.bind(this));var t=this.get().trigger;t&&this.refs.triggerContainer.appendChild(t.parentNode.removeChild(t))}).call(e),e.fire("update",{changed:r({},e._state),current:e._state})}),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor),D(this)}this._intro=!0}function at(t){return function(t,e){t.setHours(0,0,0,0),e.setHours(0,0,0,0);for(var n=new Date(e.getFullYear(),e.getMonth()+1,1),o=[],r=new Date(t.getFullYear(),t.getMonth(),1),a=F(t,e);r<n;)o.push(N(r.getMonth(),r.getFullYear(),a)),r.setMonth(r.getMonth()+1);return o}(t.start,t.end)}o(rt.prototype,x),o(rt.prototype,et),rt.prototype._checkReadOnly=function(t){if("w"in t&&!this._updatingReadonlyProperty)throw new Error("<Popover>: Cannot set read-only property 'w'")},(new Date).setHours(0,0,0,0);var it={changeMonth:function(t){this.set({month:t})},incrementMonth:function(t,e){var n=this.get(),o=n.canIncrementMonth,r=n.canDecrementMonth,a=n.month,i=n.year;if((1!=t||o)&&(-1!=t||r)){var s=new Date(i,a,1);s.setMonth(s.getMonth()+t),a=s.getMonth(),i=s.getFullYear();var c=new Date(i,a,e||1);this.set({selected:c,month:a,year:i})}},incrementDay:function(t){var e=this.get(),n=e.selected,o=(e.visibleMonth,e.firstVisibleDate),r=e.lastVisibleDate;return(n=new Date(n)).setDate(n.getDate()+t),t>0&&n>r?this.incrementMonth(1,n.getDate()):t<0&&n<o?this.incrementMonth(-1,n.getDate()):void this.set({selected:n})},handleKeyPress:function(t){if(-1!=H.indexOf(t.keyCode))switch(t.preventDefault(),t.keyCode){case A.left:this.incrementDay(-1);break;case A.up:this.incrementDay(-7);break;case A.right:this.incrementDay(1);break;case A.down:this.incrementDay(7);break;case A.pgup:this.incrementMonth(-1);break;case A.pgdown:this.incrementMonth(1);break;case A.escape:case A.enter:var e=this.get().selected;this.registerSelection(e)}},registerSelection:function(t){var e=this.get(),n=e.trigger,o=e.formattedSelected;this.refs.popover.close(),this.set({selected:t,dateChosen:!0}),this.assignValueToTrigger(n,o)},assignValueToTrigger:function(t,e){t&&this.get().assignmentHandler(t,e)},registerOpen:function(){var t=this.get().selected,e=this.handleKeyPress.bind(this);this.set({keydownListener:e,month:t.getMonth(),year:t.getFullYear()}),document.addEventListener("keydown",e)},registerClose:function(){var t=this.get().keydownListener;document.removeEventListener("keydown",t)}};var st="src/Components/Datepicker.html";function ct(t,e,n){var o=Object.create(t);return o.day=e[n],o}function dt(t,e){var n,o;return{c:function(){n=m("button"),o=p(e.formattedSelected),n.className="calendar-button svelte-1q67pnl",i(n,st,12,10,314)},m:function(t,e){d(t,n,e),c(n,o)},p:function(t,e){t.formattedSelected&&w(o,e.formattedSelected)},d:function(t){t&&h(n)}}}function ht(t,e){var n,o,r=e.day.abbrev;return{c:function(){n=m("span"),o=p(r),n.className="svelte-1q67pnl",i(n,st,30,12,792)},m:function(t,e){d(t,n,e),c(n,o)},p:function(t,e){t.dayDict&&r!==(r=e.day.abbrev)&&w(o,r)},d:function(t){t&&h(n)}}}function lt(t){var e,n=this;if(this._debugName="<Datepicker>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this.refs={},this._state=o({today:e=new Date,dayDict:O,format:"#{m}/#{d}/#{Y}",start:new Date(1987,9,29),end:new Date(2020,9,29),selected:e,dateChosen:!1,month:e.getMonth(),year:e.getFullYear(),trigger:null,assignmentHandler:function(t,e){t.innerHTML=e}},t.data),this._recompute({start:1,end:1,month:1,year:1,months:1,monthIndex:1,visibleMonth:1,selected:1,format:1},this._state),"start"in this._state||console.warn("<Datepicker> was created without expected data property 'start'"),"end"in this._state||console.warn("<Datepicker> was created without expected data property 'end'"),"month"in this._state||console.warn("<Datepicker> was created without expected data property 'month'"),"year"in this._state||console.warn("<Datepicker> was created without expected data property 'year'"),"selected"in this._state||console.warn("<Datepicker> was created without expected data property 'selected'"),"format"in this._state||console.warn("<Datepicker> was created without expected data property 'format'"),"isOpen"in this._state||console.warn("<Datepicker> was created without expected data property 'isOpen'"),"isClosing"in this._state||console.warn("<Datepicker> was created without expected data property 'isClosing'"),"trigger"in this._state||console.warn("<Datepicker> was created without expected data property 'trigger'"),"dayDict"in this._state||console.warn("<Datepicker> was created without expected data property 'dayDict'"),this._intro=!!t.intro,this._slotted=t.slots||{},this._fragment=function(t,e){var n,o,r,s,g,v,w,_,k,D=t._slotted.default,M={},C=!e.trigger&&dt(0,e),x={month:e.month,year:e.year,canIncrementMonth:e.canIncrementMonth,canDecrementMonth:e.canDecrementMonth},S=new $({root:t.root,store:t.store,data:x});S.on("monthSelected",function(e){t.changeMonth(e)}),S.on("incrementMonth",function(e){t.incrementMonth(e)});for(var O=e.dayDict,N=[],F=0;F<O.length;F+=1)N[F]=ht(0,ct(e,O,F));var E={visibleMonth:e.visibleMonth,selected:e.selected},j=new z({root:t.root,store:t.store,data:E});j.on("dateSelected",function(e){t.registerSelection(e)});var I={trigger:e.trigger};void 0!==e.isOpen&&(I.open=e.isOpen,M.open=!0),void 0!==e.isClosing&&(I.shrink=e.isClosing,M.shrink=!0);var P=new rt({root:t.root,store:t.store,slots:{default:f(),contents:f(),trigger:f()},data:I,_bind:function(e,n){var o={};!M.open&&e.open&&(o.isOpen=n.open),!M.shrink&&e.shrink&&(o.isClosing=n.shrink),t._set(o),M={}}});return t.root._beforecreate.push(function(){P._bind({open:1,shrink:1},P.get())}),P.on("opened",function(e){t.registerOpen(e)}),P.on("closed",function(e){t.registerClose(e)}),t.refs.popover=P,{c:function(){n=m("div"),o=m("div"),D||C&&C.c(),r=p("\n    "),s=m("div"),g=m("div"),S._fragment.c(),v=p("\n        "),w=m("div");for(var t=0;t<N.length;t+=1)N[t].c();_=p("\n        "),j._fragment.c(),P._fragment.c(),y(o,"slot","trigger"),o.className="svelte-1q67pnl",i(o,st,9,4,247),w.className="legend svelte-1q67pnl",i(w,st,28,8,726),g.className="calendar svelte-1q67pnl",i(g,st,19,6,470),y(s,"slot","contents"),s.className="svelte-1q67pnl",i(s,st,18,4,442),n.className="datepicker svelte-1q67pnl",b(n,"open",e.isOpen),b(n,"closing",e.isClosing),i(n,st,0,0,0)},m:function(t,e){d(t,n,e),c(P._slotted.trigger,o),D?c(o,D):C&&C.m(o,null),c(P._slotted.default,r),c(P._slotted.contents,s),c(s,g),S._mount(g,null),c(g,v),c(g,w);for(var a=0;a<N.length;a+=1)N[a].m(w,null);c(g,_),j._mount(g,null),P._mount(n,null),k=!0},p:function(t,r){e=r,D||(e.trigger?C&&(C.d(1),C=null):C?C.p(t,e):((C=dt(0,e)).c(),C.m(o,null)));var a={};if(t.month&&(a.month=e.month),t.year&&(a.year=e.year),t.canIncrementMonth&&(a.canIncrementMonth=e.canIncrementMonth),t.canDecrementMonth&&(a.canDecrementMonth=e.canDecrementMonth),S._set(a),t.dayDict){O=e.dayDict;for(var i=0;i<O.length;i+=1){var s=ct(e,O,i);N[i]?N[i].p(t,s):(N[i]=ht(0,s),N[i].c(),N[i].m(w,null))}for(;i<N.length;i+=1)N[i].d(1);N.length=O.length}var c={};t.visibleMonth&&(c.visibleMonth=e.visibleMonth),t.selected&&(c.selected=e.selected),j._set(c);var d={};t.trigger&&(d.trigger=e.trigger),!M.open&&t.isOpen&&(d.open=e.isOpen,M.open=void 0!==e.isOpen),!M.shrink&&t.isClosing&&(d.shrink=e.isClosing,M.shrink=void 0!==e.isClosing),P._set(d),M={},t.isOpen&&b(n,"open",e.isOpen),t.isClosing&&b(n,"closing",e.isClosing)},i:function(t,e){k||this.m(t,e)},o:function(t){k&&(t=a(t,3),S&&S._fragment.o(t),j&&j._fragment.o(t),P&&P._fragment.o(t),k=!1)},d:function(e){e?(h(n),C&&C.d()):l(o,D),S.destroy(),u(N,e),j.destroy(),P.destroy(),t.refs.popover===P&&(t.refs.popover=null)}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this.get().selected;this.set({month:t.getMonth(),year:t.getFullYear()})}).call(n),n.fire("update",{changed:r({},n._state),current:n._state})}),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor),D(this)}this._intro=!0}o(lt.prototype,x),o(lt.prototype,it),lt.prototype._checkReadOnly=function(t){if("months"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'months'");if("monthIndex"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'monthIndex'");if("visibleMonth"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'visibleMonth'");if("lastVisibleDate"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'lastVisibleDate'");if("firstVisibleDate"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'firstVisibleDate'");if("canIncrementMonth"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'canIncrementMonth'");if("canDecrementMonth"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'canDecrementMonth'");if("formattedSelected"in t&&!this._updatingReadonlyProperty)throw new Error("<Datepicker>: Cannot set read-only property 'formattedSelected'")},lt.prototype._recompute=function(t,e){(t.start||t.end)&&this._differs(e.months,e.months=at(e))&&(t.months=!0),(t.month||t.year||t.months)&&this._differs(e.monthIndex,e.monthIndex=function(t){for(var e=t.month,n=t.year,o=t.months,r=0;r<o.length;++r)if(o[r].month==e&&o[r].year==n)return r;return 0}(e))&&(t.monthIndex=!0),(t.monthIndex||t.months)&&this._differs(e.visibleMonth,e.visibleMonth=function(t){var e=t.monthIndex;return t.months[e]}(e))&&(t.visibleMonth=!0),t.visibleMonth&&(this._differs(e.lastVisibleDate,e.lastVisibleDate=function(t){var e=t.visibleMonth;return e.weeks[e.weeks.length-1].days[6].date}(e))&&(t.lastVisibleDate=!0),this._differs(e.firstVisibleDate,e.firstVisibleDate=e.visibleMonth.weeks[0].days[0].date)&&(t.firstVisibleDate=!0)),(t.monthIndex||t.months)&&(this._differs(e.canIncrementMonth,e.canIncrementMonth=function(t){return t.monthIndex<t.months.length-1}(e))&&(t.canIncrementMonth=!0),this._differs(e.canDecrementMonth,e.canDecrementMonth=function(t){var e=t.monthIndex;return t.months,e>0}(e))&&(t.canDecrementMonth=!0)),(t.selected||t.format)&&this._differs(e.formattedSelected,e.formattedSelected=function(t){var e=t.selected,n=t.format;return T(e,n)}(e))&&(t.formattedSelected=!0)};var ut="src/App.html";function ft(t,e){var o;return{c:function(){o=p("Pick a date")},m:function(t,e){d(t,o,e)},p:n,d:function(t){t&&h(o)}}}function mt(t,e){var n,o;return{c:function(){n=p("Chosen: "),o=p(e.formattedSelected)},m:function(t,e){d(t,n,e),d(t,o,e)},p:function(t,e){t.formattedSelected&&w(o,e.formattedSelected)},d:function(t){t&&(h(n),h(o))}}}function pt(t,e){var o;return{c:function(){o=p("Custom Button")},m:function(t,e){d(t,o,e)},p:n,d:function(t){t&&h(o)}}}function gt(t,e){var n;return{c:function(){n=p(e.exampleFormatted)},m:function(t,e){d(t,n,e)},p:function(t,e){t.exampleFormatted&&w(n,e.exampleFormatted)},d:function(t){t&&h(n)}}}function vt(t){var e=this;if(this._debugName="<App>",!t||!t.target&&!t.root)throw new Error("'target' is a required option");if(M(this,t),this._state=o({start:new Date,dateFormat:"#{l}, #{F} #{j}, #{Y}"},t.data),this._recompute({start:1},this._state),"start"in this._state||console.warn("<App> was created without expected data property 'start'"),"dateFormat"in this._state||console.warn("<App> was created without expected data property 'dateFormat'"),"formattedSelected"in this._state||console.warn("<App> was created without expected data property 'formattedSelected'"),"dateChosen"in this._state||console.warn("<App> was created without expected data property 'dateChosen'"),"exampleFormatted"in this._state||console.warn("<App> was created without expected data property 'exampleFormatted'"),"exampleChosen"in this._state||console.warn("<App> was created without expected data property 'exampleChosen'"),this._intro=!!t.intro,this._fragment=function(t,e){var n,o,r,s,l,u,g,v,y,_,b,k,D,M,C,x,S,O,N,F,E,j,I,P,Y,T,A,H,R,W,q,L,B,V,J,X,K,z,U,G,Q,Z,$,tt,et,nt,ot,rt,at,it={},st={},ct={format:e.dateFormat},dt=new lt({root:t.root,store:t.store,data:ct});function ht(t){return t.dateChosen?mt:ft}var vt=ht(e),yt=vt(t,e),wt={format:e.dateFormat};void 0!==e.formattedSelected&&(wt.formattedSelected=e.formattedSelected,it.formattedSelected=!0),void 0!==e.dateChosen&&(wt.dateChosen=e.dateChosen,it.dateChosen=!0);var _t=new lt({root:t.root,store:t.store,slots:{default:f()},data:wt,_bind:function(e,n){var o={};!it.formattedSelected&&e.formattedSelected&&(o.formattedSelected=n.formattedSelected),!it.dateChosen&&e.dateChosen&&(o.dateChosen=n.dateChosen),t._set(o),it={}}});function bt(t){return t.exampleChosen?gt:pt}t.root._beforecreate.push(function(){_t._bind({formattedSelected:1,dateChosen:1},_t.get())});var kt=bt(e),Dt=kt(t,e),Mt={};void 0!==e.exampleFormatted&&(Mt.formattedSelected=e.exampleFormatted,st.formattedSelected=!0),void 0!==e.exampleChosen&&(Mt.dateChosen=e.exampleChosen,st.dateChosen=!0);var Ct=new lt({root:t.root,store:t.store,slots:{default:f()},data:Mt,_bind:function(e,n){var o={};!st.formattedSelected&&e.formattedSelected&&(o.exampleFormatted=n.formattedSelected),!st.dateChosen&&e.dateChosen&&(o.exampleChosen=n.dateChosen),t._set(o),st={}}});return t.root._beforecreate.push(function(){Ct._bind({formattedSelected:1,dateChosen:1},Ct.get())}),{c:function(){(n=m("h1")).textContent="SvelteCalendar",o=p("\n"),r=m("div"),(s=m("p")).textContent="A lightweight date picker written with Svelte. Here is an example:",l=p("\n\n\t"),dt._fragment.c(),u=p("\n\t\n\n\t"),(g=m("p")).textContent="This component can be used with or without the Svelte compiler.",v=p("\n\t"),y=m("ul"),(_=m("li")).textContent="Lightweight (~7KB)",b=p("\n\t\t"),(k=m("li")).textContent="IE11+ Compatible",D=p("\n\t\t"),(M=m("li")).textContent="Usable as a Svelte component",C=p("\n\t\t"),(x=m("li")).textContent="Usable with Vanilla JS / <Your Framework Here>",S=p("\n\t\t"),(O=m("li")).textContent="Can be compiled to a native web component / custom element",N=p("\n\t\t"),(F=m("li")).textContent="Mobile/thumb friendly",E=p("\n\t\t"),(j=m("li")).textContent="Keyboard navigation (arrows, pgup/pgdown, tab, esc)",I=p("\n\n\t"),(P=m("p")).textContent="Above you can see the default styling of this component.  This will be created for you by default when using the component but you can also pass in your own calendar 'trigger' either as a slot (custom element or svelte) or as a DOM node reference (use as vanilla JS).  Here are some examples:",Y=p("\n\n\t"),(T=m("h4")).textContent="With Svelte:",A=p("\n\t"),H=m("pre"),R=m("code"),W=p("<Datepicker format="),q=p(e.dateFormat),L=p(' bind:formattedSelected bind:dateChosen>\n  <button class="custom-button">\n    {#if dateChosen} Chosen: {formattedSelected} {:else} Pick a date {/if}\n  </button>\n</Datepicker>'),B=p("\n\n\t"),V=m("div"),J=m("button"),yt.c(),_t._fragment.c(),X=p("\n\n\t"),(K=m("h4")).textContent="Without Svelte HTML:",z=p("\n\t"),U=m("pre"),(G=m("code")).textContent='<div class="button-container">\n  <button id="test">My Custom Button</button>\n</div>',Q=p("\n\n\t"),(Z=m("h4")).textContent="Without Svelte JS:",$=p("\n\t"),tt=m("pre"),(et=m("code")).textContent="var trigger = document.getElementById('test');\nvar cal = new SvelteCalendar({ \n  target: document.querySelector('.button-container'),\n  anchor: trigger, \n  data: {\n    trigger: trigger\n  }\n});",nt=p("\n\n\t"),ot=m("div"),rt=m("button"),Dt.c(),Ct._fragment.c(),n.className="svelte-1j0sf4m",i(n,ut,0,0,0),i(s,ut,2,1,49),i(g,ut,7,1,232),i(_,ut,9,2,311),i(k,ut,10,2,341),i(M,ut,11,2,369),i(x,ut,12,2,409),i(O,ut,13,2,473),i(F,ut,14,2,543),i(j,ut,15,2,576),i(y,ut,8,1,304),i(P,ut,18,1,646),i(T,ut,20,1,948),R.className="html",i(R,ut,21,6,976),i(H,ut,21,1,971),J.className="custom-button svelte-1j0sf4m",i(J,ut,31,3,1366),V.className="text-center svelte-1j0sf4m",i(V,ut,29,1,1263),i(K,ut,37,1,1511),G.className="html",i(G,ut,38,6,1547),i(U,ut,38,1,1542),i(Z,ut,44,1,1692),et.className="js",i(et,ut,45,6,1726),i(tt,ut,45,1,1721),rt.id="test",i(rt,ut,58,3,2078),ot.className="text-center svelte-1j0sf4m",i(ot,ut,56,1,1964),r.className="container svelte-1j0sf4m",i(r,ut,1,0,24)},m:function(t,e){d(t,n,e),d(t,o,e),d(t,r,e),c(r,s),c(r,l),dt._mount(r,null),c(r,u),c(r,g),c(r,v),c(r,y),c(y,_),c(y,b),c(y,k),c(y,D),c(y,M),c(y,C),c(y,x),c(y,S),c(y,O),c(y,N),c(y,F),c(y,E),c(y,j),c(r,I),c(r,P),c(r,Y),c(r,T),c(r,A),c(r,H),c(H,R),c(R,W),c(R,q),c(R,L),c(r,B),c(r,V),c(_t._slotted.default,J),yt.m(J,null),_t._mount(V,null),c(r,X),c(r,K),c(r,z),c(r,U),c(U,G),c(r,Q),c(r,Z),c(r,$),c(r,tt),c(tt,et),c(r,nt),c(r,ot),c(Ct._slotted.default,rt),Dt.m(rt,null),Ct._mount(ot,null),at=!0},p:function(n,o){e=o;var r={};n.dateFormat&&(r.format=e.dateFormat),dt._set(r),at&&!n.dateFormat||w(q,e.dateFormat),vt===(vt=ht(e))&&yt?yt.p(n,e):(yt.d(1),(yt=vt(t,e)).c(),yt.m(J,null));var a={};n.dateFormat&&(a.format=e.dateFormat),!it.formattedSelected&&n.formattedSelected&&(a.formattedSelected=e.formattedSelected,it.formattedSelected=void 0!==e.formattedSelected),!it.dateChosen&&n.dateChosen&&(a.dateChosen=e.dateChosen,it.dateChosen=void 0!==e.dateChosen),_t._set(a),it={},kt===(kt=bt(e))&&Dt?Dt.p(n,e):(Dt.d(1),(Dt=kt(t,e)).c(),Dt.m(rt,null));var i={};!st.formattedSelected&&n.exampleFormatted&&(i.formattedSelected=e.exampleFormatted,st.formattedSelected=void 0!==e.exampleFormatted),!st.dateChosen&&n.exampleChosen&&(i.dateChosen=e.exampleChosen,st.dateChosen=void 0!==e.exampleChosen),Ct._set(i),st={}},i:function(t,e){at||this.m(t,e)},o:function(t){at&&(t=a(t,3),dt&&dt._fragment.o(t),_t&&_t._fragment.o(t),Ct&&Ct._fragment.o(t),at=!1)},d:function(t){t&&(h(n),h(o),h(r)),dt.destroy(),yt.d(),_t.destroy(),Dt.d(),Ct.destroy()}}}(this,this._state),this.root._oncreate.push(function(){(function(){hljs.initHighlightingOnLoad()}).call(e),e.fire("update",{changed:r({},e._state),current:e._state})}),t.target){if(t.hydrate)throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");this._fragment.c(),this._mount(t.target,t.anchor),D(this)}this._intro=!0}return o(vt.prototype,x),vt.prototype._checkReadOnly=function(t){if("end"in t&&!this._updatingReadonlyProperty)throw new Error("<App>: Cannot set read-only property 'end'")},vt.prototype._recompute=function(t,e){var n;t.start&&this._differs(e.end,e.end=(n=e.start,new Date(n.getTime()+62208e6)))&&(t.end=!0)},e(),new vt({target:document.body,data:{}})}();
//# sourceMappingURL=test.js.map
