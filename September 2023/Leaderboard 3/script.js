
const players = [
    {
        img_url: "https://images.livemint.com/img/2023/01/28/600x338/SOCCER-SAUDI-ITT-ANA-REPORT-15_1674874875893_1674874875893_1674875259196_1674875259196.JPG",
        name: "Cristiano Ronaldo",
        votes: 22343,
        recommendations: 20333,
        earnings: "$54,000,000"
    },
    {
        img_url: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
        name: "Kylian Mbappé",
        votes: 21015,
        recommendations: 19363,
        earnings: "$72,500,000"
    },
    {
        img_url: "https://asset.kompas.com/crops/VScwGeF6jEGzLzB6vuvz98GpPZc=/134x0:1754x1080/1200x800/data/photo/2022/12/03/638b2c418914d.jpg",
        name: "Neymar Jr.",
        votes: 17890,
        recommendations: 15098,
        earnings: "$42,300,000"
    },
    {
        img_url: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/22/thumb_121425_default_news_size_5.jpeg",
        name: "Mohamed Salah",
        votes: 15340,
        recommendations: 10273,
        earnings: "$32,800,000"
    },
    {
        img_url: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6a7ddf9f5aad57bd/637157b1f9731c11eca0d676/GettyImages-1243486208.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        name: "Haaland",
        votes: 14225,
        recommendations: 17903,
        earnings: "$41,700,000"
    }
]

const morePlayers = [
    {
        img_url: "https://premium.vgc.no/v2/images/faf9508e-681f-477d-889e-03f988c8b6c9?fit=crop&format=auto&h=1407&w=2048&s=f22177628908dee65e291aa1d2ccad7f1f5a28ae",
        name: "Lionel Messi",
        votes: 22343,
        recommendations: 20333,
        earnings: "$54,000,000"
    },
    {
        img_url: "https://i2-prod.mirror.co.uk/incoming/article30856323.ece/ALTERNATES/s615b/0_Andre-Onanas-message-to-Man-Utd-teammates-during-Arsenal-defeat-speaks-volumes.jpg",
        name: "Onana",
        votes: 21015,
        recommendations: 19363,
        earnings: "$72,500,000"
    },
    {
        img_url: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltae0110f97fe5c4c7/64b8f55c6075e8ea6097e8ca/cancelo.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        name: "Cancelo",
        votes: 17890,
        recommendations: 15098,
        earnings: "$42,300,000"
    },
    {
        img_url: "https://www.realmadrid.com/img/vertical_380px/benzema_av38083-002_20230606094529.jpg",
        name: "Benzema",
        votes: 15340,
        recommendations: 10273,
        earnings: "$32,800,000"
    },
    {
        img_url: "https://pbs.twimg.com/media/F5ZueXnWYAAHxGx.jpg:large",
        name: "Joao Felix",
        votes: 14225,
        recommendations: 17903,
        earnings: "$41,700,000"
    }
]

const table = document.querySelector('table')
const viewMoreBtn = document.querySelector('#viewBtn')
let rank = 1

players.forEach(player => showPlayers(player))

viewMoreBtn.addEventListener('click', () => {
    morePlayers.forEach(player => showPlayers(player))
}, {once: true})

function showPlayers(player) {
    const { img_url, name, votes, earnings, recommendations } = player
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td class="td-rank">
            <h2>${rank++}</h2> <img src="${img_url}" alt="${name}">
        </td>
        <td>${name}</td>
        <td class="td-votes">
            <div>
                <h2>${votes}</h2>
                <small>${recommendations} recommendations</small>
            </div>
        </td>
        <td><b>${earnings}</b></td>
    `
    table.appendChild(tr)
}