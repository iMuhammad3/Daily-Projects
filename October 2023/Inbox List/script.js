// Add JavaScript code here
const messages = [
    {
        name: 'Caleb Waters',
        message: 'Planning to visit Las Vegas ot any other vacational',
        time: '3 hours ago',
        starred: true
    },
    {
        name: 'Manuel Lindsey',
        message: 'Chances are unless you are very lucky you will go thru many',
        time: '2 hours ago',
        starred: false
    },
    {
        name: 'Mark George',
        message: 'Planning to visit Las Vegas ot any other vacational',
        time: 'Yesterday',
        starred: false
    },
    {
        name: 'Lou Fields',
        message: 'Planning to visit Las Vegas ot any other vacational',
        time: 'Yesterday',
        starred: true
    },
    {
        name: 'Devin Smith',
        message: 'Planning to visit Las Vegas ot any other vacational',
        time: '18 Jun',
        starred: false
    },
]

const messagesEl = document.querySelector('.messages')

messages.forEach(msg => {
    const li = document.createElement('li')
    const {name, message, time, starred} = msg
    li.innerHTML = `
        <section>
        <div>
            <svg class="${starred ? 'gold' : ''}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p class="white">${name}</p>
        </div>
        <p>${message}</p>
        </section>
        <span>${time}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1.2em" viewBox="0 0 128 512">
            <path
                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
        </svg>
    `
    messagesEl.appendChild(li)
})

const notification = document.querySelector('.notification')
const inbox = document.querySelector('.inbox')
const arrow = document.getElementById('arrow')
const search = document.querySelector('input')


notification.addEventListener('click', () => {
    notification.classList.add('hide')
    inbox.classList.remove('hide')
})

arrow.addEventListener('click', () => {
    inbox.classList.toggle('hideContent')
})

search.addEventListener('keyup', () => {
    const value = search.value.toLowerCase()
    const p = messagesEl.querySelectorAll('.white')
    const li = messagesEl.querySelectorAll('li')

    for (let i = 0; i < p.length; i++){
        let match = li[i].querySelector('.white').textContent.toLowerCase()

        if (match.indexOf(value) > -1) {
            li[i].style.display = 'flex'
        } else {
            li[i].style.display = 'none'
        }
    }
    
})

