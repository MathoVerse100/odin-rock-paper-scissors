function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
};
