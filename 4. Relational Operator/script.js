console.log("a" >= 10 );   // Output: false
console.log("a" <= 20);    // Output: false

const n1="0x10";           // n1 is a string representation of a hexadecimal number.
const n2=16;               // n2 is a number.
console.log(n1==n2);       // Output: true

/*
-> The unary + operator attempts to convert its operand into a number.
-> If the operand is a valid numeric string (e.g., "123"), it converts it to a number.
-> If the operand is not a valid numeric string (e.g., "abc"), the conversion results in NaN (Not-a-Number).
*/
const x=+"abc";
const y=+"abc";            // "abc" is not a valid numeric string, so +"abc" results in NaN for both x and y.
console.log(x === y);      // Output: false 

var p=null;
var q=null;
console.log(p === q)       // Output: true

let a = "";  // a is an empty string.
let b = [];  // b is an empty array.

console.log(a == b);  // Uses loose equality (==).
console.log(a === b); // Uses strict equality (===).