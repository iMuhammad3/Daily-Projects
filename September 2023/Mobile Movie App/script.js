const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const movies = [
    {
        backdrop_path: "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
        genre_ids: [16, 35, 10751],
        original_title: "Elemental",
        overview:
            "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
        release_date: "2023-06-14",
        title: "Elemental",
        vote_average: 7.8,
        actors: ["https://www.etonline.com/sites/default/files/images/2020-05/leah_lewis_apahm_bug_gettyimages-1159739554.png", "https://m.media-amazon.com/images/M/MV5BMDQzNjdlNTUtMGMzYS00ZDU5LWFmMjgtMmY1ZjJjMzMzMjQ0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX140_CR0,0,140,140_.jpg", "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTeOeQVgyJsQOExpWdIkcxHMMoSDVzD3CnCR6L9W8_Ff6qRR2YgWUFOlFYneCslJx2z",],
        actor1_movie_name: "Ember Lumen",
        actor1_name: "Leah Lewis",
        // **
    },
    {
        backdrop_path: "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
        genre_ids: [28, 878, 12],
        original_title: "Blue Beetle",
        overview:
            "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        release_date: "2023-08-16",
        title: "Blue Beetle",
        vote_average: 7.2,
        actors: ["https://images.hola.com/us/images/0284-18c24af375c8-7295ebb62512-1000/horizontal-1200/variety-power-of-young-hollywood-arrivals.jpg", "https://dsguruji.com/wp-content/uploads/2023/04/download-1-1.jpeg", "https://hips.hearstapps.com/hmg-prod/images/becky-g-gettyimages-1357783233.jpg",],
        actor1_movie_name: "Blue Beetle",
        actor1_name: "Xolo Mariduena",
        // **
    },
    {
        backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
        genre_ids: [28, 878, 27],
        original_title: "Meg 2: The Trench",
        overview:
            "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        release_date: "2023-08-02",
        title: "Meg 2: The Trench",
        vote_average: 7,
        actors: ["http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS2WkOMZwl0LJJn-GYbyFY2IeMFnDt73txAR6uH6trxrHt3AbEiiiKNgIzTYrDL5opDfRM55NhU27n1Ukyi7vgmW002RF9I5wAy1Hv7cV8", "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTt-ZlLGqDSD9_0wXMU_sb-92wMS_iRxSPNnrBK9ybO-7AO_Y86K-9jFfmrh-WByP2qO8_K2mMFvq3Hcs0", "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT7nsOTs7u2u7XS2W5VM0_Wzzf9Kq6xi-Apg1AsVmyyxHnPMMAyO3rOImk_LaxeXxdl4627eNHHRsEGWgc",],
        actor1_movie_name: "Jonas",
        actor1_name: "Jason Statham",
        // **
    },
    {
        backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        genre_ids: [28, 80, 53],
        original_title: "Fast X",
        overview:
            "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        release_date: "2023-05-17",
        title: "Fast X",
        vote_average: 7.3,
        actors: ["https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQtRdbCGCLZhk5fB-KIpnfy63v1Q8oF7RtQLmTVyPkRrcg9MfYWk1GrP0PUczBNA0CKK_HwfrD_mnQseuM", "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQn05Q3rcjWZNNbzz6UpDdPgDl1jv9cF5YNltv_w7oyaBvCwc5gABA3_sg3SpNNqOAoGmYsVR-JXKRWjNohySjF5AOWVVk_w-hkwYS2jcu8", "https://flxt.tmsimg.com/assets/219616_v9_ba.jpg",],
        actor1_movie_name: "Dominic Toretto",
        actor1_name: "Vin Diesel",
        // **
    },
    {
        backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        genre_ids: [35, 12, 14],
        original_title: "Barbie",
        overview:
            "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        release_date: "2023-07-19",
        title: "Barbie",
        vote_average: 7.3,
        actors: ["https://hips.hearstapps.com/hmg-prod/images/margot-robbie-attends-the-new-york-premiere-of-asteroid-news-photo-1689698979.jpg?crop=0.733xw:0.489xh;0.107xw,0.0363xh&resize=640:*", "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ955MdoKi9n4onYZqZztBJjVbsdbaID0yPa5Xa7rcRuhI84wODUucW2hMgeN63-bBrEAbmrbu73HMS5Ho", "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT7Wd-KTwToQj2QRF0RL6aPjc3rZwZA_RBKB3zYmpS_NGW6ywhARMBILeEw5C-T-i2NHVZl2gquckws6Ww",],
        actor1_movie_name: "Barbie",
        actor1_name: "Margot Robbie",
        // **
    },
    {
        backdrop_path: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
        genre_ids: [12, 28],
        original_title: "Indiana Jones and the Dial of Destiny",
        overview:
            "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
        poster_path: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
        release_date: "2023-06-28",
        title: "Indiana Jones and the Dial of Destiny",
        vote_average: 6.7,
        actors: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HUhz5W7S0UTZ8a1YQ1sHpke_mrx7cUe7pgG4CkCd7gz0IpElg0-7uokfIRr-uvDAWXI&s", "https://www.femalefirst.co.uk/image-library/partners/bang/land/1000/p/phoebe-waller-bridge-a66bf9f1f2d7a37fdd70b82899c47578e850a81.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkI9MkRNcL7nbTGEj3nCaEm8oOcH1PvE93B4F1SGuvjMaZHM7FTTENBTFFT78joo-XlTp&s",],
        actor1_movie_name: "Indiana Jones",
        actor1_name: "Harrison Ford",
        // **
    },
    {
        backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
        genre_ids: [28, 12, 878],
        original_title: "Transformers: Rise of the Beasts",
        overview:
            "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        release_date: "2023-06-06",
        title: "Transformers: Rise of the Beasts",
        vote_average: 7.5,
        actors: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYr-9K5XI_tzwdhV8vK7JltxUuzNL_IPLOpG3ReY4Fmew9kFR3XqwWr8gKXsKdtk3gL8&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnudlvzdQPgc-CiL2NX3ol4q4ygkr2MPplF8fJJNDpKmUmsKGHUAXbNJESR4Wibqc1_ZQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZu21nvGjKAuDzpmzMrHwSIzLYkeCO8jjzQCrJU5LIpSUmeTMy1QkvpFsvU1FKGCehoF4&usqp=CAU",],
        actor1_movie_name: "Anthony Ramos",
        actor1_name: "Noah Diaz",
        // **
    },
    {
        backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        genre_ids: [16, 28, 12],
        original_title: "Spider-Man: Across the Spider-Verse",
        overview:
            "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        release_date: "2023-05-31",
        title: "Spider-Man: Across the Spider-Verse",
        vote_average: 8.4,
        actors: ["https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQYEW4a7afbg7hNuzr42hK_CZXcRO-xX8S3Fh2ium5mvvpTOdxlfF1MTa2J_JrXWuSJMlSUnLUSxBO7_V8", "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRsFvLkESCa1woRyzCU2z4cZH4HSgFfwlZmv55fWN23Ax6zwGF3sxj23vaZAnIfyRv4oziSDXzInaA1nMs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpUbTk4LNqI99Mxvk2IgtjI1zCZEvUaMFbQIG3FAV_ilhDFAqm3A1MnxK7rsFb-jmQj5l&s",],
        actor1_movie_name: "Miles Morales",
        actor1_name: "Shameik Moore",
        // **
    },
    {
        backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        genre_ids: [28, 12, 878],
        original_title: "The Flash",
        overview:
            "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        release_date: "2023-06-13",
        title: "The Flash",
        vote_average: 6.9,
        actors: ["https://variety.com/wp-content/uploads/2017/11/grant-gustin-sexual-harassment.jpg?w=1000", "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRENzWhBN5MXCmUyOx4ybnOleWS9fODfbhCu3za6sLIxCwb7Ibm3QVTnDCNYnzkPiZmcbhNRh6x6G0Hm5I", "https://variety.com/wp-content/uploads/2022/06/Carlos-Valdes-e1655141729649.jpg",],
        actor1_movie_name: "Barry Allen",
        actor1_name: "Grant Gustin",
        // **
    },
];


