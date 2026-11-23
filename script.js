var P=[
{t:'Enterprise landing zone',l:'Financial services',d:'Designed a multi-subscription Azure landing zone with policy-as-code, hub-and-spoke networking, and Entra ID conditional access for 4,000 staff.',g:['Azure','Entra ID','Bicep'],c:['#2a2110','#6b5220']},
{t:'Data platform on Fabric',l:'Retail and logistics',d:'Consolidated 14 reporting systems into one governed Fabric lakehouse, cutting report refresh time from hours to minutes.',g:['Fabric','Power BI','Purview'],c:['#10202a','#245a73']},
{t:'Microsoft 365 tenant merge',l:'Healthcare group',d:'Merged three tenants after an acquisition with zero mailbox downtime, unified compliance policies, and rolled out Copilot to pilot teams.',g:['Microsoft 365','Intune','Copilot'],c:['#1c1a2e','#4a4585']},
{t:'Copilot-ready app modernization',l:'Public sector',d:'Moved legacy .NET workloads to Azure App Service and Azure OpenAI-backed services with private endpoints and full audit logging.',g:['App Service','Azure OpenAI','Defender'],c:['#1d2410','#52702a']}];
var i=0,$=function(x){return document.getElementById(x)};
function art(c,k){var s='<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient></defs><rect width="800" height="500" fill="url(#a)"/><g fill="none" stroke="#f1ece2" stroke-opacity=".5">';
for(var j=0;j<5;j++){var x=90+j*130,h=120+((j+k)%3)*70;s+='<rect x="'+x+'" y="'+(420-h)+'" width="100" height="'+h+'"/><path d="M'+x+' '+(420-h)+'l50-34 50 34"/>';}
return s+'<path d="M40 420h720" stroke-opacity=".9"/></g></svg>';}
function show(n){i=n;var p=P[n];$('shot').innerHTML=art(p.c,n);$('n').textContent='0'+(n+1)+' / 04';$('t').textContent=p.t;$('l').textContent=p.l;$('d').textContent=p.d;
$('g').innerHTML=p.g.map(function(x){return'<span>'+x+'</span>'}).join('');
[].forEach.call($('tabs').children,function(b,k){b.setAttribute('aria-selected',k===n)});}
P.forEach(function(_,k){var b=document.createElement('button');b.textContent='0'+(k+1);b.setAttribute('role','tab');b.onclick=function(){show(k)};$('tabs').appendChild(b)});
show(0);
var sh=$('sheet'),op=$('open');
function tog(v){sh.classList.toggle('open',v);op.setAttribute('aria-expanded',v)}
op.onclick=function(){tog(true)};$('close').onclick=function(){tog(false)};
[].forEach.call(sh.querySelectorAll('a'),function(a){a.onclick=function(){tog(false)}});
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});
