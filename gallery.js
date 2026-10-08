const imgs=document.querySelectorAll('img[data-gif]');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){if('IntersectionObserver' in window){const watcher=new IntersectionObserver(entries=>{for(const entry of entries){const img=entry.target;const src=entry.isIntersecting?img.dataset.gif:img.dataset.poster;if(img.getAttribute('src')!==src)img.src=src;}},{rootMargin:'120px 0px'});imgs.forEach(img=>watcher.observe(img));}else{imgs.forEach(img=>img.src=img.dataset.gif);}}
const pack=document.querySelector('.pack');if(pack&&/MicroMessenger/i.test(navigator.userAgent)){pack.addEventListener('click',()=>document.getElementById('download-tip').classList.add('visible'));}
