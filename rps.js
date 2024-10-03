console.log(getComputerChoice());
let humanChoice = getHumanChoice();
console.log(humanChoice);

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice;
    let keepGoing = true;
    do {
        choice = prompt("Rock, Paper or Scissor?");
        choice = choice.toLowerCase();
        if(!isValidChoice(choice)){
            alert("invalid choice");
        } else {
            keepGoing = false;
        }
    } while(keepGoing);
    return choice;
}

function isValidChoice(choice){
    return (choice === "rock" || choice === "paper" || choice === "scissor");
}