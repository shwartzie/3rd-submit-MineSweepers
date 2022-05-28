'use strict'
function buildBoard() {
    let board = [];
    for (let i = 0; i < globalLevel.size; i++) {
        board[i] = [];
        for (let j = 0; j < globalLevel.size; j++) {
            let cell = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
            board[i][j] = cell;
        }
    }
    return board;
}
function renderBoard(board) {
	let strHTML = "";
	for (let i = 0; i < board.length; i++) {
		strHTML += "<tr>";
		for (let j = 0; j < board.length; j++) {
			let cellClass = getClassName({ i, j });
			let cell = board[i][j];
			if (cell.isMine === false) {
				if (cell.minesAroundCount === 0) {
					strHTML += `<td oncontextmenu="cellMarked(this)" onclick="cellClicked(this)" data-i="${i}" data-j="${j}" class="cell-${cellClass}"></td>`;
				} else {
					strHTML += `<td oncontextmenu="cellMarked(this)" onclick="cellClicked(this)" data-i="${i}" data-j="${j}" class="cell-${cellClass}"></td>`;
				}
			} else {
				strHTML += `<td oncontextmenu="cellMarked(this)" onclick="cellClicked(this)" data-i="${i}" data-j="${j}" class="cell-${cellClass}"></td>`;
			}
		}
		strHTML += "</tr>";
	}
	bodyElement.innerHTML = strHTML;
}