let number = [2, 9, 3, 5, 6, 7, 4];

for (let i = 0; i < number.length; i++) {
    if (number[i] > number[i+1]) {
    let temp = number[i];
    number[i] = number[i+1];
    number[i+1] = temp;
    }
}

for (let i = number.length; i >= 0; i--) {
    if (number[i] < number[i-1]) {
    let temp = number [i];
    number[i] = number[i-1];
    number[i-1] = temp;
    }
}

console.log(number);