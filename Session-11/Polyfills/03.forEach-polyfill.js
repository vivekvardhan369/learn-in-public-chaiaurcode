//3. forEach() method

//Signature of forEach Method:

// 1. It iterates over every element in the array.
// 2. It take two arguments element and index.
// 3. It executes a provided function once for each array element.

//Polyfill for forEach() function

if(!Array.prototype.myforEach){
    Array.prototype.myforEach= function (userFn){
        for(let i=0;i<this.length;i++){
            userFn(this[i],i)
        }
    }
}


const arr2=['Electronis','Fashion','Footware']

const res=arr2.myforEach((value,index) =>{
   console.log(`[${index}] ${value}`) 
})
console.log(res);
