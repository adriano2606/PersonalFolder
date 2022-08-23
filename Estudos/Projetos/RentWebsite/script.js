const hamburguer = document.querySelector(".hamburguer");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    headerNav.classList.toggle("active");
    header.classList.toggle("active");
})

document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    headerNav.classList.remove("active");
}))