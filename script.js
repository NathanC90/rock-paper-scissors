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
    let computerChoice = document.createElement('div');
    switch (choiceNumber) {
        case 1:
            computerChoice.innerHTML =`Computer's choice is ${choice1}.`;
            result.appendChild(computerChoice);
            return choice1;
            break;
        
        case 2:
            computerChoice.innerHTML =`Computer's choice is ${choice2}.`;
            document.body.appendChild(computerChoice);
            return choice2;
            break;
        
        case 3:
            computerChoice.innerHTML =`Computer's choice is ${choice3}.`;
            document.body.appendChild(computerChoice);
            return choice3;
            break;
    
        default:
            console.log("");
            break;
    }
}

function compete(playerChoice, computerSelection) {
    let result = document.createElement('div');
    if(playerChoice == 'rock' && computerSelection == 'paper') {
        result.innerHTML = "You lose! Paper beats Rock. Reload the page to plage again.";
    } else if (playerChoice == 'rock' && computerSelection == 'scissors'){
        result.innerHTML = "You win! Rock beats Scissors. Reload the page to play again.";
    } else if (playerChoice == 'paper' && computerSelection == 'rock') {
        result.innerHTML = "You win! Paper beats Rock. Reload the page to play again.";
    } else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        result.innerHTML = "You lose! Scissors beat Paper. Reload the page to play again.";
    } else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        result.innerHTML = "You lose! Rock beats Scissors. Reload the page to play again.";
    } else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        result.innerHTML = "You win! Scissors beat Paper. Reload the page to play again.";
    } else if (playerChoice == computerSelection) {
        result.innerHTML = "It's a tie!";
    } else {
        result.innerHTML = "Invalid input. Please ensure you have entered 'Rock', 'Paper', or 'Scissors'. Reload the page to play again.";
    }

    document.body.appendChild(result);
}
