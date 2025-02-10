// Object is used to keep all related data and logic together.
// Technically object is a key-value pair.
// Key is always string type and value can be any type.

const person={
    firstName:"Vivek",
    lastName:"Vardhan",
    hobbies:["Reading","Coding","Watching"],
    isMarries:false,
    getFullName: function(){
        return "Vivek Vardhan"
    },
    address:{
        HNo: "5-5-48",
        street:1,
        CountryCode:+91,
        state:"Telangana"


    }

}

console.log(person.address.state);


// Memory
//Pass by Ref vs Pass by Value

let fname="hitesh"
let fname2=fname

console.log(fname2);

fname2="piyush"
console.log(fname2); // piyush
console.log(fname); // hitesh


// let p1 ={
//     fname:"vivek",
//     lname:"vardhan",
//     address:{
//         hn:128,
//         street:1
//     }
// }
// let p2={
//     fname:p1.fname,
//      lname:p1.lname,
//      address:{
//           hn:p1.hn,
//           street:p1.street
//      }
// }

// p2.fname="Piyush"
// p2.lname="Garg"
// p2.address.street="12458"

// console.log(p1); // {fname:"vivek", lname:vardhan, address:{hn:128,street:12458}}
// console.log(p2); // {fname:"piyush", lname:"Garg", address:{hn:128,street:12458}}

// Trade Off: You have to give something inorder to achive something.
// Garbage Collector: It automatically clears the memory ref if no data is stored.
//Memory Leak: A variable which points to such variable which memory is already cleared. This variable might have garbage value or values of some other data.

//Shallow Copy (...)
// let p11 ={
//     fname:"vivek",
//     lname:"vardhan",
//     address:{
//         hn:128,
//         street:1
//     }
// }
// let p2={
//     ...p11 // Spread Operator
// }

// p22.fname="Piyush"
// p22.lname="Garg"
// p22.address.street="12"

// console.log(p11); {fname:"vivek", lname:vardhan, address:{hn:128,street:12}}
// console.log(p22);  {fname:"piyush", lname:"Garg", address:{hn:128,street:12}}

// Deep Copy => Converting Obj into String > later String to OBJ //Serialization and DeSerialization

//Teloport
// 🧑‍⚕️ -> Serilize(📩Binary)  =====>  (Binary📤) DeSerialize 🧑‍⚕️

//Method 1 -Deep copy
// let p111 ={
//     fname:"vivek",
//     lname:"vardhan",
//     address:{
//         hn:128,
//         street:1
//     }
// }

// let p222={
//     ...p111,
//     address:{
//         ...p111.address
//     }
// }
// p222.fname="Piyush"
// p222.lname="Garg"
// p222.address.hn="892"
// p222.address.street="2"

// console.log(p111); {fname:"piyush", lname:"Garg", address:{hn:128,street:1}}
// console.log(p222); {fname:"piyush", lname:"Garg", address:{hn:892,street:2}}


//Method -2 (Serialization and DeSerilization)

// Converting Non-Primitive to Primitive and then copy then convert into Non-Primitive
// function Obj(Non-Prim) -> String(Prim) -> Copy to new Variable -> Obj(Non-Prim)

// let p111 ={
//     fname:"vivek",
//     lname:"vardhan",
//     address:{
//         hn:128,
//         street:1
//     }
// }
// const p111KaString = JSON.stringify(p111)
// console.log(p111KaString);


// let p222= JSON.parse(p111KaString)

// p222.fname="Piyush"
// p222.lname="Garg"
// p222.address.hn="892"
// p222.address.street="2"

// console.log(p111);
// console.log(p222);

let p111 ={
    fname:"vivek",
    lname:"vardhan",
    address:{
        hn:128,
        street:1
    }
}

const p1KaString=JSON.stringify(p111)
let p2= JSON.parse(p1KaString)

p2.fname="vivek"
p2.lname="vardhan"
p2.address.hn=7895
p2.address.street=7

console.log(p111);
console.log(p2);


