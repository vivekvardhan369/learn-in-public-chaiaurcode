let name = "vivek"
const pi=3.14

let number = 44 // Number
let text ="vivek" //  String
let isTrue = false // Boolean
let nothing = null // Object
let undefinedVar = undefined // undefined
let symbolVar = Symbol() // Symbol

let person ={
    name:"vivek",
    age:23,
    isStudent: false
};

let num = "42"
// let convertedNum = Number(num) // Standard Way of Converstion(Production Level Recc)
//  let convertedNum = +num
 let convertedNum = parseInt(num)


console.log(convertedNum);
console.log(typeof convertedNum);

let str=123
let convertedString = String(str)
console.log(convertedString);

let a = 10
let b = 10

let sum = a + b
let difference = a - b
let product = a * b
let quotient = a / b
let reminder = a % b
let power = a ** b



let x = 5
let y = 10

console.log(x == y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);


console.log(Math.max(5,12,15));
console.log(Math.min(5,12,15));

//Generate a number between 1 to 6
console.log(Math.floor(Math.random(1)*5));

let firstName="vivek"
let lastName="vardhan"

let fullName = firstName + " " + lastName

let message = "HEllo World"

console.log(message.toUpperCase());
console.log(message.indexOf("o"));
console.log(message.slice(0,5));

//template literals

let myName ="vivek"
let greeting = `Hello ${myName}`
console.log(greeting);
