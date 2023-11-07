// Add JavaScript code here
const stars = document.querySelectorAll('#stars-container > span')

// stolen from @samwel58's submission
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.innerHTML = '★'
            } else {
                s.innerHTML = '☆'
            }
        })
    })
})

const ratings = document.querySelectorAll('#rating-container > li')

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        // remove all active ones
        ratings.forEach(r => r.classList.remove('bg-white/20'))
        // set active state to current rating
        rating.classList.add('bg-white/20')
    })
})
