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
