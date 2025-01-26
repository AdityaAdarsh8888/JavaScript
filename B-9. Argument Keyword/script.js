function sum()
{
   console.log(arguments);         // Output: [Arguments] { '0': 10, '1': 20, '2': 30 }
   console.log(arguments[0]);      // Output: 10
   console.log(arguments[1]);      // Output: 20
   console.log(arguments[2]);      // Output: 30
   console.log(arguments[3]);      // Output: undefined
   
   console.log(arguments.callee);  // Output: [Function: sum], The arguments.callee data property contains the currently executing function that the arguments belong to.
}

sum(10,20,30)


function add(a,b){
    console.log(arguments);       // Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    return a+b ;
}

console.log(add(1,2,3,4));        // Output: 3



// let total = 0                 
// A global variable total is declared and initialized to 0. This variable will be used to store the sum of all arguments. By using this output will be 10, 110, so we will decalre it inside the function

function addNew() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];   
    }
    return total;
};

console.log(addNew(1,2,3,4));     // Output: 10
console.log(addNew(10,20,30,40)); // Output: 100



// It will work same
const addNew1 = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];   
    }
    return total;
};

console.log(addNew1(1,2,3,4));     // Output: 10
console.log(addNew1(10,20,30,40)); // Output: 100



// Arrow function will not work with arguments
const addNew2 = () => {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];   
    }
    return total;
};

console.log(addNew2(1,2,3,4));     // Output: arguments is not defined
console.log(addNew2(10,20,30,40));