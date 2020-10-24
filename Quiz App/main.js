let count = 0;
let btnNext = document.getElementById("btn-next");
let btnPrevious = document.getElementById("btn-previous");

btnNext.addEventListener("click", nextQuestion);
btnPrevious.addEventListener("click", previousQuestion);

function showMcq(){
    let questions = document.getElementById("mcq");
    questions.innerHTML = `                    
                        <h2>${quiz[count].id}. ${quiz[count].question}</h2>
                        <ul class="option-group">
                            <li class="option">
                                <input type="radio" name="choice" value="${quiz[count].option[0]}"> ${quiz[count].option[0]}
                            </li>
                            <li class="option">                        
                                <input type="radio" name="choice" value="${quiz[count].option[1]}"> ${quiz[count].option[1]}
                            <li class="option">
                                <input type="radio" name="choice" value="${quiz[count].option[2]}"> ${quiz[count].option[2]}
                            </li>
                            <li class="option">
                                <input type="radio" name="choice" value="${quiz[count].option[3]}"> ${quiz[count].option[3]}
                            </li>
                        </ul>`

}

function nextQuestion(){
    let choices = document.querySelectorAll('input[name="choice"]');
    for(let i = 0; i <= choices.length-1; i++){
        if (choices[i].checked) {
            const userAnswer = choices[i].value;
            console.log("userAnswer: " +userAnswer, quiz[count].answer);
        }    
    }
    //showMcq(questionCount);
    if(count == 5){
        count = 0;
        showMcq(count);
    }
    //questionCount++;
    showMcq(count);
    count++;
}

function previousQuestion(){
    if(count == 0){
        count = 5;
        showMcq(count);
    }
    count--;
    showMcq(count);
}



