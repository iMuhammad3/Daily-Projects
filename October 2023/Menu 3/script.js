// Add JavaScript code here
const resources = document.getElementById('resources')
const main = document.querySelector('main')

resources.addEventListener('click', () => {
    if (main.classList.contains('scale-0')) {
        main.classList.remove('scale-0')
        resources.classList.add('bg-white')
        resources.querySelector('svg').classList.add('rotate-180')
    } else {
        main.classList.add('scale-0')
        resources.classList.remove('bg-white')
        resources.querySelector('svg').classList.remove('rotate-180')
    }
})