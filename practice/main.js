let arr = [1, 2, 3, 5, 1, 4, 1];
let setUniqueValu = new Set(arr);
setUniqueValu.add(2).add("chlihi")
console.log(setUniqueValu);
console.log(setUniqueValu.size);

// let chosen = 3;
// let myFrnds = [
//   {title: "moahmed", age: 39, availiable: true, skills:["html", "css"] },
//   {title: "adam", age: 16, availiable: false, skills:["python", "tyescript"] },
//   {title: "hamza", age: 8, availiable: true, skills:["php", "GO"] },
// ]

// let {title,age , availiable, skills} = myFrnds[chosen - 1];
// let lastskills = skills[skills.length -1]
// console.log(`Ur Name: ${title}`)
// console.log(`Ur Age: ${age}`)
// console.log(`status: ${availiable ? "availibale": "Not availiabele"}`)
// console.log(`Ur skill is : ${lastskills}`)

// let user = {
//   name: "chlihi",
//   age: 19,
//   firstName: "mohamed",
//   contry: "Morocco",
//   skills: {
//     html: 70,
//     javascript: 80,
//   },
// };
// //creating elelment
// const p = document.createElement("h2");
// const body = document.querySelector("body");
// showdetails(user);
// body.appendChild(p);
// //function for testing destructions fct
// function showdetails({name: n, age:ag, skills:{javascript: js} } =user ) {

//   p.innerText = `ur last name is: ${n}
//   ur age is: ${ag}
//   ur skills are: ${js}`;
// }
// //challenge
