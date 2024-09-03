const name = ['John', 'Doe', 'Jane', 'Doe']; // array of strings
const cars = [
    "Saab",
    "Volvo",
    "BMW"
]; // arrays can also be created like this

console.log("Array of strings called using while loop.");
let j = 0;
while (true) {
    if (j >= cars.length) {
        break; // Corrected from 'return' to 'break'
    }
    console.log("cars[" + j + "] = " + cars[j]);
    j++;
}

console.log("\n\nArray of numbers called using for loop.");
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array of numbers
for (let i = 0; i < num.length; i++) { // Added 'let' before 'i'
    console.log("num[" + i + "] = " + num[i]);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let updated_fruits = fruits[fruits.length - 1]; // Corrected to get the last element
console.log(updated_fruits);
console.log("Last element is: " + updated_fruits);

// Reversing an array
const froot = ['banana', 'orange', 'apple'];
let reversedFruits = froot.reverse();
console.log("Reversed array: " + reversedFruits);

// Merging two arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let combinedArray = array1.concat(array2);
console.log("Combined array: " + combinedArray);

// Removing last element of an array
const fruitsy = ['banana', 'orange', 'apple'];
let lastFruit = fruitsy.pop(); // Changed variable name to 'lastFruit'
console.log("Fruit removed: " + lastFruit);
console.log("Updated array: " + fruitsy);



