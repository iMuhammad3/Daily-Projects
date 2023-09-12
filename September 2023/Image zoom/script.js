
const rangeInput = document.getElementById('range');
const img = document.querySelector('.img-wrapper img');
const xBtn = document.querySelector('.xBtn')
const initialScale = 1

rangeInput.addEventListener('input', () => {

    const value = rangeInput.value;

    const scaleFactor = initialScale + (value / 100); 
    console.log(scaleFactor)

    img.style.scale = scaleFactor;
});

xBtn.addEventListener('click', () => {
    img.style.scale = initialScale
    rangeInput.value = 0
})