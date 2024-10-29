// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/1.Home'
import About from './pages/2.About';
import Contact from './pages/3.Contact';
// import FormComponent from './Practice_Components/formComponent';
import ToDoList from './pages/4.todolist';
import Timer from './pages/5.Timer';
// import StateComponent from './Practice_Components/stateComponent';
import Counter from './pages/6.Practice-1_Counter';
// import HelloComponent from './Practice_Components/useeffect';


//useContext
import Main from './pages/7.useContext';
// import Admin from './pages/8.Admin';
  
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
          <Route path="/timer" element={<Timer />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Main/>
        
        {/* <StateComponent/> */}
        {/* <FormComponent />  Placed FormComponent outside the Routes */}
        <Footer /> {/* Footer outside of Routes */}
      </Router>
    );
  }
}

export default App;
