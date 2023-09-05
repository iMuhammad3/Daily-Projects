
document.querySelector('button').addEventListener('click', () => {
    const review = prompt('Write a review')
    if (!review) {
        alert('You did not enter a review')
        return
    } 
    alert('Your review has been sent')
})