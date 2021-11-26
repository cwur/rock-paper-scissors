// computerPlay returns "rock", "paper" and "scissors" at random
function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return plays[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const plays = ["rock", "paper", "scissors"];
  const isInvalidByPlayer = !plays.includes(playerSelection)
  if (isInvalidByPlayer) {
    return `Invalid play by player: ${playerSelection}`
  }
  const isInvalidByComputer = !plays.includes(computerSelection)
  if (isInvalidByComputer) {
    return `Invalid play by computer: ${computerSelection}`
  }

  const isTie = playerSelection === computerSelection
  if (isTie) {
    return `Tie! Player and computer choose ${playerSelection}.`;
  }

  switch (playerSelection) {
    case "rock":
      return computerSelection === "paper" ? `You loose!` : "You win!";
    case "paper":
      return computerSelection === "scissors" ? "You loose!" : "You win!";
    case "scissors":
      return computerSelection === "rock" ? "You loose!" : "You win!";
  }
}

function game() {
  const playerSelection = prompt("Choose between 'rock', 'paper' or 'scissors'");
  const computerSelection = computerPlay();

  return playRound(playerSelection, computerSelection);
}

console.log("tie", playRound("rock", "rock"));
console.log("win", playRound("rock", "paper"));
console.log("invalid", playRound("rockz", "paper"));
console.log("invalid", playRound("rock", "pap3r"));
console.log("loose", playRound("scissors", "rock"))
