// 4. at()
// Signature of at method :-
// 1. Iterates over every element in an array
// 2. Returns the element present at a specified index

//Polyfill for At() method
if(!Array.prototype.myAt){
    Array.prototype.myAt=function(index){
        for(let i=0;i<this.length;i++){
            if(i==index){
                return this[i]
            }
        }

    }
}

const arr3 = [5,15,589,56,78]
let index=3
const res=console.log(arr3.myAt(index));
