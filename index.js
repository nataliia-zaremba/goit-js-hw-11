import{a as u,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50347658-285688eb76e59c705e33623f4",m="https://pixabay.com/api/";async function h(a){const r=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20,page:1}),o=await u.get(`${m}?${r}`);if(o.status!==200)throw new Error("Failed to fetch images");return o.data}let c;function y(a){const r=document.querySelector(".gallery"),o=a.map(s=>`
      <div class="photo-card">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${s.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${s.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${s.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${s.downloads}</span>
          </div>
        </div>
      </div>
    `).join("");r.innerHTML=o,c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const a=document.querySelector(".gallery");a.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const d=document.querySelector(".form"),L=d.querySelector('input[name="search-text"]');d.addEventListener("submit",b);async function b(a){a.preventDefault();const r=L.value.trim();if(g(),!r){n.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}try{v();const o=await h(r);if(l(),o.hits.length===0){n.info({title:"Info",message:"No images found. Please try again.",position:"topRight"});return}y(o.hits)}catch{l(),n.error({title:"Error",message:"Error fetching images. Please try again.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
