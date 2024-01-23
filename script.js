//Here is where I declare the main variables
var questions 
var timer 
var initiateQuiz = document.querySelector("#initiate-quiz")

//Here are the questions for the game
var question1 = {
    question : "What is JavaScript?",
    options: ["a. A software", "b. A variable", "c. A programming language that adds interactivity to a webpage"],
    answer: question1.options[2],
}

var question2 = {
    question : "What is var used for?",
    options : ["a. To declare a variable", "b. to add style in css", "c. it has no functionality"],
    answer : question2.options[0],
}

var question3 = {
    question : "What does CSS stand for?",
    options : ["Calling of the style sirens", "b. Cheese street style", "Cascading Style Sheets"],
    answer : question3.options[2],
}


//We use functions to get the quiz questions started
function startQuiz() {
    initiateQuiz 

}
//add event listener for when we click the button for the next question to be displayed
var initiateQuiz = document.getElementById("#initiate-quiz")
document.addEventListener("click", startQuiz)







//I used the exercises provided in class to help write this code
//I am missing many lines of code to complete the challenge.