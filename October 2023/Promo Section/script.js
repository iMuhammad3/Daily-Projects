// Add JavaScript code here

window.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1')
    const string = "Ready to start?"
    let index = 0 

    function type() {
        h1.innerHTML = string.slice(0, index)
        index++
        if (index > string.length) {
            clearInterval(id)
            h1.classList.add("animate-pulse")
            h1.classList.remove("border-r-2")
            setTimeout(()=>h1.classList.remove("animate-pulse"), 5000)
        }
    }
    let id = setInterval(type, 100)

    document.querySelector('img').addEventListener('click', (e) => {
        e.target.classList.add('-translate-y-[600px]')

        setTimeout(() => {
            e.target.classList.remove('-translate-y-[600px]')
        }, 2500)
    })
})