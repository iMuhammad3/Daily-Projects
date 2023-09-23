document.querySelector('#more').addEventListener('click', () => {

    for (let i = 0; i < 5; i++){
        const card = document.querySelectorAll('.card')[i].cloneNode(true)
        document.querySelector('main').appendChild(card)
    }
    document.querySelector('#more').remove()
}, {once:true})