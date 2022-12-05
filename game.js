const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const userPlay = (computerSelection, message) => {
  let userInput = prompt(message);

  if (userInput.toLowerCase() === computerSelection) {
    // Make computer select again because if we don't, user knows what computer selected and can play according to that.
    const newComputerSelection = computerPlay();
    return userPlay(newComputerSelection, "It's a tie! Please chose again.");
  } else if (!options.includes(userInput.toLowerCase())) {
    return userPlay(computerSelection, "Invalid value! Please chose again.");
  }

  return userInput;
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection.toLowerCase()) {
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

const game = () => {
  let totalPlayerWins = 0;

  for (let index = 0; index < 5; index++) {
    console.log(`Round ${index + 1}`);

    const computerSelection = computerPlay();
    const playerSelection = userPlay(
      computerSelection,
      "Paper, rock or scissors?"
    );

    const result = playRound(playerSelection, computerSelection);

    if (result === true) {
      totalPlayerWins = totalPlayerWins + 1;
    }
  }

  if (totalPlayerWins > 2) {
    console.log(`Congratulations! You Won with ${totalPlayerWins} wins.`);
  } else {
    console.log(
      `Too bad you lost this time! Computer got you! You only won ${totalPlayerWins} times.`
    );
  }
};

game();
