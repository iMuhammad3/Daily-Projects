
const allDigits = document.querySelectorAll('.digits li')
const displayArea = document.querySelector('.display-area')
const deleteBtn = document.querySelector('#deleteBtn')
const maxLength = 11

allDigits.forEach(digit => {
    digit.addEventListener('click', () => {
        let displayAreaLength = displayArea.textContent.length
        if (displayAreaLength <= maxLength) {
            displayArea.innerHTML += digit.firstElementChild.textContent
        }
        if (displayAreaLength == 3) {
            displayArea.innerHTML += `&nbsp;`
        }
        if (displayAreaLength == 7) {
            displayArea.innerHTML += `&nbsp;`
        }
    })
})

deleteBtn.addEventListener('click', () => {
    const textArray = displayArea.textContent.split('')
    textArray.pop()
    displayArea.textContent = textArray.join('')
})
