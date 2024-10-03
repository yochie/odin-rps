playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let gamesPlayed = 0; gamesPlayed < rounds; gamesPlayed++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(`You : ${humanScore}\nComputer : ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose.");
    } else {
        console.log("Its a tie.");
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`Computer chose ${computerChoice}.`);
        let outcome = compareChoices(humanChoice, computerChoice);
        tallyOutcome(outcome);
        logOutcome(outcome);
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

    function tallyOutcome(outcome) {
        if (outcome === 1) {
            humanScore++;
        } else if (outcome === -1) {
            computerScore++;
        }
    }

    function logOutcome(outcome) {
        if (outcome === 1) {
            console.log("You win!");
        } else if (outcome === -1) {
            console.log("You lose :(");
        } else {
            console.log("It's a tie.")
        }
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

    function getHumanChoice() {
        let choice;
        let keepGoing = true;
        do {
            choice = prompt("Rock, Paper or Scissor?");
            choice = choice.toLowerCase();
            if (!isValidChoice(choice)) {
                alert("invalid choice");
            } else {
                keepGoing = false;
            }
        } while (keepGoing);
        return choice;
    }

    function isValidChoice(choice) {
        return (choice === "rock" || choice === "paper" || choice === "scissor");
    }
}
