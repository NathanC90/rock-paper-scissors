let choice1 = 'Rock';
let choice2 = 'Paper';
let choice3 = 'Scissors';
let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors.'");

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    switch (choiceNumber) {
        case 1:
            console.log(`Computer's Choice is ${choice1}.`);
            return choice1;
            break;
        
        case 2:
            console.log(`Computer's Choice is ${choice2}.`);
            return choice2;
            break;
        
        case 3:
            console.log(`Computer's Choice is ${choice3}.`);
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
    console.log(finalResult);
    return finalResult;
}

function compete(playerSelection, computerSelection) {
    if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log("You lose! Paper beats Rock. Reload the page to play again.");
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log("You win! Rock beats Scissors. Reload the page to play again.");
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log("You win! Paper beats Rock. Reload the page to play again.");
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log("You lose! Scissors beat Paper. Reload the page to play again.");
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log("You lose! Rock beats Scissors. Reload the page to play again.");
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log("You win! Scissors beat Paper. Reload the page to play again.");
    } else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else {
        console.log("Invalid input. Please ensure you have entered 'Rock', 'Paper', or 'Scissors'. Reload the page to play again.");
    }
}

compete(getPlayerChoice(playerChoice), getComputerChoice());