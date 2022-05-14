
let userInput = 0;
let array = [];

// let array1000 = [];
// let array500 = [];
// let array100 = [];
// let array50 = [];
// let array10 = [];
// let array1 = []; 

userInput = prompt("Please input an integer between 1-2999.");


let roman = function (){

    // 1000-2999
    if (userInput >= 1000 && userInput < 3000){
        
        let M1000 = Math.floor(userInput * 0.001);

        for (let i =0; i < M1000; i++){
            array.unshift("M");
        }

        if (M1000 = 1){
            
        }
    } 

    // 500-999
    if (userInput >= 500 && userInput < 1000){
        
        array.push("D");      
        
        if (userInput >= 600 && userInput < 999){
            let C100 = userInput-500;
            C100 = Math.floor(userInput * 0.01);

            for (let i =0; i < C100; i++){
                array.push("C");
            }
        }        

        // document.write(array.join(""));
    } 

    // 100-499
    if (userInput >= 100 && userInput < 500){
        
        let C100 = Math.floor(userInput * 0.01);

        for (let i =0; i < C100; i++){
            array.push("C");
        }

        // document.write(array.join(""));
    } 

    // 50-99
    if (userInput >= 50 && userInput < 99){
        
        array.push("L");      
        
        if (userInput >= 60 && userInput < 99){
            let X10 = userInput-50;
            X10 = Math.floor(userInput * 0.1);

            for (let i =0; i < X10; i++){
                array.push("X");
            }
        }        

        // document.write(array.join(""));
    } 

    // 10-49
    if (userInput >= 10 && userInput < 50){
    
        let X10 = Math.floor(userInput * 0.1);

        for (let i =0; i < X10; i++){
            array.push("X");
        }

        // document.write(array.join(""));
    } 

    // 1-9
    switch(userInput){

        case 9:
            array.push("IX");
        break;

        case 8:
            array.push("VIII");
        break;

        case 7:
            array.push("VII");
            break;

        case 6:
            array.push("VI");
            break;

        case 5:
            array.push("V");
            break;

        case 4:
            array1.push("IV");
            break;

        case 3:
            array.push("III");
            break;

        case 2:
            array.push("II");
            break;

        case 1:
            array.push("I");
            break;

        default:
            console.log("error");

    }
        
    document.write(array.join(""));

    return;
}

roman();
