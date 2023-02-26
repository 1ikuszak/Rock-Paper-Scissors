const projectile_tube = document.getElementById("projectile_tube");
const projectileContainer = document.getElementById("projectileContainer");
const shootButton = document.getElementById("shootButton");

shootButton.addEventListener("click", function() {

  //player
  const player_projectile = document.createElement("div");
  player_projectile.classList.add("projectile");
  player_projectile.classList.add("player");
  projectile_tube.appendChild(player_projectile);  
  player_projectile.addEventListener("animationend", function() {
    player_projectile.remove();
  });

  //enemy
  const enemy_projectile = document.createElement("div");
  enemy_projectile.classList.add("projectile");
  enemy_projectile.classList.add("enemy");
  projectile_tube.appendChild(enemy_projectile);  
  enemy_projectile.addEventListener("animationend", function() {
    enemy_projectile.remove();
  });
  
});