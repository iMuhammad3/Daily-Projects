// Add JavaScript code here
document.getElementById("close").addEventListener('click', (e) => {
    const parentClass = e.target.parentElement.classList
    parentClass.add("close")
    // parentClass.add("rotate-y")

    setTimeout(() => {
        parentClass.remove("close")
    }, 2000)
})