let computerChoice, humanChoice

function getComputerChoice() {
    let randomNumber = Math.random()
    console.log(randomNumber)

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
