// Constants and variables
const QUIZ_OPTIONS = ["sum", "sub", "pow", "mult"];
const QUIZ_Q = $("#quiz-q");
const QUIZ_ANSWER = $("#quiz-answer");
let answer;

// Functions
// Generates question 1
$("#quiz-generate").click(() => {
  genQuestion(chooseQuestion());
  QUIZ_ANSWER.css("display", "inline-block");
});

// Chooses a type of question
function chooseQuestion() {
  const QUIZ_CHOOSE = Math.random() * QUIZ_OPTIONS.length;
  let chosen = Math.floor(QUIZ_CHOOSE);

  return QUIZ_OPTIONS[chosen];
}

// Generates a question and answer based on chosen type
function genQuestion(type) {
  let num1, num2;
  num2 = Math.round(Math.random() * 100);
  num1 = Math.round(Math.random() * 100);
  numpow = Math.round(Math.random() * 4);
  switch (type) {
    case "sum":
      QUIZ_Q.html(`How much is ${num1} + ${num2}?`);
      answer = num1 + num2;
      break;
    case "sub":
      QUIZ_Q.html(`How much is ${num1} - ${num2}?`);
      answer = num1 - num2;
      break;
    case "pow":
      QUIZ_Q.html(`How much is ${num1} to the power of ${numpow}?`);
      answer = Math.pow(num1, numpow);
      break;
    case "mult":
      QUIZ_Q.html(`How much is ${num1} times ${num2}?`);
      answer = num1 * num2;
      break;
    default:
      console.log("ERROR_ON_genQuestion");
      break;
  }
  genAnswer(answer, type);
}

// Generates the answer inputs alongside the correct one
function genAnswer(answer, type) {
  let quizAnswers = ["", "", "", ""];
  let rand = Math.floor(Math.random() * quizAnswers.length);
  quizAnswers[rand] = answer;
  for (i in quizAnswers) {
    rand = chooseTypeRand(rand, type, answer);
    if (quizAnswers[i] == "") {
      quizAnswers[i] = rand;
      QUIZ_Q[0].innerHTML += `<div class="d-flex"><input id="quiz-gen-${i}" type="radio" name="answer" value="${quizAnswers[i]}""><label for="quiz-gen-${i}">${quizAnswers[i]}</label></div>`;
    } else {
      QUIZ_Q[0].innerHTML += `<div class="d-flex"><input id="quiz-gen-answer" type="radio" name="answer" value="${quizAnswers[i]}""><label for="quiz-gen-answer">${answer}</label></div>`;
    }
  }
}

// Generates the incorrect answers
function chooseTypeRand(rand, type, answer) {
  rand = answer;
  switch (type) {
    case "sum":
      while (rand == answer) {
        rand = Math.round(Math.random() * 100) + Math.round(Math.random() * 5);
      }
      break;
    case "sub":
      while (rand == answer) {
        rand = Math.round(Math.random() * 100) - Math.round(Math.random() * 5);
      }
      break;
    case "pow":
      while (rand == answer) {
        rand = Math.pow(Math.round(Math.random() * 20), Math.round(Math.random() * 2));
      }
      break;
    case "mult":
      while (rand == answer) {
        rand = Math.round(Math.random() * 100) * Math.round(Math.random() * 5);
      }
      break;
    default:
      console.log("ERROR_ON_chooseTypeRand");
      break;
  }
  return rand;
}

// Answers question and validates it
QUIZ_ANSWER.click(() => {
  let ansradio = $("#quiz-gen-answer");

  if (ansradio.is(":checked", true)) {
    QUIZ_Q.html(`<p>Resposta correta</p>`);
  } else {
    QUIZ_Q.html(`<p>Resposta incorreta</p>`);
  }

  QUIZ_ANSWER.css("display", "none");
});
