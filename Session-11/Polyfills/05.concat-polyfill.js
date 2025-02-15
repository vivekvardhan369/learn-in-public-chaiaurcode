// 4. concat()
// Signature of concat method :-
// 1. Iterates over every element in an array
// 2. Returns a new array by merging two or more arrays

//Polyfill for concat method
if(!Array.prototype.Myconcat){
    Array.prototype.Myconcat=function(...arrs){
        let result=[...this]
        for(let arr of arrs){
            if(Array.isArray(arr)){
                result.push(...arr)
            }else{
                result.push(arr)
            }
        }
        return result
    }
}

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const singleElement = "g";

const arr4 = array1.Myconcat(array2, singleElement);
console.log(arr4);
