// Add JavaScript code here
const form = document.querySelector('form')
const page = document.getElementById('loggedin')
const toggleBtn = document.getElementById('toggleBtn')
const range = document.getElementById('range')

form.addEventListener('submit', e => {
    e.preventDefault()
    const inputs = form.querySelectorAll('input')
    // break if there's nothing inputed in both inputs
    if (!inputs[0].value.trim() && !inputs[1].value.trim()) {
        showError()
        return
    } 

    page.classList.remove('hidden')
    setTimeout(() => {
        page.classList.remove('rotate-y-90')
        form.parentElement.classList.add('hidden')
    }, 500)
    form.parentElement.classList.add('rotate-y-90')
    
})

toggleBtn.addEventListener('click', () => {
    page.classList.toggle('bg-white')
    toggleBtn.classList.toggle('shadow-[0_1px_1px_#0005,0_0_0_7px_#2d3d6e]')
    toggleBtn.classList.toggle('shadow-[0_1px_1px_#0005,0_0_0_7px_#ecedf4]')
    toggleBtn.classList.toggle('bg-white')
    toggleBtn.classList.toggle('text-slate-800')
    range.parentElement.classList.toggle('hidden')

    if (toggleBtn.textContent === "OFF") {
        toggleBtn.innerText = "ON"
        toggleBtn.classList.add('text-slate-800')
        toggleBtn.classList.add('bg-white')
    } else {
        toggleBtn.innerText = "OFF"
        toggleBtn.classList.remove('text-slate-800')
        toggleBtn.classList.remove('bg-white')

        page.style.background = ''
    }
})

range.addEventListener('input', () => {
    page.style.background = `hsl(226, 43%, ${range.value}%)`
})

function showError() {
    const div = document.createElement('div')
    div.className = `w-44 text-center p-2 bg-white rounded-md shadow-md flex flex-col items-center gap-1 -translate-y-[1000px] transition duration-300`
    div.innerHTML = `
        <span class="leading-3 text-xl bg-red-500 text-white rounded-full grid place-items-center w-5 h-5">&times;</span>
        <span>Please fill the inputs</span>
    `
    setTimeout(() => {
        div.classList.remove('-translate-y-[1000px]')
    }, 1)
    setTimeout(() => {
        div.classList.add('-translate-y-[1000px]')
    }, 3000)
    setTimeout(() => {
        div.remove()
    }, 4000)
    document.getElementById('modal-container').appendChild(div)
}