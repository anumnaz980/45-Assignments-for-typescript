//Q.44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items: string[]) {
    console.log("Sandwich Order:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("Turkey", "Cheese", "Lettuce","Mayonnaise");
orderSandwich("Ham", "Swiss Cheese","Mustard");
orderSandwich("Tuna Salad","Peanut Butter");



