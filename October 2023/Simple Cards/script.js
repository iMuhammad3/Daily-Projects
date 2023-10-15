// Add JavaScript code here
tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Poppins', 'ui-system'],
            'serif': ['ui-serif', 'Georgia']
        }
    }
}

document.querySelector('a').addEventListener('click', (e)=>e.preventDefault())

const contributors = [
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1571901205848-96622809cf6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1560884117-8e9be30e4aec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1546422401-ae86d9d58b0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1572965733194-784e4b4efa45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
]

const contributorsEl = document.getElementById('contributors')
const addLanguageBtn = document.getElementById('addLanguage')
const moreContributorsBtn = contributorsEl.firstElementChild
const languagesEl = document.getElementById('languages')
const languagesProgress = document.getElementById('languagesProgress')
moreContributorsBtn.firstElementChild.innerText = `${contributors.slice(4).length}+`

// display more contributors when button is clicked
moreContributorsBtn.addEventListener('click', () => {

    contributors.slice(4).forEach(appendImg)
    
    
    document.querySelectorAll('#contributors > li').forEach((li, index) => {
        const className = `-translate-x-${index * 4}`
        contributorsEl.classList.add('flex-wrap')
        li.classList.remove(className)
        moreContributorsBtn.remove()
    })
})

//  display only the first five contributors
contributors.slice(0, 4).forEach(appendImg) 

// make each image move to the left
document.querySelectorAll('#contributors > li').forEach((li, index) => {
    const className = `-translate-x-${index * 4}`
    li.classList.add(className)
})

addLanguageBtn.addEventListener('click', () => {
    const language = prompt("Add Language: ")
    if (!language) {
        alert("You didn't input a language :(")
        return  
    } 
    // generate random color
    const randomColor = `hsl(${Math.random() * 360}, 100%, 60%)`
    
    // add color to the custom progress bar
    const div = document.createElement('div')
    div.className = `w-5 h-full opacity-0 transition duration-700`
    div.setAttribute('style', `background-color: ${randomColor}`)
    languagesProgress.appendChild(div)

    // add language
    const li = document.createElement('li')
    li.className = `opacity-0 transition duration-700`
    const liDiv = document.createElement('div')
    liDiv.className = `h-2/3 aspect-square rounded-full`
    liDiv.setAttribute('style', `background-color: ${randomColor}`)
    li.textContent = language
    li.insertBefore(liDiv, li.firstChild)
    languagesEl.appendChild(li)

    setTimeout(() => {
        div.classList.remove('opacity-0')
        li.classList.remove('opacity-0')
    },100)
})

// creates imge and li elements for the contributors
function appendImg(con, i) {
    const li = document.createElement('li') 
    const img = document.createElement('img')
    img.src = con
    li.appendChild(img)
    contributorsEl.insertBefore(li, moreContributorsBtn)
        
    li.classList.add('opacity-0')
    setTimeout(() => {
        li.classList.remove('opacity-0')
    }, i*300)
}
