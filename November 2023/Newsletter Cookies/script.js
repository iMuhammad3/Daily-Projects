// Add JavaScript code here
// copies some code from one of my custom projects

// creates a container where all the modals will be displayed
const modalContainer = document.createElement('div')
// position it at the top of the page
modalContainer.className = "absolute top-6 flex flex-col gap-2"
// add container to the body
document.body.appendChild(modalContainer)

// function takes in a message and displays is as the content of the modal
// message could also be markup eg <b>Bold Text</b>
function showModal(message) {
    const div = document.createElement('div')
    div.className = `flex gap-2 items-center max-w-[240px] text-center bg-white text-slate-800 px-5 py-2 rounded-xl shadow scale-0 -translate-y-96 transition duration-500`
    div.innerHTML = message
    animation(div)
    modalContainer.appendChild(div)
}

// the animation will make the modal appear and disappear
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
    }, 100)
}

//finally write some code by himself
const yesCookies = document.getElementById("yesCookies")
const noCookies = document.getElementById("noCookies")

yesCookies.addEventListener('click', () => {
    showModal("You get cookies!!")
})
noCookies.addEventListener('click', () => {
    showModal("You still get cookies!!!")
})