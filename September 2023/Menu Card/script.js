const main = document.querySelector("main");
const items = document.querySelectorAll("main li");

let index = 0;

function slide(index) {

    const width = items[0].offsetWidth + 10;

    main.style.transform = `translateX(-${(index * width)}px)`
    
}


setInterval(() => {
    index++;
    if (index > 2) {
        index = 0
    }
    slide(index);
}, 3000)