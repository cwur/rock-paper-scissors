// computerPlay returns "rock", "paper" and "scissors" at random
function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return plays[index];
}


// getResultPoint returns 0 when tie, 1 when player wins, -1 when player looses
function getResultPoint(playerSelection, computerSelection) {
  const isTie = playerSelection === computerSelection
  if (isTie) {
    console.log(getResultMessage("tie", playerSelection, computerSelection));
    return 0;
  }
  const rockBeatsScissors = playerSelection === "rock" & computerSelection === "scissors";
  if (rockBeatsScissors) {
    console.log(getResultMessage("win", playerSelection, computerSelection));
    return 1;
  }

  const scissorsBeatsPaper = playerSelection === "scissors" & computerSelection === "paper";
  if (scissorsBeatsPaper) {
    console.log(getResultMessage("win", playerSelection, computerSelection));
    return 1;
  }
  const paperBeatsRock = playerSelection === "paper" & computerSelection === "rock";
  if (paperBeatsRock) {
    console.log(getResultMessage("win", playerSelection, computerSelection));
    return 1
  }

  console.log(getResultMessage("loose", playerSelection, computerSelection));
  return -1;
}


function getResultMessage(result, playerSelection, computerSelection) {
  switch (result) {
    case "win":
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    case "loose":
      return `You loose! ${playerSelection} is beaten by ${computerSelection}.`;
    default:
      return `Tie! Player and computer choose ${playerSelection}.`;
  }
}

function game(rounds = 5, roundsPlayed = 0, resultPoints = 0) {
  if (roundsPlayed === rounds) {
    if (resultPoints === 0) console.log(`Overall you tied! You played ${rounds} rounds.`);
    if (resultPoints > 0) console.log(`Overall you won!`);
    if (resultPoints < 0) console.log(`Overall you lost!`);
    return;
  }

  const playerSelection = prompt("Choose between 'rock', 'paper' or 'scissors'");
  const isCancel = playerSelection === null;
  if (isCancel) return "You canceled the game.";
  const computerSelection = computerPlay();
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();

  const isValidPlayByPlayer = ["rock", "paper", "scissors"].includes(playerSelectionLower);
  const isValidPlayByComputer = ["rock", "paper", "scissors"].includes(computerSelectionLower)
  if (isValidPlayByPlayer === false) {
    console.log(`Invalid play by player: ${playerSelection}`);
    return game(rounds, roundsPlayed, resultPoints);
  } else if (isValidPlayByComputer === false) {
    console.log(`Invalid play by computer: ${computerSelection}`);
    return game(rounds, roundsPlayed, resultPoints);
  } {
    const resultPoint = getResultPoint(playerSelectionLower, computerSelection);
    return game(rounds, roundsPlayed + 1, resultPoints + resultPoint);
  }
}