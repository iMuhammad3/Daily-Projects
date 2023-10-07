// Add JavaScript code here
const links = document.querySelectorAll('.links-container a')
const linksContainer = document.querySelector('.links-container')
const popup = document.querySelector('.popup')
const okBtn = document.querySelector('.popup button:first-child')
const cancelBtn = document.querySelector('.popup button:last-child')
const closeBtn = document.getElementById('closeBtn')
let linkToNavigate = null

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        linkToNavigate = link.getAttribute('href')
        popup.classList.remove('hide')
        linksContainer.classList.add('hide')
    })
})

okBtn.addEventListener('click', () => {
    if (linkToNavigate) {
        window.location.href = linkToNavigate
    }
})

cancelBtn.addEventListener('click', () => {
    popup.classList.add('hide')
    linksContainer.classList.remove('hide')
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('hide')
    linksContainer.classList.remove('hide')
})