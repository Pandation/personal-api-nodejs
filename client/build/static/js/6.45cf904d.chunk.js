(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[6],{49:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children;return l.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},50:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children;return l.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},t)}},51:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return i}));var n=a(1),l=s({jobTitle:"",society:"",place:"",date:""}),c={name:""},r=s({title:"",school:"",place:"",date:""}),m=s({name:"",text:""}),i=Object(n.a)(Object(n.a)({},s({name:"",stacks:[],date:""})),{},{file:void 0,url:""});function s(e){return{en:Object(n.a)({},e),fr:Object(n.a)({},e)}}},53:function(e,t,a){"use strict"},69:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(1),c=a(13),r=a(0),m=a.n(r),i=a(22),s=a(17),u=a(49),o=a(21),b=a(52),d=(a(53),a(50)),E=a(25),f=a(51);t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.skills.collection})),a=Object(r.useState)(!1),h=Object(c.a)(a,2),g=h[0],p=h[1],x=Object(r.useState)(f.e),j=Object(c.a)(x,2),v=j[0],O=j[1],N=Object(r.useState)(1),T=Object(c.a)(N,2),k=T[0],C=T[1],y=Object(r.useState)([]),w=Object(c.a)(y,2),I=w[0],S=w[1];Object(r.useEffect)((function(){e(E.a.getAll())}),[e]);var L=t.items.length,B=function(e){return function(t){return O(Object(l.a)(Object(l.a)({},v),{},Object(n.a)({},e,Object(l.a)(Object(l.a)({},v[e]),{},Object(n.a)({},t.target.name,t.target.value)))))}};return Object(r.useEffect)((function(){t.items.length>0&&S(t.items.slice(10*(k-1),10*k))}),[k,t.items]),m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,"Skills"),m.a.createElement("div",null,m.a.createElement(o.Button,{className:"mb-5",iconLeft:b.EditIcon,onClick:function(){return p(!g)}},g?"Fermer":"Ajouter"),g&&m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.a,null,"Fran\xe7ais"),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Nom"),m.a.createElement(o.Input,{name:"name",className:"mt-1",placeholder:"JavaScript",onChange:B("fr")})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Texte"),m.a.createElement(o.Textarea,{name:"text",className:"mt-1",rows:"3",placeholder:"...",onChange:B("fr")}))),m.a.createElement("div",{className:"flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.a,null,"English"),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Name"),m.a.createElement(o.Input,{name:"name",className:"mt-1",placeholder:"JavaScript",onChange:B("en")})),m.a.createElement(o.Label,null,m.a.createElement("span",null,"Text"),m.a.createElement(o.Textarea,{name:"text",className:"mt-1",rows:"3",placeholder:"...",onChange:B("en")})))),m.a.createElement(o.Button,{className:"mb-5 self-end",iconLeft:b.EditIcon,onClick:function(){for(var t in v)for(var a in t)if(""===t[a])return;e(E.a.create(v))}},"Ajouter"))),t.fetching&&m.a.createElement("p",null,"Chargement..."),t.loaded&&t.items.length>0&&m.a.createElement(o.TableContainer,{className:"mb-8"},m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Name"),m.a.createElement(o.TableCell,null,"Text"),m.a.createElement(o.TableCell,null,"Actions"))),m.a.createElement(o.TableBody,null,I.map((function(t,a){return m.a.createElement(o.TableRow,{key:a},m.a.createElement(o.TableCell,null,m.a.createElement("div",{className:"flex items-center text-sm"},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},t.fr.name)))),m.a.createElement(o.TableCell,null,t.fr.text),m.a.createElement(o.TableCell,null,m.a.createElement("div",{className:"flex items-center space-x-4"},m.a.createElement(s.b,{to:"/pf/skills/".concat(t._id)},m.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Edit"},m.a.createElement(b.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),m.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:(n=t._id,function(){e(E.a.deleteItem(n))})},m.a.createElement(b.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))));var n})))),m.a.createElement(o.TableFooter,null,m.a.createElement(o.Pagination,{totalResults:L,resultsPerPage:10,onChange:function(e){C(e)},label:"Table navigation"}))))}}}]);
//# sourceMappingURL=6.45cf904d.chunk.js.map