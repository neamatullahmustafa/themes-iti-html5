"use strict";
let red = document.getElementById("red"),
  green = document.getElementById("green"),
  blue = document.getElementById("blue"),
  opacity = document.getElementById("opacity");

red.addEventListener("input", function () {
  console.log(red.value);
  document.body.style.backgroundColor=
    `rgba(${red.value},${green.value},${blue.value},${opacity.value/100})`
  ;document.querySelector("samp").innerText=`${red.value},${green.value},${blue.value},${opacity.value/100}`
});
green.addEventListener("input", function () {
  document.body.style.backgroundColor=
    `rgba(${red.value},${green.value},${blue.value},${opacity.value/100})`
    document.querySelector("samp").innerText=`${red.value},${green.value},${blue.value},${opacity.value/100}`
});
opacity.addEventListener("input", function () {
  document.body.style.backgroundColor=
    `rgba(${red.value},${green.value},${blue.value},${opacity.value/100})`
  ;document.querySelector("samp").innerText=`${red.value},${green.value},${blue.value},${opacity.value/100}`
});
blue.addEventListener("input", function () {
  document.body.style.backgroundColor=
    `rgba(${red.value},${green.value},${blue.value},${opacity.value/100})`
  ;document.querySelector("samp").innerText=`${red.value},${green.value},${blue.value},${opacity.value/100}`
});
inn