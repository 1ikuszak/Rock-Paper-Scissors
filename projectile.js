const projectile_tube = document.getElementById("projectile_tube");
const projectileContainer = document.getElementById("projectileContainer");
const shootButtons = document.querySelectorAll("#shootButton");


shootButtons.forEach(button => {
  button.addEventListener('click', () => {


    //player animation
    const player_projectile = document.createElement("div");
    player_projectile.classList.add("projectile");
    player_projectile.classList.add("player");
    projectile_tube.appendChild(player_projectile);
    player_projectile.addEventListener("animationend", function () {
      player_projectile.remove();

      // set player choice
      player_choice = getPlayerChoice(button.className)

      // set computer choice
      computer_choice = getComputerChoice(RandomInt(1,3))
      switch(playRound(player_choice, computer_choice)) {
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
      console.log(computer_score + " " + player_score )



    });

    //enemy animation
    const enemy_projectile = document.createElement("div");
    enemy_projectile.classList.add("projectile");
    enemy_projectile.classList.add("enemy");
    projectile_tube.appendChild(enemy_projectile);
    enemy_projectile.addEventListener("animationend", function () {
      enemy_projectile.remove();
    });
  });
});


var player_choice = null
var computer_choice = null
let player_score = 0
let computer_score = 0

function getPlayerChoice (string) {
  return string
}


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