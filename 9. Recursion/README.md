# Recursion in JavaScript

## Definition
Recursion is a programming technique where a function calls itself either directly or indirectly to solve a problem. Each recursive call works on a smaller subset of the original problem until a base case is met. In simple words, If a function is calling again and again to genrate a desired output is called a recursion function.

---

## Key Components of Recursion
1. **Base Case**:
   - The condition under which the recursive function stops calling itself.
   - Prevents infinite recursion and stack overflow.

2. **Recursive Case**:
   - The part of the function where it calls itself with modified arguments to approach the base case.

---

## Example Structure
```javascript
function recursiveFunction(params) {
    if (baseCondition) { 
        return result; // Base case
    }
    return recursiveFunction(modifiedParams); // Recursive case
}
```

---

## Types of Recursion

1. **Direct Recursion**:
   - A function calls itself directly.
   ```javascript
   function directRecursion(n) {
       if (n <= 0) return;
       console.log(n);
       directRecursion(n - 1); // Direct call
   }
   ```

2. **Indirect Recursion**:
   - A function calls another function that eventually calls the original function.
   ```javascript
   function A(n) {
       if (n <= 0) return;
       console.log(n);
       B(n - 1);
   }
   function B(n) {
       if (n <= 0) return;
       console.log(n);
       A(n - 2);
   }
   ```

---

## Examples

### 1. Factorial Calculation
```javascript
function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120
```

### 2. Fibonacci Series
```javascript
function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // Output: 8
```

### 3. Sum of Array Elements
```javascript
function sumArray(arr, n) {
    if (n <= 0) return 0; // Base case
    return arr[n - 1] + sumArray(arr, n - 1); // Recursive case
}
console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15
```

---

## Benefits of Recursion
1. Simplifies complex problems by breaking them into smaller sub-problems.
2. Makes the code easier to understand for problems like traversing trees or graphs.

---

## Drawbacks of Recursion
1. **Stack Overflow**:
   - If the base case is not properly defined, the recursion can become infinite.
   - Example:
     ```javascript
     function infiniteRecursion() {
         infiniteRecursion(); // No base case
     }
     ```

2. **Performance**:
   - Recursive functions use the call stack, which can consume more memory.
   - Iterative solutions are often more efficient.

---

## Memoization in Recursion
- **Definition**: Optimization technique to store results of expensive function calls and reuse them for the same inputs.
- Example:
  ```javascript
  let memo = {};
  function fibonacciMemo(n) {
      if (n <= 1) return n;
      if (memo[n]) return memo[n];
      memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
      return memo[n];
  }
  console.log(fibonacciMemo(50)); // Efficient calculation
  ```

---

## Tail Recursion
- A recursive function where the recursive call is the last operation before returning.
- Optimized by JavaScript engines to prevent stack overflow (if supported).
- Example:
  ```javascript
  function tailRecursionFactorial(n, acc = 1) {
      if (n === 0) return acc; // Base case
      return tailRecursionFactorial(n - 1, acc * n); // Tail recursive
  }
  console.log(tailRecursionFactorial(5)); // Output: 120
  ```

---

## Common Use Cases
1. **Tree Traversals**:
   - Preorder, Inorder, Postorder traversals in a binary tree.
2. **Graph Traversals**:
   - Depth-First Search (DFS).
3. **Divide and Conquer Algorithms**:
   - Merge Sort, Quick Sort.
4. **Dynamic Programming**:
   - Problems like the Fibonacci series or 0/1 Knapsack.

---

## Best Practices
1. Always define a clear base case.
2. Avoid deep recursion if an iterative solution is possible.
3. Use memoization for performance-heavy recursive functions.
4. Be cautious of stack overflow errors in non-tail recursive functions.