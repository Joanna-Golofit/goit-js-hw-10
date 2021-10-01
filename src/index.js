'use strict';

import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from "./fetchCountries";

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


fetchCountries("asia");
console.log("cos");

const searchBox = document.querySelector('input#search-box');
const countryList = document.querySelector('ul.country-list');
const countryInfo = document.querySelector('div.country-info');

searchBox.addEventListener('input', debounce(promise, DEBOUNCE_DELAY);

// _.debounce(func, [(wait = 0)], [(options = {})]);
// function debounce(func, wait, options)

const promise = () => {
  fetchCountries()
    .then(data => renderCountryList(data))
    .catch(error => console.log(error));
};

function renderCountryList(data) {
  const markup = data
    .map((d) => {
      return `<li>
          <p><b>Name</b>: ${d.name}</p>
          <p><b>Email</b>: ${d.email}</p>
          <p><b>Company</b>: ${d.company.name}</p>
        </li>`;
    })
    .join("");
  countryList.innerHTML = markup;
}