import React, { useState } from "react";
import './stateComponent.css'; // Import the CSS file

function StateComponent() {
    const [name, setName] = useState("Guest");
    const [mathsMarks, setMathsMarks] = useState(0);
    const [scienceMarks, setScienceMarks] = useState(0);
    const [englishMarks, setEnglishMarks] = useState(0);

    const updateName = () => {
        setName("Harsh Patel");
    };

    const increaseMathsMarks = () => {
        setMathsMarks(mathsMarks + 1);
    };

    const increaseScienceMarks = () => {
        setScienceMarks(scienceMarks + 1);
    };

    const increaseEnglishMarks = () => {
        setEnglishMarks(englishMarks + 1);
    };

    return (
        <div className="container">
            <h1>2. State Management</h1>
            <h1>Name: {name}</h1>
            <button className="button" onClick={updateName}>Set Name</button>

            <h1>Increase marks in each Subject</h1>

            <div className="subject">
                <h2>Maths: {mathsMarks}</h2>
                <button className="button" onClick={increaseMathsMarks}>Increase Maths</button>
            </div>

            <div className="subject">
                <h2>Science: {scienceMarks}</h2>
                <button className="button" onClick={increaseScienceMarks}>Increase Science</button>
            </div>

            <div className="subject">
                <h2>English: {englishMarks}</h2>
                <button className="button" onClick={increaseEnglishMarks}>Increase English</button>
            </div>
        </div>
    );
}

export default StateComponent;
