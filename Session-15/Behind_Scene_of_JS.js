const obj ={
    personName : 'Vivek',
    greet:function(){
        console.log(`Hello, ${this.personName}`);
        
    }
}


console.log(`Hello from JS`);


// setTimeout(()=>console.log('I am delayed'),0)
setTimeout(obj.greet, 5*1000)

console.log("Bye Bye");

//Call Stack(LIFO) or JavaScript Engine 
// It doesn't wait for any thing.

//SetTimeOut function belongs to browser's property

//Callback Queue (FIFO)
// Browser pushes its code into callback Queue.

//Event Loop is a process that checks anything present in callback Queue continuously and sends to call Stack only if call Stack is empty.

setTimeout(()=>console.log("A 2 S"),10*1000); // min 10 sec to execute max after 3 hrs


    console.log('I am inside loop');
    console.log('I am inside loop');
    console.log('I am inside loop');
    console.log('I am inside loop');
     // upto 3 hrs 

     const obj1 ={
        personName : 'Vivek',
        greet:function(){
            console.log(`Hello, ${this.personName}`);
            
        }
    }

    console.log('HI');

    setTimeout(obj.greet,5*1000) // It doesn't have context, because the call stack had executed leaving no context for greet function

    setTimeout(obj.greet.bind(obj),5*1000) // To solve this we use bind method


    console.log('Bye');

    // Promise => when you doesn't have the value readily available, then we can return a promise, it depends on execution time.
    // PRomise also run by browser in background

    //Micro Task Queue - Promises use them. It has priority over call back queue(Ladies first)
    //Callback Queue / Task Queue

    //What is Starvation?
    //Imagine : If micro tasks keep poping up without allowing other tasks a chance to run, what happens next? Well in this scenario, the Callback Queue won't get an opportunity to execute its tasks. This situation is what we call the starvation of tasks in the callback Queue.

    console.log('hi');

    setTimeout(function timerFn(){
        console.log('hello after 0s');
        
    },0)
    
    Promise.resolve().then(function p1(){
        console.log('1Promise is resolved')
        
        Promise.resolve().then(function p2(){
            console.log('2Promise is resolved')
             
            Promise.resolve().then(function p3(){
                console.log('3Promise is resolved')

                Promise.resolve().then(function p4(){
                    console.log('4Promise is resolved')
                })
            })
        })
    
    })
    
    