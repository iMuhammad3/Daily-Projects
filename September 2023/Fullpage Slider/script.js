
const slides = [
    {
        img_url: "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVvdGVzJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        quote: 'Success is not final; failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill'
    },
    {
        img_url: "https://media.istockphoto.com/id/139903678/photo/looking-at-the-world.jpg?s=612x612&w=0&k=20&c=CA-cstq6WTX3DklAz6IHpuRYW-QXv50rI3D4NSuMo_Y=",
        quote: 'EVERY CHILD IS AN ARTIST. THE PROBLEM IS HOW TO REMAIN AN ARTIST ONCE WE GROW UP.',
        author: 'PABLO PICASSO'
    },
    {
        img_url: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVvdGVzJTIwYmFja2dyb3VuZCUyMGRhcmt8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
        quote: 'Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.',
        author: 'George S. Patton'
    },
    {
        img_url: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1b3RlcyUyMGJhY2tncm91bmQlMjBkYXJrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        quote: 'The way we communicate with others and with ourselves ultimately determines the quality of our lives.',
        author: 'Tony Robbins'
    },
    {
        img_url: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHF1b3RlcyUyMGJhY2tncm91bmQlMjBkYXJrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        quote: 'Wisdom is always an overmatch for strength.',
        author: 'Phil Jackson'
    },
]

const carousel = document.querySelector('.carousel')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const circles = document.querySelector('.circles')


let slideIndex = 0

renderSlides()

const slidesEl = document.querySelectorAll('.slide')
const slideWidth = slidesEl[0].clientWidth


blur(0)

nextBtn.addEventListener('click', () => {
    slideIndex--
    if (slideIndex <= -3) {
        slideIndex = 2
    }
    slide(slideIndex)
    showCircles(slideIndex)
    blur(slideIndex)
})
prevBtn.addEventListener('click', () => {
    slideIndex++
    if (slideIndex > 2) {
        slideIndex = -2
    }
    slide(slideIndex)
    showCircles(slideIndex)
    blur(slideIndex)
})

setInterval(() => {
    slideIndex--
    if (slideIndex <= -3) {
        slideIndex = 2
    }
    slide(slideIndex)
    blur(slideIndex)
}, 8000)

function blur(index) {
    [...slidesEl].reverse().forEach((slide, i) => {
        if (index+2 == i) {
            slide.style.filter = 'blur(0px)'
        } else {
            slide.style.filter = 'blur(3px) grayscale(40%)'
        }
        console.log(i,index+2,)
    })
}

function slide(index) {
    carousel.style.transform = `translateX(${index * slideWidth}px)`
    circles.innerHTML = showCircles(index)
}

function renderSlides() {
    slides.forEach(slide => {
        const div = document.createElement('div')
        div.classList.add('slide')
        div.innerHTML = `
            <img src="${slide.img_url}">
            <div class="text">
                <q>${slide.quote.toUpperCase()}</q><br>
                <i>${slide.author.toUpperCase()}</i>
            </div>
        `
        carousel.appendChild(div)
    })
}

function showCircles(index) {
    switch (index) {
        case 2: return `
            <i class="fa-solid fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
        `
        case 1: return `
            <i class="fa-regular fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
        `
        case 0: return `
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
        `
        case -1: return `
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
        `
        case -2: return `
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-regular fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
        `
        default: 'hmm...'
    }
}

