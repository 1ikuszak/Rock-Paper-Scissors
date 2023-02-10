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

function game(max_rounds) {
    let player_score = 0
    let computer_score = 0

    for (let i = 0; i < max_rounds; i++) {
        console.log("round: " + i)
        let random_number = RandomInt(1,3)
        let computer = getComputerChoice(random_number)
        console.log("computer: " + computer)
        player = getUserChoice()
        console.log("player: " + player)
        
        switch(playRound(player, computer)) {
            case "draw!":
                player_score++
                computer_score++
                break
            case "computer win!":
                computer_score++
                break
            case "player win!":
                player_score++
        }

    }
    if (player_score>computer_score) {
        return "player won the battle! score " + computer_score + " : " + player_score
    }
    else if (computer_score>player_score) {
        return "computer won the battle! score " + computer_score + " : " + player_score
    }
    else
        return "draw " + computer_score + " : " + player_score

}


console.log(game(3))
