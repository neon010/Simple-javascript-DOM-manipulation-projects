let btn = document.getElementById("change-color");
const colorsArray = ["red", "blue", "green", "yellow", "black", "orange", "brown"];

btn.addEventListener("click", colorChange);

function colorChange(){
    let randomNumber = Math.floor(Math.random()*colorsArray.length);
    const color = colorsArray[randomNumber];
    document.body.style.backgroundColor = color;
    console.log(document.body.style.backgroundColor);
}
