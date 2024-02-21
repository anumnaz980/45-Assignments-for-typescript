"use strict";
//Q.42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(magicians => magicians.length);
    console.log(magicians);
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great" + " " + magicians[i];
    }
}
let magiciansName = ["Derren Brown", "Shin Lim", "Chris Angel"];
make_great(magiciansName);
show_magicians(magiciansName);
