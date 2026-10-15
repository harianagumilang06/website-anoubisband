var WA_NUMBER="628132992806"; /* isi nomor WhatsApp band, format 62812xxxxxxx */
var photos={"diki": "images/members/diki.jpg", "hgm": "images/members/hgm.jpg", "novard": "images/members/novard.jpg", "rian": "images/members/rian.jpg", "teddy": "images/members/teddy.jpg", "tyar": "images/members/tyar.jpg"};
var members=[["Novard","Guitar","novard"],["Diki","Guitar","diki"],["HGM","Bass","hgm"],["Teddy","Drum","teddy"],["Rian","Vocal","rian"],["Tyar","Keyboard · Guest","tyar"]];
var shows=[["2026-10-21","Wed<br>21 Oct 2026","57 Coffee House","20.00–23.00"],["2026-10-13","Mon<br>13 Oct 2026","57 Coffee House","20.00–23.00"],["2026-10-03","Sat<br>3 Oct 2026","OK Coffee","19.30–23.00"]];
function $(i){return document.getElementById(i)}
function mk(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
var ml=$('ml');
members.forEach(function(m){var a=document.createElement('article');if(m[1].indexOf('Guest')>-1)a.className='guest';
 a.innerHTML='<div class="oval">'+m[0].charAt(0)+'<img src="'+photos[m[2]]+'" alt="'+m[0]+' - '+m[1]+'"></div><h3>'+m[0]+'</h3><p>'+m[1]+'</p>';ml.appendChild(a)});
var ev=$('ev'),today=new Date().toISOString().slice(0,10),up=false;
shows.forEach(function(s){var past=s[0]<today;if(!past)up=true;var d=document.createElement('div');d.className='tk'+(past?' past':'');
 d.innerHTML='<div class="st">'+s[1]+'</div><div class="bd">'+s[2]+'<small>'+s[3]+'</small></div><span class="tg">'+(past?'PAST':'UPCOMING')+'</span>';ev.appendChild(d)});
if(!up){var n=mk('p',0,'No upcoming night yet. Check back soon.');n.style.color='var(--mute)';ev.insertBefore(n,ev.firstChild)}

var beam=$('beam'),lp=$('lp'),rp=$('rp'),sz=$('size');
function weigh(){var v=+sz.value,a=(v-50)/50*13,r=a*Math.PI/180,L=110*Math.cos(r),H=110*Math.sin(r);
 beam.style.transform='rotate('+(-a)+'deg)';lp.style.transform='translate('+(150-L)+'px,'+(40+H)+'px)';rp.style.transform='translate('+(150+L)+'px,'+(40-H)+'px)';
 $('verdict').textContent=v>=66?'The heart outweighs the feather: a big, loud night.':v<=34?'The feather wins: an intimate, easy night.':'Perfectly balanced: a night made for good music.'}
sz.oninput=weigh;
var bg=$('bg'),mn=$('mn');
bg.onclick=function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
mn.onclick=function(e){if(e.target.tagName==='A'){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}};
var plate=$('plate'),hero=$('home');
function fit(){hero.style.setProperty('--hh',hero.offsetHeight+'px')}
fit();addEventListener('resize',fit);
var emb=$('embers');
for(var i=0;i<36;i++){var em=document.createElement('i');em.className='em';var L=i%3===0,R=i%3===1;
 em.style.left=(L?25+Math.random()*7:R?71+Math.random()*7:5+Math.random()*90)+'%';em.style.top=(L||R?58+Math.random()*8:60+Math.random()*34)+'%';
 em.style.animationDelay=(-Math.random()*6)+'s';em.style.animationDuration=(4+Math.random()*4)+'s';emb.appendChild(em)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)addEventListener('pointermove',function(e){plate.style.setProperty('--px',((.5-e.clientX/innerWidth)*20)+'px');plate.style.setProperty('--py',((.5-e.clientY/innerHeight)*10)+'px')});
var sun=$('sun'),calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!calm)addEventListener('scroll',function(){var y=Math.min(scrollY,700);sun.style.transform='translateY('+(y*.12)+'px) scale('+(1+y/600)+')';sun.style.opacity=1-y/900},{passive:true});
var eyes=document.querySelectorAll('.eye'),lw=$('lw');
setTimeout(function(){eyes.forEach(function(e){e.style.opacity=.85})},900);
if(!calm)addEventListener('pointermove',function(e){var r=lw.getBoundingClientRect(),dx=(e.clientX-(r.left+r.width/2))/innerWidth,dy=(e.clientY-(r.top+r.height/2))/innerHeight;
 eyes.forEach(function(x){x.style.transform='translate('+(dx*28)+'px,'+(dy*22)+'px)'})});
var secs=[].slice.call(document.querySelectorAll('[data-ch]')),dots=[].slice.call(document.querySelectorAll('.dots a'));
try{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){var i=secs.indexOf(x.target);dots.forEach(function(d,j){d.className=i===j?'on':''})}})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(function(s){io.observe(s)})}catch(e){}
$('bf').onsubmit=function(e){e.preventDefault();var f=e.target,st=$('st');
 var t='Hello ANOUBIS, I would like to book you.\nName: '+f.n.value+'\nEmail: '+f.e.value+'\nEvent: '+f.t.value+'\nDate: '+(f.d.value||'-')+'\nMessage: '+f.m.value;
 t+='\nSize of the night (0-100): '+f.s.value;
 if(WA_NUMBER){window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(t),'_blank');st.textContent='Opening WhatsApp to send your request.'}
 else{st.textContent='Booking contact is not set yet. Please try again later.'}};
document.documentElement.style.setProperty('--stone','url("'+document.querySelector('.plate img').src+'")');
var rvs=[].slice.call(document.querySelectorAll('.s h2,.s .sub,.s .k,.mem article,.rep>div,.tk,.arch,.band,.book>div,.book form,.hd'));
if(!calm&&'IntersectionObserver' in window){var ro=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');ro.unobserve(x.target)}})},{threshold:.12});
 rvs.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=((i%5)*70)+'ms';ro.observe(el)})}
[].forEach.call(document.querySelectorAll('.big'),function(b){var m=b.textContent.match(/^(\d+)(.*)$/);if(!m||calm||!('IntersectionObserver' in window))return;var n=+m[1],suf=m[2],done=0;b.textContent='0'+suf;
 var io2=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!done){done=1;var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1200);b.textContent=Math.round(n*k)+suf;if(k<1)requestAnimationFrame(f)})(t0)}});io2.observe(b)});
var fab=$('fab'),bk=$('book');
addEventListener('scroll',function(){var r=bk.getBoundingClientRect();fab.classList.toggle('show',scrollY>500&&!(r.top<innerHeight*.6&&r.bottom>0))},{passive:true});
$('ftlogo').src=document.querySelector('.lw img').src;
weigh();
