console.log(typeof "Hello");  // Data Type -> String, Literal value -> "Hello"

let num = 80;

console.log(typeof num);   // Data Type -> String, Literal value -> 80

console.log(typeof true);  // Data Type -> Boolean, Literal value -> true

console.log(typeof {welcome:"Hello..."});  // Data Type -> Object, Literal value -> {welcome:"Hello..."}


console.log(typeof [1,2,3]);  // Data Types -> Object, Literal value -> [1,2,3]

a = [1,2,3];
console.log(typeof a);     // Data Types -> Object, Literal value -> [1,2,3], Consider README.md file for more clarification

// To specifically determine if a variable is an array, use the following methods:-

console.log(Array.isArray(a)); // true
// OR
console.log(a instanceof Array); // true
// OR
console.log(a.constructor === Array); // true

function great() {
    return "Vs code is great code editor."
}

console.log(typeof great);         // Data Type -> function
// The literal value of the function great() is the function itself, defined using the function keyword, along with its body and behavior.

// We Can declare a function in this type also, call in the same way as above

const Vscode = () => "Vs code is great code editor.";
console.log(typeof Vscode);