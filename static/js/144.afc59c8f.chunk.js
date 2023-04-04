"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{51:function(n,e,t){t.d(e,{Ee:function(){return b},FS:function(){return h},KG:function(){return v},TD:function(){return m},Td:function(){return x},Uy:function(){return g},eJ:function(){return k},rU:function(){return w}});var r,a,c,u,o,i,s,l,p=t(168),f=t(87),d=t(444),v=d.default.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]))),h=d.default.div(a||(a=(0,p.Z)(["\n  margin-right: 20px;\n"]))),g=d.default.h1(c||(c=(0,p.Z)(["\n  font-size: 35px;\n  margin-bottom: 15px;\n"]))),x=d.default.td(u||(u=(0,p.Z)(["\n  padding: 5px 0;\n  vertical-align: top;\n  text-align: left;\n"]))),m=d.default.td(o||(o=(0,p.Z)(["\n  padding: 12px 0;\n  vertical-align: top;\n  text-align: left;\n"]))),b=d.default.img(i||(i=(0,p.Z)(["\n  min-width: 370px;\n"]))),k=(0,d.default)(f.OL)(s||(s=(0,p.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  color: orangered;\n"]))),w=(0,d.default)(f.OL)(l||(l=(0,p.Z)(["\n  display: inline-block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])))},691:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a=t(861),c=t(439),u=t(757),o=t.n(u),i=t(791),s=t(689),l=t(507),p=t(51),f=t(168),d=t(444).default.p(r||(r=(0,f.Z)(["\n  text-align: center;\n"]))),v=t(184),h=(0,i.lazy)((function(){return t.e(934).then(t.bind(t,934))})),g=function(){var n,e,t=(0,s.UO)().movieId,r=(0,i.useState)(!1),u=(0,c.Z)(r,2),f=u[0],g=u[1],x=(0,i.useState)([]),m=(0,c.Z)(x,2),b=m[0],k=m[1],w=(0,s.TH)(),Z=(0,i.useRef)(null!==(n=null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,i.useEffect)((function(){y()}),[]);var y=function(){var n=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!1),n.next=3,(0,l.Ge)(t,g);case 3:if(void 0===(e=n.sent)){n.next=7;break}return k(e),n.abrupt("return");case 7:k([]),g(!0);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.eJ,{to:Z.current,children:"Go back"}),0!==b.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{details:b,pending:f}),(0,v.jsx)(p.rU,{to:"cast",children:"Cast"}),(0,v.jsx)(p.rU,{to:"reviews",children:"Reviews"}),(0,v.jsx)(s.j3,{})]}):(0,v.jsx)(v.Fragment,{children:f&&(0,v.jsx)(d,{children:"There is no information about this movie!"})})]})}},507:function(n,e,t){t.d(e,{DM:function(){return s},DZ:function(){return d},Ge:function(){return p},lJ:function(){return f},mc:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org",i="b8cc7192580846817e308e88dc3da3b8",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/trending/movie/day?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/search/multi?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,7,10,12]])})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=144.afc59c8f.chunk.js.map