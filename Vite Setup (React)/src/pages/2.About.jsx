import React, { useState, useEffect } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [clickCount, setClickCount] = useState(0); // State to track the number of clicks

  const toggleShowMore = () => {
    setShowMore((hello) => !hello);
    setClickCount((prevCount) => prevCount + 1); // Increment the click count
  };

  // useEffect to log the click count
  useEffect(() => {
    console.log(`Button clicked ${clickCount} times.`);
  }, [clickCount]); // Run effect when clickCount changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>About Us</h2>
      <p>
        We are a company dedicated to providing excellent service and delivering high-quality products.
      </p>
      <button
        onClick={toggleShowMore}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      
      {showMore ? (
        <div >
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower people by providing the best possible service.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a world where quality service is available to all, and we work hard every day to make that vision a reality.
          </p>
        </div>
      ) : (
        <div>
          <img 
            src="https://tpc.googlesyndication.com/simgad/8169744333071237861" 
            alt="Our Vision" 
          />
          <h3>Our Vision</h3>
          <p>
            We envision a world where quality service is available to all, and we work hard every day to make that vision a reality.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
