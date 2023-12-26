// Computer's choices
let choice1 = 'rock';
let choice2 = 'paper';
let choice3 = 'scissors';

// Player's choice
let playerChoice;

// Elements to show the player's choices
let player = document.createElement('p');
let divEl = document.querySelector('.container');

// Elements to show computer's choices
let computer = document.createElement('p');

// Elemnts to show the result
let result = document.createElement('div');

// Create a variable to store player's score;
let playerScoreEl = document.getElementById("player-score");
let computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;


function selectRock(){
    playerChoice = 'rock';
    compete(playerChoice, getComputerChoice());
    player.innerHTML = `You have selected ${playerChoice}`;
    divEl.appendChild(player);
}

function selectPaper(){
    playerChoice = 'paper';
    compete(playerChoice, getComputerChoice());
    player.innerHTML = `You have selected ${playerChoice}`;
    divEl.appendChild(player);
}

function selectScissors(){
    playerChoice = 'scissors';
    compete(playerChoice, getComputerChoice());
    player.innerHTML = `You have selected ${playerChoice}`;
    divEl.appendChild(player);
}



function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    if (choiceNumber == 1) {
        computer.textContent = `Computer has selected ${choice1}`;
        divEl.appendChild(computer);
        return choice1;
    } else if (choiceNumber == 2) {
        computer.textContent = `Computer has selected ${choice2}`;
        divEl.appendChild(computer);
        return choice2;
    } else {
        computer.textContent = `Computer has selected ${choice3}`;
        divEl.appendChild(computer);
        return choice3;
    } 
}

function compete(playerChoice, computerSelection) {
    if(playerChoice == 'rock' && computerSelection == 'paper') {
        result.textContent = "You lose! Paper beats Rock. Reload the page to plage again.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'rock' && computerSelection == 'scissors'){
        result.textContent = "You win! Rock beats Scissors. Reload the page to play again.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == 'paper' && computerSelection == 'rock') {
        result.textContent = "You win! Paper beats Rock. Reload the page to play again.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        result.textContent = "You lose! Scissors beat Paper. Reload the page to play again.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        result.textContent = "You lose! Rock beats Scissors. Reload the page to play again.";
        computerScore++;
        computerScoreEl.textContent = `Computer's score: ${computerScore}`;
    } else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        result.textContent = "You win! Scissors beat Paper. Reload the page to play again.";
        playerScore++;
        playerScoreEl.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice == computerSelection) {
        result.textContent = "It's a tie!";
    } else {
        result.textContent = "Invalid input. Please ensure you have entered 'Rock', 'Paper', or 'Scissors'. Reload the page to play again.";
    }

    divEl.appendChild(result);
}
