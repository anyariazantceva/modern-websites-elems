!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){const n=document.querySelector(".drag-drop__block"),o=document.querySelectorAll(".drag-drop__item ");n.addEventListener("dragstart",(function(){console.log("start"),this.className+=" hold",setTimeout(()=>this.className="invisible",0)})),n.addEventListener("dragend",(function(){console.log("end"),this.className="drag-drop__block"}));for(const e of o)e.addEventListener("dragover",r),e.addEventListener("dragenter",l),e.addEventListener("dragleave",c),e.addEventListener("drop",i);function r(e){e.preventDefault(),console.log("over")}function l(e){e.preventDefault(),this.className+=" hovered",console.log("enter")}function c(){console.log("leave"),this.className="drag-drop__item"}function i(){console.log("drop"),this.className="drag-drop__item",this.append(n)}},function(e,t){const n=document.querySelector(".slider__list"),o=document.querySelectorAll(".slider__item"),r=document.querySelector(".slider_prev"),l=document.querySelector(".slider_next");let c=0,i="next";const s=()=>{r.style.display=0===c?"none":"block",c===o.length-1?l.style.display="none":l.style.display="block"};s();const d=e=>{"next"===e?c<o.length-1?c++:i="prev":"prev"===e?c>0?c--:i="next":c=e;let t=800*-c+"px";n.style.left=t,s()};r.onclick=function(){d("prev")},l.onclick=function(){d("next")}},function(e,t,n){"use strict";n.r(t);var o=()=>{document.querySelectorAll(".acc-item__title").forEach(e=>{e.addEventListener("click",(function(){let t=this.getAttribute("data-target");document.querySelector(t).classList.toggle("content__visible"),e.classList.toggle("active")}))})};var r=function(){let e=document.querySelector(".sidebar");document.querySelector(".menu__icon").addEventListener("click",()=>{0==e.style.opacity?(e.style.opacity=1,e.style.left=0):(e.style.opacity=0,e.style.left="-1000px")})};n(0),n(1);o(),r();let l=document.getElementById("modalOne"),c=document.querySelectorAll(".modal_btn");console.log(c);let i=document.querySelector(".closeBtn");function s(){l.style.display="block"}c.forEach(e=>{e.addEventListener("click",s)}),i.addEventListener("click",(function(){l.style.display="none"})),window.addEventListener("click",(function(e){e.target==l&&(l.style.display="none")}))}]);