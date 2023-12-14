// Add JavaScript code here

const chat = document.getElementById("chat")
const form = document.querySelector("form")
const input = document.querySelector("input")
const close = document.getElementById("close")

close.addEventListener("click", () => {
    document.querySelector("section").classList.toggle("scale-0")
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
        alert("Please enter a message")
        return;
    }

    createMessage(input.value)
    setTimeout(() => {
        createMessage("Ho Ho Ho!!!", true)
    }, 1000)
    input.value = ""
})

const createMessage = (message, santa = false) => {
    const time = `${format(new Date().getHours() % 24)}:${format(new Date().getMinutes() % 60)}`
    const li = document.createElement("li")
    li.className = santa ? "" : "self-end flex-row-reverse"
    li.innerHTML = `
        <img src=${santa ? "https://icodethis.com/images/iCodeMas/tiny_santa.png" : "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/d18365d5-8acd-4e7c-a70c-3cea444dd8c9.png"} alt="" />
        <div class=${santa ? "" : "text-right"}>
            <p>${message}</p>
            <small>${time}</small>
        </div>
    `
    chat.appendChild(li)
    chat.scrollTop = chat.scrollHeight
}

const format = (number) => {
    return number.toString().padStart(2, "0")
}