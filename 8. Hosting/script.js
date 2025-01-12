console.log(x);                // Output: undefined 
var x = 10; 


myFunction();                  // Output: Hello from myFunction
function myFunction() {
  console.log("Hello from myFunction");
}


greet();                       // TypeError: greet is not a function
var greet = function () {
  console.log("Nice to meet you!");
};


console.log(myFunction);       // Output: undefined
var myFunction = function() {
  console.log("Hello from myFunction");
};


const obj = new MyClass();     // ReferenceError
class MyClass {
  constructor() {
    this.name = "Class Example";
  }
}