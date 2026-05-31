

import { questions } from "./data.js";
let cartona = ``;

for (let i = 0; i < questions.length; i++) {
    cartona += `<div class="question">
        <button class="question-text" id="question-${i + 1}"  data-index="${i}">
          <span>${questions[i].question} </span>
          <img src="./assets/images/icon-plus.svg" alt="open  or closed icon " id="q-${i + 1}-icon">

        </button>
        <div class="question-answer" id="answer-q-${i + 1}">
          <div> 
             <p>${questions[i].answer}</p>
            </div>
         
        </div>
      </div>`
}
document.getElementById("questions-section").innerHTML = cartona;

let parent = document.getElementById("questions-section");
parent.addEventListener("click", function (event) {
    let questionButton = event.target.closest(".question-text");

    if (!questionButton) return;

    toggleAnswer(Number(questionButton.dataset.index));
})



function toggleAnswer(index) {
    const answer = document.getElementById(`answer-q-${index + 1}`);
    const icon = document.getElementById(`q-${index + 1}-icon`);
    const isOpened = answer.classList.contains("active");
    if (isOpened) {
        answer.classList.remove("active");
        icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }
    else {
        answer.classList.add("active");
        icon.setAttribute("src", "./assets/images/icon-minus.svg");
    }
}
