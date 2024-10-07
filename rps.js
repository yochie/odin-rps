const rounds = 5;
let humanScore = 0;
let computerScore = 0;

let buttonList = document.querySelector(".buttons");
let roundDescriptionDisplay = document.querySelector(".round-description");
let roundOutcomeDisplay = document.querySelector(".round-outcome");
let humanScoreDisplay = document.querySelector(".human-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let gameoverDisplay = document.querySelector(".gameover");

buttonList.addEventListener("click", handleHumanChoice)

function handleHumanChoice(event){
    playRound(event.target.id);
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let outcome = compareChoices(humanChoice, computerChoice);
    displayResult(outcome, humanChoice, computerChoice);
    tallyScores(outcome);
    displayScores();
    if (humanScore >= 5 || computerScore >= 5) {
        gameover();
    }
}

function gameover() {
    if (humanScore > computerScore) {
        gameoverDisplay.textContent = "Gameover. You win!";
    } else if (computerScore > humanScore) {
        gameoverDisplay.textContent = "Gameover. You lose.";
    }
    buttonList.removeEventListener("click", handleHumanChoice);
}

//returns 1 for human win, -1 for computer win and 0 for tie
function compareChoices(humanChoice, computerChoice) {
    let outcome;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                outcome = 0;
            } else if (computerChoice === "paper") {
                outcome = -1;
            } else {
                outcome = 1;
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                outcome = 1;
            } else if (computerChoice === "paper") {
                outcome = 0;
            } else {
                outcome = -1;
            }
            break;

        case "scissor":
            if (computerChoice === "rock") {
                outcome = -1;
            } else if (computerChoice === "paper") {
                outcome = 1;
            } else {
                outcome = 0;
            }
            break;
    }
    return outcome;
}

function tallyScores(outcome) {
    if (outcome === 1) {
        humanScore++;
    } else if (outcome === -1) {
        computerScore++;
    }
}

function displayResult(outcome, humanChoice, computerChoice) {
    let descriptionString;
    let outcomeString;
    if (outcome === 1) {
        descriptionString = `Your ${humanChoice} beats computers ${computerChoice}.`;
        outcomeString = "You win!";
    } else if (outcome === -1) {
        descriptionString = `Your ${humanChoice} loses to computers ${computerChoice}.`;
        outcomeString = "You lose :("
    } else {
        descriptionString = `You both chose ${humanChoice}.`;
        outcomeString = "It's a tie"
    }
    roundDescriptionDisplay.textContent = descriptionString;
    roundOutcomeDisplay.textContent = outcomeString;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function isValidChoice(choice) {
    return (choice === "rock" || choice === "paper" || choice === "scissor");
}

function displayScores() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}