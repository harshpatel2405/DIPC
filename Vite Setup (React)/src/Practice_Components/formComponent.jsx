import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    const [submitted, setSubmitted] = useState(); // To track form submission

    const handleForm = (e) => {
        e.preventDefault(); // Prevent form reload on submit
        console.log("Name : " + name + "\nInterested Subject : " + interest + "\nTNC Checked : " + tnc);

        // Show the success message and reset form fields
        setSubmitted(true);
        
    };

    return (
        <div className="form-handle">
            <h1>Form Handling in React</h1>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name} // Bind value to input
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

                <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Maths</option>
                    <option>Science</option>
                    <option>S.S</option>
                </select><br /><br />

                <input
                    type="checkbox"
                    checked={tnc}
                    onChange={(e) => setTnc(e.target.checked)}
                /> 
                <strong>Accept terms and conditions</strong><br /><br />

                <button type="submit" className="button_submit">
                    Submit 🤣
                </button>
            </form>

            {/* Success message displayed after submission */}
            {submitted && (
                <div className="success-message">
                    <h3>{name}, your application for {interest} is successfully placed!</h3>
                </div>
            )}
        </div>
    );
};

export default FormComponent;
