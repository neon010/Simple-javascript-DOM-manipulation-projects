let name = sessionStorage.getItem("name");
let result = sessionStorage.getItem("result");
let userTime = sessionStorage.getItem("time");

if(result == ""){
    document.getElementById("Points").textContent = 0;
}else{
    document.getElementById("Points").textContent = result;
}

document.getElementById("name").textContent = name;
document.getElementById("time").textContent = userTime;

function takeQuiz(){
    location.href = "quizSession.html"
}