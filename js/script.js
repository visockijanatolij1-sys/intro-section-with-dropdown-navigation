const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});