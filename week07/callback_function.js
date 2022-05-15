const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc(function(value){
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu'];

people.forEach(person => {
    console.log(person);
})
