let computerChoice, humanChoice, result
let computerScore = 0
let humanScore = 0

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => {
    getHumanChoice(rock.value)
})
paper.addEventListener('click', () => {
    getHumanChoice(paper.value)
})
scissors.addEventListener('click', () => {
    getHumanChoice(scissors.value)
})

const getHumanChoice = (humanChoice) => {
    return humanChoice
}


const getComputerChoice = () => {
    const CHOICES = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return CHOICES[randomIndex]
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

// playGame()