import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      {submitted ? (
        <div style={styles.thankYouMessage}>
          {/* <h3>Thank you for your message, {formData.name}!</h3>
          <p>
            We will get back to you at <strong>{formData.email} </strong>soon.
          </p>
          <strong>
            Remark : <span> {formData.message} </span>
          </strong> */}   {/* Direct Printing */}
          <pre style={styles.jsonFormat}>
            {JSON.stringify(formData, null, 2)} {/*Json format data Printing*/}
          </pre>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Your Name"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Your Email"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Your Message"
            />
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

// Internal CSS Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    color: "#333",
    marginBottom: "20px",
  },
  thankYouMessage: {
    color: "#28a745",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formGroup: {
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    height: "100px",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Contact;
