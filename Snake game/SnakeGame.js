let containerWidth = document.querySelector(".board").offsetWidth;
let containerHeight = document.querySelector(".board").offsetHeight;
let container = document.querySelector(".board");
let blockWidth= 30;
let blockHeight=30;
let cols = Math.floor(containerWidth/blockWidth);
let rows= Math.floor(containerHeight/blockHeight);
for (let i = 0; i <=rows*cols ; i++) {
    let buildingBlock = document.createElement("div");
    buildingBlock.classList.add("block");
    container.append(buildingBlock);
}


