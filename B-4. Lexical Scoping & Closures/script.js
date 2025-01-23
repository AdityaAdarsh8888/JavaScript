// For learning closurees, firstly we have to learn about Lexical Scoping


/* Lexical Scoping */

function outer() {

    // console.log(secret);             // This will log 'undefined' because 'secret' is not defined in the outer scope
    
    let username = "Aditya Adarsh"      // Declare a variable 'username' in the outer function scope
    
    function inner() {
    
        let secret = "Secret Code"      // Declare a variable 'secret' in the inner function scope
    
        console.log(`Inner Function `,username);    // Log 'Inner Function Aditya Adarsh' - 'username' is accessed from the outer scope
    }
    
    function innerSecond() {
    
        // console.log(secret);         // This will log 'undefined' because 'secret' is not defined in the innerSecond scope
    
        console.log(`Inner Second Function `,username);   // Log 'Outer Function Aditya Adarsh' - 'username' is accessed from the outer scope
    }
    inner();
    innerSecond();
}
outer();





/* Closures */

function makeFunc() {
    const name = "Aditya Adarsh"
    function displayName() {
        console.log("Display Name: ", name);
    }
    return displayName;                      // Not only displayName function will be returned but also whole lexical scoping will be returned.
}

const myFunc = makeFunc();
myFunc();