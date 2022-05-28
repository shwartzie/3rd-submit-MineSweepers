'use strict'

function cellClicked(cellElement) {
	let position = cellElement.dataset;
	let cell = globalBoard[position.i][position.j];
    cellElementCopy = cellElement;
	if (mineElements.innerText === "You Lost!") {
		clearInterval(gameTimer);
		return;
	}
	if (firstClick) {
		if (cell.isMine) {
			newGame();
			return;
		}
		globalGame.isOn = true;
		timer();
		firstClick = false;
	}

	if (cell.isShown || cell.isMarked || !globalGame.isOn) {
		return;
	}
	restartButton.innerText = "😉";
	cellElement.classList.add("shown");
	cell.isShown = true;
	if (cell.isMine === true) {
		cellElement.innerText = MINE;
	} else if (cell.minesAroundCount === 0) {
		expandShown(position.i, position.j, globalBoard);
		cellElement.innerText = "";
	} else {
		cellElement.innerText = cell.minesAroundCount;
	}
	if (cellElement.innerText === MINE) {
		restartButton.innerText = "🤯";
		renderLives();
		globalMinesLeft--;
		if (livesCounter === 0) {
			gameOver(cellElement);
		}
	}
	if (checkIfWon(cell)) {
		clearInterval(gameTimer);
		restartButton.innerText = "😎";
		gameStatusElement.innerText = "Congrats You Won🏆";
        gameStatusElement.style.display = 'inline-block';
		showMines();
	}
}
function cellMarked(cellElement) {
	let position = cellElement.dataset;
	let cell = globalBoard[position.i][position.j];
	if (cell.isShown) {
		return;
	}
	if (cell.isMarked) {
		cell.isMarked = false;
		cellElement.innerText = "";
	} else {
		cell.isMarked = true;
		cellElement.innerText = "🏴";
	}
}