
const app = document.querySelector('.app-icon')
const commentWrapper = document.querySelector('.comments-wrapper')
const profile = document.querySelector('.profile')
const dashboard = document.querySelector('.dashboard')
const gallery = document.querySelector('.gallery')
const about = document.querySelector('.about')

app.addEventListener('click', () => {
    dashboard.classList.remove('hide')
    app.classList.add('hide')
})

const followers = document.querySelector('#followers')
const followBtn = document.querySelector('#followBtn')

followBtn.addEventListener('click', () => {
    let followersValue = Number(followers.textContent)
    followers.innerText = `${followersValue + 1}`
})

const notifyBtn = document.querySelector('.notify')
const dbimg = document.querySelector('.dashboard img')
const aboutBtn = document.querySelector('.aboutBtn')
const galleryBtn = document.querySelector('.galleryBtn')

let all = [commentWrapper, profile, gallery, about]

notifyBtn.addEventListener('click', () => {
    closeTheRest(commentWrapper, all)
    commentWrapper.classList.toggle('hide')
    notifyBtn.style.animationPlayState = 'paused';
    document.querySelector('.notify > span').remove()
})
dbimg.addEventListener('click', () => {
    closeTheRest(profile, all)
    profile.classList.toggle('hide')
})
galleryBtn.addEventListener('click', () => {
    closeTheRest(gallery, all)
    gallery.classList.toggle('hide')
})
aboutBtn.addEventListener('click', () => {
    closeTheRest(about, all)
    about.classList.toggle('hide')
})

function closeTheRest(curr, rest) {
    let newArray = rest.filter(item => item !== curr)

    newArray.forEach(item => {
        if (item.classList.contains('hide')) {
            return
        } else {
            item.classList.add('hide')
        }
    })
    console.log(rest)
}

