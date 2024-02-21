
//Q.32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// 
// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// 
// // // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// 
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users:string[] = ["anum","abda","freeda","amina","john"]
let new_users:string [] =  ["ANUM","AbdA","sitara","rifat","JOHN"]
//for (let new_user of new_users){
    for(let a=0; a<new_users.length; a++){
       let isAvailable:boolean=true
       for (let current_user of current_users){
if(new_users[a].toLowerCase() === current_users[a].toLowerCase()){
    console.log(`The username "${new_users}" has already been used.Please enter a new username`)
    isAvailable = false
    break;
     }
}
    if(isAvailable){
        console.log(`The username "${new_users}" is available.`)  
     }   
    }
