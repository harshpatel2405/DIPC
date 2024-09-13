// APIs (Application Programming Interfaces) are ways of interacting with other software systems.
// Using an API, I can easily interact with various data or services.
// For example, to integrate a payment gateway, only an API key from the gateway provider is required.
// APIs are useful for enabling interaction and integration with other services.


//Types of API

// 1.REST 
// 2.SOAP API 
// 3.GraphQL
// 4.Websocket


//methods used in APIs
// 1. GET: Retrieve data.. 
// Purpose: Retrieve data from the server.
// Usage: Used to fetch data without modifying it.

fetch('https://api.example.com/users/1', {
    method: 'GET'//get method is used
})
.then(response => response.json())
.then(data => console.log(data));







// 2. POST: Create a new resource.
// Purpose: Send data to the server to create a new resource.
// Usage: Used to submit data, such as creating a new record in a database


fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
    })
})
.then(response => response.json())
.then(data => console.log(data));





// 3. PUT: Update/replaces a resource.
// 4. PATCH: Partially update a resource.
// 5. DELETE: Remove a resource.
// 6. OPTIONS: Get communication options.
// 7. HEAD: Get metadata (headers) without body.
