// Syntax

condition ? expressionIfTrue : expressionIfFalse;


// Basic Program
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);   // Output: Yes


// Using Ternary Operator inside a function
function checkEvenOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10));  // Output: Even
console.log(checkEvenOdd(9));   // Output: Odd


// Multiple Conditions
let score = 75;
let grade = score >= 90 ? "A" 
           : score >= 80 ? "B" 
           : score >= 70 ? "C" 
           : "F";

console.log(`Grade: ${grade}`);  // Output: C


// Conditional Assignment
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome" : "Please log in.";
console.log(message);            // Output: Welcome


// Using Array or Object
let userType = "admin";
let access = userType === "admin" ? ["create", "read", "update", "delete"] : ["read"];

console.log(access);             // Output: ["create", "read", "update", "delete"]