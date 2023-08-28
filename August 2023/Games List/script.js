
const URL_newGames = 'https://api.rawg.io/api/games?key=31b03dd1f2b44753be6df367ecaab730&dates=2022-12-30,2023-12-30&platforms=18,1,7'
const URL_recommendedGames = 'https://api.rawg.io/api/games?key=31b03dd1f2b44753be6df367ecaab730'
const URL_trendingGames = 'https://api.rawg.io/api/games?key=31b03dd1f2b44753be6df367ecaab730&dates=2020-06-01,2022-09-30&platforms=18,1,7'
const URL_Search = `https://api.rawg.io/api/games?key=31b03dd1f2b44753be6df367ecaab730&search=`

const theme = document.querySelector('.fa-moon')
const main = document.querySelector('main')
const container = document.querySelector('.container')
const searchResultEl = document.querySelector('.search-results > .games')
const newGames = document.querySelector('.new-games > .games')
const recommendedGames = document.querySelector('.recommended-games > .games')
const trendingGames = document.querySelector('.trending-games > .games')
const loader = document.querySelector('#loader')
const searchEl = document.querySelector('#search')
const form = document.querySelector('form')


document.addEventListener('DOMContentLoaded', () => {
    displayGames()
})


async function getNewGames(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayNewGames(data.results)
}
async function getRecommendedGames(url) {
    const response = await fetch(url)
    const data = await response.json()
    displayRecommendedGames(data.results)
}
async function getTrendingGames(url) {
    const response = await fetch(url)
    const data = await response.json()
    displayTrendingGames(data.results)
}
    loader.style.display = "block";
async function displayGames() {
    try {
        const newGamesPromise = getNewGames(URL_newGames);
        const recommendedGamesPromise = getRecommendedGames(URL_recommendedGames);
        const trendingGamesPromise = getTrendingGames(URL_trendingGames);

        await Promise.all([newGamesPromise, recommendedGamesPromise, trendingGamesPromise]);
    } catch (error) {
        main.innerHTML = error
    } finally {
        loader.style.display = "none";
    }
}


function displayNewGames(games) {
    games.forEach(game => {
        const { background_image, name, rating } = game
            
        const gameEl = document.createElement('div')
        gameEl.className = 'game'
    gameEl.innerHTML = `
        <img src="${background_image}" alt="">
        <div>
            <p class="game-name">${name}</p>
            <div class="rating">
                ${showRating(rating)}
            </div>      
    `
    newGames.appendChild(gameEl)
    })  
}
function displayRecommendedGames(games) {
    games.forEach(game => {
        const { background_image, name, rating } = game

        const gameEl = document.createElement('div')
        gameEl.className = 'game'
        gameEl.innerHTML = `
        <img src="${background_image}" alt="">
        <div>
            <p class="game-name">${name}</p>
            <div class="rating">${showRating(rating)}</div>
        </div>    
    `
        recommendedGames.appendChild(gameEl)
    })
}
function displayTrendingGames(games) {
    games.forEach(game => {
        const { background_image, name, rating } = game

        const gameEl = document.createElement('div')
        gameEl.className = 'game'
        gameEl.innerHTML = `
            <img src="${background_image}" alt="">
            <div>
                <p class="game-name">${name}</p>
                <div class="rating">${showRating(rating)}</div>
            </div>
    `
        trendingGames.appendChild(gameEl)
    })
}

function showRating(rating) {
    if (rating == 5) {
        return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        `
    }
    if (rating > 4) {
        return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        `
    }
    if (rating > 3) {
        return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        `
    }
    if (rating > 2) {
        return `
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        `
    }
    return `
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        `
}

    

async function displaySearched(searchTerm) {
    // main.innerHTML = ''
    const url = URL_Search + searchTerm
    const games = await getSearchedGames(url)

    games.forEach(game => {
        const { background_image, name, rating } = game
        const gameEl = document.createElement('div')
        gameEl.className = 'game'
        gameEl.innerHTML = `
            <img src="${background_image}" alt="">
            <div>
                <p class="game-name">${name}</p>
                <div class="rating">${showRating(rating)}</div>
            </div>
        `
        searchResultEl.appendChild(gameEl)
    })

    
    console.log(games)
}

async function getSearchedGames(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.results
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchResultEl.innerHTML = ''
    hide(document.querySelector('.new-games'))
    hide(document.querySelector('.recommended-games'))
    hide(document.querySelector('.trending-games'))
    const value = searchEl.value
    if (value) {
        displaySearched(value)
    searchEl.value = ''
    }
})
// displaySearched(URL_Search)

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


function hide(element) {
    element.style.display = 'none'
}
