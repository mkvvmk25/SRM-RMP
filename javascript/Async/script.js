'use strict';

let countriesContainer = document.querySelector('.countries');

let request = fetch('https://restcountries.com/v3.1/name/canada')
  .then(function (fullfilled) {
    console.log(fullfilled);
    return fullfilled.json(); // promise
  })
  .then(function (data) {
    let jsonObj = data[0];
    console.log(jsonObj);
    let htmlString = `<article class="country ">
            <img class="country__img" src="${jsonObj.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${jsonObj.name.common}</h3>
              <h4 class="country__region">${jsonObj.region}</h4>
              <p class="country__row"><span>👫</span>${
                jsonObj.population / 1000000
              } M</p>
              <p class="country__row"><span>🗣️</span>${
                jsonObj.languages.eng
              }</p>eng
              <p class="country__row"><span>💰</span>${jsonObj.altSpellings}</p>
            </div>
          </article>`;

     countriesContainer.insertAdjacentHTML("beforeend", htmlString); 
  });

/* function countryCard(countryName) {
  // create a req object
  let request = new XMLHttpRequest();

  // open a connection
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

  // HTTP CRUD
  // GET PUT POST DELETE

  // send
  request.send(); // no answer

  // log
  console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(request.responseText);

    let jsonObj = JSON.parse(request.responseText)[0];
    console.log(jsonObj);

    let htmlString = `<article class="country ">
            <img class="country__img" src="${jsonObj.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${jsonObj.name.common}</h3>
              <h4 class="country__region">${jsonObj.region}</h4>
              <p class="country__row"><span>👫</span>${
                jsonObj.population / 1000000
              } M</p>
              <p class="country__row"><span>🗣️</span>${
                jsonObj.languages.eng
              }</p>eng
              <p class="country__row"><span>💰</span>${jsonObj.altSpellings}</p>
            </div>
          </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', htmlString);
  });
}

countryCard('canada');
countryCard('USA');
countryCard('Germany');
countryCard('INdia'); */
