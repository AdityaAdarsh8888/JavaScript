# Global Execution Context (GEC) in JavaScript

In JavaScript, the Global Execution Context (GEC) refers to the execution context that is created by default when the JavaScript engine starts executing our code. It is the environment in which our JavaScript code runs when it is not inside a function.

## Key Components of GEC

- **`this` keyword**:  
  Inside the GEC, `this` usually refers to the `window` object in a browser environment.
- **Variables**:  
  All variables declared outside of any function (using `var`, `let`, or `const`) belong to the GEC.
- **Functions**:  
  Functions defined globally also reside within the GEC.

## Code Example

```javascript
// Global variables

var a = 1;          // Declared with 'var', accessible globally and hoisted.
let b = 2;          // Declared with 'let', block-scoped to the GEC.
const c = 3;        // Declared with 'const', block-scoped to the GEC and immutable.

{
    // New block scope begins here
    
    var d = 40;     // Declared with 'var', not block-scoped. Will be hoisted to the global scope.
    b = 20;         // Reassigning the value of the global variable 'b' (allowed as 'b' was declared with 'let').
    const c = 30;   // Declaring a new block-scoped constant 'c', which shadows the global 'c'.
    e = 40;         // Implicit global variable. Not recommended; it becomes a property of the global object.

    console.log("Inside a scope");
    console.log(a); // Output: 1 (accessing global 'a').
    console.log(b); // Output: 20 (reassigned value of the global 'b').
    console.log(c); // Output: 30 (block-scoped 'c', shadows the global 'c').
    console.log(d); // Output: 40 (declared with 'var', accessible globally).
    console.log(e); // Output: 40 (implicitly created global variable).
}

console.log("Outside a scope");
console.log(a);     // Output: 1 (global 'a').
console.log(b);     // Output: 20 (reassigned global 'b' inside the block).
console.log(c);     // Output: 3 (global 'c', unaffected by the block-scoped 'c').
console.log(d);     // Output: 40 ('var' variable, hoisted to the global scope).
console.log(e);     // Output: 40 (implicitly created global variable).
console.log("end");
```

## How GEC Works

1. When our script starts, the GEC is created.
2. All variables and functions declared globally are added to the GEC's memory.
3. The code is then executed line by line.
4. Once all code in the GEC has finished executing, the GEC is destroyed.

## Key Points

- The GEC is fundamental to understanding how JavaScript code executes.
- It provides the initial context for all other code within our script.
- Understanding the GEC helps you better grasp variable scope, function execution, and how JavaScript manages memory.

## In Summary

The Global Execution Context is the foundational environment for our JavaScript code. It holds variables, functions, and the `this` keyword, providing the necessary context for our code to run successfully.