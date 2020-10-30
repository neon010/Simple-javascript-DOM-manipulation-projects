let result = 0
const questionEl = document.getElementById("mcq-question");

let name = document.getElementById("userName");
name.textContent = sessionStorage.getItem("name");

let btnnext = document.getElementById("btn-next");


let currentQuiz = 0;

function showMcq(){
    let questions = document.getElementById("mcq");
    questions.innerHTML = `                    
                        <h2>${quiz[currentQuiz].id}. ${quiz[currentQuiz].question}</h2>
                        <ul class="option-group">
                            <li class="option">
                                <input type="radio" name="answer" id="option-answer" value="${quiz[currentQuiz].option1}"> ${quiz[currentQuiz].option1}
                            </li>
                            <li class="option">                        
                                <input type="radio" name="answer" id="option-answer" value="${quiz[currentQuiz].option2}"> ${quiz[currentQuiz].option2}
                            <li class="option">
                                <input type="radio" name="answer" id="option-answer" value="${quiz[currentQuiz].option3}"> ${quiz[currentQuiz].option3}
                            </li>
                            <li class="option">
                                <input type="radio" name="answer" id="option-answer" value="${quiz[currentQuiz].option4}"> ${quiz[currentQuiz].option4}
                            </li>
                        </ul>`

}

function next(){
    if(currentQuiz < quiz.length){
        if(userInputAnswer()==quiz[currentQuiz].answer){
            result++;
            sessionStorage.setItem("result", result);
        };
        currentQuiz++;
        showMcq();
    }else{
        btnnext.textContent = "submit";
        sessionStorage.setItem("time", `${minute} minute and ${seconds} second`);
        clearInterval(myTime);
        location.href = "resultPage.html";
        return;
    }
}


function userInputAnswer(){
    let mcqOptions = document.querySelectorAll("input[name='answer']");
    let userAnswer;
    //let mcqOption = document.getElementById("option-answer");
    for(let answer of mcqOptions){
        if(answer.checked){
            userAnswer = answer.value;
        }
    }
    return userAnswer;
}

let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100*60))/1000);
let minute = Math.floor((time % (1000*60*60))/(1000*60));

let myTime = setInterval(function(){
    if(seconds < 59){
        seconds++
    }else{
        minute++;
        seconds = 0;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}` ;
    let formatted_min = minute < 10 ? `0${minute}` : `${minute}` ;
    document.getElementById("timer").textContent = `${formatted_min} : ${formatted_sec}`;
}, 1000)

showMcq();





