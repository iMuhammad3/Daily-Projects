document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
        li.parentElement.querySelectorAll('li').forEach(li => {
            li.classList.remove('bg-cyan-200', 'text-white')
        })
        li.classList.add('bg-cyan-200', 'text-white')
    })
})