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


function createGameBoard() {    
    const separator1 = document.createElement("p");
    const gamePlace = document.createElement("div");
    const separator2 = document.createElement("p");
    const endGame = document.createElement("button");

    const roundNumber = document.createElement("h3");
    const buttons = document.createElement("div");
    const results = document.createElement("div");

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    const resultBroadcast = document.createElement("h3");
    const humanScore = document.createElement("p");
    const computerScore = document.createElement("p");


    separator1.classList.add("separator1");
    gamePlace.classList.add("gamePlace");
    separator2.classList.add("separator2");
    endGame.classList.add("endGame");

    roundNumber.classList.add("roundNumber");
    buttons.classList.add("buttons");
    results.classList.add("results");

    rock.classList.add("rock");
    paper.classList.add("paper");
    scissors.classList.add("scissors");
    resultBroadcast.classList.add("resultBroadcast");
    humanScore.classList.add("humanScore");
    computerScore.classList.add("computerScore");


    buttons.style.display = "flex";
    buttons.style.gap = "8px";
    resultBroadcast.style.color = "blue";

    
    separator1.textContent = "-".repeat(90);
    roundNumber.textContent = "Round ___";
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    resultBroadcast.textContent = "No one started yet...";
    humanScore.textContent = "Your Score: 0";
    computerScore.textContent = "Computer Score: 0";
    separator2.textContent = "-".repeat(90);
    endGame.textContent = "End Game";

    buttons.append(rock, paper, scissors);
    results.append(resultBroadcast, humanScore, computerScore);

    gamePlace.append(roundNumber, buttons, results);

    document.body.append(separator1, gamePlace, separator2, endGame);

    return {
        "separator1": separator1,
        "gamePlace": gamePlace,
        "separator2": separator2,
        "endGame": endGame,
        "roundNumber": roundNumber,
        "buttons": buttons,
        "results": results,
        "rock": rock,
        "paper": paper,
        "scissors": scissors,
        "resultBroadcast": resultBroadcast,
        "humanScore": humanScore,
        "computerScore": computerScore
    };
};


const startGame = document.querySelector(".startGame");
