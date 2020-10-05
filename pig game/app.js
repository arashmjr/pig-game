
var scores, roundScore, activePlayer, gameplaying, lastDice;
init();


document.querySelector('.btn-roll').addEventListener('click', function()
{

  if (gameplaying){
  //random number
  var dice = Math.floor(Math.random() * 6 + 1);

  //displaye result
 var diceDom = document.querySelector('.dice');
 diceDom.style.display = 'block';
 diceDom.src = 'dice-' + dice + '.png';

 //update roundScore
 if (dice === 6 && lastDice === 6) {
   //Player looses score
   scores[activePlayer] = 0;
   document.querySelector('#score-' + activePlayer).textContent = '0';
   NextPlayer();

 }else if (dice !== 1) {

  roundScore += dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;
  
 } else {   //Next Player 
  NextPlayer();
 }
  lastDice = dice;
}
}
)

document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gameplaying) {

//ADD CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;

//update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

var input = document.querySelector('.final-score').value;

if (input) {
  var winnigScore = input;
} else {
  winnigScore = 100;
}

//check if player won the game
if(scores[activePlayer] >= winnigScore) {
  document.querySelector('#name-' + activePlayer).textContent = 'winner!';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  gameplaying = false;

} else {
  //NextPlayer
  NextPlayer();
}

  }

});

function NextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gameplaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


  
};
