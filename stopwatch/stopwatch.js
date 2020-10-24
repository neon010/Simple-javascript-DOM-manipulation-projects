let ms = 0 , s = 0, m = 0;
let timer;


let stopwatch = document.querySelector(".stopwatch");
let laps = document.querySelector(".laps");

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run(){
    getTimer();
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;
    }
}

function pause(){
    stopTimer();
}

function reset(){
    stopTimer();
    ms = 0 ;
    s = 0;
    m = 0;
    getTimer()
}

function stopTimer(){
    clearInterval(timer);
    timer = false;
}

function getTimer(){
    return stopwatch.textContent = (m < 10 ? "0"+m : m )+ ":" + (s < 10 ? "0"+s: s )+ ":" + (ms < 10 ? "0"+ms: ms) ;
}

/*function restart(){
    stop();
    start();
}*/

function lap(){
    if(timer){
        let li = document.createElement("li");
        li.innerText = getTimer();
        laps.appendChild(li);
    }
}

/*function resetLaps(){
    laps.innerHTML = "";
}*/