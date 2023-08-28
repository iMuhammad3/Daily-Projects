
const closeBtn = document.querySelector('.closeBtn')
const container = document.querySelector('.container')
const openBtn = document.querySelector('body > button')
const themeBtn = document.querySelector('svg')
const locationBtn = document.getElementById('locationBtn')
const message = document.querySelector('#message')

closeBtn.addEventListener('click', () => {
    container.style.scale = '0'
})

openBtn.addEventListener('click', () => {
    container.style.scale = '1'
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

locationBtn.addEventListener('click', async () => {
    if ('geolocation' in navigator) {
        locationBtn.innerText = 'Please wait';
        try {
            const position = await getCurrentPositionAsync();
            const { longitude, latitude } = position.coords;

            message.innerText = await locationDetails(latitude, longitude);

            const map = L.map('map').setView([latitude, longitude], 10);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
            }).addTo(map);
            locationBtn.innerText = 'Show my location'
        } catch (error) {
            console.error('Error getting location:', error);
            locationBtn.innerText = 'Show my location';
        }
    }
});

async function getCurrentPositionAsync() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


const searchButton = document.getElementById("searchBtn");
const searchInput = document.querySelector("input");


searchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchTerm
    )}`;

        const response = await fetch(url);
    const data = await response.json();
        console.log(data)

        if (data && data.length > 0) {
            const firstResult = data[0];
            const latitude = firstResult.lat
            const longitude = firstResult.lon
            const locationName = firstResult.display_name

            message.innerHTML = `${locationName}`;
            const map = L.map('map').setView([latitude, longitude], 10);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
            }).addTo(map);
        } else {
            message.innerHTML = "Location not found.";
        }
});

const searchForm = document.querySelector("form")

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchTerm = searchInput.value;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchTerm
    )}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    if (data && data.length > 0) {
        const firstResult = data[0];
        const latitude = firstResult.lat
        const longitude = firstResult.lon
        const locationName = firstResult.display_name

        message.innerHTML = `${locationName}`;
        const map = L.map('map').setView([latitude, longitude], 10);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
        }).addTo(map);
    } else {
        message.innerHTML = "Location not found.";
    }
})

async function locationDetails(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.display_name)
    return data.display_name
}
