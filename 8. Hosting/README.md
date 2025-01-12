<h1>Hoisting in JavaScript</h1>

    <p>Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before the code executes. This means that you can use variables and functions before their declarations in the code.</p>

    <h2>1. How Hoisting Works</h2>
    <p>Hoisting allows you to use variables or functions before they are declared in the code.</p>
    <pre><code>console.log(x); // undefined
    var x = 10;</code></pre>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li>During the compilation phase, the <code>var x</code> declaration is hoisted to the top.</li>
        <li>The initialization (<code>x = 10</code>) is not hoisted.</li>
    </ul>

    <h2>2. Hoisting in Variables</h2>

    <h3>a. <code>var</code> Hoisting</h3>
    <p>Variables declared with <code>var</code> are hoisted to the top of their scope and initialized with <code>undefined</code>.</p>
    <pre><code>console.log(a); // undefined
    var a = 5;</code></pre>

    <h3>b. <code>let</code> and <code>const</code> Hoisting</h3>
    <p>Variables declared with <code>let</code> and <code>const</code> are hoisted but are not initialized. Accessing them before declaration results in a <strong>ReferenceError</strong> due to the <em>temporal dead zone (TDZ)</em>.</p>
    <pre><code>console.log(b); // ReferenceError
    let b = 10;

    console.log(c); // ReferenceError
    const c = 15;</code></pre>

    <h2>3. Hoisting in Functions</h2>

    <h3>a. Function Declarations</h3>
    <p>Function declarations are hoisted to the top of their scope. You can call the function before it is defined.</p>
    <pre><code>hello(); // Output: Hello, world!

    function hello() {
        console.log("Hello, world!");
    }</code></pre>

    <h3>b. Function Expressions</h3>
    <p>Function expressions (using <code>var</code>, <code>let</code>, or <code>const</code>) are hoisted differently:</p>
    <ul>
        <li>Variables are hoisted, but the function itself is not.</li>
    </ul>
    <pre><code>greet(); // TypeError: greet is not a function
    var greet = function () {
      console.log("Hi!");
    };</code></pre>

    <h2>4. Hoisting in Classes</h2>
    <p>Classes are hoisted but are not initialized. Accessing a class before its declaration results in a <strong>ReferenceError</strong>.</p>
    <pre><code>const obj = new MyClass(); // ReferenceError
    class MyClass {
      constructor() {
        this.name = "Class Example";
      }
    }</code></pre>

    <h2>5. Order of Hoisting</h2>
    <p>Hoisting follows a specific order:</p>
    <ol>
        <li>Function declarations are hoisted first.</li>
        <li>Variable declarations are hoisted second.</li>
    </ol>
    <pre><code>console.log(foo()); // Function declaration is hoisted: "I am a function!"
    console.log(bar); // Variable is hoisted: undefined
    function foo() {
      return "I am a function!";
    }
    var bar = "I am a variable";</code></pre>

    <h2>6. Best Practices</h2>
    <ul>
        <li><strong>Use <code>let</code> and <code>const</code>:</strong> They minimize hoisting issues by enforcing the temporal dead zone.</li>
        <li><strong>Declare Variables and Functions Before Usage:</strong> This improves code readability and avoids unexpected behavior.</li>
        <li><strong>Avoid Mixing Function Expressions and Declarations:</strong> Use consistent styles to reduce confusion.</li>
    </ul>

    <h2>Summary Table</h2>
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>Hoisted</th>
                <th>Initialized</th>
                <th>Error Before Use</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>var</code></td>
                <td>Yes</td>
                <td><code>undefined</code></td>
                <td>No</td>
            </tr>
            <tr>
                <td><code>let</code></td>
                <td>Yes</td>
                <td>No (TDZ)</td>
                <td>ReferenceError</td>
            </tr>
            <tr>
                <td><code>const</code></td>
                <td>Yes</td>
                <td>No (TDZ)</td>
                <td>ReferenceError</td>
            </tr>
            <tr>
                <td>Function Declaration</td>
                <td>Yes</td>
                <td>Yes (Full)</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Function Expression</td>
                <td>Yes</td>
                <td>No</td>
                <td>TypeError or Error</td>
            </tr>
            <tr>
                <td>Class Declaration</td>
                <td>Yes</td>
                <td>No</td>
                <td>ReferenceError</td>
            </tr>
        </tbody>
    </table>