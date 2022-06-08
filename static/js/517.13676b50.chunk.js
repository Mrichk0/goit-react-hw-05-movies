"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[517],{6517:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(1413),a=n(5861),s=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(6871),v=n(615),d=n(501),f={movie:"movieItems_movie__QrRNf",moviePage:"movieItems_moviePage__RtPdG",info:"movieItems_info__Vs7FW",movieBtn:"movieItems_movieBtn__GChXg",genres:"movieItems_genres__6mDzb"},m=n(184),l=function(e){var r=e.data,n=r.poster_path,t=r.title,a=r.vote_average,s=r.overview,i=e.id,c=e.goBack,o=e.from,v=e.genres;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:f.movie,children:[(0,m.jsx)("button",{onClick:c,children:"go back"}),(0,m.jsxs)("div",{className:f.moviePage,children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:f.poster,src:"http://image.tmdb.org/t/p/w400/".concat(n),alt:t})}),(0,m.jsxs)("div",{className:f.info,children:[(0,m.jsx)("h1",{children:t}),(0,m.jsxs)("p",{children:[" User score: ",10*a,"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:s}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("div",{className:f.genres,children:v})]}),(0,m.jsx)("div",{})]})]}),(0,m.jsx)(d.rU,{className:f.movieBtn,to:"/movies/".concat(i,"/cast"),state:{from:o},children:"Cast"}),(0,m.jsx)(d.rU,{className:f.movieBtn,to:"/movies/".concat(i,"/reviews"),state:{from:o},children:"Reviews"}),(0,m.jsx)(u.j3,{})]})})},p=function(){var e,r=(0,o.useState)({response:{},loading:!1,error:null}),n=(0,s.Z)(r,2),i=n[0],d=n[1],f=(0,u.TH)(),p=(0,u.s0)(),h=(0,u.UO)().id,g=(null===f||void 0===f||null===(e=f.state)||void 0===e?void 0:e.from)||"/";(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!0})})),e.next=4,(0,v.Pg)(r);case 4:n=e.sent,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{response:n,loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d((function(r){return(0,t.Z)((0,t.Z)({},r),{},{error:e.t0.message,loading:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();e(h)}),[d,h]);var x=i.response,j=i.loading,_=i.error,w=Boolean(Object.values(x).length);console.log("RES",x);var b=x.data,k=null===b||void 0===b?void 0:b.genres.map((function(e){var r=e.id,n=e.name;return(0,m.jsx)("div",{children:(0,m.jsx)("p",{style:{marginRight:"15px "},children:n})},r)}));return(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsx)("p",{children:"...Loading"}),_&&(0,m.jsx)("p",{children:_}),w&&(0,m.jsx)(l,{goBack:function(){p(g)},data:b,id:h,from:g,genres:k})]})}},615:function(e,r,n){n.d(r,{Pg:function(){return u},jP:function(){return f},qF:function(){return v},t$:function(){return o},zv:function(){return d}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"bca34bbfc009d7fec4acd7837db1b38e"}}),o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=517.13676b50.chunk.js.map