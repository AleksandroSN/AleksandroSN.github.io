"use strict";

const headerList = document.querySelector(".header-list");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector(".header");
const headerButton = document.querySelectorAll(".header-language__button");

function mobileMenu() {
  headerList.classList.add("active");
  burgerMenu.classList.add("active");
  header.style.backgroundColor = "#fff";
  document.body.style.overflowY = "hidden";
  burgerMenu.removeEventListener("click", mobileMenu);

  if (burgerMenu.classList.contains("active")) {
    burgerMenu.addEventListener("click", function closeBurger() {
      headerList.classList.remove("active");
      burgerMenu.classList.remove("active");
      header.style.removeProperty("background-color");
      document.body.style.removeProperty("overflow-y");
      burgerMenu.removeEventListener("click", closeBurger);
      burgerMenu.addEventListener("click", mobileMenu);
    });
  }
}

burgerMenu.addEventListener("click", mobileMenu);

if (headerButton) {
  function removeActive() {
    let headerButtonActive = document.querySelectorAll(
      ".header-language__button-active"
    );
    for (let i = 0; i < headerButtonActive.length; i++) {
      headerButtonActive[i].classList.remove("header-language__button-active");
    }
  }

  for (let i = 0; i < headerButton.length; i++) {
    let currentBtn = headerButton[i];
    currentBtn.addEventListener("click", function (event) {
      event.preventDefault();
      removeActive();
      currentBtn.classList.toggle("header-language__button-active");
    });
  }
}
