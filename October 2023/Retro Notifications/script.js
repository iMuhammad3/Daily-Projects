// Add JavaScript code here
const msgs = document.getElementById('msgs')
const bell = document.getElementById('bell')
const main = document.querySelector('main')

msgs.addEventListener('click', () => {
    main.classList.add('before:-translate-x-20')
    main.innerHTML = `
        <header class="p-4 bg-cyan-50 text-[#7cd5eb] rounded-t-md">MESSAGES</header>
            <ul class="py-4 text-gray-500
            [&>li]:flex [&>li]:p-3 [&>li]:gap-3 [&>li]:border-b-2">
                <li class="hover:bg-blue-50">
                    <img class="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                    <div class="flex flex-col items-start">
                        <h2>Peter</h2>
                        <p class="text-base text-gray-400">Hi!</p>
                    </div>
                    <span class="ml-auto">15:45</span>
                </li>
                <li class="hover:bg-blue-50">
                    <img class="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                    <div class="flex flex-col items-start">
                        <h2>Him</h2>
                        <p class="text-base text-gray-400">I'm Him!</p>
                    </div>
                    <span class="ml-auto">12:23</span>
                </li>
                <li class="hover:bg-blue-50">
                    <img class="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                    <div class="flex flex-col items-start">
                        <h2>Me</h2>
                        <p class="text-base text-gray-400">I'm cooking</p>
                    </div>
                    <span class="ml-auto">Friday</span>
                </li>
            </ul>
    `
})
bell.addEventListener('click', () => {
    main.classList.remove('before:-translate-x-20')
    main.innerHTML = `
        <header class="p-4 bg-cyan-50 text-[#7cd5eb] rounded-t-md">NOTIFICATIONS</header>
            <ul class="py-4 text-gray-500 [&>li]:flex [&>li]:py-4 [&>li]:px-5 [&>li]:gap-5 [&>li]:items-center fill-cyan-300">
                <li class="hover:bg-blue-50">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                            <path
                                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                        </svg>
                    </div>
                    <h2>Friend requests</h2>
                    <span class="ml-auto px-4 border border-gray-500 text-sm flex items-center justify-center rounded-full">23</span>
                </li>
                <li class="hover:bg-blue-50">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                        </svg>
                    </div>
                    <h2>Comments</h2>
                    <span class="ml-auto px-4 border border-gray-500 text-sm flex items-center justify-center rounded-full">14</span>
                </li>
                <li class="hover:bg-blue-50">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </div>
                    <h2>Favorites</h2>
                    <span class="ml-auto px-4 border border-gray-500 text-sm flex items-center justify-center rounded-full">11</span>
                </li>
                <li class="hover:bg-blue-50">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </div>
                    <h2>Visitors</h2>
                    <span class="ml-auto px-4 border border-gray-500 text-sm flex items-center justify-center rounded-full">49</span>
                </li>
            </ul>
    `
})

