let myEle = document.createElement("div");
let myAttr = document.createAttribute("data-change");
myEle.className = "divclass";
 myEle.setAttributeNode(myAttr);    
 
 let text = document.createTextNode("this is a JS program");
 let comment = document.createComment("this is new comment ");
 let pudh = document.createCDATASection("this is new section ");

myEle.appendChild(text);
myEle.appendChild(comment);
document.body.appendChild(myEle);


















