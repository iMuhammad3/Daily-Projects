// Add JavaScript code here
const images = [
    "https://cdni.iconscout.com/illustration/premium/thumb/work-in-progress-8725019-7045278.png?f=webp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Man_Looking_at_Phone_Cartoon_Vector.svg/1280px-Man_Looking_at_Phone_Cartoon_Vector.svg.png",
    "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114452.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais"
]

// document.body.innerHTML += document.querySelector('img').clientHeight

const data = [
    {
        img_url: images[0],
        heading: "Connect multiple accounts",
        about: "Stay connected to any platform you are used to. Starting from Twitter, Instagram, Slack or whatever.",
    },
    {
        img_url: images[1],
        heading: "Smart messaging system",
        about: "Stay connected to any platform you are used to. Starting from Twitter, Instagram, Slack or whatever.",
    },
    {
        img_url: images[2],
        heading: "Instant data analysis",
        about: "Stay connected to any platform you are used to. Starting from Twitter, Instagram, Slack or whatever.",
        last: true
    }
]

const wrapper = document.getElementById('wrapper')

// saving the arrow svg for reuse
const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
`

// making a section for each data
data.forEach(d => { 
    //  create section
    const section = document.createElement('section')
    section.className = `transition duration-300 bg-white text-center flex flex-col items-center gap-4 w-[300px] px-7 py-10 rounded-lg shadow-lg shadow-slate-300`
    section.innerHTML = `
        <img class="h-[236px] w-[236px] object-cover" src=${d.img_url} alt="">
        <h2 class="text-xl w-44 font-semibold">${d.heading}</h2>
        <p>${d.about}</p>
    `
    // create container for buttons
    const div = document.createElement('div')
    div.className = 'self-stretch flex justify-around'
    const button = document.createElement('button')
    button.className = `bg-orange-400 p-3 flex gap-2 items-center text-white fill-white rounded-br-xl rounded-sm shadow-[5px_5px_0] shadow-orange-200 active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition`

    // make it two buttons if its not the last section
    if (!d.last) {
        div.innerHTML = `
            <button>Skip</button>
        `
        button.innerHTML = svg
        div.appendChild(button)
    } else {
        button.innerHTML = `
            <span>Get Started</span>
            ${svg}
        `
        div.append(button)
    }
    // add button container to the section
    section.appendChild(div)
    // add section to the wrapper 
    wrapper.appendChild(section)
})


// This code could be 15 lines shorter but oh well