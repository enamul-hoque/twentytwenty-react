(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{36:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(1),l=a(4),s=a(7),c=a(23),o=a(0);var i=Object(l.connect)(e=>{var{state:t,item:a}=e,r=t.source.author[a.author],n=new Date(a.date);return Object(o.jsx)("article",null,Object(o.jsx)(s.a,{link:a.link},Object(o.jsx)(b,{dangerouslySetInnerHTML:{__html:a.title.rendered}})),Object(o.jsx)("div",null,r&&Object(o.jsx)(u,{link:r.link},Object(o.jsx)(j,null,"By ",Object(o.jsx)("b",null,r.name))),Object(o.jsx)(x,null," ","on ",Object(o.jsx)("b",null,n.toDateString()))),t.theme.featured.showOnList&&Object(o.jsx)(c.a,{id:a.featured_media}),a.excerpt&&Object(o.jsx)(O,{dangerouslySetInnerHTML:{__html:a.excerpt.rendered}}))}),b=Object(r.a)("h1",{target:"e1315zcn0",label:"Title"})({name:"m6r8cl",styles:"font-size:2rem;color:rgba(12,17,43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box;"}),j=Object(r.a)("span",{target:"e1315zcn1",label:"Author"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),u=Object(r.a)(s.a,{target:"e1315zcn2",label:"StyledLink"})({name:"qar1bk",styles:"padding:15px 0;"}),x=Object(r.a)("span",{target:"e1315zcn3",label:"Fecha"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),O=Object(r.a)("div",{target:"e1315zcn4",label:"Excerpt"})({name:"11j6eo1",styles:"line-height:1.6em;color:rgba(12,17,43,0.8);"});var d=Object(l.connect)(e=>{var{state:t,actions:a,libraries:r}=e,{totalPages:l}=t.source.get(t.router.link),{path:c,page:i,query:b}=r.source.parse(t.router.link),j=i<l,u=i>1,x=r.source.stringify({path:c,page:i+1,query:b}),O=r.source.stringify({path:c,page:i-1,query:b});return Object(n.useEffect)(()=>{j&&a.source.fetch(x)},[]),Object(o.jsx)("div",null,j&&Object(o.jsx)(s.a,{link:x},Object(o.jsx)(g,null,"← Older posts")),u&&j&&" - ",u&&Object(o.jsx)(s.a,{link:O},Object(o.jsx)(g,null,"Newer posts →")))}),g=Object(r.a)("em",{target:"e1kvqwoh0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(l.connect)(e=>{var{state:t}=e,a=t.source.get(t.router.link);return Object(o.jsx)(m,null,a.isTaxonomy&&Object(o.jsx)(p,null,a.taxonomy,": ",t.source[a.taxonomy][a.id].name),a.isAuthor&&Object(o.jsx)(p,null,"Author: ",t.source.author[a.id].name),a.items.map(e=>{var{type:a,id:r}=e,n=t.source[a][r];return Object(o.jsx)(i,{key:n.id,item:n})}),Object(o.jsx)(d,null))});var m=Object(r.a)("section",{target:"el1ce440",label:"Container"})({name:"447sei",styles:"width:800px;margin:0;padding:24px;list-style:none;"}),p=Object(r.a)("h3",{target:"el1ce441",label:"Header"})({name:"p2cv",styles:"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);"})}}]);