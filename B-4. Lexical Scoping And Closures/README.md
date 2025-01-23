# Lexical Scoping and Closures in JavaScript

## Lexical Scoping
**Lexical scoping** means that the scope of a variable is determined by its location within the source code (its position in the script), and nested functions have access to variables declared in their outer scope.

### Key Points:
1. **Global Scope:** Variables declared outside any function. These variables are accessible from anywhere in the script.
2. **Function Scope:** Variables declared within a function. These are accessible only within that function.
3. **Block Scope:** Introduced in ES6, `let` and `const` declarations inside `{}` create block-scoped variables. Unlike `var`, which doesn't have block scope.

### Example of Lexical Scoping
```javascript
function outer() {
    let outerVar = "I am from the outer function";
    
    function inner() {
        let innerVar = "I am from the inner function";
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    inner();
    console.log(innerVar); // Unaccessible
}
outer();
```

## Closures
A **closure** is a function that remembers the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.
### **Note**: 
In closure, not only function will be returned but also it's whole lexical scope will be returned. And function along with it's lexical scope is known as closure.

### Key Points:
- **Persistence:** Even after the outer function has executed, the inner function (closure) continues to have access to the outer function’s variables.
- **Encapsulation:** Allows for private variables and functions. This can help to control how variables are accessed and updated.

### Example of Closures
Example of Closures
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

In this example, **makeCounter** creates a function (a closure) that has access to **count**. The **count** variable remains accessible to the inner function even after **makeCounter** has finished execution.

## Why Use Closures?
- **Data Privacy**: Closures allow you to create private variables that are not accessible from the global scope.

- **Higher-order Functions**: Closures are often used with higher-order functions (functions that return other functions or take them as arguments).

- **Callback Functions**: Useful in asynchronous programming, such as handling events, timers, and Ajax requests.

## Important Considerations
- **Memory Management**: Unintended closures can lead to memory leaks because closures retain references to their outer scope variables.

- **Performance**: While powerful, excessive use of closures in high-performance applications can introduce overhead.