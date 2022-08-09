(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[12],{216:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(1),c=t(14),r=t(0),s=t.n(r),m=t(26),o=t(59),i=t(62),u=t(25),d=t(60),E=t(35),b=t(27),f=t(61);a.default=function(){var e,a=Object(m.b)(),t=Object(m.c)((function(e){return e.emailTemplates.collection})),p=Object(m.c)((function(e){return e.config.dataLists})),g=Object(r.useState)(!1),h=Object(c.a)(g,2),v=h[0],j=h[1],y=Object(r.useState)(Object(l.a)(Object(l.a)({},f.emailTemplatesSchema),{},{status:"first"})),N=Object(c.a)(y,2),O=N[0],C=N[1],T=Object(r.useState)(1),S=Object(c.a)(T,2),k=S[0],x=S[1],L=Object(r.useState)([]),P=Object(c.a)(L,2),w=P[0],I=P[1];Object(r.useEffect)((function(){a(E.a.getAll()),a(b.a.getSelectsLists())}),[a]);var R=t.items.length,F=function(e){C(Object(l.a)(Object(l.a)({},O),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){t.items.length>0&&I(t.items.slice(10*(k-1),10*k))}),[k,t.items]),Object(r.useEffect)((function(){p.loaded&&C((function(e){return Object(l.a)(Object(l.a)({},e),{},{process:p.processesList[0]._id})}))}),[p]),s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,"Email Templates"),s.a.createElement("div",null,s.a.createElement(u.Button,{className:"mb-5",iconLeft:d.EditIcon,onClick:function(){return j(!v)}},v?"Fermer":"Ajouter"),v&&s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",null,s.a.createElement("div",{className:"px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},s.a.createElement(u.Label,null,s.a.createElement("span",null,"Name*"),s.a.createElement(u.Input,{name:"name",className:"mt-1",onChange:F})),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Subject*"),s.a.createElement(u.Input,{name:"subject",className:"mt-1",onChange:F})),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Header*"),s.a.createElement(u.Textarea,{name:"header",className:"mt-1",onChange:F})),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Content"),s.a.createElement(u.Textarea,{name:"content",className:"mt-1",onChange:F})),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Footer*"),s.a.createElement(u.Textarea,{name:"footer",className:"mt-1",onChange:F})),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Process"),s.a.createElement(u.Select,{className:"mt-1",value:O.process,name:"process",onChange:F},null===(e=p.processesList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:"process_"+e.name,value:e._id},e.name)})))),s.a.createElement(u.Label,null,s.a.createElement("span",null,"Status"),s.a.createElement(u.Select,{className:"mt-1",value:O.status,name:"status",onChange:F},s.a.createElement("option",{value:"first"},"PREMIER ENVOI"),s.a.createElement("option",{value:"relance"},"RELANCE"))))),s.a.createElement(u.Button,{className:"mb-5 self-end",iconLeft:d.EditIcon,onClick:function(){(function(e){var a=!0;for(var t in e)""===e[t]&&(a=!1);return a})(O)&&a(E.a.create(O))}},"Ajouter"))),t.fetching&&s.a.createElement("p",null,"Chargement..."),t.loaded&&t.items.length>0&&s.a.createElement(i.a,{service:"ni",type:"emailTemplates",className:"whiteSpaceNormal",columns:[{name:"Name"},{name:"Subject"},{name:"Header"},{name:"Content"},{name:"Footer"},{name:"Process",subKey:"name"},{name:"Status"}],data:w,pagination:{totalResults:R,resultsPerPage:10,onPageChangeTable:function(e){x(e)}},deleteItem:function(e){return function(){a(E.a.deleteItem(e))}}}))}},59:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},61:function(e,a,t){"use strict";t.r(a),t.d(a,"experiencesSchema",(function(){return l})),t.d(a,"learningsSchema",(function(){return c})),t.d(a,"educationsSchema",(function(){return r})),t.d(a,"skillsSchema",(function(){return s})),t.d(a,"projectsSchema",(function(){return m})),t.d(a,"companiesSchema",(function(){return i})),t.d(a,"processesSchema",(function(){return u})),t.d(a,"sendingConfigsSchema",(function(){return d})),t.d(a,"emailTemplatesSchema",(function(){return E}));var n=t(1),l=o({title:"",society:"",place:"",date:""}),c={name:""},r=o({title:"",school:"",place:"",date:""}),s=o({name:"",text:""}),m=Object(n.a)(Object(n.a)({},o({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function o(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var i={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},d={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},E={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},62:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(20),r=t(60),s=t(25);a.a=function(e){var a;return l.a.createElement("div",{className:null!==(a=e.className)&&void 0!==a?a:""},l.a.createElement(s.TableContainer,{className:"mb-8"},l.a.createElement(s.Table,null,l.a.createElement(s.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,a){return l.a.createElement(s.TableCell,{key:a},e.name)})),l.a.createElement(s.TableCell,null,"Actions"))),l.a.createElement(s.TableBody,null,e.data.map((function(a,t){return l.a.createElement(s.TableRow,{key:t},e.columns.map((function(t){var n,c,r,m,o=null!==(n=t.key)&&void 0!==n?n:t.name.toLowerCase(),i=null!==(c=t.subKey)&&void 0!==c?c:"",u=e.languages?a.fr[o]:a[o];("concat"===t.type&&"undefined"!==typeof t.keys&&(u=e.languages?a.fr[t.keys[0]]+" "+a.fr[t.keys[1]]:a[t.keys[0]]+" "+a[t.keys[1]]),i)&&(u=null!==(r=null===(m=u)||void 0===m?void 0:m[i])&&void 0!==r?r:u);return l.a.createElement(s.TableCell,{key:"".concat(t.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},u))))})),l.a.createElement(s.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/".concat(e.service,"/").concat(e.type,"/").concat(a._id)},l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(a._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(s.TableFooter,null,l.a.createElement(s.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}}}]);
//# sourceMappingURL=12.e8500ab9.chunk.js.map