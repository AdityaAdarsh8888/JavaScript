# Data Types and Literals in JavaScript

---

## **1. Data Types in JavaScript**

JavaScript has **two types of data types**:
- **Primitive Data Types**
- **Reference Data Types**

---

### **A. Primitive Data Types**
Primitive types represent single values and are immutable.

1. **Number**  
   - Represents numeric values.  
   - Includes integers, floating-point numbers, Infinity, and NaN (Not a Number).  
   - Examples:  
     ```javascript
     let age = 25;       // Integer
     let pi = 3.14;      // Floating-point
     let infinity = Infinity; // Special numeric value
     let notANum = NaN;  // Result of invalid math operation
     ```

2. **String**  
   - Represents text or a sequence of characters.  
   - Enclosed in single (`'`), double (`"`), or backticks (`` ` ``) for template literals.  
   - Examples:  
     ```javascript
     let name = "Aditya";        // Double quotes
     let greeting = 'Hello!';    // Single quotes
     let message = `Hi ${name}`; // Template literal with interpolation
     ```

3. **Boolean**  
   - Represents logical values: `true` or `false`.  
   - Examples:  
     ```javascript
     let isLoggedIn = true;
     let isExpired = false;
     ```

4. **Undefined**  
   - A variable that has been declared but not initialized.  
   - Example:  
     ```javascript
     let x; // Undefined
     ```

5. **Null**  
   - Represents an empty or non-existent value.  
   - Example:  
     ```javascript
     let data = null;
     ```

6. **Symbol** (introduced in ES6)  
   - Represents a unique identifier, often used as object property keys.  
   - Example:  
     ```javascript
     let sym1 = Symbol('id');
     let sym2 = Symbol('id'); // sym1 !== sym2
     ```

7. **BigInt** (introduced in ES11)  
   - Represents integers larger than `Number.MAX_SAFE_INTEGER`.  
   - Example:  
     ```javascript
     let bigNumber = 123456789012345678901234567890n; // 'n' suffix denotes BigInt
     ```

---

### **B. Reference Data Types**
Reference types store objects, arrays, or functions, and are mutable.

1. **Object**  
   - Used to store collections of data as key-value pairs.  
   - Example:  
     ```javascript
     let person = {
       name: "Aditya",
       age: 25,
     };
     ```

2. **Array**  
   - Represents a collection of values stored in an ordered list.  
   - In JavaScript, arrays are considered objects, which is why `typeof` a returns "object".
   - Explanation:
     1. Arrays in JavaScript are a special type of object designed to store ordered collections of data.
     2. The `typeof` operator is not capable of distinguishing between plain objects and arrays. It only checks the underlying type, which for arrays is "object".
   - Example:  
     ```javascript
     let colors = ["red", "green", "blue"];
     console.log(typeof colors); // "object"
     ```

3. **Function**  
   - Functions are objects that perform tasks or return values.  
   - Examples:  
     ```javascript
     function greet() {
       console.log("Hello, World!");
     }

     // Another way to declare a function
     const greetArrow = () => {
       console.log("Hello, World!");
     };
     ```

4. **Date**  
   - Represents dates and times.  
   - Example:  
     ```javascript
     let today = new Date();
     ```

---

## **2. Literals in JavaScript**

Literals are fixed values written directly in the code.

1. **Numeric Literals**  
   - Examples:  
     ```javascript
     let num1 = 100;     // Decimal
     let num2 = 0b1010;  // Binary
     let num3 = 0o12;    // Octal
     let num4 = 0x1A;    // Hexadecimal
     ```

2. **String Literals**  
   - Examples:  
     ```javascript
     let str1 = "Hello";
     let str2 = 'World';
     let str3 = `Hi ${str1} ${str2}`;
     ```

3. **Boolean Literals**  
   - Examples:  
     ```javascript
     let isTrue = true;
     let isFalse = false;
     ```

4. **Object Literals**  
   - Examples:  
     ```javascript
     let obj = { name: "Aditya", age: 25 };
     ```

5. **Array Literals**  
   - Examples:  
     ```javascript
     let arr = [1, 2, 3, 4];
     ```

6. **Null Literal**  
   - Example:  
     ```javascript
     let value = null;
     ```

7. **RegExp Literals**  
   - Used for defining regular expressions.  
   - Example:  
     ```javascript
     let pattern = /[A-Za-z]+/;
     ```

---

### **Type Checking in JavaScript**
- Use `typeof` to check data types of variables.  
  Example:  
  ```javascript
  console.log(typeof 25);        // "number"
  console.log(typeof "Hello");   // "string"
  console.log(typeof true);      // "boolean"
  console.log(typeof undefined); // "undefined"
  console.log(typeof null);      // "object" (legacy bug)
  console.log(typeof Symbol());  // "symbol"
  ```

---
