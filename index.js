import{a as f,S as d,i as n}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",y="8510354-a536a728c4badadcbc80336ea";function h(s){return f.get(m,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new d(".gallery a");function p(s){const o=s.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <ul class="info">
            <li><b>Likes:</b> ${t.likes}</li>
            <li><b>Views:</b> ${t.views}</li>
            <li><b>Comments:</b> ${t.comments}</li>
            <li><b>Downloads:</b> ${t.downloads}</li>
        </ul>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query."});return}b(),L(),h(o).then(t=>{const i=t.hits;if(!i.length){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(i)}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
