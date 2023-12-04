const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const aTieScore = document.querySelector('#a-tie-score')

let = humanScoreNumber = 0
let = machineScoreNumber = 0
let = atieScore = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['stone', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        atieScore++
        aTieScore.innerHTML = atieScore
        result.innerHTML = "Deu empate! &#128529"
    } else if (human === 'paper' && machine === 'stone' ||
        human === 'stone' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou! &#128526"

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu, tente novamente! &#128557"
    }

}