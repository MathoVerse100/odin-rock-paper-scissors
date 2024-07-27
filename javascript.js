function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === "win") {
            humanScore++;
            console.log(`You vs Computer: ${humanScore}-${computerScore}`);
        } else if (roundResult === "lose") {
            computerScore++;
            console.log(`You vs Computer: ${humanScore}-${computerScore}`);
        };
    };

    if (humanScore > computerScore) {
        console.log(`Game Ends! You win with a score of ${humanScore}-${computerScore}!!!`);
    } else {
        console.log(`Game Ends! You lose with a score of ${humanScore}-${computerScore}!!!`);
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
    const choices = ["rock", "paper", "scissors"];
    let choice = null;

    while (true) {
        choice = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (choices.includes(choice)) {
            break;
        } else {
            alert("Invalid choice. Please retry...");
        };
    };

    return choice;
};


document.getElementById("startGame").onclick = playGame;
