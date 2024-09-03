//current date and time

let currentDate = new Date();
console.log("Current date and time: " + currentDate);

//Date , month and year
let date = new Date();
let day = date.getDate(); // Day of the month (1-31)
let month = date.getMonth() + 1; // Months are zero-indexed, so add 1
let year = date.getFullYear();
console.log("Day: " + day + ", Month: " + month + ", Year: " + year);


let dates = new Date();
let timestamp = dates.getTime();
console.log("Timestamp: " + timestamp);
