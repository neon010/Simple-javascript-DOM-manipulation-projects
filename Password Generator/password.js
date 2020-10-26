let uppercase = "ABCDEFGHIJKLMNOPQRSTUVDXYZ";
let lowercase = "abcdefghijlmnopqrstuvqxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-/";



function generatePassword(){
    let allowed = "";
    if(document.generator.uppercase.checked){
        allowed += uppercase;
    }
    if(document.generator.lowercase.checked){
        allowed += lowercase;
    }
    if(document.generator.numbers.checked){
        allowed += numbers;
    }
    if(document.generator.symbols.checked){
        allowed += symbols;
    }

    let password = "";
    let length = parseInt(document.generator.length.value);
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()*allowed.length);
        password += allowed[random];  
    }
    return password;
}

function getPassword(){
    let ul = document.getElementById("password");
    ul.innerHTML = "";
    let count = parseInt(document.generator.count.value);
    for(let i=0; i < count; i++){
        let li = document.createElement("li");
        li.textContent = generatePassword();
        ul.appendChild(li);
    }
}