"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let listOfUsers = ["Anum", "Abda", "Amina", "Fareeda"];
if (listOfUsers.length == 0) {
    console.log("We need to find some users.");
}
else {
    for (let a = 0; a < listOfUsers.length; a++) {
        console.log(listOfUsers[a]);
    }
}
let usersList = [];
if (usersList.length == 0) {
    console.log("We need to some users.");
}
else {
    for (let a = 0; a < usersList.length; a++) {
        console.log(usersList[a]);
    }
}
