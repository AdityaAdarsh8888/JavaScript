const welcome = () => {
    console.log("Welcome User");  
}
welcome();


const welcome1 = (name) => {
    console.log(`Welcome, ${name}`);
}
welcome1(`Aditya Adarsh`);               // Output: Welcome, Aditya Adarsh


const add = (num1, num2) =>{
    return num1+num2;
}
console.log(add(4,2));                   // Output: 6


const add1 = (num1, num2) => num1 + num2;
console.log(add1(6,2));                  // Output: 8


const multiply = (a,b) => a * b;
console.log(multiply(4,6));              // Output: 24


const adding = (a, b) => {
    console.log(`Sum of ${a} and ${b} is:`);
    return a+b;
}
console.log(adding(4, 6));               // Output: Sum of 4 and 6 is: \n 10