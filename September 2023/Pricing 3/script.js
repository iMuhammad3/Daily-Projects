
const plans = [
    {
        name: 'light',
        price: '$19',
        connections: '100',
        messages: '200,000',
        ssl_protection: false,
    },
    {
        name: 'startup',
        price: '$49',
        connections: '500',
        messages: '1 million',
        ssl_protection: true,
    },
    {
        name: 'bigboy',
        price: '$199',
        connections: '5000',
        messages: '10 million',
        ssl_protection: true,
    },
]

const wrapper = document.querySelector('.wrapper')

plans.forEach(plan => {
    const { name, price, connections, messages, ssl_protection } = plan
    const div = document.createElement('div')
    div.classList.add(`${name}-container`)
    div.innerHTML = `
        <header>
            <h2>${name.toUpperCase()}</h2>
        </header>
        <section>
            <div>
                <h1>${price}</h1>
                <small><sub>/mo</sub></small>
            </div>
            <div>
                <div>
                    <b>${connections}</b>
                    <small>Max Connections</small>
                </div>
                <div>
                    <b>${messages}</b>
                    <small>Messages per day</small>
                </div>
                <div class="${ssl_protection ? '' : 'canceled'}">
                    <b>Encryption</b>
                    <small>SSL Protection</small>
                </div>
            </div>
            <button>SELECT PLAN</button>
        </section>
    `
    wrapper.appendChild(div)
})