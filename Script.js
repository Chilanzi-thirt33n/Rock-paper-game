//declare the rock paper scissors variables 
var choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// function for computer choice
let getsComputerChoice = function() {
    let RandomChoice = Math.floor(Math.random() * 3);
    return choice[RandomChoice];
}

// first rounnd 
let PlayRound = function(playerChoice, ComputerChoice) {

        playerChoice = prompt("pick rock paper or scissors");
        ComputerChoice = getsComputerChoice();
        let message;

        //logic for the game rock beats scissors |scissors beats paper| paper beats rock
        if (playerChoice.toLowerCase() === ComputerChoice.toLowerCase()) {
            message = "its a tie you both picked " + playerChoice;
        } else if (playerChoice.toLowerCase() === choice[0].toLowerCase() && ComputerChoice.toLowerCase() === choice[1].toLowerCase()) {
            computerScore += 1;
            message = "You Lose! Paper beats Rock";
        } else if (playerChoice.toLowerCase() === choice[1].toLowerCase() && ComputerChoice.toLowerCase() === choice[2].toLowerCase()) {
            computerScore += 1;
            message = "You Lose! scissors beats paper";
        } else if (playerChoice.toLowerCase() === choice[2].toLowerCase() && ComputerChoice.toLowerCase() === choice[0].toLowerCase()) {
            computerScore += 1;
            message = "You Lose! rock beats scissors";
        } else if (playerChoice.toLowerCase() !== choice[0].toLowerCase() || choice[1].toLowerCase() || choice[2].toLowerCase()) {
            message = "wrong entery its rock paper scissors not " + playerChoice;
        } else {
            playerScore += 1;
            message = "congratulations you win";
        }

        return message;
    }
    //playing 5 rounds 
let game = function() {
    for (let i = 0; i <= 4; i++) {
        console.log(PlayRound());
    }
}

let winner = function() {
    game();
    let msg;
    if (playerScore > computerScore) {
        msg = "you won the five round game computer won  " + computerScore + " rounds and you won " + playerScore + " rounds";
    } else { msg = "you lose mate computer won " + computerScore + " rounds and you won " + playerScore + " rounds"; }
    return msg;
}

console.log(winner());