
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

start.addEventListener('click',startquiz)
renderQuestion()

generateQuiz(questions, quizContainer, resultsContainer, submitButton);{

function showQuestions(questions, quizContainer){

      var output = [];
      var answers;

      var i=0 <questions.length; i++;{

        answers = [];

        for(letter in questions[i].answers){
         answers.push
        }
          '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">' 
         + letter + ':'
        + questions[i].answers[letter] 
        + '</label>'
          
   }
           output.push
          '<div class=<"question">' + questions[i].question + '</div>'
         + '<div class="answers">' + answers.join('') + '</div>'    
      }
           quizContainer.innerHTML = output.join('');

    //showQuestions(questions, quizContainer);
// code to go here

    }
function showResults(questions, quizContainer, resultsContainer){

    // code to go here
 var answerContainers = quizContainer.queryselectorAll('.answers');

var userAnswer = '';
var numCorrect = 0;

for (var i=0; i<questions.length; i++){

    userAnswer = (answerContainers[i].queryselector('input[name=question'+i+']:checked')||{}).value;

    if(userAnswer===questions[i].correctAnswer){
   
        numCorrect++;

    answerContainers[i].style.color ='lightgreen';
}

else{
    answerContainers[i].style.color ='red';
   }
   resultsContainer.innerHTML = numCorrect + 'out of' + question.length;
}

resultsContainer.innerHTML = numCorrect + 'out of' + question.length;

              // show questions

showQuestions(questions, quizContainer);

}
var myQuestions = [
{  
    question: "what is a boolean",

    answer: {
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

// when user clicks submit, show result
submitButton.onclick = function(){

showResults(questions, quizContainer, resultsContainer);

}


