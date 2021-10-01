'use strict';

import './css/styles.css';

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

import {fetchCountries} from "./fetchCountries";

fetchCountries("asia");
console.log("cos");

const searchBox = document.querySelector('input#search-box');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});