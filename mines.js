"use strict";

function showMines() {
	for (let i = 0; i < minesLocations.length; i++) {
		let mineElement = document.querySelector(`.cell-${minesLocations[i].i}-${[minesLocations[i].j]}`
		);
		mineElement.innerText = MINE;
		mineElement.classList.add("shown");
		let currentMine = globalBoard[minesLocations[i].i][minesLocations[i].j];
		currentMine.isShown = true;
	}
}
function expandShown(columnIndex, rowIndex, board, neighbours) {
	for (let i = +columnIndex - 1; i <= +columnIndex + 1; i++) {
		if (i < 0 || i > board.length - 1) {
			continue;
		}
		for (let j = +rowIndex - 1; j <= +rowIndex + 1; j++) {
			if (j < 0 || j > board[0].length - 1) {
				continue;
			}
			let cell = board[i][j];
			if (cell.isMarked) {
				continue;
			}
			cell.isShown = true;
			let cellElement = document.querySelector(`.cell-${i}-${j}`);
			cellElement.classList.add("shown");
			if (cell.minesAroundCount === 0) {
				cellElement.innerText = "";
				cellElement.style.backgroundColor = "grey";
			}
			if (cell.minesAroundCount !== 0) {
				cellElement.innerText = cell.minesAroundCount;
			}
		}
	}
}
function countMineNeighbours(columnIndex, rowIndex, board) {
	const cellWithNeighbours = getNeightbors(columnIndex, rowIndex, board);
	let neighborsCount = 0;

	for (const cell of cellWithNeighbours) {
		if (cell.isMine) {
			neighborsCount++;
		}
	}

	return neighborsCount;
}
function getNeightbors(columnIndex, rowIndex, board) {
	let neighbors = [];
	for (let i = columnIndex - 1; i <= columnIndex + 1; i++) {
		if (i < 0 || i >= board.length) {
			continue;
		}
		for (let j = rowIndex - 1; j <= rowIndex + 1; j++) {
			if (i === columnIndex && j === rowIndex) {
				continue;
			}
			if (j < 0 || j >= board.length) {
				continue;
			}
			neighbors.push(board[i][j]);
		}
	}
	return neighbors;
}
function addRandomMine(maxAmountOfMines) {
	let mines = 0;
	while (mines < maxAmountOfMines) {
		let position = {
			i: getRandomInt(0, globalBoard.length - 1),
			j: getRandomInt(0, globalBoard.length - 1),
		};
		if (globalBoard[position.i][position.j].isMine === true) {
			continue;
		}

		globalBoard[position.i][position.j].isMine = true;
		mines++;
		minesLocations.push(position);
	}
}
function setMinesNegsCount(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			let neighbouringCellsCount = countMineNeighbours(i, j, globalBoard);
			board[i][j].minesAroundCount = neighbouringCellsCount;
		}
	}
}
