const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const MOVIES = [
    {
        backdrop_path: "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
        genre_ids: [28, 18, 12],
        title: "Gran Turismo",
        vote_average: 8,
    },
    {
        backdrop_path: "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
        genre_ids: [28, 878, 12],
        title: "Blue Beetle",
        vote_average: 7.1,
    },
    {
        backdrop_path: "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
        genre_ids: [28, 18],
        title: "Sound of Freedom",
        vote_average: 8,
    },
    {
        backdrop_path: "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
        genre_ids: [27, 9648, 53],
        title: "The Nun II",
        vote_average: 6.6,
    },
    {
        backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
        genre_ids: [28, 878, 27],
        title: "Meg 2: The Trench",
        vote_average: 6.9,
    },
    {
        backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        genre_ids: [28, 80, 53],
        title: "Fast X",
        vote_average: 7.3,
    },
    {
        backdrop_path: "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
        genre_ids: [28, 9648, 53, 80],
        title: "Retribution",
        vote_average: 6.8,
    },
    {
        backdrop_path: "/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg",
        genre_ids: [27, 878, 53],
        title: "No One Will Save You",
        vote_average: 7,
    },
    {
        backdrop_path: "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        genre_ids: [27, 53],
        title: "Talk to Me",
        vote_average: 7.2,
    },
    {
        backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        genre_ids: [35, 12, 14],
        title: "Barbie",
        vote_average: 7.3,
    },
    {
        backdrop_path: "/9WxqnP9c29wXd03sALSpxpTx8fk.jpg",
        genre_ids: [9648, 53, 28],
        title: "The Black Book",
        vote_average: 7.8,
    },
    {
        backdrop_path: "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
        genre_ids: [80, 27, 53],
        title: "Saw X",
        vote_average: 7.4,
    },
    {
        backdrop_path: "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
        genre_ids: [16, 35, 10751, 14, 10749],
        title: "Elemental",
        vote_average: 7.8,
    },
    {
        backdrop_path: "/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
        genre_ids: [10749, 18],
        title: "After Everything",
        vote_average: 6.6,
    },
    {
        backdrop_path: "/5xUJBgds96m6Xi2EtUpSzbw24D7.jpg",
        genre_ids: [53, 9648],
        title: "Let Her Kill You",
        vote_average: 6.8,
    },
    {
        backdrop_path: "/1DBo2V4KyBWXuagt4JOR2jZJMHB.jpg",
        genre_ids: [28, 53],
        title: "Sniper: G.R.I.T. - Global Response & Intelligence Team",
        vote_average: 7.4,
    },
    {
        backdrop_path: "/2wUJGxE43jhTKpNMVbWEC2WNJjH.jpg",
        genre_ids: [28, 53],
        title: "Amigos",
        vote_average: 4.4,
    },
    {
        backdrop_path: "/oghHR3X0hIcvs7xqyoFjA0GAZWn.jpg",
        genre_ids: [53],
        title: "Operation Napoleon",
        vote_average: 7,
    },
    {
        backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        genre_ids: [28, 53],
        title: "Mission: Impossible - Dead Reckoning Part One",
        vote_average: 7.7,
    },
    {
        backdrop_path: "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
        genre_ids: [28, 53],
        title: "Kandahar",
        vote_average: 6.9,
    },
];
async function getGenre(genre_ids) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1`);
      const data = await response.json();
      const genreMap = {};
  
      // Create a mapping of genre IDs to genre names
      data.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
      });
  
      // Get genre names for the specified genre IDs
      const genreNames = genre_ids.map((id) => genreMap[id]);

      return genreNames
    } catch (e) {
      main.innerHTML = '<h1 class="text-white flex items-center justify-center">Something went wrong</h1>'
    }
}

const main = document.querySelector('main')
const actionSection = document.getElementById('action-section')
const comedySection = document.getElementById('comedy-section')
const crimeSection = document.getElementById('crime-section')

MOVIES.forEach(async movie => {
    const genres = await getGenre(movie.genre_ids)

    if(genres.includes('Action') || genres.includes('Thriller')){
        createLi(movie, actionSection)
    }
    if(genres.includes('Comedy') || genres.includes('Drama')){
        createLi(movie, comedySection)
    }
    if(genres.includes('Crime') || genres.includes('Horror')){
        createLi(movie, crimeSection)
    }

})

function createLi(movie, section){
    const { backdrop_path, title, vote_average} = movie
    const li = document.createElement('li')
    li.className = `h-full w-36 bg-[#282947] rounded-md overflow-hidden cursor-pointer`
    li.innerHTML = `
        <img class="h-4/5 object-cover" src="${IMG_PATH+backdrop_path}" alt="">
        <div class="flex justify-between p-2">
            <span class="text-white">${title.length > 8 ? (title.slice(0, 7) + '...') : title}</span>
            <span class="bg-[#1d2032] py-0.5 w-8 text-center ${vote_average >= 7.5 ? 'text-green-400' : 'text-orange-400'} rounded-md">${vote_average}</span>
        </div>
    `
    section.appendChild(li)
}

setTimeout(()=>{
    main.classList.remove('translate-y-10', 'opacity-0')
}, 200)

// things got rough but i got it right