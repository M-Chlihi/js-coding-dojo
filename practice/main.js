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
//creating elelment
const p = document.createElement("h2");
const body = document.querySelector("body");
showdetails(user);
body.appendChild(p);
//function for testing destructions fct
function showdetails({name: n, age:ag, skills:{javascript: js} } =user ) {

  p.innerText = `ur last name is: ${n} 
  ur age is: ${ag} 
  ur skills are: ${js}`;
}
//challenge 
