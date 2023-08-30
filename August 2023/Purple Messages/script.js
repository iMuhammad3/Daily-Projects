
const people = [
    {
        id: 1,
        pic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80',
        name: 'The Blue guy',
        lastMessage: 'That\'s what I told him',
        time: '12:29'
    },
    {
        pic: 'http://rb.gy/p9fle',
        name: 'JavaScript',
        lastMessage: 'Fine, go learn react🚶🏽‍♂️',
        time: '00:00'
    }
]


const peopleContainer = document.querySelector('.people-container')
const messagesContainer = document.querySelector('.messages-container')
const backBtn = document.querySelector('.fa-chevron-left')


people.forEach(person => {
    const {pic, name, lastMessage, time} = person
    const li = document.createElement('li')

    li.innerHTML = `
            <img src="${pic}" alt="">
            <div>
                <b>${name}</b>
                <small>${lastMessage}</small>
            </div>
            <small class="time">${time}</small>
    `
    peopleContainer.querySelector('main').appendChild(li)
})

const peopleEl = document.querySelectorAll('.people-container li')

peopleEl.forEach(person => {
    person.addEventListener('click', () => {
        messagesContainer.classList.toggle('scale-0')
        peopleContainer.classList.toggle('scale-0')
    })
})
backBtn.addEventListener('click', () => {
    messagesContainer.classList.toggle('scale-0')
    peopleContainer.classList.toggle('scale-0')
})

const input = document.querySelector('.people-container input')
document.querySelector('.fa-magnifying-glass').addEventListener('click', () => {
    input.value = ''
    input.classList.toggle('showInput')
})

input.addEventListener('keyup', () => {
    for (let person of peopleEl) {
        let inputValue = input.value
        let match = person.querySelector('b').textContent

        if (match.toLowerCase().includes(inputValue)) {
            person.style.display = ''
        } else {
            person.style.display = 'none'
        }
    }
})