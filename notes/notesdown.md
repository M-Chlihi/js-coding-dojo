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
# BOM
### setInterval & clearInterval
```JS
//p^ractise basics
let cownt = document.querySelector("h2");
let stopconter = document.getElementById("win");
let parag = document.getElementById("text");
        parag.innerText = ` thinking...` ;

function decriment() {
  cownt.innerHTML -= 1;

  stopconter.onclick = function () {
    clearInterval(counter);
    parag.innerText = ` You stopped conter at ${cownt.innerHTML} ` ;
  };

  if (cownt.innerHTML === "0") {
    clearInterval(counter);
        parag.innerText = ` Tinming is Done. ` ;
  }
}
let counter = setInterval(decriment, 1500);

```

## windows history object 
history.back() - same as clicking back in the browser 

history.forward() - same as clicking forward in the browser
```JS
<html>
<head>
<script>
function goBack() {
  window.history.back()
}
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">
<input type="button" value="Forward" onclick="goForward()">
</body>
</html>
```
## Scroll To Top Using Y Practice
```JS
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
//css
body{
    width: 3000px;
    height: 3000px;
  }
  #btn{
    background-color: red;
    border: none;
    padding: 10px;
    border-radius: 20%;
    font-weight: bolder;
    position: fixed;
    bottom: 30px;
    right: 20px;
    display: none;
    cursor:pointer;
  }

```
## Local Storage Practice
The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.

The data is stored with no expiration date, and will not be deleted when the browser is closed.

The data will be available for days, weeks, and years.
```JS
//setkey & value in local storage
window.localStorage.setItem("color", "green");
window.localStorage.backgroundColor = "yellow";
window.localStorage["fontSize"] = "20px";
//get key form local storage
console.log(window.localStorage.getItem("backgroundColor"));
console.log(window.localStorage.fontSize);

//rempve or clear localstroage
window.localStorage.clear() //remove all keys
window.localStorage.removeItem("color");

//testing in bodoy
document.body.style.backgroundColor =
  window.localStorage.getItem("backgroundColor");

```
## Destructuring Objects & array & function param
WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.


```js
let user = {
  name: "chlihi",
  age: 19,
  firstName: "mohamed",
  contry: "Morocco",
  skills: {
    html: 70,
    javascript: 80,
  },
};

const {
  name: nm,
  age: g,
  firstName: fstnm,
  contry: cnt,
  skills: { html: ht, javascript: js },
} = user;
console.log(nm);
console.log(g);
console.log(fstnm);
console.log(cnt);
console.log(js);
console.log(ht);
```
## Set Data Types And Methods
 clear, size, keys, values…
 ```JS
 let arr = [1, 2, 3, 5, 1, 4, 1];
let setUniqueValu = new Set(arr);
setUniqueValu.add(2).add("chlihi")
console.log(setUniqueValu);
console.log(setUniqueValu.size);

//Set vs WeakSet And Garbage Collector

 ```
## WeakSet Data Types And Methods
```JS
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automaticall
```

## Map Vs WeakMap  Data Types And Methods
src: 
[https://javascript.info/weakmap-weakset]

## Map Vs WeakMap  Data Types And Methods



## iteration concepts handling (array.from):
```JS
  console.log("#".repeat(20));

let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
create_random = {
min: -1,
max: 90,
lenght: 100,
};

create_random[Symbol.iterator] = function() {
return {
start: 0,
min: this.min,
max: this.max,
lenght: this.lenght,
next(){
  this.start++;
return this.start < this.lenght ? {done:false, value:randint(this.min, this.max)} : {done:true};
}
};
};

let array = Array.from(create_random);
console.log(array);
```
Src: [Javascript info](https://javascript.info/iterable)

  ## array methodes: Copywithin:
  ```JS
  let mainArr = [1,2,3,4,5,6,"MOhamed", "chlihi"]
console.log(mainArr)

mainArr.copyWithin(0, -2)
mainArr.copyWithin(0, -2)

console.log(mainArr)
  ```

  ##  every() method checks if all the array elements pass the given test function.
  ```JS
  // function that checks whether
// the age is 18 or above
function checkAdult(age) {
  console.log("testing  ");// will repeat it 5 times 
  return age >= 18;
}

const ageArray = [34, 23, 20, 26, 18];

//checks if all the array elements
// pass the checkAdult() function
let check = ageArray.every(checkAdult);
console.log(check);
// Output: false



// With the arow function

let numbers = [ 1 , 2 , 3 , 4 , 5];

// use arrow function with every()
let result = numbers.every(element => element < 6);
console.log(result); 

// Output: true
  ```
