# There are three types of Variables
1. var    <br>
2. let    <br>
3. const  <br>

<h2> Var </h2>         <br>
1. Variable declared with var goes to global scope.                 <br>
2. We can redeclare variable with same name in same scope.          <br>
3. We can update the value of variable.                             <br>
4. We can declare variable without initialization.                  <br>
5. Variable declared with var , can be hoisted.                     <br>
6. Variable declared inside block , will go to global scope.        <br>
7. Variable declared inside function , will not go to global scope. It will be accessible inside function only.  <br>

<h2> Let </h2>         <br>
1. Variable declared with let is block scoped.                      <br>
2. We cannot redeclare variable with same name in same scope.       <br>
3. We can update the value of variable.                             <br>
4. We can declare variable using let without initialization. But JS engine will keep that memory block uninitialized (empty) until JS engine reads declaration statement in execution phase.              <br>
5. Because let variable is uninitialized (empty) in variable phase, it belongs to Temporal Dead Zone.            <br>
6. The variable declared using let does not belongs to global scope, we cannot access them with the help of window variable.   <br>
7. The variable declared using let is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ).                 <br>
8. Variable declared inside function will be accessible inside function only.       <br>

<h2> Const </h2>       <br>
1. Variable declared with const is block scope.                     <br>
2. We cannot redeclare variable with same name in same scope.       <br>
3. The value of variable can not be modified.                       <br>
4. We can not declare const without initialization.                 <br>
5. The variable declared using const is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ).                 <br>
6. The variable declared using const inside block, does not belongs to global scope we cannot use them with the help of window.     <br>
7. Variable declared inside function will be accessible inside function only.       <br>



<h2>Note:-</h2>
Prefer not to use "var" because of issue in block scope and functional scope. 