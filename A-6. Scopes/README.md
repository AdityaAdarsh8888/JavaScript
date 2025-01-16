<h1>JavaScript Scopes</h1>

<h2>1. Introduction to Scope</h2>
<p><strong>Scope</strong> defines the accessibility of variables, objects, and functions in a particular part of the code. It determines where variables can be used in your code.</p>

<h2>2. Types of Scopes in JavaScript</h2>

<h3>a. Global Scope</h3>
<ul>
  <li>Variables declared outside any function or block have global scope.</li>
  <li>They are accessible from anywhere in the code.</li>
  <li><strong>Global variables</strong> are properties of the <code>window</code> object in browsers.</li>
</ul>
<pre>
<code>
let globalVar = "I'm global";

function displayGlobal() {
  console.log(globalVar); // Accessible
}

displayGlobal();
console.log(globalVar); // Accessible
</code>
</pre>

<h3>b. Local Scope</h3>
<ul>
  <li>Variables declared within a function have local scope.</li>
  <li>These variables are accessible only within the function where they are defined.</li>
</ul>
<pre>
<code>
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible
}

myFunction();
console.log(localVar); // Error: localVar is not defined
</code>
</pre>

<h3>c. Block Scope (ES6+)</h3>
<ul>
  <li>Variables declared with <code>let</code> or <code>const</code> inside a block (<code>{}</code>) are accessible only within that block.</li>
  <li><code>var</code> does not have block scope—it is function-scoped.</li>
</ul>
<pre>
<code>
{
  let blockScoped = "I'm block-scoped";
  console.log(blockScoped); // Accessible
}
console.log(blockScoped); // Error: blockScoped is not defined
</code>
</pre>
<p><strong>With <code>var</code>:</strong></p>
<pre>
<code>
{
  var functionScoped = "I'm function-scoped";
  console.log(functionScoped); // Accessible
}
console.log(functionScoped); // Accessible
</code>
</pre>

<h2>3. Lexical Scope</h2>
<ul>
  <li>Lexical scope (or static scope) means that the scope of a variable is determined by its position in the source code.</li>
  <li>Inner functions can access variables from their outer functions.</li>
</ul>
<pre>
<code>
function outer() {
  let outerVar = "I'm outer";
  
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  
  inner();
}
outer();
</code>
</pre>

<h2>4. Function Scope</h2>
<ul>
  <li>Variables declared with <code>var</code> inside a function are scoped to that function.</li>
  <li>They are not accessible outside the function.</li>
</ul>
<pre>
<code>
function myFunction() {
  var functionVar = "I'm function-scoped";
  console.log(functionVar); // Accessible
}
myFunction();
console.log(functionVar); // Error: functionVar is not defined
</code>
</pre>