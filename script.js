// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score

const questions = [
    {
        questionNumber: 'Which is a musical instrument?',
        a: 'piano',
        b: 'cartman',
        c: 'optimus prime',
        d: 'karaoke',
        answer: 'piano'
    },
    {
        questionNumber: 'Which is not a musical instrument?',
        a: 'saxophone',
        b: 'tamborine',
        c: 'obo',
        d: 'Xerox',
        answer: 'Xerox'
    }
]

// game logic
// GLOBALS
let currentQuestion;
let timer;
let time = 100;
let score = 0

// when a button is clicked start game
function initGame(){
    // init globals
    currentQuestion = 0
    timer()
    loadNextQuestion(currentQuestion)
}
// when game starts, start countdown timer, and load first question
function runTimer(){
    console.log('timer started')
    timer = setInterval(function(){
        timer--
        document.querySelector('#timer').innerHTML = timer
    }, 1000)
}
// when answer is selected, check answer against question [i] answer
function checkAnswer(){
    currentQuestion++
    loadNextQuestion(currentQuestion)
}
// when answered if its correct increment score, if incorrect decrease timer, then load next question
function loadNextQuestion(currentQuestionIndex){
    console.log(questions[currentQuestionIndex])
}

// when all questions are answered get user initials, and save score to local storage
function saveData(){

}
// ui logic

// button for initGame
document.querySelector('#start').addEventListener('click', initGame)
// button for each answer, run check answer