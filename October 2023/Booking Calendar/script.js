// Add JavaScript code here
const wrapper = document.querySelector('.wrapper')
document.getElementById('close').addEventListener('click', () => {
    wrapper.classList.add('hide')
    document.querySelector('body > button').classList.remove('hide')
})
document.querySelector('body > button').addEventListener('click', () => {
    wrapper.classList.remove('hide')
    document.querySelector('body > button').classList.add('hide')
})