'use strict'
const button = document.querySelector(".check");
let goalNumber = 0; 
let score = 3;
const label = document.querySelector(".message");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM je spreman!");
    goalNumber = getRandomNumber();
  });

button.addEventListener("click", ()=>{
    
    // uzimamo broj iz inputa
    let guessNumber = document.querySelector(".guess").value;

    // pravimo niz provera da li je igrac pogodio broj
    if(guessNumber < goalNumber) {
          label.textContent = "Too High 📉";
          score -=1;
          document.querySelector(".score").textContent = score;
    }
    else if (guessNumber > goalNumber)
        {
             label.textContent = "Too Low 📈";
             score -=1;
             document.querySelector(".score").textContent = score;
        }
    else if (guessNumber == goalNumber) 
        {
            label.textContent = "Congratulation 🎉"
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".score").textContent = score;
            document.querySelector(".number").textContent = score;
            document.querySelector(".highscore").textContent = score;
        }

    // provera da li je score 0 ako jeste gotova igra
    if(score < 1)
        {            
            label.textContent = "You lose 😥"
            button.disabled = true;
        }
})

function getRandomNumber(){

    return Math.floor(Math.random()* 21);
}
document.querySelector(".again").addEventListener("click", ()=>
{
window.location.reload();
})
