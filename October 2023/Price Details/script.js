// Add JavaScript code here

setTimeout(() => {
    document.querySelectorAll('.circle').forEach(circle => {
        circle.classList.remove('scale-0')
    })
}, 1000)

setTimeout(() => {
    document.querySelector('main').classList.remove('-translate-y-[1000px]')
}, 2300)