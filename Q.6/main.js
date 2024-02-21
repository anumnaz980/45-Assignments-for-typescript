"use strict";
// Q-6
// stripping names:store a person's name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination,"\t" and "\n",at least once.Print the name once,
// so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let firstName = "\t Anum\tNaz \t";
console.log(firstName);
let firstName1 = "\nAnum\nNaz\n";
console.log(firstName1);
let firstName2 = "Anum Naz";
console.log("'" + firstName2.trim() + "'");
