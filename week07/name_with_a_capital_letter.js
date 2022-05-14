// Please assign your first name to yourName
// yoU CaN miX uPpercaSe aND LoweRcaSe

let yourName = "mona";
let nam = [];

let capital = yourName[0].toUpperCase();

for (let i=1; i < yourName.length; i++){
    nam[i] = yourName[i].toLowerCase();
}
console.log(`Have a good weekend and all the best to your interview week, ${capital}${nam.join("")}!`);





