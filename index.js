"use strict";

// Selecting DOM elements //////////////////////////////////////////////////////////////////
const searchBtn = document.querySelector(".search");
const inputValue = document.querySelector(".inputText");
// The main container of the country details, in which the data will be inserted
const container = document.querySelector(".container");

const renderCountry = (data) => {
  let html = `<article class = "country">
  <img src = ${data.flags.png}>
    <div class="details">
    <h2>${data.name.common}</h2>
    <h4>${data.region}</h4>
    <p><span>👨‍👩‍👦‍👦</span> ${(data.population / 1000000).toFixed(2)} m</p>
    <p><span>💲</span> ${
      data.currencies[Object.keys(data.currencies)[0]].name
    }</p>
    <p><span>🗣</span> ${Object.values(data.languages)}</p>
    <p><span>⏲</span> ${data.timezones[0]}</p>
    </div>
</article>`;
  container.insertAdjacentHTML("afterbegin", html);
};

const getCountryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then(([data]) => {
      console.log(data);
      renderCountry(data);
    });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(typeof inputValue.value);
  getCountryData(inputValue.value);
  inputValue.value = "";
});
