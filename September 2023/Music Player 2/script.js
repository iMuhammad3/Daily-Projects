const songs = [
    {
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        url: 'https://raw.githubusercontent.com/florinpop17/stream-songs/master/ambient.mp3',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
    },
    {
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        url: 'https://raw.githubusercontent.com/florinpop17/stream-songs/master/ambient.mp3',
        thumbnail: 'https://www.example.com/uptown-funk-thumbnail.jpg'
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        url: 'https://raw.githubusercontent.com/florinpop17/stream-songs/master/ambient.mp3',
        thumbnail: 'https://www.example.com/bohemian-rhapsody-thumbnail.jpg'
    },
    {
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        url: 'https://raw.githubusercontent.com/florinpop17/stream-songs/master/ambient.mp3',
        thumbnail: 'https://www.example.com/billie-jean-thumbnail.jpg'
    },
];

const titleEl = document.querySelector('#title')
const artistEl = document.querySelector('#artist')
const thumbnailEl = document.querySelector('#thumbnail')
const progressEl = document.querySelector('progress')
const timeLeftEl = document.querySelector('#time-left')
const totalTimeEl = document.querySelector('#total-time')
const prevBtn = document.querySelector('#prev-btn')
const playBtn = document.querySelector('#play-btn')
const nextBtn = document.querySelector('#next-btn')
const songsEl = document.querySelector('.songs')

songs.forEach(song => {
    const div = document.createElement('div')
    div.classList.add('song')
    div.innerHTML = `
        <span>${song.title}</span>
        <span>${'time here'}</span>
    `
    songsEl.appendChild(div)
})