const movies_list = document.querySelector('.movies-list');
const container = document.querySelector('.container');

movies.forEach(movie => {
    const { backdrop_path, title, release_date } = movie;
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${IMG_PATH + backdrop_path}" alt="">
        <div>
            <h3>${title}</h3>
            <small>${release_date}</small>
        </div>
    `

    li.addEventListener('click', () => {
        displayMovie(movie)
    });

    movies_list.appendChild(li);
});

function displayMovie(movie) {
    const { backdrop_path, title, release_date, genre_ids, overview, vote_average, actors, actor1_name, actor1_movie_name } = movie;
    const genres = []
    genre_ids.forEach(id => genres.push(" " + getGenre(id)))
    container.innerHTML = `
        <div class="background">
            <img src="${IMG_PATH + backdrop_path}" alt="">
        </div>
        <header style="background-image: url('${IMG_PATH + backdrop_path}')">
            <svg id="back_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
            </svg>
            <div class="rating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <span>${vote_average} / 10</span>
            </div>
            <div class="playBtn">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path
                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
            </div>
        </header>
        <main>
            <section>
                <h1>${title}</h1>
                <small>
                    ${genres} 
                    | ${release_date}
                </small>
                <p>
                ${overview.length > 200 ? overview.slice(0, 200) + "..." : overview}
                </p>
            </section>
            <section>
                <h3>Actors</h3>
                <div class="actors">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                    <div>
                        <img src="${actors[1]}" alt="">
                        <img src="${actors[0]}" alt="">
                        <img src="${actors[2]}" alt="">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </div>
                <div class="actorName">
                    <h4>${actor1_movie_name}</h4>
                    <small>${actor1_name}</small>
                </div>
            </section>
        </main>
        <footer>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path
                        d="M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z" />
                </svg>
                <p>ADD TO WATCHLIST</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <path
                        d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                <p>SEE FULL CAST & CREW</p>
            </div>
        </footer>
    `
    container.querySelector('#back_btn').addEventListener('click', () => {
        movies_list.classList.remove('hide');
        container.classList.add('hide');
    });

    movies_list.classList.add('hide');
    container.classList.remove('hide');
}

function getGenre(genreId) {
    switch (genreId) {
        case 12: return "Adventure"
            break;
        case 14: return "Fantasy"
            break;
        case 16: return "Animation"
            break;
        case 27: return "Horror"
            break;
        case 28: return "Action"
            break;
        case 35: return "Comedy"
            break;
        case 53: return "Thriller"
            break;
        case 80: return "Crime"
            break;
        case 878: return "Science Fiction"
            break;
        case 10751: return "Family"
            break;
        default: return ""
    }
}

// displayMovie(movies[0]);