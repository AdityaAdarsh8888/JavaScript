var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER a: ", a);      // Output: 10
    
}

console.log("OUTER a: ", a);         // Output: 300
console.log("OUTER c: ", c);         // Output: 300
// console.log("OUTER b: ", b);      // Output: b is not defined


/*****************************/
console.log("**********************************");

function one(){
    const username = "Aditya Adarsh "

    function two(){
        const website = "GitHub"
        console.log(username + website);
    }

    two()

    // console.log(website);      // Output: website is not defined

}

one()                             // Output: Aditya Adarsh GitHub


/*******************************************/
console.log("**********************************");


if (true) {
    const username = "Aditya"
    if (username === "Aditya") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);     // Output: website is not defined
}

// console.log(username);        // Output: username is not defined