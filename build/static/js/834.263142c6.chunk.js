"use strict";(self.webpackChunkmarvel_db=self.webpackChunkmarvel_db||[]).push([[834],{312:function(e,n,t){t.d(n,{Z:function(){return c}});var s=t(184);var c=function(){return(0,s.jsx)("section",{className:"banner",children:(0,s.jsxs)("h3",{className:"banner__title",children:["New comics every week! ",(0,s.jsx)("br",{})," Stay tuned!"]})})}},834:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(439),c=t(791),i=t(312),a=t(433),l=t(159),r=t(200),u=t(290),o=t(87),m=t(184),d=function(e){var n=(0,c.useState)([]),t=(0,s.Z)(n,2),i=t[0],d=t[1],f=(0,c.useState)(!1),b=(0,s.Z)(f,2),h=b[0],_=b[1],j=(0,c.useState)(210),x=(0,s.Z)(j,2),v=x[0],N=x[1],Z=(0,c.useState)(!1),g=(0,s.Z)(Z,2),p=g[0],k=g[1],S=(0,l.Z)(!0),w=S.loading,y=S.error,C=S.getAllComics;(0,c.useEffect)((function(){F(v,!0)}),[]);var F=function(e,n){_(!n),C(e).then(A)},A=function(e){var n=!1;e.length<8&&(n=!0),d((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))})),_(!1),N((function(e){return e+8})),k(n)},E=(0,c.useRef)([]),O=i.map((function(e,n){var t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(t={objectFit:"\u0441ontain"}),(0,m.jsxs)(o.rU,{to:"/comics/".concat(e.id),ref:function(e){return E.current[n]=e},tabIndex:0,className:"comics-list__card",children:[(0,m.jsx)("div",{className:"comics-list__img",children:(0,m.jsx)("img",{className:"comics-list__img",src:e.thumbnail,alt:e.title,style:t})}),(0,m.jsx)("div",{className:"comics-list__title",children:e.title}),(0,m.jsxs)("div",{className:"comics-list__price",children:[e.price,"$"]})]},e.id)})),R=y?(0,m.jsx)(u.Z,{}):null,D=w&&!h?(0,m.jsx)(r.Z,{}):null;return(0,m.jsxs)("section",{className:"comics-list",children:[R,D,(0,m.jsx)("ul",{className:"comics-list__wrap",children:O}),(0,m.jsx)("button",{className:"btn btn_red btn_long btn_main",style:{display:p?"none":"block"},disabled:h,onClick:function(){return F(v)},children:"LOAD MORE"})]})},f=function(){var e=(0,c.useState)(null),n=(0,s.Z)(e,2),t=(n[0],n[1]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{}),(0,m.jsx)("section",{className:"comics",children:(0,m.jsx)(d,{onComicSelected:function(e){t(e)}})})]})}}}]);
//# sourceMappingURL=834.263142c6.chunk.js.map