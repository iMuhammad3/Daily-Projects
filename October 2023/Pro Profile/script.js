// Add JavaScript code here
const followBtn = document.querySelector('#followBtn')

followBtn.addEventListener('click', () => {
    if (followBtn.textContent === "Follow") {
        followBtn.textContent = "Following"
    } else {
        followBtn.textContent = "Follow"
    }
})