let container = document.querySelector(".board");
let containerHeight = container.clientHeight;
let containerWidth = container.clientWidth;
let blockSize = 50;
let rows = Math.floor(containerHeight / blockSize);
let cols = Math.floor(containerWidth / blockSize);
container.style.gridTemplateRows = `repeat(${rows},1fr)`;
container.style.gridTemplateColumns = `repeat(${cols},1fr`;
let blocks = [];
let snake = [
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 }
];

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let block = document.createElement("div");
        block.classList.add("block");
        container.append(block);
        block.innerText = `${row}-${col}`;
        blocks[`${row}-${col}`] = block;
    }
}

function render() {
    snake.forEach(block => {
         const cell=blocks[`${block.x}-${block.y}`]
        //  console.log(cell);
        cell.classList.add("fill");
    })
}
