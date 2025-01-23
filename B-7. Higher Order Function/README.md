# Higher-Order Functions in JavaScript

## Definition:
A higher-order function is a function that either:
1. Takes one or more functions as arguments (parameters).
2. Returns a function as its result.

This makes higher-order functions a cornerstone of functional programming in JavaScript.

---

## Examples:

### 1. Functions as Arguments:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

function logGreeting(fn, name) {
  console.log(fn(name));
}

logGreeting(greet, "Aditya"); // Output: Hello, Aditya!
```

### 2. Functions Returning Functions:
```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

---

## Built-in Higher-Order Functions:

### 1. `Array.prototype.map()`
- Creates a new array by applying a function to each element of the original array.
```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9, 16]
```

### 2. `Array.prototype.filter()`
- Creates a new array with elements that pass a test defined in the provided function.
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### 3. `Array.prototype.reduce()`
- Reduces the array to a single value by executing a reducer function for each element.
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

### 4. `Array.prototype.forEach()`
- Executes a provided function once for each array element. It does not return a new array.
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
```

### 5. `Array.prototype.sort()`
- Sorts the elements of an array based on a comparison function.
```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

---

## Advantages of Higher-Order Functions:
1. **Code Reusability:** Reuse generic logic across multiple parts of an application.
2. **Modularity:** Break down tasks into smaller, reusable functions.
3. **Improved Readability:** Functional chaining makes code concise and readable.
4. **Declarative Programming:** Focus on "what to do" instead of "how to do it."

---

## Common Use Cases:

### 1. Event Handling:
```javascript
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

### 2. Asynchronous Operations:
```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

### 3. Function Composition:
```javascript
function add(x) {
  return x + 2;
}

function multiply(x) {
  return x * 3;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(2)); // Output: 12
```

---

## Key Points:
- Functions in JavaScript are first-class citizens, meaning they can be treated like any other value.
- Higher-order functions enhance the power of functional programming.
- Built-in higher-order functions like `map`, `filter`, and `reduce` simplify array manipulation and iteration tasks.

---

## Practice Problems:

### 1. Use `map` to create an array of the lengths of strings in an array.
```javascript
const words = ["hello", "world", "JavaScript"];
const lengths = words.map(word => word.length);
console.log(lengths); // Output: [5, 5, 10]
```

### 2. Use `reduce` to calculate the product of all elements in an array.
```javascript
const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 24
```

### 3. Create a function that filters out odd numbers and doubles the even numbers from an array.
```javascript
function processNumbers(arr) {
  return arr.filter(num => num % 2 === 0).map(num => num * 2);
}

console.log(processNumbers([1, 2, 3, 4])); // Output: [4, 8]
```