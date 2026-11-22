(function(){
  var MENUS=[
    {id:'hair',label:'Hair',cols:[
      {h:'Collection',links:[['The first BIDAN','index.html#first'],['Accessories','index.html#first'],['Launch list','index.html#notify']]},
      {h:'Explore',links:[['Technology','index.html#technology'],['Materials','about.html#materials'],['Testing','about.html#testing']]},
      {h:'Owners',links:[['Register a product','support.html#register'],['Guides','support.html#guides'],['Care and cleaning','support.html#guides']]}],
      feat:{t:'Arriving 2028',s:'Be the first to know.',href:'index.html#notify'}},
    {id:'technology',label:'Technology',cols:[
      {h:'Inside BIDAN',links:[['Engineering','about.html#engineering'],['Materials','about.html#materials'],['Testing','about.html#testing']]},
      {h:'Standards',links:[['Safety','about.html#standards'],['Durability','about.html#standards'],['Repairability','support.html#repairs']]},
      {h:'Company',links:[['About BIDAN','about.html'],['Founded 2026','about.html'],['Contact','support.html#contact']]}],
      feat:{t:'Built the slow way',s:'Designed, engineered and tested by one team.',href:'about.html'}},
    {id:'support',label:'Support',cols:[
      {h:'Help',links:[['Support home','support.html'],['Guides','support.html#guides'],['Common questions','support.html#faq']]},
      {h:'Service',links:[['Register a product','support.html#register'],['Repairs','support.html#repairs'],['Warranty','support.html#warranty']]},
      {h:'Contact',links:[['Email us','support.html#contact'],['Business inquiries','business.html'],['Press','about.html#press']]}],
      feat:{t:'Support',s:'Help from the people who built it.',href:'support.html'}},
    {id:'stores',label:'Stores',cols:[
      {h:'Find BIDAN',links:[['Store locator','stores.html'],['Retail partners','stores.html#partners'],['Online','index.html#notify']]},
      {h:'Visit',links:[['Locations','stores.html'],['Demonstrations','stores.html#demo'],['Events','stores.html#demo']]},
      {h:'Business',links:[['For business','business.html'],['Partnerships','business.html#wholesale'],['Inquiries','business.html#contact']]}],
      feat:{t:'Stores',s:'Locations announced with the product.',href:'stores.html'}},
    {id:'business',label:'For business',cols:[
      {h:'Professionals',links:[['Salons','business.html#salons'],['Hospitality','business.html#hospitality'],['Retail','business.html#contact']]},
      {h:'Programs',links:[['Wholesale','business.html#wholesale'],['Partnerships','business.html#wholesale']]},
      {h:'Get in touch',links:[['Business inquiries','business.html#contact'],['Press','about.html#press']]}],
      feat:{t:'For business',s:'For salons, hospitality and partners.',href:'business.html'}}
  ];
  var ICON={
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
    user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    bag:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    burger:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chev:'<svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>'
  };
  function li(l){return '<li><a href="'+l[1]+'">'+l[0]+'</a></li>'}
  function panel(m){
    return '<div class="panel" id="panel-'+m.id+'" role="region" aria-label="'+m.label+'"><div class="wrap cols">'
      +'<a class="feat" href="'+m.feat.href+'"><strong>'+m.feat.t+'</strong><span>'+m.feat.s+'</span></a>'
      +m.cols.map(function(c){return '<div><h4>'+c.h+'</h4><ul>'+c.links.map(li).join('')+'</ul></div>'}).join('')
      +'</div></div>';
  }
  var header='<header class="hdr"><div class="wrap bar">'
    +'<a class="logo" href="index.html" aria-label="BIDAN home">BIDAN</a>'
    +'<ul class="menu">'+MENUS.map(function(m){return '<li><button type="button" aria-expanded="false" aria-controls="panel-'+m.id+'" data-menu="'+m.id+'">'+m.label+'</button></li>'}).join('')+'</ul>'
    +'<div class="tools">'
    +'<button type="button" data-open="search" aria-label="Search">'+ICON.search+'<span class="lbl">Search</span></button>'
    +'<a href="support.html#register" aria-label="Account">'+ICON.user+'</a>'
    +'<button type="button" data-open="bag" aria-label="Bag, empty">'+ICON.bag+'</button>'
    +'<button type="button" class="burger" data-open="mnav" aria-label="Menu">'+ICON.burger+'</button>'
    +'</div></div>'+MENUS.map(panel).join('')+'</header>'
    +'<div class="scrim"></div>'
    +'<aside class="drawer left" id="mnav" aria-label="Menu"><div class="top"><span class="logo">BIDAN</span><button class="x" data-close aria-label="Close">'+ICON.x+'</button></div><div class="body"><ul class="mnav">'
    +MENUS.map(function(m){return '<li><button type="button" data-acc>'+m.label+ICON.chev+'</button><ul class="sub">'+m.cols.map(function(c){return c.links.map(li).join('')}).join('')+'</ul></li>'}).join('')
    +'<li><a href="support.html#register">Account</a></li></ul></div></aside>'
    +'<aside class="drawer right" id="search" aria-label="Search"><div class="top"><strong>Search</strong><button class="x" data-close aria-label="Close">'+ICON.x+'</button></div><div class="body"><form class="search" role="search"><input type="search" placeholder="Search BIDAN" aria-label="Search BIDAN" autocomplete="off"><button type="submit" aria-label="Go">'+ICON.search.replace('<svg','<svg style="width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.6"')+'</button></form><p class="search-hint">Try “support”, “stores” or “register”.</p><ul class="mnav" id="sres"></ul></div></aside>'
    +'<aside class="drawer right" id="bag" aria-label="Bag"><div class="top"><strong>Bag</strong><button class="x" data-close aria-label="Close">'+ICON.x+'</button></div><div class="body"><div class="empty"><strong>Your bag is empty.</strong><p>The first BIDAN arrives in 2028. Leave your email and we will tell you the day it is available.</p><a class="btn btn-primary" href="index.html#notify" data-close>Get notified</a></div></div></aside>';

  var footer='<footer class="ftr"><div class="wrap"><div class="cols">'
    +'<div><h4>Shop</h4><ul>'+[['The first BIDAN','index.html#first'],['Accessories','index.html#first'],['Launch list','index.html#notify'],['Store locator','stores.html']].map(li).join('')+'</ul></div>'
    +'<div><h4>Support</h4><ul>'+[['Support home','support.html'],['Register a product','support.html#register'],['Repairs and warranty','support.html#repairs'],['Contact us','support.html#contact']].map(li).join('')+'</ul></div>'
    +'<div><h4>Company</h4><ul>'+[['About BIDAN','about.html'],['Technology','about.html#engineering'],['Testing','about.html#testing'],['Press','about.html#press']].map(li).join('')+'</ul></div>'
    +'<div><h4>Business</h4><ul>'+[['Salons and professionals','business.html#salons'],['Hospitality','business.html#hospitality'],['Wholesale','business.html#wholesale'],['Business inquiries','business.html#contact']].map(li).join('')+'</ul></div>'
    +'<div class="news"><h4>Stay in touch</h4><p>One email when the first BIDAN is ready. Nothing before.</p><form data-mailto="BIDAN updates"><input type="email" required placeholder="Email address" aria-label="Email address"><button type="submit">Sign up</button></form></div>'
    +'</div><div class="base"><span class="region"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>United States</span>'
    +'<ul><li><a href="about.html#legal">Privacy</a></li><li><a href="about.html#legal">Terms</a></li><li><a href="about.html#legal">Accessibility</a></li><li><a href="support.html#contact">Contact</a></li></ul>'
    +'<div class="social"><a href="https://www.instagram.com/bidanhair" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></a>'
    +'<a href="https://www.tiktok.com/@bidanhair" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M14 3h3a5 5 0 0 0 4 4v3a8 8 0 0 1-4-1.3V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z"/></svg></a></div>'
    +'<span>BIDAN LLC 2026</span></div></div></footer>';

  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);

  var scrim=document.querySelector('.scrim'), openPanel=null, openDrawer=null;
  function closePanel(){if(openPanel){openPanel.classList.remove('open');document.querySelector('[data-menu="'+openPanel.id.slice(6)+'"]').setAttribute('aria-expanded','false');openPanel=null;if(!openDrawer)scrim.classList.remove('open')}}
  function showPanel(id){var p=document.getElementById('panel-'+id);if(openPanel===p)return;closePanel();p.classList.add('open');document.querySelector('[data-menu="'+id+'"]').setAttribute('aria-expanded','true');openPanel=p;scrim.classList.add('open')}
  function closeDrawer(){if(openDrawer){openDrawer.classList.remove('open');openDrawer=null;document.body.classList.remove('locked');if(!openPanel)scrim.classList.remove('open')}}
  function openDrawerById(id){closePanel();closeDrawer();var d=document.getElementById(id);d.classList.add('open');openDrawer=d;scrim.classList.add('open');document.body.classList.add('locked');var f=d.querySelector('input');if(f)setTimeout(function(){f.focus()},250)}

  document.querySelectorAll('[data-menu]').forEach(function(b){
    b.addEventListener('click',function(){showPanel(b.dataset.menu)});
    b.addEventListener('mouseenter',function(){if(window.matchMedia('(hover:hover)').matches)showPanel(b.dataset.menu)});
  });
  document.querySelector('.hdr').addEventListener('mouseleave',closePanel);
  document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){openDrawerById(b.dataset.open)})});
  document.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',closeDrawer)});
  scrim.addEventListener('click',function(){closePanel();closeDrawer()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closePanel();closeDrawer()}});
  document.querySelectorAll('[data-acc]').forEach(function(b){b.addEventListener('click',function(){b.parentElement.classList.toggle('open')})});

  // search: static index over the site's own pages
  var INDEX=[['Support home','support.html'],['Register a product','support.html#register'],['Repairs and warranty','support.html#repairs'],['Common questions','support.html#faq'],['Contact us','support.html#contact'],['Store locator','stores.html'],['Retail partners','stores.html#partners'],['For business','business.html'],['Salons and professionals','business.html#salons'],['Hospitality','business.html#hospitality'],['Wholesale','business.html#wholesale'],['About BIDAN','about.html'],['Engineering','about.html#engineering'],['Materials','about.html#materials'],['Testing','about.html#testing'],['Press','about.html#press'],['Get notified','index.html#notify'],['Technology','index.html#technology'],['The first BIDAN','index.html#first']];
  var sform=document.querySelector('#search form'), sres=document.getElementById('sres');
  function runSearch(){var q=sform.querySelector('input').value.trim().toLowerCase();sres.innerHTML='';if(!q)return;var hits=INDEX.filter(function(r){return r[0].toLowerCase().indexOf(q)>-1});sres.innerHTML=hits.length?hits.map(function(r){return '<li><a href="'+r[1]+'">'+r[0]+'</a></li>'}).join(''):'<li><a href="support.html#contact">No results for “'+q.replace(/</g,'')+'”. Ask us directly.</a></li>'}
  sform.addEventListener('submit',function(e){e.preventDefault();runSearch()});
  sform.querySelector('input').addEventListener('input',runSearch);

  // every form on the site is mail-based until there is a backend
  document.querySelectorAll('form[data-mailto]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var subj=f.dataset.mailto, parts=[];
      f.querySelectorAll('input,select,textarea').forEach(function(i){if(i.value&&i.type!=='submit')parts.push((i.name||i.placeholder||i.type)+': '+i.value)});
      window.location.href='mailto:chris@bidanhair.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(parts.join('\n'));
    });
  });
})();
