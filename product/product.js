const menuLogo = document.querySelector(".menu-logo");
const mostrar = document.querySelector(".menu-item-logo");

menuLogo.addEventListener("click", ()=> {
    mostrar.classList.toggle("mostrar");
});