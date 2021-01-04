export const SNAKE_SPEED = 1
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
    console.log('update snake')


}

export function draw(gameboard) {
snakeBody.forEach(Segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classlist.add('snake')
    gameboard.appendChild(snakeElement)

})
}
