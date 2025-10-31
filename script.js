const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false}
            
        ]
    },
        {
             question: "Which is the smallest country in the world?",
        answers: [
            {text:"Vatican City", correct: True},
            {text:"Bhutan", correct: false},
            {text:"Sri Lanka", correct: false},
            {text:"Nepal", correct: false}
            
        ]
        },

        {
             question: "Which is the largest desert in the world?",
        answers: [
            {text:"Kalahari", correct: false},
            {text:"Gobi", correct: false},
            {text:"Sahara", correct: false},
            {text:"Antarctica", correct: true}
            
        ]
        },
        {
             question: "Which is the smallest continent in the world?",
        answers: [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctica", correct: false},
            {text:"Africa", correct: false}
            
        ]
        }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-btn")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0 // set question to zero
    score = 0
    nextButton.innerHTML = "Next" // when you start the quiz again the button should show next
    showQuestion() 
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex] // will add index 0 for question 1 and index 1 for question 2 and so on...
    let questionNo = currentQuestionIndex + 1 // will need question number so if the question is 1 then index will be 1 and so on...
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button") // create button tag
        button.innerHTML = answer.text
        button.classList.add("btn") // add btn to this button
        answerButton.appendChild(button) // display this button in html div
    })
}