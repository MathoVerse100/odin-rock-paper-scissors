function playGame() {
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (i < 5) {
        let computerChoice = getComputerChoice();
        let huamnChoice = getHumanChoice();

        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === "win") {
            humanScore++;
            console.log(`You vs Computer: ${humanScore}-${computerScore}`);
            i++;
        } else if (roundResult === "lose") {
            computerScore++;
            console.log(`You vs Computer: ${humanScore}-${computerScore}`);
            i++;
        };
    };

    if (humanScore > computerScore) {
        console.log(`Game Ends! You win with a score of ${huamnScore}-${computerScore}!!!`);
    } else {
        console.log(`Game Ends! You lose with a score of ${huamnScore}-${computerScore}!!!`);
    };
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


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};


function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
};

