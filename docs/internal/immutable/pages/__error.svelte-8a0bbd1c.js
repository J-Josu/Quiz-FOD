import{Q as O,S as U,i as k,s as A,k as q,e as v,t as d,L as D,d as l,m as C,c as b,a as f,h as u,b as p,g as F,G as t,E as S,P as G}from"../chunks/index-644eb34b.js";const H=()=>{const e=O("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},I={subscribe(e){return H().page.subscribe(e)}};function L(e){let r,a,s,_,c,m,E,o,x,i,y;return{c(){r=q(),a=v("div"),s=v("h1"),_=d("No existe la pagina '"),c=d(e[0]),m=d("'"),E=q(),o=v("footer"),x=d("Puede regresar a la "),i=v("a"),y=d("pagina principal"),this.h()},l(n){D('[data-svelte="svelte-1rdvh44"]',document.head).forEach(l),r=C(n),a=b(n,"DIV",{class:!0});var g=f(a);s=b(g,"H1",{class:!0});var h=f(s);_=u(h,"No existe la pagina '"),c=u(h,e[0]),m=u(h,"'"),h.forEach(l),E=C(g),o=b(g,"FOOTER",{class:!0});var P=f(o);x=u(P,"Puede regresar a la "),i=b(P,"A",{href:!0,class:!0});var $=f(i);y=u($,"pagina principal"),$.forEach(l),P.forEach(l),g.forEach(l),this.h()},h(){document.title="404 Not Found",p(s,"class","svelte-a5di07"),p(i,"href","/"),p(i,"class","svelte-a5di07"),p(o,"class","svelte-a5di07"),p(a,"class","svelte-a5di07")},m(n,N){F(n,r,N),F(n,a,N),t(a,s),t(s,_),t(s,c),t(s,m),t(a,E),t(a,o),t(o,x),t(o,i),t(i,y)},p:S,i:S,o:S,d(n){n&&l(r),n&&l(a)}}}function Q(e,r,a){let s;return G(e,I,c=>a(1,s=c)),[s.url.host+s.url.pathname]}class T extends U{constructor(r){super(),k(this,r,Q,L,A,{})}}export{T as default};
