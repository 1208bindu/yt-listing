(this["webpackJsonpyt-listing"]=this["webpackJsonpyt-listing"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(9),a=n.n(r),s=(n(8),n(6)),o=n.n(s),l=n(10),d=n(7),u=n(2),h=n(0),j=function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{onChange:function(t){return e.changeChannelList(t,e.channelList.channelId)},type:"checkbox",checked:e.channelList.isChecked})," ",e.channelList.channelName]},e.channelList.channelId)},p=function(e){return Object(h.jsxs)("div",{className:"row-videos",children:[Object(h.jsx)("div",{className:"video-list",children:e.displayList.map((function(t,n){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"video-list-item",children:Object(h.jsxs)("p",{children:[Object(h.jsxs)("span",{onClick:function(){return e.displayVideo(t.videoId,t.channelId)},children:[" ",Object(h.jsx)("b",{children:t.title}),Object(h.jsx)("br",{}),t.description,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),t.publishedAt.substring(0,10)]}),Object(h.jsx)("span",{className:"hide-list",onMouseOver:function(e){e.target.style.cursor="pointer"},onClick:function(){e.hideVideo(t.videoId,t.channelId)},children:"Hide"})]})},t.videoId)},n)}))}),e.url?Object(h.jsx)("div",{className:"video-frame ",children:Object(h.jsx)("iframe",{className:"responsive-iframe",src:e.url,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})}):null]})},b=function(){var e=Object(c.useState)([{channelId:"UCVTyTA7-g9nopHeHbeuvpRA",channelName:"Late Night with Seth Myers",isChecked:!1,maxResult:10},{channelId:"UCwWhs_6x42TyRM4Wstoq8HA",channelName:"The Daily Show with Trevor Noah",isChecked:!1,maxResult:10},{channelId:"UCMtFAi84ehTSYSE9XoHefig",channelName:"The Late Show with Stephen Colbert",isChecked:!1,maxResult:10}]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(u.a)(r,2),s=a[0],b=a[1],f=Object(c.useState)([]),m=Object(u.a)(f,2),v=m[0],O=m[1],x=Object(c.useState)([]),y=Object(u.a)(x,2),I=y[0],g=y[1],k=Object(c.useState)(""),w=Object(u.a)(k,2),C=w[0],S=w[1],N=[];Object(c.useEffect)((function(){var e=s.filter((function(e){return!I.find((function(t){return t.videoId===e.videoId}))})).filter((function(e){return void 0!==e.videoId})).sort((function(e,t){return new Date(t.publishedAt)-new Date(e.publishedAt)})).slice(0,10);O(e)}),[s]);var A=function(e,t){var c=v.filter((function(t){return t.videoId!==e})),r=v.filter((function(t){return t.videoId===e}));O(c),r.map((function(e){return g((function(t){return[].concat(Object(d.a)(t),[{videoId:e.videoId}])}))})),i(n.map((function(e){return t===e.channelId&&(e.maxResult=e.maxResult+1),e})))},L=function(e,t){i(n.map((function(n){return t===n.channelId&&(n.isChecked=e.target.checked),n})))},T=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.map((function(e){return fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=".concat(e.channelId,"&maxResults=").concat(e.maxResult,"&order=date&key=").concat("AIzaSyATLijep4MFzYkPAYkQX4HmQXSN4y7_ZzE")).then((function(e){return e.json()})).catch((function(e){document.getElementById("errorDiv").style.display="block",document.getElementById("errorDiv").innerHTML=e}))})),e.next=4,Promise.all(n);case 4:e.sent.forEach((function(e){e.items.map((function(e){return b((function(t){return[].concat(Object(d.a)(t),[{title:e.snippet.title,description:e.snippet.description,publishedAt:e.snippet.publishedAt,videoId:e.id.videoId,channelId:e.snippet.channelId}])}))}))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),document.getElementById("errorDiv").style.display="block",document.getElementById("errorDiv").innerHTML="Your Daily Quota for Fetching API Data is Over. Kindly Try Again Tomorrow";case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Select your favourite channel"}),Object(h.jsx)("ul",{className:"channel-list",children:n.map((function(e,t){return Object(h.jsx)(j,{channelList:e,changeChannelList:L},t)}))}),Object(h.jsx)("div",{className:"searchButton",children:Object(h.jsx)("input",{type:"button",value:"Search Videos",onClick:function(){var e=n.filter((function(e){return!0===e.isChecked}));S(""),b(N),0===e.length?T(n):T(e)}})})]})}),Object(h.jsx)("div",{id:"errorDiv"}),v?Object(h.jsx)(p,{displayList:v,hideVideo:A,displayVideo:function(e,t){S("https://www.youtube.com/embed/".concat(e)),A(e,t)},url:C}):null]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),f()},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.df408a5e.chunk.js.map