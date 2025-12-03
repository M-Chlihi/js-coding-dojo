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

// const redirect = document.getElementById("but1")
// redirect.onclick = function(){
//       console.log("Button clicked!");

// }

// let myEle = document.createElement("div");
// let myAttr = document.createAttribute("data-change");
// myEle.className = "divclass";
//  myEle.setAttributeNode(myAttr);

//  let text = document.createTextNode("this is a JS program");
//  let comment = document.createComment("this is new comment ");
//  let pudh = document.createCDATASection("this is new section ");

// myEle.appendChild(text);
// myEle.appendChild(comment);
// document.body.appendChild(myEle);
