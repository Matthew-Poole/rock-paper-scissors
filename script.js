

// Choosing computerSelection
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Capitalizing First Letter
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// Choosing playerSelection
function playerChoice() {
    let playerInput = prompt('Rock, Paper, or Scissors?');
    let lowerCaseChoice = playerInput.toLowerCase();
    let lowerCaseTrim = lowerCaseChoice.trim();
    return capitalizeFirstLetter(lowerCaseTrim);
}

let playerScore = 0;
let computerScore = 0;
while (playerScore < 5 && computerScore < 5) {
    playRound();
    if (playerScore == 5 && computerScore < 5) {
        console.log(`Congrats, you won! ${playerScore}-${computerScore}`);
        break;
    } else if (computerScore == 5 && playerScore < 5) {
        console.log(`Bummer, you lost. ${playerScore}-${computerScore} Try again.`);
        break;
    }

}

// Plays a single round of Rock Paper Scissors
function playRound() {
    let result = '';
    let computerSelection = computerPlay();
    let playerSelection = playerChoice();

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper')) {

        playerScore++

        result = `You won this round! ${playerSelection} beats ${computerSelection}. The score is now ${playerScore}-${computerScore}`;

        console.log(`You chose ${playerSelection}.
        The computer chose ${computerSelection}.
        ${result}`);

    } else if (playerSelection == computerSelection) {

        result = `This round is a tie! You both chose ${playerSelection}. The score is still ${playerScore}-${computerScore}`;

        console.log(`You chose ${playerSelection}.
         The computer chose ${computerSelection}.
        ${result}`);

    } else {

        computerScore++

        result = `You lost this round! ${computerSelection} beats ${playerSelection}. The score is now ${playerScore}-${computerScore}`;

        console.log(`You chose ${playerSelection}.
        The computer chose ${computerSelection}.
        ${result}`);

    }
}

// Best of 5 because idk how to make a loop yet
// function game() {
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     if (computerScore > playerScore) {
//         console.log(`Bummer, you lost. ${playerScore}-${computerScore} Try again.`);
//     } else if (playerScore > computerScore) {
//         console.log(`Congrats, you won! ${playerScore}-${computerScore}`);
//     } else {
//         console.log(`It was a tie! ${playerScore}-${computerScore} Try again`)
//     }
//     return playerScore, computerScore
// }








