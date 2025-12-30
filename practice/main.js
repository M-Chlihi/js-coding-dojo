let mainArr = [1, 2,12, 3, 4, 5, 6, 8, "MOhamed", "chlihi"];
let rang = {
    min: 10,
    max: 20,
}

let check = mainArr.some(function (e) {
    console.log(this.max);
  return e >= this.min && e <= this.max ;
}, rang);
console.log(check)
