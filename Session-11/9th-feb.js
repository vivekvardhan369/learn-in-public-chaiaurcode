// Problem: Create an Object representing a type of tea with properties for name, type,and caffine content.
const teas={
    name:"Leamon Tea",
    type:"Green",
    caffine: "low"

 }
 console.log(teas);
 

// Problem: Access and print the name and type of properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);


// Problem: Add a new property origin to the tea object.
teas.origin= "Aaraku"
console.log(teas);
//The obj is const variable, Does it allow new properties?
// Reason: In this example, we add a new property origin to the teas object. The const keyword prevents us from reassigning teas to a different object, but it does not prevent us from modifying the existing object.
//This is because the const keyword only ensures that the reference to the object remains constant, not the content of the object itself.


// Problem : Change the caffine level of the tea object to "Medium"
teas.caffine="Medium"
console.log(teas.caffine);


// Problem : Remove the "type" property from the tea object
delete teas.type
console.log(teas);



// Problem : Check if the tea object has a propery origin.
console.log("origin" in teas);


//Problem : Use a for...in loop to print all properties of the tea object.
for(let key in teas){
    console.log(`${key}=>${teas[key]}`);
    
}

// Problem: Create a nested object representing different types of teas and their properties.
let teaTypes = {
        greentea:{
            Name:"Green Tea",
            caffine: "low",
            type:"green",
            obj:{
                size:45,
                price:5100
            }
        },
        blacktea:{
            Name:"black Tea",
            caffine: "low",
            type:"caffine"
        }
    
}

// Problem : Create a copy of the teaTypes object(Deep).

const teaCopy= JSON.stringify(teaTypes)
let newCopy = JSON.parse(teaCopy)

newCopy.blacktea.Name="white Tea"
newCopy.greentea.obj.size=4500

console.log(teaTypes);
console.log(newCopy);



// Problem: Add a custom method to the tea object that returns a description string.

const teas1={
    name:"Leamon Tea",
    type:"Green",
    caffine: "low",
    getDescription: function() {
        return `${this.name} is a ${this.type} tea with ${this.caffine} caffeine content.`;
    }
}
console.log(teas1.getDescription());
 



// Problem: Merge two objects representing different teas into one.
const tea1 = {
    name: "Chamomile Tea",
    type: "Herbal",
    caffine: "None"
};

const tea2 = {
    name: "Earl Grey",
    type: "Black",
    caffine: "High"
};

const mergedTea = { ...tea1, ...tea2 };
console.log(mergedTea);


