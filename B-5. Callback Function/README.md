# Callback Functions in JavaScript

## 1. What is a Callback Function?
A **callback function** is a function passed as an argument to another function, which is then executed after some operation or event has been completed.

---

## 2. Syntax of a Callback Function
```javascript
function mainFunction(callback) {
    // Code in main function
    callback(); // Execute the callback function
}

function callbackFunction() {
    console.log("Callback function executed!");
}

// Passing callbackFunction as an argument
mainFunction(callbackFunction);
```

---

## 3. Types of Callback Functions
### 3.1 Synchronous Callbacks
Executed immediately within the function they are passed to.
```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Aditya", sayBye);
```

### 3.2 Asynchronous Callbacks
Executed after an operation completes, commonly seen in operations like fetching data.
```javascript
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
```

---

## 4. Importance of Callbacks
- Allow asynchronous execution.
- Enable handling of operations like:
  - Event handling
  - Data fetching
  - Timers

---

## 5. Callback with Arguments
You can pass arguments to a callback function.
```javascript
function processInput(input, callback) {
    const result = input.toUpperCase();
    callback(result);
}

function displayResult(output) {
    console.log(`Processed output: ${output}`);
}

processInput("hello", displayResult);
```

---

## 6. Nested Callbacks (Callback Hell)
When multiple callbacks are nested, it becomes hard to read and maintain, leading to **callback hell**.
```javascript
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
```

### Solution: Use **Promises** or **Async/Await**.

---

## 7. Callback in Array Methods
Callbacks are frequently used in higher-order functions like `map()`, `filter()`, and `forEach()`.

### Example: `map()`
```javascript
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16]
```

### Example: `filter()`
```javascript
const numbers = [10, 15, 20, 25];

const filtered = numbers.filter(num => num > 15);

console.log(filtered); // [20, 25]
```

---

## 8. Error Handling in Callbacks
Always handle errors in asynchronous callbacks to prevent unexpected crashes.
```javascript
function fetchData(callback) {
    try {
        // Simulate fetching data
        const data = "Fetched data";
        callback(null, data); // No error, pass data
    } catch (error) {
        callback(error, null); // Pass error
    }
}

fetchData((err, data) => {
    if (err) {
        console.error("Error occurred:", err);
    } else {
        console.log("Success:", data);
    }
});
```

---

## 9. Callback in Event Listeners
Callbacks are essential for handling events in JavaScript.
```javascript
document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked!");
});
```

---

## 10. Advantages of Callbacks
- Enable asynchronous programming.
- Improve modularity and code reuse.
- Flexible in designing dynamic behaviors.

---

## 11. Disadvantages
- Hard to debug due to nested structures (callback hell).
- Can lead to poor readability and maintenance issues.

---

## 12. Callback Alternatives
### 12.1 Promises
Cleaner syntax and better error handling.
```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(data => console.log(data));
```

### 12.2 Async/Await
Simplifies handling of asynchronous operations.
```javascript
async function fetchData() {
    const data = await fetch("https://api.example.com/data");
    console.log(await data.json());
}

fetchData();
```

---

## 13. Summary
- Callbacks are core to JavaScript for asynchronous and event-driven programming.
- Use Promises or Async/Await to avoid callback hell.
- Always handle errors in asynchronous callbacks for robust applications.


## Garbage Collection and Removing Event Listners
Both **garbage collection** and **removing event listeners** are crucial for writing efficient and bug-free JavaScript code. They help prevent memory leaks, improve performance, and ensure the stability and reliability of your applications.