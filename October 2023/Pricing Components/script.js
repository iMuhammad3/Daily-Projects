// Add JavaScript code here
tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Poppins', 'system-ui'],
            'serif': ['ui-serif', 'Georgia']
        }
    }
}
const startSection = document.getElementById('startSection')
const planSection = document.getElementById('planSection')
const usersSection = document.getElementById('usersSection')
const startBtn = document.getElementById('startBtn')
const doneBtn = document.getElementById('doneBtn')
const popup = document.getElementById('popup') 
let selectedPlan
let selectedUsers 

startBtn.addEventListener('click', () => {
    startSection.classList.add('translate-y-[1000px]')
    planSection.classList.remove('translate-y-[-1000px]')  
})

planSection.addEventListener('click', (e) => {
    const target = e.target
    if (target.tagName === "LI") {
        planSection.classList.add('translate-y-[1000px]')
        usersSection.classList.remove('-translate-y-[1000px]')
        selectedPlan = target.textContent
    }
})


doneBtn.addEventListener('click', () => {
    selectedUsers = usersSection.querySelector('input').value * 100
    if (selectedUsers === 0) {
        alert('You cannot select 0 users :)')
        return;
    }
    popup.innerHTML = `
    <h1 class="text-2xl">Successful 
        <span class="bg-green-400 px-[6px] rounded-full">&check;</span>
    </h1>
    <p class="text-center">
        You have selected the ${selectedPlan} plan with ${selectedUsers} active users. Enjoy!
    </p>
        `
    popup.classList.remove('translate-y-[-1000px]')
    usersSection.classList.add('translate-y-[1000px]')

    setTimeout(() => {
        startSection.classList.remove('translate-y-[1000px]')
        planSection.classList.remove('translate-y-[1000px]')
        planSection.classList.add('translate-y-[-1000px]')
        usersSection.classList.remove('translate-y-[1000px]')
        usersSection.classList.add('-translate-y-[1000px]')
        popup.classList.add('translate-y-[-1000px]')
    }, 4000)
})
