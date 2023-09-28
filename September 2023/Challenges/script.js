const Challenges = [
    {
        name: "Dashboard",
        submissions: 36,
        img_url: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        status: "new",
    },
    {
        name: "Facebook Redesign",
        submissions: 84,
        img_url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        status: "new",
    },
    {
        name: "Dating App",
        submissions: 158,
        img_url: "https://images.unsplash.com/photo-1575390130709-7b5fee2919e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        status: "recent",
    },
    {
        name: "Slack Rebranding",
        submissions: 247,
        img_url: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        status: "closed",
    },
    {
        name: "Todo App",
        submissions: 312,
        img_url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        status: "closed",
    },
    {
        name: "Weather App",
        submissions: 93,
        img_url: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        status: "closed",
    },
]

Challenges.slice(0, 4).forEach(chall => {
    displayChallenges(chall)
})

const viewAll = document.getElementById('viewAll')

viewAll.addEventListener('click', () => {
    Challenges.slice(4, Challenges.length).forEach(chall => {
        displayChallenges(chall)
    })
    viewAll.remove()
})

function displayChallenges(chall) {
    const { name, submissions, status, img_url } = chall
    const div = document.createElement('div')
    div.innerHTML = `
        <p>${name} Challenge <span class="${status === "new" ? "green" : status === "closed" ? "orange" : ""}">${status === "new" ? "New" : status === "closed" ? "Closed" : ""}</span></p>
        <button>Vote now</button>
        <small>${submissions} submissions</small>
    `
    div.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            displayIndividualChallenge(name, img_url)
            document.querySelector('.challenge').classList.remove('hide')
            document.querySelector('.challenges-container').classList.add('hide')
        }
    })
    document.querySelector('.challenges').appendChild(div)
}

function displayIndividualChallenge(name, img_url) {
    const div = document.querySelector('.challenge');
    div.innerHTML = `
        <svg id="backBtn xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
        <img src="${img_url}" alt="">
        <h2>${name} Challenge</h2>
        <p>
            Vote for your favorite community uploads 
            created for our latest challenge
        </p>
        <button>Vote now</button>
    `
    div.querySelector('svg').addEventListener('click', () => {
            document.querySelector('.challenge').classList.add('hide')
            document.querySelector('.challenges-container').classList.remove('hide')
    })

}