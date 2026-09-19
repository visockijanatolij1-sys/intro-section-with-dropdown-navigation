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

    const isOpen = menu.classList.contains("active");
    burger.setAttribute("aria-expanded", isOpen);
});

featuresDropdownButton.addEventListener("click", () => {
    featuresDropdown.classList.toggle("active");

    const isOpen = featuresDropdown.classList.contains("active");
    featuresDropdownButton.setAttribute("aria-expanded", isOpen);
});

companyDropdownButton.addEventListener("click", () => {
    companyDropdown.classList.toggle("active");

    const isOpen = companyDropdown.classList.contains("active");
    companyDropdownButton.setAttribute("aria-expanded", isOpen);
});


overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    featuresDropdown.classList.remove("active");
    companyDropdown.classList.remove("active");

    burger.setAttribute("aria-expanded", "false");
    featuresDropdownButton.setAttribute("aria-expanded", "false");
    companyDropdownButton.setAttribute("aria-expanded", "false");
});
