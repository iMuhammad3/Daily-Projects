
const items = [
    {
        src: "https://icodethis.com/images/iCodeMas/tree.png",
        alt: "Christmas tree",
        title: "Christmas Tree Decoration",
        price: 19.99,
        priceBefore: 19.99,
        tag: "new",
        description: "Perfect for adding a festive touch to any space, this miniature tree brings the magic of Chrstmas right into your home.Crafted with care, It's a delightful...",
        category: "ornaments",
        color: ["green"],
        size: "small"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/gift.png",
        alt: "Mystery gift",
        title: "Mystery gift",
        price: 9.99,
        priceBefore: 12.99,
        tag: "23",
        description: "Nobody knows what's inside but rest assured that it will be a lovely surprise",
        category: "accessories",
        color: ["red", "white"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
        alt: "Gingerbread Cookie",
        title: "Gingerbread Cookie",
        price: 12.99,
        priceBefore: 12.99,
        tag: "",
        description: "Enjoy the Christmas by having some sweetness",
        category: "cookies",
        color: ["red", "white", "brown"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/snowflake.png",
        alt: "snowflake",
        title: "Snowflake Decoration",
        price: 12.99,
        priceBefore: 12.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "ornaments",
        color: ["white"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/star_cookie.png",
        alt: "star cookie",
        title: "Star-shaped cookie",
        price: 12.99,
        priceBefore: 12.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "cookies",
        color: ["brown", "white"],
        size: "small"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/santa_hat.png",
        alt: "santa's hat",
        title: "Santa's hat",
        price: 39.99,
        priceBefore: 39.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "accessories",
        color: ["red", "white"],
        size: "large"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/candy_cane.png",
        alt: "candy cane",
        title: "Candy Cane",
        price: 8.99,
        priceBefore: 8.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "candies",
        color: ["red", "white"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/snowman_deco.png",
        alt: "snowman decoration",
        title: "Snowman Decoration",
        price: 39.99,
        priceBefore: 39.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "ornaments",
        color: ["red", "white", "brown"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/christmas_ball.png",
        alt: "christmas ball",
        title: "Christmas Ball",
        price: 4.99,
        priceBefore: 4.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "ornaments",
        color: ["red", "white"],
        size: "medium"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/christmas_sock.png",
        alt: "christmas sock",
        title: "Christmas Sock",
        price: 29.99,
        priceBefore: 29.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "accesories",
        color: ["red", "white"],
        size: "large"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/red_ribbon.png",
        alt: "red ribbon",
        title: "Red Ribbon",
        price: 3.99,
        priceBefore: 3.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "accesories",
        color: ["red"],
        size: "small"
    },
    {
        src: "https://icodethis.com/images/iCodeMas/tree_cookie.png",
        alt: "tree cookie",
        title: "Tree Cookie",
        price: 13.99,
        priceBefore: 13.99,
        tag: "",
        description: "xxxxxxxxxxxxxxxxxxxxxxxx",
        category: "cookies",
        color: ["red", "white", "green", "brown"],
        size: "small"
    }
];

const searchInput = document.getElementById("search-input")
const closeBtn = document.getElementById("closeBtn")
const itemsCountEl = document.getElementById("items-count")
const itemsListEl = document.getElementById("items-list")

const updateItemsLeft = () => {
    itemsCountEl.innerText = `(${itemsListEl.children.length})`
}

const createItemEl = (item, index) => {
    const li = document.createElement("li")
    li.className = `p-2 flex items-center gap-4 rounded-md mb-1 cursor-pointer hover:bg-slate-200`
    li.innerHTML = `
        <img class="w-14 aspect-square object-contain" src=${item.src} alt=${item.title}>
        <p>${item.title}</p>
        <b class="ml-auto">$${item.price}</b>
    `
    li.style.animationDelay = `${index * 50}ms`
    itemsListEl.appendChild(li)
}

const removeItems = () => {
    itemsListEl.innerHTML = ""
}

let index = 0
items.forEach(item => {
    if (item.title.toLowerCase().includes(searchInput.value)) {   
        createItemEl(item, index)
        index++ 
    }
})
updateItemsLeft()

searchInput.addEventListener("input", e => {
    removeItems()
    let index = 0
    items.forEach(item => {
        if (item.title.toLowerCase().includes(e.target.value)) {
            createItemEl(item, index)
            index++
        }
    })
    updateItemsLeft()
})

closeBtn.addEventListener("click", e => {
    const containerClass = e.target.parentElement.parentElement.classList
    containerClass.add("scale-0")
    setTimeout(() => {
        containerClass.remove("scale-0")
    }, 1000)
})
