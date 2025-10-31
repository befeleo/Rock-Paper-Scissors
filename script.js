let computerChoice, humanChoice, result
let computerScore = 0
let humanScore = 0

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
        result = `You chose ${humanChoice} Computer chose ${computerChoice} it is a tie`
    else if (humanChoice == 'rock' && computerChoice == 'paper' ||
        humanChoice == 'paper' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'rock'
    ) {
        computerScore++
        result = `You chose ${humanChoice} Computer chose ${computerChoice} you lost`
    } else {
        humanScore++
        result = `You chose ${humanChoice} Computer chose ${computerChoice} you won`
    }

    return result
}

function playGame() {
    let round = 0;
    while (round < 5) {
        console.log(`Round ${round + 1}`)
        console.log(playRound(getHumanChoice(), getComputerChoice()))
        round++
    }

    console.log(`Result is you won ${humanScore} computer won ${computerScore} tie ${5 - humanScore - computerScore} `)
}

playGame()