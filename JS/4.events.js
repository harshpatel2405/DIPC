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

    myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";   // Changes the background color to tomato
        event.target.textContent = "Ouch! 😒";           // Changes the text content inside the box
    });
});

