// Q-15
// changing guest list:You just heard that one of your guests can't make the dinner,so you need to send out  
// a new set of invitations.You'll have to think of someone else to invite.
// start with your program from exercise 4.Add a print statement at the end of your
//  program stating the name of the guest who can't make it.
// modify the list,replacing the name of the guest who can not make it 
// // with the name of the new person you are inviting.
// print a second set of invitation messages,one for each person who is still in your list.
let newGuestList1:string[]= ["Abda" , "Rifat" , "Fatima" , "Sitara" , "Amina" ,"Farida"]
console.log(newGuestList1)
let canNotAttend:string[]= ["Fareeda"]
console.log(`${canNotAttend} has already planned to go somewhere else so she can't join the dinner.`)
newGuestList1.pop()
newGuestList1.push("Aqeela")
console.log(newGuestList1)
newGuestList1.map((guest)=>
console.log(`${guest},"You are invited in a dinner.I would be honoured to have you join us."`))

