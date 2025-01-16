// Declare variables in the global scope

var a = 10;       // Function-scoped (or globally scoped in this case)
let b = 20;       // Block-scoped variable
const c = 30;     // Block-scoped constant

{
  var a = 100;    // Reassigns the global variable 'b'
  let b = 200;    // New block-scoped variable 'a' (shadows the outer 'a')
  const c = 300;  // New block-scoped constant 'c' (shadows the outer 'c')


  console.log(a); // Output: 100 (global variable modified within the block)
  console.log(b); // Output: 200 (local block-scoped variable)
  console.log(c); // Output: 300 (local block-scoped constant)
}


console.log(a);   // Output: 100 (global variable, modified within the block)
console.log(b);   // Output: 20 (outer block-scoped variable, unaffected by the block)
console.log(c);   // Output: 30 (outer block-scoped constant, unaffected by the block)

console.table([a,b,c]);