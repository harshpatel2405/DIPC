//Classes provide a way to create objects and handle inheritance in a more structured and clear manner. Classes were introduced in ECMAScript 6 (ES6) and are syntactical sugar over JavaScript's prototype-based inheritance.

//structure
// class classname{
//     constructor(para1, para2){
//         //body
//     }
// }

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year; //here 'this' is used as it indicates present class and is even used in the object....
  }
}

console.log(typeof Car); //function since it resembles constructor as a function but its properties can be fetched and used using objects and ar important for oops features which are real world scenarios.  

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019); //updated value in class 'Car'
console.log(Car);
console.log(myCar1);


//here, 
class Cars {
  constructor(name, year) {
    this.name = name;
    this.year = year; // Basic class with a constructor
  }
  age(a,b) {
    const date = new Date();
    return date.getFullYear() - this.year;     //another method inside same class
  }
}
const myCar = new Cars("Ford", 2014);   //adding values 
console.log("My car is " + myCar.age() + " years old."); //here element called using object property 




// Define the parent class
class Carse {
  constructor(brand) {
      this.carname = brand;   
  }

  present() {
      return 'I have a ' + this.carname;  //a simple function where a retutrn statement is used
  }
}

// Define the child class that inherits from Car
class Model extends Carse {
  constructor(brand, mod) {
      super(brand); // Call the parent class constructor
      this.model = mod; //prototype/feature for child class
  }

  show() {
      return this.present() + ', it is a ' + this.model;
  }
}

// Create an instance of the Model class
const myCars = new Model("Ford", "Mustang");

// Display the result in the console
console.log(myCars.show());
//here  show will call present (), prints it stement and then prints it own complete statement
