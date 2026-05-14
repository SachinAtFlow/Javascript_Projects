let intervalId = null;
let containerWidth = document.querySelector(".board").offsetWidth;
let containerHeight = document.querySelector(".board").offsetHeight;
let container = document.querySelector(".board");
let start = document.querySelector(".btn-start");
let getPrepare = document.querySelector(".btn");
let preFiller = document.querySelector(".preFiller");
let postFiller = document.querySelector(".postFiller");
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

getPrepare.addEventListener("click", () => {
    preFiller.style.display = "none";
})

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
}

    // let food=`${Math.random()*rows}-${Math.random()*cols}`;
    let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    function redFood() {
        // console.log("ok dewar ji");
        blocks[`${food.x}-${food.y}`].classList.add("foodColor");
    }

    snake.forEach(block => {
        const cell = blocks[`${block.x}-${block.y}`];
        if (cell) {
            cell.classList.add("fill");
        }
    });

    snake.forEach(block => {
        blocks[`${block.x}-${block.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();

    if (head.x == food.x && head.y == food.y) {
        // console.log("love you dewar ji");
        blocks[`${food.x}-${food.y}`].classList.remove("foodColor");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
        blocks[`${food.x}-${food.y}`].classList.add("foodColor");
        snake.unshift(head);

    }



    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        console.log("hello dewar ji")
        postFiller.style.display = "flex";
        restart();
        clearInterval(intervalId);
        return;
    }


    function restart() {
        console.log("love you dewar ji");
        // postFiller.style.display="flex";
    }

    //Event Listerners

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

    start.addEventListener("click", () => {
        intervalId = setInterval(() => {
            render();
            redFood();
        }, 200);
    })


