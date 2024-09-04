let name='harsh';   //single quote
let name1="harsh";  // double quote

console.log(name,"\n",name1);

let text = "My name is 'Harsh'";
let text2 = 'My name is "Harsh" ';

console.log(text,"\n",text2);
console.log(text.length);

let text3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text3); //give output as it is ;

let x="john";
let y = new String("John");
console.log(typeof(x));
console.log(typeof(y));
console.log(x==y);


let text5 = "HELLO WORLD";
let char = text5.charAt(0);
console.log(char)

const name6 = "W3Schools";
let letter = name6.at(2);
console.log(letter)

let text7 = "Please locate where 'locate' occurs!";
let index = text7.indexOf("locate");
console.log(index);


function highlight(strings, ...values) {
    return strings.reduce((accumulator, part, index) => {
      const value = values[index] ? `<b>${values[index]}</b>` : '';
      return `${accumulator}${part}${value}`;
    }, '');
  }
  
const name9 = "Alice";
const age = 30;
const html = highlight`Hello, my name is ${name9} and I am ${age} years old.`;
console.log(html);  // Outputs: Hello, my name is <b>Alice</b> and I am <b>30</b> years old.

  








