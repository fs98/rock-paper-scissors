const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const userPlay = (computerSelection) => {
  let userInput = prompt(`Paper, rock or scissors?`);

  if (userInput.toLowerCase() === computerSelection) {
    const newComputerSelection = computerPlay();
    console.log("ncs", newComputerSelection);
    return userPlay(newComputerSelection);
  } else if (!userInput.trim() || !options.includes(userInput.toLowerCase())) {
    return userPlay(computerSelection);
  }

  return userInput;
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return true;
      } else if (computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return false;
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return true;
      } else if (computerSelection === "scissors") {
        console.log("You Lose! Scissors beat Paper");
        return false;
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return false;
      } else if (computerSelection === "paper") {
        console.log("You Win! Scissors beat Paper");
        return true;
      }
      break;
  }
};

const game = () => {
  let totalPlayerWins = 0;

  for (let index = 0; index < 5; index++) {
    const computerSelection = computerPlay();
    const playerSelection = userPlay(computerSelection);

    const result = playRound(playerSelection, computerSelection);

    console.log("result", result);

    if (result === true) {
      totalPlayerWins = totalPlayerWins + 1;
    }
  }

  if (totalPlayerWins > 2) {
    console.log(`Congratulations! You Won with ${totalPlayerWins} times.`);
  } else {
    console.log(
      `Too bad you lost this time! Computer got you! You only won ${totalPlayerWins} times.`
    );
  }
};

game();
