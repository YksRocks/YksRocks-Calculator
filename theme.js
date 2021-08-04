const circle = document.querySelector(".hello2");
const body = document.querySelector("body");
const calc = document.querySelector(".calc");
const th = document.querySelector(".th");
const resultt = document.querySelector(".result");
const numberss = document.querySelector(".numbers");
const buttonn = document.querySelectorAll("button");
const del = document.querySelector(".del");
const rsb = document.querySelector(".resetbtn");
const eb = document.querySelector(".equalbtn");

const stylee = document.getElementById("stylee");

const theme1 = document.querySelector(".one");
theme1.addEventListener("click", function () {
  circle.classList.remove("colorChange");
  circle.classList.remove("colorChange3");
  stylee.setAttribute("href", "css/theme1/dark_theme.css");
});

const theme2 = document.querySelector(".two");
theme2.addEventListener("click", function () {
  circle.classList.add("colorChange");
  circle.classList.remove("colorChange3");

  stylee.setAttribute("href", "css/theme2/white_theme.css");
});

const theme3 = document.querySelector(".three");
theme3.addEventListener("click", function () {
  circle.classList.add("colorChange3");
  circle.classList.remove("colorChange");
  stylee.setAttribute("href", "css/theme3/purple_theme.css");
});
