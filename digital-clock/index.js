//setInterval(setClock, 1000);

function getdate(){
    let dateTime = new Date();
    let year = dateTime.getFullYear();
    let month = dateTime.getMonth();
    let monthList = ["January", "Feburary", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    let monthName = monthList[month];
    let dayList =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayNum = dateTime.getDay();
    let day = dayList[dayNum];
    let date = dateTime.getDate();
    let printDay = document.getElementById("day");
    let printMonthName = document.getElementById("month");
    let printDate = document.getElementById("day-number");
    let printYear = document.getElementById("year");
    printDay.textContent = day;
    printMonthName.textContent = monthName;
    if(parseInt(date) < 10){
        printDate.textContent = `0${date}`;
    }else{
        printDate.textContent = date;
    }
    printYear.textContent = year;

}
function setClock(){
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let localHour = hour-12;
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let printHour = document.getElementById("hour");
    let printMinute = document.getElementById("minute");
    let printSecond = document.getElementById("second");
    printHour.innerText = localHour < 10 ? `0${localHour}`: hour;
    if(parseInt(minute) < 10){
        printMinute.textContent = `0${minute}`;
    }else{
        printMinute.textContent = minute;
    }
    if(parseInt(second) < 10){
        printSecond.textContent = `0${second}`;
    }else{
        printSecond.textContent = second;
    }
    let session = document.getElementById("session");
    if(hour >= 12){
        session.textContent = "PM"
    }
    //setInterval(setClock, 500);
}
getdate();
setInterval(setClock, 500);
setClock();




