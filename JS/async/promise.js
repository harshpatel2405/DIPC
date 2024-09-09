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
    return fetch("mycar.html")
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
  