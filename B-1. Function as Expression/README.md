# Function Expressions in JavaScript

Function expressions are a powerful way to define functions in JavaScript. They provide more flexibility than traditional function declarations and can be used in a variety of situations.

## Key Features

* **Syntax:** Defined using the `function` keyword, followed by parentheses containing parameters and curly braces containing the function body.
* **Anonymous functions:** Can be anonymous, meaning they don't have a name and are useful for one-time use or passing as arguments.
* **Named functions:** Can also be named for reusability.
* **Hoisting:** Not hoisted, meaning they are not available until defined. You cannot use a function expression before it is defined.
* **Uses:** Often used in callbacks, closures, and immediately-invoked function expressions (IIFEs).

## Examples

Here are some examples of how function expressions can be used in JavaScript:

```javascript
// Anonymous function expression
const sum = function(a, b) {
  return a + b;
};

console.log(sum(2, 3)); // 5

// Named function expression
const multiply = function myFunction(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6

// Immediately-invoked function expression (IIFE)
(function() {
  console.log('Hello, world!');
})();