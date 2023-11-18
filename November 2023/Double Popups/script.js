// Add JavaScript code here
document.getElementById("moon").addEventListener('click', () => {
    document.body.classList.toggle('invert')
    document.body.classList.toggle('bg-gray-800')
})

document.querySelectorAll('.closeBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.closest("section")
        parent.classList.add("-translate-y-[600px]")
        setTimeout(() => parent.classList.remove("-translate-y-[600px]"), 2000)
    })
})