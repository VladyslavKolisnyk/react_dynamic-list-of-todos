(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),o=c(1),i=(c(13),c(14),c(4)),d=c.n(i),r=c(0),j=function(e){var t=e.todo,c=e.todoInfo,s=e.selectTodo;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t.id}),Object(r.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()({"far fa-eye":(null===c||void 0===c?void 0:c.id)!==t.id,"far fa-eye-slash":(null===c||void 0===c?void 0:c.id)===t.id})})})})})]})},u=function(e){var t=e.todos,c=e.todoInfo,s=e.selectTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(j,{todo:e,todoInfo:c,selectTodo:s},e.id)}))})]})},b=function(e){var t=e.query,c=e.queryFilter,s=e.status,a=e.statusFilter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target.value;a(t)},value:s,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){c(e.target.value)},value:t}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.loader,c=e.todo,s=e.user,a=e.closeModal;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),t&&Object(r.jsx)(h,{}),!t&&s&&Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:d()({"has-text-danger":!c.completed,"has-text-success":c.completed}),children:c.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x;!function(e){e.All="all",e.Active="active",e.Completed="completed"}(x||(x={}));var f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),i=Object(l.a)(a,2),d=i[0],j=i[1],f=Object(o.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)(x.All),g=Object(l.a)(y,2),k=g[0],C=g[1],w=Object(o.useState)(null),S=Object(l.a)(w,2),T=S[0],I=S[1],A=Object(o.useState)(null),F=Object(l.a)(A,2),_=F[0],q=F[1];Object(o.useEffect)((function(){j(!0),O("/todos").then((function(e){s(e)})).catch((function(){return s([])})).finally((function(){return j(!1)}))}),[]),Object(o.useEffect)((function(){var e;T&&(j(!0),(e=T.userId,O("/users/".concat(e))).then(q).catch((function(e){console.warn(e)})).finally((function(){return j(!1)})))}),[T]);var E=Object(o.useMemo)((function(){var e=Object(n.a)(c);switch(k){case x.Active:e=e.filter((function(e){return!e.completed}));break;case x.Completed:e=e.filter((function(e){return e.completed}))}return v.trim().length>0&&(e=e.filter((function(e){return e.title.toLowerCase().includes(v.toLowerCase())}))),e}),[c,v,k]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:v,queryFilter:N,status:k,statusFilter:C})}),Object(r.jsx)("div",{className:"block",children:d&&!T?Object(r.jsx)(h,{}):Object(r.jsx)(u,{todos:E,todoInfo:T,selectTodo:I})})]})})}),T&&Object(r.jsx)(m,{loader:d,todo:T,user:_,closeModal:I})]})};a.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b9697666.chunk.js.map