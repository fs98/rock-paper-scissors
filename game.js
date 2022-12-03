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
    let playerIsWinner = false;

    switch (playerSelection.toLowerCase()) {
      case "rock":
        if (computerSelection === "scissors") {
          playerIsWinner = true;
          alert("You Win! Rock beats Scissors");
        } else if (computerSelection === "paper") {
          playerIsWinner = false;
          alert("You Lose! Paper beats Rock");
        }
        break;

      case "paper":
        if (computerSelection === "rock") {
          playerIsWinner = true;
          alert("You Win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
          playerIsWinner = false;
          alert("You Lose! Scissors beat Paper");
        }
        break;

      case "scissors":
        if (computerSelection === "rock") {
          playerIsWinner = false;
          alert("You Lose! Rock beats Scissors");
        } else if (computerSelection === "paper") {
          playerIsWinner = true;
          alert("You Win! Scissors beat Paper");
        }
        break;
    }

    return playerIsWinner;
  }
};

const game = () => {
  let totalPlayerWins = 0;

  for (let index = 0; index < 5; index++) {
    const result = playRound(
      prompt(`Round ${index + 1}. Paper, rock or scissors?`),
      options.random()
    );

    if (result === true) {
      totalPlayerWins = totalPlayerWins + 1;
    }
  }

  if (totalPlayerWins > 2) {
    alert(`Congratulations! You Won with ${totalPlayerWins} wins.`);
  } else {
    alert(
      `Too bad you lost this time! Computer got you! You only won ${totalPlayerWins} times.`
    );
  }
};

game();
