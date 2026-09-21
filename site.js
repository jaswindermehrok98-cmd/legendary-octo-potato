document.addEventListener('DOMContentLoaded',()=>{
  const c=window.UNPLUG_SITE||{};
  document.querySelectorAll('[data-config]').forEach(el=>{const k=el.dataset.config;if(c[k])el.textContent=c[k]});
  document.querySelectorAll('[data-href]').forEach(el=>{const k=el.dataset.href;if(c[k])el.href=c[k]});
  document.querySelectorAll('[data-download]').forEach(el=>{if(c.apkDownloadUrl)el.href=c.apkDownloadUrl});
  document.querySelectorAll('[data-wa]').forEach(el=>{if(c.whatsappUrl)el.href=c.whatsappUrl});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.section,.manifest .cell,.cards .card,.roadmap .road,.pro,.article,.footer-grid,.phone-stage').forEach((el,index)=>{
    el.classList.add('reveal');
    el.style.setProperty('--delay',`${Math.min(index%4,3)*90}ms`);
  });
  if(prefersReduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}
  else{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }

  document.querySelectorAll('a[href]').forEach(link=>{
    const href=link.getAttribute('href');
    if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:'))return;
    link.addEventListener('click',event=>{
      if(prefersReduced)return;
      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(()=>{window.location.href=href},220);
    });
  });
  document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('is-open'));
});
