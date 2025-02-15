// 3. forEach() method

// Signature
// 1. It iterates over every element on the array,
// 2. It takes two arguments element, index
// 3. It calls a provided callbackFn once for each element in ascending-index order.
// 4. There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

//Polyfill for forEach() method
if(!Array.prototype.myForEach){
    Array.prototype.myForEach= function (userFn){
        for(let i=0;i<this.length;i++){
            userFn(this[i],i)
        }
    }
}


let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas=[]
teaCollection.myForEach((tea)=>{
    if(tea==="chai"){
        return
    }
    availableTeas.push(tea)

})
console.log(availableTeas);
