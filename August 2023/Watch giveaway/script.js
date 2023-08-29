const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secsEl = document.querySelector('#secs')



function displayTimeLeft() {
    const timeRemaining = new Date(2023, 12, 26) - new Date()
    const secondsRemaining = Math.floor(timeRemaining / 1000) % 60
    const minutesRemaining = Math.floor(timeRemaining / (1000 * 60)) % 60
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24

    let sec = secondsRemaining.toString()
    let min = minutesRemaining.toString()
    let hr = hoursRemaining.toString()
    if (secondsRemaining < 10) {
        sec = sec.padStart(2, '0')
    }
    if (minutesRemaining < 10) {
        min = min.padStart(2, '0')
    }
    if (hoursRemaining < 10) {
        hr = hr.padStart(2, '0')
    }

    hoursEl.innerHTML = `
        <b>${hr[0]}</b>
        <b>${hr[1]}</b>
    `
    minsEl.innerHTML = `
        <b>${min[0]}</b>
        <b>${min[1]}</b>
    `
    secsEl.innerHTML = `
        <b>${sec[0]}</b>
        <b>${sec[1]}</b>
    `  
}

setInterval(displayTimeLeft, 1000)