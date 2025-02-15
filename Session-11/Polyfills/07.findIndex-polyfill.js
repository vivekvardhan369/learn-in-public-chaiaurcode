// 7. FindIndex() method

//Signature of FindIndex()
// 1. It iteretes over every element in array.
// 2. It takes value and index as argument
// 3. It returns the index of the first element in an array that satisfies the provided testing function.
//4.  If no elements satisfy the testing function, -1 is returned.


// Polyfill for FindIndex() method

if(!Array.prototype.myFindIndex){
    Array.prototype.myFindIndex=function(userFn){
        for(let i=0;i<this.length;i++){
            if(userFn(this[i],i)){
                return i
            }
        }
        return -1
    }
}

const array= [5,12,130,8,44]

const  LargerNumber= (value)=> value>13
console.log(LargerNumber);
const LargerNum=array.myFindIndex((value,index)=>value>13);
console.log(LargerNum); 


