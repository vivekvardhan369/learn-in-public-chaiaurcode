let chaiTypes= ["Masala Chai" , "Ginger chai","Green Tea", "Leamon Tea"]

console.log(chaiTypes[3]);

console.log(`Total chai Types:${chaiTypes.length}`);

chaiTypes.push('Herbal Tea')

const data= chaiTypes.pop()
console.log(chaiTypes);
console.log(data);

let index = chaiTypes.indexOf("Ginger chai")
console.log(index);

if(index!==-1){
    del=chaiTypes.splice(index,1,"Black Tea")
}
console.log(del);


console.log(chaiTypes);

chaiTypes.forEach((chai,index)=>{
    console.log(`${index+1}:${chai}`);
    
})

let moreChaiTypes =[ "Oolong Tea","White Tea"]
let allChaiTypes = chaiTypes.concat(moreChaiTypes)
console.log(allChaiTypes);

let newChaiTypes = [...chaiTypes,"Chamolina Tea"]
console.log(newChaiTypes);

// Object

let chaiRecipe={
    name:"Masala Chai",
    ingredients:{
        teaLeaves:"Assam Tea",
        milk:"Full Cream Milk",
        sugar:"Brown Sugar",
        spices:["DaalChini","Ginger"]
    },
    instruction:"Boil water, add tea leaves, milk, sugar and spices"
};


console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction: "Boil water,add tea leaves ,milk , sugar, spices with love"

};

console.log(updatedChaiRecepie);

// mapping can be done only in Objects
let {name, ingredients} = chaiRecipe

// 
let [firstChai , secondChai] = chaiTypes

console.log(name);



