(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[19],{54:function(e,a,t){e.exports=t.p+"static/media/login-office.72742c2e.jpeg"},55:function(e,a,t){e.exports=t.p+"static/media/login-office-dark.cb4a995f.jpeg"},61:function(e,a,t){"use strict";t.r(a);var l=t(6),n=t(1),r=t(13),s=t(0),c=t.n(s),m=t(4),o=t(17),i=t(54),d=t.n(i),u=t(55),f=t.n(u),p=t(21),b=t(23);a.default=function(){var e=Object(s.useState)({username:"",password:""}),a=Object(r.a)(e,2),t=a[0],i=a[1],u=c.a.useContext(b.b),h=u.session,g=u.login,E=u.dispatch;Object(s.useEffect)((function(){E({type:b.a.GET_ADMIN})}),[]);var x=function(e){i(Object(n.a)(Object(n.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))};return h.loggedIn?c.a.createElement(m.a,{to:"/"}):c.a.createElement("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900"},c.a.createElement("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"},c.a.createElement("div",{className:"flex flex-col overflow-y-auto md:flex-row"},c.a.createElement("div",{className:"h-32 md:h-auto md:w-1/2"},c.a.createElement("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:d.a,alt:"Office"}),c.a.createElement("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:f.a,alt:"Office"})),c.a.createElement("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},c.a.createElement("div",{className:"w-full"},c.a.createElement("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"},"Login"),c.a.createElement(p.Label,null,c.a.createElement("span",null,"Utilisateur"),c.a.createElement(p.Input,{className:"mt-1",type:"text",name:"username",placeholder:"Nom d'utilisateur",value:t.username,onChange:x})),c.a.createElement(p.Label,{className:"mt-4"},c.a.createElement("span",null,"Mot de passe"),c.a.createElement(p.Input,{className:"mt-1",type:"password",name:"password",value:t.password,placeholder:"***************",onChange:x})),c.a.createElement(p.Button,{className:"mt-4",block:!0,onClick:function(){return g(t)}},"Se Connecter"),c.a.createElement("hr",{className:"my-8"}),c.a.createElement("p",{className:"mt-4"},c.a.createElement(o.b,{className:"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline",to:"/forgot-password"},"Mot de passe oubli\xe9?")))))))}}}]);
//# sourceMappingURL=19.71821c61.chunk.js.map