// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log( i ); // a prime
//   }
// }
// showPrimes(4);
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break; // stop checking, it's not prime
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

showPrimes(20);