let computerChoice, humanChoice
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

function playGame(humanChoice, computerChoice) {
    let computerScore = 0
    let humanScore = 0
    let result

    if (humanChoice == computerChoice) {
        result = "It is a tie 🤝";
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        computerScore++;
        result = "You won! 🎉";
    } else {
        humanScore++;
        result = "Computer won! 🎉";
    }


    const div = document.querySelector('.result');
    div.textContent = ''; // 🧹 Clears previous result

    const p = document.createElement('p');
    p.textContent = result;
    div.appendChild(p);


}

const getComputerChoice = () => {
    const CHOICES = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return CHOICES[randomIndex]
}


rock.addEventListener('click', () => {
    humanChoice = rock.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
    console.log(humanChoice)
    console.log(computerChoice)
})
paper.addEventListener('click', () => {
    humanChoice = paper.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
    console.log(humanChoice)
    console.log(computerChoice)
})
scissors.addEventListener('click', () => {
    humanChoice = scissors.value
    computerChoice = getComputerChoice()
    playGame(humanChoice, computerChoice)
    console.log(humanChoice)
    console.log(computerChoice)
})
