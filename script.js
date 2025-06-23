let humanScore = 0;
let compScore = 0;

function getcompChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getcompChoice();
  const human = humanChoice.toLowerCase();
  const comp = computerChoice.toLowerCase();
  let resultText = "";

  if (human === comp) {
    resultText = "It's a tie!";
  } else if (
    (human === "rock" && comp === "paper") ||
    (human === "paper" && comp === "scissors") ||
    (human === "scissors" && comp === "rock")
  ) {
    compScore++;
    resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    resultText = `You win! ${humanChoice} beats ${computerChoice}`;
  }

  updateDisplay(resultText);
  checkWinner();
}

function updateDisplay(message) {
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  resultDiv.textContent = message;
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${compScore}`;
}

function checkWinner() {
  if (humanScore === 5 || compScore === 5) {
    const finalMessage =
      humanScore === 5 ? "🎉 You win the game!" : "💻 Computer wins the game!";
    document.getElementById("result").textContent = finalMessage;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
