window.onbeforeunload = (event) => {
  const e = event || window.event;
  // Cancel the event
  e.preventDefault();
  if (e) {
    e.returnValue = ""; // Legacy method for cross browser support
  }
  return ""; // Legacy method for cross browser support
};

const startGame = () => {
  const welcomeSectionElement = document.getElementById("welcomeSection");
  document.body.removeChild(welcomeSectionElement);

  const gameSectionElement = document.getElementById("gameSection");
  gameSectionElement.style.display = "flex";
};

/**
 *
 * Game logic
 *
 */

const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return {
      message: "It's a draw, nobody wins!",
      result: null,
    };
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return {
          message: "You Win! Rock beats Scissors",
          result: true,
        };
      } else {
        return {
          message: "You Lose! Paper beats Rock",
          result: false,
        };
      }

    case "paper":
      if (computerSelection === "rock") {
        return {
          message: "You Win! Paper beats Rock",
          result: true,
        };
      } else {
        return {
          message: "You Lose! Scissors beat Paper",
          result: false,
        };
      }

    case "scissors":
      if (computerSelection === "paper") {
        return {
          message: "You Win! Scissors beat Paper",
          result: true,
        };
      } else {
        return {
          message: "You Lose! Rock beats Scissors",
          result: false,
        };
      }
  }
};

const displayChoices = (playerSelection, computerSelection) => {
  const userChoiceDisplayElement = document.getElementById("userChoice");
  userChoiceDisplayElement.style.visibility = "visible";
  userChoiceDisplayElement.innerHTML = playerSelection;

  const computerChoiceDisplayElement =
    document.getElementById("computerChoice");
  computerChoiceDisplayElement.style.visibility = "visible";
  computerChoiceDisplayElement.innerHTML = computerSelection;
};

const displayResult = (result, message) => {
  const resultDisplayElement = document.getElementById("result");
  resultDisplayElement.style.visibility = "visible";
  resultDisplayElement.innerHTML = message;

  let color;
  if (result === true) {
    color = "#2ecc71";
  } else if (result === false) {
    color = "#d91e18";
  } else {
    color = "#f39c12";
  }

  resultDisplayElement.style.color = color;
};

const displayRoundNumber = (round) => {
  const displayRoundElement = document.getElementById("roundNumber");
  displayRoundElement.innerHTML = round;
};

const displayCurrentResults = (userPoints, computerPoints, draws) => {
  const userPointsTableCell = document.getElementById("userPoints");
  userPointsTableCell.innerHTML = userPoints;

  const computerPointsTableCell = document.getElementById("computerPoints");
  computerPointsTableCell.innerHTML = computerPoints;

  const drawsTableCell = document.getElementById("draws");
  drawsTableCell.innerHTML = draws;
};

const displayOutcome = (image, heading, subtext, buttonText) => {
  const trophyImageELement = document.getElementById("trophyImage");
  trophyImageELement.src = image;

  const outcomeHeadingElement = document.getElementById("outcomeHeading");
  outcomeHeadingElement.innerHTML = heading;

  const outcomeSubtextElement = document.getElementById("outcomeSubtext");
  outcomeSubtextElement.innerHTML = subtext;

  const newGameButtonElement = document.getElementById("newGameButton");
  newGameButtonElement.innerHTML = buttonText;
};

let userPoints = 0;
let computerPoints = 0;
let draws = 0;

const startNewGame = () => {
  userPoints = 0;
  computerPoints = 0;
  draws = 0;

  // Hide outcome screen and show game
  const gameSection = document.getElementById("gameSection");
  gameSection.style.display = "flex";

  const outcomeSection = document.getElementById("outcomeSection");
  outcomeSection.style.display = "none";

  displayCurrentResults(userPoints, computerPoints, draws);
  displayChoices(null, null);
  displayResult(null, null);
  displayRoundNumber(userPoints + computerPoints + draws);
  displayCurrentResults(userPoints, computerPoints, draws);
};

const winnerTrophy = "./images/trophy.png";
const brokenTrophy = "./images/broken-trophy.png";

const game = (playerSelection) => {
  const computerSelection = computerPlay();

  displayChoices(playerSelection, computerSelection);

  const playedRound = playRound(playerSelection, computerSelection);
  displayResult(playedRound.result, playedRound.message);

  if (playedRound.result === true) {
    userPoints = userPoints + 1;
  } else if (playedRound.result === false) {
    computerPoints = computerPoints + 1;
  } else {
    draws = draws + 1;
  }

  displayRoundNumber(userPoints + computerPoints + draws);
  displayCurrentResults(userPoints, computerPoints, draws);

  if (userPoints === 5) {
    // Hide game and show outcome screen
    const gameSection = document.getElementById("gameSection");
    gameSection.style.display = "none";

    const outcomeSection = document.getElementById("outcomeSection");
    outcomeSection.style.display = "flex";

    displayOutcome(
      winnerTrophy,
      "Yaaaay!",
      "You outsmarted the computer! Congratulations!",
      "Do it again?"
    );
  } else if (computerPoints === 5) {
    // Hide game and show outcome screen
    const gameSection = document.getElementById("gameSection");
    gameSection.style.display = "none";

    const outcomeSection = document.getElementById("outcomeSection");
    outcomeSection.style.display = "flex";

    displayOutcome(
      brokenTrophy,
      "Oh nooo!",
      "Unfortunately computer got you this time!",
      "Try again?"
    );
  }
};
