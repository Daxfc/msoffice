let showLessons = document.getElementById('showLessons');
let lessonsList = document.getElementById('lessonsList');
let showing = false;


function showHide(){
  if(!showing){
    showLessons.innerHTML = '<<';
    lessonsList.style.right = 0;
    showing = true;
  }
  else{
    showLessons.innerHTML = '>>';
    lessonsList.style.right = '-60%';
    showing = false;
  }
}

showLessons.addEventListener('click', showHide);