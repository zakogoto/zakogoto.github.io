"use strict";(self.webpackChunkmarvel_db=self.webpackChunkmarvel_db||[]).push([[193],{312:function(c,s,e){e.d(s,{Z:function(){return i}});var n=e(184);var i=function(){return(0,n.jsx)("section",{className:"banner",children:(0,n.jsxs)("h3",{className:"banner__title",children:["New comics every week! ",(0,n.jsx)("br",{})," Stay tuned!"]})})}},193:function(c,s,e){e.r(s),e.d(s,{default:function(){return j}});var n=e(791),i=e(312),a=e(439),r=e(200),t=e(290),l=e(159),o=e(87),m=e(184);function u(c){var s=(0,n.useState)(null),e=(0,a.Z)(s,2),i=e[0],o=e[1],u=(0,l.Z)(),f=u.error,j=u.loading,h=u.getComic,_=function(c){o(c)};(0,n.useEffect)((function(){x()}),[c.comicId]);var x=function(){var s=c.comicId;s&&h(s).then(_)},g=f?(0,m.jsx)(t.Z,{}):null,v=j?(0,m.jsx)(r.Z,{}):null,p=j||f||!i?null:(0,m.jsx)(d,{comic:i});return(0,m.jsxs)("div",{className:"comics-info",children:[g,v,p]})}var d=function(c){var s=c.comic,e=s.title,n=s.description,i=s.thumbnail,a=s.pages,r=s.price,t=s.language,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===i&&(l={objectFit:"contain"}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{src:i,alt:e,className:"comics-info__img",style:l}),(0,m.jsxs)("div",{className:"comics-info__text-block",children:[(0,m.jsx)("h2",{className:"comics-info__title",children:e}),(0,m.jsx)("p",{className:"comics-info__descr",children:n}),(0,m.jsxs)("p",{className:"comics-info__amount-page",children:[a," pages"]}),(0,m.jsxs)("p",{className:"comics-info__language",children:["Language: ",t]}),(0,m.jsxs)("div",{className:"comics-info__price",children:[r,"$"]})]}),(0,m.jsx)(o.rU,{to:"/comics",className:"comics-info__btn",children:"Back to all"})]})},f=e(689),j=function(){var c=(0,f.UO)().comicId;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{}),(0,m.jsx)("section",{className:"comics",children:(0,m.jsx)(u,{comicId:c})})]})}}}]);
//# sourceMappingURL=193.97b843f5.chunk.js.map