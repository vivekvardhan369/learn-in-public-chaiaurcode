Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
    
}

function masalaChai(){}
function lemonChai(){}

function greet(name){
    return `Hello ${name}`
}

// console.log(greet("vivek"));
// greet.describe()
// masalaChai.describe()
// lemonChai.describe()

function add(a,b){  // function declaration
    return a+b
}

const sub= function(a,b){  // function expression
    return a-b
}

const multiple=(a,b)=> a*b  // arrow function


//First-Class Function
//A function can be passed in Parameter [ex: operation]
// A function can also be return from another function [ex: return operation(a,b)]
// A function can also be passed as argument. [ex: (x,y)=>x/y]
function applyOperation(a,b,operation){
    return operation(a,b) //function Signature
}
const result = applyOperation(5,4,(x,y)=>x/y) // A 


//Scope Chaining
function createCounter(){
    let count=0;
    return function (){
        count++;
        return count
    }
}
const counter= createCounter()
console.log(counter());


function onef(){
    let myName="vivek";
}
// console.log(myName);

//IIFE(Immediately Invoked Function Expression)
// Anonymous function are accessed by using IIFE pattern
(function (){
    console.log("vivek");
    
})()
