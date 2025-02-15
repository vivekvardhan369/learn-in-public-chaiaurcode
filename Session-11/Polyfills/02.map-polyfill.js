// 2. Map method

//Signature of Map function:

//1. It iterates over every element in the array.
//2. It take two Arguments - element,index
//2. Returns a new Array, populated with the results of calling a provided function.

//Polyfill for Map Function

if(!Array.prototype.myMap){
    Array.prototype.myMap=function(userFn){
        const result=[]

        for(let i=0;i<this.length;i++){
            const value=userFn(this[i],i)
            result.push(value)
        }
        return result

    }
}

const arr1=[1,44,9,26,23]
const newArr=arr1.myMap(e=>e*2)
console.log(newArr);
