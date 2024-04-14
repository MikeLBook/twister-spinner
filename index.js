const quadrants = [
    document.querySelector('#left-hand'), 
    document.querySelector('#right-hand'),
    document.querySelector('#right-foot'),
    document.querySelector('#left-foot')
]
const colors = ['red', 'blue', 'yellow', 'green']

let counter = 0
let index = 0
let spinning = false

const nextQuadrant = () => {
    index = counter++ % quadrants.length
    return quadrants[index]
}
const clearSelected = () => quadrants[index].classList.remove('active', 'red', 'blue', 'green', 'yellow')
const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

function spin() {
    if (!spinning) {
        spinning = true
        clearSelected()

        const interval = setInterval(() => {
            const quadrant = nextQuadrant()
            quadrant.classList.add('white')
            setTimeout(() => quadrant.classList.remove('white'), 100)
        }, 100)

        setTimeout(() => {
            clearInterval(interval)
            setTimeout(() => {
                const quadrant = nextQuadrant()
                quadrant.classList.add('active', randomColor())
                spinning = false
            }, 100)
        }, Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000)
    }
}

document.body.addEventListener('click', spin)
document.body.onkeyup = (e) => {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) spin()
}