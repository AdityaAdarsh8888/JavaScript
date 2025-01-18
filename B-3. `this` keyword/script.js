console.log(this);     // In browsers: Window object, In node enviroment: {}, an empty object


/* this keyword in object.*/
const user = {
    userName : "Aditya",
    age : 21,
    welcomeMessage : function welcome() {
        console.log(`Welcome, ${this.userName}.`);
        console.log(this);                           // To check what it contains or to know the current context
    }
}

user.welcomeMessage();      // Output: Welcome, Aditya  &  Current context,   {userName:'Aditya', age: 21, welcomeMessage: ƒ}

user.userName = `Aditya Adarsh`;

user.welcomeMessage();      // Output: Welcome, Aditya Adarsh & Current context,{userName: 'Aditya Adarsh', age: 21, welcomeMessage: ƒ}

console.log(this);          // In browsers: Window object, In node enviroment: {}, an empty object



/*this keyword in function*/

function code () {
    console.log(this);                     // Output: Object [global] {...}
}
code();


const one = function () {
    let userName1 = "Aditya Adarsh"
    console.log(this.userName1);           // Output: undefined
}
one();


function two() {
    let userName2 = "Aditya Adarsh"
    console.log(this.userName2);
}
two();                                    // Output: undefined