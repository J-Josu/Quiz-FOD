import"./index-a02df571.js";import{w as p}from"./index-6bb40c94.js";const m=(t,r)=>{const e=o=>JSON.stringify(o,null,2),s=JSON.parse;localStorage.getItem(t)===null&&localStorage.setItem(t,e(r));const l=s(localStorage.getItem(t)),{subscribe:a,set:c,update:n}=p(l);return{subscribe:a,set:o=>(localStorage.setItem(t,e(o)),c(o)),update:n}},S=m("welcomePopUp",!0);export{S as w};