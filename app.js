/* Created by Tivotal */

const sideBar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll(".nav-item");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  sideBar.classList.toggle("open");
});

//looping through navItems
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    //again looping through navItems
    navItems.forEach((navLink) => {
      //removing active class from all items
      navLink.classList.remove("active");
    });

    //adding class active to clicked item
    item.classList.add("active");
  });
});
