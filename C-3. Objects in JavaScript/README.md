# Objects in JavaScript

Objects are one of the most fundamental data types in JavaScript. They are used to store collections of data and more complex entities. In JavaScript, objects are a collection of **key-value pairs**, where each key is a string (or Symbol) and the value can be any data type, including other objects, functions, arrays, etc.

---

## Table of Contents
1. [Creating Objects](#creating-objects)
2. [Accessing Object Properties](#accessing-object-properties)
3. [Adding and Modifying Properties](#adding-and-modifying-properties)
4. [Deleting Properties](#deleting-properties)
5. [Object Methods](#object-methods)
6. [Iterating Over Objects](#iterating-over-objects)
7. [Object Destructuring](#object-destructuring)
8. [Shallow vs Deep Copy](#shallow-vs-deep-copy)
9. [Prototypes and Inheritance](#prototypes-and-inheritance)
10. [Useful Object Methods](#useful-object-methods)

---

## Creating Objects

Objects can be created in multiple ways in JavaScript:

### 1. Using Object Literals
The most common way to create an object is using the object literal syntax.

```javascript
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

### 2. Using the `new` Keyword
You can also create an object using the `new` keyword with the `Object` constructor.

```javascript
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
```

### 3. Using `Object.create()`
This method creates a new object with the specified prototype.

```javascript
const animal = {
  type: "Dog",
  sound: "Bark"
};

const myPet = Object.create(animal);
myPet.name = "Buddy";
```

---

## Accessing Object Properties

You can access object properties using **dot notation** or **bracket notation**.

```javascript
const person = {
  name: "Alice",
  age: 25
};

// Dot Notation
console.log(person.name); // Output: Alice

// Bracket Notation
console.log(person["age"]); // Output: 25
```

---

## Adding and Modifying Properties

You can add or modify properties of an object after it has been created.

```javascript
const person = {
  name: "Alice"
};

// Adding a new property
person.age = 25;

// Modifying an existing property
person.name = "Bob";

console.log(person); // Output: { name: "Bob", age: 25 }
```

---

## Deleting Properties

You can delete properties from an object using the `delete` keyword.

```javascript
const person = {
  name: "Alice",
  age: 25
};

delete person.age;

console.log(person); // Output: { name: "Alice" }
```

---

## Object Methods

Methods are functions that are stored as object properties.

```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is John
```

---

## Iterating Over Objects

You can iterate over the properties of an object using loops.

### 1. `for...in` Loop
```javascript
const person = {
  name: "Alice",
  age: 25,
  isEmployed: true
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### 2. `Object.keys()`, `Object.values()`, and `Object.entries()`
```javascript
const person = {
  name: "Alice",
  age: 25
};

console.log(Object.keys(person)); // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["Alice", 25]
console.log(Object.entries(person)); // Output: [["name", "Alice"], ["age", 25]]
```

---

## Object Destructuring

Destructuring allows you to extract properties from objects into variables.

```javascript
const person = {
  name: "Alice",
  age: 25
};

const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

---

## Shallow vs Deep Copy

### Shallow Copy
A shallow copy duplicates the top-level properties, but nested objects are shared between the original and the copy.

```javascript
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (nested object is shared)
```

### Deep Copy
A deep copy duplicates all levels of the object. You can use `JSON.parse(JSON.stringify(object))` for simple cases.

```javascript
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 3;
console.log(original.b.c); // Output: 2 (nested object is not shared)
```

---

## Prototypes and Inheritance

JavaScript uses prototypal inheritance. Every object has a prototype from which it inherits properties and methods.

```javascript
const animal = {
  type: "Dog",
  sound: "Bark"
};

const myPet = Object.create(animal);
myPet.name = "Buddy";

console.log(myPet.sound); // Output: Bark (inherited from animal)
```

---

## Useful Object Methods

### 1. `Object.assign()`
Copies properties from one or more source objects to a target object.

```javascript
const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2 }
```

### 2. `Object.freeze()`
Prevents modification of an object.

```javascript
const person = { name: "Alice" };
Object.freeze(person);

person.name = "Bob"; // This will not change the name
console.log(person.name); // Output: Alice
```

### 3. `Object.seal()`
Prevents adding or deleting properties but allows modifying existing ones.

```javascript
const person = { name: "Alice" };
Object.seal(person);

person.age = 25; // This will not add the age property
person.name = "Bob"; // This will change the name
console.log(person); // Output: { name: "Bob" }
```

---

## Conclusion

Objects are a powerful and flexible data structure in JavaScript. They allow you to store and organize data in a meaningful way, and their methods and properties make them highly versatile for various programming tasks.
```