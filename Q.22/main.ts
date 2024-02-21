//Q.22
//if you have not receive an array index error in one of your programs yet.try to make one happen.
//Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.

type stu = {name:string,age:number,school:string,class:number,sub:string[]}
let student:stu={
  name:"Muhammad",
  age:4,
  school:"Aisha Bawany O levels",
  class:1,
  sub:["Engish","urdu","Math","Computer","Art"]
}
console.log(student.sub[5])
console.log(student.sub[2])