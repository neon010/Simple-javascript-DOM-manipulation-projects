let formulaScreen = document.getElementById("formula-screen");
let outputScreen = document.getElementById("output-screen");



let number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++){
    number[i].addEventListener("click", () => {
        formulaScreen.innerHTML += number[i].innerHTML;
        if(formulaScreen.innerHTML[0] == "0"){
            formulaScreen.innerHTML = formulaScreen.innerHTML.slice(1);
            console.log(formulaScreen.innerHTML);
        }
    })
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i <operator.length; i++) {
    operator[i].addEventListener("click", () => {
        if(operator[i].id == "clear"){
            formulaScreen.innerHTML = "";
            outputScreen.innerHTML = "";
        }else if(operator[i].id == "backspace"){
            formulaScreen.innerHTML = formulaScreen.innerHTML.slice(0,-1);
        }else{
            formulaScreen.innerHTML += operator[i].innerHTML;
            if(operator[i].id == "equal"){
                let exp = formulaScreen.innerHTML.slice(0,-1);
                formulaScreen.innerHTML = exp;
                //const result = eval(formulaScreen.innerHTML);
                const result = eval(exp);
                outputScreen.innerHTML = result;
                formulaScreen.innerHTML = outputScreen.innerHTML;
            }
        }
    })   
}


