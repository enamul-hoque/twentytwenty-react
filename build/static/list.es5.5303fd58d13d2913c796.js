(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{166:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),l=n(9),s=n(54),c=n(153),o=n(1);var i=Object(l.connect)((function(e){var t=e.state,n=e.item,a=t.source.author[n.author],r=new Date(n.date);return Object(o.jsx)("article",null,Object(o.jsx)(s.a,{link:n.link},Object(o.jsx)(b,{dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(o.jsx)("div",null,a&&Object(o.jsx)(u,{link:a.link},Object(o.jsx)(j,null,"By ",Object(o.jsx)("b",null,a.name))),Object(o.jsx)(x,null," ","on ",Object(o.jsx)("b",null,r.toDateString()))),t.theme.featured.showOnList&&Object(o.jsx)(c.a,{id:n.featured_media}),n.excerpt&&Object(o.jsx)(O,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}}))})),b=Object(a.a)("h1",{target:"e1315zcn0",label:"Title"})({name:"m6r8cl",styles:"font-size:2rem;color:rgba(12,17,43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box;"}),j=Object(a.a)("span",{target:"e1315zcn1",label:"Author"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),u=Object(a.a)(s.a,{target:"e1315zcn2",label:"StyledLink"})({name:"qar1bk",styles:"padding:15px 0;"}),x=Object(a.a)("span",{target:"e1315zcn3",label:"Fecha"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),O=Object(a.a)("div",{target:"e1315zcn4",label:"Excerpt"})({name:"11j6eo1",styles:"line-height:1.6em;color:rgba(12,17,43,0.8);"});var d=Object(l.connect)((function(e){var t=e.state,n=e.actions,a=e.libraries,l=t.source.get(t.router.link).totalPages,c=a.source.parse(t.router.link),i=c.path,b=c.page,j=c.query,u=b<l,x=b>1,O=a.source.stringify({path:i,page:b+1,query:j}),d=a.source.stringify({path:i,page:b-1,query:j});return Object(r.useEffect)((function(){u&&n.source.fetch(O)}),[]),Object(o.jsx)("div",null,u&&Object(o.jsx)(s.a,{link:O},Object(o.jsx)(g,null,"← Older posts")),x&&u&&" - ",x&&Object(o.jsx)(s.a,{link:d},Object(o.jsx)(g,null,"Newer posts →")))})),g=Object(a.a)("em",{target:"e1kvqwoh0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(l.connect)((function(e){var t=e.state,n=t.source.get(t.router.link);return Object(o.jsx)(m,null,n.isTaxonomy&&Object(o.jsx)(p,null,n.taxonomy,": ",t.source[n.taxonomy][n.id].name),n.isAuthor&&Object(o.jsx)(p,null,"Author: ",t.source.author[n.id].name),n.items.map((function(e){var n=e.type,a=e.id,r=t.source[n][a];return Object(o.jsx)(i,{key:r.id,item:r})})),Object(o.jsx)(d,null))}));var m=Object(a.a)("section",{target:"el1ce440",label:"Container"})({name:"447sei",styles:"width:800px;margin:0;padding:24px;list-style:none;"}),p=Object(a.a)("h3",{target:"el1ce441",label:"Header"})({name:"p2cv",styles:"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);"})}}]);