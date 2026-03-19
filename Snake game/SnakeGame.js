let intervalId = null;
let containerWidth = document.querySelector(".board").offsetWidth;
let containerHeight = document.querySelector(".board").offsetHeight;
let container = document.querySelector(".board");
let blockWidth = 50;
let blockHeight = 50;
let cols = Math.floor(containerWidth / blockWidth);
let rows = Math.floor(containerHeight / blockHeight);
container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
// for (let i = 0; i <rows*cols ; i++) {
//     let buildingBlock = document.createElement("div");
//     buildingBlock.classList.add("block");
//     container.append(buildingBlock);
// }
const blocks = [];
let snake = [
    {
        x: 1, y: 3
    },
    {
        x: 1, y: 4
    },
    {
        x: 1, y: 5
    }
]

// let food=`${Math.random()*rows}-${Math.random()*cols}`;
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
function redFood() {
    console.log("ok dewar ji");
    blocks[`${food.x}-${food.y}`].classList.add("foodColor");
}



let direction = "right";
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let buildingBlock = document.createElement("div");
        buildingBlock.classList.add("block");
        container.append(buildingBlock);
        // buildingBlock.innerText=`(${row},${col})`;
        blocks[`${row}-${col}`] = buildingBlock;
    }
}

// let changeDirxn=direction.addEventLi

function render() {
    let head = null;
    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    }


    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();


    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over");
        clearInterval(intervalId);
    }
    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.add("fill");
    })

    if (head.x == food.x && head.y == food.y) {
        console.log("love you dewar ji");
        blocks[`${food.x}-${food.y}`].classList.remove("foodColor");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
        blocks[`${food.x}-${food.y}`].classList.add("foodColor");
        snake.unshift(head);

    }

}

intervalId = setInterval(() => {
    render();
    redFood();

}, 200);



addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        direction = "up";
    } else if (event.key == "ArrowDown") {
        direction = "down";
    } else if (event.key == "ArrowLeft") {
        direction = "left";
    } else if (event.key == "ArrowRight") {
        direction = "right";
    }
})




