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
//Make a game function that passes in computer's and player's choose
    //compares the values of functions with conditional statements
    //returns either player lost or won
function game (computerChoose, playerChoose) {
    if (computerChoose === playerChoose) {
        console.log("It was a tie!")
    }
    else if (computerChoose === "rock" && playerChoose === "scissors" || 
             computerChoose === "scissors" && playerChoose === "paper" ||
             computerChoose === "paper" && playerChoose === "rock") {
        console.log(`You lost! Computer picked ${computerChoose}`)
    }
    else {console.log(`You won! Computer picked ${computerChoose}`)}
}
let player = playerChoose()
let computer = computerChoose()
game (computer, player)