'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountry = (country, className) =>{
   const html =  `
    <article class="${className}">
          <img class="country__img" src= "${country.flag}" />
          <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span> ${country.population}</p>
            <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
          </div>
        </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountry = (ctry) =>{
fetch(`https://restcountries.com/v2/name/${ctry}`).
then( response => response.json()).
then( (data) => {
    displayCountry(data[0]);
    const neighbour = data[0].borders[0];

    if(neighbour !== null) 
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

}).then( response => response.json())
   .then( data => 
    {
        displayCountry(data,"neighbour")
    });
}
getCountry("Brasil");