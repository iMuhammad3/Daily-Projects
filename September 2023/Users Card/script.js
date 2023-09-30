
document.body.addEventListener('click', (e) => {
    const element = e.target

    if (element.tagName === 'BUTTON') {

        let followers = element.parentElement.querySelector('small')?.textContent.match(/\d+/)

        if (element.textContent === 'Follow') {
            element.textContent = 'Unfollow'
            element.parentElement.querySelector('small').innerText = `${++followers[0]} followers`
        } else if (element.textContent === 'Unfollow'){
            element.textContent = 'Follow'
            element.parentElement.querySelector('small').innerText = `${--followers[0]} followers`
        }

    }
})

