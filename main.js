let randomNum = 0;
let inputButton = document.getElementById("input-button");
let inputNumber = document.getElementById("input-number");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let inputChance = 5;
let chanceLeft = document.getElementById("chance-left");
let gameOver = false;
let inputHistory = [];

inputButton.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);
chanceLeft.textContent = `chance: ${inputChance} times left`;

inputNumber.addEventListener("focus", function () {
    inputNumber.value="";
})

function pickRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

pickRandomNum();

function playGame() {
    let userNumber = inputNumber.value;

    if (userNumber < 1 || userNumber > 100) {
        resultArea.textContent = "Enter a number between 1 and 100!"
        return; // 아무것도 반환하지 않고 그냥 함수 종료
    }

    if (inputHistory.includes(userNumber)) {
        resultArea.textContent = "The number you have already entered. Please try again."
        return;
    }

    --inputChance;
    
    chanceLeft.textContent = `chance: ${inputChance} times left`;
    if (userNumber < randomNum) {
        resultArea.textContent = "UP!!!"
    } else if (userNumber > randomNum) {
        resultArea.textContent = "DOWN!!!"
    } else {
        resultArea.textContent = "BINGO!!!"
        gameOver = true;
        }
    
    inputHistory.push(userNumber);
    console.log(inputHistory)

    if (inputChance === 0) {
        gameOver = true;
    }

    if (gameOver == true) {
        inputButton.disabled = true;
    }
}

function resetGame() {
    inputChance = 5;
    chanceLeft.textContent = `chance: ${inputChance} times left`;
    inputNumber.value = "";
    resultArea.textContent = "Enter a number between 1 and 100."
    inputButton.disabled = false;
    pickRandomNum();
}