const dropSection = document.querySelector('.dropSection')

dropSection.addEventListener('dragenter', () => {
    dropSection.classList.add('dropActive')
})
dropSection.addEventListener('dragleave', () => {
    dropSection.classList.remove('dropActive')
})