let number1 = 10;
let number2 = 6;

function biggerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`The bigger number of ${num1} and ${num2} is ${num1}.`)
        }   else if (num1 < num2) {
                console.log(`The bigger number of ${num1} and ${num2} is ${num2}.`)
            }   else 
            // if (num1 === num2) 
            {
                console.log(`The two numbers, ${num1} and ${num2}, are the same.`)
            }
}

biggerNumber(number1, number2);



