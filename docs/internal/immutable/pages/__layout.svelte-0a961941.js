import{S as F,i as K,s as R,F as A,e as h,t as M,k as $,G as B,c as p,a as g,h as C,d as o,m as N,b as _,H as k,g as v,I as G,J as H,K as J,L as P,q as U,o as j,M as z,v as D,N as Q}from"../chunks/index-ab7acaee.js";import{p as O}from"../chunks/stores-e9dabb77.js";import"../chunks/index-b931e40b.js";const{document:E}=Q;function V(d){let r,n,m,c,l,f,a,i,T,u,b,I;const y=d[2].default,t=A(y,d,d[1],null);return{c(){r=h("link"),n=h("script"),m=M(`if (document) {\r
      let mode = localStorage.getItem("preferredTheme");\r
      if (mode === '"dark-mode"')\r
        document.documentElement.classList.add("dark-mode");\r
      else if (mode === null)\r
        localStorage.setItem(\r
          "preferredTheme",\r
          window.matchMedia("(prefers-color-scheme: dark)").matches\r
            ? '"dark-mode"'\r
            : '"light-mode"'\r
        );\r
    }`),c=$(),l=h("main"),t&&t.c(),f=$(),a=h("footer"),i=h("button"),T=M("Cambiar Tema"),this.h()},l(e){const s=B('[data-svelte="svelte-1g2gwry"]',E.head);r=p(s,"LINK",{rel:!0,href:!0,type:!0}),n=p(s,"SCRIPT",{});var L=g(n);m=C(L,`if (document) {\r
      let mode = localStorage.getItem("preferredTheme");\r
      if (mode === '"dark-mode"')\r
        document.documentElement.classList.add("dark-mode");\r
      else if (mode === null)\r
        localStorage.setItem(\r
          "preferredTheme",\r
          window.matchMedia("(prefers-color-scheme: dark)").matches\r
            ? '"dark-mode"'\r
            : '"light-mode"'\r
        );\r
    }`),L.forEach(o),s.forEach(o),c=N(e),l=p(e,"MAIN",{class:!0});var S=g(l);t&&t.l(S),S.forEach(o),f=N(e),a=p(e,"FOOTER",{class:!0});var q=g(a);i=p(q,"BUTTON",{class:!0});var w=g(i);T=C(w,"Cambiar Tema"),w.forEach(o),q.forEach(o),this.h()},h(){_(r,"rel","shortcut icon"),_(r,"href","favicon.ico"),_(r,"type","image/x-icon"),_(l,"class","svelte-af0h8q"),_(i,"class","svelte-af0h8q"),_(a,"class","svelte-af0h8q")},m(e,s){k(E.head,r),k(E.head,n),k(n,m),v(e,c,s),v(e,l,s),t&&t.m(l,null),v(e,f,s),v(e,a,s),k(a,i),k(i,T),u=!0,b||(I=G(i,"click",d[0]),b=!0)},p(e,[s]){t&&t.p&&(!u||s&2)&&H(t,y,e,e[1],u?P(y,e[1],s,null):J(e[1]),null)},i(e){u||(U(t,e),u=!0)},o(e){j(t,e),u=!1},d(e){o(r),o(n),e&&o(c),e&&o(l),t&&t.d(e),e&&o(f),e&&o(a),b=!1,I()}}}function W(d,r,n){let m;z(d,O,a=>n(3,m=a));let{$$slots:c={},$$scope:l}=r;const f=()=>{document.body.classList.toggle("dark-mode"),O.set(m==="dark-mode"?"light-mode":"dark-mode")};return D(()=>{m==="dark-mode"&&(document.body.classList.add("dark-mode"),document.documentElement.classList.remove("dark-mode"))}),d.$$set=a=>{"$$scope"in a&&n(1,l=a.$$scope)},[f,l,c]}class x extends F{constructor(r){super(),K(this,r,W,V,R,{})}}export{x as default};
