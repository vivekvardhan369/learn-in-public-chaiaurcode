function prepareChai(type){
    let res= type.toLowerCase()
    if(!res) return
    if(res==="masala chai"){
        console.log("Adding spices to the chai");
        
    }else{
        console.log("Preparing regular chai");
        
    }
}

console.log(prepareChai("masala chai"));


/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.

*/

function calculateTotal(amount){
    // if(amount>1000){
    //     return amount * 0.9
    // }
    // return amount
    return amount>1000 ? amount * 0.9 : amount

}


console.log(calculateTotal(1200));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.
*/

function trafficLight(color){
    switch(color){
        case "red": 
            console.log("Stop");
        break;
        case "Yello": 
            console.log("Slow down");
        break;
        case "green": 
            console.log("Go");
        break;
        default:
            console.log("chalan kaar do");
            
    }
}
console.log(trafficLight("Yello"));

function checktruthyValur(value){
    if(value){
        console.log("Truthy");
        
    }else{
        console.log("Falsy");
        
    }
}

// console.log(checktruthyValur(1));
// console.log(checktruthyValur(0));
// console.log(checktruthyValur("vivek"));
// console.log(checktruthyValur(""));
console.log(checktruthyValur([]));
console.log(checktruthyValur([1,22]));

function login(username,password){
    if(usename === "admin" && (password==="123" || loginOtp==="789")){
        console.log("Login successful");
        
    }else{
        console.log("Invalid Credentials");
        
    }
}


