// App.js
import React from 'react';
import Navbar from './components/header'; //always name should be capital
import Footer from './components/footer';

// Child component that receives props
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    );
}
        



export default App;
