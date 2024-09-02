function myFunc(){
    alert("Hi there!"); //onclick fuction is used which calls while being clicked !!!
}

//Day 5 : Events 
function mouse(){
    let a=prompt("Enter your name everytime you move over this button : \n Enter name below: ");
    alert("Hello "+a+"\n Now dont move over it again and again");
}

// mouseovr.eventlistener("mouseover",function);

function handleMouseOut() {
    document.getElementById("output").innerHTML = "Mouse has left the area!";
}

// Add the onmouseout event listener
document.getElementById("hoverArea").addEventListener("mouseout", handleMouseOut);

