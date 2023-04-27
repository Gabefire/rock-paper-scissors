// Rock Paper Scissors Game

function getComputerChoice () {
    // get Random number between 1 and 3
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomNumber(1,3);
    if (randomNumber === 1) {return "rock";}
    else if (randomNumber === 2) {return "paper";}
    else {return "scissors";}
}

function checkWinner() {
    if (playerScore===5) {
        const results = document.querySelector('.gameOver');
        results.textContent = "You won!";
        openModel()
    }
    else if (computerScore===5) {
        const results = document.querySelector('.gameOver');
        results.textContent = "Computer won!";
        openModel()
    }

}

function playRound (event) {
    if (playerScore===5 || computerScore===5) {
        return;
    }
    const playerChoice = event.currentTarget.id
    const computerChoice = getComputerChoice()
    const results = document.querySelector(".results")
    if (computerChoice === playerChoice) {
        results.textContent = `It was a tie! Computer picked ${computerChoice}`
    }
    else if (computerChoice === "rock" && playerChoice === "scissors" || 
             computerChoice === "scissors" && playerChoice === "paper" ||
             computerChoice === "paper" && playerChoice === "rock") {
            results.textContent = `You lost! Computer picked ${computerChoice}`
            computerScore++
            compScore.textContent = `${computerScore}`
    }
    else {
        results.textContent = `You won! Computer picked ${computerChoice}`
        playerScore++
        playScore.textContent = `${playerScore}`
    }
    checkWinner()
}
let computerScore = 0
let playerScore = 0
const btn = document.querySelectorAll('.choice')
btn.forEach((btn) => { 
    btn.addEventListener('click', playRound)
})

const playScore = document.querySelector('.playerScore')
playScore.textContent = `${playerScore}`

const compScore = document.querySelector('.computerScore')
compScore.textContent = `${computerScore}`

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
function openModel() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
