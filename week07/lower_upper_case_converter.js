let yourName = prompt("Please input your first name. yoU CaN miX uPpercaSe aND LoweRcaSe") 

let nam = [];

const hi = function(){
    let capital = yourName[0].toUpperCase();

    for (let i=1; i < yourName.length; i++){
        nam[i] = yourName[i].toLowerCase();
    }
    document.write(`Have a good day, ${capital}${nam.join("")}!`);
}

hi();
