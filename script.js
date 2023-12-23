let choice1 = 'Rock';
let choice2 = 'Paper';
let choice3 = 'Scissors';
let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors.'");

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice = document.createElement('div');
    switch (choiceNumber) {
        case 1:
            computerChoice.innerHTML =`Computer's choice is ${choice1}.`;
            document.body.appendChild(computerChoice);
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

 function getPlayerChoice(playerChoice){
    let firstLetter = playerChoice.charAt(0).toUpperCase();
    let otherLetters = playerChoice.slice(1).toLowerCase();
    let finalResult = firstLetter + otherLetters;
    console.log("You have chosen: " + finalResult + ".");
    return finalResult;
}

function compete(playerSelection, computerSelection) {
    let result = document.createElement('div');
    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        result.innerHTML = "You lose! Paper beats Rock. Reload the page to plage again.";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        result.innerHTML = "You win! Rock beats Scissors. Reload the page to play again.";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result.innerHTML = "You win! Paper beats Rock. Reload the page to play again.";
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result.innerHTML = "You lose! Scissors beat Paper. Reload the page to play again.";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result.innerHTML = "You lose! Rock beats Scissors. Reload the page to play again.";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result.innerHTML = "You win! Scissors beat Paper. Reload the page to play again.";
    } else if (playerSelection == computerSelection) {
        result.innerHTML = "It's a tie!";
    } else {
        result.innerHTML = "Invalid input. Please ensure you have entered 'Rock', 'Paper', or 'Scissors'. Reload the page to play again.";
    }

    document.body.appendChild(result);
}

compete(getPlayerChoice(playerChoice), getComputerChoice());