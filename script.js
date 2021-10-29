let playerScore = 0;
let computerScore = 0;

// Choosing Random Array for computerSelection
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}


// Plays a single round of Rock Paper Scissors
function playRound() {
    let result = '';

    let playerChoice = prompt('Rock, Paper, or Scissors?');
    let lowerCaseChoice = playerChoice.toLowerCase();
    let playerSelection = lowerCaseChoice.trim();

    let computerSelection = computerPlay();

    if ((playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper')) {

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

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (computerScore > playerScore) {
        console.log(`Bummer, you lost. ${playerScore}-${computerScore} Try again.`);
    } else if (playerScore > computerScore) {
        console.log(`Congrats, you won! ${playerScore}-${computerScore}`);
    } else {
        console.log(`It was a tie! ${playerScore}-${computerScore} Try again`)
    }
    return playerScore, computerScore
}

game();