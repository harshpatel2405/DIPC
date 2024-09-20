import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return <h2>I am a normal {this.props.model}  of with 1.5 million $.</h2>;
//     }
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
  
//   root.render(<Car model="Mustang"/>);

/* class Car extends React.Component {
    render() {
      return <h2>I am a Car!</h2>;
    }
  }
  
  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </div>
      );
    }
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);*/

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(<App />); // Use the render method on the root
