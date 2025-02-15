//6. Find() Method
// Signature of Find() method
//1. Iterates over every element in array.
//2. It take two arguments value and index.
//3. It returns the first element that satisfies the provided testing function.

//Polyfill for Find method

if(!Array.prototype.MyFind){
    Array.prototype.MyFind=function(userFn){

        for(let i=0;i<this.length;i++){
            if(userFn(this[i],i)){
                return this[i]
            }
        }
        return undefined
    }
}

let colors = [
    "Red",
    "Blue",
    "Black",
    "Yellow",
    "Orange",
    "Magenta",
    "Cyan",
    "Purple",
    "Violet",
    "Green",
  ];

  const res=colors.MyFind((color,index)=>color==="Yellow")
  console.log(res);
