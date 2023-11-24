// Add JavaScript code here
const section = document.querySelector("section")

document.getElementById("jb").addEventListener('click', () => {
    section.classList.toggle("scale-0")
    section.classList.toggle("-translate-y-4")
})