document.addEventListener('DOMContentLoaded',Function(){
  const dmToggle=document.getElementbyId('dom');
  const body=document.body;

dm.Toggle.addEventListener('click',function(){
  body.classList.toggle('dark-mode');

dm.Toggle.querySelector('i').classList.toggle('fa-sun');
dm.Toggle.querySelector('i').classList.toggle('fa-moon');
dm.Toggle.querySelector('i').classList.toggle('light-mode);

});
});
  
