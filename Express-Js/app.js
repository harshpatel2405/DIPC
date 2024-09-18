// Import the Express module
const express = require('express');


// Create an instance of an Express app
const app = express();

// Define a route for the root URL ('/')

// Start the server and listen on a specific port
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
