'use strict';

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeButton = document.querySelector(".close-modal");
let buttons = document.querySelectorAll(".show-modal");
const closeModal = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
const openModal = function ()
{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

buttons.forEach((btn) =>{
    btn.addEventListener("click", openModal);
})

closeButton.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", (event)=>{
    console.log(event)
    if(event.key === "Escape")
        if(!modal.classList.contains("hidden"))closeModal();

        
})