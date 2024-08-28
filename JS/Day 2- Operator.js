//Day 2 : 23/08/2024   : OPERATORS
console.log("Day 2 : OPERATORS")

// 1. Arithmetic operator
console.log("\n");
console.log("1. Arithmetic operator");
let a =48;
let b = 36;
let c=75;
let d=97;

console.log(" a : ", a);
console.log(" b : ", b);
console.log(" c : ", c );
console.log(" d : ", d );
console.log("Addition : ",(a+b));
console.log("Subtraction : ",a-b);
console.log("Multiplication : ",a*b);
console.log("Division : ",a/b);
console.log("Modulus : ", a%b);
console.log("Exponents (5^2) : ", 5**2);
console.log("Pre - Increment (a=48) : ",++a);
console.log("Post - Increment (b=36) : ",b++);
console.log("Post - Increment (b=36)(b has increased now ) : ",b);
console.log("Pre - Decrement (c=75) : ",--c);
console.log("Post - Decrement (d=97) : ",d--);
console.log("Post - Decrement (d=97)(d has decreased  now ) : ",d);


console.log("\n");
console.log("2. Assignment operator");

let e = 10;
let f = 5;
let g = 2;

console.log(" e : ", e);
console.log(" f : ", f);
console.log(" g : ", g );

console.log("e = f : ", e=f);
console.log("e += f : ", e += f);
console.log("e -= f : ", e-=f);
console.log("e *= f : ", e*=f);
console.log("e /= f : ", e /= f);
console.log("e %= f : ", e %= f);
console.log("e **= g : ", e **= g);



console.log("\n");
console.log("3. Bitwise Assignment Operators");
let h = 10; //1010
let i = 2; //0010

console.log(" h : ", h);
console.log(" i : ", i);

console.log("h <<= i : ", h <<= i); // Left shift: h = h << i (10 << 2) = 40 (Binary: 101000)
console.log("h >>= i : ", h >>= i); // Right shift: h = h >> i (40 >> 2) = 10 (Binary: 1010)
console.log("h >>>= i : ", h >>>= i); // Unsigned right shift: h = h >>> i (10 >>> 2) = 2 (Binary: 10)


console.log("\n");
console.log("4. Bitwise Assignment Operators");
let j = 45;
let k = 78;

console.log(" j : ", j);
console.log(" k : ", k);


console.log("j &= k : ", j &= k);
console.log("j ^= k : ", j ^= k);
console.log("j |= k : ", j |= k);


console.log("\n");
console.log("4. Logical Assignment Operators");
let l = 45; // or any other boolean value
let m = 36; // or any other boolean value


console.log(" l : ", l);
console.log(" m : ", m);

console.log("l &&= m : ", l &&= m);
console.log("l ||= m : ", l ||= m);
console.log("l ??= m : ", l ??= m);

//Write a js program to check if a number is divisible by 2 and 3.

function checkDivisible(num){
    if(num%2==0 && num%3==0){
        console.log(num," is divisible by 2 and  3");
    }
    else{
        console.log(num," is not divisible by 2 and 3");
    }
}
console.log("\n");
console.log("Write a js program to check if a number is divisible by 2 and 3");
let num = 6;
checkDivisible(num);


//Write a js program to check if a number is divisile by 2 or 3.

function checkDivisible(numm){
    if(numm%2==0 || numm%3==0){
        console.log(numm," is divisible by 2 or  3");
    }
    else{
        console.log(numm," is not divisible by 2 or  3");
    }
}
console.log("\n");
console.log("Write a js program to check if a number is divisile by 2 or 3");



let numm = 7;
checkDivisible(numm);



function age(age){
    if(age>=18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}
console.log("\n");  
console.log("Write a js program to check if a person is eligible to vote"); 
let agee = 19;
age(agee);
