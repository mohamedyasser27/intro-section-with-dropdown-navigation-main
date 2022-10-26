let openMenuBtn = document.querySelector(".openMenuBtn");
let closeMenuBtn = document.querySelector(".closeMenuBtn");
let sideMenu = document.querySelector(".sideMenu");
closeMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("invisible");
});
openMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("invisible");
});
