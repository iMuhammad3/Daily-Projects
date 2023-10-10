// Add JavaScript code here
const GROUPS = [
    {
        img_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Cuisine',
        members: 36,
    },
    {
        img_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Art',
        members: 9,
    },
    {
        img_url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Workout',
        members: 27,
    },
    {
        img_url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Gaming',
        members: 105,
    },
    {
        img_url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        name: 'Hiking',
        members: 97,
    },
    {
        img_url: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: 'Yoga',
        members: 65,
    },
]

const groups_container = document.querySelector('main > ul')
const section = document.querySelector('main > header > section')
const createGroupBtn = document.getElementById('createGroupBtn')

GROUPS.forEach(group => {
    createGroup(group)
})
document.getElementById('grid').addEventListener('click', showGrid)
document.getElementById('flex').addEventListener('click', showFlex)

createGroupBtn.addEventListener('click', () => {
    const name = prompt("Enter group name: ") || "Untitled"
    const newGroup = {
        img_url: 'https://static.thenounproject.com/png/446003-200.png',
        name: name,
        members: 0,
    }
    createGroup(newGroup)
})

function createGroup(group) {
    const { img_url, name, members } = group
    const li = document.createElement('li')
    li.innerHTML = `
        <img src="${img_url}" alt="">
        <h1 class="mt-2 text-lg">${name}</h1>
        <small>${members} members</small>
    `
    groups_container.appendChild(li)
}

function showFlex() {
    if (groups_container.classList.contains("flex-wrap")){
        groups_container.classList.replace("flex-wrap", "flex-col")
        groups_container.classList.replace("[&>li]:w-32", "[&>li]:w-full")
        groups_container.querySelector('div').classList.remove("w-32")
        section.classList.add("before:translate-x-10")
    }
}
function showGrid() {
    if (groups_container.classList.contains("flex-col")) {
        groups_container.classList.replace("flex-col", "flex-wrap")
        groups_container.classList.replace("[&>li]:w-full", "[&>li]:w-32")
        groups_container.querySelector('div').classList.add("w-32")
        section.classList.remove("before:translate-x-10")
    }
}