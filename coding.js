let age = prompt("What is your age?", 18);

if (age < 18) {
  function welcome() {
    console.log("Hello DEAR YOUNG");
  }
} else {
  function welcome() {
    console.log("you are Greetings!");
  }
}

// ...use it later
welcome();
