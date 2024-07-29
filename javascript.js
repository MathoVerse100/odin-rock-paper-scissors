function playRound(humanChoice, computerChoice) {
    let winConditions = ["rock > scissors", "scissors > paper", "paper > rock"];

    if (humanChoice === computerChoice) {
        return ["Draw! The round is still on...", "draw"];
    } else if (winConditions.includes(`${humanChoice} > ${computerChoice}`)) {
        return [`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`, "win"];
    } else {
        return [`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`, "lose"];
    };
};


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
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


function capitalize(string_) {
    return string_.charAt(0).toUpperCase() + string_.slice(1);
};


const startGame = document.querySelector(".startGame");
let gameStarted = false;

startGame.addEventListener("click", () => {

    if (gameStarted) {
        return;
    } else {
        gameStarted = true;

        const elements = createGameBoard();
        let roundNumber = 0;
        let humanScore = 0;
        let computerScore = 0;

        elements["buttons"].addEventListener("click", (event) => {
            if (humanScore === 5 || computerScore === 5) {
                elements["resultBroadcast"].textContent = `Game Ends! You win with a score of ${humanScore}-${computerScore}!!!`;
                elements["resultBroadcast"].style.color = "red";

                elements["endGame"].textContent = "Play Again";
                return;
            } else {
                let target = event.target;
                let computerChoice = getComputerChoice();
                let humanChoice;
    
                let score = {"win": [1, 0], "lose": [0, 1], "draw": [0, 0]};
    
                switch (target.classList[0]) {
                    case "rock":
                        humanChoice = "rock";
                    case "paper":
                        humanChoice = "paper";
                    case "scissors":
                        humanChoice = "scissors";
                };
    
                roundResult = playRound(humanChoice, computerChoice);
                humanScore += score[roundResult[1]][0];
                computerScore += score[roundResult[1]][1];
                if (roundResult[1] !== "draw") {
                    roundNumber += 1
                };

                if (roundNumber > 0) {
                    elements["roundNumber"].textContent = `Round ${roundNumber}`;
                };

                elements["resultBroadcast"].textContent = roundResult[0];
                elements["humanScore"].textContent = `Your Score: ${humanScore}`;
                elements["computerScore"].textContent = `Computer Score: ${computerScore}`;
            };
        });

        elements["endGame"].addEventListener("click", () => {
            Object.keys(elements).slice(0, 4).forEach((element) => {
                document.body.removeChild(elements[element]);
            });
            
            gameStarted = false;
        });
    };
});