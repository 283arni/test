const btnMenu = document.querySelector(".nav__navbar");
const menu = document.querySelector(".nav").innerHTML;

function creatElem() {
  
  const div = document.createElement("div");
  div.classList.add("menu");
  div.innerHTML = menu;

  const links = div.querySelectorAll('.nav__link');

  Array.from(links, link => {
    link.addEventListener("click", () => {
      div.remove();
    });
  });

  return div;
}

btnMenu.addEventListener("click", () => {
  const modal = creatElem();
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.classList.add("menu_open");
  }, 50);
});