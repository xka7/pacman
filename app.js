const squares = Array.from(document.querySelectorAll('.grid div'))
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,1,2,2,2,1,1,1,1,1,1,2,2,2,2,3,1,
    1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
    1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,
    1,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,1,
    1,1,1,1,2,1,1,1,0,0,1,1,1,2,1,1,1,1,
    1,1,2,1,2,1,1,5,0,0,7,1,1,2,1,2,1,1,
    1,1,2,2,2,1,1,6,0,0,8,1,1,2,2,2,1,1,
    1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
    2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,
    1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,
    1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
    1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

for (let i = 0; i < layout.length; i++) {
    if (layout[i] == 77) {
        squares[i].classList.add("inky")
    } else if (layout[i] == 1) {
        squares[i].classList.add("wall")
    } else if (layout[i] == 2) {
        squares[i].classList.add("pac-dot")
    } else if (layout[i] == 3) {
        squares[i].classList.add("power-pellet")
    } else if (layout[i] == 4) {
        squares[i].classList.add("pac-man")
    } else if (layout[i] == 5) {
        squares[i].classList.add("inky")
    } else if (layout[i] == 6) {
        squares[i].classList.add("pinky")
    } else if (layout[i] == 7) {
        squares[i].classList.add("clyde")
    } else if (layout[i] == 8) {
        squares[i].classList.add("blinky")
    }
}

