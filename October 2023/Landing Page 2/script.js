// Add JavaScript code here
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('closeMenu')
const body = document.body

menuBtn.addEventListener('click', () => {
    menu.className = `absolute -translate-x-[1000px] transition-transform duration-500 inset-0 bg-white flex flex-col gap-3 items-center justify-center text-3xl
        [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-md [&>li]:transition [&>li]:cursor-pointer
        hover:[&>li]:bg-slate-100`
        setTimeout(() => {
            menu.classList.remove('-translate-x-[1000px]')
        })
        body.classList.add('overflow-hidden')
})
closeMenu.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.add('-translate-x-[1000px]')
    }, 100)
    setTimeout(() => {
        menu.className = `hidden md:flex
        [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-md [&>li]:transition [&>li]:cursor-pointer
        hover:[&>li]:bg-slate-100`
    }, 400)
        body.classList.remove('overflow-hidden')
})
window.addEventListener('resize', () => {
    const width = body.clientWidth
    if (width > 768) {
        menu.className = `hidden md:flex
        [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-md [&>li]:transition [&>li]:cursor-pointer
        hover:[&>li]:bg-slate-100`
        body.classList.remove('overflow-hidden')
    }
})

