"use script";

const menuIcon = document.querySelector(".icon-menu");
const menuBox = document.querySelector(".menu-box");
const closeMenu = document.querySelector(".close-menu");
const navOptions = document.querySelectorAll(".nav-opts");

//to display the menubar
menuIcon.addEventListener("click", () => {
  // menuBox.classList.remove("");
  menuBox.classList.remove("translate-x-[25rem]");
  // menuBox.classList.add("-translate-x-[0rem]");
});

//to close the menu bar
closeMenu.addEventListener("click", () => {
  menuBox.classList.add("translate-x-[25rem]");
  // menuBox.classList.remove("-translate-x-[0rem]");

  //to close the dropdown
  const dropDown = document.querySelectorAll(".nav-opts div");
  dropDown.forEach((el) => {
    if (getComputedStyle(el).display === "flex") {
      el.style.display = "none";
    }
  });
});
// console.log(dropDown);

navOptions.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    if (e.target.matches("p")) {
      const dropDown = e.target.nextElementSibling;

      //to close the dropdown

      if (getComputedStyle(dropDown).display === "flex") {
        dropDown.style.display = "none";
        return;
      }
      //to display the dropdown
      dropDown.style.display = "flex";
    }
  });
});
