let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let selectedRandomDayOfTheWeek;

function selectRandomDayOfTheWeek() {
    selectedRandomDayOfTheWeek = dayOfTheWeek[
        Math.floor(Math.random() * dayOfTheWeek.length)
    ];
    return selectedRandomDayOfTheWeek;
}

let randomDay = selectRandomDayOfTheWeek();

// console.log(randomDay);

let translatedDayOfTheWeekInFrench;

if (randomDay === "Monday"){
        translatedDayOfTheWeekInFrench = "Lundi";
}   else if (randomDay === "Tuesday"){
        translatedDayOfTheWeekInFrench = "Mardi";
}   else if (randomDay === "Wednesday"){
        translatedDayOfTheWeekInFrench = "Mercredi";
}   else if (randomDay === "Thursday"){
        translatedDayOfTheWeekInFrench = "Jeudi";
}   else if (randomDay === "Friday"){
        translatedDayOfTheWeekInFrench = "Vendredi";
}   else if (randomDay === "Saturday"){
        translatedDayOfTheWeekInFrench = "Samedi";
}   else if (randomDay === "Sunday"){
        translatedDayOfTheWeekInFrench = "Dimanche";
}


console.log(`${randomDay} in French is ${translatedDayOfTheWeekInFrench}.`);


