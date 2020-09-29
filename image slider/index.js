let  previous = document.getElementById("btn previous");
let next = document.getElementById("btn next");
let div = document.getElementById("images");
console.log(div);
let counter = 0;

previous.addEventListener("click", () => {
    if(counter === 0){
        counter = 8;
    }
    counter--;
    div.style.background = `url("images/img-0${counter}.jpg")`;
})
next.addEventListener("click", () => {
    if(counter === 8){
        counter = -1;
    }
    counter++;
    div.style.background = `url("images/img-0${counter}.jpg")`;
})