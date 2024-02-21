//Q.21
//They think of something you could store in a Typescript object.
//Write a program that creates Objects containing these items.

type Restu = {name:string,location:string,items:number,deals:number,perPerson:number,menuList:string[],taste:string,
  deliveryService:string,time:number|string
}
let resturant:Restu = {
  name:"Sultanat",
  location:"Stadium road",
  items:45,
  deals:25,
  perPerson:3000,
  menuList:["Chinese","B-B-Q","Fast Food","Arabic food","Sea Food","Biryani"],
  taste:"Delicious",
  deliveryService:"yes",
  time:"30 minutes",
  }
console.log(resturant)