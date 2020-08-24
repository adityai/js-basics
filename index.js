// named function with twp parameters
function sum(a, b) {
    return a + b
}
console.log(sum(5, 10));

// arrow function - parameters followed by => followed by function body
let sum2 = (a, b) => {
    return a + b
}
console.log(sum2(5, 10));

// simpler arrow function with in-line function body
let sum3 = (a, b) => a + b
console.log(sum3(5, 10))

// named function with one parameter
function isPositive(number) {
    return number >= 0
}
console.log("5 is positive:", isPositive(5))

let isPositive2 = number => number >= 0

console.log("5 is positive: ", isPositive2(5))

// named function without parameters
function randomNumber() {
    return Math.random()
}
console.log("Random number: ", randomNumber())
let randomNumber2 = () => {
    return Math.random()
}
console.log("Random number: ", randomNumber2());

// anonymous function
// document.addEventListener('click', function () {
//     console.log('Click');
// })
