// src/App.js
import React from 'react';
import Header from './components/Header'; // Adjust the path if needed

const App = () => {
  const appStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const tableStyle = {
    width: '100%',
    border:'1px solid black',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '1em',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const thStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    backgroundColor: '#007bff',
    color: 'white',
     border: '1px solid black',
    // font:'bold'
  };

  const tdStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid black',
    border: '1px solid black'
  };

  const tbodyRowStyle = {
    backgroundColor: '#f2f2f2',
  };

  const hoverStyle = {
    backgroundColor: '#f1c40f',
    color: '#fff',
  };

  return (
    <div style={appStyle}>
      <Header title="Welcome to My Site" subtitle="Your one-stop destination" />
      <h1>Hello, Welcome!</h1>
      <p>We are glad to have you here.</p>
      <h1>Go Back!</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Class</th>
            <th style={thStyle}>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr style={tbodyRowStyle}>
            <td style={tdStyle}>Harsh</td>
            <td style={tdStyle}>20</td>
            <td style={tdStyle}>10th</td>
            <td style={tdStyle}>98</td>
          </tr>
          <tr style={tbodyRowStyle}>
            <td style={tdStyle}>Sara</td>
            <td style={tdStyle}>21</td>
            <td style={tdStyle}>12th</td>
            <td style={tdStyle}>85</td>
          </tr>
          <tr style={tbodyRowStyle}>
            <td style={tdStyle}>Amit</td>
            <td style={tdStyle}>22</td>
            <td style={tdStyle}>BSc</td>
            <td style={tdStyle}>90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
