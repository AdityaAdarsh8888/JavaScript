# Array In-Built Methods

## 1. **flat()**
- **Description**: Flattens a nested array into a single-level array.
- **Syntax**: `array.flat(depth)`
- **Parameters**:
  - `depth` (optional): Specifies the depth to flatten. Defaults to `1`.
- **Example**:
  ```javascript
  const arr = [1, [2, [3, [4]]]];
  console.log(arr.flat(2)); // [1, 2, 3, [4]]
  ```

## 2. **flatMap()**
- **Description**: Maps each element using a callback and flattens the result by one level.
- **Syntax**: `array.flatMap(callback)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]
  ```

## 3. **every()**
- **Description**: Checks if all elements satisfy a condition.
- **Syntax**: `array.every(callback)`
- **Example**:
  ```javascript
  const arr = [2, 4, 6];
  console.log(arr.every(x => x % 2 === 0)); // true
  ```

## 4. **some()**
- **Description**: Checks if at least one element satisfies a condition.
- **Syntax**: `array.some(callback)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.some(x => x > 2)); // true
  ```

## 5. **find(callback)**
- **Description**: Returns the first element that satisfies a condition.
- **Syntax**: `array.find(callback)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3, 4];
  console.log(arr.find(x => x > 2)); // 3
  ```

## 6. **with(start, value)**
- **Description**: Returns a copy of the array with a specific index replaced.
- **Syntax**: `array.with(start, value)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.with(1, 5)); // [1, 5, 3]
  ```

## 7. **of()**
- **Description**: Creates an array from the given arguments.
- **Syntax**: `Array.of(element1, element2, ...)`
- **Example**:
  ```javascript
  const arr = Array.of(1, 2, 3);
  console.log(arr); // [1, 2, 3]
  ```

## 8. **join()**
- **Description**: Joins array elements into a string.
- **Syntax**: `array.join(separator)`
- **Parameters**:
  - `separator` (optional): Specifies a string to separate elements. Defaults to `,`.
- **Example**:
  ```javascript
  const arr = ["a", "b", "c"];
  console.log(arr.join("-")); // "a-b-c"
  ```

## 9. **concat()**
- **Description**: Merges arrays and/or values into a new array.
- **Syntax**: `array.concat(value1, value2, ...)`
- **Example**:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
  ```

## 10. **sort(callback)**
- **Description**: Sorts elements in place, optionally using a compare function.
- **Syntax**: `array.sort(compareFunction)`
- **Example**:
  ```javascript
  const arr = [3, 1, 4, 2];
  console.log(arr.sort((a, b) => a - b)); // [1, 2, 3, 4]
  ```

## 11. **reduce()**
- **Description**: Reduces the array to a single value by applying a callback.
- **Syntax**: `array.reduce(callback, initialValue)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.reduce((acc, val) => acc + val, 0)); // 6
  ```

## 12. **reduceRight()**
- **Description**: Similar to `reduce()` but starts from the last element.
- **Syntax**: `array.reduceRight(callback, initialValue)`
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.reduceRight((acc, val) => acc + val, 0)); // 6
  ```

## 13. **2D Array Reduce Method**
- **Description**: Reduces a 2D array to a single-level array.
- **Example**:
  ```javascript
  const arr = [[1, 2], [3, 4], [5, 6]];
  const flat = arr.reduce((acc, val) => acc.concat(val), []);
  console.log(flat); // [1, 2, 3, 4, 5, 6]
  ```

## 14. **Filter Object Inside Array**
- **Description**: Filters objects within an array based on a condition.
- **Example**:
  ```javascript
  const arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  const filtered = arr.filter(obj => obj.id > 1);
  console.log(filtered); // [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
  ```