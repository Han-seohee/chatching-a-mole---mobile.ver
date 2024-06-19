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
let gameTimerID = 0;
let countdownTimerID = 0;
let timeRemaining = 10;
let timerDisplay = null;

function init() {
  score = document.querySelector("#score");
  mole = document.querySelector(".mole");
  timerDisplay = document.querySelector("#timer");

  close.addEventListener("click", closeModal);
  startBtn.addEventListener("mouseover", () => changePic("images/startH.png"));
  startBtn.addEventListener("mouseout", () => changePic("images/start.png"));
  start.addEventListener("click", startGame);
  moles.addEventListener("click", addScore);
  timerDisplay.style.display = 'none';
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
    timeRemaining = 10;
    timerDisplay.innerHTML = `남은 시간 : ${timeRemaining}초`;
    gameTimerID = setInterval(moveMole, 700);
    countdownTimerID = setInterval(updateTimer, 1000);
    timerDisplay.style.display = 'block';
    startBtn.style.display = 'none';
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

function updateTimer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    timerDisplay.innerHTML = `남은 시간 : ${timeRemaining}초`;
  } else {
    endGame();
  }
}

function endGame() {
  play = false;
  clearInterval(gameTimerID);
  clearInterval(countdownTimerID);
  startBtn.style.display = 'block';
  timerDisplay.style.display = 'none';
  alert(`게임종료⭐️ 두더지 ${cnt} 마리를 잡았습니다.🐾`);
}

init();

