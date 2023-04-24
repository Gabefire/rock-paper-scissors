// Rock Paper Scissors Game
// Start by making a function to get computer choose
    //Computer choose should be random so need a random function
    //random functions should pick a number between 1 and 3 
    //each number should represent either rock paper scissor
    //return computer's choose
function computerChoose () {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    // (1,3) => Math.floor(rounds down)(Math.random()(number between 0 and 1) * (3)) + 1
    const randomNumber = getRandomNumber(1,3);
    if (randomNumber === 1) {return "rock";}
    else if (randomNumber === 2) {return "paper";}
    else {return "scissors";}
    }

// Make a function that collects the players choose
    //preform a method on string that ignores case
    //return player's choose
function playerChoose () {
    let playerChoose = prompt("Rock, Paper or Scissors?")
    playerChoose = playerChoose.toLowerCase()
    return playerChoose
}
//Make a result function that passes in computer's and player's choose
    //compares the values of functions with conditional statements
    //returns either player lost or won
function result (computerChoose, playerChoose) {
    if (computerChoose === playerChoose) {
        console.log(`It was a tie! Computer picked ${computerChoose}`)
    }
    else if (computerChoose === "rock" && playerChoose === "scissors" || 
             computerChoose === "scissors" && playerChoose === "paper" ||
             computerChoose === "paper" && playerChoose === "rock") {
        console.log(`You lost! Computer picked ${computerChoose}`);
        return "computer"
    }
    else {
        console.log(`You won! Computer picked ${computerChoose}`);
        return "player"
    }
}
// looped through game function 5 times and get overall winner best out of 5
function game () {
    let count = 1
    let playerScore = 0
    let computerScore = 0
    while (count <= 5) {
        let computer = computerChoose()
        let player = playerChoose()
        let score = result (computer, player)
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