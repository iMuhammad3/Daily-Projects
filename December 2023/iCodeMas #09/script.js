// Add JavaScript code here
const modalContainer = document.createElement('div')
modalContainer.className = "absolute top-6 flex flex-col gap-2"
document.body.appendChild(modalContainer)

const select = document.querySelector('select')

const colors = ["blue-600", "indigo-600", "teal-600", "amber-600", "pink-600"]

select.addEventListener('change', (e) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    showModal(`<div class="px-5 py-2 rounded-xl border-2 border-${randomColor}">You chose <b class="text-${randomColor}">${e.target.value}</b></div>`)
})

function showModal(message) {
    const div = document.createElement('div')
    div.className = `flex gap-2 items-center max-w-[300px] rounded-xl text-center bg-white text-slate-800 shadow scale-0 -translate-y-96 transition duration-500`
    div.innerHTML = message
    animation(div)
    modalContainer.appendChild(div)
}

function animation(div) {
    setTimeout(() => {
        div.classList.remove('-translate-y-96')
        div.classList.remove('scale-0')
        setTimeout(() => {
            div.classList.add('-translate-y-96')
            div.classList.add('scale-0')
            setTimeout(() => {
                div.remove()
            }, 1000)
        }, 2000)
    }, 10)
}

const moonContainer = document.createElement("div")
moonContainer.className = "absolute top-2 right-3 w-10 h-10 bg-white grid place-items-center rounded-full cursor-pointer z-30"
const moon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
`
moonContainer.innerHTML = moon
moonContainer.addEventListener('click', () => {
    document.body.classList.toggle("invert")
    document.body.classList.toggle("!bg-cyan-900")
})
document.body.appendChild(moonContainer)