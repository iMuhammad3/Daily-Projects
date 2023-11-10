// Add JavaScript code here
const Cards = [
    {
        price: 9,
        title: "FREELANCER",
        benefits: [
            "1 GB of space",
            "Unlimited traffic",
            "Forum access",
            "Support at $25/hour"
        ]
    },
    {
        price: 99,
        title: "BUSINESS",
        benefits: [
            "5 GB of space",
            "Unlimited traffic",
            "Forum access",
            "Support at $5/hour"
        ]
    },
    {
        price: 499,
        title: "ENTERPRISE",
        benefits: [
            "20 GB of space",
            "Unlimited traffic",
            "Forum access",
            "Free support"
        ]
    },
]

Cards.forEach(card => {
    const section = document.createElement('section')
    section.className = `rounded-lg shadow-xl w-72 overflow-hidden`
    const lists = card.benefits.map(b => {
                        return `<li>${b}</li>`
                    })
    section.innerHTML = `
        <header class="bg-[#303030] flex flex-col items-center justify-center text-2xl min-h-[12rem]">
            <h1 class="text-5xl font-semibold ">$${card.price}<b class="text-base font-semibold">/mo</b></h1>
            <p class="tracking-[5px] mt-2 ">${card.title}</p>
        </header>
        <div class="bg-[#1E1E1E] pt-8 pb-6 flex flex-col items-center gap-6">
            <ul class="flex flex-col gap-2 py-6">
                ${lists.join('')}
            </ul>
            <button class="border-2 rounded-full text-sm px-6 py-2">CHOOSE PLAN</button>
        </div>
    `
    document.getElementById('wrapper').appendChild(section)
})