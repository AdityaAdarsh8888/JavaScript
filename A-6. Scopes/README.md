# JavaScript Scopes

## 1. Introduction to Scope
**Scope** defines the accessibility of variables, objects, and functions in a particular part of the code. It determines where variables can be used in your code.

## 2. Types of Scopes in JavaScript

### a. Global Scope
- Variables declared outside any function or block have global scope.
- They are accessible from anywhere in the code.
- **Global variables** are properties of the `window` object in browsers.

```javascript
let globalVar = "I'm global";

function displayGlobal() {
  console.log(globalVar); // Accessible
}

displayGlobal();
console.log(globalVar); // Accessible
```

### b. Local Scope
- Variables declared within a function have local scope.
- These variables are accessible only within the function where they are defined.

```javascript
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible
}

myFunction();
console.log(localVar); // Error: localVar is not defined
```

### c. Block Scope (ES6+)
- Variables declared with `let` or `const` inside a block (`{}`) are accessible only within that block.
- `var` does not have block scope—it is function-scoped.

```javascript
{
  let blockScoped = "I'm block-scoped";
  console.log(blockScoped); // Accessible
}
console.log(blockScoped); // Error: blockScoped is not defined
```

**With `var`:**

```javascript
{
  var functionScoped = "I'm function-scoped";
  console.log(functionScoped); // Accessible
}
console.log(functionScoped); // Accessible
```

## 3. Lexical Scope
- Lexical scope (or static scope) means that the scope of a variable is determined by its position in the source code.
- Inner functions can access variables from their outer functions.

```javascript
function outer() {
  let outerVar = "I'm outer";
  
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  
  inner();
}
outer();
```

## 4. Function Scope
- Variables declared with `var` inside a function are scoped to that function.
- They are not accessible outside the function.

```javascript
function myFunction() {
  var functionVar = "I'm function-scoped";
  console.log(functionVar); // Accessible
}
myFunction();
console.log(functionVar); // Error: functionVar is not defined
```