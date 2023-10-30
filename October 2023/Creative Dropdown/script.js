// Add JavaScript code here

const select = document.getElementById('select')
const dropdown = document.getElementById('dropdown')
const createObjectBtn = document.getElementById('createObject')

select.addEventListener('click', () => {
    dropdown.classList.toggle('rotate-x-180')
    document.querySelector('svg').classList.toggle('rotate-180')
})

const ul = document.createElement('ul')
ul.className = `flex flex-col py-3 max-h-[200px] overflow-scroll`

createObjectBtn.addEventListener('click', () => {
    // prompt user to enter a value and store that value
    const objType = prompt('Enter object type: ')
    // if value is null, undefined or an empty string then return
    if (!objType || objType.trim() == "") {
        alert("You did not enter a valid value")
        return
    }
    // creates a list element for 'object type'
    createLi(objType)
    // removes the intial div 'no object types in here yet' if its still there
    dropdown?.querySelector('div:first-child').remove()
    // insert the already created ul before my 'create object' button
    dropdown.insertBefore(ul, createObjectBtn)
})

function createLi(objType) {
    // generates random number for hsl color value (only hue value)
    const randomNumber = Math.floor(Math.random() * 360)

    const li = document.createElement('li')
    li.className = `flex items-center gap-2 px-3 py-2 hover:bg-[hsl(${randomNumber},55%,95%)] transition`
    li.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="hsl(${randomNumber},55%,55%)" height="1em" viewBox="0 0 448 512">
            <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <span>${objType}</span>
    `
    ul.appendChild(li)
}