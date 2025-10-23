
if (typeof document !== "undefined") {
  const test = document.getElementById("headd"); 

  if (!test) {
    console.log('Element with id "headd" not found');
  } else {
    console.log('hasAttributes?', test.hasAttributes());       
    console.log('has "id"?', test.hasAttribute('id'));         
  }

  
  const h1s = document.getElementsByTagName("h1");
  if (h1s.length > 0) {
    console.log(h1s[0].attributes);

    if (h1s[0].hasAttribute("class")) {
      h1s[0].removeAttribute("class");
    } else {
      h1s[0].setAttribute("class", "newvalue");
    }


    console.log(h1s[0].attributes);
  }
} else {
  console.log("No DOM available (running in Node).");
}
