
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){

function showQuestions(myQuestions, quizContainer){

      var output = [];
      var answers;

      for var i=0 <myQuestions.length; i++

// code to go here


}

function showResults(myQuestion, quizContainer, resultsContainer){

    // code to go here


}

// show questions

showQuestions(myQuestions, quizContainer);

var myQuestions = [
{
    question: "what is a boolean",

    answers: {

        a: "truth value",
        b: "syntax",
        c: "link",
    },
    correctAnswer: "a"
},
{
        question: "what is an array",

        answers: {
    
            a: "command",
            b: "image",
            c: "list",
     },
    
        correctAnswer: "c"


    },
];


// when user clicks submit, show results

submitButton.onclick = function(){

showResults(question, quizContainer, resultsContainer);

}

}
 
start.addEventListener('click',startquiz)
start.style.display = 'none';
renderQuestion()
