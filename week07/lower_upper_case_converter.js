let yourName = "maRie";

let yourNameCapital = function(){

    document.write(yourName[0].toUpperCase());   

    for (let i=1; i < yourName.length; i++){
        document.write(yourName[i].toLowerCase());
    }    
} 
yourNameCapital();