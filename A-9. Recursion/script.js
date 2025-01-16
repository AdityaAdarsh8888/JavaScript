/*Concept - 1*/

function hello() {
    console.log("Hello....");
    // hello()                   // Run several times then, RangeError: Maximum call stack size exceeded
}

hello();


console.log("***************************");
/*Concept - 2 (Base condition)*/
// function -> function -> function -> function -> function -> function -> base conditon

function coding(num) {
    if (num === 0) {
        console.log("I have completed the project.");
        return;                                       // Close the recursion loop

    } else {
        console.log("I am coding.");
        coding(num-1);
        
    }
}

coding(5);                       // Given value of num as 5


console.log("Similar as above.");

function movie(n)
{
    console.log(`Person: ${n}`)
    // Base Case  
    if(n === 1)
    {
        return true;
    }

    return movie(n-1)
}

console.log("Response:",movie(5))



console.log("********************************");

/* Factioria => 5! -> 5*4*3*2*1 -> 5*4! -> 5*(5-1)! */
/* n! -> n*(n-1)*(n-2)*...*1 -> n*(n-1)! */

function factorial(n) {
    if (n === 1) {                               // Base case: Factorial of 1 is 1
      return 1;
    } else {
      let fact = n * factorial(n - 1);           // Recursive step: Factorial of n is n * factorial(n-1)
      return fact;
    }
}
  
console.log(factorial(5)); // Output: 120



console.log("*******************************");

/* write a function that prints the sum of first 100 natural numbers. */

function findSum(){
    let sum = 0;
    for (let i = 1; i<=100; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(findSum());



console.log("*****************************");

/*Write a function for calcuting sum betwenn two numbers including them.*/

function addFun(start, end) {
    let add = 0;
    for (let i = start; i <= end; i++){
        add = add + i;
    }
    return add;
}

console.log(addFun(1, 100));




console.log("****************************");

/*Write a function that calculates power*/
// There are several ways to calculate power
/* First Way */

function findPower(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(findPower(2,3));

/* Second Way */

function findPower1(base, exponent) {
    return base ** exponent;
}
console.log(findPower1(2,3));

/* Third Way */

function findPower2(base, exponent) {
    pow = 1;
    for (let i = 1; i <= exponent; i++){
        pow = pow * base;
    }
    return pow;
}

console.log(findPower2(2,3));
