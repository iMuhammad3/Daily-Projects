// Add JavaScript code here
const closeBtn = document.getElementById('closeBtn')
const openBtn = document.getElementById('openBtn')
const wrapper = document.getElementById('wrapper')
const form = document.querySelector('form')

closeBtn.addEventListener('click', () => {
    wrapper.classList.add('scale-y-0')
    openBtn.classList.remove('scale-x-0')
})
openBtn.addEventListener('click', () => {
    wrapper.classList.remove('scale-y-0')
    openBtn.classList.add('scale-x-0')
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.reset()
})

const translate = '-translate-y-72'
const scale = 'scale-20'

document.querySelector('form > button').addEventListener('click', () => {
    const modal = document.createElement('div')
    modal.className = `bg-white transition duration-300 p-4 shadow shadow-rose-200 rounded-md text-lg ${translate} ${scale}`
    modal.innerHTML = `
        Message Sent &nbsp;<span class="text-green-600 bg-green-200 px-1.5 py-0.5 rounded-full">&check;</span>
    `
    document.getElementById('modal-container').appendChild(modal)
    setTimeout(() => {
        modal.classList.remove(translate)
        modal.classList.remove(scale)
    }, 100)
    setTimeout(() => {
        modal.classList.add(translate)
        modal.classList.add(scale)
    }, 1500)
    setTimeout(() => {
        modal.remove()
    }, 1650)
})