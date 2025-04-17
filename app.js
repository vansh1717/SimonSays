let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    //random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);

}

function checkAns(index) {

    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER,Our Score was <b>${level}</b> <br>Press key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 300);
        reset();
    }
}
function btnpress() {

    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}