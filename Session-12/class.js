class Person{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }

    getfullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1= new Person('Piyush', 'Garg')
const p2= new Person ('Vivek','Vardhan')

// p1.___proto__=Person.prototype

// console.log(p1.fname)
// console.log(p2.getfullName())

// Interviewr Question:  A ke properties B mei lake dikao without using extends keyword
class A{
    funInsideA(){}
}

class B {
    funInsideB(){}
}

Object.setPrototypeOf(B.prototype, A.prototype);


const p=new B()
console.log(p.funInsideB());

console.log(p.funInsideA());

