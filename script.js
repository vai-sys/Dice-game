
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
score0El.textContent = 0;
score1El.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.toggle('player--active');
 player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click',function(){
  scores[activePlayer]=+currentScore;
  document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer];
  

})