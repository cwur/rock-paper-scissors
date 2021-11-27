const scorePlayerNode = document.querySelector('[data-score="player"');
const scoreComputerNode = document.querySelector('[data-score="computer"');
const playsListNode = document.querySelector("ol");
const overlayNode = document.querySelector(".overlay")
resetGame();

overlayNode.addEventListener('click', resetGame);

const playsNode = document.querySelectorAll('[data-play]');
playsNode.forEach(playNode => playNode.addEventListener('click', handleClick));

function handleClick(event) {
  const playerSelection = event.srcElement.dataset.play;
  playRound(playerSelection);
}

function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return plays[index];
}

function determineWinner(playerSelection, computerSelection) {
  const isDraw = playerSelection === computerSelection
  if (isDraw) return "draw";

  const rockBeatsScissors = playerSelection === "rock" & computerSelection === "scissors";
  if (rockBeatsScissors) return "player";

  const scissorsBeatsPaper = playerSelection === "scissors" & computerSelection === "paper";
  if (scissorsBeatsPaper) return "player";

  const paperBeatsRock = playerSelection === "paper" & computerSelection === "rock";
  if (paperBeatsRock) return "player";

  return "computer";
}

function playRound(playerSelection) {
  computerSelection = computerPlay();
  winner = determineWinner(playerSelection, computerSelection)

  scorePlayer = Number(scorePlayerNode.textContent);
  scoreComputer = Number(scoreComputerNode.textContent);

  if (winner === "player") scorePlayer++;
  if (winner === "computer") scoreComputer++;

  scorePlayerNode.textContent = scorePlayer;
  scoreComputerNode.textContent = scoreComputer;

  const playNode = document.createElement("li");
  playNode.textContent = `🧔 ${playerSelection} vs. ${computerSelection} 💻 (🧔 ${scorePlayer} | 💻 ${scoreComputer})`;
  playsListNode.prepend(playNode);

  if (scorePlayer >= 5) {
    overlayNode.classList.remove('display-none');
    overlayNode.textContent = `You won! 🥳 ${scorePlayer} | 💻 ${scoreComputer}`;
  }
  if (scoreComputer >= 5) {
    overlayNode.classList.remove('display-none');
    overlayNode.textContent = `You lost! 😿 ${scorePlayer} | 💻 ${scoreComputer}`;
  }
}

function resetGame() {
  scorePlayerNode.textContent = "0";
  scoreComputerNode.textContent = "0";
  playsListNode.textContent = "";
  overlayNode.classList.add('display-none');
}