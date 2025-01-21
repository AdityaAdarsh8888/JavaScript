// Second Example in optimized code
// 1. Extract only the logics out
// 2. Try to make the function genric


console.log("Optimized Code for the same above example.");

const radiusAgain = [3,4,5,6];

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radiusAgain.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}



const area = function (radiusAgain) {
    return Math.PI * Math.pow(radiusAgain,2);
}
const areas = calculate(radiusAgain, area);


const circumfrence = function (radiusAgain) {
    return 2 * Math.PI * radiusAgain;
}
const circumfrences = calculate(radiusAgain, circumfrence)


const diameter = function (radiusAgain) {
    console.log(" Daiameter of the circle with new radius: ");
    return 2 * radiusAgain;
}
const diameters = calculate(radiusAgain, diameter);


console.log("Areas of the circles : ", areas);
console.log("Circumfrences of the circles : ", circumfrences);
console.log("Diameters of the circles : ", diameters);