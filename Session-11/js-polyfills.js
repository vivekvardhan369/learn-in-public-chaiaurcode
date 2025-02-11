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
console.log(newWords); 

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


const arr4=['Electronis','Fashion','Footware']

const res=arr4.myforEach((value,index) =>{
   console.log(`[${index}] ${value}`) 
})
console.log(res);





