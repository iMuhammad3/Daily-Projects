const button = document.querySelector('button')
let intervalId

button.addEventListener('click', () => {
    if (button.innerText === 'Pause') {
        button.textContent = 'Continue'
        clearInterval(intervalId)
    } else if(button.innerText === 'Continue'){
        intervalId = setInterval(increase, 150)
        button.textContent = 'Pause'
    } else if (button.innerText === 'Restart') {
        const progress = document.querySelector('progress')
        progress.value = 0
        document.querySelector('p>span').textContent = `${progress.value}%`
        button.textContent = 'Pause'
        intervalId = setInterval(increase, 150)
    }
})

function increase() {
    const progress = document.querySelector('progress')
    progress.value += 1
    document.querySelector('p>span').textContent = `${progress.value}%`
    checkIfComplete(progress.value)
}

function checkIfComplete(value) {
    if (value === 100) {
        clearInterval(intervalId)
        button.textContent = 'Restart'
    }
}