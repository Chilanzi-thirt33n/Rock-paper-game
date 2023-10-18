// Declare the rock paper scissors variables
const choice = ["Rock", "Paper", "Scissors"];
const winQuotes = [
  "Victory is yours! You've proven your chill factor. Toxicity level: Zero!",
  "You've got the serenity of a Zen master. Toxic Tony bows to your calmness.",
  "You're as cool as a cucumber! Toxicity takes a backseat when you play.",
];
const loseQuotes = [
  "No worries, even the coolest can have fiery moments. Toxicity level: Rising!",
  "A slight hiccup on the road to Zen. Toxic Tony senses a bit of heat",
  "Toxicity levels are stirring, but you can bounce back! Keep it chill.",
];
const drawQuotes = [
  "It's a tie! You're balanced right in the middle of calm and fire. Toxicity level: Neutral.",
  "No clear winner this time. Your inner peace remains intact.",
  "Stalemate! You're walking the fine line between serenity and intensity. Keep the balance!",
];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameIsOver = false; // Flag to track if the game is over

// Function for computer choice
const getComputerChoice = function () {
  const randomChoice = Math.floor(Math.random() * 3);
  return [choice[randomChoice], randomChoice];
};

// Function to end the game
const endGame = function () {
  gameIsOver = true;

  const overall = document.getElementById("declaration");
  const winner = function () {
    let msg = "";

    if (playerScore > computerScore) {
      msg = "Overall Winner: You!";
    } else if (playerScore < computerScore) {
      msg = "Overall Winner: CPU!";
    } else {
      msg = "It's a draw in the overall game!";
    }
    return msg;
  };

  overall.textContent = winner();
};

// Function to handle a user's button click
const handleClick = function (value) {
  if (gameIsOver) {
    return; // Exit the function if the game is already over
  }

  const computerChoice = getComputerChoice();
  let message;

  // Logic for the game rock beats scissors | scissors beats paper | paper beats rock
  if (value.toLowerCase() === computerChoice[0].toLowerCase()) {
    message = drawQuotes[computerChoice[1]];
  } else if (
    value.toLowerCase() === choice[0].toLowerCase() &&
    computerChoice[0].toLowerCase() === choice[1].toLowerCase()
  ) {
    computerScore += 1;
    message = loseQuotes[computerChoice[1]];
  } else if (
    value.toLowerCase() === choice[1].toLowerCase() &&
    computerChoice[0].toLowerCase() === choice[2].toLowerCase()
  ) {
    computerScore += 1;
    message = loseQuotes[computerChoice[1]];
  } else if (
    value.toLowerCase() === choice[2].toLowerCase() &&
    computerChoice[0].toLowerCase() === choice[0].toLowerCase()
  ) {
    computerScore += 1;
    message = loseQuotes[computerChoice[1]];
  } else {
    playerScore += 1;
    message = winQuotes[computerChoice[1]];
  }

  roundsPlayed++;

  // Update the UI
  const PScore = document.getElementById("player");
  const CpuScore = document.getElementById("Computer");
  const messageDisplay = document.getElementById("winner");

  CpuScore.textContent = computerScore;
  messageDisplay.textContent = message;
  PScore.textContent = playerScore;

  if (roundsPlayed >= 5) {
    endGame();
  }
};

// The game
const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    handleClick(value); // Handle the user's button click
  });
});

