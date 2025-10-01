
let m = ["Ahmed", "Osama", "Sayed","Stop", "Samera"];
let colors = ["Amgad", "Samah", "Ameer", "Omar","Sabir", "Othman", "Amany", "Samia", "Anwar", "Omayma"];

let count = 0 ;
for (let i = 0; i < m.length; i++) {
    if (m[i]==="Stop") {
        break;
    }
     count++;
    
}

document.write(`<h1>We have ${count} Admis</h1>`);

for (let i = 0; i < count; i++) {
    document.write(`<hr>`);
    document.write(`<div class = "team">`);
    document.write(`<span class = "admin-name"> the admine for team  ${i+1} is ${m[i]}</span>`);
    document.write(`<h3> Team Membes: </h3>`);
let k =1
    for (let j = 0; j< colors.length; j++) {
        if (m[i][0] === colors[j][0]) {
        document.write(`<div class= "team"> ${k++} ${colors[j]}</div>`);
        }
    }
document.write(`</div>`);

}