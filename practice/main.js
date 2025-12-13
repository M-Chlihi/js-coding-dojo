// let cownt = document.querySelector("h2");
// let stopconter = document.getElementById("win");
// let parag = document.getElementById("text");
//         parag.innerText = ` thinking...` ;

// function decriment() {
//   cownt.innerHTML -= 1;

//   stopconter.onclick = function () {
//     clearInterval(counter);
//     parag.innerText = ` You stopped conter at ${cownt.innerHTML} ` ;
//   };

//   if (cownt.innerHTML === "0") {
//     clearInterval(counter);
//         parag.innerText = ` Tinming is Done. ` ;
//   }
// }
// let counter = setInterval(decriment, 1500);

let btn = document.getElementById("btn");

window.onscroll = function () {
  if (window.scrollY >= 700) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
