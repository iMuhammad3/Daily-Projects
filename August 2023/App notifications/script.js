const bell = document.querySelector('.fa-bell')
const container = document.querySelector('.container')

bell.addEventListener('click', () => {
    container.classList.toggle('hide')
})
