const start = document.getElementById("start");

start.addEventListener("click", startTimer);

function startTimer(){
    const userHour = document.getElementById("user-hour").value;
    const userMinute = document.getElementById("user-minute").value;
    const userSecond = document.getElementById("user-second").value;
    const container = document.getElementById("timer-container");

    container.innerHTML = `<span id="hour">${userHour}</span>
                            <span id="minute">${userMinute}</span>
                            <span id="second">${userSecond}</span>
                            <button type="button" id="stop">STOP</button>
                            <button type="button" id="start">START</button>
                            <button type="reset" id="reset">RESET</button>`;

    

    console.log(userHour, userMinute, userSecond, container);
}