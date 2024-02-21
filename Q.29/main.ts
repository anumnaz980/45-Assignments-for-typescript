//Q.29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favoriteFruits:string [] = ["Mango","Kiwi","Orange"]
if(favoriteFruits.includes("Mango")){
    console.log("You raelly like mangoes!")
}
if(favoriteFruits.includes("Kiwi")){
    console.log("you really like kiwies!")
}
if(favoriteFruits.includes("Orange")){
    console.log("You really like oranges!")
}
if(favoriteFruits.includes("Blueberry")){
    console.log("you really like blueberries!")
} else {
    console.log("Blueberry is not in your fruit list.")
}
if (favoriteFruits.includes("pomegranate")){
console.log("you really like pomegranates!")
} else {
console.log("Pomegranate is not in your fruit list.")
}

