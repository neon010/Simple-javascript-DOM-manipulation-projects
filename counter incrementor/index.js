let decreButton = document.getElementById("decrease");
let increbutton = document.getElementById("increase");
let resetButton = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

decreButton.addEventListener("click", () => {
    count--;
    counter.innerText = count;
    //counter.style.color = "#8B0000";
    if(parseInt(counter.innerText) < 0){
        counter.style.color = "#8B0000";
    }else if(parseInt(counter.innerText) > 0){
        counter.style.color = "green";
    }else{
        counter.style.color = "#00008B";
    }
    counter.animate([{opacity: "0.2"}, {opacity: "1"}],{duration:1000, fill:"forwards"})
});
increbutton.addEventListener("click", () => {
    count++;
    counter.innerText = count;
    //counter.style.color = "green";
    if(parseInt(counter.innerText) < 0){
        counter.style.color = "coral";
    }else if(parseInt(counter.innerText) > 0){
        counter.style.color = "green";
    }else{
        counter.style.color = "#00008B";
    }
    counter.animate([{opacity: "0.2"}, {opacity: "1"}],{duration:1000, fill:"forwards"})
});
resetButton.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
    //counter.style.color = "white"
    if(parseInt(counter.innerText) < 0){
        counter.style.color = "#8B0000";
    }else if(parseInt(counter.innerText) > 0){
        counter.style.color = "green";
    }else{
        counter.style.color = "#00008B";
    }
});
