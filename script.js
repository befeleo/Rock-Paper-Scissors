let computerChoice, humanChoice, result
let computerScore = 0
let humanScore = 0
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const reset = document.querySelector('.reset-btn');

function playGame(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result = "It is a tie 🤝";
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        computerScore++;
        result = "Computer won! 🎉";
    } else {
        humanScore++;
        result = "You won! 🎉";
    }

    const player = document.querySelector('.player');
    player.textContent = humanScore;

    const computer = document.querySelector('.computer');
    computer.textContent = computerScore;

    const div = document.querySelector('.result');
    div.textContent = '';
    const p = document.createElement('p');
    p.classList.add('p-result')
    p.textContent = result;
    div.appendChild(p);

}

reset.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;

    document.querySelector('.player').textContent = humanScore;
    document.querySelector('.computer').textContent = computerScore;
    document.querySelector('.result').textContent = 'Make your move!';
});

const getComputerChoice = () => {
    const CHOICES = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return CHOICES[randomIndex]
}

rock.addEventListener('click', () => {
    humanChoice = rock.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
})
paper.addEventListener('click', () => {
    humanChoice = paper.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
})
scissors.addEventListener('click', () => {
    humanChoice = scissors.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
})
