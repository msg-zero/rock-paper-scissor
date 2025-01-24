// display instructions
alert(
"Rock-Paper-Scissors\nThere will be five rounds and the one with highest score will WIN!"
);
// create variables computerScore and humanScore to store computer and human score
// initialize computerScore and humanScore to 0
let computerScore = 0;
let humanScore = 0;

// create variable called roundNumber to record number of rounds
// initialize roundNumber to 0
let roundNumber = 0;

// create function called getComputerChoice to get a random choice from computer
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) return ROCK;
  else if (choice === 2) return PAPER;
  else return SCISSOR;
}

// create function called getHumanChoice to get human choice

// create function called playRound with arguments humanChoice and computerChoice to evaluate result

// create function called playGame to call playRound() when roundNumber <=5
// IF roundNumber <=5 THEN
    // increment roundNumber
    // start game
    // get computer choice
    // get human choice
    // evaluate winner
    // increment score with respect to winner
    // display result
// ELSE
    // display total score and winner
    // prompt the user to exit or play again
// ENDIF
