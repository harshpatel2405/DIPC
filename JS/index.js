// Day 1 (22/08/2024)  : Variables and Keywords 

// var , let and const

//var can be called again and again as it is 
console.log("var keyword");
var x=55;
console.log("First x = ",x);

var x=44;
console.log("Second x = ",x);

console.log("let Keyword");
let y=78;
console.log("First y = ",y);

// let y=44;
// console.log(y); // here y will not print as it is alrady been declared and used.

console.log("Const Keyword");
const pi=3.14;
// let pi=3.14;  Here pi cannot be declared again and cannot be updated as its value is now fixed....
console.log("First pi = ",pi)




//Day 2 : 23/08/2024   : OPERATORS

// 1. Arithmetic operator

let a =48;
let b = 36;
let c=75;
let d=97;
console.log("\n");
console.log("1. Arithmetic operator");
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
let i = 2; //010

console.log("h <<= i : ", h <<= i); // Left shift: h = h << i (10 << 2) = 40 (Binary: 101000)
console.log("h >>= i : ", h >>= i); // Right shift: h = h >> i (40 >> 2) = 10 (Binary: 1010)
console.log("h >>>= i : ", h >>>= i); // Unsigned right shift: h = h >>> i (10 >>> 2) = 2 (Binary: 10)


console.log("\n");
console.log("4. Bitwise Assignment Operators");
let j = 45;
let k = 78;

console.log("j &= k : ", j &= k);
console.log("j ^= k : ", j ^= k);
console.log("j |= k : ", j |= k);


console.log("\n");
console.log("4. Logical Assignment Operators");
let l = 45; // or any other boolean value
let m = 36; // or any other boolean value

console.log("l &&= m : ", l &&= m);
console.log("l ||= m : ", l ||= m);
console.log("l ??= m : ", l ??= m);


