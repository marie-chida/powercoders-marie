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



let userInput = 0;
let array =[];
let m = 0;
let d = 0;
let c = 0;
let l = 0;
let x = 0;
let v = 0;

userInput = prompt("Please input an integer between 1-2999.");


let thousand = function (){

    if (userInput >= 1000 && userInput < 3000){
        
        m = Math.floor(userInput * 0.001);

        for (let i =0; i < m; i++){
            array.unshift("M");
        }

        document.write(array.join(""));
    } 
  
    return;
}

thousand();




