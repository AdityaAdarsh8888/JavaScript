# Variables in JavaScript

JavaScript provides three ways to declare variables:

1. `var`
2. `let`
3. `const`

## `var`

1. Variables declared with `var` are global in scope.
2. We can redeclare a variable with the same name in the same scope.
3. We can update the value of the variable.
4. Variables can be declared without initialization.
5. Variables declared with `var` can be hoisted.
6. Variables declared inside a block will go to the global scope.
7. Variables declared inside a function will not go to the global scope; they will be accessible only inside the function.

### Example:
```javascript
// Global scope example
var globalVar = "I am global";
console.log(globalVar); // Output: I am global

// Redeclaration example
var redeclareVar = "First declaration";
var redeclareVar = "Second declaration";
console.log(redeclareVar); // Output: Second declaration

// Hoisting example
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// Functional scope example
function testVar() {
    var functionScoped = "I am inside a function";
    console.log(functionScoped); // Output: I am inside a function
}
testVar();
// console.log(functionScoped); // Error: functionScoped is not defined
```

## `let`

1. Variables declared with `let` are block-scoped.
2. We cannot redeclare a variable with the same name in the same scope.
3. We can update the value of the variable.
4. Variables can be declared using `let` without initialization. However, the JavaScript engine keeps the memory block uninitialized (empty) until it reads the declaration statement during the execution phase.
5. Since `let` variables are uninitialized in the variable phase, they belong to the Temporal Dead Zone (TDZ).
6. Variables declared using `let` do not belong to the global scope and cannot be accessed using the `window` object.
7. Variables declared with `let` are hoisted but belong to the Temporal Dead Zone, so they cannot be used before initialization.
8. Variables declared inside a function will be accessible only within that function.

### Example:
```javascript
// Block scope example
if (true) {
    let blockScoped = "I am block-scoped";
    console.log(blockScoped); // Output: I am block-scoped
}
// console.log(blockScoped); // Error: blockScoped is not defined

// No redeclaration example
let uniqueVar = "First value";
// let uniqueVar = "Second value"; // Error: Identifier 'uniqueVar' has already been declared

// Temporal Dead Zone example
// console.log(tdzVar); // Error: Cannot access 'tdzVar' before initialization
let tdzVar = "I am initialized";

// Functional scope example
function testLet() {
    let functionScoped = "I am inside a function";
    console.log(functionScoped); // Output: I am inside a function
}
testLet();
// console.log(functionScoped); // Error: functionScoped is not defined
```

## `const`

1. Variables declared with `const` are block-scoped.
2. We cannot redeclare a variable with the same name in the same scope.
3. The value of a `const` variable cannot be modified.
4. Variables cannot be declared with `const` without initialization.
5. Variables declared using `const` are hoisted and belong to the Temporal Dead Zone, so they cannot be used before initialization.
6. Variables declared with `const` inside a block do not belong to the global scope and cannot be accessed using the `window` object.
7. Variables declared inside a function will be accessible only within that function.

### Example:
```javascript
// Block scope example
if (true) {
    const blockScopedConst = "I am block-scoped";
    console.log(blockScopedConst); // Output: I am block-scoped
}
// console.log(blockScopedConst); // Error: blockScopedConst is not defined

// No redeclaration example
const uniqueConst = "Constant value";
// const uniqueConst = "Another value"; // Error: Identifier 'uniqueConst' has already been declared

// No reassignment example
const immutableConst = "I cannot be changed";
// immutableConst = "Trying to change"; // Error: Assignment to constant variable.

// Functional scope example
function testConst() {
    const functionScopedConst = "I am inside a function";
    console.log(functionScopedConst); // Output: I am inside a function
}
testConst();
// console.log(functionScopedConst); // Error: functionScopedConst is not defined
```

## Note

It is recommended to avoid using `var` due to its issues with block scope and functional scope. Prefer `let` and `const` for better code reliability and readability.