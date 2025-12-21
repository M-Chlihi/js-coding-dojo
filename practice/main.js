let input = document.querySelector(".input");
let addbtn = document.querySelector(".add");
let taskadd = document.querySelector(".tasks");
let form = document.querySelector("form");

window.onload = function () {
  input.focus();
};
// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => createTaskElement(task));



form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

    const task = {
    id: Date.now(),
    title: taskText,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  createTaskElement(task);

  
});
function createTaskElement(task) {
  const li = document.createElement("div");
  li.textContent = task.title;
  li.style.border = "black 2px solid";

 

  li.dataset.id = task.id;


  const delet = document.createElement("button");
  delet.textContent = "delete";
 
  delet.style.padding = "6px 11px";
  delet.style.fontSize = "13px";
  delet.style.fontWeight = "600";
  delet.style.border = "2px brown solid";
  delet.style.background = "red";
  delet.style.borderRadius = "4px";
  delet.style.color = "#fffdfd";
  delet.style.cursor = "pointer";
  
 li.appendChild(delet);
   taskadd.appendChild(li);
  input.value = "";
  //delete tasks
  delet.addEventListener("click", function () {
    // Remove from array
    tasks = tasks.filter(t => t.id !== task.id);
    saveTasks();

    // Remove from DOM
    li.remove();
  });
 }

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Source - https://stackoverflow.com/q/5933157
// Posted by Newbie Coder, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-21, License - CC BY-SA 3.0

// function removeDummy() {
//  var elem = document.getElementById('dummy');
//  elem.parentNode.removeChild(elem);
// }



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
