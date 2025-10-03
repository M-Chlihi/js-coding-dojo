
// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break; // stop checking, it's not prime
//       }
//     }

//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// showPrimes(20);

//SECOND
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log('Did parents allow you?');
//   }
// }
// function checkAge(age) {
  
//     return(age > 18) ? true : console.log('Did mother allow you?');
// }
// function checkAge(age) {
  
//     return(age > 18) || console.log('Did father allow you?');
// }

// checkAge(2);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);