(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),a=n(13),i=n.n(a),s=(n(34),n(22)),l=n(23),u=n(28),d=n(27),j=n(4),b=n(11);n(35);function O(){return Object(c.jsx)("div",{className:"navbar-container",children:Object(c.jsxs)("div",{className:"navbar-container container",children:[Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("div",{className:"nav-logo",children:Object(c.jsx)("span",{children:"Designx"})})}),Object(c.jsx)("div",{className:"nav-menu",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/contact",children:"Contacts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/charts",children:"Charts"})})]})})]})})}n(40);function h(){return Object(c.jsx)("div",{className:"hp-container"})}n(41),n(42),n(43);var f=n(3),v=function(e){return Object(c.jsx)(f.a,Object(j.a)({},e))},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){this.props.user;return Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O,{}),Object(c.jsx)("main",{children:Object(c.jsx)(f.c,{children:Object(c.jsx)(v,{path:"/",component:h})})})]})})}}]),n}(o.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))},w=n(26),m=n(9),x=n(25),C=n(15),T={user:{}};var E={contacts:[]};var _=Object(m.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(j.a)(Object(j.a)({},e),{},{user:t.user});case"LOAD_CONTACTS":return Object(j.a)(Object(j.a)({},e),{},{contacts:t.contacts});case"ADD_MOVE":return Object(j.a)(Object(j.a)({},e),{},{user:{moves:[].concat(Object(C.a)(e.user.moves),[t.move])}});default:return e}},contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(j.a)(Object(j.a)({},e),{},{contacts:t.contacts});case"SET_CURR_EDIT_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{currEditContact:t.contact});case"ADD_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{contacts:[].concat(Object(C.a)(e.contacts),[t.contact])});case"REMOVE_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"UPDATE_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id?t.contact:e}))});default:return e}}}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,A=Object(m.e)(_,N(Object(m.a)(x.a))),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w.a,{store:A,children:Object(c.jsx)(g,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-design",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-design","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}(),p(),window.addEventListener("beforeinstallprompt",(function(e){console.log("beforeinstallprompt event has fired"),e.prompt()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.7b380b67.chunk.js.map