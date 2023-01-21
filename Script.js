//declare the rock paper scissors variables 
var choice = ["Rock", "Paper", "Scissors"];

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
            message = "You Lose! Paper beats Rock";
        } else if (playerChoice.toLowerCase() === choice[1].toLowerCase() && ComputerChoice.toLowerCase() === choice[2].toLowerCase()) {
            message = "You Lose! scissors beats paper";
        } else if (playerChoice.toLowerCase() === choice[2].toLowerCase() && ComputerChoice.toLowerCase() === choice[0].toLowerCase()) {
            message = "You Lose! rock beats scissors";
        } else {
            message = "congratulations you win,you beat ai by playing " + playerChoice;
        }

        return message;
    }
    //playing 5 rounds 
let game = function() {
    for (let i = 0; i <= 5; i++) {
        return PlayRound();
    }
}

console.log(game());