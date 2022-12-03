const options = ["rock", "paper", "scissors"];

// Option One
const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  console.log(options[random]);
};

// Option two
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection) {
    playRound(
      prompt(
        "It's a tie! Please enter a new valid value. Paper, rock or scissors?"
      ),
      options.random()
    );
  } else if (
    !playerSelection ||
    !options.includes(playerSelection.toLowerCase())
  ) {
    playRound(
      prompt("Please enter a valid value. Paper, rock or scissors?"),
      computerSelection
    );
  } else {
    switch (playerSelection.toLowerCase()) {
      case "rock":
        if (computerSelection === "scissors") {
          console.log("You Win! Rock beats Scissors");
        } else if (computerSelection === "paper") {
          console.log("You Lose! Paper beats Rock");
        }
        break;

      case "paper":
        if (computerSelection === "rock") {
          console.log("You Win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
          console.log("You Lose! Scissors beat Paper");
        }
        break;

      case "scissors":
        if (computerSelection === "rock") {
          console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection === "paper") {
          console.log("You Win! Scissors beat Paper");
        }
        break;

      default:
        break;
    }
  }
};

playRound(prompt("Paper, rock or scissors?"), options.random());
