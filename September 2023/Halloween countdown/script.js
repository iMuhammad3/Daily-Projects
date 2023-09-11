
(function () {
    const container = document.createElement('div')
    container.classList.add('container')
    const img = document.createElement('img')
    img.src = 'https://i.ibb.co/PCXJw7y/halloween.webp'
    container.appendChild(img)
    const header = document.createElement('header')
    header.innerHTML = `
<span>- countdown to -</span>
<h1>HALLOWEEN</h1>
`
    container.appendChild(header)
    const countdownEl = document.createElement('div')
    countdownEl.classList.add('countdown')
    countdownEl.innerHTML = `
    <div>
        <span id="day">5</span>
        <small>days</small>
    </div>
    <div>
        <span id="hour">2</span>
        <small>hours</small>
    </div>
    <div>
        <span id="min">1</span>
        <small>minute</small>
    </div>
    <div>
        <span id="sec">40</span>
        <small>seconds</small>
    </div>
`
    container.appendChild(countdownEl)

    document.body.appendChild(container)

    const halloween = new Date(2023, 9, 31)

    function countdown() {
        const now = Date.now()
        const daysTillHalloween = halloween - now
        const daysRemain = Math.floor(daysTillHalloween / (1000 * 60 * 60 * 24))
        const hrsRemain = Math.floor(daysTillHalloween / (1000 * 60 * 60)) % 24
        const minsRemain = Math.floor(daysTillHalloween / (1000 * 60)) % 60
        const secsRemain = Math.floor(daysTillHalloween / 1000) % 60
        console.log(daysRemain, hrsRemain, minsRemain, secsRemain)

        function pad(digit) {
            return digit.toString().padStart(2, '0')
        }

        const countdownEl = document.querySelector('.countdown')
        countdownEl.querySelector('#day').innerText = pad(daysRemain)
        countdownEl.querySelector('#hour').innerText = pad(hrsRemain)
        countdownEl.querySelector('#min').innerText = pad(minsRemain)
        countdownEl.querySelector('#sec').innerText = pad(secsRemain)
    }
    setInterval(countdown, 1000)
})()
