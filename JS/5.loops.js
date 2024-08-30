//Day 5:loops 

//for  : for (initialization; condition; increment/decrement) { //code to be executed }
//while : while (condition) { //code to be executed }
//do while  : do { //code to be executed } while (condition);
//for of : for (variable of iterable) { //code to be executed }
//for in : for (variable in object) { //code to be executed }

//for loop
//print 0 to 5
for (let i=0;i<=5;i++){
    console.log(i);
}

//sum of first 10 natural numbers
let sum=0;
for (let i=1;i<11;i++){
    sum+=i;
}
console.log("Sum of first 10 natural numbers is : ",sum);

//multiplication table
for (let i=1;i<11;i++){
    console.log(5,"*" ,i,"=",5*i);
}
//even numbers
for (let i=1;i<20;i++){
    if(i%2==0){
        console.log(i,"is even");
    }
}

//factorial of a number

let fact=1;
for(i=1;i<6;i++){
    fact*=i;
}
console.log("Factorial of 5 is : ",fact);

//prime numbers between 1 to 100
