'use strict'

function init() {
    //global Dom Calls
    bodyElement = document.querySelector('.game-board .tbody');
    timerElement = document.querySelector(".timer span");
    lives = document.querySelector('.lives span');
    restartButton = document.querySelector('.restart-game');
    livesElement = document.querySelector('.lives');
    mineElements = document.querySelector('.mines-left');
    safeClickElement = document.querySelector('.safe-click span');
    hintsElement = document.querySelector('.hints span');
    easyScoreElement = document.querySelector('.easy-score span');
    hardScoreElement = document.querySelector('.hard-score span');
    extremeScoreElement = document.querySelector('.extreme-score span');
    easyScoreElement.innerText = localStorage.getItem('best-score-4');
	hardScoreElement.innerText = localStorage.getItem('best-score-8');
	extremeScoreElement.innerText = localStorage.getItem('best-score-12');
    gameStatusElement = document.querySelector('.game-status');
    hintsElement.addEventListener("click", () => {
        hintIsOn = true;
    });
    //globalObjects
    globalGame.isOn = false;
    globalGame.shownCount = 0;
    globalGame.markedCount = 0;
    globalGame.secsPassed = 0;
    //VARS

    //clicks
    firstClick = true;
    globalIsClicked = false;
    safeCellClicked = false;
    hintIsOn = false;
    //values as in a number and arrays
    countFlags = 0;
    countClicks = 0;
    safeClicksAvailable = 3;
    optionToMarkMine = 20;
    livesCounter = 3;
    hintsAvailable = 3;
    minesLocations = [];
    //DOM
    hintsElement.innerText = hintsAvailable;
    timerElement.innerText = '';
    restartButton.innerText = '😉';
    gameStatusElement.innerText = '';
    mineElements.innerText = '';
    gameStatusElement.style.display = 'none';
    lives.innerText = livesCounter;
    livesElement = lives.innerText;
    globalMinesLeft = globalLevel.mines;
    safeClickElement.innerText = safeClicksAvailable;
    //functions
    globalBoard = buildBoard();
    addRandomMine(globalLevel.mines);
    setMinesNegsCount(globalBoard);
    renderBoard(globalBoard);
    //preventRightClick
    document.addEventListener("contextmenu",  e => {
        e.preventDefault();
    }, false);
}