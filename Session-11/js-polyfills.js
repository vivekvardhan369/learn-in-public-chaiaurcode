// Machine Coding Round
// Polyfill =>Fallback/Backup Function

const arr=[1,12,5,25,65]

//1. Filter Method

// signature of filter function :-
// 1. It iterates over every element in the array.
// 2. It takes two arguements - element and index.
// 3. It returns a new array if a condition is satisfied.

// Polyfill for Filter Method
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i], i)) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const newWords = words.myFilter(value => value.length > 6);
// console.log(newWords); 

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
// console.log(newArr);

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

// const res=arr2.myforEach((value,index) =>{
//    console.log(`[${index}] ${value}`) 
// })
// console.log(res);

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








