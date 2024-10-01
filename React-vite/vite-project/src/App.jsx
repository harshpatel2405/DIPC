// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormComponent from './Practice_Components/formComponent';
import ToDoList from './Components/todolist';
  
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar /> {/* Navbar outside of Routes */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
        
        {/* <FormComponent /> Placed FormComponent outside the Routes */}
        <Footer /> {/* Footer outside of Routes */}
      </Router>
    );
  }
}

export default App;
