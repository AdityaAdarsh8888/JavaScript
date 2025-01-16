# Relational Operators in JavaScript

<p>Relational operators are used in JavaScript to compare values and return a boolean result (true or false). These operators are essential for controlling the flow of your code using conditional statements like <code>if</code>, <code>else if</code>, and <code>switch</code>.</p>

<table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>></code></td>
      <td>Greater than</td>
      <td><code>5 > 3</code> returns <code>true</code></td>
    </tr>
    <tr>
      <td><code><</code></td>
      <td>Less than</td>
      <td><code>2 < 7</code> returns <code>true</code></td>
    </tr>
    <tr>
      <td><code>>=</code></td>
      <td>Greater than or equal to</td>
      <td><code>5 >= 5</code> returns <code>true</code></td>
    </tr>
    <tr>
      <td><code><=</code></td>
      <td>Less than or equal to</td>
      <td><code>3 <= 4</code> returns <code>true</code></td>
    </tr>
    <tr>
      <td><code>==</code></td>
      <td>Equal to (performs type coercion)</td>
      <td><code>5 == '5'</code> returns <code>true</code> (type coercion)</td>
    </tr>
    <tr>
      <td><code>!=</code></td>
      <td>Not equal to</td>
      <td><code>5 != 3</code> returns <code>true</code></td>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Strict equal to (checks value and type)</td>
      <td><code>5 === 5</code> returns <code>true</code>; <code>'5' === 5</code> returns <code>false</code></td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>Strict not equal to (checks value and type)</td>
      <td><code>5 !== 5</code> returns <code>false</code>; <code>'5' !== 5</code> returns <code>true</code></td>
    </tr>
</table>

<h2>Explanation</h2>

<ul>
  <li><code>></code> and <code><</code>: These operators compare two values and return <code>true</code> if the left operand is greater than or less than the right operand, respectively.</li>
  <li><code>>=</code> and <code><=</code>: These operators combine comparison and equality, returning <code>true</code> if the left operand is greater than or equal to or less than or equal to the right operand, respectively.</li>
  <li><code>==</code>: This operator checks for equality but performs type coercion. This means it may convert one value to another type for comparison. Be cautious when using <code>==</code> for strict comparisons.</li>
  <li><code>!=</code>: This operator checks for inequality but also performs type coercion.</li>
  <li><code>===</code>: This operator performs a strict comparison, checking for both equal value and equal type.</li>
  <li><code>!==</code>: This operator performs a strict not equal comparison, checking for either different value or different type.</li>
</ul>
<h2>Additional Notes</h2>

<ul>
  <li>When comparing numbers and strings using <code>==</code>, the string will be converted to a number before comparison. This can lead to unexpected results.</li>
  <li>For strict comparisons, always use <code>===</code> and <code>!==</code> to avoid type coercion issues.</li>
</ul>

<p>By understanding relational operators, you can effectively write conditional statements that control the flow of your JavaScript programs and make decisions based on comparisons between values.</p>