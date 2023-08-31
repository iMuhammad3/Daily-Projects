// Add JavaScript code here

function addStations() {
    const ul = document.querySelector('ul')
    for (let station = 89; station < 99; station++){
        const li = document.createElement('li')
        li.innerText = station
        ul.appendChild(li)
    }
}
function saveStation(name, number) {
    const savedStation = document.createElement('div')
    savedStation.classList.add('saved-station')
    savedStation.innerHTML = `
        <h1>${number}</h1>
        <span>${name}</span>
    `
    document.querySelector('.saved-stations').appendChild(savedStation)
}
addStations()
saveStation('Lorem FM', '91,3')
saveStation('Toksyna FM', '97.1')
saveStation('Wazobia FM', '98.3')