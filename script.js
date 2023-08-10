// get DOM elements
const player1ScoreDisplay= document.getElementById('player1Score');
const player2ScoreDisplay= document.getElementById('player2Score');
const resultDisplay= document.getElementById('result');
const choices= document.querySelectorAll('.choice');
const resetButton= document.getElementById('reset');

let player1Score = 0;
let player2Score = 0;

//function to display winner of each round
function determineWinner(player1Choice, player2Choice) {
    if (player1Choice=== player2Choice){
        return 'It\'s a tie!';
  } else if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')  
  ) {
return 'Player 1 Wins!';
  } else {
return 'Player 2 Wins!';
  }
  }

  function updateScore(winner) {
    if (winner === 'Player 1 Wins!'){
        player1Score++;
    } else if (winner === 'Player 2 Wins!') {
        player2Score++;

    }
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
    
  }














