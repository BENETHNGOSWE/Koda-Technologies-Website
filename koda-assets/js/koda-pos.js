/* Local POS template interactions. No vendor tracking, forms, or remote modules. */
(function(){
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const prev='<button type="button" class="slick-prev" aria-label="Previous slide"><i class="fa fa-angle-left" aria-hidden="true"></i></button>';
const next='<button type="button" class="slick-next" aria-label="Next slide"><i class="fa fa-angle-right" aria-hidden="true"></i></button>';
function slider(selector,options){const el=$(selector);if(el.length)el.slick(Object.assign({slidesToShow:1,slidesToScroll:1,speed:600,autoplay:!reduced,autoplaySpeed:4000,arrows:true,dots:false,pauseOnHover:true,prevArrow:prev,nextArrow:next},options));}
slider('#keyfeatures');slider('#solution-features-mob');
slider('#solution-slider',{slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:520,settings:{slidesToShow:2,slidesToScroll:2}}]});
slider('#pos-software',{slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:520,settings:{slidesToShow:1}}]});
slider('#business-sliders',{slidesToShow:3,slidesToScroll:3,autoplay:false,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:520,settings:{slidesToShow:1,slidesToScroll:1}}]});
slider('.why-vasy-video');
// Pair integration categories exactly as in the reference layout.
document.querySelectorAll('.nav-links[data-id]').forEach(tab=>tab.addEventListener('click',e=>{e.preventDefault();const n=+tab.dataset.id,pair=n%2?n+1:n-1;document.querySelectorAll('.nav-links,.payment-arrow,.tab-pane-integration').forEach(el=>{const id=+(el.dataset.id||el.dataset.contentId?.replace('content',''));el.classList.toggle('active',id===n||id===pair);});}));
// Each of the two capability panels controls only its own illustrations.
document.querySelectorAll('.key-capabilities').forEach(card=>{
const activate=e=>{if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();e.stopImmediatePropagation();const num=+(card.id.match(/\d+/)||[1])[0];const isOverview=card.id.startsWith('one');const section=card.closest('section');section.querySelectorAll('.key-capabilities').forEach(c=>c.classList.toggle('active',c===card));section.querySelectorAll('.solutions-animations img').forEach(im=>{const on=im.id===(isOverview?'everything-anim-':'solutions-anim-')+num;im.classList.toggle('d-none',!on);im.classList.toggle('d-block',on);});};
card.addEventListener('click',activate,true);card.addEventListener('keydown',activate,true);
});
document.querySelectorAll('.client-new .splide').forEach((el,i)=>new Splide(el,{type:'loop',perPage:6,gap:20,arrows:false,pagination:false,drag:'free',direction:i%2?'rtl':'ltr',autoScroll:{speed:reduced?0:.5,pauseOnHover:true},breakpoints:{991:{perPage:4},575:{perPage:2}}}).mount(window.splide.Extensions));
window.addEventListener('load',()=>{document.querySelector('.floating-card-1')?.classList.add('animate-floating-card-1');document.querySelector('.floating-card-2')?.classList.add('animate-floating-card-2');document.querySelector('.floating-card-3')?.classList.add('animate-floating-card-4');document.querySelector('.floating-card-4')?.classList.add('animate-floating-card-4');});
const stats=document.querySelector('#standalone-vasy-stats-sec');if(stats){const ob=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){stats.querySelectorAll('.standalone-vasy-stats-progress').forEach(r=>r.style.strokeDashoffset=314.159*(1-(+r.dataset.percent||0)/100));ob.disconnect();}},{threshold:.1});ob.observe(stats);}
})();
