// Computer's choices
let choice1 = 'rock';
let choice2 = 'paper';
let choice3 = 'scissors';

// Player's choice
let playerChoice;

// Elements to show the player's choices
let playerEl = document.getElementById('player-choice');

// Elements to show computer's choices
let computerEl = document.getElementById('computer-choice');

// Elemnts to show the result
let result = document.getElementById('result');

// Create a variable to store player's score;
let playerScoreEl = document.getElementById("player-score");
let computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;


function selectRock(){
    playerChoice = 'rock';
    compete(playerChoice, getComputerChoice());
    playerEl.textContent = `You have selected ${playerChoice}`;
}

function selectPaper(){
    playerChoice = 'paper';
    compete(playerChoice, getComputerChoice());
    playerEl.textContent = `You have selected ${playerChoice}`;
}

function selectScissors(){
    playerChoice = 'scissors';
    compete(playerChoice, getComputerChoice());
    playerEl.textContent = `You have selected ${playerChoice}`;
}



function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    if (choiceNumber == 1) {
        computerEl.textContent = `Computer has selected ${choice1}`;
        return choice1;
    } else if (choiceNumber == 2) {
        computerEl.textContent = `Computer has selected ${choice2}`;
        return choice2;
    } else {
        computerEl.textContent = `Computer has selected ${choice3}`;
        return choice3;
    } 
}

function compete(playerChoice, computerSelection) {
    if(playerChoice == 'rock' && computerSelection == 'paper') {
        result.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'rock' && computerSelection == 'scissors'){
        result.textContent = "You win! Rock beats Scissors.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == 'paper' && computerSelection == 'rock') {
        result.textContent = "You win! Paper beats Rock.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        result.textContent = "You lose! Scissors beat Paper.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        result.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        result.textContent = "You win! Scissors beat Paper.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == computerSelection) {
        result.textContent = "It's a tie!";
    } else {
        result.textContent = "Invalid input. Please ensure you have entered 'Rock', 'Paper', or 'Scissors'.";
    }

}