# Relational Operators in JavaScript

Relational operators are used in JavaScript to compare values and return a boolean result (`true` or `false`). These operators are essential for controlling the flow of your code using conditional statements like `if`, `else if`, and `switch`.

## Relational Operators Table

| Operator  | Description                         | Example                                               |
|-----------|-------------------------------------|-------------------------------------------------------|
| `>`       | Greater than                       | `5 > 3` returns `true`                               |
| `<`       | Less than                          | `2 < 7` returns `true`                               |
| `>=`      | Greater than or equal to           | `5 >= 5` returns `true`                              |
| `<=`      | Less than or equal to              | `3 <= 4` returns `true`                              |
| `==`      | Equal to (performs type coercion)  | `5 == '5'` returns `true` (type coercion)            |
| `!=`      | Not equal to                       | `5 != 3` returns `true`                              |
| `===`     | Strict equal to (checks value and type) | `5 === 5` returns `true`; `'5' === 5` returns `false` |
| `!==`     | Strict not equal to (checks value and type) | `5 !== 5` returns `false`; `'5' !== 5` returns `true` |

## Explanation

- **`>` and `<`**: Compare two values and return `true` if the left operand is greater than or less than the right operand, respectively.
- **`>=` and `<=`**: Combine comparison and equality. Return `true` if the left operand is greater than or equal to or less than or equal to the right operand, respectively.
- **`==`**: Checks for equality but performs type coercion. It may convert one value to another type for comparison. Use with caution when strict equality is required.
- **`!=`**: Checks for inequality and also performs type coercion.
- **`===`**: Performs a strict comparison, checking for both equal value and equal type.
- **`!==`**: Performs a strict not equal comparison, checking for either different value or different type.

## Additional Notes

- When comparing numbers and strings using `==`, the string will be converted to a number before comparison, which can lead to unexpected results.
- For strict comparisons, always use `===` and `!==` to avoid type coercion issues.

## Summary

By understanding relational operators, you can effectively write conditional statements that control the flow of your JavaScript programs and make decisions based on comparisons between values.
