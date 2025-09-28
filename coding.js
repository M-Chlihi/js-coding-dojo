let userName = 'John';

function showMessage() {
let  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
 console.log(message);
}

console.log( userName ); // John before the function call

showMessage();
console.log( userName );


