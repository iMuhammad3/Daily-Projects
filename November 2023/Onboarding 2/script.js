
const main = document.querySelector('main')
const nextBtn1 = document.getElementById('nextBtn1')
const nextBtn2 = document.getElementById('nextBtn2')
const skipBtn = document.querySelectorAll('.skipBtn')
const startBtn = document.getElementById('startBtn')
const height = 512

nextBtn1.addEventListener('click', () => {
    main.style.transform = `translateY(-${height}px)`
}) 
nextBtn2.addEventListener('click', () => {
    main.style.transform = `translateY(-${height * 2}px)`
})
skipBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        main.style.transform = `translateY(-${height * 2}px)`
    })
})
startBtn.addEventListener('click', showMessage)

function showMessage() {
    const div = document.createElement('div')
    div.className = `bg-white rounded-lg shadow-lg px-5 py-3 flex items-center gap-2 transition duration-500 absolute top-0 -translate-y-14`
    div.innerHTML = `
        <span class="leading-3 bg-green-100 text-green-500 p-2 rounded-full">&checkmark;</span>
        <span>Welcome!</span>
    `
    setTimeout(() => div.classList.replace('-translate-y-14', 'translate-y-8'), 500)
    setTimeout(() => {
        div.classList.replace('translate-y-8', '-translate-y-14')
        main.style.transform = 'translateY(0)'
    }, 2500)
    setTimeout(() => div.remove(), 5000)
    document.body.appendChild(div)
}