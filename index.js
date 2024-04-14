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

function spin() {
    if (!spinning) {
        spinning = true
        const spinDuration = Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000
        const spinInterval = setInterval(() => {
            const quadrant = nextQuadrant()
            quadrant.classList.add('white')
            setTimeout(() => quadrant.classList.remove('white'), 100)
        }, 100)
        setTimeout(() => {
            clearInterval(spinInterval)
            setTimeout(() => {
                const quadrant = nextQuadrant()
                const color = colors[Math.floor(Math.random() * colors.length)]
                quadrant.classList.add('active', color)
                spinning = false
            }, 100)
        }, spinDuration)
    }
}

const nextQuadrant = () => {
    quadrants[index].classList.remove('active', 'red', 'blue', 'green', 'yellow')
    index = counter++ % quadrants.length
    return quadrants[index]
}

document.body.addEventListener('click', spin)