<body>
  <h1>Hoisting in JavaScript</h1>

  <h2>1. What is Hoisting?</h2>
  <ul>
    <li><strong>Definition:</strong> Hoisting is a JavaScript mechanism where variables, functions, and classes are moved to the top of their scope during the compilation phase, before the code is executed.</li>
    <li>This means you can use variables and functions before declaring them in the code.</li>
    <li><strong>Key Point:</strong> Only the declarations are hoisted, not the initializations.</li>
  </ul>

  <hr />

  <h2>2. Hoisting of Variables</h2>

  <h3>2.1 <code>var</code> Declaration</h3>
  <p>Variables declared with <code>var</code> are hoisted to the top of their scope and initialized with <code>undefined</code>.</p>
  <pre>
<code>console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10</code>
  </pre>
  <p><strong>Explanation:</strong> During hoisting, <code>var a</code> is moved to the top and initialized with <code>undefined</code>.</p>

  <hr />

  <h3>2.2 <code>let</code> and <code>const</code> Declarations</h3>
  <p>Variables declared with <code>let</code> and <code>const</code> are hoisted, but they are <strong>not initialized</strong>. Accessing them before declaration results in a <strong>ReferenceError</strong>. They are in a <strong>Temporal Dead Zone (TDZ)</strong> from the start of the block until the declaration is encountered.</p>
  <pre>
<code>console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

const c = 30;
console.log(c); // Output: 30</code>
  </pre>

  <hr />

  <h2>3. Hoisting of Functions</h2>

  <h3>3.1 Function Declarations</h3>
  <p>Function declarations are hoisted along with their definitions.</p>
  <pre>
<code>hello(); // Output: "Hello, world!"

function hello() {
  console.log("Hello, world!");
}</code>
  </pre>
  <p><strong>Explanation:</strong> The entire <code>hello</code> function is hoisted to the top of its scope, so it can be called before its declaration.</p>

  <hr />

  <h3>3.2 Function Expressions</h3>
  <p>Function expressions are hoisted <strong>only as variables</strong> (initialized with <code>undefined</code>).</p>
  <pre>
<code>console.log(sum); // Output: undefined
sum(); // TypeError: sum is not a function

var sum = function() {
  console.log("This is a function expression");
};</code>
  </pre>
  <p><strong>Explanation:</strong> <code>sum</code> is hoisted as a variable, but its definition is not hoisted.</p>

  <hr />

  <h2>4. Hoisting of Classes</h2>
  <p>Classes are hoisted but are not initialized. Accessing a class before its declaration results in a <strong>ReferenceError</strong>.</p>
  <pre>
<code>const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    console.log("Class constructor");
  }
}</code>
  </pre>

  <hr />

  <h2>5. The Temporal Dead Zone (TDZ)</h2>
  <p>TDZ is the time between the entering of a scope (block) and the actual declaration of <code>let</code> or <code>const</code>. Variables in TDZ cannot be accessed.</p>
  <pre>
<code>{
  console.log(x); // ReferenceError
  let x = 5;
}</code>
  </pre>

  <hr />

  <h2>6. Hoisting in Arrow Functions</h2>
  <p>Arrow functions behave like function expressions and are hoisted as variables.</p>
  <pre>
<code>sayHi(); // TypeError: sayHi is not a function

var sayHi = () => {
  console.log("Hi!");
};</code>
  </pre>

  <hr />

  <h2>7. Scope and Hoisting</h2>
  <p>
    <ul>
      <li><strong>Global Scope:</strong> Variables and functions declared in the global scope are hoisted to the top of the global scope.</li>
      <li><strong>Function Scope:</strong> Declarations within a function are hoisted to the top of the function.</li>
      <li><strong>Block Scope:</strong> For <code>let</code> and <code>const</code>, declarations are hoisted within the block but remain in the TDZ until declared.</li>
    </ul>
  </p>
  <pre>
<code>function test() {
  console.log(x); // undefined
  var x = 10;

  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // ReferenceError
}
test();</code>
  </pre>

  <hr />

  <h2>8. Best Practices to Avoid Hoisting Issues</h2>
  <ol>
    <li><strong>Use <code>let</code> and <code>const</code>:</strong> Avoid <code>var</code> to reduce confusion due to hoisting.</li>
    <li><strong>Declare Variables and Functions Before Use:</strong> Always declare variables at the top of their scope.</li>
    <li><strong>Minimize Global Variables:</strong> Reduce reliance on global variables to avoid unintended side effects.</li>
  </ol>

  <hr />

  <h2>Summary Table</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Type</th>
        <th>Hoisted</th>
        <th>Initialized</th>
        <th>Accessible Before Declaration</th>
        <th>Error Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>var</code></td>
        <td>Yes</td>
        <td>Yes (<code>undefined</code>)</td>
        <td>Yes</td>
        <td>No Error</td>
      </tr>
      <tr>
        <td><code>let</code></td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>ReferenceError (TDZ)</td>
      </tr>
      <tr>
        <td><code>const</code></td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>ReferenceError (TDZ)</td>
      </tr>
      <tr>
        <td>Function Declaration</td>
        <td>Yes</td>
        <td>Yes (Definition)</td>
        <td>Yes</td>
        <td>No Error</td>
      </tr>
      <tr>
        <td>Function Expression</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>TypeError (if called)</td>
      </tr>
      <tr>
        <td>Class Declaration</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>ReferenceError (TDZ)</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
