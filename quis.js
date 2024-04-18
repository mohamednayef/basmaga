let bar=document.getElementById('bar');
let bar2=document.getElementById('bar2');
let ul=document.getElementById('ul');
let nv=document.getElementById('nv');

bar.onclick=function(){
  ul.style.display='flex';
  ul.style.marginTop= '20px';
  nv.style.paddingTop='16px';
  bar.style.display='none';
  bar2.style.display='flex';
  
}
bar2.onclick=function(){
    ul.style.display='none';
    ul.style.marginBottom= '40px';
    nv.style.paddingBottom='16px';
    bar.style.display='flex';
    bar2.style.display='none';
}