const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const box = document.querySelectorAll(".box");
gameSeq = [];
UserSeq = [];

function blink() {                                                                      //2nd step
    let getBox = box[Math.floor(Math.random() * 4)];
    setTimeout(() => {
        getBox.style.backgroundColor = "white";
        gameSeq.push(getBox.id);
    }, 500);
    setTimeout(() => {
        getBox.style.backgroundColor = getBox.id;   //Not working
    }, 1000);

}

let start = false;                                                                      //1st step
let level = 1;
body.addEventListener('keypress', function initialize() {
    debugger;
    if (start == false) {
        start = true;
        h3.innerText = `Level : ${level}`;
        blink();    // blinking the box
    }
});

function select() {                                                                     //4th step 
        this.style.backgroundColor = "white";
    setTimeout(() => {
        this.style.backgroundColor = this.id;   //Not working
    }, 500);
    UserSeq.push(this.id);
        if (UserSeq.length == gameSeq.length) {
            matchSeq();
            if (start == true) {
                blink();
                UserSeq = [];
            }
        }else{
            console.log("kuch nhi mila");
        }
}

box.forEach((boxes) => {                                                                //3rd step clicking
    boxes.addEventListener('click', select);

})

function reset() {
    level = 0;
    start = false;
    UserSeq = [];
    gameSeq = [];
}

function matchSeq() {
    for (let i = 0; i < gameSeq.length; i++) {
        if (gameSeq[i] != UserSeq[i]) {
            h3.innerText = "Game Over";
            reset();

        }
    }
    level++;
    h3.innerText = `Level : ${level}`;

}

