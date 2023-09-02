
// document.querySelector('.plus').addEventListener('click', () => {
//     const modal = document.createElement('div')
//     modal.className = "modalContainer"
//     modal.innerHTML = `
//         <div class="modal">
//         <span>&times;</span>
//         <h3>Who else is working on this task?</h3>
//         Image URL : <input type="text" value="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
//         <button>Done</button>
//     </div>
//     `
//     document.body.appendChild(modal)
// })

document.querySelector('#closeBtn').addEventListener('click', () => {
    document.querySelector('.container').classList.add('hide')
    document.querySelector('#open').classList.remove('hide2')
})
document.querySelector('#open').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('hide')
    document.querySelector('#open').classList.add('hide2')
})