/*
constraints:
- input must be a number, between 0 and 20

*/

for (let i = 0; i <= 20; i++) {
    if (i%2 === 0){
    console.log(`${i} is even.`);
    }
    else {
    //template string always with backticks
    //contencated string with +
    console.log(`${i} is odd.`);
    }
}

let i = 0;
while (i <= 20) {
    i % 2 === ? console.log(`${i} is even.`): console.log(`${i} is odd.`);
    i++;
}

//do while 
let i = 0;
do {
    i % 2 === ? console.log(`${i} is even.`): console.log(`${i} is odd.`);
    i++;
} while (i <= 20)

// forEach loop
// looping through an array


let numbers = [];

for (let i = 0; i <= 20; i++) {
    numbers.push(i);
}

numbers.forEach(number => {
    if (i%2 === 0){
        console.log(`${i} is even.`);
        }
        else {
        //template string always with backticks
        //contencated string with +
        console.log(`${i} is odd.`);
        }
});


    let user_name = prompt('Please tell me your name');
// aregument in calling function
sayMyName(user_name);

// parameter in declaring function
function sayMyName(my_name){
    alert(my_name);
}

sayMyName();

let result = sum(1,2,3);

console.log(result);

result = sum(result,4,7);

// default value 0
function sum(num1=0, num2=0, num3=0){
    console.log(num)
    return num1+num2+num3;
}

function countdown(value){
    if(value>0){
        console.log(value);
        countdown(value -1);
        else {
            console.log('Happy new year');
        }

    }
};  


// parameter argument
// method function
// parameter is variable only in side a function
