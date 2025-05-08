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

function playRound(getComputerChoice, getHumanChoice){
    let humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice){
        alert("Draw. Nobody beats each other.")
    } else if (humanChoice=='rock' && computerChoice=='scissors'){
        alert("You win! Rock beats scissors.");
        ++humanScore;
    } else if (humanChoice=='scissors' && computerChoice=='paper'){
        alert("You win! Scissors beats paper.");
        ++humanScore;
    } else if (humanChoice =='paper' && computerChoice=='rock'){
        alert("You win! Paper beats rock.");
        ++humanScore;
    } else if (humanChoice=='scissors' && computerChoice=='rock'){
        alert("You lose! Rock beats scissors.")
        ++computerScore;
    } else if (humanChoice=='rock' && computerChoice=='paper'){
        alert("You lose! Paper beats rock.")
        ++computerScore;
    }else if (humanChoice=='paper' && computerChoice=='scissors'){
        alert("You lose! Scissors beats paper.")
        ++computerScore;
    }
}

function playGame(){
    let count = 0;
    while(count < 5){
        playRound();
        ++count;
    }
    if (computerScore == humanScore){
        alert("Draw. Nobody wins the game.");
    } else if (computerScore < humanScore){
        alert("You win the game!");
    } else {
        alert("You lose the game!");
    }
}

playGame();