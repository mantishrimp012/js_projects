function getComputerChoice(){
    let computerChoice = Math.random();
    if (computerChoice>0 && computerChoice<0.33){
        computerChoice = "rock";
    } else if (computerChoice>0.33 && computerChoice<0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: Rock/Paper/Scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
