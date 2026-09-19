const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");

const featuresDropdownButton = document.querySelector(".link-dropdown_features");
const featuresDropdown = document.querySelector(".features-dropdown_menu");

const companyDropdownButton = document.querySelector(".link-dropdown_company");
const companyDropdown = document.querySelector(".company-dropdown_menu");


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");


});

featuresDropdownButton.addEventListener("click", () => {
    featuresDropdown.classList.toggle("active");
});

companyDropdownButton.addEventListener("click", () => {
    companyDropdown.classList.toggle("active");
});

