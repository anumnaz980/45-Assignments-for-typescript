"use strict";
//Q-16
// More Guests List:You just found a bigger dinner table,so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table
//.Add one new guest to the beginning of your array.
let newGuestList = ["Abda", "Rifat", "Sitara", "Amina", "Farida"];
newGuestList.unshift("Sakina");
//console.log(newGuestList)
//.Add one new guest to the middle of your array.
let middleguest = "Amma";
let middleindex = newGuestList.length / 2;
newGuestList.splice(middleindex, 0, middleguest);
//console.log(newGuestList)
//.Use append() to add one new guest to the end of your list.
newGuestList.push("Shabana");
console.log(newGuestList);
//Print a new set of invitation messages,one for each person in your list.
newGuestList.map((guest) => console.log(`Dear ${guest} ,I would like to inform you that I have found a bigger dinner table today,so I would be honoured to have you join us.`));
