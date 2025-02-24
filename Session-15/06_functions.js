function greet(name){
    console.log(`Hello ${name}`);
    
}

greet('vivek')
greet('rahul')

let globalVar = 'I am global'
function modifyGlobal(){
    globalVar = 'I modified'
    let blockScopedVar = 'Iam blocked Scope'
    console.log(blockScopedVar);
    
}

modifyGlobal()

// let config = function(){
//     let settings={
//         theme:"dark"
//     }
//     return settings
// }() //IIFE
// (()=>{})() // IIFE

let person1 ={
    name:"Ravi",
    greet : function(){
        console.log(`Hello ${this.name}`); //this=describes context
        
    }
}

let person2={
    name:"hitesh"
}
// By using Call method
person1.greet.call(person2) // o/p: Hello hitesh
person1.greet.call({name:"Rahul"}) // o/p: Hello Rahul

// By using Bind method
const bindGreet=person1.greet.bind(person2) // bind return a new function
console.log(bindGreet());  // o/p: Hello hitesh








