(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(5),c=e.n(o),s=e(6),r=e(1),a=(e(12),e(13),e(0)),i=Object(r.memo)((function(t){var n=t.goods;return Object(a.jsx)("ul",{className:"list",children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",className:"list__item",style:{color:"".concat(t.color)},children:t.name},t.id)}))})})),u=e(7);function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=Object(r.memo)((function(){var t=Object(r.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],c=function(t){return t.then(o)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Dynamic list of Goods"}),Object(a.jsxs)("div",{className:"App__buttons",children:[Object(a.jsx)("button",{type:"button","data-cy":"all-button",className:"button",onClick:function(){return c(l())},children:"Load all goods"}),Object(a.jsx)("button",{type:"button","data-cy":"first-five-button",className:"button",onClick:function(){return c(l().then((function(t){return Object(u.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(a.jsx)("button",{type:"button","data-cy":"red-button",className:"button",onClick:function(){return c(l().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"})]}),e.length?Object(a.jsx)(i,{goods:e}):Object(a.jsx)("p",{className:"text",children:"Press the button, please"})]})}));c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f0e8c502.chunk.js.map