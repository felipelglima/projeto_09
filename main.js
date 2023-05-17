const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
const button = document.querySelector("button")

function openCookie(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

function tryAgain(){
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
}

cookie.addEventListener("click", openCookie)
button.addEventListener("click", tryAgain)