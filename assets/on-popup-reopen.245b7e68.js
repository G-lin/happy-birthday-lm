import{l as a,n as e,E as t,t as n,A as r,u as o,j as l,m as u,I as i,s}from"./vendor.cacf07dc.js";import{e as v}from"./index.12b81101.js";function c(a,e){("boolean"!=typeof a.cancelable||a.cancelable)&&a.preventDefault(),e&&function(a){a.stopPropagation()}(a)}var f="undefined"!=typeof window,d=f?window:global,p=Date.now();function m(a){var e=Date.now(),t=Math.max(0,16-(e-p)),n=setTimeout(a,t);return p=e+t,n}function w(a){return(d.requestAnimationFrame||m).call(d,a)}function b(a){(d.cancelAnimationFrame||d.clearTimeout).call(d,a)}function h(a){w((()=>w(a)))}function g(n){var r;a((()=>{n(),e((()=>{r=!0}))})),t((()=>{r&&n()}))}var y=!1;if(f)try{var Y={};Object.defineProperty(Y,"passive",{get(){y=!0}}),window.addEventListener("test-passive",null,Y)}catch(N){}function X(a,e,t={}){if(f){var l,{target:u=window,passive:i=!1,capture:s=!1}=t,v=()=>{var t=o(u);t&&l&&(t.removeEventListener(a,e,s),l=!1)};n(v),r(v),g((()=>{var t=o(u);t&&!l&&(t.addEventListener(a,e,y?{capture:s,passive:i}:s),l=!0)}))}}var j=/scroll|auto/i,x=f?window:void 0;function D(a){return"HTML"!==a.tagName&&"BODY"!==a.tagName&&1===a.nodeType}function E(a,e=x){for(var t=a;t&&t!==e&&D(t);){var{overflowY:n}=window.getComputedStyle(t);if(j.test(n))return t;t=t.parentNode}return e}function L(e,t=x){var n=l();return a((()=>{e.value&&(n.value=E(e.value,t))})),n}function M(a){var e=u();e&&v(e.proxy,a)}function T(){var a=l(0),e=l(0),t=l(0),n=l(0),r=l(0),o=l(0),u=l(""),i=()=>{t.value=0,n.value=0,r.value=0,o.value=0,u.value=""};return{move:l=>{var i,s,v=l.touches[0];t.value=v.clientX<0?0:v.clientX-a.value,n.value=v.clientY-e.value,r.value=Math.abs(t.value),o.value=Math.abs(n.value),u.value||(u.value=(i=r.value,s=o.value,i>s&&i>10?"horizontal":s>i&&s>10?"vertical":""))},start:t=>{i(),a.value=t.touches[0].clientX,e.value=t.touches[0].clientY},reset:i,startX:a,startY:e,deltaX:t,deltaY:n,offsetX:r,offsetY:o,direction:u,isVertical:()=>"vertical"===u.value,isHorizontal:()=>"horizontal"===u.value}}var z=Symbol();function A(a){var e=i(z,null);e&&s(e,(e=>{e&&a()}))}export{z as P,T as a,X as b,b as c,L as d,A as e,h as f,E as g,f as i,g as o,c as p,w as r,y as s,M as u};
