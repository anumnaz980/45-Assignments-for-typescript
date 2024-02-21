"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
let city_country_piar1 = city_country("Lahore", "Pakistan");
let city_country_piar2 = city_country("Makkah", "Saudi Arabia");
let city_country_piar3 = city_country("Newyork", "USA");
console.log(city_country_piar1);
console.log(city_country_piar2);
console.log(city_country_piar3);
