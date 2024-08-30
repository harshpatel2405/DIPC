// Day 4 : Conditionals

// Making an ATM

let balance =10000;
let pin=4587;
let upin=prompt("Please enter your pin", "");
console.log("You entered : ",upin);
if(upin==pin){
    console.log("You are successfully authorised .......");
    console.log("\n1.Check Balance\n2.Withdraw\n3.Apply for loan\n4.Deposit\n5.Change pin");
    let uval=prompt("Please enter operation you want to do ","");

    switch(uval){
        case "1":console.log("Your Balance is :",balance);break;
        case "2":console.log("Your amount will come in few seconds .....\n\nYour remaining balance is :",pin);break;
        case "3":console.log("Please visit bank branch !");break;
        case "4":console.log("Service not unavailable..");break;
        case "5":console.log("Please visit bank branch !.......");break;
        default:console.log("Wrong Input, Refresh page again......")
    }
}
else{
    console.log("Wrong Input, Refresh page again......");
}
let co=confirm("hello harsh" );
console.log( co);
























