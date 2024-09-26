


function Button(){
    
    let count=0;
    const handleClick=(name ) =>{
    if(count<3){
        count++;
        console.log(`${name} you clicked ${count} times`)
    }
    else if(count>=3 && count <10){
        console.log(`${name}, stop clicking me ,i am getting annoyed.🤒`)
    }

    if(count==10){
        alert("FBI is after you...")
    }
}
    return(
        <button onClick={ () => handleClick("Harsh") }>Click Me !😁</button>
        //here if handleclick is not worked with arrow , it will invoke automatically....
    );
}

export default Button;