




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
let num=123; //number
let bi=true; //boolen also other value in boolean is false.....
let ud;  //undefined

let su="Harsh"+1+25;
let mu=11+25+"harsh";
let zu=11+"harsh";
console.log(su)
console.log(mu)
console.log(zu)

// functions

function add(a,b){
    return a+b;
}
let summ= add(3,4);
console.log("Sum using functions : ", summ);

//objects

const harsh = {
    name: "Harsh",
    
    age: 20,
    eyeColor: "blue"
  };

console.log("Value fetch using objects : \nName :",harsh.name +"\nAge: ", harsh.age+"\nEyecolor: ",harsh.eyeColor);