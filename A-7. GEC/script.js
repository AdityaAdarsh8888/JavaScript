// Global variables declared using var, let, and const

var name = "Aditya Adarsh";             // 'name' becomes a property of the global object (e.g., window in browsers).
let age = 21;                           // 'age' is scoped to the GEC but does not become a property of the global object.
const city = "New Delhi";               // 'city' is also scoped to the GEC but does not become a property of the global object.


// Function declaration in the global execution context
function greet() {
  console.log("Hello, " + name);        // Accessing the global variable 'name' within the function
}


// Accessing 'this' in the global execution context
console.log(this);                      // In browsers, 'this' refers to the global object (window).

greet();                                // Calls the 'greet' function and outputs: Hello, Aditya Adarsh