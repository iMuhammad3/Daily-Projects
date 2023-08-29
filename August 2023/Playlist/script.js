

const objects = [
    {
        title: "Interstellar: A trip Hop Mix",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMb7C8iz860lWbXhY-gEu721ogmR4Zdan1A&usqp=CAU",
        // idk what other name to give this
        name: "Confused by product of Misinformed culture",
        time: "1:15:55"
    },
    {
        title: "Best of Trip-Hop & Downtempo & Lofi & Hip-Hop Instrumental Vol. 3 Re-Upload",
        img: "https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name: "S!X - Music",
        time: "2:02:50"
    },
    {
        title: "Inspiring mix | lofi hip hop | Chillpop, Jazzhop, Chillout [Study/Sleep/Game]",
        img: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwJTIwaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        name: "Dreamy",
        time: "1:00:07"
    },
    {
        title: "Chill Study Beats 4 • jazz & lofi hiphop Mix [2017]",
        img: "https://images.unsplash.com/photo-1546528377-9049abbac32f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlwJTIwaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        name: "Chillhop Music",
        time: "2:02:52"
    },
    {
        title: "Hip Hop 'Funk' Jazz - Ours Samplus",
        img: "https://images.unsplash.com/photo-1512090421650-1ba94830f7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name: "Stay See",
        time: "2:02:50"
    },
]

const section = document.querySelector('section')

objects.forEach(object => {
    const li = document.createElement('li')

    li.innerHTML = `
        <div class="img-div">
            <img src="${object.img}" alt="">
            <span class="time">${object.time}</span>
        </div>
        <div>
            <h4>${object.title}</h4>
            <small>${object.name}</small>
        </div>
    `
    section.appendChild(li)
})

const arrow = document.querySelector('.fa-chevron-down')

arrow.addEventListener('click', () => {
    arrow.classList.toggle('rotate')

    const allSections = document.querySelectorAll('section')
        allSections.forEach(section => {
            section.classList.toggle('hide')
        })
})

const loadmoreBtn = document.querySelector('.loadmore')
const container = document.querySelector('.container')

loadmoreBtn.addEventListener('click', () => {
    const newSection = section.cloneNode(true)
    container.insertBefore(newSection, loadmoreBtn)
})