(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[9],{208:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(1),c=t(14),r=t(0),s=t.n(r),m=t(26),i=t(59),o=t(25),u=t(60),d=t(62),f=t(63),b=t(28),E=t(61);a.default=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.skills.collection})),t=Object(r.useState)(!1),g=Object(c.a)(t,2),h=g[0],p=g[1],v=Object(r.useState)(E.skillsSchema),x=Object(c.a)(v,2),y=x[0],j=x[1],k=Object(r.useState)(1),N=Object(c.a)(k,2),O=N[0],T=N[1],C=Object(r.useState)([]),S=Object(c.a)(C,2),w=S[0],I=S[1];Object(r.useEffect)((function(){e(b.a.getAll())}),[e]);var P=a.items.length,L=function(e){return function(a){return j(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e,Object(l.a)(Object(l.a)({},y[e]),{},Object(n.a)({},a.target.name,a.target.value)))))}};return Object(r.useEffect)((function(){a.items.length>0&&I(a.items.slice(10*(O-1),10*O))}),[O,a.items]),s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,null,"Skills"),s.a.createElement("div",null,s.a.createElement(o.Button,{className:"mb-5",iconLeft:u.EditIcon,onClick:function(){return p(!h)}},h?"Fermer":"Ajouter"),h&&s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},s.a.createElement(f.a,null,"Fran\xe7ais"),s.a.createElement(o.Label,null,s.a.createElement("span",null,"Nom"),s.a.createElement(o.Input,{name:"name",className:"mt-1",placeholder:"JavaScript",onChange:L("fr")})),s.a.createElement(o.Label,null,s.a.createElement("span",null,"Texte"),s.a.createElement(o.Textarea,{name:"text",className:"mt-1",rows:"3",placeholder:"...",onChange:L("fr")}))),s.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},s.a.createElement(f.a,null,"English"),s.a.createElement(o.Label,null,s.a.createElement("span",null,"Name"),s.a.createElement(o.Input,{name:"name",className:"mt-1",placeholder:"JavaScript",onChange:L("en")})),s.a.createElement(o.Label,null,s.a.createElement("span",null,"Text"),s.a.createElement(o.Textarea,{name:"text",className:"mt-1",rows:"3",placeholder:"...",onChange:L("en")})))),s.a.createElement(o.Button,{className:"mb-5 self-end",iconLeft:u.EditIcon,onClick:function(){for(var a in y)for(var t in a)if(""===a[t])return;e(b.a.create(y))}},"Ajouter"))),a.fetching&&s.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&s.a.createElement(d.a,{service:"pf",type:"skills",columns:[{name:"Name"},{name:"Text"}],data:w,pagination:{totalResults:P,resultsPerPage:10,onPageChangeTable:function(e){T(e)}},deleteItem:function(a){return function(){e(b.a.deleteItem(a))}},languages:!0}))}},59:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},61:function(e,a,t){"use strict";t.r(a),t.d(a,"experiencesSchema",(function(){return l})),t.d(a,"learningsSchema",(function(){return c})),t.d(a,"educationsSchema",(function(){return r})),t.d(a,"skillsSchema",(function(){return s})),t.d(a,"projectsSchema",(function(){return m})),t.d(a,"companiesSchema",(function(){return o})),t.d(a,"processesSchema",(function(){return u})),t.d(a,"sendingConfigsSchema",(function(){return d})),t.d(a,"emailTemplatesSchema",(function(){return f}));var n=t(1),l=i({title:"",society:"",place:"",date:""}),c={name:""},r=i({title:"",school:"",place:"",date:""}),s=i({name:"",text:""}),m=Object(n.a)(Object(n.a)({},i({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function i(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var o={name:"",address:"",email:"",contactGender:"0",contactLastname:"",contactFirstname:""},u={name:""},d={company:"",process:"",status:"",customText:"",lastMailDate:"",nextMailDate:"",enabled:!0},f={name:"",subject:"",header:"",content:"",footer:"",status:"first",process:""}},62:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(20),r=t(60),s=t(25);a.a=function(e){var a;return l.a.createElement("div",{className:null!==(a=e.className)&&void 0!==a?a:""},l.a.createElement(s.TableContainer,{className:"mb-8"},l.a.createElement(s.Table,null,l.a.createElement(s.TableHeader,null,l.a.createElement("tr",null,e.columns.map((function(e,a){return l.a.createElement(s.TableCell,{key:a},e.name)})),l.a.createElement(s.TableCell,null,"Actions"))),l.a.createElement(s.TableBody,null,e.data.map((function(a,t){return l.a.createElement(s.TableRow,{key:t},e.columns.map((function(t){var n,c,r,m,i=null!==(n=t.key)&&void 0!==n?n:t.name.toLowerCase(),o=null!==(c=t.subKey)&&void 0!==c?c:"",u=e.languages?a.fr[i]:a[i];("concat"===t.type&&"undefined"!==typeof t.keys&&(u=e.languages?a.fr[t.keys[0]]+" "+a.fr[t.keys[1]]:a[t.keys[0]]+" "+a[t.keys[1]]),o)&&(u=null!==(r=null===(m=u)||void 0===m?void 0:m[o])&&void 0!==r?r:u);return l.a.createElement(s.TableCell,{key:"".concat(t.name,"_th")},l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},u))))})),l.a.createElement(s.TableCell,null,l.a.createElement("div",{className:"flex items-center space-x-4"},l.a.createElement(c.b,{to:"/".concat(e.service,"/").concat(e.type,"/").concat(a._id)},l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Edit"},l.a.createElement(r.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement(s.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:e.deleteItem(a._id)},l.a.createElement(r.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),l.a.createElement(s.TableFooter,null,l.a.createElement(s.Pagination,{totalResults:e.pagination.totalResults,resultsPerPage:e.pagination.resultsPerPage,onChange:e.pagination.onPageChangeTable,label:"Table navigation"}))))}},63:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},a)}}}]);
//# sourceMappingURL=9.395ae79b.chunk.js.map