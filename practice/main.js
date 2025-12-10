console.log(window.innerHeight);
console.log("this is the width of the window: " + window.innerWidth);

document.getElementById("newin").onclick = function () {
  window.open();
};


let hadler = setTimeout(() => {
    console.log("hi bro")
}, 3000); 
//excute the function after 3 seocnde 
let btn = document.getElementById("win");
btn.onclick = function () {
  clearTimeout(hadler)
}
