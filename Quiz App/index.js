let logForm = document.getElementById("log-form");
logForm.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    let name = document.getElementById("userName").value;
    sessionStorage.setItem("name", name);
    location.href = "quizSession.html";
}

let btnNext = document.getElementById("btn-next");
btnNext.addEventListener("click", next);

let question_count = 0;
function next(){
    question_count++;
    console.log(question_count);
}
