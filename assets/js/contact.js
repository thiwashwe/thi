"use strict";

/**
 * navbar toggle
 */

// const overlay = document.querySelector("[data-overlay]");
// const navbar = document.querySelector("[data-navbar]");
// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");

// const navToggleFunc = function () {
//   navToggleBtn.classList.toggle("active");
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// navToggleBtn.addEventListener("click", navToggleFunc);
// overlay.addEventListener("click", navToggleFunc);

// for (let i = 0; i < navbarLinks.length; i++) {
//   navbarLinks[i].addEventListener("click", navToggleFunc);
// }

/**
 * header active on scroll
 */

// const header = document.querySelector("[data-header]");

// window.addEventListener("scroll", function () {
//   window.scrollY >= 10 ? header.classList.add("active")
//     : header.classList.remove("active");
// });

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
