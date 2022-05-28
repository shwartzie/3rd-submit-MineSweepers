"use strict";
//game functions
function playGame(buttonElement) {
	if (buttonElement.innerText === "Easy") {
		globalLevel.size = 4;
		globalLevel.mines = 2;
	}
	if (buttonElement.innerText === "Hard") {
		globalLevel.size = 8;
		globalLevel.mines = 12;
	}
	if (buttonElement.innerText === "Extreme!") {
		globalLevel.size = 12;
		globalLevel.mines = 30;
	}
	newGame();
}
function newGame() {
	init();
	firstClick = true;
	clearInterval(gameTimer);
	globalIsClicked = false;

}
function saveBestScore() {
	let previousBestScore = localStorage.getItem("best-score-" + globalLevel.size);

	if (!previousBestScore) {
		localStorage.setItem("best-score-" + globalLevel.size, globalGame.secsPassed);
	} else if (globalGame.secsPassed > previousBestScore) {
		console.log(previousBestScore);
		localStorage.setItem("best-score-" + globalLevel.size, globalGame.secsPassed);
	}
	console.log(previousBestScore);
	easyScoreElement.innerText = localStorage.getItem('best-score-4');
	hardScoreElement.innerText = localStorage.getItem('best-score-8');
	extremeScoreElement.innerText = localStorage.getItem('best-score-12');
}
function safeClick() {
	let randomColumn = getRandomInt(0, globalBoard.length - 1);
	let randomRow = getRandomInt(0, globalBoard.length - 1);

	if (!safeClicksAvailable || !cellElementCopy) {
		return;
	}

	let cellElement = document.querySelector(`.cell-${randomColumn}-${randomRow}`);
	let cell = globalBoard[randomColumn][randomRow];

	if (!cell.isMine && !cell.isShown) {
		cellElement.classList.add('safe-border');
		safeClicksAvailable--;
		safeClickElement.innerText = safeClicksAvailable;
		setTimeout(() => {
			cellElement.classList.remove('safe-border');
		}, 1500);
	} else {
		console.log("test");
		safeClick();
	}
}
function hint(currentColumn, currentRow) {
	if (!hintsAvailable || !globalGame.isOn) {
		return;
	}
	hintsAvailable--;
	hintsElement.innerText = hintsAvailable;
	let cellElement = document.querySelector(`.cell-${currentColumn}-${currentRow}`);
	let hintTimer = setTimeout(() => {
		cellElement.style.border = '3px solid black';
		clearTimeout(hintTimer);
		hintIsOn = false;
		return;
	}, 1500);
}
