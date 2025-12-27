let mainArr = [1,2,3,4,5,6,"MOhamed", "chlihi"]
console.log(mainArr)

mainArr.copyWithin(0, -2)
mainArr.copyWithin(0, -2)

console.log(mainArr)
// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// let arr = Array.from(arrayLike); // (*)
// console.log(arr)

//     Number.prototype[Symbol.iterator] = function () {
//         let current = this
//         return {
//             next: () => {
//                 if (current) {
//                     let value = current % 10
//                     current = parseInt(current / 10)
//                     return {value, done: false}
//                 } else {
//                     return {done: true}
//                 }
//             }
//         }
//     }
//     for (let i of 12345) {
//         console.log(i)
//     }
   
//     console.log("#".repeat(20));

// let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// create_random = {
// min: -1,
// max: 90,
// lenght: 100,
// };

// create_random[Symbol.iterator] = function() {
// return {
// start: 0,
// min: this.min,
// max: this.max,
// lenght: this.lenght,
// next(){
// this.start++;
// return this.start < this.lenght ? {done:false, value:randint(this.min, this.max)} : {done:true};
// }
// };
// };

// let array = Array.from(create_random);
// console.log(array);