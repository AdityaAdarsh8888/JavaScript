/* First Example */

function x() {                               // Here x is the call back function
    console.log("x is a call back function");
}

function y(x) {                              // Here y is the Higher Order Function
    x();
}



/* Second Example */
// How we usually calculte the area of the circles if radius is given

const radius = [3,4,5,6];

const calculateArea = function (radius) {
    const output =[];
    for (let i = 0; i < radius.length ; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

console.log("Area of the circle: ",calculateArea(radius));


const calculateCircumfrence = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log("Circumfrence of the circle: ",calculateCircumfrence(radius));


const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log("Diameter of the circle: ",calculateDiameter(radius));


// Note: There is problem here i.e.,  a lot of code is repeating and as we known there is a principle in software engineering i.e.,
// DRY Principle :- Don't Repeat Yourself, so we have to write optimized code, which is done in script2.js file