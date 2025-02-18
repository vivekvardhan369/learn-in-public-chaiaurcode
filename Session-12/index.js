const obj1={
    fname:"vivek",
    lname:"vardhan",
    getFullName: function(){
        return`${this.fname} ${this.lname}`;
        
    },
}
const obj2={
    fname:"piyush",
    lname:"garg",
}

// obj2.__proto__=obj1
// obj1.__proto__=null
//DRY - Do not Repeat Yourself

console.log(obj1.getFullName());
console.log(obj2.getFullName()); 


