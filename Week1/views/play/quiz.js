// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

const dom_progress = document.querySelector(" #progress");
const dom_bar = document.querySelector("#progress-bar");
dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}
function progressBar( ){
  let progressWidth = (runningQuestionIndex / questions.length) * 100;
  dom_bar.style.width = `${progressWidth}%`;

}

function onStart() {
  // Render the current question
  renderQuestion();
  hide ( dom_start);
  // Display the quiz view
   show (dom_quiz);
   show( dom_progress);
}

function checkAnswer(answer){
  onPlayerSubmit(answer);
  renderQuestion();

}
function renderQuestion() {
  // Render the current question on the quiz view
  let question = questions[runningQuestionIndex];
  dom_question.innerHTML = "<p>" + question.title + "</p>";
  dom_choiceA.innerHTML = question.choiceA;
  dom_choiceB.innerHTML = question.choiceB;
  dom_choiceC.innerHTML = question.choiceC;
  dom_choiceD.innerHTML = question.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  let question = questions[runningQuestionIndex];
  if( answer === question.correct){
    score+=10;
  }
  if(runningQuestionIndex < questions.length-1){
    runningQuestionIndex++;
  }
  else {
    hide ( dom_quiz);
    renderSCore();
    show (dom_score);
    hide (dom_progress);

  }
  progressBar();
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  let scorePerCent = Math.round((score / (questions.length * 10)) * 100);
  // choose the image based on the scorePerCent
  let img = "";
  if (scorePerCent >= 80){
    img = "😀";}
    else if ( scorePerCent >=60 && scorePerCent < 80){
      img = "😊";
    } else if ( scorePerCent >= 40 && scorePerCent < 60){
      img = "😑";
    } else if ( scorePerCent >= 20 && scorePerCent < 40){
      img = "😥";
    } else {
      img = "🥲";
    }
  // display the score image and score percent
    dom_score.innerHTML = "<p>" + img + "</p><p>" + scorePerCent + "% </p>";
  }
  //Add progressing bar

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
