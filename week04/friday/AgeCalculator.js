let userBirthYearAndMonth = prompt('Please input your birth year and birth month as YYYYMM. For example 200107');

document.write(`Your birth year/month (YYYYMM) is ${userBirthYearAndMonth}. `);
document.write("<br>");

let userBirthYear ="";
let userBirthMonth ="";

for (i=0; i< userBirthYearAndMonth.length; i++){
    if (i <= 3){
        userBirthYear = userBirthYear + userBirthYearAndMonth[i];
    } else {
        userBirthMonth = userBirthMonth + userBirthYearAndMonth[i];
    }
}

// document.write(userBirthYear);
// document.write("<br>");
// document.write(userBirthMonth);

let userBirthYearInt = parseInt(userBirthYear);
let userBirthMonthInt = parseInt(userBirthMonth);

// document.write(userBirthYearInt);
// document.write(userBirthMonthInt);
document.write("<br>");


let today = new Date();
//let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//January is 0
let yyyy = today.getFullYear();

currentYearAndMonth = yyyy + mm;
document.write(`Current year/month is ${currentYearAndMonth}.`);

let currentYear = parseInt(yyyy);
let currentMonth = parseInt(mm);

document.write("<br>");

// document.write(currentYear - userBirthYear);

document.write("<br>");

if (currentMonth < userBirthMonth){
    document.write(`Your age is ${currentYear - userBirthYear - 1}.`);
    } else if (currentMonth > userBirthMonth){
    document.write(`Your age is ${currentYear - userBirthYear}.`);} else if (currentMonth = userBirthMonth) {
        document.write(`Your age is ${currentYear - userBirthYear -1}, or you just became ${currentYear - userBirthYear} years old. Happy birth month!!`)
    }

