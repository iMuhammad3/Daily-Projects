// Add JavaScript code here
const interests = [
    {
        img: 'https://i.ytimg.com/vi/mZb_0gUTnTY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDVM1HEKZsdYVGwUOqjKIC5R5clGQ',
        name: 'iCodeThis'
    },
    {
        img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        name: 'Fitness'
    },
    {
        img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Football'
    },
    {
        img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Music'
    },
    {
        img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9iYnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Games'
    },
    {
        img: 'https://images.unsplash.com/photo-1611834422006-f5c6cae90cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvYmJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Fishing'
    },
    {
        img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Cars'
    },
    {
        img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Food'
    },
    {
        img: 'https://images.unsplash.com/photo-1656218257936-8384471a0258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Sleeping'
    },
    {
        img: 'https://images.unsplash.com/photo-1606103920295-9a091573f160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yZWR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Nothing'
    },
]

// div that wraps all the 'interests'
const interestsEl = document.querySelector('.interests')

// display all interest
interests.forEach(interest => {
    const div = document.createElement('div')
    div.className = 'interest'

    div.innerHTML = `
        <img src="${interest.img}" alt="${interest.name}">
        <h4>${interest.name}</h4>
    `
    interestsEl.appendChild(div)
})

// node list of all the interest (like an array containing all interest)
const interestEl = document.querySelectorAll('.interest')

// icodethis
interestEl[0].classList.add('active')
interestEl[0].classList.add('alwaysActive')
// display the tick when interest is clicked
interestEl.forEach(interest => {
    interest.addEventListener('click', () => {
        if (interest.classList.contains('alwaysActive')) {
            alert('Sorry but iCodeThis has to be one of your interests 😌')
            return
        } 
        interest.classList.toggle('active')
    })
    if (!interest.classList.contains('alwaysActive')) {
        interest.firstElementChild.style.objectFit = 'cover'
    }
})

const nextBtn1 = document.querySelector('.nextBtn1')
const nextBtn2 = document.querySelector('.nextBtn2')
const prev1 = document.querySelector('.prev1')
const prev2 = document.querySelector('.prev2')
const interestContainer = document.querySelector('.interest-container')
const profileContainer = document.querySelector('.profile-container')
const accountContainer = document.querySelector('.account-container')
const secondProgress = document.querySelector('.progress > :nth-of-type(2) i')
const lastProgress = document.querySelector('.progress :last-child i')

// when its on the first page
nextBtn1.addEventListener('click', () => {
    interestContainer.classList.toggle('hide')
    accountContainer.classList.toggle('hide')
    secondProgress.classList.add('done')
})
// when its on the second page
nextBtn2.addEventListener('click', () => {
    interestContainer.classList.toggle('hide')
    profileContainer.classList.toggle('hide')
    lastProgress.classList.add('done')
})
// when its on the second page
prev1.addEventListener('click', () => {
    interestContainer.classList.toggle('hide')
    accountContainer.classList.toggle('hide')
    secondProgress.classList.remove('done')
})
// when its on the last page
prev2.addEventListener('click', () => {
    interestContainer.classList.toggle('hide')
    profileContainer.classList.toggle('hide')
    lastProgress.classList.remove('done')
})






// playing around cause im bored
document.querySelector('.fa-eye').addEventListener('click', () => {
    const input = document.querySelector('#myInput')
    if (input.type == 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
})


const myWeirdDiv = document.querySelector('.myWeirdDiv')
const idk = ['20deg','45deg', '70deg', '90deg', '180deg', '220deg']
myWeirdDiv.addEventListener('mousemove', () => {
    myWeirdDiv.style.background = `
        linear-gradient(
        ${idk[Math.floor(Math.random() * (idk.length - 1))]}, 
        rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254}),
        rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254}),
        rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254}),
        rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254})
        )
    `
})