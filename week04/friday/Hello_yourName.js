let user_name = prompt('Please tell me your name');

//document.write(`Hello ${user_name}!`)


function sayHello (name){
    document.write(`Hello ${user_name}!`);
    return name;
}

sayHello();