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

const playRound = (playerSelection) => {
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    return console.log("It's a draw!");
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return true;
      } else {
        console.log("You Lose! Paper beats Rock");
        return false;
      }

    case "paper":
      if (computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return true;
      } else {
        console.log("You Lose! Scissors beat Paper");
        return false;
      }

    case "scissors":
      if (computerSelection === "paper") {
        console.log("You Win! Scissors beat Paper");
        return true;
      } else {
        console.log("You Lose! Rock beats Scissors");
        return false;
      }
  }
};
