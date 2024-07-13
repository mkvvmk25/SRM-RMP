'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
console.log(countriesContainer);

// const html = `<article class="country abc">
// <img class="country__img" src="" />
// <div class="country__data">
// <h3 class="country__name">COUNTRY1</h3>
// <h4 class="country__region">REGION</h4>
// <p class="country__row"><span>👫</span>POP people</p>
// <p class="country__row"><span>🗣️</span>LANG</p>
// <p class="country__row"><span>💰</span>CUR</p>
// </div>
// </article>`;
// ///////////////////////////////////////
// countriesContainer.insertAdjacentHTML('beforeend', html);
// let a = document.querySelector('.abc');
// let a1 = document.querySelector('.qwe');
// console.log(a);
// console.log(a1);
// // countriesContainer.removeChild(a);
// countriesContainer.removeChild(a1);
// countriesContainer.removeChild(a);
// console.log(countriesContainer);

let imgc = document.querySelector('.country__img');
imgc.src = 'https://flagcdn.com/w320/us.png';

// imgc.addEventListener('load', function () {
//   setTimeout(function()
//   {}, 3000);
//   console.log('img loaded');
// });
console.log('world');

setTimeout(function () {
  console.log('for 2 sec');
}, 0);
console.log('helo');
