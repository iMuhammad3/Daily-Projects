// Add JavaScript code here

// This code was written by an amateur

const main = document.querySelector('main')
const addAccBtn = document.querySelector('#addAcc')
const form = document.querySelector('form')
const modal = document.querySelector('#modal-wrapper')

// toggle scale of main container when img icon is clicked
document.querySelector('img').addEventListener('click', () => {
    main.classList.toggle('scale-0')
})

// code to 'add an account'
addAccBtn.addEventListener('click', () => {
    // display modal/form
    modal.classList.remove('hidden')

    form.addEventListener('submit', (e) => {
        // prevent default action of form on submit
        e.preventDefault()

        // get name, email & img and store them in variables
        const name = document.querySelectorAll('form > input')[0].value || "Untitled"
        const email = document.querySelectorAll('form > input')[1].value || "uDintGiveEmail@why.ugh"
        let img = document.querySelectorAll('form > input')[2].value
        // check if img url string is valid image (definitely not a good way to do this)
        if (!img.match("http")) img = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        // calls add account function
        addAccount(name, email, img)
        // hide modal/form
        modal.classList.add('hidden')
    })

    // hide modal when the body is clicked
    modal.addEventListener('click', (e) => {
        e.target === modal && modal.classList.add('hidden')
    })
})


document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => switchAcc(li))
})

function switchAcc(li) {
    // section represents my heading with the 'current account' displayed
    const section = document.querySelector('section')
    section.querySelector('h3').innerText = li.querySelector('h3').textContent
    section.querySelector('img').src = li.querySelector('img').src
    section.querySelector('small').innerText = li.querySelector('small').textContent
}

function addAccount(name, email, img) {
    const li = document.createElement('li')
    li.innerHTML = `
        <img src=${img} alt="">
        <div>
            <h3>${name}</h3>
            <small>${email}</small>
        </div>
    `
    li.addEventListener('click', () => switchAcc(li))
    document.querySelector('ul').appendChild(li)
}