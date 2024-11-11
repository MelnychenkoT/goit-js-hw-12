import{a as w,i as v,S as L}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const S="46829059-b190e2d34be3baff3edaad1bd",q="https://pixabay.com/api/";async function f(t,o,r){return(await w.get(q,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:o}})).data}function m(t){return t.map(({webformatURL:o,largeImageURL:r,tags:l,likes:e,views:s,comments:a,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${l}"
              width="360"
            />
          </a>
          <div class="gallery-info">
            <div class="gallery-info-item">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Views</h2>
              <p class="amount">${s}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${b}</p>
            </div>
          </div>
        </li>`).join("")}function c(t){v.error({title:"",message:t,position:"topRight"})}const h=document.querySelector(".search-form"),M=document.querySelector('input[name="query"]'),u=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load-more");h.addEventListener("submit",E);n.addEventListener("click",P);O();n.style.display="none";i.style.display="none";const p=15;let d=1,y="",g=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function E(t){if(t.preventDefault(),d=1,u.innerHTML="",i.style.display="block",n.style.display="none",y=M.value.trim(),!y){c("Please enter a search query!"),n.style.display="none",i.style.display="none";return}try{const o=await f(y,d,p);if(!o.hits.length){c("Sorry, there are no images matching your search query. Please try again!"),i.style.display="none";return}o.hits.length<15?n.style.display="none":n.style.display="block",u.insertAdjacentHTML("beforeend",m(o.hits)),g.refresh()}catch{c("Sorry, but something went wrong!")}finally{i.style.display="none",h.reset()}}async function P(){d+=1;try{n.style.display="none",i.style.display="block";const t=await f(y,d,p);u.insertAdjacentHTML("beforeend",m(t.hits)),g.refresh();const o=document.querySelector(".gallery-item");if(o){const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}t.totalHits<=Math.ceil(d*p)?(n.style.display="none",c("We're sorry, but you've reached the end of search results.")):n.style.display="block"}catch{c("Sorry, but something went wrong!")}finally{i.style.display="none"}}function O(){document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".up-btn");t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?t.classList.add("show"):t.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}
//# sourceMappingURL=index.js.map
