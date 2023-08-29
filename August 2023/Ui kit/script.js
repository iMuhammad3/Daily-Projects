const days = ['sun','mon','tue','wed','thu','fri','sat']
const datesEl = document.querySelector('.dates')
const daysEl = document.querySelector('.days')


function makeCalendar() {
    for (let day in days) {
        const span = document.createElement('span')
        span.textContent = days[day].toUpperCase()
        daysEl.appendChild(span)
    }

    for (let date = 1; date < 31; date++){
        const li = document.createElement('li');
        li.textContent = date
        datesEl.appendChild(li)
    }

}
makeCalendar()