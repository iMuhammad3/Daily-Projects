// Add JavaScript code here
const products = [
    {
        name: "Christmas Tree Decoration",
        price: 19.99,
        img_url: "https://icodethis.com/images/iCodeMas/tree.png",
        stars: 4.5,
        description: `Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful...`,
        isNew: true,
    },
    {
        name: "Present",
        price: 0.00,
        img_url: "https://icodethis.com/images/iCodeMas/gift.png",
        stars: 5,
        description: `Free present`,
        discount: "-23%",
    },
    {
        name: "Ginger bread man",
        price: 39.99,
        img_url: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
        stars: 4.5,
        description: `This is a ginger bread man and you cannot prove otherwise`,
    },
]

const section = document.querySelector("section")
const ul = document.querySelector("ul")

const createProductCard = (product, index) => {
    const li = document.createElement("li")
    li.setAttribute("data-productId", index)
    li.className = `grid place-items-center bg-white w-36 h-36 border-2 relative cursor-pointer shadow-lg`
    li.innerHTML = `
        ${product.isNew ? `<span class="absolute top-0 left-0 bg-cyan-700 text-white w-14">New</span>` : product.discout ? `<span class="absolute top-0 left-0 bg-cyan-700 text-white w-14">${product.discount}</span>` : ""}
        <img class="scale-75" src=${product.img_url} alt="">
    `
    ul.appendChild(li)
}


products.forEach((p, i) => {
    createProductCard(p, i)
})

const lis = document.querySelectorAll("ul > li")

const displayProduct = (product) => {
    section.innerHTML = `
<div class="grid place-items-center bg-white w-60 h-60 relative shadow-lg shadow-blue-800/10">
                <span class="absolute top-0 left-0 bg-cyan-700 text-white w-10">New</span>
                <img src=${product.img_url} alt="">
            </div>
            <div class="w-1/2 flex flex-col items-start gap-2">
                <p>${product.name}</p>
                <b>$${product.price}</b>
                <div class="[&>svg]:w-6 flex">
                    <svg fill="#fecd62" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fecd62"
                        stroke-width="0.00032">
                        <path
                            d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z">
                        </path>
                    </svg>
                    <svg fill="#fecd62" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fecd62"
                        stroke-width="0.00032">
                        <path
                            d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z">
                        </path>
                    </svg>
                    <svg fill="#fecd62" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fecd62"
                        stroke-width="0.00032">
                        <path
                            d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z">
                        </path>
                    </svg>
                    <svg fill="#fecd62" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fecd62"
                        stroke-width="0.00032">
                        <path
                            d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z">
                        </path>
                    </svg>
                    <svg fill="#fecd62" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fecd62"
                        stroke-width="0.00032">
                        <path
                            d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.1-0.303-0.381-0.518-0.712-0.518-0.083 0-0.163 0.014-0.238 0.039l0.005-0.002c-0.226 0.078-0.399 0.256-0.468 0.48l-0.001 0.005-0.012-0.004-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.069-0.037 0.149-0.037 0.232 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.053 0.442-0.144l-0.002 0.001 8.008-5.819 8.006 5.819c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005zM20.779 18.461c-0.188 0.138-0.309 0.358-0.309 0.607 0 0.083 0.014 0.163 0.039 0.238l-0.002-0.005 2.514 7.736-6.581-4.783c-0.116-0.080-0.259-0.128-0.414-0.128-0.009 0-0.018 0-0.028 0l0.001-0v-16.701l2.514 7.737c0.1 0.303 0.381 0.519 0.713 0.519 0 0 0 0 0 0h8.135z">
                        </path>
                    </svg>
                </div>
                <p class="text-left">${product.description}</p>
                <button class="bg-cyan-600 px-3 py-1 rounded text-white">Add to cart</button>
            </div>
    `
}

lis.forEach(li => {
    li.addEventListener("click", () => {
        lis.forEach(li => li.classList.remove("border-black"))
        li.classList.add("border-black")
        const id = li.getAttribute("data-productId")
        displayProduct(products[id])
    })

})
