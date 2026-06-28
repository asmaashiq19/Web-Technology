//Progress Bar
document.addEventListener('DOMContentLoaded',function(){
 const observer = new IntersectionObserber(entries => {
 entries.forEach(entry =>
 const progressBar =
 entry.target.querySelector('.progress-bar');
 const progress=
 progressBar.dataset.progress;
 if(entry.isIntersecting)
 {
   progressBar.style.setProperty(
     '--progress',
     '${progress}%'
     );
   else{
   progressBar.classList.remove('animated');
   progressBar.style.width="0";
 });
},
  {
      threshold:0.50;
});
const programmingLanguages=
  document.querySelectorAll(
    '#programming-languages.skill'
    );
programmingLanguages.forEach(skill =>{
  observer.observe(skill);
});
});
    
