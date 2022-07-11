import{S as F,i as K,s as R,F as A,e as h,t as $,k as C,G as B,c as p,a as g,h as N,d as o,m as q,b as _,H as k,g as v,I as G,J as H,K as J,L as P,q as U,o as j,M as z,v as D,N as Q}from"../chunks/index-2df69e23.js";import{p as O}from"../chunks/stores-a146de28.js";import"../chunks/index-a938e09c.js";const{document:E}=Q;function V(m){let s,n,d,c,l,u,r,i,T,f,b,I;const y=m[2].default,t=A(y,m,m[1],null);return{c(){s=h("link"),n=h("script"),d=$(`if (document) {\r
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
    }`),c=C(),l=h("main"),t&&t.c(),u=C(),r=h("footer"),i=h("button"),T=$("Cambiar Tema"),this.h()},l(e){const a=B('[data-svelte="svelte-1g2gwry"]',E.head);s=p(a,"LINK",{rel:!0,href:!0,type:!0}),n=p(a,"SCRIPT",{});var w=g(n);d=N(w,`if (document) {\r
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
    }`),w.forEach(o),a.forEach(o),c=q(e),l=p(e,"MAIN",{class:!0});var L=g(l);t&&t.l(L),L.forEach(o),u=q(e),r=p(e,"FOOTER",{class:!0});var S=g(r);i=p(S,"BUTTON",{class:!0});var M=g(i);T=N(M,"Cambiar Tema"),M.forEach(o),S.forEach(o),this.h()},h(){_(s,"rel","shortcut icon"),_(s,"href","favicon.ico"),_(s,"type","image/x-icon"),_(l,"class","svelte-1k31mmh"),_(i,"class","svelte-1k31mmh"),_(r,"class","svelte-1k31mmh")},m(e,a){k(E.head,s),k(E.head,n),k(n,d),v(e,c,a),v(e,l,a),t&&t.m(l,null),v(e,u,a),v(e,r,a),k(r,i),k(i,T),f=!0,b||(I=G(i,"click",m[0]),b=!0)},p(e,[a]){t&&t.p&&(!f||a&2)&&H(t,y,e,e[1],f?P(y,e[1],a,null):J(e[1]),null)},i(e){f||(U(t,e),f=!0)},o(e){j(t,e),f=!1},d(e){o(s),o(n),e&&o(c),e&&o(l),t&&t.d(e),e&&o(u),e&&o(r),b=!1,I()}}}function W(m,s,n){let d;z(m,O,r=>n(3,d=r));let{$$slots:c={},$$scope:l}=s;const u=()=>{window.document.body.classList.toggle("dark-mode"),O.set(d==="dark-mode"?"light-mode":"dark-mode")};return D(()=>{d==="dark-mode"&&(document.body.classList.add("dark-mode"),document.documentElement.classList.remove("dark-mode"))}),m.$$set=r=>{"$$scope"in r&&n(1,l=r.$$scope)},[u,l,c]}class x extends F{constructor(s){super(),K(this,s,W,V,R,{})}}export{x as default};
