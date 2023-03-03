//declare the rock paper scissors variables
var choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// function for computer choice
let getsComputerChoice = function () {
  let RandomChoice = Math.floor(Math.random() * 3);
  return choice[RandomChoice];
};

//Game logic function 
let PlayRound = function (playerChoice) {
  let ComputerChoice = getsComputerChoice();
  let message;

  //logic for the game rock beats scissors |scissors beats paper| paper beats rock
  if (playerChoice.toLowerCase() === ComputerChoice.toLowerCase()) {
    message = " stales " + playerChoice + " was played ";
  } else if (
    playerChoice.toLowerCase() === choice[0].toLowerCase() &&
    ComputerChoice.toLowerCase() === choice[1].toLowerCase()
  ) {
    computerScore += 1;
    message = "lost Round ! Paper beats Rock";
  } else if (
    playerChoice.toLowerCase() === choice[1].toLowerCase() &&
    ComputerChoice.toLowerCase() === choice[2].toLowerCase()
  ) {
    computerScore += 1;
    message = "lost round ! scissors beats paper";
  } else if (
    playerChoice.toLowerCase() === choice[2].toLowerCase() &&
    ComputerChoice.toLowerCase() === choice[0].toLowerCase()
  ) {
    computerScore += 1;
    message = "You Lose! rock beats scissors";
  }  else {
    playerScore += 1;
    message = "You Won round";
  }

  return message;
};

let buttons = document.querySelectorAll("#buttons button, #buttons img");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.value;

    // game logic 
     let overall = document.getElementById("declaration");
     let PScore = document.getElementById("player");
     let CpuScore = document.getElementById("Computer");
     let result = PlayRound(value);
     let message = document.getElementById("winner");

     CpuScore.textContent = computerScore;
     message.textContent = result;
     PScore.textContent = playerScore;

     let winner = function () {
       msg = "";

       if (playerScore == 5 && playerScore > computerScore) {
         msg =
           "you won game computer won  " +
           computerScore +
           " rounds and you won " +
           playerScore +
           " rounds";
       } else if (computerScore >= 5 && computerScore > playerScore) {
         msg =
           "you lose computer won " +
           computerScore +
           " rounds and you won " +
           playerScore +
           " rounds";
       }
       return msg;
     };

     overall.textContent = winner();

     console.log(result);
  });
});

