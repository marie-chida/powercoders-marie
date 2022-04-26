let favoriteAnimals = ['monkey','lion','panda','cat','falcon'];

favoriteAnimals.forEach(function(animal,index){
    console.log(`My number ${index+1} choice is ${animal}.`);
});

favoriteAnimals.forEach((animal,index) => {
    console.log(`My number ${index+1} choice is ${animal}.`);
    });

    for (let i=0; i< favoriteAnimals.length; i++){
        console.log(`My number ${i+1} choice is ${favoriteAnimals[i]}.`);
    }

let i = 0;
while(i < favoriteAnimals.length){
    console.log(`My number ${i+1} choice is ${favoriteAnimals[i]}.`);
    i++;
}

let i=1;
for (const animal of favoriteAnimals) {
    console.log(animal);
    i++;
}

const presidents = {
    names: ['Putin','Trump'],
    countries: ['Russia','USA']
}

let presidentList = [
    {
        lname: 'Putin'
        country: 'Russia'
    },
    {
        lname: 'Biden',
        country: 'USA'
    }
]

presidentList.forEach(president => {
    console.log(`The president of ${president.country} is ${president.lname}.`);
})