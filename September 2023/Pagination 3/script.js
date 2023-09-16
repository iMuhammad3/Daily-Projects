
const images = [
    'https://images.unsplash.com/photo-1481660471672-28a88967efdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1467811884194-ae868cd3f090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYW5pbWFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1596868801151-5d26796963b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1550778323-71868c7dea39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMGFuaW1hbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGFuaW1hbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1481660471672-28a88967efdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1467811884194-ae868cd3f090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYW5pbWFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1596868801151-5d26796963b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550778323-71868c7dea39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZSUyMGFuaW1hbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1688388403598-0402223cb148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGFuaW1hbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1694088957234-2e3932f7c786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1522277245807-5e608aa8adcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
];


const itemsPerPage = 6
const currentPage = document.querySelector('#current-page')

function generatePagination() {
    const paginationEl = document.querySelector('#pagination')
    const pageCount = Math.ceil(images.length / itemsPerPage)
    paginationEl.innerHTML = ''

    for (let i = 1; i < pageCount; i++){
        const li = document.createElement('li')
        li.setAttribute('data-page', i)
        li.textContent = i
        if (i === 1) {
            li.classList.add('active')
        }
        paginationEl.appendChild(li)
    }
}

function displayPage(pageNum) {
    const imageWrapper = document.querySelector('.image-wrapper')
    imageWrapper.innerHTML = '';
    const first = (pageNum - 1) * itemsPerPage
    const last = first + itemsPerPage

    const pageData = images.slice(first, last)

    pageData.forEach(img => {
        const pageImg = document.createElement('img')
        pageImg.src = img
        imageWrapper.appendChild(pageImg)
    })
}

const pagination = document.querySelector('#pagination')
pagination.addEventListener('click', (e) => {
    const pageCount = Math.floor(images.length / itemsPerPage)
    if (e.target.tagName === 'LI') {
        pagination.querySelectorAll('li').forEach(li => li.classList.remove('active'))
        const page = e.target.getAttribute('data-page')
        displayPage(page)
        currentPage.textContent = `${page} of ${pageCount}`
        e.target.classList.add('active')
    }
})
document.querySelector('#first')
    .addEventListener('click', () => {
        const page = 1
        const pageCount = Math.floor(images.length / itemsPerPage)
        displayPage(page)
        currentPage.textContent = `${page} of ${pageCount}`
        pagination.querySelectorAll('li').forEach(li => li.classList.remove('active'))
        pagination.querySelectorAll('li')[page-1].classList.add('active')
})
document.querySelector('#last')
    .addEventListener('click', () => {
        const pageCount = Math.floor(images.length / itemsPerPage)
        displayPage(pageCount)
        currentPage.textContent = `${pageCount} of ${pageCount}`
        pagination.querySelectorAll('li').forEach(li => li.classList.remove('active'))
        pagination.querySelectorAll('li')[pageCount-1].classList.add('active')
})
displayPage(1)
generatePagination()