#!/usr/bin/env node

// This part of the code defines a function
function multiply(a,b) { 
    return a * b
}

function add(a,b) { 
    return a + b
}

function subtract(a,b) { 
    return a - b
}

function divide(a,b) { 
    return a / b
}

console.log("I'm going use the calculator functions to multiply 5 and 6")
var m = multiply(5,6)
console.log(m)

console.log("I'm going use the calculator functions to add 6 and 5")
var a = add(6,5)
console.log(a)

console.log("I'm going use the calculator functions to subtract 6 and 5")
var s = subtract(6,5)
console.log(s)

console.log("I'm going use the calculator functions to divide 6 by 5")
var d = divide(6,5)
console.log(d)
