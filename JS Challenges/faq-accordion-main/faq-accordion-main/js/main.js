

import { questions } from "./data.js";
let cartona = ``;

for (let i = 0; i < questions.length; i++) {
    cartona += `<div class="question">
        <div class="question-text" id="question-${i + 1}" onclick="toggleAnswer(${i})">
          <h2>${questions[i].question} </h2>
          <img src="./assets/images/icon-plus.svg" alt="" id="q-${i + 1}-icon">

        </div>
        <div class="question-answer" id="answer-q-${i + 1}">
          <div> 
             <p>${questions[i].answer}</p>
            </div>
         
        </div>
      </div>`
}
document.getElementById("questions-section").innerHTML = cartona;
function toggleAnswer(index) {
    console.log("clicked")
    let question = document.getElementById(`question-${index + 1}`);
    let answerOpenedFlag = document.getElementById(`answer-q-${index + 1}`).classList;
    if (answerOpenedFlag.contains("active")) {
        document.getElementById(`answer-q-${index + 1}`).classList.remove("active");
        console.log(document.getElementById(`answer-q-${index + 1}`).classList);
        document.getElementById(`q-${index + 1}-icon`).setAttribute("src", "./assets/images/icon-plus.svg");
    }
    else {
        document.getElementById(`answer-q-${index + 1}`).classList.add("active");
        console.log(document.getElementById(`answer-q-${index + 1}`).classList);
        document.getElementById(`q-${index + 1}-icon`).setAttribute("src", "./assets/images/icon-minus.svg");
    }
}
window.toggleAnswer = toggleAnswer;