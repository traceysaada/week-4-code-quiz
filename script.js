
var 




function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){

// code to go here


}

function showResults(question, quizContainer, resultsContainer){

    // code to go here


}

// show questions

showQuestions(questions, quizContainer);

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

