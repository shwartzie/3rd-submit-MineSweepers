'use strict'
function checkIfWon() {
    let count = 0;
    for (let i = 0; i < globalBoard.length; i++) {
            for (let j = 0; j < globalBoard.length; j++) {
                if(globalBoard[i][j].isShown && !globalBoard[i][j].isMine) {
                    count++;
                }
        }
    }
    const isWon = count == (globalBoard.length ** 2 - globalLevel.mines);
    if(isWon) {
        saveBestScore();
    }
    return isWon;
}
function gameOver() {
    clearInterval(gameTimer);
    for (let i = 0; i < minesLocations.length; i++) {
        let mineElement = document.querySelector(`.cell-${minesLocations[i].i}-${[minesLocations[i].j]}`);
        mineElement.innerText = MINE;
        mineElement.classList.add('shown');
        let currentMine = globalBoard[minesLocations[i].i][minesLocations[i].j];
        currentMine.isShown = true;
    }
    globalGame.isOn = false;
    restartButton.innerText = '😪';
    gameStatusElement.innerText = 'You Lost!';
    gameStatusElement.style.display = 'inline-block';
}
function renderLives() {
    livesCounter--;
    lives.innerText = livesCounter;
}