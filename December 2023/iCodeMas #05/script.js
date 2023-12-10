// Add JavaScript code here
document.getElementById("closeBtn").addEventListener('click', (e) => {
    const banner = e.target.parentElement
    banner.classList.add("translate-x-full")
    setTimeout(() => {
        banner.remove()
    }, 510)
})