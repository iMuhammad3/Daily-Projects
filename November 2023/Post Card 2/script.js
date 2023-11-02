// Add JavaScript code here
const regular = document.getElementById('regular-heart')
const solid = document.getElementById('solid-heart')
const count = document.getElementById('likes-count')
document.getElementById('like').addEventListener('click', () => {
    regular.classList.toggle('hidden')
    solid.classList.toggle('hidden')
    solid.classList.contains('hidden') ?
        count.innerHTML = '75 likes' : count.innerHTML = '76 likes'
})