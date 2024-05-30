import { ripple } from "./ripple.js";
import { addEventOnElements } from "../utils/event.js";

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if ($header) {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  }
});

const $rippleElems = document.querySelectorAll("[data-ripple]");

$rippleElems.forEach(($rippleElem) => ripple($rippleElem));

const $navTogglers = document.querySelectorAll("[data-nav-toggler]");
const $navbar = document.querySelector("[data-navigation]");
const $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", function () {
  if ($navbar && $scrim) {
    $navbar.classList.toggle("show");
    $scrim.classList.toggle("active");
  }
});

window.addEventListener("loadstart", function () {
  document.body.style.opacity = "0";
});

window.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "1";
});

const navToggler = document.querySelector("[data-nav-toggler]");
const navigation = document.querySelector("[data-navigation]");

if (navToggler && navigation) {
  navToggler.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });
}
