'use strict';
let scoreEl0 = document.querySelector("#score--0");
let socreEl1 = document.querySelector("#score--1");
let dice = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const  btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let randNum, currentScore, scores, diceNumber, activePlayer;
const init = function () {
randNum;
 currentScore = 0;
 scores = [0,0];
 diceNumber = 0;
 activePlayer = 0;
scoreEl0.textContent = 0; 
socreEl1.textContent = 0;
document.querySelector(`.player--${activePlayer}`).classList.add("player--active");

dice.classList.add("hidden");
}
init();
const switchPlayer = () =>
{ 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}
const rollDice = ()=>
{
    randNum = Math.floor(Math.random()*6)+1;
    dice.src = `dice-${randNum}.png`;
    dice.classList.remove("hidden");
    
}

btnRollDice.addEventListener("click", ()=>{
    rollDice();
   if(randNum !== 1)
   {
    currentScore +=randNum;
    document.getElementById(`current--${activePlayer}` ).textContent = currentScore;
   }
   else 
   {
    switchPlayer();
   }
})

btnHoldScore.addEventListener("click", ()=>
{
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20)
    {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    }
    switchPlayer();
})



