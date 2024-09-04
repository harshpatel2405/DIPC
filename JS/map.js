//A Map is a collection of key-value pairs where both keys and values can be of any data type. Unlike objects, where keys are typically strings or symbols, Map allows for keys of any type, including functions, objects, and any primitive.

const myMap=new Map(); //a new map created using map constructor
//value in map can be addes using .set(method)
myMap.set('apples',500);
myMap.set('Orange',700);
myMap.set('kiwi',5700);
myMap.set('Dragon Fruit',7500);

//
console.log(myMap)

//values can be fetched using .get() method
console.log("Apples = "+myMap.get("apples"));

//typeof 
console.log(typeof myMap);


//Another method creating map
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits.has("kiwi"));
console.log(fruits.has("banana"));

for (let [key, value] of fruits) {
    console.log(key + " = " + value);
  }
  
  // Using forEach to iterate over the Map
  fruits.forEach((value, key) => {
    console.log(key + " = " + value);
  });
fruits.clear(); //removes all the element from map
console.log("After removing all the elements : "+fruits);



//roles 
const userRoles = new Map();

// Setting values
userRoles.set('admin', 'Full Access');
userRoles.set('editor', 'Edit Content');
userRoles.set('viewer', 'View Content');

// Getting a value
console.log(userRoles.get('editor'));  // Outputs: Edit Content

// Checking if a key exists
console.log(userRoles.has('admin'));  // Outputs: true

// Getting the size of the Map
console.log(userRoles.size);  // Outputs: 3

// Iterating over the Map
userRoles.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});






















































