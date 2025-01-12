console.log("**************************");
console.log("Hoisting in Variables");

console.log(x);                // Output: undefined 
var x = 10; 



console.log("**************************");
console.log("Hoisting in Functions->Function Declarations");

myFunction();                  // Output: Hello from myFunction
function myFunction() {
  console.log("Hello from myFunction");
}



console.log("**************************");
console.log("Hoisting in Functions->Function Expressions");

greet();                       // TypeError: greet is not a function
var greet = function () {
  console.log("Nice to meet you!");
};


console.log("**************************");
console.log("Hoisting in Function");

console.log(myFunction);       // Output: undefined
var myFunction = function() {
  console.log("Hello from myFunction");
};


console.log("**************************");
console.log("Hoisting in Classes");

const obj = new MyClass();     // ReferenceError
class MyClass {
  constructor() {
    this.name = "Class Example";
  }
}