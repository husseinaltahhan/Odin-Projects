let humanScore = 0;
let computerScore = 0;

let compchoice = getComputerChoice();

const box = document.querySelector(".box");

const title = document.createElement("h1");
title.innerText = "Make a choice!";
title.style.margin = "auto";

box.prepend(title);

const compElement = document.createElement("h3");
box.append(compElement);

const message = document.createElement("h3");
box.append(message);

const humanScoreElement = document.querySelector(".playerscore");
const compScoreElement = document.querySelector(".compscore");


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
    if (humanChoice.toLowerCase() === computerChoice){
        return "It's a tie!";
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        compchoice = getComputerChoice();
        compElement.innerText = "Computer picked " + compchoice;
        winner = playRound(button.innerText, compchoice);
        humanScoreElement.innerText = "Player: " + humanScore;
        compScoreElement.innerText = "Computer: " + computerScore;
        console.log(winner);
        message.innerText = winner;
    });
});


/*
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
}*/

