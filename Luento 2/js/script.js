const mysteryNumber = Math.ceil(Math.random() * 100);
let playerGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

const input = document.querySelector("#nbr_input");
const output = document.querySelector("#output");
const button = document.querySelector("#guess_btn");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

window.addEventListener("keydown", keydownHandler, false)

function keydownHandler(e) {
    if (e.keyCode === 13) {
        validateInput();
    }
}

function clickHandler() {
    validateInput();
}

function validateInput() {
    playerGuess = parseInt(input.value);
    input.select();
    if (isNaN(playerGuess)) {
        output.style.color = "red";
        output.innerHTML = "Syötä vain numeroita";
    }
    else if (playerGuess < 1 || playerGuess > 100) {
        output.style.color = "red";
        output.innerHTML = "Anna arvo väliltä 1 - 100!";
    }
    else {
        output.style.color = "black";
        playGame();
    }
}

function playGame() {
    guessesRemaining--;
    guessesMade++;
    //gameState = "Arvaus nro: "
    //   +guessMade +", arvauksia jäljellä " + guessesRemaining;
    gameState = `Arvaus nro: ${guessesMade}, arvauksia jäljellä: ${guessesRemaining}`

    if (playerGuess > mysteryNumber) {
        output.innerHTML = "Arvaus oli liian suuri. " + gameState;
        if (guessesRemaining < 1) {
            endGame();
        }
    }
    else if (playerGuess < mysteryNumber) {
        output.innerHTML = "Arvaus oli liian pieni. " + gameState;
        if (guessesRemaining < 1) {
            endGame();
        }
    }
    else {
        gameWon = true;
        endGame();
    }
}

function endGame() {
    if (gameWon) {
        output.innerHTML = "Arvasit oikein!<br>";
        + "Sinulta kului " + guessesMade + "arvausta.";
    }
    else {
        output.innerHTML = " Ei enää arvauksia jäljellä. <br>"
            + "Oikea vastaus oli: " + mysteryNumber;
    }
    input.disabled = true;
    input.value = "";
    button.removeEventListener("click", clickHandler, false);
    button.disabled = true;
    window.removeEventListener("keydown", keydownHandler, false);

}

