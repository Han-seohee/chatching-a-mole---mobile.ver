//change color of start button
let startBtn = document.querySelector(".startImg");
let start = document.querySelector(".start");
let close = document.getElementById('close');
let modal = document.querySelector('.modal');
let dimmed = document.querySelector('.dimmed');
let moles = document.querySelector(".mole");

let cnt = 0;
let score = null;
let mole = null;
let play = false;
let timerID = 0;

function init() {
  score = document.querySelector("#score");
  mole = document.querySelector(".mole");
  close.addEventListener("click", closeModal);
  startBtn.addEventListener("mouseover", () => changePic("images/startH.png"));
  startBtn.addEventListener("mouseout", () => changePic("images/start.png"));
  start.addEventListener("click", startGame);
  moles.addEventListener("click", addScore);
}

function closeModal() {
  dimmed.style.display = "none";
  modal.style.display = "none";
}

function changePic(src) {
  startBtn.src = src;
}

function startGame() {
  if (!play) {
    play = true;
    cnt = 0;
    score.innerHTML = cnt;
    timerID = setInterval(moveMole, 700);
    checkEndGame(10);
  }
}

function addScore() {
  if (play) {
    cnt++;
    score.innerHTML = cnt;
  }
}

//두더지 움직이게 하는 moveMole()구현
function moveMole() {
  //두더지 크기 101 * 96
  //패널 크기 450 * 355
  //두더지 x이동 영역 0~293 (440-101)
  //두더지 y이동 영역 0~259 (335-96)
  let x = Math.floor(Math.random() * 309) + 'px';
  let y = Math.floor(Math.random() * 239) + 'px';

  mole.style.left = x;
  mole.style.top = y;
}

function checkEndGame(duration) {
  //게임이 10초 뒤에 종료
  setTimeout(function () {
    play = false;
    //두더지 움직이는 타이머 제거
    clearInterval(timerID);
    alert("게임종료⭐️ 두더지 " + cnt + " 마리를 잡았습니다.🐾");
  }, duration * 1000);
}

init();

