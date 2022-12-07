const startGame = () => {
  const welcomeSection = document.getElementsByClassName("welcome-section")[0];
  console.log(welcomeSection);
  welcomeSection.style.display = "none";
};

const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    alert("It's a draw, nobody wins!");
    return null;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors");
        return true;
      } else {
        alert("You Lose! Paper beats Rock");
        return false;
      }

    case "paper":
      if (computerSelection === "rock") {
        alert("You Win! Paper beats Rock");
        return true;
      } else {
        alert("You Lose! Scissors beat Paper");
        return false;
      }

    case "scissors":
      if (computerSelection === "paper") {
        alert("You Win! Scissors beat Paper");
        return true;
      } else {
        alert("You Lose! Rock beats Scissors");
        return false;
      }
  }
};

let userPoints = 0;
let computerPoints = 0;
let draws = 0;

const game = (playerSelection) => {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);

  if (result === true) {
    userPoints = userPoints + 1;
  } else if (result === false) {
    computerPoints = computerPoints + 1;
  } else {
    draws = draws + 1;
  }

  if (userPoints === 5) {
    userPoints = 0;
    computerPoints = 0;
    draws = 0;
    return console.log("You won");
  } else if (computerPoints === 5) {
    userPoints = 0;
    computerPoints = 0;
    draws = 0;
    return console.log("Sorry, Computer won!");
  }
};
