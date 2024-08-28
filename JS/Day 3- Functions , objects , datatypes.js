// Day 3 : Datatypes , functions

// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

let str="hello";  //string
let nummmm=123; //number
let bi=true; //boolen also other value in boolean is false.....
let ud;  //undefined

let su="Harsh"+1+25;
let mu=11+25+"harsh";
let zu=11+"harsh";
console.log(su)
console.log(mu)
console.log(zu)

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log("Object : ",person);
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("Array : ",cars);
// Date object:
const date = new Date("2022-03-25");
console.log("Date : ",date);
// functions

function add(a,b){
    return a+b;
}
let summ= add(3,4);
console.log("Sum using functions : ", summ);


function onetonine(){
    for(let i=1;i<10;i++){
        console.log(i);
    }
}
console.log("Numbers from 1 to 9 : ",onetonine());



//objects

const harsh = {
    name: "Harsh",
    
    age: 20,
    eyeColor: "blue"
  };

console.log("Value fetch using objects : \nName :",harsh.name +"\nAge: ", harsh.age+"\nEyecolor: ",harsh.eyeColor);

const para={
    car:"BMW",
    model:"X5",
    year:2021,
    color:"black",
    price: 5000000,
    owner:"Harsh",
    city:"Ahmedabad",
    state:"Gujarat",
    country:"India"
}
console.log("\nDirectly printing objects : \n",para);
console.log("Objects and their working");
console.log("Car : ",para.car);
console.log("Model : ",para.model); 
console.log("Year : ",para.year);
console.log("Color : ",para.color);
console.log("Price : ",para.price);
console.log("Owner : ",para.owner);
console.log("City : ",para.city);
console.log("State : ",para.state);
console.log("Country : ",para.country);

 // Create an Object
 const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("\nUsing Array : \n")
// Create an Array
const myArray = Object.values(person);//Object.values() method returns an array of a given object

console.log("Array : ",myArray);


