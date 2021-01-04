import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastrendertime = 0 
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastrendertime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    
    lastrendertime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update () {
    updateSnake()
}

function draw () {
    drawSnake(gameBoard)
}
