let red = document.getElementById("redValue");
let green = document.getElementById("greenValue");
let blue = document.getElementById("blueValue");


let redSlider = document.getElementById("redSlider");
let greenSlider = document.getElementById("greenSlider");
let blueSlider = document.getElementById("blueSlider");

let colorPick = document.getElementById("colorPick");
let hex = document.getElementById("hexValue");

colorPick.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;

function changeBackgroundColor(){
    colorPick.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
    let hexColorCode = "#" + getHexaCode(redSlider.value) + getHexaCode(greenSlider.value) + getHexaCode(greenSlider.value); 
    hex.value = hexColorCode;
    red.value = redSlider.value;
    green.value = greenSlider.value;
    blue.value = blueSlider.value; 
}

function changesliderAndBackground(){
    colorPick.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    let hexColorCode = "#" + getHexaCode(red.value) + getHexaCode(green.value) + getHexaCode(blue.value); 
    hex.value = hexColorCode;
    redSlider.value = red.value;
    greenSlider.value = green.value;
    blueSlider.value = blue.value;

}


function getHexaCode(value){
    let hexa = parseInt(value).toString(16);
    if(hexa.length == 1){
        hexa = "0"+ hexa;
    }

    return hexa;
}

