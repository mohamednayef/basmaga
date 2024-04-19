let ex1=document.getElementById('ex1');
let ex2=document.getElementById('ex2');
let but1_ex=document.getElementById('but1_ex');
let but2_ex=document.getElementById('but2_ex');


but1_ex.onclick=function(){
    ex1.style.display='flex';
    ex2.style.display='none';
    but1_ex.style.backgroundColor='rgb(94, 142, 181)'; 
    but1_ex.style.color='white';
    but2_ex.style.color='black';
    but2_ex.style.backgroundColor='white'; 
}
but2_ex.onclick=function(){
    ex1.style.display='none';
    ex2.style.display='flex';
    but1_ex.style.backgroundColor='white'; 
    but2_ex.style.backgroundColor='rgb(94, 142, 181)'; 
    but1_ex.style.color='black';
    but2_ex.style.color='white';
}