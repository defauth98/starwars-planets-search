(this["webpackJsonpstarwars-planets-filter"]=this["webpackJsonpstarwars-planets-filter"]||[]).push([[0],{25:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),u=a.n(l),c=a(11),i=a.n(c),o=a(15),m=a(9),s=Object(n.createContext)(),f=a(1),p=a(3),E=["residents"];function d(){return(d=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.results.map((function(e){e.residents;var t=Object(p.a)(e,E);return Object(f.a)({},t)})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){return d.apply(this,arguments)};var b=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(m.a)(a,2),u=l[0],c=l[1],f=Object(n.useState)({filterByName:{name:""},filterByNumericValues:[]}),p=Object(m.a)(f,2),E=p[0],d=p[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),j=h[0],O=h[1];function N(e,t,a){return u.filter((function(n){return"menor que"===t?Number(n[e])<Number(a):"maior que"===t?Number(n[e]>Number(a)):Number(n[e])===Number(a)}))}var y=Object(n.useCallback)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,v();case 3:t=e.sent,c(t),O(!1);case 6:case"end":return e.stop()}}),e)}))),[]);return r.a.createElement(s.Provider,{value:{planets:u,isLoading:j,getPlanets:y,filters:E,setFilters:d,handleNumericFilters:function(e,t,a){var n=E.filterByNumericValues;if(0===n.length){var r=N(e,t,a);c(r)}else n.forEach((function(e){var t=N(e.column,e.comparison,e.value);c(t)}))},handleNameFilter:function(){""===E.filterByName.name&&0===E.filterByNumericValues.length&&y();var e=u.filter((function(e){return e.name.includes(E.filterByName.name)}));c(e)}}},t)},h=a(7),j=a(14),O=a(8),N=a(22);var y=function(){var e=Object(n.useContext)(s),t=e.planets,a=e.getPlanets,l=e.isLoading;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",null,t.length&&!l?r.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rotation Period"),r.a.createElement("th",null,"Orbital Period"),r.a.createElement("th",null,"Diameter"),r.a.createElement("th",null,"Climate"),r.a.createElement("th",null,"Gravity"),r.a.createElement("th",null,"Terrain"),r.a.createElement("th",null,"Surface Water"),r.a.createElement("th",null,"Population"),r.a.createElement("th",null,"Films"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Edited"),r.a.createElement("th",null,"Url"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},Object.values(e).map((function(e){return r.a.createElement("td",{key:e},e)})))})))):null)};var g=function(){var e=Object(n.useContext)(s),t=e.filters,a=e.setFilters,l=e.handleNameFilter,u=Object(n.useState)(""),c=Object(m.a)(u,2),i=c[0],o=c[1];return r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{className:"mb-2 p-2",controlId:"formBasicEmail"},r.a.createElement(h.a.Label,null,"Nome:"),r.a.createElement(h.a.Control,{type:"email",placeholder:"Digite o nome do planeta",value:i,onChange:function(e){var n=e.target.value;o(n);var r=t;r.filterByName.name=n,a(r),l()},"data-testid":"name-filter"})))},C=a(23),x=a(17),w=a(24);var B=function(){var e=Object(n.useContext)(s),t=e.setFilters,a=e.filters,l=e.handleNumericFilters,u=Object(n.useState)("population"),c=Object(m.a)(u,2),i=c[0],o=c[1],f=Object(n.useState)("maior que"),p=Object(m.a)(f,2),E=p[0],d=p[1],v=Object(n.useState)(0),b=Object(m.a)(v,2),N=b[0],y=b[1];return r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(h.a.Select,{"aria-label":"Default select example",name:"colum-filter","data-testid":"column-filter",value:i,onChange:function(e){var t=e.target;return o(t.value)}},r.a.createElement("option",{value:"population"},"population"),r.a.createElement("option",{value:"orbital_period"},"orbital_period"),r.a.createElement("option",{value:"diameter"},"diameter"),r.a.createElement("option",{value:"rotation_period"},"rotation_period"),r.a.createElement("option",{value:"surface_water"},"surface_water"))),r.a.createElement(O.a,null,r.a.createElement(h.a.Select,{"aria-label":"Default select example",id:"range","data-testid":"comparison-filter",value:E,onChange:function(e){return d(e.target.value)}},r.a.createElement("option",{value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a"))),r.a.createElement(O.a,null,r.a.createElement(h.a.Group,{as:j.a},r.a.createElement(O.a,null,r.a.createElement(x.a,{"aria-describedby":"basic-addon1",type:"number",name:"value",id:"value","data-testid":"value-filter",value:N,onChange:function(e){return y(e.target.value)}})),r.a.createElement(O.a,null,r.a.createElement(w.a,{variant:"secondary","data-testid":"button-filter",type:"submit",id:"button-filter",name:"button-filter",onClick:function(e){e.preventDefault();var n={column:i,comparison:E,value:N},r=a.filterByNumericValues||[];t({filterByNumericValues:[].concat(Object(C.a)(r),[n])}),l(i,E,N)}},"Filtrar"))))))};var S=function(){return r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(g,null)),r.a.createElement(O.a,null,r.a.createElement(B,null)))),r.a.createElement(y,null))};a(34);var k=function(){return r.a.createElement(b,null,r.a.createElement(S,null))};u.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cf287553.chunk.js.map