# Nested Functions in JavaScript

## **Definition**
A nested function is a function that is defined inside another function. The enclosing function is often referred to as the parent function or outer function, while the nested function is known as the child or inner function.

---

## **Syntax**
```javascript
function outerFunction() {
    function innerFunction() {
        // Inner function body
    }
    // Outer function body
}
```

---

## **Key Features**
1. **Scope Chain Access**:
   - Nested functions have access to variables in their own scope, the parent function's scope, and the global scope.

2. **Encapsulation**:
   - Inner functions are not accessible from outside the parent function, providing better encapsulation.

3. **Closures**:
   - If an inner function accesses variables from its outer function, it forms a closure.

---

## **Examples**

### **Basic Nested Function**
```javascript
function greetUser(name) {
    function displayMessage() {
        console.log(`Hello, ${name}!`);
    }
    displayMessage();
}

greetUser("Aditya"); // Output: Hello, Aditya!
```

### **Using Nested Functions to Return Values**
```javascript
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyBy2 = multiplier(2);
console.log(multiplyBy2(5)); // Output: 10
```

---

## **Use Cases**
1. **Encapsulation of Logic**:
   - Nested functions can be used to organize logic specific to the parent function.
   
2. **Creating Closures**:
   - They are commonly used to create closures for preserving state.

3. **Helper Functions**:
   - Inner functions can act as helper functions for the parent function.

---

## **Scope and Nested Functions**

### **Example of Scope**
```javascript
function outerFunction() {
    let outerVariable = "Outer";
    function innerFunction() {
        let innerVariable = "Inner";
        console.log(outerVariable); // Accessing outer scope
    }
    innerFunction();
    // console.log(innerVariable); // Error: innerVariable is not defined
}

outerFunction();
```

---

## **Advantages**
- Promotes modularity and code reuse.
- Improves readability and maintainability of code.
- Provides a way to create private variables through closures.

---

## **Important Points**
1. **Inner Function Accessibility**:
   - Inner functions are only accessible within their parent function.
   
2. **Hoisting**:
   - Function declarations inside another function are hoisted within the scope of the parent function.
   
3. **Closures**:
   - When the parent function returns the inner function, the inner function retains access to the parent function's variables.

### **Closure Example**
```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
```

---

## **Common Pitfalls**
1. **Overuse**:
   - Excessive nesting can make code harder to read.
   
2. **Memory Issues**:
   - Closures can inadvertently hold references to unused variables, leading to potential memory leaks.

---

## **Best Practices**
- Avoid deep nesting by breaking functions into smaller modules.
- Use meaningful names for inner and outer functions.
- Leverage nested functions to encapsulate helper functions and avoid polluting the global scope.