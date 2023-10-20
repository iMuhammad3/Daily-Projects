// Add JavaScript code here
tailwind.config = {
    theme: {
        fontFamily: {
            "sans": ["Poppins", "ui-system"]
        }
    }
}

const headers = document.querySelectorAll('header')

headers.forEach(header => {
    header.addEventListener('click', (e) => {
        removeAllActive()
        header.classList.add('bg-white')
        flipArrow(header)
        showContent(header)
    })
})

function showContent(h) {
    h.nextElementSibling?.classList.add('!scale-100')
}

function removeAllActive() {
    headers.forEach(h => {
        h.classList.remove('bg-white')
        h.querySelector('.fa-chevron-down')?.classList.remove('rotate-180')
        h.nextElementSibling?.classList.remove('!scale-100')
    })
}

function flipArrow(h) {
    h.querySelector('.fa-chevron-down')?.classList.add('rotate-180')
}

const headings = document.querySelectorAll('.headings')

headers.forEach(function (heading) {
    heading.classList.toggle('dropdown-hidden')
})