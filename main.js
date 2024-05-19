function capitalize(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ", "");
    if (choice) choice = capitalize(choice);
    display.textContent += `You choose ${choice}.\n`;
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

    choice = capitalize(choice);
    return choice;
}

function isValid(humanChoice) {
    return (humanChoice === 'Rock' || humanChoice === 'Paper' || humanChoice === 'Scissors');
}

function playRound(humanChoice, computerChoice) {
    if (!isValid(humanChoice)) {
        display.textContent += "Invalid Choice!\n";
        return;
    }

    display = document.createElement('div');

    display.textContent += `You chose ${humanChoice}.\n`;
    display.textContent += `Computer chose ${computerChoice}.\n`;

    if (humanChoice === computerChoice) {
        display.textContent += `You and computer made the same choice ${humanChoice}. This round is a draw!`;
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
        text = `You lost! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        text = `You won! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }

    display.textContent += text + '\n';

    const body = document.querySelector('body');
    body.appendChild(display);
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.button');

buttons.addEventListener('click', (event) => {
    const humanSelection = event.target.textContent;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

let display;