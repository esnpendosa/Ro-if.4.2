(function(){
var themes=["tani","ternak","ikan"],copy={
tani:{title:"Wawasan untuk <em>pertanian.</em>",lead:"Jelajahi informasi seputar sektor pertanian."},
ternak:{title:"Wawasan untuk <em>peternakan.</em>",lead:"Jelajahi informasi seputar sektor peternakan."},
ikan:{title:"Wawasan untuk <em>perikanan.</em>",lead:"Jelajahi informasi seputar sektor perikanan."}
};
var title=document.getElementById("hero-title"),lead=document.getElementById("hero-lead");
var tabLists=Array.prototype.slice.call(document.querySelectorAll(".about-tabs, .gallery-tabs"));
function setTheme(theme){
if(themes.indexOf(theme)===-1)theme="tani";
document.body.dataset.theme=theme;
document.querySelectorAll("[data-theme-choice]").forEach(function(button){
var selected=button.dataset.themeChoice===theme;
if(button.getAttribute("role")==="tab"){
button.setAttribute("aria-selected",selected?"true":"false");
button.setAttribute("tabindex",selected?"0":"-1");
}else{
button.setAttribute("aria-pressed",selected?"true":"false");
}
});
document.querySelectorAll("[data-about-panel]").forEach(function(panel){
panel.hidden=panel.dataset.aboutPanel!==theme;
});
document.querySelectorAll("[data-feature-example]").forEach(function(example){
example.hidden=example.dataset.featureExample!==theme;
});
document.querySelectorAll("[data-info-theme]").forEach(function(copy){
copy.hidden=copy.dataset.infoTheme!==theme;
});
document.dispatchEvent(new CustomEvent("agrovoice:themechange",{detail:{theme:theme}}));
if(title&&lead){
title.innerHTML=copy[theme].title;
lead.textContent=copy[theme].lead;
}
return theme;
}
function chooseTheme(theme){
var selectedTheme=setTheme(theme);
try{
localStorage.setItem("agrovoice-theme",selectedTheme);
}catch(error){
return selectedTheme;
}
return selectedTheme;
}
var initialTheme="tani";
try{
var savedTheme=localStorage.getItem("agrovoice-theme");
if(themes.indexOf(savedTheme)!==-1)initialTheme=savedTheme;
}catch(error){
initialTheme="tani";
}
setTheme(initialTheme);
document.querySelectorAll("[data-theme-choice]").forEach(function(button){
button.addEventListener("click",function(){
chooseTheme(button.dataset.themeChoice);
});
});
tabLists.forEach(function(tabList){
var tabs=Array.prototype.slice.call(tabList.querySelectorAll('[role="tab"]'));
tabList.addEventListener("keydown",function(event){
if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
event.preventDefault();
var currentIndex=themes.indexOf(document.body.dataset.theme);
var direction=event.key==="ArrowRight"?1:-1;
var nextIndex=(currentIndex+direction+themes.length)%themes.length;
chooseTheme(themes[nextIndex]);
tabs[nextIndex].focus();
});
});
})();

(function(){
var button=document.querySelector(".wa"),footer=document.querySelector("footer");
if(!button||!footer||!("IntersectionObserver" in window))return;
var observer=new IntersectionObserver(function(entries){
button.classList.toggle("at-bottom",entries[0].isIntersecting);
});
observer.observe(footer);
})();

(function(){
var button=document.querySelector(".menu-toggle"),menu=document.getElementById("site-menu"),header=document.querySelector("header");
if(!button||!menu||!header)return;
function closeMenu(){button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Buka menu");menu.classList.remove("open")}
button.addEventListener("click",function(){
var open=button.getAttribute("aria-expanded")!=="true";
button.setAttribute("aria-expanded",open?"true":"false");
button.setAttribute("aria-label",open?"Tutup menu":"Buka menu");
menu.classList.toggle("open",open);
});
menu.querySelectorAll("a").forEach(function(link){link.addEventListener("click",closeMenu)});
document.addEventListener("click",function(event){if(!header.contains(event.target))closeMenu()});
document.addEventListener("keydown",function(event){if(event.key==="Escape")closeMenu()});
})();

(function(){
var g=document.getElementById("gallery");
if(!g)return;
var cards=[].slice.call(g.querySelectorAll(".fl")),dots=document.getElementById("dots"),empty=g.querySelector("[data-gallery-empty]");
var previous=document.querySelector("#galeri .nav.prev"),next=document.querySelector("#galeri .nav.next"),visibleCards=[];
function step(){return visibleCards.length?visibleCards[0].offsetWidth+20:0}
function scrollBehavior(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}
function mark(){
if(!visibleCards.length)return;
var galleryLeft=g.getBoundingClientRect().left,currentIndex=0,nearestDistance=Infinity;
visibleCards.forEach(function(card,index){
var distance=Math.abs(card.getBoundingClientRect().left-galleryLeft-4);
if(distance<nearestDistance){nearestDistance=distance;currentIndex=index}
});
[].forEach.call(dots.children,function(dot,index){
dot.classList.toggle("on",index===currentIndex);
dot.setAttribute("aria-current",index===currentIndex?"true":"false");
});
}
function setGallerySector(theme){
visibleCards=cards.filter(function(card){return card.dataset.sector===theme||card.dataset.sector==="umum"});
cards.forEach(function(card){card.hidden=visibleCards.indexOf(card)===-1});
if(empty)empty.hidden=visibleCards.length>0;
g.setAttribute("aria-labelledby","gallery-tab-"+theme);
dots.textContent="";
visibleCards.forEach(function(card,index){
var dot=document.createElement("button");
dot.type="button";
dot.setAttribute("aria-label","Flyer "+(index+1));
dot.setAttribute("aria-current",index===0?"true":"false");
dot.onclick=function(){g.scrollTo({left:card.offsetLeft-g.offsetLeft-4,behavior:scrollBehavior()})};
dots.appendChild(dot);
});
if(previous)previous.hidden=visibleCards.length<2;
if(next)next.hidden=visibleCards.length<2;
g.scrollTo({left:0,behavior:"auto"});
mark();
}
g.addEventListener("scroll",mark,{passive:true});
if(previous)previous.onclick=function(){g.scrollBy({left:-step(),behavior:scrollBehavior()})};
if(next)next.onclick=function(){g.scrollBy({left:step(),behavior:scrollBehavior()})};
cards.forEach(function(card){
var image=card.querySelector("img");
if(!image)return;
card.querySelector(".img").onclick=function(){
var overlay=document.createElement("div");
overlay.className="lb";
var enlargedImage=new Image();
enlargedImage.src=image.src;
enlargedImage.alt=image.alt;
var close=document.createElement("div");
close.className="x";
close.textContent="×";
overlay.append(enlargedImage,close);
overlay.onclick=function(){overlay.remove()};
document.body.append(overlay);
};
});
document.addEventListener("agrovoice:themechange",function(event){setGallerySector(event.detail.theme)});
setGallerySector(document.body.dataset.theme||"tani");
})();
