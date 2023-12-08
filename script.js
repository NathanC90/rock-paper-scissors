let choice1 = 'Rock';
let choice2 = 'Paper';
let choice3 = 'Scissors';

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    switch (choiceNumber) {
        case 1:
            console.log(choice1);
            break;
        
        case 2:
            console.log(choice2);
            break;
        
        case 3:
            console.log(choice3);
            break;
    
        default:
            console.log("");
            break;
    }
}