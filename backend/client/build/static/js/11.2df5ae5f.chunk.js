(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[11],{214:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(1),c=t(14),r=t(0),m=t.n(r),s=t(26),o=t(59),i=t(62),u=t(25),d=t(60),E=t(32),b=t(61);a.default=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.companies.collection})),t=Object(r.useState)(!1),f=Object(c.a)(t,2),p=f[0],g=f[1],h=Object(r.useState)(b.companiesSchema),v=Object(c.a)(h,2),y=v[0],C=v[1],j=Object(r.useState)(1),k=Object(c.a)(j,2),N=k[0],O=k[1],T=Object(r.useState)([]),x=Object(c.a)(T,2),S=x[0],L=x[1];Object(r.useEffect)((function(){e(E.a.getAll())}),[e]);var I=a.items.length,w=function(e){C(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){a.items.length>0&&L(a.items.slice(10*(N-1),10*N))}),[N,a.items]),m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,null,"Companies"),m.a.createElement("div",null,m.a.createElement(u.Button,{className:"mb-5",iconLeft:d.EditIcon,onClick:function(){return g(!p)}},p?"Fermer":"Ajouter"),p&&m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",null,m.a.createElement("div",{className:"px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(u.Label,null,m.a.createElement("span",null,"Name"),m.a.createElement(u.Input,{name:"name",className:"mt-1",onChange:w})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Address"),m.a.createElement(u.Input,{name:"address",className:"mt-1",onChange:w})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Email"),m.a.createElement(u.Input,{name:"email",className:"mt-1",type:"email",onChange:w})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Contact Gender"),m.a.createElement(u.Select,{className:"mt-1",name:"contactGender",onChange:w},["none","female","male"].map((function(e,a){return m.a.createElement("option",{key:"gender_"+e,value:a},e.toUpperCase())})))),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Contact Firstname"),m.a.createElement(u.Input,{name:"contactFirstname",className:"mt-1",onChange:w})),m.a.createElement(u.Label,null,m.a.createElement("span",null,"Contact Lastname"),m.a.createElement(u.Input,{name:"contactLastname",className:"mt-1",onChange:w})))),m.a.createElement(u.Button,{className:"mb-5 self-end",iconLeft:d.EditIcon,onClick:function(){e(E.a.create(y))}},"Ajouter"))),a.fetching&&m.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&m.a.createElement(i.a,{service:"ni",type:"companies",columns:[{name:"Name"},{name:"Address"},{name:"Email"},{name:"Contact Gender",key:"contactGender"},{name:"Contact Name",type:"concat",keys:["contactFirstname","contactLastname"]}],data:S,pagination:{totalResults:I,resultsPerPage:10,onPageChangeTable:function(e){O(e)}},deleteItem:function(a){return function(){e(E.a.deleteItem(a))}}}))}},59:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},61:function(e,a,t){"use strict";t.r(a),t.d(a,"experiencesSchema",(function(){return l})),t.d(a,"learningsSchema",(function(){return c})),t.d(a,"educationsSchema",(function(){return r})),t.d(a,"skillsSchema",(function(){return m})),t.d(a,"projectsSchema",(function(){return s})),t.d(a,"companiesSchema",(function(){return i})),t.d(a,"processesSchema",(function(){return u})),t.d(a,"sendingConfigsSchema",(function(){return d})),t.d(a,"emailTemplatesSchema",(function(){return E}));var n=t(1),l=o({title:"",society:"",place:"",date:""}),c={name:""},r=o({title:"",school:"",place:"",date:""}),m=o({name:"",text:""}),s=Object(n.a)(Object(n.a)({},o({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function o(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var i={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},d={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},E={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},62:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(20),r=t(60),m=t(25);a.a=function(e){var a;return l.a.createElement("div",{className:null!==(a=e.className)&&void 0!==a?a:""},l.a.createElement(m.TableContainer,{className:"mb-8"},l.a.createElement(m.Table,null,l.a.createElement(m.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,a){return l.a.createElement(m.TableCell,{key:a},e.name)})),l.a.createElement(m.TableCell,null,"Actions"))),l.a.createElement(m.TableBody,null,e.data.map((function(a,t){return l.a.createElement(m.TableRow,{key:t},e.columns.map((function(t){var n,c,r,s,o=null!==(n=t.key)&&void 0!==n?n:t.name.toLowerCase(),i=null!==(c=t.subKey)&&void 0!==c?c:"",u=e.languages?a.fr[o]:a[o];("concat"===t.type&&"undefined"!==typeof t.keys&&(u=e.languages?a.fr[t.keys[0]]+" "+a.fr[t.keys[1]]:a[t.keys[0]]+" "+a[t.keys[1]]),i)&&(u=null!==(r=null===(s=u)||void 0===s?void 0:s[i])&&void 0!==r?r:u);return l.a.createElement(m.TableCell,{key:"".concat(t.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},u))))})),l.a.createElement(m.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/".concat(e.service,"/").concat(e.type,"/").concat(a._id)},l.a.createElement(m.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(m.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(a._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(m.TableFooter,null,l.a.createElement(m.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}}}]);
//# sourceMappingURL=11.2df5ae5f.chunk.js.map