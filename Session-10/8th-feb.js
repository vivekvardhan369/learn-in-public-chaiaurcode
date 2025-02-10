// Problem: Create an array containing different types of teas.

const teas= ["Green Tea","Oolong Tea","Herbal Tea","Iced Tea","Black Tea"]

// Problem: Add "Chamomile Tea" to the existing list of teas

teas.push("Chamomile Tea")
console.log(teas);

// Problem: Remove "Green Tea" from the list of teas
const index= teas.indexOf("Green Tea")
if(index>-1){
    teas.splice(index,1)
}
console.log(teas);


// Problem: Filter the list to only include teas that are caffeinated.
const cagginatedTea=teas.filter(tea=> tea !== "Herbal Tea")
console.log(cagginatedTea);


// Problem:  Sort the teas alphabetically.
teas.sort()
console.log(teas);

let newA=["🍳","🥚","🐔"]
console.log(newA.sort());


// Problem: Use a for loop to print each type of tea in the array.
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").

let caffeinatedMyTeas=0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!=="Herbal Tea")
        caffeinatedMyTeas++
}
console.log(caffeinatedMyTeas)


// Problem : Use a for loop to create a new array with all tea names in uppercase.
const upperCaseTeas=[]
for(let i=0;i<teas.length;i++){
    upperCaseTeas.push(teas[i].toUpperCase())
}
console.log(upperCaseTeas);


// Problem: Use a for loop to find the tea name with the most characters.
let largest=""
for(let i=0;i<teas.length;i++){
    if(teas[i].length>largest.length){
        largest= teas[i]
    }
    
}
console.log(largest);


// Problem: Use a for loop to reverse the orser of teas in the array.
let reversedArray=[]
for(let i=teas.length-1;i>=0;i--){
    reversedArray.push(teas[i])
}
console.log(reversedArray);


