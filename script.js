//Declare Questions variable
var myQuestions = [
  {
    question: "what is a boolean",
    answers: ["truth value", "syntax", "link"],
    correctAnswer: "truth value",
  },
  {
    question: "what is an array",
    answers: ["command", "image", "list"],
    correctAnswer: "list",
  },
  {
    question: "what is an jQuery",
    answers: ["command", "library", "notebook"],
    correctAnswer: "library",
  },
  {
    question: "what is a URL",
    answers: ["Web Page", "code", "app"],
    correctAnswer: "Web Page",
  },
  {
    question: "how do we style in coding",
    answers: ["html", "javascript", "css"],
    correctAnswer: "css",
  },
  {
    question: "what have we used to design in html",
    answers: ["bootstrap", "the URL", "the Dom"],
    correctAnswer: "bootstrap",
  },
  {
    question: "the best place to learn coding",
    answers: ["Man Uni", "ready a book", "watching youtube"],
    correctAnswer: "Man Uni",
  }

];
//set timeout if questions not answered within a set time
var sec = 15;
var time =setInterval(myTimer,1000);

 function myTimer(){
  document.getElementById("timer").innerHTML = "You have 15 secs to complete Quiz";
     sec--;
     if (sec == -1){
        clearInterval(time);
        alert("YOU ARE OUT OF TIME!");
     }
   }
        
//Declare variables which get the different sections from the html

var quizContainer = document.getElementById("Quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startQuizButton = document.getElementById("Start");

//Index of the question we want to disply when the quiz is started
var questionIndex = 0; 

//Final score variable to be displayed at the end
var finalScore = 0; 

function startQuiz() {
    var openingHtml = document.getElementById("openingPage");
    openingHtml.style.display = "none"; 
    quizContainer.style.display = "block"
    renderQuestions();
}

function renderQuestions(){
    var questionBeingAskedArea = document.getElementById("question"); 
    questionBeingAskedArea.textContent = myQuestions[questionIndex].question;
    var choicesSection = document.getElementById("choices");
    choicesSection.innerHTML = "";
    var choicesArray = myQuestions[questionIndex].answers; 
    for (var i = 0; i < 3; i++){
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choicesArray[i]);
        choiceButton.textContent = choicesArray[i];
        choiceButton.onclick = checkAnswer; 
        choicesSection.appendChild(choiceButton);
    }
}

function checkAnswer(){
    if (this.value === myQuestions[questionIndex].correctAnswer){
        alert("You are Awsome")
        finalScore++;
    }
    questionIndex++;
    if (questionIndex === myQuestions.length){
        endTheQuiz();
    } else {
    renderQuestions();
    }
}

function endTheQuiz(){
    
    quizContainer.style.display = "none";
    var scoreDisplay = document.getElementById("scoreContainer");
    scoreDisplay.textContent = `Your score out of 7 is: ${finalScore}`;
  
}

startQuizButton.onclick = startQuiz
