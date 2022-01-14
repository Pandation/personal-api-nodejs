(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[2],[,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(6),c=n(5),a=n.n(c),o=n(11),i=n(3),s=function(e,t){return Object(i.b)("".concat(e,"/create"),Object(o.a)(a.a.mark((function e(){var n,r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:{},c.length>1&&void 0!==c[1]?c[1]:"",e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))))},u=function(e,t){return Object(i.b)("".concat(e,"/getAll"),Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))))},l=function(e,t){return Object(i.b)("".concat(e,"/delete"),function(){var e=Object(o.a)(a.a.mark((function e(n){var r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>1&&void 0!==c[1]?c[1]:"",e.next=3,fetch(t+"/"+n,{method:"DELETE"});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};t.a=function(e){var t,n="/api/portfolio/".concat(e),c=u(e,n),a=s(e,n),o=l(e,n),i=function(e){return function(t){t[e].fetching=!0}},d=function(e){return function(t,n){t[e].fetching=!1,t[e].loaded=!0,t[e].error=n.payload.data}};return{actions:{getAll:c,create:a,deleteItem:o},reducers:(t={},Object(r.a)(t,c.pending,i("collection")),Object(r.a)(t,c.fulfilled,(function(e,t){e.collection.fetching=!1,e.collection.loaded=!0,e.collection.items=t.payload.data})),Object(r.a)(t,c.rejected,d("collection")),Object(r.a)(t,a.pending,i("collection")),Object(r.a)(t,a.fulfilled,(function(e,t){e.collection.fetching=!1,e.collection.loaded=!0,e.collection.items=e.collection.items.concat(t.payload.data)})),Object(r.a)(t,a.rejected,d("collection")),Object(r.a)(t,o.pending,i("delete")),Object(r.a)(t,o.fulfilled,(function(e,t){var n=e.collection.items.filter((function(e){return!(e._id===t.payload._id)}));e.collection.items=n})),Object(r.a)(t,o.rejected,d("delete")),t)}}},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(13),c=n(1),a=n(0),o=n.n(a),i={LOGIN:"AUTH-LOGIN",LOGIN_SUCCESS:"AUTH-LOGIN_SUCCESS",TRY_LOGIN:"AUTH-TRY_LOGIN",LOGIN_FAILED:"AUTH-LOGIN_FAILED",GET_ADMIN:"AUTH-GET_ADMIN",LOGOUT:"AUTH-LOGOUT",FETCHING_LOGOUT:"AUTH-FETCHING_LOGOUT",LOADED_LOGOUT:"AUTH-LOADED_LOGOUT",FETCHING_TOKEN:"AUTH-FETCHING_TOKEN"},s=o.a.createContext({}),u={loaded:!1,fetching:!1,loggedIn:!1,user:{},error:{status:!1,message:""}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.LOGIN_FAILED:return Object(c.a)(Object(c.a)({},e),{},{loaded:!0,fetching:!1,loggedIn:!1,error:{status:"noToken"!==t.payload.errorType,message:t.payload.message}});case i.LOGIN_SUCCESS:return Object(c.a)(Object(c.a)({},e),{},{loaded:!0,fetching:!1,user:t.payload,loggedIn:!0});case i.TRY_LOGIN:case i.FETCHING_LOGOUT:return Object(c.a)(Object(c.a)({},e),{},{fetching:!0});case i.LOADED_LOGOUT:return Object(c.a)(Object(c.a)({},e),{},{loggedIn:!1,user:{}});case i.FETCHING_TOKEN:return Object(c.a)(Object(c.a)({},e),{},{loaded:!1})}};t.c=function(e){var t=e.children,n=o.a.useReducer(l,u),c=Object(r.a)(n,2),a=c[0],d=function e(t){return function(n){switch(n.type){case i.LOGOUT:t({type:i.FETCHING_LOGOUT}),fetch("/api/auth/logout",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){if(e.error)throw new Error(e.message);t({type:i.LOADED_LOGOUT})})).catch((function(e){return console.log(e)}));break;case i.LOGIN:fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n.payload)}).then((function(e){return e.json()})).then((function(n){if(n.error)throw new Error(n.message);e(t)({type:i.GET_ADMIN,payload:n})})).catch((function(e){return t({type:i.LOGIN_FAILED,payload:{errorType:"credentials",message:e.message}})}));break;case i.GET_ADMIN:t({type:i.TRY_LOGIN}),fetch("/api/auth/user",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){if(e.error)throw new Error(e.message);t({type:i.LOGIN_SUCCESS,payload:e})})).catch((function(e){return t({type:i.LOGIN_FAILED,payload:{errorType:"noToken"}})}));break;default:t(n)}}}(c[1]);return o.a.createElement(s.Provider,{value:{session:a,dispatch:d,logout:function(){d({type:i.LOGOUT})},login:function(e){d({type:i.LOGIN,payload:e})}}},t)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(13),c=n(0),a=n.n(c),o=a.a.createContext(),i=function(e){var t=e.children,n=Object(c.useState)(!1),i=Object(r.a)(n,2),s=i[0],u=i[1];function l(){u(!s)}function d(){u(!1)}var f=Object(c.useMemo)((function(){return{isSidebarOpen:s,toggleSidebar:l,closeSidebar:d}}),[s]);return a.a.createElement(o.Provider,{value:f},t)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),c=n(3),a=n(12),o=Object(a.a)("skills"),i=Object(c.c)({name:"skills",initialState:{delete:{fetching:!1,loaded:!1,error:""},collection:{items:[],error:"",fetching:!1,loaded:!1}},extraReducers:Object(r.a)({},o.reducers)}),s=Object(r.a)(Object(r.a)({},i.actions),o.actions);t.b=i.reducer},function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(5),c=n.n(r),a=n(11),o=n(1),i=n(3),s=n(12),u="projects",l=Object(s.a)(u),d="/api/portfolio/".concat(u),f=Object(i.c)({name:"projects",initialState:{delete:{fetching:!1,loaded:!1,error:""},collection:{items:[],error:"",fetching:!1,loaded:!1}},extraReducers:Object(o.a)({},l.reducers)}),b=Object(o.a)(Object(o.a)(Object(o.a)({},f.actions),l.actions),{},{upload:function(e,t){return Object(i.b)("".concat(e,"/upload"),function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,fetch(t,{method:"POST",body:n});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}(u,d)});t.b=f.reducer},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),c=n(3),a=n(12),o=Object(a.a)("learnings"),i=Object(c.c)({name:"learnings",initialState:{delete:{fetching:!1,loaded:!1,error:""},collection:{items:[],error:"",fetching:!1,loaded:!1}},extraReducers:Object(r.a)({},o.reducers)}),s=Object(r.a)(Object(r.a)({},i.actions),o.actions);t.b=i.reducer},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),c=n(3),a=n(12),o=Object(a.a)("educations"),i=Object(c.c)({name:"educations",initialState:{delete:{fetching:!1,loaded:!1,error:""},collection:{items:[],error:"",fetching:!1,loaded:!1}},extraReducers:Object(r.a)({},o.reducers)}),s=Object(r.a)(Object(r.a)({},i.actions),o.actions);t.b=i.reducer},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),c=n(3),a=n(12),o=Object(a.a)("experiences"),i=Object(c.c)({name:"experiences",initialState:{delete:{fetching:!1,loaded:!1,error:""},collection:{items:[],error:"",fetching:!1,loaded:!1}},extraReducers:Object(r.a)({},o.reducers)}),s=Object(r.a)(Object(r.a)({},i.actions),o.actions);t.b=i.reducer},function(e,t,n){"use strict";var r=n(0),c=n.n(r);t.a=function(){return c.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,c=n(6),a=n(5),o=n.n(a),i=n(11),s=n(3),u="/api/portfolio/experiences",l=Object(s.b)("experiences/getAll",function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u);case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());Object(s.b)("experiences/create",Object(i.a)(o.a.mark((function e(){var t,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))),Object(s.c)({name:"test",initialState:{error:null,collection:{items:[],fetching:!1,loaded:!1}},extraReducers:(r={},Object(c.a)(r,l.pending,(function(e){e.collection.fetching=!0})),Object(c.a)(r,l.fulfilled,(function(e,t){e.collection.fetching=!1,e.collection.loaded=!0,e.collection.items=t.payload.data})),Object(c.a)(r,l.rejected,(function(e){e.error="Vinie is a better developper. You failed"})),r)}).reducer},function(e,t,n){e.exports=n(48)},,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(15),o=n.n(a),i=(n(40),n(17)),s=n(4),u=n(22),l=n(3),d=n(31),f=n(25),b=n(26),p=n(27),O=n(28),h=(n(34),Object(l.a)({reducer:{experiences:d.b,learnings:p.b,skills:f.b,projects:b.b,educations:O.b}})),g=n(13);var j=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],o=Object(s.g)();return Object(r.useEffect)((function(){o.pathname.slice(1)?setTimeout((function(){return a("Navigated to ".concat(o.pathname.slice(1)," page."))}),500):a("")}),[o]),c.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)},m=n(23),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,75))})),E=Object(r.lazy)((function(){return n.e(19).then(n.bind(null,61))})),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,62))})),T=Object(r.lazy)((function(){return n.e(18).then(n.bind(null,63))}));var w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.c,null,c.a.createElement(u.a,{store:h},c.a.createElement(i.a,{basename:"/"},c.a.createElement(j,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/login",component:E}),c.a.createElement(s.b,{path:"/create-account",component:y}),c.a.createElement(s.b,{path:"/forgot-password",component:T}),c.a.createElement(s.b,{path:"/",component:v}))))))},L=n(24),G=n(32),I=n(21),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(L.b,null,c.a.createElement(r.Suspense,{fallback:c.a.createElement(G.a,null)},c.a.createElement(I.Windmill,{usePreferences:!0},c.a.createElement(w,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}],[[35,3,4]]]);
//# sourceMappingURL=main.bd708324.chunk.js.map