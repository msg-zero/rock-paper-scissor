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

  if (choice === 1) return "ROCK";
  else if (choice === 2) return "PAPER";
  else return "SCISSOR";
}

// create function called getHumanChoice to get human choice
function getHumanChoice() {
  let choice;

  do {
    choice = prompt(
      `Round : ${roundNumber}\nSCORE : User = ${humanScore}  Computer = ${computerScore}\nEnter ROCK, PAPER or SCISSOR`,
      ""
    );
    if (!choice) continue;
    choice = choice.toUpperCase();
  } while (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSOR");

  return choice;
}

// create function called playRound with arguments humanChoice and computerChoice to evaluate result
// increment score with respect to winner
// display result
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`It's a TIE!\nYou : ${humanChoice}  Computer : ${computerChoice}`);
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSOR") ||
    (humanChoice === "SCISSOR" && computerChoice === "ROCK")
  ) {
    alert(`You LOST!\nYou : ${humanChoice}  Computer : ${computerChoice}`);
    computerScore++;
  } else {
    alert(`You WON!\nYou : ${humanChoice}  Computer : ${computerChoice}`);
    humanScore++;
  }
}

// create function called playGame to call playRound() when roundNumber <=5
function playGame() {
  // get computer choice
  let computerChoice = getComputerChoice();
  // get human choice
  let humanChoice = getHumanChoice();
  // start game
  // evaluate winner
  playRound(humanChoice, computerChoice);
}

// create function called game to control whole game
function game() {
  // create variable called play to determine if user want to play again
  let playAgain;

  // when play is true
  do {
    // reset all variables for playing again
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;

    // WHILE roundNumber <5, call playGame()
    while (roundNumber < 5) {
      // increment roundNumber
      roundNumber++;
      playGame();
    }

    // DISPLAY final result
    if (humanScore === computerScore) {
      alert(`It's a TIE!\nYou : ${humanScore}  Computer : ${computerScore}`);
    } else if (humanScore < computerScore) {
      alert(`You LOST!\nYou : ${humanScore}  Computer : ${computerScore}`);
    } else {
      alert(`You WON!\nYou : ${humanScore}  Computer : ${computerScore}`);
    }

    // prompt the user to exit or play again
    playAgain = confirm("Do you want to play again?")
  } while (playAgain == true);

  alert("Thank you for playing.\nHave a nice DAY!");
}

game();