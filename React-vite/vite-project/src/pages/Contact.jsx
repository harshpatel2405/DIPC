import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      {submitted ? (
        <div>
          <h3>Thank you for your message, {formData.name}!</h3>
          <p>We will get back to you at {formData.email} soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ margin: '10px', padding: '5px' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ margin: '10px', padding: '5px' }}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ margin: '10px', padding: '5px' }}
            />
          </div>
          <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
