import{g as e}from"./classnames-BK5ccKcQ.js";import{c as f}from"./string-convert-DdSrkZLz.js";var m=f,c=function(n){var r=/[height|width]$/;return r.test(n)},a=function(n){var r="",i=Object.keys(n);return i.forEach(function(t,s){var o=n[t];t=m(t),c(t)&&typeof o=="number"&&(o=o+"px"),o===!0?r+=t:o===!1?r+="not "+t:r+="("+t+": "+o+")",s<i.length-1&&(r+=" and ")}),r},h=function(n){var r="";return typeof n=="string"?n:n instanceof Array?(n.forEach(function(i,t){r+=a(i),t<n.length-1&&(r+=", ")}),r):a(n)},v=h;const g=e(v);export{g as j};
