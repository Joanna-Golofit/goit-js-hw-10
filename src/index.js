'use strict';

import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

// sprawdzenie czy cos dziala
// fetchCountries("asia");
// console.log("cos");

const searchBox = document.querySelector('input#search-box');
const countryList = document.querySelector('ul.country-list');
const countryInfo = document.querySelector('div.country-info');

// _.debounce(func, [(wait = 0)], [(options = {})]);
// function debounce(func, wait, options)

const findCountry = () => {
  let name = searchBox.value.trim();
  // sprawdzajace logi
  // console.log('findCountry - name:', name);
  // console.log(
  //   'findCountry - tu sie drukuje promise(pending) - fetchCountries(name):',
  //   fetchCountries(name),
  // );

  fetchCountries(name)
  .then(data => console.log('albo tu sa potrzebne dane:', data))
  // .then(data => console.log('same name?', data[0].name))
  // .then(data => renderCountryList(data))
    .catch(error => console.log('error fetchCountries wywolanie:', error));
};


const renderCountryList = (data) => {
  const markup = data
  .map(d => {
    return `<li>
      <p><b>Name</b>: ${d.name}</p>
      <p><b>Email</b>: ${d.email}</p>
          <p><b>Company</b>: ${d.company.name}</p>
          </li>`;
        })
    .join('');
    countryList.innerHTML = markup;
  }
  
  searchBox.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY));