const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.querySelector('main > div')

async function getMovies() {
    const resp = await fetch(APIURL)
    const respData = await resp.json()

    console.log(respData)

    respData.results.forEach(movie => {
        const { poster_path, title, backdrop_path } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMGPATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                <h4>${title}</h4>
            </div>
        `

        main.appendChild(movieEl)
    })

    return respData
}

const channels = document.querySelectorAll('aside > div')
const movies_channel = document.querySelectorAll('aside > div')[0]


channels.forEach(channel => {
    channel.addEventListener('click', () => {
        for (let channel of channels) {
            channel.classList.remove('active-channel')
        }
        channel.classList.add('active-channel')
        if (movies_channel.classList.contains('active-channel')) {
            main.innerHTML = ''
            getMovies()
        } else {
            main.innerHTML = `<h2 style="display:flex;justify-content:center;align-items:center;width:100%;height:300px;">Currently Unavailable<h2>`
        }
    })
})

if (movies_channel.classList.contains('active-channel')) {
    main.innerHTML = ''
    getMovies()
}
