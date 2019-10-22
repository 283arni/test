const man = document.querySelector('.hero__man');
const area = document.querySelector('.hero');
const layer = document.querySelector('.hero__layer');

const posX = parseInt(getComputedStyle(man).left);

function move(moveY) {
  let cordsY = (moveY / 25) +'px';
  layer.style.top = cordsY;
}

function moveMan(moveX) {
  let cordsX = (moveX / 10)+ posX +'px';
  man.style.left = cordsX;
}

if (window.innerWidth > 768) {
  area.addEventListener('mousemove', (e) => {
    let moveX = e.pageX;
    let moveY = e.pageY;
    moveMan(moveX);
    move(moveY);
  });
}