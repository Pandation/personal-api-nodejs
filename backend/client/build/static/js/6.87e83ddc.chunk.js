(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[6],{54:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},56:function(e,a,t){"use strict";t.d(a,"d",(function(){return l})),t.d(a,"e",(function(){return c})),t.d(a,"b",(function(){return r})),t.d(a,"h",(function(){return o})),t.d(a,"a",(function(){return s})),t.d(a,"f",(function(){return u})),t.d(a,"g",(function(){return i})),t.d(a,"c",(function(){return d}));var n=t(1),l=m({title:"",society:"",place:"",date:""}),c={name:""},r=m({title:"",school:"",place:"",date:""}),o=m({name:"",text:""});Object(n.a)(Object(n.a)({},m({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function m(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var s={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},i={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},d={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},57:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},a)}},58:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(18),r=t(55),o=t(22);a.a=function(e){var a;return l.a.createElement("div",{className:null!==(a=e.className)&&void 0!==a?a:""},l.a.createElement(o.TableContainer,{className:"mb-8"},l.a.createElement(o.Table,null,l.a.createElement(o.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,a){return l.a.createElement(o.TableCell,{key:a},e.name)})),l.a.createElement(o.TableCell,null,"Actions"))),l.a.createElement(o.TableBody,null,e.data.map((function(a,t){return l.a.createElement(o.TableRow,{key:t},e.columns.map((function(t){var n,c,r,m,s=null!==(n=t.key)&&void 0!==n?n:t.name.toLowerCase(),u=null!==(c=t.subKey)&&void 0!==c?c:"",i=e.languages?a.fr[s]:a[s];("concat"===t.type&&"undefined"!==typeof t.keys&&(i=e.languages?a.fr[t.keys[0]]+" "+a.fr[t.keys[1]]:a[t.keys[0]]+" "+a[t.keys[1]]),u)&&(i=null!==(r=null===(m=i)||void 0===m?void 0:m[u])&&void 0!==r?r:i);return l.a.createElement(o.TableCell,{key:"".concat(t.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},i))))})),l.a.createElement(o.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/pf/educations/".concat(a._id)},l.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(a._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(o.TableFooter,null,l.a.createElement(o.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}},76:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t(1),c=t(13),r=t(0),o=t.n(r),m=t(23),s=t(54),u=t(22),i=t(58),d=t(55),b=t(57),E=t(28),f=t(56);a.default=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.educations.collection})),t=Object(r.useState)(!1),p=Object(c.a)(t,2),h=p[0],g=p[1],v=Object(r.useState)(f.b),y=Object(c.a)(v,2),N=y[0],j=y[1],O=Object(r.useState)(1),k=Object(c.a)(O,2),x=k[0],C=k[1],T=Object(r.useState)([]),I=Object(c.a)(T,2),L=I[0],w=I[1];Object(r.useEffect)((function(){e(E.a.getAll())}),[e]);var P=a.items.length,S=function(e){return function(a){return j(Object(l.a)(Object(l.a)({},N),{},Object(n.a)({},e,Object(l.a)(Object(l.a)({},N[e]),{},Object(n.a)({},a.target.name,a.target.value)))))}};return Object(r.useEffect)((function(){a.items.length>0&&w(a.items.slice(10*(x-1),10*x))}),[x,a.items]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,"Educations"),o.a.createElement("div",null,o.a.createElement(u.Button,{className:"mb-5",iconLeft:d.EditIcon,onClick:function(){return g(!h)}},h?"Fermer":"Ajouter"),h&&o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},o.a.createElement(b.a,null,"Fran\xe7ais"),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Title"),o.a.createElement(u.Input,{name:"title",className:"mt-1",placeholder:"D\xe9veloppeur Web et Web Mobile",onChange:S("fr")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"School"),o.a.createElement(u.Input,{name:"school",className:"mt-1",placeholder:"Super School",onChange:S("fr")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Lieu"),o.a.createElement(u.Input,{name:"place",className:"mt-1",placeholder:"Montpellier 34",onChange:S("fr")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Date"),o.a.createElement(u.Input,{name:"date",className:"mt-1",placeholder:"Novembre 2021",onChange:S("fr")}))),o.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},o.a.createElement(b.a,null,"English"),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Title"),o.a.createElement(u.Input,{name:"title",className:"mt-1",placeholder:"D\xe9veloppeur Web et Web Mobile",onChange:S("en")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"School"),o.a.createElement(u.Input,{name:"school",className:"mt-1",placeholder:"Super School",onChange:S("en")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Place"),o.a.createElement(u.Input,{name:"place",className:"mt-1",placeholder:"Montpellier 34",onChange:S("en")})),o.a.createElement(u.Label,null,o.a.createElement("span",null,"Date"),o.a.createElement(u.Input,{name:"date",className:"mt-1",placeholder:"November 2021",onChange:S("en")})))),o.a.createElement(u.Button,{className:"mb-5 self-end",iconLeft:d.EditIcon,onClick:function(){for(var a in N)for(var t in a)if(""===a[t])return;e(E.a.create(N))}},"Ajouter"))),a.fetching&&o.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&o.a.createElement(i.a,{columns:[{name:"Title"},{name:"School"},{name:"Place"},{name:"Date"}],data:L,pagination:{totalResults:P,resultsPerPage:10,onPageChangeTable:function(e){C(e)}},deleteItem:function(a){return function(){e(E.a.deleteItem(a))}},languages:!0}))}}}]);
//# sourceMappingURL=6.87e83ddc.chunk.js.map