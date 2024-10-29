import React from "react";

const MyComponent = () => {
  let name = "Harsh";
  const handleClick = () => {
    console.log(`Hello ${name}`); //used template string in js to fetch value.
  };

  const alertClick = () => {
    alert(`Hello ${name}, You clicked buttton 1`);
  };

  const buttonClick = () => {
    console.log(`Hello ${name}, How are you ??`);
  };

  const disableClick = (e) => {
    e.target.disabled = true;
    e.target.innerText = "Disabled";
    console.log("Button disabled.");
  };
  return (
    <div>
      <h1>This is Click Events .</h1>

      <h1>1. Single Click Event </h1>
      <button onClick={alertClick}>Alert on Click (Single)! 😁</button>

      <h1>2. Getting in Console</h1>
      <button onClick={buttonClick}>Go to Console 🤒</button>

      <h1>3. Disabling the button</h1>
      <button onClick={(e) => disableClick(e)}>Disable Now !!!🤑</button>
    </div>
  );
};

// function myComponent(){
//     let name ="harsh";
//     return(
//         <h1>{name}</h1>
//     );
// }

export default MyComponent;
