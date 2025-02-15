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

const newWords = words.myFilter(value => value.length > 6);
console.log(newWords); 
