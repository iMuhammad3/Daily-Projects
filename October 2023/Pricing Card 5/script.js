// Add JavaScript code here

const CARDS = [
    {
        name: 'basic',
        size: '100GB',
        price: '1,7',
        benefits: ["100 GB storage", "Option to add members", "Extra member benefits"],
        sectionColors: `text-amber-50 hover:border-violet-500 before:bg-gradient-to-tr before:from-violet-400 before:to-purple-600`,
        buttonColors: `border-violet-500 from-indigo-500 to-violet-500`
    },
    {
        name: 'standard',
        size: '200GB',
        price: '2,9',
        benefits: ["200 GB storage", "Option to add members", "Extra member benefits"],
        sectionColors: `text-amber-50 hover:border-yellow-500 before:bg-gradient-to-tr before:from-amber-400 before:to-yellow-600`,
        buttonColors: `border-amber-400 from-yellow-500 to-amber-500`
    },
    {
        name: 'premium',
        size: '2TB',
        price: '8,9',
        benefits: ["2 TB storage", "Option to add members", "Extra member benefits"],
        sectionColors: `text-sky-50 hover:border-cyan-400 before:bg-gradient-to-tr before:from-cyan-500 before:to-sky-600`,
        buttonColors: `border-cyan-500 from-cyan-400 to-sky-500`
    },
]

// some tailwind clasess
const sectionClasses = `card flex flex-col rounded-2xl relative bg-[#19223f] text-sky-50 transition duration-500 overflow-hidden border-8 border-slate-700 hover:before:opacity-100
before:absolute before:h-20 before:w-20 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:scale-150 before:blur-2xl before:transition  before:opacity-0`
const buttonClasses = `border-2 py-2 z-10 px-6 rounded-lg cursor-pointer relative overflow-hidden after:absolute after:bg-gradient-to-tr after:transition after:duration-500 after:inset-0 after:rounded-md after:-z-10 after:-translate-x-32 after:hover:translate-x-0`



CARDS.forEach(card => {
    const { name, size, price, benefits, sectionColors, buttonColors } = card
    const section = document.createElement('section')
    // getting class names returned by the function based on conditions
    section.className = `${sectionClasses} ${sectionColors}`

    const ul = document.createElement('ul')
    ul.className = `fill-slate-50 flex flex-col items-center gap-3 py-16`
    // making a list item for each benefit then appending it to an ul
    benefits.forEach(benefit => {
        const li = document.createElement('li')
        li.className = `flex items-center gap-2`
        li.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <p>${benefit}</p>
        `
        ul.appendChild(li)
    })

    // card
    section.innerHTML = `
        <div class="flex flex-col items-center gap-8 pt-16 pb-12 w-[280px] border-b-2 border-b-slate-700 ">
            <h4 class="text-xl leading-4">${name.toUpperCase()}</h4>
            <div class="flex flex-col items-center gap-3">
                <h1 class="text-4xl leading-6 ">${size}</h1>
                <p class="text-sm">1 month, then $${price}/month</p>
            </div>
            <button class="${buttonClasses} ${buttonColors}">Purchase</button>
        </div>
    `

    section.appendChild(ul)
    document.getElementById('wrapper').appendChild(section)
})

// the glowy thingy
const cardElems = document.querySelectorAll('.card')

cardElems.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const left = e.clientX - rect.left
        const top = e.clientY - rect.top

        card.style.setProperty("--left", `${left}px`)
        card.style.setProperty("--top", `${top}px`)

    })
})