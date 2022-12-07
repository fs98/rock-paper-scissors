const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const userPlay = (computerSelection, message) => {
  let userInput = prompt(message);

  if (userInput === null) {
    if (confirm("Are you sure you want to stop playing?")) {
      return userInput;
    } else {
      userInput = prompt(message);
    }
  }

  if (userInput.trim().toLowerCase() === computerSelection) {
    // Make computer select again because if we don't, user knows what computer selected and can play according to that.
    const newComputerSelection = computerPlay();
    return userPlay(newComputerSelection, "It's a tie! Please chose again.");
  } else if (!options.includes(userInput.trim().toLowerCase())) {
    return userPlay(computerSelection, "Invalid value! Please chose again.");
  }

  return userInput;
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection.trim().toLowerCase()) {
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

  alert(`Welcome to Rock, Paper, Scissors game. Start?`);

  for (let index = 0; index < 5; index++) {
    console.log(`%cRound ${index + 1}`, "color: #2d55ff");

    const computerSelection = computerPlay();
    const playerSelection = userPlay(
      computerSelection,
      "Paper, rock or scissors?"
    );

    if (playerSelection === null) {
      return console.log(
        `%cWe're sorry you gave up on round ${
          index + 1
        }. Refresh the page to play again.`,
        "color: #d91e18"
      );
    }

    const result = playRound(playerSelection, computerSelection);

    if (result === true) {
      totalPlayerWins = totalPlayerWins + 1;
    }
  }

  if (totalPlayerWins > 2) {
    console.log(
      `%cCongratulations! You Won with ${totalPlayerWins} wins.`,
      "color: #26c281"
    );
  } else {
    console.log(
      `%cToo bad you lost this time! Computer got you! You only won ${totalPlayerWins} times.`,
      "color: #d91e18"
    );
  }

  if (confirm("New Game?")) {
    window.location.reload();
  }
};

game();