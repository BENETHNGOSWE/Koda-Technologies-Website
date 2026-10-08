/* Shared local navigation and honest static contact flow. No backend keys or vendor submissions. */
(function(){
const header=document.querySelector('[data-koda-navigation]');
function closeNav(){if(!header)return;header.querySelector('.sidebar-navigation')?.classList.remove('active');header.querySelector('.btn-menu')?.classList.remove('close');header.querySelector('.btn-menu')?.setAttribute('aria-expanded','false');header.querySelector('.dropdown')?.classList.remove('koda-open');header.querySelector('.dropdown > span')?.setAttribute('aria-expanded','false');}
if(header){
 const toggle=header.querySelector('.btn-menu');if(toggle){toggle.setAttribute('role','button');toggle.setAttribute('aria-label','Toggle navigation');toggle.setAttribute('aria-expanded','false');}
 document.addEventListener('click',e=>{
  if(!header.contains(e.target)){closeNav();return;}
  if(e.target.closest('.btn-menu')){e.preventDefault();e.stopImmediatePropagation();const isOpen=header.querySelector('.sidebar-navigation').classList.toggle('active');toggle.classList.toggle('close',isOpen);toggle.setAttribute('aria-expanded',String(isOpen));return;}
  const trigger=e.target.closest('.koda-products-mobile');if(trigger){e.preventDefault();e.stopImmediatePropagation();const menu=trigger.nextElementSibling;const open=menu.classList.toggle('koda-expanded');trigger.setAttribute('aria-expanded',String(open));return;}
  const desktop=e.target.closest('.mega-menu-new-main > .dropdown > span');if(desktop){e.preventDefault();e.stopImmediatePropagation();const open=desktop.parentElement.classList.toggle('koda-open');desktop.setAttribute('aria-expanded',String(open));}
 },true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNav();}if((e.key==='Enter'||e.key===' ')&&e.target.matches('.mega-menu-new-main > .dropdown > span,.btn-menu')){e.preventDefault();e.target.click();}});
}
// Original page content reveal treatment.
if('IntersectionObserver' in window){const ob=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');ob.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.fade-up').forEach(e=>ob.observe(e));}
// Preserve the template's touch-enabled client carousel on Contact.
if(window.Swiper&&document.querySelector('.vretail-trust__swiper'))new Swiper('.vretail-trust__swiper',{loop:true,speed:5000,slidesPerView:6,spaceBetween:30,autoplay:{delay:0,disableOnInteraction:false},allowTouchMove:true,breakpoints:{0:{slidesPerView:2},576:{slidesPerView:3},992:{slidesPerView:6}}});
// Original capability cards switch their corresponding illustration.
document.querySelectorAll('.key-capabilities').forEach((card,i)=>{
 const activate=()=>{document.querySelectorAll('.key-capabilities').forEach(c=>c.classList.remove('active'));card.classList.add('active');document.querySelectorAll('.solutions-animations img').forEach((im,n)=>{im.classList.toggle('d-none',n!==i);im.classList.toggle('d-block',n===i);});};
 card.addEventListener('click',activate);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});
});
const form=document.getElementById('koda-contact-form');
if(form){
 const params=new URLSearchParams(location.search);const product=params.get('product');const service=params.get('service');const labels={kodafreight:'KodaFreight',kodastocks:'KodaStocks',kodasms:'KodaSMS','kodahr-payroll':'KodaHR & Payroll',kodapos:'KodaPOS',achete:'Achete'};
 if(product&&labels[product])form.elements.subject.value='Enquiry about '+labels[product];
 if(service!==null){const services=['Custom software development','ERP configuration','System integration','Business automation','System analysis & UI/UX','Testing, deployment & support'];if(services[Number(service)])form.elements.subject.value=services[Number(service)];}
 form.addEventListener('submit',e=>{e.preventDefault();['name','message'].forEach(key=>{const field=form.elements[key];field.setCustomValidity(field.value.trim()?'':'Please complete this field.');});if(!form.reportValidity())return;
  const data=new FormData(form);const body=`Hello Koda Technologies,\n\n${String(data.get('message')).trim()}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')||'Not provided'}\nPhone: ${data.get('phone')||'Not provided'}`;
  const link=document.getElementById('koda-email-draft');link.href='mailto:info@kodotechnologies.co.tz?subject='+encodeURIComponent(data.get('subject')||'Project enquiry')+'&body='+encodeURIComponent(body);link.hidden=false;
  document.getElementById('koda-form-status').textContent='Your draft is ready. Open it in your email app, review it and send. Nothing has been sent by this website. If no email app is configured, use the email address or phone number shown on this page.';link.focus();
 });
 ['name','message'].forEach(key=>form.elements[key].addEventListener('input',()=>form.elements[key].setCustomValidity('')));
}
const chat=document.querySelector('[data-koda-chat]');if(chat)chat.addEventListener('click',()=>{const input=document.querySelector('.vasy-contactus-chat-input');if(!input.value.trim()){input.focus();return;}location.href='mailto:info@kodotechnologies.co.tz?subject=Business%20enquiry&body='+encodeURIComponent(input.value.trim());});
})();
