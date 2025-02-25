// test()

console.log('Age is ',age);

var age = 24

var test=function test(){
    console.log('Testing');
    
}

console.log('Age  is',age);


//Global Execution COntext
//1. Memory Phase  2. Code Phase
// Hoisting : JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of function, variables, classes, or imports to the top of their scope, prior to exevution of the code.

//Temporal Dead Zone(TDZ) : The term to describe the state where variables are un-rechable. The are in the scope, but they aren't declated.
// The `let` and `const` variables exist in the TDZ from the start of their enclosing scope until they are declared.

//Do `let` and `const` can be hoisted?
//  `let` and `const` can be hoisted but they cannot get accessed due to Temporal Dead Zone

console.log('ID is', id);

//Dead Zone
// let id = 25

// id is not defined = if not hoisted it must display this message.
// Cannot access 'id' before initialization = But it's displaying this error, meaning it was hoisted.


