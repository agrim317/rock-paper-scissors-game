function capitalize(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ", "");
    if (choice) choice = capitalize(choice);
    console.log(`You choose ${choice}.`);
    return choice;
}

function random(n) {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    const num = random(3);
    let choice = "";

    switch (num) {
        case 0:
            choice = "Rock";
            break;

        case 1:
            choice = "Paper";
            break;
    
        case 2:
            choice = "Scissors";
            break;         
    }

    console.log(`Computer chooses ${choice}.`);
    choice = capitalize(choice);
    return choice;
}

function isValid(humanChoice) {
    return (humanChoice === 'Rock' || humanChoice === 'Paper' || humanChoice === 'Scissors');
}

function playRound(humanChoice, computerChoice) {
    if (!isValid(humanChoice)) {
        console.log("Invalid Choice!");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log(`You and computer made the same choice ${humanChoice}. This round is a draw!`);
        return;
    }

    let winner;
    if (humanChoice === 'Rock') {
        winner = (computerChoice === 'Paper') ? 'Computer' : 'human';
    } else if (humanChoice === 'Paper') {
        winner = (computerChoice === 'scissors') ? 'Computer' : 'human';
    } else {
        winner = (computerChoice === 'Rock') ? 'Computer' : 'human';
    }

    let text;
    if (winner === 'Computer') {
        text = `You lost! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        text = `You won! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    console.log(text);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    numberOfGames = 5;
    
    for (let i = 0; i < numberOfGames; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Scores\nHuman: ${humanScore}\nComputer: ${computerScore}`)
}

playGame();