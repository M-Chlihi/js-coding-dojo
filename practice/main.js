// // function that checks whether
// // the age is 18 or above
// function checkAdult(age) {
//   console.log("testing  ");// will repeat it 5 times
//   return age >= 18;
// }

// const ageArray = [34, 23, 20, 26, 18];

// //checks if all the array elements
// // pass the checkAdult() function
// let check = ageArray.every(checkAdult);
// console.log(check);
// // Output: false

// let numbers = [ 1 , 2 , 3 , 4 , 6];

// // use arrow function with every()
// let result = numbers.every(element => element < 6);
// console.log(result);

// // Output: true

let words = ["cat", "dog", "bird"];

let containsDog = words.some((w) => w.includes("dog"));
console.log(containsDog);

let passwords = ["22222223", " ", "StrongPass123"]

let hasWeakPassword = passwords.some(p => p.length < 6)
console.log(hasWeakPassword);