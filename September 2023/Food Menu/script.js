
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header')
    const body = accordion.querySelector('.accordion-body')

    header.addEventListener('click', () => {
        closeOthers()
        accordion.classList.toggle('display-body')
        body.classList.toggle('opacity-1')
        changeSymbol(accordion)
    })
})

function changeSymbol(currentAcc) {
    const symboll = currentAcc.querySelector('.symbol');

    if (currentAcc.classList.contains('display-body')) {
        symboll.innerHTML = '&minus;';
    } else {
        symboll.innerHTML = '&plus;';
    }
}

function closeOthers() {
    accordions.forEach(acc => {
        const body = acc.querySelector('.accordion-body')
        acc.classList.remove('display-body')
        body.classList.remove('opacity-1')
        acc.querySelector('.symbol').innerHTML = '&plus;'
    })
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.welcome-page').classList.add('hidden')
    document.querySelector('.container').classList.remove('hidden')
}, {once: true})