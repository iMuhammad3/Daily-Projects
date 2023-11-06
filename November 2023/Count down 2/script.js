// Add JavaScript code here
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secsEl = document.querySelector('#secs')

const targetDate = new Date(2023, 11, 1)


function countdown() {
    const today = new Date()
    const timeLeft = (targetDate - today) / 1000

    const daysLeft = Math.floor((timeLeft / (60 * 60 * 24) % 365))
    const hoursLeft = Math.floor((timeLeft / (60 * 60)) % 24)
    const minsLeft = Math.floor((timeLeft / 60) % 60)
    const secsLeft = Math.floor(timeLeft % 60)

    daysEl.textContent = daysLeft.toString().padStart(2, "0")
    hoursEl.textContent = hoursLeft.toString().padStart(2, "0")
    minsEl.textContent = minsLeft.toString().padStart(2, "0")
    secsEl.textContent = secsLeft.toString().padStart(2, "0")
}

setInterval(countdown, 1000)