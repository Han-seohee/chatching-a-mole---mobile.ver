//change color of start button
let startBtn = document.querySelector(".startImg");
let start = document.querySelector(".start");
let close = document.getElementById('close');
let modal = document.querySelector('.modal');
let dimmed = document.querySelector('.dimmed');

close.addEventListener("click", function(){
    dimmed.style.display = "none";
    modal.style.display = "none";
})

startBtn.addEventListener("mouseover", changePic, false);
startBtn.addEventListener("mouseout", originPic, false);

start.addEventListener("click", startGame);

function changePic(){
    startBtn.src = "images/startH.png";
}
function originPic(){
    startBtn.src = "images/start.png";
}

//전역변수 선언
let cnt = 0;
let score = null;
let mole = null;
let play = false;
let timerID = 0;

init();
initEvent();


function init(){
    score = document.querySelector("#score");
    mole = document.querySelector(".mole");
}


//이벤트 등록
function initEvent(){
    //두더지 클릭하면 점수 증가
    let moles = document.querySelector(".mole");
    moles.addEventListener("click", addScore);
    addScore();
}

//start()구현
function startGame(){
    //false일 때 게임 시작
    if(play == false){
        checkEndGame();
        play = true;
        timerID = setInterval(function(){
            //두더지 움직이기
            moveMole();
        }, 500);
    }
}

//addScore()구현
function addScore(){
    if(play == true){
        cnt++;
        score.innerHTML = cnt;
    }
}

//두더지 움직이게 하는 moveMole()구현
function moveMole(){
    //두더지 크기 101 * 96
    //패널 크기 450 * 355
    //두더지 x이동 영역 0~293 (450-101)
    //두더지 y이동 영역 0~259 (355-96)
    let x = Math.floor(Math.random() * 349) + 'px';
    let y = Math.floor(Math.random() * 259) + 'px';

    mole.style.left = x;
    mole.style.top = y;
}

function checkEndGame(){
    //게임이 10초 뒤에 종료
    setTimeout(function(){
        play = false;
        //두더지 움직이는 타이머 제거
        clearInterval(timerID);
        alert("게임종료⭐️ 두더지 " + cnt + " 마리를 잡았습니다.🐾");
        cnt = 0;
        score.innerHTML = 0;
    }, 10000);
}

