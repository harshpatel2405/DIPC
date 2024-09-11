function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Step 1 complete'), 1000);
    });
}

function step2(result) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(result + ', Step 2 complete'), 2000);
    });
}

step1()
    .then(result => step2(result))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error(error));
    

//2nd code

// Function to display the message in the console
const myDisplayer = (message) => {
    console.log(message);
  };
  
  // Function to fetch data from a URL and return a Promise
  const fetchData = () => {
    return fetch("myacar.html")
      .then(response => {
        if (response.ok) {
          return response.text(); // Return the response text if successful
        } else {
          throw new Error("File not Found"); // Throw an error if the status is not OK
        }
      });
  };
  
  // Call the fetchData function and handle the Promise
  fetchData()
    .then(value => myDisplayer(value))  // Display the fetched data
    .catch(error => myDisplayer(error.message));  // Display the error message
  

//Promises are like ordering food in a restaurant. 
// You place your order (the asynchronous task), 
// and then you wait until your food is ready (the Promise resolves).
//  You can decide what to do when the food comes (use .then()), 
//  or if there’s a problem, handle it (use .catch()).

//async/await is like waiting for your food in the kitchen. 
// You stay there and watch everything until your food is ready. 
// It makes you feel like things are happening step by step 
// (even though you're still waiting, like with Promises).


// Create a simple Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Try changing this to false to simulate an error
  
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Something went wrong.");
    }
  }, 2000); // Simulates a 2-second delay
});

// Handle the Promise
myPromise
  .then(result => {
    console.log(result);  // If resolved, this runs
  })
  .catch(error => {
    console.log(error);   // If rejected, this runs
  });



  // Function that simulates waiting for a message
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello ! Hi there, How are you ?");  // The message arrives after 2 seconds
    }, 2000);  // 2 seconds delay
  });
}

// Async function to handle the message
async function showMessage() {
  console.log("Waiting for the message...");
  
  const message = await getMessage();  // Wait for the message to arrive
  
  console.log(message);  // Display the message once it arrives
}

// Call the async function
showMessage();
