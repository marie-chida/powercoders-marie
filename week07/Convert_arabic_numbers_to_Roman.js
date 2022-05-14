// 20220509_11:10

// Convert arabic numbers to Roman
// Write a function to convert from arabic (normal) numbers to Roman Numerals. The Romans wrote numbers using letters: I, V, X, L, C, D, M. There is no need to be able to convert numbers larger than about 3000.
// Example: 7 returns VII
// https://slides.powercoders.org/06-02-ajax+json.html#/37

// ローマ数字では、1はI、2はII、3はIII、4はIV、5はV のように表します。
// 10はX、50はL、100はC、500はD、1000はMです。これらを組み合わせて表します。
// 大きな数字を左に書き、原則として記号の数字をすべて足すとそれが表示している数になります。例えば、6はVI、21はXXIとなります。

// numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
// letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],

// programed by Dominic from here.
// const romanNumbers = {
//     1: "I",
//     4: "IV",
//     5: "V",
//     9: "IX",
//     10: "X",
//     40: "XL",
//     50: "L",
//     90: "XC",
//     100: "C",
//     400: "CD",
//     500: "D",
//     900: "CM",
//     1000: "M",
// }



// function numeralToRoman(numberToConvert){
//     let romanNumber = "";
//     while(numberToConvert > 0){
//         for(const number of Object.keys(romanNumbers).reverse()){
//             if(numberToConvert / number >= 1){
//                 romanNumber = romanNumber + romanNumbers[number];
//                 numberToConvert -= number;
//                 break;
//             }

//         }
//     }
//     return romanNumber;
// }

// console.log(numeralToRoman(499));
// Program by Dominic ends here.




// My original code from here.

let userInput = 0;
let array =[];

userInput = prompt("Please input an integer between 1-2999.");

let thousand = function (){

    if (userInput >= 1000 && userInput < 3000){
        
        let m = Math.floor(userInput * 0.001);

        for (let i =0; i < m; i++){
            array.unshift("M");
        }

        document.write(array.join(""));
    } 
  
    return;
}

thousand();


// if IIII converts to IV?

