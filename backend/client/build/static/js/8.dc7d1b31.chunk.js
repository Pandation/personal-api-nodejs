(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[8],{210:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(1),c=t(14),r=t(0),m=t.n(r),s=t(26),i=t(59),o=t(62),u=t(25),d=t(60),p=t(63),E=t(30),b=t(61);a.default=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.experiences.collection})),t=Object(r.useState)(!1),f=Object(c.a)(t,2),h=f[0],g=f[1],v=Object(r.useState)(b.experiencesSchema),y=Object(c.a)(v,2),x=y[0],j=y[1],N=Object(r.useState)(1),k=Object(c.a)(N,2),S=k[0],C=k[1],O=Object(r.useState)([]),T=Object(c.a)(O,2),I=T[0],L=T[1];Object(r.useEffect)((function(){e(E.a.getAll())}),[e]);var w=a.items.length,P=function(e){return function(a){return j(Object(l.a)(Object(l.a)({},x),{},Object(n.a)({},e,Object(l.a)(Object(l.a)({},x[e]),{},Object(n.a)({},a.target.name,a.target.value)))))}};return Object(r.useEffect)((function(){a.items.length>0&&L(a.items.slice(10*(S-1),10*S))}),[S,a.items]),m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,"Experiences"),m.a.createElement("div",null,m.a.createElement(u.Button,{className:"mb-5",iconLeft:d.EditIcon,onClick:function(){return g(!h)}},h?"Fermer":"Ajouter"),h&&m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(p.a,null,"Fran\xe7ais"),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Exp\xe9rience"),m.a.createElement(u.Input,{name:"title",className:"mt-1",placeholder:"D\xe9veloppeur FullStack",onChange:P("fr")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Soci\xe9t\xe9"),m.a.createElement(u.Input,{name:"society",className:"mt-1",placeholder:"SuperStartup",onChange:P("fr")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Lieu"),m.a.createElement(u.Input,{name:"place",className:"mt-1",placeholder:"Montpellier 34",onChange:P("fr")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Date"),m.a.createElement(u.Input,{name:"date",className:"mt-1",placeholder:"Novembre 2021",onChange:P("fr")}))),m.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(p.a,null,"English"),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Experience"),m.a.createElement(u.Input,{name:"title",className:"mt-1",placeholder:"FullStack Developer",onChange:P("en")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Society"),m.a.createElement(u.Input,{name:"society",className:"mt-1",placeholder:"SuperStartup",onChange:P("en")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Place"),m.a.createElement(u.Input,{name:"place",className:"mt-1",placeholder:"Montpellier 34",onChange:P("en")})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Date"),m.a.createElement(u.Input,{name:"date",className:"mt-1",placeholder:"November 2021",onChange:P("en")})))),m.a.createElement(u.Button,{className:"mb-5 self-end",iconLeft:d.EditIcon,onClick:function(){for(var a in x)for(var t in a)if(""===a[t])return;e(E.a.create(x))}},"Ajouter"))),a.fetching&&m.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&m.a.createElement(o.a,{service:"pf",type:"experiences",columns:[{name:"Experience",key:"title"},{name:"Society"},{name:"Place"},{name:"Date"}],data:I,pagination:{totalResults:w,resultsPerPage:10,onPageChangeTable:function(e){C(e)}},deleteItem:function(a){return function(){e(E.a.deleteItem(a))}},languages:!0}))}},59:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},61:function(e,a,t){"use strict";t.r(a),t.d(a,"experiencesSchema",(function(){return l})),t.d(a,"learningsSchema",(function(){return c})),t.d(a,"educationsSchema",(function(){return r})),t.d(a,"skillsSchema",(function(){return m})),t.d(a,"projectsSchema",(function(){return s})),t.d(a,"companiesSchema",(function(){return o})),t.d(a,"processesSchema",(function(){return u})),t.d(a,"sendingConfigsSchema",(function(){return d})),t.d(a,"emailTemplatesSchema",(function(){return p}));var n=t(1),l=i({title:"",society:"",place:"",date:""}),c={name:""},r=i({title:"",school:"",place:"",date:""}),m=i({name:"",text:""}),s=Object(n.a)(Object(n.a)({},i({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function i(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var o={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},d={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},p={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},62:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(20),r=t(60),m=t(25);a.a=function(e){var a;return l.a.createElement("div",{className:null!==(a=e.className)&&void 0!==a?a:""},l.a.createElement(m.TableContainer,{className:"mb-8"},l.a.createElement(m.Table,null,l.a.createElement(m.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,a){return l.a.createElement(m.TableCell,{key:a},e.name)})),l.a.createElement(m.TableCell,null,"Actions"))),l.a.createElement(m.TableBody,null,e.data.map((function(a,t){return l.a.createElement(m.TableRow,{key:t},e.columns.map((function(t){var n,c,r,s,i=null!==(n=t.key)&&void 0!==n?n:t.name.toLowerCase(),o=null!==(c=t.subKey)&&void 0!==c?c:"",u=e.languages?a.fr[i]:a[i];("concat"===t.type&&"undefined"!==typeof t.keys&&(u=e.languages?a.fr[t.keys[0]]+" "+a.fr[t.keys[1]]:a[t.keys[0]]+" "+a[t.keys[1]]),o)&&(u=null!==(r=null===(s=u)||void 0===s?void 0:s[o])&&void 0!==r?r:u);return l.a.createElement(m.TableCell,{key:"".concat(t.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},u))))})),l.a.createElement(m.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/".concat(e.service,"/").concat(e.type,"/").concat(a._id)},l.a.createElement(m.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(m.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(a._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(m.TableFooter,null,l.a.createElement(m.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}},63:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},a)}}}]);
//# sourceMappingURL=8.dc7d1b31.chunk.js.map