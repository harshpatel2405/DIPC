const name1 = ['Vasu', 'Raj', 'Dev', 'Harsh']; // array of strings

const profile = [];
profile[0]= "Node JS";
profile[1]= "React JS";
profile[2]= "DBA";  //Another way of declaring array.
console.log("Before: "+profile[2]);

//Now if I want to change any element I can directly change it .
profile[2]="Spring Boot"
console.log("After: "+profile[2]);

const cars1 = [
    "Audi",
    "BMW",
    "Lamborghini"
]; // arrays can also be created like this



console.log("\n*Array of strings called using while loop.*");
console.log("Array of strings cars : ["+cars1+"]")
console.log("Directly accessing last element : "+cars1[2])
let j = 0;
while (true) {
    if (j >= cars1.length) {
        break; // Corrected from 'return' to 'break'
    }
    console.log("cars1[" + j + "] = " + cars1[j]);
    j++;
}

console.log("\nArray of numbers called using for loop.");
const num1 = [1, 2, 3]; // array of numbers.
console.log("Array of numbers : "+num1)
for (let i = 0; i < num1.length; i++) { // Added 'let' before 'i'
    console.log("num1[" + i + "] = " + num1[i]);
}

console.log("\nGetting last element of array.");
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array of Fruits1 : ["+fruits1+"]")
let updated_fruits = fruits1[fruits1.length - 1]; // Corrected to get the last element
console.log(updated_fruits);
console.log("Last element is: [" + updated_fruits+"]");

// Reversing an array
console.log("\nReversing the array.");
const fruits2 = ['banana', 'orange', 'apple'];
console.log("Array of Fruits2 : ["+fruits2+"]")
let reversedFruits = fruits2.reverse(); //using .reverse() function of array
console.log("Reversed array: [" + reversedFruits+"]");

// Merging two arrays
console.log("\nMerge the array.");
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log("Array of array1 : ["+array1+"]")
console.log("Array of array2 : ["+array2+"]")
let combinedArray = array1.concat(array2); //concat function
console.log("Combined array: [" + combinedArray+"]");

// Removing last element of an array
console.log("\nRemoving last element of array.");
const fruits3 = ['banana', 'orange', 'apple'];
console.log("Array of Fruits3 : ["+fruits3+"]")
let lastFruit = fruits3.pop(); // Changed variable name to 'lastFruit'
console.log("Fruit removed: " + lastFruit);
console.log("Updated array: [" + fruits3+"]");

fruits3.push("Kiwi");
const added_fruit = fruits3[fruits3.length - 1]; // Access the last element
console.log("\nFruit added using push : " + added_fruit);
console.log("Updated array: [" + fruits3 + "]");


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(1,2 , "Lemon", "Kiwi");  //The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
console.log("Array of fruits4: [" + fruits4 + "]");

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array of fruits5 (Before): [" + fruits5 + "]");
fruits5.splice(0, 1);
console.log("Array of fruits5 'splice(0, 1)'(After): [" + fruits5 + "]");

const fruits6 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits6.indexOf("Apple") + 1;
console.log("\nArray of fruits6 : ["+fruits6+"]");
console.log("Position of apple : "+position);


const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log("\nArray of fruits7 : ["+fruits7+"]");
console.log("Return true if mango is present or not : "+fruits7.includes("Mango")); 


//find():Returns the value of the first element that satisfies the provided testing function.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);
console.log("\nArray of numbers : ["+numbers+"]");
console.log("Element >10: "+found ); // Output: 12

//findIndex(): Returns the index of the first element that satisfies the provided testing function.
const numbers1 = [5, 12, 8, 130, 44];
const index = numbers1.findIndex(element => element > 10);
console.log("\nArray of numbers : ["+numbers1+"]");
console.log("Element >10: "+index ); // Output: 1

const demo = ["Jan", "Feb", "Mar", "Apr"];
console.log("\nArray of numbers2 : ["+demo+"]");
demo.sort();
console.log("Array of demo (sorted) : ["+demo+"]");

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});



