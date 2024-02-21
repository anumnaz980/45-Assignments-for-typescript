"use strict";
//Q.33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
let makeOrdinlNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let x = 0; x < makeOrdinlNumber.length; x++) {
    let Ordinal;
    if (makeOrdinlNumber[x] === 1) {
        Ordinal = "st";
    }
    else if (makeOrdinlNumber[x] === 2) {
        Ordinal = "nd";
    }
    else if (makeOrdinlNumber[x] === 3) {
        Ordinal = "rd";
    }
    else {
        Ordinal = "th";
    }
    console.log(`${makeOrdinlNumber[x]}${Ordinal}`);
}
