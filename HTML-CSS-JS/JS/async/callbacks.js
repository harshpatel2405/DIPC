//callback is simply passing function inside a function 
//any word other than callback can also be used to use callbacks fceature ......
//here i am using callbackfn

function greet(name, callbackfn) {
    console.log(`Hello, ${name}`);
    callbackfn();
}

function sayGoodbye() {
    let a=987;
    let b=785;
    console.log(a+b);
    console.log('Goodbye!');
}

// Passing the `sayGoodbye` function as a callback to `greet`
greet('Alice', sayGoodbye);



//2nd code
// Define a function that takes a callback
function performTask(callback) {
    console.log('Task is being performed...');
    // Simulate a task with setTimeout
    setTimeout(() => {
        console.log('Task is complete!');
        // Execute the callback function after the task is done
        callback();
    }, 3000); // 2 seconds delay
}

// Define the callback function
function onTaskComplete() {
    console.log('Callback function is called: Task is finished.');
}

// Call the performTask function and pass onTaskComplete as the callback
performTask(onTaskComplete);


//3rd code
// Function to add a task to the to-do list
function addTask(task, callback) {
    console.log(`Adding task: ${task}`);
    // Simulate adding the task (could be an asynchronous operation in a real app)
    setTimeout(() => {
        console.log(`Task "${task}" added to the list.`);
        // Call the callback function after the task is added
        callback(task);
    }, 1000); // Simulate a delay of 1 second
}

// Function to notify the user
function notifyUser(task) {
    console.log(`Notification: The task "${task}" has been added to your to-do list.`);
}

// Call the addTask function and pass notifyUser as the callback
addTask('Finish homework', notifyUser);


//4th code
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
 
  
  
}