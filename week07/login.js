let login = async function(name, password){  
    
    let response = await fetch("/login.json");
    console.log(response);

    let data = await response.json();
    console.log(data);

    let userIndex = data.findIndex(user => {
        
        return user.username === name && user.password === password;

    }) 

    if (userIndex < 0){
        return console.log("User was not found.");
    }
    return data[userIndex]

};

login();

let usernameInput = document.getElementById("name");

let passwordInput = document.getElementById("password");

let button = document.querySelector("button");


button.onclick = async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    userInfo.innerText = JSON.parse(await authenticateUser(username,password));
}


