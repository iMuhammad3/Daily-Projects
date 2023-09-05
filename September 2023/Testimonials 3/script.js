
const testimonials = [
    {
        testimonial: `I have become significantly better and faster at HTML, CSS, JavsScript, and TailwindCSS. All thanks to @iCodeThis! 💜`,
        writer: `ArmanDev`,
        role: `User`
    },
    {
        testimonial: `Finding out about @iCodeThis was the best thing that happened to my programming journey and my skills skyrocketed since I joined. I have been doing these challenges for the past 70+ days and now I am a lot more confident tackling new projects.`,
        writer: `Adrian Lica`,
        role: `Employee`
    },
    {
        testimonial: `So glad I found @iCodeThis! Looking forward to sharpening some skills and learning!`,
        writer: `Toni Dodd`,
        role: `User`
    },
    {
        testimonial: `It is amazing how many of the things that I have learnt and created in my  submissions over the last few months that I am now  using in my new job - I am continually referring to past challenges for code samples and solutions.`,
        writer: `Chris`,
        role: `User`
    }
]

const main = document.querySelector('main')
const next_btn = document.querySelector('footer>:last-child')
const prev_btn = document.querySelector('footer>:first-child')

let current_testimonial = 0


load_testimonial(testimonials[current_testimonial])


function load_testimonial(current) {
    main.innerHTML = `
        <img src="https://icodethis.com/long-light.png" alt="iCodeThis logo"/>

        <q>${current.testimonial}</q>

        <div class="circles">
            ${show_circles(current_testimonial)}
        </div>

        <div class="testimonial-writer">
            <h6>${current.writer}</h6>
            <small>${current.role}</small>
        </div>
    `
}

next_btn.addEventListener('click', () => {
    if (current_testimonial < testimonials.length - 1) {
        current_testimonial++
        load_testimonial(testimonials[current_testimonial])
    }
})
prev_btn.addEventListener('click', () => {
    if (current_testimonial > 0) {
        current_testimonial--
        load_testimonial(testimonials[current_testimonial])
    }
})



// to show the circle svgs
// wasnt sure if there was a better way to do this

function show_circles(curr) {
    switch (curr) {
        case 0: return `<svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>`
        case 1: return `
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>`
        case 2: return `
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>`
        case 3: return `
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height=".7em" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>`
    }
}
