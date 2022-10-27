let openMenuBtn = document.querySelector(".openMenuBtn");
let closeMenuBtn = document.querySelector(".closeMenuBtn");
let sideMenu = document.querySelector(".sideMenu");
closeMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("invisible");
});
openMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("invisible");
});

let collapsedBtns = Array.from(document.querySelectorAll(".collapsedBtn"));
collapsedBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.classList.toggle("expanded");
    event.target.nextElementSibling.classList.toggle("expandedList");
  });
});
