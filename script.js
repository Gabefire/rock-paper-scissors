// Rock Paper Scissors Game

function getComputerChoice () {
    // get Random number between 1 and 3
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomNumber(1,3);
    if (randomNumber === 1) {return "rock";}
    else if (randomNumber === 2) {return "paper";}
    else {return "scissors";}
}

function getPlayerChoice () {
    while (true) {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === 'rock' || playerChoice === "paper" ||
        playerChoice === 'scissors') {
            return playerChoice}
    alert(`${playerChoice} is not an option! Please try again!`);
    }
}

function result (computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log(`It was a tie! Computer picked ${computerChoice}`)
    }
    else if (computerChoice === "rock" && playerChoice === "scissors" || 
             computerChoice === "scissors" && playerChoice === "paper" ||
             computerChoice === "paper" && playerChoice === "rock") {
        console.log(`You lost! Computer picked ${computerChoice}`);
        return "computer"
    }
    else {
        console.log(`You won! Computer picked ${computerChoice}`);
        return "player"
    }
}

function game () {
    let count = 1
    let playerScore = 0
    let computerScore = 0
    while (count <= 5) {
        const computer = getComputerChoice()
        const player = getPlayerChoice()
        const score = result (computer, player)
        if (score === "player") {
            playerScore++
        }
        else if (score === "computer") {
            computerScore++
        }
        count++
    }
    if (computerScore > playerScore) {console.log("Computer won best of 5!")}
    else if (computerScore < playerScore) {console.log("You won best of 5!")}
    else {"Best of 5 was a tie!"}
}

game()