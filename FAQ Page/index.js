//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});






/*traversing the dom
let btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) =>{
    //console.log(btn);
    btn.addEventListener("click", (event)=>{
        let question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
}) */