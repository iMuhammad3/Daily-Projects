// Add JavaScript code here
const form = document.getElementById('form')
const topics = document.getElementById('topics')
const popup = document.getElementById('popup')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = form.querySelector('input').value
    const tag = form.querySelectorAll('select')[1].value

    const section = createTopic(title, tag)
    section.classList.add('-translate-y-10')
    section.classList.add('opacity-0')
    setTimeout(() => {
        section.classList.remove('-translate-y-10')
        section.classList.remove('opacity-0')
    }, 100)
})

function createTopic(title, tag) {
    const colors = ['pink-700', 'emerald-700', 'sky-700', 'teal-500', 'slate-500']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const section = document.createElement('section')

    section.innerHTML = `
        <div>
            <h2>${title}</h2>
            ${tag ? `<p><div class="rounded-full w-3 aspect-square bg-${randomColor}  inline-block"></div> ${tag}</p>` : ''}
        </div>
        <div class="flex gap-2">
           <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "" >
        <img src="${'https://picsum.photos/' + Math.floor(Math.random() * 90) + '/'}" alt="">
        </div>
    `
    topics.insertBefore(section, topics.firstChild)
    return section
}

setTimeout(() => {
    popup.classList.remove('-translate-y-[400px]')
}, 2000)
setTimeout(() => {
    popup.classList.add('-translate-y-[400px]')
}, 5000)
