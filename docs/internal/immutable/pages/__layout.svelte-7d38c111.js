import{F as K,S as W,i as F,s as G,e as f,t as h,k as O,c as p,a as $,h as y,d as _,m as R,b as E,g as S,G as r,H as L,E as Q,I as X,J as H,w as Y,x as Z,y as x,q as w,o as U,B as ee,K as te,p as se,L as ae,M as oe,N as le,O as ne,n as re}from"../chunks/index-a02df571.js";import{w as J}from"../chunks/stores-e9521dfb.js";import"../chunks/index-6bb40c94.js";function M(n,{delay:e=0,duration:a=400,easing:o=K}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:a,easing:o,css:c=>`opacity: ${c*s}`}}function ie(n){let e,a,o,s,c,l,t,i,A,B,u,P,T,z,C,I,d,g,N,j;return{c(){e=f("div"),a=f("div"),o=f("h1"),s=h("Advertencia"),c=O(),l=f("p"),t=h("Usted utiliza esta pagina bajo su propia voluntad,"),i=f("br"),A=h(`\r
      el creador no se hace responsable por que la informacion\r
      en los quiz este equivocada.`),B=O(),u=f("button"),P=h("Acepto los Terminos"),T=f("br"),z=h("y"),C=f("br"),I=h("Condiciones"),this.h()},l(m){e=p(m,"DIV",{class:!0});var k=$(e);a=p(k,"DIV",{class:!0});var v=$(a);o=p(v,"H1",{});var D=$(o);s=y(D,"Advertencia"),D.forEach(_),c=R(v),l=p(v,"P",{class:!0});var q=$(l);t=y(q,"Usted utiliza esta pagina bajo su propia voluntad,"),i=p(q,"BR",{}),A=y(q,`\r
      el creador no se hace responsable por que la informacion\r
      en los quiz este equivocada.`),q.forEach(_),B=R(v),u=p(v,"BUTTON",{class:!0});var b=$(u);P=y(b,"Acepto los Terminos"),T=p(b,"BR",{}),z=y(b,"y"),C=p(b,"BR",{}),I=y(b,"Condiciones"),b.forEach(_),v.forEach(_),k.forEach(_),this.h()},h(){E(l,"class","svelte-82w4yd"),E(u,"class","svelte-82w4yd"),E(a,"class","content svelte-82w4yd"),E(e,"class","container svelte-82w4yd")},m(m,k){S(m,e,k),r(e,a),r(a,o),r(o,s),r(a,c),r(a,l),r(l,t),r(l,i),r(l,A),r(a,B),r(a,u),r(u,P),r(u,T),r(u,z),r(u,C),r(u,I),g=!0,N||(j=L(u,"click",n[0]),N=!0)},p:Q,i(m){g||(X(()=>{d||(d=H(e,M,{},!0)),d.run(1)}),g=!0)},o(m){d||(d=H(e,M,{},!1)),d.run(0),g=!1},d(m){m&&_(e),m&&d&&d.end(),N=!1,j()}}}function ce(n){return[()=>J.set(!1)]}class ue extends W{constructor(e){super(),F(this,e,ce,ie,G,{})}}function V(n){let e,a;return e=new ue({}),{c(){Y(e.$$.fragment)},l(o){Z(e.$$.fragment,o)},m(o,s){x(e,o,s),a=!0},i(o){a||(w(e.$$.fragment,o),a=!0)},o(o){U(e.$$.fragment,o),a=!1},d(o){ee(e,o)}}}function fe(n){let e,a,o,s=n[0]&&n[1]&&V();const c=n[3].default,l=te(c,n,n[2],null);return{c(){s&&s.c(),e=O(),a=f("main"),l&&l.c()},l(t){s&&s.l(t),e=R(t),a=p(t,"MAIN",{});var i=$(a);l&&l.l(i),i.forEach(_)},m(t,i){s&&s.m(t,i),S(t,e,i),S(t,a,i),l&&l.m(a,null),o=!0},p(t,[i]){t[0]&&t[1]?s?i&3&&w(s,1):(s=V(),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(re(),U(s,1,1,()=>{s=null}),se()),l&&l.p&&(!o||i&4)&&ae(l,c,t,t[2],o?le(c,t[2],i,null):oe(t[2]),null)},i(t){o||(w(s),w(l,t),o=!0)},o(t){U(s),U(l,t),o=!1},d(t){s&&s.d(t),t&&_(e),t&&_(a),l&&l.d(t)}}}function pe(n,e,a){let o;ne(n,J,t=>a(1,o=t));let{$$slots:s={},$$scope:c}=e,l=!1;return setTimeout(()=>a(0,l=!0),500),n.$$set=t=>{"$$scope"in t&&a(2,c=t.$$scope)},[l,o,c,s]}class ve extends W{constructor(e){super(),F(this,e,pe,fe,G,{})}}export{ve as default};