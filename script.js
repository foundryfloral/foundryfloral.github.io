const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#nav');
function closeNav(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
nav.addEventListener('click',closeNav);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeNav();toggle.focus()}});
document.querySelector('#year').textContent=new Date().getFullYear();
