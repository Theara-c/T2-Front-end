let index = 0;
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
const questionList = document.querySelector(".question-list");
const addQuestionBtn = document.querySelector(".add");
const addQuestionForm = document.querySelector(".createQ");
const cancelBtn = document.querySelector(".cancel");
const createBtn = document.querySelector(".create");
hide(addQuestionForm);
renderQuestions();

addQuestionBtn.addEventListener("click", function () {
  show(addQuestionForm);
});
cancelBtn.addEventListener("click", function () {
  hide(addQuestionForm);
});
createBtn.addEventListener("click", function () {
  addQuestion();
  hide(addQuestionForm);
});
function addQuestion() {
  const titleQuestion = document.getElementById("title").value;
  const choiceA = document.getElementById("choiceA").value;
  const choiceB = document.getElementById("choiceB").value;
  const choiceC = document.getElementById("choiceC").value;
  const choiceD = document.getElementById("choiceD").value;

  const selectionAnswer = document.querySelector('input[name="answer"]:checked');
  if( titleQuestion && choiceA && choiceB && choiceC && choiceD && selectionAnswer){
    let newQuestion = { 
        title: titleQuestion,
        choiceA: choiceA,
        choiceB: choiceB,
        choiceC: choiceC,
        choiceD: choiceD,
        correct: selectionAnswer.value,
    };
    questions.push(newQuestion);
    renderQuestions();
    clearInput();
  }

}
function clearInput(){
    document.getElementById("title").value = "";
    document.getElementById("choiceA").value = "";
    document.getElementById("choiceB").value = "";
    document.getElementById("choiceC").value = "";
    document.getElementById("choiceD").value = "";
    document.querySelector('input[name = "answer"]:checked').checked = false;
}
function renderQuestions() {
  questionList.innerHTML = "";
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `
        ${index + 1} .<h3>${q.title}</h3>
        <div class = "actions">
            <div id = "edit">Edit</div>
            <div id = "delete">Delete</div>
            </div>
        `;
    questionList.appendChild(questionDiv);
    const deleteBtn = questionDiv.querySelector("#delete");
    const editBtn = questionDiv.querySelector("#edit");
    deleteBtn.addEventListener("click",  () => deleteQuestion(index));
    editBtn.addEventListener("click", () => editQuestion(index));
  });
}
function deleteQuestion(index){
    questions.splice(index, 1);
    renderQuestions();
}
function editQuestion(index){

    let q = questions[index];
    document.getElementById("title").value = q.title;
    document.getElementById("choiceA").value = q.choiceA;
    document.getElementById("choiceB").value = q.choiceB;
    document.getElementById("choiceC").value = q.choiceC;
    document.getElementById("choiceD").value = q.choiceD;
    document.querySelector(`input[name = "answer"][value = "${q.correct}"]`).checked = true;
    show(addQuestionForm);
    deleteQuestion(index);

}
function show(element) {
  element.style.display = "block";
}
function hide(element) {
  element.style.display = "none";
}
