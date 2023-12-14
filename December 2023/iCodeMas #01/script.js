// Add JavaScript code here
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const targetDate = new Date(2023, 11, 24)


function countdown() {
    const today = new Date()
    const timeLeft = (targetDate - today) / 1000

    const daysLeft = Math.floor((timeLeft / (60 * 60 * 24) % 365))
    const hoursLeft = Math.floor((timeLeft / (60 * 60)) % 24)
    const minsLeft = Math.floor((timeLeft / 60) % 60)
    const secsLeft = Math.floor(timeLeft % 60)

    daysEl.textContent = format(daysLeft)
    hoursEl.textContent = format(hoursLeft)
    minutesEl.textContent = format(minsLeft)
    secondsEl.textContent = format(secsLeft)
}

const format = (number) => {
    return number.toString().padStart(2, "0")
}

setInterval(countdown, 1000)