# JavaScript Arrays

This README file contains detailed notes on creating arrays in JavaScript, including theoretical concepts and code examples.

## Creating Arrays in JavaScript

In JavaScript, arrays are used to store multiple values in a single variable. They are a special type of object that provides various methods and properties for handling ordered collections of data. Below are the theoretical concepts and examples of how to create arrays in JavaScript.

### 1. Using Array Literals
This is the simplest and most commonly used way to create an array.

#### Syntax:
```javascript
const arrayName = [element1, element2, element3];
```

#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### Features:
- The `arrayName` variable holds an array with three string elements.
- Array elements can be of any data type (e.g., strings, numbers, objects).

---

### 2. Using the `Array` Constructor
You can use the `Array` constructor to create arrays.

#### Syntax:
```javascript
const arrayName = new Array(element1, element2, element3);
```

#### Example:
```javascript
const numbers = new Array(10, 20, 30);
console.log(numbers); // [10, 20, 30]
```

#### Special Case:
If you pass a single numeric argument to the `Array` constructor, it creates an array with the specified length but no defined elements.

##### Example:
```javascript
const emptyArray = new Array(5);
console.log(emptyArray); // [empty x 5]
```

---

### 3. Using `Array.of()` Method
The `Array.of()` method creates a new array with the provided arguments, regardless of the number or type of arguments.

#### Syntax:
```javascript
const arrayName = Array.of(element1, element2, element3);
```

#### Example:
```javascript
const mixedArray = Array.of(1, "hello", true);
console.log(mixedArray); // [1, "hello", true]
```

---

### 4. Using `Array.from()` Method
The `Array.from()` method creates a new array from an iterable or array-like object.

#### Syntax:
```javascript
const arrayName = Array.from(iterable);
```

#### Example:
```javascript
const stringToArray = Array.from("hello");
console.log(stringToArray); // ["h", "e", "l", "l", "o"];
```

#### Use Case with Mapping:
```javascript
const squares = Array.from([1, 2, 3], x => x * x);
console.log(squares); // [1, 4, 9]
```

---

### 5. Using Spread Operator (`...`)
The spread operator can create a copy of an existing array or convert iterable objects into arrays.

#### Syntax:
```javascript
const arrayName = [...iterable];
```

#### Example:
```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
```

#### Use Case:
Combining multiple arrays:
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
```

---

### 6. Using Loops
You can dynamically populate arrays using loops.

#### Example:
```javascript
const array = [];
for (let i = 0; i < 5; i++) {
  array.push(i);
}
console.log(array); // [0, 1, 2, 3, 4]
```

---

### 7. Using Array Methods (Functional Approach)
You can use higher-order functions like `map` and `filter` to create arrays.

#### Example:
```javascript
const array = Array(5).fill(0).map((_, index) => index + 1);
console.log(array); // [1, 2, 3, 4, 5]
```

---

## Commonly Used Array Methods

### `push()`
Adds one or more elements to the end of an array.
#### Example:
```javascript
const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

### `pop()`
Removes the last element from an array and returns it.
#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const last = fruits.pop();
console.log(last); // "Cherry"
console.log(fruits); // ["Apple", "Banana"]
```

### `shift()`
Removes the first element from an array and returns it.
#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const first = fruits.shift();
console.log(first); // "Apple"
console.log(fruits); // ["Banana", "Cherry"]
```

### `unshift()`
Adds one or more elements to the beginning of an array.
#### Example:
```javascript
const fruits = ["Banana", "Cherry"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

### `splice()`
Adds or removes elements at a specific index.
#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Mango");
console.log(fruits); // ["Apple", "Mango", "Cherry"]
```

### `slice()`
Returns a shallow copy of a portion of an array.
#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ["Banana", "Cherry"]
```

### `concat()`
Merges two or more arrays.
#### Example:
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```

### `join()`
Joins all elements of an array into a string.
#### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const joined = fruits.join(", ");
console.log(joined); // "Apple, Banana, Cherry"
```

---

## Summary Table

| Method               | Example                                | Notes                              |
|----------------------|----------------------------------------|------------------------------------|
| Array Literals       | `const a = [1, 2, 3];`                 | Most common and concise            |
| `new Array()`        | `const a = new Array(3);`              | Creates empty slots if one number  |
| `Array.of()`         | `const a = Array.of(1, 2);`            | Handles arguments consistently     |
| `Array.from()`       | `Array.from('abc');`                   | Converts iterable to array         |
| Spread Operator      | `[...iterable]`                        | Flexible and modern                |
| Loops                | `for (...) { array.push(...) }`        | Useful for dynamic arrays          |
| `push()`             | `array.push(value);`                   | Adds element to the end            |
| `pop()`              | `array.pop();`                         | Removes last element               |
| `shift()`            | `array.shift();`                       | Removes first element              |
| `unshift()`          | `array.unshift(value);`                | Adds element to the beginning      |
| `splice()`           | `array.splice(index, count, ...items);`| Modifies array elements            |
| `slice()`            | `array.slice(start, end);`             | Copies portion of array            |
| `concat()`           | `array1.concat(array2);`               | Merges arrays                      |
| `join()`             | `array.join(separator);`               | Joins elements into string         |