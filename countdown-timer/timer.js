let second = document.getElementById("user-second");
let minute = document.getElementById("user-minute");
let hour = document.getElementById("user-hour");
let timer;

let timerDisplay = document.getElementById("timer-input");
console.log(timerDisplay.innerHTML);

function start(){
    if(!timer){
        timer = setInterval(run, 1000);
    }
}

function run(){
    getTimer();
    //second.value--;
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        reset();
    }
    if(minute.value == 0){
        minute.value = 60;
        hour.value--;
    }
    if(second.value == 0){
        second.value = 60;
        minute.value--;
    }
    second.value--;
}
function stopTimer(){
    clearInterval(timer);
    timer = false;
}
function pause(){
    stopTimer();
}
function reset(){
    stopTimer();
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    getTimer();
}

function getTimer(){
    timerDisplay.innerHTML = `<div class="timerDisplay" id="timerDisplay">
                                <span id="hour">${hour.value}</span>:
                                <span id="minute">${minute.value}</span>:
                                <span id="second">${second.value}</span>
                                </div>`
}





