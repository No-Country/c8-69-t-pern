let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('faBars-icon');
    navbar.classList.toggle('open');
}
