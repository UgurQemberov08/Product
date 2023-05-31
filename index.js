const add = document.querySelector(".add")
const mine = document.querySelector(".mine")
const number = document.querySelector(".number")

add.addEventListener('click', () => {
    if (number.innerText != 50) {
        number.innerText++
    }
})

mine.addEventListener('click', () => {
    if (number.innerText > 0) {
        number.innerText--
    }
})