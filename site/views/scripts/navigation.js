const navbar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-item.menu");
const menuList = document.querySelector(".menu-list");

const getMenuIcon = () => {
  navMenu.innerHTML = navbar.classList.contains("active")
    ? feather.icons.x.toSvg()
    : feather.icons.menu.toSvg();
};

getMenuIcon();

navMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  getMenuIcon();
});
