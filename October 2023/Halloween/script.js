// Add JavaScript code here


setTimeout(() => {
    spookTheICoders(3700)
}, 2000)

document.body.addEventListener('click', (e) => {
    // call the function when any button or img is clicked (just for fun)
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
        spookTheICoders(3200)
    }
})

function spookTheICoders(delay) {
    const bat = document.createElement('img')
    bat.src = 'https://cdn.pixabay.com/animation/2022/10/13/14/20/14-20-47-878_512.gif'
    bat.className = 'absolute w-full h-[200%]'
    document.body.appendChild(bat)
    setTimeout(() => {
        bat.remove()
    }, delay)
}