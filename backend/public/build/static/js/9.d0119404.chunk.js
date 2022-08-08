(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[9],{54:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},56:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"h",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return d}));var n=a(1),l=m({title:"",society:"",place:"",date:""}),c={name:""},r=m({title:"",school:"",place:"",date:""}),s=m({name:"",text:""});Object(n.a)(Object(n.a)({},m({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function m(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var o={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},i={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},d={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},58:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(18),r=a(55),s=a(22);t.a=function(e){var t;return l.a.createElement("div",{className:null!==(t=e.className)&&void 0!==t?t:""},l.a.createElement(s.TableContainer,{className:"mb-8"},l.a.createElement(s.Table,null,l.a.createElement(s.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,t){return l.a.createElement(s.TableCell,{key:t},e.name)})),l.a.createElement(s.TableCell,null,"Actions"))),l.a.createElement(s.TableBody,null,e.data.map((function(t,a){return l.a.createElement(s.TableRow,{key:a},e.columns.map((function(a){var n,c,r,m,o=null!==(n=a.key)&&void 0!==n?n:a.name.toLowerCase(),u=null!==(c=a.subKey)&&void 0!==c?c:"",i=e.languages?t.fr[o]:t[o];("concat"===a.type&&"undefined"!==typeof a.keys&&(i=e.languages?t.fr[a.keys[0]]+" "+t.fr[a.keys[1]]:t[a.keys[0]]+" "+t[a.keys[1]]),u)&&(i=null!==(r=null===(m=i)||void 0===m?void 0:m[u])&&void 0!==r?r:i);return l.a.createElement(s.TableCell,{key:"".concat(a.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},i))))})),l.a.createElement(s.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/pf/educations/".concat(t._id)},l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(t._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(s.TableFooter,null,l.a.createElement(s.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}},79:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(1),c=a(13),r=a(0),s=a.n(r),m=a(23),o=a(54),u=a(58),i=a(22),d=a(55),b=a(37),E=a(29),f=a(56);t.default=function(){var e,t=Object(m.b)(),a=Object(m.c)((function(e){return e.emailTemplates.collection})),p=Object(m.c)((function(e){return e.config.dataLists})),g=Object(r.useState)(!1),v=Object(c.a)(g,2),h=v[0],j=v[1],N=Object(r.useState)(Object(l.a)(Object(l.a)({},f.c),{},{status:"first"})),O=Object(c.a)(N,2),y=O[0],C=O[1],k=Object(r.useState)(1),T=Object(c.a)(k,2),x=T[0],L=T[1],P=Object(r.useState)([]),S=Object(c.a)(P,2),w=S[0],I=S[1];Object(r.useEffect)((function(){t(b.a.getAll()),t(E.a.getSelectsLists())}),[t]);var R=a.items.length,F=function(e){C(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){a.items.length>0&&I(a.items.slice(10*(x-1),10*x))}),[x,a.items]),Object(r.useEffect)((function(){p.loaded&&C((function(e){return Object(l.a)(Object(l.a)({},e),{},{process:p.processesList[0]._id})}))}),[p]),s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,"Email Templates"),s.a.createElement("div",null,s.a.createElement(i.Button,{className:"mb-5",iconLeft:d.EditIcon,onClick:function(){return j(!h)}},h?"Fermer":"Ajouter"),h&&s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",null,s.a.createElement("div",{className:"px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},s.a.createElement(i.Label,null,s.a.createElement("span",null,"Name*"),s.a.createElement(i.Input,{name:"name",className:"mt-1",onChange:F})),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Subject*"),s.a.createElement(i.Input,{name:"subject",className:"mt-1",onChange:F})),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Header*"),s.a.createElement(i.Textarea,{name:"header",className:"mt-1",onChange:F})),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Content"),s.a.createElement(i.Textarea,{name:"content",className:"mt-1",onChange:F})),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Footer*"),s.a.createElement(i.Textarea,{name:"footer",className:"mt-1",onChange:F})),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Process"),s.a.createElement(i.Select,{className:"mt-1",value:y.process,name:"process",onChange:F},null===(e=p.processesList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:"process_"+e.name,value:e._id},e.name)})))),s.a.createElement(i.Label,null,s.a.createElement("span",null,"Status"),s.a.createElement(i.Select,{className:"mt-1",value:y.status,name:"status",onChange:F},s.a.createElement("option",{value:"first"},"PREMIER ENVOI"),s.a.createElement("option",{value:"relance"},"RELANCE"))))),s.a.createElement(i.Button,{className:"mb-5 self-end",iconLeft:d.EditIcon,onClick:function(){(function(e){var t=!0;for(var a in e)""===e[a]&&(t=!1);return t})(y)&&t(b.a.create(y))}},"Ajouter"))),a.fetching&&s.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&s.a.createElement(u.a,{className:"whiteSpaceNormal",columns:[{name:"Name"},{name:"Subject"},{name:"Header"},{name:"Content"},{name:"Footer"},{name:"Process",subKey:"name"},{name:"Status"}],data:w,pagination:{totalResults:R,resultsPerPage:10,onPageChangeTable:function(e){L(e)}},deleteItem:function(e){return function(){t(b.a.deleteItem(e))}}}))}}}]);
//# sourceMappingURL=9.d0119404.chunk.js.map