let computerChoice, humanChoice, result

function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber < 1 / 3)
        computerChoice = 'rock'
    else if (randomNumber < 2 / 3)
        computerChoice = 'paper'
    else
        computerChoice = 'scissors'

    return computerChoice
}

function getHumanChoice() {

    humanChoice = prompt('Choose between rock paper & scissors', '').trim().toLowerCase()

    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors')
        return humanChoice

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice)
        result = 'tie'
    else if (humanChoice == 'rock' && computerChoice == 'paper' ||
        humanChoice == 'paper' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'rock'
    )
        result = 'lost'
    else
        result = 'win'

    return result

}

