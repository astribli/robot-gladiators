var playerName = prompt("Whatis your robot's name?");
var playerHealth = 100
var playerAttack = 10

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  alert("Welcome to Robot Gladiators");

var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
if (enemyHealth <= 0) {
  alert(enemyName + " has died!");
} 
else {
  alert(enemyName + " still has " + enemyHealth + " health left.");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
if (playerHealth <= 0) {
  alert(playerName + " has died!");
} 
else {
  alert(playerName + " still has " + playerHealth + " health left.");
}
};

fight();