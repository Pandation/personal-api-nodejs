(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[5],{49:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},a)}},50:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children;return l.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},a)}},52:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return c})),t.d(a,"b",(function(){return r})),t.d(a,"e",(function(){return m})),t.d(a,"a",(function(){return i}));var n=t(1),l=s({jobTitle:"",society:"",place:"",date:""}),c={name:""},r=s({title:"",school:"",place:"",date:""}),m=s({name:"",text:""});Object(n.a)(Object(n.a)({},s({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function s(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}var i={name:"",address:"",email:"",contactGender:"",contactLastname:"",contactFirstname:""}},71:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(1),c=t(13),r=t(0),m=t.n(r),s=t(23),i=t(18),u=t(49),o=t(22),E=t(51),d=t(50),b=t(33),f=t(52);a.default=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.companies.collection})),t=Object(r.useState)(!1),p=Object(c.a)(t,2),C=p[0],h=p[1],g=Object(r.useState)(f.a),N=Object(c.a)(g,2),j=N[0],v=N[1],T=Object(r.useState)(1),O=Object(c.a)(T,2),x=O[0],y=O[1],k=Object(r.useState)([]),L=Object(c.a)(k,2),I=L[0],w=L[1];Object(r.useEffect)((function(){e(b.a.getAll())}),[e]);var F=a.items.length,A=function(e){v(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){a.items.length>0&&w(a.items.slice(10*(x-1),10*x))}),[x,a.items]),m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,"Companies"),m.a.createElement("div",null,m.a.createElement(o.Button,{className:"mb-5",iconLeft:E.EditIcon,onClick:function(){return h(!C)}},C?"Fermer":"Ajouter"),C&&m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",null,m.a.createElement("div",{className:"px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.a,null,"Fran\xe7ais"),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Name"),m.a.createElement(o.Input,{name:"name",className:"mt-1",onChange:A})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Address"),m.a.createElement(o.Input,{name:"address",className:"mt-1",onChange:A})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Email"),m.a.createElement(o.Input,{name:"email",className:"mt-1",type:"email",onChange:A})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Contact Gender"),m.a.createElement(o.Input,{name:"contactGender",className:"mt-1",onChange:A})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Contact Firstname"),m.a.createElement(o.Input,{name:"contactFirstname",className:"mt-1",onChange:A})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Contact Lastname"),m.a.createElement(o.Input,{name:"contactLastname",className:"mt-1",onChange:A})))),m.a.createElement(o.Button,{className:"mb-5 self-end",iconLeft:E.EditIcon,onClick:function(){(function(e){var a=!0;for(var t in e)""===e[t]&&(a=!1);return a})(j)&&e(b.a.create(j))}},"Ajouter"))),a.fetching&&m.a.createElement("p",null,"Chargement..."),a.loaded&&a.items.length>0&&m.a.createElement(o.TableContainer,{className:"mb-8"},m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Name"),m.a.createElement(o.TableCell,null,"Address"),m.a.createElement(o.TableCell,null,"Email"),m.a.createElement(o.TableCell,null,"Contact Gender"),m.a.createElement(o.TableCell,null,"Contact Name"),m.a.createElement(o.TableCell,null,"Actions"))),m.a.createElement(o.TableBody,null,I.map((function(a,t){return a?m.a.createElement(o.TableRow,{key:t},m.a.createElement(o.TableCell,null,m.a.createElement("div",{className:"flex items-center text-sm"},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},a.name)))),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},a.address)),m.a.createElement(o.TableCell,null,a.email),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},a.contactGender)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},a.contactFirstname+" "+a.contactLastname)),m.a.createElement(o.TableCell,null,m.a.createElement("div",{className:"flex items-center space-x-4"},m.a.createElement(i.b,{to:"ni/companies/".concat(a._id)},m.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Edit"},m.a.createElement(E.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),m.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:(n=a._id,function(){e(b.a.deleteItem(n))})},m.a.createElement(E.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"}))))):null;var n})))),m.a.createElement(o.TableFooter,null,m.a.createElement(o.Pagination,{totalResults:F,resultsPerPage:10,onChange:function(e){y(e)},label:"Table navigation"}))))}}}]);
//# sourceMappingURL=5.39efa3e3.chunk.js.map