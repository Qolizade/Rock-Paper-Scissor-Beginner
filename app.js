const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a drow!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost";
  }
  if (result === "its a drow!") {
    resultDisplay.style.color = "#8208e6";
  }
  if (result === "You win") {
    resultDisplay.style.color = "green";
  }
  if (result === "You lost") {
    resultDisplay.style.color = "rgb(238, 92, 92)";
  }
  resultDisplay.innerHTML = result;
}
