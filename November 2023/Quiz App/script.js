// Add JavaScript code here
const questionEl = document.getElementById('question')
const options = document.getElementById('options-container').querySelectorAll('li')
const nextBtn = document.getElementById('nextBtn')
const timeEl = document.getElementById('time')
const questionRemEl = document.getElementById('questionRemain')
const correctEl = document.getElementById('correct')
let currentQuestion = 0
let correctAnswers = 0
// time remaining in seconds
let timeRemaining = 600

// fetch quiz data from api
async function fetchQuiz() {
    const resp = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    const data = await resp.json()
    return data.results
}

async function loadQuiz() {
    const quiz = await fetchQuiz()
    showQuiz(quiz)
    nextBtn.addEventListener('click', () => nextQuestion(quiz))
    startTimer()
}
function displayOptions(correct_answer, incorrect_answers) {
    const randomPos = Math.floor(Math.random() * 4)
    options[randomPos].querySelector('p').innerHTML = correct_answer
    for (let i = 0; i < options.length; i++){
        if (i !== randomPos) {
            options[i].querySelector('p').innerHTML = incorrect_answers[i]
        }
    }
}
function showQuiz(quiz) {
    correctEl.innerText = `${correctAnswers} correct`
    questionRemEl.innerText = `
    Question ${currentQuestion + 1}(${quiz.length - currentQuestion-1} remaining)
    `
    questionEl.innerHTML = quiz[currentQuestion].question
    displayOptions(quiz[currentQuestion].correct_answer, quiz[currentQuestion].incorrect_answers)
}

function nextQuestion(quiz) {
    if (currentQuestion < quiz.length-1) {    
        currentQuestion++
        showQuiz(quiz)
        removeActive()
    }
}

// sets an 'active state' for when an option is clicked
options.forEach(li => {
    li.addEventListener('click', () => {
        removeActive()
        li.classList.add('bg-gradient-to-r')
        li.classList.add('text-sky-50')
    })
})
function removeActive() {
    options.forEach(li => {
        li.classList.remove('bg-gradient-to-r')
        li.classList.remove('text-sky-50')
    })
}

function startTimer() {
    setInterval(() => {
        timeRemaining--
        const mins = Math.floor(timeRemaining / 60 % 60)
        const secs = timeRemaining % 60
        timeEl.innerText = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }, 1000)
}

loadQuiz()