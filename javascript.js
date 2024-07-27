function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
};


function playRound(humanChoice, computerChoice) {
    let winConditions = ["rock > scissors", "scissors > paper", "paper > rock"];

    if (humanChoice === computerChoice) {
        console.log("Draw! The round is still on...");
        return "draw";
    } else if (winConditions.includes(`${humanChoice} > ${computerChoice}`)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "win";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "lose";
    };
};
