const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

const changeColor = color => {
    if(count.innerHTML > 0) {
        count.style.color = color
    }
    if(count.innerHTML < 0) {
        count.style.color = color
    }
    count.style.color = color
}

buttons.addEventListener('click', e => {

    if (e.target.classList.contains('add')) {
        count.innerHTML++
        changeColor("green")
    }
    if(e.target.classList.contains('subtract')) {
        count.innerHTML--
        changeColor("red")
    }
    if(e.target.classList.contains('reset')) {
        count.innerHTML = 0
        changeColor("white")
    }
})

