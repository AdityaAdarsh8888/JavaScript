// Using Array Literals
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);                          // Output: ["Apple", "Banana", "Cherry"]


// Using the Array Constructor
const numbers = new Array(10, 20, 30);
console.log(numbers);                         // Output: [10, 20, 30]


// Using Array.of() Method
const mixedArray = Array.of(1, "hello", true);
console.log(mixedArray);                      // Output: [1, "hello", true]


// Using Array.from() Method
const stringToArray = Array.from("hello");
console.log(stringToArray); // ["h", "e", "l", "l", "o"];




// Commonly Used Array Methods
// push()
const skills = ["html","css","js"];
console.log(skills);                          // Output: [ 'html', 'css', 'js' ]

let x = skills.push("react","node");

console.log(skills);                          // Output: [ 'html', 'css', 'js', 'react', 'node' ]
console.log(x);                               // Output: 5


// pop()
const fruitsNew = ["Apple","Mango","Banana","Cherry","Orange"]
console.log(fruitsNew);                       // Output: [ 'Apple', 'Mango', 'Banana', 'Cherry', 'Orange' ]

const y = fruitsNew.pop();

console.log(y);                               // Output: Orange
console.log(fruitsNew);                       // Output: [ 'Apple', 'Mango', 'Banana', 'Cherry' ]


// shift()
const games = ["Chess","Badminton","Football","Cricket","Basketball"]
console.log(games);                          // Output: [ 'Chess', 'Badminton', 'Football', 'Cricket', 'Basketball' ]

const a = games.shift();

console.log(a);                              // Output: Chess
console.log(games);                          // Output: [ 'Badminton', 'Football', 'Cricket', 'Basketball' ]


// unshift()
const fruits2 = ["Banana", "Cherry"];
console.log(fruits2);                        // Output: [ 'Banana', 'Cherry' ]

const b = fruits2.unshift("Apple");

console.log(fruits2);                        // Output: ["Apple", "Banana", "Cherry"]
console.log(b);                              // Output: 3