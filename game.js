// computerPlay returns "rock", "paper" and "scissors" at random
function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return plays[index];
}

// playRound returns who has won the round.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const isValidPlayByPlayer = ["rock", "paper", "scissors"].includes(playerSelection)
  if (isValidPlayByPlayer === false) return `Invalid play by player: ${playerSelection}`;

  const isValidPlayByComputer = ["rock", "paper", "scissors"].includes(computerSelection)
  if (isValidPlayByComputer === false) return `Invalid play by computer: ${computerSelection}`;

  const isTie = playerSelection === computerSelection
  if (isTie) return `Tie! Player and computer choose ${playerSelection}.`;

  const rockBeatsScissors = playerSelection === "rock" & computerSelection === "scissors";
  if (rockBeatsScissors) return getResultMessage(true, "rock", "scissors");

  const scissorsBeatsPaper = playerSelection === "scissors" & computerSelection === "paper";
  if (scissorsBeatsPaper) return getResultMessage(true, "scissors", "paper");

  const paperBeatsRock = playerSelection === "paper" & computerSelection === "rock";
  if (paperBeatsRock) return getResultMessage(true, "paper", "rock");

  return getResultMessage(false, playerSelection, computerSelection);
}

function getResultMessage(doesPlayerWin, playerSelection, computerSelection) {
  if (doesPlayerWin) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You loose! ${playerSelection} is beaten by ${computerSelection}.`;
  }
}

function game() {
  const playerSelection = prompt("Choose between 'rock', 'paper' or 'scissors'");
  const computerSelection = computerPlay();

  return playRound(playerSelection, computerSelection);
}

console.log("tie", playRound("rock", "rock"));
console.log("loose", playRound("rock", "paper"));
console.log("invalid", playRound("rockz", "paper"));
console.log("invalid", playRound("rock", "pap3r"));
console.log("loose", playRound("scissors", "rock"))
console.log("win", playRound("rock", "scissors"))