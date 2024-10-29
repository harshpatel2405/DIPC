// Before: importing createRoot from react-dom
// import { createRoot } from "react-dom";

// After: importing createRoot from react-dom/client
import { createRoot } from "react-dom/client";
import App from './App'; // Make sure to import your main App component

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

// Render your App component
root.render(<App />);
