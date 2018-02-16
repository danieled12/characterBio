
function game() {

var random = Math.random();
var computer = '';


  if (random > 0.67) {
    //rock
    computer ="rock";
  }
  if (random < 0.66 && random > 0.34) {
    //paper
    computer = "paper"
  }
  if (random < 0.33) {
    //scissors
    computer = "scissors"
  }


var player = prompt("Pick rock, paper, or scissors");
var message = '';
  if(player === "rock" && computer === "rock") {
    message = "It's a Tie";
    
  }
  if (player === "rock" && computer === "paper") {
    message = "Paper Beats Rock, Computer Wins";
  }
  if (player === "rock" && computer === "scissors") {
    message = "Rock Beats Paper, Player Wins";
  }
  if(player === "paper" && computer === "rock") {
    message = "Paper Beats Rock, Player Wins";
  }
  if (player === "paper" && computer === "paper") {
    message = "It's a tie!";
  }
  if (player === "paper" && computer === "scissors") {
    message = "Scissors Beats Paper, Computer Wins";
  }
  if(player === "scissors" && computer === "rock") {
    message = "Rock Beats Scissors, Computer Wins";
  }
  if (player === "scissors" && computer === "paper") {
    message = "Scissors Beats Paper, Player Wins!";
  }
  if (player === "scissors" && computer === "scissors") {
    message = "It's a Tie";
  }
  document.getElementById('message').innerHTML = message;
}

var player = 0;
var computer = 0;

function compareScores(player, computer) {
  if(player) {
    player++;
  }
  if(computer) {
    computer++;
  }
    document.getElementById('playerScore').innerHTML = player;
    document.getElementById('ComputerScore').innerHTML = computer;
}
