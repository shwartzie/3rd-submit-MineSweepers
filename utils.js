'use strict'


function timer() {
    let startTime = new Date();
    gameTimer = setInterval(() => {
        
        if (!globalGame.isOn) {
            clearInterval(gameTimer);
            gameTimer = undefined;
            return;
        }
        let currentTime = new Date();
        let diff = currentTime.getTime() - startTime.getTime();

        const minutes = Math.floor(diff / 60000);
        const a = diff - (minutes * 60000);
        const seconds = Math.floor(a / 1000);
        const milliseconds = a - (1000 * seconds);

        timerElement.innerText = `${minutes} : ${seconds} : ${milliseconds}`;
        globalGame.secsPassed = timerElement.innerText;
    }, 100);
}
function getClassName(location) {
    let cellClass = `${location.i}-${location.j}`;
    return cellClass;
}

//-------------------------------------------------------------------------------------------------------------------//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};