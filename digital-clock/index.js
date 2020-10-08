let dateTime = new Date();
function getdate(){
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
    printDate.textContent = parseInt(date) < 10 ? `0${date}`: date;
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
    printHour.innerText = localHour < 10 ? `0${hour}`: `0${localHour}`;
    printMinute.textContent = minute < 10 ? `0${minute}`:minute;
    printSecond.textContent = second < 10 ? `0${second}`: second;

    let session = document.getElementById("session");
    session.textContent = hour >= 12 ? "PM" :"AM";
    
    //setInterval(setClock, 500);
}
getdate();
setInterval(getdate,1000);
setInterval(setClock, 500);
setClock();




