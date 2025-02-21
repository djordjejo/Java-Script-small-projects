'use strict';
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
const countriesContainer = document.querySelector(".countries");


const buildHTML = country => 
{ 
  const html = `<article class="country">
          <img class="country__img" src = "" />
          <div class="country__data">
            <h3 class="country__name">${country.countryName}</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>`;

        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
}

// async function whereAmI(lat,lng)
// {
//   try{
//   fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//  .then(response => response.json())
//  .then(data =>
//   {
//     buildHTML(data)

//   })
//   }catch(error) {
//     console.error("Doslo je do greske" + error);
//   }
// }
// whereAmI(52.508,13.381);


///////

const getMyLocation = ()=>
{
  return new Promise( (resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(
       position => resolve(position),
      err => reject(err)
    )
  })
}

const whereAmI = () =>{
  getMyLocation().then( position =>{
    const { latitude: lat, longitude : lng } = position.coords;

  return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
 
  }) 
  .then(res => res.json())
  .then(data=> buildHTML(data ))
}
whereAmI();