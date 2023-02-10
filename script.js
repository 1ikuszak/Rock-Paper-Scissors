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


let random_number = RandomInt(1,3)
console.log(getComputerChoice(random_number))
