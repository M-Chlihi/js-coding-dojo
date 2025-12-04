# Js Notes

# creat products 2 methodes:

methode 1

```JS
for (let i = 0; i < 10; i++) {
  let myele = document.createElement("div");
  let myheadele = document.createElement("h1");
  let mytextele = document.createElement("p");

  let myheader = document.createTextNode("Product Title " + i);
  let myparag = document.createTextNode("this is one of the best product " + i);

  // append header to the div
  myheadele.appendChild(myheader); 
  myele.appendChild(myheadele);

  // append parag to the div
  mytextele.appendChild(myparag);
  myele.appendChild(mytextele);

  myele.className = "product";
  document.body.appendChild(myele);
}
```

---

methode 2

```JS
const frag = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
let mydiv = document.createElement("div");
   mydiv.className = "product";
   mydiv.innerHTML = `
    <h1>Product Title ${i}</h1>
    <p>This is one of the best products ${i}</p>
   `
   frag.appendChild(mydiv)
}
document.body.appendChild(frag);
```

# EVENTS IN JS

### click event

```JS
// first form
document.getElementById("but1").onclick = function(){
      console.log("Button clicked!");
}
// second form using addEventListener
const btn = document.getElementById("but1");
btn.addEventListener("click", function(){
          console.log("Button clicked succesfully!");
})
```
### forme validation advenced 
```js
// html
<a href="https://www.google.com/">google</a>
// html
document.links[0].onmouseenter = function (event) {
  console.log(event);
  // when just user hover on the link the info will be in the console
};
```
```JS
// program check the validation data format using JS
let userinput = document.querySelector("[name='username']");
let ageinput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
  if (userinput.value.length < 11 && ageinput.value != 0) {
    userValid = true;
    ageValid = true;
  }
  console.log(userinput.value.length);
  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
```

```JS
// event stimmulations 
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");

window.onload = function () {
  form1.focus();
};
form1.onblur = function () {
  document.getElementById("cla").focus();
};
```
# CSS Styling
```JS 
let mylink = document.getElementById("links")
mylink.style.fontWeight = "bold";
mylink.style.cssText = "color: red; font-Size: 20px; font-wight: bolder; text-decoration: double ";

mylink.style.removeProperty("color");
mylink.style.setProperty("color", "black");

```