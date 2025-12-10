console.log(window.innerHeight);
console.log("this is the width of the window: " + window.innerWidth);

document.getElementById("newin").onclick = function () {
  window.open();
};

// let prmptMsg = prompt("are u sure ?", "wrtie yes or No");
// console.log( typeof prmptMsg);

let hadler = setTimeout(() => {
    console.log("hi bro")
}, 3000); 
//excute the function after 3 seocnde 
let btn = document.getElementById("win");
btn.onclick = function () {
  clearTimeout(hadler)
}
// if u click in the timeoput stop and the function cant execute 