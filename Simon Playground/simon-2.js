const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const box = document.querySelectorAll(".box");
gameSeq = [];
UserSeq = [];

//additional
const sounds={
    start:new Audio("fah.mp3"),
    click:new Audio("ding.mp3"),
    lose:new Audio("violin.mp3")
}

let start = false;                                                                          //1st step
let level = 1;
body.addEventListener('keydown', function initialize() {
    if (start == false) {
        sounds["start"].play();                                                                 //playing sound
        start = true;
        h3.innerText = `Level : ${level}`;
        randomBox();    // blinking the box
    }
});

function randomBox() {                                                                      //2nd step
    let getBox = box[Math.floor(Math.random() * 4)];
    gameSeq.push(getBox.id);
    blink(getBox);
}

function blink(box) {                                                                       //3rd step
    setTimeout(() => {
        box.style.backgroundColor = "white";
    }, 100);
    setTimeout(() => {
        box.style.backgroundColor = box.id;   
    }, 800);
}

box.forEach((boxes) => {                                                                    //4th step clicking
    boxes.addEventListener('click', select);
})

function select() {                                                                         //5th step
    sounds["click"].play();
    blink(this);
    UserSeq.push(this.id);
    // if (UserSeq.length == gameSeq.length) {
        matchSeq();
    // }


}

function matchSeq() {                                                                       //6th step
    let i = 0;
    while (i < UserSeq.length) {
        if (UserSeq[i] !== gameSeq[i]) {
            h3.innerText = `"Game Over"    Your Score was ${level}\n Press any key to Start Again`;
            reset();                                                                        //7th and Last step if wrong selection
            sounds["lose"].play();
            return;
        }
        i++;
    }
    if(UserSeq.length==gameSeq.length){
        levelUp();                                                                          //7th step if right slection
    }
}

function levelUp() {                                                                        //8th step to levelUp
    level++;
    h3.innerText = `Level : ${level}`;
    UserSeq = [];
    setTimeout(() => {
        randomBox();
    }, 1000);
}

function reset() {
    level = 0;
    start = false;
    UserSeq = [];
    gameSeq = [];
}

