const menuIcon = document.getElementById("menu-icon"); 
const nav = document.getElementById("nav"); 

menuIcon.addEventListener("click", openMenu);

function openMenu() {
    nav.classList.toggle("toggle-nav");
}