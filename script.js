function RandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function getComputerChoice(num) {
    if (num === 1) {
        return 'rock'
    } 
    else if (num === 2) {
        return 'paper'
    } 
    else if (num === 3) {
        return 'scissors'
    }
}

function getUserChoice() {
    do {
        var input = prompt("Choose rock, paper or scissors")
        input = input.toLowerCase()
        if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
            window.alert("enter rock paper or scissors!")
        }
    } while (input !== 'rock' && input !== 'paper' && input !== 'scissors')

    return input
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player win!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player win!"
    }
    else
     return "computer win!"
}


let random_number = RandomInt(1,3)
let computer = getComputerChoice(random_number)
console.log("computer: " + computer)

player = getUserChoice()
console.log("player: " + player)

console.log(playRound(player, computer))
