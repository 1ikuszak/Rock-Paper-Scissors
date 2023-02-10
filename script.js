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
    let input = prompt("Choose rock, paper or scissors")
    input = input.toLowerCase()

    switch(input) {
        case "rock":
            return "rock"
            break
        case "paper":
            return "paper"
            break
        case "scissors":
            return "scissors"
            break
        default:
            console.log("enter correct value")
            break

    }
}


let random_number = RandomInt(1,3)
console.log(getComputerChoice(random_number))
console.log(getUserChoice())
