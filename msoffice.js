let starter = document.getElementById('starter');
let startLearning = document.getElementById('startLearning');
let lessons = document.getElementById('lessons');
let lessonOne = document.getElementsByClassName('lesson')[0];
let lessonTwo = document.getElementsByClassName('lesson')[1];
let lessonThree = document.getElementsByClassName('lesson')[2];
let lessonFour = document.getElementsByClassName('lesson')[3];

function clickOnStart(){
  startLearning.removeEventListener('click', clickOnStart);
  starter.style.transform = 'translateX(-80px)';
  starter.style.opacity = 0;
  setTimeout(() =>{
    starter.style.display = 'none';
    lessons.style.display = 'flex';
    setTimeout(() =>{
      lessons.style.opacity = 1;
      lessons.style.transform = 'translateY(0)';
      setTimeout(() =>{
        lessonOne.style.opacity = 1;
        lessonOne.style.transform = 'translateX(0)';
        setTimeout(() =>{
          lessonTwo.style.opacity = 1;
          lessonTwo.style.transform = 'translateX(0)';
          setTimeout(() =>{
            lessonThree.style.opacity = 1;
            lessonThree.style.transform = 'translateX(0)';
            setTimeout(() =>{
              lessonFour.style.transform = 'translateX(0)';
              lessonFour.style.opacity = 1;
            }, 400)
          }, 400)
        }, 400)
      }, 800)
    }, 50)
  }, 800)
}

startLearning.addEventListener('click', clickOnStart)