'use strict'

//GlobalObjects
let globalBoard;

let globalLevel = {
    size: 4,
    mines: 2
}
let globalGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

//GlobalVars
const MINE = '💥';
const LENGTH = 4;
//clicks
let firstClick = true;
let globalIsClicked;
let minesLocations = [];
let globalSelectedCellElement = null;
//value as a number
let currentRange = 0;
let livesCounter = 10;
let neighbouringCells = 0;
let counter = 0;
let optionToMarkMine = 20;
let globalMinesLeft = 0;
let countClicks = 0;
let countFlags = 0;
//undefined vars
let cellElementCopy;
let gameTimer;
let timerElement;
let bodyElement;
let lives;
let livesElement;
let restartButton;
let gameOverElement;
let mineElements;
let safeClicksAvailable;
let safeClickElement;
let safeCellClicked;
let hintsAvailable;
let hintsElement;
let hintIsOn;
let easyScoreElement;
let hardScoreElement;
let extremeScoreElement;
let gameStatusElement;