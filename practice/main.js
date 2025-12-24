let user = {
  name: "chlihi",
  age: 19,
  firstName: "mohamed",
  contry: "Morocco",
};

let myNm = user.name;
let myage = user.age;
let myfrst = user.firstName;
let mycntr = user.contry;
console.log(myNm);
console.log(myage);
({ name: myNm,age: myage, firstName: myfrst, contry: mycntr } = user);
//reriting the elemnt in the object after decalring
console.log(mycntr);
console.log(myage);

// let friends = ["mohamed", "adam", "yakin", ["hamza","abdesalam", ["ferdouas", "tasnim"]]]

// let a = friends[3][0]
// let b = friends[3][2][1]
// console.log(a)//hamza
// console.log(b)//tasnim
