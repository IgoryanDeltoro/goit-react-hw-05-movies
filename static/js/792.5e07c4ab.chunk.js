"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[792],{792:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t,i,s,a,l,d,c,o,x=r(861),h=r(439),u=r(757),p=r.n(u),j=r(243),g=r(791),v=r(689),f=r(168),m=r(87),b=r(444),k=b.default.div(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]))),w=b.default.div(i||(i=(0,f.Z)(["\n  margin-right: 20px;\n"]))),Z=b.default.h1(s||(s=(0,f.Z)(["\n  font-size: 35px;\n  margin-bottom: 15px;\n"]))),_=b.default.td(a||(a=(0,f.Z)(["\n  padding: 5px 0;\n  vertical-align: top;\n  text-align: left;\n"]))),y=b.default.td(l||(l=(0,f.Z)(["\n  padding: 12px 0;\n  vertical-align: top;\n  text-align: left;\n"]))),O=b.default.img(d||(d=(0,f.Z)(["\n  min-width: 370px;\n"]))),R=(0,b.default)(m.OL)(c||(c=(0,f.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  color: orangered;\n"]))),S=(0,b.default)(m.OL)(o||(o=(0,f.Z)(["\n  display: inline-block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),C=r(184),L=function(e){var n=e.pending,r=e.details,t=r.original_title,i=r.vote_average,s=r.vote_count,a=r.genres,l=r.budget,d=r.release_date,c=r.overview,o=r.poster_path;console.log(i);var x=i&&Number(i.toFixed(1));return(0,C.jsxs)(k,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(Z,{children:t}),(0,C.jsx)("table",{children:(0,C.jsxs)("tbody",{children:[(0,C.jsxs)("tr",{children:[(0,C.jsx)(_,{children:(0,C.jsx)("h2",{children:"Rating:"})}),(0,C.jsxs)(y,{children:["IMDb: ",x,"(",s,")"]})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)(_,{children:(0,C.jsx)("h2",{children:"Genres:"})}),(0,C.jsx)(y,{children:n&&a.map((function(e,n,r){var t=e.name;return n<r.length-1?t+", ":t}))})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)(_,{children:(0,C.jsx)("h2",{children:"Budget:"})}),(0,C.jsx)(y,{children:(0,C.jsx)("span",{children:l})})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)(_,{children:(0,C.jsx)("h2",{children:"Release date:"})}),(0,C.jsx)(y,{children:d})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)(_,{children:(0,C.jsx)("h2",{children:"Overview:"})}),(0,C.jsx)(y,{children:(0,C.jsx)("p",{children:c})})]})]})})]}),(0,C.jsx)(w,{children:n&&(0,C.jsx)(O,{src:"https://image.tmdb.org/t/p/w500"+o,alt:"poster_image"})})]})},B=function(){var e,n,r=(0,v.UO)().movieId,t=(0,g.useState)(!1),i=(0,h.Z)(t,2),s=i[0],a=i[1],l=(0,g.useState)({}),d=(0,h.Z)(l,2),c=d[0],o=d[1],u=(0,v.TH)(),f=(0,g.useRef)(null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");(0,g.useEffect)((function(){m()}),[]);var m=function(){var e=(0,x.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),e.prev=1,e.next=4,j.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=b8cc7192580846817e308e88dc3da3b8&language=en-US"));case 4:n=e.sent,console.log(n),o(n.data),a(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return(0,C.jsxs)("div",{children:[(0,C.jsx)(R,{to:f.current,children:"Back"}),(0,C.jsx)(L,{details:c,pending:s}),(0,C.jsxs)("div",{children:[(0,C.jsx)(S,{to:"cast",children:"Cast"}),(0,C.jsx)(S,{to:"reviews",children:"Reviews"})]}),(0,C.jsx)(g.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading subpage..."}),children:(0,C.jsx)(v.j3,{})})]})}}}]);
//# sourceMappingURL=792.5e07c4ab.chunk.js.map