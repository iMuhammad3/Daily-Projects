
const daysEl = document.querySelector('.days-container b')
const hoursEl = document.querySelector('.hours-container b')
const minsEl = document.querySelector('.mins-container b')
const secsEl = document.querySelector('.secs-container b')



function displayTime() {
    const timeRemaining = new Date(2023, 9, 10) - new Date()

    const secondsRemaining = Math.floor(timeRemaining / 1000) % 60
    const minutesRemaining = Math.floor(timeRemaining / (1000 * 60)) % 60
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) % 365

    daysEl.textContent = daysRemaining 
    hoursEl.textContent = hoursRemaining < 10 ? '0' + hoursRemaining : hoursRemaining
    minsEl.textContent = minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining
    secsEl.textContent = secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining
}

setInterval(displayTime, 1000)