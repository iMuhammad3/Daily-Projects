// Add JavaScript code here
function drawLine() {
    const line = document.querySelector('#line')
    line.innerText = ''
    const ulHeight = document.querySelector('ul').clientHeight
    const elementCount = document.querySelectorAll('li')
    line.style.height = ulHeight + 'px'


    for (let i = 0; i < elementCount.length; i++) {
        const circle = document.createElement('div')
        circle.className = `w-3 h-3 rounded-full bg-cyan-400`
        line.appendChild(circle)
    }
}
drawLine()

const updates = [
    {
        time: "04:53",
        info: "Peter won CSS Wizard of the year"
    }
]

document.querySelector('button').addEventListener('click', () => {
    updates.forEach(update => {
        const li = document.createElement('li')
        li.innerHTML = `
            <b>${update.time}</b>
            <p>${update.info}</p>
        `
        document.querySelector('ul').appendChild(li)
    })
    drawLine()
}, {once: true})