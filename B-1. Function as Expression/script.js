// Anonymous function expression
const sum = function(a, b) {
    return a + b;
};

console.log(sum(2, 3));                 // Output: 5
  

// Named function expression
const multiply = function myFunction(a, b) {
    return a * b;
};
  
console.log(multiply(2, 3));            // Output: 6
  

// Immediately-invoked function expression (IIFE)
(function() {
    console.log('Hello, world!');       // Output: Hello, world!
})();