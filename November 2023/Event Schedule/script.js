// Add JavaScript code here
const events = [
    {
        date: 26,
        title: "Denver, CO, US",
        location: "Pepsi Center",
        time: "20:00",
        sold: false
    },
    {
        date: 28,
        title: "Omaha, CNEO, US",
        location: "BOK Center",
        time: "20:00",
        sold: true
    },
    {
        date: 29,
        title: "Tulsa, OK, US",
        location: "Century Center",
        time: "20:00",
        sold: false
    },
    {
        date: 30,
        title: "St. Paul, MN, US",
        location: "Xcel Center",
        time: "20:00",
        sold: false
    },
]

events.forEach(event => {
    const { date, title, location, time, sold } = event
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.className = "relative list-none"
    li.innerHTML = `
        <h2>NOV ${date}</h2>
        <p>${title}</p>
        <section class="mt-3 flex gap-3 text-sm">
            <div class="flex items-center gap-1">
                <i class="fa-solid fa-location-dot"></i>
                <span>${location}</span>
            </div>
            <div class="flex items-center gap-1">
                <i class="fa-solid fa-clock"></i>
                <span>${time}</span>
            </div>
        </section>
    `
    button.className = `absolute right-0 top-0  w-32 py-1 rounded-full transition ${sold ? "bg-slate-200 text-slate-600" : "bg-gradient-to-tr from-slate-600 to-slate-700 text-slate-100"}`
    button.innerHTML = `
        <i class="fa-solid fa-ticket -rotate-45"></i>
        <span>
            ${sold ? "Sold Out" : "Buy Ticket"}
        </span>
    `
    button.addEventListener('click', () => {
        button.querySelector('span').textContent = "Sold Out"
        button.classList.add("bg-slate-200", "text-slate-600")
        button.classList.remove("bg-gradient-to-tr", "from-slate-600", "to-slate-700", "text-slate-100")
    })
    li.appendChild(button)
    document.querySelector('main').appendChild(li)
})