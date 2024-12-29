let humanScore = 0;
let computerScore = 0;

console.log("Hello, World!");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("please enter your choice: ");
    while (parseInt(choice)){
        console.log("please enter a string either : rock, paper or scissors")
        choice = prompt("please enter your choice: ");
    }
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!";
    }
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
}

function playGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    if (humanScore > computerScore){
        console.log("Human wins!");
    } else if (humanScore < computerScore){
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}


playGame();
//console.log(getComputerChoice());
