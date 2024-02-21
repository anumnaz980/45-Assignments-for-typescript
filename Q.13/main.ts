
// Q-13
// Your own Array:Think of your favourite mode of transportation,such as a motorcycle or 
// a car,and make a list that stores several examples.Use your list to print a series of
//  statements about these items,such as "I would like to own a Honda motorcycle."

let myFavouriteTransportation:String[] = ["Honda motorcycle" , "Civic" , "Pajero" , "Jet"];
myFavouriteTransportation.map((item:String)=>console.log(`"I would like to own a ${item}."`))