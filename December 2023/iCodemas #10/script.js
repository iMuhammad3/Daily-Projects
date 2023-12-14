// Add JavaScript code here
const lis = document.querySelectorAll("li")

lis.forEach(li => {
    li.addEventListener("click", () => {
        lis.forEach(li => {
            li.classList.remove("border-cyan-700")
        })
        li.classList.add("border-cyan-700")
    })
})

const closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click", () => {
    const parentClass = closeBtn.parentElement.classList
    parentClass.add("scale-0")
    setTimeout(() => {
        parentClass.remove("scale-0")
    }, 1500)
})