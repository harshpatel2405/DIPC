function myFunc(){
    alert("Hi there!"); //onclick fuction is used which calls while being clicked !!!
}

//Day 5 : Events 
function mouse(){
    let a=prompt("Enter your name everytime you move over this button : \n Enter name below: ");
    alert("Hello "+a+"\n Now dont move over it again and again");
}

// mouseovr.eventlistener("mouseover",function);
document.addEventListener('DOMContentLoaded', () => {
    const myBox = document.getElementById("myBox");


// Variable to track the current state
let isClicked = false;

myBox.addEventListener("click", event => {
    if (!isClicked) {
        // First click
        event.target.style.backgroundColor = "tomato";   // Changes the background color to tomato
        event.target.textContent = "Click Me! 😊";       // Changes the text content inside the box
        isClicked = true;
    } else {
        // Subsequent clicks
        event.target.style.backgroundColor = "lightcoral";   // Changes the background color to lightcoral
        event.target.textContent = "Ouch! 😒";               // Changes the text content inside the box
        isClicked = false;
    }
});

myBox.addEventListener("mouseover", event => {
    if (!isClicked) {
        // Only change background color and text if not clicked
        event.target.style.backgroundColor = "greenyellow";   // Changes the background color to greenyellow
        event.target.textContent = "Don't do zat 😔";           // Changes the text content inside the box
    }
});
});

//

