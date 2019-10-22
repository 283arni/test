const btnLeft = document.querySelector('.slider__btn_prev');
const btnRight = document.querySelector('.slider__btn_next');
const list = document.querySelector('.slider__list');
const item = document.querySelector('.slider__item');
const items = document.querySelectorAll('.slider__item');
const widthElem = parseInt(window.getComputedStyle(item).width);
let widthSum = 0;

if(window.innerWidth >= 768) {
  var viewElem = 3;
  var step = 3;
}

if(window.innerWidth <= 768) {
  var viewElem = 2;
  var step = 2;
}

followBtnLift();

btnRight.addEventListener('click', () => {
  sliderGo('next');
});

btnLeft.addEventListener('click', (e) => {
  sliderGo('prev');
});

function sliderGo(way) {

  if(step > viewElem && way === 'prev') {
    step--;
    widthSum -= widthElem;
  }

  if(step < items.length && way === 'next') {
    step++;
    widthSum += widthElem;
  }
 
  followBtnLift();
  translate();
}

function  followBtnLift() {
  step === viewElem ? btnLeft.disabled= true : btnLeft.disabled = false;
  step === items.length ? btnRight.disabled= true : btnRight.disabled = false;
}

function translate() {
  list.style.transform = `translateX(-${widthSum}px)`;
}
