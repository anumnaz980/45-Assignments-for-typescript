//Q.24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let colour1:string = "Black"
let colour2:string = "White"
console.log(colour1 == colour2)
console.log(colour1 !== colour2)
// • Tests using the lower case function
let lowerCase1:string = "Anum Naz"
let lowerCase2:string = "anum naz"
console.log(lowerCase1.toLowerCase() == "anum naz")
console.log(lowerCase1.toLowerCase() === "Anum Naz")
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let result1:number = 1
let result2:number = 2
console.log(result1 === result2)
console.log(result1 != result2)
console.log(result1 > result2)
console.log(result1 < result2)
console.log(result1 >= result2)
console.log(result1 <= result2)

// • Tests using "and" and "or" operators
let age:number = 20
console.log(age >= 20 && age == 25)
console.log(age == 20 || age == 25)
// • Test whether an item is in a array

let items:string[] = ["1st","2nd","3rd"]
console.log(items.includes("1st"))

// • Test whether an item is not in a array 
console.log(items.includes("1"))

