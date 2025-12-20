let input = document.querySelector(".input");
let addbtn = document.querySelector(".add");
let taskadd = document.querySelector(".tasks");
let form = document.querySelector("form");

window.onload = function () {
  input.focus();
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
const taskText = input.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.textContent = taskText;
  // li.style.width = "100%"
  li.style.border = "black 2px solid"


  taskadd.appendChild(li);
  input.value = ""; 
});






// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });
